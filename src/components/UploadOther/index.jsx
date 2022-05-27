import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const index = () => {
  return (
    <div className={`${styles.main} container-fluid`}>
      <div
        className={`${styles.head_container} d-flex justify-content-between pt-3`}
      >
        <h3 className={styles.heading}>Upload Other Documents</h3>
        <img className="p-3 img-fluid" src="/static/add.svg" alt="Add" />
      </div>
      <div className={styles.dashboard_form}>
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
              <Form.Group className={`${styles.form_group} `}>
                <Form.Label className={styles.label}>Document Type</Form.Label>
                <select className={`${styles.value} form-control`} id="docType">
                  <option value="volvo">Others</option>
                  <option value="audi">N/A</option>
                </select>
              </Form.Group>

              <Form.Group className={`${styles.form_group} `}>
                <Form.Label className={styles.label}>
                  Please Specify Document Name
                </Form.Label>
                <Form.Control
                  className={`${styles.value} form-control`}
                  type="text"
                  placeholder="Insurance Quotation"
                />
              </Form.Group>

              <button className={styles.upload_button}>Upload</button>
            </div>
          </div>
        </Form>
      </div>

      <div className={styles.table_container}>
        <table
          className={`${styles.table} table`}
          cellpadding="0"
          cellspacing="0"
          border="0"
        >
          <thead>
            <tr>
              <th>DOCUMENT NAME</th>
              <th>FORMAT</th>
              <th>DOCUMENT DATE</th>
              <th>UPLOADED BY</th>
              <th>STATUS</th>
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
            <tr>
              <td colspan="6">
                <select className={`${styles.module} form-control`}>
                  <option>MODULE 1</option>
                  <option>MODULE 2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className={styles.doc_name}>Insurance Quotation</td>
              <td>
                <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
              </td>
              <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
              <td className={styles.doc_row}>John Doe</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Verified
              </td>
              <td>
                <img src="/static/delete.svg" className="img-fluid" alt="Bin" />
                <img
                  src="/static/upload.svg"
                  className="img-fluid"
                  alt="Share"
                />
              </td>
            </tr>
            <tr>
              <td className={styles.doc_name}>Container No. List</td>
              <td>
                <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
              </td>
              <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
              <td className={styles.doc_row}>Buyer</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Verified
              </td>
              <td>
                <img src="/static/delete.svg" className="img-fluid" alt="Bin" />
                <img
                  src="/static/upload.svg"
                  className="img-fluid"
                  alt="Share"
                />
              </td>
            </tr>
            <tr>
              <td className={styles.doc_name}>Container Seal No. List</td>
              <td>
                <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
              </td>
              <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
              <td className={styles.doc_row}>Rama Krishnan</td>
              <td>
                <span className={`${styles.status} ${styles.rejected}`}></span>
                Pending
              </td>
              <td>
                <img src="/static/delete.svg" className="img-fluid" alt="Bin" />
                <img
                  src="/static/upload.svg"
                  className="img-fluid"
                  alt="Share"
                />
              </td>
            </tr>
            <tr>
              <td colspan="6">
                <select className={`${styles.module} form-control`}>
                  <option>MODULE 2</option>
                  <option>MODULE 1</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className={styles.doc_name}>Insurance Quotation</td>
              <td>
                <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
              </td>
              <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
              <td className={styles.doc_row}>John Doe</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Verified
              </td>
              <td>
                <img src="/static/delete.svg" className="img-fluid" alt="Bin" />
                <img
                  src="/static/upload.svg"
                  className="img-fluid"
                  alt="Share"
                />
              </td>
            </tr>
            <tr>
              <td className={styles.doc_name}>Container No. List</td>
              <td>
                <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
              </td>
              <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
              <td className={styles.doc_row}>Buyer</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Verified
              </td>
              <td>
                <img src="/static/delete.svg" className="img-fluid" alt="Bin" />
                <img
                  src="/static/upload.svg"
                  className="img-fluid"
                  alt="Share"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default index
