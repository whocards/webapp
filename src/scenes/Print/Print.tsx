import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  AnalyticsAction,
  AnalyticsCategory,
  gtagEvent,
} from 'modules/Analytics'
import LANGUAGES from 'data/languages.json'
import './Print.css'
import { Button } from 'components/Button'

interface PrintProps {}

export const Print: React.FunctionComponent<PrintProps> = () => {
  const open = (key: string, label: string) => {
    window.open(`/cards/latest/whocards-${key}.pdf`)
    gtagEvent(AnalyticsAction.print, {
      category: AnalyticsCategory.print,
      label,
    })
  }

  return (
    <>
      <Helmet>
        <title>Who Cards - Print</title>
      </Helmet>
      <div className='print-wrapper'>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        {Object.entries(LANGUAGES).map(([key, value]) => (
          <Button
            key={key}
            linkProps={{
              rel: 'noreferrer',
              download: true,
              target: '_blank',
            }}
            fullWidth
            onClick={() => open(key, value)}
          >
            {value}
          </Button>
        ))}
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </div>
    </>
  )
}
