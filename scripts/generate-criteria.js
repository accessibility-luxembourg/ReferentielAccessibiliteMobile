const fs = require("fs").promises;
const md = require('markdown-it')({ html: true }).use(require('markdown-it-attrs'))
const cheerio = require('cheerio')
const TurndownService = require('turndown')
const turndownService = new TurndownService()

const CRITERIA_SOURCE = "./referentiel-technique.md";
const CRITERIA_DESTINATION = "./json/criteres.json";

function toMd(html) {
	if (html !== undefined) {
		return turndownService.turndown(html.trim())
	} else {
		return;
	}
}

async function generateCriteria() {
	// try {
	  let topics = []
  
	  const data = await fs.readFile(`${CRITERIA_SOURCE}`, "utf-8");
  
	  const body = md.render(data)
	  //fs.writeFile('./json/out.html', body);
	  const $ = cheerio.load('<div class="root">'+body+'<h3>End</h3></div>')
	  let firstTopic = true
	  let firstCrit = true
	  let topic = {"criteria": []}
	  let crit = {tests: {}}
	  let test = []
	  let firstTest = true
	  let testNum = '1'
	  $('div.root>*').each((i,e) => {
		  let tagname = $(e).prop('tagName').toLowerCase()
		  if (tagname == 'h3') {
			  if (firstTopic) {
				  firstTopic = false
			  } else {
				  topics.push(topic)
				  topic = {"criteria": []}
				  firstCrit = true
			  }
			  let tmpTitle = $(e).html()
			  topic.title = toMd(tmpTitle.split('&nbsp;:')[1])
			  topic.number = parseInt($('<div>'+tmpTitle+'<div>')?.find('a')?.attr('href')?.replace('#topic-', ''))
		  } else if (tagname == 'h4') {
			if (firstCrit) {
				firstCrit = false
			} else {
				topic.criteria.push(crit)
				crit = {tests: {}}
			}
			let tmpTitle = $(e).html()
			crit.number = $('<div>'+tmpTitle+'<div>').find('a').attr('href').replace(/#crit-.*-/, '')
			$(e).find('a:first-child').remove()
			tmpTitle = $(e).html().trim()
			const re = /\[([A]{1,2})\]\s(.*)$/
			const matchs = tmpTitle.match(re)
			crit.title = toMd(matchs[2])
			crit.level = matchs[1]
		  } else if (tagname == 'h5') {
			if (firstTest == false) {
				firstTest = true
				crit.tests[testNum] = test
				test = []
				testNum = 1
			}
		  } else if (tagname == 'p') {
			let testId = $(e).attr('id')
			if (testId?.substr(0,4) == 'test') {
				if (firstTest) {
					firstTest = false
				} else {
					crit.tests[testNum] = test
					test = []
				}
				testNum = testId?.match(/test-\d{1,2}-\d{1,2}-(\d{1,2})/)[1]
				$(e).find('strong').remove()
				test.push(toMd($(e).html()))
			} else {
				//console.log('warning: '+testId+ $(e).prop('outerHTML'))
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
					crit.tests[testNum] = test
					test = []
				})
			} else {
				if (firstTest == false) {
					$(e).find('li').each((i,f) => {
						test.push(toMd($(f).html()))
					})
				}
			}
		  } else {
			  //console.log($(e).prop('outerHTML'))
		  }
	  })
  
	  const result = {wcag: {version: 2.1}, en301549: {version: "3.2.1"}, topics}

	  console.log(JSON.stringify(result, null, 2).replaceAll(/\\n/g, ' '))

	  // Remove line breaks (\n) and create JSON file
	//   let file = JSON.stringify(result, null, 2).replaceAll(/\\n/g, ' ')
	//   fs.writeFile(CRITERIA_DESTINATION, file);
  
	//   console.log(`✅ Criteria successfully generated.`);
  
	// } catch (err) {
	//   console.error(`❌ An error occured while generating criteria: ${err}`);
	// }
  }
generateCriteria();