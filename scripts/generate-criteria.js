const fs = require("fs").promises;
const md = require('markdown-it')({ html: true }).use(require('markdown-it-attrs'))
const cheerio = require('cheerio')
const TurndownService = require('turndown')
const turndownService = new TurndownService()

const WCAG_VERSION = 'WCAG 2.1'
const EN_VERSION = 'EN 301 549 V3.2.1 (2021-03)'

function toMd(html) {
	if (html !== undefined) {
		return turndownService.turndown(html.trim())
	} else {
		return;
	}
}

async function generateCriteria(lang) {
	const CRITERIA_SOURCE = `${__dirname}/../${lang}/referentiel-technique.md`;
	const CRITERIA_DESTINATION = `${__dirname}/../${lang}/json/criteres.json`;

	try {
	  let topics = []
  
	  const data = await fs.readFile(`${CRITERIA_SOURCE}`, "utf-8");
  
	  const body = md.render(data)
	  //fs.writeFile('./json/out.html', body);
	  const $ = cheerio.load('<div class="root">'+body+'<h3>End</h3></div>')
	  let firstTopic = true
	  let firstCrit = true
	  let topic = {"criteria": []}
	  let crit = {criterium: {tests: {}}}
	  let test = []
	  let firstTest = true
	  let testNum = '1'
	  let recordCp = false
	  let particularCases = []
	  $('div.root>*').each((i,e) => {
		  let tagname = $(e).prop('tagName').toLowerCase()
		  if (tagname == 'h3') {
			  if (firstTopic) {
				  firstTopic = false
			  } else {
				  topic.criteria.push(crit)
				  crit = {criterium: {tests: {}}}
				  topics.push(topic)
				  topic = {"criteria": []}
				  firstCrit = true
			  }
			  let tmpTitle = $(e).html()
			  topic.topic = toMd(tmpTitle.split(':')[1])
			  topic.number = parseInt($('<div>'+tmpTitle+'<div>')?.find('a')?.attr('href')?.replace('#topic-', ''))
		  } else if (tagname == 'h4') {
			if (firstCrit) {
				firstCrit = false
			} else {
				topic.criteria.push(crit)
				crit = {criterium: {tests: {}}}
			}
			let tmpTitle = $(e).html()
			crit.criterium.number = parseInt($('<div>'+tmpTitle+'<div>').find('a').attr('href').replace(/#crit-.*-/, ''))
			$(e).find('a:first-child').remove()
			tmpTitle = $(e).html().trim()
			const re = /\[([A]{1,2})\]\s(.*)$/
			const matchs = tmpTitle.match(re)
			crit.criterium.title = toMd(matchs[2])
			crit.criterium.level = matchs[1]
		  } else if (tagname == 'h5') {
			if (firstTest == false) {
				firstTest = true
				crit.criterium.tests[testNum] = test
				test = []
				testNum = 1
			}
			if ($(e).text().match(/^Cas\sparticulier/)) {
				recordCp = true
            } else if ($(e).attr('class')?.includes('methodo')) {
				recordCp = false
				if (particularCases.length !== 0) {
					crit.criterium.particularCases = particularCases
				}
				particularCases = []
            } else if ($(e).attr('class')?.includes('mapping')) {
				// get next UL and extract the content
				crit.criterium.references = {}
				$(e).next('ul').find('li').each((i,f) => {
					let standard =$(f).text().split(':').map(g => g.trim())[0]
					let label = (standard == WCAG_VERSION)?'wcag':'norm'
					let sc = []
					if (label == 'wcag') {
						$(f).find('a').each((j,g) => {
							sc.push($(g).text())
						})
					} else {
						$(f).find('em').each((j,g) => {
							$(g).text().split(/,\s(?=\d)/).map(h => sc.push(h.trim()))
						})
					}
					if (sc.length !== 0) {
						crit.criterium.references[label] = sc
					}

				})
            }
		  } else if (tagname == 'p') {
			let testId = $(e).attr('id')
			if (testId?.substr(0,4) == 'test') { // we are in a test
				if (firstTest) {
					firstTest = false
				} else {
					crit.criterium.tests[testNum] = test
					test = []
				}
				testNum = testId?.match(/test-\d{1,2}-\d{1,2}-(\d{1,2})/)[1]
				$(e).find('strong').remove()
				test.push(toMd($(e).html()))
			} else if (recordCp) {
				particularCases.push(toMd($(e).html()))
			} else {
				//console.log('warning: '+testId+ $(e).prop('outerHTML'))
			}
		  } else if (tagname == 'ol') {
			if (recordCp) {
				let items = []
				$(e).find('li').each((i,u) => {
					items.push(toMd($(u).html()))
				})
				particularCases.push({'ol': items})
			}
		  } else if (tagname == 'ul') {
			if ($(e).find('li[id]').length !== 0) { // we have more than one test
				$(e).find('li[id]').each((j,f) => {
					testNum = $(f).attr('id')?.match(/test-\d{1,2}-\d{1,2}-(\d{1,2})/)[1]
					$(f).find('strong').remove()
					let ul = $(f).find('ul')

					if (ul.length !== 0) {
						$(ul[0]).find('li').each((k, g) => {
							test.push(toMd($(g).html()))
						})
					}
					$(f).find('ul').remove()
					test.unshift(toMd($(f).html()))
					crit.criterium.tests[testNum] = test
					test = []
				})
			} else {
				if (firstTest == false) {
					$(e).find('li').each((i,f) => {
						test.push(toMd($(f).html()))
					})
				} else if (recordCp) {
					let items = []
					$(e).find('li').each((i,u) => {
						items.push(toMd($(u).html()))
					})
					particularCases.push({'ul': items})
				}
			}
		  } else {
			  //console.log($(e).prop('outerHTML'))
		  }
	  })
  
	  const result = {wcag: {version: 2.1}, en301549: {version: "3.2.1"}, topics}


	  //console.log(JSON.stringify(result, null, 2).replaceAll(/\\n/g, ' '))

	  // Remove line breaks (\n) and create JSON file
	  let file = JSON.stringify(result, null, 2).replaceAll(/\\n/g, ' ')
	  fs.writeFile(CRITERIA_DESTINATION, file);
  
	  console.log(`✅ Criteria successfully generated.`);
  
	} catch (err) {
	  console.error(`❌ An error occured while generating criteria: ${err}`);
	}
  }
generateCriteria('fr');
generateCriteria('en');