import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RangeDatePicker from './range-component';
import SingleDatePicker from './single-component';


export class MLDatePicker extends Component {
    render() {
        const { rangePicker } = this.props;

        return (
           
            rangePicker
            ? <RangeDatePicker {...this.props} />
            : <SingleDatePicker {...this.props} />

        );
    }
}

MLDatePicker.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    dateFormat: PropTypes.string,
    fromDate: PropTypes.object,
    toDate: PropTypes.object,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    formatValidators: PropTypes.object,
    errorObjects: PropTypes.object,
    onApply: PropTypes.func,
    onChange: PropTypes.func,
};

MLDatePicker.defaultProps = {
    title: "ENTER TITLE HERE:",
    placeholder: "<MM/DD/YYYY>",
    dateFormat: "MM/DD/YYYY",
    fromDate: null,
    toDate: null,
    minDate: null,
    maxDate: null,
    onApply: () => {},
    onChange: () => {},
};

export default MLDatePicker;