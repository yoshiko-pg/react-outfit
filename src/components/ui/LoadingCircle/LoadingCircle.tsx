import React from 'react'
import cx from 'classnames'

import styles from './LoadingCircle.module.css'

type Props = {
  className?: string
}

export const LoadingCircle = ({ className }: Props) => (
  <div className={cx(styles.loadingCircle, className)}>
    <svg className={styles.circle} viewBox="25 25 50 50">
      <circle
        className={styles.path}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  </div>
)
