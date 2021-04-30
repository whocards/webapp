import React, { PropsWithChildren, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import Tabs from 'constants/Tabs'
import ButtonHamburger from 'components/Button/ButtonHamburger'
import './MenuSmall.css'

interface Props extends PropsWithChildren<Record<never, never>> {
  isOpen: boolean
  setIsOpen: (arg0: boolean) => void
}

const MenuSmall: React.FC<Props> = ({ children, isOpen, setIsOpen }: Props) => {
  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  const clickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as Element).classList.contains('side-menu-container')) {
      event.stopPropagation()
      close()
    }
  }

  return (
    <>
      <div className='menu-toggle-wrapper'>
        <ButtonHamburger isOpen={isOpen} toggle={toggle} />
      </div>
      <div
        className={`side-menu-container ${isOpen ? 'open' : 'closed'}`}
        onClickCapture={clickOutside}
      >
        <div className={`side-menu-wrapper flex-column`}>
          {Object.entries(Tabs).map(([tab, value]) => (
            <NavLink
              onClick={close}
              exact
              key={tab}
              to={tab}
              className='tab-sm'
              activeClassName='active'
            >
              {value}
              <div className='tab-border' />
            </NavLink>
          ))}
          {children}
        </div>
      </div>
    </>
  )
}

export default MenuSmall
