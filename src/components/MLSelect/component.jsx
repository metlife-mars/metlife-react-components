import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import set from 'lodash/set';
import OutsideClickHandler from 'react-outside-click-handler';

export class MLSelect extends Component {
    constructor(props) {
        super(props);
        this.onBlurClose = this.onBlurClose.bind(this);
        this.optionType = this.optionType.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.currentSelection = this.currentSelection.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);

        // source: http://ux.metlife.com/patterns/forms.html
        const labelChoice = {
            name: props.label,
            value: props.SELECT_LABEL_ID,
            selected: true,
        };

        this.state = {
            choices: props.showLabel ? [labelChoice, ...props.attributes.choices] : props.attributes.choices,
            selectedIndex: props.selectedIndex,
            showOptions: false
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     if (!(isEqual((get(nextProps, 'attributes.choices')), this.state.choices))) {
    //         this.setState({ choices: get(nextProps, 'attributes.choices') });
    //     }
    // }

    onBlurClose() {
        this.setState({ showOptions: false })
    }

    currentSelection() {
        const selectedName = get(this.state, `choices[${this.state.selectedIndex}].name`);
        return selectedName;
    }

    handleSelection(e, choice, selected, index) {
        let choices = this.state.choices;
        if (choices.length === 0) {
            choices = get(this.props, 'attributes.choices');
        }
        const oldIndex = this.state.selectedIndex;
        if (oldIndex === -1) {
            set(choices[index], 'selected', true);
            this.toggleOptions();
        } else {
            set(choices[oldIndex], 'selected', false);
            set(choices[index], 'selected', true);
            this.toggleOptions();
        }
        this.props.onEvent('change', choices[index]);
        this.props.onChange(
            Object.assign(e, { target: Object.assign(e.target, { value: choices[index].value }) })
        );
        this.props.onEvent('click', choices[index]);
        this.setState({ choices, selectedIndex: index });
    }

    optionType(choices) {
        return (
            <ul className="select-options" role="combobox" aria-expanded tabIndex="0" style={{ display: 'block' }}>
                {choices.map((choice, index) => (
                    <li
                        key={index.toString()}
                        rel=""
                        tabIndex="0"
                        role="listbox"
                        className={index === this.state.selectedIndex ? 'selected' : ''}
                        onClick={(e) => {
                            this.handleSelection(e, choice, true, index);
                        }}
                    >{choice.name}</li>
                ))}
            </ul>
        );
    }

    toggleOptions() {
        const showOptionsCurrent = this.state.showOptions;
        this.setState({ showOptions: !(showOptionsCurrent) });
    }

    render() {
        const { dropdownClassname, dropdownId, label, showLabel, positionRight } = this.props;
        const choices = this.state.choices;

        return (
            <OutsideClickHandler onOutsideClick={this.onBlurClose}>
                <div className={dropdownClassname} id={dropdownId}>
                    <form data-forms="floating-label" className={positionRight? 'ml-form columns right-position' : 'ml-form columns'}>
                        <fieldset className="ml-form-field ml-form-field-select column is-4">
                            <div className={`select ${this.state.showOptions ? 'open' : ''}`}>
                                <label htmlFor="selected-element" className={(showLabel && this.state.selectedIndex === 0) ? 'select-label' : 'select-label selected'}>
                                    <span>{label}</span>
                                </label>
                                    <div className={`select-styled ${this.state.showOptions ? 'open' : ''}`} id="selected-element" onClick={() => this.toggleOptions()} >{this.currentSelection()}</div>
                                    {this.state.showOptions && this.optionType(choices)}
                            </div>
                        </fieldset>
                    </form>
                </div>
            </OutsideClickHandler>
        );
    }
}

MLSelect.propTypes = {
    attributes: PropTypes.shape({
        choiceType: PropTypes.string,
        selectText: PropTypes.string,
        alwaysShowSelectText: PropTypes.bool,
        choices: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.number,
            selected: PropTypes.bool,
        }))
    }),
    dropdownClassname: PropTypes.string,
    dropdownId: PropTypes.string,

    label: PropTypes.string,
    onChange: PropTypes.func,
    onEvent: PropTypes.func,
    positionRight: PropTypes.bool,
    SELECT_LABEL_ID: PropTypes.string,
    selectedIndex: PropTypes.number,
    showLabel: PropTypes.bool,

};

MLSelect.defaultProps = {
    dropdownClassname: '',
    dropdownId: '',
    dropdownFormId: '',
    dropdownFormClassname: 'ml-form',
    fieldsetId: '',
    fieldsetClassname: '',
    triggerButtonId: '',
    triggerButtonClassname: 'ml-button-primary',
    dropdownListId: '',
    dropdownListClassname: '',
    dropdownChoiceId: '',
    dropdownChoiceClassname: '',
    dropdownSelectedClassname: '',

    selectedIndex: 0,
    SELECT_LABEL_ID: 'SELECT_LABEL',
    label: 'Choice Selection',
    showLabel: true,
    positionRight: false,

    attributes: {
        choiceType: 'text',
        selectText: '',
        alwaysShowSelectText: false,
        choices: [
            {
                name: 'Number 1',
                value: 1,
                selected: false
            },
            {
                name: 'Number 2',
                value: 2,
                selected: false
            },
            {
                name: 'Number 3',
                value: 3,
                selected: false
            }
        ]
    },
    onEvent: () => { },
    onChange: () => { }
};

export default MLSelect;
