import React from 'react';

import MLDropdown from '../component';

/**
 * Storybook for MLDropdown
 */
export default (storiesOf, module, ContainerDecorator) => {
  storiesOf('Dropdown', module)
    .addDecorator(ContainerDecorator)
    .addWithInfo('with required props', () =>
      <MLDropdown name="Customize View" >
        <div style={{ padding: 20, height: 250 }}> Child Component </div>
      </MLDropdown>
    )
    .addWithInfo('with right positioning prop', () =>
      <MLDropdown name="Customize View" positionRight>
        <div style={{ padding: 20, height: 250 }}> Child Component </div>
      </MLDropdown>
    )
    .addWithInfo('with default props', () => <MLDropdown />)
}
