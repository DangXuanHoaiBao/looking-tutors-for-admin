/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-fragments */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';



import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PerfectScrollbar from 'react-perfect-scrollbar';
import Nav from '../AppNav/VerticalNavWrapper';
import HeaderLogo from '../AppLogo';

import themeAction from '../../actions/theme-action';

class AppSidebar extends Component {


    toggleMobileSidebar = () => {
        const {enableMobileMenu, setEnableMobileMenu} = this.props;
        setEnableMobileMenu(!enableMobileMenu);
    }

    render() {
        const {
            backgroundColor,
            enableBackgroundImage,
            enableSidebarShadow,
            backgroundImage,
            backgroundImageOpacity,
        } = this.props;

        return (
            <Fragment>
                <div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar} aria-label="."/>
                <ReactCSSTransitionGroup
                    component="div"
                    className={cx("app-sidebar", backgroundColor, {'sidebar-shadow': enableSidebarShadow})}
                    transitionName="SidebarAnimation"
                    transitionAppear
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <HeaderLogo/>
                    <PerfectScrollbar>
                        <div className="app-sidebar__inner">
                            <Nav/>
                        </div>
                    </PerfectScrollbar>
                    <div
                        className={cx("app-sidebar-bg", backgroundImageOpacity)}
                        style={{
                            backgroundImage: enableBackgroundImage ? `url(${backgroundImage})` : null
                        }} />
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
    enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    backgroundColor: state.ThemeOptions.backgroundColor,
    backgroundImage: state.ThemeOptions.backgroundImage,
    backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
});

const mapDispatchToProps = dispatch => ({

    setEnableMobileMenu: enable => dispatch(themeAction.setEnableMobileMenu(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);