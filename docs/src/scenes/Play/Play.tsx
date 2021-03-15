import React from 'react';
import './Play.css';
import { Questions } from 'components/Questions';
import { Helmet } from 'react-helmet-async';

interface PlayProps {}

export const Play: React.FunctionComponent<PlayProps> = () => {

	return (
		<div className='flex-center'>
				<Helmet>
					<title>Who Play - Play</title>
				</Helmet>
			<Questions />
		</div>
	)
}