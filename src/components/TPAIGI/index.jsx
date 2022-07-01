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
        <h3 className={`text-center`}><span>TRIPARTITE AGREEMENT</span></h3>
        <p className={`text-center`}>AMONG </p>
        <p className={`text-center`}><GrowInput placeholder={`M/S INDO GERMAN INTERNATIONAL PVT. LTD.`}/> </p>
        <p className={`text-center`}><GrowInput placeholder={`DR. AMIN CONTROLLERS PVT. LTD.`}/> </p>
        <p className={`text-center`}><GrowInput placeholder={`INDO INTERNATIONAL TRADING FZCO`}/> </p>
        <p className='text-center'>FOR RECEIPT, STORAGE, CUSTODY AND ISSUE OF PLEDGED GOODS FOR VESSEL ELSABETH C</p>
        <p>This Tripartite Agreement is made on this <GrowInput placeholder={`2nd day of Sept`}/> ., 2021 between </p>
        <p> <GrowInput placeholder={`INDO GERMAN INTERNATIONAL PVT. LTD.`}/>, having its office at <GrowInput placeholder={`8-1-7/1, 302, Krishnanjali Tower, Balaji Nagar, Siripuram, Visakhapatnam, Andhra Pradesh – 530003, India.`}/>  (hereinafter referred as the “IGIL”) </p>
         <p>and</p>
         <p> <GrowInput placeholder={`DR. AMIN CONTROLLERS PVT. LTD.`}/>, having its office at <GrowInput placeholder={`8-1-7/1, 302, Krishnanjali Tower, Balaji Nagar, Siripuram, Visakhapatnam, Andhra Pradesh – 530003, India.`}/>  (hereinafter referred as the “IGIL”) </p> 
         <p>and</p>
        <p> <GrowInput placeholder={`INDO INTERNATIONAL TRADING FZCO, JAFZA View Lob. 180504, Jebel Ali, Dubai, UAE .`}/> (hereinafter referred as the “IIT”) </p> 
        <p><GrowInput type="text" placeholder='MULIA GREEN RESOURCES PTE LTD'/>, having its registered office at <GrowInput type='text' placeholder='220 Orchard Road # 05-01, MidPoint Orchard, Singapore 238852'/> through its authorized signatory included its successors, administrators etc. (hereinafter referred to as the 	&quot; SELLER 	&quot;); which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns.</p>
        <p>WHEREAS:-</p>
        <p> <GrowInput placeholder={`IGIL`}/> is engaged in the business of trading at a leased plot in the Customs Notified Area of <GrowInput placeholder={`Visakhapatnam Port India`}/>  (the “Storage Facility”) for storage and of raw materials including coal, coke, iron ore etc. </p>
        <p> <GrowInput placeholder={`IGIL`}/> has purchased <GrowInput placeholder={`Manganese Ore (GL-01)`}/>  in Bulk (“Goods”) from <GrowInput placeholder={`IIT`}/>  which itself has been financed for the acquisition of such Goods by <GrowInput placeholder={`ING BANK N.V., Amsterdam, Lancy/Geneva Branch`}/>  (“ING BANK N.V.” or the “Financing Bank” </p>
        <p>  <GrowInput placeholder={`ING BANK N.V.`}/> has a first ranking security right over the Goods in the form of a pledge. Furthermore,<GrowInput placeholder={`ING BANK N.V.`}/>  has appointed <GrowInput placeholder={`Dr. Amin.`}/> n as the Collateral Manager pursuant to the terms of the tripartite collateral management agreement executed between <GrowInput placeholder={`IIT, Dr. Amin`}/> , and <GrowInput placeholder={`ING BANK N.V.`}/> ,  dated <GrowInput placeholder={`11.01.2018`}/>   as amended from time to time (the “Collateral Management Agreement”).</p>
        <p> Pursuant to the Collateral Management Agreement, the Goods shall remain under the exclusive custody, control and supervision of <GrowInput placeholder={`Dr. Amin`}/>  and under the order of  <GrowInput placeholder={`ING BANK N.V.`}/>. </p>
        <p>  <GrowInput placeholder={`IGIL`}/> hereby agrees that it shall grant unrestricted access to a clearly demarcated part of the Storage Facility (as per stocking requirement) in ready-to-operate-condition exclusively for the use of <GrowInput placeholder={`Dr. Amin`}/> where the pledged Goods shall only be stored (the “Designated Storage Area”). </p>
        <p>IT IS HEREBY AGREED AS FOLLOWS:</p>
        <p>Article 1 – STORAGE FACILITY</p>
        <p><GrowInput placeholder={`IGIL`}/>hereby grants unrestricted access of the Designated Storage Area ( <GrowInput placeholder={`Visakhapatnam Port, India`}/>) to  <GrowInput placeholder={`Dr. Amin`}/>, which is in a ready to store condition. The Plan duly marking the Designated Storage Area is attached as the Annexure No. 1 to this Agreement. The Goods deposited in the Designated Storage Area shall be accessed exclusively by <GrowInput placeholder={`Dr. Amin`}/>  during the term of this Agreement. </p>
        <p>Article- 2-RESPONSIBILITY OF <GrowInput placeholder={`IGIL`} /> </p>
        <p><GrowInput placeholder={`IGIL`}/> shall: </p>
        <p><span className={`ml-2 mr-3`}>2.1</span>  prior to granting access the Designated Storage Area, be responsible for clearly   demarcating the Designated Storage Area with chalk and rope from all sides for clear demarcation and identification for the exclusive and sole access of <GrowInput placeholder={`Dr. Amin`}/> for storing the Goods or any other materials as agreed in writing.</p>
        <p><span className={`ml-2 mr-3`}>2.2</span> be responsible for prominently displaying on the board at the entrance of the Designated Storage Area clearly stating that the Goods are under the custody of <GrowInput placeholder={`Dr. Amin`}/> and held on behalf of <GrowInput placeholder={`Indo International Trading FZCO`}/> I.</p>
        <p><span className={`ml-2 mr-3`}>2.3</span> be responsible for putting a Placard on each lot of Goods stored at the Designated Storage Area clearly specifying the name of  <GrowInput placeholder={`Indo International Trading FZCO`}/> as the owner of the Goods and <GrowInput placeholder={`Dr. Amin`}/> as the Collateral Manager; </p>
        <p><span className={`ml-2 mr-3`}>2.4</span> be responsible for providing an office equipped with required infrastructure such as electricity, toilet, telephone, access to fax, email etc. will have to be provided free of cost to <GrowInput placeholder={`Dr. Amin`}/> and the running cost of these facilities will also be borne by <GrowInput placeholder={`IGIL`}/>. <GrowInput placeholder={`Dr. Amin`}/>and their representatives shall have unfettered access to the warehouse/stockyard; </p>
        <p><span className={`ml-2 mr-3`}>2.5</span> be responsible for granting unrestricted and unfettered control and access to <GrowInput placeholder={`Dr. Amin`}/> over the Designated Storage Area;</p>
        <p><span className={`ml-2 mr-3`}>2.6</span>  obtain permission from Customs to open the Customs Notified Area where the Designated Storage area is located for conducting audit / stock verification / stock assessment as and when required by <GrowInput placeholder={`Dr. Amin Controllers Pvt`}/> . Ltd. or its agents by providing full cooperation and without creating any hindrance or obstacle;</p>
        <p><span className={`ml-2 mr-3`}>2.7</span>  ensure that the Designated Storage Area where pledged Goods being stored is suitable for the storage of the goods being stored therein; and</p>
        <p><span className={`ml-2 mr-3`}>2.8</span>  be responsible for payment of all taxes, duties and/or service charges presently assessed on the Designated Storage Area, as at the date of signature thereof.</p>
        <p> Article-3 RESPONSIBILITY OF <GrowInput placeholder={`DR. AMIN`} /></p>
        <p> <GrowInput placeholder={`DR. AMIN`} /> shall:</p>
         <p><span className={`ml-2 mr-3`}>3.1</span> ensure that the Designated Storage Area is manned with adequate surveyors round the clock at the Designated Storage Area. The fees for the surveyors shall be borne by <GrowInput placeholder={`Dr. Amin`}/> </p>
        <p><span className={`ml-2 mr-3`}>3.2</span>ensure that all safety regulations or industrial regulations will be adhered to at all point of time;</p>
        <p><span className={`ml-2 mr-3`}>3.3</span> ensure that at least 3 staff and / or representatives of <GrowInput placeholder={`Dr. Amin`}/> will attend the storage yard at all times during the Term of this Agreement; </p>
        <p><span className={`ml-2 mr-3`}>3.4</span> ensure that it fulfills all its obligations as laid down in the Collateral Management Agreement;</p>
        <p><span className={`ml-2 mr-3`}>3.5</span> be responsible for granting unrestricted and unfettered control and access to <GrowInput placeholder={`Dr. Amin`}/> over the Designated Storage Area;</p>
        <p><span className={`ml-2 mr-3`}>3.6</span> shall maintain proper records and registers for incoming and outgoing of material; and</p>
        <p><span className={`ml-2 mr-3`}>3.7</span>  not assign his/its rights under this Agreement</p>
        <p> Article 4 - TERM </p>
        <p>This Agreement is made this <GrowInput placeholder={`2nd Sept., 2021`} />  and is entered into by <GrowInput placeholder={`IIT`} /> , <GrowInput placeholder={`IGIL`} />  and <GrowInput placeholder={`Dr. Amin`} />  for a period during which the Collateral Management Agreement, pursuant to which <GrowInput placeholder={`Dr. Amin`}/> is providing the collateral management services (“CMA Services”), is remains valid and in force.</p>
        <p>Article 5 - UTILISATION OF THE DESIGNATED STORAGE AREA </p>
        <p><span className={`ml-2 mr-3`}>5.1</span> <GrowInput placeholder={`Dr. Amin`}/> will provide CMA Services at the Designated Storage Area in accordance with the Collateral Management Agreement. </p>
        <p><span className={`ml-2 mr-3`}>5.2</span><GrowInput placeholder={`IGIL`}/> undertakes that the pledged Goods shall be separately stocked at the Designated Storage Area under the custody and control of <GrowInput placeholder={`Dr. Amin`}/></p>
        <p> Article 6 - IRREVOCABLE AGREEMENT </p>
        <p>This Agreement is irrevocable until the entire stock stored therein has been delivered to IGIL under the written authorised release orders received by <GrowInput placeholder={`Dr. Amin`}/> from the Financing Bank (“Release Orders”).</p>
        <p>Article 7 - INSURANCE </p>
        <p><span className={`ml-2 mr-3`}>7.1</span> <GrowInput placeholder={`IGIL`}/> shall take out and maintain an all risks cargo insurance policy in respect of the Goods which terms are acceptable to the respective Financing Bank at its full discretion. The policy shall cover loss, strikes, riots, civil commotion, theft, misappropriation and damage of the Goods during storage in the Designated Storage Area and while under transport to and from the Designated Storage Area. The Insurance shall remain valid until the period that the entire Goods at the Designated Storage Area have been released by <GrowInput placeholder={`Dr. Amin`}/> to <GrowInput placeholder={`IGIL`}/>. The insurance policy shall name the Financing Bank as a beneficiary of insurances and loss payee. </p>
        <p><span className={`ml-2 mr-3`}>7.2</span>		Upon request IGIL will deliver to Dr. Amin and IIT a copy of the relevant insurance agreements, policies and related documents together with evidence that the premiums have been paid.</p>
        <p>Article 8 – PROPERTY TAXES </p>
        <p><GrowInput placeholder={`IGIL`}/> shall be responsible for the payment of all Land and Building taxes as may be applicable and that relate to the Designated Storage Area. </p>
        <p>Article 9 - ELECTRICITY AND WATER SUPPLY </p>
        <p><GrowInput placeholder={`IGIL`}/> During the period of this Agreement, <GrowInput placeholder={`IGIL`}/> shall be responsible for all charges with regard to water and electricity.  </p>
        <p>Article 10 - CHARGES/DUTIES/TAXES </p>
        <p><GrowInput placeholder={`IGIL`}/> shall bear all duties, taxes, cesses, levies etc. payable under present Indian State / Central Government/Semi Government Policies or payable in future under any newly implemented Government Policy/ies in respect of the said Designated Storage Area. </p>
        <p><GrowInput placeholder={`IGIL`}/> hereby agrees to make the payments referred above regularly without any delay and default and shall produce to <GrowInput placeholder={`Dr. Amin`}/>, after expiry of every 12 months, certified copies of the receipts for the payments made during such period.</p>
        <p>Article 11 - RENOVATIONS / ALTERATIONS</p>
        <p><GrowInput placeholder={`Dr. Amin`}/> will not make any renovations or alterations to the Designated Storage Area.</p>
        <p>Article 12 - DEPOSITS</p>
        <p><GrowInput placeholder={`IGIL`}/> will pay any deposits due in respect of water and electricity charges as may be required. <GrowInput placeholder={`IGIL`}/> hereby indemnifies <GrowInput placeholder={`Dr. Amin`}/> against any consequences that may arise as a result of failure to pay said deposits or any claims whatsoever with regards to any of the charges.</p>
        <p>Article 13 – IGIL’s OBLIGATIONSS</p>
        <ul>
          <li><p><GrowInput placeholder={`IGIL`}/>shall arrange to obtain no claim on inventory letters from all and any party who has an interest in the Storage Facility/Designated Storage Area. Such letters shall proclaim that the parties concerned recognize and agree that they do not have any ownership or title rights to the Goods stored at the Designated Storage Area, and that they shall not bring any claim to bear on the Goods, under the custody, control and supervision of <GrowInput placeholder={`Dr. Amin`}/> and stored in the Designated Storage Are</p></li>
          <li><p><GrowInput placeholder={`IGIL`}/> shall furnish written confirmation to <GrowInput placeholder={`Dr. Amin`}/> that there are no circumstances of which he is aware that may give rise to a claim over the land, plot, Designated Storage Area or the Goods stored therein during the period of this Agreement.</p></li>
          <li><p>During the period of this Agreement, <GrowInput placeholder={`IGIL`}/> shall warrant that it will allow <GrowInput placeholder={`Dr. Amin`}/> to have the custody, control and supervision of the Goods stored at the Designated Storage Area without any interruption and obstruction</p></li>
          <li><p><GrowInput placeholder={`IGIL`}/> further agrees that he shall not, for any reason whatsoever, prevent <GrowInput placeholder={`Dr. Amin`}/> from entering or leaving the Designated Storage Area nor shall it at any time prevent <GrowInput placeholder={`Dr. Amin`}/> from taking in, or delivering out, the Goods stored therein which shall be done under the supervision of Dr. Amin at the written instance of the <GrowInput placeholder={`Financing Bank`}/> .</p></li>
          <li><p><GrowInput placeholder={`IGIL`}/> hereby waives all rights to the Goods stored under the custody of <GrowInput placeholder={`Dr. Amin`}/> and shall not remove, transfer or otherwise attempt to gain control of the Goods unless authorized in writing by <GrowInput placeholder={`Dr. Amin`}/>.</p></li>
          <li><p><GrowInput placeholder={`IGIL`}/> shall only take the delivery of the Goods from <GrowInput placeholder={`Dr. Amin`}/> only upon receipt [by <GrowInput placeholder={`Dr. Amin`}/> of the Release Orders from the Financing Bank and then released by <GrowInput placeholder={`Dr. Amin`}/> on instruction of IIT.</p></li>
           <li><p><GrowInput placeholder={`IGIL`}/> shall only take the delivery of the Goods from <GrowInput placeholder={`Dr. Amin`}/> only upon receipt [by <GrowInput placeholder={`Dr. Amin`}/> shall warrant that <GrowInput placeholder={`Dr. Amin`}/> shall enjoy complete and uninterrupted custody of the Goods in the Designated Storage Area.</p></li>

        </ul>
         <p>Article 14-WARRANTIES OF <GrowInput placeholder={`IGIL`}/> </p>
         <p> <GrowInput placeholder={`IGIL`}/> DOES HEREBY WARRANT AS FOLLOWS: </p>
           <ul>
          <li><p>It has full right and absolute authority to provide the Designated Storage Area to <GrowInput placeholder={`Dr. Amin`}/> for its exclusive use to enable  <GrowInput placeholder={`Dr. Amin`}/> to carry out its obligations under the Collateral Management Agreement.</p></li>
          <li><p><GrowInput placeholder={`Dr. Amin`}/>  shall peacefully hold and enjoy unrestricted access of the Designated Storage Area during the term or duration of this Agreement, without disturbance or interruption or obstruction from <GrowInput placeholder={`IGIL`}/> or any person claiming under it..</p></li>
        

        </ul>
        <p>Article 15-INDEMNITY BY  <GrowInput placeholder={`IGIL`}/> </p>
        <p><GrowInput placeholder={`IGIL`}/> agrees to indemnify and keep indemnified, defend and hold harmless <GrowInput placeholder={`Dr. Amin`}/> and <GrowInput placeholder={`IIT`}/>, its officers, directors, employees and agents from and against any and all losses, liabilities, claims, obligations, costs, expenses arising during the duration of this Agreement, which result from, arise in connection with or are related in any way to claims by third parties or regulatory authorities, and which directly arise due to any reasons whatsoever and including the following:</p>
        <ol type="i">
          <li><p>	<GrowInput placeholder={`IGIL`}/>’s breach of the terms of this Agreement or;</p></li>
          <li><p>	negligence, fault or misconduct by <GrowInput placeholder={`IGIL`}/> or its officers, employees, agents, subcontractors and/or representatives and/or other persons authorized to act on its behalf; 
</p></li>
        </ol>
        <p>Article 17- GOVERNING LAW AND ARBITRATION </p>
        <p>This Contract shall be construed and governed under English law.</p>
        <p>TThe Contracts (Rights of Third Parties) Act 1999 shall apply to the extent that rights and benefits under this Agreement shall apply to the Financing Bank. Any dispute between the Parties hereto which may arise hereunder and which cannot be settled by mutual agreement shall be referred to arbitration in accordance with the Rules of <GrowInput placeholder={`Singapore International Arbitrators Centre (SIAC)`}/>  .</p>
        <p>The arbitral tribunal shall be composed of a sole Arbitrator appointed in accordance with the Rules of <GrowInput placeholder={`Singapore International Arbitrators Centre (SIAC)`}/>.</p>
        <p>The seat of arbitration shall be <GrowInput placeholder={`Singapore`}/>, although hearings may be held in other places if agreed by the Parties and the Arbitral Tribunal. </p>
        <p>The arbitration shall be conducted in the English language.</p>
        <p>The arbitration award shall be final and binding upon the Parties to such arbitration and may be enforced in any court having jurisdictio</p>
        <p>IN WITNESS WHEREOF the parties hereto caused this Agreement to be executed by their duly authorized representatives on the date first written above.</p>
       <p>SIGNATURE PAGE</p>
       <ul>
        <li><p>Signed by</p></li>
       </ul>
       <p>For and on behalf of  <GrowInput placeholder={` INDO GERMAN INTERNATIONAL PVT. LTD`}/>.</p>
       <p>In the presence of:</p>
        <p>Witness::</p>
        <ul>
        <li><p>Signed by</p></li>
       </ul>
        <p>For and on behalf of  <GrowInput placeholder={` DR. AMIN CONTROLLERS PVT. LTD.`}/>.</p>
       <p>In the presence of:</p>
        <p>Witness::</p>
        <ul>
        <li><p>Signed by</p></li>
       </ul>
        <p>For and on behalf of  <GrowInput placeholder={`INDO INTERNATIONAL TRADING FZCO`}/>.</p>
       <p>In the presence of:</p>
        <p>Witness::</p>
        <ul>
        <li><p>Signed by</p></li>
       </ul>
       <p>
The Designated Storage Area is as under:-
</p>
<p><GrowInput placeholder={`“Visakhapatnam port, India`}/></p>
    </div>
  )
}