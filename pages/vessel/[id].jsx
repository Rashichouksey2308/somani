import styles from './vessel.module.scss'
import UploadOther from '../../src/components/UploadOther'

export default function Home() {
  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center justify-content-between">
            <h1 className={`${styles.title} heading`}>
              <img
                src="/static/arrow-right.svg"
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              Vessel Details
            </h1>
            <div className="ml-auto">
              <div className={`${styles.lastModified} text `}>
                <span>Last Modified:</span> 28 Jan,11:34am
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className={`${styles.vessel_card} `}>
          <div className={`${styles.main} card border-color`}>
            <div
              className={`${styles.head_container} card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Basic Details</h3>
              <div className="p-4">
                <label className={`${styles.dropDown_label} text`}>
                  Part Shipment Allowed
                </label>
                <select className={`${styles.dropDown} input`}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <button className={styles.add_btn}>Add</button>
              </div>
            </div>
            <div className={`${styles.dashboard_form}`}>
              <div className="row">
                <div className={`${styles.form_group} col-md-3 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Shipment Type<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Commodity<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Quantity<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} d-flex col-md-3 col-sm-6`}
                >
                  <select
                    className={`${styles.input_field}} pl-3 input w-50 border-right-0`}
                  >
                    <option>USD</option>
                    <option>INR</option>
                  </select>
                  <input
                    type="number"
                    className={`${styles.input_field} border-left-0 input form-control`}
                  />
                  <label
                    className={`${styles.label_heading} label_heading`}
                    id="textInput"
                  >
                    Order values<strong className="text-danger">*</strong>
                  </label>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.dashboard_form}>
              <h3 className={styles.sub_heading}>Transit Details</h3>

              <div className="row">
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <select
                    className={`${styles.input_field} input form-control`}
                    required
                  >
                    <option>Australia</option>
                    <option>India</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Country of Origin<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <select
                    className={`${styles.input_field} input form-control`}
                    required
                  >
                    <option value="volvo">Perth</option>
                    <option value="audi">Perth</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Port of Loading<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <select
                    className={`${styles.input_field} input form-control`}
                    required
                  >
                    <option value="volvo">Navasheva</option>
                    <option value="audi">Navasheva</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Port of Discharge<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="date"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    ETD at Load Port<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="date"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    ETA at Discharge Port
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
              </div>
            </div>

            <hr></hr>
            <div className={styles.dashboard_form}>
              <h3 className={styles.sub_heading}>Vessel Information</h3>

              <div className="row">
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Vessel Name<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    IMO Number<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Flag<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Shipping Line<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    No. of Containers<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Free Detention Period At Discharge Port (Days)
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} mb-4 card border-color mt-4`}>
            <div
              className={`${styles.head_container} head_container d-flex justify-content-between`}
            >
              <h3 className={styles.heading}>Upload Other Documents</h3>
              <span>+</span>
            </div>
            <div className={`${styles.table_form}`}>
              <div className={styles.table_container}>
                <table
                  className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th>DOCUMENT NAME</th>
                      <th>FORMAT</th>
                      <th>DOCUMENT DATE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_row">
                      <td className={styles.doc_name}>
                        Booking Details
                        <strong className="text-danger">*</strong>
                      </td>
                      <td>
                        <img
                          src="/static/pdf.svg"
                          className="img-fluid"
                          alt="Pdf"
                        />
                      </td>
                      <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                      <td>
                        {' '}
                        <input
                          className={styles.input_field}
                          type="text"
                          placeholder="Booking_Details.pdf"
                        />
                        <img
                          className={`${styles.close_image} img-fluid `}
                          src="/static/close.svg"
                          alt="close"
                        />{' '}
                      </td>
                    </tr>
                    <tr className="table_row">
                      <td className={styles.doc_name}>Container List</td>
                      <td>
                        <img
                          src="/static/pdf.svg"
                          className="img-fluid"
                          alt="Pdf"
                        />
                      </td>
                      <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                      <td>
                        {' '}
                        <input
                          className={styles.input_field}
                          type="text"
                          placeholder="Container_List.pdf"
                        />
                        <img
                          className={`${styles.close_image} img-fluid `}
                          src="/static/close.svg"
                          alt="close"
                        />{' '}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
       
        <UploadOther/>
        </div>
    </>
  )
}
