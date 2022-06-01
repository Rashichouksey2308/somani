import React from 'react'
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
  Label,
} from 'reactstrap'
import { toast } from 'react-toastify'
import $ from 'jquery'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sessionActions from '../../redux/authentication/actions'
import '../../assets/css/components/changePassword.css'

class UserProfile extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      recent_password: '',
      new_password: '',
      confirm_password: '',
      type: 'password',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.showHide = this.showHide.bind(this)
    this.passwordAlert = this.passwordAlert.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    let state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState({ ...state })
  }

  passwordAlert() {
    toast.error('Password Not Match', {
      position: 'bottom-center',
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    })
  }

  newPasswordAlert() {
    toast.error('Choose a new password', {
      position: 'bottom-center',
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
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
        confirm_password: '',
      })
    }
  }

  componentDidMount() {
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
      type: this.state.type === 'input' ? 'password' : 'input',
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="reset_page">
          <Card className="card_padding">
            <CardHeader className="card_header_height text-center">
              Reset Password
            </CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>Previous Password</Label>
                  <Input
                    type="text"
                    name="recent_password"
                    value={this.state.recent_password}
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </FormGroup>
                <Label for="examplePassword">New Password</Label>
                <InputGroup>
                  <Input
                    type={this.state.type}
                    name="new_password"
                    id="new_password"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.new_password}
                    required
                  />
                  <InputGroupAddon addonType="append">
                    <span className="reset_button btn" onClick={this.showHide}>
                      {this.state.type === 'password' ? 'Show' : 'Hide'}
                    </span>
                  </InputGroupAddon>
                </InputGroup>
                <br />
                <FormGroup>
                  <Label for="examplePassword">Confirm Password</Label>
                  <Input
                    name="confirm_password"
                    id="confirm_password"
                    type="password"
                    value={this.state.confirm_password}
                    onChange={(e) => this.handleChange(e)}
                    validate={{ match: { value: 'new_password' } }}
                  />
                </FormGroup>
                <Button className="reset_button btn" type="submit">
                  Reset
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(UserProfile)
