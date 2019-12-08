import React from 'react'
import cx from 'classnames'

import { Clickable } from '../Clickable'

import styles from './Link.module.css'

type Props = React.ComponentProps<typeof Clickable> & {
  withoutStyle?: boolean
}

const Link = (props: Props) => {
  const { children, className, disabled, withoutStyle = false, ...rest } = props

  const allClassName = cx(
    styles.reset,
    { [styles.link]: !withoutStyle, [styles.disabled]: disabled },
    className,
  )

  return (
    <Clickable className={allClassName} disabled={disabled} {...rest}>
      {children}
    </Clickable>
  )
}

export { Link }
