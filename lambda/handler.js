const fetch = require('node-fetch')

const URL = 'https://raw.githubusercontent.com/acharlop/whocards/main/static/questions.json'

module.exports.getCard = async (event, context, callback) => {
	const cards = await fetch(URL).then(res => res.json())
	
	const card = cards[Math.floor(Math.random() * cards.length)].en
	
	callback(null, { statusCode: 200, body: card })
}
