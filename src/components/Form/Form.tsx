import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { FormModels, BackButton } from 'constants/FormModels'

import './Form.css'
import { Button } from 'components/Button'
import { Input } from 'components/Input/'

export const Form: React.FC = () => {
  const { pathname } = useLocation()
  const history = useHistory()

  console.log({ pathname })

  const model = FormModels[pathname.split('/')[1]]
  const isThanks = pathname.split('/').length > 2

  const backToQuestions = () => history.push('/')

  return (
    <div
      className={`flex-column form-wrapper${isThanks ? ' form-thanks' : ''}`}
    >
      <h2 className='form-title'>{model.title}</h2>
      {model[isThanks ? 'thanksContent' : 'content'].map(
        (paragraph: any, key: number) => (
          <p key={key} className='form-details'>
            {paragraph.startsWith('**') ? (
              <b>{paragraph.split('**')[1]}</b>
            ) : (
              paragraph
            )}
          </p>
        ),
      )}
      {!isThanks &&
        model.fields.map((input, index) => (
          <Input
            key={index}
            placeholder={input.placeholder}
            required={input.required}
            textarea={input.textarea}
            value={''}
          />
        ))}
      {isThanks && <div className='spacer' />}
      <Button
        disabled={!isThanks}
        fullWidth
        onClick={isThanks ? backToQuestions : () => {}}
      >
        {isThanks ? BackButton : model.submit.text}
      </Button>
    </div>
  )
}
