/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/no-unused-state */
import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Hamburger from 'react-hamburgers';

import cx from 'classnames';

import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {Button} from 'react-bootstrap';

import themeAction from '../../actions/theme-action';

class AppMobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mobile: false,
            activeSecondaryMenuMobile: false,
            openLeft: false,
            openRight: false,
            relativeWidth: false,
            width: 280,
            noTouchOpen: false,
            noTouchClose: false
        };

    }

    toggleMobileSidebar = () => {
        const {enableMobileMenu, setEnableMobileMenu} = this.props;
        setEnableMobileMenu(!enableMobileMenu);
    }


    toggleMobileSmall = () => {
        const {enableMobileMenuSmall, setEnableMobileMenuSmall} = this.props;
        setEnableMobileMenuSmall(!enableMobileMenuSmall);
    }

    

    render() {
        const {enableMobileMenu} = this.props;
        const {activeMobile, activeSecondaryMenuMobile} = this.state;
        return (
            <Fragment>
                <div className="app-header__mobile-menu">
                    <div onClick={this.toggleMobileSidebar}>
                        <Hamburger
                            active={enableMobileMenu}
                            type="elastic"
                            onClick={() => this.setState({activeMobile: !activeMobile})}
                        />
                    </div>
                </div>
                <div className="app-header__menu">
                    <span onClick={this.toggleMobileSmall}>
                        <Button size="sm"
                                className={cx("btn-icon btn-icon-only", {active: activeSecondaryMenuMobile})}
                                color="primary"
                                onClick={() => this.setState({activeSecondaryMenuMobile: !activeSecondaryMenuMobile})}>
                            <div className="btn-icon-wrapper"><FontAwesomeIcon icon={faEllipsisV}/></div>
                        </Button>
                    </span>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableMobileMenu: enable => dispatch(themeAction.setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(themeAction.setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AppMobileMenu);