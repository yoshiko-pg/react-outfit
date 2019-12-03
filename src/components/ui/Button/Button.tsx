import React, { PropsWithoutRef } from 'react'
import cx from 'classnames'

import styles from './Button.module.css'

type Props = PropsWithoutRef<JSX.IntrinsicElements['button']> & {
  className?: string
  color?: 'main' | 'danger'
  size?: 's' | 'm' | 'l'
  outline?: boolean
}

const Button = ({
  children,
  className,
  color = 'main',
  size = 'm',
  type = 'button',
  outline = false,
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
    })}
  >
    {children}
  </button>
)

export { Button }
