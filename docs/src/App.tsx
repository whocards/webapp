import React, {
	useState,
} from 'react'
import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import LanguageContext from './contexts/language.context';
import { getDefaultLanguage } from './helpers'
import { Cards } from './scenes/Cards';
import PageContext, { Page } from 'contexts/page.context';

function App() {
	const [language, setLanguage] = useState(getDefaultLanguage())
	const [page, setPage] = useState(Page.play)

	return (
		<LanguageContext.Provider value={{ language, setLanguage}}>
			<PageContext.Provider value={{page, setPage}}>
				<HelmetProvider>
					<Helmet>
						<title>Who Cards</title>
					</Helmet>

					<div className='app'>
						<div className='app-header'>
							<Header />
						</div>
						<div className='flex-center'>
							<Cards />
						</div>
					</div>
				</HelmetProvider>
			</PageContext.Provider>
		</LanguageContext.Provider>
	);
}

export default App;
