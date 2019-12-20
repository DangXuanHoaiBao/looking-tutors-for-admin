/* eslint-disable no-script-url */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/no-unused-state */
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    DropdownToggle, DropdownMenu, Button, Media,
    UncontrolledTooltip, UncontrolledButtonDropdown, DropdownItem, NavLink
} from 'reactstrap';
import {
    toast,
    Bounce
} from 'react-toastify';


import {
    faCalendarAlt,
    faAngleDown,
    faInfo,
    faExchangeAlt,
    faSignOutAlt,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
;
import userAction from '../../../actions/user-action';
import history from '../../../helpers/history';
import profileImg from '../../../asset/images/profile.png';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    notify = () => {
        this.toastId = toast("You don't have any new items in your calendar for today! Go out and play!", {
        transition: Bounce,
        closeButton: true,
        autoClose: 3000,
        position: 'top-center',
        type: 'success'
    })};

    handleLogout(e){
        e.preventDefault();
        const { logoutProp } = this.props;
        logoutProp();
        history.push("/login");
    }

    render() {
        const { res } = this.props;
        return (
            <Fragment>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="link" className="p-0">
                                        <Media object width={32} height={32} className="rounded-circle" src={res.manager.urlAvatar? res.manager.urlAvatar: profileImg} alt=""/>
                                        <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                        <NavLink href="/info">
                                            <DropdownItem eventKey="1">Thông tin tài khoản
                                                <FontAwesomeIcon className="mr-2 ml-2" icon={faInfo}/>
                                            </DropdownItem>
                                        </NavLink>
                                        <NavLink href="/change-password">
                                            <DropdownItem eventKey="2">Đổi mật khẩu
                                                <FontAwesomeIcon className="mr-2 ml-2" icon={faExchangeAlt}/>
                                            </DropdownItem>
                                        </NavLink>

                                        {res.manager.code.includes('AD') &&
                                            <NavLink href="/create-account">
                                            <DropdownItem eventKey="3">Tạo tài khoản
                                                <FontAwesomeIcon className="mr-2 ml-2" icon={faUserPlus}/>
                                            </DropdownItem>
                                            </NavLink>
                                        }
                                        
                                        
                                        <NavLink>
                                            <DropdownItem onClick={this.handleLogout} eventKey="3">Đăng xuất
                                                <FontAwesomeIcon className="mr-2 ml-2" icon={faSignOutAlt}/>
                                            </DropdownItem>
                                        </NavLink>
                                        
                                       
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                            <div className="widget-content-left  ml-3 header-user-info">
                                {res &&
                                <div>
                                    <div className="widget-heading">
                                        {res.manager.fullName}
                                    </div>
                                    <div className="widget-subheading">
                                        {res.manager.role}
                                    </div>
                                </div>
                                }
                            </div>

                            <div className="widget-content-right header-user-info ml-3">
                                <Button className="btn-shadow p-1" size="sm" onClick={this.notify2} color="info"
                                        id="Tooltip-1">
                                    <FontAwesomeIcon className="mr-2 ml-2" icon={faCalendarAlt}/>
                                </Button>
                                <UncontrolledTooltip placement="bottom" target='Tooltip-1'>
                                    Click for Toastify Notifications!
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProp = state => {
    const { res } =  state.authentication;
    return { res }

};

const mapDisPatchToProps = dispatch => {
    return bindActionCreators({
        logoutProp: userAction.logout
    }, dispatch);
}

export default connect(mapStateToProp, mapDisPatchToProps)(UserBox);