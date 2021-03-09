import React from 'react'
import { Helmet } from 'react-helmet-async';
import './Print.css'

interface PrintProps {}

export const Print: React.FunctionComponent<PrintProps> = () => {
	return (
		<>
			<Helmet>
				<title>Who Cards - Print</title>
			</Helmet>
			<div className='print-wrapper'>
print
			</div>
		</>
	);
};
