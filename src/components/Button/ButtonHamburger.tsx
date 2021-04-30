import React from 'react'
import './ButtonHamberger.css'

interface Props {
  isOpen: boolean
  toggle: () => void
}

const ButtonHamburger: React.FC<Props> = ({ isOpen, toggle }: Props) => (
  <div
    id='button-hamburger'
    className={isOpen ? 'open' : 'closed'}
    onClick={() => toggle()}
  >
    <span />
    <span />
    <span />
  </div>
)

export default ButtonHamburger
