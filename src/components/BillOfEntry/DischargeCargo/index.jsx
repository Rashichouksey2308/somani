import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Modal } from 'react-bootstrap';
import SaveBar from '../../SaveBar';
import UploadOther from '../../UploadOther';
import DateCalender from '../../DateCalender';
import _get from 'lodash/get';
import { GetAllCustomClearance, UpdateCustomClearance } from '../../../redux/CustomClearance&Warehousing/action';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';

export default function Index({ OrderId, customData, uploadDoc, componentId, setComponentId, setArrivalDate }) {
  const dispatch = useDispatch();
  const [sumOfDischargeQuantities, setSum] = useState('');
  useEffect(() => {
    if (customData) {
      let data = customData?.billOfEntry?.billOfEntry?.reduce(
        (previousValue, currentValue) => previousValue + Number(currentValue?.boeDetails?.invoiceQuantity),
        0,
      );

      if (isNaN(data) || data == 'NaN' || data == undefined) {
        setSum('');
      } else {
        setSum(data);
      }
    }
  }, [customData]);

  const [show, setShow] = useState(false);
  const [totalBl, setTotalBl] = useState(0);
  const [dateStartFrom, setDateStartFrom] = useState({
    dischargeStartDate: '',
    vesselDate: '',
  });
  const setStartDate = (val, name) => {
    var new_date = moment(new Date(val).toISOString()).add(1, 'days').format('DD-MM-YYYY');
    if (name == 'dischargeStartDate') {
      setDateStartFrom({ ...dateStartFrom, dischargeStartDate: new_date });
    } else {
      setDateStartFrom({ ...dateStartFrom, vesselDate: new_date });
    }
  };

  const [billOfEntryData, setBillOfEntryData] = useState({
    // boeAssessment: '',
    // pdBond: true,
    billOfEntryFor: '',
    // boeNumber: '',
    // boeDate: '',

    boeDetails: {
      invoiceQuantity: '',
      invoiceQuantityUnit: '',
    },
  });

  const [isFieldInFocus, setIsFieldInFocus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let shipmentTypeBulk = _get(customData, `order.vessel.vessels[0].shipmentType`, '').toLowerCase() === 'bulk';

  const [dischargeOfCargo, setDischargeOfCargo] = useState({
    dischargeOfCargo: {
      vesselName: _get(customData, 'dischargeOfCargo.dischargeOfCargo.vesselName', ''),
      portOfDischarge: _get(customData, 'order.portOfDischarge', ''),
      // dischargeQuantity: _get(
      //   customData,
      //   'dischargeOfCargo.dischargeOfCargo.dischargeQuantity',
      //   '',
      // ),
      dischargeQuantity: sumOfDischargeQuantities
        ? sumOfDischargeQuantities
        : _get(customData, 'dischargeOfCargo.dischargeOfCargo.dischargeQuantity', ''),
      numberOfContainers: _get(customData, 'order.vessel.vessels[0].shippingInformation.numberOfContainers', ''),
      vesselArrivaldate: '',
      dischargeStartDate: '',
      dischargeEndDate: '',
    },
    document1: null,
    document2: null,
  });

  useEffect(() => {
    if (customData) {
      let data = Number(_get(customData, 'order.transit.BL.billOfLanding[0].blQuantity', ''));
      setTotalBl(data);
    }
    if (customData?.dischargeOfCargo) {
      let data = _get(customData, 'dischargeOfCargo', {});

      let tempData = {
        dischargeOfCargo: {
          vesselName: data?.dischargeOfCargo?.vesselName,
          portOfDischarge: _get(customData, 'order.vessel.vessels[0].transitDetails.portOfDischarge', ''),
          dischargeQuantity: sumOfDischargeQuantities,

          vesselArrivaldate: data?.dischargeOfCargo?.vesselArrivaldate,
          dischargeStartDate: data?.dischargeOfCargo?.dischargeStartDate,
          dischargeEndDate: data?.dischargeOfCargo?.dischargeEndDate,
          numberOfContainers: customData?.dischargeOfCargo?.dischargeOfCargo?.numberOfContainers
            ? customData?.dischargeOfCargo?.dischargeOfCargo?.numberOfContainers
            : _get(customData, 'order.vessel.vessels[0].shippingInformation.numberOfContainers', ''),
        },
        document1: data?.document1 ?? null,
        document2: data?.document2 ?? null,
      };

      setDischargeOfCargo(tempData);
    }
  }, [customData]);

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    onChangeDischargeOfCargo(name, text);
    if ((name = 'vesselArrivaldate')) {
      setArrivalDate(value);
    }
  };
  const onChangeDischargeOfCargo = (name, text) => {
    let newData = { ...dischargeOfCargo };
    newData.dischargeOfCargo[name] = text;
    setDischargeOfCargo(newData);
  };

  const onSaveDocument = async (e) => {
    let name = e.target.name;
    let doc = await uploadDoc(e);

    let tempData = { ...dischargeOfCargo };
    tempData[name] = doc;
    setDischargeOfCargo(tempData);
  };

  const onRemoveDoc = (name) => {
    setDischargeOfCargo({ ...dischargeOfCargo, [name]: null });
  };

  const onSaveDischarge = () => {
    if (
      sumOfDischargeQuantities === '' ||
      sumOfDischargeQuantities === null ||
      sumOfDischargeQuantities === undefined
    ) {
      let toastMessage = 'DISCHARGE QUANTITY CANNOT BE EMPTY  ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (Number(sumOfDischargeQuantities) > Number(customData?.order?.quantity)) {
      let toastMessage = 'DISCHARGE QUANTITY CANNOT BE GREATER THAN ORDER QUANTITY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    if (_get(customData, `order.vessel.vessels[0].shipmentType`, '') == 'Liner') {
      if (
        dischargeOfCargo.dischargeOfCargo?.numberOfContainers == '' ||
        dischargeOfCargo.dischargeOfCargo?.numberOfContainers == undefined ||
        dischargeOfCargo.dischargeOfCargo?.numberOfContainers == null
      ) {
        let toastMessage = 'Number  OF containers  CANNOT BE EMPTY  ';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return;
      }
    }
    if (
      dischargeOfCargo.dischargeOfCargo.vesselArrivaldate === '' ||
      dischargeOfCargo.dischargeOfCargo.vesselArrivaldate === null ||
      dischargeOfCargo.dischargeOfCargo.vesselArrivaldate === undefined
    ) {
      let toastMessage = 'vessel Arrival date CANNOT BE EMPTY  ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      dischargeOfCargo.dischargeOfCargo.dischargeStartDate === '' ||
      dischargeOfCargo.dischargeOfCargo.dischargeStartDate === null ||
      dischargeOfCargo.dischargeOfCargo.dischargeStartDate === undefined
    ) {
      let toastMessage = 'discharge Start Date CANNOT BE EMPTY  ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (dischargeOfCargo.dischargeOfCargo.dischargeStartDate < dischargeOfCargo.dischargeOfCargo.vesselArrivaldate) {
      let toastMessage = 'discharge Start Date Cannot Be Before Vessel Arrival Date';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (dischargeOfCargo.dischargeOfCargo.dischargeEndDate < dischargeOfCargo.dischargeOfCargo.dischargeStartDate) {
      let toastMessage = 'discharge End Date Cannot Be Before Discharge Start Date ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (
      dischargeOfCargo.dischargeOfCargo.dischargeEndDate === '' ||
      dischargeOfCargo.dischargeOfCargo.dischargeEndDate === null ||
      dischargeOfCargo.dischargeOfCargo.dischargeEndDate === undefined
    ) {
      let toastMessage = 'discharge End Date CANNOT BE EMPTY  ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (dischargeOfCargo.document1 === null) {
      let toastMessage = 'Statement Of Facts must be uploaded';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    if (dischargeOfCargo.document2 === null) {
      let toastMessage = 'Draft Survey Report must be uploaded ';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }
    let fd = new FormData();
    fd.append('dischargeOfCargo', JSON.stringify(dischargeOfCargo));
    fd.append('customClearanceId', customData._id);
    fd.append('document1', dischargeOfCargo.document1);
    fd.append('document2', dischargeOfCargo.document2);

    let task = 'submit';
    dispatch(UpdateCustomClearance({ fd, task }));
    let id = sessionStorage.getItem('customId');
    dispatch(GetAllCustomClearance(`?customClearanceId=${id}`));
    setComponentId(componentId + 1);
  };

  const handleSave = () => {
    let fd = new FormData();
    fd.append('dischargeOfCargo', JSON.stringify(dischargeOfCargo));
    fd.append('customClearanceId', customData._id);
    fd.append('document1', dischargeOfCargo.document1);
    fd.append('document2', dischargeOfCargo.document2);

    let task = 'save';
    dispatch(UpdateCustomClearance({ fd, task }));
  };

  // fuction to prevent negative values in input
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (customData) {
      let total = 0;
      let data = customData?.order?.transit?.BL?.billOfLanding;
      if (data && data.length > 0) {
        for (let i = 0; i <= data.length - 1; i++) {
          total = total + Number(data[i].blQuantity);
        }
      }
      setTotalBl(total);
    }

    if (customData?.billOfEntry?.billOfEntry) {
      let data = _get(customData, 'billOfEntry.billOfEntry[0]', [{}]);
      let tempArray = {
        boeAssessment: data?.boeAssessment,
        pdBond: data?.pdBond,
        billOfEntryFor: _get(customData, 'order.termsheet.transactionDetails.billOfEntity', ''),
        // boeNumber: data?.boeNumber,
        // boeDate: data?.boeDate,

        boeDetails: {
          invoiceQuantity: data?.boeDetails?.invoiceQuantity,
          invoiceQuantityUnit: data?.boeDetails?.invoiceQuantityUnit,
        },
      };
      setBillOfEntryData(tempArray);
    }
  }, [customData]);

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Discharge of Cargo</h3>

              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <label className={`${styles.dropDown_label} text`}>Shipment Type</label>
                  <div className={`${styles.dropDown} ml-2 mr-3`}>{shipmentTypeBulk ? 'Bulk' : 'Liner'}</div>
                </div>
                <div className="d-flex align-items-center">
                  <button className={styles.add_btn} onClick={handleShow}>
                    Show BL Details
                  </button>
                  <span
                    className="ml-3"
                    data-toggle="collapse"
                    data-target="#dischargeCargo"
                    aria-expanded="true"
                    aria-controls="dischargeCargo"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div
              id="dischargeCargo"
              // className="collapse"
              aria-labelledby="dischargeCargo"
              data-parent="#dischargeCargo"
            >
              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  {shipmentTypeBulk ? (
                    <>
                      {' '}
                      <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                        <input
                          // value={billOfEntryData?.boeDetails?.invoiceQuantity}
                          className={`${styles.input_field} input form-control`}
                          type="text"
                          disabled
                          // onWheel={(event) => event.currentTarget.blur()}
                          // onFocus={(e) => {
                          //   setIsFieldInFocus(true), (e.target.type = 'number');
                          // }}
                          // onBlur={(e) => {
                          //   setIsFieldInFocus(false), (e.target.type = 'text');
                          // }}
                          // onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                          value={_get(customData, 'order.vessel.vessels[0].vesselInformation[0].name', '')}
                          name="vesselName"
                          // onChange={(e) => onChangeDischargeOfCargo(e.target.name, e.target.value)}
                          required
                          // onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                          Vessel Name
                          <strong className="text-danger">*</strong>
                        </label>
                      </div>{' '}
                    </>
                  ) : (
                    <>
                      {' '}
                      <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                        <div className="d-flex">
                          <select
                            onChange={(e) => onChangeDischargeOfCargo('vesselName', e.target.value)}
                            value={dischargeOfCargo?.dischargeOfCargo?.vesselName}
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option selected disabled>
                              Please select a vessel
                            </option>
                            {shipmentTypeBulk
                              ? _get(customData, 'order.vessel.vessels', []).map((vessel, index) => (
                                  <option value={vessel?.vesselInformation?.name} key={index}>
                                    {_get(vessel, 'vesselInformation[0].name', '')}
                                  </option>
                                ))
                              : _get(customData, 'order.vessel.vessels[0].vesselInformation', []).map(
                                  (vessel, index) => (
                                    <option value={vessel?.name} key={index}>
                                      {vessel?.name}
                                    </option>
                                  ),
                                )}
                          </select>
                          <label className={`${styles.label_heading} label_heading`}>
                            Vessel Name<strong className="text-danger">*</strong>
                          </label>
                          <img
                            className={`${styles.arrow} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>{' '}
                    </>
                  )}
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div
                      className={`${styles.label_heading} text`}
                      style={{ paddingTop: '30px', paddingBottom: '10px' }}
                    >
                      Port of Discharge
                    </div>
                    <span className={styles.value}>{dischargeOfCargo?.dischargeOfCargo?.portOfDischarge !== '' ? `${dischargeOfCargo?.dischargeOfCargo?.portOfDischarge}, India` : ''}</span>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                    <input
                      // value={billOfEntryData?.boeDetails?.invoiceQuantity}
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      disabled
                      onWheel={(event) => event.currentTarget.blur()}
                      onFocus={(e) => {
                        setIsFieldInFocus(true), (e.target.type = 'number');
                      }}
                      onBlur={(e) => {
                        setIsFieldInFocus(false), (e.target.type = 'text');
                      }}
                      onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                      value={
                        isFieldInFocus
                          ? sumOfDischargeQuantities
                          : sumOfDischargeQuantities == 0 ||
                            isNaN(sumOfDischargeQuantities) ||
                            sumOfDischargeQuantities == undefined ||
                            sumOfDischargeQuantities == ''
                          ? ''
                          : Number(sumOfDischargeQuantities)?.toLocaleString('en-IN') + ` MT`
                      }
                      name="dischargeQuantity"
                      onChange={(e) => onChangeDischargeOfCargo(e.target.name, e.target.value)}
                      required
                      // onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Discharge Quantity
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  {!shipmentTypeBulk && (
                    <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <input
                        name="numberOfContainers"
                        id="numberOfContainers"
                        // defaultChecked={
                        //   val?.shippingInformation?.numberOfContainers
                        // }
                        className={`${styles.input_field} input form-control`}
                        type="number"
                        onWheel={(event) => event.currentTarget.blur()}
                        value={dischargeOfCargo.dischargeOfCargo?.numberOfContainers}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        onChange={(e) => onChangeDischargeOfCargo(e.target.name, e.target.value)}
                        required
                      />
                      <label className={`${styles.label_heading} label_heading`}>
                        No. of Containers
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>
                  )}
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                    <div className="d-flex">
                      <DateCalender
                        defaultDate={dischargeOfCargo?.dischargeOfCargo?.vesselArrivaldate}
                        name="vesselArrivaldate"
                        saveDate={saveDate}
                        setStartDateFrom={setStartDate}
                        labelName="Vessel Arrival Date"
                      />
                      <img className={`${styles.calanderIcon} img-fluid`} src="/static/caldericon.svg" alt="Search" />
                    </div>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                    <div className="d-flex">
                      <DateCalender
                        defaultDate={dischargeOfCargo?.dischargeOfCargo?.dischargeStartDate}
                        name="dischargeStartDate"
                        saveDate={saveDate}
                        setStartDateFrom={setStartDate}
                        startFrom={dateStartFrom.vesselDate}
                        labelName="Discharge Start Date"
                      />
                      <img className={`${styles.calanderIcon} img-fluid`} src="/static/caldericon.svg" alt="Search" />
                    </div>
                  </div>
                  <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                    <div className="d-flex">
                      <DateCalender
                        defaultDate={dischargeOfCargo?.dischargeOfCargo?.dischargeEndDate}
                        name="dischargeEndDate"
                        saveDate={saveDate}
                        maxDate={dateStartFrom.dischargeStartDate}
                        startFrom={dateStartFrom.vesselDate}
                        labelName="Discharge End Date"
                      />
                      <img className={`${styles.calanderIcon} img-fluid`} src="/static/caldericon.svg" alt="Search" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.table_container} mt-0`}>
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
                          <th width="40%">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table_row">
                          <td className={styles.doc_name}>
                            Statement of Facts
                            <strong className="text-danger ml-1">*</strong>
                          </td>
                          <td>
                            <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                          </td>
                          <td className={styles.doc_row}>
                            {dischargeOfCargo.document1 === null
                              ? ''
                              : moment(dischargeOfCargo?.document1?.Date).format('DD-MM-YYYY, h:mm a')}
                          </td>
                          <td>
                            {dischargeOfCargo && dischargeOfCargo.document1 === null ? (
                              <>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    name="document1"
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => onSaveDocument(e)}
                                  />
                                  <button className={`${styles.button_upload} btn`}>Upload</button>
                                </div>
                              </>
                            ) : (
                              <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                <span>{dischargeOfCargo.document1?.originalName}</span>
                                <img
                                  onClick={() => onRemoveDoc('document1')}
                                  className={`${styles.close_image} image_arrow`}
                                  src="/static/close.svg"
                                  alt="Close"
                                />{' '}
                              </div>
                            )}
                          </td>
                        </tr>

                        <tr className="table_row">
                          <td className={styles.doc_name}>
                            Draft Survey Report
                            <strong className="text-danger ml-1">*</strong>
                          </td>
                          <td>
                            <img src="/static/pdf.svg" className={`${styles.pdfImage} img-fluid`} alt="Pdf" />
                          </td>
                          <td className={styles.doc_row}>
                            {dischargeOfCargo.document2 === null
                              ? ''
                              : moment(dischargeOfCargo?.document2?.Date).format('DD-MM-YYYY, h:mm a')}
                          </td>
                          <td>
                            {dischargeOfCargo && dischargeOfCargo.document2 === null ? (
                              <>
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    name="document2"
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={(e) => onSaveDocument(e)}
                                  />
                                  <button className={`${styles.button_upload} btn`}>Upload</button>
                                </div>
                                {/* <div className={styles.uploadBtnWrapper}>
                            <input
                              type="file"
                              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                              onChange={(e) => uploadDocument1(e)}
                              name="myfile"
                            />
                            <button  className={`${styles.uploadDoc} btn`}>
                              Upload
                            </button>
                            </div> */}
                              </>
                            ) : (
                              <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                <span>{dischargeOfCargo.document2?.originalName}</span>
                                <img
                                  onClick={() => onRemoveDoc('document2')}
                                  className={`${styles.close_image} image_arrow`}
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
            </div>
          </div>
          <div className="">
            <UploadOther isDocumentName={true} orderid={OrderId} module={['BOE', 'Discharge of Cargo']} />
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={onSaveDischarge} />
      </div>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`${styles.wrapper}`}
        backdropClassName={styles.backdrop}
      >
        <Modal.Header className={`${styles.head} background1`}>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`${styles.title}  d-flex justify-content-between align-items-center`}
          >
            <div className={`${styles.blue} ml-3`}>BL Details</div>
            <div className={`${styles.top}`}>
              <span className="text">Commodity: </span> {customData?.order?.commodity}{' '}
            </div>
            <img src="/static/close.svg" alt="close" onClick={handleClose} className="img-fluid mt-1 mr-2"></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.body} background1  container-fluid`}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table m-0`} cellPadding="0" cellSpacing="0" border="0">
                <tr className="table_row">
                  <th width="25%">BL NUMBER</th>
                  <th width="25%">BL DATE</th>
                  {!shipmentTypeBulk && <th width="25%">NO. OF CONTAINERS</th>}
                  <th width="25%">BL QUANTITY</th>
                </tr>
                {_get(customData, 'order.transit.BL.billOfLanding', [{}]).map((bl, indexbl) => (
                  <tr className="table_row " key={indexbl}>
                    <td className="font-weight-bold">{bl?.blNumber}</td>
                    <td>{bl?.blDate ? moment(bl?.blDate).format('DD-MM-YYYY') : ''}</td>
                    {!shipmentTypeBulk && (
                      <td>
                        {bl?.blQuantity ? Number(bl.containerDetails.numberOfContainers)?.toLocaleString('en-In') : ''}{' '}
                        {/* {customData?.order?.unitOfQuantity} */}
                      </td>
                    )}
                    <td>
                      {bl?.blQuantity ? Number(bl?.blQuantity)?.toLocaleString('en-In') : ''}{' '}
                      {customData?.order?.unitOfQuantity}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          <div className={`${styles.bottom}`}>
            <span className="text">Total Quantity: </span> &nbsp;{' '}
            {isNaN(totalBl) ? '' : totalBl?.toLocaleString('en-In')}{' '}
            {isNaN(totalBl) ? '' : customData?.order?.unitOfQuantity.toUpperCase()}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
