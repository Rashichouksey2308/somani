/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index(props) {
  const [addressList, setAddressList] = useState([])
  const [value, setValue] = useState("")

  const changeEdit = (index) => {
    setAddressList(prevState => {
      const newState = prevState.map((obj, i) => {

        if (i == index) {
          return { ...obj, isEdit: !obj.isEdit };
        }


        return obj;
      });

      return newState;
    });
  }
  useEffect(() => {
    if (window) {
      console.log(sessionStorage.getItem("add"), ".getItem")
      if (sessionStorage.getItem("add")) {
        let savedData = JSON.parse(sessionStorage.getItem("add"))
        let temp = []
      
        setAddressList(savedData)


      } else {
        let temp = []
        props.data?.comments.forEach((val) => {
          temp.push({
            value: val,
            comment:val.comment,

            isEdit: false
          })
        })
        setAddressList(temp)


      }
    }
  }, [props])
  console.log(addressList, "addressList")
  useEffect(() => {
    if (props.saveData == true && props.active == "Additional Comments") {
      let data = {

        addressList: addressList,
      }
      props.sendData("Additional Comments", data)
    }
    if (props.submitData == true && props.active == "Additional Comments") {
      let data = {

        addressList: addressList,
      }

      props.updateData("Additional Comments", data)

    }


    // setSupplierState({...supplierState,multiParty:props.multiPart})
  }, [props.saveData, props.submitData])
  const onAddressRemove = (index) => {
    setAddressList([...addressList.slice(0, index), ...addressList.slice(index + 1)])

  }


   const addMoreRows = () => {


    setAddressList([...addressList, {
      name: "Sales Agreement", comment: "", 
      
      actions: "false"
    }])

  }
   const handleRemove = (index) => {
    setAddressList([...addressList.slice(0, index), ...addressList.slice(index + 1)])
  }
   const handleChangeInput=(name,value,index)=>{
   console.log(name,"name")
  
 
    setAddressList(prevState => {
      const newState = prevState.map((obj ,i)=> {
       
        if (i == index) {
          return {...obj,[name]:value};
        }

        
        return obj;
      });

      return newState;
    });

  }
    const onEditRemove = (index) => {


    setAddressList(prevState => {
      const newState = prevState.map((obj, i) => {

        if (i == index) {
          return { ...obj, actions: 'true' };
        }


        return obj;
      });

      return newState;
    });

  }
  const onEdit = (index) => {
   
    setAddressList(prevState => {
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
  console.log(addressList, "8512")
  return (
    <>
      <div className={`${styles.container} vessel_card`}>

        <div className={`${styles.tableContainer} border_color card p-0`}>
          <div id="customerDetail" className={`${styles.body} card-body row`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
                  <tr>
                    <th width="25%" className='border-0 generic_th'>Agreement Name</th>
                    <th width="50%" className='border-0 generic_th'>Additional Comments</th>
                    <th className='border-0 generic_th'>Actions</th>
                    
                  </tr>
                  <tbody>
                
                   {addressList?.length > 0 && addressList?.map((val, index) => {
                      return (
                        <>
                          {val.actions == "true" ?
                            <tr key={index}>
                              <td>{val.name}</td>
                              <td>{val.comment}</td>
                             
                              
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
                                  placeholder={val.comment}
                                  name="comment"
                                  value={val.comment}
                                  onChange={(e) => {
                                    handleChangeInput(e.target.name, e.target.value, index)
                                  }}
                                />
                              </td>   
                                                      
                              <td className={`d-flex`}>
                                <img className={`${styles.image} mr-3`} onClick={() => (onEditRemove(index))} src="/static/save-3.svg" alt="save" />
                                <img onClick={() => (handleRemove(index))} src="/static/delete 2.svg"></img>
                              </td>

                            </tr>
                          }
                        </>
                      )
              })}
                  </tbody>
                </table>
                <div className={`${styles.addMoreRows}`}
                 onClick={(e) => {
                  addMoreRows()
                }}
                >
                  <span>+</span>  Add more rows
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        
        </div>
      </div>
    </>
  )
}

export default Index
