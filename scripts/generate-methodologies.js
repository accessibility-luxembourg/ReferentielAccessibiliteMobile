const fs = require('fs').promises;
const md = require('markdown-it')({ html: true })
const cheerio = require('cheerio')
const TurndownService = require('turndown')
const turndownService = new TurndownService()

function toMd(html) {
	if (html !== undefined) {
		return turndownService.turndown(html.trim())
	} else {
		return;
	}
}

async function generateMetho(lang) {
  const METHO_SOURCE = `${__dirname}/../${lang}/referentiel-technique.md`;
  const METHO_DESTINATION = `${__dirname}/../${lang}/json/methodologies.json`;

  try {
    let methodologies = {}

	const data = await fs.readFile(`${METHO_SOURCE}`, "utf-8");

	const body = md.render(data)
    const $ = cheerio.load('<div class="root">'+body+'</div>')
    let record = false
    let id = ''
    let desc = ''
    $('div.root>*').each((i,e) => {
        let tagname = $(e).prop('tagName').toLowerCase()
        if (tagname == 'h4') {
            let tmp = $(e).find('a')?.attr('href')
            if (tmp !== undefined) {
                let maybeId = tmp.match(/#crit-(\d{1,2})-(\d{1,2})/)
                if (maybeId) {
                    id = `${maybeId[1]}.${maybeId[2]}`
                }
            }
        } else if (tagname == 'h5') {
            if ($(e).html()?.includes('methodo')) {
                record = true

            } else if ($(e).html()?.includes('mapping')) {
                record = false
                methodologies[id] = desc
                desc = ''
            }
        } else {
            if (record) {
                if (desc !== '') {
                    desc = desc + "\n" + toMd($(e).prop('outerHTML'))
                } else {
                    desc = toMd($(e).prop('outerHTML'))
                }

            }
        }
    })

    let file = JSON.stringify(methodologies, null, 2)
    fs.writeFile(METHO_DESTINATION, file);

    console.log(`✅ Methodologies successfully generated.`);

  } catch (err) {
    console.error(`❌ An error occured while generating methodologies: ${err}`);
  }
}

generateMetho('fr');
generateMetho('en');