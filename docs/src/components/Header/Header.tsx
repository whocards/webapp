import React from 'react'
import { LanguagesSelector } from 'components/LanguagesSelector';
import './Header.css'

interface HeaderProps {
	show: boolean,
	toggle: Function,
}

export const Header: React.FunctionComponent<HeaderProps> = ({ show = false, toggle }) => {

	return (
		<header className='header-container'>
			<h2 className='title p1 hover' onClick={() => toggle()}>Who Cards</h2>
			{ show && <LanguagesSelector /> }
		</header>
	);
};
