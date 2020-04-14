import React from 'react'
import { storiesOf } from '@storybook/react'

import { Checkbox } from './Checkbox'

storiesOf('ui/Checkbox', module)
  .add('default', () => <Checkbox />)
  .add('children', () => <Checkbox>label text</Checkbox>)
  .add('checked', () => <Checkbox checked />)
  .add('disabled', () => <Checkbox disabled />)
  .add('disabled checked', () => <Checkbox disabled checked />)
  .add('isError', () => <Checkbox isError />)
  .add('isError checked', () => <Checkbox isError checked />)
