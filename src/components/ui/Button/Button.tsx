import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import styles from './Button.module.css'
import { LoadingCircle } from '../LoadingCircle'

type Props = {
  children: React.ReactNode
  className?: string
  color?: 'main' | 'danger'
  size?: 's' | 'm' | 'l'
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  href?: string
  push?: boolean
}

const Button = ({
  children,
  className,
  color = 'main',
  size = 'm',
  outline = false,
  loading = false,
  disabled = false,
  type = 'button',
  href,
  push = false,
  ...props
}: Props) => {
  const allClassName = cx(styles.button, className, {
    [styles.main]: color === 'main',
    [styles.danger]: color === 'danger',
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.l]: size === 'l',
    [styles.outline]: outline,
    [styles.loading]: loading,
    [styles.disabled]: disabled,
  })

  const content = (
    <span className={styles.inner}>
      {children}
      {loading && <LoadingCircle className={styles.loadingCircle} />}
    </span>
  )

  // button
  if (!href) {
    return (
      <button className={allClassName} disabled={disabled} type={type} {...props}>
        {content}
      </button>
    )
  }

  // disabled link
  if (disabled) {
    return (
      <div className={allClassName} {...props}>
        {content}
      </div>
    )
  }

  // push link
  if (push) {
    return (
      <Link className={allClassName} to={href} {...props}>
        {content}
      </Link>
    )
  }

  // link
  return (
    <a className={allClassName} href={href} role="button" {...props}>
      {content}
    </a>
  )
}

export { Button }
