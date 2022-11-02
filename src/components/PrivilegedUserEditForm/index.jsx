import React from 'react'
import PropTypes from 'prop-types'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import '../../assets/css/components/privilegedUserForm.css'

const PrivilegedUserEditForm = (props) => {
  let {
    editable,
    userTypeList,
    data: { name, email, phoneNo, userType },
  } = props
  return (
    <div className="container bg-color formSection priviledUserForm">
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label className="highlight">Name</Label>
              <Input
                readOnly={!editable}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input-text"
                value={name}
                onChange={(e) => props.handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail" className="highlight">
                Email
              </Label>
              <Input
                readOnly={!editable}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Your Email"
                className="input-text"
                value={email}
                onChange={(e) => props.handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect" className="highlight">
                User type
              </Label>
              <Input
                disabled={!editable}
                type="select"
                name="userType"
                id="exampleSelect"
                className="input-text"
                value={userType}
                onChange={(e) => props.handleChange(e)}
              >
                <option value={userType._id}>{userType.name}</option>
                {userTypeList.map((userType) => (
                  <option value={userType._id} key={userType._id}>
                    {userType.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleNumber" className="highlight">
                Mobile Number
              </Label>
              <Input
                readOnly={!editable}
                type="text"
                name="phoneNo"
                placeholder="Mobile Number"
                className="input-text"
                value={phoneNo}
                onChange={(e) => props.handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default PrivilegedUserEditForm

PrivilegedUserEditForm.proptype = {
  data: PropTypes.object,
  editable: PropTypes.bool,
  userTypeList: PropTypes.array,
}
