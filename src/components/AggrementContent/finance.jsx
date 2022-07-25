/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index() {
  return (
    <>
      <div className={styles.container}>
        <Form>
          <div className="row border-bottom border-color ">

            <Form.Group className={`${styles.form_group} col-md-8 col-sm-6`}>
              <select
                className={`${styles.input_field} input form-control`}
                name="countryOfOrigin"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value)
                }}
              >
                <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Russia">Russia</option>
              </select>
              <Form.Label
                className={`${styles.label_heading} ${styles.select}  label_heading`}
              >
                Name<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
                        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <select
                className={`${styles.input_field} input form-control`}
                name="countryOfOrigin"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value)
                }}
              >
                <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Russia">Russia</option>
              </select>
              <Form.Label
                className={`${styles.label_heading} ${styles.select}  label_heading`}
              >
                Branch<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>

              <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span>Country</span>
              <p>Amsterdam</p>
            </div>
              <div className={` ${styles.info}col-md-4 col-sm-6`}>
              <span>Swift Code</span>
              <p>FWE56D3R4</p>
            </div>
          </div>
        </Form>

      </div>
    </>
  )
}

export default Index
