import React, { memo, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { LanguagesSelector } from 'components/LanguagesSelector'
import './Header.css'
import { ViewPortContext } from 'contexts/ViewPort'
import MenuLarge from './MenuLarge'
import MenuSmall from './MenuSmall'

export const Header: React.FC = memo(() => {
  const location = useLocation()
  const showLanguageSelector = location.pathname === '/'
  const { isMobile } = useContext(ViewPortContext)

  const Menu = isMobile ? MenuSmall : MenuLarge

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
