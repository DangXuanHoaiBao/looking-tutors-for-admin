/* eslint-disable react/jsx-fragments */
import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import {Dashboard, Manage, Statistic} from './NavItems';

class Nav extends Component {
    isPathActive(path) {
        const {location} = this.props;
        return location.pathname.startsWith(path);

    }
    
    render() {
        return (
            <Fragment>
                
                <MetisMenu content={Dashboard} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Quản lý</h5>
                <MetisMenu content={Manage} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Thống kê</h5>
                <MetisMenu content={Statistic} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
            </Fragment>
        );
    }

   
}

export default withRouter(Nav);