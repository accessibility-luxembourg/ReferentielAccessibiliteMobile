const fs = require('fs').promises;
const md = require('markdown-it')({ html: true })
const cheerio = require('cheerio')

async function generateGlossary(lang) {
  const GLOSSARY_SOURCE = `${__dirname}/../${lang}/glossaire.md`;
  const GLOSSARY_DESTINATION = `${__dirname}/../${lang}/json/glossaire.json`;
  
  try {
    let glossary = []

	const data = await fs.readFile(`${GLOSSARY_SOURCE}`, "utf-8");

	const body = md.render(data)
    const $ = cheerio.load('<div class="root">'+body+'</div>')
    let first = true
    let title = ''
    let desc = ''
    $('div.root>:not(h3)').each((i,e) => {
        if ($(e).prop('tagName').toLowerCase() == 'h4') {
            if (first) {
                first = false
            } else {
                glossary.push({title, 'body': desc})
                desc = ''
            }
            title = $(e).html()
        } else {
            desc += $(e).prop('outerHTML')
        }
    })

    // Remove line breaks (\n) and create JSON file
    let file = JSON.stringify({glossary}, null, 2).replaceAll(/\\n/g, ' ')
    fs.writeFile(GLOSSARY_DESTINATION, file);

    console.log(`✅ Glossary successfully generated.`);

  } catch (err) {
    console.error(`❌ An error occured while generating glossary: ${err}`);
  }
}

generateGlossary('fr');
generateGlossary('en');