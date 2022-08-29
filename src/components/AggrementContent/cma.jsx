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
  const [addressEditType,setAddressEditType]=useState("Registered")
  useEffect(() => {
    let tempArr = cmaState.authorisedSignatoryDetails
    tempArr?.forEach((val, index) => {
      val.actions = "true"
    })
    setList(tempArr)
    let tempArr2 = cmaState.addresses
    setAddressList(tempArr2)
  }, [])
  console.log(list,"lsit")
  let masterList=[
  {name:"Dr. Amin Controllers Private Limited",address:"Embassy Chambers, 6th Floor, Plot No. 5, Road No. 3, Khar (West) Mumbai, Maharashtra - 400 05227AAACA3912A2ZE"},
  {name:"Integral Trading and Logistics",address:"Flat No. 303, 3rd Floor, Tirumala Plaza, Dabagarden, Visakhapatnam, Andhra Pradesh - 53002037AABFI9574L2ZP"},
 
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
        setList(savedData?.authorisedSignatoryDetails!==undefined?savedData.authorisedSignatoryDetails:[])
        setAddressList(savedData.addresses!==undefined?savedData.addresses:[])
        setCmaState(cma)
      }else{
         let cma = {
          "name": props.data?.name,
          "shortName": props.data?.shortName,
          "gstin": props.data?.gstin,

          "addresses": props.data?.addresses,
          "authorisedSignatoryDetails": props?.data?.authorisedSignatoryDetails,


        }
        setList(props.data?.authorisedSignatoryDetails!==undefined?props.data?.authorisedSignatoryDetails:[])
        setAddressList(props.data?.addresses!==undefined?props.data?.addresses:[])
        setCmaState(cma)
      }
    }
  }, [])
  useEffect(() => {
    if (props.saveData == true && props.active == "CMA") {
      let data = {
        cmaData: cmaState,
        list: list,
        addressList: addressList,
      }
      props.sendData("CMA", data)
    }
    if (props.submitData == true && props.active == "CMA") {
      let data = {
        cmaData: cmaState,
        list: list,
        addressList: addressList,
      }

      props.updateData("CMA", data)

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
      name: "", address: "",
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
     name:"",address:"",
    actions:"false"
   }
   masterList.forEach((val,index)=>{
    if(val.name==value){
      arrayToSave.name=val.name
      arrayToSave.address=val.address
      // arrayToSave.email=val.email
      // arrayToSave.phoneNo=val.phoneNo
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
   
    // setList(tempArr)

  }
   const handleChangeInput2=(name,value,index)=>{
   
 
 

    setList(prevState => {
      const newState = prevState.map((obj ,i)=> {
       
        if (i == index) {
          return {...obj,phoneNo:value};
        }

        
        return obj;
      });

      return newState;
    });

    

  }
 //address 
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
          setAddressType("Registered")
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
  return (

    <>
      <div className={`${styles.container} vessel_card`}>
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
                 <option>Select an option</option>
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
                   <option>Select an option</option>
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
          <div className={`${styles.containerChild} d-flex justify-content-between flex-wrap  `}>
           {addressList?.map((val,index)=>{
            return(
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
              <div className={`d-flex ${styles.actions} `}>
                <div
                  className={`${styles.addressEdit} d-flex justify-content-center align-items-center mt-n2`}
                  onClick={()=>{
                    handleEditAddressInput(index)
                  }}
                >
                  <img className={`${styles.image} img-fluid`} src="/static/mode_edit.svg" alt="edit" />
                </div>
                <div
                  className={`${styles.addressEdit} ml-3 d-flex justify-content-center align-items-center mr-n3 mt-n2`}
                  onClick={()=>{
                    onAddressRemove(index)
                  }}
                  >
                    <img className={`${styles.image} img-fluid`} src="/static/delete 2.svg" alt="delete" />
                </div>
              </div>
            </div>
            )
           }) }

          </div>
        </div>
               {isEdit && editData(addressEditType,EditAddress,setEditAddress,editNewAddress,cancelEditAddress,saveNewAddress,setAddressEditType)}
         <div className={`${styles.newAddressContainer} m-0`}>
                  <div className={styles.newAddressHead}><span>Add a new address</span></div>
                    <div className={`${styles.newAddressContent} row`}>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="addressType"
                           value={addressType}
                          onChange={(e) => {
                            setAddressType(e.target.value)
                            setAddress(e.target.name,e.target.value)
                          }}
                        >
                           <option>Select an option</option>
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
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="gstin"
                          value={newAddress.gstin}
                          onChange={(e) => {
                            setAddress(e.target.name,e.target.value)
                          }}
                        >
                           <option>Select an option</option>
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
                    <th>Address</th>
                    {/* <th>EMAIL</th>
                    <th>PHONE NO.</th> */}
                    <th>ACTION</th>
                  </tr>
                  <tbody>
                    {list?.length > 0 && list?.map((val, index) => {
                      return (
                        <>
                          {val.actions == "true" ?
                            <tr key={index}>
                              <td>{val.name}</td>
                              <td>{val.address}</td>
                              {/* <td>{val.email}</td>
                              <td>{val.phone}</td> */}
                              <td className={`d-flex`}>
                                <img className={`${styles.image} mr-3`} onClick={() => (onEdit(index))} src="/static/mode_edit.svg" alt="edit" />
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
                                     <option>Select an option</option>
                                      <option value={"Dr. Amin Controllers Private Limited"}>{"Dr. Amin Controllers Private Limited"}</option>
                                      <option value={"Integral Trading and Logistics"}>{"Integral Trading and Logistics"}</option>
                             
                                </select>
                                <img
                                  className={`${styles.arrow2} image_arrow img-fluid`}
                                  src="/static/inputDropDown.svg"
                                  alt="Search"
                                />
                              </td>
                              <td><input type="text"
                                placeholder={val.address}
                                name="addresss"
                                readOnly={true}
                                // onChange={(e) => {
                                //   handleChangeInput(e.target.name, e.target.value, index)
                                // }}
                              ></input></td>
                              {/* <td><input type="text" placeholder={val.email}
                                name="email"
                                readOnly={true}
                                
                              ></input></td>
                              <td><input type="text" placeholder={val.phoneNo}
                                name="phoneNo"
                                onChange={(e) => {
                                  handleChangeInput2(e.target.name, e.target.value, index)
                                }}
                              ></input></td> */}
                              <td className={`d-flex`}>
                                <img onClick={() => (onEditRemove(index))} className={`${styles.image} mr-3`} src="/static/save-3.svg" alt="save"/>
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
const editData=(addressEditType,EditAddress,setEditAddress,editNewAddress,cancelEditAddress,saveNewAddress,setAddressEditType)=>{
  return(
    <div className={`${styles.newAddressContainer}`}>
                  <div className={styles.newAddressHead}><span className={`mb-3`}>Add Edit address</span></div>
                    <div className={`${styles.newAddressContent} row`}>
                    <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                      <div className='d-flex'>
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="addressType"
                          
                          onChange={(e) => {
                            setAddressEditType(e.target.value)
                            editNewAddress(e.target.name,e.target.value)
                          }}
                        >
                           <option>Select an option</option>
                          <option value="Registered">Registered </option>
                          <option value="Branch">Branch </option>
                          <option value="Supplier">Supplier  </option>
                          
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
                {addressEditType=="Registered" || addressEditType=="Supplier"?
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
                      <div className='d-flex'>
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          name="gstin"
                          value={EditAddress.gstin}
                          onChange={(e) => {
                            editNewAddress(e.target.name,e.target.value)
                          }}
                        >
                           <option>Select an option</option>
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
                        Short Name
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
                    <span>Update</span>
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