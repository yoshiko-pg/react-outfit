import React, { PropsWithoutRef } from 'react'
import cx from 'classnames'
import { Link as RouterLink } from 'react-router-dom'

import styles from './Link.module.css'

type Props = PropsWithoutRef<JSX.IntrinsicElements['a']> & {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  href?: string
  push?: boolean
  withoutStyle?: boolean
}

const Link = ({
  children,
  className,
  disabled,
  href,
  push = false,
  withoutStyle = false,
  ...props
}: Props) => {
  const allClassName = cx(
    styles.reset,
    { [styles.link]: !withoutStyle, [styles.disabled]: disabled },
    className,
  )

  // button
  if (!href) {
    return (
      <button className={allClassName} disabled={disabled} type="button" role="link" {...props}>
        {children}
      </button>
    )
  }

  // disabled link
  if (disabled) {
    return (
      <span className={allClassName} {...props}>
        {children}
      </span>
    )
  }

  // push link
  if (push) {
    return (
      <RouterLink className={allClassName} to={href} {...props}>
        {children}
      </RouterLink>
    )
  }

  // link
  return (
    <a className={allClassName} href={href} {...props}>
      {children}
    </a>
  )
}

export { Link }
