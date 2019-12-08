import React from 'react'
import { storiesOf } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { Modal, RenderProps } from './Modal'
import { Button } from '../Button'

const renderButton = ({ open }: RenderProps) => (
  <Button onClick={open} size="s">
    open
  </Button>
)

storiesOf('ui/Modal', module)
  .add('default', () => (
    <Modal renderButton={renderButton}>The first story for the Modal component!</Modal>
  ))
  .add('isOpen', () => (
    <Modal isOpen renderButton={renderButton}>
      The first story for the Modal component!
    </Modal>
  ))
  .add('Long modal', () => (
    <Modal isOpen renderButton={renderButton}>
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
      The first story for the Modal component!
      <br />
    </Modal>
  ))
