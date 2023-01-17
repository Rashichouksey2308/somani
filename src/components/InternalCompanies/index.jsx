/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { addressValidtion, bankValidtion } from '@/utils/helpers/review';
import AddComponent from './AddComponent';
import BankComponent from './BankComponent';

function Index({
  keyAddDataArr,
  keyAddData,
  saveCompanyData,
  companyData,
  bankDataArr,
  bankDetails,
  deleteAddress,
  deleteBank,
  updateKeyAddDataArr,
  updateBankDataArr,
  authorisedSignatoryDetails,
  setAuthorisedSignatoryDetails,
  handleSubmit,
  Id
}) {
  const [countryName, setCountryName] = useState('India');
  // Address Schema code

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

  const [showAddress, setShowAddress] = useState(true);
  const [Index, setIndex] = useState('0');
  const [showEditAddress, setShowEditAddress] = useState(false);

  const [editData, setEditData] = useState({
    GSTIN: '',
    addressType: '',
    branch: '',
    city: '',
    state: '',
    fullAddress: '',
    email: '',
    pinCode: '',
  });

  const editAddress = (index) => {
    setShowAddress(false);
    setShowEditAddress(true);
    setIndex(index);
    let tempArr = keyAddData;
    setEditData({
      GSTIN: tempArr[index].GSTIN,
      addressType: tempArr[index].addressType,
      branch: tempArr[index].branch,
      city: tempArr[index].city,
      state: tempArr[index].state,
      email: tempArr[index].email,
      fullAddress: tempArr[index].fullAddress,
      pinCode: tempArr[index].pinCode,
    });
  };

  const changeData = (name, value) => {
    const newInput = { ...editData };
    newInput[name] = value;
    setEditData(newInput);
  };

  const handleEditCancel = () => {
    setEditData({
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

  // Bank Schema Code //

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

  const [showBank, setShowBank] = useState(true);
  const [IndexBank, setIndexBank] = useState('0');
  const [showEditBank, setShowEditBank] = useState(false);

  const [editBank, setEditBank] = useState({
    IFSC: '',
    Bank_Name: '',
    Branch_Address: '',
    Account_No: '',
    gstin: '',
    Swift_Code: '',
    AD_Code: '',
  });

  const editBankArr = (index) => {
    setShowBank(false);
    setShowEditBank(true);
    setIndexBank(index);

    let tempArr = bankDetails;
    setEditBank({
      IFSC: tempArr[index].IFSC,
      Bank_Name: tempArr[index].Bank_Name,
      Branch_Address: tempArr[index].Branch_Address,
      Account_No: tempArr[index].Account_No,
      gstin: tempArr[index].gstin,
      email: tempArr[index].email,
      Swift_Code: tempArr[index].Swift_Code,
      AD_Code: tempArr[index].AD_Code,
    });
  };

  const changeBankData = (name, value) => {
    const newInput = { ...editBank };
    newInput[name] = value;

    setEditBank(newInput);
  };

  const handleBankEditCancel = () => {
    setEditBank({
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

  // Authorised Signatory Code

  const addMoreSignatoryRows = () => {
    setAuthorisedSignatoryDetails([
      ...authorisedSignatoryDetails,
      {
        name: '',
        designation: '',
        email: '',
        // phoneNo: '',
        actions: false,
      },
    ]);
  };

  const handleSignatoryChange = (name, value, index) => {
    let tempArr = [...authorisedSignatoryDetails];
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value;
      }
    });

    setAuthorisedSignatoryDetails([...tempArr]);
  };

  const setActions = (index, val) => {
    setAuthorisedSignatoryDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: val };
        }
        return obj;
      });

      return newState;
    });
  };

  const handleRemoveSignatory = (index) => {
    setAuthorisedSignatoryDetails([
      ...authorisedSignatoryDetails.slice(0, index),
      ...authorisedSignatoryDetails.slice(index + 1),
    ]);
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
                      name="Country"
                      value={companyData?.Country}
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
                    value={companyData?.Company_Name}
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
                    value={companyData?.Short_Name}
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
                        value={companyData?.PAN}
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
                        value={companyData?.CIN_No}
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
              {showAddress ? (
                <AddComponent
                  handleChange={handleChange}
                  handleCancel={handleCancel}
                  handleClick={handleClick}
                  countryName={countryName}
                  keyAddressData={keyAddressData}
                />
              ) : null}
              {showEditAddress ? (
                <AddComponent
                  index={Index}
                  editData={editData}
                  setShowEditAddress={setShowEditAddress}
                  setShowAddress={setShowAddress}
                  showEditAddress={showEditAddress}
                  handleChange={changeData}
                  handleCancel={handleEditCancel}
                  handleClick={updateKeyAddDataArr}
                  countryName={countryName}
                  keyAddressData={editData}
                />
              ) : null}
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
                            <img
                              onClick={() => {
                                editAddress(index);
                              }}
                              className={`${styles.edit_image} img-fluid`}
                              src="/static/mode_edit.svg"
                              alt="Edit"
                            />
                            <div className={`${styles.delete_image} ml-3`}>
                              <Image
                                onClick={() => deleteAddress(index)}
                                src="/static/delete.svg"
                                width="40px"
                                height="40px"
                                alt="Bin"
                              />
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
              {showBank ? (
                <BankComponent
                  countryName={countryName}
                  bankData={bankData}
                  handleBankChange={handleBankChange}
                  handleBankClick={handleBankClick}
                  handleBankCancel={handleBankCancel}
                />
              ) : null}
              {showEditBank ? (
                <BankComponent
                  countryName={countryName}
                  index={IndexBank}
                  showEditBank={showEditBank}
                  setShowBank={setShowBank}
                  setShowEditBank={setShowEditBank}
                  bankData={editBank}
                  editBank={editBank}
                  handleBankChange={changeBankData}
                  handleBankClick={updateBankDataArr}
                  handleBankCancel={handleBankEditCancel}
                />
              ) : null}
            </div>
            {bankDetails &&
              bankDetails?.length > 0 &&
              bankDetails?.map((val, index) => (
                <div key={index} className={`${styles.table_form} mb-4`}>
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
                                    <img
                                      src="/static/mode_edit.svg"
                                      className={`${styles.edit_image} mr-3`}
                                      alt="edit"
                                      onClick={() => {
                                        editBankArr(index);
                                      }}
                                    />

                                    <img
                                      src="/static/delete 2.svg"
                                      className={`${styles.delete_image} border-0 p-0`}
                                      alt="delete"
                                      onClick={() => deleteBank(index)}
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
                                    <img
                                      src="/static/mode_edit.svg"
                                      className={`${styles.edit_image} mr-3`}
                                      alt="edit"
                                      onClick={() => {
                                        editBankArr(index);
                                      }}
                                    />

                                    <img
                                      src="/static/delete 2.svg"
                                      className={`${styles.delete_image} border-0 p-0`}
                                      alt="delete"
                                      onClick={() => deleteBank(index)}
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
                </div>
              ))}
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
          
              <div  id="authorisedDetails" className="collapse" aria-labelledby="authorisedDetails">
              {authorisedSignatoryDetails &&
            authorisedSignatoryDetails?.map((val, index) => (
                <div key={index} className={`${styles.dashboard_form} card-body`}>
                  <div className="row">
                    <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                      <div className="d-flex">
                        <select
                          value={val.name}
                          name="name"
                          disabled={! val.actions}
                          onChange={(e)=>handleSignatoryChange(e.target.name, e.target.value, index)}
                          className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                        >
                          <option value='' disabled >Select</option>
                          <option value="John Doe">John Doe</option>
                          <option value="Vikas Rajput">Vikas Rajput</option>
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
                        value={val.email}
                        onChange={(e)=>handleSignatoryChange(e.target.name, e.target.value, index)}
                        disabled={!val.actions}
                        name="email"
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Email <strong className="text-danger">*</strong>
                      </label>
                    </div>

                    <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                      <input
                        type="text"
                        id="textInput"
                        name="designation"
                        value={val.designation}
                        onChange={(e)=>handleSignatoryChange(e.target.name, e.target.value, index)}
                        disabled={!val.actions}
                        required
                        className={`${styles.input_field} border_color input form-control`}
                      />
                      <label className={`${styles.label_heading} label_heading`} id="textInput">
                        Designation <strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                      <div className="d-flex align-items-center mt-2">
                        {/* <img
                          src="/static/mode_edit.svg"
                          className={`${styles.edit_image} mr-3`}
                          onChange={() => handleSignatoryChange()}
                          alt="edit"
                        /> */}
                        {!val.actions ? (
                                <img
                                  src="/static/mode_edit.svg"
                                  role="button"
                                  className={`${styles.edit_image} mr-3`}
                                  onClick={() => {
                                    setActions(index, true);
                                  }}
                                />
                              ) : (
                                <img
                                  src="/static/save-3.svg"
                                  role="button"
                                  className={`${styles.edit_image} mr-3`}
                                  alt="save"
                                  onClick={(e) => {
                                    setActions(index, false);
                                  }}
                                />
                              )}
                       {index && index !== 0 ? <img
                          src="/static/delete 2.svg"
                          className={`${styles.delete_image} mr-3 border-0 p-0`}
                          onClick={() => handleRemoveSignatory(index)}
                          alt="delete"
                        />: ''}
                        <img
                          className={`${styles.plus_add}`}
                          onClick={() => addMoreSignatoryRows()}
                          src="/static/add-btn.svg"
                          alt="Plus"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                 ))}
              </div>
        </div>

        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>
          { Id ? <div className={`${styles.approve} ml-3`}>
              <span onClick={() => handleSubmit()}>Update</span>
            </div> : <div className={`${styles.approve} ml-3`}>
              <span onClick={() => handleSubmit()}>Send for Approval</span>
            </div>}
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
