const fetch = require('node-fetch')

const BASE_URL = 'https://raw.githubusercontent.com/acharlop/whocards/main'
const QUESTIONS_URI = '/static/questions.json'
const IMAGE_URI = '/images/'
const IMAGE_COUNT = 6

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const fetchCard = async () => {
	const cards = await fetch(BASE_URL + QUESTIONS_URI).then(res => res.json())

	return cards[randomNumber(0, cards.length - 1)].en
}

const getText = async (event, context, callback) => {
	const card = await fetchCard()
	
	callback(null, { statusCode: 200, body: card })
}

const getCard = async (event, context, callback) => {
	const card = await fetchCard()
	const image_url = BASE_URL + IMAGE_URI + randomNumber(1, IMAGE_COUNT) + '.png'
	
	const body = JSON.stringify({
		response_type: 'in_channel',
		blocks: [
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `${card.slice(0, -1)} :question:`
				},
				accessory: {
					type: 'image',
					image_url,
					alt_text: 'Shroom'
				}
			}
		]
	})

	callback(null, { statusCode: 200, body })
}

// const test = async () => {}
// test()

module.exports = {
	getCard,
	getText,
}