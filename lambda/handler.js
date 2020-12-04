const fetch = require('node-fetch')

const BASE_URL = 'https://raw.githubusercontent.com/acharlop/whocards/main'
const QUESTIONS_URI = '/static/questions.json'
const IMAGE_URI = '/images/'
const IMAGE_COUNT = 6

const randomNumber = (max) => Math.floor(Math.random() * max)

const fetchCard = async () => {
	const cards = await fetch(BASE_URL + QUESTIONS_URI).then(res => res.json())
	
	return cards[randomNumber(cards.length)].en
}

const getText = async (event, context, callback) => {
	const card = await fetchCard()
	
	callback(null, { statusCode: 200, body: card })
}

const getCard = async (event, context, callback) => {
	const card = await fetchCard()
	const image_url = BASE_URL + IMAGE_URI + randomNumber(IMAGE_COUNT) + '.png'
	
	const body = JSON.stringify({
		blocks: [
			{
				type: 'header',
				text: {
					type: 'plain_text',
					text: 'Who Card',
					emoji: true
				}
			},
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

module.exports = {
	getCard,
	getText,
}