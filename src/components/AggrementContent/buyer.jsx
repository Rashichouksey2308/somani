/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
let buyer = {
  "name": "",

  "branchName": "",
  "addresses": [

  ],
  "authorisedSignatoryDetails": [

  ],


}
function Index(props) {
  const [buyerData, setBuyerData] = useState(buyer)
  const [list, setList] = useState([])
  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem("Buyer")) {
        let savedData = JSON.parse(sessionStorage.getItem("Buyer"))
        let buyer = {
          "name": savedData.name,
          "shortName": savedData.shortName,

          "addresses": savedData.addresses,
          "authorisedSignatoryDetails": savedData.authorisedSignatoryDetails,


        }
        setList(savedData.authorisedSignatoryDetails)

        setBuyerData(buyer)
      }else{
        let buyer = {
          "name": props?.data?.name,
          "shortName": props?.data?.shortName,

          "addresses": props?.data?.addresses,
          "authorisedSignatoryDetails": props?.data?.authorisedSignatoryDetails,


        }
        setList(props?.data?.authorisedSignatoryDetails)

        setBuyerData(buyer)
      }
    }
  }, [])
   let masterList=[
  {name:"Bhawana Jain",designation:"Vice President (Finance & Accounts)",email:"bhawanajain@somanigroup.com",phoneNo:""},
   {name:"Vipin Kumar",designation:"Manager Accounts",email:"vipinrajput@somanigroup.com",phoneNo:""},
    {name:"Devesh Jain",designation:"Director",email:"devesh@indointertrade.ch",phoneNo:""},
     {name:"Fatima Yannoulis ",designation:"Chief Financial Officer",email:"fatima@indointertrade.ch",phoneNo:""}
 ]
  useEffect(() => {
    if (props.saveData == true && props.active == "Buyer") {
      let data = {
        buyerData: buyerData,
        list: list,
        addresses: buyerData

      }
      props.sendData("Buyer", data)
    }
    if (props.submitData == true && props.active == "Buyer") {
      let data = {
        buyerData: buyerData,
        list: list,
        addresses: buyerData

      }

      props.updateData("Buyer", data)

    }
  }, [props])
  const onEdit = (index) => {
    let tempArr = list;
    // tempArr[index].actions.edit="false"

    setList(prevState => {
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

  }
  const onEditRemove = (index) => {
    let tempArr = list;
    // tempArr[index].actions.edit="false"

    setList(prevState => {
      const newState = prevState.map((obj, i) => {
        // 👇️ if id equals 2, update country property
        if (i == index) {
          return { ...obj, actions: 'true' };
        }

        // 👇️ otherwise return object as is
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

    const newInput = { ...buyerData }

    newInput[name] = value
    setBuyerData(newInput)

  }
  const handleChangeInput = (name, value, index) => {
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
 

  }

  return (
    <>
      <div className={styles.container}>
        <Form className={`${styles.form}`}>
          <div className="row ">

            <Form.Group className={`${styles.form_group} col-md-8 col-sm-6`}>
              <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  required
                  type="text"
                  name="name"
                  value={buyerData.shortName}
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value)
                  }}
                >
                  <option value="Indo German International">Indo German International</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Name<strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
                {/* <img
                      className={`${styles.search_image} img-fluid`}
                      src="/static/search-grey.svg"
                      alt="Search"
                    /> */}
              </div>
            </Form.Group>

            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  required
                  type="text"
                  name="branchName"
                  value={buyerData.branchName}
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value)
                  }}
                  >
                    <option value="Paris" selected>Paris</option>
                    <option value="Delhi">Delhi</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Branch Name<strong className="text-danger">*</strong>
                </Form.Label>
                <img
                  className={`${styles.arrow} image_arrow img-fluid`}
                  src="/static/inputDropDown.svg"
                  alt="Search"
                />
              </div>
            </Form.Group>
            <div className={`${styles.info} col-md-4 col-sm-6`}>
              <span>PAN NO.</span>
              <p>27AAATW4183C2ZG</p>
            </div>
            <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span>GSTIN.</span>
              <p>27AAATW4183C2ZG</p>
            </div>
            <div className={` ${styles.info} col-md-4 col-sm-6`}>
              <span>Short Name</span>
              <p>IGI</p>
            </div>

          </div>
        </Form>
        <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
          <div className={`d-flex justify-content-between align-items-center ${styles.multiAddContainer}`}>
            <div
              className={`${styles.registeredAddress} d-flex justify-content-between border-color w-40`}
            >
              <div className={`${styles.registeredAddressHeading} w-100`}>
                <span>Registered Address</span>
                <div className={`${styles.address_text}`}>
                  Plot No-49-48-6/1, Lalitha Nagar, Ground Floor, Sakshi Office
                  Road, Akkayyapalem, Visakhapatnam, Andhra Pradesh, 530016 India
                </div>
              </div>

            </div>
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
                  <tr className='table_row'>
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
                        <tr key={index} className='table_row'>
                          <td>{val.name}</td>
                          <td>{val.designation}</td>
                          <td>{val.email}</td>
                          <td>{val.phoneNo}</td>
                          <td className={`d-flex`}>
                          <img className={`${styles.image} mr-2`} onClick={()=>(onEdit(index))} src="/static/mode_edit.svg" alt="edit"/>
                          <img onClick={()=>(handleRemove(index))} src="/static/delete 2.svg" alt="delete"/>
                          </td>

                        </tr>
                        :<tr key={index} className='table_row'>
                          <td>
                            <select 
                            value={val.name}
                            className={`${styles.customSelect}`}
                            onChange={(e)=>{
                              handleChangeInput(e.target.name,e.target.value,index)
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
                          name= "designation"
                          // onChange={(e)=>{
                          //   handleChangeInput(e.target.name,e.target.value,index)
                          // }}
                          ></input></td>
                          <td><input type="text" placeholder={val.email}
                          name= "email"
                          // onChange={(e)=>{
                          //   handleChangeInput(e.target.name,e.target.value,index)
                          // }}
                          ></input></td>
                          <td><input type="text" placeholder={val.phoneNo}
                          name= "phoneNo"
                          // onChange={(e)=>{
                          //   handleChangeInput(e.target.name,e.target.value,index)
                          // }}
                          ></input></td>
                          <td className={`d-flex`}>
                            <div
                              className={`${styles.addressEdit} d-flex justify-content-center  align-items-start`}
                              onClick={()=>{
                              onEditRemove(index)
                              }}
                            >
                              <img className={`${styles.image} img-fluid mr-3`} src="/static/save-3.svg" alt="save"/>
                            </div>
                            <div
                              className={`${styles.addressEdit} d-flex justify-content-center align-items align-items-center`}
                              onClick={()=>{
                              handleRemove(index)
                              }}
                            >
                              <img src="/static/delete 2.svg" />
                            </div>
                            {/* <img  onClick={()=>(onEditRemove(index))}src="/static/save-3.svg"  />
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
