import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState } from 'react'


export default function Index() {
  const [editInput, setEditInput] = useState(true)

  const handleDropdown = (e) => {
    
    if (e.target.value="Others") {
    setEditInput(!editInput)
    }
    else {
      setEditInput(editInput)
    }
  }
  return (
    <>
      
        <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>

        <div className={`${styles.main} border_color mt-4 card `}>
        <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>CIMS Details</h3>
              <button className={styles.add_btn}><span className={styles.add_sign}>+</span>Add</button>

            </div>
                <div className={`${styles.dashboard_form} mt-2 card-body`}>
                  <div className='row'>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Vessel Name<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Quantity<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                    <input 
                    className={`${styles.input_field} input form-control`}  required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      CIRC Number<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    
                    type="date"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    CIRC Date<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                    <input 
                    className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      CIMS Charges<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                <select
                    className={`${styles.input_field} input form-control`}>
                    <option>Indo German</option>
                    <option>N/A</option>
                  </select>
                     <label className={`${styles.label_heading} label_heading`}>
                      Payment by<strong className="text-danger">*</strong></label>                   
                </div> 
               
                  </div>

                </div>
                <div className={styles.table_scroll_outer}>
               <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table mt-5`} cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>DOCUMENT NAME <img className={`${styles.sort_image} mb-1`} src = "/static/icons8-sort-24.png" alt="Sort icon"/></th>
                            <th>FORMAT <img className={`${styles.sort_image} mb-1`} src ="/static/icons8-sort-24.png" alt="Sort icon"/></th>
                            <th>DOCUMENT DATE <img className={`${styles.sort_image} mb-1`} src ="/static/icons8-sort-24.png" alt="Sort icon"/></th>
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
           
              <div className={`${styles.upload_main} mt-4 mb-5 upload_main`}>
          <div
            className={`${styles.head_container} border_color d-flex justify-content-between`}
            data-toggle="collapse"
            data-target="#uploadOther"
            aria-expanded="true"
            aria-controls="uploadOther"
          >
            <h3 className={styles.heading}>Document</h3>
            <span>+</span>
          </div>
          <div
            id="uploadOther"
            className="collapse"
            aria-labelledby="uploadOther"
            data-parent="#uploadOther"
          >
            <div className={`${styles.dashboard_form} card-body`}>
              <Form>
                <div className="row align-items-center pb-4">
                  <div
                    className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
                  >
                    <div className="text-center">
                      <img
                        className={`${styles.upload_image} img-fluid`}
                        src="/static/browse.svg"
                        alt="Browse"
                      />
                      <p className={styles.drop_para}>
                        Drop Files here <br />
                        or <a href="#">Browse</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 offset-md-1 col-sm-6">
                    <Form.Group className={styles.form_group}>
                      <Form.Label className={`${styles.label} label_heading`}>
                        Document Type
                      </Form.Label>
                      <select
                        className={`${styles.value} input form-control`}
                        id="docType" onChange={(e) => handleDropdown(e)}>
                        <option>N/A</option>
                        <option value='Others'>Others</option>
                      </select>
                    </Form.Group>
                    <Form.Group className={styles.form_group}>
                      <Form.Label className={`${styles.label} label_heading`}>
                        Please Specify Document Name
                      </Form.Label>
                      <Form.Control
                        className={`${styles.value} input form-control`}
                        type="text"
                        disabled={editInput}

                      />
                    </Form.Group>
                    <div className={styles.uploadBtnWrapper}>
                      <input type="file" name="myfile" />
                      <button className={`${styles.upload_button} btn`}>
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div className={`${styles.search_container} search_container  d-flex justify-content-between pt-3 pl-3 pr-3`}>
          <div>
          <select className={`${styles.dropDown} formControl input form-control`} >
                  <option value="volvo">Loading, Transit, Unloading</option>
                  <option value="India">India</option>
                 
                </select>
          </div>

        <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={styles.search}>
              <div className="input-group">
                <div
                  className={`${styles.inputGroupPrepend} input-group-prepend`}
                >
                  <img
                    src="/static/search.svg"
                    className="img-fluid"
                    alt="Search"
                  />
                </div>
                <input
                  type="text"
                  className={`${styles.formControl} form-control formControl `}
                  placeholder="Search"
                />
              </div>
             
            </div>
           
          </div>
          </div>
            <div className={styles.table_container}>
            <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} table`}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <thead>
                  <tr>
                    <th>DOCUMENT NAME <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon"/></th>
                    <th>FORMAT <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon"/></th>
                    <th>DOCUMENT DATE <img className={`${styles.sort_image} mb-1`}src="/static/icons8-sort-24.png " alt="Sort icon"/></th>
                    <th>UPLOADED BY <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon"/></th>
                    <th>STATUS </th>
                    <th>ACTION</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="7" className="p-0">
                      <select className={`${styles.module} form-control`}>
                        <option>BL</option>
                        <option>BL 2</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className={styles.doc_name}>Insurance Quotation</td>
                    <td>
                    <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                    </td>
                    <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                    <td className={styles.doc_row}>John Doe</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.approved}`}
                      ></span>
                      Verified
                    </td>
                    <td colSpan="2" >
                    <div  className={styles.actionContainer}>  
                      <img
                        src="/static/delete.svg"
                        className="img-fluid mr-3"
                        alt="Bin"
                      />
                      <img
                        src="/static/upload.svg"
                        className="img-fluid"
                        alt="Share"
                      /></div>
                    </td>
                  </tr>
                
                </tbody>
              </table>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
           <SaveBar/>
              </div>
           </>

  )
}


