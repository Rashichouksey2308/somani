/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
let cma = {
 
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

  // useEffect(() => {
  //   if (window) {
  //     console.log(sessionStorage.getItem("exe"), ".getItem")
  //     if (sessionStorage.getItem("exe")) {
  //       let savedData = JSON.parse(sessionStorage.getItem("exe"))
  //       let cma = {
  //         "name": savedData.name,
  //         "shortName": savedData.shortName,
  //         "gstin": savedData.gstin,

  //         "addresses": savedData.addresses,
  //         "authorisedSignatoryDetails": savedData.authorisedSignatoryDetails,


  //       }
  //       setList(savedData.authorisedSignatoryDetails)
  //       setAddressList(savedData.addresses)
  //       setCmaState(cma)
  //     }else{
  //        let cma = {
  //         "name": props.data?.name,
  //         "shortName": props.data?.shortName,
  //         "gstin": props.data?.gstin,

  //         "addresses": props.data?.addresses,
  //         "authorisedSignatoryDetails": props.data?.authorisedSignatoryDetails,


  //       }
  //       setList(props.data?.authorisedSignatoryDetails)
  //       setAddressList(props.data?.addresses)
  //       setCmaState(cma)
  //     }
  //   }
  // }, [])
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
      name: "Sales Agreement", execution: "", 
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
   console.log(name,"name")
 
    setList(prevState => {
      const newState = prevState.map((obj ,i)=> {
       
        if (i == index) {
          return {...obj,[name]:value};
        }

        
        return obj;
      });

      return newState;
    });

  }
  console.log(list,"exx")
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
        
        </Form>
       
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
                    <th>Agreement Name</th>
                    <th>Place of Execution</th>
                    <th>Actions</th>
                    
                  </tr>
                  <tbody>
                    {list.length > 0 && list.map((val, index) => {
                      return (
                        <>
                          {val.actions == "true" ?
                            <tr key={index}>
                              <td>{val.name}</td>
                              <td>{val.execution}</td>
                              
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
                                  name="name"
                                  onChange={(e) => {
                                    handleChangeInput(e.target.name, e.target.value, index)
                                  }}>
                              <option value={"Sales Agreement"}>{"Sales Agreement"}</option>
                              <option value={"Associateship Agreement"}>{"Associateship Agreement"}</option>
                              <option value={"TPA (Seller)"}>{"TPA (Seller)"}</option>
                              <option value={"Assignment Letter"}>{"Assignment Letter"}</option>
                              <option value={"QPA"}>{"QPA"}</option>
                              <option value={"TPA (CMA)"}>{"TPA (CMA)"}</option>
                                </select>
                                <img
                                  className={`${styles.arrow2} img-fluid`}
                                  src="/static/inputDropDown.svg"
                                  alt="Search"
                                />
                              </td>
                              <td><input type="text"
                                placeholder={val.execution}
                                name="execution"
                                onChange={(e) => {
                                  handleChangeInput(e.target.name, e.target.value, index)
                                }}
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
