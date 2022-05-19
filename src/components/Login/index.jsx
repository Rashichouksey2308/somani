import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../assets/css/components/login.css';
import Config from '../../utils/config';
import Image from '../ImageComponent';
import axios from 'axios'

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    let state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState({ ...state });
  }

  handleSubmit (e) {
    e.preventDefault();
    let state = this.state;
    this.props.loginUser(state);
  }

  //  handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     // const user = await signInWithEmailAndPassword(auth, username, password);
  //     // console.log(user);
  //     // setUser(user);
  //     // setUserState(true);

  //     // const token = await auth.currentUser.getIdToken();
  //     // console.log("why is this not running");
  //     // console.log(token);
  //     const response =  axios.post(
  //       "http://localhost:4000/api/authentication",
  //       { username: "harsh12@mail.com", password: "12345678" }
  //     );

  //     console.log(response);
    
  //   } catch (error) {
      
  //     console.log(error.message);
  //   }
  // }


  render () {
    let { username, password } = this.state;
    return (
      <div>
        <div className='logo'>
          <a>
            <Image
              tag='false'
              src={`${Config.imageBaseUrl}/content/dam/re-platform-images/logo.svg`}
              alt='Royal Enfield'
            />
          </a>
        </div>
        <div className='FullScreen'>
          <div className='re-image'>
            <div className='container formSection'>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label className='highlight labelColor' for='email'>
                    Email
                  </Label>
                  <Input
                    type='text'
                    name='username'
                    placeholder='Email / Mobile'
                    className='inputText'
                    required
                    title="Please enter your registered Email or Phone no."
                    value={username}
                    onChange={(e) => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className='highlight labelColor' for='password'>
                    Password
                  </Label>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    required
                    title="Please enter your password"
                    className='inputText'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Row className='d-flex justify-content-center'>
                    <Button className='loginbtn btn btn-lg' type='submit'>
                      LOGIN
                      <i className="fa fa-sign-in icon_margin" aria-hidden="true"></i>
                    </Button>
                  </Row>
                </FormGroup>
                <Row className='d-flex justify-content-center'>
                  <Link to='/forgot-password' className='labelColor forgot_password_font'>
                    Forgot Password?
                  </Link>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {};
