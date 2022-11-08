<<<<<<< Updated upstream
import React from 'react';
=======
import React from 'react'
>>>>>>> Stashed changes
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
<<<<<<< Updated upstream
  Label,
} from 'reactstrap';
import { toast } from 'react-toastify';
import $ from 'jquery';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../../redux/authentication/actions';
import '../../assets/css/components/changePassword.css';

class UserProfile extends React.Component {
  constructor(props, context) {
    super(props, context);
=======
  Label
} from 'reactstrap'
import { toast } from 'react-toastify'
import $ from 'jquery'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sessionActions from '../../redux/authentication/actions'
import '../../assets/css/components/changePassword.css'

class UserProfile extends React.Component {
  constructor (props, context) {
    super(props, context)
>>>>>>> Stashed changes
    this.state = {
      recent_password: '',
      new_password: '',
      confirm_password: '',
<<<<<<< Updated upstream
      type: 'password',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showHide = this.showHide.bind(this);
    this.passwordAlert = this.passwordAlert.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState({ ...state });
  }

  passwordAlert() {
=======
      type: 'password'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.showHide = this.showHide.bind(this)
    this.passwordAlert = this.passwordAlert.bind(this)
  }

  handleChange (e) {
    e.preventDefault()
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState({ ...state })
  }

  passwordAlert () {
>>>>>>> Stashed changes
    toast.error('Password Not Match', {
      position: 'bottom-center',
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
<<<<<<< Updated upstream
      draggable: true,
    });
  }

  newPasswordAlert() {
=======
      draggable: true
    })
  }

  newPasswordAlert () {
>>>>>>> Stashed changes
    toast.error('Choose a new password', {
      position: 'bottom-center',
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
<<<<<<< Updated upstream
      draggable: true,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { new_password, confirm_password, recent_password } = this.state;
    if (recent_password === new_password) {
      this.newPasswordAlert();
    }
    if (new_password !== confirm_password) {
      this.passwordAlert();
    } else {
      this.props.actions.resetpassword(this.state);
      e.preventDefault();
      this.setState({
        recent_password: '',
        new_password: '',
        confirm_password: '',
      });
    }
  };

  componentDidMount() {
    $('#confirm_password').bind('cut copy paste', function (e) {
      e.preventDefault();
    });

    $('#new_password').bind('cut copy paste', function (e) {
      e.preventDefault();
    });
  }

  showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input',
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="reset_page">
          <Card className="card_padding">
            <CardHeader className="card_header_height text-center">Reset Password</CardHeader>
=======
      draggable: true
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { new_password, confirm_password, recent_password } = this.state
    if (recent_password === new_password) {
      this.newPasswordAlert()
    }
    if (new_password !== confirm_password) {
      this.passwordAlert()
    } else {
      this.props.actions.resetpassword(this.state)
      e.preventDefault()
      this.setState({
        recent_password: '',
        new_password: '',
        confirm_password: ''
      })
    }
  };

  componentDidMount () {
    $('#confirm_password').bind('cut copy paste', function (e) {
      e.preventDefault()
    })

    $('#new_password').bind('cut copy paste', function (e) {
      e.preventDefault()
    })
  }

  showHide = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  };

  render () {
    return (
      <React.Fragment>
        <div className='reset_page'>
          <Card className='card_padding'>
            <CardHeader className='card_header_height text-center'>Reset Password</CardHeader>
>>>>>>> Stashed changes
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>Previous Password</Label>
                  <Input
<<<<<<< Updated upstream
                    type="text"
                    name="recent_password"
=======
                    type='text'
                    name='recent_password'
>>>>>>> Stashed changes
                    value={this.state.recent_password}
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </FormGroup>
<<<<<<< Updated upstream
                <Label for="examplePassword">New Password</Label>
                <InputGroup>
                  <Input
                    type={this.state.type}
                    name="new_password"
                    id="new_password"
=======
                <Label for='examplePassword'>New Password</Label>
                <InputGroup>
                  <Input
                    type={this.state.type}
                    name='new_password'
                    id='new_password'
>>>>>>> Stashed changes
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.new_password}
                    required
                  />
<<<<<<< Updated upstream
                  <InputGroupAddon addonType="append">
                    <span className="reset_button btn" onClick={this.showHide}>
=======
                  <InputGroupAddon addonType='append'>
                    <span className='reset_button btn' onClick={this.showHide}>
>>>>>>> Stashed changes
                      {this.state.type === 'password' ? 'Show' : 'Hide'}
                    </span>
                  </InputGroupAddon>
                </InputGroup>
                <br />
                <FormGroup>
<<<<<<< Updated upstream
                  <Label for="examplePassword">Confirm Password</Label>
                  <Input
                    name="confirm_password"
                    id="confirm_password"
                    type="password"
=======
                  <Label for='examplePassword'>Confirm Password</Label>
                  <Input
                    name='confirm_password'
                    id='confirm_password'
                    type='password'
>>>>>>> Stashed changes
                    value={this.state.confirm_password}
                    onChange={(e) => this.handleChange(e)}
                    validate={{ match: { value: 'new_password' } }}
                  />
                </FormGroup>
<<<<<<< Updated upstream
                <Button className="reset_button btn" type="submit">
=======
                <Button className='reset_button btn' type='submit'>
>>>>>>> Stashed changes
                  Reset
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
<<<<<<< Updated upstream
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(UserProfile);
=======
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(UserProfile)
>>>>>>> Stashed changes
