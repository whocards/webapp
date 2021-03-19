import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LanguagesSelector } from 'components/LanguagesSelector'
import './Header.css'

interface HeaderProps {}

const tabsList: string[] = ['play', 'print', 'about']
const tabsNamesList: string[] = ['Play', 'Print', 'About']

export const Header: React.FunctionComponent<HeaderProps> = () => {
	const location = useLocation()

	return (
		<header className='header-container p1'>
			<div className='title'><b>Who</b>Cards</div>
			<div className='tabs'>
				{tabsList.map((tab, index) => (
					<NavLink key={tab} to={tab} className='tab' activeClassName='active'>
						<span className='w80'>
							{tabsNamesList[index]}
						</span>
					</NavLink>
				))}
				<li className='slider' />
			</div>
			<LanguagesSelector show={location.pathname === '/'} />
		</header>
	)
}
