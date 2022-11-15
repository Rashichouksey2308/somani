/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Col, Form } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import {editData} from './editContainer'
import {addressLists} from './addressList'
import {signatoryList} from './signatoryList'
import {addNewAddress} from './addNewAddress'


let supplier = {
  name: '',
  shortName: '',
  bankDetails: {
    bankName: '',
    accountNo: '',
    swiftCode: '',
    city: '',
  },
  addresses: [],
  authorisedSignatoryDetails: [],
  multiParty: true,
  multiPartyName: '',
  multiPartyAddresses: [],
};

function Index(props) {
  const dispatch = useDispatch();
  const { getPincodesMasterData } = useSelector((state) => state.MastersData);
  const [supplierState, setSupplierState] = useState(supplier);
  const [list, setList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [docList, setDocList] = useState([]);
  const [doc, setdoc] = useState({ attachDoc: '' });
  const [newAddress, setNewAddress] = useState({
    addressType: 'Registered',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });
  const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
  const [EditAddress, setEditAddress] = useState({
    addressType: '',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });
  const [removedOption, setRemovedOption] = useState(null);
  const [addressType, setAddressType] = useState('Registered');
  const [addressEditType, setAddressEditType] = useState('Registered');
  const [options, setOptions] = useState(['Bhawana Jain', 'Vipin Kumar', 'Devesh Jain', 'Fatima Yannoulis']);


  //multiParty
  const [multiList, setMultiList] = useState([]);
  const [newMultiAddress, setNewMultiAddress] = useState({
    addressType: 'Registered',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });
  const [MultiEditAddress, setMultiEditAddress] = useState({
    addressType: '',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });
  const [addressMutliType, setMultiAddressType] = useState('Registered');
 

  useEffect(() => {
    if (props.saveData == true && props.active == 'Supplier') {
      let data = {
        supplierState: supplierState,
        list: list,
        addressList: addressList,
        multiList: multiList,
      };
      props.sendData('Supplier', data);
    }
    if (props.submitData == true && props.active == 'Supplier') {
      let data = {
        supplierState: supplierState,
        list: list,
        addressList: addressList,
        multiList: multiList,
      };

      props.updateData('Supplier', data);
    }

    setSupplierState({ ...supplierState, multiParty: props.multiPart });
  }, [props.saveData, props.submitData]);
  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('Supplier')) {
        let savedData = JSON.parse(sessionStorage.getItem('Supplier'));
        let supplier = {
          name: savedData.name || props?.order?.supplierName,
          shortName: savedData.shortName,
          bankDetails: {
            bankName: savedData.bankDetails.bankName,
            accountNo: savedData.bankDetails.accountNo,
            swiftCode: savedData.bankDetails.swiftCode,
            city: savedData.bankDetails.city,
          },
          addresses: savedData.addresses,
          authorisedSignatoryDetails: savedData.authorisedSignatoryDetails,
          multiParty: savedData.multiParty,
          multiPartyName: savedData.multiPartyName,
          multiPartyAddresses: savedData.multiPartyAddresses,
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
        console.log(savedData.addresses,"savedData.addresses")
        setAddressList(savedData.addresses);
        setMultiList(savedData.multiPartyAddresses);
        setSupplierState(supplier);
        let tempArr = savedData?.authorisedSignatoryDetails;
        let optionArray = [...options];
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

      

        //  setList(props.data?.authorisedSignatoryDetails?props.data?.authorisedSignatoryDetails:[])
      
        setSupplierState(supplier);
      }else{
        
        let supplier = {
          name: props.data.name || props?.order?.supplierName,
          shortName: props.data.shortName,
          bankDetails: {
            bankName: props?.data?.bankDetails?.bankName,
            accountNo: props?.data?.bankDetails?.accountNo,
            swiftCode: props?.data?.bankDetails?.swiftCode,
            city: props.data?.bankDetails?.city,
          },
          addresses: props.data.addresses,
          authorisedSignatoryDetails: props.data.authorisedSignatoryDetails,
          multiParty: props.data.multiParty,
          multiPartyName: props.data.multiPartyName,
          multiPartyAddresses: props.data.multiPartyAddresses,
        };
        setList(
          props.data.authorisedSignatoryDetails?.length > 0
            ? props.data.authorisedSignatoryDetails
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
        console.log(props.data.addresses,"props.data.addresses")
        setAddressList(props.data.addresses);
        setMultiList(props.data.multiPartyAddresses);
        setSupplierState(supplier);
       
      }
    }
  }, [props]);
console.log(addressList,"aasdads")
  useEffect(() => {
    
    if (getPincodesMasterData.length > 0) {
      setToShow(getPincodesMasterData);
       setToView(true)
    } else {
      console.log("hewer")
      setToShow([]);
      setToView(false);
    }
  }, [getPincodesMasterData]);
 const viewSet=()=>{

     setToView(true)
 }
 console.log(toView,"SAdasd")
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

    setRemovedOption(value.name);
    if (indexOption !== -1) {
      temp.splice(indexOption, 1);
    }

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
    docList.forEach((val, i) => {
      if (index == val.index) {
        setDocList([...docList.slice(0, i), ...docList.slice(i + 1)]);
      }
    });
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
    setRemovedOption(null);

    if (
      val.name == 'Bhawana Jain' ||
      val.name == 'Vipin Kumar' ||
      val.name == 'Devesh Jain' ||
      val.name == 'Fatima Yannoulis'
    ) {
      let temp = [...options];
      temp.push(val.name);
      setOptions([...temp]);
    }
  };
  const handleInput = (name, value, key) => {
    const newInput = { ...supplierState };
    if (key == 'bankName') {
      newInput.bankDetails[name] = value;
      setSupplierState(newInput);
    } else {
      newInput[name] = value;
      setSupplierState(newInput);
    }
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
      props.masterList.forEach((val, index) => {
        if (val.name == value) {
          arrayToSave.name = val.name;
          arrayToSave.designation = val.designation;
          arrayToSave.email = val.email;
          arrayToSave.phoneNo = val.phoneNo;
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
  const handleAddressInput = () => {
    if (props.addressValidation(addressType, newAddress, false)) {
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
  const handleDataMines = (name, value) => {
    const newInput = { ...newMultiAddress };
    newInput[name] = value.Pincode;
    newInput.country = 'India';
    newInput.city = value.City;
    newInput.state = value.State;
    setNewMultiAddress(newInput);
    setToView(false);
  };
  const handleDataEditMines = (name, value) => {
    const newInput = { ...MultiEditAddress };
    newInput[name] = value.Pincode;
    newInput.country = 'India';
    newInput.city = value.City;
    newInput.state = value.State;
    setMultiEditAddress(newInput);
    setToView(false);
  };
  const setAddress = (name, value) => {
    const newInput = { ...newAddress };
    newInput[name] = value;
    setNewAddress(newInput);
  };
  const [isEdit, setIsEdit] = useState(false);
  const [toEditIndex, setToEditIndex] = useState(0);
  const handleEditAddressInput = (index, val) => {
    setIsEdit(true);
    setToEditIndex(index);
    setAddressEditType(val);
    let tempArr = addressList;
  setAddressEditType(addresstype)
    tempArr.forEach((val, i) => {
      if (i == index) {
        setEditAddress({
          addressType: val.addressType,
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
  };
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
    setNewMultiAddress({
      addressType: '',
      fullAddress: '',
      pinCode: '',
      country: '',
      gstin: '',
      state: '',
      city: '',
    });
    setMultiAddressType('Registered');
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

  //multi address

  const handleAddressMultiInput = () => {
    if (props.addressValidation2(addressMutliType, newMultiAddress, false)) {
      setMultiList((current) => [...current, newMultiAddress]);

      setNewMultiAddress({
        addressType: 'Registered',
        fullAddress: '',
        pinCode: '',
        country: '',
        gstin: '',
        state: '',
        city: '',
      });
    }
  };
  const onAddressMultiRemove = (index) => {
    setMultiList([...multiList.slice(0, index), ...multiList.slice(index + 1)]);
  };
  const setMultiAddress = (name, value) => {
    const newInput = { ...newMultiAddress };
    newInput[name] = value;
    setNewMultiAddress(newInput);
  };
  const [isEditMulti, setIsEditMulti] = useState(false);
  const [toEditIndexMulti, setToEditIndexMulti] = useState(0);
  const handleEditAddressMuliInput = (index, val) => {
    setMultiAddressType(val);
    setIsEditMulti(true);
    setToEditIndexMulti(index);
    let tempArr = multiList;

    tempArr.forEach((val, i) => {
      if (i == index) {
        setMultiEditAddress({
          addressType: val.addressType,
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
  const editNewMultiAddress = (name, value) => {
    setIsEditMulti(true);
    const newInput = { ...MultiEditAddress };
    newInput[name] = value;
    setMultiEditAddress(newInput);
  };
  const cancelEditMultiAddress = () => {
    setIsEditMulti(false);
    setMultiEditAddress({
      addressType: '',
      fullAddress: '',
      pinCode: '',
      country: '',
      gstin: '',
      state: '',
      city: '',
    });
  };
  const saveNewMultiAddress = () => {
    setMultiList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == toEditIndex) {
          return MultiEditAddress;
        }
        // 👇️ otherwise return object as is
        return obj;
      });

      return newState;
    });
    setIsEditMulti(false);
    setMultiEditAddress({
      addressType: '',
      fullAddress: '',
      pinCode: '',
      country: '',
      gstin: '',
      state: '',
      city: '',
    });
  };
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

  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0`}>
        <Form className={`${styles.form} border-bottom-0`}>
          <div className="row  ">
            <Form.Group className={`${styles.form_group} d-flex  col-md-8 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="name"
                value={supplierState.name}
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Supplier Name<strong className="text-danger">*</strong>
              </Form.Label>
              <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
            </Form.Group>

            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="shortName"
                value={supplierState.shortName}
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Short Name <strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
          </div>
        </Form>
        <div className={`${styles.bankContainer}`}>
          <span className={`mb-3`}>Bank Details</span>
          <div className={`${styles.bankInputContainer} row`}>
            <Col md={4} sm={12} className={`${styles.form_group} d-flex`}>
              <input
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="bankName"
                value={supplierState.bankDetails.bankName}
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value, 'bankName');
                }}
              />
              <label className={`${styles.label_heading} label_heading`}>
                Bank Name
                <strong className="text-danger">*</strong>
              </label>
              <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
            </Col>
            <Col md={4} sm={12} className={`${styles.form_group}`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="number"
                onWheel={(event) => event.currentTarget.blur()}
                name="accountNo"
                value={supplierState.bankDetails.accountNo}
                onChange={(e) => {
                  let temp = e.target.value.replace(/[^\w\s]/gi, '');
                  if (temp == '_') {
                    temp = '';
                  }

                  handleInput(e.target.name, temp, 'bankName');
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Account No.<strong className="text-danger">*</strong>
              </Form.Label>
            </Col>
            <Col md={4} sm={12} className={`${styles.form_group}`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="swiftCode"
                value={supplierState.bankDetails.swiftCode}
                onChange={(e) => {
                  let temp = e.target.value.replace(/[^\w\s]/gi, '');
                  if (temp == '_') {
                    temp = '';
                  }

                  handleInput(e.target.name, temp, 'bankName');
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Swift Code<strong className="text-danger">*</strong>
              </Form.Label>
            </Col>
            <Col md={4} sm={12} className={`${styles.form_group}`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="city"
                value={supplierState.bankDetails.city}
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value, 'bankName');
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>City</Form.Label>
            </Col>
          </div>
        </div>
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
            props.gettingPins,
            handleDataEdit,
            dispatch,
            toShow,
            toView,
          )}
        {isEdit == false && (
           addNewAddress(setAddressType,setAddress,addressType,handleAddressInput,cancelAddress,newAddress,props.gettingPins,handleData,toShow,toView,true,undefined,viewSet)
        )}

        {signatoryList(list,setRemovedOption,handleChangeInput,removedOption,options,handleChangeInput2,onEditRemove,handleRemove,addMoreRows,onEdit,"input")}

        {props.multiPart == true ? (
          <>
            <div className={styles.manufacture}>
              <span className={``}>{props.multiPartValue} Details</span>
              <div className="row mt-4">
                <Form.Group className={`${styles.form_group} d-flex col-md-8 col-sm-6`}>
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="multiPartyName"
                    value={supplierState.multiPartyName}
                    onChange={(e) => {
                      handleInput(e.target.name, e.target.value);
                    }}
                  />
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    {props.multiPartValue} Name
                    <strong className="text-danger">*</strong>
                  </Form.Label>
                  <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
                </Form.Group>
              </div>
              <div className={`${styles.addressContainer} m-0`}>
                {multiList?.length > 0 ? <span className={`mb-3`}> {props.multiPartValue} Addresses</span> : null}
                <div className={`${styles.containerChild} d-flex justify-content-between flex-wrap  `}>
                  {multiList?.map((val, index) => {
                    return (
                       addressLists(val, index, handleEditAddressMuliInput, onAddressMultiRemove)
                  
                    );
                  })}
                </div>
              </div>
              {isEditMulti &&
                editData(
                  addressMutliType,
                  MultiEditAddress,
                  setMultiEditAddress,
                  editNewMultiAddress,
                  cancelEditMultiAddress,
                  saveNewMultiAddress,
                  setMultiAddressType,
                  props.gettingPins,
                  handleDataEditMines,
                  dispatch,
                  toShow,
                  toView,
                )}
              <div className={`row`}>
                {isEditMulti == false && (
                   addNewAddress(setMultiAddressType,setMultiAddress,addressMutliType,handleAddressMultiInput,cancelAddress,newMultiAddress,props.gettingPins,handleData,toShow,toView,true,undefined,viewSet)
                  
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Index;


