import PageContext, { Page } from 'contexts/page.context';
import React, { useState } from 'react'
import {
	Helmet,
	HelmetProvider,
} from 'react-helmet-async';
import './App.css';
import { Header } from './components/Header';
import LanguageContext from './contexts/language.context';
import { getDefaultLanguage } from './helpers'
import { About, Play, Print } from './scenes';

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
						<Header />
						<div className='body flex-center'>
							{page === Page.play && <Play />}
							{page === Page.print && <Print />}
							{page === Page.about && <About />}
						</div>
					</div>
				</HelmetProvider>
			</PageContext.Provider>
		</LanguageContext.Provider>
	);
}

export default App;
