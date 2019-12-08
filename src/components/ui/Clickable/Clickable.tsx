import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import styles from './Clickable.module.css'

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  disabled?: boolean
  href: string
  push?: boolean
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

type Props = ButtonProps | LinkProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isLink = (props: any): props is LinkProps => typeof props.href === 'string'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isButton = (props: any): props is ButtonProps => !isLink(props)

const Clickable = (props: Props) => {
  const { children, className, disabled, ...rest } = props
  const allClassName = cx(className, styles.clickable)

  // button
  if (isButton(rest)) {
    return (
      <button className={allClassName} disabled={disabled} type="button" role="link" {...rest}>
        {children}
      </button>
    )
  }

  if (isLink(rest)) {
    const { push, href, ...linkRest } = rest
    // disabled link
    if (disabled) {
      return (
        <span className={allClassName} {...linkRest}>
          {children}
        </span>
      )
    }

    // push link
    if (push) {
      return (
        <Link className={allClassName} to={href} {...linkRest}>
          {children}
        </Link>
      )
    }

    // link
    return (
      <a className={allClassName} href={href} {...linkRest}>
        {children}
      </a>
    )
  }

  return null
}

export { Clickable }
