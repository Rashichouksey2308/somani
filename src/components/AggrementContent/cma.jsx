/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';

import {addressLists} from './addressList'
import {signatoryList} from './signatoryList'
import {addNewAddress} from './addNewAddress'
import { number } from 'prop-types';
import {  useSelector } from 'react-redux';
let cma = {
  name: 'Dr. Amin Controllers Private Limited',
  shortName: '',
  gstin: '27AAACA3912A2ZE',
  designatedStorageArea: '',
};

function Index(props) {
  console.log(  props.vendor.address,"props.data?.addresses")
   const { getPincodesMasterData } = useSelector((state) => state.MastersData);
  const [cmaState, setCmaState] = useState(cma);
  const [list, setList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [removedOption, setRemovedOption] = useState(null);
  const [removedArr, setRemovedArr] = useState([]);
  const [newAddress, setNewAddress] = useState({
    addressType: 'Registered',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });

  const [EditAddress, setEditAddress] = useState({
    addressType: '',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });
  const [options, setOptions] = useState([]);
  
  const [docList, setDocList] = useState([]);
  const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
  const [addressType, setAddressType] = useState('Registered');
  const [addressEditType, setAddressEditType] = useState('Registered');
  useEffect(() => {
    let tempArr = cmaState.authorisedSignatoryDetails;
    tempArr?.forEach((val, index) => {
      val.actions = 'true';
    });
    setList(tempArr);
    
  }, []);
 
 
  const cancelAddress = () => {
    setNewAddress({
      addressType: 'Registered',
      fullAddress: '',
      pinCode: '',
      country: '',
      gstin: '',
      state: '',
      city: '',
    });
    setAddressType('Registered');
    setToView(false)
  };
  const setdefualtAdd=(value)=>{
    let temp=[];
    if(value?.length>0){
   value.forEach((val,index)=>{
      temp.push({
      addressType: 'Registered',
      fullAddress: val.address,
      pinCode: val.pinCode,
      country: val.country,
      gstin: val.gstin,
      state: val.state,
      city: val.city
      })
    })
     console.log(temp,"temp")
     setAddressList([...temp])
    }
   
   
  }
  console.log(cmaState,"addressList")
  useEffect(() => {
    if (window) {
     

      if (sessionStorage.getItem('Cma')) {
        let savedData = JSON.parse(sessionStorage.getItem('Cma'));
        let cma = {
          name: savedData.name || props?.vendor?.name,
          shortName: savedData.shortName,
          gstin: savedData.gstin ||'',
          designatedStorageArea: `${savedData.designatedStorageArea}, India`,

          addresses: savedData.addresses,
          authorisedSignatoryDetails: savedData.authorisedSignatoryDetails,
        };
        setList(
          savedData.authorisedSignatoryDetails?.length > 0
            ? savedData.authorisedSignatoryDetails
            : [
                {
                  name: '',
                  designation: '',
                  email: '',
                  phone: '',
                  actions: 'false',
                  addnew: 'false',
                },
              ],
        );
        
          if(savedData?.addresses?.length==0){
           let temp=[];
       if(props.vendor.address?.length>0){
        props.vendor.address.forEach((val,index)=>{
            temp.push({
            addressType: 'Registered',
            fullAddress: val.address,
            pinCode: val.pinCode,
            country: val.country,
            gstin: val.gstin,
            state: val.state,
            city: val.city
            })
          })
          console.log(temp,"temp")
          setAddressList([...temp])
          }
        }else{
          setAddressList(savedData?.addresses)
        }
        setCmaState(cma);
        let tempArr = savedData?.authorisedSignatoryDetails;
          if(props?.vendor?.options?.length>0){
           let optionArray =  props?.vendor?.options
          tempArr.forEach((val, index) => {
            val.actions = 'true';
            if (tempArr?.length > 0) {
              let index = optionArray.indexOf(val.name);
              if (index > -1) {
                optionArray.splice(index, 1);
              }
            }
          });
        setOptions([...optionArray]);
         }
       
      } else {
        let cma = {
          name: props.data?.name || props?.vendor?.name,
          shortName: props.data?.shortName,
          gstin: props.data?.gstin ||'',
          designatedStorageArea:
          `${ props?.data?.designatedStorageArea}, India`||
          `${props.termsheet.transactionDetails.portOfDischarge}, India`,
          addresses: props.data?.addresses,
          authorisedSignatoryDetails: props?.data?.authorisedSignatoryDetails,
        };
        setList(
          props?.data?.authorisedSignatoryDetails.length > 0
            ? props?.data?.authorisedSignatoryDetails
            : [
                {
                  name: '',
                  designation: '',
                  email: '',
                  phone: '',
                  actions: 'false',
                  addnew: 'false',
                },
              ],
        );
       
        if(props.data?.addresses?.length==0){
           let temp=[];
       if(props.vendor.address?.length>0){
        props.vendor.address.forEach((val,index)=>{
            temp.push({
            addressType: 'Registered',
            fullAddress: val.address,
            pinCode: val.pinCode,
            country: val.country,
            gstin: val.gstin,
            state: val.state,
            city: val.city
            })
          })
          console.log(temp,"temp")
          setAddressList([...temp])
          }
            }else{
              setAddressList(props.data?.addresses)
            }
        
       
      
        
        setCmaState(cma);
     let tempArr = props.data?.authorisedSignatoryDetails;
        if(props?.vendor?.options?.length>0){
           let optionArray =  props?.vendor?.options
          tempArr.forEach((val, index) => {
            val.actions = 'true';
            if (tempArr?.length > 0) {
              let index = optionArray.indexOf(val.name);
              if (index > -1) {
                optionArray.splice(index, 1);
              }
            }
          });
        setOptions([...optionArray]);
         }
      }
    }
  }, [props]);
 console.log(options,"options")
  useEffect(() => {
    if (props.saveData == true && props.active == 'CMA') {
      let data = {
        cmaData: cmaState,
        list: list,
        addressList: addressList,
      };
      props.sendData('CMA', data);
    }
    if (props.submitData == true && props.active == 'CMA') {
      let data = {
        cmaData: cmaState,
        list: list,
        addressList: addressList,
      };

      props.updateData('CMA', data);
    }
  }, [props.saveData, props.submitData]);

  const onEdit = (index) => {
    let tempArr = list;
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
         
          return { ...obj, actions: 'false' };
        }
        // 👇️ otherwise return object as is
        return obj;
      });

      return newState;
    });
  };
  const onEditRemove = (index, value) => {
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, actions: 'true' };
        }

        return obj;
      });

      return newState;
    });
      let temp = [...options];
    var indexOption = temp.indexOf(value.name);

    if (indexOption !== -1) {
      temp.splice(indexOption, 1);
    }
     let removed=[...removedArr];
     removed.push(value.name)
    setRemovedArr([...removed])
    setOptions([...temp]);
  };
  const addMoreRows = () => {
    setList([
      ...list,
      {
        name: '',
        designation: '',
        email: '',
        phone: '',
        actions: 'false',
        addnew: 'false',
      },
    ]);
    setRemovedOption(null);
 
  };
  const handleRemove = (index, val) => {
   
  setList([...list.slice(0, index), ...list.slice(index + 1)]);
   if(options.length==0){
    let temp=[]
    props.vendor.signatory.forEach((master,index)=>{

       
        temp.push(master.name);
       
     
     })
     setOptions([...temp]);
     setRemovedArr([])
   }else{
     let temp = [...removedArr];
      var indexOption = temp.indexOf(val.name);
      if (indexOption !== -1) {
        temp.splice(indexOption, 1);
      }
        setRemovedArr([...temp])
   }

    // props.vendor.signatory.forEach((master,index)=>{
    //   if(val.name== master.name){
    //     let temp = [...options];
    //     temp.push(val.name);
    //     setOptions([...temp]);
    //   }
    //  })
  
  };
 console.log(options,"pppppp")
  const addDoc = (e, index) => {
    setDocList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, attachDoc: e };
        }

        return obj;
      });

      return newState;
    });
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (obj.document) {
          if ((obj.document = 'new')) {
            return { ...obj, document: e };
          }
        }

        return obj;
      });

      return newState;
    });
  };
 

  const handleInput = (name, value, key) => {
    const newInput = { ...cmaState };

    newInput[name] = value;
    setCmaState(newInput);
  };

  const handleChangeInput = (name, value, index) => {
    let arrayToSave = {
      name: '',
      designation: '',
      email: '',
      phoneNo: '',
      actions: 'false',
      addnew: 'false',
    };
    if (value == 'addnew') {
      arrayToSave = {
        name: '',
        designation: '',
        email: '',
        phoneNo: '',
        actions: 'false',
        addnew: 'true',
        document: 'new',
      };
      setDocList([...docList, { attachDoc: '', index: index }]);
    } else {
      props.vendor.signatory.forEach((val, index) => {
        if (val.name == value) {
          arrayToSave.name = val.name;
          arrayToSave.designation = val.designation||val.designation;
          arrayToSave.email = val.email ||val.emailId;
          arrayToSave.phoneNo = val.phoneNo ||isNaN(val.phoneNumber)==true ? Number(val.phoneNumber.replace(/\s/g, "")):val.phoneNumber?.trim();
        }
      });
    }
  
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return arrayToSave;
        }

        return obj;
      });

      return newState;
    });
  };
  console.log(list,"list")
  const handleChangeInput2 = (name2, value, index) => {
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, [name2]: value };
        }

        return obj;
      });

      return newState;
    });
  };
  //address
  const handleAddressInput = () => {
    if (props.addressValidation(addressType, newAddress)) {
      setAddressList((current) => [...current, newAddress]);

      setNewAddress({
        addressType: 'Registered',
        fullAddress: '',
        pinCode: '',
        country: '',
        gstin: '',
        state: '',
        city: '',
      });
      setAddressType('Registered');
    }
  };

  const onAddressRemove = (index) => {
    setAddressList([...addressList.slice(0, index), ...addressList.slice(index + 1)]);
  };
  const setAddress = (name, value) => {
    const newInput = { ...newAddress };
    newInput[name] = value;
    setNewAddress(newInput);
  };
  const [isEdit, setIsEdit] = useState(false);
  const [toEditIndex, setToEditIndex] = useState(0);
   const handleEditAddressInput = (index,addresstype) => {
    setIsEdit(true);
    setToEditIndex(index);
    let tempArr = addressList;
  
    setAddressEditType(addresstype)
    tempArr.forEach((val, i) => {
      if (i == index) {
        setEditAddress({
          addressType: addresstype,
          fullAddress: val.fullAddress,
          pinCode: val.pinCode,
          country: val.country,
          gstin: val.gstin,
          state: val.state,
          city: val.city,
        });
      }
    });
  };
  const editNewAddress = (name, value) => {
    setIsEdit(true);
    const newInput = { ...EditAddress };
    newInput[name] = value;
    setEditAddress(newInput);
  };
const cancelEditAddress = () => {
    setIsEdit(false);
    setEditAddress({
      addressType: '',
      fullAddress: '',
      pinCode: '',
      country: '',
      gstin: '',
      state: '',
      city: '',
    });
    setAddressType("Registered")
    setAddressEditType("Registered")
    setToView(false)
  };
  const saveNewAddress = () => {
    if (props.addressValidation(EditAddress.addressType, EditAddress)) {
      setAddressList((prevState) => {
        const newState = prevState.map((obj, i) => {
          if (i == toEditIndex) {
            return EditAddress;
          }
          // 👇️ otherwise return object as is
          return obj;
        });

        return newState;
      });
      setIsEdit(false);
      setEditAddress({
        addressType: '',
        fullAddress: '',
        pinCode: '',
        country: '',
        gstin: '',
        state: '',
        city: '',
      });
    }
  };
  useEffect(() => {
    
    if (getPincodesMasterData.length > 0) {
      setToShow(getPincodesMasterData);
      
    } else {
     
      setToShow([]);
      // setToView(false);
    }
  }, [getPincodesMasterData]);
 const viewSet=()=>{
    
     setToView(true)
 }
   const handleData = (name, value) => {
   
    const newInput = { ...newAddress };
    newInput[name] = value.Pincode;
    newInput.country = 'India';
    newInput.city = value.City;
    newInput.state = value.State;
    
    setNewAddress(newInput);
    setToView(false);
  };
   const handleDataEdit = (name, value) => {
    const newInput = { ...EditAddress };
    newInput[name] = value.Pincode;
    newInput.country = 'India';
    newInput.city = value.City;
    newInput.state = value.State;
    setEditAddress(newInput);
    setToView(false);
  };
  console.log(options.length,"sdasdasdasd",list.length)
  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0`}>
        <Form className={`${styles.form} border_color`}>
          <div className="row border_color ">
            <Form.Group className={`${styles.form_group} col-md-8 col-sm-6`}>
              <div className="d-flex">
                <select
                  name="name"
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  value={cmaState.name}
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value);
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="Dr. Amin Controllers Private Limited">Dr. Amin Controllers Private Limited</option>
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                  Name<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                value={cmaState.shortName}
                name="shortName"
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Short Name<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  value={cmaState.gstin}
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value);
                  }}
                  name="gstin"
                >
                  <option value="">Select an option</option>
                  {props?.vendor?.gstin?.length > 0 && props.vendor.gstin.filter((val,index)=>{
                    if(val!== undefined){
                      return val
                    }
                  }).map((val,index)=>{
                     return <option value={`${val}`}>{val}</option>
                  })}
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                  GSTIN<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </Form.Group>

            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                value={cmaState.designatedStorageArea}
                name="designatedStorageArea"
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Designated Storage Area
                <strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
          </div>
        </Form>
        <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
          <div className={`${styles.containerChild} d-flex justify-content-between flex-wrap  `}>
            {addressList?.map((val, index) => {
              return (
                 addressLists(val, index, handleEditAddressInput, onAddressRemove)
              );
            })}
          </div>
        </div>
        {isEdit &&
          editData(
            addressEditType,
            EditAddress,
            setEditAddress,
            editNewAddress,
            cancelEditAddress,
            saveNewAddress,
            setAddressEditType,
            props.vendor.gstin?props.vendor.gstin:[],
             toShow,
            toView,
            viewSet,
            props.gettingPins,
            handleDataEdit
          )}
        {isEdit == false && (
           addNewAddress(setAddressType,setAddress,addressType,handleAddressInput,cancelAddress,newAddress,props.gettingPins,handleData,toShow,toView,true,undefined,viewSet,"gst",
           props.vendor.gstin
           )
        )}
         {signatoryList(list,setRemovedOption,handleChangeInput,removedOption,options?.length>0?options:[],handleChangeInput2,onEditRemove,handleRemove,addMoreRows,onEdit,)}
      </div>
    </>
  );
}
const editData = (
  addressEditType,
  EditAddress,
  setEditAddress,
  editNewAddress,
  cancelEditAddress,
  saveNewAddress,
  setAddressEditType,
  gstin,
  toShow,
  toView,
  viewSet,
  gettingPins,
  handleData
) => {
  return (
    <div className={`${styles.newAddressContainer}`}>
      <div className={styles.newAddressHead}>
        <span className={`mb-3`}>Add Edit address</span>
      </div>
      <div className={`${styles.newAddressContent} row`}>
        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
          <div className="d-flex align-items-center">
            <select
              className={`${styles.input_field} ${styles.customSelect} input form-control`}
              name="addressType"
              value={EditAddress.addressType}
              onChange={(e) => {
                setAddressEditType(e.target.value);
                editNewAddress(e.target.name, e.target.value);
              }}
            >
              <option value="">Select an option</option>
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
        {addressEditType == 'Corporate' || addressEditType == 'Registered' ? (
          <>
            <Form.Group className={`${styles.form_group}  col-md-12 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="fullAddress"
                value={EditAddress.fullAddress}
                onChange={(e) => {
                  editNewAddress(e.target.name, e.target.value);
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
                type="number"
                onWheel={(event) => event.currentTarget.blur()}
                name="pinCode"
                value={EditAddress.pinCode}
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                onChange={(e) => {
                   gettingPins(e.target.value);
                    viewSet();
                  editNewAddress(e.target.name, e.target.value);
                }}
              />
                {toShow.length > 0 && toView && (
                        <div className={styles.searchResults}>
                          <ul>
                            {toShow
                              ? toShow?.map((results, index) => (
                                  <li
                                    onClick={() => handleData('pinCode', results)}
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
                value={EditAddress.country}
                name="country"
                onChange={(e) => {
                  editNewAddress(e.target.name, e.target.value);
                }}
                onKeyDown={(evt) =>
                  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(evt.key) && evt.preventDefault()
                }
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Country<strong className="text-danger">*</strong>
              </Form.Label>
              <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
            </Form.Group>
          </>
        ) : (
          <>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex align-items-center">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="gstin"
                  value={EditAddress.gstin}
                  onChange={(e) => {
                    editNewAddress(e.target.name, e.target.value);
                  }}
                >
                  {gstin.length > 0 && gstin.map((val,index)=>{
                          return <option value={`${val}`}>{val}</option>
                      })}
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                  GSTIN<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </Form.Group>
            <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="number"
                onWheel={(event) => event.currentTarget.blur()}
                name="pinCode"
                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                value={EditAddress.pinCode}
                onChange={(e) => {
                   gettingPins(e.target.value);
                    viewSet();
                  editNewAddress(e.target.name, e.target.value);
                }}
              />
                {toShow.length > 0 && toView && (
                        <div className={styles.searchResults}>
                          <ul>
                            {toShow
                              ? toShow?.map((results, index) => (
                                  <li
                                    onClick={() => handleData('pinCode', results)}
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
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="country"
                value={EditAddress.country}
                onChange={(e) => {
                  editNewAddress(e.target.name, e.target.value);
                }}
                onKeyDown={(evt) =>
                  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(evt.key) && evt.preventDefault()
                }
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Country <strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="state"
                value={EditAddress.state}
                onChange={(e) => {
                  editNewAddress(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                State<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="city"
                value={EditAddress.city}
                onChange={(e) => {
                  editNewAddress(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                City<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-12 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="fullAddress"
                value={EditAddress.fullAddress}
                onChange={(e) => {
                  editNewAddress(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Address<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
          </>
        )}
      </div>
      <div className="d-flex">
        <div
          className={`${styles.add} d-flex justify-content-center align-items-center`}
          onClick={() => {
            saveNewAddress();
          }}
        >
          <span>Update</span>
        </div>
        <div
          className={`${styles.cancel} d-flex justify-content-center align-items-center`}
          onClick={() => {
            cancelEditAddress();
          }}
        >
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
};
export default Index;

