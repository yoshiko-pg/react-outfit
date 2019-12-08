import React from 'react'
import cx from 'classnames'

import { Button } from '../../ui/Button'
import { Link } from '../../ui/Link'
import { LoadingCircle } from '../../ui/LoadingCircle'
import { Modal } from '../../ui/Modal'

import styles from './Top.module.css'

type Props = {
  className?: string
}

export const Top = ({ className }: Props) => (
  <div className={cx(styles.top, className)}>
    <header className={styles.header}>
      <div className={styles.mainImage} />
      <h1 className={styles.title}>react-outfit</h1>
    </header>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Button</h2>
      <div className={styles.showcase}>
        <Button size="s">Click me</Button>
        <Button size="s" outline>
          Click me
        </Button>
        <Button size="s" color="danger">
          Click me
        </Button>
        <Button size="s" color="danger" outline>
          Click me
        </Button>
        <Button size="s" disabled>
          Click me
        </Button>
        <Button size="s" outline disabled>
          Click me
        </Button>
        <Button size="s" loading>
          Click me
        </Button>
      </div>
      <div className={styles.showcase}>
        <Button size="m">Click me</Button>
        <Button size="m" outline>
          Click me
        </Button>
        <Button size="m" color="danger">
          Click me
        </Button>
        <Button size="m" color="danger" outline>
          Click me
        </Button>
        <Button size="m" disabled>
          Click me
        </Button>
        <Button size="m" outline disabled>
          Click me
        </Button>
        <Button size="m" loading>
          Click me
        </Button>
      </div>
      <div className={styles.showcase}>
        <Button size="l">Click me</Button>
        <Button size="l" outline>
          Click me
        </Button>
        <Button size="l" color="danger">
          Click me
        </Button>
        <Button size="l" color="danger" outline>
          Click me
        </Button>
        <Button size="l" disabled>
          Click me
        </Button>
        <Button size="l" outline disabled>
          Click me
        </Button>
        <Button size="l" loading>
          Click me
        </Button>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Link</h2>
      <div className={styles.showcase}>
        <Link href="/">@href = Normal Link</Link>
        <Link onClick={() => {}}>Button Link</Link>
        <Link href="/" disabled>
          @disabled = Disabled Button Link
        </Link>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>LoadingCircle</h2>
      <div className={styles.showcase}>
        <LoadingCircle className={styles.loadingCircle} />
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Modal</h2>
      <div className={styles.showcase}>
        <Modal renderButton={({ open }) => <Button onClick={open}>Open</Button>}>
          <h2 className={styles.sectionTitle}>Hello</h2>
          <p>This is modal content.</p>
        </Modal>
      </div>
    </section>
  </div>
)
