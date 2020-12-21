import React, {useState, useEffect} from 'react'
import './App.css';
import { LanguagesSelector } from './components/LanguagesSelector';
import { WhoCards } from './components/WhoCards';
import LanguageContext from './contexts/language.context';
import {
  getDefaultLanguage,
  randomNumber,
} from './helpers'

const IMG_NN = 'NN'
const BASE_URL = 'https://raw.githubusercontent.com/acharlop/whocards/main'
const IMG_URL = `${BASE_URL}/images/${IMG_NN}.png?raw=true`

function App() {
  const [language, setLanguage] = useState(getDefaultLanguage())
  const [img,setImg] = useState(1)
  const [showCards, setShowCards] = useState(false)

  const value = { language, setLanguage }

  useEffect(() => {
    // set interval
    const interval = setInterval(() => {
      setImg(randomNumber(1, 6))
    }, 3000)
    // clear interval
    return () => clearInterval(interval)
  }, [img])

  const toggleShow = () => setShowCards(show => !show)

  return (
    <LanguageContext.Provider value={value}>
      <div className="App">
        {!showCards && (
          <header className="App-header">
            <h1>Who Cards</h1>
            <img src={IMG_URL.replace(IMG_NN, img.toString())} className="App-logo" alt="logo" />
            <p className="coming-soon">
              Coming soon!
            </p>
          </header>
        )}
        <button onClick={toggleShow}>{ showCards ? 'Stop playing' : 'Lets play' }</button>
        <LanguagesSelector />
        <WhoCards show={showCards} />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
