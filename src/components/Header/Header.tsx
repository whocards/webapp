import React, { memo, useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LanguagesSelector } from 'components/LanguagesSelector'
import './Header.css'
import { ViewPortContext } from 'contexts/ViewPort'
import MenuLarge from './MenuLarge'
import MenuSmall from './MenuSmall'

export const Header: React.FC = memo(() => {
  const { isMobile } = useContext(ViewPortContext)
  const location = useLocation()
  // @ts-ignore
  const background = location?.state?.background

  const showLanguageSelector =
    location.pathname === '/' || background?.pathname === '/'
  const [isOpen, setIsOpen] = useState(false)

  const Menu = isMobile ? MenuSmall : MenuLarge

  return (
    <header className='header-container p1'>
      <div className='header-item title'>
        <b>Who</b>
        <span>Cards</span>
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
        <LanguagesSelector
          show={showLanguageSelector && (isMobile ? isOpen : true)}
          onChange={() => setIsOpen(false)}
        />
      </Menu>
    </header>
  )
})
