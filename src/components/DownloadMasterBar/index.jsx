import React, { useState } from 'react';
import styles from './index.module.scss';
import { Form, Modal } from 'react-bootstrap';
import DateCalender from '../DateCalender';

function Index({ btnName, isUser, isVendor, rightBtn, rightBtnClick, isSupplier }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <div className={`${styles.root} cta_bar`}>
        <div className={styles.btn_file} onClick={() => setShow(true)}>
          <span>{btnName} </span>
          <img src="/static/file_download.svg" className="img-fluid" alt="FileDownload" />
        </div>
      </div>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        className={styles.download_report}
        backdropClassName={styles.backdrop}
        style={{ height: '766px' }}
      >
        <Modal.Header className={`${styles.card_header} background`}>
          <Modal.Title>
            <h3>Download Report</h3>
          </Modal.Title>
          {!isSupplier ? 
          <img onClick={() => setShow(false)} className={styles.close_img} src="/static/close.svg" alt="close" />
          : '' }
        </Modal.Header>
        {!isSupplier ? (
          <>
            <Modal.Body className={`${styles.card_body} card-body container-fluid`}>
              <div className="row">
                <div className={`${styles.form_group} col-lg-12`}>
                  <div className={`${styles.radio_form}`}>
                    {['radio'].map((type) => (
                      <div key={`inline-${type}`} className={styles.radio_group}>
                        <Form.Check
                          className={`${styles.radio}`}
                          inline
                          label="All Records"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-12`}>
                  <div className={`${styles.radio_form}`}>
                    {['radio'].map((type) => (
                      <div key={`inline-${type}`} className={styles.radio_group}>
                        <Form.Check
                          className={styles.radio}
                          inline
                          label="Chapter Code"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {!isUser ? (
                  <>
                    <div className={`${styles.form_group} col-lg-6`}>
                      <input id="quantity" className={`${styles.input_field} input form-control`} type="text" />

                      <label className={`${styles.label_heading} label_heading`}>From</label>
                    </div>

                    <div className={`${styles.form_group} col-lg-6`}>
                      <input id="quantity" className={`${styles.input_field} input form-control`} type="text" />

                      <label className={`${styles.label_heading} label_heading`}>To</label>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`${styles.form_group} col-lg-6`}>
                      <div className="d-flex">
                        <select className={`${styles.input_field} ${styles.customSelect} input form-control`}>
                          <option value="India">Yes</option>
                          <option value="America">No</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>Status</label>
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-lg-6`}>
                      <div className="d-flex">
                        <select className={`${styles.input_field} ${styles.customSelect} input form-control`}>
                          <option value="India">India</option>
                          <option value="America">America</option>
                        </select>
                        {!isVendor ? (
                          <label className={`${styles.label_heading} label_heading`}>Company</label>
                        ) : (
                          <label className={`${styles.label_heading} label_heading`}>Country</label>
                        )}
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Modal.Body>

            <Modal.Footer>
              <div className={`${styles.footer} mx-auto`}>
                <button className={styles.footer_btn}>Download as Excel</button>
              </div>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Body className={`${styles.card_body} card-body container-fluid`}>
              <>
                <div className="row mb-4">
                  <div className={`${styles.form_group} col-lg-12`}>
                    <div className={`${styles.radio_form}`}>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                          <Form.Check
                            className={`${styles.radio} mr-5`}
                            inline
                            label="All Records"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Custom Report"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${styles.form_group} col-lg-6 col-md-6 col-sm-12 `}>
                    <div className="d-flex">
                      <DateCalender
                        isRequired={true}
                        //saveDate={saveDate}
                        //saveQuotationData={saveQuotationData}
                        labelName="From"
                      />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>

                  <div className={`${styles.form_group} col-lg-6 col-md-6 col-sm-12 `}>
                    <div className="d-flex">
                      <DateCalender
                        isRequired={true}
                        //saveDate={saveDate}
                        //saveQuotationData={saveQuotationData}
                        labelName="To"
                      />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>

                  <div className={`${styles.form_group} col-lg-6`}>
                    <div className="d-flex">
                      <label className={`${styles.select_heading} `}>
                        Status
                        <select className={`${styles.input_field} ${styles.customSelect} mt-3 input form-control`}>
                          <option value="India">All</option>
                          <option value="America">No</option>
                        </select>
                      </label>

                      <img
                        className={`${styles.select_arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div className={`${styles.form_group} col-lg-6`}>
                    <div className="d-flex">
                      <label className={`${styles.select_heading} `}>
                        Country
                        <select className={`${styles.input_field} ${styles.customSelect} mt-3 input form-control`}>
                          <option value="India">All</option>
                          <option value="America">America</option>
                        </select>
                      </label>

                      <img
                        className={`${styles.select_arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </>
            </Modal.Body>
            <Modal.Footer>
              <div className={`${styles.footer} mx-auto`}>
                <div className="d-flex justify-content-between">
                  <button onClick={handleClose} type="button" className={`${styles.close} ${styles.btn} btn mr-4`}>
                    Close
                  </button>
                  <button onClick={handleClose} type="button" className={`${styles.submit} ${styles.btn} btn`}>
                    Download
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}

export default Index;
