import React, { useState } from 'react'
import styles from './letter.module.scss'
import {Row, Col, Form} from 'react-bootstrap'
import InspectionDocument from '../../src/components/InspectionDocument'
import DateCalender from '../../src/components/DateCalender'


function Index() {
    const [editStren, setEditStren] = useState(true)
    const [edit, setEdit] = useState(true)

  return (
    <>
      {' '}
      <div className="container-fluid mb-4 mt-2 border-0">
        <div className="p-4">
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} mr-3 img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={`${styles.heading}`}>Letter of Credit </h1>
        </div>

        <div className={`${styles.wrapper} mt-4  upload_main`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#lcApplication"
          aria-expanded="true"
          aria-controls="lcApplication"
        >
          <h2 className="mb-0">LC Amendment</h2>
          <span>+</span>
        </div>
        <div
          id="lcApplication"
          className="collapse"
          aria-labelledby="lcApplication"
          data-parent="#lcApplication"
        >
          <div className={` ${styles.cardBody} card-body  border_color`}>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <Row>
                   <div className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label} mb-2 text`}>
                      (51D) LC Issuing Bank <strong className="text-danger ml-n1">*</strong> 
                     </div>
                      <span className={`${styles.value}`}>Iron</span>
                    </div>
                <div className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label}  mb-2 text`}>
                      (20) Documentary Credit Number <strong className="text-danger ml-n1">*</strong></div>
                      <span className={styles.value}>500 Mt</span>
                    </div>
                <div className={`${styles.form_group} mt-3 col-lg-3 col-md-6 col-sm-6 `} >
                      <div className={`${styles.label}  mb-2 text`}>
                       (31C) Date Of Issue <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                  <Col className="mb-4 mt-4"  lg={3} md={6} sm={6}>
                    <div className="d-flex">
                    <DateCalender labelName='(30) Date Of Ammendment'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                 
                  </Col>
                  <Col className="mb-4 mt-4"  lg={3} md={6} sm={6}>
                  <input
                      className={`${styles.input_field} input form-control`}
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (26E) Number of Amendment<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                </Row>
              </div>
            </div>
            <hr className={styles.line}></hr>

              <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <Row>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                   <div className="d-flex">
                  <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option>(44A) Shipment From</option>
                      <option>Balaji Traders</option>
                    </select>
                   
                    <label className={`${styles.label_heading} label_heading`}>
                      Clause<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>   
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                  <input
                      className={`${styles.input_field} input form-control`}
                      style={{opacity: '0.5'}}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}
                    >
                      Existing Value
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4"  lg={4} md={6} >
                    <div className='d-flex'>
                    <input
                        className={`${styles.input_field} input form-control`}
                        type="date"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        New Value<strong className="text-danger">*</strong>
                      </label>
                      <img
                      className="img-fluid ml-4"
                      src="/static/add-btn.svg"
                      alt="add button"
                    />
                  </div>
                  </Col>
                </Row>

                    <div className={styles.table_container}>
                    <div className={styles.table_scroll_outer}>
                            <div className={styles.table_scroll_inner}>
                    <table
                      className={`${styles.table_clause} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0">
                      <thead>
                        <tr>
                          <th width="35%" className={`${styles.table_header}`}>CLAUSE </th>
                          <th className={`${styles.table_header}`} >EXISTING VALUE </th>
                          <th className={`${styles.table_header}`} >NEW VALUE </th>
                          <th className={`${styles.table_header}`} ></th>
                          
                        </tr>
                      </thead>
                      <tbody>
                
                    <tr className="table_row">
                      <td >(44A) SHIPMENT FROM</td>
                      <td>Owendo </td>
                      <td>Russia</td>          
                      <td >
                     
                        <img
                        src="/static/mode_edit.svg"
                        className='img-fluid ml-n5'
                        alt="edit"
                        />
                        <img
                        src="/static/delete 2.svg"
                        className="img-fluid ml-3 mr-n5"
                        alt="delete" />
                  
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td >(44A) SHIPMENT FROM </td>
                      <td>Owendo </td>
                      <td>Russia</td>          
                      <td >
                     
                        <img
                        src="/static/mode_edit.svg"
                        className='img-fluid ml-n5'
                        alt="edit"
                        />
                        <img
                        src="/static/delete 2.svg"
                        className="img-fluid ml-3 mr-n5"
                        alt="delete" />
                  
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

        {/* Document*/}
        <InspectionDocument/>
        </div>
      </div>
    </>
  )
}

export default Index
