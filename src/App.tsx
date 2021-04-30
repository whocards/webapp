import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { Header } from 'components/Header'
import { LanguageProvider } from 'contexts/Language'
import ViewportProvider from 'contexts/ViewPort'
import { About, Play, Print } from 'scenes'
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
                <Switch>
                  <Route exact path='/' component={Play} />
                  <Route exact path='/print' component={Print} />
                  <Route exact path='/about' component={About} />
                  <Redirect to='/' />
                </Switch>
              </div>
            </div>
          </Router>
        </HelmetProvider>
      </ViewportProvider>
    </LanguageProvider>
  )
}

export default App
