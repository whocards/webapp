import React from 'react'
import './Play.css'
import { Questions } from 'components/Questions'
import { Helmet } from 'react-helmet-async'
import MyceliumNetwork from 'images/shroom.png'

interface PlayProps {}

export const Play: React.FunctionComponent<PlayProps> = () => {
  return (
    <div className='play-container flex-center'>
      <Helmet>
        <title>Who Cards - Play</title>
      </Helmet>
      <img
        src={MyceliumNetwork}
        className='mycelium-network'
        alt='Two mushrooms representing the mycelium network'
      />
      <Questions />
    </div>
  )
}
