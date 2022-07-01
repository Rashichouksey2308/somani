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
          <div className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
                                               <h2 className="mb-0">Payment Terms</h2>
                                          
     <div
                    className={`${styles.pageList}  d-flex justify-content-end align-items-center`}
                  >
                   
                    <a href="#" className={`${styles.arrow} ${`leftArrow`}`}>
                      {' '}
                      <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className="img-fluid"
                      />
                    </a>
                    <a href="#" className={`${styles.arrow} ${`rightArrow`}`}>
                      <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />
                    </a>
                  </div>
                                              
                                           
          </div>
           {sales()}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div>

      </div>
    </div>
  )
}

export default index
const sales=()=>{
  return(
     <div className="card-body">
            <p className="text_sales" >A. All the custom clearance formalities, Duties, Taxes and other charges related to import of cargo and custom clearance shall be to Buyer’s account and shall be solely the Buyer’s responsibility.</p>
            <p  className="text_sales">
                B. The Buyer shall pay for entire cargo within <GrowInput placeholder={90}/> days from the date of <GrowInput placeholder={`B/L`}/> or <GrowInput placeholder={60}/> from the date of discharge of vessel at discharge port, whichever is earlier. The Buyer shall make full payment of the material to be lifted through TT remittance. The Seller shall release the part material to Buyer upon receipt of part payment for the part quantity of material to be lifted after obtaining delivery order or Written Release Order from the LC opening bank as per CMA. The delivery order instructions shall be issued for the part material, for which the payment has been made within one banking day. However, Seller will provide first delivery order in Advance as per buyer’s request.
            </p>
            < p  className="text_sales">
                C. The material shall be stored at <GrowInput placeholder={`Visakhapatnam Port, India`}/> for which the cost of such Rent, Claim, and penalty shall be fully borne by the End User. Upon release of payment for the value of each B/L Quantity Release Order from the Lending Bank shall be sent to the CMA Agent <GrowInput placeholder={`Dr. Amin Controllers Pvt. Ltd.`}/>, within one banking day.
            </p>
            <p  className="text_sales">D. Documents to be provided to Buyer.
                <br/> 
                (1). The Seller‘s Commercial Invoice;. 
                 <br/>
                (2). Full set of 3/3 originals of Bills of Lading, 
                 <br/>
                (3). Certificate of Quality 
                 <br/>
                (4). Certificate of Weight, 
                 <br/>
                (5). Certificate of Origin. 
                 <br/>
                (6). Copy of Marine Insurance Certificate / Insurance Policy
                 <br/>
                
             All the above documents are subject to receipt from shipper.</p>
          </div>
  )
}
// const cma=()=>{
//   return(
//      <div className="card-body">
//             <p className="text_sales" >Date &Place: <input className={`${styles.para}`} placeholder="90"></input></p>
//             <p className="text_sales" >Ref.: Vessel Name:<input className={`${styles.para}`} placeholder="90"></input></p>
//             <br/>
//             <br/>
//             <input className={`${styles.para}`} placeholder="90"></input>
//             <input className={`${styles.para}`} placeholder="90"></input>
//              <br/>
//              <p className="text_sales" >AND</p>
//              <br/>
//              <br/>
//              <input className={`${styles.para}`} placeholder="90"></input>
//              <br/>
//              <br/>
             
//               <p className="text_sales" >Storage Facilities: Open plot at <input className={`${styles.para}`} placeholder="90"></input></p>
//                <br/>
//              <br/>
//               <p className="text_sales" >Storage Documents issued by the Storage Facility </p>
//               <br/>
//                <p className="text_sales" >Dear Sir, </p>
//               <br/>
//              <br/>
//             <p  className="text_sales"> 
//                We hereby authorise the employees, representatives and agents of <input className={`${styles.para}`} placeholder="90"></input> and of the Collateral Manager to carry out an inspection over any and all goods stored by the above mentioned storage facility and over any and all storage document issued by the above mentioned Storage Facility in our favour.

//             </p>
//             < p  className="text_sales">
//                We hereby grant to <input className={`${styles.para}`} placeholder="90"></input> and to the Collateral Manager all the rights and powers necessary to conduct such an inspection.
//             </p>
//             <br/>
//             <br/>
//             <p  className="text_sales">This authorisation is irrevocable.</p>
//             <br/>
//             <br/>
//             <p  className="text_sales">Yours sincerely,</p>
//             <p  className="text_sales">For <input className={`${styles.para}`} placeholder="90"></input>  </p>
//           </div>
//   )
// }
// const assignment=()=>{
//   return(
//      <div className="card-body">
//             <input className={`${styles.para}`} placeholder="90"></input>
//             <br/>
//             <br/>
//             <input className={`${styles.para}`} placeholder="90"></input>
//              <br/>
      
//              <br/>
//              <p className="text_sales" >AND</p>
//              <br/>
//              <br/>
             
//             <p  className="text_sales"> 
//                <input className={`${styles.para}`} placeholder="90"></input>, registered under the Trade Register of Paris under the number <input className={`${styles.para}`} placeholder="90"></input>, whose head office is at   <input className={`${styles.para}`} placeholder="90"></input>.

//             </p>
//             < p  className="text_sales">
//              It is hereby agreed that the Seller will accept that the payment for the commodity - approximately <input className={`${styles.para}`} placeholder="90"></input> under the <input className={`${styles.para}`} placeholder="90"></input> by and between the Seller and Hira Power and Steels Ltd (“Buyer”) is to be made by way of a Letter of Credit (L/C), to be issued on the applicant of Indo International Trading FZCO as per the above-mentioned Contract.  The commodity is for use by Hira Power and Steels Ltd (“the Buyer”) only under the terms and conditions contained within the Sales Contract.
//             </p>
//             <br/>
//             <br/>
            
//             <p  className="text_sales">The Buyer hereby confirms to remain responsible for the performance of the said contact, including any failure or delay in the issuance of the L/C in accordance with the terms of the contract and this letter.  Further Hira Power and Steels Ltd (“Buyer”) shall remain ultimately responsible for payment of the price in the event that the Seller is unable to obtain payment under the L/C, and hereby agree to indemnify the Seller for any loss, damage or expense including, without limitation, any liability Eramet Marketing Services (“the Seller”) may incur to Indo International Trading FZCO by reason of the invoice being addressed to Indo International Trading FZCO..</p>
//             <br/>
//             <br/>
//             <p  className="text_sales">Yours faithfully,</p>
//             <p  className="text_sales">For <input className={`${styles.para}`} placeholder="90"></input>  </p>
//           </div>
//   )
// }
// const tpa=()=>{
//   return(
//      <div className="card-body">
           
//              <p className="text_sales" >This tripartite Agreement made on this  <input className={`${styles.para}`} placeholder="Date"></input> by and among below parties:-</p>
//              <br/>
//              <br/>
             
//             <p  className="text_sales"> 
//                <input className={`${styles.para}`} placeholder="90"></input>, registered under the Trade Register of Paris under the number <input className={`${styles.para}`} placeholder="90"></input>, whose head office is at   <input className={`${styles.para}`} placeholder="90"></input>.

//             </p>
//             < p  className="text_sales">
//              <input className={`${styles.para}`} placeholder="90"></input> &#34; having its registered office at  <input className={`${styles.para}`} placeholder="90"></input> through its authorized signatory included its successors, administrators etc. (hereinafter referred to as the `{ "SELLER"}`); which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns).
//             </p>
//             <br/>
//             <br/>
//             <p className="text_sales" >AND</p>
            
//             <p  className="text_sales">I<input className={`${styles.para}`} placeholder="90"></input> &#34;  a company organized and existing in accordance with Law of UAE and having registered address at <input className={`${styles.para}`} placeholder="90"></input> through its authorized signatory which included its successors, administrator setc. (hereinafter referred to as the "BUYER"), which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns).
// </p>
//             <br/>
//             <br/>
//             <p className="text_sales" >AND</p>
//             <p  className="text_sales"><input className={`${styles.para}`} placeholder="90"></input>, having its registered office address at<input className={`${styles.para}`} placeholder="90"></input>, India through its authorized signatory which included its successors, administrators etc (Hereinafter referred to as "ULTIMATE BUYER", which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns).</p>
//             <p  className="text_sales">MULIA GREEN RESOURCES PTE LTD. (Seller), INDO INTERNATIONAL TRADING FZCO (Buyer) and MOHIT MINERALS LIMITED (Ultimate Buyer) shall hereinafter, for the sake of brevity and convenience, be referred to individually as "Party" and collectively as the "Parties". </p>
//            <br/>
//             <br/>
//             <p className="text_sales" >WHEREAS:-</p>
//              <p className="text_sales" >A.   SELLER has entered into a Contract with BUYER for Sale & Purchase of STEAM (NON COKING) COAL IN BULK OF INDONESIAN ORIGIN (Goods) vide Sales Contract No. ………………… dated ………………… (“Sales Contract”)</p>
//               <p className="text_sales" >B.  SELLER and BUYER have agreed on various terms & Conditions of Sales Contract.</p>
//               <br/>
//               <br/>
//             <p className="text_sales" >1.  THAT IT IS EXPRESSLY CLARIFY AND AGREED TO AMONGST THE PARTIES THAT THE BUYER HAS ENTERED INTO THE CONTRACT SOLELY AT THE REQUEST AND TO FACILITATE THE ULTIMATE BUYER.
//  -</p>
//              <p className="text_sales" >2.  ALL TERMS OF THE CONTRACT HAVE ALREADY BEEN DISCUSSED AND AGREED BETWEEN THE SELLER AND ULTIMATE BUYER. </p>
//               <p className="text_sales" >3. THE ROLE OF BUYER IS LIMITED TO ESTABLISHMENT OF LETTER OF CREDIT IN FAVOR OF SELLER SUBJECT TO ULTIMATE BUYER FULFILLING ITS CONTRACTUAL OBLIGATIONS TOWARDS THE BUYER. 
// </p>
//                <p className="text_sales" >4. THE ULTIMATE BUYER AND SELLER THEREFORE, ARE FULLY LIABLE AND RESPONSIBLE AT ALL TIMES FOR PERFORMANCE OF THE CONTRACT INCLUDING BUT NOT LIMITED TO MAKING FINANCIAL ARRANGMENTS, TIMELY NOMINATION/ACCEPTANCE OF VESSEL, SETTLEMENT OF ANY AND ALL QUALITY/QUANTITY CLAIMS, DELAYED/NO SHIPMENT ISSUES, DEMURRAGE / DESPATCH AMOUNTS, AND/OR ANY OTHER CLAIMS OR LIABILITY ARISING DUE TO EXECUTION OF THE SALES CONTRACT.   ALL SUCH CLAIMS, LIABILITIES ETC., SHALL BE ADDRESSED, DISCUSSED AND SETTLED DIRECTLY BETWEEN THE SELLER AND ULTIMATE BUYER WITH NO REFERENCE AND LIABILITY ON THE PART OF BUYER WHATSOEVER.
// </p>
//                 <p className="text_sales" >5. SELLER WILL NOT HOLD DISCHARGE AND/OR DELIVERY OF CARGO TO THE BUYER/BUYER’S NOMINEES FOR ANY REASON WHATSOEVER ONCE LETTER OF CREDIT IS ISSUED BY THE BUYER. 
// </p>
//                  <p className="text_sales" >6. IN CASE OF ANY CONFLICT BETWEEN THE SALES CONTRACT AND THIS AGREEMENT, THE TERMS OF THIS AGREEMENT WILL PREVAIL. 
// </p>
//                   <p className="text_sales" >7. IN ANY CASE, ULTIMATE BUYER SHALL REMAIN RESPONSIBLE FOR THE PERFORMANCE OF THE SALES CONTRACT, INCLUDING ANY FAILURE OR DELAY IN THE ISSUANCE OF THE LC IN ACCORDANCE WITH THE TERMS OF THE SALES CONTRACT.
// </p>
//                  <p className="text_sales" >8. FURTHER, ULTIMATE BUYER SHALL BE FULLY RESPONSIBLE FOR PAYMENT OF THE PRICE IN THE EVENT THAT SELLER IS UNABLE TO OBTAIN PAYMENT UNDER THE LC. ULTIMATE BUYER SHALL FULLY INDEMNIFY SELLER AND BUYER FOR ANY LOSS, DAMAGE OR EXPENSE ARISING DUE TO EXECUTION OF THE SALES CONTRACT.
// . 
// </p>
//                  <p className="text_sales" >9. .THIS AGREEMENT IS SUBJECT TO ENGLISH LAWS, AND DISPUTES TO BE REFERRED AS PER RULES OF SINGAPORE INTERNATIONAL ARBITRATION CENTER (SIAC).
 
// </p>

              
//           </div>
//   )
// }