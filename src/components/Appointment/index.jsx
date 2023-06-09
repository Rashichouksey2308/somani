/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import SaveBar from '../SaveBar';
import DateCalender from '../DateCalender';
import 'react-datepicker/dist/react-datepicker.css';

import { UpdateInspection } from 'redux/Inspections/action';
import moment from 'moment';
import { toast } from 'react-toastify';
import { handleErrorToast } from '@/utils/helpers/global';
import { useDispatch, useSelector } from 'react-redux';
import {getPincodes } from '../../redux/masters/action';
export default function Index({ inspectionData, setDate, vendor,required ,setComponentId,componentId}) {
  const dispatch = useDispatch();
  const [lastDate, setlastDate] = useState(new Date());

  const [startDate, setStartDate] = useState(new Date());

  const [isEdit, setIsEdit] = useState(false);

  const [appointmentData, setAppointmentData] = useState();

  useEffect(() => {
    let add = [];
   
    let newAddress = [];
    let name = '';
    let address = '';
    let city = '';
    let state = '';
    let country = '';
    let gstin = '';
    let addressType = '';
    let pinCode=''
    
  
    if (vendor) {
    vendor?.forEach((item)=> {
      if(item?.vendorDetails?.vendor == 'Third Party Inspection'){
        name = item.vendorDetails?.companyName
        address = item?.keyAddresses[0]?.address,
        pinCode = item?.keyAddresses[0]?.pinCode,
        city= item?.keyAddresses[0]?.city,
        state= item?.keyAddresses[0]?.state,
        country= item?.keyAddresses[0]?.country,
        gstin= item?.keyAddresses[0]?.gstin
        addressType= item?.keyAddresses[0]?.addressType

      }
    })
    }

    setAppointmentData({
      name: inspectionData?.thirdPartyAppointment?.name || name,
      dateOfAppointment: inspectionData?.thirdPartyAppointment?.dateOfAppointment,
      address: {
        fullAddress: inspectionData?.thirdPartyAppointment?.address?.fullAddress || address,
        addressType: inspectionData?.thirdPartyAppointment?.address?.addressType ||addressType ,
        pinCode: inspectionData?.thirdPartyAppointment?.address?.pinCode || pinCode,
        country: inspectionData?.thirdPartyAppointment?.address?.country|| country || "India",
        state: inspectionData?.thirdPartyAppointment?.address?.state || state,
        gstin: inspectionData?.thirdPartyAppointment?.address?.gstin || gstin,
        city: inspectionData?.thirdPartyAppointment?.address?.city || city,
      },
    });
    setAddressData({
      name: inspectionData?.thirdPartyAppointment?.name || name,
      dateOfAppointment: inspectionData?.thirdPartyAppointment?.dateOfAppointment,
      address: {
        fullAddress: inspectionData?.thirdPartyAppointment?.address?.fullAddress || address,
        addressType: inspectionData?.thirdPartyAppointment?.address?.addressType || addressType ,
         pinCode: inspectionData?.thirdPartyAppointment?.address?.pinCode || pinCode,
        country: inspectionData?.thirdPartyAppointment?.address?.country || country || "India",
        state: inspectionData?.thirdPartyAppointment?.address?.state || state,
        gstin: inspectionData?.thirdPartyAppointment?.address?.gstin || gstin,
        city: inspectionData?.thirdPartyAppointment?.address?.city || city,
      },
    });
  }, [inspectionData, vendor]);

  const [addressData, setAddressData] = useState({
    name: '',
    dateOfAppointment: '',
    address: { fullAddress: '', addressType: '', pinCode: '', country: '' },
  });

  const saveAppointmentData = (name, value) => {
    let newInput = { ...appointmentData };
    newInput[name] = value;
    setAppointmentData(newInput);
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveAppointmentData(name, text);
  };

  const handleEdit = () => {
    setAddressData({
      name: appointmentData?.name,
      dateOfAppointment: appointmentData?.dateOfAppointment,
      address: {
        fullAddress: appointmentData?.address?.fullAddress,
        addressType: appointmentData?.address?.addressType,
        pinCode: appointmentData?.address?.pinCode,
        country: appointmentData?.address?.country,
      },
    });
    setIsEdit(true);
  };

  const handleEditInput = (name, value) => {
    const newInput = { ...addressData };
    const namesplit = name.split('.');
    namesplit.length > 1 ? (newInput[namesplit[0]][namesplit[1]] = value) : (newInput[name] = value);

    setAddressData({ ...newInput });
  };

  const handleEditCancel = () => {
    setIsEdit(false);
    setAddressData({
      ...addressData,
      address: { fullAddress: '', addressType: '', pinCode: '', country: '' },
    });
  };

  const handleOnAdd = () => {
    if (addressData.address.addressType === '' || addressData.address.addressType == undefined) {
      handleErrorToast('Please add address Type');
      return false;
    }
    if (addressData.address.fullAddress === '' || addressData.address.fullAddress == undefined) {
      handleErrorToast('Please add address');
      return false;
    }
    if (addressData.address.pinCode === '' || addressData.address.pinCode == undefined) {
      handleErrorToast('Please add pin code');
      return false;
    }
    if (addressData.address.country === '' || addressData.address.country == undefined) {
      handleErrorToast('Please add country');
      return false;
    }
    setAppointmentData(addressData);
    setIsEdit(false);
  };

  const validation = () => {
    if (appointmentData?.name == '' || appointmentData?.name == undefined) {
      handleErrorToast('name is mandatory');
      return false;
    } else if (appointmentData?.dateOfAppointment == '' || !appointmentData?.dateOfAppointment) {
      handleErrorToast('date is mandatory');
      return false;
    }
    return true;
  };

  const handleSave = () => {
    const fd = new FormData();
    fd.append('thirdPartyAppointment', JSON.stringify(appointmentData));
    fd.append('inspectionId', inspectionData?._id);

    let task = 'save';
    dispatch(UpdateInspection({ fd, task }));
  };

  const handleSubmit = () => {
    if (!validation()) return;

    const fd = new FormData();
    fd.append('thirdPartyAppointment', JSON.stringify(appointmentData));
    fd.append('inspectionId', inspectionData?._id);

    let task = 'submit';
    dispatch(UpdateInspection({ fd, task }));
     
    if(required){
     
       setComponentId(componentId + 1);
    }else{
      
       setComponentId(componentId + 2);
    }
  };
  const emptyData = () => {
    const temp = { ...appointmentData };
    temp.address.fullAddress = '';
    temp.address.addressType = '';
    temp.address.pinCode = '';
    temp.address.country = '';
    setAppointmentData({ ...temp });
   
  };
  const { getPincodesMasterData } = useSelector((state) => state.MastersData);
   const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
  useEffect(() => {

  if (getPincodesMasterData.length > 0) {
    setToShow(getPincodesMasterData);

  } else {

  setToShow([]);
  // setToView(false);
  }
  }, [getPincodesMasterData]);

  const gettingPins=(value)=>{
  dispatch(getPincodes(value));
  }
 const viewSet=()=>{
    
     setToView(true)
 }
  const handleData = (name, value) => {
   
    const newInput = { ...addressData };
    const namesplit = name.split('.');
    namesplit.length > 1 ? (newInput[namesplit[0]][namesplit[1]] = value.Pincode) : (newInput[name] = value.Pincode);
    // newInput[name] = value.Pincode;
    newInput.address.country = 'India';
    // newInput.city = value.City;
    // newInput.state = value.State;
    
    setAddressData({ ...newInput });
    setToView(false);
  };
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid p-0 background2`}>
        <div className={`${styles.vessel_card}`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} border_color align-items-center card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Appointment of Third Party</h3>
            </div>

            <div className={`${styles.dashboard_form} card-body`}>
              <div className="row">
                <div className={`${styles.form_group} col-lg-6 col-md-6 `}>
                  <div className="d-flex">
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="name"
                      value={appointmentData?.name}
                      onChange={(e) => saveAppointmentData(e.target.name, e.target.value)}
                      required
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Name<strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
                <div className={`${styles.form_group} col-lg-6 col-md-6 `}>
                  <div className="d-flex">
                    <DateCalender
                      name="dateOfAppointment"
                      defaultDate={
                        appointmentData?.dateOfAppointment ? moment(appointmentData?.dateOfAppointment).toDate() : null
                      }
                      dateFormat="dd-MM-yyyy"
                      saveDate={saveDate}
                      labelName="Date of Appointment"
                    />
                    <img
                      className={`${styles.calanderIcon} image_arrow img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div className={`${styles.form_group} col-12 `}>
                  <label className={`${styles.comment_heading} `}>Address</label>

                  <div
                    className={`${styles.comment_field} border_color bg-transparent  w-100 d-flex justify-content-between mt-2 form-control`}
                  >
                    <div className="m-3">
                      <div className={`${styles.address_type}`}
                     
                      >{appointmentData?.address?.addressType} Office</div>
                      <div className={`${styles.address_detail} mt-3`}>
                        {appointmentData?.address?.fullAddress} 
                        {appointmentData?.address?.city},{" "}
                        {appointmentData?.address?.state},{" "}    
                        {appointmentData?.address?.pinCode},{' '}
                        {appointmentData?.address?.country}.
                        <br></br>
                        GSTIN NO- {appointmentData?.address?.gstin}
                      </div>
                    </div>
                    <div>
                      <img
                        className={`${styles.edit_image} img-fluid mr-3`}
                        src="/static/mode_edit.svg"
                        alt="edit"
                        onClick={() => {
                          handleEdit();
                        }}
                      />
                      <img
                        onClick={() => {
                          emptyData();
                        }}
                        src="/static/delete.svg"
                        className={`${styles.delete_image} mr-3`}
                        alt="Bin"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {isEdit && editData(handleEditCancel, handleEditInput, handleOnAdd, appointmentData, addressData,gettingPins,viewSet,handleData,toShow,toView)}
            </div>
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={handleSubmit} />
      </div>
    </>
  );
}

const editData = (handleEditCancel, handleEditInput, handleOnAdd, appointmentData, addressData,gettingPins,viewSet,handleData,toShow,toView) => {
  return (
    <div className={`${styles.newAddressContainer} border_color mt-3`}>
      <div className={`${styles.newAddressHead} border_color`}>
        <span>Add a new address</span>
      </div>
      <div className={`${styles.newAddressContent} row`}>
        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
          <div className="d-flex">
            <select
              className={`${styles.input_field} ${styles.customSelect} input form-control`}
              name="address.addressType"
              value={addressData?.address?.addressType}
              onChange={(e) => {
                handleEditInput(e.target.name, e.target.value);
              }}
            >
              <option>Select an option</option>
              <option value="Registered">Registered Office</option>
              <option value="Branch">Branch Office</option>
              <option value="Corporate">Corporate Office</option>
            </select>
            <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
              Address Type<strong className="text-danger">*</strong>
            </Form.Label>
            <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
          </div>
        </Form.Group>
        <Form.Group className={`${styles.form_group}  col-md-12 col-sm-6`}>
          <Form.Control
            className={`${styles.input_field} input form-control`}
            required
            type="text"
            name="address.fullAddress"
            defaultValue={addressData?.address?.fullAddress}
            onChange={(e) => {
              handleEditInput(e.target.name, e.target.value);
            }}
          />
          <Form.Label className={`${styles.label_heading} label_heading`}>
            Address<strong className="text-danger">*</strong>
          </Form.Label>
        </Form.Group>
        <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
          <Form.Control
            className={`${styles.input_field} input form-control`}
            required
            type="text"
            name="address.pinCode"
            value={addressData?.address?.pinCode}
            onChange={(e) => {
              gettingPins(e.target.value);
              viewSet();
              handleEditInput(e.target.name, e.target.value);
            }}
          />
             { toShow.length > 0 && toView && (
                  <div className={styles.searchResults}>
                    <ul>
                      {toShow
                        ? toShow?.map((results, index) => (
                            <li
                              onClick={() => handleData('address.pinCode', results)}
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
          <Form.Label className={`${styles.label_heading} label_heading`}>
            Pin Code<strong className="text-danger">*</strong>
          </Form.Label>
          <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
        </Form.Group>
        <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
          <Form.Control
            className={`${styles.input_field} input form-control`}
            required
            type="text"
            name="address.country"
            defaultValue={addressData?.address?.country}
            onChange={(e) => {
              handleEditInput(e.target.name, e.target.value);
            }}
          />
          <Form.Label className={`${styles.label_heading} label_heading`}>
            Country<strong className="text-danger">*</strong>
          </Form.Label>
          <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
        </Form.Group>
      </div>
      <div className="d-flex">
        <div onClick={() => handleOnAdd()} className={`${styles.add} d-flex justify-content-center align-items-center`}>
          <span>Update</span>
        </div>
        <div
          onClick={() => handleEditCancel()}
          className={`${styles.cancel} d-flex justify-content-center align-items-center`}
        >
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
};
