import React, { ChangeEvent } from 'react'
import { useLocation } from 'react-router-dom'
import './Input.css'

interface Props {
  placeholder?: string
  value?: string
  onChange?: (arg0: string) => void
  required?: boolean
  textarea?: boolean
}

let value = ''

const defaultProps: Props = {
  placeholder: 'placeholder',
  required: false,
  value,
  textarea: false,
  onChange: (newVal) => {
    value = newVal
  },
}

export const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  required,
  textarea,
}: Props = defaultProps) => {
  const { hash } = useLocation()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }
  console.log(hash)
  return (
    <div className='input-wrapper'>
      {React.createElement(textarea ? 'textarea' : 'input' || 'textarea', {
        required,
        value,
        onChange: handleChange,
        className: `${textarea ? 'textarea' : 'text'}-input input`,
        placeholder: ' ',
      })}
      <label className='floating-label'>{placeholder}</label>
    </div>
  )
}

Input.defaultProps = defaultProps
