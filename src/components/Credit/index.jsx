/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import _get from 'lodash/get';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UploadDocument } from 'redux/registerBuyer/action';
import { SearchSupplier } from 'redux/supplier/action';
import { checkNan, phoneValidation } from 'utils/helper';
import DateCalender from '../DateCalender';
import MultiSelect from '../MutilSelect';
import AddressComponent from './addressComponent';
import styles from './index.module.scss';
import { getPincodes } from 'redux/masters/action';

const Index = ({
  creditDetail,
  keyAddDataArr,
  saveProductData,
  handleProductSave,
  saveSupplierData,
  keyAddData,
  debtData,
  setDebtData,
  addDebtArr,
  personData,
  addPersonArr,
  deleteComponent,
  updateKeyAddDataArr,
  deleteAddress,
  supplierCred,
  setEditRow,
  orderDetail,
  companyData,
}) => {
  const dispatch = useDispatch();

  const [saveTable, setSaveTable] = useState(false);

  const [saveContactTable, setContactTable] = useState(false);

  const { gstDocument } = useSelector((state) => state.buyer);
  const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    monthlyCapacity: false,
    capacityUtilization: false,
    avgStockinCommodity: false,
    avgStockinTrasit: false,
    availableStock: false,
    dailyConsumptionOfCommodity: false,
    AvgMonthlyElectricityBill: false,
    commodityOfTotalTrade: false,
    limit: false,
  });

  const { updatingCreditCalculate } = useSelector((state) => state.review);
  const { getPincodesMasterData } = useSelector((state) => state.MastersData);
  const [keyNameList, setKeyNameList] = useState([]);

  useEffect(() => {
    if (companyData?.profile?.directorDetail) {
      let temp = [];
      companyData?.profile?.directorDetail?.forEach((val) => {
        if (val.name !== '') {
          temp.push(val.name);
        }
      });
      setKeyNameList([...temp]);
    }
  }, [companyData]);

  const [keyAddressData, setKeyAddressData] = useState({
    GSTIN: '',
    GSTIN_document: {
      name: gstDocument?.name,
      path: gstDocument?.path,
      date: gstDocument?.date,
    },
    addressType: '',
    branch: '',
    city: '',
    state: '',
    email: '',
    completeAddress: '',
    contact: {
      callingCode: null,
      number: null,
    },
    pinCode: null,
    communication: false,
  });

  useEffect(() => {
    const newInput = { ...keyAddressData };
    newInput.GSTIN_document.name = gstDocument.name;
    newInput.GSTIN_document.path = gstDocument.path;
    newInput.GSTIN_document.date = gstDocument.date;
    setKeyAddressData(newInput);
  }, [gstDocument]);

  const removeDoc = () => {
    const newInput = { ...keyAddressData };
    newInput.GSTIN_document.name = undefined;
    newInput.GSTIN_document.path = undefined;
    newInput.GSTIN_document.date = undefined;
    setKeyAddressData(newInput);
  };

  const addMoreDebtRows = () => {
    setDebtData([
      ...debtData,
      {
        bankName: '',
        primaryBank: false,
        conduct: '',
        limit: null,
        action: false,
        addnew: 'false',
      },
    ]);
  };

  const handleDebtChange = (name, value, index) => {
    let tempArr = [...debtData];
    tempArr.forEach((val, i) => {
      if (i == index) {
        val[name] = value;
        if (value == 'addnew') {
          val.addnew = 'true';
        }
      } else {
        if (name == 'primaryBank') {
          val[name] = false;
        }
      }
    });

    setDebtData([...tempArr]);
  };

  const setActions = (index, val) => {
    setDebtData((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: val };
        }

        return obj;
      });

      return newState;
    });
  };

  const FilterUniqueBank = () => {
    let filtered = _get(companyData, 'financial.openCharges', []);
    const openCharges = filtered?.filter((item) => !item.dateOfSatisfactionOfChargeInFull);
    const unique = [...new Set(openCharges?.map((item) => item.nameOfChargeHolder))];

    return unique;
  };

  const [keyPersonData, setKeyPersonData] = useState({
    contact: {
      callingCode: '+91',
      number: '',
    },
    department: '',
    designation: '',
    email: '',
    name: '',
  });
  console.log(keyNameList,'keyPersonData',keyPersonData)

  useEffect(() => {
    setKeyPersonData(personData);
  }, [personData]);

  const handlePersonChange = (e, key) => {
    const newInput = [...keyPersonData];

    if (e.target.value == 'addnew') {
      newInput[key].addnew = true;
      newInput[key].name = '';
      newInput[key].email = '';

      setKeyPersonData([...newInput]);
      return;
    }
    if (e.target.name.split('.').length > 1) {
      newInput[key]['contact']['number'] = e.target.value;
    } else {
      newInput[key][e.target.name] = e.target.value;
    }
    setKeyPersonData([...newInput]);
  };
  useEffect(() => {
    if (getPincodesMasterData.length > 0) {
      setToShow(getPincodesMasterData);
      setToView(true);
    } else {
      setToShow([]);
      setToView(false);
    }
  }, [getPincodesMasterData]);
  const gettingPins = (value) => {
    dispatch(getPincodes(value));
  };
 
  const handleChange = (name, value) => {
    const newInput = { ...keyAddressData };
    newInput[name] = value;

    setKeyAddressData(newInput);
  };
  const handleChange2 = (name, value) => {
    const newInput = { ...keyAddressData };
    newInput.pinCode = value.Pincode;
    newInput.state = value.State;
    newInput.city = value.City;
    newInput.country = 'India';
    setKeyAddressData({ ...newInput });
  };
  const mobileFunction = (e) => {
    const newObj = { ...keyAddressData };
    newObj.contact.number = e.target.value;
    setKeyAddressData(newObj);
  };

  const personMobileFunction = (e) => {
    const newObj = { ...keyPersonData };
    newObj.contact.number = e.target.value;
    setKeyPersonData(newObj);
  };

  const uploadDocument = (e) => {
    const fd = new FormData();
    fd.append('gstDocument', e.target.files[0]);
    dispatch(UploadDocument(fd));
  };

  const addressValidtion = (data) => {
    if (data.addressType === null || data.addressType === '' || data.addressType === undefined) {
      let toastMessage = 'Please Select addresss Type';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.pinCode === null || data.pinCode === '' || data.pinCode === undefined) {
      let toastMessage = 'Please add pin code';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.state === null || data.state === '' || data.state === undefined) {
      let toastMessage = 'Please add state';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.city === null || data.city === '' || data.city === undefined) {
      let toastMessage = 'Please add city';
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
    if (data.contact.number === null || data.contact.number === '' || data.contact.number === undefined) {
      let toastMessage = 'Please add phone number';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    }

    if (data.contact.number.length < 10 || data.contact.number.length > 10) {
      let toastMessage = 'Please add valid number';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    }
    if (data.completeAddress === null || data.completeAddress === '' || data.completeAddress === undefined) {
      let toastMessage = 'Please add address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }

      return false;
    }
    return true;
  };

  const handleClick = () => {
    if (addressValidtion(keyAddressData)) {
      keyAddDataArr(keyAddressData);
      setKeyAddressData({
        GSTIN: '',
        GSTIN_document: {
          name: undefined,
          path: undefined,
          date: undefined,
        },
        addressType: '',
        branch: '',
        city: '',
        state: '',
        email: '',
        completeAddress: '',
        contact: {
          callingCode: null,
          number: null,
        },
        pinCode: null,
        communication: false,
      });
    }
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveProductData(name, text);
  };

  const saveSupplierDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveSupplierData(name, text);
  };
  const handleRemoveRow = (index) => {
    setDebtData([...debtData.slice(0, index), ...debtData.slice(index + 1)]);
  };

  const [showAddress, setShowAddress] = useState(false);
  const [Index, setIndex] = useState('0');
  const [showEditAddress, setShowEditAddress] = useState(false);
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
    communication: false,
  });

  const editAddress = (index) => {
    setShowAddress(false);
    setShowEditAddress(true);
    setIndex(index);

    let tempArr = keyAddData;
    setEditData({
      GSTIN: tempArr[index].GSTIN,
      GSTIN_document: tempArr[index].GSTIN_document,
      addressType: tempArr[index].addressType,
      branch: tempArr[index].branch,
      city: tempArr[index].city,
      state: tempArr[index].state,
      email: tempArr[index].email,
      completeAddress: tempArr[index].completeAddress,
      contact: {
        callingCode: tempArr[index].contact.callingCode,
        number: tempArr[index].contact.number,
      },
      pinCode: tempArr[index].pinCode,
      communication: tempArr[index].communication || false,
    });
  };

  const changeData = (name, value) => {
    const newInput = { ...editData };
    newInput[name] = value;

    setEditData(newInput);
  };
  const changeData2 = (name, value) => {
    const newInput = { ...editData };
    newInput[name] = value.Pincode;
    newInput.state = value.State;
    newInput.city = value.City;
    newInput.country = 'India';

    setEditData(newInput);
  };

  const [infoCircle, setInfoCircle] = useState(false);
  const handleInfo = (e) => {
    setInfoCircle(!infoCircle);
  };
  const [emails, setemails] = useState([]);
  useEffect(() => {
    if (creditDetail?.existingCHA.length > 0) {
      setemails(creditDetail?.existingCHA);
    }else {
      setemails([])
    }
  }, [creditDetail?.existingCHA]);

  const [exSupplier, setexSupplier] = useState([]);

  useEffect(() => {
    if (creditDetail?.existingSuppliers.length > 0) {
      setexSupplier(JSON.parse(JSON.stringify(creditDetail?.existingSuppliers)));
    } else {
      setexSupplier([])
    }
  }, [creditDetail?.existingSuppliers]);

  const removeEmailParent = (index) => {
    let temp = [...emails];
    temp.splice(index, 1);
    setemails([...temp]);
  };

  const removeExSupplierParent = (index) => {
    let temp = [...exSupplier];
    temp.splice(index, 1);

    setexSupplier([...temp]);
  };

  const { searchedSupplier } = useSelector((state) => state.supplier);

  const [searchTerm, setSearchTerm] = useState('');
  const [removeInput, setRemoveInput] = useState(false);
  const [supplierShow, setSupplierShow] = useState(false);
    const [supplierTerm, setSupplierTerm] = useState('');
 const handleSupplierSearch = (e) => {
    setSupplierShow(false);
    const query = e;
    setSupplierTerm(query);
    if (query.length >= 3) {
      dispatch(SearchSupplier(query));
    }
  };
  useEffect(() => {
    if(searchedSupplier?.data?.length > 0){
      setSupplierShow(true)
    }
  },[searchedSupplier])
 
  const handleSearch = (e) => {
    setRemoveInput(false);
    const query = e;
    setSearchTerm(query);
    if (query.length >= 3) {
      dispatch(SearchSupplier(query));
    }
  };

  const handleFilteredData = (results) => {
    let temp = [...exSupplier];
    temp.push(results?.supplierProfile?.supplierName);
    setexSupplier([...temp]);
    setSearchTerm('');
  };

  return (
    <>
      <div className={`${styles.main} vessel_card card border_color`}>
        <div
          className={`${styles.head_container} border_color align-items-center card-header d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#productSummary"
          aria-expanded="true"
          aria-controls="productSummary"
        >
          <h3 className={`${styles.heading} mb-0`}>Product Summary</h3>
          <span>+</span>
        </div>
        <div id="productSummary" aria-labelledby="productSummary" data-parent="#profileAccordion">
          <div className={`${styles.dashboard_form} card-body border_color`}>
            <div className="row">
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  onFocus={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      monthlyCapacity: true,
                    }),
                      (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      monthlyCapacity: false,
                    }),
                      (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.monthlyCapacity
                      ? creditDetail?.monthlyProductionCapacity
                      : checkNan(Number(creditDetail?.monthlyProductionCapacity))?.toLocaleString() +
                        ` ${creditDetail?.unitOfQuantity?.toUpperCase()}`
                  }
                  name="monthlyProductionCapacity"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Monthly Production Capacity
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  onFocus={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      capacityUtilization: true,
                    }),
                      (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      capacityUtilization: false,
                    }),
                      (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.capacityUtilization
                      ? creditDetail?.capacityUtilization
                      : checkNan(Number(creditDetail?.capacityUtilization), 'no') + ' %'
                  }
                  name="capacityUtilization"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Capacity Utilization<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  onFocus={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      avgStockinCommodity: true,
                    }),
                      (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      avgStockinCommodity: false,
                    }),
                      (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.avgStockinCommodity
                      ? creditDetail?.averageStockOfCommodity
                      : checkNan(Number(creditDetail?.averageStockOfCommodity))?.toLocaleString() +
                        ` ${creditDetail?.unitOfQuantity?.toUpperCase()}`
                  }
                  name="averageStockOfCommodity"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Average Stock of Commodity
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  onFocus={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      avgStockinTrasit: true,
                    }),
                      (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      avgStockinTrasit: false,
                    }),
                      (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.avgStockinTrasit
                      ? creditDetail?.averageStockInTransit
                      : checkNan(Number(creditDetail?.averageStockInTransit))?.toLocaleString() +
                        ` ${creditDetail?.unitOfQuantity?.toUpperCase()}`
                  }
                  name="averageStockInTransit"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Average Stock in Transit
                  <strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  onFocus={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      availableStock: true,
                    }),
                      (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      availableStock: false,
                    }),
                      (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.availableStock
                      ? creditDetail?.availableStock
                      : checkNan(Number(creditDetail?.availableStock))?.toLocaleString() +
                        ` ${creditDetail?.unitOfQuantity?.toUpperCase()}`
                  }
                  name="availableStock"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Available Stock<strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  onFocus={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      dailyConsumptionOfCommodity: true,
                    }),
                      (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      dailyConsumptionOfCommodity: false,
                    }),
                      (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.dailyConsumptionOfCommodity
                      ? creditDetail?.dailyConsumptionOfCommodity
                      : checkNan(Number(creditDetail?.dailyConsumptionOfCommodity))?.toLocaleString() +
                        ` ${creditDetail?.unitOfQuantity?.toUpperCase()}`
                  }
                  name="dailyConsumptionOfCommodity"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Daily Consumption of Commodity
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    name="stockCoverageOfCommodity"
                    defaultDate={creditDetail?.stockCoverageOfCommodity ?? ''}
                    saveDate={saveDate}
                    labelName="Stock Coverage of Commodity"
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    name="existingProcurementOfCommodity"
                    required
                    value={creditDetail?.existingProcurementOfCommodity}
                    onChange={(e) => {
                      saveProductData(e.target.name, e.target.value);
                    }}
                  >
                    <option selected value="" disabled>
                      Select an option
                    </option>
                    <option value="Import">Import</option>
                    <option value="Manufacturers">Manufacturers</option>
                    <option value="Both">Both</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Existing Procurement of Commodity
                    <strong className="text-danger">*</strong>
                  </label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex position-relative">
                  <MultiSelect
                    placeholder="Existing Supplier(s)"
                    emails={exSupplier}
                    id="Existing Supplier(s)"
                    handleSearch={handleSearch}
                    handleFilteredData={handleFilteredData}
                    removeInput={removeInput}
                    setRemoveInput={setRemoveInput}
                    searchTerm={searchTerm}
                    searchedSupplier={searchedSupplier}
                    onChange={(_emails) => {
                      let temp = [...exSupplier];
                      temp.push(_emails[0]);
                      setexSupplier([...temp]);
                    }}
                    getLabel={(email, index, removeEmail) => {
                      return (
                        <div data-tag key={index}>
                          {email}
                          <span
                            data-tag-handle
                            onClick={() => {
                              removeExSupplierParent(index);
                              removeEmail(index);
                            }}
                          >
                            ×
                          </span>
                        </div>
                      );
                    }}
                  ></MultiSelect>
                </div>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                    name="contributionCommoditySenstivity"
                    value={creditDetail?.contributionCommoditySenstivity}
                    onChange={(e) => {
                      saveProductData(e.target.name, e.target.value);
                    }}
                  >
                    <option disabled value="">
                      Select
                    </option>
                    <option value="Very High">Very High</option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Very Low">Very Low</option>
                  </select>
                  <label className={`${styles.label_heading} label_heading`}>
                    Commodity Contribution Senstivity
                    <strong className="text-danger">*</strong>
                  </label>

                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
                <div className={`${styles.tooltip} `}>
                  <img className={`${styles.info_circle} img-fluid`} src="/static/info-circle.svg" />

                  <div className={`${styles.tooltiptext}`}>Usage of commodity in production of end product</div>
                </div>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  onFocus={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      AvgMonthlyElectricityBill: true,
                    }),
                      (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      AvgMonthlyElectricityBill: false,
                    }),
                      (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.AvgMonthlyElectricityBill
                      ? creditDetail?.AvgMonthlyElectricityBill
                      : 'INR ' + checkNan(Number(creditDetail?.AvgMonthlyElectricityBill))?.toLocaleString()
                  }
                  name="AvgMonthlyElectricityBill"
                  onChange={(e) => {
                    saveProductData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Avg. Monthly Electricity Bill
                  <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex position-relative">
                  <MultiSelect
                    placeholder="Existing CHA(s)"
                    emails={emails}
                    id="Existing CHA(s)"
                    onChange={(_emails) => {
                      let temp = [...emails];
                      temp.push(_emails[0]);
                      setemails([...temp]);
                    }}
                    getLabel={(email, index, removeEmail) => {
                      return (
                        <div data-tag key={index}>
                          {email}
                          <span
                            data-tag-handle
                            onClick={() => {
                              removeEmailParent(index);
                              removeEmail(index);
                            }}
                          >
                            ×
                          </span>
                        </div>
                      );
                    }}
                  ></MultiSelect>
                </div>
              </div>
            </div>
            <div className={`${styles.saveButton} mt-4 mb-4`}>
              <div
                className={`${styles.button} d-flex justify-content-center align-items-center ml-0`}
                onClick={() => {
                  if (!updatingCreditCalculate) {
                    handleProductSave(emails, exSupplier);
                  }
                }}
              >
                <span>Save</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main} vessel_card card border_color`}>
        <div
          className={`${styles.head_container} card-header align-items-center d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#supplierCred"
          aria-expanded="true"
          aria-controls="supplierCred"
        >
          <h3 className={`${styles.heading} mb-0`}> {`Supplier's Credentials`}</h3>
          <span>+</span>
        </div>
        <div id="supplierCred" className="collapse" aria-labelledby="supplierCred" data-parent="#profileAccordion">
          <div className={`${styles.dashboard_form} card-body border_color`}>
            <div className="row">
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <input
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    name="supplierName"
                    required
                    type="text"
                    value={supplierCred?.supplierName}
                    onChange={(e) => {
                      handleSupplierSearch(e.target.value)
                      saveSupplierData(e.target.name, e.target.value);
                    }}
                  ></input>
                {searchedSupplier && searchedSupplier?.data?.length > 0 && supplierShow && supplierTerm && (
                        <div className={styles.searchResults}>
                          <ul>
                            {searchedSupplier
                              ? searchedSupplier?.data?.map((results, index) => (
                                  <li
                                    onClick={() => {
                                      saveSupplierData("supplierName",results?.supplierProfile?.supplierName)
                                      setSupplierShow(false)
                                      
                                    }}
                                    id={results._id}
                                    key={index}
                                    value={results}
                                  >
                                    {results?.supplierProfile?.supplierName}
                                  </li>
                                ))
                              : ''}
                          </ul>
                        </div>
                      )}
                  <label className={`${styles.label_heading} label_heading`}>
                    Supplier Name<strong className="text-danger">*</strong>
                  </label>
                  <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-', '.',"ArrowDown","ArrowUp"].includes(evt.key) && evt.preventDefault()}
                  value={supplierCred?.shipmentNumber}
                  name="shipmentNumber"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  No. of Shipments<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  value={supplierCred?.consigneesNumber}
                  name="consigneesNumber"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-', '.',"ArrowDown","ArrowUp"].includes(evt.key) && evt.preventDefault()}
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  No. of Consignees<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} input form-control`}
                  required
                  type="number"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-', '.',"ArrowDown","ArrowUp"].includes(evt.key) && evt.preventDefault()}
                  value={supplierCred?.HSCodesNumber}
                  name="HSCodesNumber"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  No. of HS codes<strong className="text-danger">*</strong>
                </label>
              </div>

              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="number"
                    onWheel={(event) => event.currentTarget.blur()}
                    onKeyDown={(evt) => ['e', 'E', '+', '-', '.',"ArrowDown","ArrowUp"].includes(evt.key) && evt.preventDefault()}
                    value={supplierCred?.countryOfOrigin}
                    name="countryOfOrigin"
                    onChange={(e) => {
                      saveSupplierData(e.target.name, e.target.value);
                    }}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Country of Origin<strong className="text-danger">*</strong>
                  </label>
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    onWheel={(event) => event.currentTarget.blur()}
                    onKeyDown={(evt) => ['e', 'E', '+', '-', '.',"ArrowDown","ArrowUp"].includes(evt.key) && evt.preventDefault()}
                    type="number"
                    value={supplierCred?.portOfDestination}
                    name="portOfDestination"
                    onChange={(e) => {
                      saveSupplierData(e.target.name, e.target.value);
                    }}
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Port of Destination
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    name="oldestShipmentDate"
                    defaultDate={supplierCred?.oldestShipmentDate ?? ''}
                    saveDate={saveSupplierDate}
                    labelName="Oldest Shipment Date"
                    startFrom={'noLimit'}
                    maxDate={new Date()}
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    name="latestShipmentDate"
                    defaultDate={supplierCred?.latestShipmentDate ?? ''}
                    saveDate={saveSupplierDate}
                    startFrom={'noLimit'}
                    labelName="Latest Shipment Date"
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
                {/* <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                  defaultValue={
                    supplierCred?.latestShipmentDate?.split(
                      'T',
                    )[0]
                  }
                  name="latestShipmentDate"
                  onChange={(e) => saveSupplierDate(e)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Latest Shipment Date<strong className="text-danger">*</strong>
                </label> */}
              </div>
              <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
                  className={`${styles.input_field} ${styles.percent} input form-control`}
                  required
                  type="text"
                  onWheel={(event) => event.currentTarget.blur()}
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  onFocus={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      commodityOfTotalTrade: true,
                    }),
                      (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({
                      ...isFieldInFocus,
                      commodityOfTotalTrade: false,
                    }),
                      (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.commodityOfTotalTrade
                      ? supplierCred?.commodityOfTotalTrade
                      : checkNan(Number(supplierCred?.commodityOfTotalTrade), 'no') + ' %'
                  }
                  name="commodityOfTotalTrade"
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Commodity to Total Trade % -24M
                  <strong className="text-danger">*</strong>
                </label>
                <div className={`${styles.tooltip} `}>
                  <img className={`${styles.info_circle} img-fluid`} src="/static/info-circle.svg" />

                  <div className={`${styles.tooltiptext}`}>Usage of commodity in production of end product</div>
                </div>
              </div>
              <div className={`${styles.form_group} col-12 mt-4`}>
                <textarea
                  rows={3}
                  required
                  className={`${styles.remark_field} ${styles.input_field} input form-control`}
                  style={{ height: 'auto' }}
                  name="remarks"
                  defaultValue={supplierCred?.remarks}
                  onChange={(e) => {
                    saveSupplierData(e.target.name, e.target.value);
                  }}
                />
                <label className={`${styles.label_heading} label_heading`}>Remarks</label>
              </div>
            </div>
            {/* <div className={`${styles.saveButton} mt-4 mb-4`}>
              <div
                className={`${styles.button} d-flex justify-content-center align-items-center ml-0`}
                onClick={() => {
                  if (!updatingCreditCalculate) {
                    saveSupplierData()
                  }
                }}
              >
                <span>Save</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} card-header align-items-center d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#keyContact"
          aria-expanded="true"
          aria-controls="keyContact"
        >
          <h3 className={`${styles.heading} mb-0`}>Key Contact Person(s)</h3>
          <span>+</span>
        </div>
        <div id="keyContact" className="collapse" aria-labelledby="keyContact" data-parent="#profileAccordion">
          <div className={`${styles.datatable} card-body`}>
            <div className={`${styles.table_scroll_outer}`}>
              <div className={`${styles.table_scroll_inner}`}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>DESIGNATION</th>
                      <th>DEPARTMENT</th>
                      <th>CONTACT NO.</th>
                      <th>EMAIL ID</th>
                      <th></th>
                    </tr>
                  </thead>
                  {keyPersonData?.length > 0 &&
                    keyPersonData?.map((person, index) => (
                      <tbody className="border_color">
                        <>
                          {!person.isEdit ? (
                            <>
                          
                              <tr>
                                <td>{person.name}</td>
                                <td>{person.designation}</td>
                                <td>{person.department}</td>
                                <td>{person.contact.callingCode} {" "} {person.contact.number}</td>
                                <td>{person.email}</td>
                                <td>
                                  <div className="d-flex">
                                    <img
                                      src="/static/mode_edit.svg"
                                      className={`${styles.edit_image} mr-3`}
                                      onClick={(e) => {
                                        setEditRow(index);
                                      }}
                                    />

                                    <img
                                      onClick={() => deleteAddress(index)}
                                      src="/static/delete 2.svg"
                                      className={`${styles.delete_image}`}
                                      alt="delete"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </>
                          ) : (
                            <tr key={index} className="table_credit shadow-none">
                              <td>
                                <div className="d-inline-flex align-items-center position-relative">
                                  {person.addnew ? (
                                    <>
                                      <input
                                        className="input"
                                        value={person.name}
                                        placeholder={'ADD NEW'}
                                        name="name"
                                        onChange={(e) => handlePersonChange(e, index)}
                                        type="text"
                                        readOnly={!person.isEdit}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <select
                                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                        name="name"
                                        onChange={(e) => handlePersonChange(e, index)}
                                        disabled={!person.isEdit}
                                        value={person.name}
                                      >
                                        <option selected>Select an Option</option>
                                        {keyNameList.length > 0 &&
                                          keyNameList.map((val) => {
                                            return <option value={val}>{val}</option>;
                                          })}
                                        <option value={`addnew`}>ADD NEW</option>
                                      </select>
                                      <img
                                        className={`${styles.arrow2} img-fluid`}
                                        src="/static/inputDropDown.svg"
                                        alt="arrow"
                                      />
                                    </>
                                  )}
                                </div>
                                {/* <input
                            className="input font-weight-bold"
                            defaultValue={person.name}
                            name="name"
                            onChange={(e) => handlePersonChange(e, index)}
                            type="text"
                            readOnly={!saveContactTable}
                          /> */}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <input
                                    className="input"
                                    placeholder={'Designation'}
                                    value={person.designation}
                                    name="designation"
                                    onChange={(e) => handlePersonChange(e, index)}
                                    type="text"
                                    readOnly={!person.isEdit}
                                  />
                                  {/* <select
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              value={person.designation}
                              name="designation"
                              onChange={(e) => handlePersonChange(e, index)}
                              disabled={!person.isEdit}
                            >
                              <option selected>Select an Option</option>
                              <option>Director</option>
                              <option>Production Manager</option>
                              <option>Lead Manager</option>
                            </select>
                            <img
                              className={`${styles.arrow} ml-n4 img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            /> */}
                                </div>
                                {/* <input
                            className="input"
                            defaultValue={person.designation}
                            name="designation"
                            onChange={(e) => handlePersonChange(e, index)}
                            type="text"
                            readOnly={!saveContactTable}
                          /> */}
                              </td>
                              <td width="25%">
                                <div className="d-flex">
                                  <input
                                    className="input"
                                    placeholder={'Department'}
                                    value={person.department}
                                    name="department"
                                    onChange={(e) => handlePersonChange(e, index)}
                                    type="text"
                                    readOnly={!person.isEdit}
                                  />
                                  {/* <select
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              value={person.department}
                              name="department"
                              onChange={(e) => handlePersonChange(e, index)}
                              type="text"
                              disabled={!person.isEdit}
                            >
                              <option>Select an option</option>
                              <option>Technology</option>
                            </select>
                            <img
                              className={`${styles.arrow} ml-n4 img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            /> */}
                                </div>
                              </td>

                              <td>
                                <div className="d-inline-flex align-items-center position-relative">
                                  {person.addnew ? (
                                    <>
                                      <input
                                        className="input"
                                        value={person.contact.number}
                                        placeholder={'Contact number'}
                                        name="contact.number"
                                        style={{ maxWidth: '170px' }}
                                        onChange={(e) => {
                                          handlePersonChange(e, index);
                                        }}
                                        type="text"
                                      />
                                    </>
                                  ) : (
                                    <>
                                       <div className={`${styles.phone_card}`}>
                                    <select
                                      name="callingCode"
                                      id="Code"
                                      className={`${styles.code_phone} ${styles.code_phone2} input border-right-0`}
                                      value={person.contact.callingCode}
                                    >
                                      {' '}
                                      <option value="+91">+91</option>
                                    </select>
                                    <input
                                       name="contact.number"
                                      type="number"
                                      onWheel={(event) => event.currentTarget.blur()}
                                      className={`${styles.input_field} ${styles.input_field2} input form-control border-left-0`}
                                      onChange={(e) => {
                                        handlePersonChange(e,index);
                                      }}
                                      value={person.contact.number}
                                      onKeyDown={(evt) =>
                                        ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
                                      }
                                    />
                                  </div>
                                  
                                    </>
                                  )}
                                </div>
                              </td>
                              <td>
                                <input
                                  className="input"
                                  defaultValue={person.email}
                                  placeholder={'Email'}
                                  name="email"
                                  onChange={(e) => handlePersonChange(e, index)}
                                  type="text"
                                  disabled={!person.isEdit}
                                />
                              </td>
                              <td>
                                <div className="d-flex">
                                  {!person.isEdit ? (
                                    <img
                                      src="/static/mode_edit.svg"
                                      className={`${styles.edit_image} mr-3`}
                                      onClick={(e) => {
                                        setEditRow(index);
                                      }}
                                    />
                                  ) : (
                                    <img
                                      src="/static/save-3.svg"
                                      className={`${styles.edit_image} mr-3`}
                                      alt="save"
                                      onClick={(e) => {
                                        setEditRow(index);
                                      }}
                                    />
                                  )}
                                  <img
                                    onClick={() => deleteAddress(index)}
                                    src="/static/delete 2.svg"
                                    className={`${styles.delete_image}`}
                                    alt="delete"
                                  />
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
            <div className={`${styles.add_row} d-flex justify-content-end`}>
              <div
                className={`d-flex justify-content-end`}
                onClick={(e) => {
                  addPersonArr(keyPersonData);
                }}
              >
                {' '}
                <span>+</span>
                <div>Add More Rows</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main} vessel_card card border_color`}>
        <div
          className={`${styles.head_container} card-header align-items-center d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#keyAddress"
          aria-expanded="true"
          aria-controls="keyAddress"
        >
          <h3 className={`${styles.heading} mb-0`}>Key Addresses</h3>
          <span>+</span>
        </div>
        <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
          <div className={`${styles.dashboard_form} card-body`}>
            <div className={`${styles.address_box} d-flex justify-content-between align-items-start`}>
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
                      orderDetail={orderDetail}
                      path={address?.GSTIN_document?.path}
                      communicationModeYes={address?.communication}
                      state={address.state}
                      city={address.city}
                      pinCode={address.pinCode}

                    />
                  </>
                );
              })}
            </div>
            {showAddress ? (
              <div className={`${styles.main} ${styles.add_address} card shadow-none border_color`}>
                <div
                  className={`${styles.head_container} align-items-center card-header d-flex justify-content-between bg-transparent`}
                >
                  <h3 className={`${styles.heading} mb-0`}>Add a new address</h3>
                  <img
                    onClick={() => {
                      setShowAddress(false);
                    }}
                    style={{ marginRight: '-15px' }}
                    src="/static/accordion_close_black.svg"
                    className="image_arrow"
                  />
                </div>
                <div className={`${styles.dashboard_form} card-body border_color`}>
                  <div className="d-flex">
                    <div className={`${styles.sub_heading} heading_card`}>Communication Address</div>
                    <div className={styles.radio_form}>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Yes"
                            name="group1"
                            type={type}
                            checked={keyAddressData.communication == true}
                            onChange={(e) => {
                              handleChange('communication', !keyAddressData.communication);
                            }}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="No"
                            name="group1"
                            type={type}
                            checked={keyAddressData.communication == false}
                            onChange={(e) => {
                              handleChange('communication', false);
                            }}
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.form_group} ${styles.small_input} col-md-2 col-sm-4`}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.small_input} ${styles.customSelect}  input form-control`}
                          name="addressType"
                          value={keyAddressData.addressType}
                          onChange={(e) => {
                            handleChange(e.target.name, e.target.value);
                          }}
                        >
                          <option>Select an option</option>
                          <option value="Factory">Factory</option>
                          <option value="Registered Address">Registered Address</option>
                          <option value="Warehouse">Warehouse</option>
                          <option value="Corporate Office">Corporate Office</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>
                          Address Type<strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div className={`${styles.form_group} ${styles.small_input} col-md-2 col-sm-4`}>
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
                          onWheel={(event) => event.currentTarget.blur()}
                          name="pinCode"
                          onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                          value={keyAddressData.pinCode == null ? '' : keyAddressData.pinCode}
                          onChange={(e) => {
                            gettingPins(e.target.value);
                            handleChange(e.target.name, e.target.value);
                          }}
                        />
                        {toShow.length > 0 && toView && (
                          <div className={styles.searchResults}>
                            <ul>
                              {toShow
                                ? toShow?.map((results, index) => (
                                    <li
                                      onClick={() => {
                                        handleChange2('pinCode', results);
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
                          Pin Code<strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.search_image} img-fluid`}
                          src="/static/search-grey.svg"
                          alt="Search"
                        />
                      </div>
                    </div>

                    <div className={`${styles.form_group} ${styles.small_input} col-md-2 col-sm-4`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="state"
                        value={keyAddressData.state}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        State<strong className="text-danger">*</strong>
                      </label>
                    </div>

                    <div className={`${styles.form_group} ${styles.small_input} col-md-2 col-sm-4`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="city"
                        value={keyAddressData.city}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        City<strong className="text-danger">*</strong>
                      </label>
                    </div>

                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="email"
                        value={keyAddressData.email}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Email ID<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}>
                      <div className={`${styles.phone_card} d-flex pr-4`}>
                        <select
                          name="callingCode"
                          id="Code"
                          value={keyAddressData.contact.callingCode}
                          className={`${styles.code_phone} input border-right-0`}
                        >
                          <option>+91</option>
                          <option>+1</option>
                          <option>+92</option>
                          <option>+95</option>
                          <option>+24</option>
                        </select>
                        <input
                          className={`${styles.input_field} input border-left-0 form-control`}
                          required
                          type="number"
                          onWheel={(event) => event.currentTarget.blur()}
                          name="contact.number"
                          maxLength="10"
                          onKeyDown={(evt) => ['e', 'E', '+', '-', '.',"ArrowDown","ArrowUp"].includes(evt.key) && evt.preventDefault()}
                          value={keyAddressData.contact.number == null ? '' : keyAddressData.contact.number}
                          onChange={(e) => {
                            mobileFunction(e);
                          }}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                          Phone Number<strong className="text-danger">*</strong>
                        </label>
                        {/* <img className={`${styles.search_image} img-fluid`} src="/static/add.svg" alt="add" /> */}
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-8 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        type="text"
                        required
                        name="completeAddress"
                        value={keyAddressData.completeAddress}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Address<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        type="text"
                        name="branch"
                        required
                        value={keyAddressData.branch}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>Branch</label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="GSTIN"
                        value={keyAddressData.GSTIN}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>GSTIN</label>
                    </div>

                    <div
                      className={`${styles.btn_outer} d-flex flex-nowrap justify-center-center align-items-center col-md-4`}
                    >
                      <div className={`${styles.btn_container}`}>
                        {keyAddressData?.GSTIN_document?.name == undefined ? (
                          <button className={`${styles.gst_btn} d-flex align-items-center text-nowrap`}>
                            {' '}
                            <input
                              type="file"
                              name={keyAddressData.GSTIN}
                              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                              onChange={(e) => {
                                uploadDocument(e);
                              }}
                            />
                            <img className="mr-2 mb-1" src="/static/file_upload.svg" alt="file upload" />
                            GST Doc
                          </button>
                        ) : (
                          <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                            <span className="text-color">{keyAddressData?.GSTIN_document?.name}</span>
                            <img
                              className={`${styles.close_image} image_arrow`}
                              src="/static/close.svg"
                              onClick={() => removeDoc()}
                              alt="Close"
                            />{' '}
                          </div>
                        )}
                      </div>
                      <button className={`${styles.add_btn}`} onClick={() => handleClick()}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {showEditAddress ? (
              <div className={`${styles.main} ${styles.add_address} card shadow-none border_color`}>
                <div
                  className={`${styles.head_container} align-items-center card-header d-flex justify-content-between bg-transparent`}
                >
                  <h3 className={`${styles.heading} mb-0`}>Edit address</h3>
                  <img
                    onClick={() => {
                      setShowEditAddress(false);
                    }}
                    style={{ marginRight: '-15px' }}
                    src="/static/accordion_close_black.svg"
                  />
                </div>
                <div className={`${styles.dashboard_form} card-body border_color`}>
                  <div className="d-flex">
                    <div className={`${styles.sub_heading} heading_card`}>Communication Address</div>
                    <div className={styles.radio_form}>
                      {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Yes"
                            name="group1"
                            type={type}
                            checked={editData.communication == true}
                            onChange={(e) => {
                              changeData('communication', !editData.communication);
                            }}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="No"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            checked={editData.communication == false}
                            onChange={(e) => {
                              changeData('communication', false);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                          name="addressType"
                          defaultValue={editData.addressType}
                          onChange={(e) => {
                            changeData(e.target.name, e.target.value);
                          }}
                        >
                          <option value="Factory">Factory</option>
                          <option value="Warehouse">Warehouse</option>
                          <option value="Corporate Office">Corporate Office</option>
                        </select>
                        <label className={`${styles.label_heading} label_heading`}>
                          Address Type<strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                          name="pinCode"
                          value={editData.pinCode}
                          onChange={(e) => {
                            gettingPins(e.target.value);
                            changeData(e.target.name, e.target.value);
                          }}
                        />
                        {toShow.length > 0 && toView && (
                          <div className={styles.searchResults}>
                            <ul>
                              {toShow
                                ? toShow?.map((results, index) => (
                                    <li
                                      onClick={() => {
                                        changeData2('pinCode', results);
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
                          Pin Code<strong className="text-danger">*</strong>
                        </label>
                        <img
                          className={`${styles.search_image} img-fluid`}
                          src="/static/search-grey.svg"
                          alt="Search"
                        />
                      </div>
                    </div>

                    <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="state"
                        value={editData.state}
                        onChange={(e) => {
                          changeData(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        State<strong className="text-danger">*</strong>
                      </label>
                    </div>

                    <div className={`${styles.form_group} col-md-2 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="city"
                        value={editData.city}
                        onChange={(e) => {
                          changeData(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        City<strong className="text-danger">*</strong>
                      </label>
                    </div>

                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="email"
                        value={editData.email}
                        onChange={(e) => {
                          changeData(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Email ID<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <div className="d-flex">
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="tel"
                          defaultValue={editData.contact.number}
                          onBlur={(e) => {
                            if (phoneValidation(e.target.value)) {
                              changeData(e.target.name, e.target.value);
                            } else {
                              let toastMessage = 'Enter a valid Phone Number';
                              if (!toast.isActive(toastMessage.toUpperCase())) {
                                toast.error(toastMessage, {
                                  toastId: toastMessage,
                                });
                              }
                            }
                          }}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                          Phone Number<strong className="text-danger">*</strong>
                        </label>
                        {/* <img className={`${styles.search_image} img-fluid`} src="/static/add.svg" alt="add" /> */}
                      </div>
                    </div>
                    <div className={`${styles.form_group} col-md-8 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        type="text"
                        required
                        name="completeAddress"
                        defaultValue={editData.completeAddress}
                        onChange={(e) => {
                          changeData(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        Address<strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        type="text"
                        name="branch"
                        required
                        defaultValue={editData.branch}
                        onChange={(e) => {
                          changeData(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>Branch</label>
                    </div>
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <input
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="GSTIN"
                        defaultValue={editData.GSTIN}
                        onChange={(e) => {
                          changeData(e.target.name, e.target.value);
                        }}
                      />
                      <label className={`${styles.label_heading} label_heading`}>GSTIN</label>
                    </div>
                    <div
                      className={`${styles.btn_outer} d-flex flex-nowrap justify-center-center align-items-center col-md-4`}
                    >
                      <div className={`${styles.btn_container}`}>
                        <button className={`${styles.gst_btn} d-flex align-items-center text-nowrap`}>
                          {' '}
                          <input
                            type="file"
                            name={keyAddressData.GSTIN}
                            accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                            onChange={(e) => {
                              uploadDocument(e);
                            }}
                          />
                          <img className="img-fluid mr-2" src="/static/file_upload.svg" alt="file upload" />
                          GST Doc
                        </button>
                      </div>
                      <button
                        className={`${styles.add_btn}`}
                        onClick={() => {
                          updateKeyAddDataArr(editData, Index);
                          setShowEditAddress(false);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="d-flex justify-content-end">
              <div
                className={`${styles.add_row} pr-3 row`}
                onClick={() => {
                  setShowAddress(true);
                }}
              >
                <span>+</span>
                <div>Add More Rows</div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>

      <div className={`${styles.main} card border_color`}>
        <div
          className={`${styles.head_container} card-header align-items-center d-flex justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#debtProfile"
          aria-expanded="true"
          aria-controls="debtProfile"
        >
          <h3 className={`${styles.heading} mb-0`}>Debt Profile</h3>
          <span>+</span>
        </div>
        <div id="debtProfile" className="collapse" aria-labelledby="debtProfile" data-parent="#profileAccordion">
          <div className={`${styles.datatable}  card-body`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th>S.NO.</th>
                      <th>Primary Account</th>
                      <th>LENDER NAME</th>
                      <th>LIMIT TYPE</th>
                      <th>LIMIT</th>
                      <th>CONDUCT</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {debtData?.map((profile, index) => (
                      <tr key={index} className="table_credit shadow-none bg-transparent">
                        <td>{index + 1}</td>
                        <td className="d-flex justify-content-center align-items-end">
                          <input
                            name="primaryBank"
                            onChange={(e) => handleDebtChange(e.target.name, e.target.checked, index)}
                            className={`${styles.checkBox} `}
                            type="checkbox"
                            checked={profile?.primaryBank ? true : false}
                            disabled={!profile.actions}
                          />
                        </td>
                       
                        {
                          !profile.actions?
                          <>
                           <td>{profile.bankName}</td>
                          <td>{profile.limitType}</td>
                          <td>{ Number(profile?.limit)?.toLocaleString('en-In')}</td>
                          <td>{profile?.conduct}</td>
                          </>
                          :
                          <>
                           {profile.addnew == 'false' ? (
                          <td>
                            <div className='d-flex'>
                            <select
                              onChange={(e) => handleDebtChange(e.target.name, e.target.value, index)}
                              name="bankName"
                              className={`${styles.dropDown} ${styles.customSelect} heading input`}
                              disabled={!profile.actions}
                              value={profile.bankName}
                            >
                              <option value="" selected>
                                Select
                              </option>
                              {FilterUniqueBank().map((item) => (
                                <>
                                  <option value={item}>{item}</option>
                                </>
                              ))}
                              <option value="addnew">Add new</option>

                            </select>
                            <img
                    className={`${styles.select_arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
                          </td>
                        ) : (
                          <td>
                            <input
                              type="text"
                              className="input"
                              disabled={!profile.actions}
                              value={profile?.bankName == 'addnew' ? '' : profile?.bankName}
                              name="bankName"
                              placeholder="Add new"
                              onChange={(e) => {
                                handleDebtChange(e.target.name, e.target.value, index);
                              }}
                            />
                          </td>
                        )}
                            <td>
                              <div className='d-flex'>
                          <select
                            type="text"
                            className={`${styles.dropDown} ${styles.customSelect} heading input`}
                            disabled={!profile.actions}
                            value={profile.limitType}
                            
                            name="limitType"
                            onChange={(e) => {
                              handleDebtChange(e.target.name, e.target.value, index);
                            }}
                          >
                            <option value="">Select an option</option>
                            <option value="Cash Credit">Cash Credit</option>
                            <option value="LC Limits">LC Limits</option>
                            <option value="Term Loan">Term Loan</option>
                            <option value="Bank Guarantee">Bank Guarantee</option>
                            <option value="Buyers Credit">Buyers Credit</option>
                            <option value="Packing Credit">Packing Credit</option>
                            <option value="Post Ship Credit">Post Ship Credit</option>
                            
                          </select>
                          <img
                    className={`${styles.select_arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
                        </td>
                        <td>
                          <input
                            onFocus={(e) => {
                              setIsFieldInFocus({
                                ...isFieldInFocus,
                                limit: true,
                              }),
                                (e.target.type = 'number');
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus({
                                ...isFieldInFocus,
                                limit: false,
                              }),
                                (e.target.type = 'text');
                            }}
                               onWheel={(event) => event.currentTarget.blur()}
                            value={
                              profile?.actions
                                ? isFieldInFocus.limit
                                  ? profile?.limit
                                  : Number(profile?.limit)?.toLocaleString('en-In')
                                : Number(profile?.limit)?.toLocaleString('en-In')
                            }
                            className="input"
                            name="limit"
                            disabled={!profile.actions}
                            onChange={(e) => handleDebtChange(e.target.name, e.target.value, index)}
                          />
                        </td>

                        <td>
                          <div className='d-flex'>
                          <select
                            onChange={(e) => handleDebtChange(e.target.name, e.target.value, index)}
                            name="conduct"
                            className={`${styles.dropDown} ${styles.customSelect} heading input`}
                            value={profile?.conduct}
                            disabled={!profile.actions}
                          >
                            <option selected>Select</option>
                            <option value="Good">Good</option>
                            <option value="Satisfactory">Satisfactory</option>
                            <option value="Average">Average</option>
                            <option value="Poor">Poor</option>
                          </select>
                          <img
                    className={`${styles.select_arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
                        </td>
                          </>
                        }
                      
                        <td>
                          <div>
                            {!profile.actions ? (
                              <img
                                src="/static/mode_edit.svg"
                                className={`${styles.edit_image} mr-3`}
                                onClick={() => {
                                  setActions(index, true);
                                }}
                              />
                            ) : (
                              <img
                                src="/static/save-3.svg"
                                className={`${styles.edit_image} mr-3`}
                                alt="save"
                                onClick={(e) => {
                                  setActions(index, false);
                                }}
                              />
                            )}
                            <img
                              src="/static/delete 2.svg"
                              onClick={() => {
                                handleRemoveRow(index);
                              }}
                              className={`${styles.delete_image}`}
                              alt="delete"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={`${styles.add_row} d-flex justify-content-end`}>
              <div
                className={`d-flex justify-content-end`}
                onClick={(e) => {
                  addMoreDebtRows();
                }}
              >
                {' '}
                <span>+</span>
                <div>Add More Rows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
