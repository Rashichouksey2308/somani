import React, {useState,useEffect} from 'react'
import styles from '../profile.module.scss'

function Index() {
 const [darkMode,setDarkMode] = useState(false)
    useEffect(() =>{
    
    
    if( localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true){
      console.log("this")
       setDarkMode(true)
    }else{
      console.log("this2")
       setDarkMode(false)
    }
 
    },[])
  return (
   <>
 <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#directorDetails" aria-expanded="true" aria-controls="directorDetails">
                                            <h2 className="mb-0">Director Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="directorDetails" className="collapse show" aria-labelledby="directorDetails" data-parent="#profileAccordion">
                                            <div className={`${styles.directorDetails} ${styles.cardBody} card-body border_color`}>
                                              <div className="accordion" id="directorDetails">
                                                  <div className={`${styles.card} border_color card`}>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                      <div className={`${styles.cardHeader} ${styles.collapsed}  card-header row no-gutters bg-transparent collapsed`} data-toggle="collapse" data-target="#director1" aria-expanded="true" aria-controls="director1">
                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>Name</label>Arv Jay</div>
                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>PAN</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>Email Id</label>email@example.com</div>
                                                          <div className={`${styles.detailsBox} accordion_Text  col-md-2`}><label>DIN</label><span className={`${styles.success}`}>03148692</span></div>
                                                          <div className={`${styles.detailsBox}  accordion_Text col-md-2`}><label>Tenure Start Date</label>17-02-2019</div>
                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>DSC Status</label>Approved</div>
                                                        
                                                      </div>
                                                        <div className={`${styles.downArrow} `}><img src={`${darkMode?`/static/white-arrow.svg`:`/static/arrow-right.svg`}`} alt="arrow right" className="img-fluid image_arrow" /></div>
                                                      </div>
                                                      <div id="director1" className="collapse show" aria-labelledby="director1" data-parent="#directorDetails">
                                                        <div className={`${styles.cardBody} card-body border_color`}>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                              <div className={`${styles.collapsed} row no-gutters `}>
                                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>DIN Status</label>Arv Jay</div>
                                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>DSC Registered</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>DSC Expiry Date</label>17-02-2021</div>
                                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label >Designation</label>03148692</div>
                                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>Date Of Birth</label>17-02-2019</div>
                                                                          <div className={`${styles.detailsBox} accordion_Text col-md-2`}><label>Contact</label>Approved</div>
                                                                      </div>
                                                            
                                                          </div>
                                                            
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

export default Index