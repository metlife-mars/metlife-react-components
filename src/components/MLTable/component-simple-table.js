import React from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';

export const MLSimpleTable = ({ rows, columns }) => {
    return (
        <ReactTable
            columns={columns}
            data={rows}
            defaultPageSize={rows.length}
            showPagination={false}
        />
    );
};

MLSimpleTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            accessor: PropTypes.string,
            Cell: PropTypes.node,
            className: PropTypes.string,
            Header: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node
            ]),
            id: PropTypes.string,
        })
    ),
    rows: PropTypes.arrayOf(PropTypes.any),
};


MLSimpleTable.defaultProps = {
    columns: [],
    rows: [],
};

export default MLSimpleTable;
