import React, { useCallback } from 'react'
import cx from 'classnames'

import { AnimatePortal, RenderProps as AnimarePortalRenderProps } from '../AnimatePortal'

import styles from './Modal.module.css'

export type RenderProps = AnimarePortalRenderProps

type Props = {
  children?: React.ReactNode
  className?: string

  onOpen?: () => void
  onClose?: () => void
  isOpen?: boolean
  renderButton?: (props: RenderProps) => React.ReactNode
  renderContent?: (props: RenderProps) => React.ReactNode
}

const Modal = ({
  children,
  className,
  onOpen: onOpenFromOuter,
  onClose: onCloseFromOuter,
  isOpen,
  renderButton,
  renderContent,
}: Props) => {
  const onOpen = useCallback(() => {
    window.document.documentElement.classList.add(styles.modalOpeningBody)
    if (onOpenFromOuter) onOpenFromOuter()
  }, [onOpenFromOuter])
  const onClose = useCallback(() => {
    window.document.documentElement.classList.remove(styles.modalOpeningBody)
    if (onCloseFromOuter) onCloseFromOuter()
  }, [onCloseFromOuter])

  return (
    <AnimatePortal
      className={cx(styles.modal, className)}
      onOpen={onOpen}
      onClose={onClose}
      isOpen={isOpen}
      renderButton={renderButton}
      renderContent={props => (
        <div className={styles.modalInner}>
          <div className={styles.modalContent}>
            {renderContent ? renderContent(props) : children}
          </div>
          <button className={styles.closeButton} onClick={props.close} type="button">
            x
          </button>
        </div>
      )}
      black
    />
  )
}

export { Modal }
