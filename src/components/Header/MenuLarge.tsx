import React, { PropsWithChildren } from 'react'
import Routes from 'constants/Routes'
import { NavLink } from 'react-router-dom'
import './MenuLarge.css'

interface Props extends PropsWithChildren<Record<never, never>> {}

const MenuLarge: React.FC<Props> = ({ children }: Props) => (
  <>
    <div className='tabs'>
      {Object.entries(Routes).map(([tab, value], index) => (
        <NavLink key={tab} to={tab} className='tab' activeClassName='active'>
          <span className={index === 3 ? 'w120' : 'w80'}>{value}</span>
        </NavLink>
      ))}
      <li className='slider' />
    </div>
    {children}
  </>
)

export default MenuLarge
