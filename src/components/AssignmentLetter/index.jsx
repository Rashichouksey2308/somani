import React from 'react'
import styles from './index.module.scss'
import {Row, Col} from "react-bootstrap"
import GrowInput from '../GrowInput'

function index() {
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.sidebar} card card-body`}>
        <div className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.content2}  d-flex justify-content-between align-items-center`}>
               <img src="./static/Component 147 – 2.svg"></img>
                 <span className="ml-3">Seller</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
        <div className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.content2}  d-flex justify-content-between align-items-center`}>
               <img src="./static/Component 147 – 2.svg"></img>
                 <span className="ml-3">Buyer</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
        <div className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.content2}  d-flex justify-content-between align-items-center`}>
               <img src="./static/Component 147 – 2.svg"></img>
                 <span className="ml-3">Manufacturer / Supplier / Shipper</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
        <div className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.content2}  d-flex justify-content-between align-items-center`}>
               <img src="./static/Component 147 – 2.svg"></img>
                 <span className="ml-3">End User / Buyer</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
        <div className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.content2}  d-flex justify-content-between align-items-center`}>
               <img src="./static/Component 147 – 2.svg"></img>
                 <span className="ml-3">Execution Date</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
        <div className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.content2} ${styles.selected}  d-flex justify-content-between align-items-center`}>
               <img src="./static/Component 147 – 2.svg"></img>
                 <span className="ml-3">Payment Terms</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
        <div className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.content2}  d-flex justify-content-between align-items-center`}>
               <img src="./static/Component 147 – 2.svg"></img>
                 <span className="ml-3">Total Order Value</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
        <div className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div className={`${styles.content2}  d-flex justify-content-between align-items-center`}>
               <img src="./static/Component 147 – 2.svg"></img>
                 <span className="ml-3">Discharge Port</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>

      </div>
      <div className={`${styles.content} card`}>
          <div className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-end p-3 bg-transparent`} data-toggle="collapse" data-target="#assignmentLetter" aria-expanded="true" aria-controls="assignmentLetter">
          <label>Date:</label>
            <input  className={`${styles.para}`} placeholder="31.08.2021" />
                                        
                
          </div>
           {assignment()}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} >
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div>

      </div>
    </div>
  )
}

export default index
const assignment=()=>{
  return(
     <div className="card-body">
      <h5 className={styles.sub_heading}>Assignment Letter between: </h5>

      <GrowInput  type="text" className={`${styles.para} `} />
      <GrowInput  type="text" className={`${styles.para} `} />
      
      <p>and</p>
      <p><GrowInput type="text"/>, registered under the Trade Register of Paris under the number<GrowInput  type="text" className={`${styles.para} `}  />, whose head office is at <GrowInput  className={`${styles.para} `} eholder = "10 boulevard de Grenelle – CS 63205 – 75015 Paris – FRANCE (“the Seller or Producer”)" />.
      </p>
      <p>It is hereby agreed that the Seller will accept that the payment for the commodity - approximately <GrowInput  type="text"  className={`${styles.para} `}  /> under the  <GrowInput  type="text"  className={`${styles.para} `}/> by and between the Seller and Hira Power and Steels Ltd (“Buyer”) is to be made by way of a Letter of Credit (L/C), to be issued on the applicant of Indo International Trading FZCO as per the above-mentioned Contract.  The commodity is for use by Hira Power and Steels Ltd (“the Buyer”) only under the terms and conditions contained within the Sales Contract.
      </p>
      <p>The Buyer hereby confirms to remain responsible for the performance of the said contact, including any failure or delay in the issuance of the L/C in accordance with the terms of the contract and this letter.  Further Hira Power and Steels Ltd (“Buyer”) shall remain ultimately responsible for payment of the price in the event that the Seller is unable to obtain payment under the L/C, and hereby agree to indemnify the Seller for any loss, damage or expense including, without limitation, any liability Eramet Marketing Services (“the Seller”) may incur to Indo International Trading FZCO by reason of the invoice being addressed to Indo International Trading FZCO.
      </p>
      <p className="text_sales">Yours faithfully,
      <br/>
      <br/>
      <br/>
      <br/>
     
      </p>
     
      <div className='d-flex justify-content-between align-items-center'>
        <div>
        <strong>………………………………………………………</strong>
      <br/>
      <strong>………………………………………………………</strong>
      <GrowInput type="text" className={`${styles.para}`} placeholder='For INDO INTERNATIONAL TRADING FZCO. (BUYER)'/>
      </div>
      <GrowInput type="text" className={`${styles.para} pt-5`} placeholder='For INDO INTERNATIONAL TRADING FZCO. (BUYER)'/>
      </div>
      <p>
      <strong>………………………………………………………</strong>
      <br/>
      <GrowInput type="text" className={`${styles.para} `} placeholder='For INDO INTERNATIONAL TRADING FZCO. (BUYER)'/>

      </p>
      
                


      

      </div>



          
         
  )
}