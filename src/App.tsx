import React, { PropsWithChildren } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import { Header } from 'components/Header'
import { LanguageProvider } from 'contexts/language.context'
import { About, Play, Print } from 'scenes'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Helmet>
          <title>Who Cards</title>
        </Helmet>

        <Router>
          <div className='app'>
            <Header />
            <Body>
              <Switch>
                <Route exact path='/' component={Play} />
                <Route exact path='/print' component={Print} />
                <Route exact path='/about' component={About} />
                <Redirect to='/' />
              </Switch>
            </Body>
          </div>
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  )
}

const Body = ({ children }: PropsWithChildren<any>) => {
  const location = useLocation()
  return (
    <div
      className={`body flex-center${location.pathname === '/' ? ' lower' : ''}`}
    >
      {children}
    </div>
  )
}

export default App
