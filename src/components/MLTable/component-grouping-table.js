import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash/assign';

import ReactTable from 'react-table';
import treeTableHOC from 'react-table/lib/hoc/treeTable';

const TreeTable = treeTableHOC(ReactTable);

export const MLGroupingTable = ({
    rows, columns, groupBy, icons, defaultIcon
}) => {
    const groupNames = rows.map(row => row[groupBy])
        .reduce((ac, val) => [...ac, ...ac.includes(val) ? [] : [val]], []);
    // => ['group 1', 'group 2']

    const expanded = groupNames.reduce(
        (ac, _, i) => assign({}, ac, { [i]: {} }),
        {}
    ); // => { 0: {}, 1: {} }

    return (
        <TreeTable
            columns={columns}
            data={rows}
            pivotBy={[groupBy]}
            collapseOnSortingChange={false}
            defaultPageSize={groupNames.length}
            showPagination={false}
            expanded={expanded}
            PivotComponent={({ value }) => {
                const icon = icons ? icons[value] : defaultIcon;
                return (
                    <span style={{ display: 'flex', paddingLeft: 20 }}>
                        {icon && (
                            <img
                                style={{ height: 20, width: 'auto' }}
                                src={icon}
                                alt={value}
                            />
                        )}
                        <span style={{ paddingLeft: 10, fontWeight: 'bold' }}>{ value }</span>
                    </span>
                );
            }}
        />
    );
};

MLGroupingTable.propTypes = {
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
    defaultIcon: PropTypes.string.isRequired,
    groupBy: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.any),
    rows: PropTypes.arrayOf(PropTypes.any),
};

MLGroupingTable.defaultProps = {
    columns: [],
    icons: [],
    rows: [],
};

export default MLGroupingTable;
