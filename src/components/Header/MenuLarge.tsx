import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import Routes from 'constants/Routes'
import { NavLink, useLocation } from 'react-router-dom'
import './MenuLarge.css'
import ReactDOM from 'react-dom'

interface Position {
  left: number
  width: number
}

const defaultPosition: Position = {
  left: 0,
  width: 0,
}

interface Props extends PropsWithChildren<Record<never, never>> {}

const MenuLarge: React.FC<Props> = ({ children }: Props) => {
  const background = useLocation()
  const [position, setPosition] = useState<Position>(defaultPosition)
  const [activeTab, setActiveTab] = useState<number>(0)
  const ref = useRef(null)

  useEffect(() => {
    const tab = (ReactDOM.findDOMNode(
      ref.current,
    ) as Element)?.querySelectorAll('.active')?.[0] as HTMLElement
    if (tab) {
      setPosition({
        left: tab.offsetLeft,
        width: tab.clientWidth,
      })
    }
    return () => {
      setPosition(defaultPosition)
    }
  }, [activeTab, setPosition, background])

  return (
    <>
      <div className='header-item tabs' ref={ref}>
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
            onClick={() => setActiveTab(index)}
          >
            {value}
          </NavLink>
        ))}
        <li className='slider' style={position} />
      </div>
      {children}
    </>
  )
}

export default MenuLarge
