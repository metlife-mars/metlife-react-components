import React from 'react';
import { action } from '@storybook/react'; // eslint-disable-line 

import MLRadioButton from '../component';

/**
 * Storybook for MLTabs
 */
export default (storiesOf, module, ContainerDecoratorWithDesc) => {
    storiesOf('Radio Button', module)
        .addDecorator(ContainerDecoratorWithDesc(
            'NOTE: This Radio Button is a controlled component'
        ))
        .addWithInfo('with unchecked props', () => {
            return (
                <div>
                    <MLRadioButton name="sameRadio1" item={{ label: 'One', value: 'one', active: false }} />
                </div>
            );
        })
        .addWithInfo('with checked prop', () => {
            return (
                <div>
                    <MLRadioButton name="sameRadio2" item={{ label: 'Two', value: 'two', active: true }} onChange={action('onChange fired')} />
                </div>
            );
        });
};
