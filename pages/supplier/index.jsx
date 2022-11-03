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
import { Form } from 'react-bootstrap';

import Image from 'next/image';
import AddressComponent from '../../src/components/AddressSupplier';
import { toast } from 'react-toastify';
import { emailValidation } from 'utils/helper';
import { GetSupplier, ClearSupplier, UpdateSupplier, CreateSupplier, DeleteSupplierDoc, UploadSupplierDoc } from 'redux/supplier/action';
import _get from 'lodash/get';
import Router from 'next/router';
import moment from 'moment';

function Index() {
  const dispatch = useDispatch();
  const { supplierResponse } = useSelector((state) => state.supplier);

  let id = sessionStorage.getItem('supplier')
  useEffect(() => {
    if (id) {
      dispatch(GetSupplier(`?supplierId=${id}`))
    } else {
      dispatch(ClearSupplier())
    }
  }, [id])

  let supplierData = JSON.parse(JSON.stringify(_get(supplierResponse, 'data[0]', {})))




  useEffect(() => {
    setFormData(supplierData?.supplierProfile ?? {
      supplierName: '',
      constitution: '',
      incorporationDate: '',
      countryOfIncorporation: '',
      nationalIdentificationNumber: '',
      website: '',
      status: "Active"
    })
    setKeyAddData(supplierData?.keyAddress ?? [])
    setPerson(supplierData.contactPerson ?? [])
    setDetail(supplierData?.shareHoldersDetails ?? [])
    setListDirector(supplierData?.directorsAndAuthorizedSignatory ?? [])
    setBusinessArray(supplierData?.bussinessSummary ?? [])
    setCommidity(supplierData?.commoditiesTraded ?? [])
    setInfoArray(supplierData?.additionalInformation ?? [])
    if (_get(supplierData, 'document[0]', '') !== '') {
      setIncumbencyDoc(supplierData?.document[0])
    }
    if (_get(supplierData, 'document[1]', '') !== '') {
      SetThirdParty(supplierData?.document[1])
    }

  }, [supplierResponse])
  console.log(supplierData, keyAddData, 'supplierResponse')
  let supplierName = _get(supplierResponse, 'data[0].supplierProfile.supplierName', '')


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
    status: "Active"
  });

  console.log(formData, 'setFormData')
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
    action: false
  }]);
  console.log(person, 'person')

  const [detail, setDetail] = useState([{
    shareHoldersName: '',
    designation: '',
    contact: '',
    ownershipPercentage: '',
    action: false
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
    action: false
  }]);


  const [info, setInfo] = useState("");
  const [infoArray, setInfoArray] = useState([]);

  const [incumbencyDoc, setIncumbencyDoc] = useState(null)
  const [thirdParty, SetThirdParty] = useState(null)
  const [newDoc, setNewDoc] = useState({
    document: null,
    name: ''
  })

  const [docs, setdocs] = useState([])

  console.log(thirdParty, incumbencyDoc, _get(supplierData, 'document[0]', ''), 'incumbencyDoc')

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
      action: false
    },
  ]);


  const onAddCommodity = () => {
    setListCommodity([
      ...listCommodity,
      {
        hsnCode: '',
        commodity: '',
        action: false
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
        action: false
      },
    ]);
  };
  const [listShare, setListShare] = useState([
    {
      name: '',
      designation: '',
      contactNo: '',
      emailID: '',
      action: false
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
        action: false
      },
    ]);
  };
  const [listDirector, setListDirector] = useState([
    {
      name: '',
      nationality: '',
      authorityToSign: false,

      action: false
    },
  ]);
  console.log(listDirector, "listDirector")
  const onAddDirector = () => {
    setListDirector([
      ...listDirector,
      {
        name: '',
        nationality: '',
        authorityToSign: false,

        action: false
      },
    ]);
  };

  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value);
    let text = d.toISOString();
    saveQuotationData(name, text);
    // setStartDate(value, name)
  };

  const saveQuotationData = (name, value) => {
    // console.log(value, 'dhjsgfksjdghf')

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

  const onChangeHandler2 = (name, value, index) => {
    console.log(name, value, index, "name,value,<index></index>")
    let newInput = [...person]
    console.log(newInput[index], "newInput[index]")
    newInput[index][name] = value;
    console.log(newInput, "newInput")
    setListShare([...newInput])

  };
  console.log(person, "person")
  const onChangeHandler3 = (name, value, index) => {
    console.log(name, value, index, "name,value,<index></index>")
    let newInput = [...detail]
    console.log(newInput[index], "newInput[index]")
    newInput[index][name] = value;
    console.log(newInput, "newInput")
    setDetail([...newInput])

  };
  console.log(listShare, "listShare")
  const onChangeHandler4 = (name, value, index) => {
    console.log(name, value, index, "name,value,<index></index>")
    let newInput = [...listDirector]
    console.log(newInput[index], "newInput[index]")
    newInput[index][name] = value;
    console.log(newInput, "newInput")
    setListDirector([...newInput])

  };

  const onChangeHandler5 = (e) => {
    const { name, value } = e.target;

    setBusiness(value);
  };
  const addToBusinessArray = (e) => {
    console.log(businessArray, 'businessArray')
    let temp = [...businessArray]
    // temp.push(business)
    setBusinessArray([...temp, { business: business }])
    setBusiness('');
  };

  const onChangeHandler6 = (name, value, index) => {
    console.log(name, value, index, "name,value,<index></index>")
    let newInput = [...listCommodity]

    newInput[index][name] = value;
    console.log(newInput, "newInput")
    setListCommodity([...newInput])

  };


  const onChangeHandler7 = (e) => {
    const { name, value } = e.target;
    setInfo(value);
  };
  const onChangeHandler7Array = (e) => {
    let temp = [...infoArray]
    // temp.push(info)
    setInfoArray([...temp, { comment: info }])
    setInfo('');
  };


  const contactPersonDetailsValidation = () => {
    let isOk = true;
    let toastMessage = '';
    for (let i = 0; i <= person.length - 1; i++) {
      if (
        person[i].name === '' ||
        person[i].name === null
      ) {
        toastMessage = ` name cannot be empty in Contact Person Details ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        person[i].designation === '' ||
        person[i].designation === null
      ) {
        toastMessage = ` designation cannot be empty in Contact Person Details ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        person[i].contact === '' ||
        person[i].contact === null ||
        person[i].contact.length !== 10

      ) {
        toastMessage = ` please provide a valid contact no in Contact Person Details ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        person[i].emailId === '' ||
        person[i].emailId === null ||
        !emailValidation(person[i].emailId)
      ) {
        toastMessage = `please provide a valid email Id  in Contact Person Details ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
    }
    return isOk;
  };

  const shareholdersDetailsValidation = () => {
    let isOk = true;
    let toastMessage = '';
    for (let i = 0; i <= detail.length - 1; i++) {
      if (
        detail[i].shareHoldersName === '' ||
        detail[i].shareHoldersName === null
      ) {
        toastMessage = ` shareHolders Name cannot be empty in shareHolder Details ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        detail[i].designation === '' ||
        detail[i].designation === null
      ) {
        toastMessage = ` designation cannot be empty in shareholder Details ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        detail[i].ownershipPercentage === '' ||
        detail[i].ownershipPercentage === null ||
        detail[i].ownershipPercentage >= 100

      ) {
        toastMessage = ` please provide a valid ownership Percentage in shareholder  Details ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
    }
    return isOk;
  };

  const directorsAndAuthorisedSignatoryValidation = () => {
    let isOk = true;
    let toastMessage = '';
    for (let i = 0; i <= listDirector.length - 1; i++) {
      if (
        listDirector[i].name === '' ||
        listDirector[i].name === null
      ) {
        toastMessage = `  Name cannot be empty in Directors And Authorised Signatory ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        listDirector[i].nationality === '' ||
        listDirector[i].nationality === null
      ) {
        toastMessage = ` nationality cannot be empty in Directors And Authorised Signatory ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      // if (
      //   listDirector[i].authorityToSign === '' ||
      //   listDirector[i].authorityToSign === null 
      // ) {
      //   toastMessage = `Name cannot be empty in Directors And Authorised Signatory ${i + 1} `;
      //   if (!toast.isActive(toastMessage.toUpperCase())) {
      //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      //     isOk = false;
      //     break;
      //   }
      // }
    }
    return isOk;
  };
  const commoditiesTradedValidation = () => {
    let isOk = true;
    let toastMessage = '';
    for (let i = 0; i <= listCommodity.length - 1; i++) {
      if (
        listCommodity[i].hsnCode === '' ||
        listCommodity[i].hsnCode === null
      ) {
        toastMessage = `  hsn code cannot be empty in Commodities Traded ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (
        listCommodity[i].commodity === '' ||
        listCommodity[i].commodity === null
      ) {
        toastMessage = ` commodity cannot be empty in Commodities Traded ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      // if (
      //   listDirector[i].authorityToSign === '' ||
      //   listDirector[i].authorityToSign === null 
      // ) {
      //   toastMessage = `Name cannot be empty in Directors And Authorised Signatory ${i + 1} `;
      //   if (!toast.isActive(toastMessage.toUpperCase())) {
      //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      //     isOk = false;
      //     break;
      //   }
      // }
    }
    return isOk;
  };


  const supplierValidtaion = () => {
    if (!formData.supplierName || formData.supplierName === '') {
      let toastMessage = `supplier Name cannot be empty`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false
    } else if (!formData.constitution || formData.constitution === '') {
      let toastMessage = `please select a constitution`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false
    } else if (!formData.incorporationDate || formData.incorporationDate === '') {
      let toastMessage = `please select a incorporation Date`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false
    } else if (!formData.countryOfIncorporation || formData.countryOfIncorporation === '') {
      let toastMessage = `please provide a country Of Incorporation`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false
    } else if (!contactPersonDetailsValidation()) {
      return false
    } else if (!shareholdersDetailsValidation()) {
      return false
    } else if (!directorsAndAuthorisedSignatoryValidation()) {
      return false
    }
    else if (!commoditiesTradedValidation()) {
      return false
    } else if (!incumbencyDoc) {
      let toastMessage = `please upload incumbency certificate`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false
    } else if (!thirdParty) {
      let toastMessage = `please upload third party certificate`;
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false
    }
    else {
      return true
    }

  }

  const handleSave = () => {
    if (supplierValidtaion()) {

      // let fd = new FormData();
      // fd.append('document1', incumbencyDoc);
      // fd.append('document2', thirdParty);


      let apiData = {
        supplierProfile: formData,
        keyAddress: keyAddData,
        contactPerson: person,
        shareHoldersDetails: detail,
        directorsAndAuthorizedSignatory: listDirector,
        bussinessSummary: businessArray,
        commoditiesTraded: commodity,
        additionalInformation: infoArray,
        document1: incumbencyDoc,
        document2: thirdParty
      }

      let fd = new FormData();
      fd.append('supplierProfile', JSON.stringify(formData));
      fd.append('keyAddress', JSON.stringify(keyAddData));
      fd.append('contactPerson', JSON.stringify(person));
      fd.append('directorsAndAuthorizedSignatory', JSON.stringify(listDirector));
      fd.append('bussinessSummary', JSON.stringify(businessArray));
      fd.append('commoditiesTraded', JSON.stringify(commodity));
      fd.append('additionalInformation', JSON.stringify(infoArray));

      fd.append('document1', incumbencyDoc);
      fd.append('document2', thirdParty);


      if (id) {
        dispatch(UpdateSupplier(fd));
      } else {
        dispatch(CreateSupplier(fd))
      }
      // console.log('apidata', apiData)
    }
  };

  const handleSendForApproval = () => {

    sessionStorage.removeItem('supplier');
    dispatch(ClearSupplier())
    let toastMessage = `request sent for approval`;
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    Router.push('/add-supplier')
  }

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    dispatch(setPageName('inception2'));
  });
  const [keyAddData, setKeyAddData] = useState([]);
  const deleteComponent = (index) => {
    setKeyAddData([
      ...keyAddData.slice(0, index),
      ...keyAddData.slice(index + 1),
    ]);
  };
  const addressValidtion = (data) => {
    const emailValidate = () => {
      let isOk = true
      data.email.forEach((email, index) => {
        if (
          !String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
        ) {
          let toastMessage = `Please add valid email id for Email Field ${index}`;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          isOk = false;
          return
        }
      })
      console.log(isOk, 'keyAddressData')
      return isOk
    }



    console.log(data, 'addressValidtion');
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
    else if (
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
    else if (
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
    else if (!emailValidate()) {
      return false;
    }
    else if (
      data.contact.phoneNumber === null ||
      data.contact.phoneNumber === '' ||
      data.contact.phoneNumber === undefined
    ) {
      let toastMessage = 'Please add phone phoneNumber';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    } else {
      return true;

    }


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

    email: [''],
    address: '',
    country: "",
    contact: {
      phoneNumberCallingCode: '+91',
      alternatePhoneNumberCallingCode: '+91',
      phoneNumber: null,
      alternatePhoneNumber: null,
    },
    pinCode: null,
  });

  console.log(keyAddressData, 'keyAddressData')
  const editAddress = (index) => {
    setShowAddress(false);
    setShowEditAddress(true);
    setIndex(index);
    console.log(keyAddData, 'keyAddData');
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



        email: [''],
        address: '',
        country: "",
        contact: {
          phoneNumberCallingCode: '+91',
          alternatePhoneNumberCallingCode: '+91',
          phoneNumber: null,
          alternatePhoneNumber: null,
        },
        pinCode: null,

      });
    }
  };

  const handleChange = (value, name, index) => {

    const newInput = { ...keyAddressData };




    let namesplit = name.split('.')
    console.log(name, namesplit, value, "name, value")



    if (name === 'emailId') {
      newInput.email[index] = value
    }
    else if (namesplit.length > 1) {
      newInput[namesplit[0]][namesplit[1]] = value;
    } else {
      newInput[name] = value;

    }

    // console.log(newInput)
    setKeyAddressData(newInput);
  };


  const uploadDocumentHandler = (e) => {
    if (newDoc?.document) {
      let tempArr = [...docs]
      tempArr.push(newDoc.document)
      setdocs(tempArr)

      let fd = new FormData();
      fd.append('supplierId', JSON.stringify(supplierData._id));
      fd.append('document', newDoc.document);
      dispatch(UploadSupplierDoc(fd))
    } else {
      let toastMessage = 'please upload a document first';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    }
  }

  const deleteDocumentHandler = ({ document, index }) => {
    let tempArray = docs;
    tempArray.splice(index, 1);
    setdocs(tempArray);
    setdocs(tempArray)

    // let payload = {
    //   supplierId: supplierData._id,
    //   path: path
    // }


    // dispatch(DeleteSupplierDoc(payload))
  }



  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading`}>
              <img
                src={`${darkMode
                  ? `/static/white-arrow.svg`
                  : `/static/arrow-right.svg`
                  }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>{supplierName !== '' ? supplierName : 'Add Supplier'}</span>
            </h1>
          </div>
        </div>

        <div className={`${styles.backgroundMain} container-fluid`}>
          <div className={`${styles.main} vessel_card mr-2 ml-2 card border_color`}
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
                    name="status"
                    onChange={onChangeHandler}
                  >
                    <>
                      {' '}
                      <option>Select an option</option>
                      <option value='Active'>Active</option>
                      <option value='InActive'>Not active</option>
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
              <div className={`${styles.dashboard_form} mt-1 card-body border_color`}>
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
                        defaultDate={formData?.incorporationDate ?? ''}
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
                      value={formData?.website}
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
          <div className={`${styles.main} vessel_card mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color d-flex justify-content-between bg-transparent`}
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
              <div className={`${styles.dashboard_form} card-body border_color`}>
                <div className="d-flex align-items-center justify-content-between">
                
                  {keyAddData?.map((address, index) => {

                    return (
                      <>
                        <AddressComponent
                          index={index}
                          Title={address?.addressType}
                          address={address?.address}
                          number={address?.contact?.phoneNumber}
                          callingCode={address?.contact?.phoneNumberCallingCode}
                          alterNumber={address?.contact?.alternatePhoneNumber}
                          alterCallingCode={address?.contact?.alternatePhoneNumberCallingCode}
                          country={address?.country}
                          email={address?.email}
                          deleteComponent={deleteComponent}
                          editAddress={editAddress}
                          pinCode={address.pinCode}
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
                          onChange={(e) => {
                            handleChange(e.target.value, e.target.name)
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
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name)
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
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name)
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
                            name="contact.phoneNumberCallingCode"
                            id="Code"
                            className={`${styles.code_phone} input border-right-0`}
                            value={keyAddressData.contact.phoneNumberCallingCode}
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name)
                            }}
                          >
                            <option value='+91'>+91</option>
                            <option value='+1'>+1</option>
                            <option value='+92'>+92</option>
                            <option value='+95'>+95</option>
                            <option value='+24'>+24</option>
                          </select>
                          <input
                            type="tel"
                            id="textNumber"
                            name="contact.phoneNumber"
                            value={keyAddressData?.phoneNumber}
                            className={`${styles.input_field}  input form-control border-left-0`}
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name)
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
                            name="contact.alternatePhoneNumberCallingCode"
                            id="Code"
                            className={`${styles.code_phone} input border-right-0`}
                            value={keyAddressData.contact.alternatePhoneNumberCallingCode}

                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name)
                            }}
                          >
                            {' '}
                            <option value='+91'>+91</option>
                            <option value='+1'>+1</option>
                            <option value='+92'>+92</option>
                            <option value='+95'>+95</option>
                            <option value='+24'>+24</option>
                          </select>
                          <input
                            type="tel"
                            id="textNumber"
                            name="contact.alternatePhoneNumber"
                            value={keyAddressData?.alternatePhoneNumber}
                            className={`${styles.input_field} input form-control border-left-0`}
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name)
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
                      {keyAddressData.email.map((email, index) => (
                        <div
                          className={`${styles.form_group} col-md-4 col-sm-6`}
                        >
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="emailId"
                              value={email}

                              onChange={(e) => {
                                handleChange(e.target.value, e.target.name, index)
                              }}
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Email ID
                              <strong className="text-danger">*</strong>
                            </label>

                        
                          <img
                            onClick={() => setKeyAddressData((prev) => {
                              return { ...prev, email: [...prev.email, ''] }
                            })}
                            className={`${styles.plus_add} img-fluid`}
                            src="/static/add-btn.svg"
                            alt="Search"
                          />

                        </div>
                        </div>
                      ))}
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
          <div className={`${styles.main} vessel_card mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} border_color card-header align-items-center d-flex justify-content-between bg-transparent`}
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
              <div className={`${styles.datatable} border_color card-body datatable`}>
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
                        {person?.length > 0 &&
                          person?.map((val, index) => (
                            <tr key={index} className="table_credit">
                              <td>
                                <input
                                  className="input font-weight-bold"
                                  name="name"
                                  value={val?.name}
                                  type="text"
                                  onChange={(e) => {
                                    onChangeHandler2(e.target.name, e.target.value, index)
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
                                  onChange={(e) => {
                                    onChangeHandler2(e.target.name, e.target.value, index)
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
                                  onChange={(e) => {
                                    onChangeHandler2(e.target.name, e.target.value, index)
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
                                  onChange={(e) => {
                                    onChangeHandler2(e.target.name, e.target.value, index)
                                  }}
                                />
                              </td>
                              {console.log('data55', val)}
                              <td className="text-right">
                                <div>
                                  {!val.action ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="edit"
                                        onClick={(e) => {
                                          console.log("herer1")
                                          onChangeHandler2("action", true, index)
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
                                          console.log("herer2")
                                          onChangeHandler2("action", false, index)
                                          // setContactTable(false);
                                        }}
                                      />
                                    </>
                                  )}

                                  <img
                                    src="/static/delete 2.svg"
                                    className={`${styles.delete_image} border-0 p-0`}
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
          <div className={`${styles.main} vessel_card mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color align-items-center d-flex justify-content-between bg-transparent`}
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
              <div className={`${styles.datatable} card-body datatable border_color`}>
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
                        {detail?.length > 0 &&
                          detail?.map((val, index) => {
                            return (
                              <tr key={index} className="table_credit">
                                <td>
                                  <input
                                    className="input font-weight-bold"
                                    name="shareHoldersName"
                                    value={val?.shareHoldersName}
                                    type="text"
                                    onChange={(e) => {
                                      onChangeHandler3(e.target.name, e.target.value, index)
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
                                    onChange={(e) => {
                                      onChangeHandler3(e.target.name, e.target.value, index)
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
                                    onChange={(e) => {
                                      onChangeHandler3(e.target.name, e.target.value, index)
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
                                            onChangeHandler3("action", true, index)
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
                                            onChangeHandler3("action", false, index)
                                          }}
                                        />
                                      </>
                                    )}
                                    <img
                                      src="/static/delete 2.svg"
                                      className={`${styles.delete_image} border-0 p-0`}
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
          <div className={`${styles.main} vessel_card mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color align-items-center d-flex justify-content-between bg-transparent`}
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
              <div className={`${styles.datatable} card-body datatable border_color`}>
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
                        {listDirector?.length > 0 &&
                          listDirector?.map((val, index) => (
                            <tr key={index} className="table_credit">
                              <td>
                                <input
                                  className="input font-weight-bold"
                                  name="name"
                                  value={val?.name}
                                  type="text"
                                  readOnly={!val.action}
                                  onChange={(e) => {
                                    onChangeHandler4(e.target.name, e.target.value, index)
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
                                  onChange={(e) => {
                                    onChangeHandler4(e.target.name, e.target.value, index)
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
                                  onChange={(e) => {
                                    onChangeHandler4(e.target.name, !val?.authorityToSign, index)
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
                                          onChangeHandler4("action", true, index)
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
                                          onChangeHandler4("action", false, index)
                                        }}
                                      />
                                    </>
                                  )}
                                  <img
                                    src="/static/delete 2.svg"
                                    className={`${styles.delete_image} border-0 p-0`}
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
          <div className={`${styles.main} vessel_card mr-2 ml-2 card border_color `}>
            <div
              className={`${styles.head_container} border_color card-header align-items-center d-flex justify-content-between bg-transparent`}
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
              <div className={`${styles.dashboard_form} mr-3 card-body border_color`}>


                <div className="d-flex pb-4 ml-4 position-relative">
                  <input
                    as="textarea"
                    rows={3}
                    placeholder=""
                    className={`${styles.comment_field} input form-control`}
                    onChange={onChangeHandler5}
                    name="businessSummary"
                    value={business}
                  />
                  <label className={`${styles.label_textarea} label_heading text`}>
                    Business Summary
                  </label>
                  <img
                    onClick={(e) => { addToBusinessArray() }}
                    className={`${styles.plus_field} img-fluid`}
                    src="/static/add-btn.svg"
                    alt="add button"
                  />
                </div>
                <ol>
                  {businessArray?.map((val, index) => {
                    return <li>{val?.business}</li>
                  })}
                </ol>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card mr-2 ml-2 card border_color`}>
            <div
              className={`${styles.head_container} border_color card-header align-items-center d-flex justify-content-between bg-transparent`}
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
              <div className={`${styles.datatable} card-body datatable border_color`}>
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
                                  onChange={(e) => {
                                    onChangeHandler6(e.target.name, e.target.value, index)
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
                                  onChange={(e) => {
                                    onChangeHandler6(e.target.name, e.target.value, index)
                                  }}
                                />
                              </td>
                              {console.log('data99', commodity)}

                              <td className="text-right">
                                <div>
                                  {!val.action ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3 img-fluid`}
                                        alt="edit"
                                        onClick={(e) => {
                                          onChangeHandler6("action", true, index)
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
                                          onChangeHandler6("action", false, index)
                                        }}
                                      />
                                    </>
                                  )}

                                  <img
                                    src="/static/delete 2.svg"
                                    className={`${styles.delete_image} border-0 p-0`}
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
                  <div >Add More Rows</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card mr-2 ml-2 card border_color `}>
            <div
              className={`${styles.head_container} card-header border_color align-items-center d-flex justify-content-between bg-transparent`}
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
              <div className={`${styles.dashboard_form} card-body border_color vessel_card mr-3`}>
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
                      className={`${styles.delete_image} border-0 p-0`}
                      alt="delete"
                    />
                  </div>
                </div> */}

                <div className="d-flex mt-4 pb-4 position-relative">
                  <input
                    as="textarea"
                    rows={3}
                    placeholder=""
                    name="remarks"
                    value={info}
                    className={`${styles.comment_field} input form-control`}
                    onChange={onChangeHandler7}
                  />
                  <label className={`${styles.label_textarea} label_heading text`}>
                    Remarks
                  </label>

                  <img
                    className={`${styles.plus_field} img-fluid`}
                    src="/static/add-btn.svg"
                    alt="add button"
                    onClick={(e) => {
                      onChangeHandler7Array()
                    }}
                  />
                </div>
                <ol>
                {infoArray?.length > 0 && infoArray?.map((val, index) => {
                  return <li>{val.comment}</li>
                 
                })}
                 </ol>
              </div>
            </div>
          </div>
          <div className="ml-2 mr-2">
            <div
              className={`${styles.upload_main} vessel_card card border_color upload_main`}
            >
              <div
                className={`${styles.head_container} border_color align-items-center d-flex justify-content-between`}
                data-toggle="collapse"
                data-target="#uploadOther"
                aria-expanded="true"
                aria-controls="uploadOther"
              >
                <h3 className={`${styles.heading} mb-0`}>Document</h3>
                <span>+</span>
              </div>
              <div
                id="uploadOther"
                className={false ? 'collapse' : ''}
                aria-labelledby="uploadOther"
                data-parent="#uploadOther"
              >
                <div className={styles.table_container}>
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
                            <th>
                              DOCUMENT NAME{' '}
                              <img
                                className={`${styles.sort_image} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th>
                              FORMAT{' '}
                              <img
                                className={`${styles.sort_image} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th>
                              DOCUMENT DATE{' '}
                              <img
                                className={`${styles.sort_image} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th width="30%">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>

                          <tr className="table_row">
                            <td className={styles.doc_name}>
                              Incumbency Certificate
                              <strong className="text-danger ml-0">*</strong>{' '}
                            </td>

                            <td>
                              <img
                                src="/static/pdf.svg"
                                className={`${styles.pdfImage} img-fluid`}
                                alt="Pdf"
                              />
                            </td>
                            <td className={styles.doc_row}>
                              {incumbencyDoc && incumbencyDoc?.lastModifiedDate
                                ? moment(new Date()).format('DD-MM-YYYY,HH:mm A')
                                : ''}
                            </td>
                            <td colSpan={2}>
                              {incumbencyDoc === null ? (
                                <>
                                  <div className={styles.uploadBtnWrapper}>
                                    <input
                                      type="file"
                                      name="myfile"
                                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                      onChange={(e) => setIncumbencyDoc(e.target.files[0])}
                                    />
                                    <button className={`${styles.button_upload} btn`}>
                                      Upload
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <div
                                  className={`${styles.certificate} text1 d-flex align-items-center justify-content-between`}
                                >
                                  <span>{incumbencyDoc?.name ? incumbencyDoc?.name : incumbencyDoc?.originalName}</span>
                                  <img
                                    onClick={(e) =>
                                      setIncumbencyDoc(null)
                                    }
                                    className={`${styles.close_image} image_arrow mx-2`}
                                    src="/static/close.svg"
                                    alt="Close"
                                  />{' '}
                                </div>
                              )}
                            </td>
                          </tr>

                          <tr className="table_row">
                            <td className={styles.doc_name}>
                              third Party Certificate
                              <strong className="text-danger ml-0">*</strong>{' '}
                            </td>

                            <td>
                              <img
                                src="/static/pdf.svg"
                                className={`${styles.pdfImage} img-fluid`}
                                alt="Pdf"
                              />
                            </td>
                            <td className={styles.doc_row}>
                              {thirdParty && thirdParty?.lastModifiedDate
                                ? moment(new Date()).format('DD-MM-YYYY,HH:mm A')
                                : ''}
                            </td>
                            <td colSpan={2}>
                              {thirdParty === null ? (
                                <>
                                  <div className={styles.uploadBtnWrapper}>
                                    <input
                                      type="file"
                                      name="myfile"
                                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                      onChange={(e) => SetThirdParty(e.target.files[0])}
                                    />
                                    <button className={`${styles.button_upload} btn`}>
                                      Upload
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <div
                                  className={`${styles.certificate} text1 d-flex align-items-center justify-content-between`}
                                >
                                  <span>{thirdParty?.name ? thirdParty?.name : thirdParty?.originalName}</span>
                                  <img
                                    onClick={(e) =>
                                      SetThirdParty(null)
                                    }
                                    className={`${styles.close_image} image_arrow mx-2`}
                                    src="/static/close.svg"
                                    alt="Close"
                                  />{' '}
                                </div>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className={`${styles.dashboard_form} card-body rounded-0 border-0`}>
                  <Form>
                    <div className="row align-items-center pb-4">
                      <div
                        className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
                      >
                        <div className="text-center w-100">
                          <img
                            className={`${styles.upload_image} img-fluid d-block mx-auto`}
                            src="/static/browse.svg"
                            alt="Browse"
                            onChange={(e) => uploadDocument2(e)}
                          />
                          {newDoc?.document ? (
                            <div className="d-flex justify-content-center align-items-center">
                              <div
                                className={`${styles.certificate} text1 d-inline-flex justify-content-between`}
                              >
                                <span>{newDoc?.document?.name}</span>
                                <img
                                  className={`${styles.close_image} image_arrow mx-2`}
                                  src="/static/close.svg"
                                  onClick={() => setNewDoc({ ...newDoc, document: null })}
                                  alt="Close"
                                />{' '}
                              </div>
                            </div>
                          ) : (
                            <p className={styles.drop_para}>
                              Drop Files here or
                              <br />
                              <div className={styles.uploadBtnWrapper}>
                                <input
                                  onChange={(e) => setNewDoc({ ...newDoc, document: e.target.files[0] })}
                                  type="file"
                                  name="myfile"
                                  accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                                />

                                <a href="#">Browse</a>
                              </div>
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4 offset-md-1 col-sm-6">
                        <Form.Group className={styles.form_group}>
                          <div className="d-flex">
                            <select
                              className={`${styles.value} ${styles.customSelect} input form-control`}
                              // value={manualDocModule ? newDoc.name : 'others'}
                              id="name"
                            // onChange={(e) => handleNewDocModule(e)}
                            >
                              <option value="others">Others</option>
                            </select>
                            <Form.Label className={`${styles.label} label_heading`}>
                              Document Type
                            </Form.Label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className={styles.form_group}>
                          <input
                            onChange={(e) =>
                              setNewDoc({ ...newDoc, name: e.target.value })
                            }
                            id="otherDocName"
                            className={`${styles.value} input form-control`}
                            type="text"
                            required
                          // disabled={manualDocModule}
                          />
                          <Form.Label className={`${styles.label} label_heading`}>
                            Please Specify Document Name
                          </Form.Label>
                        </Form.Group>
                        <div className={styles.uploadBtnWrapper}>
                          <button
                            onClick={(e) => uploadDocumentHandler(e)}
                            className={`${styles.upload_button} btn`}
                          // disabled={!editInput}
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>

                <div className={styles.table_container}>
                  <div className={styles.table_scroll_outer}>
                    <div className={styles.table_scroll_inner}>
                      <div
                        className={`${styles.search_container} background2 p-2 pl-4 d-flex justify-content-end align-items-center`}
                      >
                        {/* <div className="d-flex align-items-center">
                          <select
                            onChange={(e) => setModuleSelected(e.target.value)}
                            className={`${styles.dropDown} ${styles.customSelect} statusBox input form-control`}
                          >
                            <option selected disabled>
                              Select an option
                            </option>
                            <option value="LeadOnboarding&OrderApproval">
                              Lead Onboarding &amp; Order Approval
                            </option>
                            <option value="Agreements&Insurance&LC&Opening">
                              Agreements, Insurance &amp; LC Opening
                            </option>
                            <option value="Loading-Transit-Unloading">
                              Loading-Transit-Unloading
                            </option>
                            <option value="CustomClearanceAndWarehousing">
                              Custom Clearance And Warehousing
                            </option>
                            <option value="Others">Others</option>
                          </select>
                          <img
                            className={`${styles.arrow2} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div> */}
                        <div
                          className={`d-flex align-items-center ${styles.searchBarContainer} `}
                        >
                          <img
                            className={` ${styles.searchImage} img-fluid`}
                            src="/static/search.svg"
                            alt="Search"
                          ></img>
                          <input
                            className={`${styles.searchBar} statusBox border_color input form-control`}
                            placeholder="Search"
                            onChange={(e) => filterDocBySearch(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <table
                        className={`${styles.table} table`}
                        cellPadding="0"
                        cellSpacing="0"
                        border="0"
                      >
                        <thead>
                          <tr>
                            <th>
                              DOCUMENT NAME{' '}
                              <img
                                className={`${styles.sort_image} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th>
                              FORMAT{' '}
                              <img
                                className={`${styles.sort_image} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th>
                              DOCUMENT DATE{' '}
                              <img
                                className={`${styles.sort_image} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th>
                              UPLOADED BY{' '}
                              <img
                                className={`${styles.sort_image} mb-1`}
                                src="/static/icons8-sort-24.svg"
                                alt="Sort icon"
                              />
                            </th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {docs &&
                            docs?.map((document, index) => {
                              if (document.deleted) {
                                return null;
                              } else {
                                return (
                                  <tr key={index} className="uploadRowTable">
                                    <td className={`${styles.doc_name}`}>
                                      {document?.name ? document?.name : document?.originalName}
                                    </td>
                                    <td>
                                      {document.name
                                        ?.toLowerCase()
                                        ?.endsWith('.xls') ||
                                        document.name
                                          .toLowerCase()
                                          .endsWith('.xlsx') ? (
                                        <img
                                          src="/static/excel.svg"
                                          className="img-fluid"
                                          alt="Pdf"
                                        />
                                      ) : document.name
                                        .toLowerCase()
                                        .endsWith('.doc') ||
                                        document.name
                                          .toLowerCase()
                                          .endsWith('.docx') ? (
                                        <img
                                          src="/static/doc.svg"
                                          className="img-fluid"
                                          alt="Pdf"
                                        />
                                      ) : (
                                        <img
                                          src="/static/pdf.svg"
                                          className="img-fluid"
                                          alt="Pdf"
                                        />
                                      )}
                                    </td>
                                    <td className={styles.doc_row}>{moment(document.date).format('DD-MM-YYYY, h:mm A')}</td>
                                    <td className={styles.doc_row}>
                                      {document?.uploadedBy?.fName}{' '}
                                      {document?.uploadedBy?.lName}
                                    </td>
                                    <td>
                                      <span
                                        className={`${styles.status} ${styles.approved}`}
                                      ></span>
                                      {document?.verification?.status}
                                    </td>
                                    <td colSpan="2">
                                      <img
                                        onClick={(e) => {
                                          deleteDocumentHandler(document, index)
                                        }}
                                        src="/static/delete.svg"
                                        className={`${styles.delete_image} mr-3`}
                                        alt="Bin"
                                      />
                                      <img
                                        src="/static/upload.svg"
                                        className="mr-3"
                                        alt="Share"
                                        onClick={() => {
                                          openbar();
                                          setSharedDoc({ ...sharedDoc, path: document.path })

                                        }}
                                      />

                                    </td>
                                  </tr>
                                );
                              }
                            })}
                          {false &&
                            documentsFetched?.documents?.map((document, index) => {
                              if (document.deleted) {
                                return null
                              } else if (document.module === documentsDropDownFilter) {
                                return (
                                  <tr key={index} className="uploadRowTable">
                                    <td className={`${styles.doc_name}`}>
                                      {document.name}
                                    </td>
                                    <td>
                                      <img
                                        src="/static/pdf.svg"
                                        className="img-fluid"
                                        alt="Pdf"
                                      />
                                    </td>
                                    <td className={styles.doc_row}>{document.date}</td>
                                    <td className={styles.doc_row}>
                                      {document.uploadedBy?.fName}{' '}
                                      {document.uploadedBy?.lName}
                                    </td>
                                    <td>
                                      <span
                                        className={`${styles.status} ${styles.approved}`}
                                      ></span>
                                      {document?.verification?.status}
                                    </td>
                                    <td colSpan="2">
                                      <img
                                        onClick={() =>
                                          dispatch(
                                            DeleteDocument({
                                              orderDocumentId: documentsFetched._id,
                                              name: document.name,
                                            }),
                                          )
                                        }
                                        src="/static/delete.svg"
                                        className={`${styles.delete_image} img-fluid mr-3`}
                                        alt="Bin"
                                      />
                                      <img
                                        src="/static/upload.svg"
                                        className="img-fluid mr-3"
                                        alt="Share"
                                        onClick={() => {
                                          dispatch(ViewDocument({
                                            path: document.path,
                                            orderId: documentsFetched._id
                                          }))
                                        }}
                                      />
                                      <img
                                        src="/static/drive_file.svg"
                                        className={`${styles.edit_image} img-fluid mr-3`}
                                        alt="Share"
                                      />
                                    </td>
                                  </tr>
                                )
                              } else {
                                return null
                              }
                            })}
                          {/* <tr className="table_row">
                            <td className={styles.doc_name}>Container No. List</td>
                            <td>
                              <img
                                src="/static/pdf.svg"
                                className={`${styles.pdfImage} img-fluid`}
                                alt="Pdf"
                              />
                            </td>
                            <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                            <td className={styles.doc_row}>Buyer</td>
                            <td>
                              <span
                                className={`${styles.status} ${styles.approved}`}
                              ></span>
                              Verified
                            </td>
                            <td colSpan="2">
                              <img
                                src="/static/delete.svg"
                                className={`${styles.delete_image} img-fluid mr-3`}
                                alt="Bin"
                              />
                              <img
                                src="/static/upload.svg"
                                className="img-fluid mr-3"
                                alt="Share"
                              />
                              <img
                                src="/static/drive_file.svg"
                                className={`${styles.edit_image} img-fluid mr-3`}
                                alt="Share"
                              />
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* {open ? <TermsheetPopUp close={close} open={open} istermsheet shareEmail={handleShareDoc} setEmail={(e) => setSharedDoc({ ...sharedDoc, data: { ...sharedDoc.data, receiver: e } })} /> : null}  */}
            </div>
          </div>
        </div>
        <SaveBar rightBtn="Send for Approval" handleSave={handleSave} rightBtnClick={() => { handleSendForApproval() }} />
      </div>
    </>
  );
}
export default Index;
