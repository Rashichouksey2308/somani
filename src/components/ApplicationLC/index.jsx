/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Row, Col, Container, Card } from 'react-bootstrap'
import LCAmendBar from '../LCAmendBar'
import TermsheetPopUp from '../TermsheetPopUp'
import { Form } from 'react-bootstrap'
import Router from 'next/router'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule } from 'redux/lcModule/action'
import moment from 'moment'
import { addPrefixOrSuffix, checkNan } from 'utils/helper'
import _get from 'lodash/get'
import jsPDF from 'jspdf'
import ReactDOMServer from 'react-dom/server'
function Index() {
  const dispatch = useDispatch()

  let d = new Date()

  useEffect(() => {
    let id = sessionStorage.getItem('lcPreviewId')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  const { lcModule } = useSelector((state) => state.lc)

  //console.log(lcModule.data[0].documentRequired, 'LC MODULE')

  const lcModuleData = _get(lcModule, 'data[0]', {})

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
 const [what,setWhat]=useState("email")
  const handlePopup = () => {
    setShow(true)
  }
  const [emailAdd, setEmailAdd] = useState([
    {
        emailID: '',
    },
  ])
   const [number, setNumber] = useState([
    {
        number: '',
    },
  ])
  const addMoreRows = () => {
    setEmailAdd([
      ...emailAdd,
      {
        emailID: '',
      },
    ])
  }
    const addWhatRows = () => {
    setNumber([
      ...number,
      {
        number: '',
      },
    ])
  }

  const exportPDF = () => {

      const doc = new jsPDF('p', 'pt', [1500, 1500])
      doc.html(ReactDOMServer.renderToString(
        <table width='1500px' cellPadding='0' cellSpacing='0' border='0'>
          <tr>
            <td valign='top' style={{paddingBottom:'20px'}}>
              <table width='100%' bgColor='#D8EAFF' style={{fontFamily:'Arial, Helvetica, sans-serif', marginBottom:'26px', border:'1px solid #D2D7E5', borderRadius:'6px', height:'126px'}} cellPadding='10' cellSpacing='0' border='0'>
                <tr>
                  <td valign='bottom' align='left' width='33%'>
                    <span style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'10px 0 0 25px'}}>Order ID: <span style={{lineHeight:'24px', fontWeight:'normal', opacity:'0.7'}}>{lcModuleData?.order?.orderId}</span></span><br/>
                    <span style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500'}}><span style={{display: 'inline-block', paddingLeft:'25px', width: '90px', float:'left', height:'50px'}}>Buyer: </span><span style={{lineHeight:'24px', fontWeight:'normal', opacity:'0.7'}}>{lcModuleData?.company?.companyName}</span></span>
                  </td>
                  <td valign='top' align='center' width='34%'><h2 style={{fontSize:'34px', color:'#3687E8', lineHeight:'41px', fontWeight:'bold', textTransform:'uppercase'}}>APPLICATION FOR LETTER OF CREDIT</h2></td>
                  <td valign='bottom' align='right' width='33%'><span style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingRight:'25px'}}>Date: <span style={{lineHeight:'24px', fontWeight:'normal', opacity:'0.7'}}>{moment(d).format('DD.MM.yyyy')}</span></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td valign='top' align='left'>
              <table width='100%' bgColor='#FFFFFF' style={{fontFamily:'Arial, Helvetica, sans-serif', borderRadius:'6px', boxShadow:'0 3px 6px #CAD0E2', marginBottom:'26px', border:'2px solid rgba(202, 214, 230, 0.3)'}} cellPadding='0' cellSpacing='0' border='0'>
                <tr>
                  <td valign='top' align='left'>
                    <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
                      <tbody>
                        <tr>
                          <td width="40%" align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'66px', color:'#111111', fontWeight:'500', color:'#111111', fontWeight:'500'}}>40A</span>FORM OF DOCUMENTARY CREDIT</p>
                          </td>
                          <td width="60%" align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.formOfDocumentaryCredit?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>40E</span>APPLICABLE RULES</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.applicableRules?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>31D</span>DATE OF EXPIRY</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>
                              {moment(
                            lcModuleData?.lcApplication?.dateOfExpiry?.split(
                              'T',
                            )[0],
                          ).format('DD-MM-YYYY')}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>31D</span>PLACE OF EXPIRY</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.placeOfExpiry?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>51D</span>LC ISSUING BANK</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.lcIssuingBank?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>50</span>APPLICANT</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.applicant?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>59</span>BENEFICIARY</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.beneficiary?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>32B</span>CURRENCY CODE &amp; AMOUNT</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{ addPrefixOrSuffix(lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase() ? lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase() : 0, 'USD', '')}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>39A</span>TOLERANCE (+/-) PERCENTAGE</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {addPrefixOrSuffix(
                            lcModuleData?.lcApplication?.tolerancePercentage?.toLocaleString("en-IN", {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }),
                            '%',
                            '',
                          )}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>41A</span>CREDIT AVAILABLE WITH</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>   {lcModuleData?.lcApplication?.creditAvailablewith?.toUpperCase()}</p>
                          </td>
                        </tr>
                         <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>41B</span>CREDIT AVAILABLE</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>  {lcModuleData?.lcApplication?.creditAvailableBy?.toUpperCase()}  </p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>42C</span>AT SIGHT<br/>NO. OF DAYS</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.atSight?.toUpperCase()}{' '}<br/>{lcModuleData?.lcApplication?.numberOfDays}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>42A</span>DRAWEE</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.drawee?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>42P</span>DEFERRED PAYMENT</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.deferredPayment?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>43P</span>PARTIAL SHIPMENT</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.partialShipment?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>43T</span>TRANSHIPMENTS</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.transhipments?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>44A</span>SHIPMENT FROM</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.shipmentForm?.toUpperCase()}</p>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>44E</span>PORT OF LOADING</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>  {lcModuleData?.lcApplication?.portOfLoading?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>44F</span>PORT OF DISCHARGE</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{lcModuleData?.lcApplication?.portOfDischarge?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}> 44C</span>LATEST DATE OF SHIPMENT</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{moment(
                            lcModuleData?.lcApplication?.latestDateOfShipment?.split(
                              'T',
                            )[0],
                          ).format('DD-MM-YYYY')}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)',borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>45A</span>DESCRIPTION OF THE GOODS</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.DescriptionOfGoods?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr height="100">
                          <td colSpan={2}></td>
                        </tr>
                        <tr height="67">
                          <th colSpan={2} bgColor='#FAFAFB' align='left'><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>46A DOCUMENT REQUIRED:</h3></th>
                        </tr>
                        {lcModuleData &&
                        lcModuleData?.documentRequired?.map((doc, index) => (
                           <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>{index+1}</span></p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{doc}</p>
                          </td>
                          
                        </tr>
                         
                        ))}
                        {/* <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>1</span></p>
                          </td>
                          
                        </tr> */}
                        {/* <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>2</span></p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr> */}
                        <tr height="67">
                          <th colSpan={2} bgColor='#FAFAFB' align='left'><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>47A ADDITIONAL CONDITIONS:</h3></th>
                        </tr>
                        {lcModuleData &&
                        lcModuleData?.additionalConditions?.map(
                          (comment, index) => (
                            <tr>
                              <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                              <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>{index+1}</span></p>
                              </td>
                              <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                              <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>{comment}</p>
                              </td>
                           
                            </tr>
                          ),
                        )}
                        <tr>                          
                         
                        </tr>
                        {/* <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'19px 15px 34px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>2</span></p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'19px 15px 34px 24px', marginBottom:'0'}}>
                              <table width="80%" cellPadding="10" cellSpacing="0" border="0" style={{border:'1px solid #CAD6E6'}}>
                                <tr>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>ELEMENTS</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>TYPICAL</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6'}}>GUARANTEED</td>
                                </tr>
                                <tr>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>MN</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>44.5 PCT</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6'}}>43.0</td>
                                </tr>
                                <tr>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>SIO2</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>8.0 PCT</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6'}}>8.0 PCT</td>
                                </tr>
                                <tr>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>AL2O3</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>7.6 PCT</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6'}}>8.0 PCT</td>
                                </tr>
                                <tr>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>FE</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>44.5 PCT</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6'}}>4.5 PCT</td>
                                </tr>
                                <tr>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>P</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>4.5 PCT</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6'}}>4.5 PCT</td>
                                </tr>
                                <tr>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>K20</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6', borderRight:'1px solid #CAD6E6'}}>4.5 PCT</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderBottom:'1px solid #CAD6E6'}}>4.5 PCT</td>
                                </tr>
                                <tr>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderRight:'1px solid #CAD6E6'}}>SIZE 5-75MM (AT LOADING)</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px', borderRight:'1px solid #CAD6E6'}}>44.5 PCT</td>
                                  <td style={{fontSize:'20px', color:'#111111', lineHeight:'24px'}}>4.5 PCT</td>
                                </tr>
                              </table>
                            </p>
                          </td>
                        </tr> */}
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>48</span>PRESENTATION PERIOD</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.presentaionPeriod?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>49</span>CONFIRMATION INSTRUCTIONS</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.confirmationInstructions?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>                          
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>53A</span>REIMBURSING BANK</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.reimbursingBank?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>57</span>ADVISE THROUGH BANK</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>  {lcModuleData?.lcApplication?.adviceThroughBank?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>57A</span>SECOND ADVISING BANK, IF APPLICABLE</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.secondAdvisingBank?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>58A</span>REQUESTED CONFIRMATION PARTY</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}>  {lcModuleData?.lcApplication?.requestedConfirmationParty?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>71B</span>CHARGES</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.charges?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)', borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>78</span>INSTRUCTIONS TO PAYING / ACCEPTING / NEGOTIATING BANK</p>
                          </td>
                          <td align='left' style={{borderBottom:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.instructionToBank?.toUpperCase()}</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid rgba(202, 214, 230, 0.3)'}}>
                            <p style={{fontSize:'20px', color:'rgba(17, 17, 17, 0.7)', lineHeight:'24px', fontWeight:'normal', padding:'16px 15px 16px 35px', marginBottom:'0'}}><span style={{display:'inline-block', float:'left', height:'30px', width:'66px', color:'#111111', fontWeight:'500'}}>72</span>SENDER TO RECEIVER INFORMATION</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'16px 15px 16px 24px', marginBottom:'0'}}> {lcModuleData?.lcApplication?.senderToReceiverInformation?.toUpperCase()}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table> 
      ), {
  callback: function (doc) {
    doc.save('sample.pdf')
  },
  // margin:margins,
  autoPaging: "text",


  },


  )
  }

  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div
          className={`${styles.root_container} card shadow-none border-0 bg-transparent`}
        >
        
          {/* <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} img-fluid mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>Application for LC</h1>
          </div>
        </div> */}
          <div
            className={`${styles.term_container} previewCard container-fluid border_color`}
          >
            <Row>
              <Col
                sm={12}
                className={`d-flex justify-content-center align-items-center`}
              >
                <h3>APPLICATION FOR LETTER OF CREDIT</h3>
              </Col>
            </Row>

            <div className="d-flex justify-content-between">
              <div>
                <div className={`${styles.sub_heading} term_para`}>
                  Order ID:{' '}
                  <span className="label1">{lcModuleData?.order?.orderId}</span>
                </div>
                <div className={`${styles.sub_heading} term_para`}>
                  Buyer:{' '}
                  <span className="label1">
                    {lcModuleData?.company?.companyName}
                  </span>
                </div>
              </div>
              <div>
                <div className={`${styles.sub_heading} term_para mt-4`}>
                  Date: <span className="label1">{moment(d).format('DD.MM.yyyy')}</span>
                </div>
              </div>
            </div>
          </div>

          <Card className={`${styles.content}`}>
            <div className={`${styles.datatable} datatable`}>
              <div className={styles.table_scroll_outer}>
                <div className={styles.table_scroll_inner}>
                  <table
                    className={`${styles.table} table`}
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            40A{' '}
                          </span>
                          <span>FORM OF DOCUMENTARY CREDIT</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.formOfDocumentaryCredit?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            40E{' '}
                          </span>
                          <span>APPLICABLE RULES</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.applicableRules?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            31D{' '}
                          </span>
                          <span>DATE OF EXPIRY</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.dateOfExpiry ? moment(lcModuleData?.lcApplication?.dateOfExpiry).format('DD-MM-YYYY') : ''}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            31D{' '}
                          </span>
                          <span>PLACE OF EXPIRY</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.placeOfExpiry?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            51D{' '}
                          </span>
                          <span>LC ISSUING BANK</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.lcIssuingBank?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            50{' '}
                          </span>
                          <span>APPLICANT</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.applicant?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            59{' '}
                          </span>
                          <span>BENEFICIARY</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.beneficiary?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            32B{' '}
                          </span>
                          <span>CURRENCY CODE &amp; AMOUNT</span>
                        </td>
                        <td className="term_para">
                          { addPrefixOrSuffix(lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase() ? lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase() : 0, 'USD', '')}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            39A{' '}
                          </span>
                          <span>TOLERANCE (+/-) PERCENTAGE</span>
                        </td>
                        <td className="term_para">
                          +/-{' '}
                          {checkNan(
                            Number(lcModuleData?.lcApplication?.tolerancePercentage)?.toLocaleString("en-IN", {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            })
                          
                          )} %
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            41A{' '}
                          </span>
                          <span>
                            CREDIT AVAILABLE WITH
                          </span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.creditAvailablewith?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            41B{' '}
                          </span>
                          <span>
                            CREDIT AVAILABLE BY
                          </span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.creditAvailableBy?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            42C{' '}
                          </span>
                          <span>
                            AT SIGHT
                            <br />
                            NO. OF DAYS
                          </span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.atSight?.toUpperCase()}{' '}
                          <br /> {lcModuleData?.lcApplication?.numberOfDays}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            42A{' '}
                          </span>
                          <span>DRAWEE</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.drawee?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            42P{' '}
                          </span>
                          <span>DEFERRED PAYMENT</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.deferredPayment?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            43P{' '}
                          </span>
                          <span>PARTIAL SHIPMENT</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.partialShipment?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            43T{' '}
                          </span>
                          <span>TRANSHIPMENTS</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.transhipments?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            44A{' '}
                          </span>
                          <span>SHIPMENT FROM</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.shipmentForm?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            44E{' '}
                          </span>
                          <span>PORT OF LOADING</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.portOfLoading?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            44F{' '}
                          </span>
                          <span>PORT OF DISCHARGE</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.portOfDischarge?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            44C{' '}
                          </span>
                          <span>LATEST DATE OF SHIPMENT</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.latestDateOfShipment ? moment(lcModuleData?.lcApplication?.latestDateOfShipment).format('DD-MM-YYYY') : ''}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td className="border-bottom-0" width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            45A{' '}
                          </span>
                          <span>DESCRIPTION OF THE GOODS</span>
                        </td>
                        <td className="border-bottom-0 term_para">
                          {lcModuleData?.lcApplication?.DescriptionOfGoods?.toUpperCase()}
                        </td>
                      </tr>
                      <tr className={`${styles.content_header} background2`}>
                        <td
                          className="border-bottom-0 border-top-0 "
                          colSpan={2}
                        >
                          <div
                            className={`${styles.content_header} background2`}
                          >
                            46A DOCUMENT REQUIRED:
                          </div>
                        </td>
                      </tr>
                      {lcModuleData &&
                        lcModuleData?.documentRequired?.map((doc, index) => (
                          <tr key={index} className="table_row">
                            <td className="border-top-0" width="40%">
                              {(index += 1)}
                            </td>
                            <td className="border-top-0">{doc}</td>
                          </tr>
                        ))}
                      {/* <tr className="table_row">
                      <td className="border-bottom-0" width="40%">
                        2
                      </td>
                      <td className="border-bottom-0">
                        SIGNED PROVISIONAL / COMMERCIAL INVOICE IN 1 ORIGINAL
                        AND 3 COPIES, BASED ON THE DRY WEIGHT AND THE MANGANESE
                        CONTENT SHOWN ON THE CERTIFICATE OF TYPICAL ANALYSIS.
                      </td>
                    </tr> */}
                      <tr className={`${styles.content_header} background2`}>
                        <td
                          className="border-bottom-0 border-top-0 "
                          colSpan={2}
                        >
                          <div
                            className={`${styles.content_header} background2 `}
                          >
                            47A ADDITIONAL CONDITIONS:
                          </div>
                        </td>
                      </tr>
                      {lcModuleData &&
                        lcModuleData?.additionalConditions?.map(
                          (comment, index) => (
                            <tr key={index} className="table_row">
                              <td className="border-top-0" width="40%">
                                {(index += 1)}
                              </td>
                              <td className="border-top-0">{comment}</td>
                            </tr>
                          ),
                        )}
                      <tr className="table_row">
                        {/* <td width="40%">2</td> */}
                        {/*<td className="border-top-0">
                          <div
                            className={`${styles.element_datatable} m-2 datatable `}
                          >
                            <div className={styles.table_scroll_outer}>
                              <div className={styles.table_scroll_inner}>
                                 <table
                                  className={`${styles.table} table`}
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                >
                                  <thead>
                                    <tr className="table_row">
                                      <th>ELEMENTS</th>
                                      <th>TYPICAL</th>
                                      <th>GUARANTEED</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="table_row">
                                      <td>MN</td>
                                      <td>44.5 PCT</td>
                                      <td>43.0</td>
                                    </tr>
                                    <tr className="table_row">
                                      <td>SIO2</td>
                                      <td>8.0 PCT</td>
                                      <td>8.0 PCT</td>
                                    </tr>
                                    <tr className="table_row">
                                      <td>AL2O3</td>
                                      <td>7.6 PCT</td>
                                      <td>8.0 PCT</td>
                                    </tr>

                                    <tr className="table_row">
                                      <td>FE</td>
                                      <td>44.5 PCT</td>
                                      <td>43.0</td>
                                    </tr>
                                  </tbody>
                                </table> 
                              </div>
                            </div>
                          </div>
                        </td>*/}
                      </tr>
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            48{' '}
                          </span>
                          <span>PRESENTATION PERIOD</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.presentaionPeriod?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            49{' '}
                          </span>
                          <span>CONFIRMATION INSTRUCTIONS</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.confirmationInstructions?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            53A{' '}
                          </span>
                          <span>REIMBURSING BANK</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.reimbursingBank?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            57{' '}
                          </span>
                          <span>ADVISE THROUGH BANK</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.adviceThroughBank?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            57A{' '}
                          </span>
                          <span>SECOND ADVISING BANK, IF APPLICABLE</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.secondAdvisingBank?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            58A{' '}
                          </span>
                          <span>REQUESTED CONFIRMATION PARTY</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.requestedConfirmationParty?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            71B{' '}
                          </span>
                          <span>CHARGES</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.charges?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            78{' '}
                          </span>
                          <span>
                            INSTRUCTIONS TO PAYING / ACCEPTING /<br />
                            NEGOTIATING BANK
                          </span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.instructionToBank?.toUpperCase()}
                        </td>
                      </tr>{' '}
                      <tr className="table_row">
                        <td width="40%">
                          <span className={`${styles.serial_no} term_para`}>
                            72{' '}
                          </span>
                          <span>SENDER TO RECEIVER INFORMATION</span>
                        </td>
                        <td className="term_para">
                          {lcModuleData?.lcApplication?.senderToReceiverInformation?.toUpperCase()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>

          <Modal
            show={show}
            className={`${styles.share_lc} vessel_card card share_lc`}
          >
            <Modal.Body className={`${styles.card_body} card-body`}>
              <form>
                <ul
                  className={`${styles.nav_tabs} ${styles.LC_draft_tabs} LC_draft_tabs nav nav-tabs`}
                  id="LCDraft"
                  role="tablist"
                >
                  <li className={`${styles.nav_item} nav-item`}>
                    <a
                      className={`${styles.nav_link} nav-link active`}
                      id="share-LC-draft"
                      data-toggle="tab"
                      href="#shareLCDraft"
                      role="tab"
                      aria-controls="shareLCDraft"
                      aria-selected="true"
                    >
                      Share LC Draft
                    </a>
                  </li>
                  <li className={`${styles.nav_item} nav-item`}>
                    <a
                      className={`${styles.nav_link} nav-link`}
                      id="download-LC-draft"
                      data-toggle="tab"
                      href="#downloadLCDraft"
                      role="tab"
                      aria-controls="downloadLCDraft"
                      aria-selected="false"
                    >
                      Download LC Draft
                    </a>
                  </li>
                </ul>
                <div
                  className={`${styles.tab_content} tab-content`}
                  id="LCDraft"
                >
                  <div
                    className="tab-pane fade show active"
                    id="shareLCDraft"
                    role="tabpanel"
                    aria-labelledby="share-LC-draft"
                  >
                    <h3>Share as</h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <div
                        className={`${styles.lc_document} ${styles.box} d-flex align-items-center`}
                      >
                        <img
                          src="/static/pdf-icon.png"
                          width={`55px`}
                          alt="PDF"
                          className="img-fluid"
                        />
                        <label for="lc_Application">
                          LC Application.pdf<span>128kb</span>
                        </label>
                        <input
                          type="checkbox"
                          className="ml-auto"
                          id="lc_Application"
                          value="LC Application"
                        />
                      </div>
                      <div
                        className={`${styles.word_document} ${styles.box} d-flex align-items-center`}
                      >
                        <img
                          src="/static/doc-icon.png"
                          width={`55px`}
                          alt="DOC"
                          className="img-fluid"
                        />
                        <label for="LC_Application_word">
                          LC Application.doc<span>128kb</span>
                        </label>
                        <input
                          type="checkbox"
                          className="ml-auto"
                          id="LC_Application_word"
                          value="LC Application"
                        />
                      </div>
                    </div>
                    <ul
                      className={`${styles.nav_tabs} ${styles.share_via} share_via nav nav-tabs`}
                      id="shareVia"
                      role="tablist"
                    >
                      <li className={`${styles.nav_item} nav-item`}>
                        <a
                          className={`${styles.nav_link} nav-link active`}
                          id="email-address"
                          data-toggle="tab"
                          href="#emailAddress"
                          role="tab"
                          aria-controls="emailAddress"
                          aria-selected="true"
                          onClick={() =>{
                            setWhat("email")
                          }}
                        >
                          <img
                            src="/static/email-icon.png"
                            width={`32px`}
                            className="img-fluid"
                            alt="Email Address"
                          />
                          Email Address
                        </a>
                      </li>
                      <li className={`${styles.nav_item} nav-item`}>
                        <a
                          className={`${styles.nav_link} nav-link`}
                          id="whatsapp"
                          data-toggle="tab"
                          href="#whatsApp"
                          role="tab"
                          aria-controls="whatsApp"
                          aria-selected="false"
                           onClick={() =>{
                            setWhat("what")
                          }}
                        >
                          <img
                            src="/static/icons8-whatsapp.svg"
                            width={`27px`}
                            className="img-fluid"
                            alt="WhatsApp"
                          />
                          WhatsApp
                        </a>
                      </li>
                    </ul>
                    <div
                      className={`${styles.tab_content} tab-content`}
                      id="shareVia"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="emailAddress"
                        role="tabpanel"
                        aria-labelledby="email-address"
                      >
                        {emailAdd.map((val,index) => (
                        <div className='d-flex align-items-center form-group'>
                          <div key={index} className={`${styles.each_input} flex-grow-1`}>
                            <div className="d-flex">
                              <select
                                id="email"
                                name="email"
                                className={`${styles.formControl} ${styles.customSelect} input form-control`}
                                selected
                              >
                                <option value="javanika.seth@hdfcbank.com">
                                  javanika.seth@hdfcbank.com
                                </option>
                              </select>
                              <label
                                className={`${styles.label_heading} label_heading_login label_heading bg-transparent`}
                                htmlFor="email"
                              >
                                Email
                              </label>
                              <img
                                className={`${styles.arrow} image_arrow img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                              />
                            </div>
                          </div>
                          <img src="/static/delete 2.svg" alt="delete" role="button" className='ml-3' />
                          </div>
                        ))}
                        <div
                          className={`${styles.addMoreRows}`}
                          onClick={(e) => {
                            addMoreRows()
                          }}
                        >
                          <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                            +
                          </span>{' '}
                          add another
                        </div>
                        <div className="d-flex justify-content-between">
                          <button
                            onClick={handleClose}
                            type="button"
                            className={`${styles.close} ${styles.btn} btn w-50`}
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className={`${styles.submit} ${styles.btn} btn w-50`}
                          >
                            Share
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="whatsApp"
                        role="tabpanel"
                        aria-labelledby="whatsapp"
                      >
                        {number.length>0 && number.map((val,index)=>{
                          return (
                            <>
                            <div className='d-flex align-items-center form-group'>
                              <div className={`${styles.each_input} ${styles.phone} flex-grow-1`}>
                                <div className={styles.phone_card}>
                                  <select
                                    name="callingCode"
                                    id="Code"
                                    className={`${styles.code_phone} input border-right-0 bg-transparent`}
                                  >
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+92</option>
                                    <option>+95</option>
                                    <option>+24</option>
                                  </select>
                                  <input
                                    type="tel"
                                    id="textNumber"
                                    name="primary"
                                    className={`${styles.formControl} input form-control border-left-0`}
                                    required
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                    id="textNumber"
                                  >
                                    Phone Number
                                    <strong className="text-danger">*</strong>
                                  </label>
                                </div>
                              </div>
                              <img src="/static/delete 2.svg" alt="delete" role="button" className='ml-3' />
                            </div>
                            </>
                          )
                        })}
                        {/* <div className={`${styles.labelFloat} form-group`}>
                          <input type='text' id='phone' name="phone" className={`${styles.formControl} ${styles.input} input form-control`} required />
                          <label className={`label_heading_login`} htmlFor='phone'>Phone Number</label>
                        </div> */}
                        <div
                          className={`${styles.addMoreRows}`}
                          onClick={(e) => {
                            if(what=="what"){
                            addWhatRows()
                            }else{
                            addMoreRows()
                            }
                            
                           
                          }}
                        >
                          <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                            +
                          </span>{' '}
                          add another
                        </div>
                        <div className="d-flex justify-content-between">
                          <button
                            onClick={handleClose}
                            type="button"
                            className={`${styles.close} ${styles.btn} btn w-50`}
                          >
                            Close
                          </button>
                          <button
                            onClick={handleClose}
                            type="button"
                            className={`${styles.submit} ${styles.btn} btn w-50`}
                          >
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="downloadLCDraft"
                    role="tabpanel"
                    aria-labelledby="download-LC-draft"
                  >
                    <h3>Download as</h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <div
                        className={`${styles.lc_document} ${styles.box} d-flex align-items-center`}
                      >
                        <img
                          src="/static/pdf-icon.png"
                          width={`55px`}
                          alt="PDF"
                          className="img-fluid"
                        />
                        <label for="lc_document">
                          LC Document.pdf<span>128kb</span>
                        </label>
                        <input
                          type="checkbox"
                          className="ml-auto"
                          id="lc_document"
                          value="LC Document"
                        />
                      </div>
                      <div
                        className={`${styles.word_document} ${styles.box} d-flex align-items-center`}
                      >
                        <img
                          src="/static/doc-icon.png"
                          width={`55px`}
                          alt="DOC"
                          className="img-fluid"
                        />
                        <label for="word_document">
                          word document.doc<span>128kb</span>
                        </label>
                        <input
                          type="checkbox"
                          className="ml-auto"
                          id="word_document"
                          value="word document"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={handleClose}
                        type="button"
                        className={`${styles.close} ${styles.btn} btn w-50`}
                      >
                        Close
                      </button>
                      <button
                        onClick={handleClose}
                        type="button"
                        className={`${styles.submit} ${styles.btn} btn w-50`}
                       
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>

      <LCAmendBar download={exportPDF} openbar={handlePopup} barName="Application for LC" />
    </>
  )
}

export default Index


