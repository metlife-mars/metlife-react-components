import React from 'react';
import PropTypes from 'prop-types';

import MLTableTitle from './component-table-title';
import MLGroupingTable from './component-grouping-table';
import MLSimpleTable from './component-simple-table';

export const MLTable = (props) => {
    const {
        id, title, titleClassName,
        groupBy, icons, defaultIcon, columns, rows,
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
                    : <MLSimpleTable columns={columns} rows={rows} />
            }
        </div>
    );
};


MLTable.propTypes = {
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
    defaultIcon: PropTypes.string,
    groupBy: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.any),
    id: PropTypes.string,
    rows: PropTypes.arrayOf(PropTypes.any),
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
    title: '',
    titleClassName: 'ml-table-title'
};

export default MLTable;
