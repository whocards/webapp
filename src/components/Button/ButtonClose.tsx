import React from 'react'
import './ButtonClose.css'

interface Props {
  onClick: (event: any) => void
}

export const ButtonClose = ({ onClick }: Props) => (
  <div className='btn-close' onClick={onClick} />
)
