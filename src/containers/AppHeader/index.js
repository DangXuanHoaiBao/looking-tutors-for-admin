/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prefer-stateless-function */
import React, {Fragment} from 'react';
import cx from 'classnames';

import {connect} from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderLogo from '../AppLogo';

import SearchBox from './Components/SearchBox';
import UserBox from './Components/UserBox';

class Header extends React.Component {
    render() {
        const {
            headerBackgroundColor,
            enableMobileMenuSmall,
            enableHeaderShadow,
        } = this.props;
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    className={cx("app-header ", headerBackgroundColor, {'header-shadow': enableHeaderShadow})}
                    transitionName="HeaderAnimation"
                    transitionAppear
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <HeaderLogo/>

                    <div className={cx(
                        "app-header__content custom-app-header-content",
                        {'header-mobile-open': enableMobileMenuSmall},
                    )}>
                        <div className="app-header-left">
                            <SearchBox/>
                        </div>
                        <div className="app-header-right">
                            <UserBox/>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});



export default connect(mapStateToProps, null)(Header);