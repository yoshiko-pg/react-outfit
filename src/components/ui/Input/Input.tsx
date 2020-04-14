import React, { PropsWithoutRef } from 'react'
import cx from 'classnames'

import styles from './Input.module.css'

type Props = PropsWithoutRef<JSX.IntrinsicElements['input']> & {
  className?: string
  inputSize?: 'm'
  isError?: boolean
}

const Input = ({ className, isError, inputSize = 'm', ...rest }: Props) => (
  <input
    className={cx(styles.input, className, {
      [styles.m]: inputSize === 'm',
      [styles.isError]: isError,
    })}
    {...rest}
  />
)

export { Input }
