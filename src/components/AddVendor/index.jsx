/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
import Image from 'next/image';
import UploadOther from '../UploadOther';
import { phoneValidation } from '@/utils/helper';
import { handleErrorToast } from '@/utils/helpers/global';
import { addressValidtion } from '@/utils/helpers/review';
import AddComponent from './AddComponent';
import PersonComponent from './PersonComponent';

function Index({
  remarks,
  setAddress,
  deleteAddress,
  updateKeyAddDataArr,
  setKeyContactPerson,
  setVendorDetail,
  orderid,
  vendorDetail,
  keyContactPerson,
  address,
  bankDetails,
  updateKeyPersonDataArr,
  deleteKeyPerson,
  handleSuplier,
  saveDate,
  handleUploadVendorDetails,
  handlekeyContactPersonDetail,
  handleSubmitKeyContactPersonDetails,
  handleAddressDetail,
  handleApproval,
  handleSubmitAddress,
  handleBankDetail,
  handleCanclePersonalDetail,
  handleCancleAddressDetail,
  handleRemaks,
}) {

  const [vendorRadio, setVendorRadio] = useState('domestic');

  const [keyAddressData, setKeyAddressData] = useState({
    addressType:  "",
    country:  '',
    zipCode:  '',
    state:'',
    city:'',
    pinCode: '',
    gstin:'',
    address:'',
    email:''
  });

  const handleChange = (name, value) => {
    const newInput = { ...keyAddressData };
    newInput[name] = value;
    setKeyAddressData(newInput);
  };

  const handleClick = () => {
    // if (addressValidtion(keyAddressData)) {
      handleAddressDetail(keyAddressData);
      setKeyAddressData({
        addressType:  "",
    country:  '',
    zipCode:  '',
    state:'',
    city:'',
    pinCode: '',
    gstin:'',
    address:'',
    email:''
      });
    // }
  };

  const handleCancel = () => {
    setKeyAddressData({
      addressType:  "",
      country:  '',
      zipCode:  '',
      state:'',
      city:'',
      pinCode: '',
      gstin:'',
      address:'',
      email:''
    });
  };

  const [showAddress, setShowAddress] = useState(true);
  const [Index, setIndex] = useState('0');
  const [showEditAddress, setShowEditAddress] = useState(false);

  const [editData, setEditData] = useState({
    addressType:  "",
    country:  '',
    zipCode:  '',
    state:'',
    city:'',
    pinCode: '',
    gstin:'',
    address:'',
    email:''
  });

  const editAddress = (index) => {
    setShowAddress(false);
    setShowEditAddress(true);
    setIndex(index);
    let tempArr = address;
    setEditData({
      gstin: tempArr[index].gstin,
      addressType: tempArr[index].addressType,
      branch: tempArr[index].branch,
      city: tempArr[index].city,
      state: tempArr[index].state,
      country: tempArr[index].country,
      email: tempArr[index].email,
      address: tempArr[index].address,
      pinCode: tempArr[index].pinCode,
      zipCode: tempArr[index].zipCode
    });
  };

  const changeData = (name, value) => {
    const newInput = { ...editData };
    newInput[name] = value;
    setEditData(newInput);
  };

  const handleEditCancel = () => {
    setEditData({
      addressType:  "",
      country:  '',
      zipCode:  '',
      state:'',
      city:'',
      pinCode: '',
      gstin:'',
      address:'',
      email:''
    });
  };

  // Key Person Code //

  const [personData, setPersonData] = useState({
    name:'',
    department:'',
    designation:'',
    phoneNumber:'',
    emailId:'',
    authorizedSignatory:'',
  });

  const handleBankChange = (name, value) => {
    const newInput = { ...personData };
    newInput[name] = value;

    setPersonData(newInput);
  };

  const handleBankClick = () => {
    // if (personValidtion(personData, countryName)) {
      handlekeyContactPersonDetail(personData);
      setPersonData({
        name:'',
        department:'',
        designation:'',
        phoneNumber:'',
        emailId:'',
        authorizedSignatory:'',
      });
    // }
  };

  const handleBankCancel = () => {
    setPersonData({
      name:'',
    department:'',
    designation:'',
    phoneNumber:'',
    emailId:'',
    authorizedSignatory:'',
    });
  };

  const [showBank, setShowBank] = useState(true);
  const [IndexBank, setIndexBank] = useState('0');
  const [showEditBank, setShowEditBank] = useState(false);

  const [editBank, setEditBank] = useState({
    name:'',
    department:'',
    designation:'',
    phoneNumber:'',
    emailId:'',
    authorizedSignatory:'',
  });

  const editBankArr = (index) => {
    setShowBank(false);
    setShowEditBank(true);
    setIndexBank(index);

    let tempArr = keyContactPerson;
    setEditBank({
      name: tempArr[index].name,
      department: tempArr[index].department,
      designation: tempArr[index].designation,
      phoneNumber: tempArr[index].phoneNumber,
      emailId: tempArr[index].emailId,
      authorizedSignatory: tempArr[index].authorizedSignatory,
    });
  };

  const changeKeyContactData = (name, value) => {
    const newInput = { ...editBank };
    newInput[name] = value;

    setEditBank(newInput);
  };

  const handleKeyContactEditCancel = () => {
    setEditBank({
      name:'',
    department:'',
    designation:'',
    phoneNumber:'',
    emailId:'',
    authorizedSignatory:'',
    });
  };

  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} mt-4 border_color`}>
        <div className={`${styles.main} vessel_card card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
          >
            <h3 className={`${styles.heading}`}>Vendor Details</h3>
          </div>
          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div className={`${styles.form_group} mt-0 col-lg-4 col-md-6 col-sm-6 `}>
                <div className={`${styles.radio_form}`}>
                  <div className={`${styles.sub_heading} label_heading`}>
                    Vendor <strong className="text-danger">*</strong>
                  </div>
                  {['radio'].map((type, index) => (
                    <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Domestic"
                        name="group1"
                        onChange={() => {handleSuplier('vendor', 'Domestic'); setVendorRadio('domestic')}}
                        type={type}
                        value='domestic'
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="International"
                        onChange={() => {handleSuplier('vendor', 'International'); setVendorRadio('international')}}
                        name="group1"
                        type={type}
                        value="international"
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                    value={vendorDetail?.vendorType}
                    name="vendorType"
                    onChange={(e) => handleSuplier(e.target.name, e.target.value)}
                  >
                    <option value="" selected>
                      Select
                    </option>
                    <option value="CMA">CMA</option>
                    <option value="CHA">CHA</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Vendor Type <strong className="text-danger ml-1">*</strong>
                  </label>
                  <div className={`${styles.img_arrow} image_arrow`}>
                    <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                  </div>
                </div>
              </div>
              {vendorRadio === 'international' ? (
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                      value={vendorDetail?.country}
                      name="country"
                      onChange={(e) => handleSuplier(e.target.name, e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Germany">Germany</option>
                      <option value="India">India</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Country <strong className="text-danger ml-1">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                    </div>
                  </div>
                </div>
              ) : (
                ' '
              )}
              {vendorRadio === 'domestic' ? (
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
                    type="text"
                    required
                    name="panId"
                    value={vendorDetail?.panId}
                    onChange={(e) => handleSuplier(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    PAN/Tax ID <strong className="text-danger">*</strong>
                  </label>
                </div>
              ) : (
                ' '
              )}
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="companyName"
                  value={vendorDetail?.companyName}
                  onChange={(e) => handleSuplier(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Company Name <strong className="text-danger">*</strong>
                </label>
              </div>
              {vendorRadio === 'international' ? (
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <input
                    className={`${styles.input_field} border_color input form-control`}
                    type="text"
                    required
                    name="pan_taxId"
                    value={vendorDetail?.pan_taxId}
                    onChange={(e) => handleSuplier(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`}>TAX ID</label>
                </div>
              ) : (
                ''
              )}
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <div className="d-flex">
                  <DateCalender
                    labelName="Activation Date"
                    saveDate={saveDate}
                    name="activationDate"
                    defaultDate={vendorDetail?.activationDate}
                  />
                  <div className={`${styles.calanderIcon} image_arrow`}>
                    <Image width="22px" height="24px" src="/static/caldericon.svg" alt="Calender" />
                  </div>
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  type="text"
                  id="textInput"
                  name="emailId"
                  value={vendorDetail?.emailId}
                  onChange={(e) => handleSuplier(e.target.name, e.target.value)}
                  className={`${styles.input_field} border_color input form-control`}
                />
                <label className={`${styles.label_heading} label_heading`} id="textInput">
                  Email ID <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="phoneNumber"
                  value={vendorDetail?.phoneNumber}
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      handleSuplier(e.target.name, e.target.value);
                    } else {
                      //red mark
                      handleErrorToast('PHONE NO. INVALID')
                    }
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Phone Number <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="website"
                  value={vendorDetail?.website}
                  onChange={(e) => handleSuplier(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>Website</label>
              </div>
              {vendorRadio === 'domestic' ? (
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <div className={`${styles.theme} d-flex align-items-center`}>
                    <div className={`${styles.toggle_label} form-check-label mr-3`}>Yes</div>
                    <label className={styles.switch}>
                      <input
                        type="checkbox"
                        value={vendorDetail?.isBlackListed}
                        onChange={() =>
                          setVendorDetail({ ...vendorDetail, isBlackListed: !vendorDetail.isBlackListed })
                        }
                        name="isBlackListed"
                      />
                      <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>
                    <div className={`${styles.toggle_label} form-check-label ml-3 mr-3`}>No</div>
                  </div>
                  <label className={`${styles.label_heading} label_heading`}>Blacklisted</label>
                </div>
              ) : (
                ''
              )}

              <div className={`${styles.form_group} col-lg-8 col-md-12 `}>
                <div className="input-group">
                  <input
                    type="text"
                    className={`${styles.input_field} border_color input form-control`}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                    name="remarks"
                    value={vendorDetail?.remarks}
                    onChange={(e) => handleSuplier(e.target.name, e.target.value)}
                  />
                  <label className={`${styles.label_heading} label_heading`}>Remarks</label>
                  <div className="input-group-append align-items-center">
                    <button className={`${styles.button_upload} btn`} onClick={handleUploadVendorDetails}>
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              {vendorRadio === 'international' ? (
                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                  <div className={`${styles.theme} d-flex align-items-center`}>
                    <div className={`${styles.toggle_label} form-check-label mr-3`}>Yes</div>
                    <label className={styles.switch}>
                      <input
                        type="checkbox"
                        value={vendorDetail?.isBlackListed}
                        onChange={() =>
                          setVendorDetail({ ...vendorDetail, isBlackListed: !vendorDetail.isBlackListed })
                        }
                        name="isBlackListed"
                      />
                      <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>
                    <div className={`${styles.toggle_label} form-check-label ml-3 mr-3`}>No</div>
                  </div>
                  <label className={`${styles.label_heading} label_heading`}>Blacklisted</label>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>

          <div className={`${styles.dashboard_form} card-body`} style={{ borderTop: '3px solid #D2D7E5' }}>
            <div className={`${styles.card_heading} mt-3`}>Key Contact Person Details</div>
            {showBank ? (
                <PersonComponent
                  countryName={vendorRadio}
                  bankData={personData}
                  handleBankChange={handleBankChange}
                  handleBankClick={handleBankClick}
                  handleBankCancel={handleBankCancel}
                />
              ) : null}
              {showEditBank ? (
                <PersonComponent
                  countryName={vendorRadio}
                  index={IndexBank}
                  showEditBank={showEditBank}
                  setShowBank={setShowBank}
                  setShowEditBank={setShowEditBank}
                  bankData={editBank}
                  editBank={editBank}
                  handleBankChange={changeKeyContactData}
                  handleBankClick={updateKeyPersonDataArr}
                  handleBankCancel={handleKeyContactEditCancel}
                />
              ) : null}
          { keyContactPerson && keyContactPerson?.length > 0 && keyContactPerson?.map((val, index) => ( <div className="d-flex justify-content-between">
              <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <label className={styles.label}>{val.name}- {val.designation}, {val.department}</label>
                    <div className={styles.address_values}>
                      <p>
                        {val.emailId}, <span className={styles.phone_number}>+91 {val.phoneNumber}</span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex">
                      <img onClick={() => {
                                editBankArr(index);
                              }} className={`${styles.edit_image} img-fluid`} src="/static/mode_edit.svg" alt="Edit" />
                      <div className={`${styles.delete_image} ml-3`}>
                        <Image onClick={() => deleteKeyPerson(index)} src="/static/delete.svg" width="40px" height="40px" alt="Bin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.sign_head}`}>
                  Authorised Signatory: <span>Yes</span>
                </div>
              </div>
              {/* <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <label className={styles.label}>Rajashekhar - Sales Manager, Sales</label>
                    <div className={styles.address_values}>
                      <p>
                        name@abc.com, <span className={styles.phone_number}>+91 9876543210</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">
                      <img className={`${styles.edit_image} img-fluid`} src="/static/mode_edit.svg" alt="Edit" />
                      <div className={`${styles.delete_image} ml-3`}>
                        <Image src="/static/delete.svg" width="40px" height="40px" alt="Bin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.sign_head}`}>
                  Authorised Signatory: <span>Yes</span>
                </div>
              </div> */}
            </div>))}
          </div>

          <div className={`${styles.dashboard_form} card-body`} style={{ borderTop: '3px solid #D2D7E5' }}>
            <div className={`${styles.card_heading} mt-3`}>Key Addresses</div>
            {showAddress ? (
                <AddComponent
                  handleChange={handleChange}
                  handleCancel={handleCancel}
                  handleClick={handleClick}
                  countryName={vendorRadio}
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
                  countryName={vendorRadio}
                  keyAddressData={editData}
                />
              ) : null}
              {address &&
                address?.length > 0 &&
                address?.map((val, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <label className={styles.label}>{val.addressType}</label>
                    <div className={styles.address_values}>
                      <p>{val.address}</p>
                      <div className="d-flex">
                        <p>
                          <span>Email:</span> {val.email}
                        </p>
                        <p>
                          <span className="ml-5">GSTIN:</span> {val.gstin}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">
                      <img onClick={() => {
                                editAddress(index);
                              }} className={`${styles.edit_image} img-fluid`} src="/static/mode_edit.svg" alt="Edit" />
                      <div className={`${styles.delete_image} ml-3`}>
                        <Image  onClick={() => deleteAddress(index)} src="/static/delete.svg" width="40px" height="40px" alt="Bin" />
                      </div>
                    </div>
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
            data-target="#bankDetails"
            aria-expanded="true"
            aria-controls="bankDetails"
          >
            <h3 className={`${styles.heading} mb-0`}>Bank Details</h3>
            <span>+</span>
          </div>
          <div id="bankDetails" className="collapse" aria-labelledby="bankDetails">
            <div className={`${styles.dashboard_form} card-body`}>
              {vendorRadio === 'domestic' ? (
                <div className="row">
                  <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="IFSC"
                      value={bankDetails?.IFSC}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      IFSC <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="Bank_Name"
                      value={bankDetails?.Bank_Name}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Bank Name <strong className="text-danger">*</strong>
                    </label>
                  </div>

                  <div className={`${styles.form_group} col-md-5 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      required
                      className={`${styles.input_field} border_color input form-control`}
                      name="Branch_Address"
                      value={bankDetails?.Branch_Address}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Bank Address <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      required
                      type="number"
                      onWheel={(event) => event.currentTarget.blur()}
                      onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                      name="Account_No"
                      value={bankDetails?.Account_No}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Account No.
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="Bank_Name"
                      value={bankDetails?.Bank_Name}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Bank Name <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="Account_No"
                      value={bankDetails?.Account_No}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Account No. <strong className="text-danger">*</strong>
                    </label>
                  </div>

                  <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      required
                      className={`${styles.input_field} border_color input form-control`}
                      name="Swift_Code"
                      value={bankDetails?.Swift_Code}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Swift Code <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-md-5 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      name="Branch_Address"
                      value={bankDetails?.Branch_Address}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                      required
                      className={`${styles.input_field} border_color input form-control`}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Branch Address <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="Correspondent_BankNmae"
                      value={bankDetails?.Correspondent_BankNmae}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`}>Correspondent Bank Name</label>
                  </div>
                  <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                    <input
                      className={`${styles.input_field} border_color input form-control`}
                      type="text"
                      required
                      name="Account_No"
                      value={bankDetails?.Account_No}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`}>Account No.</label>
                  </div>

                  <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      name="gstin"
                      value={bankDetails?.gstin}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                      required
                      className={`${styles.input_field} border_color input form-control`}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Swift Code
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-md-5 col-sm-6`}>
                    <input
                      type="text"
                      id="textInput"
                      name="AD_Code"
                      value={bankDetails?.AD_Code}
                      onChange={(e)=>handleBankDetail(e.target.name, e.target.value)}
                      required
                      className={`${styles.input_field} border_color input form-control`}
                    />
                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                      Branch Address
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <UploadOther isDocumentName={true} orderid={orderid} module="Loading-Transit-Unloading" />
        </div>

        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div className={`${styles.form_group} col-lg-9 col-sm-12 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="remarks"
                  value={remarks}
                  onChange={handleRemaks}
                />
                <label className={`${styles.label_heading} label_heading`}>Remarks</label>
              </div>
              <div className={`${styles.form_group} col-lg-3 col-sm-6 `} onClick={handleApproval}>
                <div className={`${styles.approve} ml-3`}>
                  <span>Send for Approval</span>
                </div>
              </div>
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
