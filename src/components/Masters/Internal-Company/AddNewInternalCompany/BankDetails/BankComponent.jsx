import React from 'react'
import styles from '../index.module.scss'
import Image from 'next/image'

function BankComponent({companyTypeRadio, bankData, handleBankCancel, handleBankChange, handleBankClick, index, editBank, setShowEditBank, setShowBank, showEditBank}) {
  return (
    <div className={`${styles.address_card} pb-5 value background1`} style={{ marginTop: '40px' }}>
    <div
      className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
    >
      <h3 className={`${styles.heading}`}>Add New Bank</h3>
    </div>
    <div className={`${styles.dashboard_form} card-body border_color`}>
      {companyTypeRadio === 'domestic' ? (
        <div className="row">
          <div className={`${styles.form_group} col-lg-4 col-md-6`}>
            <input
              className={`${styles.input_field} border_color input form-control`}
              required
              name="IFSC"
              value={bankData?.IFSC}
              type="text"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`}>
              IFSC <strong className="text-danger">*</strong>
            </label>
          </div>

          <div className={`${styles.form_group} col-lg-4 col-md-6`}>
            <input
              className={`${styles.input_field} border_color input form-control`}
              required
              type="text"
              value={bankData?.Bank_Name}
              name="Bank_Name"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`}>
              Bank Name <strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.form_group} col-lg-4 col-md-6`}>
            <input
              className={`${styles.input_field} border_color input form-control`}
              required
              type="text"
              value={bankData?.Branch_Address}
              name="Branch_Address"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`}>Branch Address</label>
          </div>
          <div className={`${styles.form_group} col-lg-4 col-md-6`}>
            <input
              className={`${styles.input_field} border_color input form-control`}
              required
              type="number"
              name="Account_No"
              value={bankData?.Account_No}
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
              onWheel={(event) => event.currentTarget.blur()}
              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
            />
            <label className={`${styles.label_heading} label_heading`}>
              Account No. <strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.form_group} col-lg-4 col-md-6`}>
            <input
              type="text"
              id="textInput"
              value={bankData?.gstin}
              name="gstin"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
              required
              className={`${styles.input_field} border_color input form-control`}
            />
            <label className={`${styles.label_heading} label_heading`} id="textInput">
              GSTIN
            </label>
          </div>
          <div className={`${styles.form_group} col-lg-4 col-md-6`}>
            <input
              type="text"
              id="textInput"
              value={bankData?.AD_Code}
              name="AD_Code"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
              required
              className={`${styles.input_field} border_color input form-control`}
            />
            <label className={`${styles.label_heading} label_heading`} id="textInput">
              AD Code
            </label>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className={`${styles.form_group} col-lg-3 col-md-6`}>
            <input
              className={`${styles.input_field} border_color input form-control`}
              required
              type="text"
              value={bankData?.Bank_Name}
              name="Bank_Name"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`}>
              Bank Name <strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.form_group} col-lg-2 col-md-6`}>
            <input
              className={`${styles.input_field} border_color input form-control`}
              required
              type="number"
              value={bankData?.Account_No}
              onWheel={(event) => event.currentTarget.blur()}
              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
              name="Account_No"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`}>
              Account No. <strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.form_group} col-lg-2 col-md-6`}>
            <input
              type="text"
              id="textInput"
              value={bankData?.Swift_Code}
              required
              name="Swift_Code"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
              className={`${styles.input_field} border_color input form-control`}
            />
            <label className={`${styles.label_heading} label_heading`} id="textInput">
              Swift Code <strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.form_group} col-lg-5 col-md-6`}>
            <input
              className={`${styles.input_field} border_color input form-control`}
              required
              type="text"
              value={bankData?.Branch_Address}
              name="Branch_Address"
              onChange={(e) => handleBankChange(e.target.name, e.target.value)}
            />
            <label className={`${styles.label_heading} label_heading`}>Branch Address</label>
          </div>
        </div>
      )}
    </div>
    {showEditBank ? <button className={`${styles.add_btn}`} onClick={() => {handleBankClick(editBank, index); setShowEditBank(false); setShowBank(true)}}>
      Edit
    </button> : <button className={`${styles.add_btn}`} onClick={() => handleBankClick()}>
      Add
    </button>}
    <button onClick={() => handleBankCancel()} className={`${styles.cancel_btn}`}>
      Cancel
    </button>
  </div>
  )
}

export default BankComponent