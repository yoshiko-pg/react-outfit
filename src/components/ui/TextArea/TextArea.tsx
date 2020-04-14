import React, { PropsWithoutRef } from 'react'
import cx from 'classnames'

import styles from './TextArea.module.css'

type Props = PropsWithoutRef<JSX.IntrinsicElements['textarea']> & {
  className?: string
  value: string
  isError?: boolean
}

const TextArea = ({ className, isError, ...rest }: Props) => (
  <textarea
    className={cx(styles.textArea, className, {
      [styles.isError]: isError,
    })}
    {...rest}
  />
)

export { TextArea }
