const path = require('path')
const fs = require('fs')
const CountryLanguage = require('country-language');

const rootPath = path.join(__dirname, '../docs/src/data')
const questionsPath = path.join(rootPath, 'questions.json')
const languagesPath = path.join(rootPath, 'languages.json')

const languages = Object.keys(JSON.parse(fs.readFileSync(questionsPath, 'utf8'))[0])

const data = {}

languages.forEach(lang => {
  if (CountryLanguage.languageCodeExists(lang.split('-')[0])) {
    if (!lang.includes('-')) {
      data[lang] = CountryLanguage.getLanguage(lang).name[0]
    } else {
      data[lang] = CountryLanguage.getCountry(lang.split('-')[1]).langCultureMs[0].displayName
    }
  }
})

fs.writeFileSync(languagesPath, JSON.stringify(data))
