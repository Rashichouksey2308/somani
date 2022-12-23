import React, { useState } from 'react';
import styles from './index.module.scss';
import { Form, Modal } from 'react-bootstrap';

function Index({ btnName, isUser,isVendor, rightBtn, rightBtnClick }) {
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
      >
        <Modal.Header className={`${styles.card_header} background`}>
          <Modal.Title>
            <h3>Download Report</h3>
          </Modal.Title>
          <img onClick={() => setShow(false)} className={styles.close_img} src="/static/close.svg" alt="close" />
        </Modal.Header>
        <Modal.Body className={`${styles.card_body} card-body container-fluid`}>
          <div className="row">
            <div className={`${styles.form_group} col-lg-12`}>
              <div className={`${styles.radio_form}`}>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
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
                    {!isVendor ? 
                    <label className={`${styles.label_heading} label_heading`}>Company</label>
                    :
                    <label className={`${styles.label_heading} label_heading`}>Country</label>
}
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
      </Modal>
    </>
  );
}

export default Index;
