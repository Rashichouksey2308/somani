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
import { addPrefixOrSuffix } from 'utils/helper'
import _get from 'lodash/get'

function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    let id = sessionStorage.getItem('lcPreviewId')
    dispatch(GetLcModule(`?lcModuleId=${id}`))
  }, [dispatch])

  const { lcModule } = useSelector((state) => state.lc)

  //console.log(lcModule.data[0].documentRequired, 'LC MODULE')

  const lcModuleData = _get(lcModule, 'data[0]', {})

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const handlePopup = () => {
    setShow(true)
  }
  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div
          className={`${styles.root_container} card shadow-none border-0 bg-transparent`}
        >
        <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
          <tr>
            <td valign='top'>
              <table width='100%' bgColor='#D8EAFF' style={{fontFamily:'Arial, Helvetica, sans-serif', marginBottom:'26px', border:'1px solid #D2D7E5', borderRadius:'6px', height:'126px'}} cellPadding='10' cellSpacing='0' border='0'>
                <tr>
                  <td valign='top' align='left' width='25%'>
                    <p style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', padding:'10px 0 0 25px'}}>Order ID: <span style={{lineHeight:'24px', fontWeight:'normal', opacity:'0.7'}}>orderId</span></p>
                    <p style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingLeft:'25px'}}>Buyer: <span style={{lineHeight:'24px', fontWeight:'normal', opacity:'0.7'}}>companyName</span></p>
                  </td>
                  <td valign='top' align='center' width='50%'><h2 style={{fontSize:'34px', color:'#3687E8', lineHeight:'41px', fontWeight:'bold', textTransform:'uppercase'}}>APPLICATION FOR LETTER OF CREDIT</h2></td>
                  <td valign='top' align='right' width='25%'>
                    <p> <span></span></p>
                    <p style={{fontSize:'20px', color:'#111111', lineHeight:'25px', fontWeight:'500', paddingRight:'25px'}}>Date: <span style={{lineHeight:'24px', fontWeight:'normal', opacity:'0.7'}}>
                      {
                    moment((new Date()), 'YYYY-MM-DD', true).format("DD-MM-YYYY")
                    }
                    </span></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td valign='top' align='left'>
              <table width='100%' bgColor='#FFFFFF' style={{fontFamily:'Arial, Helvetica, sans-serif', borderRadius:'6px', boxShadow:'0 3px 6px #CAD0E2', marginBottom:'26px'}} cellPadding='0' cellSpacing='0' border='0'>
                <tr>
                  <td valign='top' align='left'>
                    <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
                      <thead>
                        <tr>
                          <th width='33%' bgColor='#FAFAFB' align='left' style={{borderRight:'2px solid #cad6e64d'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>Commodity Details</h3></th>
                          <th width='67%' bgColor='#FAFAFB' align='left'></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'23px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>1.</span>Commodity Name</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'23px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>2.</span>Quantity Name</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 38px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>3.</span>Unit Price</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 38px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th width='33%' bgColor='#FAFAFB' align='left' style={{borderRight:'2px solid #cad6e64d'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>Transaction Details</h3></th>
                          <th width='67%' bgColor='#FAFAFB' align='left'></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'23px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>4.</span>LC Value</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'23px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>5.</span>LC opening Bank</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>6.</span>Margin Money as % of Import Value</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>7.</span>INCO Terms</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>8.</span>Load Port</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>9.</span>Country of Origin</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>10.</span>Shipment Type</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>11.</span>Part Shipment Allowed</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>12.</span>Port of Discharge</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>13.</span>Bill of Entry</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 38px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>14.</span>3rd Party Inspection Required</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 38px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th width='33%' bgColor='#FAFAFB' align='left' style={{borderRight:'2px solid #cad6e64d'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>Storage of Goods</h3></th>
                          <th width='67%' bgColor='#FAFAFB' align='left'></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'23px 15px 40px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>15.</span>Storage of Goods</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'23px 15px 40px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th width='33%' bgColor='#FAFAFB' align='left' style={{borderRight:'2px solid #cad6e64d'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>Deliveries/Due Date/Payment</h3></th>
                          <th width='67%' bgColor='#FAFAFB' align='left'></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'23px 15px 40px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>16.</span>Deliveries/Due date/Payment</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'23px 15px 40px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th width='33%' bgColor='#FAFAFB' align='left' style={{borderRight:'2px solid #cad6e64d'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>Commercial Terms</h3></th>
                          <th width='67%' bgColor='#FAFAFB' align='left'></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'23px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>17.</span>Trade Margin (%)</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'23px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>18.</span>LC Opening Charges (Minimum)</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>19.</span>LC Opening Charges (%)</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>20.</span>Usance Interest (%) For 90 Days</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value %</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>21.</span>Overdue Interest per Month (%)</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value %</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>22.</span>Exchange Fluctuation</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 11px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>23.</span>Forex Hedging</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 11px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'11px 15px 40px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>24.</span>Other Terms &amp; Conditions</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'11px 15px 40px 24px', marginBottom:'0'}}>value</p>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th width='33%' bgColor='#FAFAFB' align='left' style={{borderRight:'2px solid #cad6e64d'}}><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>Reimbursement of Expenses</h3></th>
                          <th width='67%' bgColor='#FAFAFB' align='left'></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td align='left' style={{borderRight:'2px solid #cad6e64d'}}>
                            <p style={{fontSize:'20px', color:'#111111', opacity:'0.7', lineHeight:'24px', fontWeight:'normal', padding:'23px 15px 40px 35px', marginBottom:'0'}}><span style={{display:'inline-block', width:'35px'}}>25.</span>Reimbursement of Expenses</p>
                          </td>
                          <td align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'500', padding:'23px 15px 40px 24px', marginBottom:'0'}}>Post CFR expenses to be reimbursed on actual basis if applicable as attached.</p>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th colSpan={2} bgColor='#FAFAFB' align='left'><h3 style={{fontSize:'22px', color:'#3687E8', lineHeight:'27px', fontWeight:'bold', padding:'20px 15px 20px 35px', marginBottom:'0'}}>Other Terms &amp; Conditions</h3></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={2} align='left'>
                            <p style={{fontSize:'20px', color:'#111111', lineHeight:'24px', fontWeight:'normal', padding:'23px 15px 40px 35px', marginBottom:'0'}}>Below charges are to be borne and paid by the Buyer on actual basis,wherever applicable. will provide proof of all expenses to the Buyer.</p>
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
            className={`${styles.term_container} previewCard container-fluid`}
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
                  Date: <span className="label1">16.02.2022</span>
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
                          {moment(
                            lcModuleData?.lcApplication?.dateOfExpiry?.split(
                              'T',
                            )[0],
                          ).format('DD-MM-YYYY')}
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
                          {addPrefixOrSuffix(
                            lcModuleData?.lcApplication?.tolerancePercentage?.toUpperCase(),
                            '%',
                            '',
                          )}
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
                          {moment(
                            lcModuleData?.lcApplication?.latestDateOfShipment?.split(
                              'T',
                            )[0],
                          ).format('DD-MM-YYYY')}
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
                        <td>
                          <div
                            className={`${styles.element_datatable} m-2 datatable `}
                          >
                            <div className={styles.table_scroll_outer}>
                              <div className={styles.table_scroll_inner}>
                                {/* <table
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
                                </table> */}
                              </div>
                            </div>
                          </div>
                        </td>
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
                        <div className={`${styles.each_input} form-group`}>
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
                        <div
                          className={`${styles.addMoreRows}`}
                          onClick={(e) => {
                            addMoreRows()
                          }}
                        >
                          <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                            +
                          </span>{' '}
                          Add more rows
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
                        <div
                          className={`${styles.each_input} ${styles.phone} form-group`}
                        >
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
                        {/* <div className={`${styles.labelFloat} form-group`}>
                          <input type='text' id='phone' name="phone" className={`${styles.formControl} ${styles.input} input form-control`} required />
                          <label className={`label_heading_login`} htmlFor='phone'>Phone Number</label>
                        </div> */}
                        <div
                          className={`${styles.addMoreRows}`}
                          onClick={(e) => {
                            addMoreRows()
                          }}
                        >
                          <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                            +
                          </span>{' '}
                          Add more rows
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

      <LCAmendBar openbar={handlePopup} barName="Application for LC" />
    </>
  )
}

export default Index
