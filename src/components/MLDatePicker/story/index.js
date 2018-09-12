import React from 'react';
import moment from 'moment';

import { action } from '@storybook/react';
import MLDatePicker from '../component';

/**
 * Storybook for MLTabs
 */
export default (storiesOf, module, ContainerDecoratorWithDesc) => {

storiesOf('DatePicker', module)
  .addDecorator(ContainerDecoratorWithDesc(
    'NOTE: This Checkbox is a controlled component'
  ))
  .addWithInfo('with single picker', () => <MLDatePicker onChange={action('onChange')} />)
  .addWithInfo('with range picker', () => <MLDatePicker rangePicker onChange={action('onChange')} />)
  .addWithInfo('with preselected date props', () => {
    return (
        <MLDatePicker
            fromDate={moment()}
            toDate={moment().add(1, 'weeks')}
            errorObjects={{
                from: { show: false, message: "From date is malformatted" },
                to: { show: false, message: "To date is malformatted" },
            }}
            formatValidators={{
                from: function (date) {
                    if (moment(date, 'MM/DD/YYYY', true).isValid()) return true
                    return false
                },
                to: function (date) {
                    if (moment(date, 'MM/DD/YYYY', true).isValid()) return true
                    return false
                },
            }}
            onChange={action('onChange')}
        />
    )
  })
  .addWithInfo('with min/max date range props', () => {
    return (
        <MLDatePicker
            placeholder="Your placeholder text here"
            dateFormat="MM/DD/YYYY"
            minDate={moment()}
            maxDate={moment().add(2, 'weeks')}
            onChange={action('[[ onChange Event ]]')}
            rangePicker
        />
    )
  })
  .addWithInfo('with error props', () => {
    return (
        <MLDatePicker
            errorObjects={{
                from: { show: false, message: "From date is malformatted" },
                to: { show: false, message: "To date is malformatted" },
            }}
            formatValidators={{
                from: function (date) {
                    if (moment(date, 'MM/DD/YYYY', true).isValid()) return true
                    return false
                },
                to: function (date) {
                    if (moment(date, 'MM/DD/YYYY', true).isValid()) return true
                    return false
                },
            }}
            onChange={action('[[ onChange Event ]]')}
        />
    )
  });
}