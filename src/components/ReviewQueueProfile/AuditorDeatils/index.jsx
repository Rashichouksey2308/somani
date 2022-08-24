/* eslint-disable @next/next/no-img-element */
import index from 'components/Footer'
import React, { useState, useEffect } from 'react'
import styles from '../profile.module.scss'
import moment from 'moment'
import _get from "lodash/get";

function Index({ directorData }) {
  const [darkMode, setDarkMode] = useState(false)

  const [otherAssociates, setOtherAssociates] = useState('Current')



  useEffect(() => {
    if (
      localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true
    ) {
      // console.log('this')
      setDarkMode(true)
    } else {
      // console.log('this2')
      setDarkMode(false)
    }
  }, [])
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#directorDetails"
          aria-expanded="true"
          aria-controls="directorDetails"
        >
          <h2 className="mb-0">Director Details</h2>
          <span>+</span>
        </div>
        {directorData?.profile?.directorDetail?.length == 0 ?
          <p>Nothing to show</p>
          : null
        }
        {_get(directorData, 'profile.direcorDeail', [{}]).map((director, index) => {
          return (
            <div
              key={index}
              id={`directorDetails`}
              className="collapse show"
              aria-labelledby="directorDetails3"
              data-parent="#profileAccordion"
            >
              <div
                className={`${styles.directorDetails} ${styles.cardBody} directorDetails bg-transparent card-body border_color`}
              >
                <div className="accordion shadow-none" id="directorDetails3">
                  <div className={`${styles.card} border_color card`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className={`${styles.cardHeader} ${styles.collapsed}  card-header row no-gutters bg-transparent collapsed`}
                        data-toggle="collapse"
                        data-target={`#director${index}`}
                        aria-expanded={index == 0 ? "true" : "false"}
                        aria-controls={`director${index}`}
                      >
                        <div className={`${styles.detailsBox}  col-md-2`}>
                          <label className={`accordion_Text`}>Name</label>
                          {director?.name}
                        </div>
                        <div className={`${styles.detailsBox}  col-md-2`}>
                          <label className={`accordion_Text`}>PAN</label>
                          {_get(director, 'pan[0]', '')}{' '}
                          <img
                            src="/static/approved.svg"
                            alt="Approved"
                            className="img-fluid mt-n1"
                          />
                        </div>
                        <div className={`${styles.detailsBox}  col-md-2`}>
                          <label className={`accordion_Text`}>Email Id</label>
                          {director?.email}
                        </div>
                        <div className={`${styles.detailsBox}   col-md-2`}>
                          <label className={`accordion_Text`}>DIN</label>
                          <span className={`${moment(director?.dscStatus).format('DD MM YYYY') < moment(new Date).format('DD MM YYYY') ? styles.success : styles.danger}`}>
                            {director?.din}
                          </span>
                        </div>
                        <div className={`${styles.detailsBox}   col-md-2`}>
                          <label className={`accordion_Text`}>
                            Tenure Start Date
                          </label>
                          {director?.tenureStartDate}
                        </div>
                        <div className={`${styles.detailsBox}  col-md-2`}>
                          <label className={`accordion_Text`}>DSC Status</label>

                          {moment(director?.dscStatus).format('DD MM YYYY') < moment(new Date).format('DD MM YYYY') ? "Approved" : "Expired"}
                        </div>
                        <div className={`${styles.downArrow} `}>
                          <img
                            src={`${darkMode
                              ? `/static/white-arrow.svg`
                              : `/static/arrow-right.svg`
                              }`}
                            alt="arrow right"
                            className="img-fluid image_arrow"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id={`director${index}`}
                      className={`collapse ${index == 0 ? "show" : ""} `}
                      aria-labelledby={`director${index}`}
                      data-parent="#directorDetails"
                    >
                      <div
                        className={`${styles.cardBody} card-body border_color`}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <div
                            className={`${styles.collapsed} row no-gutters `}
                          >
                            <div className={`${styles.detailsBox}  col-md-2`}>
                              <label className={`accordion_Text`}>
                                DIN Status
                              </label>
                              {director?.dinStatus}
                            </div>
                            <div className={`${styles.detailsBox}  col-md-2`}>
                              <label className={`accordion_Text`}>
                                DSC Registered
                              </label>{' '}
                              {director?.dscRegistered ? 'Yes' : 'No'}{' '}

                            </div>
                            <div className={`${styles.detailsBox}  col-md-2`}>
                              <label className={`accordion_Text`}>
                                DSC Expiry Date
                              </label>
                              {director?.dscExpiryDate}
                            </div>
                            <div className={`${styles.detailsBox}  col-md-2`}>
                              <label className={`accordion_Text`}>
                                Designation
                              </label>
                              {director?.designation}
                            </div>
                            <div className={`${styles.detailsBox}  col-md-2`}>
                              <label className={`accordion_Text`}>
                                Date Of Birth
                              </label>
                              {director?.dateOfBirth}
                            </div>
                            <div className={`${styles.detailsBox}  col-md-2`}>
                              <label className={`accordion_Text`}>
                                Contact
                              </label>
                              +91 9876543210
                            </div>

                            <div
                              className={`${styles.detailsBox}  col-md-2 mt-5`}
                            >
                              <label className={`accordion_Text`}>Gender</label>
                              {director?.gender}
                            </div>
                            <div
                              className={`${styles.detailsBox}  col-md-2 mt-5`}
                            >
                              <label className={`accordion_Text`}>
                                Fathers Name
                              </label>
                              {director?.fatherName}
                              <img
                                src="/static/approved.svg"
                                alt="Approved"
                                className="img-fluid mt-n1"
                              />
                            </div>
                            <div
                              className={`${styles.detailsBox}  col-md-2 mt-5`}
                            >
                              <label className={`accordion_Text`}>
                                % Shareholding
                              </label>
                              40%
                            </div>
                            <div
                              className={`${styles.detailsBox}  col-md-2 mt-5`}
                            >
                              <label className={`accordion_Text`}>
                                Authorised Signatory
                              </label>
                              {director?.authorizedSignatory ? 'Yes' : 'No'}
                            </div>
                            <div
                              className={`${styles.detailsBox}  col-md-2 mt-5`}
                            >
                              <label className={`accordion_Text`}>
                                Landline
                              </label>
                              0542-5463874
                            </div>
                            <div
                              className={`${styles.detailsBox}  col-md-2 mt-5`}
                            >
                              <label className={`accordion_Text`}>
                                Address
                              </label>
                              {director?.address}
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.entities} border-color`}>
                          <div className={`${styles.entities_content}`}>
                            <p>Other Associated Entities</p>
                            <div className={`${styles.row}  d-flex justify-content-between align-items-center`}>
                              <div className="form-check ">
                                <input
                                  onChange={(e) => setOtherAssociates(e.target.value)}
                                  value='Current'
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  checked={otherAssociates === 'Current'}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  Current
                                </label>
                              </div>

                              <div className="form-check ">
                                <input
                                  onChange={(e) => setOtherAssociates(e.target.value)}
                                  value='Former'
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  checked={otherAssociates === 'Former'}

                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault2"
                                >
                                  Former
                                </label>
                              </div>

                              <div className="form-check ">
                                <input
                                  onChange={(e) => setOtherAssociates(e.target.value)}
                                  value='Independent'
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault3"
                                  checked={otherAssociates === 'Independent'}

                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault3"
                                >
                                  Independent
                                </label>
                              </div>

                              <div className="form-check ">
                                <input
                                  onChange={(e) => setOtherAssociates(e.target.value)}
                                  value='Additional'
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault4"
                                  checked={otherAssociates === 'Additional'}

                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault4"
                                >
                                  Additional
                                </label>
                              </div>
                              <div className="form-check ">
                                <input
                                  onChange={(e) => setOtherAssociates(e.target.value)}
                                  value='Nominated'
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault5"
                                  checked={otherAssociates === 'Nominated'}

                                />
                                <label
                                  // className="form-check-label"
                                  htmlFor="flexRadioDefault5"
                                >
                                  Nominated
                                </label>
                              </div>
                            </div>
                            <hr className={styles.hr}></hr>
                            <span>{otherAssociates} ({_get(director, `otherAssociatedEntities${otherAssociates}`, []).length})</span>
                            <div className={`${styles.table}`}>
                              <table
                                className={`${styles.table_details} table border-color`}
                                cellPadding="0"
                                cellSpacing="0"
                                border="0"
                              >
                                <thead>
                                  <tr>
                                    <th>CIN</th>
                                    <th>ENTITY NAME</th>
                                    <th>TENURE START DATE</th>
                                    <th>TENURE END DATE</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {director && _get(director, `otherAssociatedEntities${otherAssociates}`, []).map((associates, index) => {
                                    const fromDate = associates?.fromDate
                                    const toDate = associates?.toDate

                                    return (
                                      <tr key={index}>
                                        <td>{associates?.entityId}</td>
                                        <td>{associates?.entityName}</td>
                                        <td> {fromDate ? moment((fromDate)?.slice(0, 10), 'YYYY-MM-DD', true).format("DD-MM-YYYY") : ''}</td>
                                        <td>{toDate ? moment((toDate)?.slice(0, 10), 'YYYY-MM-DD', true).format("DD-MM-YYYY") : ''}</td>
                                      </tr>
                                    )
                                  })}

                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Index
