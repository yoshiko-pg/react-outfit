import React from 'react'
import { storiesOf } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { Clickable } from './Clickable'

storiesOf('ui/Clickable', module).add('default', () => (
  <Clickable>The first story for the Clickable component!</Clickable>
))
