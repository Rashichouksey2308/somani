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
      
        <div className={`${styles.backgroundMain} mb-4 mt-3 container-fluid`}>
          <div className='pl-3 pr-3'>
        <div className={`${styles.head_header} `}>
          <img
            className={`${styles.arrow} mr-3 img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={`${styles.heading}`}>Ramkrishanan Traders </h1>
        </div>
        <div className={`${styles.vessel_card} mt-3 border_color`}>

        <div className={`${styles.main} border_color mt-4 card `}>
        <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Forward Hedging</h3>
              <button className={styles.add_btn}><span className={styles.add_sign}>+</span>Add</button>

            </div>
                <div className={`${styles.dashboard_form} mt-2 card-body`}>
                  <div className='row'>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                  <select
                    className={`${styles.input_field} input form-control`}>
                    <option>Indo German</option>
                    <option>N/A</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Bank Name<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`} >
                <select
                    className={`${styles.input_field} input form-control`}>
                    <option>USD</option>
                    <option>N/A</option>
                  </select>
                     <label className={`${styles.label_heading} label_heading`}>
                      Currency<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`} >
                    <input 
                    className={`${styles.input_field} input form-control`}  required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>
                      Booked @<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`} 
                    type="text"
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Booked Amount<strong className="text-danger">*</strong>
                  </label>
                </div>
                
                <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`} >
                <input
                    className={`${styles.input_field} input form-control`} 
                    type="date"
                  />
                     <label className={`${styles.label_heading} label_heading`}>
                      Validity from<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`} >
                <input
                    className={`${styles.input_field} input form-control`} 
                    type="date"
                  />
                     <label className={`${styles.label_heading} label_heading`}>
                     Validity to<strong className="text-danger">*</strong></label>                   
                </div> 
               
                  </div>

                </div>
                <hr></hr>
                <div className={`${styles.upload_main} mt-4 upload_main`}>
                <div className={styles.doc_heading}>Document</div>

              <div>
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
                      <th>DOCUMENT NAME <img className={`${styles.sort_image} mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                      <th>FORMAT <img className={`${styles.sort_image} mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                      <th>DOCUMENT DATE <img className={`${styles.sort_image} mb-1`}src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                      <th>ACTION</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                   
                    <tr className="table_row">
                      <td className={styles.doc_name}>Forward Sales Contract</td>
                      <td>
                      <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                      </td>
                      <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                      <td> <input className={styles.input_field} type="text" placeholder='Nomination_Document.pdf'/>
                      <img className={`${styles.close_image} img-fluid `} src="/static/close.svg" alt="close"/> 
                      </td>
                      
                    </tr>
                  
                  </tbody>
                </table>
                </div>
                </div>
              </div>
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
                                    Drop Files here or<br />
                                    
                                  <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <a href="#">Browse</a>
                                  </div>
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
                      <th>DOCUMENT NAME <img className={`${styles.sort_image} mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                      <th>FORMAT <img className={`${styles.sort_image} mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                      <th>DOCUMENT DATE <img className={`${styles.sort_image} mb-1`}src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                      <th>UPLOADED BY <img className={`${styles.sort_image} mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                      <th>STATUS </th>
                      <th>ACTION</th>
                      <th>
                        <img
                          src="/static/search-blue.svg"
                          className="img-fluid"
                          alt="Search"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr className="table_row">
                <td colSpan="7" className="p-0">
                  <div
                  className={`${styles.search_container} p-2 pl-4 d-flex justify-content-between`} >
                  <div>
                    <select
                      className={`${styles.dropDown} table_container input form-control`}
                    >
                      <option value="volvo">
                        Loading, Transit, Unloading
                      </option>
                      <option value="India">India</option>
                    </select>
                  </div>
                </div>

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
                      <td colSpan="2">
                    <img
                      src="/static/delete.svg"
                      className={`${styles.delete_image} img-fluid mr-3`}
                      alt="Bin"
                    />
                    <img
                      src="/static/upload.svg"
                      className="img-fluid mr-3"
                      alt="Share"
                    />
                    <img
                      src="/static/drive_file.svg"
                      className={`${styles.edit_image} img-fluid mr-3`}
                      alt="Share"
                    />
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
          
           
             

        </div>
           </div>

           <SaveBar/>
              </div>
           </>

  )
}


