import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import MLRadioButton from '../MLRadioButton';

export class MLRadioGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };

        this.renderRadioButtons = this.renderRadioButtons.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e, item) {
        let { items } = this.state;
        const { onChange } = this.props;

        items = items.map(radio => ({ ...radio, active: radio === item }));
        this.setState({ items }, () => { onChange(item); });
    }

    renderRadioButtons(name, items, horizontal) {
        return items.map((item, i) => {
            return <MLRadioButton key={i.toString()} name={name} item={item} horizontal={horizontal} onChange={this.handleToggle} />;
        });
    }

    render() {
        const { horizontal, name } = this.props;
        const { items } = this.state;
        return (
            <fieldset className={cn("ml-radio-group", horizontal ? 'horizontal' : '')}>
                {this.renderRadioButtons(name, items, horizontal)}
            </fieldset>
        );
    }
}

MLRadioGroup.propTypes = {
    name: PropTypes.string,
    items: PropTypes.array,
    horizontal: PropTypes.bool,
    onChange: PropTypes.func,
};

MLRadioGroup.defaultProps = {
    name: 'radioGroup',
    items: [
        { label: 'One', value: 'one', active: true },
        { label: 'Two', value: 'two', active: false }
    ],
    horizontal: false,
    onChange: () => console.log('[[ defaultProps onChange ]]')
};

export default MLRadioGroup;
