import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import { useState } from 'react'

const Index = () => {
  const [editInput, setEditInput] = useState(true)

  const handleDropdown = (e) => {

    if (e.target.value = "Others") {
      setEditInput(!editInput)
    }
    else {
      setEditInput(editInput)
    }
  }
  return (
    <div className={`${styles.upload_main} card border_color`}>
      <div
        className={`${styles.head_container} border_color d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#uploadOther"
        aria-expanded="true"
        aria-controls="uploadOther"
      >
        <h3 className={styles.heading}>Upload Other Documents</h3>
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
                    <th>DOCUMENT NAME <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon" /></th>
                    <th>FORMAT <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon" /></th>
                    <th>DOCUMENT DATE <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon" /></th>
                    <th>UPLOADED BY <img className={`${styles.sort_image} mb-1`} src="/static/icons8-sort-24.png " alt="Sort icon" /></th>
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
                  <tr>
                    <div
                      className={`${styles.search_container} p-2 pl-4 d-flex justify-content-between`} >
                      <div>
                        <select
                          className={`${styles.dropDown} input form-control`}
                        >
                          <option value="volvo">
                            Loading, Transit, Unloading
                          </option>
                          <option value="India">India</option>
                        </select>
                      </div>
                    </div>
                  </tr>

                  <tr className="table_row">
                    <td className={styles.doc_name}>Container No. List</td>
                    <td>
                      <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                    </td>
                    <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                    <td className={styles.doc_row}>Buyer</td>
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
  )
}

export default Index
