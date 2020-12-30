import React, {
	useEffect,
	useState,
} from 'react';
import './Website.css';
import { randomNumber } from 'helpers';

interface WebsiteProps {}

const IMG_NN = 'NN'
const IMG_URL = `https://raw.githubusercontent.com/acharlop/whocards/main/images/${IMG_NN}.png?raw=true`

export const Website: React.FunctionComponent<WebsiteProps> = () => {
	const [img,setImg] = useState(1)

	useEffect(() => {
		// set interval
		const interval = setInterval(() => {
			setImg(randomNumber(1, 6))
		}, 3000)
		// clear interval
		return () => clearInterval(interval)
	}, [img])

	return (
		<div className='website'>
			<h1 className="coming-soon">Coming soon!</h1>
			<img src={IMG_URL.replace(IMG_NN, img.toString())} className="App-logo" alt="logo" />
		</div>
	)
}