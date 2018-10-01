import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import SingleDatePicker from './single-component';

export const MLDatePicker  = (props) => {
    return (
        <SingleDatePicker {...props} />
    );
}

SingleDatePicker.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    preSelectedDate: PropTypes.string,
    dateFormat: PropTypes.string,
    formatValidators: PropTypes.object,
    errorMessages: PropTypes.object,
    onChange: PropTypes.func, // onChange({ dateValue: string })
};

SingleDatePicker.defaultProps = {
    label: 'Date Input',
    placeholder: "MM/DD/YYYY",
    preSelectedDate: undefined,
    dateFormat: "MM/DD/YYYY",
    formatValidators: {
        hasFullDate(dateValue, dateFormat) {
            if (moment(dateValue, dateFormat, true).isValid()) return true
            return false
        },
    },
    errorMessages: {
        hasFullDate: "Date is malformatted",
    },
    onChange: () => {},
};


export default MLDatePicker;