import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LanguagesSelector } from 'components/LanguagesSelector'
import './Header.css'

interface HeaderProps {}

const tabsList: string[] = ['', 'print', 'about', '', '']
const tabsNamesList: string[] = ['Play', 'Print', 'About', 'Add question', 'Donate']
const tabsHashList: string[] = ['', '', '', 'add-question', 'donate']

export const Header: React.FunctionComponent<HeaderProps> = () => {
	const location = useLocation()

	const isActive = (pathname: string, hash?: string): boolean => !(
			(!hash && location.pathname.replace('/', '') !== pathname) ||
			location.hash.replace('#', '') !== hash
	);

	return (
		<header className='header-container p1'>
			<div className='title'><b>Who</b>Cards</div>
			<div className='tabs'>
				{tabsList.map((tab, index) => (
					<Link
						key={tab + tabsHashList[index]}
						className={ `tab${isActive(tab, tabsHashList[index]) ? ' active' : ''}`}
						to={{
							pathname: `/${tab}`,
							hash: tabsHashList[index] ? `#${tabsHashList[index]}` : '',
						}}
					>
						<span className={index === 3 ? 'w120' : 'w80'}>
							{tabsNamesList[index]}
						</span>
					</Link>
				))}
				<li className='slider' />
			</div>
			<LanguagesSelector show={location.pathname === '/'} />
		</header>
	)
}
