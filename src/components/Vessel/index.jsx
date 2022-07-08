import React from 'react'
import styles from './index.module.scss'

function Index  ({vesselName,isPartShipment}) {
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
               
                <div className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Shipment Type<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Commodity<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Quantity<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} d-flex col-md-3 col-sm-6`}>
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
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select className={`${styles.input_field} input form-control`} required>
                            <option>Australia</option>
                            <option>India</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>Country of Origin<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select className={`${styles.input_field} input form-control`} required>
                            <option>Perth</option>
                            <option>Perth</option>
                        </select>                    
                        <label className={`${styles.label_heading} label_heading`}>Port of Loading<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select className={`${styles.input_field} input form-control`}required>
                            <option>Navasheva</option>
                            <option>Navasheva</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>Port of Discharge<strong className="text-danger">*</strong></label>
                    </div>  
                    <div className={`${styles.form_group} col-md-2 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>Laycan from<strong className="text-danger">*</strong></label>                   
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-6`} >
                        <input className={`${styles.input_field} input form-control`} type="date"/> 
                        <label className={`${styles.label_heading} label_heading`}>Laycan to<strong className="text-danger">*</strong></label>                   
                    </div>              
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>ETD at Load Port<strong className="text-danger">*</strong></label>                   
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <input className={`${styles.input_field} input form-control`} type="date"/> 
                        <label className={`${styles.label_heading} label_heading`}>ETA at Discharge Port<strong className="text-danger">*</strong></label>                   
                    </div>
                              
                </div>
           
           </div>

           <hr></hr>
            <div className={`${styles.dashboard_form} card-body`}>
              
            <h3 className={styles.sub_heading}>Vessel Information</h3>
           
                <div className='row'>    
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Vessel Name<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>IMO Number<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Flag<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} type="number"/> 
                     <label className={`${styles.label_heading} label_heading`}>Year of Built<strong className="text-danger">*</strong></label>                   
                </div> 
                <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Shipping Line<strong className="text-danger">*</strong></label>                   
                </div> 
                </div>
           
           </div>

            </div>
  )
}

export default Index
