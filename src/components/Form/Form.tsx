import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { FormModels, BackButton } from 'constants/FormModels'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { LocalStorage } from 'modules/Storage'
import './Form.css'

interface Props {
  background?: any
}

const defaultProps: Props = {
  background: false,
}

export const Form: React.FC<Props> = ({ background }: Props) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const [form, setForm] = useState<any>({})
  const [hasError, setHasError] = useState(false)
  const [required, setRequired] = useState<Array<string>>()
  const [loading, setLoading] = useState<boolean>(false)

  const formName = pathname.split('/')[1]
  const model = FormModels[formName]
  const isThanks = pathname.split('/').length > 2

  useEffect(() => {
    if (!isThanks) {
      // set form
      setForm(
        model.fields.reduce(
          (obj, item) => ({
            ...obj,
            [item.name]: LocalStorage.get(item.name) || '',
          }),
          {},
        ),
      )
      // set required
      setRequired(
        model.fields
          .filter((field) => field.required)
          .map((field) => field.name),
      )
    }
  }, [model, isThanks])

  const backToQuestions = () => history.push('/')
  const gotoThanks = () => {
    setLoading(false)
    history.push({
      pathname: pathname + '/thanks',
      state: { background },
    })
  }

  const submit = () => {
    if (form['bot-field']) return
    setLoading(true)
    const data = { ...form, 'form-name': formName }
    const formData = new FormData()
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k])
    })

    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(gotoThanks)
      .catch(() => setLoading(false))
  }

  const getFormValue = (name: string) => form[name] || ''

  const setFormValue = (name: string, value: string) => {
    setForm({ ...form, [name]: value })
    LocalStorage.set(name, value)
  }

  const isEmailValid = (email: string): string => {
    const isValid = !email || (email.includes('@') && !email.endsWith('@'))
    if (!isValid) {
      setHasError(true)
      return 'email is invalid'
    } else {
      setHasError(false)
      return ''
    }
  }
  const hasRequired = (): boolean =>
    !!required?.every((field: string) => !!form[field])
  const isFormValid = (): boolean => hasRequired() && !hasError

  const classes = [
    'flex-column',
    'form-wrapper',
    isThanks ? 'form-thanks' : '',
    background ? '' : 'form-background',
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
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
            textarea={input.textarea}
            value={getFormValue(input.name)}
            onChange={(value) => setFormValue(input.name, value)}
            validation={input.name === 'email' ? isEmailValid : undefined}
          />
        ))}
      {isThanks && <div className='spacer' />}
      <Button
        disabled={!(isThanks || isFormValid())}
        fullWidth
        onClick={isThanks ? backToQuestions : submit}
        loading={loading}
      >
        {isThanks ? BackButton : model.submit.text}
      </Button>
    </div>
  )
}

Form.defaultProps = defaultProps
