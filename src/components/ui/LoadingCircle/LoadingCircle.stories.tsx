import React from 'react'
import { storiesOf } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { LoadingCircle } from './LoadingCircle'

storiesOf('ui/LoadingCircle', module).add('default', () => (
  <LoadingCircle>The first story for the LoadingCircle component!</LoadingCircle>
))
