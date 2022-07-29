import React,{useState, useEffect} from 'react';
import styles from './index.module.scss'
import {Row, Col} from "react-bootstrap"
import GrowInput from '../GrowInput'

function Index() {
     const [active,setActive]=useState("Seller")
  const changeActiveValue=(val,index)=>{
    console.log(val,"val")
  setActive(val)
  // showContent()
  let tempArr=sideBar;
  for(let i=0;i<tempArr.length;i++) {
    if(i==index){
      tempArr[i].state="current"
    }else{
      tempArr[i].state="default"
    }

  }
  console.log(tempArr,"name")
  setSidebar(tempArr)
  }

  const [sideBar,setSidebar] =useState(
    [
    {name:"Seller",state:"current",value:"Seller"},
    {name:"Buyer",state:"default",value:"Buyer"},
    {name:"Manufacturer/Supplier /Shipper",state:"default",value:"Manufacturer/Supplier /Shipper"},
    {name:"End User / Buyer",state:"default",value:"End User / Buyer"},
    {name:"Execution Date",state:"default",value:"Execution Date"},
    {name:"Commodity, Quantity, Unit Price",state:"default",value:"Commodity, Quantity, Unit Price"},
    {name:"Product Specifications",state:"default",value:"Product Specifications"},
    {name:"Total Order Value",state:"default",value:"Total Order Value"},
    {name:"Discharge Port",state:"default",value:"Discharge Port"},
    {name:"Loading Port",state:"default",value:"Loading Port"}
    ]
  )
  return (
    <div className={`${styles.root}`}>
   
      <div className={`${styles.sidebar} card card-body`}>
       {sideBar.map((row,index)=>{
        return(
          <>
          <div key={index} className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}>
            <div 
            className={`${styles.content2} ${row.state=="current"?styles.selected:null}  d-flex justify-content-between align-items-center`}
                   onClick={(e)=>{
                    changeActiveValue(row.name,index)
                  }}
            >
             
               <img src={`${
                row.state=="current"?"/static/Group 3255.svg":"/static/Group 3256.svg"
               }`}></img>
                 <span className="ml-3">{row.name}</span>
            </div>
           <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />

        </div>
          </>
        )
       })}

      </div>
      <div className={`${styles.content} card`}>
          <div className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
                                               <h2 className="mb-0">{active}</h2>
                                          
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
           {sales(active)}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div>

      </div>
    </div>
  )
}

export default Index
const seller=()=>{
  return(
     <div className="card-body">

     </div>
  )
}
const sales=(active)=>{
  return(
     <div className="card-body">
        {/* <div className={styles.payment}>
       <table className={`styles.table table border-color` } cellPadding="0" cellSpacing="0" border="1">
       
          <tr>
            <th className={`${styles.firsChild}`}>icon</th>
            <th className={`${styles.secondChild}`}>S.NO.</th>
            <th>ELEMENTS</th>
            <th>TYPICAL (IN PCT)</th>
            <th>GUARANTEED (IN PCT)</th>
            <th className={`${styles.lastChild}`}>+</th>
          </tr>
        
        <tbody>
          <tr>
            <td>icon</td>
            <td>01</td>
            <td>SiO2</td>
            <td>44.50</td>
            <td>44.50</td>
            <th>+</th>

          </tr>
            <tr>
            <td>+</td>
            <td colSpan={5}></td>
            

          </tr>
        </tbody>
      </table>
      <div className={`d-flex justify-content-between align-items-center p-0 ${styles.inputContainer}`}>
     <input as="textarea" rows="3" placeholder="5000 Wet Metric Tons (Wmt) +/- 10Pct Of Mmd: Manganeseore Of Gabon Origin (44,50Pct Mn Typical - 5Pct Moisture), Ciffo Visakhapatnam Port Packing In Bulk."/>
      <img class="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"/>
      </div>
     </div> */}
      <Row className={styles.rowhead}>
        <Col md={8} className={styles.col}><p>Sales Contract No.: IIT/IGIPL/2021/032 (system generated)</p></Col>
        <Col md={4}><p className={`text-align-center`}>Date:<GrowInput placeholder={`31.08.2021`}/></p></Col>
      </Row> 
       
        <p className={`${styles.heading} text-align-center`}>SALES CONTRACT</p>      
        
      {active=="Seller"?
         <Row className={styles.row}>
        {/* <Col md={4} className={styles.col}><p>1.</p> <p>2. Seller</p></Col> */}
        <Col md={12}><p><GrowInput placeholder={`INDO INTERNATIONAL TRADING FZCO`}/></p>
        <p><GrowInput placeholder={`JAFZA VIEW – 18, LOB-180504, JEBEL ALI, DUBAI, UAE.`}/></p>
        </Col>
      </Row>
        :null}
      {active=="Buyer"? <Row className={styles.row}>
       
        <Col md={12}><p><GrowInput 
        text={`text`} 
        placeholder={`Indo German International Pvt. Ltd.
              Plot No-49-48-6/1, Lalitha Nagar, 
              Ground Floor, Sakshi Office Road, 
              Akkayyapalem, Visakhapatnam, 
              Andhra Pradesh, 530016 India
              `}/></p>
       
        </Col>
      </Row>:null}
      {active=="Manufacturer/Supplier /Shipper"?
       <Row className={styles.row}>
        {/* <Col md={4} className={styles.col}><p>4. Manufacturer/Supplier / Shipper</p></Col> */}
        <Col md={12}><p><GrowInput placeholder={`Manufacturer/Supplier / Shipper
          ERAMET MARKETING SERVICES 
          10 BOULEVARD DE GRENELLE CS 63205 - 75015 
          PARIS - FRANCE


              `}/></p>
       
        </Col>
      </Row>
      :null}

      {active=="End User / Buyer"?
        <Row className={styles.row}>
        {/* <Col md={4} className={styles.col}><p>5. End User / Buyer */}
        {/* </p></Col> */}
        <Col md={12}><p><GrowInput placeholder={`HIRA POWER AND STEELS LTD, 
                  511/1, 512/2, URLA INDUSTRIAL COMPLEX, 
                  RAIPUR – 493221, C.G., INDIA



        `}/></p>
       
        </Col>
      </Row>
      :null}
      

       <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>6.Execution Date
        </p></Col>
        <Col md={8}><p><GrowInput placeholder={`31.08.2021`}/></p>
       
        </Col>
      </Row>
       <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>7.Commodity,   Quantity, Specification and Unit Price
        </p></Col>
        <Col md={8}>
          <p><GrowInput placeholder={`Manganese Ore of Gabon Origin (Grade: MMA) `}/></p>
          <p>SPECIFICATION</p>
          <table className="table">
            <tr>
              <th>Elements</th>
               <th>Typical</th>
                <th>Guaranteed</th>
            </tr>
            <tbody>
              <tr>
                <td>Mn</td>
                <td>44.5 PCT</td>
                <td>43.0 PCT</td>
              </tr>
              <tr>
                <td>SiO2</td>
                <td>8.0 PCT</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Al2O3</td>
                <td>7.6 PCT</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Fe</td>
                <td>5.0 PCT</td>
                <td>-</td>
              </tr>
              <tr>
                <td>P</td>
                <td>0.11 PCT</td>
                <td>0.13 PCT</td>
              </tr>
              <tr>
                <td>K2O</td>
                <td>0.90 PCT</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Size 5-75mm (at loading)</td>
                <td>90 PCT</td>
                <td>-</td>
              </tr>

            </tbody>
          </table>
          <p><GrowInput placeholder={`QUANTITY: 5,000 MT (+/- 10% at SELLER option)`}/></p>
          <p><GrowInput placeholder={`UNIT PRICE: USD 5.58 PER DMTU (44.5% Mn Content Dry basis)`}/></p>
          <p><GrowInput placeholder={`CIF FO Visakhapatnam Port, India (Incoterms 2020)`}/></p>
          <p><GrowInput placeholder={`QUANTITY: 5,000 MT (+/- 10% at SELLER option)`}/></p>
          <p><GrowInput placeholder={`ORIGIN: GABON`}/></p>
          <p><GrowInput placeholder={`PACKING: IN BULK.`}/></p>
       
        </Col>
      </Row>
       <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>8.Total Order value
        </p></Col>
        <Col md={8}><p><GrowInput placeholder={`Approx. USD 1,179,472.50 (+/-10%)  calculated basis Mn 44.5%, Less moisture 5%.`}/></p>
       
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>9.Discharge Port
        </p></Col>
        <Col md={8}><p><GrowInput placeholder={`Visakhapatnam Port, India`}/></p></Col>
      </Row>
            <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>10. Loading Port
        </p></Col>
        <Col md={8}><p><GrowInput placeholder={`Owendo, Gabon`}/></p></Col>
      </Row>
           <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>11. Quality / Inspection 
        </p></Col>
        <Col md={8}><p>
          In case of issues in Quality, Neutral agency certification for Quality and Quantity will be considered as final and binding on Manufacturer/shipper and End User as per the Assignment Letter dated <GrowInput placeholder={`31.08.2021`}></GrowInput> If any dispute arises relating but not limited to quantity, quality, the same is to be settled directly between Manufacturer/shipper and End User as per Assignment Letter dated <GrowInput placeholder={`31.08.2021`}></GrowInput>

          </p></Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>12. Duties and Taxes 
        </p></Col>
        <Col md={8}><p>
          All Taxes and duties, present or future, including variations thereto and other taxes shall be borne and paid by Buyer.

          </p></Col>
      </Row>
           <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>13.Shipment 
        </p></Col>
        <Col md={8}><p>
         <p> Latest date of shipment: <GrowInput placeholder= {`31.10.2021`}/></p>
         <p> Partial shipment - <GrowInput placeholder= {`Allowed1`}/></p>
        

          </p></Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>14. Payment Terms 
        </p></Col>
        <Col md={8}><p>
         <ol type="A">
          <li><p>{`All the custom clearance formalities, Duties, Taxes and other charges related to import of cargo and custom clearance shall be to Buyer’s account and shall be solely the Buyer’s responsibility.`}</p></li>
          <li><p>
            The Buyer shall pay for entire cargo within <GrowInput placeholder= {`90 days`}/>from the date of <GrowInput placeholder= {`B/L`}/>or <GrowInput placeholder= {`60 days`}/> from the date of discharge of vessel at discharge port, whichever is earlier. The Buyer shall make full payment of the material to be lifted through TT remittance. The Seller shall release the part material to Buyer upon receipt of part payment for the part quantity of material to be lifted after obtaining delivery order or Written Release Order from the LC opening bank as per CMA. The delivery order instructions shall be issued for the part material, for which the payment has been made within one banking day. However, Seller will provide first delivery order in Advance as per buyer’s request.

            </p></li>
             <li><p>
           The material shall be stored at <GrowInput placeholder= {`Visakhapatnam Port`}/>, India for which the cost of such Rent, Claim, and penalty shall be fully borne by the End User. Upon release of payment for the value of each B/L Quantity Release Order from the Lending Bank shall be sent to the CMA Agent, <GrowInput placeholder= {` Dr. Amin Controllers Pvt. Ltd. `}/> within one banking day. 

            </p></li>
             <li><p>
          Documents to be provided to Buyer
          <ol type="1">
            <li><p>The Seller‘s Commercial Invoice;.</p></li>
            <li><p>Full set of  3/3  originals  of Bills of Lading.</p></li>
            <li><p>Certificate of Quality.</p></li>
            <li><p> Certificate of Weight.</p></li>
            <li><p> Certificate of Origin.</p></li>
            <li><p> Copy of Marine Insurance Certificate / Insurance Policy</p></li>

          </ol>

            </p></li>
         </ol>
        

          </p>
          <p>All the above documents are subject to receipt from shipper.</p>
          </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>15. Insurance
        </p></Col>
        <Col md={8}><p>
         <ol type="A">
          <li><p><GrowInput placeholder={"Marine Insurance"}/>: Seller will provide Marine Insurance as received from Shipper</p></li>
         
             <li><p>
          <GrowInput placeholder={"Stock Insurance"}/>: The Buyer will arrange insurance for  <GrowInput placeholder={"110 %"}/> of the cargo value at discharge port, valid at all times covering All Risk including Fire, Burglary and Act of God (AOG). The cargo shall be insured by the Buyer at its own cost for the full value of cargo. The insurance certificate should show loss payee as LC Opening bank covering All Risk including Fire, Burglary and Act of God (AOG). The Policy shall be endorsed in favour of the Seller or its nominated Bank.  The Beneficiary of the Insurance Claim shall be the Seller or its nominated Bank as per Seller’s instructions.

            </p></li>
     
         </ol>
        

          </p>
        
          </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>16.Shipping Terms 
        </p></Col>
        <Col md={8}><p>
         <p>All demurrage/despatch for discharge port to be settled directly between  <GrowInput placeholder= {`Shipper , Vessel Owner agent`}/>  and End User with no liability upon the Seller whatsoever.</p>
       </p></Col>
      </Row>
       <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>17.Title / Risk
        </p></Col>
        <Col md={8}><p>
         <p>Title to the Goods shall be deemed to have been transferred to the Buyer and the Goods shall be deemed to be sold and delivered to the Buyer only upon receipt by the Seller of the entire contract value. It is clarified that the Seller shall retain vendor’s lien and the full legal ownership in the Goods, to secure the Buyer’s obligation to pay the entire contract value, until receipt by the Seller of the entire contract value.  All risk of loss or damage shall pass to the Buyer as per Incoterms 2020.</p>
       </p></Col>
      </Row>
      <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>18.Time is the Essence
        </p></Col>
        <Col md={8}>
          <p>
            <p>Time is the Essence of the Contract</p>
         <p>In the event of failure of the Buyer to fulfill its obligations as contained herein including making of the payment and taking of the delivery of the material within the time period specified in the Clause Payment Terms hereinabove, it shall constitute a material breach of the Agreement.</p>
       </p></Col>
      </Row>
     <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>19. Remedies Available to the Seller
        </p></Col>
        <Col md={8}><p>
         <ol type="i">
          <li><p>In the event of the failure of the Buyer to make timely payment as agreed to in terms of the Clause Payment Terms hereinabove, the Buyer shall pay the overdue interest <GrowInput placeholder= {`@ 18% p.a`}/>. to the Seller for each day of delay.  However, the delay in making the payment shall in no event exceed <GrowInput placeholder= {`15`}/> days beyond the due date of making the payment as specified hereinabove.</p></li>
          <li><p>
           However, in the eventuality of BUYER failing to pay for and/or take delivery as per Clause Payment Terms beyond <GrowInput placeholder= {`15`}/> days of the due date, the SELLER shall have the absolute right to dispose off the material, on terms and conditions as may be deemed fit by the Seller, to any other party at full risk, responsibility and costs of BUYER, including financial costs, other expenses as well as liquidated damages. The Buyer further agrees to make good the losses, financial costs and expenses incurred by the Seller due to such disposal of the goods, within 3 working days of the receipt of the demand by the Buyer from the Seller.


            </p></li>
             <li><p>
          The Buyer shall forthwith on demand indemnify the Seller against all the direct losses, liabilities, claims or damages which Seller shall incur as a result of any breach by the Buyer (including but not limited to any claim, loss, liability or damage Seller may incur to a third party as shipper of the product)

            </p></li>
             <li><p>
        Failure of the Buyer to make payment in terms of clause hereinabove will entitle the Seller to seek appropriate remedies available to it under the laws of the jurisdiction where the goods are stored for recovery of the amounts and / or any other relief as thought fit by the Seller in its sole discretion.

        

            </p></li>
         </ol>
        

          </p>
          
          </Col>
      </Row>

       <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>19. Special Conditions
        </p></Col>
        <Col md={8}><p>
         <ol type="i">
          <li><p>It is expressly and unconditionally agreed and Buyer fully acknowledges that the title in the goods / material shall pass on to the Buyer only in respect of such specific quantity thereof as released from the storage facility by Collateral Manager in terms of the ‘Tripartite Agreement’ after receipt of the price and other payables in respect thereof and actual delivery of the goods having been made to the Buyer. The Seller shall continue to be the owner, holding absolute title in the goods/material not so released and delivered to the Buyer in any contingency including of Buyer even becoming insolvent but not limiting, and shall be entitled to deal with the goods/material as it may deem fit including disposing them of at the risk and cost of the Buyer. For the avoidance of doubt, the parties agree and acknowledge that that the Goods shall not be in any manner whatsoever be construed to be in the constructive or actual possession of the Buyer until the Goods are released and delivered by the Seller in accordance with this Agreement. The Buyer specifically represents and agrees to not exercise any or all such possessory rights on the Goods until the Goods are released and delivered by the Seller in accordance with this Agreement</p></li>
          <li><p>
          Notwithstanding anything contained herein to the contrary, all risks, consequences arising out of the actual transaction(s) taking place between Manufacturer/shipper and the Seller under the Contract and/or any modified/amended agreement will be to the account of the Buyer only. The Seller shall in no way be responsible or liable for the same.


            </p></li>
             <li><p>
        The BUYER unconditionally agrees to abide by a collateral management agreement by and among <GrowInput placeholder= {`Dr. Amin Controllers Pvt. Ltd.`}/>  (“Collateral Manager”), Financing Bank (“Bank”) and<GrowInput placeholder= {`Indo International Trading FZCO`}/>   (the “Seller) and undertakes not to take any delivery of Goods unless Collateral Manager releases such quantity of the Goods in accordance with the Bank’s written release instructions under the Collateral Management Agreement. If BUYER, directly or indirectly, violates the undertaking in the preceding sentence, then BUYER shall indemnify SELLER for any loss, liability or claim (including without limitation any expenses incurred) without
        any demur or protest. The Seller shall be under obligation to issue delivery order for the quantity for which the payment has been received within one banking day.

            </p></li>
             <li><p>
           BUYER acknowledges that:(i) pursuant to this Agreement SELLER has entered into certain agreements similar to the Collateral Management Agreement to fulfill requirement of the relevant bank which has issued a letter of credit to facilitate purchase of the Goods by SELLER; and (ii) the collateral manager appointed by the Bank shall keep the Goods in its custody at a  facility leased by the BUYER at Storage facility at <GrowInput placeholder= {`Visakhapatnam Port.`}/> , India. For this purpose, BUYER unconditionally agrees that whenever collateral manager takes BUYER’s permission to keep the Goods at the Storage facility which facility is under BUYER’s control and management, then BUYER shall ensure the collateral manager has the unfettered and unrestricted access to the Storage Facility and shall have the sole custody over the Goods kept at the Storage facility. If there is any theft or loss of the Goods at the Storage facility, the Buyer shall fully indemnify SELLER to such loss of the Goods without any demur or protest. 

        

            </p></li>
              <li><p>
         Notwithstanding anything contained in this Agreement, for avoidance of any doubts, the Parties hereby clarify that unless Buyer fully pays SELLER under this Agreement, the SELLER shall have lien on unpaid quantity of the Goods which is delivered to Buyer pursuant to this Agreement or any other agreement. BUYER unconditionally represents and warrants that BUYER has not created and shall not create any encumbrance (whatsoever) in favour of any lender or any third party on the Goods under this Agreement or any other similar agreements unless BUYER fully pays for such Goods.

        

            </p></li>
               <li><p>
     Any payment to be made by the Buyer under this contract shall be made free and clear of and without deduction or withholding for or on account of any taxes. If at any time the Buyer is required to make any deduction or withholding in respect of taxes from any payment to be made under this contract, the Buyer shall pay such additional amounts as may be necessary to ensure that, after the making of such deduction or withholding, the Seller receives for such payment a net sum equal to the sum it would have received had no such deduction or withholding been made.

        

            </p></li>
                           <li><p>
    It is clarified that the Goods shall be deemed to have been supplied to the Buyer when the goods are loaded on board the vessel and the Sales Consideration as mentioned hereinabove shall become due and payable from then onwards by the Buyer to the Seller.


        

            </p></li>
                                       <li><p>
  The contractual amount till the time it is not paid will be treated as an admitted, undisputed debt due and payable by the Buyer to the Seller.


        

            </p></li>
            <li><p>Within  <GrowInput placeholder= {`seven (7)`}/>  days of receipt of the statement of accounts, as prepared by SELLER, if BUYER does not provide any comment on the statement of accounts, then such statement of accounts shall deem to be accepted by BUYER and binding on it.  </p></li>
              <li>
                <p> DIRECT RECOURSE</p>
                <p>The End User and Manufacturer/shipper shall have direct recourse to each other for matters including but not limited to the following:</p>
                 <ol type={``}>
                  <li><p>For all quantity and quality claims/ issues pertaining to material supplied by Manufacturer/shipper;</p></li>
                  <li><p>Any express or implied warranty claim for the quality of material supplied by Manufacturer/shipper;</p></li>
                  <li><p>Loss of cargo;</p></li>
                  <li><p>Any demurrage charges at the load port and/or discharge port shall be settled directly between the Buyer  and Manufacturer/shipper;</p></li>
                  <li><p>All Claims direct or consequential shall be settled directly between End Buyer and Manufacturer/shipper.</p></li>
                 </ol>
              </li>
         </ol>
        

          </p>
          
          </Col>
      </Row> 

       <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>22. Mutual Collaboration
        </p></Col>
        <Col md={8}><p>
        Both the Buyer and the Seller recognize that circumstances may arise that could not have been foreseen at the time this Contract is being entered into. Both Parties agree that they will use their commercially reasonable effort to achieve a mutually acceptable solution to any problem that may arise due to any unforeseen circumstances in the spirit of mutual understanding and collaboration.



          </p></Col>
      </Row>  
      <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>22. Termination
        </p></Col>
        <Col md={8}><p>
      In the event the Buyer commits any breach of the terms of the agreement, then the Seller may, by giving thirty (30) days prior written notice to the Buyer, terminate this Agreement without liability and charge to the Seller. However, the Buyer shall remain liable to the Seller for making Payment of the Goods already shipped by the Seller at the instance of the Buyer. Provided further, the Parties hereto agree that the Seller may immediately terminate this Agreement without providing any notice to the Buyer upon the Buyer, or the Buyer &apos s shareholders commencing a voluntary proceeding under any applicable bankruptcy, insolvency, winding up or other similar law now or hereafter in effect (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the entry of an order for relief in an involuntary proceeding under any such law (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the appointment or taking possession by a resolution professional, Receiver, liquidator, assignee (or similar official) for any or a substantial part of its property; or the Buyer has involuntarily become the subject of proceedings (including filing of an application/ petition for corporate insolvency resolution) under the Insolvency & Bankruptcy Code, 2016 or an order has been made by the appropriate authority for winding up of the Buyer



          </p>
          <p>In the event that conditions of Force Majeure continue so that the Buyer’s obligations remain suspended for a period or periods amounting in aggregate to sixty (60) days in any consecutive period of ninety (90) days, and at the end of said period or at anytime thereafter, then the Seller may give thirty (30) days prior written notice to the Buyer that the Seller intends to terminate this Agreement. At the expiration of the thirty (30) days, the Seller at its discretion may terminate this Agreement forthwith without any liability or charge to the Seller. However, the Buyer shall remain liable to the Seller for making Payment of the Goods</p>
          </Col>
      </Row>
       <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>23. Notices
        </p></Col>
        <Col md={8}><p>
      Any notice given by one Party to the other shall be in the English language an sent by facsimile or by pre-paid air courier.  Any notice sent by facsimile shall be deemed received on the day of transmission and any notice sent by courier shall be deemed duly received on the third (3rd) day following dispatch. Such notices shall be addressed as follows:
         </p>
          <p>SELLER</p>
           <p><GrowInput placeholder={`Mr. Devesh Jain`}/></p>
           <p><GrowInput placeholder={`Indo International Trading FZCO`}/></p>
           <p><GrowInput placeholder={`Jafza View 18, Lob 180504, Jebel Ali, Dubai UAE`}/></p>
           <p> Email <GrowInput placeholder={`iit@indoins.com`}/></p>
            <p>BUYER </p>
           <p><GrowInput placeholder={`Ms. Bhawana Jain,`}/></p>
           <p><GrowInput placeholder={`Indo German International Pvt. Ltd.`}/></p>
           <p><GrowInput placeholder={`8B, Sagar Apartments, 6 Tilak Marg,`}/></p>
           <p><GrowInput placeholder={`New Delhi-110001, India.,`}/></p>
           <p> Email :<GrowInput placeholder={`bhawanajain@somanigroup.com`}/></p>
          </Col>
      </Row> 
       <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>24. Force Majeure
        </p></Col>
        <Col md={8}><p>
        The Seller shall not be liable to the Buyer or to the Manufacturer/shipper for any damages due to delay, interruption or failure in performance of the obligations under the present Agreement (including but not limited to any loss, damage or delay) if such loss, damage, delay or failure is due to or results from Acts of God, War (whether declared or undeclared), blockades, revolution, insurrection, civil commotion, terrorism, riot, invasion, plague or other  epidemic, fire, sabotage, quarantine  restriction, explosion or embargo, including any change/modification in commercial laws,  rules and regulations by government, , acts of Government in creating any restrictions or control in imports, exports or foreign exchange, fire, flood, storm, earthquakes, accident in and to the Vessel or strikes, breakdown of loading or unloading facilities, or transporting, loading, unloading or delivering freight, embargoes and breakdown of railroads, serious damage to or breakdown of the transmission system connecting to the  Buyer ’s  warehouse or the like or any other cause which may be beyond the control of the Seller .
       </p>
          <p>The force Majeure declared by the Manufacturer/shipper shall be applicable to the Seller.</p>
          <p>No event described in this Clause shall constitute a Force Majeure event with respect to the Buyer &apos;s obligation to pay for any product loaded at loading place in transit to the Buyer or stored at the licensed warehouse.</p>
          </Col>
      </Row> 
        <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>25. Breach of Contract
        </p></Col>
        <Col md={8}><p>
        <ol type="i">
          <li><p>In the event, the Buyer fails to fulfill its obligations as laid down hereunder, the Buyer shall be fully responsible and liable for all losses, damages, both direct and consequential incurred by the Seller</p></li>
          <li><p>The Buyer indemnifies and shall continue to keep the Seller fully indemnified against all losses, damages, expenses, claims, proceedings, liabilities (including all liabilities of the Seller towards payment of LC charges, interest, default interest and other similar charges to its financing entity, and those arising under the Collateral Management Agreement and the Irrevocable Tripartite Agreement), demands including but not limited to those arising due to the failure of the Buyer to make the payment and/or take delivery of the Goods within the stipulated time period as specified in the Clause Payment Terms hereinabove as well as for executing the transaction as contemplated herein the agreement for and on behalf of the Buyer.</p></li>
          <li><p>If, due to the failure of the Buyer to fulfill its obligations as laid down hereunder in the Contract, any dispute or difference arises between the Seller and Manufacturer/Shipper, and due to which any Award/Judgment/decree/Order is passed or otherwise a settlement is reached, the Buyer shall be bound to accept the same and bear the liability, costs, expenses arising there from.</p></li>
          <li><p>In the event, any judicial/ legal proceedings are initiated against the Seller by Manufacturer/shipper, the Buyer shall be required to be present and associated at all stages of the proceedings and shall bear the entire expenses of arbitration/litigation and/or of the negotiated settlement. The Buyer shall have no authority or excuse to challenge the same on any ground including that the Buyer has not been consulted therein or that the negotiated settlement is not reasonable or otherwise.</p></li>
          <li><p>Remedies provided under this agreement shall be cumulative and in addition to other remedies provided by law. </p></li>
        </ol>
       </p>
          
          </Col>
      </Row>
        <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>26. Dispute Resolution & Arbitratio
        </p></Col>
        <Col md={8}><p>
          Both parties agree to use their best efforts to amicably resolve any claims controversies and disputes arising out of this contract, as well as to determine the final costs thereof. Any such claims, controversies and disputes which cannot be resolved through negotiations within a period of 60 days of the notification of such claims, disputes and controversies shall be referred to arbitration in accordance with the rules of <GrowInput placeholder={` Singapore International Arbitration Center (SIAC)`}/>. One arbitrator to be nominated jointly by both the parties. The award rendered by the arbitrator shall be final and binding upon both the parties concerned and subject to no appeal. The costs and expenses of the prevailing party (including, without limitation, reasonable attorney’s fee) will be paid by the losing party. The contract shall be subject to English Laws. The seat of the arbitration will be Singapore
       </p>
          <p>Notwithstanding the aforesaid, the parties agree and affirm that relief available under Section 9 of the Indian Arbitration Act, 1996 (as amended) shall be available to the parties, and the parties may initiate appropriate proceedings in India in order to avail such relief.</p>
         
          </Col>
      </Row>
        <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>27. Modifications of the contract
        </p></Col>
        <Col md={8}><p>
         No changes in respect of the contract covered by this agreement shall be valid unless the same is agreed to in writing by both parties herewith specifically stating the same to on amendment to this agreement. Contract is valid if approved by Fax and no mail confirmation will be sent.
       </p>
        </Col>
      </Row>
        <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>28. No Assignment
        </p></Col>
        <Col md={8}><p>
        Neither Party shall be entitled to assign, transfer or sub-contract its rights under this Agreement in whole or in part without first obtaining the other’s consent in writing.
       </p>
        </Col>
      </Row>
        <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>29. Severability
        </p></Col>
        <Col md={8}><p>
      The Parties intend each provision of this Agreement to be severable and distinct from the others.  If a provision of this Agreement is held to be illegal, invalid or unenforceable, in whole or in part, the Parties intend that the legality, validity and enforceability of the remainder of this Agreement shall not be affected.
       </p>
        </Col>
      </Row>
        <Row className={styles.row}>
        <Col md={4} className={styles.col}><p>30. Waiver
        </p></Col>
        <Col md={8}><p>
     Failure to enforce any condition herein contained shall not operate as a  waiver of the condition itself or any subsequent breach thereof.
       </p>
        </Col>
      </Row>
        <Row className={styles.rowlast}>
        <Col md={4} className={styles.col}><p>31. Representations and Warranties
        </p></Col>
        <Col md={8}><p>
    Each party to this Agreement hereby represents and warrants that:
     <ol type="a">
      <li><p>it is a legal entity duly organized and validly existing under the laws of the jurisdiction of its incorporation and has all necessary corporate power, authority and capacity to execute this Agreement and undertake the transactions contemplated herein;</p></li>
       <li><p>the execution and delivery of this Agreement has been duly and validly authorized and constitutes valid and legally binding obligations enforceable in accordance with its terms;
</p></li>
        <li><p>not; (i) contravene any provisions of its charter documents; (ii) result in a default, breach or contravention of any conditions or provisions of any agreement to which it is a party or any obligation it is bond by; or (iii) violate any law, order, judgment, injunction, decree, award, rule or regulation applicable to it.</p></li>
     </ol>
       </p>
        </Col>
      </Row>

      <Row >
        <Col md={6} ><p>SELLER</p>
         <p><GrowInput placeholder={`INDO INTERNATIONAL TRADING FZCO`}/></p>
        </Col>
        <Col md={6}><p>BUYER</p>
        <p><GrowInput placeholder={`INDO GERMAN INTERNATIONAL PVT. LTD`}/></p>
        
        </Col>
      </Row> 
     </div>
  )
}
