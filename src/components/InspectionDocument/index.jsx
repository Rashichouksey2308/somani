import React from 'react'
import styles from './index.module.scss'
import { Form} from 'react-bootstrap'


const Index = () => {
  return (
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
                <th>DOCUMENT NAME <img className={`${styles.sort_image} mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>FORMAT <img className={`${styles.sort_image} mb-1`}  src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>DOCUMENT DATE <img className={`${styles.sort_image} mb-1`}  src="./static/icons8-sort-24.png " alt="Sort icon"/> </th>
                <th width="30%" >ACTION</th>
                
              </tr>
            </thead>
            <tbody>
             
              <tr className="table_row">
                <td className={styles.doc_name}>LC AMENDMENT DRAFT <strong className='text-danger ml-0'>*</strong> </td>
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
                <th>DOCUMENT NAME <img className={`${styles.sort_image} mb-1`}  src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>FORMAT <img className={`${styles.sort_image} mb-1`}  src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>DOCUMENT DATE <img className={`${styles.sort_image} mb-1`}  src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>UPLOADED BY <img className={`${styles.sort_image} mb-1`}  src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
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
                <td colSpan="7" className="p-0">
                  <select className={`${styles.module} form-control`}>
                    <option>LC</option>
                    <option>MODULE 2</option>
                  </select>
                </td>
              </tr>
              <tr className="table_row">
                <td className={styles.doc_name}>LC Draft</td>
                <td>
                  <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
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
                 <td colSpan="2" >
                 <div  className={styles.actionContainer}>  
                  <img
                    src="/static/delete.svg"
                    className={`${styles.binImage} mr-3 img-fluid`}
                    alt="Bin"
                  />
                  <img
                    src="/static/upload.svg"
                    className={`${styles.shareImage} img-fluid`}
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
  )
}

export default Index
