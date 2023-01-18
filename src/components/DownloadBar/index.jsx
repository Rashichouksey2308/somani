import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

function Index({
  handleApprove,
  handleReject,
  downLoadButtonName,
  isPrevious,
  leftButtonName,
  rightButtonName,
  isApprove,
  handleUpdate,
  isDropdown,
  mcaReportAvailable,
}) {
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
      >
        {isDropdown ? (
          <div className={`${styles.form_group}`}>
            <div className="d-flex">
              <select onChange={(e) => handleReject(e.target.value)} className={`${styles.input_field} form-control`}>
                <option selected value="" disabled>
                  GST Report{' '}
                </option>
                <option value="pdf">GST Report in Pdf</option>
                <option value="excel">GST Report in Excel</option>
              </select>
              <div className={`${styles.download_icon} my-auto`}>
                <Image src="/static/file_download.svg" alt="Picture of the author" width={14} height={17} />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center w-100">
              <div
                className={`${styles.reject} `}
                onClick={() => {
                  if (handleReject) {
                    handleReject('downlaod');
                  }
                }}
              >
                <span className={`${downLoadButtonName === 'MCA Report' ? (mcaReportAvailable ? styles.btn_green : styles.btn_red) : ''
                                     } mr-2`}
                >
                {downLoadButtonName}
              </span>
              <div className={`${styles.download_icon} ml-0 my-auto`}>
                <Image src="/static/file_download.svg" alt="Picture of the author" width={14} height={17} />
              </div>
            </div>

            {downLoadButtonName === 'MCA Report' && (
              <div className="d-flex  align-items-center w-100">
                <div
                  className={`${styles.reject} ml-3`}
                  onClick={() => {
                    if (handleReject) {
                      handleReject('fetch');
                    }
                  }}
                >
                  <span className={`mr-2`}>Fetch MCA Report</span>
                </div>
              </div>
            )}
          </div>
          </>
        )}
      <div className="d-flex justify-content-between align-items-center">
        {isPrevious ? (
          <div
            className={`${styles.reject} ml-3`}
            onClick={() => {
              if (handleUpdate) {
                handleUpdate();
              }
            }}
          >
            <span>{leftButtonName}</span>
          </div>
        ) : null}
        {isApprove ? (
          <div
            className={`${styles.approve} ml-3`}
            onClick={() => {
              if (handleApprove) {
                handleApprove();
              }
            }}
          >
            <span>{rightButtonName}</span>
          </div>
        ) : null}
      </div>

      <Modal show={show} className={`${styles.verify_gst} vessel_card card verify_gst`}>
        <Modal.Body>
          <div className={`${styles.title} d-flex justify-content-between align-items-center`}>
            <h3>Are you sure?</h3>
            <img src="/static/close.svg" alt="close" onClick={() => setShow(false)} className="img-fluid"></img>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button
              onClick={() => {
                if (handleReject) {
                  handleReject('fetch');
                  setShow(false);
                }
              }}
              type="button"
              className={`${styles.close} ${styles.btn} mr-3 text border_color btn w-50`}
            >
              Yes
            </button>
            <button
              onClick={() => setShow(false)}
              type="button"
              className={`${styles.submit} ${styles.btn} btn w-50`}
            >
              No
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}

export default Index;
