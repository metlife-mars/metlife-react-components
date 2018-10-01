import React from 'react';
import moment from 'moment';

import { action } from '@storybook/react';
import MLDatePicker from '../component';

/**
 * Storybook for MLTabs
 */
export default (storiesOf, module, ContainerDecorator) => {

storiesOf('DatePicker', module)
  .addDecorator(ContainerDecorator)
  .addWithInfo('with single picker', () => <MLDatePicker onChange={action('onChange Event')} />)
  .addWithInfo('with preselected date props',
    'Note that "preSelectedDate" prop is applied only during component instantiation',
    () => {
        return (
            <MLDatePicker
                preSelectedDate="12/23/2018"
                dateFormat="MM/DD/YYYY"
                onChange={action('onChange Event')}
            />
        )
  })
  .addWithInfo('with error props',
    'Error checking happens onBlur',
    () => {
        return (
            <MLDatePicker
                errorMessages={{
                    hasFullDate: "Input Date is malformatted",
                }}
                formatValidators={{
                    hasFullDate(date, format) {
                        if (moment(date, format, true).isValid()) return true
                        return false
                    },
                }}
                onChange={action('[[ onChange Event ]]')}
            />
        )
  });
}