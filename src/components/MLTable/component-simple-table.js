import React from 'react';
import PropTypes from 'prop-types';
import values from 'lodash/values';

import ReactTable from 'react-table';

export const MLSimpleTable = ({ rows, columns, sorted }) => {
    return (
        <ReactTable
            columns={columns}
            data={rows}
            sorted={sorted}
            defaultPageSize={rows.length}
            showPagination={false}
        />
    );
};

/**
 * Allow { [key: string]: string }
 * or
 * { [key: string]: { value: string, alertMessage: string } }
 */
export const rowShape = (props, propName) => {
    const rowValues = values(props[propName]);

    const validShape = rowValues.every(
        value => typeof value === 'string' || typeof value === 'number'
        || (Boolean(value) && value.value && value.alertMessage)
        || (value === null)
    );

    if (!validShape) {
        console.log('[rowShape]', rowValues);
        return new Error('[rowShape] Expected { [key: string]: string | { value: string, alertMessage: string } } ');
    }
    return true;
};

MLSimpleTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            accessor: PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.string
            ]),
            Cell: PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.node,
            ]),
            className: PropTypes.string,
            Header: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.func,
                PropTypes.node,
            ]),
            id: PropTypes.string,
        })
    ),
    rows: PropTypes.arrayOf(
        rowShape
    )
};


MLSimpleTable.defaultProps = {
    columns: [],
    rows: [],
};

export default MLSimpleTable;
