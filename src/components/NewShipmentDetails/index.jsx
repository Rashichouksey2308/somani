/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import DateCalender from '../DateCalender'
import moment from 'moment'

const Index = ({ saveShipmentData, shipment, expectedShipment, port }) => {

  const [expShipment, setExpectedShipment] = useState(null)

  const [maxdate, setmaxDate] = useState(null)

  useEffect(() => {
    if (expectedShipment) {
      const date = moment(expectedShipment).add(1, 'days').toDate()
      setExpectedShipment(moment(date).format('DD-MM-YYYY'))
    }
  }, [expectedShipment])

  useEffect(() => {
    if (expectedShipment) {
      setmaxDate(moment(expectedShipment).format('DD-MM-YYYY'))
    }
  }, [expectedShipment])

  const saveDate = (value, name) => {
    const d = new Date(value)
    const text = d.toISOString()
    saveShipmentData(name, text)
  }

  const [dateStartFrom, setDateStartFrom] = useState({
    laycan: '',
    eta: ''
  })
  
  const setStartDate = (val, name) => {
    var new_date = moment(new Date(val).toISOString()).add(1, 'days').format('DD-MM-YYYY')
    if (name == 'loadPort.fromDate') {
      setDateStartFrom({ ...dateStartFrom, laycan: new_date })
    } else {
      setDateStartFrom({ ...dateStartFrom, eta: new_date })
    }
  }

  return (
    <div className={`${styles.main} vessel_card border_color card`}>
      <div
        className={`${styles.head_container} d-flex align-items-center card-header border_color justify-content-between bg-transparent`}
        data-toggle='collapse'
        data-target='#shipmentDetails'
        aria-expanded='true'
        aria-controls='shipmentDetails'
      >
        <h3 className={`${styles.heading} mb-0`}>Shipment Details</h3>
        <span>+</span>
      </div>
      <div id='shipmentDetails' className='collapse' aria-labelledby='shipmentDetails'>
        <div className={`${styles.dashboard_form} card-body`}>
          <Form id='ShipmentDetailsForm'>
            <div className='row'>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className='d-flex'>
                  <select
                    className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                    name='shipmentType'
                    onChange={(e) => {
                      saveShipmentData(e.target.name, e.target.value)
                    }}
                  >
                    <option>Select an option</option>
                    <option value='Liner'>Liner</option>
                    <option value='Bulk'>Bulk</option>
                  </select>
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    Shipment Type<strong className='text-danger'>*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src='/static/inputDropDown.svg'
                    alt='Search'
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} ${styles.small_input} col-md-2 col-sm-6`}>
                <div className='d-flex'>
                  <DateCalender
                    dateFormat={'dd-MM-yyyy'}
                    value={shipment.ETAofDischarge.fromDate}
                    name='loadPort.fromDate'
                    saveDate={saveDate}
                    startFrom={dateStartFrom.laycan}
                    setStartDateFrom={setStartDate}
                    maxDate={moment(shipment?.lastDateOfShipment).format('DD-MM-YYYY')}
                    labelName='Laycan at Load Port from'
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src='/static/caldericon.svg'
                    alt='Search'
                  />
                </div>
              </Form.Group>
              <Form.Group className={`${styles.form_group} ${styles.small_input} col-md-2 col-sm-6`}>
                <div className='d-flex'>
                  <DateCalender
                    dateFormat={'dd-MM-yyyy'}
                    value={shipment.ETAofDischarge.toDate}
                    name='loadPort.toDate'
                    saveDate={saveDate}
                    startFrom={dateStartFrom.laycan}
                    maxDate={moment(shipment?.lastDateOfShipment).format('DD-MM-YYYY')}
                    labelName='Laycan at Load Port to'
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src='/static/caldericon.svg'
                    alt='Search'
                  />
                </div>
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className='d-flex'>
                  <DateCalender
                    dateFormat={'dd-MM-yyyy'}
                    name='lastDateOfShipment'
                    saveDate={saveDate}
                    labelName='Last date of shipment'
                    startFrom={expShipment}
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src='/static/caldericon.svg'
                    alt='Search'
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} ${styles.small_input} col-md-2 col-sm-6`}>
                <div className='d-flex'>
                  <DateCalender
                    name='ETAofDischarge.fromDate'
                    dateFormat={'dd-MM-yyyy'}
                    saveDate={saveDate}
                    setStartDateFrom={setStartDate}
                    labelName='ETA at Discharge Port from'
                    startFrom={moment(shipment?.lastDateOfShipment).format('DD-MM-YYYY')}
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src='/static/caldericon.svg'
                    alt='Search'
                  />
                </div>
              </Form.Group>
              <Form.Group className={`${styles.form_group} ${styles.small_input} col-md-2 col-sm-6`}>
                <div className='d-flex'>
                  <DateCalender
                    name='ETAofDischarge.toDate'
                    dateFormat={'dd-MM-yyyy'}
                    saveDate={saveDate}
                    labelName='ETA at Discharge Port to'
                    startFrom={shipment?.ETAofDischarge.fromDate !== '' ? moment(shipment?.ETAofDischarge.fromDate).format('DD-MM-YYYY')  : moment(shipment.lastDateOfShipment).format('DD-MM-YYYY') }
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src='/static/caldericon.svg'
                    alt='Search'
                  />
                </div>
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className='d-flex'>
                  <select
                    className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                    name='portOfLoading'
                    onChange={(e) => {
                      saveShipmentData(e.target.name, e.target.value)
                    }}
                  >
                    <option value=''>Select an option</option>
                    {port?.filter((val, index) => {
                        if (val.Country.toLowerCase() !== 'india') {
                          return val
                        }
                      })
                      .map((val, index) => {
                        return (
                          <option value={`${val.Port_Name}, ${val.Country}`}>
                           {val.Port_Name}, {val.Country}
                          </option>
                        )
                      })}
                  </select>
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    Port of Loading<strong className='text-danger'>*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src='/static/inputDropDown.svg'
                    alt='Search'
                  />
                </div>
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Index
