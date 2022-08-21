import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import styles from './index.module.scss'
import SaveBar from '../SaveBar'

function Index() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const handlePopup = () => {
    setShow(true)
  }
  return (
    <>
      <div className={`${styles.root} card container-fluid`}>
        <div className={`${styles.head}`}>
          <p className={`${styles.heading}`}>
            INDO GERMAN INTERNATIONAL PVT. LTD.
          </p>
          <div className={`${styles.heading_addresses}`}>
            <p>7A, SAGAR APARTMENTS, 6-TILAK MARG, NEW DELHI-110001 </p>
            <p>
              TEL: +91 – 11 – 23782022, 23387413, 23382592, 23384968, FAX: +91 –
              11 – 23782806{' '}
            </p>
            <p>CIN NO-U74899DL1994PTC063676</p>
          </div>
          <div className={`${styles.type}`}>
            <p>DELIVERY ORDER </p>
            <p>(ORIGINAL) </p>
          </div>
        </div>
        <div className={`${styles.body}`}>
          <div
            className={`${styles.body_header} d-flex justify-content-between align-item-center`}
          >
            <div className={`${styles.date} `}>
              <p>
                DO.NO:{' '}
                <span className={`${styles.bold}`}>RamaI001-000001/01</span>
              </p>
              <p>
                DATE: <span className={`${styles.bold}`}>01.07.2021</span>
              </p>
            </div>
            <div className={`${styles.validity}`}>
              <p>
                VALIDITY: <span className={`${styles.bold}`}>10 Days</span>
              </p>
            </div>
          </div>
          <div className={`${styles.content}`}>
            <p>To:</p>
            <p className={`${styles.bold} ${styles.width} w-50`}>
              M/S BOTHRA SHIPPING SERVICES PVT. LTD. 28-2-47,Ist Floor, Daspalla
              Centre, Suryabagh, Visakhapatnam 530020, (Andhra Pradesh)
            </p>

            <div>
              CC:{' '}
              <span className={`${styles.bold} ${styles.width2} `}>
                Dr. Shivadeo Upadhyay, M/S Jayaswal Neco Industries Limited,
                Raipur, Chhatisgarh.
              </span>
            </div>
            <div>
              CC:{' '}
              <span className={`${styles.bold} ${styles.width2} `}>
                Dr. Amin Controllersr, Yizag.
              </span>
            </div>
            <p>
              Kind Attn.{' '}
              <span className={`${styles.bold} w-50`}>
                Mr. N.A. Khan / Mr. Nabin Chand Boyed.
              </span>
            </p>
            <div className={`${styles.letter_content}`}>
              <p>Dear Sir,</p>
              <p>
                We hereby authorize you to deliver the quantity to{' '}
                <span className={`${styles.bold}`}>
                  MS Jayaswal Neco Industries Limited,
                </span>{' '}
                Vide <span className={`${styles.bold}`}>BL No. 1</span> dated{' '}
                <span className={`${styles.bold}`}>18/03/2021</span> as per the
                detail given below:
              </p>
              <div className={`${styles.material}`}>
                <div
                  className={`d-flex justify-content-start align-items-start`}
                >
                  <span className={styles.head}>l) Material :</span>{' '}
                  <span className={`${styles.bold} `}>
                    Lake Vermont Premium Hard Coking Coal (MV CRIMSON ARK)
                    Bothra, S-4 & L-6 Yard, Port Area, Visakhapatnam Port Trust,
                    Visakhapatnam.
                  </span>
                </div>
                <div
                  className={`d-flex justify-content-start align-items-start`}
                >
                  <span className={styles.head}>2) Quantity : </span>{' '}
                  <span className={`${styles.bold} `}>
                    6350.000 MTs. Vermont Premium Hard Coking Coal
                  </span>
                </div>
                <div
                  className={`d-flex justify-content-start align-items-start`}
                >
                  <span className={styles.head}>3) Balance Qty :</span>{' '}
                  <span className={`${styles.bold} `}>
                    After delivery of material against this DO the balance Qty.
                    will be as under :
                    <p>a) Vermont Premium PH C Coal NIL MTs</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.footer} m-3`}>
            <p>
              For{' '}
              <span className={`${styles.bold}`}>
                Indo German International Private Limited
              </span>
            </p>
            <div>
              <p className={`${styles.bold}`}>Authorised Signatory</p>
              <select>
                <option>Vipin Rajput</option>
              </select>
            </div>
          </div>
        </div>
        <div className={`${styles.cc}`}>
          <p>
            CC : Indo German International Private Limited, VIZAG : Delivery
            order file
          </p>
          <p className={`${styles.bold} ${styles.extra_margin}`}>
            : Delivery order file
          </p>
        </div>
      </div>

      <SaveBar rightBtn={'Send For Approval'} rightBtnClick={handlePopup} />

      <Modal
        show={show}
        className={`${styles.share_lc} vessel_card card share_lc`}
      >
        <Modal.Body className={`${styles.card_body} card-body`}>
          <form>
            <div className={`${styles.tab_content} tab-content`} id="LCDraft">
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
                      Deliveryorder.pdf<span>128kb</span>
                    </label>
                    <input
                      type="checkbox"
                      className="ml-auto"
                      id="lc_document"
                      value="LC Document"
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
                      Deliveryorder.pdf<span>128kb</span>
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
    </>
  )
}

export default Index
