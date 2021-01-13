import React from 'react';
import './Cards.css';
import { Questions } from 'components/Questions';
import { Helmet } from 'react-helmet-async';

interface CardsProps {
	showCards: Function;
}

export const Cards: React.FunctionComponent<CardsProps> = () => {

	return (
		<div className='flex-center'>
				<Helmet>
					<title>Who Cards - Questions</title>
				</Helmet>
			<Questions />
		</div>
	)
}