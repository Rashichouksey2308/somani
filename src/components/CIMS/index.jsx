import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import SaveBar from '../SaveBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import _get from 'lodash/get';
import { useDispatch } from 'react-redux';
import { UpdateTransitDetails } from '../../redux/TransitDetails/action';
import UploadOther from '../UploadOther';
import { toast } from 'react-toastify';
import moment from 'moment';
import { returnDocFormat } from '@/utils/helpers/global';
import { qpaPrint } from '@/templates/agreementTemplate';

export default function Index({ isShipmentTypeBULK, TransitDetails, vesselData, orderid, docUploadFunction,getUnqueBl }) {
  let transId = _get(TransitDetails, `data[0]`, '');
  let shipmentTypeBulk = _get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '') === 'Bulk';
  const [editInput, setEditInput] = useState(true);
  const [startBlDate, setBlDate] = useState(null);
  const [lastDate, setlastDate] = useState(new Date());
  const [cimsDetails, setCimsDetails] = useState([
    {
      vesselName: '',
      quantity: _get(TransitDetails, 'data.BL.billOfLanding[0].blQuantity', 0),
      circNumber: '',
      circDate: '',
      cimsCharges: _get(TransitDetails, 'data.BL.billOfLanding[0].blQuantity', 0),
      paymentBy: '',
      coalImportRegistrationDoc: null,
      cimsPaymentReceiptDoc: null,
    },
  ]);

  const [isFieldInFocus, setIsFieldInFocus] = useState(false);
  const [isFieldInFocusCMS, setIsFieldInFocusCMS] = useState(false);

  useEffect(() => {
    let data = _get(TransitDetails, 'data[0].CIMS.cimsDetails', []);
    let quan=  _get(TransitDetails, 'data.BL.billOfLanding[0].blQuantity', 0);
    let unit =  _get(TransitDetails, 'data[0].order.unitOfQuantity', '');
    let perOrderPrice=1
    if(unit=="KG"){
       quan = Number(quan)*0.001
       quan= quan*perOrderPrice
    }else{
      quan= Number(quan)*perOrderPrice
    }
    if(Number(quan)>100000){
      quan=100000
    }
    if (data.length > 0) {
      setCimsDetails(data);
    } else {
      setCimsDetails([
        {
          vesselName: '',
          quantity: _get(TransitDetails, 'data.BL.billOfLanding[0].blQuantity', 0),
          circNumber: '',
          circDate: '',
          cimsCharges:quan,
          paymentBy: _get(TransitDetails, 'data[0].order.marginMoney.invoiceDetail.importerName', ''),
          coalImportRegistrationDoc: null,
          cimsPaymentReceiptDoc: null,
        },
      ]);
    }
  }, [TransitDetails]);

  const dispatch = useDispatch();
  const onChangeVessel = (e, index) => {
    let VesselName = e.target.value;
    let filteredVessel = {};
   
    // _get(TransitDetails, `data[0].BL.billOfLanding`, [])
    //   .slice()
    //   .forEach((bl, index) => {
    //     if (bl.vesselName === VesselName) {
    //       filteredVessel = bl;
    //     }
    //   });
    
  let filteredBL =  _get(TransitDetails, `data[0].BL.billOfLanding`, []).filter((item)=> item.vesselName === VesselName)

  let data = filteredBL?.reduce(
    (previousValue, currentValue) => previousValue + Number(currentValue?.blQuantity),
    0,
  );

    let newArray = cimsDetails.slice();
    newArray[index].vesselName = _get(filteredBL, '[0].vesselName', '');
    newArray[index].quantity = filteredBL.length > 1 ?  data : _get(filteredBL, '[0].blQuantity', '')
    //  let quan=  Number(newArray[index].quantity)
    //  if(_get(TransitDetails, 'data[0].order.unitOfQuantity', '')=="KG"){
    //    quan = Number(quan)*0.001
    //    quan= quan*1
    //   }else{
    //     quan= Number(quan)*1
    //   }
    //   if(Number(quan)>100000){
    //               quan=100000
    //     }
    // newArray[index].cimsCharges=quan
    setCimsDetails(newArray.slice());
  };

  // const onChangeCims = (e, index) => {
  //   const name = e.target.id;
  //   let value = e.target.value;
  //   console.log(value,"cimsCharges")
  //    let quan=  Number(value)
  //    if(_get(TransitDetails, 'data[0].order.unitOfQuantity', '')=="KG"){
  //      quan = Number(quan)*0.001
  //      quan= quan*1
  //     }else{
  //       quan= Number(quan)*1
  //     }
  //   if(Number(quan)>100000){
  //             quan=100000
  //   }

  //   setCimsDetails((prevState) => {
  //     const newState = prevState.map((obj, i) => {
  //       if (i == index) {
  //         if(name=="quantity"){
            
  //      return {
  //           ...obj,
  //           [name]: value,
  //           cimsCharges:quan

  //         };
  //         }else{
  //            return {
  //           ...obj,
  //           [name]: value,
  //         };
  //         }
         
  //       }
  //       return obj;
  //     });
  //     return newState;
  //   });
  // };
  const onChangeCims = (e, index) => {
    const name = e.target.id;
    const value = e.target.value;
    setCimsDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
             return {
            ...obj,
            [name]: value,
          };
          
         
        }
        return obj;
      });
      return newState;
    });
  };
  const saveDate = (startDate, name, index) => {
    setCimsDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: startDate,
          };
        }
        return obj;
      });
      return newState;
    });
  };

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false);
    } else {
      setEditInput(true);
    }
  };
  const onAddHandler = () => {
    setCimsDetails([
      ...cimsDetails,
      {
        vesselName: '',
        quantity: '',
        circNumber: '',
        circDate: '',
        cimsCharges: '',
        paymentBy: _get(TransitDetails, 'data[0].order.marginMoney.invoiceDetail.importerName', ''),
        document1: null,
        document2: null,
      },
    ]);
  };

  const handleCloseDoc = (e, index) => {
    let tempArr = [...cimsDetails];

    tempArr[index][e] = null;
    setCimsDetails(tempArr);
  };
  const onDeleteClick = (index) => {
    setCimsDetails([...cimsDetails.slice(0, index), ...cimsDetails.slice(index + 1)]);
  };
  const uploadDoc = async (e, index) => {
    let id = e.target.id;
    let doc = await docUploadFunction(e);

    setCimsDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [id]: doc,
          };
        }
        return obj;
      });
      return newState;
    });
  };

  const validation = () => {
    let isOk = true;
    let toastMessage = '';

    for (let i = 0; i <= cimsDetails.length - 1; i++) {
      if (cimsDetails[i]?.vesselName == '' || cimsDetails[i]?.vesselName == undefined) {
        toastMessage = `Please select vessel name of CIMS NO   - ${i + 1}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (cimsDetails[i]?.quantity == '' || cimsDetails[i]?.quantity == undefined) {
        toastMessage = `Please  FILL quantity of CIMS NO   - ${i + 1}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (cimsDetails[i]?.circNumber == '' || cimsDetails[i]?.circNumber == undefined) {
        toastMessage = `PLEASE FILL THE CIRC NUMBER CIMS NO   - ${i + 1}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }

      if (cimsDetails[i]?.cimsCharges == '' || cimsDetails[i]?.cimsCharges == undefined) {
        toastMessage = `PLEASE FILL THE cims charges CIMS NO   - ${i + 1}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      
      if (Number(cimsDetails[i]?.cimsCharges) > 100000 ) {
        toastMessage = `CIMS CHARGES CANNOT BE GREATOR THAN 1 LAKH   - ${i + 1}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (cimsDetails[i]?.paymentBy == '' || cimsDetails[i]?.paymentBy == undefined) {
        toastMessage = `Please  SELECT A PAYMENT BY FOR CIMS NO   - ${i + 1}  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
      if (cimsDetails[i]?.coalImportRegistrationDoc == null || cimsDetails[i]?.coalImportRegistrationDoc == undefined) {
        toastMessage = `Please  UPLOAD A FILE FOR COAL IMPORT REGISTRATION    - ${i + 1} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          isOk = false;
          break;
        }
      }
    }
    return isOk;
  };

  const handleSubmit = () => {
    if (validation()) {
      const cims = { cimsDetails: cimsDetails };
      let idtrans = transId._id;

      let fd = new FormData();
      fd.append('cims', JSON.stringify(cims));
      fd.append('transitId', transId._id);

      let task = 'submit';

      dispatch(UpdateTransitDetails({ fd, task, idtrans }));
    }
  };

  const handleSave = () => {
    const cims = { cimsDetails: cimsDetails };

    let fd = new FormData();
    fd.append('cims', JSON.stringify(cims));
    fd.append('transitId', transId._id);

    let task = 'save';
    dispatch(UpdateTransitDetails({ fd, task }));
  };



  return (
    <>
      <div className={`${styles.backgroundMain} vessel_card container-fluid p-0`}>
        <div className={`${styles.vessel_card} border_color`}>
          {cimsDetails.map((list, index) => (
            <div key={index} className={`${styles.main} mb-4 border_color card `}>
              <div
                className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
              >
                <h3 className={`${styles.heading}`}>CIMS Details</h3>
                <div className="d-flex">
                  <button onClick={() => onAddHandler()} className={styles.add_btn}>
                    <span className={styles.add_sign}>+</span>Add
                  </button>
                  {index > 0 ? (
                    <button
                      onClick={() => onDeleteClick(index)}
                      className={`${styles.add_btn} mr-0 d-flex align-items-center justify-content-between border-danger text-danger`}
                    >
                      <img src="/static/delete.svg" width={15} alt="delete" /> Delete
                    </button>
                  ) : null}
                </div>
              </div>
              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <div className="d-flex">
                      {
                        <select
                          value={list.vesselName}
                          onChange={(e) => onChangeVessel(e, index)}
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option selected>Select an option</option>
                          {getUnqueBl().map((bl, index) => (
                            <option value={bl} key={index}>
                              {bl}
                            </option>
                          ))}
                        </select>
                      }
                      <label className={`${styles.label_heading} label_heading`}>
                        Vessel Name<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <input
                      id="quantity"
                      onFocus={(e) => {
                        setIsFieldInFocus(true), (e.target.type = 'number');
                      }}
                      onBlur={(e) => {
                        setIsFieldInFocus(false), (e.target.type = 'text');
                      }}
                      onWheel={(event) => event.currentTarget.blur()}
                      value={
                        isFieldInFocus
                          ? list.quantity
                          : Number(list.quantity)?.toLocaleString('en-IN') +
                            ` ${_get(TransitDetails, 'data[0].order.unitOfQuantity', '')}`
                      }
                      onChange={(e) => onChangeCims(e, index)}
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    />

                    <label className={`${styles.label_heading} label_heading`}>
                      BL Quantity<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <input
                      id="circNumber"
                      type="text"
                      onChange={(e) => onChangeCims(e, index)}
                      defaultValue={list.circNumber}
                      className={`${styles.input_field} input form-control`}
                      required
                      onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      CIRC Number<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <div className="d-flex">
                      {/* <DateCalender labelName="From" dateFormat={"dd-MM-yyyy"} saveDate={saveData} /> */}
                      <DatePicker
                        value={list?.circDate ? moment(list?.circDate).format('DD-MM-YYYY') : ''}
                        selected={startBlDate}
                        dateFormat="dd-MM-yyyy"
                        className={`${styles.input_field} ${styles.cursor} input form-control`}
                        onChange={(startBlDate) => {
                          setBlDate(startBlDate);
                          saveDate(startBlDate, 'circDate', index);
                        }}
                        minDate={lastDate}
                      />

                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                      <label className={`${styles.label_heading} label_heading`}>CIRC Date</label>
                    </div>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <input
                      id="cimsCharges"
                      onFocus={(e) => {
                        setIsFieldInFocusCMS(true), (e.target.type = 'number');
                      }}
                      onBlur={(e) => {
                        setIsFieldInFocusCMS(false), (e.target.type = 'text');
                      }}
                      onChange={(e) => onChangeCims(e, index)}
                      onWheel={(event) => event.currentTarget.blur()}
                      value={
                        isFieldInFocusCMS
                          ? list.cimsCharges
                          : `INR ` + Number(list.cimsCharges)?.toLocaleString('en-IN')
                      }
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      CIMS Charges<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <div className="d-flex">
                      <select
                        value={list.paymentBy}
                        id="paymentBy"
                        onChange={(e) => onChangeCims(e, index)}
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option value="" disabled defaultChecked>
                          Select an option
                        </option>
                        <option value={ _get(TransitDetails, 'data[0].order.marginMoney.invoiceDetail.importerName', '')}>
                          { _get(TransitDetails, 'data[0].order.marginMoney.invoiceDetail.importerName', '')}
                        </option>

                        <option value="Buyer">Buyer</option>
                      </select>
                      <label className={`${styles.label_heading} label_heading`}>
                        Payment by<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow}  image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.table_scroll_outer}>
                <div className={styles.table_scroll_inner}>
                  <table className={`${styles.table} table mb-0`} cellPadding="0" cellSpacing="0" border="0">
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
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          Coal Import Registration Certificate
                          <strong className="text-danger ml-0">*</strong>
                        </td>
                        <td>
                          {cimsDetails[index]?.coalImportRegistrationDoc
                            ? returnDocFormat(cimsDetails[index]?.coalImportRegistrationDoc?.originalName)
                            : null}
                        </td>
                        <td className={styles.doc_row}>
                          {cimsDetails[index]?.coalImportRegistrationDoc == null
                            ? ''
                            : moment(list?.coalImportRegistrationDoc?.Date).format(' DD-MM-YYYY , h:mm a')}
                        </td>
                        <td>
                          <div className={styles.uploadBtnWrapper}>
                            {cimsDetails && cimsDetails[index]?.coalImportRegistrationDoc == null ? (
                              <>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    id="coalImportRegistrationDoc"
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => uploadDoc(e, index)}
                                  />
                                  <button className={`${styles.upload_btn} btn`}>Upload</button>
                                </div>
                              </>
                            ) : (
                              <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                <span>{cimsDetails[index]?.coalImportRegistrationDoc?.originalName}</span>
                                <img
                                  className={`${styles.close_image} image_arrow mx-2`}
                                  src="/static/close.svg"
                                  onClick={(e) => handleCloseDoc('coalImportRegistrationDoc', index)}
                                  alt="Close"
                                />{' '}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>

                      <tr className="table_row">
                        <td className={styles.doc_name}>CIMS Payment Receipt</td>
                        <td>
                          {cimsDetails[index]?.cimsPaymentReceiptDoc
                            ? returnDocFormat(cimsDetails[index]?.cimsPaymentReceiptDoc?.originalName)
                            : null}
                        </td>
                        <td className={styles.doc_row}>
                          {' '}
                          {cimsDetails[index]?.cimsPaymentReceiptDoc == null
                            ? ''
                            : moment(list?.cimsPaymentReceiptDoc?.Date).format(' DD-MM-YYYY , h:mm a')}
                        </td>
                        <td>
                          <div className={styles.uploadBtnWrapper}>
                            {cimsDetails && cimsDetails[index]?.cimsPaymentReceiptDoc == null ? (
                              <>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    id="cimsPaymentReceiptDoc"
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => uploadDoc(e, index)}
                                  />
                                  <button className={`${styles.upload_btn} btn`}>Upload</button>
                                </div>
                              </>
                            ) : (
                              <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                <span>{cimsDetails[index]?.cimsPaymentReceiptDoc?.originalName}</span>
                                <img
                                  className={`${styles.close_image} image_arrow mx-2`}
                                  src="/static/close.svg"
                                  onClick={(e) => handleCloseDoc('cimsPaymentReceiptDoc', index)}
                                  alt="Close"
                                />{' '}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <UploadOther orderid={orderid}  module={['3rd Party Inspection','Plot Inspection',"Bill of Lading","Letter of Indemnity","BL Surrender","Forward Hedging","CIMS","IGM","Intercompany Invoicing"]  } />
          </div>
        </div>

        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={handleSubmit} />
      </div>
    </>
  );
}
