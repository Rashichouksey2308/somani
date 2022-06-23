import React from 'react'
import styles from './index.module.scss'
import {Row, Col} from "react-bootstrap"

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
          
           {tpaSeller()}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div>

      </div>
    </div>
  )
}

export default index
const tpaSeller=()=>{
  return(
    <div className={`${styles.cardBody} card-body pt-3`}>
        <h3 className={`${styles.heading} text-center`}><span>TRIPARTITE AGREEMENT</span></h3>
        <p className='text-center'>This tripartite Agreement made on this 21st day of August, 2021 by and among below parties:-</p>
        <p><input type="text" placeholder='MULIA GREEN RESOURCES PTE LTD'/>, having its registered office at <input type='text' placeholder='220 Orchard Road # 05-01, MidPoint Orchard, Singapore 238852'/> through its authorized signatory included its successors, administrators etc. (hereinafter referred to as the 	&quot; SELLER 	&quot;); which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns.</p>
        <p>And</p>
        <p><input type="text" placeholder='INDO INTERNATIONAL TRADING FZCO'/>, a company organized and existing in accordance with Law of UAE and having registered address at <input type='text' placeholder='JAFZA VIEW-18, LOB-180504, JEBEL ALI, DUBAI, UAE'/> through its authorized signatory which included its successors, administrator setc. (hereinafter referred to as the 	&quot;BUYER	&quot;), which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns.</p>
        <p>And</p>
        <p><input type="text" placeholder='MOHIT MINERALS LIMITED'/>, having its registered office address at <input type="text" placeholder='7/23, Kirti Nagar Industrial Area, New Delhi 110015, India'/> through its authorized signatory which included its successors, administrators etc (Hereinafter referred to as 	&quot;ULTIMATE BUYER	&quot;=, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns).</p>
        <p><input type="text" placeholder='MULIA GREEN RESOURCES PTE LTD. (Seller), INDO INTERNATIONAL TRADING FZCO (Buyer) and MOHIT MINERALS LIMITED'/> (Ultimate Buyer) shall hereinafter, for the sake of brevity and convenience, be referred to individually as 	&quot;Party	&quot; and collectively as the 	&quot;Parties	&quot;.</p>
        <p>WHEREAS:-</p>
        <ol className={styles.alpha}>
          <li>SELLER has entered into a Contract with BUYER for Sale &amp; Purchase <input type="text" placeholder='of STEAM (NON COKING) COAL IN BULK OF INDONESIAN ORIGIN'/> (Goods) vide Sales Contract No. ………………… dated ………………… (“Sales Contract”)</li>
          <li>SELLER and BUYER have agreed on various terms &amp; Conditions of Sales Contract.<br/>
          NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER: -
            <ol>
              <li>THAT IT IS EXPRESSLY CLARIFY AND AGREED TO AMONGST THE PARTIES THAT THE BUYER HAS ENTERED INTO THE CONTRACT SOLELY AT THE REQUEST AND TO FACILITATE THE ULTIMATE BUYER.</li>
              <li>ALL TERMS OF THE CONTRACT HAVE ALREADY BEEN DISCUSSED AND AGREED BETWEEN THE SELLER AND ULTIMATE BUYER.</li>
              <li>THE ROLE OF BUYER IS LIMITED TO ESTABLISHMENT OF LETTER OF CREDIT IN FAVOR OF SELLER SUBJECT TO ULTIMATE BUYER FULFILLING ITS CONTRACTUAL OBLIGATIONS TOWARDS THE BUYER.</li>
              <li>THE ULTIMATE BUYER AND SELLER THEREFORE, ARE FULLY LIABLE AND RESPONSIBLE AT ALL TIMES FOR PERFORMANCE OF THE CONTRACT INCLUDING BUT NOT LIMITED TO MAKING FINANCIAL ARRANGEMENTS, TIMELY NOMINATION/ACCEPTANCE OF VESSEL, SETTLEMENT OF ANY AND ALL QUALITY/QUANTITY CLAIMS, DELAYED/NO SHIPMENT ISSUES, DEMURRAGE / DESPATCH AMOUNTS, AND/OR ANY OTHER CLAIMS OR LIABILITY ARISING DUE TO EXECUTION OF THE SALES CONTRACT.   ALL SUCH CLAIMS, LIABILITIES ETC., SHALL BE ADDRESSED, DISCUSSED AND SETTLED DIRECTLY BETWEEN THE SELLER AND ULTIMATE BUYER WITH NO REFERENCE AND LIABILITY ON THE PART OF BUYER WHATSOEVER.</li>
              <li>SELLER WILL NOT HOLD DISCHARGE AND/OR DELIVERY OF CARGO TO THE BUYER/BUYER’S NOMINEES FOR ANY REASON WHATSOEVER ONCE LETTER OF CREDIT IS ISSUED BY THE BUYER.</li>
              <li>IN CASE OF ANY CONFLICT BETWEEN THE SALES CONTRACT AND THIS AGREEMENT, THE TERMS OF THIS AGREEMENT WILL PREVAIL.</li>
              <li>IN ANY CASE, ULTIMATE BUYER SHALL REMAIN RESPONSIBLE FOR THE PERFORMANCE OF THE SALES CONTRACT, INCLUDING ANY FAILURE OR DELAY IN THE ISSUANCE OF THE LC IN ACCORDANCE WITH THE TERMS OF THE SALES CONTRACT.</li>
              <li>FURTHER, ULTIMATE BUYER SHALL BE FULLY RESPONSIBLE FOR PAYMENT OF THE PRICE IN THE EVENT THAT SELLER IS UNABLE TO OBTAIN PAYMENT UNDER THE LC. ULTIMATE BUYER SHALL FULLY INDEMNIFY SELLER AND BUYER FOR ANY LOSS, DAMAGE OR EXPENSE ARISING DUE TO EXECUTION OF THE SALES CONTRACT.</li>
              <li>THIS AGREEMENT IS SUBJECT TO ENGLISH LAWS, AND DISPUTES TO BE REFERRED AS PER RULES OF SINGAPORE INTERNATIONAL ARBITRATION CENTER (SIAC).</li>
            </ol>
          </li>
        </ol>
        <div className='d-flex justify-content-between align-items-center'>
          <input type="text" placeholder='For MULIA GREEN RESOURCES PTE LTD. (SELLER)'/>
          <p>Authorised Signatory</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <input type="text" placeholder='For INDO INTERNATIONAL TRADING FZCO. (BUYER)'/>
          <p>Authorised Signatory</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <input type="text" placeholder='For MOHIT MINERALS LIMITED. (ULTIMATE BUYER)'/>
          <p>Authorised Signatory</p>
        </div>
    </div>
  )
}