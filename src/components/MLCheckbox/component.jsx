import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import camelCase from 'lodash/camelCase';

export const MLCheckbox = ({
    name, checked, value, onChange, className,
}) => {
    const checkboxId = camelCase(name) + Math.random();
    return (
        <label className={cn('cb-container', className)} htmlFor={checkboxId}>
            {name}
            <input id={checkboxId} type="checkbox" checked={checked} value={value} onChange={onChange} />
            <span className="checkmark" />
        </label>
    );
};

MLCheckbox.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

MLCheckbox.defaultProps = {
    checked: false,
    className: '',
    name: 'Checkbox',
    onChange: () => {},
    value: '',
};

export default MLCheckbox;
