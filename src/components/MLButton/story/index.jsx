import React from 'react';
import { action } from '@storybook/react'; // eslint-disable-line 
import { withNotes } from '@storybook/addon-notes'; // eslint-disable-line

import { MLButton } from '../component';

export let domNode = null;
export function createDomReference(e) {
    domNode = e;
}
/**
 * Storybook for MLTabs
 */
export default (storiesOf, module, ContainerDecorator) => {
    storiesOf('Button', module)
        .addDecorator(ContainerDecorator)
        .addWithInfo('with onClick prop', () => <MLButton value="Click" onClick={action('MLButton clicked')} />)    
        .addWithInfo('with getRef prop', withNotes('Useful for accessibility focused apps')(() => <MLButton value="Click" getRef={createDomReference} />))   
        .addWithInfo('with default props', withNotes('The button text is passed as value')(() => <MLButton />));
};
