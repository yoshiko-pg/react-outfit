import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextArea } from './TextArea'

storiesOf('ui/TextArea', module)
  .add('default', () => <TextArea value="The first story for the TextArea component!" />)
  .add('plaseholder', () => (
    <TextArea placeholder="The first story for the TextArea component!" value="" />
  ))
  .add('disabled', () => <TextArea value="The first story for the TextArea component!" disabled />)
  .add('isError', () => <TextArea value="The first story for the TextArea component!" isError />)
