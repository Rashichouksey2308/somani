/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import {addressLists} from './addressList'
import {signatoryList} from './signatoryList'

let stevedore = {
  name: '',
  shortName: '',
  gstin: '',
  addresses: [],
  authorisedSignatoryDetails: [],
};

function Index(props) {
  console.log(props.vendor.name,"Sdasd")
  const [removedOption, setRemovedOption] = useState(null);
  const [options, setOptions] = useState(['Bhawana Jain', 'Vipin Kumar', 'Devesh Jain', 'Fatima Yannoulis']);

  const [seteveState, setSeteveState] = useState(stevedore);
  const [list, setList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [newAddress, setNewAddress] = useState({
    addressType: 'Registered',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });
  const [docList, setDocList] = useState([]);

  const [EditAddress, setEditAddress] = useState({
    addressType: '',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });
  const [addressType, setAddressType] = useState('Registered');
  const [addressEditType, setAddressEditType] = useState('Registered');

  useEffect(() => {
    let tempArr = seteveState.authorisedSignatoryDetails;
    tempArr.forEach((val, index) => {
      val.actions = 'true';
    });
    setList(tempArr);
    let tempArr2 = seteveState.addresses;
    setAddressList(tempArr2);
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
  };
  useEffect(() => {
    if (window) {
       setOptions(props.vendor.options)
      if (props.sameAsCHA == false) {
        if (JSON.parse(sessionStorage.getItem('Cha'))) {
          let savedData = JSON.parse(sessionStorage.getItem('Cha'));
          let supplier = {
            name: savedData?.name || props?.vendor?.name,
            shortName: savedData?.shortName || '',
            gstin: savedData?.gstin || '',
            addresses: savedData?.addresses ,
            authorisedSignatoryDetails: savedData?.authorisedSignatoryDetails || [],
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
          let tempArr = savedData?.authorisedSignatoryDetails;
          // let optionArray = [...options];
          // tempArr.forEach((val, index) => {
          //   val.actions = 'true';
          //   if (tempArr?.length > 0) {
          //     let index = optionArray.indexOf(val.name);
          //     if (index > -1) {
          //       optionArray.splice(index, 1);
          //     }
          //   }
          // });
          // setOptions([...optionArray]);

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
              setAddressList( props.data?.addresses)
            }
          setSeteveState(supplier);
        } else {
          let supplier = {
            name: props.data?.name || props?.vendor?.name,
            shortName: props.data?.shortName || '',
            gstin: props.data?.gstin || '',
            addresses: props.data?.addresses || [],
            authorisedSignatoryDetails: props.data?.authorisedSignatoryDetails || [],
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
         
          setSeteveState(supplier);
          let tempArr = props?.data?.authorisedSignatoryDetails;
         
        }
      } else if (sessionStorage.getItem('Stevedore')) {
        let savedData = JSON.parse(sessionStorage.getItem('Stevedore'));
        let supplier = {
          name: savedData.name || props?.vendor?.name,
          shortName: savedData.shortName || '',
          gstin: savedData.gstin || '',
          addresses: savedData.addresses || [],
          authorisedSignatoryDetails: savedData.authorisedSignatoryDetails || [],
        };
        setList(
          savedData?.authorisedSignatoryDetails.length > 0
            ? savedData?.authorisedSignatoryDetails
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
        let tempArr = props?.data?.authorisedSignatoryDetails;
        // let optionArray = [...options];
        // tempArr.forEach((val, index) => {
        //   val.actions = 'true';
        //   if (tempArr?.length > 0) {
        //     let index = optionArray.indexOf(val.name);
        //     if (index > -1) {
        //       optionArray.splice(index, 1);
        //     }
        //   }
        // });
        // setOptions([...optionArray]);
            if(props.data?.addresses?.length==0){
           let temp=[];
       if(savedData.address?.length>0){
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
              setAddressList( props.data?.addresses)
            }
        setSeteveState(supplier);
      } else {
        let supplier = {
          name: props.data?.name || props?.vendor?.name,
          shortName: props.data?.shortName || '',
          gstin: props.data?.gstin || props?.vendor?.gstin,
          addresses: props.data?.addresses || [],
          authorisedSignatoryDetails: props.data?.authorisedSignatoryDetails || [],
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
              setAddressList( props.data?.addresses)
            }
        setSeteveState(supplier);
        let tempArr = props?.data?.authorisedSignatoryDetails;
        // let optionArray = [...options];
        // tempArr.forEach((val, index) => {
        //   val.actions = 'true';
        //   if (tempArr?.length > 0) {
        //     let index = optionArray.indexOf(val.name);
        //     if (index > -1) {
        //       optionArray.splice(index, 1);
        //     }
        //   }
        // });
        // setOptions([...optionArray]);
      }
    }
  }, [props.data, props.sameAsCHA]);

  useEffect(() => {
    if (props.saveData == true && props.active == 'Stevedore') {
      let data = {
        seteveState: seteveState,
        list: list,
        addressList: addressList,
      };

      props.sendData('Stevedore', data);
    }
    if (props.submitData == true && props.active == 'Stevedore') {
      let data = {
        seteveState: seteveState,
        list: list,
        addressList: addressList,
      };

      props.updateData('Stevedore', data);
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
      val?.name == 'Bhawana Jain' ||
      val?.name == 'Vipin Kumar' ||
      val?.name == 'Devesh Jain' ||
      val?.name == 'Fatima Yannoulis'
    ) {
      let temp = [...options];
      temp.push(val.name);
      setOptions([...temp]);
    }
  };
  const handleInput = (name, value, key) => {
    const newInput = { ...seteveState };

    newInput[name] = value;
    setSeteveState(newInput);
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
          arrayToSave.phoneNo = val.phoneNo ||val.phoneNumber;
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
 
  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0`}>
        <Form className={`${styles.form} border_color`}>
          <div className="row border_color ">
            <Form.Group className={`${styles.form_group} d-flex col-md-8 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="name"
                value={seteveState.name}
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Name<strong className="text-danger">*</strong>
              </Form.Label>
              <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="shortName"
                value={seteveState.shortName}
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Short Name <strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex align-items-center">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="gstin"
                  value={seteveState.gstin}
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value);
                  }}
                >
                  <option>Select an option</option>
                  {props?.vendor?.gstin.length > 0 && props.vendor.gstin.map((val,index)=>{
                     return <option value={`${val}`}>{val}</option>
                  })}
                  
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                  GSTIN<strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
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
            props.vendor.gstin?props.vendor.gstin:[]
          )}
        {isEdit == false && (
          <div className={`${styles.newAddressContainer} card m-0 border_color`}>
            <div className={`${styles.newAddressHead} border_color`}>
              <span>Add a new address</span>
            </div>
            <div className="card-body p-0">
              <div className={`${styles.newAddressContent} row`}>
                <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <div className="d-flex align-items-center">
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
                      <option value="Branch">Branch</option>
                      <option value="Supplier">Supplier Address</option>
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
                {addressType == 'Supplier' ? (
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
                          setAddress(e.target.name, e.target.value);
                        }}
                      />
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
                      <div className="d-flex align-items-center">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="gstin"
                          value={newAddress.gstin}
                          onChange={(e) => {
                            setAddress(e.target.name, e.target.value);
                          }}
                        >
                          <option>Select an option</option>
                          {props?.vendor?.gstin.length > 0 && props.vendor.gstin.map((val,index)=>{
                              return <option value={`${val}`}>{val}</option>
                          })}
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
                        value={newAddress.pinCode}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        onChange={(e) => {
                          setAddress(e.target.name, e.target.value);
                        }}
                      />
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
        {signatoryList(list,setRemovedOption,handleChangeInput,removedOption,props?.vendor?.options?props.vendor.options:[],handleChangeInput2,onEditRemove,handleRemove,addMoreRows,onEdit)}
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
  gstin
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
              <option>Select an option</option>
              <option value="Registered">Registered</option>
              <option value="Branch">Branch</option>
              <option value="Supplier">Supplier</option>
            </select>
            <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
              Address Type<strong className="text-danger">*</strong>
            </Form.Label>
            <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
          </div>
        </Form.Group>
        {addressEditType == 'Supplier' ? (
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
                  editNewAddress(e.target.name, e.target.value);
                }}
              />
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
                  editNewAddress(e.target.name, e.target.value);
                }}
              />
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
