import React, {
	ChangeEvent,
	useContext,
	useEffect,
	useState,
} from 'react'
import LanguageContext from '../contexts/language.context';
import LANGUAGES from '../data/languages.json'

export const LanguagesSelector: React.FunctionComponent = () => {
	// @ts-ignore
	const { language, setLanguage } = useContext(LanguageContext)

	const change = (event: ChangeEvent<HTMLSelectElement>) => {
		setLanguage(event.target.value)
	}

	return (
		<select value={language} onChange={change}>
			{Object.entries(LANGUAGES).map(lang =>
				<option key={lang[0].toString()} value={lang[0]}>{lang[1]}</option>
			)}
		</select>
	)
}
