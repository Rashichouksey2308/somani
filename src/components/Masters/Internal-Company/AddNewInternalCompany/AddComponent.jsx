import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

function AddComponent({companyTypeRadio, keyAddressData, handleCancel, handleChange, handleClick, showEditAddress, editData, index, setShowEditAddress, setShowAddress}) {
  return (
    <div className={`${styles.address_card} pb-5 value background1`} style={{ marginTop: '40px' }}>
                <div
                  className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>Add New Address</h3>
                </div>
                <div className={`${styles.dashboard_form} card-body border_color`}>
                  <div className="row">
                    {companyTypeRadio === 'domestic' ? (
                      <>
                        <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                          <div className="d-flex">
                            <select
                              className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              name="addressType"
                              required
                              value={keyAddressData?.addressType}
                              onChange={(e) => handleChange(e.target.name, e.target.value)}
                            >
                              <option selected disabled>
                                Select
                              </option>
                              <option value="Registered Address">Registered Address</option>
                              <option value="Branch Address">Branch Address</option>
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>
                              Address Type<strong className="text-danger">*</strong>
                            </label>
                            <div className={`${styles.image_arrow} image_arrow`}>
                              <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <input
                            className={`${styles.input_field} border_color input form-control`}
                            required
                            type="number"
                            value={keyAddressData?.pinCode}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            onWheel={(event) => event.currentTarget.blur()}
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                            name="pinCode"
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Pin Code <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <div className={`${styles.col_header} label_heading`}>State</div>
                          <div className={styles.col_body}>Uttar Pradesh</div>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                          <div className="d-flex">
                            <select
                              className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              name="city"
                              onChange={(e) => handleChange(e.target.name, e.target.value)}
                              required
                              value={keyAddressData?.city}
                            >
                              <option selected disabled>
                                Select
                              </option>
                              <option value="Agra">Agra</option>
                              <option value="Delhi">Delhi</option>
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>City</label>
                            <div className={`${styles.image_arrow} image_arrow`}>
                              <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                          <input
                            className={`${styles.input_field} border_color input form-control`}
                            required
                            type="text"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            name="GSTIN"
                            value={keyAddressData?.GSTIN}
                          />
                          <label className={`${styles.label_heading} label_heading`}>GSTIN</label>
                        </div>
                        <div className={`${styles.form_group} col-lg-8`}>
                          <input
                            className={`${styles.input_field} border_color input form-control`}
                            required
                            type="text"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            name="fullAddress"
                            value={keyAddressData?.fullAddress}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Address <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                          <input
                            type="text"
                            id="textInput"
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required
                            name="branch"
                            value={keyAddressData?.branch}
                            className={`${styles.input_field} border_color input form-control`}
                          />
                          <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Branch <strong className="text-danger">*</strong>
                          </label>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`${styles.form_group} col-lg-2 col-md-6`}>
                          <div className="d-flex">
                            <select
                              className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                              name="addressType"
                              value={keyAddressData?.addressType}
                              required
                              onChange={(e) => handleChange(e.target.name, e.target.value)}
                            >
                              <option selected disabled>
                                Select
                              </option>
                              <option value="India">Branch Address</option>
                              <option value="Dubai">Office Address</option>
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>
                              Address Type <strong className="text-danger">*</strong>
                            </label>
                            <div className={`${styles.image_arrow} image_arrow`}>
                              <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                            </div>
                          </div>
                        </div>

                        <div className={`${styles.form_group} col-lg-8 col-md-12`}>
                          <input
                            className={`${styles.input_field} border_color input form-control`}
                            required
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            type="text"
                            value={keyAddressData?.fullAddress}
                            name="fullAddress"
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Address <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-2 col-md-6`}>
                          <input
                            className={`${styles.input_field} border_color input form-control`}
                            required
                            type="text"
                            value={keyAddressData?.city}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            name="city"
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            City <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                          <input
                            type="text"
                            id="textInput"
                            name="pinCode"
                            value={keyAddressData?.pinCode}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                            required
                            className={`${styles.input_field} border_color input form-control`}
                          />
                          <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Zip Code <strong className="text-danger">*</strong>
                          </label>
                        </div>
                      </>
                    )}
                    <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                      <input
                        type="text"
                        id="textInput"
                        name="email"
                        value={keyAddressData?.email}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id="textInput">
                        Email <strong className="text-danger">*</strong>
                      </label>
                    </div>
                  </div>
                </div>
                {showEditAddress ? <button
                  className={`${styles.add_btn}`}
                  // onClick={() => addData('address')}
                  onClick={() => {handleClick(editData, index); setShowEditAddress(false); setShowAddress(true)}}
                >
                  Add
                </button> : <button
                  className={`${styles.add_btn}`}
                  // onClick={() => addData('address')}
                  onClick={() => handleClick()}
                >
                  Add
                </button>}
                <button onClick={() => handleCancel()} className={`${styles.cancel_btn}`}>
                  Cancel
                </button>
              </div>
  )
}

export default AddComponent