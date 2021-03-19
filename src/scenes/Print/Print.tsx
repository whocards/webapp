import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
	AnalyticsAction,
	AnalyticsCategory,
	gtagEvent,
} from 'modules/Analytics'
import LANGUAGES from 'data/languages.json'
import './Print.css'

interface PrintProps {}

export const Print: React.FunctionComponent<PrintProps> = () => {
	const open = (key: string, label: string) => {
		window.open(`/cards/latest/whocards-${key}.pdf`)
		gtagEvent(AnalyticsAction.print, {
			category: AnalyticsCategory.print,
			label,
		})
	}

	return (
		<>
			<Helmet>
				<title>Who Cards - Print</title>
			</Helmet>
			<div className='print-wrapper'>
				{/* eslint-disable jsx-a11y/anchor-is-valid */}
				{ Object.entries(LANGUAGES).map(([key, value]) => (
					<a
						key={key}
						className='button'
						rel='noreferrer'
						download
						onClick={() => open(key, value)}
					>{value}</a>
				))}
				{/* eslint-enable jsx-a11y/anchor-is-valid */}
			</div>
		</>
	)
}
