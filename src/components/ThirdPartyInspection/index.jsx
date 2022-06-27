import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'


export default function Index() {
  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
            <div className={`${styles.tabHeader} tabHeader `}>
              <div className="d-flex align-items-center justify-content-between">
                <h1 className={`${styles.title} heading`}><img src="/static/arrow-right.svg" alt="arrow right" className="img-fluid image_arrow" />Vessel Name ABC</h1>
                <div className="ml-auto">
                  <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>
                </div>
              </div>
             
            </div>
           
        </div>
        <div className={`${styles.backgroundMain} container-fluid background2`}>
        <div className={`${styles.vessel_card}`}>
        <div className={`${styles.main} mt-4 card border-color`}>
        <div className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`} >
        <h3 className={`${styles.heading}`}>Inspection Type</h3>
        <div className='d-flex'>
        <div className='mr-5'>
        <label className={`${styles.dropDown_label} text`}>Shipment Type</label>
        <select className={`${styles.dropDown} input`}>
            <option>Bulk</option>
            <option>Liner</option>
        
        </select>   
        </div>
        <div >
        <label className={`${styles.dropDown_label} text`}>Part Shipment Allowed</label>
        <select className={`${styles.dropDown} input`}>
            <option>Yes</option>
            <option>No</option>
        
        </select>   
        <button className={styles.add_btn}>Add</button>
        </div>
        </div>
       
                </div>  
                <div className={styles.radio_form}>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className={styles.radio_group}>
              <Form.Check
                className={styles.radio}
                inline
                label="Load Port"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                className={styles.radio}
                inline
                label="Discharge Port"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
                </div>
                <hr></hr>

                <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
                  <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                      <div className={`${styles.label} text`}>
                      Commodity <strong className="text-danger ml-n1">*</strong> 
                     </div>
                      <span className={styles.value}>Iron</span>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                      <div className={`${styles.label} text`}>
                      Quantity <strong className="text-danger ml-n1">*</strong></div>
                      <span className={styles.value}>500 Mt</span>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                      <div className={`${styles.label} text`}>
                       Country of Origin <strong className="text-danger ml-n1">*</strong> </div>
                      <span className={styles.value}>India</span>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                      <div className={`${styles.label} text`}>Vessel Name</div>
                      <span className={styles.value}>Text</span>
                    </div>

                  </div>

                </div>
            </div>
            <div className={`${styles.main} card border-color mt-4 mb-4`}>
             <div className={`${styles.head_container} border_color card-header align-items-center head_container justify-content-between d-flex bg-transparent`} >
              <h3 className={`${styles.heading}`}>Inspection Details</h3>
              <button className={styles.product_btn} type="button"> Product Specifications
              <img className='img-fluid' src= "./static/blue-eye.svg" alt="blue-eye" />
              </button>
                </div>  
                <div className={`${styles.dashboard_form} card-body`}>
                   <h5 className={styles.sub_heading}>Inspection at Load Port</h5>
                    <div className='row'>    
               
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Inspection Port<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Inspected By<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>Start Date<strong className="text-danger">*</strong></label>                   
                </div> 
                </div>
                  </div>
                  <hr></hr>
                  <div className={`${styles.dashboard_form} mb-3 card-body`}>
                  <h5 className={styles.sub_heading}>Special Mention</h5>
                  <div className='mt-4'>
                  <label className={`${styles.label} label_heading`}
                  style= {{marginBottom:18, marginLeft:-10, backgroundColor:"#FFFFFF", position:"relative"}}>
                      Special Mention
                    </label>
                  <input
                      as="textarea"
                      rows={3}
                      placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                      className={`${styles.comment_field} form-control`}
                    />
                    
                    </div>
                    </div>

                </div>
     
                <div className={`${styles.main} card mb-4 border-color mt-4`}>
                <div className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
                data-toggle="collapse"
                data-target="#upload"
                aria-expanded="true"
                aria-controls="upload">
                <h3 className={styles.heading}>Document</h3>
                <span>+</span>
              </div>
              <div
                id="upload"
                className="collapse"
                aria-labelledby="upload"
                data-parent="#upload"
                >
              <div className={`${styles.table_form}`}>
              <div className={styles.table_container}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>DOCUMENT NAME</th>
                            <th>FORMAT</th>
                            <th>DOCUMENT DATE</th>
                            <th>ACTION</th>
                        </tr>
                        </thead>                        
                        <tbody>
                      
                        <tr className='table_row'>
                            <td className={styles.doc_name}>Certificate of Origin<strong className="text-danger ml-2">*</strong>
                            <span>View</span></td>
                            <td><img src="/static/pdf.svg" className="img-fluid" alt="Pdf" /></td>
                            <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                            <td> <div classname='dropdown'>
                          <button class={`${styles.specify_field} btn btn-secondary dropdown-toggle`}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Please Specify
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                          </div>
                        </div>
                            </td>
                        </tr>
                        <tr className='table_row'>
                            <td className={styles.doc_name}>Certificate of Origin<strong className="text-danger ml-2">*</strong>
                            <span>View</span></td>
                            <td><img src="/static/pdf.svg" className="img-fluid" alt="Pdf" /></td>
                            <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                            <td> <div classname='dropdown'>
                          <button class={`${styles.specify_field} ${styles.hold_field} btn btn-secondary dropdown-toggle`}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="/static/hold-white.svg" 
                            className='img-fluid mr-2'
                            alt="close"/> On Hold
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                          </div>
                        </div>
                            </td>
                        </tr>
                        <tr className='table_row'>
                            <td className={styles.doc_name}>Certificate of Origin<strong className="text-danger ml-2">*</strong>
                            <span>View</span></td>
                            <td><img src="/static/pdf.svg" className="img-fluid" alt="Pdf" /></td>

                            <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                            <td> <div classname='dropdown'>
                          <button class={`${styles.specify_field} ${styles.rejected_field} btn btn-secondary dropdown-toggle`}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/static/close-white.svg" 
                            className='img-fluid mr-2'
                            alt="close"/>
                            Rejected
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                          </div>
                        </div>
                            </td>
                        </tr>
                     
                        
                       
                                        
                    </tbody>
                </table>
                <div className={`${styles.doc_name} ${styles.dashboard_form} mb-3`} >
                 <strong className="text-danger">*</strong> 
                 Any one document is mandatory</div>
                 <hr className='line border-color'></hr>

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
                  <Form.Label className={`${styles.label_heading} label_heading`}>
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
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    Please Specify Document Name
                  </Form.Label>
                  <Form.Control
                    className={`${styles.value} input form-control`}
                    type="text"
                  />
                </Form.Group>
               
                  <button className={`${styles.upload_button} mt-4 btn`}>
                    Upload
                  </button>
              
              </div>
            </div>
          </Form>
        </div>
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
                <td colSpan="7" className="p-0">
                  <select className={`${styles.module} form-control`}>
                    <option>INSURANCE</option>
                    <option>INSURANCE DOC</option>
                  </select>
                </td>
              </tr>
              <tr className="table_row">
                <td className={styles.doc_name}>Policy Document - Marine</td>
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
                <td colSpan="2">
                  <img
                    src="/static/delete.svg"
                    className="img-fluid mr-3"
                    alt="Bin"
                  />
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
            </div>  
            </div>         
                </div>
              </div>
              </div>
           </>

  )
}


