import React, { PropsWithChildren } from 'react'
import Routes from 'constants/Routes'
import { NavLink, useLocation } from 'react-router-dom'
import './MenuLarge.css'

interface Props extends PropsWithChildren<Record<never, never>> {}

const MenuLarge: React.FC<Props> = ({ children }: Props) => {
  const background = useLocation()

  return (
    <>
      <div className='tabs'>
        {Object.entries(Routes).map(([tab, value], index) => (
          <NavLink
            key={tab}
            to={
              index < 3
                ? tab
                : {
                    pathname: tab,
                    state: { background },
                  }
            }
            className='tab'
            activeClassName='active'
            isActive={(_, location) => location.pathname.split('/')[1] === tab}
          >
            <span className={index === 3 ? 'w120' : 'w80'}>{value}</span>
          </NavLink>
        ))}
        <li className='slider' />
      </div>
      {children}
    </>
  )
}

export default MenuLarge
