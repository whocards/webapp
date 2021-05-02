import React from 'react'
import './Play.css'
import { Questions } from 'components/Questions'
import { Helmet } from 'react-helmet-async'
import MyceliumNetwork from 'images/shroom.png'

interface Props {
  disabled: boolean
}

const defaultProps = {
  disabled: false,
}

export const Play: React.FunctionComponent<Props> = ({ disabled }: Props) => {
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
      <Questions disabled={disabled} />
    </div>
  )
}

Play.defaultProps = defaultProps
