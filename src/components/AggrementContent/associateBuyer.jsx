/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';

let associate = {
  branchName: '',
  shortName: '',
  gstin: '',
};

function Index(props) {

  const [associateData, setAssociateData] = useState(associate);
  const [addressList, setAddressList] = useState([]);
  const [docList, setDocList] = useState([]);
  const [doc, setdoc] = useState({ attachDoc: '' });
  const [removedOption, setRemovedOption] = useState(null);
  const [removedArr, setRemovedArr] = useState([]);
  const [masterList,setmasterList] = useState([])
  const [options,setOptions] = useState([])
  const [newAddress, setNewAddress] = useState({
    addressType: 'Registered',
    fullAddress: '',
    pinCode: '',
    country: '',
    gstin: '',
    state: '',
    city: '',
  });
  const [companyAddress, setCompanyAddress] = useState({
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
  const [addressType, setAddressType] = useState('Registered');
  const [addressEditType, setAddressEditType] = useState('Registered');
  const [list, setList] = useState([]);
 
  useEffect(() => {
    if(props.directors){
      let temp=[]
      let options=[]
       props.directors.forEach((val,index)=>{
         temp.push(
          {
          name: val.name,
          designation: val.designation,
          email: val.email,
          phoneNo: '',
         }
         )
          options.push(val.name)
       })
      
       setmasterList([...temp])
       setOptions([...options])
    }
  },[props.directors])
  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('Associate')) {
        let savedData = JSON.parse(sessionStorage.getItem('Associate'));
        let buyer = {
          branchName: savedData.branchName,
          shortName: savedData.shortName,

          gstin: savedData.gstin,
        };
        setAddressList(savedData.addresses);
        setList(savedData.authorisedSignatoryDetails);
        let temp = [];
  
        if (savedData.authorisedSignatoryDetails?.length > 0) {
          savedData.authorisedSignatoryDetails.forEach((val, index) => {
            if (val.document) {
            
              temp.push({ attachDoc: val.document });
            }
          });
        } else {
          setList([
            {
              name: '',
              designation: '',
              email: '',
              phone: '',
              actions: 'false',
              addnew: 'false',
            },
          ]);
        }
      
        setDocList(temp);
        setAssociateData(buyer);
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
      } else {

        let buyer = {
          branchName: props?.data?.branch,
          shortName: props?.data?.shortName,

          gstin: props?.data?.gstin || props?.selectedGST,
        };
        setAddressList(props?.data?.addresses ? props?.data?.addresses : []);
        setList(props?.data?.authorisedSignatoryDetails ? props?.data?.authorisedSignatoryDetails : []);
        let temp = [];
        if (props?.data?.authorisedSignatoryDetails.length > 0) {
          props?.data?.authorisedSignatoryDetails.forEach((val, index) => {
            if (val.document) {
              temp.push({ attachDoc: val.document });
            }
          });
        } else {
          setList([
            {
              name: '',
              designation: '',
              email: '',
              phone: '',
              actions: 'false',
              addnew: 'false',
            },
          ]);
        }

        setDocList(temp);

        setAssociateData(buyer);
        let tempArr = props.data?.authorisedSignatoryDetails;
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
        setAddressList(props?.data.addresses);
        // setOptions([...optionArray]);
      }
    }
  }, [props]);

  useEffect(() => {
    if (props?.address) {
      let a = {
        addressType: 'Registered',
        fullAddress: props.address,
        pinCode: '',
        country: '',
        gstin: '',
        state: '',
        city: '',
      };

      setCompanyAddress(a);
    }
  }, [props.address]);

  useEffect(() => {
    if (props.saveData == true && props.active == 'Associate Buyer') {
      let data = {
        associate: associateData,
        address: addressList,
        list: list,
        companyAddress: companyAddress,
      };
      props.sendData('Associate Buyer', data);
    }
    if (props.submitData == true && props.active == 'Associate Buyer') {
     
      let data = {
        associate: associateData,
        address: addressList,
        list: list,
        companyAddress: companyAddress,
      };

      props.updateData('Associate Buyer', data);
    }
  }, [props.saveData, props.submitData]);
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
    const newInput = { ...associateData };

    newInput[name] = value;
    setAssociateData(newInput);
  };

  const onEdit = (index) => {
    let tempArr = list;
    // tempArr[index].actions.edit="false"

    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        // 👇️ if id equals 2, update country property
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
        phoneNo: '',
        actions: 'false',
        addnew: 'false',
      },
    ]);
   
  };
  const handleRemove = (index, val) => {
    docList.forEach((val, i) => {
      if (index == val.index) {
        setDocList([...docList.slice(0, i), ...docList.slice(i + 1)]);
      }
    });
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
    
     masterList.forEach((master,index)=>{
      if(val.name== master.name){
        let temp = [...options];
        temp.push(val.name);
        setOptions([...temp]);
      }
     })
     let temp = [...removedArr];
      var indexOption = temp.indexOf(val.name);
      if (indexOption !== -1) {
        temp.splice(indexOption, 1);
      }
        setRemovedArr([...temp])
   
  };
  const removeDoc = (index) => {

    setDocList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, attachDoc: '' };
        }

        return obj;
      });

      return newState;
    });
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return { ...obj, document: 'new' };
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

  const handleChangeInput = (name, value, index) => {
    let arrayToSave = {
      name: '',
      designation: '',
      email: '',
      phoneNo: '',
      actions: 'false',
      addnew: 'false',
    };
console.log("ASda",value)
    if (value == 'addnew') {
      if (docList.length < 1) {
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

        arrayToSave = {
          name: '',
          designation: '',
          email: '',
          phoneNo: '',
          actions: 'false',
          addnew: 'true',
        };
      }
    } else {
      masterList.forEach((val, index) => {
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
  console.log(list,"asdasd")
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

  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0`}>
        <Form className={`${styles.form} border_color`}>
          <div className="row">
            <div className={`${styles.info} col-md-4 col-sm-6`}>
              <span>
                Name
                {/* <strong className="text-danger">*</strong> */}
              </span>
              <p>{props?.order?.company?.companyName}</p>
            </div>
            <div className={`${styles.info} col-md-4 col-sm-6`}>
              <span>PAN No.</span>
              <p>{props?.pan}</p>
            </div>
            <div className={`col-md-4 col-sm-6`}>
              <span></span>
              <p></p>
            </div>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="branchName"
                value={associateData.branchName}
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>Branch Name</Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="gstin"
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value);
                  }}
                  value={associateData.gstin}
                >
                  <option>Select an option</option>
                  {props.gstList &&
                    props.gstList.map((val, index) => {
                      return <option value={val}>{val}</option>;
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
                name="shortName"
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value);
                }}
                value={associateData.shortName}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>Short Name</Form.Label>
            </Form.Group>
          </div>
        </Form>
        <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
          <div className={`${styles.containerChild} d-flex justify-content-between flex-wrap  `}>
            {companyAddress.fullAddress !== '' ? (
              <>
                <div className={`${styles.registeredAddress} d-flex justify-content-between border_color`}>
                  <div className={`${styles.registeredAddressHeading}`}>
                    <span>{companyAddress.addressType} Address</span>
                    <div className={`${styles.address_text}`}>
                      {companyAddress.fullAddress} {companyAddress.pinCode} {companyAddress.country}
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {addressList?.map((val, index) => {
              return (
                <div key={index} className={`${styles.registeredAddress} d-flex justify-content-between border_color`}>
                  <div className={`${styles.registeredAddressHeading}`}>
                    <span>{val.addressType} Address</span>
                    <div className={`${styles.address_text}`}>
                      {val.fullAddress} {val.pinCode} {val.country}
                    </div>
                  </div>
                  {props.address !== val.fullAddress ? (
                    <div className={`d-flex ${styles.actions} `}>
                      <div
                        className={`${styles.addressEdit} d-flex justify-content-center align-items-center mt-n2`}
                        onClick={() => {
                          handleEditAddressInput(index);
                        }}
                      >
                        <img className={`${styles.image} img-fluid`} src="/static/mode_edit.svg" alt="edit" />
                      </div>
                      <div
                        className={`${styles.addressEdit} ml-3 d-flex justify-content-center align-items-center mr-n3 mt-n2`}
                        onClick={() => {
                          onAddressRemove(index);
                        }}
                      >
                        <img className={`${styles.image} img-fluid`} src="/static/delete 2.svg" alt="delete" />
                      </div>
                    </div>
                  ) : null}
                </div>
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
          )}
        {isEdit == false && (
          <div className={`${styles.newAddressContainer} card border_color`}>
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
                      {/* <option value="Branch">Branch </option> */}
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
                        let temp = e.target.value;
                        // if(temp=="1"||temp=="2"||temp=="3"||temp=="4"||temp=="5"||temp=="6"||temp=="7"||temp=="8"||temp=="9"||temp=="0"){
                        //   temp=""
                        // }
                        setAddress(e.target.name, temp);
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
                                  {console.log(val.addnew,"val.addnew ")}
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

                                        <option value={'addnew'}>{'Add New'}</option>
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
                                    onKeyDown={(evt) => ['e', 'E', '+', '-',"."].includes(evt.key) && evt.preventDefault()}
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
        <div className={styles.displaytable}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                <tr height={67} className="table_row">
                  <th>
                    DOCUMENT NAME <img className="mb-1" src="/static/icons8-sort-24.svg" alt="sort" />
                  </th>
                  <th>
                    FORMAT <img className="mb-1" src="/static/icons8-sort-24.svg" alt="sort" />
                  </th>
                  <th>
                    DOCUMENT DATE <img className="mb-1" src="/static/icons8-sort-24.svg" alt="sort" />
                  </th>
                  <th></th>
                  <th>ACTION</th>
                </tr>
                <tbody>
                  {/* <tr  className='table_row'>
                      <td><strong>Board Resolution Copy<span className={`danger`}>*</span></strong></td>
                      <td><img src="/static/pdf.svg" className="img-fluid" alt="Pdf"/></td>
                      <td>{ doc.attachDoc == '' ? '' : moment(doc.attachDoc?.date).format('DD-MM-YYYY, h:mm a')}</td>
                      <td>
                      <td style={{padding:"0"}}>
                    {doc.attachDoc == '' ? (
                      <div className={styles.uploadBtnWrapper}>
                        <input
                          type="file"
                          name="myfile"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                          onChange={async(e) => {
                            // addDoc(e.target.files[0], index)
                            // uploadDocument2(e)
                           let data = await props.uploadDoc(e)
                          
                            setdoc({attachDoc:data})
                          }}
                        />
                        <button className={`${styles.button_upload} btn`}>
                          Upload
                        </button>
                      </div>
                    ) : (
                      <div className={`${styles.certificate} d-flex justify-content-between`}>
                        <span>
                          {doc?.attachDoc?.originalName}
                        </span>
                        <img
                          className={`${styles.close_image}`}
                          src="/static/close.svg"
                          onClick={() =>setdoc({attachDoc:""})}
                          alt="Close"
                        />{' '}
                      </div>
                    )}
                      </td>
                      </td>
                      <td>
                      
                        <img  src="/static/upload.svg" alt="upload"/>
                      </td>
                  </tr>  */}

                  {docList.length > 0 &&
                    docList.map((val, index) => {
                      return (
                        <>
                          <tr key={index} className="table_row">
                            <td>
                              <strong>
                                Board Resolution Copy
                                <span className={`danger`}>*</span>
                              </strong>
                            </td>
                            <td>
                              <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
                              {/* {val.designation} */}
                            </td>
                            <td>{`28-02-2022,5:30 PM`}</td>
                            <td>
                              {val.attachDoc == '' || val.attachDoc == 'new' ? (
                                <div className={styles.uploadBtnWrapper}>
                                  <input
                                    type="file"
                                    name="myfile"
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                    onChange={async (e) => {
                                      let data = await props.uploadDoc(e);
                                      addDoc(data, index);
                                      // uploadDocument2(e)
                                    }}
                                  />
                                  <button className={`${styles.button_upload} btn`}>Upload</button>
                                </div>
                              ) : (
                                <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                  <span>{val.attachDoc?.originalName}</span>
                                  <img
                                    className={`${styles.close_image} image_arrow`}
                                    src="/static/close.svg"
                                    onClick={() => removeDoc(index)}
                                    alt="Close"
                                  />{' '}
                                </div>
                              )}
                            </td>
                            <td>
                              {/* <img onClick={()=>removeDocArr(index)} className={`mr-3`} src="/static/delete 2.svg" alt="delete"/> */}
                              <img src="/static/upload.svg" alt="upload" />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
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
          <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
            <Form.Control
              className={`${styles.input_field} input form-control`}
              required
              type="text"
              value={EditAddress.country}
              name="country"
              onChange={(e) => {
                let temp = e.target.value;
               
               
                editNewAddress(e.target.name, temp);
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
