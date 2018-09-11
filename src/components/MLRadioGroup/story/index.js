import React from 'react';

import { action } from '@storybook/react'; // eslint-disable-line

import MLRadioGroup from '../component';

/**
 * Storybook for MLTabs
 */
export default (storiesOf, module, ContainerDecorator) => {
    storiesOf('Radio Group', module)
        .addDecorator(ContainerDecorator)
        .addWithInfo('with vertical view', () => {
            return (
                <MLRadioGroup
                    name="viewBy"
                    items={[
                        { label: 'Coverages', value: 'coverages', active: true },
                        { label: 'Brokers', value: 'brokers', active: false },
                        { label: 'Sales', value: 'sales', active: false },
                        { label: 'Summary', value: 'summary', active: false },
                    ]}
                    onChange={action('selected item')}
                />
            );
        })
        .addWithInfo('with horizontal view', () => {
            return (
                <MLRadioGroup
                    name="viewBy"
                    items={[
                        { label: 'Coverages', value: 'coverages', active: true },
                        { label: 'Brokers', value: 'brokers', active: false },
                        { label: 'Sales', value: 'sales', active: false },
                        { label: 'Summary', value: 'summary', active: false },
                    ]}
                    horizontal
                    onChange={action('selected item')}
                />
            );
        });
};
