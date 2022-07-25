import React, { useState ,useEffect } from "react";
import styles from './index.module.scss'
import DateCalender from '../DateCalender'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Index  ({vesselName,isPartShipment}) {
      const [startDate, setStartDate] = useState(null);
     const [lastDate, setlastDate] = useState(new Date());
     
  return (
    <div className={`${styles.main} card border-color`}>
        <div className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`} >
        <h3 className={`${styles.heading}`}>{vesselName}</h3>
        <div className='d-flex' >
        {isPartShipment ?  <div>
        <label className={`${styles.dropDown_label} text`}>Part Shipment Allowed</label>
        <select className={`${styles.dropDown} input`}>
            <option>Yes</option>
            <option>No</option>
        
        </select> 
        </div> : null}

       
        <button className={styles.add_btn}>Add</button>
        </div>
       
                </div>  
                <div className={`${styles.dashboard_form} card-body`}>
      
               <div className='row '>
               
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Shipment Type<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Commodity<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Quantity<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} d-flex col-lg-3 col-md-6 col-sm-6`}>
                <select className={`${styles.input_field}} pl-3 input w-35 border-right-0`}
                style={{color:"#3687E8"}}>
                <option>USD</option>
                <option>INR</option>
              </select>
              <input
                type="number"
                className={`${styles.input_field} border-left-0 input form-control`}
                
              />
              <label className={`${styles.label_heading} label_heading`} id="textInput">
                Order values<strong className='text-danger'>*</strong>
              </label>
                </div>
            </div>
          
            </div>
            <hr></hr>
            <div className={`${styles.dashboard_form} card-body`}>
            <h3 className={styles.sub_heading}>Transit Details</h3>
           
                <div className='row'>               
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                      <div className='d-flex'>
                        <select className={`${styles.input_field} ${styles.customSelect}  input form-control`} required>
                            <option>Australia</option>
                            <option>India</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>Country of Origin<strong className="text-danger">*</strong></label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}>
                    <div className='d-flex'>
                    <select className={`${styles.input_field} ${styles.customSelect} input form-control`} required>
                            <option>Perth</option>
                            <option>Perth</option>
                        </select>                    
                        <label className={`${styles.label_heading} label_heading`}>Port of Loading<strong className="text-danger">*</strong></label>
                   <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                        <div className='d-flex'>
                        <select className={`${styles.input_field} ${styles.customSelect}  input form-control`}required>
                            <option>Navasheva</option>
                            <option>Navasheva</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>Port of Discharge<strong className="text-danger">*</strong></label>
                  <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
                    </div>  
                    <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`} >
                    <div className="d-flex">
                    <DateCalender labelName='Laycan from'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>   
                    </div>
                    <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`} >
                       <div className="d-flex">
                    <DateCalender labelName='Laycan to'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
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
                    {/* <DateCalender labelName='ETA at Discharge Port'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    /> */}
                      <DatePicker 
                        selected={startDate}
                        dateFormat="dd/MM/yyyy"
                        name={name}
                        className={`${styles.input_field} input form-control`}
                        onChange={(startDate) => {
                        setStartDate(startDate)
                        saveDate(startDate, name)}
                        } 
                        minDate={lastDate}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                        ETA at Discharge Port</label> 
                                            
                </div>
           
           </div>

           <hr></hr>
            <div className={`${styles.dashboard_form} card-body`}>
              
            <h3 className={styles.sub_heading}>Vessel Information</h3>
           
                <div className='row'>    
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Vessel Name<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>IMO Number<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Flag<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                    <input className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>Year of Built<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Shipping Line<strong className="text-danger">*</strong></label>                   
                </div> 
                </div>
           
           </div>

            </div>
            </div>
            </div>
  )
}

export default Index
