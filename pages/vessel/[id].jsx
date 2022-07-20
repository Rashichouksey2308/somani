import styles from './vessel.module.scss'
import UploadOther from '../../src/components/UploadOther'
import UploadDocument from '../../src/components/UploadDocument'
import DateCalender from '../../src/components/DateCalender'


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
              Ramakrishna Traders
            </h1>
            <div className="ml-auto">
              <div className={`${styles.lastModified} text `}>
                <span>Last Modified:</span> 28 Jan,11:34am
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className={`${styles.backgroundMain} container-fluid background2`}>
                <div className={`${styles.vessel_card}`}>
          <div className={`${styles.main} card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Basic Details</h3>
              <div>
                <label className={`${styles.dropDown_label} text`}>
                  Part Shipment Allowed
                </label>
                <select className={`${styles.dropDown} input`}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className={`${styles.dashboard_form} card-body`}>
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
            <div className={`${styles.dashboard_form} card-body`}>
              <h3 className={styles.sub_heading}>Transit Details</h3>

              <div className="row">
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                   <div className='d-flex'>
                  <select
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    required
                  >
                    <option>Australia</option>
                    <option>India</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Country of Origin<strong className="text-danger">*</strong>
                  </label>
                   <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                 <div className='d-flex'>
                  <select
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    required
                  >
                    <option value="volvo">Perth</option>
                    <option value="audi">Perth</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Port of Loading<strong className="text-danger">*</strong>
                  </label>
                   <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                   <div className='d-flex'>
                  <select
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    required
                  >
                    <option value="volvo">Navasheva</option>
                    <option value="audi">Navasheva</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Port of Discharge<strong className="text-danger">*</strong>
                  </label>
                   <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
                </div>
                             
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                     <div className="d-flex">
                    <DateCalender labelName='ETA at Load Port'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div> 
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                        <div className="d-flex">
                    <DateCalender labelName='ETA at Discharge Port'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                              
                </div>
           
           </div>

              </div>
            </div>
            <hr></hr>
            <div className={`${styles.dashboard_form} card-body`}>
              <h3 className={styles.sub_heading}>Shipping Information</h3>

              <div className="row">
                
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Shipping Line/Charter<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    No. of Containers<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Free Detention Period At Discharge Port (Days)<strong className="text-danger">*</strong>
                  </label>
                </div>
               
              </div>
            </div>

            <div className={`${styles.dashboard_form} card-body`}>
              <div className={`${styles.vessel_card}`}>
                <div className='d-flex justify-content-between align-items-center'>
              <h3 className={styles.sub_heading}>Vessel Information</h3>
              <button className={styles.add_btn}>Add</button>
              </div>
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
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>Year of Built<strong className="text-danger">*</strong></label>                   
                </div> 
               
              </div>
            </div>
            </div>
            <hr></hr>
            <div className={`${styles.dashboard_form} card-body`}>
              <h3 className={styles.sub_heading}>Container Number(s)</h3>

            
                <div className={`${styles.form_group} d-flex justify-content-start`}>
                  <button className={`${styles.upload_btn}`}>Upload Excel</button>
                  <div className={`${styles.upload_text}`}><strong className='text-danger mr-1'>*</strong>
                  ONLY .XLS FILES ARE ALLOWED 
                  <br/> &amp; MAX FILE SIZE UP TO 50MB</div>
                </div>
               
             
            </div>
          </div>
         
        <UploadDocument/>
        <UploadOther/>
        </div>
        </div>
       
    </>
  )
}
