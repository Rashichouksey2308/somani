import React from 'react'
import styles from './index.module.scss'
import {Row, Col} from "react-bootstrap"
import GrowInput from '../GrowInput'

function index() {
  return (
    <div className={`${styles.root}`}>
   
      <div className={`${styles.content} card`}>
         
          
                                        
           {assignmentSupplier()}
           <div className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`} >
              <div className={styles.reject}><span>Save</span></div>
        <div className={styles.approve}><span>Submit</span></div>                                
                                               
                                           
          </div>

      </div>
    </div>
  )
}

export default index
const assignmentSupplier=()=>{
  return(
    <>
     <div className="card-body">
       <p className="text-center text_sales"> <strong><u>Assignment Letter between Seller, Buyer and Supplier</u></strong></p>
       <p className="text_sales">This Assignment Letter is made at the place and on the day as set out in <strong>Schedule I</strong> hereto by and between:</p>
       <p className="text_sales"><strong>Seller</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Seller</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the First Part.</p>
       <p className=" text-center text_sales">And</p>
       <p className="text_sales"><strong>Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Buyer</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the Second Part.</p>
       <p className=" text-center text_sales">And</p>
       <p className="text_sales"><strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Supplier</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the Third Part.</p>
       <p className="text_sales">WHEREAS it is hereby agreed that the Supplier accepts that the payment of the goods shall be made by way of a Letter of Credit (LC) to be issued on the applicant of Seller and Supplier will sell quantity of Goods approximately mentioned in Schedule I to Seller for exclusive use by Buyer under the terms and conditions contained within the Sales Contract dated mentioned in Schedule I (“Contract”) by and between Supplier and Buyer, with the quality and price of goods as agreed between them with tolerance level as mentioned in Schedule I and contained in the Sales Contract dated mentioned in Schedule I.</p>
       <p className="text_sales" >WHEREAS it has been agreed between the parties that the goods are to be loaded by the Supplier in the month mentioned in Schedule I, at a price mentioned in Schedule I. </p>
       <p className="text_sales" >WHEREAS the Buyer hereby confirms to remain responsible for the performance of the said sales contract, including any failure or delay in the issuance of LC in accordance with the terms of the sales contract and this assignment letter. Further, Buyer shall remain ultimately responsible for payment of the price in the event where Supplier is unable to obtain payment under the LC and hereby agree to indemnify Supplier for any loss, damage or expense including, without limitation, any liability, Supplier may incur to the Seller by reason of the Invoice being addressed to Seller.</p>
       <p className="text_sales">The title in Goods shall pass on to Seller upon receipt of payment by Supplier from the Seller and the risks associated therewith shall pass on to Buyer as per Incoterms 2020. Buyer shall be solely responsible for performance of the obligations enumerated in the sales contract mentioned herein above. The supplier shall have no claim whatsoever.
</p>
     <p className="text-center text_sales"> <strong>Schedule I</strong></p>
     <div className={`${styles.inputsContainer}`}>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Place of execution of  Assignment Letter</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Date of execution of Assignment Letter</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Name of Seller</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Address of Seller</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Name of Buyer</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Address of Buyer</Col>
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
        <Col md={5} className={styles.left}>Description of Goods</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Quantity of Goods in MT</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Date of execution of Assignment Letter</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Price of Goods / MT</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Tolerance levels</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Load Port</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Discharge Port</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Inco-Terms</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row}`}>
        <Col md={5} className={styles.left}>Month of loading of Cargo</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      <Row className={`${styles.row} ${styles.last}`}>
        <Col md={5} className={styles.left}>Date of Sales Contract between Supplier and Buyer</Col>
        <Col md={7 } className={styles.right}><input className={`${styles.para} input`}></input></Col>
      </Row>
      
     </div>
      <p className=" text_sales"> <strong>SIGNATURE PAGE</strong></p>

      <div className={`row`}>
        <Col md={6}>
          <p className="text_sales  m-0"><strong>.................................................</strong></p>
          <p className="text_sales"><strong>(Seller)</strong></p>
        </Col>
         <Col md={6}>
          <p className="text_sales m-0"><strong>.................................................</strong></p>
          <p className="text_sales"><strong> 
</strong></p>
        </Col>
         <Col md={6}>
          <p className="text_sales  m-0"><strong>.................................................</strong></p>
          <p className="text_sales"><strong>(Shipper)
</strong></p>
        </Col>
      </div>
     </div>

    
    </>
  )
}
// const assignment=()=>{
//   return(
//     <div className={`${styles.card_body} card-body `}>
//     <h5 className={styles.sub_heading}>Assignment Letter between: </h5>

//       <GrowInput  type="text" className={`${styles.para} input `} />
//       <GrowInput  type="text" className={`${styles.para} input `} />
      
//       <p>and</p>
//       <p><GrowInput type="text"/>, registered under the Trade Register of Paris under the number<GrowInput  type="text" className={`${styles.para} input `}  />, whose head office is at <GrowInput  className={`${styles.para} input `} eholder = "10 boulevard de Grenelle – CS 63205 – 75015 Paris – FRANCE (“the Seller or Producer”)" />.
//       </p>
//       <p>It is hereby agreed that the Seller will accept that the payment for the commodity - approximately <GrowInput  type="text"  className={`${styles.para} input `}  /> under the  <GrowInput  type="text"  className={`${styles.para} input `}/> by and between the Seller and Hira Power and Steels Ltd (“Buyer”) is to be made by way of a Letter of Credit (L/C), to be issued on the applicant of Indo International Trading FZCO as per the above-mentioned Contract.  The commodity is for use by Hira Power and Steels Ltd (“the Buyer”) only under the terms and conditions contained within the Sales Contract.
//       </p>
//       <p>The Buyer hereby confirms to remain responsible for the performance of the said contact, including any failure or delay in the issuance of the L/C in accordance with the terms of the contract and this letter.  Further Hira Power and Steels Ltd (“Buyer”) shall remain ultimately responsible for payment of the price in the event that the Seller is unable to obtain payment under the L/C, and hereby agree to indemnify the Seller for any loss, damage or expense including, without limitation, any liability Eramet Marketing Services (“the Seller”) may incur to Indo International Trading FZCO by reason of the invoice being addressed to Indo International Trading FZCO.
//       </p>
//       <p className="text_sales">Yours faithfully,
//       <br/>
//       <br/>
//       <br/>
//       <br/>
     
//       </p>
//      <div className='mr-4'>
//       <div className='d-flex justify-content-between align-items-center'>
//         <div>
//         <strong>………………………………………………………</strong>
//       <br/>
//       <strong>………………………………………………………</strong>
//       <br/>
//       <GrowInput type="text" className={`${styles.para} input`} />
//       <br/>
//       <br/>
      
//       </div>
//       <GrowInput type="text" className={`${styles.para} input `} />

//       </div>
//       <p className='mt-5'>
//       <strong>………………………………………………………</strong>
     
//       <br/>
//       <GrowInput type="text" className={`${styles.para} input `} />

//       </p>
//       </div>

//       </div>



          
         
//   )
// }