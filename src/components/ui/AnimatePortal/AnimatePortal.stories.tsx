import React from 'react'
import { storiesOf } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { AnimatePortal, RenderProps } from './AnimatePortal'
import { Button } from '../Button'

const renderButton = ({ open }: RenderProps) => (
  <Button onClick={open} size="s">
    open
  </Button>
)

storiesOf('ui/AnimatePortal', module)
  .add('default', () => (
    <AnimatePortal renderButton={renderButton}>
      The first story for the AnimatePortal component!
    </AnimatePortal>
  ))
  .add('black', () => (
    <AnimatePortal black renderButton={renderButton}>
      The first story for the AnimatePortal component!
    </AnimatePortal>
  ))
  .add('isOpen', () => (
    <AnimatePortal isOpen renderButton={renderButton}>
      The first story for the AnimatePortal component!
    </AnimatePortal>
  ))
  .add('isOpen black', () => (
    <AnimatePortal isOpen black renderButton={renderButton}>
      The first story for the AnimatePortal component!
    </AnimatePortal>
  ))
