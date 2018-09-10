import React from 'react';
import PropTypes from 'prop-types';

export const MLTableTitle = ({ title, titleClassName }) => {
    return (title) ? <div className={titleClassName}>{title}</div> : null;
};

MLTableTitle.propTypes = {
    title: PropTypes.string,
    titleClassName: PropTypes.string,
};

MLTableTitle.defaultProps = {
    title: '',
    titleClassName: 'ml-table-title',
};

export default MLTableTitle;
