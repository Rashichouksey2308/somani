/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import Axios from 'axios';
import Cookies from 'js-cookie';
import _get from 'lodash/get';
import moment from 'moment';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ClearSupplier, CreateSupplier, DeleteSupplierDoc, GetSupplier, UpdateSupplier } from 'redux/supplier/action';
import API from 'utils/endpoints';
import { emailValidation } from 'utils/helper';
import AddressComponent from '../../src/components/AddressSupplier';
import DateCalender from '../../src/components/DateCalender';
import SaveBar from '../../src/components/SaveBar';
import TermsheetPopUp from '../../src/components/TermsheetPopUp';
import { handleErrorToast, handleSuccessToast, returnDocFormat } from '../../src/utils/helpers/global';
import styles from './index.module.scss';
import { ShareDocument } from 'redux/shareDoc/action';
import { setDynamicName, setDynamicOrder, setPageName } from 'redux/userData/action';
import { getPincodes, getCountries } from 'redux/masters/action';
import { isPossiblePhoneNumber, isValidPhoneNumber, validatePhoneNumberLength } from 'libphonenumber-js';
import { countryCodes } from '@/utils/jsons/countryCodes.json';

function Index() {
  const dispatch = useDispatch();
  const { supplierResponse } = useSelector((state) => state.supplier);
  const { getCountriesMasterData } = useSelector((state) => state.MastersData);

  const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
  const specialCharacter = [
    '+',
    '-',
    '.',
    '@',
    '$',
    '#',
    '%',
    '^',
    '',
    '!',
    ';',
    '/',
    '|',
    `'`,
    `[`,
    ']',
    ',',
    '{',
    '}',
    '?',
    `'`,
    ':',
    '<',
    '>',
    `"`,
    '(',
    ')',
    '=',
    '*',
  ];

  const gettingPins = (value) => {
    dispatch(getPincodes(value));
  };

  let id = sessionStorage.getItem('supplier');

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    if (id) dispatch(GetSupplier(`?supplierId=${id}`));
    else dispatch(ClearSupplier());
  }, [id]);

  let supplierData = JSON.parse(JSON.stringify(_get(supplierResponse, 'data[0]', {})));

  useEffect(() => {
    setFormData(
      supplierData?.supplierProfile ?? {
        supplierName: '',
        constitution: '',
        incorporationDate: '',
        countryOfIncorporation: '',
        nationalIdentificationNumber: '',
        website: '',
        status: '',
      },
    );
    setKeyAddData(supplierData?.keyAddress ?? []);
    setPerson(supplierData.contactPerson ?? []);
    setDetail(supplierData?.shareHoldersDetails ?? []);
    setListDirector(supplierData?.directorsAndAuthorizedSignatory ?? []);
    setBusinessArray(supplierData?.bussinessSummary ?? []);
    setListCommodity(supplierData?.commoditiesTraded ?? []);
    setInfoArray(supplierData?.additionalInformation ?? []);
    setdocs(supplierData?.extraDocument ?? []);
    setFilteredDocs(supplierData?.extraDocument ?? []);
    setIncumbencyDoc(supplierData?.incumbencyCertificateDocument ?? null);
    SetThirdParty(supplierData?.thirdPartyCertificateDocument ?? null);
  }, [supplierResponse]);

  let supplierName = _get(supplierResponse, 'data[0].supplierProfile.supplierName', 'ADD Supplier');
  const { getPincodesMasterData } = useSelector((state) => state.MastersData);

  useEffect(() => {
    if (getPincodesMasterData.length > 0) {
      setToShow(getPincodesMasterData);
      setToView(true);
    } else {
      setToShow([]);
      setToView(false);
    }
  }, [getPincodesMasterData]);

  useEffect(() => {
    dispatch(setPageName('Supplier'));
    // dispatch(setDynamicName(_get(TransitDetails, 'data[0].company.companyName')));
    dispatch(setDynamicOrder(supplierName));
  }, [supplierName]);
  const [open, setOpen] = useState(false);
  const [sharedDoc, setSharedDoc] = useState({
    company: '',
    order: '',
    path: '',
    data: {
      subject: 'this is subject',
      text: 'this is text',
      receiver: '',
    },
  });

  const [formData, setFormData] = useState({
    supplierName: '',
    constitution: '',
    incorporationDate: '',
    countryOfIncorporation: '',
    nationalIdentificationNumber: '',
    website: '',
    status: '',
  });

  const [address, setAddress] = useState({
    contactPerson: '',
    pinCode: '',
    country: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    emailId: '',
  });

  const [person, setPerson] = useState([
    {
      name: '',
      designation: '',
      contact: '',
      emailId: '',
      callingCode: '+91',
      action: true,
    },
  ]);

  const [isPercentageInFocus, setIsPercentageInFocus] = useState([{ value: false }]);

  const changeFiledFocus = (value, index) => {
    let tempArray = [...isPercentageInFocus];
    tempArray[index] = value;
    setIsPercentageInFocus(tempArray);
  };
  const [detail, setDetail] = useState([
    {
      shareHoldersName: '',
      designation: '',
      contact: '',
      ownershipPercentage: '',
      action: true,
    },
  ]);

  useEffect(() => {
    let tempArray = [false];
    supplierData?.shareHoldersDetails?.forEach((item) => {
      tempArray.push(false);
    });
    setIsPercentageInFocus(tempArray);
  }, [supplierResponse]);

  const [business, setBusiness] = useState('');
  const [businessArray, setBusinessArray] = useState([]);

  const [info, setInfo] = useState('');
  const [infoArray, setInfoArray] = useState([]);

  const [incumbencyDoc, setIncumbencyDoc] = useState(null);
  const [thirdParty, SetThirdParty] = useState(null);
  const [newDoc, setNewDoc] = useState({
    document: null,
    name: '',
  });

  const [docs, setdocs] = useState([]);
  const [filteredDocs, setFilteredDocs] = useState([]);

  const handleShareDelete = (index) => {
    setDetail([...detail.slice(0, index), ...detail.slice(index + 1)]);
    setIsPercentageInFocus([...isPercentageInFocus.slice(0, index), ...isPercentageInFocus.slice(index + 1)]);
  };
  const handleDeletePersonContact = (index) => {
    setPerson([...person.slice(0, index), ...person.slice(index + 1)]);
  };
  const handleDeleteDirector = (index) => {
    setListDirector([...listDirector.slice(0, index), ...listDirector.slice(index + 1)]);
  };
  const handleCommodity = (index) => {
    setListCommodity([...listCommodity.slice(0, index), ...listCommodity.slice(index + 1)]);
  };

  const [listCommodity, setListCommodity] = useState([
    {
      hsnCode: '',
      commodity: '',
      action: true,
    },
  ]);

  const onAddCommodity = () => {
    setListCommodity([
      ...listCommodity,
      {
        hsnCode: '',
        commodity: '',
        action: true,
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
        callingCode: '+91',
        emailID: '',
        action: true,
      },
    ]);
  };
  const [listShare, setListShare] = useState([
    {
      name: '',
      designation: '',
      contactNo: '',
      emailID: '',
      action: true,
    },
  ]);
  const onAddShare = () => {
    setIsPercentageInFocus([...isPercentageInFocus, false]);
    setDetail([
      ...detail,
      {
        shareHoldersName: '',
        designation: '',
        contact: '',
        ownershipPercentage: '',
        action: true,
      },
    ]);
  };
  const [listDirector, setListDirector] = useState([
    {
      name: '',
      nationality: '',
      authorityToSign: false,
      action: true,
    },
  ]);

  const onAddDirector = () => {
    setListDirector([
      ...listDirector,
      {
        name: '',
        nationality: '',
        authorityToSign: false,

        action: true,
      },
    ]);
  };

  const handleShareDoc = async () => {
    if (emailValidation(sharedDoc.data.receiver)) {
      let tempArr = { ...sharedDoc };
      let data = await dispatch(ShareDocument(tempArr));
      if (data?.code == 200) {
        setClose(false);
      }
    } else {
      let toastMessage = 'please provide a valid email';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    }
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveQuotationData(name, text);
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

  const onChangeHandler2 = (name, value, index) => {
    let newInput = [...person];

    newInput[index][name] = value;

    setListShare([...newInput]);
  };

  const onChangeHandler3 = (name, value, index) => {
    let newInput = [...detail];

    newInput[index][name] = value;

    setDetail([...newInput]);
  };

  const onChangeHandler4 = (name, value, index) => {
    let newInput = [...listDirector];

    newInput[index][name] = value;

    setListDirector([...newInput]);
  };

  const onChangeHandler5 = (e) => {
    const { name, value } = e.target;

    setBusiness(value);
  };
  const addToBusinessArray = (e) => {
    let temp = [...businessArray];

    setBusinessArray([...temp, { businessSummary: business }]);
    setBusiness('');
  };

  const onChangeHandler6 = (name, value, index) => {
    let newInput = [...listCommodity];

    newInput[index][name] = value;

    setListCommodity([...newInput]);
  };

  const onChangeHandler7 = (e) => {
    const { name, value } = e.target;
    setInfo(value);
  };
  const onChangeHandler7Array = (e) => {
    let temp = [...infoArray];
    // temp.push(info)
    setInfoArray([...temp, { remarks: info }]);
    setInfo('');
  };

  const contactPersonDetailsValidation = () => {
    if (person.length < 1) {
      handleErrorToast('atLEast 1 COntact PErson detail Is Mandatory');
      return false;
    }

    let isOk = true;
    for (let i = 0; i <= person.length - 1; i++) {
      if (person[i].name === '' || person[i].name === null) {
        handleErrorToast(` name cannot be empty in Contact Person Details ${i + 1} `);
        isOk = false;
        break;
      }
      if (
        person[i].contact === '' ||
        person[i].contact === null ||
        !isValidPhoneNumber(person[i].contact, returnSelectedCountryCode(person[i].callingCode))
      ) {
        handleErrorToast(` please provide a valid contact no in Contact Person Details ${i + 1} `);
        isOk = false;
        break;
      }
      if (person[i].emailId === '' || person[i].emailId === null || !emailValidation(person[i].emailId)) {
        handleErrorToast(`please provide a valid email Id  in Contact Person Details ${i + 1} `);
        isOk = false;
        break;
      }
    }
    return isOk;
  };

  const directorsAndAuthorisedSignatoryValidation = () => {
    if (listDirector.length < 1) {
      handleErrorToast('atLEast 1  directors And Authorised Signatory Is Mandatory');
      return false;
    }
    let isOk = true;
    for (let i = 0; i <= listDirector.length - 1; i++) {
      if (listDirector[i].name === '' || listDirector[i].name === null) {
        handleErrorToast(`Name cannot be empty in Directors And Authorized Signatory ${i + 1}`);
        isOk = false;
        break;
      }
      if (listDirector[i].nationality === '' || listDirector[i].nationality === null) {
        handleErrorToast(`nationality cannot be empty in Directors And Authorized Signatory ${i + 1}`);
        isOk = false;
        break;
      }
    }
    return isOk;
  };
  const commoditiesTradedValidation = () => {
    if (listCommodity?.length < 1) {
      handleErrorToast('atLEast 1 commodities Traded Is Mandatory');
      return false;
    }
    let isOk = true;
    for (let i = 0; i <= listCommodity.length - 1; i++) {
      if (
        listCommodity[i].hsnCode.trim() === '' ||
        listCommodity[i].hsnCode === null ||
        listCommodity[i].hsnCode.length !== 8
      ) {
        handleErrorToast(`please provide a valid hsnCode Commodities Traded ${i + 1}`);
        isOk = false;
        break;
      }
      if (listCommodity[i].commodity === '' || listCommodity[i].commodity === null) {
        handleErrorToast(`commodity cannot be empty in Commodities Traded ${i + 1}`);
        isOk = false;
        break;
      }
    }
    return isOk;
  };

  const supplierValidtaion = () => {
    if (!formData.status || formData.status === '') {
      handleErrorToast(`please select an status`);
      return false;
    } else if (!formData.supplierName || formData.supplierName === '') {
      handleErrorToast(`supplier Name cannot be empty`);
      return false;
    } else if (!formData.constitution || formData.constitution === '') {
      handleErrorToast(`please select a constitution`);
      return false;
    } else if (!formData.incorporationDate || formData.incorporationDate === '') {
      handleErrorToast(`please select a incorporation Date`);
      return false;
    } else if (!formData.countryOfIncorporation || formData.countryOfIncorporation === '') {
      handleErrorToast(`please provide a country Of Incorporation`);
      return false;
    } else if (!formData.nationalIdentificationNumber || formData.nationalIdentificationNumber === '') {
      handleErrorToast(`please provide a national Identification Number`);
      return false;
    } else if (keyAddData.length < 1) {
      handleErrorToast('atLEast 1 KEy Address  Is Mandatory');
      return false;
    } else if (!contactPersonDetailsValidation()) {
      return false;
    } else if (!directorsAndAuthorisedSignatoryValidation()) {
      return false;
    } else if (!commoditiesTradedValidation()) {
      return false;
    } else if (!incumbencyDoc) {
      handleErrorToast(`please upload incumbency certificate`);
      return false;
    } else if (!thirdParty) {
      handleErrorToast(`please upload third party certificate`);
      return false;
    } else {
      return true;
    }
  };
  const saveButtonChangeHelper = (array) => {
    return array.forEach((item) => (item.action = false));
  };

  const saveIconHandler = () => {
    let tempPerson = [...person];
    let tempShare = [...detail];
    let tempDirector = [...listDirector];
    let TempCommodity = [...listCommodity];

    saveButtonChangeHelper(tempPerson);
    saveButtonChangeHelper(tempShare);
    saveButtonChangeHelper(tempDirector);
    saveButtonChangeHelper(TempCommodity);

    setListDirector(tempDirector);
    setPerson(tempPerson);
    setDetail(tempShare);
    setListCommodity(TempCommodity);
  };

  const handleSave = () => {
    if (supplierValidtaion()) {
      let apiData = {
        supplierProfile: formData,
        keyAddress: keyAddData,
        contactPerson: person,
        shareHoldersDetails: detail,
        directorsAndAuthorizedSignatory: listDirector,
        bussinessSummary: businessArray,
        commoditiesTraded: listCommodity,
        additionalInformation: infoArray,
        incumbencyCertificateDocument: incumbencyDoc,
        thirdPartyCertificateDocument: thirdParty,
        extraDocument: docs,
      };

      let fd = new FormData();
      if (id) {
        fd.append('supplierId', supplierData?._id);
      }
      fd.append('supplierProfile', JSON.stringify(formData));
      fd.append('keyAddress', JSON.stringify(keyAddData));
      fd.append('contactPerson', JSON.stringify(person));
      fd.append('shareHoldersDetails', JSON.stringify(detail));
      fd.append('directorsAndAuthorizedSignatory', JSON.stringify(listDirector));
      fd.append('bussinessSummary', JSON.stringify(businessArray));
      fd.append('commoditiesTraded', JSON.stringify(listCommodity));
      fd.append('additionalInformation', JSON.stringify(infoArray));
      fd.append('incumbencyCertificateDocument', JSON.stringify(incumbencyDoc));
      fd.append('thirdPartyCertificateDocument', JSON.stringify(thirdParty));
      fd.append('extraDocument', JSON.stringify(docs));
      saveIconHandler();
      if (id) {
        dispatch(UpdateSupplier(fd));
      } else {
        dispatch(CreateSupplier(fd));
      }
    }
  };

  const handleSendForApproval = () => {
    sessionStorage.removeItem('supplier');
    dispatch(ClearSupplier());
    let toastMessage = `request sent for approval`;
    if (!toast.isActive(toastMessage.toUpperCase())) {
      toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
    Router.push('/add-supplier');
  };

  const [darkMode, setDarkMode] = useState(false);

  const [keyAddData, setKeyAddData] = useState([]);
  const deleteComponent = (index) => {
    setKeyAddData([...keyAddData.slice(0, index), ...keyAddData.slice(index + 1)]);
  };

  const returnSelectedCountryCode = (code) => {
    const filter = countryCodes.filter((item) => item.code == code);
    if (filter.length > 0) return filter[0].iso2;
  };
  const addressValidtion = (data) => {
    let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);

    const emailValidate = () => {
      let isOk = true;
      data.emailId.forEach((email, index) => {
        if (
          !String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
        ) {
          handleErrorToast(`Please add valid email id for Email Field ${index + 1}`);
          isOk = false;
          return;
        }
      });
      return isOk;
    };
    if (findDuplicates(data.emailId).length > 0) {
      handleErrorToast('cannot add duplicate email');
      return false;
    }
    if (data.address === null || data.address === '' || data.address === undefined) {
      let toastMessage = 'Please add address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    } else if (data.pinCode === null || data.pinCode === '' || data.pinCode === undefined) {
      let toastMessage = 'Please add pin code';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    } else if (data.country === null || data.country === '' || data.country === undefined) {
      let toastMessage = 'Please add country';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    } else if (!emailValidate()) {
      return false;
    } else if (
      data.contact.phoneNumber === null ||
      data.contact.phoneNumber === '' ||
      data.contact.phoneNumber === undefined ||
      !isValidPhoneNumber(data.contact.phoneNumber, returnSelectedCountryCode(data.contact.phoneNumberCallingCode))
    ) {
      handleErrorToast('Please add a valid  phone Number');
      return false;
    } else if (
      data.contact.alternatePhoneNumber &&
      data.contact.alternatePhoneNumber.trim().length > 0 &&
      !isValidPhoneNumber(
        data.contact.alternatePhoneNumber,
        returnSelectedCountryCode(data.contact.alternatePhoneNumberCallingCode),
      )
    ) {
      handleErrorToast('Please add a valid Alternate phone Number');
      return false;
    } else {
      return true;
    }
  };
  const [showAddress, setShowAddress] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [Index, setIndex] = useState('');
  const [editData, setEditData] = useState({
    emailId: [''],
    address: '',
    country: '',
    contact: {
      phoneNumberCallingCode: '+91',
      alternatePhoneNumberCallingCode: '+91',
      phoneNumber: null,
      alternatePhoneNumber: null,
    },
    pinCode: null,
  });

  const [editingAddress, setEditingAddress] = useState(false);

  const [keyAddressData, setKeyAddressData] = useState({
    emailId: [''],
    address: '',
    country: '',
    contact: {
      phoneNumberCallingCode: '+91',
      alternatePhoneNumberCallingCode: '+91',
      phoneNumber: null,
      alternatePhoneNumber: null,
    },
    pinCode: null,
  });

  const editAddress = (index) => {
    setEditingAddress(true);
    setIndex(index);
    let tempArr = keyAddData[index];
    setEditData({
      emailId: tempArr?.emailId?.length > 0 ? tempArr?.emailId : [''],
      country: tempArr?.country,
      address: tempArr?.address,
      contact: {
        phoneNumberCallingCode: tempArr?.contact?.phoneNumberCallingCode,
        alternatePhoneNumberCallingCode: tempArr?.contact?.alternatePhoneNumberCallingCode,
        phoneNumber: tempArr?.contact?.phoneNumber,
        alternatePhoneNumber: tempArr?.contact?.alternatePhoneNumber,
      },
      pinCode: tempArr?.pinCode,
    });
  };
  const keyAddDataArr = (keyAddressData) => {
    let newArr = [...keyAddData];
    newArr.push(keyAddressData);
    setKeyAddData(newArr);
  };

  const handleUpdateAdress = () => {
    if (addressValidtion(editData)) {
      let tempArr = [...keyAddData];
      tempArr[Index] = editData;
      setKeyAddData(tempArr);
      setEditingAddress(false);
    }
  };
  const handleClick = () => {
    if (addressValidtion(keyAddressData)) {
      keyAddDataArr(keyAddressData);
      setKeyAddressData({
        emailId: [''],
        address: '',
        country: '',
        contact: {
          phoneNumberCallingCode: '+91',
          alternatePhoneNumberCallingCode: '+91',
          phoneNumber: '',
          alternatePhoneNumber: '',
        },
        pinCode: '',
      });
    }
  };
  const handleAddressUpdate = (value, name, index) => {
    const newInput = { ...editData };

    let namesplit = name.split('.');

    if (name === 'emailId') {
      newInput.emailId[index] = value;
    } else if (namesplit.length > 1) {
      newInput[namesplit[0]][namesplit[1]] = value;
    } else {
      newInput[name] = value;
    }

    setEditData(newInput);
  };

  const handleChange = (value, name, index) => {
    const newInput = { ...keyAddressData };

    let namesplit = name.split('.');

    if (name === 'emailId') {
      newInput.emailId[index] = value;
    } else if (namesplit.length > 1) {
      newInput[namesplit[0]][namesplit[1]] = value;
    } else {
      newInput[name] = value;
    }

    setKeyAddressData(newInput);
  };
  const docUploader = async (payload) => {
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' };
    try {
      let response = await Axios.post(`${API.corebaseUrl}${API.SupplierUploadDoc}`, payload, {
        headers: headers,
      });
      if (response.data.code === 200) {
        return response.data.data;
      } else {
        handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THE MOMENT');
      }
    } catch (error) {
      handleErrorToast('COULD NOT PROCESS YOUR REQUEST AT THE MOMENT');
    }
  };

  const uploadDocumentHandler = async (e) => {
    e.preventDefault();
    if (!newDoc?.document) {
      handleErrorToast('please Select a document first');
    } else if (!newDoc?.name) {
      handleErrorToast('please provide a document first');
    } else {
      let fd = new FormData();
      fd.append('document', newDoc.document);
      let data = await docUploader(fd);
      data.name = newDoc.name;
      if (data?.originalName) handleSuccessToast('document uploaded successfully');
      setdocs([...docs, data]);
      setFilteredDocs([...docs, data]);
      setNewDoc({
        document: null,
        name: '',
      });
    }
  };

  const uploadDocHandler2 = async (e, doc) => {
    let fd = new FormData();
    fd.append('document', e.target.files[0]);
    let data = await docUploader(fd);
    if (doc == 'thirdPartyDoc') {
      SetThirdParty(data);
    } else {
      setIncumbencyDoc(data);
    }
  };

  const deleteDocumentHandler = (document, index) => {
    setFilteredDocs([...filteredDocs.slice(0, index), ...filteredDocs.slice(index + 1)]);
    setdocs([...docs.slice(0, index), ...docs.slice(index + 1)]);
    let payload = {
      supplierId: supplierData._id,
      path: document?.path,
    };
    dispatch(DeleteSupplierDoc(payload));
  };

  const filterDocBySearch = (searchQuery) => {
    if (searchQuery.length > 0) {
      let filteredArray = docs?.filter((item) => item.name.includes(searchQuery));
      setFilteredDocs(filteredArray);
    } else {
      setFilteredDocs([...docs]);
    }
  };

  const handleDeleteUpdateAddress = (index) => {
    let tempArr = { ...editData };
    tempArr.emailId.splice(index, 1);
    setEditData(tempArr);
  };

  const handleDeleteNewAddress = (index) => {
    let tempArr = { ...keyAddressData };
    tempArr.emailId.splice(index, 1);
    setKeyAddressData(tempArr);
  };

  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading`}>
              <img
                onClick={() => Router.push('/add-supplier')}
                src={`${darkMode ? `/static/white-arrow.svg` : `/static/arrow-right.svg`}`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>{supplierName !== '' ? supplierName : 'Add Supplier'}</span>
            </h1>
          </div>
        </div>

        <div className={`${styles.backgroundMain}`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
              style={{ cursor: 'default' }}
            >
              <h3 className={`${styles.heading}`}>Supplier Profile</h3>

              <div className="d-flex align-items-center">
                <label className={`${styles.dropDown_label} text`}>Status:</label>
                <div className="position-relative">
                  <select
                    className={`${styles.dropDown} ${styles.customSelect} input`}
                    style={{ marginRight: '5px' }}
                    name="status"
                    value={formData?.status}
                    onChange={onChangeHandler}
                  >
                    <>
                      {' '}
                      <option disabled value="">
                        Select an option
                      </option>
                      <option value="Active">Active</option>
                      <option value="InActive">Not active</option>
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
            <div id="supplierProfile" aria-labelledby="supplierProfile" data-parent="#supplierProfile">
              <div className={`${styles.dashboard_form} mt-1 card-body border_color`}>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                    <div className="d-flex">
                      <input
                        className={`${styles.input_field} input form-control`}
                        type="text"
                        required
                        onKeyDown={(evt) => specialCharacter.includes(evt.key) && evt.preventDefault()}
                        onChange={onChangeHandler}
                        name="supplierName"
                        value={formData?.supplierName}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Supplier Name
                        <strong className="text-danger">*</strong>
                      </label>
                      <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
                    </div>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                    <div className="d-flex">
                      <select
                        onChange={onChangeHandler}
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        name="constitution"
                        value={formData?.constitution}
                      >
                        <option>Select an option</option>
                        <option value="India">Private Limited</option>
                        <option value="America">ABC</option>
                      </select>
                      <label className={`${styles.label_heading} label_heading`}>
                        Constitution<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
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
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
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
                      <label className={`${styles.label_heading} label_heading`}>
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
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                    <input
                      onChange={onChangeHandler}
                      className={`${styles.input_field} input form-control`}
                      type="number"
                      onWheel={(event) => event.currentTarget.blur()}
                      onKeyDown={(evt) => ['e', 'E', '+', '-', '.'].includes(evt.key) && evt.preventDefault()}
                      required
                      name="nationalIdentificationNumber"
                      value={formData?.nationalIdentificationNumber}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      National Identification No. / Commercial Registry No.
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                    <input
                      onChange={onChangeHandler}
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      required
                      name="website"
                      value={formData?.website}
                    />
                    <label className={`${styles.label_heading} label_heading`}>Website</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card card border_color`}>
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
            <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
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
                          email={address?.emailId}
                          deleteComponent={deleteComponent}
                          editAddress={editAddress}
                          pinCode={address.pinCode}
                          path={''}
                        />
                      </>
                    );
                  })}
                </div>
                {editingAddress && (
                  <div className={`${styles.address_card} mt-3 pb-5 value background1`}>
                    <div
                      className={`${styles.head_container}  card-header border_color align-items-center d-flex justify-content-between align-items-center bg-transparent`}
                    >
                      <h3 className={`${styles.heading}`} style={{ textTransform: 'none' }}>
                        Update address
                      </h3>
                      <img
                        onClick={() => {
                          setEditingAddress(false);
                        }}
                        style={{ marginRight: '-15px' }}
                        src="/static/accordion_close_black.svg"
                        className="image_arrow"
                      />
                    </div>
                    <div className={`${styles.dashboard_form} card-body border_color`}>
                      <div className="row">
                        <div className={`${styles.form_group} col-md-12 col-sm-6`}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            name="address"
                            value={editData?.address}
                            onChange={(e) => {
                              handleAddressUpdate(e.target.value, e.target.name);
                            }}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Address
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-md-4 col-sm-4`}>
                          <div className="d-flex">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="number"
                              name="pinCode"
                              onKeyDown={(evt) => ['e', 'E', '+', '-', '.'].includes(evt.key) && evt.preventDefault()}
                              value={editData?.pinCode}
                              onWheel={(e) => e.target.blur()}
                              onChange={(e) => {
                                // gettingPins(e.target.value);
                                handleAddressUpdate(e.target.value, e.target.name);
                              }}
                            />
                            {editData?.pinCode?.length > 0 && toShow.length > 0 && toView && (
                              <div className={styles.searchResults}>
                                <ul>
                                  {toShow
                                    ? toShow?.map((results, index) => (
                                        <li
                                          onClick={() => {
                                            handleAddressUpdate(results.Pincode, 'pinCode');
                                            //  handleChange('pinCode', results.Pincode)
                                            setToShow([]);
                                            setToView(false);
                                          }}
                                          id={results._id}
                                          key={index}
                                          value={results.Pincode}
                                        >
                                          {results.Pincode}{' '}
                                        </li>
                                      ))
                                    : ''}
                                </ul>
                              </div>
                            )}
                            <label className={`${styles.label_heading} label_heading`}>
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

                        <div className={`${styles.form_group} col-md-4 col-sm-4`}>
                          <div className="d-flex">
                            <select
                              name="country"
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              // className={`${styles.code_phone} input border-right-0`}
                              value={editData?.country}
                              onChange={(e) => {
                                handleAddressUpdate(e.target.value, e.target.name);
                              }}
                            >
                              {' '}
                              <option disabled value="">
                                Select an option
                              </option>
                              {getCountriesMasterData?.map((options, index) => {
                                return (
                                  <option key={index} value={`${options.Country}`}>
                                    {options.Country}
                                  </option>
                                );
                              })}{' '}
                            </select>
                            {/* <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="country"
                              onKeyDown={(evt) => specialCharacter.includes(evt.key) && evt.preventDefault()}
                              value={editData?.country}
                              onChange={(e) => {handleAddressUpdate(e.target.value.replace(/[^a-zA-Z]+/g, ''), e.target.name)}}
                            /> */}

                            <label className={`${styles.label_heading} label_heading`}>
                              Country
                              <strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}>
                          <div className={`${styles.phone_card}`}>
                            <select
                              type="tel"
                              name="contact.phoneNumberCallingCode"
                              id="Code"
                              className={`${styles.code_phone} input border-right-0`}
                              value={editData.contact.phoneNumberCallingCode}
                              onChange={(e) => {
                                handleAddressUpdate(e.target.value, e.target.name);
                              }}
                            >
                              <option disabled value="">
                                Select an option
                              </option>
                              {countryCodes.map((countryCode) => (
                                <option value={countryCode.code}>{countryCode.code}</option>
                              ))}
                            </select>
                            <input
                              type="tel"
                              id="textNumber"
                              name="contact.phoneNumber"
                              value={editData?.contact.phoneNumber}
                              className={`${styles.input_field}  input form-control border-left-0`}
                              onChange={(e) => {
                                handleAddressUpdate(e.target.value, e.target.name);
                              }}
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textNumber">
                              Phone Number
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                        </div>
                        <div className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}>
                          <div className={`${styles.phone_card}`}>
                            <select
                              name="contact.alternatePhoneNumberCallingCode"
                              id="Code"
                              className={`${styles.code_phone} input border-right-0`}
                              value={editData.contact.alternatePhoneNumberCallingCode}
                              onChange={(e) => {
                                handleAddressUpdate(e.target.value, e.target.name);
                              }}
                            >
                              {' '}
                              <option disabled value="">
                                Select an option
                              </option>
                              {countryCodes.map((countryCode) => (
                                <option value={countryCode.code}>{countryCode.code}</option>
                              ))}
                            </select>
                            <input
                              type="tel"
                              id="textNumber"
                              name="contact.alternatePhoneNumber"
                              value={editData?.contact.alternatePhoneNumber}
                              className={`${styles.input_field} input form-control border-left-0`}
                              onChange={(e) => {
                                handleAddressUpdate(e.target.value, e.target.name);
                              }}
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textNumber">
                              Alternate Phone Number
                            </label>
                          </div>
                        </div>
                        {editData.emailId.map((email, index) => (
                          <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <div className="d-flex">
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                type="text"
                                name="emailId"
                                value={email}
                                onChange={(e) => {
                                  handleAddressUpdate(e.target.value, e.target.name, index);
                                }}
                              />
                              <label className={`${styles.label_heading} label_heading`}>
                                Email ID
                                <strong className="text-danger">*</strong>
                              </label>
                              <div className={`${styles.btn_block}`}>
                                {editData?.emailId?.length - 1 == index && (
                                  <img
                                    onClick={() =>
                                      setEditData((prev) => {
                                        return { ...prev, emailId: [...prev.emailId, ''] };
                                      })
                                    }
                                    className={`${styles.plus_add} img-fluid`}
                                    src="/static/add-btn.svg"
                                    alt="Search"
                                  />
                                )}
                                {editData?.emailId?.length > 1 && (
                                  <img
                                    onClick={() => handleDeleteUpdateAddress(index)}
                                    src="/static/delete 2.svg"
                                    className={`${styles.plus_add} img-fluid`}
                                    alt="Delete"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className={`${styles.add_btn}`} onClick={() => handleUpdateAdress()}>
                        Update
                      </button>
                    </div>
                  </div>
                )}

                <div className={`${styles.address_card} mt-3 pb-5 value background1`}>
                  <div
                    className={`${styles.head_container}  card-header border_color align-items-center d-flex justify-content-between align-items-center bg-transparent`}
                  >
                    <h3 className={`${styles.heading}`} style={{ textTransform: 'none' }}>
                      Add a new address
                    </h3>
                  </div>
                  <div className={`${styles.dashboard_form} card-body border_color`}>
                    <div className="row">
                      <div className={`${styles.form_group} col-md-12 col-sm-6`}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          type="text"
                          name="address"
                          value={keyAddressData?.address}
                          onChange={(e) => {
                            handleChange(e.target.value, e.target.name);
                          }}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                          Address
                          <strong className="text-danger">*</strong>
                        </label>
                      </div>
                      <div className={`${styles.form_group} col-md-4 col-sm-4`}>
                        <div className="d-flex">
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            name="pinCode"
                            onKeyDown={(evt) => ['e', 'E', '+', '-', '.'].includes(evt.key) && evt.preventDefault()}
                            value={keyAddressData?.pinCode}
                            onWheel={(e) => e.target.blur()}
                            onChange={(e) => {
                              // gettingPins(e.target.value);
                              handleChange(e.target.value, e.target.name);
                            }}
                          />
                          {keyAddressData?.pinCode?.length > 0 && toShow.length > 0 && toView && (
                            <div className={styles.searchResults}>
                              <ul>
                                {toShow
                                  ? toShow?.map((results, index) => (
                                      <li
                                        onClick={() => {
                                          handleChange(results.Pincode, 'pinCode');
                                          //  handleChange('pinCode', results.Pincode)
                                          setToShow([]);
                                          setToView(false);
                                        }}
                                        id={results._id}
                                        key={index}
                                        value={results.Pincode}
                                      >
                                        {results.Pincode}{' '}
                                      </li>
                                    ))
                                  : ''}
                              </ul>
                            </div>
                          )}
                          <label className={`${styles.label_heading} label_heading`}>
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

                      <div className={`${styles.form_group} col-md-4 col-sm-4`}>
                        <div className="d-flex">
                          <select
                            type="text"
                            name="country"
                            className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                            value={keyAddressData?.country}
                            onChange={(e) => handleChange(e.target.value, e.target.name)}
                          >
                            <option disabled value="">
                              Select an option
                            </option>
                            {getCountriesMasterData?.map((options, index) => {
                              return (
                                <option key={index} value={`${options.Country}`}>
                                  {options.Country}
                                </option>
                              );
                            })}{' '}
                          </select>
                          <label className={`${styles.label_heading} label_heading`}>
                            Country
                            <strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>

                      <div className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}>
                        <div className={`${styles.phone_card}`}>
                          <select
                            type="tel"
                            name="contact.phoneNumberCallingCode"
                            id="Code"
                            className={`${styles.code_phone} input border-right-0`}
                            value={keyAddressData.contact.phoneNumberCallingCode}
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name);
                            }}
                          >
                            <option disabled value="">
                              Select an option
                            </option>
                            {countryCodes.map((countryCode) => (
                              <option value={countryCode.code}>{countryCode.code}</option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            id="textNumber"
                            name="contact.phoneNumber"
                            value={keyAddressData?.contact.phoneNumber}
                            className={`${styles.input_field}  input form-control border-left-0`}
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name);
                            }}
                          />
                          <label className={`${styles.label_heading} label_heading`} id="textNumber">
                            Phone Number
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                      </div>
                      <div className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}>
                        <div className={`${styles.phone_card}`}>
                          <select
                            name="contact.alternatePhoneNumberCallingCode"
                            id="Code"
                            className={`${styles.code_phone} input border-right-0`}
                            value={keyAddressData.contact.alternatePhoneNumberCallingCode}
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name);
                            }}
                          >
                            {' '}
                            <option disabled value="">
                              Select an option
                            </option>
                            {countryCodes.map((countryCode) => (
                              <option value={countryCode.code}>{countryCode.code}</option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            id="textNumber"
                            name="contact.alternatePhoneNumber"
                            value={keyAddressData?.contact.alternatePhoneNumber}
                            className={`${styles.input_field} input form-control border-left-0`}
                            onChange={(e) => {
                              handleChange(e.target.value, e.target.name);
                            }}
                          />
                          <label className={`${styles.label_heading} label_heading`} id="textNumber">
                            Alternate Phone Number
                          </label>
                        </div>
                      </div>
                      {keyAddressData.emailId.map((email, index) => (
                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                          <div className="d-flex position-relative">
                            <input
                              className={`${styles.input_field} input form-control`}
                              required
                              type="text"
                              name="emailId"
                              value={email}
                              onChange={(e) => {
                                handleChange(e.target.value, e.target.name, index);
                              }}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Email ID
                              <strong className="text-danger">*</strong>
                            </label>
                            <div className={`${styles.btn_block}`}>
                              {keyAddressData?.emailId?.length - 1 == index && (
                                <img
                                  onClick={() =>
                                    setKeyAddressData((prev) => {
                                      return { ...prev, emailId: [...prev.emailId, ''] };
                                    })
                                  }
                                  className={`${styles.plus_add} img-fluid`}
                                  src="/static/add-btn.svg"
                                  alt="Search"
                                />
                              )}
                              {keyAddressData?.emailId?.length > 1 && (
                                <img
                                  onClick={() => handleDeleteNewAddress(index)}
                                  src="/static/delete 2.svg"
                                  className={`${styles.delete} img-fluid`}
                                  alt="Delete"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className={`${styles.add_btn}`} onClick={() => handleClick()}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} border_color card-header align-items-center d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#keyContact"
              aria-expanded="true"
              aria-controls="keyContact"
            >
              <h3 className={`${styles.heading} mb-0`}>Contact Person Details</h3>
              <span>+</span>
            </div>
            <div id="keyContact" className="collapse" aria-labelledby="keyContact" data-parent="#keyContact">
              <div className={`${styles.datatable} border_color card-body datatable`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                      <thead>
                        <tr>
                          <th>
                            NAME <strong className="text-danger">*</strong>
                          </th>
                          <th>DESIGNATION</th>
                          <th>
                            CONTACT NO. <strong className="text-danger">*</strong>
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
                                {!val.action ? (
                                  <span>{val?.name}</span>
                                ) : (
                                  <input
                                    className="input font-weight-bold"
                                    name="name"
                                    value={val?.name}
                                    type="text"
                                    onChange={(e) => {
                                      onChangeHandler2(e.target.name, e.target.value, index);
                                    }}
                                  />
                                )}
                              </td>
                              <td>
                                {!val.action ? (
                                  <span>{val?.designation}</span>
                                ) : (
                                  <input
                                    className="input"
                                    name="designation"
                                    value={val?.designation}
                                    type="text"
                                    readOnly={!val.action}
                                    onChange={(e) => {
                                      onChangeHandler2(e.target.name, e.target.value, index);
                                    }}
                                  />
                                )}
                              </td>

                              <td>
                                {!val.action ? (
                                  <span>
                                    {val?.callingCode} {val?.contact}
                                  </span>
                                ) : (
                                  <div className={`${styles.phone_card}`}>
                                    <select
                                      name="callingCode"
                                      id="Code"
                                      className={`${styles.code_phone} ${styles.code_phone2} input border-right-0`}
                                      value={val?.callingCode}
                                      onChange={(e) => {
                                        onChangeHandler2(e.target.name, e.target.value, index);
                                      }}
                                    >
                                      {' '}
                                      <option disabled value="">
                                        Select an option
                                      </option>
                                      {countryCodes.map((countryCode) => (
                                        <option value={countryCode.code}>{countryCode.code}</option>
                                      ))}
                                    </select>
                                    <input
                                      name="contact"
                                      value={val?.contact}
                                      type="number"
                                      onWheel={(event) => event.currentTarget.blur()}
                                      className={`${styles.input_field} ${styles.input_field2} input form-control border-left-0`}
                                      onChange={(e) => {
                                        onChangeHandler2(e.target.name, e.target.value, index);
                                      }}
                                      onKeyDown={(evt) =>
                                        ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
                                      }
                                      readOnly={!val.action}
                                    />
                                  </div>

                                  // <input
                                  //   className="input"
                                  //   name="contact"
                                  //   value={val?.contact}
                                  //   type="number"
                                  //   onWheel={(event) => event.currentTarget.blur()}
                                  //   onChange={(e) => {
                                  //     onChangeHandler2(e.target.name, e.target.value, index);
                                  //   }}
                                  //   onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                                  //   readOnly={!val.action}
                                  // />
                                )}
                              </td>
                              <td>
                                {!val.action ? (
                                  <span>{val?.emailId}</span>
                                ) : (
                                  <input
                                    className="input"
                                    name="emailId"
                                    value={val?.emailId}
                                    type="text"
                                    readOnly={!val.action}
                                    onChange={(e) => {
                                      onChangeHandler2(e.target.name, e.target.value, index);
                                    }}
                                  />
                                )}
                              </td>

                              <td className="text-right">
                                <div>
                                  {!val.action ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3`}
                                        alt="edit"
                                        onClick={(e) => {
                                          onChangeHandler2('action', true, index);
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3`}
                                        alt="save"
                                        onClick={(e) => {
                                          onChangeHandler2('action', false, index);
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
                  className={`${styles.add_row} p-3 align-items-center d-flex justify-content-end`}
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
          <div className={`${styles.main} vessel_card card border_color`}>
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
            <div id="shareHolding" className="collapse" aria-labelledby="shareHolding" data-parent="#shareHolding">
              <div className={`${styles.datatable} card-body datatable border_color`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
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
                                  {!val.action ? (
                                    <span>{val?.shareHoldersName}</span>
                                  ) : (
                                    <input
                                      className="input font-weight-bold"
                                      name="shareHoldersName"
                                      value={val?.shareHoldersName}
                                      type="text"
                                      onChange={(e) => {
                                        onChangeHandler3(e.target.name, e.target.value, index);
                                      }}
                                      readOnly={!val.action}
                                    />
                                  )}
                                </td>
                                <td>
                                  {!val.action ? (
                                    <span>{val?.designation}</span>
                                  ) : (
                                    <input
                                      className="input"
                                      name="designation"
                                      value={val?.designation}
                                      type="text"
                                      onChange={(e) => {
                                        onChangeHandler3(e.target.name, e.target.value, index);
                                      }}
                                      readOnly={!val.action}
                                    />
                                  )}
                                </td>

                                <td>
                                  {!val.action ? (
                                    <span>{val?.ownershipPercentage ? val?.ownershipPercentage + ' %' : ''}</span>
                                  ) : (
                                    <input
                                      className="input"
                                      name="ownershipPercentage"
                                      onFocus={(e) => {
                                        changeFiledFocus(true, index), (e.target.type = 'number');
                                      }}
                                      onBlur={(e) => {
                                        changeFiledFocus(false, index), (e.target.type = 'text');
                                      }}
                                      value={
                                        isPercentageInFocus[index]
                                          ? val?.ownershipPercentage
                                          : Number(val?.ownershipPercentage)?.toLocaleString('en-In', {
                                              maximumFractionDigits: 2,
                                            }) + ` %`
                                      }
                                      // value={val?.ownershipPercentage}
                                      type="text"
                                      onWheel={(event) => event.currentTarget.blur()}
                                      onKeyDown={(evt) =>
                                        ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
                                      }
                                      onChange={(e) => {
                                        onChangeHandler3(e.target.name, e.target.value, index);
                                      }}
                                      readOnly={!val.action}
                                    />
                                  )}
                                </td>

                                <td className="text-right">
                                  <div>
                                    {!val.action ? (
                                      <>
                                        <img
                                          src="/static/mode_edit.svg"
                                          className={`${styles.edit_image} mr-3`}
                                          alt="edit"
                                          onClick={(e) => {
                                            onChangeHandler3('action', true, index);
                                          }}
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src="/static/save-3.svg"
                                          className={`${styles.edit_image} mr-3`}
                                          alt="save"
                                          onClick={(e) => {
                                            onChangeHandler3('action', false, index);
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
                  className={`${styles.add_row} p-3 align-items-center d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddShare();
                  }}
                >
                  <span>+</span>
                  <div>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color align-items-center d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#director"
              aria-expanded="true"
              aria-controls="director"
            >
              <h3 className={`${styles.heading} mb-0`}>Directors and Authorised Signatory</h3>
              <span>+</span>
            </div>
            <div id="director" className="collapse" aria-labelledby="director" data-parent="#director">
              <div className={`${styles.datatable} card-body datatable border_color`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
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
                                {!val.action ? (
                                  <span>{val?.name}</span>
                                ) : (
                                  <input
                                    className="input font-weight-bold"
                                    name="name"
                                    value={val?.name}
                                    type="text"
                                    onKeyDown={(evt) => specialCharacter.includes(evt.key) && evt.preventDefault()}
                                    readOnly={!val.action}
                                    onChange={(e) => {
                                      if (!e.target.value.match(/[^a-zA-Z]+/g))
                                        onChangeHandler4(e.target.name, e.target.value, index);
                                    }}
                                  />
                                )}
                              </td>
                              <td>
                                {!val.action ? (
                                  <span>{val?.nationality}</span>
                                ) : (
                                  <input
                                    className="input"
                                    name="nationality"
                                    value={val?.nationality}
                                    type="text"
                                    onKeyDown={(evt) => specialCharacter.includes(evt.key) && evt.preventDefault()}
                                    readOnly={!val.action}
                                    onChange={(e) => {
                                      if (!e.target.value.match(/[^a-zA-Z]+/g))
                                        onChangeHandler4(e.target.name, e.target.value, index);
                                    }}
                                  />
                                )}
                              </td>
                              <td>
                                <input
                                  name="authoriztyToSign"
                                  checked={val?.authoriztyToSign}
                                  className={`${styles.checkBox}`}
                                  type="checkbox"
                                  readOnly={!val.action}
                                  onChange={(e) => {
                                    onChangeHandler4(e.target.name, !val?.authoriztyToSign, index);
                                  }}
                                />
                              </td>

                              <td className="text-right">
                                <div>
                                  {!val.action ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3`}
                                        alt="edit"
                                        onClick={(e) => {
                                          onChangeHandler4('action', true, index);
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3`}
                                        alt="save"
                                        onClick={(e) => {
                                          onChangeHandler4('action', false, index);
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
                  className={`${styles.add_row} p-3 align-items-center d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddDirector();
                  }}
                >
                  <span>+</span>
                  <div>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card card border_color `}>
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
                  <textarea
                    rows={3}
                    placeholder=""
                    className={`${styles.comment_field} input form-control`}
                    onChange={onChangeHandler5}
                    name="businessSummary"
                    value={business}
                  />
                  <label className={`${styles.label_textarea} label_heading text`}>Business Summary</label>
                  <img
                    onClick={(e) => {
                      addToBusinessArray();
                    }}
                    className={`${styles.plus_field} img-fluid`}
                    src="/static/add-btn.svg"
                    alt="add button"
                  />
                </div>
                <ol>
                  {businessArray?.map((val, index) => {
                    return <li>{val?.businessSummary}</li>;
                  })}
                </ol>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card card border_color`}>
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
            <div id="commodity" className="collapse" aria-labelledby="commodity" data-parent="#commodity">
              <div className={`${styles.datatable} card-body datatable border_color`}>
                <div className={`${styles.table_scroll_outer}`}>
                  <div className={`${styles.table_scroll_inner}`}>
                    <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
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
                                {!val.action ? (
                                  <span>{val?.hsnCode}</span>
                                ) : (
                                  <input
                                    onKeyDown={(evt) => specialCharacter.includes(evt.key) && evt.preventDefault()}
                                    className="input font-weight-bold"
                                    name="hsnCode"
                                    value={val?.hsnCode}
                                    type="text"
                                    readOnly={!val.action}
                                    onChange={(e) => {
                                      onChangeHandler6(e.target.name, e.target.value, index);
                                    }}
                                  />
                                )}
                              </td>
                              <td>
                                {!val.action ? (
                                  <span>{val?.commodity}</span>
                                ) : (
                                  <input
                                    onKeyDown={(evt) =>
                                      [...specialCharacter, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(
                                        evt.key,
                                      ) && evt.preventDefault()
                                    }
                                    className="input"
                                    name="commodity"
                                    value={val?.commodity}
                                    type="text"
                                    readOnly={!val.action}
                                    onChange={(e) => {
                                      onChangeHandler6(e.target.name, e.target.value, index);
                                    }}
                                  />
                                )}
                              </td>

                              <td className="text-right">
                                <div>
                                  {!val.action ? (
                                    <>
                                      <img
                                        src="/static/mode_edit.svg"
                                        className={`${styles.edit_image} mr-3`}
                                        alt="edit"
                                        onClick={(e) => {
                                          onChangeHandler6('action', true, index);
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src="/static/save-3.svg"
                                        className={`${styles.edit_image} mr-3`}
                                        alt="save"
                                        onClick={(e) => {
                                          onChangeHandler6('action', false, index);
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
                  className={`${styles.add_row} p-3 align-items-center d-flex justify-content-end`}
                  onClick={(e) => {
                    onAddCommodity();
                  }}
                >
                  <span>+</span>
                  <div>Add More Rows</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} vessel_card card border_color `}>
            <div
              className={`${styles.head_container} card-header border_color align-items-center d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#additional"
              aria-expanded="true"
              aria-controls="additional"
            >
              <h3 className={`${styles.heading} mb-0`}>Additional Information</h3>
              <span>+</span>
            </div>
            <div id="additional" className="collapse" aria-labelledby="additional" data-parent="#additional">
              <div className={`${styles.dashboard_form} card-body border_color vessel_card mr-3`}>
                <div className="d-flex mt-4 pb-4 position-relative">
                  <textarea
                    rows={3}
                    placeholder=""
                    name="remarks"
                    value={info}
                    className={`${styles.comment_field} input form-control`}
                    onChange={onChangeHandler7}
                  />
                  <label className={`${styles.label_textarea} label_heading text`}>Remarks</label>

                  <img
                    className={`${styles.plus_field} img-fluid`}
                    src="/static/add-btn.svg"
                    alt="add button"
                    onClick={(e) => {
                      onChangeHandler7Array();
                    }}
                  />
                </div>
                <ol>
                  {infoArray?.length > 0 &&
                    infoArray?.map((val, index) => {
                      return <li>{val?.remarks}</li>;
                    })}
                </ol>
              </div>
            </div>
          </div>
          <div className={`${styles.upload_main} vessel_card card border_color upload_main`}>
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
                    <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
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

                          <td>{incumbencyDoc?.originalName ? returnDocFormat(incumbencyDoc?.originalName) : null}</td>
                          <td className={styles.doc_row}>
                            {incumbencyDoc && incumbencyDoc?.date
                              ? moment(incumbencyDoc?.date).format('DD-MM-YYYY,HH:mm A')
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
                                    onChange={(e) => uploadDocHandler2(e, 'incumbencyDoc')}
                                  />
                                  <button className={`${styles.button_upload} btn`}>Upload</button>
                                </div>
                              </>
                            ) : (
                              <div
                                className={`${styles.certificate} text1 d-flex align-items-center justify-content-between`}
                              >
                                <span>{incumbencyDoc?.name ? incumbencyDoc?.name : incumbencyDoc?.originalName}</span>
                                <img
                                  onClick={(e) => setIncumbencyDoc(null)}
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

                          <td>{thirdParty?.originalName ? returnDocFormat(thirdParty?.originalName) : null}</td>
                          <td className={styles.doc_row}>
                            {thirdParty && thirdParty?.date
                              ? moment(thirdParty?.date).format('DD-MM-YYYY,HH:mm A')
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
                                    onChange={(e) => uploadDocHandler2(e, 'thirdPartyDoc')}
                                  />
                                  <button className={`${styles.button_upload} btn`}>Upload</button>
                                </div>
                              </>
                            ) : (
                              <div
                                className={`${styles.certificate} text1 d-flex align-items-center justify-content-between`}
                              >
                                <span>{thirdParty?.name ? thirdParty?.name : thirdParty?.originalName}</span>
                                <img
                                  onClick={(e) => SetThirdParty(null)}
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
                            <div className={`${styles.certificate} text1 d-inline-flex justify-content-between`}>
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
                          <select className={`${styles.value} ${styles.customSelect} input form-control`} id="name">
                            <option value="others">Others</option>
                          </select>
                          <Form.Label className={`${styles.label} label_heading`}>Document Type</Form.Label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Form.Group>
                      <Form.Group className={styles.form_group}>
                        <input
                          onChange={(e) => setNewDoc({ ...newDoc, name: e.target.value })}
                          id="otherDocName"
                          className={`${styles.value} input form-control`}
                          type="text"
                          value={newDoc?.name}
                        />
                        <Form.Label className={`${styles.label} label_heading`}>
                          Please Specify Document Name
                        </Form.Label>
                      </Form.Group>
                      <div className={styles.uploadBtnWrapper}>
                        <button onClick={(e) => uploadDocumentHandler(e)} className={`${styles.upload_button} btn`}>
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
                      <div className={`d-flex align-items-center ${styles.searchBarContainer} `}>
                        <img className={` ${styles.searchImage} img-fluid`} src="/static/search.svg" alt="Search"></img>
                        <input
                          className={`${styles.searchBar} statusBox border_color input form-control`}
                          placeholder="Search"
                          onChange={(e) => filterDocBySearch(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
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
                        {filteredDocs &&
                          filteredDocs?.map((document, index) => {
                            if (document?.deleted) {
                              return null;
                            } else {
                              return (
                                <tr key={index} className="uploadRowTable">
                                  <td className={`${styles.doc_name}`}>{document?.name}</td>
                                  <td>{document?.originalName ? returnDocFormat(document?.originalName) : null}</td>
                                  <td className={styles.doc_row}>
                                    {moment(document?.date).format('DD-MM-YYYY, h:mm A')}
                                  </td>
                                  <td className={styles.doc_row}>
                                    {document?.uploadedBy?.fName} {document?.uploadedBy?.lName}
                                  </td>
                                  <td>
                                    <span className={`${styles.status} ${styles.approved}`}></span>
                                    {document?.verification?.status ?? 'Pending'}
                                  </td>
                                  <td colSpan="2">
                                    <img
                                      onClick={(e) => {
                                        deleteDocumentHandler(document, index);
                                      }}
                                      src="/static/delete.svg"
                                      className={`${styles.delete_image} mr-3`}
                                      alt="Bin"
                                    />
                                    <img
                                      src="/static/upload.svg"
                                      className={`${styles.upload_image} mr-3`}
                                      alt="Share"
                                      onClick={() => {
                                        setOpen(true);
                                        setSharedDoc({ ...sharedDoc, path: document.path });
                                      }}
                                    />
                                  </td>
                                </tr>
                              );
                            }
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {open ? (
              <TermsheetPopUp
                close={() => setOpen(false)}
                open={open}
                istermsheet
                shareEmail={handleShareDoc}
                setEmail={(e) =>
                  setSharedDoc({
                    ...sharedDoc,
                    data: { ...sharedDoc.data, receiver: e },
                  })
                }
              />
            ) : null}
          </div>
        </div>
        <SaveBar
          rightBtn="Send for Approval"
          handleSave={handleSave}
          rightBtnClick={() => {
            handleSendForApproval();
          }}
        />
      </div>
    </>
  );
}

export default Index;
