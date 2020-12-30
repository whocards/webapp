import React, {
	useContext,
	useState,
} from 'react'
import LanguageContext from 'contexts/language.context';
import LANGUAGES from 'data/languages.json'
import './LanguagesSelector.css'
import { isTouchDevice } from 'helpers';

export const LanguagesSelector: React.FunctionComponent = () => {
	const [show, setShow] = useState(false)
	// @ts-ignore
	const { language, setLanguage } = useContext(LanguageContext)

	const change = (value: string) => {
		setLanguage(value)
		setShow(false)
	}

	const languages: string[] = Object.keys(LANGUAGES)
	languages.splice(languages.indexOf(language), 1);

	const hover = (set: boolean) => {
		if (!isTouchDevice()) {
			setShow(set)
		}
	}

	return (
		<div
			className='selector-container'
			onMouseEnter={() => hover(true)}
			onMouseLeave={() => hover(false)}
		>
			{ show && languages.map(lang =>
				<div
					className='hover'
					key={lang.toString()}
					onClick={() => change(lang)}
				>{lang}</div>
			)}
			<div
				className='selected'
				onClick={() => setShow(val => !val)}
			>{language}</div>
		</div>
		// <select value={language} onChange={change}>
		// 	{Object.entries(LANGUAGES).map(lang =>
		// 		<option key={lang[0].toString()} value={lang[0]}>{lang[1]}</option>
		// 	)}
		// </select>
	)
}
