/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
// template source: https://bootsnipp.com/snippets/vl4R7 
// icon: https://icons8.com/
import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Form, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';

import './login.css';
import iconFacebook from '../../../asset/images/icon-facebook.png';
import iconGoogle from '../../../asset/images/icon-google.png';
import iconTwitter from '../../../asset/images/icon-twitter.png';
import iconUser from '../../../asset/images/icon-user.png';
import iconPassword from '../../../asset/images/icon-password.png';

import userAction from '../../../actions/user-action'; 


class FormLogin extends React.Component{
    constructor(props){
        super(props);
        const { logout } = this.props;
        logout();
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   
    handleChange(e){
        const { name , value } = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
        const { username, password } = this.state;
        if(username && password){
            const { login } = this.props;
            login(username, password);
        }
    }

    render(){
        const { loggingIn } = this.props;
        const { username, password } = this.state;
        return(
            <div className="container login-form">
                <div className="d-flex justify-content-center h-100">
                    <Card className="card-login">
                        <Card.Header className="card-header-login">
                            <h4>Đăng nhập</h4>
                            <div className="d-flex justify-content-end social_icon">
                                <span><img className="img-icon-1" alt="" src={iconFacebook}/></span>
                                <span><img className="img-icon-1" alt="" src={iconGoogle}/></span>
                                <span><img className="img-icon-1" alt="" src={iconTwitter}/></span>
                            </div>
                        </Card.Header>
                        <Card.Body >
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><img className="img-icon-2" alt="" src={iconUser} /></span>
                                    </div>
                                    <Form.Control name="username" value={username} type="text" className="form-control" placeholder="Tài khoản" required onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><img className="img-icon-2" alt="" src={iconPassword} /></span>
                                    </div>
                                    <Form.Control name="password" value={password} type="password" className="form-control" placeholder="Mật khẩu" required onChange={this.handleChange} />
                                </Form.Group>

                                <div className="row align-items-center remember">
                                    <input type="checkbox" /> Nhớ mật khẩu
                                </div>
                                <Button type="submit"  className="float-right login-btn" variant="primary">
                                    
                                    Đăng nhập
                                    {loggingIn &&
                                        <FontAwesomeIcon className="ml-2 opacity-8" icon={faFan} spin/>
                                    }
                                </Button>
                                   
                              
                            </Form>
                        </Card.Body>
                        <Card.Footer className="card-footer-login">
                            <div className="d-flex justify-content-center">
                                <a className="login-a" href="#">Quên mật khẩu?</a>
                            </div>
                        </Card.Footer>  
                        </Card>
                        <ToastContainer />
                </div>
            </div>
        );
    }
}


const mapStateToProp = state => {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}


const actionCreators = {
    login: userAction.login,
    logout: userAction.logout
}


export default connect(mapStateToProp, actionCreators)(FormLogin);