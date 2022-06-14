import styles from './index.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import UploadOther from '../../src/components/UploadOther'


export default function Home() {
  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
            <div className={`${styles.tabHeader} tabHeader `}>
              <div className="d-flex align-items-center justify-content-between">
                <h1 className={`${styles.title} heading`}><img src="/static/arrow-right.svg" alt="arrow right" className="img-fluid image_arrow" />Vessel Details</h1>
                <div className="ml-auto">
                  <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>
                </div>
              </div>
             
            </div>
           
        </div>
        <div className={`${styles.vessel_card} container-fluid`}>
        <div className={`${styles.main} card border-color`}>
        <div className={`${styles.head_container} card-header head_container d-flex justify-content-between bg-transparent`} >
        <h3 className={`${styles.heading}`}>Basic Details</h3>
       
                </div>  
                <div className={`${styles.dashboard_form}`}>
      
               <div className='row'>
               
                <div className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Shipment Type<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Iron<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                     <label className={`${styles.label_heading} label_heading`}>Quantity<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`}>
                    <select  className={`${styles.input_field} input form-control`}>
                    <option value="volvo">Select Country</option>
                    <option value="audi">India</option>
                    </select>          
                    <label className={`${styles.label_heading} label_heading`}>Order Value<strong className="text-danger">*</strong></label>  
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>ETD at Load Port<strong className="text-danger">*</strong></label>                   
                </div>
                <div className={`${styles.form_group} col-md-3 col-sm-6`} >
                    <input className={`${styles.input_field} input form-control`} required type="date"/> 
                     <label className={`${styles.label_heading} label_heading`}>ETA at Discharge Port<strong className="text-danger">*</strong></label>                   
                </div>
               
            </div>
          
            </div>
            <hr></hr>
            <div className={styles.dashboard_form}>
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
                            <option value="volvo">Perth</option>
                            <option value="audi">Perth</option>
                        </select>                    
                        <label className={`${styles.label_heading} label_heading`}>Port of Loading<strong className="text-danger">*</strong></label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`} >
                        <select className={`${styles.input_field} input form-control`}required>
                            <option value="volvo">Navasheva</option>
                            <option value="audi">Navasheva</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>Port of Discharge<strong className="text-danger">*</strong></label>
                    </div>                
                   
                    
                              
                </div>
           
        </div>

            </div>
            <div className={styles.main}>
        <div className={`${styles.head_container} d-flex justify-content-between`}>
            <h3 className={styles.heading}>Upload Other Documents</h3>
            <span>+</span>
        </div>
        <div className={styles.table_container}>
            <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>DOCUMENT NAME</th>
                        <th>FORMAT</th>
                        <th>DOCUMENT DATE</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>                        
                    <tbody>
                   
                    <tr>
                        <td className={styles.doc_name}>Nomination Document</td>
                        <td><img src="/static/pdf.svg" className="img-fluid" alt="Pdf" /></td>
                        <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                        <td colspan='2'><img src="/static/delete.svg" className="img-fluid mr-3" alt="Bin"/>
                        <img src= "/static/upload.svg" className="img-fluid" alt="Share"/></td>
                    </tr>
            
           
           <UploadOther/>
        
           </div>
           </>

  )
}
