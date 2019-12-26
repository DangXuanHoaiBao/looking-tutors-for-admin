/* eslint-disable react/no-array-index-key */
/* eslint-disable func-names */
/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import {connect} from 'react-redux';
import {
  Button,
  Table, 
  Media
} from "reactstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import PageTitle from "../PageTitle";
import userAction from "../../actions/user-action";

class ListAccountUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        listAccount: []
    }
  }

  UNSAFE_componentWillMount(){
    const { getListAccountUser } = this.props
    getListAccountUser();
  }

  
  render() {
    // const span = <span style={{ color: "red" }}>(*)</span>;
    // const { listAccount } = this.state; 
    const {listAccountUser} = this.props;
    let list;
    // console.log(listAccount);
    if(listAccountUser){
        console.log(listAccountUser.user)
        list = listAccountUser.user.map((user, i) => 
                <tr key={i}>
                    <td><span><Media object with={20} height={20} src={user.userImg} className="rounded-circle" /></span> {user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                    <Button className="btn-shadow p-1" size="sm" onClick={this.notify2} color="info"
                                        id="Tooltip-1">
                                    <FontAwesomeIcon className="mr-2 ml-2" icon={faRecycle}/>
                                </Button>
                    </td>
                </tr>
        )
    }
    
    return (
      <Fragment>
        <PageTitle
          heading="Danh sách tài khoản người dùng"
          icon="pe-7s-config text-danger"
        />
       
       <Table className="mb-0" bordered>
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Tài khoản</th>
            <th>Loại tài khoản</th>
            <th>Xóa tài khoản</th>
          </tr>
        </thead>
        <tbody>
            {list}
        </tbody>
      </Table>
      </Fragment>
    );
  }
}

const mapStateToProp = state => {
    const { listAccountUser } = state.users;
    return { listAccountUser };
}


const actionCreators = {
    getListAccountUser: userAction.getListAccountUser
}



export default connect(mapStateToProp, actionCreators)(ListAccountUser);
