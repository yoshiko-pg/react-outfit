import React, { PropsWithoutRef } from 'react'
import cx from 'classnames'

import styles from './Checkbox.module.css'

type Props = PropsWithoutRef<JSX.IntrinsicElements['input']> & {
  children?: React.ReactNode
  className?: string
  isError?: boolean
}

const Checkbox = ({ children, className, isError, ...rest }: Props) => (
  <label className={cx(styles.label, className)}>
    <input className={styles.realCheckbox} type="checkbox" {...rest} />
    <span
      className={cx(styles.checkbox, {
        [styles.isError]: isError,
      })}
    >
      <i className={styles.checkMark} />
    </span>
    {children ? <span>{children}</span> : null}
  </label>
)

export { Checkbox }
