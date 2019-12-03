import React from 'react'
import { storiesOf } from '@storybook/react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { Link } from './Link'

storiesOf('ui/Link', module)
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  .add('default', () => <Link>Link Button</Link>)
  .add('@href', () => <Link href="/">Normal Link</Link>)
  .add('@onClick', () => <Link onClick={action('onClick')}>Button</Link>)
  .add('@disabled', () => (
    <Link href="/" disabled>
      Disabled Button
    </Link>
  ))
  .add('@withoutStyle', () => (
    <Link href="/" withoutStyle>
      Link without Link style
    </Link>
  ))
