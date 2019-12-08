import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import cx from 'classnames'

import styles from './AnimateToggle.module.css'

type Props = {
  children?: React.ReactNode
  className?: string
  transitionTime?: number
  isShowing: boolean
}

const AnimateToggle = ({ children, className, transitionTime = 200, isShowing }: Props) => (
  <CSSTransitionGroup
    className={cx(styles.animateToggle, className)}
    transitionName={{
      appear: styles.appear,
      appearActive: styles.appearActive,
      enter: styles.enter,
      enterActive: styles.enterActive,
      leave: styles.leave,
      leaveActive: styles.leaveActive,
    }}
    transitionAppearTimeout={transitionTime}
    transitionEnterTimeout={transitionTime}
    transitionLeaveTimeout={transitionTime}
  >
    {isShowing ? children : null}
  </CSSTransitionGroup>
)

export { AnimateToggle }
