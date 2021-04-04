import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Questions } from 'components/Questions'
import MyceliumNetwork from 'images/shroom.png'
import './Play.css'

interface PlayProps {}

export const Play: React.FunctionComponent<PlayProps> = () => {

	return (
		<div className='play-container flex-center'>
			<Helmet>
				<title>Who Cards - Play</title>
			</Helmet>
			<img src={MyceliumNetwork} className='mycelium-network' alt='Two mushrooms representing the mycelium network' />
			<Questions />
		</div>
	)
}