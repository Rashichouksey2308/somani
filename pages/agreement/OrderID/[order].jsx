import React from 'react'
import styles from './index.module.scss'
import {Row,Col} from "react-bootstrap"
import PaginateBar from '../../../src/components/Paginatebar';

function Index() {
  return (
   <>
    <div className={`${styles.card} container-fluid tabHeader card2`}>
        <div className={styles.head_header}>
            <img className={`${styles.arrow} img-fluid`}
             src="/static/keyboard_arrow_right-3.svg" alt="arrow" />
            <h1 className={`${styles.heading} heading`}>Ramakrishna Traders — RamaI001-000001</h1>
        </div>
        <div className={`${styles.card_body} card-body`}>
          <p className={`${styles.centerHeading} heading`}>Request for Insurance Quotation</p>
          <div className={`${styles.details}`}>
            <div className={`${styles.details_content} mb-1`}>
               <span className={`${styles.details_head}`}>Order ID:</span>
               <span className={`${styles.details_val} label_heading" ml-1`}>2FCH6589</span>
            </div>
            <div className={`${styles.details_content} mb-1`}>
               <span className={`${styles.details_head}`}>Date:</span>
               <span className={`${styles.details_val} label_heading" ml-1`}>16.02.2022</span>
            </div>
            <div className={`${styles.details_content} mb-1`}>
               <span className={`${styles.details_head}`}>Type of Insurance:</span>
               <span className={`${styles.details_val} label_heading" ml-1`}>Marine Insurance</span>
            </div>
            <br></br>
            <p className={`${styles.salutations} heading mb-3`}>Dear Sir/Madam,</p>
            <p className={`${styles.salutations} heading`}>As discussed, please note the detail of Cargo as under:,</p>
            <div className={`${styles.content} border_color`}>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Vessel
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       MV Miss Simon 
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        IMO Number
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       4987233 
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                       Year of Built
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                      2019
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Sum Insured
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                      INR 40.10 Crores (Including 110%)
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Material
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                      Chromite Ore
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Origin
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       South Africa
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Quantity
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       BL Weight 20,000.00 MTs. (+/-00%) 
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Port of Loading
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       Durban, South Africa
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Port of Discharge
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       Visakhapatnam, AP, India
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Laycan
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       14-25 November, 2021 
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        ETD
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       15 December, 2021 
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        ETA
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       15 December, 2021 
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Marine Insurance
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       All Risks Including ICC-A, War, SRCC, Theft, Act of God etc.
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Name of Insured
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       Indo German International Private Limited, Ground Floor, Plot No-49-18-6/1, Lalitha Nagar, Sakshi Office Road, Akkayyapalem, Visakhapatnam, Andhra Pradesh, 530016 GSTIN No- 37AAACI3028D2Z0
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} label_heading"`}>
                        Loss Payee
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val}`}>
                       Zurcher Kantonal Bank, Zurich 
                    </Col>
                    
                </Row>
                <Row className={`${styles.row}`}>
                    <Col md={3} sm={3} xs={4} className={`${styles.content_head} border-bottom`}>
                        Additional Information
                    </Col>
                    <Col md={9} sm={9} xs={8} className={`${styles.content_val} border-bottom`}>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu.
                    </Col>
                    
                </Row>
                              
            </div>
            <p className={`${styles.salutations} heading mb-3`}>Thanks & Best Regards,</p>
            <p className={`${styles.salutations} heading m-0 pt-0`}> Vipin Rajput </p>
            <p className={`${styles.salutations} heading m-0 pt-0`}> Manager Accounts</p>
            <p className={`${styles.salutations} heading m-0 pt-0`}> Indo German International Private Limited</p>
            <p className={`${styles.salutations} heading m-0 pt-0`}> 8-B, Sagar, 6-Tilak Marg</p>
            <p className={`${styles.salutations} heading m-0 pt-0`}> New Delhi-110001</p>
            <p className={`${styles.salutations} heading m-0 pt-0`}> Mobile No - 9312251303 </p>
            <p className={`${styles.salutations} heading m-0 pt-0 mb-5`}>  Email ID - vipinrajput@gmail.com</p>
          </div>
        </div>
    </div>
    <PaginateBar/>
   </>
  )
}

export default Index