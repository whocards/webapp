import React, {useState, useEffect} from 'react'
import './App.css';
import { Header } from './components/Header';
import { Questions } from './components/Questions/Questions';
import LanguageContext from './contexts/language.context';
import {
  getDefaultLanguage,
  randomNumber,
} from './helpers'
import { Cards } from './scenes/Cards';
import { Website } from './scenes/Website';

function App() {
  const [language, setLanguage] = useState(getDefaultLanguage())
  const [showCards, setShowCards] = useState(false)

  const value = { language, setLanguage }

  const toggleShow = () => setShowCards(show => !show)

  const Body: React.FunctionComponent<any> = showCards ? Cards : Website

  return (
    <LanguageContext.Provider value={value}>
      <div className='app'>
        <div className='app-header'>
          <Header show={showCards} toggle={toggleShow} />
        </div>
        <div className='flex-center'>
          <Body />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
