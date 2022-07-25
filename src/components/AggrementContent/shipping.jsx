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
          <div className="row border-bottom-0 border-color ">

             <Form.Group className={`${styles.form_group} d-flex  col-md-8 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
               Supplier Name<strong className="text-danger">*</strong>
              </Form.Label>
                <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
            </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
              Vessel Name
              </Form.Label>
            </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
               GSTIN
              </Form.Label>
            </Form.Group>

          </div>
        </Form>

      </div>
    </>
  )
}

export default Index
