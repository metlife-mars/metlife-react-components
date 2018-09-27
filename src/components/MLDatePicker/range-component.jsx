import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import { calendar } from './assets/images'
import { MLTextInput } from '../MLTextInput';


export class RangeDatePicker extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onInputBlur = this.onInputBlur.bind(this)

        this.state = {
            title: props.title,
            placeholder: props.placeholder,
            dateFormat: props.dateFormat,
            from: props.fromDate ? props.fromDate.format(props.dateFormat) : "",
            to: props.toDate ? props.toDate.format(props.dateFormat) : "",
            fromDate: props.fromDate,
            toDate: props.toDate,
            minDate: props.minDate,
            maxDate: props.maxDate,
            errors: props.errorObjects,
        }
    }

    handleClick(e) {
        e.preventDefault()
        // console.log("[[ this.props.onApply() ]]")
        const { from, to } = this.state
        this.props.onApply({ from, to })
    }

    handleChangeDate(name, date) {
        const momentDate = name + "Date"
        const { errors, dateFormat } = this.state;
        this.setState({
            [momentDate]: date, [name]: date.format(dateFormat),
            errors: { ...errors, [name]: { ...errors[name], show: false } }
        }, () => {
            // @TODO how can we achieve this without using callback?
            const { from, to } = this.state
            this.props.onChange({ from, to })
        })
    }

    handleInputChange(e) {
        const name = e.target.name
        const value = e.target.value

        this.setState({ [name]: value })
    }
    onInputBlur(e) {
        const name = e.target.name
        const value = e.target.value
        const momentDate = name + "Date"

        this.setState((state) => {
            let errors = state.errors;
            let error = errors[name];
            
            error = { ...error, show: !this.props.formatValidators[name](value) }
            errors = { ...errors, [name]: error }
            return { errors }
        }, () => {
            if (!this.state.errors[name].show) {
                this.setState({ [momentDate]: moment(value, this.state.dateFormat) })
            }
        })
    }

    render() {
        const { title, from, to, fromDate, toDate, minDate, maxDate, errors, placeholder } = this.state

        return (
            <div className="ml-datepicker">
                <div className="ml-datepicker-container">

                    <div className="ml-datepicker-input-container">
                        <MLTextInput
                            label="From"
                            value={from}
                            placeholder={placeholder}
                            onChange={this.handleInputChange}
                            onBlur={this.onInputBlur}
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
                            customInput={<img src={calendar} alt="" />}
                            selectsStart
                            selected={fromDate}
                            minDate={minDate}
                            maxDate={maxDate}
                            startDate={fromDate}
                            endDate={toDate}
                            onChange={(date) => this.handleChangeDate('from', date)}
                        />
                    </div>

                    {errors.from.show ? <span className="ml-datepicker-error-message-active">{errors.from.message}</span> : <span className="ml-datepicker-error-message" />}

                    <div className="ml-datepicker-input-container">
                        <MLTextInput
                            label="To"
                            value={to}
                            placeholder={placeholder}
                            onChange={this.handleInputChange}
                            onBlur={this.onInputBlur}
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
                            customInput={<img src={calendar} alt="" />}
                            selectsEnd
                            selected={toDate}
                            minDate={fromDate ? fromDate : minDate}
                            maxDate={maxDate}
                            startDate={fromDate}
                            endDate={toDate}
                            onChange={(date) => this.handleChangeDate('to', date)}
                        />

                    </div>

                    {errors.to.show ? <span className="ml-datepicker-error-message-active">{errors.to.message}</span> : <span className="ml-datepicker-error-message" />}

                    {/* <button className="ml-datepicker-button-primary" onClick={this.handleClick}>apply</button> */}
                </div>
            </div>
        );
    }
}

RangeDatePicker.propTypes = {
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

RangeDatePicker.defaultProps = {
    title: "ENTER TITLE HERE:",
    placeholder: "<MM/DD/YYYY>",
    dateFormat: "MM/DD/YYYY",
    fromDate: null,
    toDate: null,
    minDate: null,
    maxDate: null,
    formatValidators: {
        from: function (date) {
            if (moment(date, 'MM/DD/YYYY', true).isValid()) return true
            return false
        },
        to: function (date) {
            if (moment(date, 'MM/DD/YYYY', true).isValid()) return true
            return false
        },
    },
    errorObjects: {
        from: { show: false, message: "From date is malformatted" },
        to: { show: false, message: "To date is malformatted" },
    },
    onApply: () => console.log("[[ Default Apply ]]"),
    onChange: () => console.log("[[ Default Change ]]"),
};

export default RangeDatePicker;