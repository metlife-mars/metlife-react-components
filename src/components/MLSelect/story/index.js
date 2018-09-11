import React from 'react';

import { action } from '@storybook/react';
import MLSelect from '../component';

/**
 * Storybook for MLTabs
 */
export default (storiesOf, module, ContainerDecorator) => {
  storiesOf('Select', module)
    .addDecorator(ContainerDecorator)
    .addWithInfo('with required props', () =>
      <MLSelect
        onEvent={action('onEvent fired')}
        onChange={action('onChange fired')}
        attributes={{
          choices: []
        }}
      />
    )
    .addWithInfo('with default props', () => <MLSelect />)
    .addWithInfo('with hidden label', () => <MLSelect showLabel={false} />)
    .addWithInfo('with right positioning prop', () => <MLSelect positionRight />)
}
