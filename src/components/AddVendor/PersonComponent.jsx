import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap';
import Image from 'next/image'

function PersonComponent({countryName, bankData, handleBankCancel, handleBankChange, handleBankClick, index, editBank, setShowEditBank, setShowBank, showEditBank}) {
  return (
    <div className={`${styles.address_card} pb-5 value background1`} style={{ marginTop: '40px' }}>
    <div
      className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
    >
      <h3 className={`${styles.heading}`}>Key Contact Person</h3>
      <div className={styles.min_heading}>
        <strong className="text-danger">*</strong> Minimum 1 Contact Person Mandatory
      </div>
    </div>
    <div className={`${styles.dashboard_form} card-body border_color`}>
      <div className="row">
        <div className={`${styles.form_group} col-lg-4 col-sm-4`}>
          <input
            className={`${styles.input_field} border_color input form-control`}
            required
            type="text"
            name="name"
            value={bankData?.name}
            onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
          />
          <label className={`${styles.label_heading} label_heading`}>
            Name <strong className="text-danger">*</strong>
          </label>
        </div>
        <div className={`${styles.form_group} col-lg-4 col-sm-6`}>
          <div className="d-flex">
            <select
              className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
              name="department"
              required
              value={bankData?.department}
              onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
            >
              <option value="India">Finance</option>
              <option value="Dubai">Operations</option>
            </select>
            <label className={`${styles.label_heading} label_heading`}>Department</label>
            <div className={`${styles.image_arrow} image_arrow`}>
              <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
            </div>
          </div>
        </div>
        <div className={`${styles.form_group} col-lg-4 col-sm-4`}>
          <input
            className={`${styles.input_field} 
          border_color input form-control`}
            required
            type="text"
            name="designation"
            value={bankData?.designation}
            onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
          />
          <label className={`${styles.label_heading} label_heading`}>Designation</label>
        </div>
        <div className={`${styles.form_group} ${styles.phone} col-lg-4 col-sm-6`}>
          <div className={`${styles.phone_card}`}>
            <select
              name="callingCode"
              id="Code"
              className={`${styles.code_phone} input border-right-0`}
              value={bankData?.phoneNumber}
              onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+92">+92</option>
              <option value="+93">+95</option>
              <option value="+24">+24</option>
            </select>
            <input
              type="number"
              onWheel={(event) => event.currentTarget.blur()}
              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
              id="textNumber"
              name="phoneNumber"
              className={`${styles.input_field} border_color input form-control border-left-0`}
              value={bankData?.phoneNumber}
              onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`} id="textNumber">
              Phone Number
            </label>
          </div>
        </div>
        <div className={`${styles.form_group} col-lg-4 col-sm-6`}>
          <input
            type="text"
            id="textInput"
            required
            className={`${styles.input_field} border_color input form-control`}
            name="emailId"
            value={bankData?.email}
            onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
          />
          <label className={`${styles.label_heading} label_heading`} id="textInput">
            Email Address <strong className="text-danger">*</strong>
          </label>
        </div>
        <div className={`${styles.form_group} mt-0 col-lg-4 col-md-6 col-sm-6 `}>
          <div className={`${styles.radio_form}`}>
            <div className={`${styles.sub_heading} label_heading`}>
              Authorised Signatory <strong className="text-danger">*</strong>
            </div>
            {['radio'].map((type, index) => (
              <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                <Form.Check
                  className={styles.radio}
                  inline
                  defaultChecked
                  label="Yes"
                  name="group1"
                  value={bankData?.authorizedSignatory}
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e)=>handleBankChange('authrorisedSignatory', 'Yes')}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="No"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  value={bankData?.authorised}
                  onChange={(e)=>handleBankChange('authrorisedSignatory', 'No')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <button className={`${styles.add_btn}`} onClick={()=> handleBankClick(editBank, index)}>
      Add
    </button>
    <button className={`${styles.cancel_btn}`} onClick={()=>handleBankCancel()}>
      Cancel
    </button>
  </div>
  )
}

export default PersonComponent