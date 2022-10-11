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
        savedData.forEach((val) => {
          temp.push({
            comments: val.value,

            isEdit: false
          })
        })
        setAddressList(savedData)


      } else {
        let temp = []
        props.data?.comments.forEach((val) => {
          temp.push({
            value: val,

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

  const handleEditAddressInput = (value, index) => {

    setAddressList(prevState => {
      const newState = prevState.map((obj, i) => {

        if (i == index) {
          return { ...obj, value: value };
        }


        return obj;
      });

      return newState;
    });


  }
  const handleAddressInput = () => {


    setAddressList([...addressList, { value: value, isEdit: false }])



  }
  console.log(addressList, "8512")
  return (
    <>
      <div className={`${styles.container} vessel_card`}>
        {/* <div className={`d-flex justify-content-between align-items-between mb-4`}>
          <input placeholder={``}
            className='input'
            onChange={(e) => {
              setValue(e.target.value)
            }}
            value={value}
          />
          <img className="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"
            onClick={() => {
              handleAddressInput()
              setValue("")
            }}
          ></img>
        </div>
        <span>Additional Comments</span> */}
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
                    <tr>
                      <td>Agreement Name</td>
                      <td>Additional Comments</td>
                      
                      <td className={`d-flex`}>
                        <img className={`${styles.image} mr-3`} src="/static/mode_edit.svg" alt="edit" />
                        <img src="/static/delete 2.svg"></img>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <select
                          className={`${styles.customSelect} input`}
                          name="name">
                          <option>Select an option</option>
                          <option value="Sales Agreement">Sales Agreement</option>
                          <option value="Associateship Agreement">Associateship Agreement</option>
                          <option value="TPA (Seller)">TPA (Seller)</option>
                          <option value="Assignment Letter">Assignment Letter</option>
                          <option value="QPA">QPA</option>
                          <option value="TPA (CMA)">TPA (CMA)</option>
                        </select>
                        <img
                          className={`${styles.arrow2} image_arrow img-fluid`}
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </td>                    
                      <td>
                        <input placeholder={``}
                          className='input w-100'
                          onChange={(e) => {
                            setValue(e.target.value)
                          }}
                          value={value}
                        />
                      </td>
                      <td className={`d-flex`}>
                        <img className={`${styles.image} mr-3`} src="/static/save-3.svg" alt="save" />
                        <img src="/static/delete 2.svg"></img>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={`${styles.addMoreRows}`}>
                  <span>+</span>  Add more rows
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ol className='p-0 m-0'>
            {addressList?.length > 0 && addressList.map((val, index) => {
              return (
                <>
                  <li className={`d-flex justify-content-between align-items-center ${styles.comment}`}>
                    <input
                      required
                      type="text"
                      name="bankName"
                      className='input'
                      value={val.value}
                      onChange={(e) => {
                        handleEditAddressInput(e.target.value, index)
                      }}
                      readOnly={val.isEdit}
                    />
                    <div className={`d-flex justify-content-end align-items-center`}>

                      {val.isEdit ? <img className={`${styles.image} ml-4 mr-3`} src="/static/mode_edit.svg" alt="edit"
                        onClick={() => {
                          changeEdit(index)
                        }}
                      /> : <img className={`${styles.image} ml-4 mr-3`} src="/static/save-3.svg" alt="edit"
                        onClick={() => {
                          changeEdit(index)
                        }}
                      />}
                      <img src="/static/delete 2.svg" className="img-fluid" alt="delete"
                        onClick={() => {
                          onAddressRemove(index)
                        }}
                      />
                    </div>
                  </li>
                </>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Index
