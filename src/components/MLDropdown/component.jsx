import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

import OutsideClickHandler from 'react-outside-click-handler';

export class MLDropdown extends Component {
    state = {
        open: false,
    }
    constructor(props) {
        super(props);
        this.onBlurClose = this.onBlurClose.bind(this)
        this.toggleOpen = this.toggleOpen.bind(this)
        this.renderContent = this.renderContent.bind(this)
    }

    onBlurClose() {
        this.setState({ open: false })
    }

    toggleOpen(e) {
        e.preventDefault()
        const { children } = this.props;
        this.setState({ open: !this.state.open && Boolean(Children.count(children)) })
    }

    renderContent(children) {
        return (
            <div className="dropdown-body">
                {children}
            </div>
        )
    }

    render() {        
        const { open } = this.state
        const { children, name, positionRight } = this.props
        return (
            <div className={positionRight ? 'ml-dropdown right-position' : 'ml-dropdown'}>
                <div className="dropdown-container">
                    <OutsideClickHandler onOutsideClick={this.onBlurClose}>
                        <div className={open ? 'dropdown-button open' : 'dropdown-button'} tabIndex="0" onClick={this.toggleOpen}>
                            {name}
                        </div>
                        {open && this.renderContent(children)}
                    </OutsideClickHandler>
                </div>
            </div>
        );
    }
}

MLDropdown.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    name: PropTypes.string,
};

MLDropdown.defaultProps = {
    name: 'Dropdown',
};

export default MLDropdown;