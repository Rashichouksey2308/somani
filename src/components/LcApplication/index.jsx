import React, { useState } from 'react'
import styles from './index.module.scss'
import {Row, Col, Form} from 'react-bootstrap'
import DateCalender from '../DateCalender'


function Index() {
    const [editStren, setEditStren] = useState(true)
    const [edit, setEdit] = useState(true)



  return (
    <>
      {' '}
      <div className="container-fluid mb-5 mt-2 border-0">
        <div className="p-3">
        <div className={`${styles.head_header} ml-5`}>
          <img
            className={`${styles.arrow} mr-2 img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={`${styles.heading}`}>Letter of Credit </h1>
        </div>

        <div className={`${styles.wrapper} mt-3 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#lcApplication"
          aria-expanded="true"
          aria-controls="lcApplication"
        >
          <h2 className="mb-0">LC Application</h2>
          <span>+</span>
        </div>
        <div
          id="lcApplication"
          className="collapse"
          aria-labelledby="lcApplication"
          data-parent="#lcApplication"
        >
          <div className={` ${styles.cardBody} card-body  border_color`}>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <Row>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                   <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>Irrevocable</option>
                      <option>Balaji Traders</option>
                    </select>
                   
                    <label className={`${styles.label_heading} label_heading`}>
                      (40A) Form of Documentary Credit<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                  <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (40E) Application Rules<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4"  lg={4} md={6} sm={6}>
                     <div className="d-flex">
                    <DateCalender labelName='(31D) Date Of Expiry'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                  </div>
                  </Col>

                  <Col className="mb-4 mt-4"  lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (32D) Place Of Expiry<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                  <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>First Class European Bank</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      (51D) LC Issuing Bank
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4"  lg={4} md={6} sm={6}>
                   <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>Indo International Trading Fzco</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      (50) Applicant<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>

                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (59) Beneficiary<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4"  lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (32B) Currency Code &amp; Amount
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4"  lg={4} md={6} sm={6}>
                  <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (39A) Tolerance (+/-) Percentage<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4"  lg={4} md={6} sm={6}>
                   <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>BNP PARIBAS PARIBAS _ BNPAFRPPS</option>
                      <option>Balaji Traders</option>
                    </select>
                   
                    <label className={`${styles.label_heading} label_heading`}>
                      (41A) Credit Available With<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                   <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>By Negotiation</option>
                      <option>Balaji Traders</option>
                    </select>
                   
                    <label className={`${styles.label_heading} label_heading`}>
                    (41A) Credit Available By<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={3} md={6} sm={6}>
                   <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>Documentary Credit</option>
                      <option>Balaji Traders</option>
                    </select>
                   
                    <label className={`${styles.label_heading} label_heading`}>
                      (42C) At Sight<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={1} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}
                    style={{left:'20px'}}>
                      No. of Days
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (42A) Drawee
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (42P) Deferred Payment
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>Prohibited</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      (43P) Partial Shipment
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>Prohibited</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      (43T) Transhipments
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <div className='d-flex'>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (44A) Shipment From
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
                  </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <div className='d-flex'>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (44E) Port of Loading
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
                  </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    >
                      <option>Visakhapatnam Port, India</option>
                      <option>Balaji Traders</option>
                    </select>
                   
                    <label className={`${styles.label_heading} label_heading`}>
                      (44F) Port of Discharge<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                     <div className="d-flex">
                    <DateCalender labelName='(44C) Latest Date Of Shipment'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                  </Col>
                  <Col className="mb-4 mt-4" md={12}>
                    <textarea
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                      style={{height: "103px"}}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (45A) Description Of The Goods
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>

                </Row>
              </div>
            </div>
            <hr className={styles.line}></hr>

             
              <div className={`${styles.dashboard_form}`}>

              <div className={`${styles.sub_heading} value`}>46A DOCUMENT REQUIRED</div>
                <div className="d-flex mt-5 pb-4">
                    <input
                    as="textarea"
                    rows={3}
                    placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                    className={`${styles.comment_field} input form-control`}
                    />
                    <img
                    className="img-fluid ml-4"
                    src="/static/add-btn.svg"
                    alt="add button"
                    />
                </div>
                <div className="d-flex justify-content-between pt-4 pb-3">
                <div className={`${styles.number} mr-n3`}>1.</div>
                <Form.Control className={`${styles.paragraph} input`} 
                        as="textarea"
                        rows={3} 
                        
                readOnly={editStren} />
                <div>
                <img
                src="/static/mode_edit.svg"
                className='img-fluid'
                alt="edit"
                onClick={(e) => {setEditStren(!editStren)}}/>
                <img
                src="/static/delete 2.svg"
                className="img-fluid ml-3"
                alt="delete" />
               </div>
        
              </div>
              <hr></hr>
              </div>
              <hr className={styles.line}></hr>

             
            <div className={`${styles.dashboard_form}`}>

            <div className={`${styles.sub_heading} value`}>47A ADDITIONAL CONDITIONS</div>
            <div className="d-flex mt-5 pb-4">
                <input
                as="textarea"
                rows={3}
                placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                className={`${styles.comment_field} input form-control`}
                />
                <img
                className="img-fluid ml-4"
                src="/static/add-btn.svg"
                alt="add button"
                />
            </div>
            <div className="d-flex justify-content-between pt-4 pb-3">
            <div className={`${styles.number} mr-n3`}>1.</div>
                <Form.Control className={`${styles.paragraph} input`} 
                        as="textarea"
                        rows={3} 
                        
                readOnly={edit} />
                <div>
                <img
                src="/static/mode_edit.svg"
                className='img-fluid'
                alt="edit"
                onClick={(e) => {setEdit(!edit)}}/>

              
                <img
                src="/static/delete 2.svg"
                className="img-fluid ml-3"
                alt="delete" />
            </div>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between pt-4 pb-3">
            <div className={`${styles.number} mr-n3`}>2.</div>
                <Form.Control className={`${styles.paragraph} input`} 
                        as="textarea"
                        rows={3} 
                        
                readOnly={edit} />
                <div>
                <img
                src="/static/mode_edit.svg"
                className='img-fluid'
                alt="edit"
                onClick={(e) => {setEdit(!edit)}}/>
              
                <img
                src="/static/delete 2.svg"
                className="img-fluid ml-3"
                alt="delete" />
            </div>
            </div>
            </div>

            <hr></hr>
            <div className={`${styles.dashboard_form}`}>
            <div className="d-flex justify-content-between align-items-center pt-4 pb-3">
                <div className='d-flex'>
            <div className={`${styles.number}`}>3.</div>
            <h5>PRODUCT SPECIFICATION</h5>
            </div>
                <div>
                <img
                src="/static/mode_edit.svg"
                className='img-fluid'
                alt="edit"
                />

              
                <img
                src="/static/delete 2.svg"
                className="img-fluid ml-3"
                alt="delete" />
            </div>
            </div>

            <div className={`${styles.datatable} mb-5 ml-5 datatable `}>
       
            <div className={styles.table_scroll_outer}>
                <div className={styles.table_scroll_inner}>
            <table
            className={`${styles.table} table` }
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
                </div>

            <hr className={styles.line}></hr>   
            <div className={`${styles.dashboard_form}`}>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.body}`}>
                <Row>
                 
                  <Col className="mb-4 mt-4" md={12}>
                    <textarea
                      className={`${styles.input_field} input form-control`}
                      style={{height: "103px"}}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (48) Presentation Period
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={12}>
                    <textarea
                      className={`${styles.input_field} input form-control`}
                      style={{height: "103px"}}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (49) Confirmation Instructions
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                      >
                      <option>Bnp Paribas Paribas - Bnpafrppxx</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      (53A) Reimbursing Bank
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                     <div className="d-flex">
                  <select
                      className={`${styles.input_field}  ${styles.customSelect} input form-control`} >
                      <option>Bnp Paribas Paribas - Bnpafrppxx</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      (57) Advise Through Bank
                      <strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                    </div>
                  </Col>
                 
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`} style={{top:'22px'}}>
                      (57A) Second Advising Bank, if Applicable
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`} style={{top:'22px'}}>
                      (58A) Requested Confirmation Party
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                <Col className="mb-4 mt-4" md={12}>
                    <textarea
                      className={`${styles.input_field} input form-control`}
                      style={{height: "103px"}}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (71B) Charges
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={12}>
                    <textarea
                      className={`${styles.input_field} input form-control`}
                      style={{height: "139px"}}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (78) Instructions To Paying / Accepting / Negotiating Bank
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                 
                  <Col className="mb-4 mt-4" md={12}>
                    <textarea
                      className={`${styles.input_field} input form-control`}
                      style={{height: "103px"}}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      (72) Sender To Receiver Information
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  </Row>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
        
        </div>
      </div>
    </>
  )
}

export default Index
