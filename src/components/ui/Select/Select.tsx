import React, { PropsWithoutRef } from 'react'
import cx from 'classnames'

import styles from './Select.module.css'

type Props = PropsWithoutRef<JSX.IntrinsicElements['select']> & {
  className?: string
  values: { key: string; value: string }[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  isError?: boolean
}

const Select = ({ className, values, onChange, isError, ...rest }: Props) => {
  return (
    <div className={styles.wrapper}>
      <select
        className={cx(styles.select, className, {
          [styles.isError]: isError,
        })}
        onChange={onChange}
        {...rest}
      >
        {!values.find(v => v.value === rest.value) ? (
          <option value={rest.value}>選択</option>
        ) : null}
        {values.map(({ key, value: optionValue }) => (
          <option value={optionValue} key={optionValue}>
            {key}
          </option>
        ))}
      </select>
    </div>
  )
}

export { Select }
