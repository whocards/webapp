import React, { MouseEvent } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import useEventListener from '@use-it/event-listener'

import { Form } from 'components/Form'
import { ButtonClose } from 'components/Button'

import './Modal.css'

export const Modal: React.FC = () => {
  const history = useHistory()
  const { state } = useLocation<{ background: any }>()

  const goBack = (event?: TouchEvent | MouseEvent) => {
    event?.stopPropagation()
    history.push(state?.background?.pathname || '/')
  }

  const clickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as Element).classList.contains('modal-wrapper')) {
      goBack(event)
    }
  }

  useEventListener('keydown', ({ key }: KeyboardEvent) => {
    if (key?.toLowerCase() === 'escape') {
      goBack()
    }
  })

  return (
    <div className='modal-wrapper' onClickCapture={clickOutside}>
      <div className='modal'>
        <ButtonClose onClick={goBack} />
        <Form background={state?.background} />
      </div>
    </div>
  )
}
