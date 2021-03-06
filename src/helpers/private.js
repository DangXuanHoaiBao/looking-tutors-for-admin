/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateStartPage = ({...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('res')
            ? <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

const PrivateAllPage = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('res')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

const IsLogin = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('res')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
    )} />
)

const IsAdmin = ({ component: Component, ...rest }) => {
    const res = JSON.parse(localStorage.getItem('res'));
    if(!res){
        return (
            <Route {...rest} render={props => (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )} />
        );
    }
    return(
        <Route {...rest} render={props => (
            res.manager.role === "Chủ sở hữu"
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
        )} />
    )
}


const Private = {
    PrivateStartPage,
    PrivateAllPage,
    IsLogin,
    IsAdmin
};
export default Private;