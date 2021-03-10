import React, {
	useContext,
} from 'react'
import LanguageContext from 'contexts/language.context';
import LANGUAGES from 'data/languages.json'
import './LanguagesSelector.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { setStoredLanguage } from 'modules/Storage';

// TODO change languages json file to this structure
const languages = Object.entries(LANGUAGES)
	.map(([value , label]) => ({ label, value }))

export const LanguagesSelector: React.FunctionComponent = () => {
	const { language, setLanguage } = useContext(LanguageContext)

	const change = (value: string) => {
		setLanguage(value)
		setStoredLanguage(value)
	}

	return (
		<Dropdown
			value={language}
			options={languages}
			onChange={({ value }) => change(value)}
			controlClassName='dropdown'
		/>
	)
}
