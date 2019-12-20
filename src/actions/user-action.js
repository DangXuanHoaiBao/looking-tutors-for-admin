/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import  userConstants  from '../constants/user-constant';
import  userService  from '../services/user-service';
import  alertActions  from './alert-action';
import  history  from '../helpers/history';



function login(username, password) {
    return dispatch => {
        dispatch(request({ }));

        userService.login(username, password)
            .then(
                res => { 
                    dispatch(success(res));
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    console.log(error.toString());
                }
            );
    };

    function request() { return { type: userConstants.LOGIN_REQUEST} }
    function success(res) { return { type: userConstants.LOGIN_SUCCESS, payload: res } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, payload: error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request());
        userService.register(user)
            .then(  
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Đăng ký thành công'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.REGISTER_REQUEST} }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}



function getInfo() {
    return dispatch => {
        dispatch(request());

        userService.getInfo()
            .then(
                user => {
                    dispatch(success(user));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GET_INFO_REQUEST } }
    function success(user) { return { type: userConstants.GET_INFO_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.GET_INFO_FAILURE, payload: error } }
}

function updateInfo(fullName, urlAvatar) {
    return dispatch => {
        dispatch(request());
        
        userService.updateInfo(fullName, urlAvatar)
            .then(  
                message => { 
                    dispatch(success());
                    dispatch(alertActions.success('Cập nhật thông tin thành công'));
                    const res = JSON.parse(localStorage.getItem('res'));
                    localStorage.removeItem('res');
                    if(urlAvatar === ''){
                        res.manager = {...res.manager, fullName};
                    }
                    else{
                        res.manager = {...res.manager, fullName, urlAvatar};
                    }
                    localStorage.setItem('res', JSON.stringify(res));
                    dispatch(updateResOfNavigation(res));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.UPDATE_INFO_REQUEST} }
    function success() { return { type: userConstants.UPDATE_INFO_SUCCESS } }
    function failure(error) { return { type: userConstants.UPDATE_INFO_FAILURE, payload: error } }
    function updateResOfNavigation(res) { return { type: userConstants.LOGIN_SUCCESS, payload: res } }
}

function changePassword(oldPassword, newPassword, confirmPassword) {
    return dispatch => {
        dispatch(request());
        if(newPassword !== confirmPassword){
            dispatch(alertActions.error('Xác nhận mật khẩu không đúng'));
            dispatch(failure());
            return;
        }
        userService.changePassword(newPassword, oldPassword)
            .then(  
                message => { 
                    dispatch(success());
                    userService.logout();
                    history.push('/login');
                    dispatch(alertActions.success('Đổi mật khẩu thành công'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.CHANGE_PASSWORD_INFO_REQUEST} }
    function success() { return { type: userConstants.CHANGE_PASSWORD_INFO_SUCCESS } }
    function failure(error) { return { type: userConstants.CHANGE_PASSWORD_INFO_FAILURE, payload: error } }
}

const userActions = {
    login,
    logout,
    register,
    getInfo,
    updateInfo,
    changePassword
};
export default userActions;