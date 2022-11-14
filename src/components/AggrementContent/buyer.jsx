/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import _get from 'lodash/get';
import {editData} from './editContainer'
import {addressLists} from './addressList'
import {signatoryList} from './signatoryList'
import {addNewAddress} from './addNewAddress'

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

  const [gstin, setGstin] = useState('');
  const [list, setList] = useState([]);
  const [shortName, setShotName] = useState('IGI');
  const [addressList, setAddressList] = useState([]);
  const [docList, setDocList] = useState([]);
  const [doc, setdoc] = useState({ attachDoc: '' });
  const [pan, setPan] = useState('');
  const [removedOption, setRemovedOption] = useState(null);
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
  const [options, setOptions] = useState(['Bhawana Jain', 'Vipin Kumar', 'Devesh Jain', 'Fatima Yannoulis']);
  
  const [addressType, setAddressType] = useState('Registered');
  const [addressEditType, setAddressEditType] = useState('Registered');
  useEffect(() => {
    console.log(props.internal,"SAdasda")
    if (window) {
      
        if (sessionStorage.getItem('Buyer')) {
        let savedData = JSON.parse(sessionStorage.getItem('Buyer'));
        let buyer = {
          name: savedData.name || 'Indo German International Private Limited',
          branchName: savedData.branchName,
        };
        setGstin(savedData.gstin || '');
        setPan(savedData.pan || '');
        if(savedData.addresses.length>0){
           setAddressList(savedData.addresses);
        }else{
          getAddress(savedData.name,savedData.branchName)
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
      
        if(props?.data.addresses.length>0){
           setAddressList(props?.data.addresses);
        }else{
          getAddress(props?.data.name,props?.data.branchName)
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
  }, [props,props.internal]);

  useEffect(() => {
    if (props.saveData == true && props.active == 'Buyer') {
      let data = {
        buyerData: buyerData,
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
  const handleEditAddressInput = (index) => {
    setIsEdit(true);
    setToEditIndex(index);
    let tempArr = addressList;

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
     console.log(props.internal,"props.internal")
      if (buyerData.name == 'Indo German International Private Limited') {
        setShotName('IGIPL');

        filter = props.internal.filter((val) => {
          if (val.Company_Name == 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED') {
            return val;
          }
        });
        let otherData = props.internal.filter((val) => {
          if (val.Branch == buyerData.branchName) {
            return val;
          }
        });

      }
      if (buyerData.name == 'Emergent Industrial Solution Limited') {
        setShotName('EISL');

        filter = props.internal.filter((val) => {
          console.log(val.Company_Name,"val.Company_Name")
          if (val.Company_Name == 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED') {
            return val;
          }
        });
        let otherData = filter.filter((val) => {
          if (val.Branch == buyerData.branchName ) {
            return val;
          }
        });
      

       

      }

      setBranchOptions([...filter]);
    }
 },[props.internal])
 const getAddress = (name , branch) => {
  console.log(name , branch,props.internal,"name , branch")
   if (name || branch) {
      let filter;
     console.log(props.internal,"props.internal")
      if (name == 'Indo German International Private Limited') {
        setShotName('IGIPL');

        filter = props.internal.filter((val) => {
          if (val.Company_Name == 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED') {
            return val;
          }
        });
        let otherData = props.internal.filter((val) => {
          if (val.Branch == branch) {
            return val;
          }
        });

        if (otherData.length > 0) {
          setGstin(otherData[0]?.GSTIN);
          setPan(otherData[0]?.PAN);

          if (_get(otherData[0], 'Address', '') !== '') {
            let add = otherData[0]?.Address?.split(',');
            let newAddress = [];
            add.forEach((val, index) => {
              if (index < add.length - 1) {
                newAddress.push(val);
              }
            });

            let pincode = add[add.length - 1].split('-');

            setAddressList([
              {
                addressType: 'Registered',
                fullAddress: newAddress.join(),
                pinCode: pincode[1],
                country: 'India',
                gstin: '',
                state: pincode[0],
                city: add[4],
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
        setShotName('EISL');

        filter = props.internal.filter((val) => {
          console.log(val.Company_Name,"val.Company_Name")
          if (val.Company_Name == 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED') {
            return val;
          }
        });
        let otherData = filter.filter((val) => {
          if (val.Branch == branch ) {
            return val;
          }
        });
        console.log(otherData,"otherData",name)

        if (otherData.length > 0) {
          setGstin(otherData[0].GSTIN);
          setPan(otherData[0].PAN);
          if (_get(otherData[0], 'Address', '') !== '') {
            let add = otherData[0]?.Address?.split(',');
            let newAddress = [];
            add.forEach((val, index) => {
              if (index < add.length - 1) {
                newAddress.push(val);
              }
            });

            let pincode = add[add.length - 1].split('-');

            setAddressList([
              {
                addressType: 'Registered',
                fullAddress: newAddress.join(),
                pinCode: pincode[1],
                country: 'India',
                gstin: '',
                state: pincode[0],
                city: add[4],
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

      setBranchOptions([...filter]);
    }
 }
  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0`}>
        <Form className={`${styles.form} border_color`}>
          <div className="row ">
            <Form.Group className={`${styles.form_group} col-md-8 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  required
                  type="text"
                  name="name"
                  value={buyerData.name}
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value);
                    getAddress(e.target.value,buyerData.branchName)
                  }}
                >
                  <option>Select an option</option>
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
                  required
                  type="text"
                  name="branchName"
                  value={buyerData.branchName}
                  onChange={(e) => {
                    let filter = props.internal.filter((val) => {
                      if (val.Company_Name?.toLowerCase() == e.target.value?.toLowerCase()) {
                        return val;
                      }
                    });
                     
             
                    setBranchOptions([...filter]);
                    handleInput(e.target.name, e.target.value);
                      getAddress(buyerData.name,e.target.value)
                  }}
                >
                  <option>Select an option</option>

                  {branchOptions.map((val, index) => {
                    return <option value={`${val.Branch}`}>{val.Branch}</option>;
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
            "noBranch"
          )}
        {isEdit == false && (
         addNewAddress(setAddressType,setAddress,addressType,handleAddressInput,cancelAddress,newAddress,props.gettingPins,null,false,false,false,"noBranch")
        )}
        {signatoryList(list,setRemovedOption,handleChangeInput,removedOption,options,handleChangeInput2,onEditRemove,handleRemove,addMoreRows,onEdit)}
      </div>
    </>
  );
}

export default Index;

