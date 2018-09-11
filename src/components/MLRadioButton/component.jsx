import React from 'react';
import PropTypes from 'prop-types';

export const MLRadioButton = ({
    name, item, horizontal, onChange
}) => {
    return (
        <div className={horizontal ? 'ml-radio-button-group horizontal' : 'ml-radio-button-group'}>
            <input id={item.label}
                checked={item.active}
                type="radio"
                name={name}
                onChange={(e) => { onChange(e, item); }}
            />
            <label htmlFor={item.label}>{item.label}</label>
        </div>
    );
};

MLRadioButton.propTypes = {
    horizontal: PropTypes.bool,
    item: PropTypes.shape({
        active: PropTypes.bool,
        label: PropTypes.string,
        value: PropTypes.any,
    }),
    name: PropTypes.string,
    onChange: PropTypes.func,
};

MLRadioButton.defaultProps = {
    item: {
        label: 'Radio Button Name',
        value: 'name',
        active: false
    },
    horizontal: false,
    name: 'radioButton',
    onChange: () => console.log('[[ defaultProps onClick ]]')
};

export default MLRadioButton;
