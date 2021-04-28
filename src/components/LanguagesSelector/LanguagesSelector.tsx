import React, {
	useContext,
	useState,
} from 'react';
import { LanguageContext } from 'contexts/language.context';
import LANGUAGES from 'data/languages.json'
import './LanguagesSelector.css'

interface Props {
	show: boolean;
}

const defaultProps: Props = {
	show: true
}

export const LanguagesSelector: React.FunctionComponent<Props> = ({ show }: Props = defaultProps) => {
	const [open, setOpen] = useState(false);
	const { language, setLanguage } = useContext(LanguageContext)

	const change = (value: any) => {
		setLanguage(value)
		setOpen(false)
	}

	const toggleOpen = () => setOpen(!open)

	return (
		<div className={ `dropdown-root${show ? '' : ' hide'}` }>
			<div className={ `dropdown-control ${open ? ' is-open' : ''}` } onClick={toggleOpen}>
				{/* @ts-expect-error */}
				<div className='dropdown-placeholder'>{LANGUAGES[language]}</div>
				<span className='dropdown-arrow' />
			</div>
			{ open && <div className='dropdown-menu'>
				{ Object
					.entries(LANGUAGES)
					.filter(([key]) => key !== language)
					.map(([key, value]) => (
					<div key={key} className='dropdown-option' onClick={ () => change(key) }>
						{ value }
					</div>
				)) }
			</div>
			}
		</div>
	)
}
