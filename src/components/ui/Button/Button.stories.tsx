import React from 'react'
import { storiesOf } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { Button } from './Button'

storiesOf('ui/Button', module)
  .add('default', () => (
    <>
      <Button>button</Button>
      <Button href="/" outline>
        button
      </Button>
      <Button disabled>button</Button>
      <Button href="/" outline disabled>
        button
      </Button>
    </>
  ))
  .add('danger', () => (
    <>
      <Button color="danger">button</Button>
      <Button href="/" color="danger" outline>
        button
      </Button>
      <Button color="danger" disabled>
        button
      </Button>
      <Button href="/" color="danger" outline disabled>
        button
      </Button>
    </>
  ))
  .add('size=s', () => <Button size="s">button</Button>)
  .add('size=m', () => <Button size="m">button</Button>)
  .add('size=l', () => <Button size="l">button</Button>)
  .add('loading', () => (
    <>
      <Button size="s" loading href="/">
        button
      </Button>
      <Button size="m" loading>
        button
      </Button>
      <Button size="l" loading>
        button
      </Button>
      <Button outline size="s" loading href="/">
        button
      </Button>
      <Button outline size="m" loading>
        button
      </Button>
      <Button outline size="l" loading>
        button
      </Button>
    </>
  ))
