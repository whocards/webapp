import React, { createElement, PropsWithChildren, memo } from 'react'
import { ReactComponent as Loader } from 'images/spinner.svg'
import './Button.css'

interface Props extends PropsWithChildren<any> {
  loading?: boolean
  disabled?: boolean
  className?: string
  linkProps?: Object
  onClick?: Function
  fullWidth?: boolean
  type?: string
}

const defaultProps: Props = {
  loading: false,
  disabled: false,
  fullWidth: true,
  type: 'button',
}

export const Button = memo((props: Props = defaultProps) => {
  const tag = props.linkProps ? 'a' : 'button'

  const className = [
    'button',
    props.className,
    props.loading ? 'loading' : '',
    props.fullWidth ? 'full-width' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const elProps: any = {
    className,
    onClick: props.onClick,
    ...props.linkProps,
    disabled: props.disabled,
    type: props.type,
  }

  const elChildren = [props.children]

  if (props.loading) {
    elChildren.push(<Loader key='loader' className='loader' />)
  }

  return createElement(tag, elProps, elChildren)
})
