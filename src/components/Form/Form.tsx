import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { FormModels, BackButton } from 'constants/FormModels'

import './Form.css'
import { Button } from 'components/Button'
import { Input } from 'components/Input/'

interface Props {
  background?: boolean
}

const defaultProps: Props = {
  background: true,
}

export const Form: React.FC<Props> = ({ background }: Props) => {
  const { pathname } = useLocation()
  const history = useHistory()

  const model = FormModels[pathname.split('/')[1]]
  const isThanks = pathname.split('/').length > 2

  const backToQuestions = () => history.push('/')

  const classes = [
    'flex-column',
    'form-wrapper',
    isThanks ? 'form-thanks' : '',
    background ? 'form-background' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
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

Form.defaultProps = defaultProps
