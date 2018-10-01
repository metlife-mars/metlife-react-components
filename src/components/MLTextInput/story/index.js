import React, { Component } from 'react';

import MLTextInput from '../component';

export class MLTextInputContainer extends Component {
    state = {
        value: '',
    }

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { value } = e.target;
        this.setState({ value });
    }

    render() {
        const { value } = this.state;

        return (
            <MLTextInput
                {...this.props}
                onChange={this.onChange}
                value={value}
            />
        );
    }
}

/**
 * Storybook for MLTabs
 */
export default (storiesOf, module, ContainerDecorator) => {
    storiesOf('TextInput', module)
        .addDecorator(ContainerDecorator)
        .addWithInfo('with default props', `
## Usage

~~~ts
export class MLTextInputContainer extends Component {
    state = {
        value: '',
    }

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { value } = e.target;
        this.setState({ value });
    }

    render() {
        const { value } = this.state;

        return (
            <MLTextInput
                {...this.props}
                onChange={this.onChange}
                value={value}
            />
        );
    }
}
~~~
        `, () => <MLTextInputContainer />)
        .addWithInfo('with custom props', () => (
            <MLTextInputContainer
                label="Click to Search"
            />
        ))
        .addWithInfo('with placeholder prop', () => (
            <MLTextInputContainer
                placeholder="Keyword"
            />
        ))
        .addWithInfo('with error props', () => (
            <MLTextInputContainer
                label="Click to Search"
                error={{ show: true, message: 'Invalid Input' }}
            />
        ));
};
