import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import { calendar } from './assets/images'
import { MLTextInput } from '../MLTextInput';

export class SingleDatePicker extends Component {
    constructor(props) {
        super(props);

        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onInputBlur = this.onInputBlur.bind(this)

        const { preSelectedDate } = this.props;
        this.state = {
            dateValue: preSelectedDate,
            error: { show: false, message : '' },
        }
    }

    handleChangeDate(date) {
        const { formatValidators, errorMessages, dateFormat } = this.props;
        const dateValue = date.format(dateFormat)
        const error = this.computeError(formatValidators, errorMessages, moment(dateValue, dateFormat))
        this.setState({ dateValue, error }, () => {
            this.props.onChange({ dateValue });
        });
    }

    handleInputChange(e) {
        const { value: dateValue } = e.target;
        this.setState({ dateValue }, () => {
            this.props.onChange({ dateValue });
        })
    }
    onInputBlur(e) {
        const { value: dateValue } = e.target;
        const { formatValidators, errorMessages, dateFormat } = this.props;

        const error = this.computeError(formatValidators, errorMessages, moment(dateValue, dateFormat))
        this.setState({ error });
    }

    computeError(formatValidators, errorMessages, dateValue, dateFormat) {
        const [{ show, message }] = Object.keys(errorMessages).map(key => {
                return {
                    show: !formatValidators[key](dateValue, dateFormat),
                    message: errorMessages[key],
                }
            })

        return { show, message }
    }

    render() {
        const { dateValue, placeholder, error } = this.state
        const { label, dateFormat } = this.props;

        return (
            <div className="ml-datepicker">
                <div className="ml-datepicker-container">

                    <div className="ml-datepicker-input-container">
                        <MLTextInput
                            label={label}
                            name="dateValueInput"
                            placeholder={placeholder}
                            value={dateValue}
                            onChange={this.handleInputChange}
                            onBlur={this.onInputBlur}
                            error={error}
                        />
                        <DatePicker
                            calendarClassName="calendar-styling"
                            popperPlacement="top-end"
                            popperModifiers={{
                                offset: {
                                    enabled: true,
                                    offset: '10px'
                                },
                                preventOverflow: {
                                    enabled: true,
                                    escapeWithReference: false,
                                    boundariesElement: 'viewport'
                                }
                            }}
                            customInput={<img src={calendar} alt="Date Picker" />}
                            tabIndex={0}
                            selectsStart
                            selected={moment(dateValue).isValid() ? moment(dateValue) : moment()}
                            dateFormat={dateFormat}
                            onChange={(date) => this.handleChangeDate(date)}
                        >
                            <div style={{ clear: 'both', position: 'relative' }}>
                                <div style={{ padding: 20, textAlign: 'center', borderTop: '1px solid #0090da' }}>
                                    {moment(dateValue, dateFormat).isValid() ? moment(dateValue, dateFormat).format('dddd, MMMM DD, YYYY') : 'NA'}
                                </div>
                            </div>
                        </DatePicker>
                    </div>
                </div>
            </div>
        );
    }
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

export default SingleDatePicker;
