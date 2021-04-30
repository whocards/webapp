import React, {
  Context,
  createContext,
  PropsWithChildren,
  useState,
} from 'react'
import Breakpoints from 'constants/Breakpoints'

const isSmall = () => window.innerWidth <= Breakpoints.small

interface ContextProps {
  isMobile: boolean
}

const defaultProps: ContextProps = {
  isMobile: isSmall(),
}

export const ViewPortContext: Context<ContextProps> = createContext(
  defaultProps,
)

const ViewportProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const [isMobile, setIsMobile] = useState<boolean>(isSmall())

  const handleWindowResize = () => {
    setIsMobile(isSmall())
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const provider: ContextProps = {
    isMobile,
  }

  return (
    <ViewPortContext.Provider value={provider}>
      {children}
    </ViewPortContext.Provider>
  )
}

export default ViewportProvider
