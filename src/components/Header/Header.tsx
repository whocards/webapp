import React, { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LanguagesSelector } from 'components/LanguagesSelector'
import './Header.css'
import Breakpoints from 'constants/Breakpoints'
import useEventListener from '@use-it/event-listener'
import MenuLarge from './MenuLarge'
import MenuSmall from './MenuSmall'

const getIsSmall = () => window.innerWidth <= Breakpoints.small

export const Header: React.FC = memo(() => {
  const location = useLocation()
  const showLanguageSelector = location.pathname === '/'
  const [isSmall, setIsSmall] = useState<boolean>(getIsSmall())

  useEventListener('resize', () => {
    setIsSmall(getIsSmall())
  })

  const Menu = isSmall ? MenuSmall : MenuLarge

  return (
    <header className='header-container p1'>
      <div className='title'>
        <b>Who</b>Cards
      </div>
      <Menu>
        <LanguagesSelector show={showLanguageSelector} />
      </Menu>
    </header>
  )
})
