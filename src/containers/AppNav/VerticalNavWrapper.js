/* eslint-disable react/jsx-fragments */
import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import {MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav} from './NavItems';

class Nav extends Component {
    isPathActive(path) {
        const {location} = this.props;
        return location.pathname.startsWith(path);

    }
    
    render() {
        return (
            <Fragment>
                <h5 className="app-sidebar__heading">PRO VERSION</h5>
                <div className="metismenu vertical-nav-menu">
                    <ul className="metismenu-container">
                        <li className="metismenu-item">
                            <a className="metismenu-link" href="https://dashboardpack.com/theme-details/architectui-dashboard-react-pro" target="_blank" rel="noopener noreferrer">
                                <i className="metismenu-icon pe-7s-diamond" />
                                Upgrade to PRO
                            </a>
                        </li>
                    </ul>
                </div>
                <h5 className="app-sidebar__heading">Menu</h5>
                <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">UI Components</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Widgets</h5>
                <MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Forms</h5>
                <MetisMenu content={FormsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Charts</h5>
                <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
            </Fragment>
        );
    }

   
}

export default withRouter(Nav);