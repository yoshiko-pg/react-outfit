import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Select } from './Select'

const options = [
  { key: 'Hoge', value: 'hoge' },
  { key: 'Fuga', value: 'fuga' },
  { key: 'Piyo', value: 'piyo' },
]

storiesOf('ui/Select', module)
  .add('default', () => <Select values={options} onChange={action('onChange')} />)
  .add('value=piyo', () => <Select value="piyo" values={options} onChange={action('onChange')} />)
  .add('disabled', () => (
    <Select value="piyo" values={options} onChange={action('onChange')} disabled />
  ))
  .add('isError', () => (
    <Select value="piyo" values={options} onChange={action('onChange')} isError />
  ))
