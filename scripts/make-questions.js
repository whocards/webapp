const path = require('path')
const fs = require('fs')

const rootPath = path.join(__dirname, '../static')
const directoryPath = path.join(rootPath, 'questions')
const questionsPath = path.join(rootPath, 'questions.json')

const questionsMap = {}
const questions = []

// read directory
const files = fs.readdirSync(directoryPath)

// get all questions
files.forEach((file, index) => {
  const language = file.split('.')[0]

  questionsMap[language] = fs
    .readFileSync(path.join(directoryPath, file), 'utf8')
    .split('\n')
})

const firstKey = Object.keys(questionsMap)[0]

for (let i=1; i < questionsMap[firstKey].length; i=i+3) {
  const question = {
    en: questionsMap[firstKey][i-1]
  }

  Object.keys(questionsMap).forEach(key => {
    question[key] = questionsMap[key][i]
  })

  questions.push(question)
}

fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2))

// console.log(Object.keys(questionsMap), files)

// console.log(fs.readFileSync(questionsPath, 'utf8'))