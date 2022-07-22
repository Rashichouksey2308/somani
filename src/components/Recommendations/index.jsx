/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const Index = ({
  financialsComment,
  companyComment,
  sanctionComment,
  strengthsComment,
  weaknessComment,
  addCompanyCommentArr,
  addFinancialsCommentArr,
  addStrengthsCommentArr,
  addWeaknessCommentArr,
  addSanctionCommentArr,
  groupExposureData,
  addGroupExpArr,
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

  const [exposureData, setExposureData] = useState({
    accountConduct: '',
      limit: null,
      name: '',
      outstandingLimit: null
  })

  console.log(exposureData, "THIS IS EXPOSURE")

  const handleGroupExpChange = (name, value) => {
    const newInput = { ...exposureData }
    newInput[name] = value
    setExposureData(newInput)
  }

  const onExpSave = () => {
    addGroupExpArr(exposureData)
  }

  return (
    <>
      <div className={`${styles.main} card border_color `}>
        <div
          className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`}
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
          <div className={`${styles.dashboard_form} mr-3`}>
            <h5 className={styles.sub_heading}>Company Profile</h5>
            {companyComment &&
              companyComment.map((comment, index) => (
                <div key={index} className={`${styles.comment_para} d-flex `}>
                  <Form.Control
                    className={`${styles.comment}`}
                    as="textarea"
                    defaultValue={comment}
                    rows={3}
                    readOnly={editProfile}
                  />

                  <div className="ml-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} img-fluid mb-3`}
                      alt="edit"
                      onClick={(e) => {
                        setEditProfile(!editProfile)
                      }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      className="img-fluid"
                      alt="delete"
                    />
                  </div>
                </div>
              ))}

            <div className="d-flex mt-4 pb-4">
              <input
                as="textarea"
                rows={3}
                placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                className={`${styles.comment_field} form-control`}
                onChange={(e) => setCompanyComments(e.target.value)}
              />
              <label className={`${styles.label_heading}`}>Comments</label>

              <img
                className="img-fluid ml-4"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() =>
                  companyComments.length > 0 &&
                  addCompanyCommentArr(companyComments)
                }
              />
            </div>
          </div>
          <hr className={styles.line}></hr>
          <div className={`${styles.dashboard_form} mr-3`}>
            <h5 className={styles.sub_heading}>Comments On Financials</h5>
            {financialsComment &&
              financialsComment.map((comment, index) => (
                <div key={index} className={`${styles.comment_para} d-flex `}>
                  <Form.Control
                    className={`${styles.comment}`}
                    defaultValue={comment}
                    as="textarea"
                    rows={3}
                    readOnly={editFinance}
                  />
                  <div className="ml-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} img-fluid mb-3`}
                      onClick={() => {
                        setEditFinance(!editFinance)
                      }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      className="img-fluid"
                      alt="delete"
                    />
                  </div>
                </div>
              ))}

            <div className="d-flex mt-4 pb-4">
              <input
                as="textarea"
                rows={3}
                placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                className={`${styles.comment_field} form-control`}
                onChange={(e) => setFinancialsComments(e.target.value)}
              />
              <label className={`${styles.label_heading}`}>Comments</label>

              <img
                className="img-fluid ml-4"
                src="/static/add-btn.svg"
                alt="add button"
                onClick={() =>
                  financialsComments.length > 0 &&
                  addFinancialsCommentArr(financialsComments)
                }
              />
            </div>
          </div>
          <hr className={styles.line}></hr>

          <div className={`${styles.datatable} pt-5 datatable`}>
            <h5>Group Exposure Details</h5>
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
                      <th>NAME OF THE BUYER</th>
                      <th>LIMIT AMOUNT</th>
                      <th>OUTSTANDING LIMIT</th>
                      <th>ACCOUNT CONDUCT</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                  {groupExposureData && groupExposureData.map((exp, index) => (  <tr key={index} className="table_row">
                      <td className={styles.number}>{index += 1} </td>
                      <td>
                        <input name='name' defaultValue={exp.name} onChange={(e)=>{handleGroupExpChange(e.target.name, e.target.value)}} className={styles.input} readOnly={!saveTable} />
                      </td>
                      <td>
                        <input name='limit' defaultValue={exp.limit} onChange={(e)=>{handleGroupExpChange(e.target.name, e.target.value)}} className={styles.input} readOnly={!saveTable} />
                      </td>
                      <td>
                        <input name='outstandingLimit' defaultValue={exp.outstandingLimit} onChange={(e)=>{handleGroupExpChange(e.target.name, e.target.value)}} className={styles.input} readOnly={!saveTable} />
                      </td>
                      <td>
                        <input name='accountConduct' defaultValue={exp.accountConduct} onChange={(e)=>{handleGroupExpChange(e.target.name, e.target.value)}} className={styles.input} readOnly={!saveTable} />
                      </td>
                      <td>
                        <div>
                          {!saveTable ? (
                            <img
                              src="/static/mode_edit.svg"
                              className={`${styles.edit_image} mr-1 mr-md-3 img-fluid`}
                              onClick={(e) => {
                                setSaveTable(true)
                              }}
                            />
                          ) : (
                            <img
                              src="/static/save-3.svg"
                              className={`${styles.edit_image} mr-1 mr-md-3 img-fluid`}
                              alt="save"
                              onClick={(e) => {
                                //onExpSave(exposureData)
                                setSaveTable(false)
                              }}
                            />
                          )}
                          <img
                            src="/static/delete 2.svg"
                            className={`${styles.delete_image} img-fluid`}
                            alt="delete"
                          />
                        </div>
                      </td>
                    </tr> ))}

                 
                      <tr className="table_row">
                        <td className={styles.number}>1 </td>
                        <td>
                        <input name='name' onChange={(e)=>{handleGroupExpChange(e.target.name, e.target.value)}} className={styles.input} readOnly={!saveTable} />
                        </td>
                        <td>
                        <input name='limit' onChange={(e)=>{handleGroupExpChange(e.target.name, e.target.value)}} className={styles.input} readOnly={!saveTable} />
                        </td>
                        <td>
                        <input name='outstandingLimit' onChange={(e)=>{handleGroupExpChange(e.target.name, e.target.value)}} className={styles.input} readOnly={!saveTable} />
                        </td>
                        <td>
                        <input name='accountConduct' onChange={(e)=>{handleGroupExpChange(e.target.name, e.target.value)}} className={styles.input} readOnly={!saveTable} />
                        </td>
                        <td>
                          <div>
                            {!saveTable ? (
                              <img
                                src="/static/mode_edit.svg"
                                className={`${styles.edit_image} mr-1 mr-md-3 img-fluid`}
                                onClick={(e) => {
                                  setSaveTable(true)
                                  //onExpSave(exposureData)
                                }}
                              />
                            ) : (
                              <img
                                src="/static/save-3.svg"
                                className={`${styles.edit_image} mr-1 mr-md-3 img-fluid`}
                                alt="save"
                                onClick={(e) => {
                                  setSaveTable(false)
                                }}
                              />
                            )}
                            <img
                              src="/static/delete 2.svg"
                              className={`${styles.delete_image} img-fluid`}
                              alt="delete"
                            />
                          </div>
                        </td>
                      </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className={`${styles.add_image} p-3 d-flex justify-content-end`}
            >
              <div  onClick={(e) => {
                 onExpSave(exposureData)
                  }}>
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
                placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
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
                <div key={index} className="d-flex justify-content-between">
                  <Form.Control
                    className={`${styles.paragraph} input`}
                    defaultValue={strengths}
                    as="textarea"
                    rows={3}
                    readOnly={editStren}
                  />
                  <div className="mt-3">
                    <img
                      src="/static/delete 2.svg"
                      className="img-fluid mr-4"
                      alt="delete"
                    />
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} img-fluid`}
                      alt="edit"
                      onClick={(e) => {
                        setEditStren(!editStren)
                      }}
                    />
                  </div>
                </div>
              ))}
            {/* <hr></hr> */}
            {/* <div className="d-flex justify-content-between">
              <Form.Control
                className={`${styles.paragraph}`}
                as="textarea"
                rows={3}
                readOnly={editStren1}
              />
              <div className="mt-3">
                <img
                  src="/static/delete 2.svg"
                  className="img-fluid mr-4"
                  alt="delete"
                />
                <img
                  src="/static/mode_edit.svg"
                  className={`${styles.edit_image} img-fluid`}
                  alt="edit"
                  onClick={(e) => {
                    setEditStren1(!editStren1)
                  }}
                />
              </div>
            </div> */}
            <div className={`${styles.sub_heading} value`}>Weakness</div>
            <div className="d-flex mt-5 pb-4">
              <input
                as="textarea"
                rows={3}
                placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                className={`${styles.comment_field} form-control`}
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
                <div key={index} className="d-flex justify-content-between">
                  <Form.Control
                    className={`${styles.paragraph} input`}
                    defaultValue={weakness}
                    as="textarea"
                    rows={3}
                    readOnly={editWeak}
                  />
                  <div className="mt-3">
                    <img
                      src="/static/delete 2.svg"
                      className="img-fluid mr-4"
                      alt="delete"
                    />
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} img-fluid`}
                      alt="edit"
                      onClick={(e) => {
                        setEditWeak(!editWeak)
                      }}
                    />
                  </div>
                </div>
              ))}
            {/* <hr></hr> */}

            {/* <div className="d-flex justify-content-between">
              <Form.Control
                className={`${styles.paragraph}`}
                as="textarea"
                rows={3}
                readOnly={editWeak1}
              />
              <div className="mt-3">
                <img
                  src="/static/delete 2.svg"
                  className="img-fluid mr-4"
                  alt="delete"
                />
                <img
                  src="/static/mode_edit.svg"
                  className={`${styles.edit_image} img-fluid`}
                  alt="edit"
                  onClick={(e) => {
                    setEditWeak1(!editWeak1)
                  }}
                />
              </div>
            </div> */}

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
                  Total Limit: <span>1,900.00</span>
                </div>
                <div className={styles.limit}>
                  Utilised Limit: <span>1,900.00</span>
                </div>
                <div className={styles.limit}>
                  Available Limit: <span>1,900.00</span>
                </div>
              </div>
            </div>
               <table
              className={`${styles.sectionTable} table   `}
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
                <td>1,200.00</td>
                <td>-</td>
               
                <td>1,900.00</td>
                
                <td>
                  <input
                    className={`${styles.text}`}
                    type="text"
                    placeholder="1,900.00"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Order Value</td>
                <td>1,200.00</td>
                <td>-</td>
               
                <td>1,900.00</td>
                
                <td>
                  <input
                    className={`${styles.text}`}
                    type="text"
                    placeholder="1,900.00"
                  ></input>
                </td>
              </tr>
            </table>
            <div className="d-flex justify-content-start align-items-center pt-5 pl-5">
            
              {/* <div className={`${styles.form_group} mr-5`}>
                <div className={`${styles.label_sanction}`}>Limit Value</div>
                <div>100 CR</div>
              </div>
              <div className={`${styles.form_group} ml-5 mr-5`}>
                <div className={`${styles.label_sanction}`}>Order Value</div>
                <div>100 Lakhs</div>
              </div>

              <div className={`${styles.form_group} mt-4`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Recommended Order Value
                </label>
              </div> */}
            </div>
            <div className="d-flex mt-5 pb-4">
              <input
                as="textarea"
                rows={3}
                placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                className={`${styles.comment_field} form-control`}
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
                <div key={index} className="d-flex justify-content-between">
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
                      className="img-fluid mr-4"
                      alt="delete"
                    />
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} img-fluid`}
                      alt="edit"
                      onClick={(e) => {
                        setEditSanc(!editSanc)
                      }}
                    />
                  </div>
                </div>
              ))}
            {/* <hr></hr> */}

            {/* <div className="d-flex justify-content-between">
              <Form.Control
                className={`${styles.paragraph}`}
                as="textarea"
                rows={3}
                readOnly={editSanc1}
              />
              <div className="mt-3">
                <img
                  src="/static/delete 2.svg"
                  className="img-fluid mr-4"
                  alt="delete"
                />
                <img
                  src="/static/mode_edit.svg"
                  className={`${styles.edit_image} img-fluid`}
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
    </>
  )
}

export default Index
