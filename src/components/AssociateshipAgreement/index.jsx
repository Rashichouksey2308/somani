/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
          <div className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
                                               <h2 className="mb-0"> Terms</h2>
                                          
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
           {/* <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div> */}

      </div>
    </div>
  )
}

export default index
const sales=()=>{
  return(
     <div className="card-body">
            <p className="text_sales" ><strong>ASSOCIATESHIP AGREEMENT NO.</strong></p>
            <p className="text_sales">
              <strong> THIS AGREEMENT</strong> is signed at New Delhi on <input className={`${styles.para}`} placeholder="90"></input>day of<input className={`${styles.para}`} placeholder="90"></input>, 20<input className={`${styles.para}`} placeholder="90"></input> by and between:
            </p>
             <p className="text_sales">
              Indo German International Private Limited, a company incorporated under the Indian Companies Act, 1956, having its Registered Office at 7A, Sagar Apartments, 6, Tilak Marg, New Delhi- 110 001, having its branch office as mentioned in <input className={`${styles.para}`} placeholder=" Schedule 1"></input>  (hereinafter called “<input className={`${styles.para}`} placeholder="Seller"></input> ”) which expression shall, unless it be repugnant to the context or meaning thereof, be deemed to mean and include its successors and permitted assigns, attorneys, herein represented by Mrs. Bhawana Jain duly authorized to enter into this Agreement, on One Part
             </p>
            <p className="text_sales" >AND</p>
            <p className="text_sales" >Person(s) detailed in  <input className={`${styles.para}`} placeholder=" Schedule 1"></input> hereof (hereinafter referred to as the “ <input className={`${styles.para}`} placeholder=" Associate Buyer"></input>r”) of the other Part</p>
            <p className="text_sales" >Seller and the Associate Buyer, wherever required, are collectively referred to as the “Parties” and individually as the “Party.</p>
            <p className={`text_sales ${styles.head}`} >Recitals</p>
            <p className="text_sales" >WHEREAS Associate Buyer has requested Seller to arrange import purchase of Goods (Details of the Goods including quantity, quality, origin, INCO terms is annexed in Schedule 2) from the Supplier and sale of the same to the Associate Buyer on stock & sale basis. 
           </p>
            <p className="text_sales" >Relying upon the representations and information provided by the Associate Buyer in the Request and in the Agreement, Seller has agreed to to arrange import purchase of Goods from the Supplier on CIF / CFR / FOB basis (Details of Supplier in Schedule-3) and to sell the same to the Associate Buyer on stock & sale basis.  
           </p>
            <p className="text_sales" >Whereas, Supplier shall sell the Goods to Indo Intertrade AG, Zug (hereinafter referred to as “Indo”) for onward sale to Seller and Seller shall in terms of this Agreement sell the same to the Associate Buyer.  
           </p>
           <p className="text_sales" >Whereas Seller shall import Goods for and on behalf of the Associate Buyer, at the sole risk and responsibility of the Associate Buyer and shall store the same under the custody of the Customs House Agent/ Collateral Manager appointed by Seller.

           </p>
           <p className="text_sales" >Whereas Seller shall import Goods for and on behalf of the Associate Buyer, at the sole risk and responsibility of the Associate Buyer and shall store the same under the custody of the Customs House Agent/ Collateral Manager appointed by Seller.

           </p>
            <p className="text_sales" >WHEREAS the Associate Buyer has also submitted undertakings for (a) Price Justification(b) Quality and Quantity and Origin of the material and (c) Post Dated Cheques to pay the balance/ outstanding amount to Seller at the time of making the above request for import of the Goods and these undertaking(s) form an integral part of this Agreement and are annexed hereto as Schedule 2A and Schedule 2B.
           </p>
           <p><strong>Now Therefore</strong>, in consideration of the promises and of the mutual agreements, covenants, representations and warranties hereinafter contained, and for other good and valuable consideration the Parties hereby agree as follows:
           </p>

           <ol className={`${styles.oderListParent}`}>
             <li>
              <p  className={`${styles.oderListParent_Head}`}>Item & Price</p>
              <p className="text_sales">The details of the Commodity contracted quantity, Origin, Unit Price and total contract value are mentioned in Schedule 2.</p>
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">The Associate Buyer affirms that the Supplier, Item, specifications, quantities, Origin, delivery and all other terms & conditions of sale between Indo and the Supplier have been negotiated and firmed up between Associate Buyer and Supplier. The Associate Buyer further undertakes that it has ensured that the Sales Contract to be entered into between Indo and the Supplier (“Sale Contract”) is in accordance with the negotiations undertaken by the Associate Buyer and the Supplier.</p></li>
               <li><p className="text_sales">The Associate Buyer confirms that he is solely responsible for competitiveness of price, selection of Supplier, quality, and quantity of goods and all the risks associated therewith.</p></li>
                <li><p className="text_sales">Pricing: - The calculation of price shall be done as per the formula specified in Schedule 3.</p>
                <p className="text_sales">The amount payable as per the final invoice issued by Seller shall be final and binding on the Associate Buyer.</p>
                </li>

             </ol>
             </li>
              <li>
              <p  className={`${styles.oderListParent_Head}`}>Advance Margin Money</p>
              <p className="text_sales">The Associate Buyer shall provide an advance amount as mentioned in Schedule 4 as margin money, to Seller prior to opening of LC by Indo on the Supplier</p>
            </li>
            <li>
              <p  className={`${styles.oderListParent_Head}`}>Payment</p>
              <p className="text_sales">The terms of payment shall be as per Schedule 5</p>
            </li>
            <li>
              <p  className={`${styles.oderListParent_Head}`}>Seller's trading Margin</p>
              <p className="text_sales">The Trading margin of Seller shall be paid by the Associate Buyer as per details mentioned in Schedule 6, and the same shall be collected in the Sale Invoice raised by Seller on the Associate Buyer.</p>
            </li>
            <li>
              <p  className={`${styles.oderListParent_Head}`}>Other Charges</p>
              <p className="text_sales">Any and all incidental charges that may be incurred by Indo and/or Seller in relation to the import/storage/maintenance/delivery/security, Railway Freight, Penalty, Charges etc.  of the Goods shall be to the account of the Associate Buyer and will be payable by Associate Buyer to Seller at actuals within 5 days of demand from Seller. </p>
            </li>
              <li>
              <p  className={`${styles.oderListParent_Head}`}>Quality, Quantity, Pre-Shipment Inspection </p>
              <p className="text_sales">Obligations of the Associate Buyer are as under:</p>
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">Ensuring pre-shipment inspection of the goods/items from agency of International repute as acceptable to Seller.</p></li>
               <li><p className="text_sales">Approval and/or acceptance of quantity and quality certificate issued by the Supplier. </p></li>
                <li><p className="text_sales">Ensuring that quality and quantities of goods shipped are as per Letter of Credit/sales Contract/Performa Invoice at pre-shipment stage and also at port of discharge. </p>
              
                </li>
                 <li><p className="text_sales">Quantity as per Bill of Lading shall be final and binding on the Associate Buyer.  </p></li>
                 <li><p className="text_sales">Seller shall not be responsible for any variation in quantity and/or quality of material at the port of loading, port of discharge, during transit to godown/warehouse/plot, while in godown/warehouse/plot and/or till it is delivered to the Associate Buyer. Associate Buyer shall be solely responsible for any non-supply, short supply or deviation in quality standards/quantity or delay in supply for any reason whatsoever.  </p></li>
                   <li><p className="text_sales">Associate Buyer shall be solely liable and responsible for all consequences arising out of any variation of the item/quality/quantity contracted for & actually shipped. Associate Buyer undertakes to indemnify Seller in this regard. It has been agreed by the Associate Buyer that any claim/liability arising from the Supplier against Indo/Seller shall be passed on to the Associate Buyer. If the Supplier agrees upon any compensation on account of any quality deviation, then Seller shall refund the same to the Associate Buyer on receipt of the same.</p></li>
             </ol>
             </li>
            <li>
              <p  className={`${styles.oderListParent_Head}`}>Insurance </p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">The Marine Insurance will be arranged by the Associate Buyer in favour of Seller or Seller’s nominated Bank (as per Seller’s discretion), for 110% of Import Cargo Value, the cost of it shall be borne by the Associate Buyer. 
                 </p></li>
               <li><p className="text_sales">The cargo while in the port, during transit from port to godown/plot/warehouse and while in the godown/plot/warehouse shall be insured by way of insurance by Associate Buyer in favour of Seller or Seller’s nominated Bank (as per Seller’s discretion), for 110% of landed cost (inclusive of custom duty, all other taxes applicable under GST Act 2017). Associate Buyer will ensure that the material shall at all times remain insured. In case Seller decides to take the insurance directly in its name, the cost of it shall be borne by the Associate Buyer. </p></li>
                <li><p className="text_sales">The Insurance policy in original shall be submitted by Associate Buyer to Seller immediately on demand. In case the Associate Buyer fails to take the Insurance as desired by Seller, Seller shall among other rights reserved under this Agreement, including right to terminate the Agreement, be at liberty to take such insurance at cost of the Associate Buyer. </p>
              
                </li>
                 <li><p className="text_sales">In the event of any loss, or any other event, leading to invocation of insurance policy, the process of filing of claim, settlement of amount, etc. shall be the sole responsibility of the Associate Buyer. It has been agreed by the Associate Buyer that settlement, if any, arrived with the Insurance Company, shall be paid directly by the Insurance Company to Seller or Seller’s nominated bank as the case may be and the same shall not absolve the Associate Buyer of their liability under the Associateship Agreement towards Selle</p></li>
                 
             </ol>
             </li>
               <li>
              <p  className={`${styles.oderListParent_Head}`}>Stock & Sale / Clearance at Port of Entry </p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">The Goods shall be sold by Seller to Associate Buyer on Stock & Sale basis. Seller shall file the Bill of Entry in its name and the Associate Buyer shall arrange to clear the cargo at the port. 
 
                 </p></li>
               <li><p className="text_sales">Seller shall generate eway bill from the GST portal under its registration for movement of the goods by Rail or Road </p></li>
                <li><p className="text_sales">The Insurance policy in original shall be submitted by Associate Buyer to Seller immediately on demand. In case the Associate Buyer fails to take the Insurance as desired by Seller, Seller shall among other rights reserved under this Agreement, including right to terminate the Agreement, be at liberty to take such insurance at cost of the Associate Buyer. </p>
              
                </li>
                 <li><p className="text_sales">All Duties and taxes shall be paid by the Associate Buyer to CHA/Seller in advance at the time of Custom Clearance. The Associate Buyer shall bear all Handling Charges, Port Charges, Plot Rental, CHA / Stevedoring Charges etc. </p></li>
                   <li><p className="text_sales">Quantity in RR/LR shall be the final basis for GST billing. The final reconciliation shall be done based on the BL quantity only. </p></li>
                     <li><p className="text_sales">BL quantity shall be considered the final quantity. Any shortage from the BL quantity shall be to the account of Associate Buyer and Seller shall in no way be responsible for the same. Any physical excess after despatch of BL quantity shall be the Associate Buyer’s property. Seller shall not be liable to pay any extra duty/ port charges on it. In case any liability arises on Seller on this account, the Associate Buyer shall pay upfront.
                </p></li>
                 
             </ol>
             </li>
              <li>
              <p  className={`${styles.oderListParent_Head}`}>Transport/Storage</p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">Associate Buyer shall bear and pay railway / Truck freight & related expenses for movement of goods from discharge Port to Associate Buyer’s Plant directly. Seller/Associate Buyer shall generate e-way bill from the GST portal under its registration for movement of the goods by Rail or Road 
 
 
                 </p></li>
               <li><p className="text_sales">It is agreed that Seller shall retain the title over the Goods and that the Associate Buyer shall not create/ put any further charge, encumbrance with any other person/ party/entity, etc. on the Goods. Further Associate Buyer shall not lift any material without Release order issued by Seller.
                      </p></li>
                <li><p className="text_sales">All risks and losses including in terms of variation in quality or quantity of goods lying in the godown/plot/warehouse, including shortage, loss due to theft/burglary/ contamination or any other reason whatsoever shall be borne by Associate Buyer and Seller shall in no way be liable for the same.
                  </p>
              
                </li>
                 <li> <p  className={`${styles.oderListChild_Head}`}>Safekeeping and Security of the Goods: </p><p className="text_sales">Proper safekeeping and security of Goods shall be the responsibility of the Associate Buyer. The Associate Buyer shall provide round the clock security guards at the Storage yard where Goods shall be stored. Seller shall in no way be responsible or liable for any loss or damage to the Goods for any reason whatsoever including shortage or theft. </p></li>
                 
  
                 
             </ol>
             </li>

               <li>
              <p  className={`${styles.oderListParent_Head}`}>Custom House Agent / Stevedoring Agent </p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">On Associate Buyer’s request, Seller has agreed to appoint Associate Buyer’s nominated Stevedoring agent for providing the stevedoring services as specified in the agreement to be entered with Stevedoring Agent.</p>
               <p className="text_sales">The Associate Buyer confirms and agrees that Indo German shall not be liable or responsible for any non-performance or breach of the terms of the Agreement by the stevedores in any manner whatsoever, including but not limited to shortage, theft, mix-up of the Goods with other goods or material, delay in performance of terms of Stevedoring agreement by Stevedores. For any claims arising out of the breach of the terms of the stevedoring agreement by the Stevedores, the Associate Buyer shall have direct recourse to the Stevedores without any liability or responsibility of Seller.
               </p>
               </li>
               <li><p className="text_sales">Seller will instruct the stevedoring agent consign the material directly to the Seller’s nominated warehouse/plot/etc, where the goods will be stored. The Goods shall remain under the control and custody of the CHA/Stevedoring Agent who will work under the sole instructions of Seller. The CHA/Stevedoring Agent shall furnish an undertaking that goods will not be released to Associate Buyer or to their nominees without a written Release order from Seller. Seller shall enter into an agreement with CHA/Stevedoring Agent & the Associate Buyer. CHA/Stevedoring Agent will raise invoice on the Associate Buyer and the Associate Buyer will make the payment to CHA Directly.

                      </p></li>
                <li><p className="text_sales">CHA/Stevedoring Agent will apply online for EDRM permission for Railway Rakes/Transporter CHA/Stevedoring Agent will place indent online. The Associate Buyer will coordinate with “CHA/Stevedoring Agent for making necessary arrangements to place for Railway Rakes. The Associate Buyer will pay the railway freight and related charges directly. Scanned copy of RR shall be furnished by CHA/Stevedoring Agent to Seller as well as the Associate Buyer as soon as it is issued after loading. The original RR/LR shall be sent by CHA/Stevedoring Agent to the Associate Buyer for taking delivery of the rake.

                  </p>
              
                </li>
                 <li> <p className="text_sales">CHA/Stevedoring Agent shall inter-alia undertake the following tasks </p>
                 <ul>
                  <li>Arranging allotment of plot at the Discharge Port</li>
                  <li>Customs Clearance of Cargo.</li>
                  <li>Cargo discharge at Discharge Port</li>
                  <li>Transportation to Plot</li>
                  <li>Segregated stacking of cargo at plot grade wise</li>
                  <li>Arranging security cover</li>
                  <li>Placing Railway indents etc</li>
                  <li>Loading on to wagons / trucks</li>
                 </ul>
                 </li>
                 
  
                 
             </ol>
             </li>
               <li>
              <p  className={`${styles.oderListParent_Head}`}>Inland Transportation</p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">The movement of goods from port to warehouse/ plot shall be made by an approved transporter under Transit Insurance Cover, taken by the Associate Buyer in favour of Seller or Seller’s Nominated Bank, at the cost and risk of Associate Buyer. 
 
 
                 </p></li>
               <li><p className="text_sales">The Goods shall be cleared and consigned directly to the plot/godown/warehouse (leased in favour of and/or in control of Seller) intended to store the goods in the name of Seller. 

                      </p></li>
                <li><p className="text_sales">The Associate Buyer shall be held solely liable and responsible for all consequences arising during loading and unloading of Goods at port, movement of goods from port to warehouse/godown/plot and unloading and/or storing of goods at warehouse/godown/plot, and dispatch to the works of the Associate Buyer. All loss in terms of variation in quality and/or quantity of goods shall be borne by Associate Buyer and Seller shall in no way be liable for the same.

                  </p>
              
                </li>
               
                 
  
                 
             </ol>
             </li>
              <li>
              <p  className={`${styles.oderListParent_Head}`}>Independent Surveyor/Security </p>
              <p className="text_sales">Seller will appoint an independent surveyor and/ or collateral manager at our own cost who will be present at the time of release of each consignment and will provide a daily report of the stock at godown/warehouse/plot. The CHA/Stevedoring and the Associate Buyer shall provide unrestricted and unfettered access to Seller’s agent so appointed by Seller. CHA/Stevedoring, Associate Buyer, Seller and the Collateral Manager shall enter into an agreement detailing the rights and responsibility of each party. </p>
            </li>
             <li>
              <p  className={`${styles.oderListParent_Head}`}>Payment before Completion of Due Date  </p>
              <p className="text_sales">Associate Buyer shall pay for the entire material 3 working days before the due date as mentioned here in above. </p>
            </li>
              <li>
              <p  className={`${styles.oderListParent_Head}`}>Title/Risk </p>
              <p className="text_sales">Title to the Goods shall be deemed to have been transferred to the Associate Buyer and the Goods shall be deemed to be sold and delivered to the Associate Buyer only upon receipt by e Seller of the entire contract value. It is clarified that the Seller shall retain full legal ownership in the Goods, to secure the Associate Buyer’s obligation to pay the entire contract value, until receipt by the Seller of the entire contract value. All risk of loss or damage thereto shall pass to the Associate Buyer as per INCO terms 2020.</p>
            </li>
              <li>
              <p  className={`${styles.oderListParent_Head}`}>.	 Exchange Rate and Exchange Risk</p>
              <p className="text_sales">Seller will take forward cover from its Bank, in consultation with Associate Buyer, at the cost and risk of Associate Buyer. The exchange rate so decided, shall be acceptable to Associate Buyer.</p>
            </li>
             <li>
              <p  className={`${styles.oderListParent_Head}`}>Right to Dispose off Goods </p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">In the event of any of the default of Terms & conditions of this contract/delay/failure/refusal on the part of the Associate Buyer to pay the entire contractual value within the due date as aforesaid, and/or refusal to take delivery of the consignment for any reason whatsoever, Seller will be at liberty, but shall not be obligated, to sell the Goods to any other party at the cost, risk, expenses and responsibility of the Associate Buyer, without any reference to Associate Buyer. It has been agreed and undertaken by the Associate Buyer, that Associate Buyer shall not raise any objection to the method adopted by Seller to sell the said goods, in case Seller wishes to exercise its discretion under this clause. The amount so received by selling the Goods shall be adjusted towards the outstanding amount in the account of the Associate Buyer maintained by Seller. Any amount still due and payable by the Associate Buyer after such adjustment shall be payable by the Associate Buyer forthwith upon receipt of demand from Seller, failing which Seller shall have the right to recover the same by exercising any and/or all legal remedies available to Seller.

                 </p></li>
               <li><p className="text_sales">Any shortfall on account of such disposal of Goods and any loss incurred by Seller, including and not limited to, interest/ detention/ demurrage/ storage/ carrying charges, consequential damages after adjustment of amounts received by Seller shall be payable by the Associate Buyer forthwith upon receipt of demand from Seller failing which they will be liable to pay interest at the rate of 18% per annum on monthly rest basis. </p></li>
                <li><p className="text_sales">Pre-Berthing Delays, Demurrage, Dispatch Port dues and charges at Load Port/ Discharge port will be to Associate Buyer’s account. </p>
              
                </li>
                 <li><p className="text_sales">It is made clear that any profit made upon disposal of the goods to any third party under this clause, shall solely belong to Seller.</p></li>
                 
             </ol>
             </li>
             <li>
              <p  className={`${styles.oderListParent_Head}`}> GST/Other Tax </p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">The GST Liability and issuance of certificates under the GST Act 2017 as applicable will be the responsibility of Associate Buyer. However, if any other tax liability is levied on this transaction on Seller, the same shall be reimbursed to Seller by Associate Buyer within 7 days of Seller notifying the Associate Buyer of the levy.


                 </p></li>
               <li><p className="text_sales">Withholding tax, if any will be to the account of Associate Buyer. Any excess/refund will be settled within a week's time after getting such advice from Seller. </p></li>
                <li><p className="text_sales">Associate Buyer to submit Form 27C (in original) to Seller on monthly basis, in advance in absence of form 27C, TCS @ 1% will be applicable on Sales Invoice. </p>
              
                </li>
                
                 
             </ol>
             </li>  
              
            <li>
              <p  className={`${styles.oderListParent_Head}`}>Notices</p>
              <p className="text_sales">Any notice given under this Agreement, and/or any in other agreement emanating from this Agreement, shall be in writing and shall be served by email, registered mail or Speed Post only. The party’s address for the service of notice shall be the above-mentioned address or such other address as specified by notice to the other party. The notice shall be deemed to have been served if it was served by post, 48 hours after it was posted.</p>
            </li>
            <li>
              <p  className={`${styles.oderListParent_Head}`}> Arbitration</p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">Any dispute or difference, whatsoever, arising between the parties out of, or relating to, or incidental to the construction, meaning, scope, operation or effect of this Agreement; or the validity or the breach thereof, shall be settled by Arbitration in accordance with Rules of Arbitration formulated by Singapore International Arbitration Centre (SIAC) and the Associate Buyer agrees to submit to the said forum. The Award made in pursuance thereof shall be binding on the parties. The venue of the Arbitration will be Singapore and Singapore Courts shall have sole jurisdiction with respect to this Agreement and any other agreement(s) executed in pursuance/furtherance of or in connection to this Agreement. The English Laws shall be the governing laws in respect of this Agreement. 



                 </p></li>
               <li><p className="text_sales">In case there is any dispute, arising out of and/or pursuant to this Agreement, either between Associate Buyer and the Supplier and/ or the Supplier and Indo/Seller, the same shall be settled amicably directly by Associate Buyer with the Supplier, without any recourse to Indo/Seller. In case, such dispute is not settled amicably, any arbitration proceedings and/or other proceeding, which may be initiated by any of the Parties, shall be solely at the costs, risks and consequences of Associate Buyer and Seller shall in no manner be liable and responsible for the same.
                </p></li>
                <li><p className="text_sales">In case there is any dispute, arising out of and/or pursuant to this Agreement, either between Associate Buyer and the Supplier and/ or the Supplier and Indo/Seller, the same shall be settled amicably directly by Associate Buyer with the Supplier, without any recourse to Indo/Seller. In case, such dispute is not settled amicably, any arbitration proceedings and/or other proceeding, which may be initiated by any of the Parties, shall be solely at the costs, risks and consequences of Associate Buyer and Seller shall in no manner be liable and responsible for the same. </p>
              
                </li>
                
                 
             </ol>
             </li> 
              <li>
              <p  className={`${styles.oderListParent_Head}`}> Indemnification</p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">Associate Buyer agrees to defend, indemnify, keep indemnified and hold harmless, Seller  including, Seller ’s directors, officers and employees from and/or against all and any claims, loss, damage, demands or cost including but not limited to taxes/duties damages, expenses, demurrage, penalties, liabilities, legal cost, no shipment, delayed shipment, short shipment, claims on account of quality/quantity/making/weight/specifications etc., of whatever nature, arising from but not limited to any action, omission, willful conduct, negligence and/or breach of any term or condition of this Agreement, on part of the Associate Buyer or Supplier. No claim shall be passed on to Seller or Indo either by Supplier or Associate Buyer.  



                 </p></li>
               <li><p className="text_sales">All transit or storage losses on any account whatsoever, shall be borne by Associate Buyer and Seller shall in no way be liable for the same. 


                </p></li>
                <li><p className="text_sales">Associate Buyer shall always abide by the laws of the State and Central Government as applicable/in force from time to time. Seller shall not be responsible for any repercussion on this Agreement on account of any change in Government Acts, Rules and Regulations, or for any failure on the part of the Supplier/Associate Buyer to comply with the same.</p>
              
                </li>
                 <li><p className="text_sales">That it is made clear that Seller shall not be liable for any loss or damage emanating from the present Agreement unless specifically mentioned herein.</p>
              
                </li>
                
                 
             </ol>
             </li> 
               <li>
              <p  className={`${styles.oderListParent_Head}`}> 	Settlement of Accounts</p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">After conclusion of the deal i.e., receipt of the entire amounts due to Seller from Associate Buyer/remittance against the import & receipt of RR copies and all other supporting documents related to domestic sale, the account maintained by Seller for the Associate will be settled as per the procedure followed by Seller. 
  



                 </p></li>
               <li><p className="text_sales">In case after the L/C is opened and the supply contract between Indo and the Supplier is cancelled for any reason whatsoever, Seller shall be entitled to receive from Associate Buyer all costs incurred by Indo/Seller along with the agreed margin / service charge + GST at applicable rates/other costs etc.  


                </p></li>
                
                
                 
             </ol>
             </li> 
               <li>
              <p  className={`${styles.oderListParent_Head}`}> General Dispute Clause</p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">In the event any dispute of whatsoever nature arises including but not limited to regarding the time schedule, quality, quantity and demurrage to the same, or difference between the parties, the liability thereto, if any, will be that of Associate Buyer. It is clearly understood between the Parties to the contract that any claim of whatever nature shall be settled between the Associate Buyer and the Supplier directly themselves without recourse to Seller as a party to the dispute.
 
  



                 </p></li>
              
                
                
                 
             </ol>
             </li> 
              <li>
              <p  className={`${styles.oderListParent_Head}`}> Confidentiality</p>
              
             <ol type="A" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">This contract, its provisions and existence, as well as any commercial data including price or technical data and any information provided in accordance herewith to the other party shall be considered as confidential. Such information shall not be disclosed to any third party unless required by any applicable law or authorized in writing by the other party.
               </p></li>
               <li><p className="text_sales">All such information shall be used by the other party only for the purpose of performance of this contract.
               </p></li>
               <li><p className="text_sales">The restrictions here-in-above shall not apply to any information generally available to the public or received in good faith from a third party without restriction. The parties hereto agree to keep as confidential all documentation furnished or received by either party at any time in connection with this contract.
               </p></li>
                <li><p className="text_sales">This provision, as far as practicable, shall apply to all the concerned officials of either party.

               </p></li>
                <li><p className="text_sales">This clause shall survive upon termination or conclusion of this Agreement.</p></li>
              
                
                
                 
             </ol>
             </li>
             <li>
              <p  className={`${styles.oderListParent_Head}`}>Amendments</p>
              <p className="text_sales">This Agreement shall not be amended, altered or modified, or any provision herein shall not be waived, except by an instrument in writing expressly referring to this Agreement and signed by the duly authorized representatives of both the Parties, and no verbal agreement or conduct of any nature related to the subject matter hereof or to the relationship between the Parties will be considered valid enforceable.</p>
            </li>
            <li>
              <p  className={`${styles.oderListParent_Head}`}>Severability</p>
              <p className="text_sales">If any part or provision of this Agreement not being a fundamental nature is held illegal or unenforceable, the validity of enforceability of the remainder of the Agreement shall not be affected if such part, term of provision is severable from the rest of the Agreement without altering the essence of this Agreement. If such part, term or provision is not so severable, then the whole of this Agreement shall stand terminated, unless the Parties thereupon negotiate in good faith in order to agree to the terms of a mutually satisfactory provision, achieving as nearly as possible the same commercial effect, to be substituted for the provision so found to be invalid, illegal or unenforceable.</p>
            </li>
             <li>
              <p  className={`${styles.oderListParent_Head}`}>Breach of the Contract</p>
              <p className="text_sales">In the event the Associate Buyer commits any breach of the terms of the agreement, then the  Seller may, by giving thirty (30) days prior written notice to the Associate Buyer, terminate this Agreement without any liability and charge to the Seller whatsoever. However, Associate Buyer shall remain liable to the Seller for making payment of the Goods already shipped by the Supplier at the instance of the Associate Buyer. </p>
              <p className="text_sales">Provided further, the Parties hereto agree that the Seller may immediately terminate this Agreement without providing any notice to the Associate Buyer upon the Associate Buyer, or the Associate Buyer's shareholders commencing a voluntary proceeding under any applicable bankruptcy, insolvency, winding up or other similar law now or hereafter in effect (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the entry of an order for relief in an involuntary proceeding under any such law (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the appointment or taking possession by a resolution professional, Receiver, liquidator, assignee (or similar official) for any or a substantial part of its property; or the Associate Buyer has involuntarily become the subject of proceedings (including filing of an application/ petition for corporate insolvency resolution) under the Insolvency & Bankruptcy Code, 2016 or an order has been made by the appropriate authority for winding up of the Associate Buyer.</p>
            </li>
              <li>
              <p  className={`${styles.oderListParent_Head}`}> Special Conditions</p>
              
             <ol type="i" className={`${styles.oderListChild}`}>
               <li><p className="text_sales">It is expressly and unconditionally agreed and acknowledged by the and Associate Buyer that the title in the goods/ material shall pass on to the Associate Buyer only in respect of such specific quantity thereof as released from the storage facility by the CHA/Stevedoring under the Authorized Release Orders after receipt by the Seller of the price and other payables in respect thereof from the Associate Buyer and actual delivery of the goods having been made to the Associate Buyer. The Seller shall continue to be the owner, holding absolute title in the goods/material not so released and delivered to the Associate Buyer in any contingency including of Associate Buyer even becoming insolvent but not limiting, and shall be entitled to deal with the goods/material as it may deem fit including disposing them off at the risk, costs  and consequences of the Associate Buyer. For the avoidance of doubt, the parties agree and acknowledge that the Goods shall not be in any manner whatsoever be construed to be in the constructive or actual possession of the Associate Buyer until receipt by the Seller of the entire contract value. The Associate Buyer specifically represents and agrees to not exercise any or all such possessory rights on the Goods until it makes payment of the entire contract value to the Selle
               </p></li>
               <li><p className="text_sales">It is specifically agreed that the Associate Buyer shall accept the goods on no complaint basis with regard to quality, quantity and/or any other claims. The Seller shall in no way be responsible or liable for the quality, quantity or any other claims with respect to the Goods supplied by the Supplier and/or any other claim associated or related to this transaction. All such claims shall be lodged, pursued and settled directly between the Associate Buyer and Supplier with no liability whatsoever upon Indo and/or the Seller.

               </p></li>
               <li><p className="text_sales">The Associate Buyer agrees and acknowledges that the sale of Goods under this Sales Contract is necessary to maintain the Associate Buyer as a going concern and to continue its business operations and consequently, it has requested the Seller to supply goods in accordance with the terms of this Sales Contract. Further, the Associate Buyer agrees and acknowledges that in the event that it is subject to a corporate insolvency resolution process (“CIRP”) under the provisions of the Insolvency and Bankruptcy Code, 2016 (“IBC”) or any other analogous creditors process under applicable law, it (either through itself or through any resolution professional/interim resolution professional appointed to manage its operations pursuant to the IBC) shall make payments of all outstanding amounts due to the Seller under this Sales Contract notwithstanding any general moratorium in relation to the Associate Buyer. 

               </p></li>
                <li><p className="text_sales">Notwithstanding anything contained herein to the contrary, all risks, consequences arising out of the actual transaction(s) taking place between Supplier and Indo, Indo and Seller, Seller and Associate Buyer under the contract and/or any modified/amended agreement will be to the account of the Associate Buyer only. Indo/Seller shall in no way be responsible or liable for the same.


               </p></li>
                <li><p className="text_sales">The Associate Buyer undertakes to ensure that all payments to be made to Seller in furtherance of this Agreement or any similar agreements shall be treated as direct cost of production (budgeted operating expenses) and as a ‘insolvency resolution process cost’ under the Insolvency and Bankruptcy Code, 2016 at all times during the entire term of any such agreements (including this Agreement). If Associate Buyer has or avails any debt or enters into any arrangement with any of its lenders for the plant or otherwise, including any restructuring arrangements of existing debt, it shall ensure that all payments to be made to Seller shall be treated as ‘direct cost of production’ and ‘insolvency resolution process costs’ and shall have priority over any financial or operational debt service payments of Associate Buyer. Further, the Associate Buyer shall: (A) not create any lien, or any other encumbrance or security over the goods in favour of its lenders or any other person, without the prior written approval of the Seller and (B) ensure that, if Seller has consented to creation of lien, or any other encumbrance or security as aforesaid, Seller’s written consent is taken prior to enforcement of such lien, or any other encumbrance or security. The Associate Buyer hereby agrees and affirms that the aforesaid approval(s) may be granted at the Seller’s sole and absolute discretion.</p></li>
                <li><p className="text_sales">The Associate Buyer undertakes to ensure that all payments to be made to Seller in furtherance of this Agreement or any similar agreements shall be treated as direct cost of production (budgeted operating expenses) and as a ‘insolvency resolution process cost’ under the Insolvency and Bankruptcy Code, 2016 at all times during the entire term of any such agreements (including this Agreement). If Associate Buyer has or avails any debt or enters into any arrangement with any of its lenders for the plant or otherwise, including any restructuring arrangements of existing debt, it shall ensure that all payments to be made to Seller shall be treated as ‘direct cost of production’ and ‘insolvency resolution process costs’ and shall have priority over any financial or operational debt service payments of Associate Buyer. Further, the Associate Buyer shall: (A) not create any lien, or any other encumbrance or security over the goods in favour of its lenders or any other person, without the prior written approval of the Seller and (B) ensure that, if Seller has consented to creation of lien, or any other encumbrance or security as aforesaid, Seller’s written consent is taken prior to enforcement of such lien, or any other encumbrance or security. The Associate Buyer hereby agrees and affirms that the aforesaid approval(s) may be granted at the Seller’s sole and absolute discretion.</p></li>
                  <li><p className="text_sales">The Associate Buyer shall not assign or transfer this Agreement or all or any part of its rights or obligations hereunder to any person, firm or corporation without the prior written consent of Seller. Notwithstanding anything to the contrary contained in this Agreement, for avoidance of any doubts, if Associate Buyer decides to enter into any binding legal agreement with any person which will have the effect of a change in Control of or sale of any material assets of Associate Buyer (such agreement, “Change of Control Agreement”), then Associate Buyer shall immediately notify Seller prior to execution of any Change of Control Agreement (“Change of Control Notice”).  Within sixty (60) days from the receipt of the Change of Control Notice (“Option Period”), Seller shall have the right to cause Associate Buyer to purchase and pay for all of the Goods imported by Seller for Associate Buyer or terminate any agreement (including, without limitation, this Agreement) for sale of the Goods (“Change of Control Option”) and Associate Buyer agrees that during such Option Period, the Associate Buyer shall not execute any such Change of Control Agreement. The Associate Buyer further acknowledges and unconditionally agrees to pay for all Goods imported by the Seller for the Associate Buyer within 7 days of exercise by the Seller of the Change of Control Option. “Control” for the purposes of this Clause shall mean (including, with correlative meanings, the terms “controlled by” and “under common control with”), as applied to any person, the possession, direct or indirect, of the power to direct or cause the direction of the management and policies of such person, whether through the ownership of voting securities or other ownership interest, the power to constitute majority of the board of directors (or similar governing body) of such person, by contract or otherwise;



               </p></li>
                
                
                 
             </ol>
             </li>
              <li>
              <p  className={`${styles.oderListParent_Head}`}> Force Majeur</p>
              <p className="text_sales">That Seller shall not be liable for any damages to loss on account of Force Majeure, as defined herein below. However, the Associate Buyer shall at all times remain liable for payment of the Goods to Seller.
             </p>
              <p className="text_sales">“Force Majeure Events” means any event, act or performance which is beyond the control of a party, which includes but not limited to, war, invasion, act of foreign enemies, terrorist activities, nationalization, force majeure declared by Shipper/Supplier, government acquisition or sanctions, blockage, embargo, strike, lockout, interruption or failure of power source, act of God (including fire, flood, earthquake, storm, hurricane or other natural disaster), pandemic, epidemic, civil disobedience, riots, flood, etc.</p>
            </li>
             <li>
              <p  className={`${styles.oderListParent_Head}`}>  Waiver</p>
              <p className="text_sales">That Seller shall not be liable for any damages to loss on account of Force Majeure, as defined herein below. However, the Associate Buyer shall at all times remain liable for payment of the Goods to Seller.
             </p>
              <p className="text_sales">Failure of either Party at any time to require performance of any provision of this Agreement shall not affect the right to require full performance thereof, at any time thereafter, and the waiver by any party of a breach of any provision shall not be taken to be a waiver of any subsequent breach thereof, or as nullifying the effectiveness of such provision.
            </p>
            </li>
           
           
           
           
           
            </ol>
            <Row>
              <Col md={6}><span>For & on behalf of Associate Buyer  </span></Col>
              <Col md={6}>For & on behalf <input className={`${styles.para}`} placeholder="Indo German International Private Limited"></input> </Col>
            </Row>
              <p className="text_sales" >Name: <input className={`${styles.para}`} placeholder="Name"></input></p>
              <p className="text_sales" >  Designation:<input className={`${styles.para}`} placeholder="Name"></input></p>
              <p className="text_sales" >  Company Stamp:<input className={`${styles.para}`} placeholder="Name"></input></p>
               <p className="text_sales" >  WITNESSES:  </p>
              <ol type="1">
                <li>  <p className="text_sales" >Name Designation: <input className={`${styles.para}`} placeholder="Name"></input></p></li>
                 <li>  <p className="text_sales" >Name Designation: <input className={`${styles.para}`} placeholder="Name"></input></p></li>
              </ol>
              <div>
                 <p className="text_sales" > <strong>Schedule 2A</strong></p>
             <p className="text_sales" > <strong>Undertaking by Associate Buyer for Price Justification</strong></p>
             <p className="text_sales" >To: <input className={`${styles.para}`} placeholder="to"></input></p>
             <p className={`text_sales ${styles.center}`}>UNDERTAKING</p>
             <p className="text_sales" > 1. We, being the Associate Buyer have to solemnly affirm and undertake as under:</p>
             <ol type="a">
                 <li>  <p className="text_sales" >That we have negotiated with the Supplier for supply of the Goods through Indo/ Seller.</p></li>
                 <li>  <p className="text_sales" >That we have requested Indo German International Private Limited (“IGI”) to import on our behalf the Goods and sell the same to us on stock and sale basis as per Associateship Agreement. We confirm and undertake that all the terms & conditions of the Sales Contract entered into between Indo and the Supplier (“hereinafter referred to as “Sales Contract”) are acceptable and binding on us.</p></li>
                 <li>
                  <ol type="1">
                    <li> <p className="text_sales" >That the price indicated in the Sales Contract is neither under-invoiced nor over-invoiced and is as per prevailing international rates for the above-mentioned item and is at par with prices at which item of similar quality being imported into India.</p></li>
                    <li> <p className="text_sales" >We undertake to ensure that the item to be shipped by the Supplier shall be strictly as per description & quality indicated in the Sales Contract notwithstanding the inspection report/ quality certificate/ Survey report furnished by the Supplier for the subject consignment. We shall be held solely liable and responsible for all consequences arising out of variation between item/quality/quantity contracted for & actually shipped and we undertake to indemnify and hold harmless Indo/Seller in this regard at all times. </p></li>
                    <li> <p className="text_sales" >We undertake to accept the goods from Seller/Indo on ‘no complaint basis’ with regard to quality, quantity and/or any other claims including shortage. Seller/Indo shall in no way be responsible or liable for the quality, quantity or any other claim pertaining to the Goods being supplied by the Supplier and/or any other claim relating to this transaction. It is our sole responsibility in settling the quality, quantity or other claims pertaining to this transaction directly with the Supplier and/or Custom House Agent (CHA) appointed by Seller, with no liability whatsoever upon Seller/Indo.</p></li>
                  </ol>
                 </li>
              </ol>
              <p className={`text_sales ${styles.right}`}>For & on behalf of the Associate Buyer  
</p>
               <Row>
              <Col md={6}> 
              <p className="text_sales" >For: <input className={`${styles.para}`} placeholder="Name"></input></p> 
              <p className="text_sales" >Date: <input className={`${styles.para}`} placeholder="Name"></input></p> 
              </Col>
              <Col md={6}>
              <p className="text_sales" >Name : <input className={`${styles.para}`} placeholder="Name"></input></p> 
              <p className="text_sales" >Designation: <input className={`${styles.para}`} placeholder="Name"></input></p> 
              </Col>
            </Row>
              </div>
              <div>
                 <p className="text_sales" > <strong>Schedule 2B</strong></p>
             <p className="text_sales" > <strong>Undertaking for Post Dated Cheques issued by Associate Buyer
</strong></p>
             <p className="text_sales" > <input className={`${styles.para}`} placeholder="to"></input></p>
             <p className={`text_sales ${styles.center}`}>UNDERTAKING</p>
             
             <ol type="1">
                 <li>  <p className="text_sales" >That we, being the Associate Buyer have entered into the Associateship Agreement with Seller </p></li>
                 <li>  <p className="text_sales" >That as requested by us, the Supplier shall sell the Goods to Indo and Indo will establish Letter of Credit in favour of the Supplier and make payment to the Supplier for the Goods. Indo shall sell the Goods to Seller and Seller shall sell the same to the Associate Buyer in terms of the said Associateship Agreement. The Sales Contract and the Associateship Agreement shall jointly be referred to as “Contracts”</p></li>
                  <li>  <p className="text_sales" >That the present Undertaking is being executed in pursuance of the Contracts being entered into by Indo and Seller on our request. It is pertinent to mention that the terms of the Associateship Agreement be read as a part of this Undertaking</p></li>
                   <li>  <p className="text_sales" >We enclose herewith the following Post-Dated Cheque(s) as per details in Schedule 2B-1. In pursuance of the above, we authorize Seller to present the Post-Dated Cheques on due date and present the same with its Banker, without any notice to us</p></li>
                    <li>  <p className="text_sales" >That, the undersigned being the Managing Director of the Associate Buyer duly authorised by the resolution of the Board of Directors (copy enclosed herewith), do hereby undertake as under

</p></li>
                 <li>
                  <ul type="1">
                    <li> <p className="text_sales" >To pay the balance/outstanding amount in respect of the above-mentioned transaction on the first demand of Seller without recourse, demur and protest.</p></li>
                    <li> <p className="text_sales" >To honour the cheque(s) on their presentation on due dates.</p></li>
                    <li> <p className="text_sales" >That we will not intimate the bankers to stop the payment of the aforesaid cheques delivered to Seller under any circumstances.</p></li>
                     <li> <p className="text_sales" >That we will not intimate the bankers to stop the payment of the aforesaid cheques delivered to Seller under any circumstances.</p></li>
                      <li> <p className="text_sales" >That, we have duly complied with the Positive Payment Service as per RBI circular dated 25th September 2020 by intimating our bank about the details of the Post-Dated Cheques issued to Seller.
                    </p></li>
                    
                     <li> <p className="text_sales" >That, we shall not to close the account from which the cheques have been issued without the prior permission of Seller in writing.

                    </p></li>
                     <li> <p className="text_sales" >That, we, shall not give Seller any notice requesting them not to present the cheques delivered to them.</p></li>
                      <li> <p className="text_sales" >That, we, further undertake not to bring into effect any change in the Authorized Signatories without taking prior written consent of Seller or to do anything which makes the above cheques/claim of Seller redundant.</p></li> 
                  </ul>
                 </li>
                 <li> <p className="text_sales" >We further confirm that we are very much aware of the liability that has accrued on us by way of the Associateship Agreement by virtue of which Seller has agreed to import the Goods. 

</p></li>
                 <li> <p className="text_sales" >TWe further confirm that if we fail to pay the balance amount of liability due to Seller, in respect of aforesaid Agreement, Seller will have unfettered/unconditional right to encash the said cheque(s), without any notice to us
</p></li>
                 <li> <p className="text_sales" >The calculation of the Post-Dated Cheques is based on the estimated contract value, However Actual Stevedoring/CHA, Port Charges, Plot Rental, Wharfage etc. to be borne and paid by us directly</p></li>
                 <li> <p className="text_sales" >In any event of our failure to perform the Associateship Agreement in accordance with its terms including default in honouring the cheques on presentation, Seller shall have the right to file appropriate civil and/or criminal proceedings against us in the Courts of the Jurisdiction as per your sole discretion. We unconditionally and irrevocably waive our right to raise objection to such proceedings on any grounds whatsoever.
</p></li>
              </ol>
              <p className={`text_sales ${styles.right}`}> FOR AND ON BEHALF OF
	Associate Buyer 
 
</p>
               <Row>
              <Col md={6}> 
             
              <p className="text_sales" >Date: <input className={`${styles.para}`} placeholder="Name"></input></p> 
              </Col>
              <Col md={6}>
              <p className="text_sales" >Name : <input className={`${styles.para}`} placeholder="Name"></input></p> 
              <p className="text_sales" >MANAGING DIRECTOR</p> 
              </Col>
            </Row>
              </div>
              <div>
                    <p className="text_sales" > <strong>Schedule 2B-I</strong></p>
                    <p className="text_sales" > <strong>Details of the Post-dated cheques-</strong></p>
                    <table className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                 >
                      <tr>
                        <th>S No</th>
                        <th>Bank Name</th>
                        <th>Cheque No</th>
                        <th>Cheque Date</th>
                        <th>Amount</th>
                      </tr>
                      <tbody>
                        <tr>
                          <td></td>
                           <td></td>
                            <td></td>
                             <td></td>
                              <td></td>
                        </tr>
                          <tr>
                          <td></td>
                           <td></td>
                            <td></td>
                             <td></td>
                              <td></td>
                        </tr>
                          <tr>
                          <td></td>
                           <td></td>
                            <td></td>
                             <td></td>
                              <td></td>
                        </tr>
                          <tr>
                          <td></td>
                           <td></td>
                            <td></td>
                             <td></td>
                              <td></td>
                        </tr>
                          <tr>
                          <td></td>
                           <td></td>
                            <td></td>
                             <td></td>
                              <td></td>
                        </tr>
                      </tbody>
                    </table>
              </div>
               <div>
              <p className="text_sales" > <strong>Schedule 3</strong></p>
             <p className="text_sales" > <strong>Pricing formula</strong></p>
              
              
             <p className="text_sales" > Unit Price: <input className={`${styles.para}`} placeholder="to"></input></p>
              <p className="text_sales" > Quantity:
                          <input className={`${styles.para}`} placeholder="to"></input></p>
                           <p className="text_sales" > <strong>Tentative Exchange Rate for Calculation:
                        </strong></p>
                            <p className="text_sales" > <strong>Currency exchange:</strong></p>
            
              <p className="text_sales" > Provisional basic Price in INR for invoicing by Seller on Associate Buyer will be calculated as under: </p>
                <p className="text_sales" > Import Price Per Ton, Insurance Premium Cost, Basic Customs Duty, Social Welfare Cess, IGST, GST Compensation cess, CIMS charges and any other duty, cost and/or charges, LC Opening Charges, Custodian Charges (CMA), Usance Interest, trade margin of the Seller, as applicable </p>
                  <p className="text_sales" >Cess, GST, TCS @ 1%, CIMS Charges etc., shall be borne by the Associate Buyer including payment to the Associate Buyer’s nominated Stevedoring Handling Agent, M/s ……………………………………………………………. purpose of allocating the plot to the Seller, arranging discharge, movement and delivery of cargo to the Associate Buyer strictly against the written delivery order issued by Seller. All responsibility risk, damage, shortage, Quality Issues if any in this regard is the sole responsibility of the Associate Buyer. The expenses for such services shall also be borne by the Associate Buyer and will be included in the sale price of Goods/Services </p>
                  <p className="text_sales" >The INR: USD exchange rate price will be taken as above for calculation purpose. The final invoicing will be done in INR and the INR price shall be calculated on basis exchange rate at which the payment of Import is made or forward is booked. The exchange rate difference loss or gain both will be to the Associate Buyer account. </p>
                   <p className="text_sales" >The final price so worked out shall be reflected in the last invoice carrying out all adjustments regarding exchange rate variation / expenses & charges.</p>
             
          
              </div>
               <div>
              <p className="text_sales" > <strong>Schedule 4</strong></p>
             <p className="text_sales" > <strong>Advance Payment by Associate Buyer </strong></p>
              
            
            
              <p className="text_sales" > he Associate Buyer shall make payment of ____% of the total Contract Value along with trade margin and Usance Interest as Advance, prior to opening of LC by Indo on the Supplier. 
 </p>
                <p className="text_sales" >Indo will open the LC in favor of Supplier within 5 working days of receipt of the Advance as stated herein.
 </p>
                  <p className="text_sales" >The margin money shall be adjusted at the time of issuance of the last release order.
 </p>
                  <p className="text_sales" >The INR: USD exchange rate price will be taken as above for calculation purpose. The final invoicing will be done in INR and the INR price shall be calculated on basis exchange rate at which the payment of Import is made or forward is booked. The exchange rate difference loss or gain both will be to the Associate Buyer account.It is expressly clarified that the margin money @..................% shall be maintained on Mark-to-Market (M2M) basis on the prevailing exchange rate of INR: USD and market price of the commodity.  In the event of shortfall in the margin money, Seller have the right & the Associate Buyer has the obligation to pay the shortfall amount forthwith in any case not later than 5 days from the date of such demands.The final price so worked out shall be reflected in the last invoice carrying out all adjustments regarding exchange rate variation / expenses & charges.</p>
             
          
              </div>



          </div>
  )
}
