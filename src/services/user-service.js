/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import config from '../config/api-config';
import authHeader from '../helpers/auth-header';


function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    
    return fetch(`${config.apiUrlHeroku}/manager/login`, requestOptions)
        .then(handleResponse)
        .then((res) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('res', JSON.stringify(res));
            return res;
        });
    
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('res');
}


function getInfo() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrlHeroku}/manager/me`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${config.apiUrlHeroku}/manager/register`, requestOptions).then(handleResponse);
}

function updateInfo(fullName, urlAvatar) {
    console.log(urlAvatar);
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({fullName, urlAvatar})
    };
    return fetch(`${config.apiUrlHeroku}/manager/update`, requestOptions).then(handleResponse);
}

function changePassword(newPassword, oldPassword) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({newPassword, oldPassword})
    };

    return fetch(`${config.apiUrlHeroku}/manager/changePassword`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
function getListAccountUser() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrlHeroku}/user/list-account-user`, requestOptions).then(handleResponse);
}
const userService = {
    login,
    logout,
    register,
    getInfo,
    updateInfo,
    changePassword,
    getListAccountUser
};
export default userService;