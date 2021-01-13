import React, {
	useEffect,
	useState,
} from 'react';
import './Website.css';
import { randomNumber } from 'helpers';
import LANGUAGES from 'data/languages.json'

interface WebsiteProps {
	showCards: Function;
}

const IMG_NN = 'NN'
const IMG_URL = `https://raw.githubusercontent.com/acharlop/whocards/main/images/${IMG_NN}.png?raw=true`

export const Website: React.FunctionComponent<WebsiteProps> = ({ showCards }) => {
	const [img,setImg] = useState(1)
	const [downloading, setDownloading] = useState(false)

	useEffect(() => {
		// set interval
		const interval = setInterval(() => {
			setImg(randomNumber(1, 6))
		}, 5000)
		// clear interval
		return () => clearInterval(interval)
	}, [img])

	const toggleDownloading = () => setDownloading(val => !val)

	return (
		<div className='container'>
			{ downloading && <>
				<button className='light' onClick={toggleDownloading}>Back</button>
				{ Object.entries(LANGUAGES).map(([key, value]) => (
					<a
						key={key}
						className='button'
						target='_blank'
						href={`/cards/latest/whocards-${key}.pdf`}
						download
						onClick={toggleDownloading}
					>{value}</a>
				))}
			</>}
			{ !downloading && <>
        <h1 className='coming-soon'>More info coming soon, stay tuned!</h1>
        <img height='128' width='128' src={ IMG_URL.replace(IMG_NN, img.toString()) } className='App-logo' alt='logo'/>
        <div className='links'>
          <button className='light' onClick={ () => showCards() }>Online cards</button>
          <button onClick={ toggleDownloading }>Download Cards PDF</button>
        </div>
      </>}
		</div>
	)
}