import React, { ChangeEvent } from 'react'
import './Input.css'

interface Props {
  placeholder: string
  value: string
  onChange?: (arg0: string) => void
  required?: boolean
  textarea?: boolean
}

const defaultProps: Props = {
  placeholder: '',
  required: false,
  value: '',
  textarea: false,
}

export const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  required,
  textarea,
}: Props = defaultProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }

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
