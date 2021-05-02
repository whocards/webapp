import React, { createElement, PropsWithChildren, memo } from 'react'
import { ReactComponent as Loader } from 'images/spinner.svg'
import { cssClasses } from 'helpers'
import './Button.css'

interface Props extends PropsWithChildren<any> {
  loading?: boolean
  disabled?: boolean
  className?: string
  linkProps?: Object
  onClick?: Function
  fullWidth?: boolean
}

const defaultProps: Props = {
  loading: false,
  disabled: false,
  fullWidth: true,
}

export const Button = memo((props: Props = defaultProps) => {
  const tag = props.linkProps ? 'a' : 'button'

  const classes = [
    'button',
    props.className,
    props.loading ? 'loading' : '',
    props.fullWidth ? 'full-width' : '',
  ]

  const elProps: any = {
    className: cssClasses(classes),
    onClick: props.onClick,
    ...props.linkProps,
    disabled: props.disabled,
  }

  const elChildren = [props.children]

  if (props.loading) {
    elChildren.push(<Loader key='loader' className='loader' />)
  }

  return createElement(tag, elProps, elChildren)
})
