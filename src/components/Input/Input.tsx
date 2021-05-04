import React, { ChangeEvent, useState } from 'react'
import './Input.css'

interface Props {
  placeholder: string
  value: string
  onChange?: (arg0: string) => void
  required?: boolean
  textarea?: boolean
  disabled?: boolean
  validation?: (arg0: string) => string
  name?: string
}

const defaultProps: Props = {
  placeholder: '',
  required: false,
  value: '',
  textarea: false,
  disabled: false,
}

export const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  required,
  textarea,
  disabled,
  validation,
  name,
}: Props = defaultProps) => {
  const [error, setError] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }

  const onFocus = () => setError('')

  const onBlur = (e: any) => {
    const { value } = e.target
    if (!value && required) {
      setError('Field is required')
    } else if (validation) {
      setError(validation(value))
    }
  }

  return (
    <div className='input-wrapper' hidden={name === 'bot-field'}>
      {React.createElement(textarea ? 'textarea' : 'input' || 'textarea', {
        required,
        value,
        onChange: handleChange,
        className: `${textarea ? 'textarea' : 'text'}-input input${
          error ? ' input-error' : ''
        }`,
        placeholder: ' ',
        disabled,
        onBlur,
        onFocus,
      })}
      <label className='floating-label'>{placeholder}</label>
      <div className='input-error-label'>
        {error ? error + ', please fill out this field.' : ''}
      </div>
    </div>
  )
}

Input.defaultProps = defaultProps
