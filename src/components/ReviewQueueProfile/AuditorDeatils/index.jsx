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
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Name</label>Arv Jay</div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`} >PAN</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Email Id</label>email@example.com</div>
                    <div className={`${styles.detailsBox}   col-md-2`}><label className={`accordion_Text`}>DIN</label><span className={`${styles.success}`}>03148692</span></div>
                    <div className={`${styles.detailsBox}   col-md-2`}><label className={`accordion_Text`}>Tenure Start Date</label>17-02-2019</div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Status</label>Approved</div>
                  
                </div>
                  <div className={`${styles.downArrow} `}><img src={`${darkMode?`/static/white-arrow.svg`:`/static/arrow-right.svg`}`} alt="arrow right" className="img-fluid image_arrow" /></div>
                </div>
                <div id="director1" className="collapse show" aria-labelledby="director1" data-parent="#directorDetails">
                  <div className={`${styles.cardBody} card-body border_color`}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className={`${styles.collapsed} row no-gutters `}>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DIN Status</label>Arv Jay</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Registered</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Expiry Date</label>17-02-2021</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`} >Designation</label>03148692</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Date Of Birth</label>17-02-2019</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Contact</label>Approved</div>

                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Gender</label>Male</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Fathers Name</label>Kumar Jav <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>% Shareholding</label>40%</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`} >Authorised Signatory</label>Yes</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Landline</label>0542-5463874</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Address</label># 456 Xyz Building Elite Lane Mumbai Maharashtra - 400012</div>

                                    
                          </div>
                          
                      
                      </div>
                      <div className={`${styles.entities} border-color`}>
                       <div className={`${styles.entities_content}`}>
                         <p>Other Associated Entities</p>
                         <div className={`${styles.row} row`}>
                            <div class="form-check col-md-3">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Current
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Former
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Independent
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Additional
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Nominated
                              </label>
                            </div>

                         </div>
                         <hr className={styles.hr}></hr>
                         <span>Current (2)</span>
                         <div className={`${styles.table}`}>
                          <table
                          className={`${styles.table_details} table border-color`}
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
      <thead>
        <tr>
          <th className="">CIN</th>
          <th className="">ENTITY NAME</th>
          <th className="">TENURE START DATE</th>
          <th className="">TENURE END DATE</th>
          
        </tr>
        
      </thead>
      <tbody>
       <tr>
        <td>U55101GR1986PLC004444</td>
        <td>XYZ InfoTech Private Ltd</td>
        <td>22-02-2022</td>
        <td>22-02-2023</td>
       </tr>
       <tr>
        <td>U55101GR1986PLC004444</td>
        <td>XYZ InfoTech Private Ltd</td>
        <td>22-02-2022</td>
        <td>22-02-2023</td>
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
      
  </div>
  </div>
    <div id="directorDetails2" className="collapse show" aria-labelledby="directorDetails2" data-parent="#profileAccordion">
      <div className={`${styles.directorDetails} ${styles.cardBody} card-body border_color`}>
      <div className="accordion" id="directorDetails2">
            <div className={`${styles.card} border_color card`}>
              <div className="d-flex justify-content-between align-items-center">
                <div className={`${styles.cardHeader} ${styles.collapsed}  card-header row no-gutters bg-transparent collapsed`} data-toggle="collapse" data-target="#director1" aria-expanded="true" aria-controls="director1">
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Name</label>Arv Jay</div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`} >PAN</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Email Id</label>email@example.com</div>
                    <div className={`${styles.detailsBox}   col-md-2`}><label className={`accordion_Text`}>DIN</label><span className={`${styles.success}`}>03148692</span></div>
                    <div className={`${styles.detailsBox}   col-md-2`}><label className={`accordion_Text`}>Tenure Start Date</label>17-02-2019</div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Status</label>Approved</div>
                  
                </div>
                  <div className={`${styles.downArrow} `}><img src={`${darkMode?`/static/white-arrow.svg`:`/static/arrow-right.svg`}`} alt="arrow right" className="img-fluid image_arrow" /></div>
                </div>
                <div id="director1" className="collapse show" aria-labelledby="director1" data-parent="#directorDetails">
                  <div className={`${styles.cardBody} card-body border_color`}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className={`${styles.collapsed} row no-gutters `}>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DIN Status</label>Arv Jay</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Registered</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Expiry Date</label>17-02-2021</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`} >Designation</label>03148692</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Date Of Birth</label>17-02-2019</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Contact</label>Approved</div>

                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Gender</label>Male</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Fathers Name</label>Kumar Jav <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>% Shareholding</label>40%</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`} >Authorised Signatory</label>Yes</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Landline</label>0542-5463874</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Address</label># 456 Xyz Building Elite Lane Mumbai Maharashtra - 400012</div>

                                    
                          </div>
                          
                      
                      </div>
                      <div className={`${styles.entities} border-color`}>
                       <div className={`${styles.entities_content}`}>
                         <p>Other Associated Entities</p>
                         <div className={`${styles.row} row`}>
                            <div class="form-check col-md-3">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Current
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Former
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Independent
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Additional
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Nominated
                              </label>
                            </div>

                         </div>
                         <hr className={styles.hr}></hr>
                         <span>Current (2)</span>
                         <div className={`${styles.table}`}>
                          <table
                          className={`${styles.table_details} table border-color`}
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
      <thead>
        <tr>
          <th className="">CIN</th>
          <th className="">ENTITY NAME</th>
          <th className="">TENURE START DATE</th>
          <th className="">TENURE END DATE</th>
          
        </tr>
        
      </thead>
      <tbody>
       <tr>
        <td>U55101GR1986PLC004444</td>
        <td>XYZ InfoTech Private Ltd</td>
        <td>22-02-2022</td>
        <td>22-02-2023</td>
       </tr>
       <tr>
        <td>U55101GR1986PLC004444</td>
        <td>XYZ InfoTech Private Ltd</td>
        <td>22-02-2022</td>
        <td>22-02-2023</td>
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
      
  </div>
  </div>
    <div id="directorDetails3" className="collapse show" aria-labelledby="directorDetails3" data-parent="#profileAccordion">
      <div className={`${styles.directorDetails} ${styles.cardBody} card-body border_color`}>
      <div className="accordion" id="directorDetails3">
            <div className={`${styles.card} border_color card`}>
              <div className="d-flex justify-content-between align-items-center">
                <div className={`${styles.cardHeader} ${styles.collapsed}  card-header row no-gutters bg-transparent collapsed`} data-toggle="collapse" data-target="#director1" aria-expanded="true" aria-controls="director1">
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Name</label>Arv Jay</div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`} >PAN</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Email Id</label>email@example.com</div>
                    <div className={`${styles.detailsBox}   col-md-2`}><label className={`accordion_Text`}>DIN</label><span className={`${styles.danger}`}>03148692</span></div>
                    <div className={`${styles.detailsBox}   col-md-2`}><label className={`accordion_Text`}>Tenure Start Date</label>17-02-2019</div>
                    <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Status</label>Approved</div>
                  
                </div>
                  <div className={`${styles.downArrow} `}><img src={`${darkMode?`/static/white-arrow.svg`:`/static/arrow-right.svg`}`} alt="arrow right" className="img-fluid image_arrow" /></div>
                </div>
                <div id="director1" className="collapse show" aria-labelledby="director1" data-parent="#directorDetails">
                  <div className={`${styles.cardBody} card-body border_color`}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className={`${styles.collapsed} row no-gutters `}>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DIN Status</label>Arv Jay</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Registered</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>DSC Expiry Date</label>17-02-2021</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`} >Designation</label>03148692</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Date Of Birth</label>17-02-2019</div>
                                <div className={`${styles.detailsBox}  col-md-2`}><label className={`accordion_Text`}>Contact</label>Approved</div>

                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Gender</label>Male</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Fathers Name</label>Kumar Jav <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>% Shareholding</label>40%</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`} >Authorised Signatory</label>Yes</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Landline</label>0542-5463874</div>
                                <div className={`${styles.detailsBox}  col-md-2 mt-5`}><label className={`accordion_Text`}>Address</label># 456 Xyz Building Elite Lane Mumbai Maharashtra - 400012</div>

                                    
                          </div>
                          
                      
                      </div>
                      <div className={`${styles.entities} border-color`}>
                       <div className={`${styles.entities_content}`}>
                         <p>Other Associated Entities</p>
                         <div className={`${styles.row} row`}>
                            <div class="form-check col-md-3">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Current
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Former
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Independent
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Additional
                              </label>
                            </div>
                            <div className="form-check col-md-3" >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Nominated
                              </label>
                            </div>

                         </div>
                         <hr className={styles.hr}></hr>
                         <span>Current (2)</span>
                         <div className={`${styles.table}`}>
                          <table
                          className={`${styles.table_details} table border-color`}
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
      <thead>
        <tr>
          <th className="">CIN</th>
          <th className="">ENTITY NAME</th>
          <th className="">TENURE START DATE</th>
          <th className="">TENURE END DATE</th>
          
        </tr>
        
      </thead>
      <tbody>
       <tr>
        <td>U55101GR1986PLC004444</td>
        <td>XYZ InfoTech Private Ltd</td>
        <td>22-02-2022</td>
        <td>22-02-2023</td>
       </tr>
       <tr>
        <td>U55101GR1986PLC004444</td>
        <td>XYZ InfoTech Private Ltd</td>
        <td>22-02-2022</td>
        <td>22-02-2023</td>
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
      
  </div>
  </div>
</div>
   </>
  )
}

export default Index