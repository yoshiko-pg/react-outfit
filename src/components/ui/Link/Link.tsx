import React from 'react'
import cx from 'classnames'
import { Link as RouterLink } from 'react-router-dom'

import styles from './Link.module.css'

type LinkProps = React.ComponentProps<'a'> & {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  href: string
  push?: boolean
  withoutStyle?: boolean
}

type ButtonProps = React.ComponentProps<'button'> & {
  children?: React.ReactNode
  className?: string
  withoutStyle?: boolean
}

const Link = (props: LinkProps | ButtonProps) => {
  const { children, className, disabled, withoutStyle = false, ...rest } = props

  const allClassName = cx(
    styles.reset,
    { [styles.link]: !withoutStyle, [styles.disabled]: disabled },
    className,
  )

  // hrefがなかったらBUttonPropsになる

  // button
  if (!href) {
    return (
      <button className={allClassName} disabled={disabled} type="button" role="link" {...rest}>
        {children}
      </button>
    )
  }

  const { href, push = false } = props

  // disabled link
  if (disabled) {
    return (
      <span className={allClassName} {...rest}>
        {children}
      </span>
    )
  }

  // push link
  if (push) {
    return (
      <RouterLink className={allClassName} to={href} {...rest}>
        {children}
      </RouterLink>
    )
  }

  // link
  return (
    <a className={allClassName} href={href} {...rest}>
      {children}
    </a>
  )
}

export { Link }
