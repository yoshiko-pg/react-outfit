import React from 'react'
import { storiesOf } from '@storybook/react'

import { Input } from './Input'

storiesOf('ui/Input', module)
  .add('default', () => <Input value="hoge" />)
  .add('plaseholder', () => <Input placeholder="hoge" value="" />)
  .add('disabled', () => <Input value="hoge" disabled />)
  .add('isError', () => <Input value="hoge" isError />)
