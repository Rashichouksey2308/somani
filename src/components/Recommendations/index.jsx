/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import {
  CovertvaluefromtoCR,
  checkNan,
  addPrefixOrSuffix,
} from '../../utils/helper'
import { add } from 'lodash'
import { array } from 'prop-types'

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
  setSanctionComment,
  suggestedCredit,
}) => {
  const [editProfile, setEditProfile] = useState([])
  const [editFinance, setEditFinance] = useState([])
  const [saveTable, setSaveTable] = useState(false)
  const [editStren, setEditStren] = useState([])
  const [editWeak, setEditWeak] = useState([])
  const [editSanc, setEditSanc] = useState(false)
  const [addRow, setAddRow] = useState(false)

  const [companyComments, setCompanyComments] = useState('')
  const [strengthsComments, setStrengthsComments] = useState('')
  const [financialsComments, setFinancialsComments] = useState('')
  const [sanctionComments, setSanctionComments] = useState('')
  const [sanctionCommentsIndex, setSanctionCommentsIndex] = useState([])
  const [weaknessComments, setWeaknessComments] = useState('')
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    groupExposureLimit: false,
    groupExposureOutLimit: false,
    sanction: false,
    suggestedOrderValue: false,
    suggestedCreditLimit: false,
  })

  console.log(financialsComment, editProfile, 'companyComments')
  // console.log(creditDetail, 'THIS IS CREDIT DETAIL')

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

  useEffect(() => {
    let companyCommentseditable = []
    companyComment?.forEach((item) => {
      companyCommentseditable.push({ editable: false })
    })
    setEditProfile(companyCommentseditable)

    let financialCommentseditable = []
    financialsComment?.forEach((item) => {
      financialCommentseditable.push({ editable: false })
    })
    setEditFinance(financialCommentseditable)

    let weakCommentseditable = []
    weaknessComment?.forEach((item) => {
      weakCommentseditable.push({ editable: false })
    })
    setEditWeak(weakCommentseditable)

    let strenthCommentseditable = []
    strengthsComment?.forEach((item) => {
      strenthCommentseditable.push({ editable: false })
    })
    setEditStren(strenthCommentseditable)
  }, [companyComment, financialsComment, strengthsComment, weaknessComment])

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
    console.log(name, value, index, 'name,value')
    let tempArr = [...groupExposureData]
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value.toLocal
      }
    })
    // console.log(tempArr, 'tempArr')
    setGroupExposureData(tempArr)
  }
  const handleRemoveRowEx = (index) => {
    setGroupExposureData([
      ...groupExposureData.slice(0, index),
      ...groupExposureData.slice(index + 1),
    ])
  }

  const setActions = (index, val, editType) => {
    console.log(index, val, editType, 'DANGEROUS')
    if (editType === 'sanctionComments') {
      setSanctionComment((prevState) => {
        const newState = prevState.map((obj, i) => {
          if (i == index) {
            return { ...obj, actions: val }
          }

          return obj
        })

        return newState
      })
    } else {
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
  }

  //sanction comments functionality

  const handleInput = (val, index) => {
    let temp = [...sanctionComment]
    temp.splice(index, 1, val)
    setSanctionComment(temp)
  }
  const onEditClickHandler = (index, task) => {
    if (task === 'edit') {
      let tempIndex = [...sanctionCommentsIndex]
      tempIndex.push(index)
      setSanctionCommentsIndex(tempIndex)
    } else {
      let deleteIndex = [...sanctionCommentsIndex]
      deleteIndex.splice(0, 1)
      setSanctionCommentsIndex(deleteIndex)
    }
  }

  const onSanctionCommentRemove = (index) => {
    setSanctionComment([
      ...sanctionComment.slice(0, index),
      ...sanctionComment.slice(index + 1),
    ])
  }
  console.log(sanctionCommentsIndex, 'INDEXOF')
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
          {/* <hr className={styles.line} style={{ margin: '0' }}></hr> */}
          <div className={`${styles.dashboard_form} card-body`}>
            <h5 className={styles.sub_heading}>Company Profile</h5>
            {companyComment &&
              companyComment.map((comment, index) => (
                <div
                  key={index}
                  className={`${styles.comment_para} border_color d-flex justify-content-between`}
                >
                  <Form.Control
                    className={`${styles.comment} input`}
                    as="textarea"
                    defaultValue={comment}
                    rows={3}
                    readOnly={!editProfile[index]?.editable}
                  />

                  <div className="mr-3">
                    <img
                      src={`/static/${editProfile[index]?.editable ? 'save-3.svg' : 'mode_edit.svg'
                        }`}
                      role="button"
                      className={`${styles.edit_image} d-block`}
                      alt="edit"
                      onClick={(e) => {
                        let tempEditProfile = [...editProfile]
                        tempEditProfile[index].editable = !tempEditProfile[index].editable
                        setEditProfile(tempEditProfile)
                      }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      role="button"
                      className={`d-block mt-2`}
                      alt="delete"
                      onClick={(e) => {
                        deleteData(index)
                      }}
                    />
                  </div>
                </div>
              ))}

            <div className="d-flex mt-4 position-relative">
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
                role="button"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() => {
                  companyComments.length > 0 &&
                    addCompanyCommentArr(companyComments)
                  setCompanyComments('')
                }}
              />
            </div>
          </div>
          <hr className={`${styles.line} border-0  mb-0`}></hr>
          <div className={`${styles.dashboard_form} border_color`}>
            <h5 className={styles.sub_heading}>Comments On Financials</h5>
            {financialsComment &&
              financialsComment.map((comment, index) => (
                <div
                  key={index}
                  className={`${styles.comment_para} d-flex justify-content-between`}
                >
                  <Form.Control
                    className={`${styles.comment} input`}
                    defaultValue={comment}
                    as="textarea"
                    rows={3}
                    readOnly={!editFinance[index]?.editable}
                  />
                  <div className="mr-3">
                    <img
                      src={`/static/${editFinance[index]?.editable ? 'save-3.svg' : 'mode_edit.svg'
                        }`}
                      role="button"
                      className={`${styles.edit_image} d-block`}
                      onClick={(e) => {
                        let tempEdit = [...editFinance]
                        tempEdit[index].editable = !tempEdit[index].editable
                        setEditFinance(tempEdit)
                      }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      role="button"
                      className={`d-block mt-2`}
                      alt="delete"
                      onClick={() => dltFinancialsCommentArr(index)}
                    />
                  </div>
                </div>
              ))}

            <div className="d-flex mt-4 position-relative">
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
                role="button"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() => {
                  financialsComments.length > 0 &&
                    addFinancialsCommentArr(financialsComments)

                  setFinancialsComments('')
                }}
              />
            </div>
          </div>
          <hr className={`${styles.line} border_color`}></hr>

          <div className={`${styles.datatable} datatable`}>
            <h5 className="d-flex align-items-center">
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
                      <th>OUTSTANDING EXPOSURE</th>
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
                              type="text"
                              // onFocus={(e) => {
                              //   setIsFieldInFocus({ ...isFieldInFocus, groupExposureLimit: true }),
                              //     e.target.type = 'number'
                              // }}
                              // onBlur={(e) => {
                              //   setIsFieldInFocus({ ...isFieldInFocus, groupExposureLimit: false }),
                              //     e.target.type = 'text'
                              // }}
                              // value={
                              //   isFieldInFocus.groupExposureLimit ?
                              //   profile?.limit:
                              //     Number(profile?.limit)?.toLocaleString() + ` Lakhs`}
                              value={profile?.limit}
                              disabled={!profile.actions}
                              onKeyDown={(evt) => {
                                const re = /^[0-9\b]+$/
                                console.log(
                                  re.test(evt.target.value),
                                  'keydone',
                                  evt.target.value,
                                )
                                if (re.test(evt.target.value) == false) {
                                  // evt.preventDefault()
                                }
                              }}
                              onChange={(e) => {
                                e.target.value = (
                                  parseInt(
                                    e.target.value.replace(/[^\d]+/gi, ''),
                                  ) || 0
                                ).toLocaleString('en-IN')

                                handleGroupExpChange(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }}
                              className={`${styles.input} input`}
                              pattern="^[\d,]+$"
                            />
                          </td>
                          <td>
                            <input
                              name="outstandingLimit"
                              type="text"
                              value={profile?.outstandingLimit}
                              disabled={!profile.actions}
                              onKeyDown={(evt) => {
                                const re = /^[0-9\b]+$/
                                console.log(
                                  re.test(evt.target.value),
                                  'keydone',
                                  evt.target.value,
                                )
                                if (re.test(evt.target.value) == false) {
                                  // evt.preventDefault()
                                }
                              }}
                              onChange={(e) => {
                                e.target.value = (
                                  parseInt(
                                    e.target.value.replace(/[^\d]+/gi, ''),
                                  ) || 0
                                ).toLocaleString('en-IN')

                                handleGroupExpChange(
                                  e.target.name,
                                  e.target.value.toString(),
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
                              <option value="Poor">Poor</option>
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
                                  role="button"
                                  className={`${styles.edit_image} mr-3`}
                                  onClick={() => {
                                    setActions(index, true)
                                  }}
                                />
                              ) : (
                                <img
                                  src="/static/save-3.svg"
                                  role="button"
                                  className={`${styles.edit_image} mr-3`}
                                  alt="save"
                                  onClick={(e) => {
                                    setActions(index, false)
                                  }}
                                />
                              )}
                              <img
                                src="/static/delete 2.svg"
                                role="button"
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
            <div className={`${styles.add_image} d-flex justify-content-end`}>
              <div
                role="button"
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

          <hr className={`${styles.line} border-0 mt-5`}></hr>

          <div className={`${styles.dashboard_form} border_color p-0`}>
            <div className={`${styles.comment_inner}`}>
              <div className={`${styles.sub_heading} value`}>Strengths</div>
              <div className="d-flex mt-5 pb-4">
                <input
                  as="textarea"
                  rows={3}
                  placeholder=""
                  value={strengthsComments}
                  className={`${styles.comment_field} input form-control`}
                  onChange={(e) => setStrengthsComments(e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Comments
                </label>

                <img
                  className="img-fluid ml-4"
                  role="button"
                  src="/static/add-btn.svg"
                  alt="add button"
                  onClick={() => {
                    strengthsComments.length > 0 &&
                      addStrengthsCommentArr(strengthsComments)
                    setStrengthsComments('')
                  }}
                />
              </div>
              {/* <div className={`${styles.strength} value`}>Strengths</div> */}
              {strengthsComment &&
                strengthsComment.map((strengths, index) => (
                  <div
                    key={index}
                    className={`${styles.textarea_main} d-flex border_color justify-content-between`}
                  >
                    <Form.Control
                      className={`${styles.paragraph} input pl-0`}
                      defaultValue={strengths}
                      as="textarea"
                      rows={3}
                      readOnly={!editStren[index]?.editable}
                    />
                    <div className="mt-3">
                      <img
                        src={`/static/${editStren[index]?.editable ? 'save-3.svg' : 'mode_edit.svg'
                          }`}
                        role="button"
                        className={`${styles.edit_image} mr-4`}
                        alt="edit"
                        onClick={(e) => {
                          let tempArrEdit = [...editStren]
                          tempArrEdit[index].editable = !tempArrEdit[index].editable
                          setEditProfile(tempArrEdit)
                        }}
                      />
                      <img
                        src="/static/delete 2.svg"
                        role="button"
                        alt="delete"
                        onClick={() => dltStrengthsCommentArr(index)}
                      />
                    </div>
                  </div>
                ))}
            </div>
            <hr className={styles.line} style={{ margin: '-1px 0 0' }}></hr>
            <div className={`${styles.comment_inner}`}>
              <div className={`${styles.sub_heading} value`}>Weakness</div>
              <div className="d-flex mt-5 pb-5">
                <input
                  as="textarea"
                  rows={3}
                  placeholder=""
                  value={weaknessComments}
                  className={`${styles.comment_field} input form-control`}
                  onChange={(e) => setWeaknessComments(e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Comments
                </label>

                <img
                  className="img-fluid ml-4"
                  role="button"
                  src="/static/add-btn.svg"
                  alt="add button"
                  onClick={() => {
                    weaknessComments.length > 0 &&
                      addWeaknessCommentArr(weaknessComments)
                    setWeaknessComments('')
                  }}
                />
              </div>
              {/* <div className={`${styles.strength} value`}>Weakness</div> */}
              {weaknessComment &&
                weaknessComment.map((weakness, index) => (
                  <div
                    key={index}
                    className={`${styles.textarea_main} d-flex border_color justify-content-between`}
                  >
                    <Form.Control
                      className={`${styles.paragraph} input pl-0`}
                      defaultValue={weakness}
                      as="textarea"
                      rows={3}
                      readOnly={!editWeak[index]?.editable}
                    />
                    <div className="mt-3">
                      <img
                        src={`/static/${editWeak[index]?.editable ? 'save-3.svg' : 'mode_edit.svg'
                          }`}
                        role="button"
                        className={`${styles.edit_image} mr-4`}
                        alt="edit"
                        onClick={(e) => {
                          let tempArrEdit = [...editWeak]
                          tempArrEdit[index].editable = !tempArrEdit[index].editable
                          setEditWeak(tempArrEdit)
                        }}
                      />
                      <img
                        src="/static/delete 2.svg"
                        role="button"
                        alt="delete"
                        onClick={(e) => {
                          dltWeaknessCommentArr(index)
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>

            <hr
              className={`${styles.line} border_color`}
              style={{ margin: '-1px 0 0' }}
            ></hr>
            <div
              className={`${styles.sanction_terms} d-flex justify-content-between align-items-center`}
            >
              <div className={`${styles.sanction_heading} value`}>
                Sanction Terms
              </div>
              <div
                className={`${styles.limit_container} d-flex justify-content-center`}
              >
                  <div className={`${styles.limit} accordion_Text`}>
                  Total Limit:{' '}
                  <span className='text1'>
                    {checkNan(
                      CovertvaluefromtoCR(
                        creditDetail?.company?.creditLimit?.totalLimit ?? '',
                      ),
                    )?.toLocaleString()}
                  </span>
                </div>
                <div className={`${styles.limit} accordion_Text`}>
                  Utilised Limit:{' '}
                  <span>
                  <span className='text1'>
                      {checkNan(
                        CovertvaluefromtoCR(
                          creditDetail?.company?.creditLimit?.utilizedLimt ??
                          '',
                        ),
                      )?.toLocaleString()}
                    </span>
                  </span>
                </div>
                <div className={`${styles.limit} accordion_Text`}>
                  Available Limit:{' '}
                  <span>
                  <span className='text1'>
                      {checkNan(
                        CovertvaluefromtoCR(
                          creditDetail?.company?.creditLimit?.availableLimit ??
                          '',
                        ),
                      )?.toLocaleString()}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.sectionTable} table mb-0`}
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
                    <td>
                      {(
                        creditDetail?.company?.creditLimit?.availableLimit ?? ''
                      )?.toLocaleString('en-In')
                      }
                    </td>
                    <td>-</td>

                    {filteredCreditRating && filteredCreditRating.length != 0 && filteredCreditRating != 0 ? (
                      <>
                        {' '}
                        {filteredCreditRating &&
                          filteredCreditRating.map((val, index) => (
                            <td key={index}>
                              {(val.derived.value ?? '')?.toLocaleString(
                                'en-In',
                                {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,

                                },
                              )}
                            </td>
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
                        onFocus={(e) => {
                          setIsFieldInFocus({ ...isFieldInFocus, suggestedCreditLimit: true }),
                            e.target.type = 'number'
                        }}
                        onBlur={(e) => {
                          setIsFieldInFocus({ ...isFieldInFocus, suggestedCreditLimit: false }),
                            e.target.type = 'text'
                        }}
                        value={
                          isFieldInFocus.suggestedCreditLimit ?
                            suggestedCredit?.suggestedCreditLimit :
                            Number(suggestedCredit?.suggestedCreditLimit ?? "")?.toLocaleString('en-In') + ` CR`}
                        // value={addPrefixOrSuffix( 
                        //   suggestedCredit?.suggestedCreditLimit,
                        //   '',
                        // )?.toLocaleString(undefined, {
                        //   minimumFractionDigits: 2,
                        // })}
                        onChange={(e) => {
                          saveSuggestedCreditData(e.target.name, e.target.value)
                        }}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>Order Value</td>
                    <td>-</td>
                    <td>
                      {checkNan(
                        CovertvaluefromtoCR(creditDetail?.orderValue ?? ''),
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    <td>-</td>

                    <td>
                      <input
                        className={`${styles.text} input`}
                        type="text"
                        onKeyDown={(evt) =>
                          evt.key === 'e' && evt.preventDefault()
                        }
                        name="suggestedOrderValue"
                        onFocus={(e) => {
                          setIsFieldInFocus({ ...isFieldInFocus, suggestedOrderValue: true }),
                            e.target.type = 'number'
                        }}
                        onBlur={(e) => {
                          setIsFieldInFocus({ ...isFieldInFocus, suggestedOrderValue: false }),
                            e.target.type = 'text'
                        }}
                        value={
                          isFieldInFocus.suggestedOrderValue ?
                            suggestedCredit?.suggestedOrderValue :
                            Number(suggestedCredit?.suggestedOrderValue ?? "")?.toLocaleString('en-In') + ` CR`}
                        // value={(
                        //   addPrefixOrSuffix(
                        //     suggestedCredit?.suggestedOrderValue,
                        //     '',
                        //   ) ?? ''
                        // )?.toLocaleString(undefined, {
                        //   minimumFractionDigits: 2,
                        // })}
                        // defaultValue={creditDetail?.suggestedOrderValue}
                        onChange={(e) => {
                          saveSuggestedCreditData(e.target.name, e.target.value)
                        }}
                      ></input>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className={`${styles.comment_inner}`}>
              <div className="d-flex mt-5 pb-5">
                <input
                  as="textarea"
                  rows={3}
                  placeholder=""
                  value={sanctionComments}
                  className={`${styles.comment_field} input form-control`}
                  onChange={(e) => setSanctionComments(e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Comments
                </label>

                <img
                  className="img-fluid ml-4"
                  role="button"
                  src="/static/add-btn.svg"
                  alt="add button"
                  onClick={() => {
                    sanctionComments.length > 0 &&
                      addSanctionCommentArr(sanctionComments)
                    setSanctionComments('')
                  }}
                />
              </div>
              {/* <div className={`${styles.strength} value`}>Weakness</div> */}
              {sanctionComment &&
                sanctionComment.map((sanction, index) => (
                  <div
                    key={index}
                    className={`${styles.textarea_main} d-flex border_color justify-content-between`}
                  >
                    <Form.Control
                      className={`${styles.paragraph} input pl-0`}
                      defaultValue={sanction}
                      as="textarea"
                      rows={3}
                      readOnly={!sanctionCommentsIndex.includes(index)}
                      onChange={(e) => {
                        handleInput(e.target.value, index)
                      }}
                    />
                    <div className="mt-3">
                      {sanctionCommentsIndex.includes(index) ? (
                        <img
                          src="/static/mode_edit.svg"
                          role="button"
                          className={`${styles.edit_image} mr-3`}
                          onClick={() => onEditClickHandler(index, 'save')}
                        />
                      ) : (
                        <img
                          src="/static/save-3.svg"
                          role="button"
                          className={`${styles.edit_image} mr-3`}
                          alt="save"
                          onClick={() => onEditClickHandler(index, 'edit')}
                        />
                      )}
                      <img
                        src="/static/delete 2.svg"
                        role="button"
                        className={`${styles.delete_image}`}
                        onClick={() => {
                          onSanctionCommentRemove(index)
                        }}
                        alt="delete"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
