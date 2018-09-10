import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/main.css';

import App from '../App';
import {
    MLButtonStory,
    MLTableStory,
} from '../components';

const styles = {
    padding: 30,
    border: 'none',
    position: 'relative',
};
const wrapperStyles = {
    margin: 0,
    padding: 0,
    border: '1px solid #757575',
    position: 'relative',
};
class ContainerDecoratorComponent extends Component {
    state = {
        showWrapper: false,
    }
    constructor(props) {
        super(props)
        this.toggleShowWrapper = this.toggleShowWrapper.bind(this)
    }
    toggleShowWrapper() {
        const showWrapper = !this.state.showWrapper;
        this.setState({ showWrapper })
    }
    render() {
        const { showWrapper } = this.state;
        const { children } = this.props;
        return (
            <div style={styles}>
                <label htmlFor="container-decorator-cb"> 
                    <input type="checkbox" checked={showWrapper} onChange={this.toggleShowWrapper} id="container-decorator-cb" style={{ marginBottom: 15 }}/>
                    <span>Show Wrapper</span>
                </label>
                <div style={{...wrapperStyles, borderWidth: showWrapper ? 1 : 0 }}>
                    {children}
                </div>
            </div>
        )
    }
}
const ContainerDecorator = storyFn => (
    <ContainerDecoratorComponent>
        {storyFn()}
    </ContainerDecoratorComponent>
);

storiesOf('Welcome', module)
    .add('to MetLife', () => <App />);

MLButtonStory(storiesOf, module, ContainerDecorator);
MLTableStory(storiesOf, module, ContainerDecorator);

