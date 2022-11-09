/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { addressValidtion, bankValidtion } from '@/utils/helpers/review';

function Index({ keyAddDataArr, keyAddData, saveCompanyData, bankDataArr, bankDetails, deleteAddress, deleteBank }) {
  const [countryName, setCountryName] = useState('India');

  const [keyAddressData, setKeyAddressData] = useState({
    GSTIN: '',
    addressType: '',
    branch: '',
    city: '',
    state: '',
    fullAddress: '',
    email: '',
    pinCode: '',
  });

  const handleChange = (name, value) => {
    const newInput = { ...keyAddressData };
    newInput[name] = value;

    setKeyAddressData(newInput);
  };

  const handleClick = () => {
    if (addressValidtion(keyAddressData)) {
      keyAddDataArr(keyAddressData);
      setKeyAddressData({
        GSTIN: '',
        addressType: '',
        branch: '',
        city: '',
        state: '',
        fullAddress: '',
        email: '',
        pinCode: '',
      });
    }
  };

  const handleCancel = () => {
    setKeyAddressData({
      GSTIN: '',
      addressType: '',
      branch: '',
      city: '',
      state: '',
      fullAddress: '',
      email: '',
      pinCode: '',
    });
  };

  const [bankData, setBankData] = useState({
    IFSC: '',
    Bank_Name: '',
    Branch_Address: '',
    Account_No: '',
    gstin: '',
    Swift_Code: '',
    AD_Code: '',
  });

  const handleBankChange = (name, value) => {
    const newInput = { ...bankData };
    newInput[name] = value;

    setBankData(newInput);
  };

  const handleBankClick = () => {
    if (bankValidtion(bankData, countryName)) {
    bankDataArr(bankData);
    setBankData({
      IFSC: '',
      Bank_Name: '',
      Branch_Address: '',
      Account_No: '',
      gstin: '',
      Swift_Code: '',
      AD_Code: '',
    });
    }
  };

  const handleBankCancel = () => {
    setBankData({
      IFSC: '',
      Bank_Name: '',
      Branch_Address: '',
      Account_No: '',
      gstin: '',
      Swift_Code: '',
      AD_Code: '',
    });
  };

  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            data-toggle="collapse"
            data-target="#internalCompanies"
            aria-expanded="true"
            aria-controls="internalCompanies"
          >
            <h3 className={`${styles.heading}`}>Internal Companies</h3>
            <span>+</span>
          </div>
          <div
            id="internalCompanies"
            // className="collapse"
            aria-labelledby="internalCompanies"
          >
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <div className="d-flex">
                    <select
                      name="country"
                      className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                      onChange={(e) => {
                        {
                          setCountryName(e.target.value);
                          saveCompanyData(e.target.name, e.target.value);
                        }
                      }}
                    >
                      <option value="India">India</option>
                      <option value="Switzerland">Switzerland</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Country <strong className="text-danger ml-1">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                    </div>
                  </div>
                </div>

                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
                    type="text"
                    required
                    name="Company_Name"
                    onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Company Name <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
                    type="text"
                    required
                    name="Short_Name"
                    onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Short Name <strong className="text-danger">*</strong>
                  </label>
                </div>
                {countryName === 'India' ? (
                  <>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        type="text"
                        required
                        name="PAN"
                        onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        PAN <strong className="text-danger">*</strong>
                      </label>
                    </div>

                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                      <input
                        className={`${styles.input_field} border_color input form-control`}
                        type="text"
                        required
                        name="CIN_No"
                        onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        CIN No. <strong className="text-danger">*</strong>
                      </label>
                    </div>
                  </>
                ) : (
                  ' '
                )}
              </div>
            </div>

            <div className={`${styles.dashboard_form} card-body`} style={{ borderTop: '3px solid #D2D7E5' }}>
              <div className={`${styles.card_heading} mt-3`}>Key Addresses</div>
              <div className={`${styles.address_card} pb-5 value background1`} style={{ marginTop: '40px' }}>
                <div
                  className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>Add New Address</h3>
                </div>
                <div className={`${styles.dashboard_form} card-body border_color`}>
                  <div className="row">
                    {countryName === 'India' ? (
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
                              <option value="" disabled>
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
                <button
                  className={`${styles.add_btn}`}
                  // onClick={() => addData('address')}
                  onClick={() => handleClick()}
                >
                  Add
                </button>
                <button onClick={() => handleCancel} className={`${styles.cancel_btn}`}>
                  Cancel
                </button>
              </div>
              {keyAddData &&
                keyAddData?.length > 0 &&
                keyAddData?.map((val, index) => (
                  <div key={index} className="d-flex justify-content-between">
                    <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                      <div className="d-flex justify-content-between">
                        <div>
                          <label className={styles.label}>{val.addressType}</label>
                          <div className={styles.address_values}>
                            <p>{val.fullAddress}</p>
                            <div className="d-flex">
                              <p>
                                <span>Email:</span> {val.email}
                              </p>
                              {countryName === 'India' ? (
                                <p>
                                  <span className="ml-5">GSTIN:</span> {val.GSTIN}
                                </p>
                              ) : (
                                ''
                              )}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex">
                            <img className={`${styles.edit_image} img-fluid`} src="/static/mode_edit.svg" alt="Edit" />
                            <div className={`${styles.delete_image} ml-3`}>
                              <Image onClick={() => deleteAddress(index)} src="/static/delete.svg" width="40px" height="40px" alt="Bin" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#bankDetails"
            aria-expanded="true"
            aria-controls="bankDetails"
          >
            <h3 className={`${styles.heading} mb-0`}>Bank Details</h3>
            <span>+</span>
          </div>
          <div id="bankDetails" className="collapse" aria-labelledby="bankDetails">
            <div className={`${styles.dashboard_form} card-body`}>
              <div className={`${styles.address_card} pb-5 value background1`} style={{ marginTop: '40px' }}>
                <div
                  className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>Add New Bank</h3>
                </div>
                <div className={`${styles.dashboard_form} card-body border_color`}>
                  {countryName === 'India' ? (
                    <div className="row">
                      <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                        <input
                          className={`${styles.input_field} border_color input form-control`}
                          required
                          name='IFSC'
                          value={bankData?.IFSC}
                          type="text"
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
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
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
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
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
                        />
                        <label className={`${styles.label_heading} label_heading`}>Branch Address</label>
                      </div>
                      <div className={`${styles.form_group} col-lg-4 col-md-6`}>
                        <input
                          className={`${styles.input_field} border_color input form-control`}
                          required
                          type="number"
                          name='Account_No'
                          value={bankData?.Account_No}
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
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
                          name='gstin'
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
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
                          name='AD_Code'
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
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
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
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
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
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
                          name='Swift_Code'
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
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
                          onChange={(e)=>handleBankChange(e.target.name, e.target.value)}
                        />
                        <label className={`${styles.label_heading} label_heading`}>Branch Address</label>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className={`${styles.add_btn}`}
                  onClick={() => handleBankClick()}
                >
                  Add
                </button>
                <button onClick={()=>handleBankCancel} className={`${styles.cancel_btn}`}>Cancel</button>
              </div>
            </div>
            { bankDetails && bankDetails?.length > 0 && bankDetails?.map((val, index) => (<div key={index} className={`${styles.table_form} mb-4`}>
              <div className={styles.table_container}>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    {countryName === 'India' ? (
                      <table className={`${styles.table} mb-0 table`} cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                          <tr>
                            <th>BANK NAME</th>
                            <th>ACCOUNT NO.</th>
                            <th>IFSC</th>
                            <th>AD CODE</th>
                            <th>BRANCH ADDRESS</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{val.Bank_Name}</td>
                            <td>{val.Account_No}</td>
                            <td>{val.IFSC}</td>
                            <td>{val.AD_Code}</td>
                            <td>{val.Branch_Address}</td>
                            <td>
                              <div>
                                <img src="/static/mode_edit.svg" className={`${styles.edit_image} mr-3`} alt="edit" />

                                <img
                                  src="/static/delete 2.svg"
                                  className={`${styles.delete_image} border-0 p-0`}
                                  alt="delete"
                                  onClick={()=>deleteBank(index)}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <table className={`${styles.table} mb-0 table`} cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                          <tr>
                            <th>BANK NAME</th>
                            <th>ACCOUNT NO.</th>

                            <th>SWIFT CODE</th>
                            <th>BRANCH ADDRESS</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{val.Bank_Name}</td>
                            <td>{val.Account_No}</td>
                            <td>{val.Swift_Code}</td>

                            <td>{val.Branch_Address}</td>
                            <td>
                              <div>
                                <img src="/static/mode_edit.svg" className={`${styles.edit_image} mr-3`} alt="edit" />

                                <img
                                  src="/static/delete 2.svg"
                                  className={`${styles.delete_image} border-0 p-0`}
                                  alt="delete"
                                  onClick={()=>deleteBank(index)}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>))}
          </div>
        </div>
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#authorisedDetails"
            aria-expanded="true"
            aria-controls="authorisedDetails"
          >
            <h3 className={`${styles.heading} mb-0`}>Authorised Signatories Details</h3>
            <span>+</span>
          </div>
          <div id="authorisedDetails" className="collapse" aria-labelledby="authorisedDetails">
            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                  <div className="d-flex">
                    <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}>
                      <option value="">John Doe</option>
                      <option value="">US</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Name <strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                    </div>
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
                    type="text"
                    required
                    name="supplierName"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Email <strong className="text-danger">*</strong>
                  </label>
                </div>

                <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                  <input
                    type="text"
                    id="textInput"
                    name="email"
                    required
                    className={`${styles.input_field} border_color input form-control`}
                  />
                  <label className={`${styles.label_heading} label_heading`} id="textInput">
                    Designation <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                  <div className="d-flex mt-2">
                    <img src="/static/mode_edit.svg" className={`${styles.edit_image} mr-3`} alt="edit" />
                    <img src="/static/delete 2.svg" className={`${styles.delete_image} border-0 p-0`} alt="delete" />
                    {/* <img className={`${styles.plus_add} img-fluid`} src="/static/add-btn.svg" alt="Plus" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>
            <div className={`${styles.approve} ml-3`}>
              <span onClick={() => handleSubmit()}>Send for Approval</span>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mb-5" style={{ marginTop: '35px' }}>
          <div className={`${styles.footer_heading} mr-5`}>
            Created By <span>Balakrishna SGF001</span>
          </div>
          <div className={`${styles.footer_heading}`}>
            Approved By <span>Ramakrishna SGF001</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
