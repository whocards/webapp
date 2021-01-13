import React, {
	useEffect,
	useState,
} from 'react'
import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import LanguageContext from './contexts/language.context';
import { getDefaultLanguage } from './helpers'
import { Cards } from './scenes/Cards';
import { Website } from './scenes/Website';

function App() {
	const [language, setLanguage] = useState(getDefaultLanguage())
	const [showCards, setShowCards] = useState(false)

	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		setShowCards(!!params.get('questions'))
	}, [])

	const value = { language, setLanguage }

	const toggleShow = () => setShowCards(show => !show)

	const Body: React.FunctionComponent<any> = showCards ? Cards : Website

	return (
		<LanguageContext.Provider value={ value }>
			<HelmetProvider>
				<Helmet>
					<title>Who Cards</title>
				</Helmet>

				<div className='app'>
					<div className='app-header'>
						<Header show={ showCards } toggle={ toggleShow }/>
					</div>
					<div className='flex-center'>
						<Body showCards={toggleShow} />
					</div>
				</div>
			</HelmetProvider>
		</LanguageContext.Provider>
	);
}

export default App;
