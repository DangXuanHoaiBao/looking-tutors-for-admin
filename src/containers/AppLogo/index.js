/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-fragments */
import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import {Media} from 'reactstrap';

import Hamburger from 'react-hamburgers';

import AppMobileMenu from '../AppMobileMenu';

import themeAction from '../../actions/theme-action';

import logo from '../../asset/images/logo.png';

class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mobile: false,
            activeSecondaryMenuMobile: false,
            showLogo: false
        };

    }

    toggleEnableClosedSidebar = () => {
        const {enableClosedSidebar, setEnableClosedSidebar} = this.props;
        setEnableClosedSidebar(!enableClosedSidebar);
    }

  

    render() {
        const {enableClosedSidebar} = this.props;

        const {active, showLogo} = this.state;
        return (
            <Fragment>
                <div className="app-header__logo custom-app-header-logo">
                <Media object width={120} height={120} className="rounded-circle" src={logo} alt="" hidden={showLogo}/>
                    <div className="header__pane ml-auto">
                        <div onClick={this.toggleEnableClosedSidebar}>
                            <Hamburger
                                active={enableClosedSidebar}
                                type="elastic"
                                onClick={() => this.setState({active: !active, showLogo: !showLogo})}
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