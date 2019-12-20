/* eslint-disable func-names */
/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button
} from "reactstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons';
import PageTitle from "../../PageTitle";
import userAction from "../../../actions/user-action";

class FormCreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notify1: false,
      notify2: false,
      notify3: false,
      notify4: false,
      notify5: false,
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      role: '',
      contentNotify: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  handleSubmit(e) {
      e.preventDefault();
      const { fullName, username, password, confirmPassword, role } = this.state
      const { registerPasswordProp } = this.props;

      if(fullName === ''){
        this.setState({ notify1: true });
      }
      else{
        this.setState({ notify1: false });
      }

      if(username === ''){
        this.setState({ notify2: true });
      }
      else{
        this.setState({ notify2: false });
      }

      if(password === '' || password.length < 8){
        if(password === ''){
          this.setState({ contentNotify: 'Vui lòng điền mật khẩu mới'});
        }
        if(password.length < 8){
          this.setState({ contentNotify: 'Mật khẩu phải phải ít nhất 8 ký tự'});
        }

        this.setState({ notify3: true});
      }
      else{
        this.setState({ notify3: false });
      }

      if(confirmPassword !== password){
        this.setState({ notify4: true });
      }
      else{
        this.setState({ notify4: false });
      }

      if(role === '' || role === 'Mặc định'){
        this.setState({ notify5: true });
      }
      else{
        this.setState({ notify5: false });
      }

      console.log(password);
      console.log(confirmPassword);
      
      if(fullName !== '' && username !== '' && role !== '' && password === confirmPassword && password.length >= 8){
        const user = {
            fullName,
            username,
            role,
            password
        }
        registerPasswordProp(user);
      }
  }   




  render() {
    const span = <span style={{ color: "red" }}>(*)</span>;
    const { notify1, notify2, notify3, notify4, notify5, fullName, username, password, confirmPassword  , contentNotify } = this.state;
    const { registering } = this.props;
    return (
      <Fragment>
        <PageTitle
          heading="Tạo tài khoản quản lý mới"
          subheading="Vui lòng điền đẩy đủ các thông tin"
          icon="pe-7s-add-user text-danger"
        />

        <Row>
          <Col md="3" />
          <Col md="6">
            <Card className="main-card mb-3">
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="exampleEmail">Họ tên</Label>
                    <Input
                      invalid={notify1}
                      name="fullName"
                      value={fullName}
                      type="text"
                      onChange={this.handleChange}
                    />
                    <FormFeedback>Vui lòng điền họ tên</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Tài khoản</Label>
                    <Input
                      invalid={notify2}
                      name="username"
                      value={username}
                      type="text"
                      onChange={this.handleChange}
                    />
                    <FormFeedback>Vui lòng điền tài khoản</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Mật khẩu {span}</Label>
                    <Input
                      invalid={notify3}
                      name="password"
                      value={password}
                      type="password"
                      onChange={this.handleChange}
                    />
                    <FormFeedback>{contentNotify}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Xác nhận mật khẩu</Label>
                    <Input
                      invalid={notify4}
                      name="confirmPassword"
                      value={confirmPassword}
                      type="password"
                      onChange={this.handleChange}
                    />
                    <FormFeedback>Xác nhận mật khẩu không đúng</FormFeedback>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label for="exampleEmail">Phần quyền</Label>
                    <Input  invalid={notify5} type="select" name="role" onChange={this.handleChange}>
                      <option value="Mặc định">Chọn quyền cho tài khoản</option>
                      <option value="Nhân viên">Nhân viên</option>
                      <option value="Chủ sở hữu">Chủ sở hữu</option>
                    </Input>
                    <FormFeedback>Vui lòng chọn quyền cho tài khoản</FormFeedback>
                  </FormGroup>
                  <Label>{span}: Mật khẩu phải ít nhất 8 ký tự</Label>  
                  <Button className="float-right btn-update">
                    Đồng ý
                    {registering && (
                      <FontAwesomeIcon
                        className="ml-2 opacity-8"
                        icon={faFan}
                        spin
                      />
                    )}
                  </Button>
                  
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" />
        </Row>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
    const { registering } = state.registration;
    return { registering };
}

const mapDisPatchToProps = dispatch => {
  return bindActionCreators({
    registerPasswordProp: userAction.register
  }, dispatch);
}
export default connect(mapStateToProps, mapDisPatchToProps)(FormCreateAccount);
