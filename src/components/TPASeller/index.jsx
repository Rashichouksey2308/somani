import React from 'react'
import styles from './index.module.scss'
import {Row, Col} from "react-bootstrap"
import GrowInput from '../GrowInput'

function index() {
  return (
    <div className={`${styles.root}`}>
     
      <div className={`${styles.content} card`}>
          
           {tripartiteAgreement()}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div>

      </div>
    </div>
  )
}

export default index
const tripartiteAgreement=()=>{
  return(
    <>
     <div className="card-body">
       <p className="text-center text_sales"> <strong><u>TRIPARTITE AGREEMENT</u></strong></p>
       <p className="text_sales">This Tripartite Agreement (“<strong>Agreement</strong>”) is made at the place and on the day as set out in <strong>Schedule I</strong> hereto by and between:</p>
       <p className="text_sales"><GrowInput placeholder="INDO INTERTRADE AG"></GrowInput>, a company organized and existing in accordance with Law of Switzerland and having address at <GrowInput placeholder="Industriestrasse 16, Zug 6300"></GrowInput> through its Authorized Signatory (hereinafter referred to as the &quot;<strong>Buyer</strong>&quot;, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the First Part.</p>
       <p className="text_sales">And</p>
       <p className="text_sales"><strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Supplier</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the Second Part.</p>
       <p className=" text_sales">And</p>
       <p className="text_sales"><strong>End Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>End Buyer</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the Third Part.
</p>
       <p className="text_sales">The Buyer, Supplier and the End Buyer shall hereinafter, for the sake of brevity and convenience, be referred to individually as &quot;Party&quot; and collectively as the &quot;Parties&quot;.</p>
       <p className="text_sales" ><strong>WHEREAS,</strong></p>
       <ol type="A" className='pl-4'>
        <li><p className="text_sales mb-0">Supplier has entered into a Sales Contract with Buyer for Sale &amp; Purchase of Goods as details in Schedule -1</p></li>
        <li><p className="text_sales mb-0">Buyer has entered into the Sales Contract with Supplier solely at the request of End Buyer and to facilitate the End Buyer.</p></li>
        <li><p className="text_sales mb-0">In view of the aforesaid, parties have entered into this binding Agreement.</p></li>
       </ol>
       <p className="text_sales"> <strong>NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER</strong></p>
        <ol type="1" className='pl-4'>
        <li><p className="text_sales">That it is expressly clarify and agreed to amongst the parties that the Buyer has entered into the Sales Contract solely at the request and to facilitate the End Buyer.</p></li>
        <li><p className="text_sales">All terms of the Sales Contract have already been discussed and agreed between the Supplier and End Buyer.</p></li>
        <li><p className="text_sales">The role of Buyer is limited to establishment of Letter of Credit (“LC”) in favor of Supplier subject to the End Buyer fulfilling its contractual obligations towards the Buyer.</p></li>
        <li><p className="text_sales">The End Buyer and Supplier therefore, are fully liable and responsible at all times for performance of the Sales Contract including but not limited to making financial arrangements, timely nomination/acceptance of vessel, settlement of any and all quality/quantity claims, delayed/no shipment issues, demurrage / dispatch amounts, and/or any other claims or liability arising due to execution of the sales contract. All such claims, liabilities etc., shall be addressed, discussed and settled directly between the Supplier and End Buyer with no reference and liability on the part of Buyer whatsoever.</p></li>
        <li><p className="text_sales">Supplier will not hold discharge and/or delivery of cargo to the Buyer/Buyer's nominees for any reason whatsoever once LC is issued by the Buyer.</p></li>
        <li><p className="text_sales">In case of any conflict between the Sales Contract and this Agreement, the terms of this Agreement will prevail.</p></li>
        <li><p className="text_sales">In case of any conflict between the Sales Contract and this Agreement, the terms of this Agreement will prevail.</p></li>
        <li><p className="text_sales">In any case, End Buyer shall remain responsible for the performance of the Sales Contract, including any failure or delay in the issuance of the LC in accordance with the terms of the Sales Contract.</p></li>
        <li><p className="text_sales">This Agreement is subject to English laws, and any disputes arising out of this Agreement shall be referred to arbitration as per rules of Singapore International Arbitration Center (SIAC) by a sole arbitrator. The seat and venue of arbitration shall be Singapore and the language of Arbitration Proceedings shall be in English.</p></li>       
      </ol>   
     <p className="text-center text_sales"> <strong>Schedule I</strong></p>
     <div className={`${styles.inputsContainer}`}>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Date of execution</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Place of execution</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Name of Supplier</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Address of Supplier</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Authorized signatory of Supplier</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Email ID of Supplier</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Name of End buyer</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Authorized signatory of End Buyer</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Email ID of End Buyer</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Details of Goods as per Sales Contract</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
   
      
     </div>
     

      <div className={`row`}>
        <Col md={12} className={`d-flex justify-content-around`}>
          <p className="text_sales  m-0"><strong>Buyer</strong></p>
          <p className="text_sales">Authorised Signatory</p>
        </Col>
         <Col md={12} className={`d-flex justify-content-around`}>
          <p className="text_sales m-0"><strong>Supplier	</strong></p>
          <p className="text_sales">Authorised Signatory</p>

        </Col>
         <Col md={12} className={`d-flex justify-content-around`}>
          <p className="text_sales  m-0"><strong>End Buyer	</strong></p>
          <p className="text_sales">Authorised Signator</p>
        </Col>
      </div>
     </div>

    
    </>
  )
}
const tpaSeller=()=>{
  return(
    <div className={`${styles.cardBody} card-body pt-3`}>
        <h3 className={`${styles.heading} text-center`}><span>TRIPARTITE AGREEMENT</span></h3>
        <p className='text-center'>This tripartite Agreement made on this 21st day of August, 2021 by and among below parties:-</p>
        <p><GrowInput type="text" placeholder='MULIA GREEN RESOURCES PTE LTD'/>, having its registered office at <GrowInput type='text' placeholder='220 Orchard Road # 05-01, MidPoint Orchard, Singapore 238852'/> through its authorized signatory included its successors, administrators etc. (hereinafter referred to as the 	&quot; SELLER 	&quot;); which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns.</p>
        <p>And</p>
        <p><GrowInput type="text" placeholder='INDO INTERNATIONAL TRADING FZCO'/>, a company organized and existing in accordance with Law of UAE and having registered address at <GrowInput type='text' placeholder='JAFZA VIEW-18, LOB-180504, JEBEL ALI, DUBAI, UAE'/> through its authorized signatory which included its successors, administrator setc. (hereinafter referred to as the 	&quot;BUYER	&quot;), which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns.</p>
        <p>And</p>
        <p><GrowInput type="text" placeholder='MOHIT MINERALS LIMITED'/>, having its registered office address at <GrowInput type="text" placeholder='7/23, Kirti Nagar Industrial Area, New Delhi 110015, India'/> through its authorized signatory which included its successors, administrators etc (Hereinafter referred to as 	&quot;ULTIMATE BUYER	&quot;=, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns).</p>
        <p><GrowInput type="text" placeholder='MULIA GREEN RESOURCES PTE LTD. (Seller), INDO INTERNATIONAL TRADING FZCO (Buyer) and MOHIT MINERALS LIMITED'/> (Ultimate Buyer) shall hereinafter, for the sake of brevity and convenience, be referred to individually as 	&quot;Party	&quot; and collectively as the 	&quot;Parties	&quot;.</p>
        <p>WHEREAS:-</p>
        <ol className={styles.alpha}>
          <li>SELLER has entered into a Contract with BUYER for Sale &amp; Purchase <GrowInput type="text" placeholder='of STEAM (NON COKING) COAL IN BULK OF INDONESIAN ORIGIN'/> (Goods) vide Sales Contract No. ………………… dated ………………… (“Sales Contract”)</li>
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
          <GrowInput type="text" placeholder='For MULIA GREEN RESOURCES PTE LTD. (SELLER)'/>
          <p>Authorised Signatory</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <GrowInput type="text" placeholder='For INDO INTERNATIONAL TRADING FZCO. (BUYER)'/>
          <p>Authorised Signatory</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <GrowInput type="text" placeholder='For MOHIT MINERALS LIMITED. (ULTIMATE BUYER)'/>
          <p>Authorised Signatory</p>
        </div>
    </div>
  )
}