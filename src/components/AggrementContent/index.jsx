import React from 'react'
import styles from "./index.module.scss"
import { Form } from 'react-bootstrap'
function Index() {
  return (
   <>
   <div className={styles.container}>
     <Form>
        <div className="row border-bottom border-color ">
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <select className={`${styles.input_field} input form-control`} name='countryOfOrigin'  onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}>
                  <option value="volvo">{"s"}</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Russia">Russia</option>
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select} label_heading`}>
                  Country Of Origin<strong className="text-danger">*</strong>
                </Form.Label>
            </Form.Group> 
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name='commodity'
                    />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Commodity<strong className="text-danger">*</strong>
                  </Form.Label>
                
                </div>
                </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <select className={`${styles.input_field} input form-control`} name='countryOfOrigin'  onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}>
                  <option value="volvo">{"S"}</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Russia">Russia</option>
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                  Country Of Origin<strong className="text-danger">*</strong>
                </Form.Label>
            </Form.Group>     
           
        </div>
     </Form>
   </div>
   </>
  )
}

export default Index