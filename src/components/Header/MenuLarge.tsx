import React, { PropsWithChildren } from 'react'
import Tabs from 'constants/Tabs'
import { NavLink } from 'react-router-dom'
import './MenuLarge.css'

interface Props extends PropsWithChildren<Record<never, never>> {}

const MenuLarge: React.FC<Props> = ({ children }: Props) => (
  <>
    <div className='tabs'>
      {Object.entries(Tabs).map(([tab, value]) => (
        <NavLink key={tab} to={tab} className='tab' activeClassName='active'>
          <span className='w80'>{value}</span>
        </NavLink>
      ))}
      <li className='slider' />
    </div>
    {children}
  </>
)

export default MenuLarge
