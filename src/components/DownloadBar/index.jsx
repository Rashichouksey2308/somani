// import  Router  from 'next/router'
import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function index({
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
  return (
    <div
      className={`${styles.root} ${!sidebar ? styles.no_sidebar : null}
    ${isMobile ? styles.no_sidebar_mobile : null} cta_bar`}
    >
      {isDropdown ? (
        <div className={`${styles.form_group}`} style={{ top: '5px' }}>
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
            {/* <img
          className={`${styles.arrow} image_arrow img-fluid`}
          src="/static/inputDropDown.svg"
          alt="Search"
        /> */}
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center w-100" >
            <div
              className={`${styles.reject} `}
              onClick={() => {
                if (handleReject) {
                  handleReject('downlaod');
                }
              }}
            >
              <span className={`mr-2`} style={{ color: mcaReportAvailable ? '#43C34D' : '#EA3F3F' }}>{downLoadButtonName}</span>
              <Image
                src="/static/file_download.svg"
                alt="Picture of the author"
                width={14}
                height={17}
              />
            </div>
         
          {downLoadButtonName === 'MCA Report' && <div className="d-flex  align-items-center w-100">
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
          </div>}
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
    </div>
  );
}

export default index;
