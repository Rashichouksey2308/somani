/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './index.module.scss';
import moment from 'moment';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Index = ({
  uploadDocument1,
  uploadDocument2,
  docName,
  docName2,
  containerList,
  vesselCertificate,
  setVesselCertificate,
  setContainerListDocument,
}) => {
  const vesselDocFunction = (e) => {
    if (e.target.id === 'Vessel Certificate') {
      setVesselCertificate(e.target.files[0]);
    }
    if (e.target.id === 'Container List') {
      setContainerListDocument(e.target.files[0]);
    }
    uploadDocument1(e);
  };
  console.log(containerList, vesselCertificate, 'docName');
  const handleClose = (e) => {
    if (e === 'Vessel Certificate') {
      setVesselCertificate(null);
    }
    if (e === 'Container List') {
      setContainerListDocument(null);
    }
  };

  return (
    <div className={`${styles.main} border_color card`}>
      <div
        className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#upload"
        aria-expanded="true"
        aria-controls="upload"
      >
        <h3 className={styles.heading}>Upload Documents</h3>
        <span>+</span>
      </div>
      <div
        id="upload"
        className="collapse"
        aria-labelledby="upload"
        data-parent="#upload"
      >
        <div className={`${styles.table_form}`}>
          <div className={styles.table_container}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} mb-0 table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th>
                        DOCUMENT NAME{' '}
                        <img
                          className={`mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>
                        FORMAT{' '}
                        <img
                          className={`mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>
                        DOCUMENT DATE{' '}
                        <img
                          className={`mb-1`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table_row">
                      <td className={styles.doc_name}>
                        {docName}
                        <strong className="text-danger">*</strong>
                      </td>
                      <td>
                        {vesselCertificate ? (
                          vesselCertificate?.originalName
                            ?.toLowerCase()
                            .endsWith('.xls') ||
                          vesselCertificate?.originalName
                            ?.toLowerCase()
                            .endsWith('.xlsx') ? (
                            <img
                              src="/static/excel.svg"
                              className="img-fluid"
                              alt="Pdf"
                            />
                          ) : vesselCertificate?.originalName
                              ?.toLowerCase()
                              .endsWith('.doc') ||
                            vesselCertificate?.originalName
                              ?.toLowerCase()
                              .endsWith('.docx') ? (
                            <img
                              src="/static/doc.svg"
                              className="img-fluid"
                              alt="Pdf"
                            />
                          ) : (
                            <img
                              src="/static/pdf.svg"
                              className="img-fluid"
                              alt="Pdf"
                            />
                          )
                        ) : null}
                      </td>
                      <td className={styles.doc_row}>
                        {vesselCertificate == null
                          ? ''
                          : moment(vesselCertificate?.date).format(
                              'DD-MM-YYYY, h:mm a',
                            )}
                      </td>
                      <td>
                        {' '}
                        {vesselCertificate == null ? (
                          <>
                            <div className={styles.uploadBtnWrapper}>
                              <input
                                id={docName}
                                type="file"
                                name="myfile"
                                accept="application/msword, text/plain, application/pdf, .docx"
                                onChange={(e) => vesselDocFunction(e)}
                              />
                              <button className={`${styles.button_upload} btn`}>
                                Upload
                              </button>
                            </div>
                          </>
                        ) : (
                          <div
                            className={`${styles.certificate} text1 d-flex justify-content-between`}
                          >
                            <span>
                              {vesselCertificate?.originalName ??
                                vesselCertificate?.name}
                            </span>
                            <img
                              className={`${styles.close_image} image_arrow mr-2`}
                              src="/static/close.svg"
                              onClick={() => handleClose(docName)}
                              alt="Close"
                            />{' '}
                          </div>
                        )}
                      </td>
                    </tr>
                    {docName2 && (
                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          {docName2}
                          <strong className="text-danger">*</strong>
                        </td>
                        <td>
                          {containerList ? (
                            containerList?.originalName
                              ?.toLowerCase()
                              .endsWith('.xls') ||
                            containerList?.originalName
                              ?.toLowerCase()
                              .endsWith('.xlsx') ? (
                              <img
                                src="/static/excel.svg"
                                className="img-fluid"
                                alt="Pdf"
                              />
                            ) : containerList?.originalName
                                ?.toLowerCase()
                                .endsWith('.doc') ||
                              containerList?.originalName
                                ?.toLowerCase()
                                .endsWith('.docx') ? (
                              <img
                                src="/static/doc.svg"
                                className="img-fluid"
                                alt="Pdf"
                              />
                            ) : (
                              <img
                                src="/static/pdf.svg"
                                className="img-fluid"
                                alt="Pdf"
                              />
                            )
                          ) : null}
                        </td>
                        <td className={styles.doc_row}>
                          {containerList == null
                            ? ''
                            : moment(containerList?.date).format(
                                'DD-MM-YYYY, h:mm a',
                              )}
                        </td>
                        <td>
                          {' '}
                          {containerList == null ? (
                            <>
                              <div className={styles.uploadBtnWrapper}>
                                <input
                                  id={docName2}
                                  type="file"
                                  name="myfile"
                                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                  onChange={(e) => {
                                    if (
                                      e.target.files[0].name
                                        .toLocaleLowerCase()
                                        .endsWith('.xls') ||
                                      e.target.files[0].name
                                        .toLocaleLowerCase()
                                        .endsWith('.xlsx')
                                    ) {
                                      vesselDocFunction(e);
                                    } else {
                                      let toastMessage =
                                        'only XLS files are allowed';
                                      if (
                                        !toast.isActive(
                                          toastMessage.toUpperCase(),
                                        )
                                      ) {
                                        toast.error(
                                          toastMessage.toUpperCase(),
                                          { toastId: toastMessage },
                                        );
                                      }
                                    }
                                  }}
                                />
                                <button
                                  className={`${styles.button_upload} btn`}
                                >
                                  Upload
                                </button>
                              </div>
                            </>
                          ) : (
                            <div
                              className={`${styles.certificate} text1 d-flex justify-content-between`}
                            >
                              <span>
                                {containerList?.originalName ??
                                  containerList?.name}
                              </span>
                              <img
                                className={`${styles.close_image} image_arrow mr-2`}
                                src="/static/close.svg"
                                onClick={() => handleClose(docName2)}
                                alt="Close"
                              />{' '}
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
