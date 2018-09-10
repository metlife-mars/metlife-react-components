import React from 'react';
import MLTable from '../component';

export const columns = [
    {
        Header: 'Coverage',
        accessor: 'coverage',
        className: ''
    },
    {
        Header: 'Collected Premium',
        accessor: 'collectedPremium',
        className: ''
    },
    {
        Header: 'Effective Date',
        accessor: 'effectiveDate',
        className: ''
    },
    {
        Header: 'Renewal Date',
        accessor: 'renewalDate'
    },
    {
        Header: 'Enrolled Lives',
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
        // accessor: 'broker',
        id: 'broker',
        accessor: d => d.broker.name,
        // Cell: props => props.value ? <span className="broker">{props.value.name} <br /> {props.value}</span> : null,

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
        // accessor: 'businessAddress',
        id: 'businessAddress',
        accessor: d => d.businessAddress.city,
        // Cell: props => <span className="year">{props.value.city} {props.value.state} <br /> {props.value.zipcode}</span>
    },
];

export const brokerRows = [{
    coverage: 'Basic Life',
    broker: { id: '1', name: 'Jane Smith', licenseType: 'Broker' },
    split: '70%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: {
        id: '2', city: '<City>', state: '<State>', zipcode: '<Zipcode>'
    },
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: { id: '3', name: 'Bb Smith', licenseType: 'GA' },
    split: '30%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: {
        id: '4', city: '<City>', state: '<State>', zipcode: '<Zipcode>'
    },
}, {
    coverage: 'Basic Life',
    broker: { id: '3', name: 'Bob Smith', licenseType: 'GA' },
    split: '30%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: {
        id: '4', city: '<City>', state: '<State>', zipcode: '<Zipcode>'
    },
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: { id: '3', name: 'Ab Smith', licenseType: 'GA' },
    split: '30%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: {
        id: '4', city: '<City>', state: '<State>', zipcode: '<Zipcode>'
    },
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: { id: '3', name: 'Cb Smith', licenseType: 'GA' },
    split: '30%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: {
        id: '4', city: '<City>', state: '<State>', zipcode: '<Zipcode>'
    },
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: { id: '3', name: 'Jerald Smith', licenseType: 'GA' },
    split: '10%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: {
        id: '4', city: '<City>', state: '<State>', zipcode: '<Zipcode>'
    },
}, {
    coverage: 'Supplemental Life/AD&D',
    broker: { id: '3', name: 'Jerald Smith', licenseType: 'GA' },
    split: '10%',
    firmName: '<firm name>',
    taxId: '<****-4789>',
    businessAddress: {
        id: '4', city: '<City>', state: '<State>', zipcode: '<Zipcode>'
    },
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
    storiesOf('MetLife Components - Table', module)
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
                icons={{ 'Supplemental Life/AD&D': '/assets/patterns/img/tables/grouping/i_accident.png', 'Basic Life': '/assets/patterns/img/tables/grouping/i_life.png' }}
                defaultIcon="/assets/patterns/img/tables/grouping/i_life.png"
                title="Life"
                columns={brokerColumns}
                rows={brokerRows}
            />
        ));
};
