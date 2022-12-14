/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import _get from 'lodash/get';

import { addressLists } from './addressList';
import { signatoryList } from './signatoryList';
import { addNewAddress } from './addNewAddress';
import { useDispatch, useSelector } from 'react-redux';
let buyer = {
  name: 'Indo German International Private Limited',

  branchName: '',
};

function Index(props) {
  const [buyerData, setBuyerData] = useState(buyer);
  useEffect(() => {
    setBuyerData({
      ...buyerData,
      name: 'Indo German International Private Limited',
    });
  }, [props.order]);
  const { getPincodesMasterData } = useSelector((state) => state.MastersData);
  const [gstin, setGstin] = useState('');
  const [list, setList] = useState([]);
  const [shortName, setShotName] = useState('');
  const [addressList, setAddressList] = useState([]);
  const [docList, setDocList] = useState([]);
  const [doc, setdoc] = useState({ attachDoc: '' });
  const [pan, setPan] = useState('');
  const [removedOption, setRemovedOption] = useState(null);
  const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
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
  const [gstArray, setgstArr] = useState([]);
  const [options, setOptions] = useState([]);
  const [signatoryDetails, setSignatoryDetails] = useState([]);
  const [addressType, setAddressType] = useState('Registered');
  const [addressEditType, setAddressEditType] = useState('Registered');
  useEffect(() => {
  
    if (window) {
      if (sessionStorage.getItem('Buyer')) {
        let savedData = JSON.parse(sessionStorage.getItem('Buyer'));
        let buyer = {
          name: savedData.name || 'Indo German International Private Limited',
          branchName: savedData.branchName,
        };
          setGstin(savedData.gstin || '');
          setPan(savedData.pan || '');
        if (savedData.addresses.length > 0) {
           setAddressList(savedData.addresses);
           setShotName(savedData.shortName)
        } else {
          getAddress(savedData.name, savedData.branchName);
        }

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

        setBuyerData(buyer);
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
        
       
      } else {
        let buyer = {
          name: props?.data?.name || 'Indo German International Private Limited',
          branchName: props?.data?.branch,
        };
        setGstin(props?.data.gstin || '');
        setPan(props?.data.pan || '');
        
        if (props?.data.addresses.length > 0) {
          setAddressList(props?.data.addresses);
          setShotName(props.data.shortName)
        } else {
          getAddress(props?.data.name, props?.data.branchName);
        }

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

        setBuyerData(buyer);
        let tempArr = props.data?.authorisedSignatoryDetails;
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
      }
     
    }
  }, [props.data, props.internal]);
  
  useEffect(() => {
    if (props.saveData == true && props.active == 'Buyer') {
      let data = {
        buyerData: buyerData,
        shortName: shortName,
        list: list,
        addresses: addressList,
        list: list,
        gstin: gstin,
        pan,
        gstin,
      };
      props.sendData('Buyer', data);
    }
    if (props.submitData == true && props.active == 'Buyer') {
      let data = {
        buyerData: buyerData,
        shortName: shortName,
        list: list,
        addresses: addressList,
        list: list,
        gstin: gstin,
        pan,
        gstin,
      };

      props.updateData('Buyer', data);
    }
  }, [props.saveData, props.submitData]);

  useEffect(() => {
    if (getPincodesMasterData.length > 0) {
      setToShow(getPincodesMasterData);
    } else {
      setToShow([]);
      // setToView(false);
    }
  }, [getPincodesMasterData]);
  const viewSet = () => {
    setToView(true);
  };
  const onEdit = (index) => {
    let tempArr = list;
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          setRemovedOption(obj.name);
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
    let removed = [...removedArr];
    removed.push(value.name);
    setRemovedArr([...removed]);
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
    if (options.length == 1) {
      let temp = [];
      signatoryDetails.forEach((master, index) => {
        if (val.name == master.name) {
          temp.push(master.name);
        }
      });
      setOptions([...temp]);
      setRemovedArr([]);
    }
    signatoryDetails.forEach((master, index) => {
      if (val.name == master.name) {
        let temp = [...options];
        temp.push(val.name);
        setOptions([...temp]);
      }
    });
    let temp = [...removedArr];
    var indexOption = temp.indexOf(val.name);
    if (indexOption !== -1) {
      temp.splice(indexOption, 1);
    }
    setRemovedArr([...temp]);
  };

  const handleInput = (name, value, key) => {
    const newInput = { ...buyerData };

    newInput[name] = value;
    setBuyerData(newInput);
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
      signatoryDetails.forEach((val, index) => {
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
  const handleEditAddressInput = (index, addresstype) => {
    setIsEdit(true);
    setToEditIndex(index);
    let tempArr = addressList;

    setAddressEditType(addresstype);
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
    setAddressType('Registered');
    setAddressEditType('Registered');
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
  };
  const [branchOptions, setBranchOptions] = useState([]);
  useEffect(() => {
    
    if (buyerData.name || buyerData.branchName) {
      let filter;
      
      if (buyerData.name == 'Indo German International Private Limited') {
        filter = props?.internal?.filter((val) => {
          if (val.Company_Name == 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED') {
            return val;
          }
        });

        if (filter && filter.length > 0) {
          let tempOptions = [];
          let tempDetail = [];
          let gst = [];
        

          filter.forEach((val, index) => {
            if (val.authorisedSignatoryDetails[0].name !== '') {
              tempDetail.push(val.authorisedSignatoryDetails[0]);
              tempOptions.push(val.authorisedSignatoryDetails[0].name);
            }
            if (val.keyAddresses[0].gstin !== '') {
              gst.push(val.keyAddresses[0].gstin);
            }
          });
          setgstArr([...gst]);
          setOptions([...tempOptions]);
          setSignatoryDetails([...tempDetail]);
        }
      }
      if (buyerData.name == 'Emergent Industrial Solution Limited') {
     

        filter = props?.internal?.filter((val) => {
          
          if (val.Company_Name == 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED') {
            return val;
          }
        });

        if (filter && filter.length > 0) {
          let tempOptions = [];
          let tempDetail = [];
          let gst = [];
          
          // setShotName(filter[0].Short_Name);
          filter.forEach((val, index) => {
            if (val.authorisedSignatoryDetails[0].name !== '') {
              tempDetail.push(val.authorisedSignatoryDetails[0]);
              tempOptions.push(val.authorisedSignatoryDetails[0].name);
            }
            if (val.keyAddresses[0].gstin !== '') {
              gst.push(val.keyAddresses[0].gstin);
            }
          });
          setgstArr([...gst]);
          setOptions([...tempOptions]);
          setSignatoryDetails([...tempDetail]);
        }
      }

      setRemovedArr([]);

      if (filter) {
        setBranchOptions([...filter]);
      }
    }
  }, [props.internal,props.data]);
  const getAddress = (name, branch) => {
    
    if (props?.internal?.length > 0) {
      if (name || branch) {
        let filter;
        
        if (name == 'Indo German International Private Limited') {
          filter = props?.internal?.filter((val) => {
            if (val.Company_Name == 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED') {
              return val;
            }
          });

          setShotName(filter[0].Short_Name);
          //signatory

          if (filter && filter.length > 0) {
            let tempOptions = [];
            let tempDetail = [];
            let gst = [];
            setShotName(filter[0].Short_Name);
            filter.forEach((val, index) => {
              if (val.authorisedSignatoryDetails[0].name !== '') {
                tempDetail.push(val.authorisedSignatoryDetails[0]);
                tempOptions.push(val.authorisedSignatoryDetails[0].name);
              }
              if (val.keyAddresses[0].gstin !== '') {
                gst.push(val.keyAddresses[0].gstin);
              }
            });
            setgstArr([...gst]);
            setOptions([...tempOptions]);
            setSignatoryDetails([...tempDetail]);
          }

          let otherData = filter.filter((val) => {
            if (val?.keyAddresses?.length > 0) {
              if (val.keyAddresses[0].Branch == branch) {
                return val;
              }
            }
          });
          
          if (otherData.length > 0) {
            setGstin(otherData[0].keyAddresses[0].gstin);
            setPan(otherData[0]?.PAN);

            if (_get(otherData[0], 'keyAddresses[0]', '') !== '') {
              setAddressList([
                {
                  addressType: 'Registered',
                  fullAddress: _get(otherData[0], 'keyAddresses[0]', '').fullAddress,
                  pinCode: _get(otherData[0], 'keyAddresses[0]', '').pinCode,
                  country: 'India',
                  gstin: _get(otherData[0], 'keyAddresses[0]', '').gstin,
                  state: _get(otherData[0], 'keyAddresses[0]', '').state,
                  city: _get(otherData[0], 'keyAddresses[0]', '').city,
                },
              ]);
            } else {
              setAddressList([
                {
                  addressType: '',
                  fullAddress: '',
                  pinCode: '',
                  country: '',
                  gstin: '',
                  state: '',
                  city: '',
                },
              ]);
            }
          } else {
            setGstin('');
            setPan('');
          }
        }
        if (name == 'Emergent Industrial Solution Limited') {
          filter = props?.internal?.filter((val) => {
            
            if (val.Company_Name == 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED') {
              return val;
            }
          });
          setShotName(filter[0].Short_Name);
          if (filter.length > 0) {
            let tempOptions = [];
            let tempDetail = [];
            let gst = [];
            setShotName(filter[0].Short_Name);
            filter.forEach((val, index) => {
              if (val.authorisedSignatoryDetails[0].name !== '') {
                tempDetail.push(val.authorisedSignatoryDetails[0]);
                tempOptions.push(val.authorisedSignatoryDetails[0].name);
              }
              if (val.keyAddresses[0].gstin !== '') {
                gst.push(val.keyAddresses[0].gstin);
              }
            });
            setgstArr([...gst]);
            setOptions([...tempOptions]);
            setSignatoryDetails([...tempDetail]);
          }
          let otherData = filter.filter((val) => {
            if (val?.keyAddresses?.length > 0) {
              if (val.keyAddresses[0].Branch == branch) {
                return val;
              }
            }
          });
          

          if (otherData.length > 0) {
            setGstin(otherData[0].keyAddresses[0].gstin);
            setPan(otherData[0]?.PAN);
            if (_get(otherData[0], 'keyAddresses[0]', '') !== '') {
              setAddressList([
                {
                  addressType: 'Registered',
                  fullAddress: _get(otherData[0], 'keyAddresses[0]', '').fullAddress,
                  pinCode: _get(otherData[0], 'keyAddresses[0]', '').pinCode,
                  country: 'India',
                  gstin: _get(otherData[0], 'keyAddresses[0]', '').gstin,
                  state: _get(otherData[0], 'keyAddresses[0]', '').state,
                  city: _get(otherData[0], 'keyAddresses[0]', '').city,
                },
              ]);
            } else {
              setAddressList([
                {
                  addressType: '',
                  fullAddress: '',
                  pinCode: '',
                  country: '',
                  gstin: '',
                  state: '',
                  city: '',
                },
              ]);
            }
          } else {
            setGstin('');
            setPan('');
          }
        }
        
        if (filter) {
          setBranchOptions([...filter]);
        }
      }
    }
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
  
  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0`}>
        <Form className={`${styles.form} border_color`}>
          <div className="row ">
            <Form.Group className={`${styles.form_group} col-md-8 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  type="text"
                  name="name"
                  value={buyerData.name}
                  onChange={(e) => {
                    setRemovedArr([]);
                    setList([]);
                    handleInput(e.target.name, e.target.value);
                    getAddress(e.target.value, buyerData.branchName);
                  }}
                >
                  <option  value="">Select an option</option>
                  <option
                    value={`Indo German International Private Limited`}
                  >{`Indo German International Private Limited`}</option>
                  <option
                    value={`Emergent Industrial Solution Limited`}
                  >{`Emergent Industrial Solution Limited`}</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Name<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </Form.Group>

            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  type="text"
                  name="branchName"
                  value={buyerData.branchName}
                  onChange={(e) => {
                    let filter = props?.internal?.filter((val) => {
                      if (val.Company_Name?.toLowerCase() == e.target.value?.toLowerCase()) {
                        return val;
                      }
                    });

                    setBranchOptions([...filter]);
                    handleInput(e.target.name, e.target.value);
                    getAddress(buyerData.name, e.target.value);
                  }}
                >
                  <option  value="" >
                    Select an option
                  </option>

                  {[...new Set(branchOptions.map((item) => item.keyAddresses[0].Branch))]
                    .filter((val, index) => {
                      if (val !== undefined) {
                        return val;
                      }
                    })
                    .map((val, index) => {
                      return <option value={`${val}`}>{val}</option>;
                    })}
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Branch Name<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </Form.Group>
            <div className={`${styles.info} col-md-4 col-sm-6`}>
              <span className="label_heading">PAN NO.</span>
              <p className="text-color">{pan}</p>
            </div>
            <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span className="label_heading">GSTIN.</span>
              <p className="text-color">{gstin}</p>
            </div>
            <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span className="label_heading">Short Name</span>
              <p className="text-color">{shortName}</p>
            </div>
          </div>
        </Form>
        <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
          <div className={`${styles.containerChild} d-flex justify-content-between flex-wrap  `}>
            {addressList?.map((val, index) => {
              return addressLists(val, index, handleEditAddressInput, onAddressRemove);
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
            toShow,
            toView,
            handleDataEdit,
            viewSet,
            gstArray,
          )}
        {isEdit == false && (
          <div className={`${styles.newAddressContainer} card m-0 border_color`}>
            <div className={`${styles.newAddressHead} border_color`}>
              <span>Add a new address</span>
            </div>
            <div className="card-body p-0">
              <div className={`${styles.newAddressContent} row`}>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      name="addressType"
                      value={addressType}
                      onChange={(e) => {
                        setAddressType(e.target.value);
                        setAddress(e.target.name, e.target.value);
                      }}
                    >
                      <option disabled>Select an option</option>
                      <option value="Registered">Registered Office</option>
                      <option value="Branch">Branch Office</option>
                       <option value="Corporate">Corporate Office</option>
                    </select>
                    <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                      Address Type<strong className="text-danger">*</strong>
                    </Form.Label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </Form.Group>
                {addressType == 'Registered' || addressType == 'Corporate' ? (
                  <>
                    <Form.Group className={`${styles.form_group}  col-md-12 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="fullAddress"
                        value={newAddress.fullAddress}
                        onChange={(e) => {
                          setAddress(e.target.name, e.target.value);
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
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        value={newAddress.pinCode}
                        onChange={(e) => {
                          props.gettingPins(e.target.value);
                          viewSet();
                          setAddress(e.target.name, e.target.value);
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
                        value={newAddress.country}
                        name="country"
                        onChange={(e) => {
                          setAddress(e.target.name, e.target.value);
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
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="gstin"
                          value={newAddress.gstin}
                          onChange={(e) => {
                            setAddress(e.target.name, e.target.value);
                          }}
                        >
                          <option>Select an option</option>
                          {gstArray?.length > 0 && gstArray !== undefined > 0 ? (
                            gstArray
                              .filter((val) => {
                                if (val !== undefined) {
                                  return val;
                                }
                              })
                              .map((val, index) => {
                                return <option value={`${val}`}>{val}</option>;
                              })
                          ) : (
                            <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                          )}
                        </select>
                        <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                          GSTIN<strong className="text-danger">*</strong>
                        </Form.Label>
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
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
                        value={newAddress.pinCode}
                        onChange={(e) => {
                          props.gettingPins(e.target.value);
                          viewSet();
                          setAddress(e.target.name, e.target.value);
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
                        value={newAddress.country}
                        onChange={(e) => {
                          setAddress(e.target.name, e.target.value);
                        }}
                        onKeyDown={(evt) =>
                          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(evt.key) && evt.preventDefault()
                        }
                      />
                      <Form.Label className={`${styles.label_heading} label_heading`}>
                        Country<strong className="text-danger">*</strong>
                      </Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="state"
                        value={newAddress.state}
                        onChange={(e) => {
                          setAddress(e.target.name, e.target.value);
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
                        value={newAddress.city}
                        onChange={(e) => {
                          setAddress(e.target.name, e.target.value);
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
                        value={newAddress.fullAddress}
                        onChange={(e) => {
                          setAddress(e.target.name, e.target.value);
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
                    handleAddressInput();
                  }}
                >
                  <span>Add</span>
                </div>
                <div
                  className={`${styles.cancel} d-flex justify-content-center align-items-center`}
                  onClick={() => {
                    cancelAddress();
                  }}
                >
                  <span>Cancel</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`${styles.tableContainer} border_color card p-0`}>
          <div
            className={`${styles.sub_card}  card-header d-flex align-items-center justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#customerDetail"
            aria-expanded="true"
            aria-controls="customerDetail"
          >
            <div className={styles.header}>
              <h2 className={`mb-0`}>Authorised Signatory Details</h2>
              <span className=" d-flex align-items-center justify-content-between">+</span>
            </div>
          </div>
          <div
            id="customerDetail"
            className={`collapse ${styles.body} show  value_card card-body row`}
            aria-labelledby="customerDetail"
          >
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                  <tr className="table_row">
                    <th>NAME</th>
                    <th>DESIGNATION</th>
                    <th>EMAIL</th>
                    <th>PHONE NO.</th>
                    <th>ACTION</th>
                  </tr>
                  <tbody>
                    {list.length > 0 &&
                      list.map((val, index) => {
                        return (
                          <>
                            {val.actions == 'true' ? (
                              <tr key={index} className="table_row">
                                <td>{val.name}</td>
                                <td>{val.designation}</td>
                                <td>{val.email}</td>
                                <td>{val.phoneNo}</td>
                                <td className={`d-flex`}>
                                  <img
                                    className={`${styles.image} mr-3`}
                                    onClick={() => onEdit(index)}
                                    src="/static/mode_edit.svg"
                                    alt="edit"
                                  />
                                  <img
                                    onClick={() => handleRemove(index, val)}
                                    src="/static/delete 2.svg"
                                    alt="delete"
                                  />
                                </td>
                              </tr>
                            ) : (
                              <tr key={index} className="table_row">
                                <td>
                                  {console.log(val.addnew, 'val.addnew ')}
                                  {val.addnew == 'false' ? (
                                    <>
                                      <select
                                        value={val.name}
                                        className={`${styles.customSelect} input`}
                                        onChange={(e) => {
                                          handleChangeInput(e.target.name, e.target.value, index);
                                        }}
                                      >
                                        <option>Select an option</option>

                                        {options.map((val, i) => {
                                          return <option value={val}>{val}</option>;
                                        })}
                                      </select>
                                      <img
                                        className={`${styles.arrow2} image_arrow img-fluid`}
                                        src="/static/inputDropDown.svg"
                                        alt="Search"
                                      />
                                    </>
                                  ) : (
                                    <input
                                      type="text"
                                      className="input"
                                      value={val.name}
                                      name="name"
                                      // readOnly={val.addnew!="true"?true:false}
                                      onChange={(e) => {
                                        handleChangeInput2(e.target.name, e.target.value, index);
                                      }}
                                    />
                                  )}
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="input"
                                    value={val.designation}
                                    name="designation"
                                    // readOnly={val.addnew!="true"?true:false}
                                    onChange={(e) => {
                                      handleChangeInput2(e.target.name, e.target.value, index);
                                    }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    value={val.email}
                                    name="email"
                                    className="input"
                                    onChange={(e) => {
                                      handleChangeInput2(e.target.name, e.target.value, index);
                                    }}
                                  />
                                </td>
                                <td>
                                  <input
                                    value={val.phoneNo}
                                    className="input"
                                    name="phoneNo"
                                    type="number"
                                    onWheel={(event) => event.currentTarget.blur()}
                                    onKeyDown={(evt) =>
                                      ['e', 'E', '+', '-', '.'].includes(evt.key) && evt.preventDefault()
                                    }
                                    onChange={(e) => {
                                      handleChangeInput2(e.target.name, e.target.value, index);
                                    }}
                                  />
                                </td>
                                <td className={`d-flex`}>
                                  <div
                                    className={`${styles.addressEdit} d-flex justify-content-center  align-items-start`}
                                    onClick={() => {
                                      onEditRemove(index, val);
                                    }}
                                  >
                                    <img className={`${styles.image} mr-3`} src="/static/save-3.svg" alt="save" />
                                  </div>
                                  <div
                                    className={`${styles.addressEdit} d-flex justify-content-center align-items align-items-center`}
                                    onClick={() => {
                                      handleRemove(index, val);
                                    }}
                                  >
                                    <img src="/static/delete 2.svg" />
                                  </div>
                                  {/* <img  onClick={()=>(onEditRemove(index))}src="/static/save-3.svg"  />
                            <img  onClick={()=>(handleRemove(index))} src="/static/delete 2.svg"></img> */}
                                </td>
                              </tr>
                            )}
                          </>
                        );
                      })}
                  </tbody>
                </table>
                <div
                  className={`${styles.addMoreRows}`}
                  onClick={(e) => {
                    addMoreRows();
                  }}
                >
                  <span>+</span> Add more rows
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
const editData = (
  addressEditType,
  EditAddress,
  setEditAddress,
  editNewAddress,
  cancelEditAddress,
  saveNewAddress,
  setAddressEditType,
  gettingPins,
  toShow,
  toView,
  handleDataEdit,
  viewSet,
  gstArray,
) => {
  return (
    <div className={`${styles.newAddressContainer}`}>
      <div className={styles.newAddressHead}>
        <span className={`mb-3`}>Add Edit address</span>
      </div>
      <div className={`${styles.newAddressContent} row`}>
        <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
          <div className="d-flex">
            <select
              className={`${styles.input_field} ${styles.customSelect} input form-control`}
              name="addressType"
              value={EditAddress.addressType}
              onChange={(e) => {
                setAddressEditType(e.target.value);
                editNewAddress(e.target.name, e.target.value);
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
        {addressEditType == 'Registered' || addressEditType == 'Corporate' ? (
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
                            onClick={() => handleDataEdit('pinCode', results)}
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
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="gstin"
                  value={EditAddress.gstin}
                  onChange={(e) => {
                    editNewAddress(e.target.name, e.target.value);
                  }}
                >
                  <option>Select an option</option>
                  {gstArray?.length > 0 && gstArray !== undefined > 0 ? (
                    gstArray
                      .filter((val) => {
                        if (val !== undefined) {
                          return val;
                        }
                      })
                      .map((val, index) => {
                        return <option value={`${val}`}>{val}</option>;
                      })
                  ) : (
                    <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                  )}
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
                            onClick={() => handleDataEdit('pinCode', results)}
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
              <Form.Label className={`${styles.label_heading} label_heading`}>Short Name</Form.Label>
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
