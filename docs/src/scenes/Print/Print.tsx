import React from 'react'
import { Helmet } from 'react-helmet-async';
import './Print.css'
import LANGUAGES from '../../data/languages.json';

interface PrintProps {}

export const Print: React.FunctionComponent<PrintProps> = () => {
	return (
		<>
			<Helmet>
				<title>Who Cards - Print</title>
			</Helmet>
			<div className='print-wrapper'>
				{ Object.entries(LANGUAGES).map(([key, value]) => (
					<a
						key={key}
						className='button'
						target='_blank'
						rel='noreferrer'
						href={`/cards/latest/whocards-${key}.pdf`}
						download
					>{value}</a>
				))}
			</div>
		</>
	);
};
