import React from 'react'
import styles from './index.module.scss'
import {Row, Col} from "react-bootstrap"

function Index() {
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
                
          </div>
           {sales()}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} >
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div>

      </div>
    </div>
  )
}

export default Index
const sales=()=>{
  return(
     <div className="card-body">
      <p>QUADRIPARTITE AGREEMENT BETWEEN <input type="text" className={styles.input_field} placeholder='INDO GERMAN INTERNATIONAL PRIVATE LIMITED (IGI), M/S'/> …………………………………….. (ASSOCIATE), <input className={styles.input_field} type="text" placeholder='M/S. CHA'/>………………………………. (CHA/STEVEDORES) AND <input type="text" className={styles.input_field} placeholder= "DR. AMIN CONTROLLERS PVT. LTD. (Dr. Amin)" /> FOR STOCK MONITORING, CONTROL AND CUSTODY OF IMPORTED <input type="text" className={styles.input_field} placeholder=" THERMAL COAL OF"/> ………………………… <input type="text" className={styles.input_field} placeholder ="ORIGIN" />.</p>
      <p>THIS QUADRIPARTITE AGREEMENT is made on the ……………………………, <input type="text" className={styles.input_field} placeholder= "2021"/>. BY AND BETWEEN</p>
      <p> <input type="text" className={styles.input_field} placeholder= "M/s INDO GERMAN INTERNATIONAL PRIVATE LIMITED" />, a company incorporated under the Companies Act, 1956, having its <input type="text" className={styles.input_field} placeholder= "registered office"/> at 7A, Sagar Apartments, 6, Tilak Marg, New Delhi-110001 and having its branch office at A-54, Ganga Nagar Society, Near Palanpur Patia, Rander Road,, Surat, Surat, Gujarat, 395009 GSTIN No. 24AAACI3028D1Z8 duly signed by Ms. Bhawana Jain, Vice President  (hereinafter called “IGI"  which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the First Part,
      </p>
      <p>AND</p>
      <p>M/s …………………………………………………., a company incorporated under the Indian Companies Act, 2013 having its/their Registered Office at …………………………………… and Branch Office at …………………………………………………………….. GSTIN No. ………………………………….. (India) represented through Mr. …………………. who is the Managing Director of the company duly authorized (hereinafter called “Associate Buyer” or ‘’ ………………..”) which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Second Part.</p>
      <p>AND</p>
      <p>M/s CHA…………………………….., having its office at …………………………………, having its Branch Office at ………………………………………………………………….. represented by Mr. ------------------------------------------------------------------(hereinafter referred to as “CHA/Stevedore” which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Third Part.</p>
      <p>AND</p>
     <p>M/s Dr. Amin Controllers Pvt Ltd, having its office at 6th Floor, Embassy Chambers, Plot No. 5, 3rd Road, Khar (West), Mumbai-400 052, India (hereinafter referred to as “Dr. Amin / CMA Agent” which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Forth  Part.
    </p>
    <p>WHEREAS IGI has agreed to import …………………….. MT of Thermal Coal of Indonesian Origin per vessel “M.V. …………………………” (hereinafter called “Goods”) from and M/s ……………………………………………………. sell to …………… on stock and sale basis as per Associateship Agreement No. ……………………….  dated ……………….., 2021.</p>     
    <p>WHEREAS IGI has appointed M/s …………………………. as its Customs House Agent (CHA/Stevedore) for the vessel M.V. …………………. at ………….. Port.</p>
     <p>WHEREAS ………………………………………….…………., LC opening Bank have a first ranking security right over the Goods and it has appointed Dr. Amin as the Collateral Manager in terms of the Collateral Management Agreement executed by Financing Bank. </p>
     <p  className="text_sales">IT IS NOW HEREBY AGREED BY AND BETWEEN THE PARTIES AS UNDER:-
                <br/> 
                <br/>
                1. Bedi Port has allotted Plot No…………………..& Plot No……………………..to Indo German International Pvt. Ltd. to store Goods imported by IGI per vessel M.V. ………………… The Goods shall be kept under the control and custody of CHA on behalf of IGI. All dispatches from the plot shall be based on Delivery Orders issued by IGI. 
 
                 <br/>
                 <br/>
                2. FCHA/Stevedore’s scope of work includes arranging plot allotment in the name of IGI, from Bedi Port authorities to store IGI’s cargo, discharge of cargo from the vessel M.V. …………………………, loading of wharf, intra carting at Port, deployment of labors and equipments, transportation from wharf to IGI allotted plot, ensure that the plot where goods are being stored is suitable for the storage of the goods, segregated stacking cargo at plot grade wise, placement of wagon indents, wagon cleaning, wooden plugging, loading into wagons/trucks, leveling of cargo, lime marking on stacks and wagons, placing Railway Indents, Loading on wagons/trucks, Arranging round the clock security cover at the storage area, placing railway indents, liaison with Bedi Port, railways, obtaining RRs and dispatch to ......................’s plant, obtaining gate passes, yard management, maintenance of proper records and registers for incoming and outgoing of material, water sprinkling as per PCB norms and other services as may be required by IGI.

                 <br/>
                 <br/>
                3. Safekeeping and Security of the Goods-Proper safekeeping and security of Goods shall be the joint and several responsibility of “......................” and CHA/Stevedore. …………………….. and CHA/Stevedore shall Plot …………………………………..…………., provide round the clock security guards at the Storage yard bearing where Goods shall be stored. IGI shall in no way be responsible or liable for any loss or damage to the Goods for any reason whatsoever including shortage or theft.

                 <br/>
                 <br/>
                4. Bill of Entry to be filed in the name IGI. Payment of customs duty, IGST, energy cess, Wharfage , CIMS and all other statutory charges shall be paid by ...................... to IGI in advance at the time of Custom Clearance. ...................... shall pay Port Charges directly to port or through the CHA/Stevedore who will take care of the payments to Port and raise bills on IGI for this. A copy of the same has to be furnished to IGI.  Any penalty/demurrage on account of delayed payment shall be to the account of .......................
                 
                 <br/>
                 <br/>
                5. Port wharfage, pollution charges, plot rental, wagon haulage and terminal charges, Port Royalty (if applicable) are to be paid by ...................... in advance to IGI as per Bedi Port tariff. HMC crane charges at inner harbor (Bedi Port) and any pre berthing delays/detentions/demurrages will be t the account of  ...................... on actual basis.  
 
                 <br/>
                 <br/>
                6. CHA/Stevedore will raise invoice on ...................... and payments shall be made by ...................... to CHA/Stevedore based on the agreed rate terms & Conditions.  
                
                 <br/>
                 <br/>
                7. CHA/Stevedore will apply for EDRM permission and place indent online. ...................... will pay the railway freight and related charges directly.

                <br/>
                <br/>
                8. Scanned copy of RR shall be furnished by CHA/Stevedore to IGI as well as ...................... as soon as it is issued after loading. The original RR shall be sent by CHA/Stevedore to ...................... for taking delivery of the rake. The final reconciliation shall be done based on the BL quantity.

                <br/>
                <br/>
                9. ...................... will arrange comprehensive storage insurance against all risks for 110% of the value of goods. The insurance policy will indicate IGI or its nominated Bank (as per IGI’s discretion), as sole beneficiary.  ...................... shall inform CHA/Stevedore the details of the goods for which IGI/IGI’s nominated Bank shall be the beneficiary for the entire insured value of such pledged goods as per the B/L, quantity kept in the custody of CHA/Stevedore. In case of any claim on insurance company the same shall be claimed and pursued till realization by ...................... at their cost and .................. shall indemnify CHA/Stevedore and IGI against all risks.
                
                <br/>
                <br/>
                10. IGI and Dr. Amin Controllers Pvt. Ltd. (Collateral manager appointed by LC opening Bank) shall have free and unfettered access to the plot where the goods are stored without any prior notice to the plot keeper during all reasonable hours including the right of ingress and egress to and from the plot by IGI’s and/or Dr. Amin’s officials, agents, other nominated buyers, if any, of IGI and/or Dr. Amin, its vehicles, any Government Agency, for storing/de-storing/removing the material in or from the plot without any hindrance or obstruction.  
                
                <br/>
                <br/>
                11. The role of Dr. Amin shall be to supervise the storage, ingress and exit of material at the storage area in accordance with the Collateral Management Agreement entered into by Dr. Amin. The CHA/Stevedore and ...................... shall provide necessary support, help and assistance to Dr. Amin as may be required by them at all times. Dr. Amin’s Officials/ representatives/agents shall peacefully enjoy unrestricted and unfettered access to the Storage Area during the term or duration of this Agreement, without disturbance or interruption or obstruction from ...................... or CHA/Stevedore or any person claiming under them.  
                
                <br/>
                <br/>
                12. CHA/Stevedore shall at all times follow and be bound by the instructions solely of IGI with regard to delivery of the Goods. CHA/Stevedore confirms and undertakes that it shall not release the Goods without the written Release Order of IGI. CHA/Stevedore shall have no objection whatsoever, if Indo German instructs it to deliver the Goods to any third party so nominated by them. The instructions of the Indo German shall be followed forthwith, without any objection, hindrance or delay whatsoever. 

                <br/>
                <br/>
                13. CHA/Stevedore shall maintain all records as necessary, statutorily or otherwise for the receipt, storage and release of goods from the warehouse and furnish a daily report to IGI & ....................... Under no circumstance releases will be made by CHA/Stevedore or be taken by ...................... without obtaining proper Release Order in writing from IGI. CHA/Stevedore and ...................... jointly and severally agree to indemnify and hold harmless at all times IGI, its officers, agents, employees for any losses, damages, claims, costs and expenses incurred by IGI due to unauthorized, improper release of the Goods, shortage and/or for breach of the terms of this Agreement.

                <br/>
                <br/>
                14. This Agreement is irrevocable and non-assignable by ...................... and CHA/Stevedore until the entire Goods stored at the storage facility have been delivered to ...................... under the Authorized Release Orders.
                    ......... and payments shall be made by ...................... to CHA/Stevedore based on the agreed rate terms & Conditions.  
                <br/>
                <br/>
                
                
            </p>
          
          </div>
  )
}