/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import DateCalender from '../../src/components/DateCalender';
import InspectionDocument from '../../src/components/InspectionDocument';
import { setPageName, setDynamicName } from '../../src/redux/userData/action';
import SaveBar from '../../src/components/SaveBar';
import { UpdateSupplier } from '../../src/redux/supplier/action';
import Image from 'next/image';
import AddressComponent from '../../src/components/Credit/addressComponent';
import { toast } from 'react-toastify';

function Index() {
  const dispatch = useDispatch();

  const [saveShareTable, setSaveTable] = useState(false);
  const [saveContactTable, setContactTable] = useState(false);
  const [saveDirectorTable, setDirectorTable] = useState(false);
  const [saveCommodityTable, setCommodityTable] = useState(false);
  const [formData, setFormData] = useState({
    supplierName: '',
    constitution: '',
    incorporationDate: '',
    countryOfIncorporation: '',
    nationalIdentificationNumber: '',
    website: '',
    status:""
  });

  const [address, setAddress] = useState({
    contactPerson: '',
    pinCode: '',
    country: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    emailId: '',
  });

  const [person, setPerson] = useState([{
    name: '',
    designation: '',
    contact: '',
    emailId: '',
    action:false
  }]);


  const [detail, setDetail] = useState([{
    shareHoldersName: '',
    designation: '',
    contact: '',
    ownershipPercentage: '',
    action:false
  }]);

  const [signatory, setSignatory] = useState({
    name: '',
    nationality: '',
    authoriztyToSign: '',
  });
  const [business, setBusiness] = useState('');
  const [businessArray, setBusinessArray] = useState([]);
  const [commodity, setCommidity] = useState([{
    hsnCode: '',
    commodity: '',
    action:false
  }]);

  const [info, setInfo] = useState("");
  const [infoArray, setInfoArray] = useState([]);

  const handleShareDelete = (index) => {
    setDetail([...detail.slice(0, index), ...detail.slice(index + 1)]);
  };
  const handleDeletePersonContact = (index) => {
    setPerson([
      ...person.slice(0, index),
      ...person.slice(index + 1),
    ]);
  };
  const handleDeleteDirector = (index) => {
    setListDirector([
      ...listDirector.slice(0, index),
      ...listDirector.slice(index + 1),
    ]);
  };
  const handleCommodity = (index) => {
    setListCommodity([
      ...listCommodity.slice(0, index),
      ...listCommodity.slice(index + 1),
    ]);
  };

  const [listCommodity, setListCommodity] = useState([
    {
      hsnCode: '',
      commodity: '',
      action:false
    },
  ]);

  const [apiData, setApiData] = useState({
    supplierName: '',
    keyAddress: [],
    contactPerson: [],
    shareHoldersDetails: [],
    directorsAndAuthorizedSignatory: [],
    directorsAndAuthorizedSignatory: [],
    bussinessSummary: [],
    commoditiesTraded: [],
    additionalInformation: [],
  });
  const onAddCommodity = () => {
    setListCommodity([
      ...listCommodity,
      {
        hsnCode: '',
        commodity: '',
       action:false
      },
      
    ]);
  };
  const [listContact, setListContact] = useState([
    {
      name: '',
      designation: '',
      contactNo: '',
      emailID: '',
    },
  ]);
  const onAddPersonContact = () => {
    setPerson([
      ...person,
      {
        name: '',
        designation: '',
        contactNo: '',
        emailID: '',
        action:false
      },
    ]);
  };
  const [listShare, setListShare] = useState([
    {
      name: '',
      designation: '',
      contactNo: '',
      emailID: '',
      action:false
    },
  ]);
  const onAddShare = () => {
    setDetail([
      ...detail,
      {
        shareHoldersName: '',
        designation: '',
        contact: '',
        ownershipPercentage: '',
        action:false
      },
    ]);
  };
  const [listDirector, setListDirector] = useState([
    {
      name: '',
      nationality: '',
      authorityToSign: false,
     
      action:false
    },
  ]);

  const onAddDirector = () => {
    setListDirector([
      ...listDirector,
      {
        name: '',
      nationality: '',
      authorityToSign: false,
     
      action:false
      },
    ]);
  };

  const saveDate = (value, name) => {
    
    const d = new Date(value);
    let text = d.toISOString();
    saveQuotationData(name, text);
    // setStartDate(value, name)
  };

  const saveQuotationData = (name, value) => {
    

    formData.incorporationDate = value;
    setFormData({
      ...formData,
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChangeHandler1 = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const onChangeHandler2 = (name,value,index) => {
   
    let newInput=[...person]
   
    newInput[index][name]=value;
   
    setListShare([...newInput])
    
  };

 const onChangeHandler3 = (name,value,index) => {
   
    let newInput=[...detail]
   
    newInput[index][name]=value;
   
    setDetail([...newInput])
    
  };

 const onChangeHandler4 = (name,value,index) => {
   
    let newInput=[...listDirector]
   
    newInput[index][name]=value;
   
    setListDirector([...newInput])
    
  };

  const onChangeHandler5 = (e) => {
    const { name, value } = e.target;
    
    setBusiness(value);
  };
   const addToBusinessArray = (e) => {
    let temp=[...businessArray]
    temp.push(business)
    setBusinessArray([...temp])
    setBusiness('');
  };

   const onChangeHandler6 = (name,value,index) => {
   
    let newInput=[...listCommodity]
   
    newInput[index][name]=value;
   
    setListCommodity([...newInput])
    
  };


  const onChangeHandler7 = (e) => {
    const { name, value } = e.target;
    setInfo(value);
  };
  const onChangeHandler7Array = (e) => {
    let temp=[...infoArray]
    temp.push(info)
    setInfoArray([...temp])
    setInfo('');
  };

  const addData = (item) => {
    // apiData.supplierName.push(formData)
    if (item === 'address') {
      apiData.keyAddress.push(address);
      setAddress({
        contactPerson: '',
        pinCode: '',
        country: '',
        phoneNumber: '',
        alternatePhoneNumber: '',
        emailId: '',
      });
    } else if (item === 'person') {
      apiData.contactPerson.push(person);
      setPerson({
        name: '',
        designation: '',
        contact: '',
        emailId: '',
      });
    } else if (item === 'detail') {
      apiData.shareHoldersDetails.push(detail);

      setDetail({
        shareHoldersName: '',
        designation: '',
        contact: '',
        ownershipPercentage: '',
      });
    } else if (item === 'signatory') {
      apiData.directorsAndAuthorizedSignatory.push(signatory);

      setSignatory({
        name: '',
        nationality: '',
        authoriztyToSign: '',
      });
    } else if (item === 'business') {
      apiData.bussinessSummary.push(business);

      setSignatory({
        businessSummary: '',
      });
    } else if (item === 'commodity') {
      apiData.commoditiesTraded.push(commodity);

      setCommidity({
        hsnCode: '',
        commodity: '',
      });
    } else if (item === 'info') {
      apiData.additionalInformation.push(info);

      setInfo({
        remarks: '',
      });
    }

    // apiData.shareHoldersDetails.push(detail)
    // apiData.directorsAndAuthorizedSignatory.push(signatory)
    // apiData.bussinessSummary.push(business)
    // apiData.commoditiesTraded.push(commodity)
    // apiData.additionalInformation.push(info)
  };
  // {
 
  // }

  const handleSave = () => {
    apiData.supplierName = formData;
    apiData.contactPerson.push(person);
    apiData.keyAddress.push(address);
    apiData.shareHoldersDetails.push(detail);
    apiData.directorsAndAuthorizedSignatory.push(signatory);
    apiData.bussinessSummary.push(business);
    apiData.commoditiesTraded.push(commodity);
    apiData.additionalInformation.push(info);
    dispatch(UpdateSupplier(apiData));
   
  };

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    dispatch(setPageName('inception2'));
  });
    const [keyAddData, setKeyAddData] = useState([
    {
      GSTIN: "",
      GSTIN_document: "",
      addressType: "",
      branch: "",
      city: "",
      state: "",
      email: "",
      completeAddress:"",
      contact: {
        callingCode:"",
        number: "",
      },
      pinCode: "",
    },
  ]);
    const deleteComponent = (index) => {
    setKeyAddData([
      ...keyAddData.slice(0, index),
      ...keyAddData.slice(index + 1),
    ]);
  };
   const addressValidtion = (data) => {
  
  
    if (
      data.pinCode === null ||
      data.pinCode === '' ||
      data.pinCode === undefined
    ) {
      let toastMessage = 'Please add pin code';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
   
   
    if (data.email === null || data.email === '' || data.email === undefined) {
      let toastMessage = 'Please add email';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    }
    if (
      !String(data.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      let toastMessage = 'Please add valid email id';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.email === null || data.email === '' || data.email === undefined) {
      let toastMessage = 'Please add email';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    }
    if (
      data.contact.phoneNumber === null ||
      data.contact.phoneNumber === '' ||
      data.contact.phoneNumber === undefined
    ) {
      let toastMessage = 'Please add phone phoneNumber';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    }
   
    if (
      data.address === null ||
      data.address === '' ||
      data.address === undefined
    ) {
      let toastMessage = 'Please add address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    }
      if (
      data.country === null ||
      data.country === '' ||
      data.country === undefined
    ) {
      let toastMessage = 'Please add country';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    }
    return true;
  };
  const [showAddress, setShowAddress] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [Index, setIndex] = useState('0');
   const [editData, setEditData] = useState({
    GSTIN: '',
    GSTIN_document: '',
    addressType: '',
    branch: '',
    city: '',
    state: '',
    email: '',
    completeAddress: '',
    contact: {
      callingCode: '',
      number: '',
    },
    pinCode: '',
    
  });
  const [keyAddressData, setKeyAddressData] = useState({
        
        email: '',
        address: '',
        country:"",
        contact: {
          callingCode: null,
          phoneNumber: null,
          alternatePhoneNumber: null,
        },
        pinCode: null,
  });
   const editAddress = (index) => {
    setShowAddress(false);
    setShowEditAddress(true);
    setIndex(index);
  
    let tempArr = keyAddData;
    setEditData({
      
    
      
      email: tempArr[index].email,
      country: tempArr[index].country,
      address: tempArr[index].address,
      contact: {
        callingCode: tempArr[index].contact.callingCode,
        phoneNumber: tempArr[index].contact.phoneNumber,
        alternatePhoneNumber: tempArr[index].contact.alternatePhoneNumber,
      },
      pinCode: tempArr[index].pinCode,
    
    });
  };
   const keyAddDataArr = (keyAddressData) => {
    let newArr = [...keyAddData];
    newArr.push(keyAddressData);
    setKeyAddData(newArr);
  };
  const handleClick = () => {
    if (addressValidtion(keyAddressData)) {
      keyAddDataArr(keyAddressData);
      setKeyAddressData({
        
       
       
        email: '',
        address: '',
        country:"",
        contact: {
          callingCode: null,
          phoneNumber: null,
          alternatePhoneNumber: null,
        },
        pinCode: null,
       
      });
    }
  };
   const handleChange = (name, value) => {

    const newInput = { ...keyAddressData };
    newInput[name] = value;

    
    setKeyAddressData(newInput);
  };
  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading`}>
              <img
                src={`${
                  darkMode
                    ? `/static/white-arrow.svg`
                    : `/static/arrow-right.svg`
                }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>Add Supplier</span>
            </h1>
          </div>
        </div>

        <div className={`${styles.backgroundMain} container-fluid`}>
          <div className={`${styles.vessel_card} border_color`}>
            <div
              className={`${styles.main} vessel_card mt-4 card border_color`}
            >
              <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
                style={{ cursor: 'default' }}
              >
                <h3 className={`${styles.heading}`}>Supplier Profile</h3>

                <div className="d-flex align-items-center">
                  <label className={`${styles.dropDown_label} text`}>
                    Status:
                  </label>
                  <div className="position-relative">
                    <select
                      className={`${styles.dropDown} ${styles.customSelect} input`}
                      style={{ marginRight: '5px' }}
                    >
                      <>
                        {' '}
                        <option>Select an option</option>
                        <option value={true}>Active</option>
                        <option value={false}>Not active</option>
                      </>
                    </select>
                    <img
                      className={`${styles.arrow2} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>

                  <span
                    className="ml-4"
                    data-toggle="collapse"
                    data-target="#supplierProfile"
                    aria-expanded="true"
                    aria-controls="supplierProfile"
                    style={{ cursor: 'pointer' }}
                  >
                    +
                  </span>
                </div>
              </div>
              <div
                id="supplierProfile"
                //className="collapse"
                aria-labelledby="supplierProfile"
                data-parent="#supplierProfile"
              >
                <div className={`${styles.dashboard_form} mt-1 card-body`}>
                  <div className="row">
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          type="text"
                          required
                          onChange={onChangeHandler}
                          name="supplierName"
                          value={formData?.supplierName}
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Supplier Name
                          <strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.search_image} img-fluid`}
                          src="/static/search-grey.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <select
                          onChange={onChangeHandler}
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          required
                          name="constitution"
                          value={formData?.constitution}
                        >
                          <option>Select an option</option>
                          <option value="India">Private Limited</option>
                          <option value="America">ABC</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Constitution<strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <DateCalender
                          saveDate={saveDate}
                          saveQuotationData={saveQuotationData}
                          labelName="Incorporation Date"
                          onChange={onChangeHandler}
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <select
                          onChange={onChangeHandler}
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="countryOfIncorporation"
                          value={formData?.countryOfIncorporation}
                        >
                          <option>Select an option</option>
                          <option value="India">India</option>
                          <option value="America">USA</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Country of Incorporation
                          <strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <input
                        onChange={onChangeHandler}
                        className={`${styles.input_field} input form-control`}
                        type="number"
                        onWheel={(event) => event.currentTarget.blur()}
                        onKeyDown={(evt) =>
                          ['e', 'E', '+', '-'].includes(evt.key) &&
                          evt.preventDefault()
                        }
                        required
                        name="nationalIdentificationNumber"
                        value={formData?.nationalIdentificationNumber}
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        National Identification No. / Commercial Registry No.
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <input
                        onChange={onChangeHandler}
                        className={`${styles.input_field} input form-control`}
                        type="text"
                        required
                        name="website"
                        value={formData.website}
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Website
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.main} vessel_card mt-4 card border_color`}>
              <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#keyAddress"
                aria-expanded="true"
                aria-controls="keyAddress"
              >
                <h3 className={`${styles.heading} mb-0`}>Key Addresses</h3>
                <span>+</span>
              </div>
              <div
                id="keyAddress"
                className="collapse"
                aria-labelledby="keyAddress"
              >
                <div className={`${styles.dashboard_form} card-body`}>
                  <div className="d-flex justify-content-between">
                  {keyAddData.map((address, index) => {
                return (
                  <>
                    <AddressComponent
                      index={index}
                      Title={address?.addressType}
                      address={address?.completeAddress}
                      number={address?.contact?.number}
                      callingCode={address?.contact?.callingCode}
                      branch={address?.branch}
                      gstIn={address?.GSTIN}
                      email={address?.email}
                      deleteComponent={deleteComponent}
                      editAddress={editAddress}
                      // orderDetail={orderDetail}
                      path={''}
                     
                    />
                  </>
                );
              })}
                   
                  </div>
                  <div
                    className={`${styles.address_card} mt-3 pb-5 value background1`}
                  >
                    <div
                      className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
                    >
                      <h3
                        className={`${styles.heading}`}
                        style={{ textTransform: 'none' }}
                      >
                        Add a new address
                      </h3>
                    </div>
                    <div
                      className={`${styles.dashboard_form} card-body border_color`}
                    >
                      <div className="row">
                        <div
                          className={`${styles.form_group} col-md-12 col-sm-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            
                            name="address"
                            value={keyAddressData?.address}
                            onChange={(e)=>{
                              handleChange(e.target.value,e.target.name)
                            }}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Address
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-md-4 col-sm-4`}
                        >
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="pinCode"
                              value={keyAddressData?.pinCode}
                              onChange={(e)=>{
                              handleChange(e.target.value,e.target.name)
                            }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Pin Code
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.search_image} img-fluid`}
                              src="/static/search-grey.svg"
                              alt="Search"
                            />
                          </div>
                        </div>

                        <div
                          className={`${styles.form_group} col-md-4 col-sm-4`}
                        >
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="country"
                              value={keyAddressData?.country}
                              onChange={(e)=>{
                              handleChange(e.target.value,e.target.name)
                            }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Country
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.search_image} img-fluid`}
                              src="/static/search-grey.svg"
                              alt="Search"
                            />
                          </div>
                        </div>

                        <div
                          className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}
                        >
                          <div className={`${styles.phone_card}`}>
                            <select
                              name="callingCode"
                              id="Code"
                              className={`${styles.code_phone} input border-right-0`}
                             
                            >
                              <option>+91</option>
                              <option>+1</option>
                              <option>+92</option>
                              <option>+95</option>
                              <option>+24</option>
                            </select>
                            <input
                              type="tel"
                              id="textNumber"
                              name="contact.phoneNumber"
                              value={keyAddressData?.phoneNumber}
                              className={`${styles.input_field}  input form-control border-left-0`}
                             onChange={(e)=>{
                              handleChange(e.target.value,e.target.name)
                            }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                              id="textNumber"
                            >
                              Phone Number
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}
                        >
                          <div className={`${styles.phone_card}`}>
                            <select
                              name="callingCode"
                              id="Code"
                              className={`${styles.code_phone} input border-right-0`}
                            >
                              {' '}
                              <option>+91</option>
                              <option>+1</option>
                              <option>+92</option>
                              <option>+95</option>
                              <option>+24</option>
                            </select>
                            <input
                              type="tel"
                              id="textNumber"
                              name="contact.alternatePhoneNumber"
                              value={keyAddressData?.alternatePhoneNumber}
                              className={`${styles.input_field} input form-control border-left-0`}
                              onChange={(e)=>{
                              handleChange(e.target.value,e.target.name)
                            }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                              id="textNumber"
                            >
                              Alternate Phone Number
                            </label>
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-md-4 col-sm-6`}
                        >
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="emailId"
                              value={keyAddressData?.emailId}
                              onChange={(e)=>{
                              handleChange(e.target.value,e.target.name)
                            }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Email ID
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.plus_add} img-fluid`}
                              src="/static/add-btn.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                      className={`${styles.add_btn}`}
                      onClick={() => handleClick()}
                    >
                      Add
                    </button>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.main} vessel_card mr-2 ml-2 mt-4 card border_color`}>
            <div
              className={`${styles.head_container} border_color card-header d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#keyContact"
              aria-expanded="true"
              aria-controls="keyContact"
            >
              <h3 className={`${styles.heading} mb-0`}>
                Contact Person Details
              </h3>
              <span>+</span>
            </div>
            <div
              id="keyContact"
              className="collapse"
              aria-labelledby="keyContact"
              data-parent="#keyContact"
            >
              <div className={`${styles.datatable} card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            NAME <strong className="text-danger">*</strong>
                          </th>
                          <th>DESIGNATION</th>
                          <th>
                            CONTACT NO.{' '}
                            <strong className="text-danger">*</strong>
                          </th>
                          <th>
                            EMAIL ID <strong className="text-danger">*</strong>
                          </th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {person.length > 0 &&
                          person.map((val, index) => (
                            <tr key={index} className="table_credit">
                              <td>
                                <input
                                  className="input font-weight-bold"
                                  name="name"
                                  value={val?.name}
                                  type="text"
                                  onChange={(e)=>{
                                    onChangeHandler2(e.target.name,e.target.value,index)
                                  }}
                                   readOnly={!val.action}
                                />
                              </td>
                              <td>
                                <input
                                  className="input"
                                  name="designation"
                                  value={val?.designation}
                                  type="text"
                                  readOnly={!val.action}
                                 onChange={(e)=>{
                                    onChangeHandler2(e.target.name,e.target.value,index)
                                  }}
                                />
                              </td>

                              <td>
                                <input
                                  className="input"
                                  name="contact"
                                  value={val?.contact}
                                  type="number"
                                  onWheel={(event) =>
                                    event.currentTarget.blur()
                                  }
                                 onChange={(e)=>{
                                   onChangeHandler2(e.target.name,e.target.value,index)
                                  }}
                                  onKeyDown={(evt) =>
                                    ['e', 'E', '+', '-'].includes(evt.key) &&
                                    evt.preventDefault()
                                  }
                                   readOnly={!val.action}
                                />
                              </td>
                              <td>
                                <input
                                  className="input"
                                  name="emailId"
                                  value={val?.emailId}
                                  type="text"
                                  readOnly={!val.action}
                                  onChange={(e)=>{
                                   onChangeHandler2(e.target.name,e.target.value,index)
                                  }}
                                />
                              </td>
                            
                              <td className="text-right">
                                <div>
                                  {!val.action ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="edit"
                                        onClick={(e) => {
                                        
                                          onChangeHandler2("action",true,index)
                                          // setContactTable(true);
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="save"
                                        onClick={(e) => {
                                          
                                           onChangeHandler2("action",false,index)
                                          // setContactTable(false);
                                        }}
                                      />
                                    </>
                                  )}

                                  <img
                                    src="/static/delete 2.svg"
                                    className="img-fluid"
                                    alt="delete"
                                    onClick={() => handleDeletePersonContact(index)}
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
                  className={`${styles.add_row} p-3 d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddPersonContact();
                  }}
                >
                  <span>+</span>
                  <div>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.main} vessel_card mt-4 mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#shareHolding"
              aria-expanded="true"
              aria-controls="shareHolding"
            >
              <h3 className={`${styles.heading} mb-0`}>Shareholders Details</h3>
              <span>+</span>
            </div>
            <div
              id="shareHolding"
              className="collapse"
              aria-labelledby="shareHolding"
              data-parent="#shareHolding"
            >
              <div className={`${styles.datatable} card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>SHAREHOLDER NAME</th>
                          <th>DESIGNATION</th>
                          <th>OWNERSHIP (%)</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {detail.length > 0 &&
                          detail.map((val, index) => {
                            return (
                              <tr key={index} className="table_credit">
                                <td>
                                  <input
                                    className="input font-weight-bold"
                                    name="shareHoldersName"
                                    value={val?.shareHoldersName}
                                    type="text"
                                    onChange={(e)=>{
                                   onChangeHandler3(e.target.name,e.target.value,index)
                                  }}
                                    readOnly={!val.action}
                                  />
                                </td>
                                <td>
                                  <input
                                    className="input"
                                    name="designation"
                                    value={val?.designation}
                                    type="text"
                                   onChange={(e)=>{
                                   onChangeHandler3(e.target.name,e.target.value,index)
                                  }}
                                    readOnly={!val.action}
                                  />
                                </td>

                                <td>
                                  <input
                                    className="input"
                                    name="ownershipPercentage"
                                    value={val?.ownershipPercentage}
                                    type="number"
                                    onWheel={(event) =>
                                      event.currentTarget.blur()
                                    }
                                    onKeyDown={(evt) =>
                                      ['e', 'E', '+', '-'].includes(evt.key) &&
                                      evt.preventDefault()
                                    }
                                     onChange={(e)=>{
                                   onChangeHandler3(e.target.name,e.target.value,index)
                                  }}
                                    readOnly={!val.action}
                                  />
                                </td>

                                <td className="text-right">
                                  <div>
                                    {!val.action ? (
                                      <>
                                        <img
                                          src="/static/mode_edit.svg"
                                          className={`${styles.edit_image} mr-3 img-fluid`}
                                          alt="edit"
                                          onClick={(e) => {
                                           onChangeHandler3("action",true,index)
                                          }}
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src="/static/save-3.svg"
                                          className={`${styles.edit_image} mr-3 img-fluid`}
                                          alt="save"
                                          onClick={(e) => {
                                            onChangeHandler3("action",false,index)
                                          }}
                                        />
                                      </>
                                    )}
                                    <img
                                      src="/static/delete 2.svg"
                                      className="img-fluid"
                                      alt="delete"
                                      onClick={() => handleShareDelete(index)}
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={`${styles.add_row} p-3 d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddShare();
                  }}
                >
                  <span>+</span>
                  <div >Add More Rows</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.main} vessel_card mt-4 mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#director"
              aria-expanded="true"
              aria-controls="director"
            >
              <h3 className={`${styles.heading} mb-0`}>
                Directors and Authorised Signatory
              </h3>
              <span>+</span>
            </div>
            <div
              id="director"
              className="collapse"
              aria-labelledby="director"
              data-parent="#director"
            >
              <div className={`${styles.datatable} card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            NAME<strong className="text-danger">*</strong>
                          </th>
                          <th>
                            NATIONALITY
                            <strong className="text-danger">*</strong>
                          </th>
                          <th>
                            AUTHORITY TO SIGN
                            <strong className="text-danger">*</strong>
                          </th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {listDirector.length > 0 &&
                          listDirector.map((val, index) => (
                            <tr key={index} className="table_credit">
                              <td>
                                <input
                                  className="input font-weight-bold"
                                  name="name"
                                  value={val?.name}
                                  type="text"
                                 readOnly={!val.action}
                                  onChange={(e)=>{
                                   onChangeHandler4(e.target.name,e.target.value,index)
                                  }}
                                />
                              </td>
                              <td>
                                <input
                                  className="input"
                                  name="nationality"
                                  value={val?.nationality}
                                  type="text"
                                 readOnly={!val.action}
                                  onChange={(e)=>{
                                   onChangeHandler4(e.target.name,e.target.value,index)
                                  }}
                                />
                              </td>
                              <td>
                                <input
                                  name="authorityToSign"
                                  checked={val?.authorityToSign}
                                  className={`${styles.checkBox}`}
                                  type="checkbox"
                                  readOnly={!val.action}
                                  onChange={(e)=>{
                                   onChangeHandler4(e.target.name,!val?.authorityToSign,index)
                                  }}
                                />
                              </td>

                              <td className="text-right">
                                <div>
                                  {!val.action ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="edit"
                                       onClick={(e) => {
                                            onChangeHandler4("action",true,index)
                                          }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="save"
                                        onClick={(e) => {
                                            onChangeHandler4("action",false,index)
                                          }}
                                      />
                                    </>
                                  )}
                                  <img
                                    src="/static/delete 2.svg"
                                    className="img-fluid"
                                    alt="delete"
                                    onClick={() => handleDeleteDirector(index)}
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
                  className={`${styles.add_row} p-3 d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddDirector();
                  }}
                >
                  <span>+</span>
                  <div >Add More Rows</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card mt-4 mr-2 ml-2 card border_color `}>
            <div
              className={`${styles.head_container} border_color card-header d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#businessSummary"
              aria-expanded="true"
              aria-controls="businessSummary"
            >
              <h3 className={`${styles.heading} mb-0`}>Business Summary</h3>
              <span>+</span>
            </div>
            <div
              id="businessSummary"
              className="collapse"
              aria-labelledby="businessSummary"
              data-parent="#businessSummary"
            >
              <div className={`${styles.dashboard_form} mr-3`}>
              

                <div className="d-flex mt-4 pb-4 ml-4">
                  <input
                    as="textarea"
                    rows={3}
                    placeholder=""
                    className={`${styles.comment_field} mr-n5 form-control`}
                    onChange={onChangeHandler5}
                    name="businessSummary"
                    value={business}
                  />
                  <label className={`${styles.label_textarea} label_heading text`}>
                    Business Summary
                  </label>
                  <img
                  onClick={(e)=>{addToBusinessArray()}}
                    className={`${styles.plus_field} img-fluid`}
                    src="/static/add-btn.svg"
                    alt="add button"
                  />
                </div>
                <ol>
                {businessArray.map((val,index)=>{
                  return <li>{val}</li>
                })}
                </ol>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card mt-4 mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} border_color card-header d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#commodity"
              aria-expanded="true"
              aria-controls="commodity"
            >
              <h3 className={`${styles.heading} mb-0`}>Commodities Traded</h3>
              <span>+</span>
            </div>
            <div
              id="commodity"
              className="collapse"
              aria-labelledby="commodity"
              data-parent="#commodity"
            >
              <div className={`${styles.datatable} card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            HSN CODE<strong className="text-danger">*</strong>
                          </th>
                          <th>
                            COMMODITY
                            <strong className="text-danger">*</strong>
                          </th>

                          <th width="50%"></th>
                        </tr>
                      </thead>

                      <tbody>
                        {listCommodity.length > 0 &&
                          listCommodity.map((val, index) => (
                            <tr key={index} className="table_credit">
                              <td>
                                <input
                                  className="input font-weight-bold"
                                  name="hsnCode"
                                  value={val?.hsnCode}
                                  type="text"
                                  readOnly={!val.action}
                                  onChange={(e)=>{
                                    onChangeHandler6(e.target.name,e.target.value,index)
                                  }}
                                />
                              </td>
                              <td>
                                <input
                                  className="input"
                                  name="commodity"
                                  value={val?.commodity}
                                  type="text"
                                 readOnly={!val.action}
                                  onChange={(e)=>{
                                    onChangeHandler6(e.target.name,e.target.value,index)
                                  }}
                                />
                              </td>
                              

                              <td className="text-right">
                                <div>
                                  {!val.action ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="edit"
                                        onClick={(e) => {
                                           onChangeHandler6("action",true,index)
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="save"
                                        onClick={(e) => {
                                           onChangeHandler6("action",false,index)
                                        }}
                                      />
                                    </>
                                  )}

                                  <img
                                    src="/static/delete 2.svg"
                                    className="img-fluid"
                                    alt="delete"
                                    onClick={() => handleCommodity(index)}
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
                  className={`${styles.add_row} p-3 d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddCommodity();
                  }}
                >
                  <span>+</span>
                  <div onClick={() => addData('address')}>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card mt-4 mr-2 ml-2 card border_color `}>
            <div
              className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#additional"
              aria-expanded="true"
              aria-controls="additional"
            >
              <h3 className={`${styles.heading} mb-0`}>
                Additional Information
              </h3>
              <span>+</span>
            </div>
            <div
              id="additional"
              className="collapse"
              aria-labelledby="additional"
              data-parent="#additional"
            >
              <div className={`${styles.dashboard_form} vessel_card mr-3`}>
                {/* <div className={`${styles.comment_para} d-flex `}>
                  <Form.Control
                    className={`${styles.comment}`}
                    as="textarea"
                    rows={3}
                  />

                  <div className="ml-3">
                    <img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} img-fluid mb-3`}
                      alt="edit"
                      // onClick={(e) => {
                      //   setEditProfile(!editProfile)
                      // }}
                    />
                    <img
                      src="/static/delete 2.svg"
                      className="img-fluid"
                      alt="delete"
                    />
                  </div>
                </div> */}

                <div className="d-flex mt-4 pb-4">
                  <input
                    as="textarea"
                    rows={3}
                    placeholder=""
                    name="remarks"
                    value={info}
                    className={`${styles.comment_field} form-control`}
                    onChange={onChangeHandler7}
                  />
                  <label className={`${styles.label_textarea} label_heading text`}>
                    Remarks
                  </label>

                  <img
                    className={`${styles.plus_field} img-fluid`}
                    src="/static/add-btn.svg"
                    alt="add button"
                    onClick={(e)=>{
                      onChangeHandler7Array()
                    }}
                  />
                </div>
                  {infoArray.map((val,index)=>{
                  return <li>{val}</li>
                })}
              </div>
            </div>
          </div>
          <div className="mt-4 ml-2 mr-2 mb-5">
            <InspectionDocument
              documentName="Incumbency Certificate"
              isSupplier={true}
              // uploadDocument1={uploadDocument1}
            />
          </div>
        </div>
        <SaveBar rightBtn="Send for Approval" handleSave={handleSave} />
      </div>
    </>
  );
}
export default Index;
