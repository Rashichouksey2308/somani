import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'

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

          <div className={`${styles.main} border_color mt-4 card `}>
            <div className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`} >
              <h3 className={`${styles.heading}`}>Commodity Details</h3>
              <div className='d-flex align-items-center'>
                <div className={`${styles.dropDown_label} text`}>Part Shipment Allowed:</div>
                <div className={`${styles.dropDown} input`}>
                  Yes
                </div>
              </div>

            </div>
            <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
              <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                  <div className={`${styles.label} text`}>
                    Commodity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>Iron</span>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                  <div className={`${styles.label} text`}>
                    Quantity <strong className="text-danger ml-n1">*</strong></div>
                  <span className={styles.value}>500 Mt</span>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                  <div className={`${styles.label} text`}>
                    Order Value <strong className="text-danger ml-n1">*</strong> </div>
                  <span className={styles.value}>500 CR</span>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                  <div className={`${styles.label} text`}>
                    Shipping Line/Charter<strong className="text-danger">*</strong> </div>
                  <span className={styles.value}>Bothra</span>
                </div>

              </div>

            </div>
          </div>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Bill of Lading</h3>
              <button className={styles.add_btn}><span className={styles.add_sign}>+</span>Add</button>

            </div>
            <div className={`${styles.dashboard_form} mt-3 card-body`}>
              <div className={`${styles.bill_landing} border_color`}>
                <div className={`${styles.vessel_card}`}>
                  <div className="row">
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
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        IMO Number<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="number"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        BL Number<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                      <input
                        className={`${styles.input_field} input form-control`} type="date" />
                      <label className={`${styles.label_heading} label_heading`}>
                        BL Date<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                      <input
                        className={`${styles.input_field} input form-control`} required type="text" />
                      <label className={`${styles.label_heading} label_heading`}>
                        BL Quantity<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.eta_heading} mt-4 col-12`}>
                      ETA at Discharge Port<strong className="text-danger">*</strong></div>
                    <div className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`} >
                      <input
                        className={`${styles.input_field} input form-control`} type="date" />
                      <label className={`${styles.label_heading} label_heading`}>
                        From<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`} >
                      <input
                        className={`${styles.input_field} input form-control`} type="date" />
                      <label className={`${styles.label_heading} label_heading`}>
                        To<strong className="text-danger">*</strong></label>
                    </div>

                  </div>
                </div>
                <hr></hr>
                <div className={`${styles.vessel_card} mt-5`}>
                  <h5 className={`${styles.eta_heading} `}>
                    Container Details<strong className="text-danger">*</strong></h5>
                  <div className="row mt-n4">
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="number"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Number of Containers<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="number"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Free Detention Period at Discharge Port (Days)<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                      <div className='d-flex justify-content-start'>
                        <div className={styles.uploadBtnWrapper}>
                          <input type="file" name="myfile" />
                          <button className={`${styles.upload_btn} btn`}>
                            Upload Excel
                          </button>
                        </div>
                        <div className={`${styles.upload_text}`}>
                          ONLY .XLS FILES ARE ALLOWED
                          <br /> &amp; MAX FILE SIZE UP TO 50MB</div>
                      </div>
                    </div>


                  </div>
                </div>

                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table className={`${styles.table} table mt-5`} cellPadding="0" cellSpacing="0" border="0">
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

              <div className={`${styles.bill_landing}  border_color mt-4`}>
                <div className={`${styles.vessel_card} mt-3`}>
                  <div className="row">

                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`} >
                      <input
                        className={`${styles.input_field} input form-control`} type="date" />
                      <label className={`${styles.label_heading} label_heading`}>
                        BL Surrender Date<strong className="text-danger">*</strong></label>
                    </div>

                  </div>
                </div>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table className={`${styles.table} table mt-5`} cellPadding="0" cellSpacing="0" border="0">
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
              <div className={`${styles.search_container} d-flex justify-content-between pt-3 pl-3 pr-3`}>
          <div>
          <select className={`${styles.dropDown} input form-control`} >
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
                            <div className={styles.actionContainer}>
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
          <div className={`${styles.updated_successfully} ${styles.card} card p-0`}>
              <div className={`${styles.card_header} card-header bg-transparent`}>
                <h3>Updated Successfully</h3>
              </div>
              <div className={`${styles.card_body} card-body`}>
                <img src="/static/updated-successfully.svg" alt='Updated Successfully' className='img-fluid' />
                <h4>Success</h4>
                <p>The bill of lading is successfully updated.</p>
                <div className="d-flex align-items-center justify-content-between">
                  <button type='button' className={`${styles.card_button} ${styles.close} btn`}>Close</button>
                  <button type='button' className={`${styles.card_button} ${styles.track_view} btn`}>Track &amp; View</button>
                </div>
              </div>
            </div>       
        </div>
        <SaveBar />

      </div>
    </>

  )
}