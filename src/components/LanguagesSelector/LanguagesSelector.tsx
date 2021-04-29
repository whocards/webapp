import React, { useContext, useEffect, useRef, useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { LanguageContext } from 'contexts/language.context'
import LANGUAGES from 'data/languages.json'
import './LanguagesSelector.css'

interface Props {
  show: boolean
}

const defaultProps: Props = {
  show: true,
}

export const LanguagesSelector: React.FunctionComponent<Props> = ({
  show,
}: Props = defaultProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)

  useEffect(() => {
    setOpen(false)
  }, [setOpen, show])

  useEventListener('click', (event) => {
    // @ts-ignore
    if (!ref?.current?.contains(event.target)) {
      setOpen(false)
    }
  })

  const change = (value: any) => {
    setLanguage(value)
    setOpen(false)
  }

  const toggleOpen = () => setOpen(!open)

  return (
    <div ref={ref} className={`dropdown-root${show ? '' : ' hide'}`}>
      <div
        className={`dropdown-control ${open ? ' is-open' : ''}`}
        onClick={toggleOpen}
      >
        {/* @ts-expect-error */}
        <div className='dropdown-placeholder'>{LANGUAGES[language]}</div>
        <span className='dropdown-arrow' />
      </div>
      {open && (
        <div className='dropdown-menu'>
          {Object.entries(LANGUAGES)
            .filter(([key]) => key !== language)
            .map(([key, value]) => (
              <div
                key={key}
                className='dropdown-option'
                onClick={() => change(key)}
              >
                {value}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
