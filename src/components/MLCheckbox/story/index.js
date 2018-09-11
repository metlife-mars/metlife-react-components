import React from 'react';

import { action } from '@storybook/react';
import MLCheckbox from '../component';

/**
 * Storybook for MLTabs
 */
export default (storiesOf, module, ContainerDecoratorWithDesc) => {
  storiesOf('Checkbox', module)
    .addDecorator(ContainerDecoratorWithDesc(
      'NOTE: This Checkbox is a controlled component'
    ))
    .addWithInfo('with required props', () =>
      <MLCheckbox
        onChange={action('onChange fired')}
        name="Checkbox"
        checked
      />
    )
    .addWithInfo('with default props', () => <MLCheckbox />)
}
