import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const index = () => {
  return (
    <div className={`${styles.main} container-fluid`}>
      <div className="d-flex justify-content-between">
        <h3 className={styles.heading}>Shipment Details</h3>
        <img className="pr-3" src="/static/Group 550.svg" />
      </div>
      <hr></hr>
      <div className={styles.dashboard_form}>
        <Form>
          <div className="row">
            <Form.Group className={`${styles.form_group} col-md-4`}>
              <Form.Label className={styles.label}>Shipment Type</Form.Label>
              <select
                className={`${styles.value} form-control`}
                id="shipmentType"
              >
                <option value="volvo">Bulk</option>
                <option value="audi">India</option>
              </select>
            </Form.Group>

            <Form.Group className={`${styles.form_group} col-md-4`}>
              <Form.Label className={styles.label}>
                Laycan at Load Port
              </Form.Label>
              <Form.Control
                className={`${styles.value} form-control`}
                type="text"
                placeholder="50 MT"
              />
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4`}>
              <Form.Label className={styles.label}>
                Last date of shipment
              </Form.Label>
              <input
                className={`${styles.value} form-control`}
                type="date"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className={`${styles.form_group} col-md-4`}>
              <Form.Label className={styles.label}>
                ETA at Discharge Port
              </Form.Label>
              <div>
                <Form.Control
                  className={`${styles.value} form-control`}
                  type="date"
                  placeholders="22-01-2022"
                />
              </div>
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default index
