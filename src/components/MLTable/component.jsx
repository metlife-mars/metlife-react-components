import React from 'react';
import PropTypes from 'prop-types';

import MLTableTitle from './component-table-title';
import MLGroupingTable from './component-grouping-table';
import MLSimpleTable, { rowShape } from './component-simple-table';

export const MLTable = (props) => {
    const {
        id, title, titleClassName,
        groupBy, icons, defaultIcon, columns, rows, sorted
    } = props;

    let className = 'ml-table ml-table-alt-rows left-position';
    className = groupBy ? `${className} grouping` : className;

    return (
        <div id={id} className={className}>
            <MLTableTitle title={title} titleClassName={titleClassName} />
            {
                groupBy
                    ? (
                        <MLGroupingTable
                            groupBy={groupBy}
                            defaultIcon={defaultIcon}
                            icons={icons}
                            columns={columns}
                            rows={rows}
                        />
                    )
                    : <MLSimpleTable columns={columns} rows={rows} sorted={sorted} />
            }
        </div>
    );
};


MLTable.propTypes = {
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
    defaultIcon: PropTypes.string,
    groupBy: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        groupName: PropTypes.string,
    })),
    id: PropTypes.string,
    rows: PropTypes.arrayOf(
        rowShape
    ),
    sorted: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        desc: PropTypes.bool,
        asc: PropTypes.bool,
    })),
    title: PropTypes.string,
    titleClassName: PropTypes.string,
};

MLTable.defaultProps = {
    columns: [],
    groupBy: undefined,
    defaultIcon: undefined,
    id: '',
    rows: [],
    icons: [],
    sorted: undefined,
    title: '',
    titleClassName: 'ml-table-title'
};

export default MLTable;
