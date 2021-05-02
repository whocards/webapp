import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from 'components/Header'
import { LanguageProvider } from 'contexts/Language'
import ViewportProvider from 'contexts/ViewPort'
import { Routes } from 'components/Routes'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <ViewportProvider>
        <HelmetProvider>
          <Helmet>
            <title>Who Cards</title>
          </Helmet>

          <Router>
            <div className='app'>
              <Header />
              <div className='body flex-center'>
                <Routes />
              </div>
            </div>
          </Router>
        </HelmetProvider>
      </ViewportProvider>
    </LanguageProvider>
  )
}

export default App
