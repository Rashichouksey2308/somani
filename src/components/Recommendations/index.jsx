/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import {CovertvaluefromtoCR} from '../../utils/helper'

const Index = ({
  financialsComment,
  creditDetail,
  companyComment,
  sanctionComment,
  strengthsComment,
  weaknessComment,
  addCompanyCommentArr,
  addFinancialsCommentArr,
  addStrengthsCommentArr,
  addWeaknessCommentArr,
  addSanctionCommentArr,
  dltCompanyCommentArr,
  dltFinancialsCommentArr,
  dltStrengthsCommentArr,
  dltWeaknessCommentArr,
  dltSanctionCommentArr,
  groupExposureData,
  setGroupExposureData,
  addGroupExpArr,
  saveSuggestedCreditData,
  deleteData,
  
}) => {
  const [editProfile, setEditProfile] = useState(false)
  const [editFinance, setEditFinance] = useState(false)
  const [saveTable, setSaveTable] = useState(false)
  const [editStren, setEditStren] = useState(false)
  const [editWeak, setEditWeak] = useState(false)
  const [editSanc, setEditSanc] = useState(false)
  const [addRow, setAddRow] = useState(false)

  const [companyComments, setCompanyComments] = useState('')
  const [strengthsComments, setStrengthsComments] = useState('')
  const [financialsComments, setFinancialsComments] = useState('')
  const [sanctionComments, setSanctionComments] = useState('')
  const [weaknessComments, setWeaknessComments] = useState('')

  console.log(creditDetail, 'THIS IS CREDIT DETAIL')

  const filteredCreditRating =
    creditDetail?.company?.creditLimit?.creditRating?.filter((rating) => {
      return creditDetail?._id === rating.order
    })

  // console.log(filteredCreditRating, 'THIS IS FILTERED CREDIT RATING')

  const [exposureData, setExposureData] = useState({
    accountConduct: '',
    limit: null,
    name: '',
    outstandingLimit: null,
  })

  // const handleGroupExpChange = (name, value) => {
  //   const newInput = { ...exposureData }
  //   newInput[name] = value
  //   setExposureData(newInput)
  // }

  const onExpSave = () => {
    addGroupExpArr(exposureData)
  }

  const addMoreExpRows = () => {
    setGroupExposureData([
      ...groupExposureData,
      {
        accountConduct: '',
        limit: null,
        name: '',
        outstandingLimit: null,
        action: false,
      },
    ])
  }

  const handleGroupExpChange = (name, value, index) => {
    // console.log(name, value, index, 'name,value')
    let tempArr = groupExposureData
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value
      }
    })
    // console.log(tempArr, 'tempArr')
    setGroupExposureData(tempArr)
  }
const handleRemoveRowEx=(index)=>{
  
  setGroupExposureData([...groupExposureData.slice(0,index), ...groupExposureData.slice(index+1)])
 }

  const setActions = (index, val) => {
    setGroupExposureData((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: val }
        }

        return obj
      })

      return newState
    })
  }

  return (
    <>
      <div className={`${styles.main} vessel_card card border_color `}>
        <div
          className={`${styles.head_container} card-header align-items-center d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#recommendations"
          aria-expanded="true"
          aria-controls="recommendations"
        >
          <h3 className={`${styles.heading} mb-0`}>Recommendations</h3>
          <span>+</span>
        </div>
        <div
          id="recommendations"
          className="collapse"
          aria-labelledby="recommendations"
          data-parent="#profileAccordion"
        >
          <hr className={styles.line} style={{ margin: '0' }}></hr>
          <div className={`${styles.dashboard_form}`}>
            <h5 className={styles.sub_heading}>Company Profile</h5>
            {companyComment &&
              companyComment.map((comment, index) => (
                <div key={index} className={`${styles.comment_para} d-flex justify-content-between`}>
                  <Form.Control
                    className={`${styles.comment} input`}
                    as="textarea"
                    defaultValue={comment}
                    rows={3}
                    readOnly={!editProfile}
                  />

                  <div className="ml-3 mt-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} mr-4`}
                      alt="edit"
                      onClick={(e) => {
                        setEditProfile(!editProfile)
                      }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      alt="delete"
                      onClick={(e) => {
                        deleteData(index)
                      }}
                    />
                  </div>
                </div>
              ))}

            <div className="d-flex mt-4 pb-4 position-relative">
              <input
                as="textarea"
                rows={3}
                placeholder=""
                className={`${styles.comment_field} input form-control`}
                onChange={(e) => setCompanyComments(e.target.value)}
                value={companyComments}
              />
              <label className={`${styles.label_heading} label_heading`}>
                Comments
              </label>

              <img
                className="img-fluid ml-4"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() =>
                  {
                  companyComments.length > 0 &&
                  addCompanyCommentArr(companyComments)
                  setCompanyComments("")  
                }
                }
              />
            </div>
          </div>
          <hr className={styles.line}></hr>
          <div className={`${styles.dashboard_form}`}>
            <h5 className={styles.sub_heading}>Comments On Financials</h5>
            {financialsComment &&
              financialsComment.map((comment, index) => (
                <div key={index} className={`${styles.comment_para} d-flex justify-content-between`}>
                  <Form.Control
                    className={`${styles.comment} input`}
                    defaultValue={comment}
                    as="textarea"
                    rows={3}
                    readOnly={!editFinance}
                  />
                  <div className="ml-3 mt-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} mr-4`}
                      onClick={() => {
                        setEditFinance(!editFinance)
                      }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      alt="delete"
                      onClick={() => dltFinancialsCommentArr(index)}
                    />
                  </div>
                </div>
              ))}

            <div className="d-flex mt-4 pb-4 position-relative">
              <input
                as="textarea"
                rows={3}
                placeholder=""
                className={`${styles.comment_field} input form-control`}
                onChange={(e) => setFinancialsComments(e.target.value)}
                value={financialsComments}
              />
              <label className={`${styles.label_heading} label_heading`}>
                Comments
              </label>

              <img
                className="img-fluid ml-4"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() =>
                 {
                   financialsComments.length > 0 &&
                   addFinancialsCommentArr(financialsComments)
                
                   setFinancialsComments("")
                  }
                }
              />
            </div>
          </div>
          <hr className={styles.line}></hr>

          <div className={`${styles.datatable} datatable`}>
            <h5 className='d-flex align-items-center'>
              <span>Group Exposure Details</span>
            </h5>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th>S.NO.</th>
                      <th>NAME OF THE COMPANY</th>
                      <th>LIMIT AMOUNT</th>
                      <th>OUTSTANDING LIMIT</th>
                      <th>ACCOUNT CONDUCT</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupExposureData &&
                      groupExposureData?.map((profile, index) => (
                        <tr key={index} className="table_credit shadow-none">
                          <td>{index + 1}</td>
                          <td className="position-relative">
                            {/* <input
                              className={`${styles.input} input form-control`}
                              name="name"
                              disabled={!profile.actions}
                              defaultValue={profile?.name}
                              onChange={(e) => {
                                handleGroupExpChange(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }}
                            ></input> */}
                            <select
                              className={`${styles.input} ${styles.customSelect} input form-control`}
                              name="name"
                              disabled={!profile.actions}
                              defaultValue={profile?.name}
                              onChange={(e) => {
                                handleGroupExpChange(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }}
                            >
                              <option>Select an option</option>
                              <option value="Emerging Traders">
                                Emerging Traders
                              </option>
                              <option value="Bhutani Traders">
                                Krishna Taders
                              </option>
                              <option value="Krishna Traders">
                                Krishna Traders
                              </option>
                            </select>
                            <img
                              className={`${styles.arrow} img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </td>
                          <td>
                            <input
                              name="limit"
                              defaultValue={profile?.limit}
                              disabled={!profile.actions}
                              onChange={(e) => {
                                handleGroupExpChange(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }}
                              className={`${styles.input} input`}
                            />
                          </td>
                          <td>
                            <input
                              name="outstandingLimit"
                              defaultValue={profile?.outstandingLimit}
                              disabled={!profile.actions}
                              onChange={(e) => {
                                handleGroupExpChange(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }}
                              className={`${styles.input} input`}
                            />
                          </td>
                          <td className="position-relative">
                            <select
                              className={`${styles.input} ${styles.customSelect} input form-control`}
                              name="accountConduct"
                              disabled={!profile.actions}
                              defaultValue={profile?.accountConduct}
                              onChange={(e) => {
                                handleGroupExpChange(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }}
                            >
                              <option>Select an Option</option>
                              <option value="Good">Good</option>
                              <option value="Satisfactory">Satisfactory</option>
                            </select>
                            <img
                              className={`${styles.arrow} img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </td>
                          <td>
                            <div>
                              {!profile.actions ? (
                                <img
                                  src="/static/mode_edit.svg"
                                  className={`${styles.edit_image} mr-3`}
                                  onClick={() => {
                                    setActions(index, true)
                                  }}
                                />
                              ) : (
                                <img
                                  src="/static/save-3.svg"
                                  className={`${styles.edit_image} mr-3`}
                                  alt="save"
                                  onClick={(e) => {
                                    setActions(index, false)
                                  }}
                                />
                              )}
                              <img
                                src="/static/delete 2.svg"
                                className={`${styles.delete_image}`}
                                onClick={() => {
                                  handleRemoveRowEx(index)
                                }}
                                alt="delete"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className={`${styles.add_image} p-3 d-flex justify-content-end`}
            >
              <div
                onClick={(e) => {
                  //  onExpSave(exposureData)
                  addMoreExpRows()
                }}
              >
                <span>+</span>Add More Rows
              </div>
            </div>
          </div>
          <span className={styles.view_order}>View Past Orders</span>

          <hr className={styles.line}></hr>

          <div className={`${styles.dashboard_form}`}>
            <div className={`${styles.sub_heading} value`}>Strengths</div>
            <div className="d-flex mt-5 pb-4">
              <input
                as="textarea"
                rows={3}
                placeholder=""
                className={`${styles.comment_field} input form-control`}
                onChange={(e) => setStrengthsComments(e.target.value)}
              />
              <label className={`${styles.label_heading} label_heading`}>
                Comments
              </label>

              <img
                className="img-fluid ml-4"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() =>
                  strengthsComments.length > 0 &&
                  addStrengthsCommentArr(strengthsComments)
                }
              />
            </div>
            <div className={`${styles.strength} value`}>Strengths</div>
            {strengthsComment &&
              strengthsComment.map((strengths, index) => (
                <div
                  key={index}
                  className={`${styles.textarea_main} d-flex justify-content-between`}
                >
                  <Form.Control
                    className={`${styles.paragraph} input`}
                    defaultValue={strengths}
                    as="textarea"
                    rows={3}
                    readOnly={!editStren}
                  />
                  <div className="mt-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} mr-4`}
                      alt="edit"
                      onClick={(e) => {
                        setEditStren(!editStren)
                      }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      alt="delete"
                      onClick={() => dltStrengthsCommentArr(index)}
                    />
                  </div>
                </div>
              ))}
            {/* <hr></hr> */}
            {/* <div className="d-flex justify-content-between">
              <Form.Control
                className={`${styles.paragraph} input`}
                as="textarea"
                rows={3}
                readOnly={editStren1}
              />
              <div className="mt-3">
                <img
                  src="/static/mode_edit.svg"
                  className={`${styles.edit_image} mr-4`}
                  alt="edit"
                  onClick={(e) => {
                    setEditStren1(!editStren1)
                  }}
                />
                <img
                  src="/static/delete 2.svg"
                  alt="delete"
                />
              </div>
            </div> */}

            <hr className={styles.line} style={{ margin: '-1px -35px 0' }}></hr>
            <div className={`${styles.sub_heading} value`}>Weakness</div>
            <div className="d-flex mt-5 pb-4">
              <input
                as="textarea"
                rows={3}
                placeholder=""
                className={`${styles.comment_field} input form-control`}
                onChange={(e) => setWeaknessComments(e.target.value)}
              />
              <label className={`${styles.label_heading} label_heading`}>
                Comments
              </label>

              <img
                className="img-fluid ml-4"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() =>
                  weaknessComments.length > 0 &&
                  addWeaknessCommentArr(weaknessComments)
                }
              />
            </div>
            <div className={`${styles.strength} value`}>Weakness</div>
            {weaknessComment &&
              weaknessComment.map((weakness, index) => (
                <div
                  key={index}
                  className={`${styles.textarea_main} d-flex justify-content-between`}
                >
                  <Form.Control
                    className={`${styles.paragraph} input`}
                    defaultValue={weakness}
                    as="textarea"
                    rows={3}
                    readOnly={!editWeak}
                  />
                  <div className="mt-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} mr-4`}
                      alt="edit"
                      onClick={(e) => {
                        setEditWeak(!editWeak)
                      }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      alt="delete"
                      onClick={(e) => {
                        dltWeaknessCommentArr(index)
                      }}
                    />
                  </div>
                </div>
              ))}

            {/* <div className="d-flex justify-content-between">
              <Form.Control
                className={`${styles.paragraph} input`}
                as="textarea"
                rows={3}
                readOnly={editWeak1}
              />
              <div className="mt-3">
                <img
                  src="/static/delete 2.svg"
                  className="mr-4"
                  alt="delete"
                />
                <img
                  src="/static/mode_edit.svg"
                  className={`${styles.edit_image}`}
                  alt="edit"
                  onClick={(e) => {
                    setEditWeak1(!editWeak1)
                  }}
                />
              </div>
            </div> */}

            <hr className={styles.line} style={{ margin: '-1px -35px 0' }}></hr>
            <div
              className={`${styles.sanction_terms} mt-4 d-flex justify-content-between align-items-center`}
            >
              <div className={`${styles.sanction_heading} value`}>
                Sanction Terms
              </div>
              <div
                className={`${styles.limit_container} d-flex justify-content-center`}
              >
                <div className={styles.limit}>
                  Total Limit:{' '}
                  <span>{creditDetail?.company?.creditLimit?.totalLimit}</span>
                </div>
                <div className={styles.limit}>
                  Utilised Limit:{' '}
                  <span>
                    {creditDetail?.company?.creditLimit?.utilizedLimit}
                  </span>
                </div>
                <div className={styles.limit}>
                  Available Limit:{' '}
                  <span>
                    {creditDetail?.company?.creditLimit?.availableLimit}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.sectionTable} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <tr>
                    <th></th>
                    <th>PREVIOUS LIMIT</th>
                    <th>APPLIED VALUE</th>
                    <th>DERIVED VALUE</th>
                    <th>SUGGESTED VALUE</th>
                  </tr>
                  <tr>
                    <td>Limit Value</td>
                    <td>{creditDetail?.company?.creditLimit?.availableLimit}</td>
                    <td>-</td>

                    {filteredCreditRating ? (
                      <>
                        {' '}
                        {filteredCreditRating &&
                          filteredCreditRating.length > 0 &&
                          filteredCreditRating.map((val, index) => (
                            <td key={index}>{val.derived.value}</td>
                          ))}{' '}
                      </>
                    ) : (
                      <td>-</td>
                    )}

                    <td>
                      <input
                        className={`${styles.text} input`}
                        type="text"
                        name="suggestedCreditLimit"
                        defaultValue={creditDetail?.suggestedCreditLimit}
                        onChange={(e) => {
                          saveSuggestedCreditData(
                            e.target.name,
                            Number(e.target.value * 10000000),
                          )
                        }}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>Order Value</td>
                    <td>-</td>
                    <td>
                      
                      {creditDetail?.orderValue}</td>

                    <td>-</td>

                    <td>
                      <input
                        className={`${styles.text} input`}
                        type="number"
                        onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                        name="suggestedOrderValue"
                        defaultValue={creditDetail?.suggestedOrderValue}
                        onChange={(e) => {
                          saveSuggestedCreditData(
                            e.target.name,
                            Number(e.target.value * 10000000),
                          )
                        }}
                      ></input>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center pt-5 pl-5">
              {/* <div className={`${styles.form_group} mr-5`}>
                <div className={`${styles.label_sanction}`}>Limit Value</div>
                <div>100 CR</div>
              </div>
              <div className={`${styles.form_group} ml-5 mr-5`}>
                <div className={`${styles.label_sanction}`}>Order Value</div>
                <div>100 Lakhs</div>
              </div>

            </div>
            <div className="d-flex mt-5 pb-4">
              <input
                as="textarea"
                rows={3}
                placeholder=""
                className={`${styles.comment_field} input form-control`}
                onChange={(e) => setSanctionComments(e.target.value)}
              />
              <label className={`${styles.label_heading} label_heading`}>
                Sanction Condition
              </label>

              <img
                className="img-fluid ml-4"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() =>
                  sanctionComments.length > 0 &&
                  addSanctionCommentArr(sanctionComments)
                }
              />
            </div>
            <div className={`${styles.strength} value`}>
              Sanction Conditions
            </div>
            {sanctionComment &&
              sanctionComment.map((sanction, index) => (
                <div
                  key={index}
                  className={`${styles.textarea_main} d-flex justify-content-between`}
                >
                  <Form.Control
                    className={`${styles.paragraph} input`}
                    defaultValue={sanction}
                    as="textarea"
                    rows={3}
                    readOnly={editSanc}
                  />
                  <div className="mt-3">
                    <img
                      src="/static/delete 2.svg"
                      className="mr-4"
                      alt="delete"
                      onClick={() => dltSanctionCommentArr(index)}
                    />
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image}`}
                      alt="edit"
                      onClick={(e) => {
                        setEditSanc(!editSanc)
                      }}
                    />
                  </div>
                </div>
              ))}

            {/* <div className="d-flex justify-content-between">
              <Form.Control
                className={`${styles.paragraph} input`}
                as="textarea"
                rows={3}
                readOnly={editSanc1}
              />
              <div className="mt-3">
                <img
                  src="/static/delete 2.svg"
                  className="mr-4"
                  alt="delete"
                />
                <img
                  src="/static/mode_edit.svg"
                  className={`${styles.edit_image}`}
                  alt="edit"
                  onClick={(e) => {
                    setEditSanc1(!editSanc1)
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Index
