import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import InspectionDocument from '../InspectionDocument'
import DateCalender from '../DateCalender'

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
            <div className={`${styles.dashboard_form} card-body`}>
            <div className='row'>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
          
                <div className={`${styles.radio_form} p-0 mt-n2`}>
               <div className={`${styles.label} text`}> 
                   BOE Assessment</div>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Provisional"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Final"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
              </div>
                    <div className={`${styles.form_group} col-lg-6 col-md-6 col-sm-6 `} >
                  <div className={`${styles.label} text`}>
                    PF Bond <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <div className={`${styles.theme} d-flex align-items-center`}>
                  <div className={`${styles.toggle_label} form-check-label mr-3`}>Yes</div>
                    <label className={styles.switch}>
                      <input type="checkbox"/>
                      <span className={`${styles.slider} ${styles.round}` }></span>
                    </label>
                      <div className={`${styles.toggle_label} form-check-label ml-3`}>No</div>
                    </div>
                            </div>


                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className="d-flex">
                    <DateCalender labelName='Bill of Entry for'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                   
                    </div>                     
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      BOE Number<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                  <div className="d-flex">
                    <DateCalender labelName='BOE Date'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                    </div>    
                              
                </div> 
                
                  </div>
            <hr></hr>
            </div>
             <div className={`${styles.dashboard_form} card-body`}>
            <h3 className={styles.form_heading}>BOE Details</h3>
                    <div className='row mb-5'>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                      Commodity <strong className="text-danger ml-n1">*</strong> 
                     </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                      Quantity <strong className="text-danger ml-n1">*</strong></div>
                      <span className={styles.value}>500 Mt</span>
                    </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       Vessel Name <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                        Country of origin<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>India</span>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                        Port Of Discharge<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>Visakhapatnam</span>
                    </div>
                     <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Invoice Quantity<strong className="text-danger">*</strong></label>                   
                </div> 
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                        IGM Number<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>1E3IOH2FIUU80</span>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                        IGM Filing Date<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>22-02-2022</span>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                        CIRC Number<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>COA20210003344</span>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                        CIRC Date<strong className="text-danger">*</strong> </div>
                      <span className={styles.value}>22-02-2022</span>
                    </div>

                  </div>
                  <hr></hr>
                  
                   <div className='row ml-auto'>
                    
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <Form.Check aria-label="option 1" />
                          <div className={`${styles.label} text ml-4`}>
                          BL Number <strong className="text-danger ml-n1">*</strong></div>
                          <span className={`${styles.value} ml-4`}>2345678</span>
                        </div>
                    <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       BL Date <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>22-02-2022</span>
                    </div>
                     <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       No.of Containers <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>18</span>
                    </div>
                     <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       BL Quantity <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>4,000 MT</span>
                    </div>
                     <div className='col-lg-2 col-md-4 col-sm-6 text-center'  
                    style={{top:'40px'}}
                     >
                    <img
                      src="/static/preview.svg"
                      className={`${styles.previewImg} img-fluid ml-n4`}
                      alt="Preview"
                    />
                   
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `} >
                      <Form.Check aria-label="option 1" />
                          <div className={`${styles.label} text ml-4`}>
                          BL Number <strong className="text-danger ml-n1">*</strong></div>
                          <span className={`${styles.value} ml-4`}>2345678</span>
                        </div>
                    <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       BL Date <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>22-02-2022</span>
                    </div>
                     <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       No.of Containers <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>18</span>
                    </div>
                     <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} text`}>
                       BL Quantity <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>4,000 MT</span>
                    </div>
                     <div className='col-lg-2 col-md-4 col-sm-6 text-center'  
                    style={{top:'40px'}}
                     >
                    <img
                      src="/static/preview.svg"
                      className={`${styles.previewImg} img-fluid ml-n4`}
                      alt="Preview"
                    />
                   
                    </div>
                  </div>
                  <hr></hr>
                  <div className='text-right'>
                    <div className={`${styles.total_quantity} text `}>Total: <span className='form-check-label ml-2'>8,000</span></div>
                  </div>
            </div>
          
             <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table className={`${styles.table} border_color table`} cellPadding="0" cellSpacing="0" border="0">
                      <thead>
                        <tr>
                          <th width='35%' >DOCUMENT NAME <img className={`${styles.sort_img} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" /></th>
                          <th>FORMAT <img className={`${styles.sort_img} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" /></th>
                          <th>DOCUMENT DATE <img className={`${styles.sort_img} mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" /></th>
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


