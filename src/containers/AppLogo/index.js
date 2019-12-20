/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-fragments */
import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Hamburger from 'react-hamburgers';

import AppMobileMenu from '../AppMobileMenu';

import themeAction from '../../actions/theme-action';

class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mobile: false,
            activeSecondaryMenuMobile: false
        };

    }

    toggleEnableClosedSidebar = () => {
        const {enableClosedSidebar, setEnableClosedSidebar} = this.props;
        setEnableClosedSidebar(!enableClosedSidebar);
    }

  

    render() {
        const {enableClosedSidebar,} = this.props;

        const {active} = this.state;
        return (
            <Fragment>
                <div className="app-header__logo">
                    <div className="logo-src"/>
                    <div className="header__pane ml-auto">
                        <div onClick={this.toggleEnableClosedSidebar}>
                            <Hamburger
                                active={enableClosedSidebar}
                                type="elastic"
                                onClick={() => this.setState({active: !active})}
                            />
                        </div>
                    </div>
                </div>
                <AppMobileMenu/>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableClosedSidebar: enable => dispatch(themeAction.setEnableClosedSidebar(enable)),
    setEnableMobileMenu: enable => dispatch(themeAction.setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(themeAction.setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);