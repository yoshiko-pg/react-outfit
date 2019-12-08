import React from 'react'
import cx from 'classnames'

import { Clickable } from '../Clickable'
import { LoadingCircle } from '../LoadingCircle'

import styles from './Button.module.css'

type Props = React.ComponentProps<typeof Clickable> & {
  withoutStyle?: boolean
  color?: 'main' | 'danger'
  size?: 's' | 'm' | 'l'
  outline?: boolean
  loading?: boolean
}

const Button = ({
  children,
  className,
  color = 'main',
  size = 'm',
  outline = false,
  loading = false,
  disabled = false,
  ...rest
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

  return (
    <Clickable className={allClassName} disabled={disabled} {...rest}>
      {content}
    </Clickable>
  )
}

export { Button }
