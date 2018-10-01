import React from 'react';
import MLTable from '../component';

export const columns = [
    {
        Header: 'Coverage',
        accessor: 'coverage',
        sortable: false,
    },
    {
        Header: () => (
            <div className="column-header">
                <div>Collected Premium</div>
                <div className="sort-by"> <i></i> </div>
            </div>
          ),
        accessor: 'collectedPremium',
    },
    {
        Header: () => (
            <div className="column-header">
                <div>Effective Date</div>
                <div className="sort-by"> <i></i> </div>
            </div>
          ),
        accessor: 'effectiveDate',
    },
    {
        Header: () => (
            <div className="column-header">
                <div>Renewal Date</div>
                <div className="sort-by"> <i></i> </div>
            </div>
          ),
        accessor: 'renewalDate'
    },
    {
        Header: () => (
            <div className="column-header">
                <div>Enrolled Lives</div>
                <div className="sort-by"> <i></i> </div>
            </div>
          ),
        accessor: 'enrolledLives',
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
    },
];

export const rows = [{
    coverage: 'Basic Life',
    collectedPremium: '<$###.##>',
    effectiveDate: '01/01/2000',
    renewalDate: 'mm/dd/yyyy',
    enrolledLives: '345',
}, {
    coverage: 'Supplemental Life/AD&D',
    collectedPremium: '<$###.##>',
    effectiveDate: 'mm/dd/yyyy',
    enrolledLives: '123',
    renewalDate: 'mm/dd/yyyy',
}, {
    coverage: '<Coverage>',
    collectedPremium: '<$###.##>',
    effectiveDate: 'mm/dd/yyyy',
    enrolledLives: '<##>',
    renewalDate: 'mm/dd/yyyy',
}];


export const brokerColumns = [
    {
        Header: 'Coverage',
        accessor: 'coverage'
    },
    {
        Header: 'Broker',
        accessor: 'broker',
    },
    {
        Header: 'Commission Split %',
        accessor: 'split',
        className: ''
    },
    {
        Header: 'Firm Name',
        accessor: 'firmName',
        className: ''
    },
    {
        Header: 'Tax ID',
        accessor: 'taxId',
    },
    {
        Header: 'Firm Business Address',
        accessor: 'businessAddress',
    },
];

export const brokerRows = [{
    coverage: 'Basic Life',
    broker: 'Jane Smith \nBroker',
    split: '70%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: '<City> <State> \n<Zipcode>',
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: 'Bb Smith \nGA',
    split: '30%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: '<City> <State> \n<Zipcode>',
}, {
    coverage: 'Basic Life',
    broker: 'Bob Smith \nGA',
    split: '30%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: '<City> <State> \n<Zipcode>',
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: 'Ab Smith \nGA',
    split: '30%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: '<City> <State> \n<Zipcode>',
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: 'Cb Smith \nGA',
    split: '30%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: '<City> <State> \n<Zipcode>',
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: 'Jerald Smith \nGA',
    split: '10%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: '<City> <State> \n<Zipcode>',
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: 'Jerald Smith \nGA',
    split: '10%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: '<City> <State> \n<Zipcode>',
}];

/**
 * Storybook for MLTable
 * ```
 * @param columns: Array<{
 *  Header: string | React.Component;
 *  accessor: string | Function;
 *  Cell: React.Component;
 * }>
 * ```
 * ```
 * @param rows: Array<{
 *  [accessor: string]: string | object;
 * }>
 * ```
 */
export default (storiesOf, module, ContainerDecorator) => {
    storiesOf('Data Table', module)
        .addDecorator(ContainerDecorator)
        .addWithInfo('with title, columns, and rows', `
## Documentation

~~~ts
<MLTable title="<title>" columns={} rows={} />

@prop columns: Array<{
  Header: string | React.Component;
  accessor: string | Function;
  Cell?: React.Component;
}>

@prop rows: Array<{
  [accessor: string]: string | object;
}>
~~~
  `, () => (<MLTable title="Life" columns={columns} rows={rows} />))
        .addWithInfo('with default props', () => <MLTable />)
        .addWithInfo('with grouped rows',
        () => (
            <MLTable
                groupBy="coverage"
                icons={[{ groupName: 'Supplemental Life/AD&D', icon:'assets/patterns/img/tables/grouping/i_accident.png' }, { groupName: 'Basic Life', icon: 'assets/patterns/img/tables/grouping/i_life.png' }]}
                defaultIcon="assets/patterns/img/tables/grouping/i_life.png"
                title="Life"
                columns={brokerColumns}
                rows={brokerRows}
            />
        ));
};
