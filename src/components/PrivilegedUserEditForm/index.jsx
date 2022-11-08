<<<<<<< Updated upstream
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import '../../assets/css/components/privilegedUserForm.css';
=======
import React from 'react'
import PropTypes from 'prop-types'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import '../../assets/css/components/privilegedUserForm.css'
>>>>>>> Stashed changes

const PrivilegedUserEditForm = (props) => {
  const {
    editable,
    userTypeList,
<<<<<<< Updated upstream
    data: { name, email, phoneNo, userType },
  } = props;
  return (
    <div className="container bg-color formSection priviledUserForm">
=======
    data: { name, email, phoneNo, userType }
  } = props
  return (
    <div className='container bg-color formSection priviledUserForm'>
>>>>>>> Stashed changes
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
<<<<<<< Updated upstream
              <Label className="highlight">Name</Label>
              <Input
                readOnly={!editable}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input-text"
=======
              <Label className='highlight'>Name</Label>
              <Input
                readOnly={!editable}
                type='text'
                name='name'
                placeholder='Enter Your Name'
                className='input-text'
>>>>>>> Stashed changes
                value={name}
                onChange={(e) => props.handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
<<<<<<< Updated upstream
              <Label for="exampleEmail" className="highlight">
=======
              <Label for='exampleEmail' className='highlight'>
>>>>>>> Stashed changes
                Email
              </Label>
              <Input
                readOnly={!editable}
<<<<<<< Updated upstream
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Your Email"
                className="input-text"
=======
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='Enter Your Email'
                className='input-text'
>>>>>>> Stashed changes
                value={email}
                onChange={(e) => props.handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
<<<<<<< Updated upstream
              <Label for="exampleSelect" className="highlight">
=======
              <Label for='exampleSelect' className='highlight'>
>>>>>>> Stashed changes
                User type
              </Label>
              <Input
                disabled={!editable}
<<<<<<< Updated upstream
                type="select"
                name="userType"
                id="exampleSelect"
                className="input-text"
=======
                type='select'
                name='userType'
                id='exampleSelect'
                className='input-text'
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <Label for="exampleNumber" className="highlight">
=======
              <Label for='exampleNumber' className='highlight'>
>>>>>>> Stashed changes
                Mobile Number
              </Label>
              <Input
                readOnly={!editable}
<<<<<<< Updated upstream
                type="text"
                name="phoneNo"
                placeholder="Mobile Number"
                className="input-text"
=======
                type='text'
                name='phoneNo'
                placeholder='Mobile Number'
                className='input-text'
>>>>>>> Stashed changes
                value={phoneNo}
                onChange={(e) => props.handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
<<<<<<< Updated upstream
  );
};

export default PrivilegedUserEditForm;
=======
  )
}

export default PrivilegedUserEditForm
>>>>>>> Stashed changes

PrivilegedUserEditForm.proptype = {
  data: PropTypes.object,
  editable: PropTypes.bool,
<<<<<<< Updated upstream
  userTypeList: PropTypes.array,
};
=======
  userTypeList: PropTypes.array
}
>>>>>>> Stashed changes
