import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import SaveBar from '../../SaveBar';
import DateCalender from '../../DateCalender';
import UploadOther from '../../UploadOther';
import _get from 'lodash/get';
import { GetAllCustomClearance, UpdateCustomClearance } from '../../../redux/CustomClearance&Warehousing/action';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useRouter } from 'next/router';
import { settingSidebar } from 'redux/breadcrumb/action';

export default function Index({ OrderId, customData, uploadDoc, arrivalDate }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [editInput, setEditInput] = useState(true);
  const [warehouseDetails, setWarehouseDetails] = useState({
    wareHouseDetails: {
      quantity: '',
      quantityUnit: '',
      dateOfStorage: null,
    },
    document: null,
  });
  useEffect(() => {
    let data = _get(customData, 'warehouseDetails', {});

    let tempData = {
      wareHouseDetails: {
        quantity: data?.wareHouseDetails?.quantity || customData?.dischargeOfCargo?.dischargeOfCargo?.dischargeQuantity,
        quantityUnit: '',
        dateOfStorage: data?.wareHouseDetails?.dateOfStorage,
      },
      document: data?.document || null,
    };
    setWarehouseDetails(tempData);
  }, [customData]);

  const [plotInspectionData, setPlotInspectionData] = useState('');
  const [isWarehouseQuantityInFocus, setIsWarehouseQuantityInFocus] = useState(false);

  const uploadDocument1 = (e) => {
    const newUploadDoc1 = { ...plotInspectionData };
    newUploadDoc1.plotInspectionReport = e.target.files[0];

    setPlotInspectionData(newUploadDoc1);
  };

  const handleClose = () => {
    // setPlotInspectionData((doc) => {
    //   return { ...doc, plotInspectionReport: null }
    // })
    setWarehouseDetails((prevState) => {
      return { ...prevState, document: null };
    });
  };

  const onChangeWarehouseDetails = (name, text) => {
    let newData = { ...warehouseDetails };
    newData.wareHouseDetails[name] = text;
    setWarehouseDetails(newData);
  };
  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    onChangeWarehouseDetails(name, text);
  };

  const onSaveDocument = async (e) => {
    let name = e.target.id;
    let doc = await uploadDoc(e);

    let tempData = { ...warehouseDetails };
    tempData[name] = doc;
    setWarehouseDetails({ ...tempData });
  };

  const onSaveDischarge = async () => {
    let warehouseDetailpayload = warehouseDetails.wareHouseDetails;
    if (warehouseDetailpayload.quantity === '' || warehouseDetailpayload.quantity === undefined|| warehouseDetailpayload.quantity === null) {
      let toastMessage = 'quantity CANNOT BE EMPTY  ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      } 
    }
    
    else if (warehouseDetailpayload.dateOfStorage === null || warehouseDetailpayload.dateOfStorage === ''||warehouseDetailpayload.dateOfStorage === undefined) {
      let toastMessage = 'DATE OF STORAGE  CANNOT BE EMPTY  ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
    } else {
      let fd = new FormData();
      fd.append('warehouseDetails', JSON.stringify(warehouseDetails));
      fd.append('customClearanceId', customData._id);
      fd.append('document', warehouseDetails.document);
      let task = 'submit';
      let code = await dispatch(UpdateCustomClearance({ fd, task }));
      let id = sessionStorage.getItem('customId');
      await dispatch(GetAllCustomClearance(`?customClearanceId=${id}`));
      if (code == 200) {
        sessionStorage.setItem('ROrderID', _get(customData, 'order.delivery', ''));
        sessionStorage.setItem('company', customData?.company?._id);
        dispatch(settingSidebar('Payments, Invoicing & Delivery', null, null, 5));
        router.push(`/payment/id`);
      }
    }
  };

  const handleSave = () => {
    let fd = new FormData();
    fd.append('warehouseDetails', JSON.stringify({ ...warehouseDetails }));
    fd.append('customClearanceId', customData._id);
    fd.append('document', warehouseDetails.document);

    let task = 'save';
    dispatch(UpdateCustomClearance({ fd, task }));
  };

  const handleDropdown = (e) => {
    if ((e.target.value = 'Others')) {
      setEditInput(!editInput);
    } else {
      setEditInput(editInput);
    }
  };

  // fuction to prevent negative values in input
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color vessel_card`}>
          <div className={`${styles.main} card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h3 className={`${styles.heading}`}>Warehouse Details</h3>
              <span className="ml-3">+</span>
            </div>
            <div
              id="lcApplication"
              // className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>
                      Commodity<strong className="text-danger">*</strong>
                    </div>
                    <span className={styles.value}>{_get(customData, 'order.commodity', '')}</span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>
                      CMA Name<strong className="text-danger">*</strong>
                    </div>
                    <span className={styles.value}>{_get(customData, 'order.generic.CMA.name', '')}</span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>Storage Address</div>
                    <span className={styles.value}>
                      {_get(customData, 'order.insurance.quotationRequest.storageDetails.storagePlotAddress', '')}{' '}
                    </span>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <input
                      // value={warehouseDetails?.wareHouseDetails?.quantity}
                      id="quantity"
                      onChange={(e) => onChangeWarehouseDetails(e.target.id, e.target.value)}
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      min={0}
                      required
                      onKeyPress={preventMinus}
                      onFocus={(e) => {
                        setIsWarehouseQuantityInFocus(true), (e.target.type = 'number');
                      }}
                      onBlur={(e) => {
                        setIsWarehouseQuantityInFocus(false), (e.target.type = 'text');
                      }}
                      onWheel={(event) => event.currentTarget.blur()}
                      value={
                        isWarehouseQuantityInFocus
                          ? warehouseDetails?.wareHouseDetails?.quantity
                          : warehouseDetails?.wareHouseDetails?.quantity == 0 ||
                            isNaN(warehouseDetails?.wareHouseDetails?.quantity) ||
                            warehouseDetails?.wareHouseDetails?.quantity == undefined ||
                            warehouseDetails?.wareHouseDetails?.quantity == ''
                          ? ''
                          : Number(warehouseDetails?.wareHouseDetails?.quantity)?.toLocaleString('en-IN') +
                            ` ${_get(customData, 'order.unitOfQuantity', '')}`
                      }
                      onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      BL Quantity<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                    <div className="d-flex">
                      <DateCalender
                        startFrom={
                          arrivalDate
                            ? moment(arrivalDate).format('DD-MM-YYYY')
                            : moment(customData?.dischargeOfCargo?.dischargeOfCargo?.vesselArrivaldate).format(
                                'DD-MM-YYYY',
                              ) ?? new Date()
                        }
                        defaultDate={warehouseDetails?.wareHouseDetails?.dateOfStorage}
                        name="dateOfStorage"
                        saveDate={saveDate}
                        labelName="Date of Storage"
                      />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>

                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 align-self-center`}>
                    {warehouseDetails?.document === null ? (
                      <div className="d-flex ">
                        <div className={styles.uploadBtnWrapper}>
                          <input
                            id="document"
                            onChange={(e) => {
                              onSaveDocument(e);
                            }}
                            type="file"
                            name="myfile"
                          />
                          <button className={`${styles.upload_btn} btn mr-3`}>Upload</button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`${styles.certificate} text1 mr-3 d-inline-flex align-items-center justify-content-between`}
                      >
                        <span>
                          {warehouseDetails?.document?.originalName.slice(
                            warehouseDetails?.document?.originalName.lastIndexOf('_') + 1,
                          )}
                        </span>
                        <img
                          className={`${styles.close_image} image_arrow ml-2`}
                          src="/static/close.svg"
                          onClick={() => handleClose()}
                          alt="Close"
                        />{' '}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <UploadOther orderid={OrderId} module={['BOE','Discharge of Cargo']  }  isDocumentName={true} />
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={onSaveDischarge} />
      </div>
    </>
  );
}
