import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

import { AnimateToggle } from '../AnimateToggle'

import styles from './AnimatePortal.module.css'

const noop = () => {}

// renderButton, renderContentが受け取るprops
export type RenderProps = {
  open: () => void
  close: () => void
  isOpen: boolean
}

type Props = {
  className?: string
  onOpen?: () => void
  onClose?: () => void
  isOpen?: boolean
  renderButton?: (props: RenderProps) => React.ReactNode
  renderContent?: (props: RenderProps) => React.ReactNode
  children?: React.ReactNode
  parentRef?: HTMLElement | null
  black?: boolean
}

const AnimatePortal = ({
  className,
  onOpen = noop,
  onClose = noop,
  isOpen: isOpenFromOuter = false,
  renderButton,
  renderContent,
  children,
  parentRef,
  black = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(isOpenFromOuter)

  const open = useCallback(() => {
    onOpen()
    setIsOpen(true)
  }, [onOpen])

  const close = useCallback(() => {
    onClose()
    setIsOpen(false)
  }, [onClose])

  useEffect(() => {
    isOpen ? open() : close()
    // 開いたままunmountされるときはonCloseを呼ぶ
    return isOpen ? onClose : noop
  }, [open, close, onClose, isOpen])

  const [parentElement, setParentElement] = useState(parentRef)

  useEffect(() => {
    setParentElement(parentRef || window.document.getElementById('root'))
  }, [parentRef])

  const renderProps = { open, close, isOpen }
  const button = renderButton ? renderButton(renderProps) : null
  const content = renderContent ? renderContent(renderProps) : children

  return (
    <>
      {button}
      {parentElement
        ? ReactDOM.createPortal(
            <AnimateToggle className={styles.portalLayer} isShowing={isOpen}>
              <button
                className={cx(styles.closeLayer, { [styles.closeLayerBlack]: black })}
                onClick={close}
                type="button"
                tabIndex={-1}
              />
              <div className={cx(styles.contentLayer, className)}>{content}</div>
            </AnimateToggle>,
            parentElement,
          )
        : null}
    </>
  )
}

export { AnimatePortal }
