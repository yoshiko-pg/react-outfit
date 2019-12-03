import React, { PropsWithoutRef } from 'react'
import cx from 'classnames'

import styles from './Button.module.css'
import { LoadingCircle } from '../LoadingCircle'

type Props = PropsWithoutRef<JSX.IntrinsicElements['button']> & {
  className?: string
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
  type = 'button',
  outline = false,
  loading = false,
  ...rest
}: Props) => (
  // eslint-disable-next-line react/button-has-type
  <button
    {...rest}
    type={type}
    className={cx(styles.button, className, {
      [styles.main]: color === 'main',
      [styles.danger]: color === 'danger',
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.l]: size === 'l',
      [styles.outline]: outline,
      [styles.loading]: loading,
    })}
  >
    <span className={styles.inner}>
      {children}
      {loading && <LoadingCircle className={styles.loadingCircle} />}
    </span>
  </button>
)

export { Button }
