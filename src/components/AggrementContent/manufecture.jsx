/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import { add } from 'lodash'
let supplier={
       "name": "",
        "shortName": "",
        "bankDetails": {
            "bankName": "",
            "accountNo": "",
            "swiftCode": "",
            "city": ""
        },
        "addresses": [

        ],
        "authorisedSignatoryDetails": [

        ],
        "multiParty": true,
        "multiPartyAddresses": [
            {
                "addressType": "addressType",
                "fullAddress": "addressType",
                "pinCode": "addressType",
                "country": "addressType",
                "gstin": "addressType",
                "state": "addressType",
                "city": "addressType"
            }
          ]
        
}
function Index(props) {
  
  const[supplierState,setSupplierState]=useState(supplier)
  const [list,setList]=useState([])
  const [addressList,setAddressList]=useState([])
  const [newAddress,setNewAddress]=useState(
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
  const [EditAddress,setEditAddress]=useState(
                {
                "addressType": "",
                "fullAddress": "",
                "pinCode": "",
                "country": "",
                "gstin": "",
                "state": "",
                "city": ""
            }
  )
  const [addressType,setAddressType]=useState("Registered")
 

  useEffect(() => {
    let tempArr=supplierState.authorisedSignatoryDetails
    tempArr.forEach((val,index)=>{
      val.actions = "true"
    })
    setList(tempArr)
    let tempArr2=supplierState.addresses
    setAddressList(tempArr2)
  },[])
 

  console.log(supplierState,"supplierState")
  useEffect(() => {
    if(props.saveData==true && props.active=="Supplier"){
       let data={
        supplierState:supplierState,
        list:list,
        addressList:addressList,
       }
       props.sendData("Supplier",data)
    }
    if(props.submitData==true && props.active=="Supplier"){
      let data={
        supplierState:supplierState,
        list:list,
        addressList:addressList,
       }

      props.updateData("Supplier",data)

    }

 
    setSupplierState({...supplierState,multiParty:props.multiPart})
  },[props])
  console.log(props,"props")
  const onEdit=(index)=>{
    let tempArr=list;
    setList(prevState => {
      const newState = prevState.map((obj ,i)=> {
        
        if (i == index) {
          return {...obj, actions: 'false'};
        }

        return obj;
      });

      return newState;
    });

  }
  const onEditRemove=(index)=>{
 

       setList(prevState => {
      const newState = prevState.map((obj ,i)=> {
       
        if (i == index) {
          return {...obj, actions: 'true'};
        }

        
        return obj;
      });

      return newState;
    });

  }
  const addMoreRows=()=>{

   
  setList([...list,{
      name:"",designation:"",email:"",phoneNo:"",
      actions:"false"
    }])

  }
  const handleRemove=(index)=>{
    setList([...list.slice(0,index), ...list.slice(index+1)])
  }
  const handleInput=(name,value,key)=>{
   
  const newInput = { ...supplierState }
  if(key=="bankName"){
  newInput.bankDetails[name] = value
  setSupplierState(newInput)
  }else{
      newInput[name] = value
      setSupplierState(newInput)

  }
    

  }
  
  const handleChangeInput=(name,value,index)=>{

  let tempArr=list;
    tempArr.forEach((val,i)=>{
    if(i==index){
        val[name] = value
    }
    })
    setList(tempArr)

  }
  const handleAddressInput=()=>{

    setAddressList(current => [...current, newAddress])
     
      setNewAddress({
                  "addressType": "Registered",
                  "fullAddress": "",
                  "pinCode": "",
                  "country": "",
                  "gstin": "",
                  "state": "",
                  "city": ""
              })
  }
 const onAddressRemove=(index)=>{
 setAddressList([...addressList.slice(0,index), ...addressList.slice(index+1)])

  }
  const setAddress=(name,value)=>{
   const newInput = { ...newAddress }
   newInput[name] = value
   setNewAddress(newInput)

  }
const [isEdit,setIsEdit]= useState(false)
const [toEditIndex,setToEditIndex]= useState(0)
const handleEditAddressInput=(index)=>{
    setIsEdit(true)
    setToEditIndex(index)
    let tempArr=addressList;
    
    tempArr.forEach((val,i)=>{
     if(i==index){
          setEditAddress({
          "addressType": val.addressType,
          "fullAddress": val.fullAddress,
          "pinCode": val.pinCode,
          "country": val.country,
          "gstin": val.gstin,
          "state": val.state,
          "city": val.city
      })
     }
    })
 
 
}
const editNewAddress=(name,value)=>{
    setIsEdit(true)
   const newInput = { ...EditAddress }
   newInput[name] = value
   setEditAddress(newInput)

  }
  const cancelEditAddress=()=>{
    setIsEdit(false)
  setEditAddress(
                {
                "addressType": "",
                "fullAddress": "",
                "pinCode": "",
                "country": "",
                "gstin": "",
                "state": "",
                "city": ""
            }
      )


  }
  const saveNewAddress=()=>{
    console.log(EditAddress,"EditAddress",toEditIndex)
    setAddressList(prevState => {
      const newState = prevState.map((obj ,i)=> {
        
        if (i == toEditIndex) {
          console.log("here")
          return EditAddress;
        }
// 👇️ otherwise return object as is
        return obj;
      });

      return newState;
    });
    setIsEdit(false)
    setEditAddress(
                {
                "addressType": "",
                "fullAddress": "",
                "pinCode": "",
                "country": "",
                "gstin": "",
                "state": "",
                "city": ""
            }
    )



  }

  console.log(addressList,"addressList")
  console.log(supplierState,"supplierState")
  console.log(list,"list")
  useEffect(() => {
   if(window){
    
    
      if(sessionStorage.getItem("Supplier")){
      console.log("herer23123")
      
      let savedData=JSON.parse(sessionStorage.getItem("Supplier"))
      let supplier={
       "name": savedData.name,
        "shortName": savedData.shortName,
        "bankDetails": {
            "bankName": savedData.bankDetails.bankName,
            "accountNo": savedData.bankDetails.accountNo,
            "swiftCode": savedData.bankDetails.swiftCode,
            "city": savedData.bankDetails.city
        },
        "addresses": savedData.addresses,
        "authorisedSignatoryDetails": savedData.authorisedSignatoryDetails,
        "multiParty": savedData.multiParty,
        "multiPartyAddresses": savedData.multiPartyAddresses
        
       }
       setList(savedData.authorisedSignatoryDetails)
       setAddressList(savedData.addresses)
       setSupplierState(supplier)
    }
   
   }
  },[])
  return (
    <>
      <div className={styles.container}>
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
                  handleInput(e.target.name,e.target.value)
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
               Supplier Name<strong className="text-danger">*</strong>
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
                name="shortName"
                value={supplierState.shortName}
                onChange={(e) => {
                  handleInput(e.target.name,e.target.value)
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Short Name<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>

          </div>
        </Form>
        <div className={`${styles.bankContainer}`}>
          <span className={`mb-3`}>Bank Details</span>
          <div className={`${styles.bankInputContainer} row`}>
              <Col md={4} sm={12}>
                <div className={`${styles.form_group} d-flex`}>
                  <input
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="bankName"
                    value={supplierState.bankDetails.bankName}
                  onChange={(e) => {
                  handleInput(e.target.name,e.target.value,"bankName")
                }}

                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Bank Name
                    <strong className="text-danger">*</strong>
                  </label>
                  <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
                </div>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="accountNo"
                      value={supplierState.bankDetails.accountNo}
                  onChange={(e) => {
                  handleInput(e.target.name,e.target.value,"bankName")
                }}
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Account No.<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="swiftCode"
                    value={supplierState.bankDetails.swiftCode}
                onChange={(e) => {
                  handleInput(e.target.name,e.target.value,"bankName")
                }}
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Swift Code<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="city"
                     value={supplierState.bankDetails.city}
                  onChange={(e) => {
                  handleInput(e.target.name,e.target.value,"bankName")
                }}
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    City<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
          </div>
       
        </div>
        <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
           <div className={`${styles.containerChild} d-flex justify-content-between flex-wrap  `}>
           {addressList.map((val,index)=>{
            return(
           <div
           key={index}
            className={`${styles.registeredAddress} d-flex justify-content-between border-color`}
          >
            <div className={`${styles.registeredAddressHeading}`}>
              <span>{val.addressType} Address</span>
              <div>
               {val.fullAddress} {" "} {val.pinCode} {" "} {val.country}
              </div>
            </div>
            <div className={`d-flex justify-content-between align-items-start ${styles.actions} `}>
            <div
              className={`${styles.addressEdit} mt-3 d-flex justify-content-center align-items align-items-center`}
              onClick={()=>{
                handleEditAddressInput(index)
              }}
            >
              <img src="./static/mode_edit.svg" />
            </div>
            <div
              className={`${styles.addressEdit} mt-3 ml-2 d-flex justify-content-center align-items align-items-center`}
            onClick={()=>{
              onAddressRemove(index)
            }}
            >
              <img src="./static/delete 2.svg" />
            </div>
            </div>
             </div>
            )
           }) }

           </div>
        </div>
        {isEdit && editData(addressType,EditAddress,setEditAddress,editNewAddress,cancelEditAddress,saveNewAddress)}
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
        <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
          <tr>
            <th>NAME</th>
            <th>DESIGNATION</th>
            <th>EMAIL</th>
            <th>PHONE NO.</th>
            <th>ACTION</th>
          </tr>
          <tbody>
            {list.length>0 && list.map((val,index)=>{
              return(
                <>
                {val.actions=="true"?
                <tr key={index}>
                  <td>{val.name}</td>
                  <td>{val.designation}</td>
                  <td>{val.email}</td>
                  <td>{val.phoneNo}</td>
                  <td className={`d-flex justify-content-start`}>
                  <img className="mr-2" onClick={()=>(onEdit(index))} src="./static/mode_edit.svg"  />
                   <img onClick={()=>(handleRemove(index))} src="/static/delete 2.svg"></img>
                  </td>

                </tr>
                :<tr key={index}>
                  <td><select 
                  value="name"
                  onChange={(e)=>{
                    handleChangeInput(e.target.name,e.target.value,index)
                  }}>
                    <option value={"Dr.amin"}>{"Dr.amin"}</option>
                    </select>
                 </td>
                  <td><input type="text" 
                  placeholder={val.designation}
                  name= "designation"
                  onChange={(e)=>{
                    handleChangeInput(e.target.name,e.target.value,index)
                  }}
                  ></input></td>
                  <td><input type="text" placeholder={val.email}
                  name= "email"
                  onChange={(e)=>{
                    handleChangeInput(e.target.name,e.target.value,index)
                  }}
                  ></input></td>
                  <td><input type="text" placeholder={val.phoneNo}
                  name= "phoneNo"
                  onChange={(e)=>{
                    handleChangeInput(e.target.name,e.target.value,index)
                  }}
                  ></input></td>
                  <td className={`d-flex  justify-content-between align-items-start`}>
                     <div
                      className={`${styles.addressEdit} mt-3 d-flex justify-content-center  align-items-start`}
                      onClick={()=>{
                       onEditRemove(index)
                      }}
                    >
                      <img src="./static/save-3.svg" />
                    </div>
                     <div
                      className={`${styles.addressEdit} mt-3 d-flex justify-content-center align-items align-items-center`}
                      onClick={()=>{
                       handleRemove(index)
                      }}
                    >
                      <img src="./static/delete 2.svg" />
                    </div>
                     {/* <img  onClick={()=>(onEditRemove(index))}src="./static/save-3.svg"  />
                     <img  onClick={()=>(handleRemove(index))} src="/static/delete 2.svg"></img> */}
                  </td>

                </tr>}
                </>
              )
            })}
          </tbody>
        </table>
        <div className={`${styles.addMoreRows}`} onClick={(e)=>{
          addMoreRows()
        }}>
        <span style={{fontSize:"2rem"}} className={`mr-2`}>+</span>  Add more rows
        </div>
      </div>
        </div>
        <div className={styles.manufacture}>
         
           <span className={``}>Manufacturer Details</span>
           
          <div className={`row`}>

            
            <Form.Group className={`${styles.form_group} d-flex  col-md-8 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="name"
                onChange={(e) => {
                  handleInput(e.target.name,e.target.value)
                }}
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
               Manufacturer Name<strong className="text-danger">*</strong>
              </Form.Label>
                <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
            </Form.Group>

              <div className={`${styles.newAddressContainer}`}>
                  <div className={styles.newAddressHead}><span className={`mb-3`}>Add new address</span></div>
                    <div className={`${styles.newAddressContent} row`}>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
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
                    </Form.Group>
                {addressType=="Registered" || addressType=="Supplier"?
                    <>
                    <Form.Group className={`${styles.form_group}  col-md-12 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="fullAddress"
                        value={newAddress.fullAddress}
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
                        value={newAddress.pinCode}
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
                        value={newAddress.country}
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
                      <select
                        className={`${styles.input_field} input form-control`}
                        name="gstin"
                         value={newAddress.gstin}
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
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="pinCode"
                         value={newAddress.pinCode}
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
                         value={newAddress.country}
                        onChange={(e) => {
                          setAddress(e.target.name,e.target.value)
                        }}
                      />
                      <Form.Label className={`${styles.label_heading} label_heading`}>
                        Short Name<strong className="text-danger">*</strong>
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
                         value={newAddress.city}
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
                         value={newAddress.fullAddress}
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

          </div>
        </div>

      </div>
    </>
  )
}

export default Index

const editData=(addressType,EditAddress,setEditAddress,editNewAddress,cancelEditAddress,saveNewAddress)=>{
  return(
    <div className={`${styles.newAddressContainer}`}>
                  <div className={styles.newAddressHead}><span className={`mb-3`}>Add Edit address</span></div>
                    <div className={`${styles.newAddressContent} row`}>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <select
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        name="addressType"
                        
                        onChange={(e) => {
                          setAddressType(e.target.value)
                          editNewAddress(e.target.name,e.target.value)
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
                    </Form.Group>
                {addressType=="Registered" || addressType=="Supplier"?
                    <>
                    <Form.Group className={`${styles.form_group}  col-md-12 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="fullAddress"
                        value={EditAddress.fullAddress}
                        onChange={(e) => {
                          editNewAddress(e.target.name,e.target.value)
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
                        value={EditAddress.pinCode}
                        onChange={(e) => {
                          editNewAddress(e.target.name,e.target.value)
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
                        value={EditAddress.country}
                        name="country"
                          onChange={(e) => {
                          editNewAddress(e.target.name,e.target.value)
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
                      <select
                        className={`${styles.input_field} input form-control`}
                        name="gstin"
                         value={EditAddress.gstin}
                        onChange={(e) => {
                          editNewAddress(e.target.name,e.target.value)
                        }}
                      >
                        <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                        
                      </select>
                      <Form.Label
                        className={`${styles.label_heading} ${styles.select}  label_heading`}
                      >
                        GSTIN<strong className="text-danger">*</strong>
                      </Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} d-flex  col-md-4 col-sm-6`}>
                      <Form.Control
                        className={`${styles.input_field} input form-control`}
                        required
                        type="text"
                        name="pinCode"
                         value={EditAddress.pinCode}
                        onChange={(e) => {
                          editNewAddress(e.target.name,e.target.value)
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
                         value={EditAddress.country}
                        onChange={(e) => {
                          editNewAddress(e.target.name,e.target.value)
                        }}
                      />
                      <Form.Label className={`${styles.label_heading} label_heading`}>
                        Short Name<strong className="text-danger">*</strong>
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
                          editNewAddress(e.target.name,e.target.value)
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
                          editNewAddress(e.target.name,e.target.value)
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
                          editNewAddress(e.target.name,e.target.value)
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
                    saveNewAddress()
                    }}
                    >
                    <span>Edit</span>
                    </div>
                    <div className={`${styles.cancel} d-flex justify-content-center align-items-center`}
                    onClick={()=>{
                      cancelEditAddress()
                    }}
                    >
                    <span>Cancel</span>
                    </div>
                  </div>
              </div>
  )
}
