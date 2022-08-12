/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
let cma = {
  "name": "",
  "shortName": "",
  "gstin": "",
  "addresses": [

  ],
  "authorisedSignatoryDetails": [

  ],



}
function Index(props) {
  const [cmaState, setCmaState] = useState(cma)
  const [list, setList] = useState([])
  const [addressList, setAddressList] = useState([])
  const [newAddress, setNewAddress] = useState(
    {
      "addressType": "Registered",
      "fullAddress": "",
      "pinCode": "",
      "country": "",
      "gstin": "",
      "state": "",
      "city": ""
    }
  )
  const [addressType, setAddressType] = useState("Registered")
  useEffect(() => {
    let tempArr = cmaState.authorisedSignatoryDetails
    tempArr.forEach((val, index) => {
      val.actions = "true"
    })
    setList(tempArr)
    let tempArr2 = cmaState.addresses
    setAddressList(tempArr2)
  }, [])
 let masterList=[
  {name:"Bhawana Jain",designation:"Vice President (Finance & Accounts)",email:"bhawanajain@somanigroup.com",phoneNo:""},
   {name:"Vipin Kumar",designation:"Manager Accounts",email:"vipinrajput@somanigroup.com",phoneNo:""},
    {name:"Devesh Jain",designation:"Director",email:"devesh@indointertrade.ch",phoneNo:""},
     {name:"Fatima Yannoulis ",designation:"Chief Financial Officer",email:"fatima@indointertrade.ch",phoneNo:""}
 ]
  useEffect(() => {
    if (window) {
      console.log(sessionStorage.getItem("Cma"), ".getItem")
      if (sessionStorage.getItem("Cma")) {
        let savedData = JSON.parse(sessionStorage.getItem("Cma"))
        let cma = {
          "name": savedData.name,
          "shortName": savedData.shortName,
          "gstin": savedData.gstin,

          "addresses": savedData.addresses,
          "authorisedSignatoryDetails": savedData.authorisedSignatoryDetails,


        }
        setList(savedData.authorisedSignatoryDetails)
        setAddressList(savedData.addresses)
        setCmaState(cma)
      }else{
         let cma = {
          "name": props.data?.name,
          "shortName": props.data?.shortName,
          "gstin": props.data?.gstin,

          "addresses": props.data?.addresses,
          "authorisedSignatoryDetails": props.data?.authorisedSignatoryDetails,


        }
        setList(props.data?.authorisedSignatoryDetails)
        setAddressList(props.data?.addresses)
        setCmaState(cma)
      }
    }
  }, [])
  useEffect(() => {
    if (props.saveData == true && props.active == "Cma") {
      let data = {
        cmaData: cmaState,
        list: list,
        addressList: addressList,
      }
      props.sendData("Cma", data)
    }
    if (props.submitData == true && props.active == "Cma") {
      let data = {
        cmaData: cmaState,
        list: list,
        addressList: addressList,
      }

      props.updateData("Cma", data)

    }



  }, [props])
  const onEdit = (index) => {
    let tempArr = list;
    setList(prevState => {
      const newState = prevState.map((obj, i) => {

        if (i == index) {
          return { ...obj, actions: 'false' };
        }
        // 👇️ otherwise return object as is
        return obj;
      });

      return newState;
    });

  }
  const onEditRemove = (index) => {


    setList(prevState => {
      const newState = prevState.map((obj, i) => {

        if (i == index) {
          return { ...obj, actions: 'true' };
        }


        return obj;
      });

      return newState;
    });

  }
  const addMoreRows = () => {


    setList([...list, {
      name: "", designation: "", email: "", phoneNo: "",
      actions: "false"
    }])

  }
  const handleRemove = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)])
  }
  const handleInput = (name, value, key) => {

    const newInput = { ...cmaState }

    newInput[name] = value
    setCmaState(newInput)




  }

 const handleChangeInput=(name,value,index)=>{
   let arrayToSave={
     name:"",designation:"",email:"",phoneNo:"",
      actions:"false"
   }
   masterList.forEach((val,index)=>{
    if(val.name==value){
      arrayToSave.name=val.name
      arrayToSave.designation=val.designation
      arrayToSave.email=val.email
      arrayToSave.phoneNo=val.phoneNo
    }
   })
 

    setList(prevState => {
      const newState = prevState.map((obj ,i)=> {
       
        if (i == index) {
          return arrayToSave;
        }

        
        return obj;
      });

      return newState;
    });
    console.log(tempArr,"987")
    // setList(tempArr)

  }
  const handleAddressInput = () => {
    // let tempArr=[...addressList]
    setAddressList(current => [...current, newAddress])
    // setAddressList([...addressList],newAddress)
    setNewAddress({
      "addressType": "",
      "fullAddress": "",
      "pinCode": "",
      "country": "",
      "gstin": "",
      "state": "",
      "city": ""
    })
  }
  const onAddressRemove = (index) => {
    setAddressList([...addressList.slice(0, index), ...addressList.slice(index + 1)])

  }
  return (

    <>
      <div className={styles.container}>
        <Form className={`${styles.form}`}>
          <div className="row border-color ">
            <Form.Group className={`${styles.form_group} col-md-8 col-sm-6`}>
              <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  value={cmaState.name}
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value)
                  }}
                >
                  <option value="Dr. Amin">Dr. Amin</option>

                </select>
                <Form.Label
                  className={`${styles.label_heading} ${styles.select}  label_heading`}
                >
                  Name<strong className="text-danger">*</strong>
                </Form.Label>                
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                value={cmaState.shortName}
                onChange={(e) => {
                  handleInput(e.target.name, e.target.value)
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Short Name
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  value={cmaState.gstin}
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value)
                  }}
                >
                  <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>

                </select>
                <Form.Label
                  className={`${styles.label_heading} ${styles.select}  label_heading`}
                >
                  GSTIN<strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </Form.Group>
          </div>
        </Form>
        <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
          <div className={`${styles.multiAddContainer} d-flex justify-content-between align-items-center flex-wrap`}>
            {addressList.map((val, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.registeredAddress} d-flex justify-content-between border-color`}
                >
                  <div className={`${styles.registeredAddressHeading}`}>
                    <span>{val.addressType} Address</span>
                    <div className={`${styles.address_text}`}>
                      {val.fullAddress} {" "} {val.pinCode} {" "} {val.country}
                    </div>
                  </div>
                  <div className={`d-flex ${styles.actions}`}>
                    <div
                      className={`${styles.addressEdit} d-flex justify-content-center align-items-center mt-n2`}
                      onClick={() => {
                        handleEditAddressInput(index)
                      }}
                    >
                      <img src="/static/mode_edit.svg" alt="edit" />
                    </div>
                    <div
                      className={`${styles.addressEdit} ml-3 d-flex justify-content-center align-items-center mt-n2 mr-n3`}
                      onClick={() => {
                        onAddressRemove(index)
                      }}
                    >
                      <img src="/static/delete 2.svg" alt="delete" />
                    </div>
                  </div>
                </div>
              )
            })}
            <div
              className={`${styles.registeredAddress} d-flex justify-content-between border-color w-40`}
            >
              <div className={`${styles.registeredAddressHeading} w-100`}>
                <span>Branch Address</span>
                <div className={`${styles.address_text}`}>
                  Plot No-49-48-6/1, Lalitha Nagar, Ground Floor, Sakshi Office
                  Road, Akkayyapalem, Visakhapatnam, Andhra Pradesh, 530016 India
                </div>
              </div>
              <div className={`d-flex ${styles.actions}`}>
                <div
                  className={`${styles.addressEdit} d-flex justify-content-center align-items-center mt-n2 mr-n3`}
                  onClick={() => {
                    handleEditAddressInput(index)
                  }}
                >
                  <img src="/static/mode_edit.svg" alt="edit" />
                </div>
                {/* <div
                  className={`${styles.addressEdit} ml-3 d-flex justify-content-center align-items-center mt-n2 mr-n3`}
                  onClick={() => {
                    onAddressRemove(index)
                  }}
                >
                  <img src="/static/delete 2.svg" alt="delete" />
                </div> */}
              </div>

            </div>
          </div>
        </div>
        <div className={`${styles.newAddressContainer}`}>
                  <div className={styles.newAddressHead}><span className={`mb-3`}>Add new address</span></div>
                    <div className={`${styles.newAddressContent} row`}>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <div className='d-flex'>
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="addressType"
                          
                          onChange={(e) => {
                            setAddressType(e.target.value)
                            setAddress(e.target.name,e.target.value)
                          }}
                        >
                          <option value="Registered">Registered Office</option>
                          <option value="Branch">Branch </option>
                            <option value="Supplier">Supplier Address </option>
                          
                        </select>
                        <Form.Label
                          className={`${styles.label_heading} ${styles.select}  label_heading`}
                        >
                          Address Type<strong className="text-danger">*</strong>
                        </Form.Label>
                        <img
                          className={`${styles.arrow} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </Form.Group>
                {addressType=="Registered" || addressType=="Supplier"?
                    <>
                    <Form.Group className={`${styles.form_group}  col-md-12 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="fullAddress"
                        onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
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
                        name="pinCode"
                        onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
                        }}
                      />
                      <Form.Label className={`${styles.label_heading} label_heading`}>
                        Pin Code<strong className="text-danger">*</strong>
                      </Form.Label>
                        <img
                            className={`${styles.search_image} img-fluid`}
                            src="/static/search-grey.svg"
                            alt="Search"
                          />
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="country"
                          onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
                        }}
                      />
                      <Form.Label className={`${styles.label_heading} label_heading`}>
                        Country<strong className="text-danger">*</strong>
                      </Form.Label>
                        <img
                            className={`${styles.search_image} img-fluid`}
                            src="/static/search-grey.svg"
                            alt="Search"
                          />
                    </Form.Group>
                    </>
                    :<>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <div className='d-flex'>
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="gstin"
                          onChange={(e) => {
                            setAddress(e.target.name,e.target.value)
                          }}
                        >
                          <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                          
                        </select>
                        <Form.Label
                          className={`${styles.label_heading} ${styles.select}  label_heading`}
                        >
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
                        type="text"
                        name="pinCode"
                        onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
                        }}
                      />
                      <Form.Label className={`${styles.label_heading} label_heading`}>
                        Pin Code<strong className="text-danger">*</strong>
                      </Form.Label>
                        <img
                            className={`${styles.search_image} img-fluid`}
                            src="/static/search-grey.svg"
                            alt="Search"
                          />
                    </Form.Group>
                      <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="country"
                        onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
                        }}
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
                        onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
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
                        onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
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
                        onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
                        }}
                      />
                      <Form.Label className={`${styles.label_heading} label_heading`}>
                        Address<strong className="text-danger">*</strong>
                      </Form.Label>
                    </Form.Group>
                    </>}
                      
                    
                    </div>
                  <div className="d-flex">
                    <div className={`${styles.add} d-flex justify-content-center align-items-center`}
                    onClick={()=>{
                    handleAddressInput()
                    }}
                    >
                    <span>Add</span>
                    </div>
                    <div className={`${styles.cancel} d-flex justify-content-center align-items-center`}>
                    <span>Cancel</span>
                    </div>
                  </div>
        </div>
        <div className={`${styles.tableContainer} border-color card p-0`}>
          <div
            className={`${styles.sub_card}  card-header d-flex align-items-center justify-content-between bg-transparent`}
            data-toggle="collapse"
            data-target="#customerDetail"
            aria-expanded="true"
            aria-controls="customerDetail"
          >
            <div className={styles.header}>
              <h2 className={`mb-0`}>Authorised Signatory Details</h2>
              <span className=" d-flex align-items-center justify-content-between">

                +
              </span>
            </div>
          </div>
          <div
            id="customerDetail"
            className={`collapse ${styles.body}  value_card card-body row`}
            aria-labelledby="customerDetail"

          >
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <th>NAME</th>
                    <th>DESIGNATION</th>
                    <th>EMAIL</th>
                    <th>PHONE NO.</th>
                    <th>ACTION</th>
                  </tr>
                  <tbody>
                    {list.length > 0 && list.map((val, index) => {
                      return (
                        <>
                          {val.actions == "true" ?
                            <tr key={index}>
                              <td>{val.name}</td>
                              <td>{val.designation}</td>
                              <td>{val.email}</td>
                              <td>{val.phone}</td>
                              <td className={`d-flex`}>
                                <img className={`${styles.image} img-fluid mr-3`} onClick={() => (onEdit(index))} src="/static/mode_edit.svg" alt="edit" />
                                <img onClick={() => (handleRemove(index))} src="/static/delete 2.svg"></img>
                              </td>

                            </tr>
                            :
                            <tr key={index}>
                              <td>
                                <select
                                  value={val.name}
                                  className={`${styles.customSelect}`}
                                  onChange={(e) => {
                                    handleChangeInput(e.target.name, e.target.value, index)
                                  }}>
  <option value={"Bhawana Jain"}>{"Bhawana Jain"}</option>
                              <option value={"Vipin Kumar"}>{"Vipin Kumar"}</option>
                              <option value={"Devesh Jain"}>{"Devesh Jain"}</option>
                              <option value={"Fatima Yannoulis"}>{"Fatima Yannoulis"}</option>
                                </select>
                                <img
                                  className={`${styles.arrow2} image_arrow img-fluid`}
                                  src="/static/inputDropDown.svg"
                                  alt="Search"
                                />
                              </td>
                              <td><input type="text"
                                placeholder={val.designation}
                                name="designation"
                                // onChange={(e) => {
                                //   handleChangeInput(e.target.name, e.target.value, index)
                                // }}
                              ></input></td>
                              <td><input type="text" placeholder={val.email}
                                name="email"
                                // onChange={(e) => {
                                //   handleChangeInput(e.target.name, e.target.value, index)
                                // }}
                              ></input></td>
                              <td><input type="text" placeholder={val.phoneNo}
                                name="phoneNo"
                                // onChange={(e) => {
                                //   handleChangeInput(e.target.name, e.target.value, index)
                                // }}
                              ></input></td>
                              <td className={`d-flex`}>
                                <img className={`${styles.image} img-fluid mr-3`} onClick={() => (onEditRemove(index))} src="/static/mode_edit.svg" alt="edit" />
                                <img onClick={() => (handleRemove(index))} src="/static/delete 2.svg"></img>
                              </td>

                            </tr>
                          }
                        </>
                      )
                    })}
                  </tbody>
                </table>
                <div className={`${styles.addMoreRows}`} onClick={(e) => {
                  addMoreRows()
                }}>
                  <span>+</span>  Add more rows
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Index
