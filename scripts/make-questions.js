const path = require('path')
const fs = require('fs')

const rootPath = path.join(__dirname, '../static')
const directoryPath = path.join(rootPath, 'questions')
const questionsPath = path.join(rootPath, 'questions.json')
const dataPath = path.join(__dirname, '../docs/src/data/questions.json')

const questionsMap = {}
const questions = []
let questionNumber = 0

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

// map questions
for (let i=1; i < questionsMap[firstKey].length; i=i+3) {
  const question = {
    questionId: ++questionNumber,
    en: questionsMap[firstKey][i-1],
  }

  Object.keys(questionsMap).forEach(key => {
    question[key] = questionsMap[key][i]
  })

  questions.push(question)
}

// write questions
fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2))
fs.writeFileSync(dataPath, JSON.stringify(questions))