import React from 'react'
import styles from './index.module.scss'
import { Form} from 'react-bootstrap'
import InsuranceDetails from '../../src/components/InsuranceDetails'
import UploadDocument from '../../src/components/UploadDocument'


const Index = () => {
  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={styles.head_container}>
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>Ramakrishna Traders - Ramal001-000001</h1>
        </div>
        <div>
          <button className={`${styles.clear_btn} clear_btn`}>Clear All</button>
        </div>
      </div>

      <div className={`${styles.vessel_card} mt-3 border_color`}>
      <div className={`${styles.wrapper} p-2 card`}>

        <div className='d-lg-flex align-items-center d-inline-block  pl-4'>
      <h2 className="mb-0">Insurance Type</h2>
        <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className={styles.radio_group}>
              <Form.Check
                className={styles.radio}
                inline
                label="Marine Insurance"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                className={styles.radio}
                inline
                label="Storage Insurance"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                className={styles.radio}
                inline
                label="Both"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />

            </div>
          ))}
        </div>
        </div>
        </div>
        <InsuranceDetails 
           headerName = 'Marine Insurance Policy Details'/>

        <InsuranceDetails 
           headerName = 'Storage Insurance Details'/>
        <UploadDocument/>   
      </div>

      
     
    </div>
  )
}
export default Index
