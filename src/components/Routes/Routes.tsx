import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { About, Modal, Play, Print } from 'scenes'
import { Form } from 'components/Form'

import './Routes.css'

export const Routes: React.FC = () => {
  const location = useLocation()
  // @ts-ignore
  const background = location?.state?.background

  return (
    <>
      <Switch location={background || location}>
        <Route exact path='/' component={Play} />
        <Route exact path='/print' component={Print} />
        <Route exact path='/about' component={About} />
        {!background && (
          <Route
            exact
            path={[
              '/question',
              '/question/thanks',
              '/donate',
              '/donate/thanks',
            ]}
            component={Form}
          />
        )}
        <Redirect to='/' />
      </Switch>

      {background && (
        <Route
          path={['/question', '/question/thanks', '/donate', '/donate/thanks']}
          component={Modal}
        />
      )}
    </>
  )
}
