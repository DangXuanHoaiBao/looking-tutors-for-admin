/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-fragments */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {withRouter, Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import ResizeDetector from 'react-resize-detector';

import AppHeader from '../AppHeader';
import AppSidebar from '../AppSidebar';
import AppFooter from '../AppFooter';


import Private from '../../helpers/private';
import Login from '../Forms/Login'
import Dashboards from '../Dashboards';
import FormInfo from '../Forms/Info';
import FormChangePassWord from '../Forms/ChangePassword';
import FormCreateAccount from '../Forms/CreateAccount';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closedSmallerSidebar: false
        };

    }

    render() {
        const {
            colorScheme,
            enableFixedHeader,
            enableFixedSidebar,
            enableFixedFooter,
            enableClosedSidebar,
            closedSmallerSidebar,
            enableMobileMenu,
            enablePageTabsAlt,
            res
        } = this.props;
        return (
            <Switch>
                         
                <Private.PrivateStartPage exact path="/"></Private.PrivateStartPage>
                <Private.IsLogin exact path="/login" component={Login}></Private.IsLogin>
                <ResizeDetector
                                    handleWidth
                                    render={({ width }) => (
                                        <Fragment>
                                            <div className={cx(
                                                `app-container app-theme-${colorScheme}`,
                                                {'fixed-header': enableFixedHeader},
                                                {'fixed-sidebar': enableFixedSidebar || width < 1250},
                                                {'fixed-footer': enableFixedFooter},
                                                {'closed-sidebar': enableClosedSidebar || width < 1250},
                                                {'closed-sidebar-mobile': closedSmallerSidebar || width < 1250},
                                                {'sidebar-mobile-open': enableMobileMenu},
                                            )}>
                                                
                                                <Fragment>
                                                    <AppHeader/>
                                                    <div className="app-main">
                                                        <AppSidebar/>
                                                        <div className="app-main__outer">
                                                            <div className="app-main__inner">
                                                                <Private.PrivateAllPage exact path="/dashboard" component={Dashboards}></Private.PrivateAllPage>
                                                                <Private.PrivateAllPage exact path="/info" component={FormInfo}></Private.PrivateAllPage>
                                                                <Private.PrivateAllPage exact path="/change-password" component={FormChangePassWord}></Private.PrivateAllPage>
                                                                <Private.PrivateAllPage exact path="/create-account" component={FormCreateAccount}></Private.PrivateAllPage>
                                                            </div>
                                                            <AppFooter/>
                                                        </div>
                                                    </div>
                                                </Fragment>
                                                <ToastContainer />
                                            </div>
                                            
                                        </Fragment>
                        )}
                    />
                    
                </Switch>
               
            
                        
   
     
               
     
               
        )
    }
}

const mapStateToProp = state => {
    const { colorScheme, 
    enableFixedHeader,
    enableMobileMenu,
    enableFixedFooter,
    enableFixedSidebar,
    enableClosedSidebar,
    enablePageTabsAlt
    } = state.ThemeOptions
    const { res } =  state.authentication;
    return {
        colorScheme, 
        enableFixedHeader,
        enableMobileMenu,
        enableFixedFooter,
        enableFixedSidebar,
        enableClosedSidebar,
        enablePageTabsAlt,
        res
    }

};

export default connect(mapStateToProp, null)(Main);