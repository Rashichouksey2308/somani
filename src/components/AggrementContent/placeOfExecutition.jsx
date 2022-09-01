/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import DateCalender from '../DateCalender'
import moment from 'moment'
let cma = {
 
  "authorisedSignatoryDetails": [

  ],



}
function Index(props) {
  const [cmaState, setCmaState] = useState(cma)
  const [list, setList] = useState([])

 
console.log(list,"val.dateOfExecution")

  useEffect(() => {
    if (window) {
      console.log(sessionStorage.getItem("exe"), ".getItem")
      if (sessionStorage.getItem("exe")) {
        let savedData = JSON.parse(sessionStorage.getItem("exe"))
    
        setList(savedData)
      
       
      }else{
        let temp=[]
        props.data?.execution.forEach((val)=>{
          temp.push({
            name:val.agreementName,
            execution:val.place,
            dateOfExecution:val?.dateOfExecution,
            action:"false"
          })
        })
        setList(temp)
      
       
      }
    }
  }, [props])
  useEffect(() => {
    if (props.saveData == true && props.active == "Place of Execution") {
      let data = {
      
        list: list,
   
      }
      props.sendData("Place of Execution", data)
    }
    if (props.submitData == true && props.active == "Place of Execution") {
      let data = {
      
        list: list,
       
      }

      props.updateData("Place of Execution", data)

    }



  }, [props.saveData,props.submitData])
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
      dateOfExecution:null,
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
  console.log(list,"564456")
  return (

    <>
      <div className={`${styles.container} vessel_card`}>
       
       
        <div className={`${styles.tableContainer} card p-0`}>
          {/* <div
            className={`${styles.sub_card}  card-header d-flex align-items-center justify-content-between bg-transparent`}
           
          >
            <div className={styles.header}>
           
              <span className=" d-flex align-items-center justify-content-between">
          
               
              </span>
            </div>
          </div> */}
          <div
            id="customerDetail"
            className={` ${styles.body}  value_card card-body row`}
           

          >
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <th className='border-0'>Agreement Name</th>
                    <th className='border-0'>Place of Execution</th>
                    <th className='border-0'>Date of Execution</th>
                    <th className='border-0'>Actions</th>
                    
                  </tr>
                  <tbody>
                    {list?.length > 0 && list?.map((val, index) => {
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
                                  className={`${styles.customSelect} input`}
                                  name="name"
                                 
                                  onChange={(e) => {
                                    handleChangeInput(e.target.name, e.target.value, index)
                                  }}>
                                  <option>Select an option</option>
                                  <option value={"Sales Agreement"}>{"Sales Agreement"}</option>
                                  <option value={"Associateship Agreement"}>{"Associateship Agreement"}</option>
                                  <option value={"TPA (Seller)"}>{"TPA (Seller)"}</option>
                                  <option value={"Assignment Letter"}>{"Assignment Letter"}</option>
                                  <option value={"QPA"}>{"QPA"}</option>
                                  <option value={"TPA (CMA)"}>{"TPA (CMA)"}</option>
                                </select>
                                <img
                                  className={`${styles.arrow2} image_arrow img-fluid`}
                                  src="/static/inputDropDown.svg"
                                  alt="Search"
                                />
                              </td>
                             
                              <td>
                                <input type="text"
                                  className='input'
                                  placeholder={val.execution}
                                  name="execution"
                                  value={val.execution}
                                  onChange={(e) => {
                                    handleChangeInput(e.target.name, e.target.value, index)
                                  }}
                                />
                              </td>   
                               <td>
                              <div className="d-flex">
                               <DateCalender
                                name="dateOfExecution"
                                saveDate={ (val,name,index)=>{
                                  handleChangeInput(name, val, index)
                                } }
                                defaultDate={
                                  val.dateOfExecution==null?null:moment(val.dateOfExecution).toDate()
                                  }
                                small={true}
                                index={index}
                                
                                
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                               
                              </td>                         
                              <td className={`d-flex`}>
                                <img className={`${styles.image} img-fluid mr-3`} onClick={() => (onEditRemove(index))} src="/static/save-3.svg" alt="save" />
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
