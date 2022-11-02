import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Row } from 'reactstrap'
import LabelDetails from '../LabelDetails'

const BTRDetails = (props) => {
  let { selected } = props
  return (
    <div>
      <div className="card-box card">
        <div className="card-title">
          <h4>Details</h4>
        </div>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="Category"
              value={selected.category}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="Email"
              value={selected.email}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="Name"
              value={selected.name}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="Phone Number"
              value={selected.mobile}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="Country"
              value={selected.country}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="State"
              value={selected.state}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="City"
              value={selected.city}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="Pincode"
              value={selected.pincode}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="Dealer Name"
              value={selected.dealername}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="Motorcycle Model Name"
              value={selected.bikemodel}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="Web Url"
              value={selected.webURL}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
              anchor={true}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="Buy Plan"
              value={selected.buyPlan}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="UTM Source"
              value={selected.utm_source}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="Cedula"
              value={selected.cedula}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="Whatsapp"
              value={
                selected.consents && selected.consents.whatsapp
                  ? selected.consents.whatsapp
                  : ''
              }
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="Email"
              value={
                selected.consents && selected.consents.email
                  ? selected.consents.email
                  : ''
              }
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="Phone"
              value={
                selected.consents && selected.consents.phone
                  ? selected.consents.phone
                  : ''
              }
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="SMS"
              value={
                selected.consents && selected.consents.sms
                  ? selected.consents.sms
                  : ''
              }
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabelDetails
              label="Dynamic Response"
              value={
                selected.dynamicsResponse
                  ? selected.dynamicsResponse.message
                    ? selected.dynamicsResponse.message
                    : ''
                  : ''
              }
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          <Col md={6}>
            <LabelDetails
              label="CreatedOn"
              value={selected.createdOn}
              lsmall={6}
              lmedium={3}
              vsmall={6}
              vmedium={9}
            />
          </Col>
          {selected.category === 'Finance Page' && (
            <>
              <Col md={6}>
                <LabelDetails
                  label="Exchange Motorcycle"
                  value={selected.exchangeMotorcycle}
                  lsmall={6}
                  lmedium={3}
                  vsmall={6}
                  vmedium={9}
                />
              </Col>
              <Col md={6}>
                <LabelDetails
                  label="Year of Purchase"
                  value={selected.yearOfPurchase}
                  lsmall={6}
                  lmedium={3}
                  vsmall={6}
                  vmedium={9}
                />
              </Col>
            </>
          )}
        </Row>
        <Row className="d-flex justify-content-around">
          <Button
            className="sign-btn"
            type="submit"
            onClick={() => props.handleClosePreview()}
          >
            Close
            <i
              className="fa fa-times-circle-o icon_margin"
              aria-hidden="true"
            ></i>
          </Button>
        </Row>
      </div>
    </div>
  )
}

export default BTRDetails

BTRDetails.propTypes = {
  selected: PropTypes.object,
}
