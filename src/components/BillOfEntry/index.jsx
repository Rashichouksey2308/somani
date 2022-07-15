import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import InspectionDocument from '../InspectionDocument'

export default function Index() {
  return (
    <>
      
        <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>

        <div className={`${styles.wrapper} border_color p-2 card`}>

          <div className='d-lg-flex align-items-center d-inline-block  pl-4'>
        <h2 className="mb-0">Shipment Type</h2>
          <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Bulk"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Liner"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              
              </div>
            ))}
          </div>
          </div>
          </div>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Bill of Entry</h3>
          
              <button className={styles.add_btn}><span className={styles.add_sign}>+</span>Add</button>
           
            </div>
            <div className={`${styles.dashboard_form} mt-3 card-body`}>
            <div className='row'>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
          
                <div className={styles.radio_form}>
                <div className={styles.sub_heading}>Transaction Type</div>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Import"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Domestic"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className={`${styles.label} text`}>
                    PF Bond <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>Iron</span>
                </div>


                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Bill of Entry for<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      BOE Number<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      BOE Date<strong className="text-danger">*</strong></label>                   
                </div> 
                
                  </div>
           
            </div>
            <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table className={`${styles.table} table mt-3`} cellPadding="0" cellSpacing="0" border="0">
                      <thead>
                        <tr>
                          <th>DOCUMENT NAME <img className={`${styles.sort_img} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon" /></th>
                          <th>FORMAT <img className={`${styles.sort_img} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon" /></th>
                          <th>DOCUMENT DATE <img className={`${styles.sort_img} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon" /></th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr className='table_row'>
                          <td className={styles.doc_name}>BL Acknowledgement Copy<strong className="text-danger ml-0">*</strong>
                          </td>
                          <td><img src="/static/pdf.svg" className="img-fluid" alt="Pdf" /></td>
                          <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                          <td>
                            <div className={styles.uploadBtnWrapper}>
                              <input type="file" name="myfile" />
                              <button className={`${styles.upload_btn} btn`}>
                                Upload
                              </button>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
           
          </div>
         <div className='mt-4 mb-5'>
         <InspectionDocument/>
         </div>
          </div>
          <SaveBar/>

              </div>
           </>

  )
}


