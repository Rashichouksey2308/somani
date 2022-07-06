import React, { useState } from 'react'
import styles from './index.module.scss'
import {Row, Col, Form} from 'react-bootstrap'
import UploadOther from '../UploadOther'

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

        <div className={`${styles.wrapper} mt-4 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#lcApplication"
          aria-expanded="true"
          aria-controls="lcApplication"
        >
          <h2 className="mb-0">LC Details</h2>
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
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                  <select
                      className={`${styles.input_field} input form-control`}
                    >
                      <option>Irrevocable</option>
                      <option>Balaji Traders</option>
                    </select>
                   
                    <label className={`${styles.label_heading} label_heading`}>
                      (40A) Form of Documentary Credit<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                  <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (40E) Application Rules<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4"  lg={4} md={6} sm={6}>
                  <input
                      className={`${styles.input_field} input form-control`}
                      type="date"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (31D) Date Of Expiry<strong className="text-danger">*</strong>
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
                  <select
                      className={`${styles.input_field} input form-control`}
                    >
                      <option>Irrevocable</option>
                      <option>Balaji Traders</option>
                    </select>
                   
                    <label className={`${styles.label_heading} label_heading`}>
                      (40A) Form of Documentary Credit<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                  <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (40E) Application Rules<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4"  lg={4} md={6} sm={6}>
                  <input
                      className={`${styles.input_field} input form-control`}
                      type="date"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (31D) Date Of Expiry<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                </Row>
              </div>
            </div>
             

             
            </div>
        </div>
        </div>

        {/* Document*/}
        <div className={`${styles.upload_main} upload_main`}>
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
                <th>DOCUMENT NAME  <img className={`mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>FORMAT <img className={`mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>DOCUMENT DATE <img className={`mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/> </th>
                <th>ACTION</th>
                
              </tr>
            </thead>
            <tbody>
             
              <tr className="table_row">
                <td className={styles.doc_name}>Insurance Quotation</td>
                <td>
                  <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
                </td>
                <td className={styles.doc_row}>28-02-2022,5:30 PM</td>          
                <td colSpan={2}><button className={styles.updateBtn}>Update</button></td>
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
                    id="docType"
                  >
                    <option>Others</option>
                    <option>N/A</option>
                  </select>
                </Form.Group>
                <Form.Group className={styles.form_group}>
                  <Form.Label className={`${styles.label} label_heading`}>
                    Please Specify Document Name
                  </Form.Label>
                  <Form.Control
                    className={`${styles.value} input form-control`}
                    type="text"
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
       
      </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default Index