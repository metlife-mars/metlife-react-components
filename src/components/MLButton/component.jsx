import React from 'react';
import PropTypes from 'prop-types';

export const MLButton = ({ value, onClick, getRef }) =>
    <button onClick={onClick} ref={getRef} className="ml-button-primary">{value}</button>;

MLButton.prototypes = {
  getRef: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
}

MLButton.defaultProps = {
  getRef: () => {},
  onClick: () => {},
  value: 'Button',
}

export default MLButton;
