import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import {Row,Col,Container,Card} from 'react-bootstrap'
import Paginatebar from '../Paginatebar'
import TermsheetPopUp from '../TermsheetPopUp'
import { Form } from 'react-bootstrap'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'





function Index() {
    const dispatch = useDispatch()
  const { termsheet } = useSelector((state) => state.order)


    const [termsheetDetails, setTermsheetDetails] = useState({})
    const [otherTermConditions, setOtherTermConditions] = useState({})


    useEffect(() => {
        {
            termsheet && termsheet?.data?.map((sheet) => (
                setTermsheetDetails({
                termsheetId: sheet?._id,
                    commodityDetails: {
                        unitOfQuantity: sheet?.order?.unitOfQuantity,
                        orderCurrency: sheet?.order?.orderCurrency,
                        quantity: sheet?.order?.quantity,
                        perUnitPrice: sheet?.order?.orderValue,
                        commodity: sheet?.order?.commodity,
                        tolerance: sheet?.order?.tolerance,
                    },
                    transactionDetails: {
                        lcValue: 0,
                        lcCurrency: sheet?.transactionDetails?.lcValue,
                        marginMoney: sheet?.transactionDetails?.marginMoney,
                        lcOpeningBank: sheet?.transactionDetails?.lcOpeningBank,
                        incoTerms: sheet?.order?.incoTerm,
                        loadPort: sheet?.transactionDetails?.loadPort,
                        countryOfOrigin: sheet?.transactionDetails?.countryOfOrigin,
                        shipmentType: sheet?.transactionDetails?.shipmentType,
                        partShipmentAllowed: sheet?.transactionDetails?.partShipmentAllowed,
                        portOfDischarge: sheet?.transactionDetails?.portOfDischarge,
                        billOfEntity: sheet?.transactionDetails?.billOfEntity,
                        thirdPartyInspectionReq: sheet?.transactionDetails?.thirdPartyInspectionReq,
                        storageOfGoods: sheet?.transactionDetails?.storageOfGoods,
                    },
                    paymentDueDate: {
                        computationOfDueDate: sheet?.paymentDueDate?.computationOfDueDate,
                        daysFromBlDate: sheet?.paymentDueDate?.daysFromBlDate,
                        daysFromVesselDischargeDate: sheet?.paymentDueDate?.daysFromVesselDischargeDate
                    },
                    commercials: {
                        tradeMarginPercentage: sheet?.commercials?.tradeMarginPercentage,
                        lcOpeningValue: sheet?.commercials?.lcOpeningValue,
                        lcOpeningCurrency: sheet?.commercials?.lcOpeningCurrency,
                        lcOpeningChargesUnit: sheet?.commercials?.lcOpeningChargesUnit,
                        lcOpeningChargesPercentage: sheet?.commercials?.lcOpeningChargesPercentage,
                        usanceInterestPercetage: sheet?.commercials?.usanceInterestPercetage,
                        overDueInterestPerMonth: sheet?.commercials?.overDueInterestPerMonth,
                        exchangeFluctuation: sheet?.commercials?.exchangeFluctuation,
                        forexHedging: sheet?.commercials?.forexHedging,
                        otherTermsAndConditions: sheet?.commercials?.otherTermsAndConditions,
                        version: sheet?.commercials?.version,
                    },
                })
            ))
        }
    }, [termsheet]);

    useEffect(() => {
        {
            termsheet && termsheet?.data?.map((sheet, index) => {
                setOtherTermConditions({
                    chaOrstevedoringCharges: {
                        customClearingCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.customClearingCharges,
                        wharfaceCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.wharfaceCharges,
                        pollutionCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.pollutionCharges,
                        royalyAndPenaltyCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.royalyAndPenaltyCharges,
                        tarpaulinCoverageCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.tarpaulinCoverageCharges,
                        wheighmentAndWeighmentSurveyCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.wheighmentAndWeighmentSurveyCharges,
                        draughtSurveyCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.draughtSurveyCharges,
                        boatingWhileDraughtSurveyCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.boatingWhileDraughtSurveyCharges,
                        hmcCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.hmcCharges,
                        securityCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.securityCharges,
                        piotRentalAndStorageCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.piotRentalAndStorageCharges,
                        bondingOfCargoCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.bondingOfCargoCharges,
                        exBondDocumentationCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.exBondDocumentationCharges,
                        transferOfOwnershipCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.transferOfOwnershipCharges,
                        customsBondOfficerOvertimeCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.customsBondOfficerOvertimeCharges,
                        grabHireCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.grabHireCharges,
                        craneHireCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.craneHireCharges,
                        handlingLosses: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.handlingLosses,
                        insuranceCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.insuranceCharges,
                        waterSprinklingCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.waterSprinklingCharges,
                        others: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.others
                    },
                    lcOpeningCharges: {
                        lcOpeningCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.lcOpeningCharges,
                        lcAmendmentCost: sheet?.otherTermsAndConditions?.lcOpeningCharges?.lcAmendmentCost,
                        cmaFeesIncludingSupervisionAndSurvey: sheet?.otherTermsAndConditions?.lcOpeningCharges?.cmaFeesIncludingSupervisionAndSurvey,
                        bankDoIssuanceCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.bankDoIssuanceCharges,
                        remmittanceCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.remmittanceCharges,
                        usanceInterest: sheet?.otherTermsAndConditions?.lcOpeningCharges?.usanceInterest
                    },
                    otherCharges: {
                        demurrageOrDetentionChargesOfVessel: sheet?.otherTermsAndConditions?.otherCharges?.demurrageOrDetentionChargesOfVessel,
                        transportationCharges: sheet?.otherTermsAndConditions?.otherCharges?.transportationCharges,
                        wagonHaulageCharges: sheet?.otherTermsAndConditions?.otherCharges?.wagonHaulageCharges,
                        thirdPartyInspectionCharges: sheet?.otherTermsAndConditions?.otherCharges?.thirdPartyInspectionCharges,
                        hedgingCharges: sheet?.otherTermsAndConditions?.otherCharges?.hedgingCharges,
                        anyOtherCostIncurredOnBehalfOfBuyer: sheet?.otherTermsAndConditions?.otherCharges?.anyOtherCostIncurredOnBehalfOfBuyer
                    },
                    dutyAndTaxes: {
                        customsDutyWithAllGovtCess: sheet?.otherTermsAndConditions?.dutyAndTaxes?.customsDutyWithAllGovtCess,
                        igstWithCess: sheet?.otherTermsAndConditions?.dutyAndTaxes?.igstWithCess,
                        cimsCharges: sheet?.otherTermsAndConditions?.dutyAndTaxes?.cimsCharges
                    },
                    insurance: {
                        marineInsurance: sheet?.otherTermsAndConditions?.insurance?.marineInsurance,
                        storageInsurance: sheet?.otherTermsAndConditions?.insurance?.storageInsurance
                    }
                })
            })
        }

    }, [termsheet])


    const [open,setOpen] =useState(false)
    const openbar=()=>{
        setOpen(true)
    }
    const close=()=>{
        setOpen(false)
    }
  return (
      
      <>
       <div className={`${styles.root_container} tabHeader`}>
      <div  className={styles.head_container}>
        <div className={styles.head_header}>
          <img className={styles.arrow}
            src="/static/keyboard_arrow_right-3.svg" alt="Arrow" />
          <h1 className={`${styles.heading} heading`}>Termsheet Preview</h1>
        </div>
      </div>
    <div  className={`${styles.term_container} mb-3 mt-3 container-fluid`}>
       <Row className={`h-50`}>
         <Col md={4} className={`d-flex justify-content-start align-items-start`}>
        {termsheet && termsheet?.data?.map((sheet, index) => (
          <div key={index}>
          <div>
            <span className={styles.termSub_head}>Order ID:</span>
            <span className={styles.termValue}>{sheet.order.orderId}</span>   
            </div>
           <div className={`mt-1`}>
            <span className={styles.termSub_head}>Buyer:</span>
            <span className={styles.termValue}>{sheet.company.companyName}</span>
            </div>
          </div>

           
       ))}

           </Col>
            <Col md={4} className={`d-flex justify-content-center align-items-center`}>
           <span>TERMSHEET</span>
           </Col>
            <Col md={4} className={`d-flex justify-content-end  align-items-end`}>
           <div><span className={styles.termSub_head}>Date:</span> <span className={styles.termValue}>22-02-2022</span></div>
           </Col>
        
       </Row>
       
      </div>
      {/* <div  className={`${styles.term_container} mb-3 mt-3 container-fluid`}>
       <Row className={`h-50`}>
           <Col sm={12} className={`d-flex justify-content-center align-items-center`}>
           <span>TERMSHEET</span>
           </Col>
       </Row>
       {termsheet && termsheet?.data?.map((sheet, index) => (
        <Row key={index}  className={`h-50`}>
        
           <Col md={6} sm={6} xs={6} className={`d-flex justify-content-start align-items-center`}>
           <div><span className={styles.termSub_head}>Buyer:</span><span className={styles.termValue}>{sheet.company.companyName}</span></div>
           </Col>
            <Col md={6} sm={6} xs={6} className={`d-flex justify-content-end  align-items-center`}>
           <div><span className={styles.termSub_head}>Order ID:</span> <span className={styles.termValue}>{sheet.order.orderId}</span></div>
           </Col>
           
       </Row>))}
      </div> */}
      <Card className={styles.content}>
       <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4} sm={6} xs={6}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Commodity Details</span>
            
            </Col>
            <Col md={8}  sm={6} xs={6}>{""}</Col>
            </Row>
            <Row> 
            <Col md={4} sm={6} xs={6} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                   <li>1. Commodity Name</li>
                   <li>2. Quantity</li>
                   <li>3. Unit Price</li>
             </ol>
            
            </Col>
            <Col md={8} sm={6} xs={6}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>{termsheetDetails?.commodityDetails?.commodity}</li>
                <li>{termsheetDetails?.commodityDetails?.unitOfQuantity} MT (± 10%)</li>
                <li>USD {termsheetDetails?.commodityDetails?.perUnitPrice}/MT</li>
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  sm={6} xs={6} className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Transaction Details</span>
            
            </Col>
            <Col md={8}  sm={6} xs={6}>{""}</Col>
          </Row>
          <Row>
            <Col md={4}  sm={6} xs={6} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>4. LC Value</li>
                  <li>5. LC opening Bank</li>
                   <li>6. Margin Money as % of Import Valuee</li>
             </ol>
            
            </Col>
            <Col md={8}   sm={6} xs={6} className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>USD {termsheetDetails?.transactionDetails?.lcValue}</li>
                  <li>{termsheetDetails?.transactionDetails?.lcOpeningBank}</li>
                   <li>{termsheetDetails?.transactionDetails?.marginMoney}%T</li>
             </ul>
            </Col>
        </Row>
       </div>
       
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  sm={6} xs={6}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Payment Due Date</span>
            
            </Col>
            <Col md={8}  sm={6} xs={6}>{""}</Col>
          </Row>
          <Row>
            <Col md={4}  sm={6} xs={6} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>7. Computation of Due Date*</li>
          
             </ol>
            
            </Col>
            <Col md={8}  sm={6} xs={6}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>{termsheetDetails.paymentDueDate?.computationOfDueDate}</li>
                 
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  sm={6} xs={6}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Storage Of Goods</span>
            
            </Col>
            <Col md={8}  sm={6} xs={6}>{""}</Col>
          </Row>
          <Row>
            <Col md={4}  sm={6} xs={6} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>8. Storage of Good</li>
                  
             </ol>
            
            </Col>
            <Col md={8}  sm={6} xs={6}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li>{termsheetDetails?.transactionDetails?.storageOfGoods}</li>
                 
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  sm={6} xs={6}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Commercials Terms</span>
            
            </Col>
            <Col md={8}  sm={6} xs={6}>{""}</Col>
          </Row>
          <Row>
            <Col md={4}  sm={6} xs={6} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>10. Trade Margin (%)</li>
                 <li>11. LC Opening Charges (Minimum)</li>
                 <li>12. LC Opening Charges (%)</li>
                 <li>13. Usance Interest (%) For 90 Days</li>
                 <li>14. Overdue Interest per Month (%)</li>
                 <li>15. Exchange Fluctuation</li>
                 <li>16. Other Terms</li>
                  
             </ol>
            
            </Col>
            <Col md={8}  sm={6} xs={6}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 <li> {termsheetDetails.commercials?.tradeMarginPercentage} </li>
                 <li> {termsheetDetails.commercials?.lcOpeningChargesUnit} </li>
                 <li> {termsheetDetails.commercials?.lcOpeningChargesPercentage} </li>
                 <li> {termsheetDetails.commercials?.lcOpeningChargesPercentage}</li>
                 <li> {termsheetDetails.commercials?.overDueInterestPerMonth}</li>
                 <li> {termsheetDetails.commercials?.exchangeFluctuation}</li>
                 <li> {termsheetDetails.commercials?.otherTermsAndConditions}</li>
                  
                 
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  sm={6} xs={6}  className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Reimbursement Of Expenses</span>
            
            </Col>
            <Col md={8}  sm={6} xs={6}>{""}</Col>
          </Row>
          <Row>
            <Col md={4}   sm={6} xs={6} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>17. Reimbursement of Expenses</li>
                  
                  
             </ol>
            
            </Col>
            <Col md={8}   sm={6} xs={6} className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 
                 <li>Post CFR expenses to be reimbursed on actual basis if applicable as attached.</li>
                   
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}   sm={6} xs={6} className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}>
             
            <span>Additional Comments</span>
            
            </Col>
            <Col md={8}  sm={6} xs={6}>{""}</Col>
          </Row>
          <Row>
            <Col md={4}  sm={6} xs={6} className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}>
             
             <ol>
                 <li>18. Overdue Interest Per Month (%)</li>
                   <li>19. Exchange Fluctuation</li>
                  
             </ol>
            
            </Col>
            <Col md={8}  sm={6} xs={6}  className={`${styles.sub_contentValue} accordion_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}>
                 <ul>
                 
                 <li>{termsheetDetails?.commercials?.overDueInterestPerMonth}%</li>
                   <li>{termsheetDetails.commercials?.exchangeFluctuation}</li>
             </ul>
            </Col>
        </Row>
       </div>
        <div>
        <Row className={`${styles.row_head} row_head`}>
            <Col md={4}  sm={6} xs={6} className={`${styles.content_header_other}  d-flex justify-content-center align-content-center`}>
             
            <span>Other Terms & Conditions</span>
            
            </Col>
            <Col md={8}  sm={6} xs={6}>{""}</Col>
          </Row>
          <Row>
            <Col md={12} className={`${styles.sub_content_other} accordion_Text label_heading  d-flex justify-content-start align-content-center`}>
            {termsheetDetails.commercials?.otherTermsAndConditions}
            
            
            </Col>
         
        </Row>
       </div>
       
         <div className={styles.dashboard_form}>       
            <Form>
               
                <div className='row'>              
                    <div className={`${styles.form_group} mt-5 col-md-6`} >
                        <h3 className={`${styles.other_heading} row_head`}>CHA / Stevedoring Charges</h3>
                        <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                        <div className='pt-4 d-flex align-items-center'>
                                        <input id='wharfaceCharges' className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.wharfaceCharges}  />
                                        <label className={styles.checkbox_label}>Wharfage Charges </label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="pollutionCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.pollutionCharges}  />
                                        <label className={styles.checkbox_label}>Pollution charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="royalyAndPenaltyCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.royalyAndPenaltyCharges}  />
                                        <label className={styles.checkbox_label}>Royalty and Penalty Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="tarpaulinCoverageCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.tarpaulinCoverageCharges}  />
                                        <label className={styles.checkbox_label}>Tarpaulin Coverage Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="wheighmentAndWeighmentSurveyCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.wheighmentAndWeighmentSurveyCharges}  />
                                        <label className={styles.checkbox_label}>Wheighment &amp; Weighment Survey Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="draughtSurveyCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.draughtSurveyCharges}  />
                                        <label className={styles.checkbox_label}>Draught Survey Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="boatingWhileDraughtSurveyCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.boatingWhileDraughtSurveyCharges}  />
                                        <label className={styles.checkbox_label}>Boating while Draught Survey Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="hmcCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.hmcCharges}  />
                                        <label className={styles.checkbox_label}>HMC Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="securityCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.securityCharges}  />
                                        <label className={styles.checkbox_label}>Security Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="piotRentalAndStorageCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.piotRentalAndStorageCharges}  />
                                        <label className={styles.checkbox_label}>Plot Rental &amp; Storage Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="bondingOfCargoCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.bondingOfCargoCharges}  />
                                        <label className={styles.checkbox_label}>Bonding of Cargo Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="exBondDocumentationCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.exBondDocumentationCharges}  />
                                        <label className={styles.checkbox_label}>Ex - Bond Documentation Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="transferOfOwnershipCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.transferOfOwnershipCharges}  />
                                        <label className={styles.checkbox_label}>Transfer of Ownership Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="customsBondOfficerOvertimeCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.customsBondOfficerOvertimeCharges}  />
                                        <label className={styles.checkbox_label}>Customs Bond Officer Overtime Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="grabHireCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.grabHireCharges}  />
                                        <label className={styles.checkbox_label}>Grab Hire Charges ( if any )</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="craneHireCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.craneHireCharges}  />
                                        <label className={styles.checkbox_label}>Crane Hire Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="handlingLosses" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.handlingLosses}  />
                                        <label className={styles.checkbox_label}>Handling Losses</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="insuranceCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.insuranceCharges}  />
                                        <label className={styles.checkbox_label}>Insurance Charges ( While transferring the material to customs bonded ware house )</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="waterSprinklingCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.waterSprinklingCharges}  />
                                        <label className={styles.checkbox_label}>Water Sprinkling Charges</label>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center'>
                                        <input id="others" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.chaOrstevedoringCharges?.others}  />
                                        <label className={styles.checkbox_label}>Others, if any</label>
                                    </div>
                        </div>                        
                    </div>
                    <div className={`${styles.form_group} mt-5 col-md-6`}>
                        <div className=''>
                            <h3 className={`${styles.other_heading} row_head`}>LC Opening Charges</h3>
                            <div className={`${styles.checkbox_container}  label_heading d-flex flex-column`}>
                            <div className='d-flex align-items-center'>
                                            <input id="lcOpeningCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.lcOpeningCharges}  />
                                            <label className={styles.checkbox_label}>LC Opening Charges ( on LC value subject to minimum of USD 1500)</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="lcAmendmentCost" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.lcAmendmentCost}  />
                                            <label className={styles.checkbox_label}>LC Amendment Cost</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="cmaFeesIncludingSupervisionAndSurvey" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.cmaFeesIncludingSupervisionAndSurvey}  />
                                            <label className={styles.checkbox_label} htmlForcls="vehicle3">CMA Fees including supervision and survey</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="bankDoIssuanceCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.bankDoIssuanceCharges}  />
                                            <label className={styles.checkbox_label} htmlForcls="vehicle4">Bank DO Issuance charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="remmittanceCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.remmittanceCharges}  />
                                            <label className={styles.checkbox_label} htmlForcls="vehicle5">Remmittance Charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="usanceInterest" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.lcOpeningCharges?.usanceInterest}  />
                                            <label className={styles.checkbox_label} htmlForcls="vehicle6">Usance Interest</label>
                                        </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className={`${styles.other_heading} row_head`}>Other Charges</h3>
                            <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                            <div className='pt-4 d-flex align-items-center'>
                                            <input id="demurrageOrDetentionChargesOfVessel" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.demurrageOrDetentionChargesOfVessel}  />
                                            <label className={styles.checkbox_label} htmlFor="vehicle2">Demurrage / Detention Charges of Vessel</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="transportationCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.transportationCharges}  />
                                            <label className={styles.checkbox_label} htmlFor="vehicle3">Transportation Charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="wagonHaulageCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.wagonHaulageCharges}  />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">Wagon Haulage Charges (in case of Delivery through railways)</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="thirdPartyInspectionCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.thirdPartyInspectionCharges}  />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">3rd Party Inspection Charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="hedgingCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.hedgingCharges}  />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">Hedging Charges</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="anyOtherCostIncurredOnBehalfOfBuyer" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.otherCharges?.anyOtherCostIncurredOnBehalfOfBuyer}  />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">Any other cost incurred on behalf of Buyer</label>
                                        </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className={`${styles.other_heading} row_head`}>Duty &amp; Taxes</h3>
                            <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                            <div className='d-flex align-items-center'>
                                            <input id="customsDutyWithAllGovtCess" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.dutyAndTaxes?.customsDutyWithAllGovtCess}  />
                                            <label className={styles.checkbox_label} htmlFor="vehicle1">Customs Duty with all Govt Cess</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="igstWithCess" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.dutyAndTaxes?.igstWithCess}  />
                                            <label className={styles.checkbox_label} htmlFor="vehicle2">IGST with CESS, if Applicable</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="cimsCharges" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.dutyAndTaxes?.cmaFeesIncludingSupervisionAndSurvey}  />
                                            <label className={styles.checkbox_label}>CIMS Charges (incase Commodity is Coal)</label>
                                        </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className={`${styles.other_heading} row_head`}>Insurance</h3>
                            <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                            <div className='d-flex align-items-center'>
                                            <input id="marineInsurance" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.insurance?.marineInsurance}  />
                                            <label className={styles.checkbox_label}>Marine Insurance ( if Applicable)</label>
                                        </div>
                                        <div className='pt-4 d-flex align-items-center'>
                                            <input id="storageInsurance" className={styles.checkbox} type="checkbox" checked={otherTermConditions?.insurance?.storageInsurance}  />
                                            <label className={styles.checkbox_label}>Storage Insurance(Fire & Burgalary)</label>
                                        </div>
                            </div>
                        </div>                    
                    </div>
                   
                </div>
            </Form>                
        </div>

       <div className={`${styles.footer}`}>
           All necessary documents to be filed with Customs department for discharge of goods & Customs clearance can be filed by IGPL or its nominated person. * GST charges extra wherever applicable
       </div>
      </Card>
      
    </div>



    <Paginatebar openbar={openbar} />
     {open ? <TermsheetPopUp close={close} open={open}/>:null}
      </>
   
  )
}

export default Index