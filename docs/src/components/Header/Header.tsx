import React, { useContext } from 'react'
import PageContext, {
	Page,
	PAGES,
} from 'contexts/page.context';
import { LanguagesSelector } from 'components/LanguagesSelector';
import { titleize } from 'helpers';
import './Header.css'

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
	const { page, setPage } = useContext(PageContext)

	const tabs = () =>
		PAGES.map(tab => {
			const selected = page === tab
			const handleClick = () => {
				if (!selected) {
					setPage(tab)
				}
			}
			return (
				<li
					key={tab}
					className={`tab${ selected ? ' active' : '' }`}
					onClick={handleClick}
				>
					<span className='w80'>
						{titleize(tab)}
					</span>
				</li>
			)
		})

	return (
		<header className='header-container p1'>
			<div className='title'><b>Who</b>Cards</div>
			<ul className='tabs'>
				{tabs()}
				<li className='slider' />
			</ul>
			<LanguagesSelector show={page === Page.play} />
		</header>
	);
};
