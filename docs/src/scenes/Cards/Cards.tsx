import React from 'react';
import './Cards.css';
import { Questions } from 'components/Questions';

interface CardsProps {}

export const Cards: React.FunctionComponent<CardsProps> = ({}) => {

	return (
		<div className='flex-center'>
			<Questions />
		</div>
	)
}