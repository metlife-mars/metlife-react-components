import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @NOTE this is a controlled component
export const MLTextInput = ({
    label, placeholder, textFieldId, onChange, onBlur, value, error
}) => {
    return (
        <div className="ml-text-input">
            <label htmlFor={textFieldId} >
                <input
                    type="text"
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    id={textFieldId}
                    className={cn((value || placeholder) ? 'has-value' : '', error.isShown ? 'error' : '')}
                />
                <span>{label}</span>
            </label>
            <div className={error.isShown ? 'errortext' : 'no-error'}>{error.message}</div>
        </div>
    );
};

MLTextInput.propTypes = {
    error: PropTypes.shape({
        isShown: PropTypes.bool,
        message: PropTypes.string,
    }),
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    textFieldId: PropTypes.string,
    value: PropTypes.string
};

MLTextInput.defaultProps = {
    textFieldId: 'input-id',
    value: '',
    placeholder: '',
    label: 'Search',
    error: {
        isShown: false,
        message: 'Invalid Input',
    },
    onBlur: null,
    onChange: null
};

export default MLTextInput;
