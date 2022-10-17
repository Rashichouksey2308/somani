import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import {Row, Col} from "react-bootstrap"
import GrowInput from '../GrowInput'
import _get from 'lodash/get'
import moment  from 'moment'
function Index(props) {
   const [data, setData] = useState({
    seller: "",
    buyer: "",
    sellerAddress:"",
     buyerAddress:"",
    shortseller: "",
    shortbuyer: "",
    sellerSignature: "",
    buyerSignature: "",
    dateOfExecution: "",
    placeOfExecution: "",
    details: "",
    detailsOfEndBuyer: "",
    detailsOfComm: "",
    quan: "",
    unitPrice: "",
    totalOrderValue: "",
    lordPort: "",
    dischargePort: "",
    lastDate: "",
    terms: "",
    addComm: "",
    spec: "",
    unitOfGrade: "",
    unitOfQuantity: "",
    unitOfValue: "",
    curr: "",
    specComment:""


  })
   const getAddress=(buyer)=>{
   if(buyer.name=="Indo German International Private Limited"){
     if(buyer.branch=="Delhi"){
       return "7A , SAGAR APARTMENTS,6 TILAK MARG,DELHI,NEW DELHI,110001"
     }else{
      return "Ground Floor, Plot No-49-18-6/1 Lalitha Nagar, Sakshi Office Road,Akkayyapalem,Visakhapatnam,Andhra Pradesh,530016"
     }
   }
   if(buyer.name=="Emergent Industrial Solution Limited"){
     if(buyer.branch=="Delhi"){
       return "8B, SAGAR, 6 TILAK MARG,DELHI,NEW DELHI,110001"
     }else{
      return "49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM,,Akkayyapalem,Visakhapatnam,Andhra Pradesh,530016"
     }
   }
 }
  useEffect(() => {
    if (window) {
      if (props.preview) {
        const data = JSON.parse(sessionStorage.getItem("preview"))

        setData({
          seller: data?.seller,
          buyer: data?.buyer?.toLowerCase(),
          sellerAddress:data.sellerAddress,
          buyerAddress:data.buyerAddress,
          shortseller: data?.shortseller,
          shortbuyer: `${data?.buyer == "Indo German International Private Limited" ? "IGPL" : "EISL"}`,
          sellerSignature: data?.sellerSignature,
          buyerSignature: data?.buyerSignature,
          dateOfExecution: data?.dateOfExecution,
          placeOfExecution: data?.placeOfExecution,
          details: data?.details,
          detailsOfEndBuyer: data?.detailsOfEndBuyer,
          detailsOfComm: data?.detailsOfComm,
          quan: data?.quan,
          unitPrice: data?.unitPrice,
          totalOrderValue: data?.totalOrderValue,
          lordPort: data?.lordPort,
          dischargePort: data?.dischargePort,
          lastDate: data?.lastDate,
          terms: data?.terms,
          // addComm: data?.addComm,
          addComm: [],
          spec: data?.spec,
          unitOfGrade: data?.unitOfGrade,
          unitOfQuantity: data?.unitOfQuantity,
          unitOfValue: data?.unitOfValue,
          curr: data?.orderCurrency,
          specComment: data?.specComment,
          
        })
      } else {

        const data = JSON.parse(sessionStorage.getItem("genericSelected"))
        console.log(data, "data22222")
        let exe;
        let dat = "";
        data?.placeOfExecution?.execution?.forEach((val, index) => {
          if (val.agreementName == "Sales Agreement") {
            exe = val.place
            if (val.dateOfExecution) {
              dat = moment(val.dateOfExecution).format("DD-MM-YYYY")
            }
          }
        })

        console.log(dat, exe, "exedasa")

        setData({
          seller: data?.seller?.name,
          buyer: data?.buyer?.name,
          sellerAddress:data?.seller?.name=="Indo Intertrade Ag"?"Industriestrasse 16, Zug,6300":"",
          buyerAddress:data?.buyer?.name?getAddress(data?.buyer):"",
          shortseller:data?.seller?.shortName,
          shortbuyer: `${data?.buyer?.name == "Indo German International Private Limited" ? "IGPL" : "EISL"}`,
          sellerSignature:data?.seller?.name,
          buyerSignature: data?.buyer?.name,
          dateOfExecution: dat,
          placeOfExecution: exe,
          details: data?.supplier?.name,
          detailsOfEndBuyer: "",
          detailsOfComm: data?.order?.commodity,
          quan: data?.order?.quantity,
          unitPrice: data.order?.perUnitPrice,
          totalOrderValue: data?.order?.marginMoney?.calculation?.orderValue ?? '',
          lordPort: data?.order?.termsheet?.transactionDetails?.loadPort,
          dischargePort: data?.order?.portOfDischarge,
          lastDate: data?.order?.shipmentDetail?.lastDateOfShipment,
          terms: `${data?.order?.termsheet?.transactionDetails?.partShipmentAllowed == "Yes" ? "Full" : "Partial"}`,
          // addComm: data?.additionalComments?.comments,
           addComm:[],
          spec: data?.productSpecifications?.specificationTable,
          specComment: data?.productSpecifications.comments,
          unitOfGrade: data?.order?.unitOfGrade,
          unitOfQuantity: data?.order?.unitOfQuantity,
          unitOfValue: data?.order?.unitOfValue,
          curr: data?.order?.orderCurrency,
          supplier:data?.supplier?.name,
          supplierAddress:_get(data,"supplier.addresses.[0].fullAddress",""),
          supplierAuthorized:_get(data,"supplier.authorisedSignatoryDetails",[]),
          buyerAuthorized:_get(data,"buyer.authorisedSignatoryDetails",[]),
          buyerEmail:"",
          supplierEmail:"",
          toleranceLevel:data?.order?.tolerance,
          incoTerms:data?.order?.termsheet?.transactionDetails?.incoTerms,
          financialBank:data?.financingBank?.name,
          financialAddress:"",
          associateBuyer:"ADANI PORTS AND SPECIAL ECONOMIC ZONE LIMITED",
          associateBuyerAddress:_get(data,"associateBuyer.addresses.[0].fullAddress",""),
          associateBuyerGst:data?.associateBuyer?.gstin,
          associateBuyerPan:"AAACG7917K",
          associateBuyerAuthorized:_get(data,"buyer.authorisedSignatoryDetails",[]),
          stevedore:data?.stevedore?.name,
          stevedoreAddress:_get(data,"stevedore.addresses.[0].fullAddress",""),
          stevedoreAuthorized:_get(data,"stevedore.authorisedSignatoryDetails",[]),
          cma:data?.CMA?.name,
          cmaAddress:"Embassy Chambers, 6th Floor, Plot No. 5, Road No. 3 ,Khar (West) Mumba",
          cmaAuthorized:_get(data,"CMA.authorisedSignatoryDetails",[]),
          vessel:"",
        })
      }
    }
  }, [props])
  return (
    <div className={`${styles.root}`}>
      
      <div className={`${styles.content} card border_color shadow-none`}>

        {qpa(data)}
        <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3`}>
          <div className={styles.reject}><span>Save</span></div>
          <div className={styles.approve}><span>Submit</span></div>

        </div>

      </div>
    </div>
  )
}

export default Index
const qpa=(data)=>{
  return(
    <div className={`${styles.cardBody} card-body pt-3`}>
       <p className="text-center text_sales"> <strong>Quadripartite Agreement</strong></p>
       <p className="text_sales">This Quadripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set out in <strong>Schedule I </strong>hereto by and between:
</p>
       <p className="text_sales"> <b>{data.buyer}</b> , a company incorporated under the Companies Act, 1956, having its registered office at <b>{data.buyerAddress}</b>  through its Authorised Signatory (hereinafter called <b>{data.shortbuyer}</b>, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the First Part,
</p>
 <p className="text-center text_sales">And</p>
       <p className="text_sales"><strong>Associate Buyer</strong>, as detailed in <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>Associate Buyer</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Second Part.

       
</p>
 <p className="text-center text_sales">And</p>

 <p className="text_sales"><strong>Stevedore</strong>(s), as detailed in <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>Stevedore/CHA</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Third Part.
</p>
 <p className="text-center text_sales">And</p>
 <p className="text_sales"><strong>CMA Agent</strong> (s), as detailed in <strong>Schedule I</strong> hereof (hereinafter referred to as the “<strong>CMA Agent</strong>”, which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Fourth Part.
</p>
 <p className=" text_sales">WHEREAS <b>{data.shortbuyer}</b> has agreed to import Goods as detailed in <strong>Schedule I </strong>hereof on stock and sale basis as per Associateship Agreement entered into between <b>{data.shortbuyer}</b> and the Associate Buyer.
</p>
 <p className="text_sales">WHEREAS <b>{data.shortbuyer}</b>has appointed the Stevedore for handling the vessel as detailed in <strong>Schedule I</strong> at Discharge Port. The complete details of vessel, Discharge port and the plot allotted to <b>{data.shortbuyer}</b>are mentioned at Schedule I.
</p>
 
<p className=" text_sales">WHEREAS the, LC opening Bank has  a first ranking security right over the Goods and it has appointed the CMA Agent in accordance with the terms of the Collateral Management Agreement executed by Financing Bank</p> 
<p className=" text_sales">IT IS NOW HEREBY AGREED BY AND BETWEEN THE PARTIES AS UNDER: -
</p> 
<ol type="1" className='pl-4'>
  <li><p className=" text_sales"> The Goods shall be stored at the Plot allotted to <b>{data.shortbuyer}</b> by the Discharge Port authorities and shall be kept under the control and custody of CHA on behalf of <b>{data.shortbuyer}</b>. All dispatches from the plot shall be done by CHA solely on the basis of Written Delivery Orders issued by <b>{data.shortbuyer}</b>. </p></li>
   <li>
    <p className=" text_sales"> Scope of Work of CHA: </p>
    <p className=" text_sales"> The Scope of work of CHA shall include but not be limited to: </p>
    <ol type="a" className='pl-3'>
      <li><p className=" text_sales">arranging plot allotment in the name of <b>{data.shortbuyer}</b> from the discharge Port authorities to store <b>{data.shortbuyer}</b>’s cargo</p></li>
       <li><p className=" text_sales">discharge of cargo from the Vessel,</p></li>
        <li><p className=" text_sales">loading of wharf, intra carting at Port, 
</p></li>
         <li><p className=" text_sales">deployment of labors and equipments,</p></li>

          <li><p className=" text_sales">transportation from wharf to <b>{data.shortbuyer}</b> allotted plot, ensure that the plot where goods are being stored is suitable for the storage of the goods, </p></li>
           <li><p className=" text_sales">segregated stacking cargo at plot grade wise, 
 </p></li>
            <li><p className=" text_sales">placement of wagon indents, wagon cleaning, wooden plugging </p></li>

             <li><p className=" text_sales">loading into wagons/trucks, leveling of cargo, lime marking on stacks and wagons, placing Railway Indents, Loading on wagons/trucks</p></li>
              <li><p className=" text_sales">Arranging round the clock security cover at the storage area,  </p></li>
               <li><p className=" text_sales">liaison with Discharge Port authorities </p></li>
                           <li>
                            <p className=" text_sales">obtaining RRs and arranging dispatches as per Written release orders issued by <b>{data.shortbuyer}</b>, 
obtaining gate passes, 
 </p></li>
                 <li><p className=" text_sales">yard management, </p></li>
                  <li><p className=" text_sales">maintenance of proper records and registers for incoming and outgoing of material,</p></li>
                   <li><p className=" text_sales">water sprinkling as per PCB norms and other services as may be required by <b>{data.shortbuyer}</b> </p></li>
                   
    </ol>
   
   </li>
    <li><p className=" text_sales"> Safekeeping and Security of the Goods-Proper safekeeping and security of Goods shall be the joint and several responsibilities of the Associate Buyer and Stevedore. The Associate Buyer and Stevedore shall provide round the clock security guards at the Storage Plot allotted at Discharge Port, where Goods shall be stored. <b>{data.shortbuyer}</b> shall in no way be responsible or liable for any loss or damage to the Goods for any reason whatsoever including shortage, theft or mix up.
 </p></li>
  <li><p className=" text_sales"> Bill of Entry to be filed in the name <b>{data.shortbuyer}</b>. Payment of customs duty, IGST, energy cess, Wharfage, CIMS and all other statutory charges shall be paid by the Associate Buyer to <b>{data.shortbuyer}</b> in advance at the time of Custom Clearance. The Associate Buyer shall pay Port Charges directly to port or through the Stevedore who will take care of the payments to Port and raise bills on IGI for this. A copy of the same has to be furnished to IGI. Any penalty/demurrage on account of delayed payment shall be solely to the account of the Associate Buyer
 </p></li>
 <li><p className=" text_sales">Port wharfage, pollution charges, plot rental, wagon haulage and terminal charges, Port Royalty (if applicable) are to be paid by the Associate Buyer in advance to <b>{data.shortbuyer}</b> as per the Discharge Port. HMC crane charges at the Discharge Port and any pre berthing delays/detentions/demurrages will be to the account of the Associate Buyer on actual basis.
 </p></li>
  <li><p className=" text_sales">CHA/Stevedore will raise invoice on the Associate Buyer and payments shall be made by the Associate Buyer to Stevedore based on the agreed rate terms & Conditions.  
 </p></li>
   <li><p className=" text_sales">CHA/Stevedore will apply for EDRM permission and place indent online. The Associate Buyer will pay the railway freight and related charges directly.
 </p></li>
  <li><p className=" text_sales">Scanned copy of RR shall be furnished by Stevedore to <b>{data.shortbuyer}</b> as well as to Associate Buyer as soon as it is issued after loading. The original RR shall be sent by Stevedore to the Associate Buyer for taking delivery of the rake. The final reconciliation shall be done based on the BL quantity.
 </p></li>
 <li><p className=" text_sales">The Associate Buyer will arrange comprehensive storage insurance against all risks for <GrowInput placeholder="110"></GrowInput> of the value of goods. The insurance policy will indicate <b>{data.shortbuyer}</b> or its nominated Bank (as per <b>{data.shortbuyer}</b>’s discretion), as sole beneficiary. The Associate Buyer shall inform Stevedore the details of the goods for which <b>{data.shortbuyer}</b>/IGI’s nominated Bank shall be the beneficiary for the entire insured value of such pledged goods as per the B/L, quantity kept in the custody of CHA/Stevedore. In case of any claim on insurance company the same shall be claimed and pursued till realization by the Associate Buyer at its sole cost and the Associate Buyer shall indemnify Stevedore and IGI against all risks.
 </p></li>
 <li><p className=" text_sales"><b>{data.shortbuyer}</b>  and CMA Agent (Collateral Manager appointed by LC opening Bank) shall have free and unfettered access to the plot where the goods are stored without any prior notice to the plot keeper during all reasonable hours including the right of ingress and egress to and from the plot by <b>{data.shortbuyer}</b> ’s and /or CMA Agent’s officials, agents, other nominated buyers, if any, of <b>{data.shortbuyer}</b>  and/or CMA Agent, its vehicles, any Government Agency, for storing/de-storing/removing the material in or from the plot without any hindrance or obstruction.  

 </p></li>
  <li><p className=" text_sales">The role of CMA Agent shall be to supervise the storage, ingress and exit of material at the storage area in accordance with the Collateral Management Agreement entered into by CMA Agent. The Stevedore and the Associate Buyer shall provide necessary support, help and assistance to CMA Agent as may be required by them at all times. CMA Agent’s Officials/ representatives/agents shall peacefully enjoy unrestricted and unfettered access to the Storage Area during the term or duration of this Agreement, without disturbance or interruption or obstruction from the Associate Buyer or Stevedore or any person claiming under them. Port safety precautions, indemnity as conveyed to the service providers and the Associate Buyer to be complied with at all times.

 </p></li>
  <li><p className=" text_sales">CHA/Stevedore shall at all times follow and be bound by the instructions solely of <b>{data.shortbuyer}</b> with regard to delivery of the Goods. Stevedore confirms and undertakes that it shall not release the Goods without the written Release Order of <b>{data.shortbuyer}</b>. Stevedore shall have no objection whatsoever, if <b>{data.buyer}</b> instructs it to deliver the Goods to any third party so nominated by them. The instructions of the <b>{data.buyer}</b> shall be followed forthwith, without any objection, hindrance or delay whatsoever

 </p></li>
 <li><p className=" text_sales">CHA/Stevedore shall maintain all records as necessary, statutorily or otherwise for the receipt, storage and release of goods from the warehouse and furnish a daily report to <b>{data.shortbuyer}</b> & the Associate Buyer. Under no circumstance releases will be made by Stevedore or be taken by the Associate Buyer without obtaining proper Release Order in writing from <b>{data.shortbuyer}</b>. Stevedore and the Associate Buyer jointly and severally agree to indemnify and hold harmless at all times <b>{data.shortbuyer}</b>, its officers, agents, employees for any losses, damages, claims, costs and expenses incurred by <b>{data.shortbuyer}</b> due to unauthorized, improper release of the Goods, shortage and/or for breach of the terms of this Agreement.


 </p></li>
  <li><p className=" text_sales">This Agreement is irrevocable and non-assignable by the Associate Buyer and Stevedore until the entire Goods stored at the storage facility have been delivered to the Associate Buyer, or to the persons nominated by <b>{data.shortbuyer}</b> under the Authorized Release Orders.



 </p></li>
 <li><p className=" text_sales">In the event the Associate Buyer does not lift the goods/material within the scheduled period <b>{data.shortbuyer}</b> has the right to sell/dispose of the Goods at the sole risk, cost of the Associate Buyer. The Associate Buyer shall liable to pay to <b>{data.shortbuyer}</b> the loss (if any) incurred by <b>{data.shortbuyer}</b>. 



 </p></li>
  <li><p className=" text_sales">Any disputes or differences in respect of any matter relating to or arising out of this Quadripartite Agreement between the parties hereto shall be settled mutually and if the same is not resolved amicably, then the same will be settled by Arbitration by a Sole Arbitrator in accordance with Rules of Arbitration formulated by Indian Council of Arbitration (ICA). The Award made in pursuance thereof shall be binding on the parties. The seat and venue of the Arbitration will be New Delhi and the language of Arbitration Proceedings shall be in English. 




 </p></li>
</ol>


<p className="text-center text_sales"> <strong>Schedule I</strong></p>
     <div className={`${styles.inputsContainer} border_black`}>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Date of execution</Col>
        <Col md={7 } className={styles.right}>{data.dateOfExecution}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Place of execution</Col>
        <Col md={7 } className={styles.right}>{data.placeOfExecution}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Name of Associate Buyer</Col>
        <Col md={7 } className={styles.right}>{data.associateBuyer}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Address of Associate Buyer</Col>
        <Col md={7 } className={styles.right}>{data.associateBuyerAddress}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>GST of Associate Buyer</Col>
        <Col md={7 } className={styles.right}>{data.associateBuyerGst}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>PAN of Associate Buyer</Col>
        <Col md={7 } className={styles.right}>{data.associateBuyerPan}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Signatory of Associate Buyer</Col>
        <Col md={7 } className={styles.right}>{''}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Name of Stevedore</Col>
        <Col md={7 } className={styles.right}>{data.stevedore}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Address of Stevedore</Col>
        <Col md={7 } className={styles.right}>{data.stevedoreAddress}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Signatory of Stevedore</Col>
        <Col md={7 } className={styles.right}>{''}</Col>
      </Row>
      <Row className={`${styles.row} border_black`}>
        <Col md={5} className={`${styles.left} border_black`}>Name of CMA Agent</Col>
        <Col md={7 } className={styles.right}>{data.cma}</Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Address of CMA Agent</Col>
        <Col md={7 } className={styles.right}>{data.cmaAddress}</Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Signatory of CMA Agent</Col>
        <Col md={7 } className={styles.right}></Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Commodity Details</Col>
        <Col md={7 } className={styles.right}>{data.detailsOfComm}</Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Quantity</Col>
        <Col md={7 } className={styles.right}>{data.quan?.toLocaleString('en-In', { maximumFractionDigits: 2 })}</Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Name of Supplier</Col>
        <Col md={7 } className={styles.right}>{data.supplier}</Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Details of Vessel</Col>
        <Col md={7 } className={styles.right}>{data.vessel}</Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Port of Loading</Col>
        <Col md={7 } className={styles.right}>{data.lordPort}</Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Port of Discharge</Col>
        <Col md={7 } className={styles.right}>{data.dischargePort}</Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={`${styles.left} border_black`}>Storage Plot allotted to IGI</Col>
        <Col md={7 } className={styles.right}></Col>
      </Row>
    
     
      
     </div>


      <p className=" text_sales"> <strong>SIGNATURE PAGE</strong></p>
      <div className={`row`}>
        <Col md={12} className={`d-flex justify-content-around`}>
           <p className="text_sales  m-0">(Seller)</p>
          <p className="text_sales  m-0">(Buyer)</p>
        
        </Col>
         <Col md={12} className={`d-flex justify-content-around`}>
           <div>{data.seller}</div>
          <div> {data.buyer}</div>
        
        </Col>
       
      </div>
</div>
  )
}
// const qpa1 = () => {
//   return (
//     <div className={`${styles.card_body} card-body `}>
//       <p>QUADRIPARTITE AGREEMENT BETWEEN <GrowInput type="text" className={styles.input_field} /> FOR STOCK MONITORING, CONTROL AND CUSTODY OF IMPORTED <GrowInput type="text" className={styles.input_field} /> ………………………… <GrowInput type="text" className={styles.input_field} />.</p>
//       <p>THIS QUADRIPARTITE AGREEMENT is made on the ……………………………, <GrowInput type="text" className={styles.input_field} />. BY AND BETWEEN</p>
//       {/* <p> <GrowInput type="text" className={styles.input_field} />, a company incorporated under the Companies Act, 1956, having its <GrowInput type="text" className={styles.input_field} /> at <GrowInput type="text" className={styles.input_field} /> and having its <GrowInput type="text" className={styles.input_field} /> at <GrowInput type="text" className={styles.input_field} /> duly signed by Ms. Bhawana Jain, Vice President  (hereinafter called <GrowInput type="text" className={styles.input_field} /> which expression shall, where subject and content allow or admit, be deemed to include its <GrowInput type="text" className={styles.input_field} />) of the First Part, 
//       </p> */}
//       <p>AND</p>
//       <p> <GrowInput type="text" className={styles.input_field} /> <strong>………………………………………………….,</strong> a company incorporated under the Indian Companies Act, 2013 having its/their <GrowInput className={styles.input_field} type="text" /> at …………………………………… and <GrowInput type="text" className={styles.input_field} /> at <strong>……………………………………………………………..</strong> <GrowInput type="text" className={styles.input_field} /> <strong>…………………………………..</strong> <GrowInput type="text" className={styles.input_field} /> represented through <GrowInput type="text" className={styles.input_field} /> <strong>………………….</strong> who is the Managing Director of the company duly authorized (hereinafter called “Associate Buyer”  <GrowInput type="text" className={styles.input_field} /> ‘’ <strong>………………..</strong>”) which expression shall, where subject and content allow or admit, be deemed to include its <GrowInput type="text" className={styles.input_field} />) of the Second Part.</p>
//       <p>AND</p>
//       <p><GrowInput type="text" className={styles.input_field} /><strong>……………………………..</strong>, having its office at <strong>…………………………………,</strong> having its Branch Office at <strong>…………………………………………………………………..</strong> represented by Mr. <strong>------------------------------------------------------------------</strong>(hereinafter referred to as “CHA/Stevedore” which expression shall, where subject and content allow or admit, be deemed to include its <GrowInput type="text" className={styles.input_field} /> ) of the Third Part.</p>
//       <p>AND</p>
//       <p><GrowInput type="text" className={styles.input_field} /> having its office <GrowInput type="text" className={styles.input_field} /> (hereinafter referred to as <GrowInput type="text" className={styles.input_field} /> which expression shall, where subject and content allow or admit, be deemed to include its successors, legal representatives and assigns) of the Forth  Part.
//       </p>
//       <p>WHEREAS <GrowInput type="text" className={styles.input_field} /> has agreed to import …………………….. MT of <GrowInput type="text" className={styles.input_field} /> of Indonesian Origin per vessel “M<GrowInput type="text" className={styles.input_field} /> …………………………” (hereinafter called “Goods”) from and <GrowInput type="text" className={styles.input_field} /> ……………………………………………………. sell to …………… on stock and sale basis as per Associateship Agreement No. ……………………….  dated ……………….., 2021.</p>
//       <p>WHEREAS <GrowInput type="text" className={styles.input_field} /> has appointed <GrowInput type="text" className={styles.input_field} /> …………………………. as its <GrowInput type="text" className={styles.input_field} /> (CHA/Stevedore) for the vessel <GrowInput type="text" className={styles.input_field} /> …………………. at ………….. Port.</p>
//       <p>WHEREAS ………………………………………….…………., LC opening Bank have a first ranking security right over the Goods and it has appointed <GrowInput type="text" className={styles.input_field} /> as the Collateral Manager in terms of the Collateral Management Agreement executed by Financing Bank. </p>
//       <ul className="text_sales">IT IS NOW HEREBY AGREED BY AND BETWEEN THE PARTIES AS UNDER:-
//         <br />
//         <br />
//         <li>
//           <GrowInput type="text" className={styles.input_field} /> has allotted <GrowInput type="text" className={styles.input_field} />…………………..&amp; Plot No……………………..to <GrowInput type="text" className={styles.input_field} /> to store Goods imported by <GrowInput type="text" className={styles.input_field} /> per vessel <GrowInput type="text" className={styles.input_field} /> ………………… The Goods shall be kept under the control and custody of CHA on behalf of <GrowInput type="text" className={styles.input_field} />. All dispatches from the plot shall be based on Delivery Orders issued by <GrowInput type="text" className={styles.input_field} />.
//         </li>
//         <br />
//         <br />
//         <li>
//           CHA/Stevedore’s scope of work includes arranging plot allotment in the name of <GrowInput type="text" className={styles.input_field} />, from <GrowInput type="text" className={styles.input_field} /> authorities to store <GrowInput type="text" className={styles.input_field} /> cargo, discharge of cargo from the vessel <GrowInput type="text" className={styles.input_field} /> …………………………, loading of wharf, intra carting at Port, deployment of labors and equipments, transportation from wharf to <GrowInput type="text" className={styles.input_field} /> allotted plot, ensure that the plot where goods are being stored is suitable for the storage of the goods, segregated stacking cargo at plot grade wise, placement of wagon indents, wagon cleaning, wooden plugging, loading into wagons/trucks, leveling of cargo, lime marking on stacks and wagons, placing Railway Indents, Loading on wagons/trucks, Arranging round the clock security cover at the storage area, placing railway indents, liaison with <GrowInput type="text" className={styles.input_field} />, railways, obtaining RRs and dispatch to ......................<GrowInput type="text" className={styles.input_field} /> plant, obtaining gate passes, yard management, maintenance of proper records and registers for incoming and outgoing of material, water sprinkling as per PCB norms and other services as may be required by <GrowInput type="text" className={styles.input_field} />.
//         </li>
//         <br />
//         <br />
//         <li>
//           Safekeeping and Security of the Goods-Proper safekeeping and security of Goods shall be the joint and several responsibility of “......................” and CHA/Stevedore. …………………….. and CHA/Stevedore shall Plot …………………………………..…………., provide round the clock security guards at the Storage yard bearing where Goods shall be stored. <GrowInput type="text" className={styles.input_field} /> shall in no way be responsible or liable for any loss or damage to the Goods for any reason whatsoever including shortage or theft.
//         </li>
//         <br />
//         <br />
//         <li>
//           Bill of Entry to be filed in the name <GrowInput type="text" className={styles.input_field} />. Payment of customs duty, IGST, energy cess, Wharfage , CIMS and all other statutory charges shall be paid by ...................... to <GrowInput type="text" className={styles.input_field} /> in advance at the time of Custom Clearance. ...................... shall pay Port Charges directly to port or through the CHA/Stevedore who will take care of the payments to Port and raise bills on <GrowInput type="text" className={styles.input_field} /> for this. A copy of the same has to be furnished to <GrowInput type="text" className={styles.input_field} />.  Any penalty/demurrage on account of delayed payment shall be to the account of .......................
//         </li>
//         <br />
//         <br />
//         <li>
//           Port wharfage, pollution charges, plot rental, wagon haulage and terminal charges, Port Royalty (if applicable) are to be paid by ...................... in advance to <GrowInput type="text" className={styles.input_field} /> as per <GrowInput type="text" className={styles.input_field} /> tariff. HMC crane charges at inner harbor (<GrowInput type="text" className={styles.input_field} />) and any pre berthing delays/detentions/demurrages will be t the account of  ...................... on actual basis.
//         </li>
//         <br />
//         <br />
//         <li>
//           CHA/Stevedore will raise invoice on ...................... and payments shall be made by ...................... to CHA/Stevedore based on the agreed rate terms &amp; Conditions.
//         </li>
//         <br />
//         <br />
//         <li>
//           CHA/Stevedore will apply for EDRM permission and place indent online. ...................... will pay the railway freight and related charges directly.
//         </li>
//         <br />
//         <br />
//         <li>
//           Scanned copy of RR shall be furnished by CHA/Stevedore to <GrowInput type="text" className={styles.input_field} /> as well as ...................... as soon as it is issued after loading. The original RR shall be sent by CHA/Stevedore to ...................... for taking delivery of the rake. The final reconciliation shall be done based on the BL quantity.
//         </li>
//         <br />
//         <br />
//         <li>
//           ...................... will arrange comprehensive storage insurance against all risks for <GrowInput type="text" className={styles.input_field} /> of the value of goods. The insurance policy will indicate <GrowInput type="text" className={styles.input_field} /> or its <GrowInput type="text" className={styles.input_field} /> (as per <GrowInput type="text" className={styles.input_field} />’s discretion), as sole beneficiary.  ...................... shall inform CHA/Stevedore the details of the goods for which <GrowInput type="text" className={styles.input_field} />/<GrowInput type="text" className={styles.input_field} />’s nominated Bank shall be the beneficiary for the entire insured value of such pledged goods as per the B/L, quantity kept in the custody of CHA/Stevedore. In case of any claim on insurance company the same shall be claimed and pursued till realization by ...................... at their cost and .................. shall indemnify CHA/Stevedore and <GrowInput type="text" className={styles.input_field} /> against all risks.
//         </li>
//         <br />
//         <br />
//         <li>
//           <GrowInput type="text" className={styles.input_field} /> and <GrowInput type="text" className={styles.input_field} /> (Collateral manager appointed by LC opening Bank) shall have free and unfettered access to the plot where the goods are stored without any prior notice to the plot keeper during all reasonable hours including the right of ingress and egress to and from the plot by <GrowInput type="text" className={styles.input_field} />’s and/or <GrowInput type="text" className={styles.input_field} />, agents, other nominated buyers, if any, of <GrowInput type="text" className={styles.input_field} /> and/or <GrowInput type="text" className={styles.input_field} />, its vehicles, any Government Agency, for storing/de-storing/removing the material in or from the plot without any hindrance or obstruction.
//         </li>
//         <br />
//         <br />
//         <li>
//           The role of <GrowInput type="text" className={styles.input_field} /> shall be to supervise the storage, ingress and exit of material at the storage area in accordance with the Collateral Management Agreement entered into by <GrowInput type="text" className={styles.input_field} />. The CHA/Stevedore and ...................... shall provide necessary support, help and assistance to <GrowInput type="text" className={styles.input_field} /> as may be required by them at all times. <GrowInput type="text" className={styles.input_field} /> shall peacefully enjoy unrestricted and unfettered access to the Storage Area during the term or duration of this Agreement, without disturbance or interruption or obstruction from ...................... or CHA/Stevedore or any person claiming under them.
//         </li>
//         <br />
//         <br />
//         <li>
//           CHA/Stevedore shall at all times follow and be bound by the instructions solely of <GrowInput type="text" className={styles.input_field} /> with regard to delivery of the Goods. CHA/Stevedore confirms and undertakes that it shall not release the Goods without the written Release Order of <GrowInput type="text" className={styles.input_field} />. CHA/Stevedore shall have no objection whatsoever, if Indo German instructs it to deliver the Goods to any third party so nominated by them. The instructions of the <GrowInput type="text" className={styles.input_field} /> shall be followed forthwith, without any objection, hindrance or delay whatsoever.
//         </li>
//         <br />
//         <br />
//         <li>
//           CHA/Stevedore shall maintain all records as necessary, statutorily or otherwise for the receipt, storage and release of goods from the warehouse and furnish a daily report to <GrowInput type="text" className={styles.input_field} /> &amp; ....................... Under no circumstance releases will be made by CHA/Stevedore or be taken by ...................... without obtaining proper Release Order in writing from <GrowInput type="text" className={styles.input_field} />. CHA/Stevedore and ...................... jointly and severally agree to indemnify and hold harmless at all times <GrowInput type="text" className={styles.input_field} />, its officers, agents, employees for any losses, damages, claims, costs and expenses incurred by <GrowInput type="text" className={styles.input_field} /> due to unauthorized, improper release of the Goods, shortage and/or for breach of the terms of this Agreement.
//         </li>
//         <br />
//         <br />
//         <li>
//           This Agreement is irrevocable and non-assignable by ...................... and CHA/Stevedore until the entire Goods stored at the storage facility have been delivered to ...................... under the Authorized Release Orders.
//           ......... and payments shall be made by ...................... to CHA/Stevedore based on the agreed rate terms &amp; Conditions.
//         </li>
//         <br />
//         <br />
//         <li>
//           In the event of ...................... does not lift the goods/material within the scheduled period <GrowInput type="text" className={styles.input_field} /> has the right to sell/dispose of the goods/material at the cost of ....................... ...................... shall liable to pay to <GrowInput type="text" className={styles.input_field} /> the loss (if any) incurred by <GrowInput type="text" className={styles.input_field} />.
//         </li>
//         <br />
//         <br />
//         <li>
//           Any disputes or differences in respect of any matter relating to or arising out of this Quadripartite Agreement between <GrowInput type="text" className={styles.input_field} />, ...................... and CHA/Stevedore shall be settled mutually and if the same is not resolved amicably, then the same will be settled by Arbitration in accordance with Rules of Arbitration formulated by <GrowInput type="text" className={styles.input_field} /> and the award made in pursuance thereof shall be final and binding on the parties.  The venue of the arbitration will be Singapore. The cost of Arbitration shall be borne by the ....................... The English Laws shall apply to this agreement.  The arbitrator shall give a reasoned award
//         </li>
//         <br />
//         <br />
//       </ul>
//       <p> Signed, executed and delivered on the day, month and year first above written.
//       </p>
//       <br />
//       <br />
//       <div className='d-flex justify-content-between align-items-center mr-4 ml-4 mb-5'>
//         <div >
//           <p className={`${styles.below_para} input`}>FOR &amp; ON BEHALF OF</p>
//           <GrowInput type="text" />
//           <br />
//           <br />
//           <p>Authorised Signatory</p>
//           <br />
//           <br />
//           <p className={`${styles.below_para} input`}>FOR &amp; ON BEHALF OF</p>
//           <p><GrowInput type="text" /><strong>………………………….</strong></p>
//           <br />
//           <br />
//           <p>Authorised Signatory</p>

//         </div>
//         <div className='pt-3'>
//           <p className={`${styles.below_para} input`}>FOR &amp; ON BEHALF OF</p>
//           <p><strong>………………………………...</strong></p>
//           <br />
//           <br />
//           <GrowInput type="text" />
//           <p>(Name <span>.........</span>)</p>
//           <br />
//           <p className={`${styles.below_para} input`}>FOR &amp; ON BEHALF OF</p>
//           <GrowInput type="text" />
//           <br />
//           <br />
//           <p>Authorised Signatory</p>

//         </div>
//       </div>
//     </div>
//   )
// }