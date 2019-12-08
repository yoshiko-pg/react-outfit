import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { AnimateToggle } from './AnimateToggle'
import { Button } from '../Button'

storiesOf('ui/AnimateToggle', module).add('default', () => {
  const [flag, setFlag] = useState(false)
  return (
    <>
      <Button onClick={() => setFlag(!flag)} size="s">
        toggle
      </Button>

      <AnimateToggle isShowing={flag}>
        <div>The first story for the AnimateToggle component!</div>
      </AnimateToggle>
    </>
  )
})
