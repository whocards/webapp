import React, {
	useContext,
} from 'react'
import { LanguagesSelector } from 'components/LanguagesSelector';
import './Header.css'
import PageContext, {
	PAGES,
} from 'contexts/page.context';

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
					className={selected ? 'selected' : ''}
					onClick={handleClick}
				>
					<span className={'capitalize selector'}>
						{tab}
					</span>
				</li>
			)
		})

	return (
		<header className='header-container p1'>
			<div className='title'><b>Who</b>Cards</div>
			<ul className='selectors'>
				{tabs()}
			</ul>
			<LanguagesSelector />
		</header>
	);
};
