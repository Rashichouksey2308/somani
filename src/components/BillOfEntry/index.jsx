/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import SaveBar from '../SaveBar';
import UploadOther from '../UploadOther';
import DateCalender from '../DateCalender';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCustomClearance } from 'redux/CustomClearance&Warehousing/action';
import _get from 'lodash/get';
import { addPrefixOrSuffix, removePrefixOrSuffix } from 'utils/helper';
import { toast } from 'react-toastify';
import { checkNan } from '../../utils/helper';
import { previewDocument } from '../../redux/ViewDoc/action';
import { getInternalCompanies } from '../../../src/redux/masters/action';
// import { set } from 'lodash'
import { GetAllCustomClearance } from '../../redux/CustomClearance&Warehousing/action';
import { returnDocFormat, returnReadableNumber } from '@/utils/helpers/global';


export default function lIndex({ customData, OrderId, uploadDoc, setComponentId, componentId }) {
  const shipmentType= _get(customData, 'order.vessel.vessels[0].shipmentType', '');

  const dispatch = useDispatch();

  const [isFieldInFocus2, setIsFieldInFocus2] = useState({
    invoiceValue: false,
    invoiceQuantity: false,
    conversionRate: false,
  });
  const [bankNameOptions, setBankName] = useState([]);

  const { getInternalCompaniesMasterData } = useSelector((state) => state.MastersData);
  const [saveContactTable, setContactTable] = useState(false);
  const [totalBl, setTotalBl] = useState(0);
  const [isFieldInFocus, setIsFieldInFocus] = useState([]);
  const { customClearance } = useSelector((state) => state.Custom);
  const [bl, setbl] = useState([]);
  // useEffect(() => {
  //   if(customData){
  //     let temp=[]
  //     _get(customData, 'order.transit.BL.billOfLanding', []).forEach((val,index)=>{
  //       temp.push({
  //          check:false,
  //          blNumber:val.blNumber,
  //          blDate:val.blDate,
  //          blQuantity:val.blQuantity,
  //          blDoc:val.blDoc

  //       })
  //     })
  //     setbl([...temp])
  //   }
  // },[customData])

  useEffect(() => {
    let id = sessionStorage.getItem('customId');
    dispatch(GetAllCustomClearance(`?customClearanceId=${id}`));
  }, []);
  useEffect(() => {
    dispatch(getInternalCompanies());
  }, []);
  useEffect(() => {
    if (customData) {
      let check = '';
      if (
        _get(customData, 'order.termsheet.otherTermsAndConditions.buyer.bank') ==
        'Emergent Industrial Solutions Limited (EISL)'
      ) {
        check = 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED';
      } else if (
        _get(customData, 'order.termsheet.otherTermsAndConditions.buyer.bank') ==
        'Indo German International Private Limited (IGPL)'
      ) {
        check = 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED';
      }
      let filter = getInternalCompaniesMasterData.filter((val, index) => {
        if (val.Company_Name == check) {
          return val;
        }
      });
      
      setBankName(filter);
    }
  }, [getInternalCompaniesMasterData, customData]);
 
  const [billOfEntryData, setBillOfEntryData] = useState([
    {
      boeAssessment: '',
      pdBond: false,
      billOfEntryFor: customData?.order?.termsheet?.transactionDetails?.billOfEntity,
      boeNumber: '',
      boeDate: '',

      boeDetails: {
        invoiceQuantity: '',
        invoiceQuantityUnit: '',
        currency: 'INR',
        conversionRate: '',
        invoiceNumber: '',
        invoiceValue: '',
        invoiceValueCurrency: '',
        invoiceDate: '',
        boeRate: '',
        bankName: '',
        accessibleValue: 0,
        adCode: '',
      },
      duty: [
        {
          duty: '',
          amount: '',
        },
      ],
      bl: [],

      document1: null,
      document2: null,
      document3: null,
      document4: null,
    },
  ]);
 
  const totalCustomDuty = (index) => {
    let number = 0;
    dutyData[index]?.forEach((val) => {
      number += Number(val.amount);
    });

    if (number) {
      return number;
    }
  };

  const uploadDoc1 = async (e, index) => {
    let name = e.target.name;
    let docs = await uploadDoc(e);
  
    let newInput = [...billOfEntryData];
    newInput[index][name] = docs;
    setBillOfEntryData([...newInput]);
  };

  const getDoc = (payload) => {
    dispatch(
      previewDocument({
        path: payload,
        order: _get(customData, 'order._id', ''),
        company: _get(customData, 'company._id', ''),
      }),
    );
  };

  const saveDate = (value, name, index) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveBillOfEntryData(name, text, index);
  };
  const saveBoeDetaiDate = (value, name, index) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveBillOfEntryData(name, text, index);
  };

  const saveBillOfEntryData = (name, value, index) => {
    const newInput = [...billOfEntryData];

    const namesplit = name.split('.');

    namesplit.length > 1 ? (newInput[index][namesplit[0]][namesplit[1]] = value) : (newInput[index][name] = value);

    let conversion = 0;

    if (name == 'boeDetails.invoiceValue') {
      conversion = checkNan(
        removePrefixOrSuffix(newInput[index]?.boeDetails?.invoiceValue) *
          removePrefixOrSuffix(newInput[index]?.boeDetails?.conversionRate),
      );
      newInput[index]['boeDetails']['accessibleValue'] = conversion;
    }

    setBillOfEntryData([...newInput]);
  };
  const conversionRateChange = (name, value, index) => {
    const newInput = [...billOfEntryData];
    newInput[index]['boeDetails']['conversionRate'] = value;

    let conversion = 0;
    if (name == 'boeDetails.conversionRate') {
      conversion = checkNan(
        removePrefixOrSuffix(newInput[index]?.boeDetails?.invoiceValue) *
          removePrefixOrSuffix(newInput[index]?.boeDetails?.conversionRate),
      );
    }
    newInput[index]['boeDetails']['accessibleValue'] = conversion;
    setBillOfEntryData([...newInput]);
  };

  const [pfCheckBox, setPfCheckBox] = useState(true);

  const handlePfCheckBox = (e, index) => {
    const newInput = [...billOfEntryData];
    newInput[index].pdBond = !newInput[index].pdBond;
    setBillOfEntryData([...newInput]);
    // setPfCheckBox(!pfCheckBox)
  };

  const [dutyData, setDutyData] = useState([]);

  const handleDutyChange = (name, value, index2, index) => {
    const newInput = [...dutyData];
    newInput[index][index2][name] = value;
    setDutyData([...newInput]);
  };

  const setActions = (index2, val, index) => {
    const newInput = [...dutyData];
    newInput[index][index2].actions = val;
    setDutyData([...newInput]);
  };
  const onFiledFocus = (index2, e, index) => {
    const newInput = [...dutyData];
    newInput[index][index2].value = true;

    setDutyData([...newInput]);
  };

  const onFiledBlur = (index2, e, index) => {
    const newInput = [...dutyData];
    newInput[index][index2].value = false;

    setDutyData([...newInput]);
  };

  const handleDeleteRow = (index2, index) => {
    const newInput = [...dutyData];
    let a = newInput[index];

    a.splice(index2, 1);

    setDutyData([...newInput]);
  };

  const removeDoc = (name, index) => {
    const newInput = [...billOfEntryData];
    newInput[index][name] = null;
    setBillOfEntryData([...newInput]);
  };

  const addMoredutyDataRows = (index) => {
    if (dutyData.length == 0) {
      setDutyData({
        percentage: '',
        duty: '',
        amount: '',
        action: false,
        value: false,
      });
      return;
    }
    const newInput = [...dutyData];
    newInput[index].push({
      percentage: '',
      duty: '',
      amount: '',
      action: false,
      value: false,
    });

    setDutyData([...newInput]);
  };

  const handleSubmit = async () => {
    let isOk = true;
    for (let i = 0; i < billOfEntryData.length; i++) {
      if (billOfEntryData[i].boeNumber === '') {
        let toastMessage = 'BOE NUMBER CANNOT BE EMPTY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].boeDate === null || billOfEntryData[i].boeDate === '') {
        let toastMessage = 'BOE DATE CANNOT BE EMPTY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].boeDetails.currency === '') {
        let toastMessage = 'CURRENCY CANNOT BE EMPTY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].boeDetails.invoiceNumber === '') {
        let toastMessage = 'INVOICE NUMBER CANNOT BE EMPTY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].boeDetails.invoiceDate === '') {
        let toastMessage = 'INVOICE DATE CANNOT BE EMPTY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].boeDetails.invoiceQuantity === '') {
        let toastMessage = 'INVOICE QUANTITY CANNOT BE EMPTY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].boeDetails.invoiceValue === '') {
        let toastMessage = 'INVOICE VALUE CANNOT BE EMPTY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].boeDetails.conversionRate === '') {
        let toastMessage = 'COVERSION RATE CANNOT BE EMPTY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].boeDetails.invoiceQuantity > customData?.order?.quantity) {
        let toastMessage = 'INVOICE QUANTITY SHOULD NOT BE MORE THAN ORDER QUANTITY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].document1 === null) {
        let toastMessage = `please upload Boe ${billOfEntryData.boeAssessment === 'Final' ? 'final' : 'provisional'}`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      } else if (billOfEntryData[i].document2 === null) {
        let toastMessage = 'please upload Duty Paid Challan ';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
 if (billOfEntryData[i].boeAssessment=="Final") {
        if (billOfEntryData[i].document3 === null) {
          let toastMessage = 'please upload BOE Final';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          isOk = false;
          break;
        }
      }
      if (billOfEntryData[i].pdBond) {
        if (billOfEntryData[i].document4 === null) {
          let toastMessage = 'please upload PD Bond ';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          isOk = false;
          break;
        }
      }
    }
    if (isOk == false) {
      return;
    }
    isOk = false;
    bl.forEach((val, index) => {
      val.forEach((bl, index2) => {
        if (bl.check == true) {
          isOk = true;
        }
      });
    });
    if (isOk == false) {
      let toastMessage = 'Pls select atleast one bl';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (isOk) {
      let tempData = [...billOfEntryData];
      for (let i = 0; i < tempData.length; i++) {
        tempData[i].boeDetails.conversionRate = removePrefixOrSuffix(billOfEntryData[i]?.boeDetails?.conversionRate);
        tempData[i].boeDetails.invoiceQuantity = removePrefixOrSuffix(billOfEntryData[i]?.boeDetails?.invoiceQuantity);
        tempData[i].boeDetails.invoiceValue = removePrefixOrSuffix(billOfEntryData[i]?.boeDetails?.invoiceValue);
        tempData[i].duty = dutyData[i];
        tempData[i].bl = bl[i];
      }

      const billOfEntry = { billOfEntry: tempData };

      const fd = new FormData();
      fd.append('customClearanceId', customData?._id);
      fd.append('billOfEntry', JSON.stringify(billOfEntry));

      let task = 'submit';

      await dispatch(UpdateCustomClearance({ fd, task }));
      let id = sessionStorage.getItem('customId');
      await dispatch(GetAllCustomClearance(`?customClearanceId=${id}`));
      setComponentId(componentId + 1);
    }
  };

  const handleSave = async () => {
    let tempData = [...billOfEntryData];
    for (let i = 0; i < tempData.length; i++) {
      tempData[i].boeDetails.conversionRate = removePrefixOrSuffix(billOfEntryData[i]?.boeDetails?.conversionRate);
      tempData[i].boeDetails.invoiceQuantity = removePrefixOrSuffix(billOfEntryData[i]?.boeDetails?.invoiceQuantity);
      tempData[i].boeDetails.invoiceValue = removePrefixOrSuffix(billOfEntryData[i]?.boeDetails?.invoiceValue);
      tempData[i].duty = dutyData[i];
      tempData[i].bl = bl[i];
    }
    const billOfEntry = { billOfEntry: tempData };
    const fd = new FormData();
    fd.append('customClearanceId', customData?._id);
    fd.append('billOfEntry', JSON.stringify(billOfEntry));

    let task = 'save';

    await dispatch(UpdateCustomClearance({ fd, task }));
  };

  // function to prevent negative values in input
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };
  let duty11 = [];
  let bltable = [];
  useEffect(() => {
    if (customData) {
      let total = 0;
      let data = customData?.order?.transit?.BL?.billOfLanding;
      if (data && data?.length > 0) {
        for (let i = 0; i <= data.length - 1; i++) {
          total = total + Number(data[i].blQuantity);
        }
      }
      setTotalBl(total);
    }

    if (customData?.billOfEntry?.billOfEntry) {
      let data = _get(customData, 'billOfEntry.billOfEntry', [{}]);
      let tempArray = [];

      data.forEach((val, index) => {
        tempArray.push({
          boeAssessment: val?.boeAssessment || "Provisional" ,
          pdBond: val?.pdBond || false,
          billOfEntryFor: val?.billOfEntryFor
            ? val?.billOfEntryFor
            : customData.order.termsheet.transactionDetails.billOfEntity,
          boeNumber: val?.boeNumber,
          boeDate: val?.boeDate,

          boeDetails: {
            invoiceQuantity: val?.boeDetails?.invoiceQuantity,
            invoiceQuantityUnit: val?.boeDetails?.invoiceQuantityUnit,
            currency: val?.boeDetails?.currency,
            conversionRate: val?.boeDetails?.conversionRate || '',
            invoiceNumber: val?.boeDetails?.invoiceNumber,
            invoiceValue: val?.boeDetails?.invoiceValue,
            invoiceValueCurrency: val?.boeDetails?.invoiceValueCurrency,
            invoiceDate: val?.boeDetails?.invoiceDate,
            boeRate: val?.boeDetails?.boeRate,
            bankName: val?.boeDetails?.bankName,
            accessibleValue: val?.boeDetails?.accessibleValue,
            adCode: val?.boeDetails?.adCode,
          },
          // duty: val.duty,

          document1: val?.document1 ?? null,
          document2: val?.document2 ?? null,
          document3: val?.document3 ?? null,
          document4: val?.document4 ?? null,
        });

        duty11.push(JSON.parse(JSON.stringify(val.duty)));
        bltable.push(JSON.parse(JSON.stringify(val.bl || [])));
      });

      setBillOfEntryData([...tempArray]);
    }

    if (duty11.length == 0) {
      setDutyData([
        [
          {
            percentage: '',
            duty: '',
            amount: '',
            action: false,
            value: false,
          },
        ],
      ]);
    } else {
      setDutyData([...duty11]);
    }

    if (bltable.length == 0) {
      let temp = [];
      _get(customData, 'order.transit.BL.billOfLanding', []).forEach((val, index) => {
        temp.push({
          check: false,
          blNumber: val.blNumber,
          blDate: val.blDate,
          blQuantity: val.blQuantity,
          blDoc: val.blDoc,
        });
      });
    
      setbl([[...temp]]);
    } else {
      setbl([...bltable]);
    }
  }, [customData]);

  const getIndex = (index) => {
    return index + 1;
  };

  const addNewRow = () => {
    setBillOfEntryData([
      ...billOfEntryData,
      {
        boeAssessment: '',
        pdBond: false,
        billOfEntryFor: customData?.order?.termsheet?.transactionDetails?.billOfEntity ?? '',
        boeNumber: '',
        boeDate: '',

        boeDetails: {
          invoiceQuantity: '',
          invoiceQuantityUnit: '',
          currency: 'INR',
          conversionRate: '',
          invoiceNumber: '',
          invoiceValue: '',
          invoiceValueCurrency: '',
          invoiceDate: '',
          boeRate: '',
          bankName: '',
          accessibleValue: 0,
          adCode: '',
        },
        // duty: [
        //   {
        //     duty: dutyData?.duty,
        //     amount: dutyData?.amount,
        //   },
        // ],

        document1: null,
        document2: null,
        document3: null,
        document4: null,
      },
    ]);

    setDutyData([
      ...dutyData,
      [
        {
          percentage: '',
          duty: '',
          amount: '',
          action: false,
          value: false,
        },
      ],
    ]);
    let temp = [];
    _get(customData, 'order.transit.BL.billOfLanding', []).forEach((val, index) => {
      temp.push({
        check: false,
        blNumber: val.blNumber,
        blDate: val.blDate,
        blQuantity: val.blQuantity,
        blDoc: val.blDoc,
      });
    });
    setbl([...bl, [...temp]]);
  };

  const deleteNewRow = (index) => {
    setBillOfEntryData([...billOfEntryData.slice(0, index), ...billOfEntryData.slice(index + 1)]);
    setDutyData([...dutyData.slice(0, index), ...dutyData.slice(index + 1)]);
    setbl([...bl.slice(0, index), ...bl.slice(index + 1)]);
  };

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.wrapper} border_color p-2 card`}>
            <div className="d-lg-flex align-items-center d-inline-block  pl-4">
              <h2 className="mb-0">Shipment Type</h2>
              <div className={`${styles.radio_form} ml-lg-5 ml-n4 d-flex align-items-center`}>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Bulk"
                      checked={shipmentType === 'Bulk'}
                      disabled={shipmentType !== 'Bulk'}
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Liner"
                      disabled={shipmentType !== 'Liner'}
                      checked={shipmentType === 'Liner'}
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {billOfEntryData &&
            billOfEntryData?.length > 0 &&
            billOfEntryData?.map((val, index) => {
              return (
                <>
                  <div className={`${styles.main} vessel_card card border_color`}>
                    <div
                      className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                    >
                      <h3 className={`${styles.heading}`}>Bill of Entry</h3>

                      <div className={`d-flex `}>
                        <button
                          onClick={(e) => {
                            addNewRow();
                          }}
                          className={`${styles.add_btn} text-center mr-0`}
                          style={{ paddingBottom: '12px' }}
                        >
                          <span className={styles.add_sign}>+</span>Add
                        </button>
                        {index > 0 ? (
                          <button
                            onClick={() => deleteNewRow(index)}
                            className={`${styles.add_btn} border-danger text-danger`}
                          >
                            <img src="/static/delete.svg" className="ml-1 mt-n1" width={13} alt="delete" /> Delete
                          </button>
                        ) : null}
                      </div>
                    </div>
                    <div className={`${styles.dashboard_form} card-body`}>
                      <div className="row">
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.radio_form} p-0 mt-n3`}>
                            <div className={`${styles.label} text`}>BOE Assessment</div>
                            {['radio'].map((type) => (
                              <div key={`inline-${type}`} className={styles.radio_group}>
                                <Form.Check
                                  className={styles.radio}
                                  inline
                                  label="Provisional"
                                  checked={val.boeAssessment === 'Provisional'}
                                  onChange={() => {
                                    saveBillOfEntryData('boeAssessment', 'Provisional', index);
                                  }}
                                  // name="group1"
                                  type={type}
                                  id={`inline-${type}-1`}
                                />
                                <Form.Check
                                  className={styles.radio}
                                  inline
                                  label="Final"
                                  checked={val.boeAssessment === 'Final'}
                                  onChange={() => {
                                    saveBillOfEntryData('boeAssessment', 'Final', index);
                                  }}
                                  // name="group1"
                                  type={type}
                                  id={`inline-${type}-2`}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-6 col-md-6 col-sm-6  mt-4`}>
                          <div className={`${styles.label} text`}>PD Bond</div>
                          <div className={`${styles.theme} d-flex align-items-center`}>
                            <div className={`${styles.toggle_label} form-check-label mr-3`}>No</div>
                            <label className={`${styles.switch} mb-0`}>
                              <input
                                onChange={(e) => handlePfCheckBox(e, index)}
                                type="checkbox"
                                checked={val.pdBond ? 'checked' : ''}
                              />
                              <span className={`${styles.slider} ${styles.round}`}></span>
                            </label>
                            <div className={`${styles.toggle_label} form-check-label ml-3`}>Yes</div>
                          </div>
                        </div>

                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className="d-flex">
                            <select
                              name="billOfEntryFor"
                              onChange={(e) => saveBillOfEntryData(e.target.name, e.target.value, index)}
                              value={val?.billOfEntryFor}
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option disabled selected>
                                Select an option
                              </option>
                              <option value="Home Consumption">Home Consumption</option>
                              <option value="Into-Bond">Into-Bond</option>
                              <option value="EX-Bond">EX-Bond</option>
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>Bill of Entry for</label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="number"
                            onWheel={(event) => event.currentTarget.blur()}
                            name="boeNumber"
                            required
                            value={val?.boeNumber}
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                            onChange={(e) => saveBillOfEntryData(e.target.name, e.target.value, index)}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            BOE Number<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className="d-flex">
                            <DateCalender
                              defaultDate={val.boeDate}
                              name="boeDate"
                              saveDate={saveDate}
                              labelName="BOE Date"
                              index={index}
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className={`${styles.line} m-0 border_color`}></hr>
                    <div className={`${styles.dashboard_form} card-body`}>
                      <h3 className={styles.form_heading}>BOE Details</h3>
                      <div className="row mb-5">
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text`}>
                            Commodity <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={styles.value}>{customData?.order?.commodity}</span>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text`}>
                            Quantity <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={styles.value}>
                            {_get(customData, 'order.transit.BL.billOfLanding[0].blQuantity', '')
                              ? Number(
                                  _get(customData, 'order.transit.BL.billOfLanding[0].blQuantity', ''),
                                )?.toLocaleString('en-IN', {
                                  maximumFractionDigits: 2,
                                })
                              : ''}{' '}
                            {customData?.order?.unitOfQuantity?.toUpperCase()}
                          </span>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text`}>
                            Vessel Name <strong className="text-danger ml-n1">*</strong>{' '}
                          </div>
                          <span className={styles.value}>
                            {_get(customData, 'order.vessel.vessels[0].vesselInformation[0].name', '')}
                          </span>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text`}>
                            Country of origin
                            <strong className="text-danger">*</strong>{' '}
                          </div>
                          <span className={styles.value}>
                            {_get(customData, 'order.vessel.vessels[0].transitDetails.countryOfOrigin', '')}
                          </span>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text`}>Port Of Discharge</div>
                          <span className={styles.value}>
                            {_get(customData, 'order.vessel.vessels[0].transitDetails.portOfDischarge', '') !== '' ? `${_get(customData, 'order.vessel.vessels[0].transitDetails.portOfDischarge', '')}, India` : '' }
                          </span>
                        </div>

                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text`}>
                            IGM Number<strong className="text-danger">*</strong>{' '}
                          </div>
                          <span className={styles.value}>
                            {_get(customData, 'order.transit.IGM.igmDetails[0].igmNumber', '')}
                          </span>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text`}>
                            IGM Filing Date
                            <strong className="text-danger">*</strong>{' '}
                          </div>
                          <span className={styles.value}>
                            {!_get(customData, 'order.transit.IGM.igmDetails[0].igmFiling', '') ||
                            _get(customData, 'order.transit.IGM.igmDetails[0].igmFiling', '') === ''
                              ? ''
                              : moment(_get(customData, 'order.transit.IGM.igmDetails[0].igmFiling', '')).format(
                                  'DD-MM-YYYY',
                                )}
                          </span>
                        </div>
                        {_get(customData, 'order.commodity', '').toLowerCase() === 'coal' ? (
                          <>
                            <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                              <div className={`${styles.label} text`}>CIRC Number</div>
                              <span className={styles.value}>
                                {_get(customData, 'order.transit.CIMS.cimsDetails[0].circNumber', '')}
                              </span>
                            </div>

                            <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                              <div className={`${styles.label} text`}>CIRC Date</div>
                              <span className={styles.value}>
                                {_get(customData, 'order.transit.CIMS.cimsDetails[0].circDate', '')
                                  ? moment(_get(customData, 'order.transit.CIMS.cimsDetails[0].circDate', '')).format(
                                      'DD-MM-YYYY',
                                    )
                                  : ''}
                              </span>
                            </div>
                          </>
                        ) : null}
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className="d-flex">
                            <select
                              name="boeDetails.currency"
                              onChange={(e) => saveBillOfEntryData(e.target.name, e.target.value, index)}
                              value={val?.boeDetails?.currency}
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option selected>Select an option</option>
                              <option value="INR">INR</option>
                              <option value="USD">USD</option>
                              <option value="EURO">EURO</option>
                              <option value="POUND">POUND</option>
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>Currency</label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <input
                            value={val?.boeDetails?.invoiceNumber}
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            name="boeDetails.invoiceNumber"
                            required
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                            onChange={(e) => saveBillOfEntryData(e.target.name, e.target.value, index)}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Invoice No.
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className="d-flex">
                            <DateCalender
                              defaultDate={val?.boeDetails?.invoiceDate}
                              name="boeDetails.invoiceDate"
                              saveDate={saveBoeDetaiDate}
                              labelName="Invoice Date"
                              index={index}
                              startFrom={"noLimit"}
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>

                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <input
                            // value={billOfEntryData?.boeDetails?.invoiceQuantity}
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            onFocus={(e) => {
                              setIsFieldInFocus2({
                                ...isFieldInFocus2,
                                invoiceQuantity: true,
                              }),
                                (e.target.type = 'number');
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus2({
                                ...isFieldInFocus2,
                                invoiceQuantity: false,
                              }),
                                (e.target.type = 'text');
                            }}
                            value={
                              isFieldInFocus2.invoiceQuantity
                                ? val?.boeDetails?.invoiceQuantity
                                : val?.boeDetails?.invoiceQuantity == 0
                                ? ''
                                : Number(val?.boeDetails?.invoiceQuantity)?.toLocaleString('en-IN') + ' ' + customData?.order?.unitOfQuantity.toUpperCase()
                            }
                            onWheel={(event) => event.currentTarget.blur()}
                            name="boeDetails.invoiceQuantity"
                            required
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                            onChange={(e) => saveBillOfEntryData(e.target.name, e.target.value, index)}
                            // required
                            // onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Invoice Quantity
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>

                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <input
                            // value={billOfEntryData?.boeDetails?.invoiceValue}
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            onFocus={(e) => {
                              setIsFieldInFocus2({
                                ...isFieldInFocus2,
                                invoiceValue: true,
                              }),
                                (e.target.type = 'number');
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus2({
                                ...isFieldInFocus2,
                                invoiceValue: false,
                              }),
                                (e.target.type = 'text');
                            }}
                            value={
                              isFieldInFocus2.invoiceValue
                                ? val?.boeDetails?.invoiceValue
                                : val?.boeDetails?.invoiceValue == 0
                                ? ''
                                : val?.boeDetails?.currency + ' ' + returnReadableNumber(val?.boeDetails?.invoiceValue,val?.boeDetails?.currency === 'INR' ? 'en-In': 'en-EN')
                            }
                            onWheel={(event) => event.currentTarget.blur()}
                            // value={addPrefixOrSuffix(
                            //   val?.boeDetails?.invoiceValue,
                            //   'USD',
                            //   'front',
                            // )}
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                            name="boeDetails.invoiceValue"
                            onChange={(e) => saveBillOfEntryData(e.target.name, e.target.value, index)}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Invoice Value
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            onFocus={(e) => {
                              setIsFieldInFocus2({
                                ...isFieldInFocus2,
                                conversionRate: true,
                              }),
                                (e.target.type = 'number');
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus2({
                                ...isFieldInFocus2,
                                conversionRate: false,
                              }),
                                (e.target.type = 'text');
                            }}
                            value={
                              isFieldInFocus2.conversionRate
                                ? val?.boeDetails?.conversionRate
                                : val?.boeDetails?.conversionRate == 0
                                ? ''
                                :    Number(val?.boeDetails?.conversionRate)?.toLocaleString('en-IN')
                            }
                            // value={

                            //    addPrefixOrSuffix(
                            //       val?.boeDetails?.conversionRate,
                            //       'INR',
                            //       'front',)

                            // }
                            onWheel={(event) => event.currentTarget.blur()}
                            required
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                            // required
                            // value={
                            //   billOfEntryData?.boeDetails?.conversionRate == 'INR 0'
                            //     ? ''
                            //     : addPrefixOrSuffix(
                            //       billOfEntryData?.boeDetails?.conversionRate,
                            //       'INR',
                            //       'front',
                            //     )
                            // }
                            name="boeDetails.conversionRate"
                            onChange={(e) => conversionRateChange(e.target.name, e.target.value, index)}
                          />

                          <label className={`${styles.label_heading} label_heading`}>
                            Custom Conversion Rate
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            name="boeDetails.accessibleValue"
                            disabled
                            required
                            value={
                              val?.boeDetails?.accessibleValue == 'INR 0'
                                ? ''
                                : `INR ${val?.boeDetails?.accessibleValue}`
                            }
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Assessable Value <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        {/* <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                     type="number"
                                        onWheel={(event) =>
                                          event.currentTarget.blur()
                                        }
                    required
                    name="boeDetails.boeRate"
                    onChange={(e) =>
                      saveBillOfEntryData(e.target.name, e.target.value)
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    BOE Rate<strong className="text-danger">*</strong>
                  </label>
                </div> */}
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className="d-flex">
                            <select
                              name="boeDetails.bankName"
                              onChange={(e) => {
                                let check = '';
                                if (
                                  _get(customData, 'order.termsheet.otherTermsAndConditions.buyer.bank') ==
                                  'Emergent Industrial Solutions Limited (EISL)'
                                ) {
                                  check = 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED';
                                } else if (
                                  _get(customData, 'order.termsheet.otherTermsAndConditions.buyer.bank') ==
                                  'Indo German International Private Limited (IGPL)'
                                ) {
                                  check = 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED';
                                }
                                let filter = getInternalCompaniesMasterData.filter((val, index) => {
                                  if (val.keyBanks.length > 0) {
                                    if (val.keyBanks[0].Bank_Name == e.target.value && val.Company_Name == check) {
                                      return val;
                                    }
                                  }
                                });
                                if (filter.length == 0) {
                                  return;
                                }

                                const newInput = [...billOfEntryData];

                                newInput[index].boeDetails.bankName = filter[0].keyBanks[0].Bank_Name;
                                newInput[index].boeDetails.adCode = filter[0].keyBanks[0].AD_Code || '';

                                setBillOfEntryData([...newInput]);
                              }}
                              value={val?.boeDetails?.bankName}
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option>Select Bank</option>
                              {bankNameOptions
                                .filter((val, index) => {
                                  if (val.keyBanks[0].Bank_Name) {
                                    return val;
                                  }
                                })
                                .map((val, index) => {
                                  return (
                                    <option value={`${val.keyBanks[0].Bank_Name}`}>{val.keyBanks[0].Bank_Name}</option>
                                  );
                                })}
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>Bank Name</label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text`}>
                            AD Code<strong className="text-danger">*</strong>{' '}
                          </div>
                          <span className={styles.value}>{val?.boeDetails?.adCode}</span>
                        </div>
                      </div>

                      <div className={`${styles.bill_landing} card border_color mt-4`}>
                        <div className={`${styles.vessel_card} d-flex align-items-center`}>
                          <div className={`${styles.card_sub_heading}`}>Duty</div>
                        </div>
                        <div className={styles.table_scroll_outer}>
                          <div className={styles.table_scroll_inner}>
                            <table
                              className={`${styles.table} border_color table`}
                              cellPadding="0"
                              cellSpacing="0"
                              border="0"
                            >
                              <thead>
                                <tr>
                                  <th>S.NO.</th>
                                  <th>DUTY</th>
                                  <th>AMOUNT</th>
                                  <th>PERCENTAGE</th>
                                  <th>ACTION</th>
                                </tr>
                              </thead>
                              <tbody>
                                {dutyData[index]?.length > 0 &&
                                  dutyData[index].map((duty, index2) => (
                                    <tr key={index2} className="table_row">
                                      {!duty.actions ? (
                                        <>
                                          <td className={styles.doc_name}>{getIndex(index2)}</td>
                                          <td>{duty.duty}</td>
                                          <td>
                                            {duty.amount
                                              ? `${'INR'} ${Number(duty.amount)?.toLocaleString('en-IN')}  `
                                              : ''}
                                          </td>
                                          <td>
                                            {duty.percentage ? `${Number(duty?.percentage)?.toFixed()} ${'%'}` : ''}
                                          </td>
                                        </>
                                      ) : (
                                        <>
                                          {' '}
                                          <td className={styles.doc_name}>{getIndex(index2)}</td>
                                          <td>
                                            <select
                                              name="duty"
                                              value={duty.duty}
                                              onChange={(e) =>
                                                handleDutyChange(e.target.name, e.target.value, index2, index)
                                              }
                                              disabled={!duty.actions}
                                              className={`${styles.dutyDropdown} input`}
                                            >
                                              <option>Select an option</option>

                                              <option value="BCD">BCD</option>
                                              <option value="IGST">ACD</option>
                                              <option value="BCD">SWS</option>
                                              <option value="IGST">SAD</option>
                                              <option value="BCD">IGST</option>
                                              <option value="IGST">G.CESS</option>
                                              <option value="BCD">ADD</option>
                                              <option value="IGST">CVD</option>
                                              <option value="BCD">SG</option>
                                              <option value="IGST">T.VALUE</option>
                                              <option value="BCD">SP EXD</option>
                                              <option value="IGST">CHCESS</option>
                                              <option value="BCD">TTA</option>
                                              <option value="IGST">CESS</option>
                                              <option value="BCD">CAIDC</option>
                                              <option value="IGST">EAIDC</option>
                                              <option value="BCD">CUS EDC</option>
                                              <option value="IGST">CUS HEC</option>
                                              <option value="BCD">NCD</option>
                                              <option value="IGST">AGGR</option>
                                              
                                            </select>
                                          </td>
                                          <td>
                                            <input
                                              onFocus={(e) => {
                                                onFiledFocus(index2, e, index);
                                                // setIsFieldInFocus(true),
                                                e.target.type = 'number';
                                              }}
                                              onBlur={(e) => {
                                                onFiledBlur(index2, e, index);
                                                // setIsFieldInFocus(false),
                                                e.target.type = 'text';
                                              }}
                                              type="text"
                                              className={`${styles.dutyDropdown} input`}
                                              name="amount"
                                              // value={val.amount}
                                              onWheel={(event) => event.currentTarget.blur()}
                                              value={
                                                duty.value
                                                  ? duty.amount
                                                  : `${'INR'}  ` + Number(duty.amount)?.toLocaleString('en-IN')
                                              }
                                              disabled={!duty.actions}
                                              onChange={(e) =>
                                                handleDutyChange(e.target.name, e.target.value, index2, index)
                                              }
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className={`${styles.dutyDropdown} input`}
                                              onWheel={(event) => event.currentTarget.blur()}
                                              onFocus={(e) => {
                                                onFiledFocus(index2, e, index);
                                                // setIsFieldInFocus(true),
                                                e.target.type = 'number';
                                              }}
                                              onBlur={(e) => {
                                                onFiledBlur(index2, e, index);
                                                // setIsFieldInFocus(false),
                                                e.target.type = 'text';
                                              }}
                                              type="text"
                                              value={
                                                duty.value
                                                  ? duty.percentage
                                                  : Number(duty.percentage).toFixed(2) + `${'%'}`
                                              }
                                              name="percentage"
                                              // value={val.percentage}
                                              onChange={(e) =>
                                                handleDutyChange(e.target.name, e.target.value, index2, index)
                                              }
                                            />
                                          </td>{' '}
                                        </>
                                      )}

                                      <td>
                                        <div>
                                          {!duty.actions ? (
                                            <img
                                              src="/static/mode_edit.svg"
                                              className={`${styles.edit_image} mr-3`}
                                              onClick={() => {
                                                setActions(index2, true, index);
                                              }}
                                            />
                                          ) : (
                                            <>
                                              <img
                                                src="/static/save-3.svg"
                                                className={`${styles.edit_image} mr-3`}
                                                alt="save"
                                                onClick={(e) => {
                                                  setActions(index2, false, index);
                                                }}
                                              />
                                            </>
                                          )}
                                          <img
                                            src="/static/delete 2.svg"
                                            className={`${styles.edit_image} p-0 border-0 img-fluid`}
                                            style={{ cursor: 'pointer' }}
                                            alt="delete"
                                            onClick={() => handleDeleteRow(index2, index)}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                            <hr className="mt-0" />
                            <div className="d-flex justify-content-between align-items-center mx-4 ">
                              <div className="d-flex align-items-center">
                                <div className={`${styles.label} text`}>Total Custom Duty:</div>
                                <div className={`${styles.value} ml-2 mt-4`}>
                                  INR {totalCustomDuty(index)?.toLocaleString('en-In')}
                                </div>
                              </div>
                              <div
                                className={`${styles.add_row} d-flex `}
                                onClick={(e) => {
                                  addMoredutyDataRows(index);
                                }}
                              >
                                <span>+</span>
                                <div>Add More Rows</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row ml-auto align-items-center">
                        {bl[index]?.length > 0 &&
                          bl[index].map((blData, indexbl) => {
                            return (
                              <>
                                {' '}
                                <div key={indexbl} className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                  <div className="d-flex align-items-center">
                                    <Form.Check
                                      inline
                                      checked={blData.check}
                                      onChange={(e) => {
                                        let temp = [...bl];
                                       
                                        temp[index][indexbl].check = !temp[index][indexbl].check;
                                        setbl([...temp]);
                                      }}
                                    />
                                    <div>
                                      <div className={`${styles.label} text ml-2`}>
                                        BL Number <strong className="text-danger ml-n1">*</strong>
                                      </div>
                                      <span className={`${styles.value} ml-2`}>{blData?.blNumber}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                  <div className={`${styles.label} text`}>
                                    BL Date <strong className="text-danger ml-n1">*</strong>{' '}
                                  </div>
                                  <span className={styles.value}>
                                    {blData?.blDate ? moment(blData?.blDate).format('DD-MM-YYYY') : ''}
                                  </span>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                  <div className={`${styles.label} text`}>
                                    BL Quantity <strong className="text-danger ml-n1">*</strong>{' '}
                                  </div>
                                  <span className={styles.value}>
                                    {blData?.blQuantity ? Number(blData?.blQuantity)?.toLocaleString('en-In') : ''}{' '}
                                    {customData?.order?.unitOfQuantity.toUpperCase()}
                                  </span>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-4 col-sm-6 text-center`}>
                                  <img
                                    src="/static/preview.svg"
                                    className={`${styles.previewImg} img-fluid ml-n4`}
                                    alt="Preview"
                                    onClick={(e) => {
                                      getDoc(blData?.blDoc?.path);
                                    }}
                                  />
                                </div>
                              </>
                            );
                          })}
                      </div>
                      <hr></hr>
                      <div className="text-right">
                        <div className={`${styles.total_quantity} text `}>
                          Total:{' '}
                          <span className="form-check-label ml-2">
                            {isNaN(totalBl) ? '' : totalBl?.toLocaleString('en-In')}{' '}
                            {isNaN(totalBl) ? '' : customData?.order?.unitOfQuantity.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.table_scroll_outer}>
                      <div className={styles.table_scroll_inner}>
                        <table
                          className={`${styles.table} border_color table`}
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
                          <thead>
                            <tr>
                              <th width="35%">
                                DOCUMENT NAME{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>
                                DOCUMENT DATE{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                          {(val.boeAssessment === 'Provisional' || (val.boeAssessment === 'Final' && _get(customData, `billOfEntry.billOfEntry[${index}].document1`, null))) &&
                              <tr className="table_row">
                              
                                <td className={styles.doc_name}>
                                  BOE Provisional
                                  <strong className="text-danger ml-1">*</strong>
                                </td>
                              
                              <td>
                              {val.document1 ? returnDocFormat(val.document1?.originalName) : null}
                              </td>
                              <td className={styles.doc_row}>
                                {val.document1 === null
                                  ? ''
                                  : moment(val?.document1?.date).format('DD-MM-YYYY, h:mm a')}
                              </td>

                              <td>
                                {val.document1 === null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="document1"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDoc1(e, index)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{val?.document1?.originalName}</span>
                                    <img
                                      onClick={() => removeDoc('document1',index)}
                                      className={`${styles.close_image} image_arrow`}
                                      src="/static/close.svg"
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>}
                          { val.boeAssessment === 'Final' &&
                                <tr className="table_row">
                              
                                <td className={styles.doc_name}>
                                  BOE Final
                                  <strong className="text-danger ml-1">*</strong>
                                </td>
                             
                              <td>
                                {val.document3 ? returnDocFormat(val.document3?.originalName) : null}
                              </td>
                              <td className={styles.doc_row}>
                                {val.document3 === null
                                  ? ''
                                  : moment(val?.document3?.date).format('DD-MM-YYYY, h:mm a')}
                              </td>

                              <td>
                                {val.document3 === null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="document3"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDoc1(e, index)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{val?.document3?.originalName}</span>
                                    <img
                                      onClick={() => removeDoc('document3',index)}
                                      className={`${styles.close_image} image_arrow`}
                                      src="/static/close.svg"
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                              }
                           
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Duty Paid Challan
                                <strong className="text-danger ml-1">*</strong>
                              </td>
                              <td>
                              {val.document2 ? returnDocFormat(val.document2?.originalName) : null}
                              </td>
                              <td className={styles.doc_row}>
                                {val.document2 === null
                                  ? ''
                                  : moment(val?.document2?.date).format('DD-MM-YYYY, h:mm a')}
                              </td>

                              <td>
                                {val?.document2 === null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="document2"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDoc1(e, index)}
                                      />
                                      <button className={`${styles.button_upload} btn`}>Upload</button>
                                    </div>
                                  </>
                                ) : (
                                  <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                    <span>{val?.document2?.originalName}</span>
                                    <img
                                      onClick={() => removeDoc('document2', index)}
                                      className={`${styles.close_image} image_arrow`}
                                      src="/static/close.svg"
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                            {val?.pdBond ? (
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  PD Bond
                                  <strong className="text-danger ml-0">*</strong>
                                </td>
                                <td>
                                  {val?.document4 ? returnDocFormat(val.document4?.originalName) : null}
                                </td>
                                <td className={styles.doc_row}>
                                  {val.document4 === null
                                    ? ''
                                    : moment(val.document4.date).format('DD-MM-YYYY, h:mm a')}
                                </td>
                                <td>
                                  {val.document4 === null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          type="file"
                                          name="document4"
                                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                          onChange={(e) => uploadDoc1(e, index)}
                                        />
                                        <button className={`${styles.button_upload} btn`}>Upload</button>
                                      </div>
                                    </>
                                  ) : (
                                    <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                      <span>{val?.document4?.originalName}</span>
                                      <img
                                        onClick={() => removeDoc('document4', index)}
                                        className={`${styles.close_image} image_arrow`}
                                        src="/static/close.svg"
                                        alt="Close"
                                      />{' '}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            ) : null}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          <div className="">
            <UploadOther orderid={OrderId}  module={['BOE','Discharge of Cargo']} isDocumentName={true} />
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={handleSubmit} />
      </div>
    </>
  );
}
