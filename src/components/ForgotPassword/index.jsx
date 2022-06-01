import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import Config from '../../utils/config'
import Image from '../ImageComponent'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sessionActions from '../../redux/authentication/actions'

import '../../assets/css/components/login.css'

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileNo: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    let state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState({ ...state })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let state = this.state
    this.props.actions.forgotPassword(state)
  }

  render() {
    let { mobileNo } = this.state
    return (
      <div className="backgroundImg d-flex justify-content-center align-items-center full-height">
        <Col sm={5}>
          <div className="login-card logincard-bg">
            <div className="logo">
              <a href="/forgot-password">
                <Image
                  tag="false"
                  src={`${Config.imageBaseUrl}/content/dam/re-platform-images/logo.svg`}
                  alt="Royal Enfield"
                  title=""
                />
              </a>
            </div>
            <div className="FullScreen">
              <div className="re-image">
                <div className="container formSection">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label className="highlight labelColor" for="email">
                        User Name/ Mobile No.
                      </Label>
                      <Input
                        type="text"
                        name="mobileNo"
                        placeholder="Email/ Mobile Number"
                        className="inputText"
                        value={mobileNo}
                        required
                        onChange={(e) => this.handleChange(e)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Row className="d-flex justify-content-center">
                        <Button className="otpbtn btn btn-lg " type="submit">
                          Send OTP
                        </Button>
                      </Row>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(ForgotPassword)
