/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index(props) {
const [addressList, setAddressList] = useState([])
const [value, setValue] = useState('')
const [editField, setEditField] = useState(false)
const [doc,setdoc]=useState({attachDoc:""})
useEffect(() => {
if (props.saveData == true && props.active == 'Product Specifications') {
  let temp=[]
  addressList.forEach((val)=>{
    temp.push(val.value)
  })
  let data = {
    addressList: temp,
  }
  props.sendData('Product Specifications', data)
}
if (props.submitData == true && props.active == 'Product Specifications') {
  let temp=[]
  addressList.forEach((val)=>{
    temp.push(val.value)
  })
  let data = {
    addressList: temp,
  }

  props.updateData('Product Specifications', data)
}

// setSupplierState({...supplierState,multiParty:props.multiPart})
}, [props])
const onAddressRemove = (index) => {
setAddressList([
  ...addressList.slice(0, index),
  ...addressList.slice(index + 1),
])
}
useEffect(() => {
if (window) {
  if (sessionStorage.getItem('Product')) {
    console.log('herer23123')

    let savedData = JSON.parse(sessionStorage.getItem('Product'))
    let temp=[]
    savedData.forEach((val,index)=>{
      temp.push({value:val,action:false})
    })
    setAddressList(temp)
  } else {
    let temp=[]
    props.data?.forEach((val,index)=>{
      temp.push({value:val,action:false})
    })
    setAddressList(temp)
    
  }
}
}, [props])
const handleEditAddressInput = (index) => {
setAddressList((prevState) => {
  const newState = prevState.map((obj, i) => {
    if (i == index) {
      console.log(obj.action,"obj.action")
      return {...obj,action:!obj.action}
    }

    return obj
  })

  return newState
})
}
const handleAddressInput = () => {
setAddressList([...addressList, {value:value,action:false}])
}
const handleInput=(val,index)=>{
setAddressList((prevState) => {
  const newState = prevState.map((obj, i) => {
    if (i == index) {
      return {...obj,value:val}
    }

    return obj
  })

  return newState
})
}

  return (
    <>
      <div className={`${styles.container} vessel_card`}>
        <div className={`${styles.paymet} card-body`}>
          <div className={`d-flex justify-content-between align-items-between`}>
            <input
              placeholder={``}
              className='input'
              onChange={(e) => {
                setValue(e.target.value)
              }}
              value={value}
            />
            <img
              className="img-fluid ml-4"
              src="/static/add-btn.svg"
              alt="add button"
              onClick={() => {
                handleAddressInput()
                setValue("")
              }}
            ></img>
          </div>
          <div
            className={`${styles.button_container} d-flex justify-content-start  align-items-center `}
          >
            {doc.attachDoc == '' ? (
                      <div className={styles.uploadBtnWrapper}>
                        <input
                          type="file"
                          name="myfile"
                          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                          onChange={(e) => {
                            // addDoc(e.target.files[0], index)
                            // uploadDocument2(e)
                            setdoc({attachDoc:e.target.files[0].name})
                          }}
                        />
                        <button className={`${styles.button_upload2} btn`}>
                          Upload Specifications
                        </button>
                      </div>
                    ) : (
                      <div className={styles.certificate}>
                        {doc.attachDoc}
                        <img
                          className={`${styles.close_image} float-right m-2 img-fluid`}
                          src="/static/close.svg"
                          onClick={() =>setdoc({attachDoc:""})}
                          alt="Close"
                        />{' '}
                      </div>
                    )}
            <div className={`${styles.file_text}`}>
              <span>
                <span className={`${styles.danger}`}>* </span>ONLY .XLS FILES
                ARE ALLOWED <br /> &nbsp; &nbsp; &amp; MAX FILE SIZE UP TO 50 MB
              </span>
            </div>
          </div>
          <span>Comments</span>
          {addressList?.length > 0 &&
            addressList.map((val, index) => {
              return (
                <>
                  <div
                    className={`d-flex justify-content-between align-items-center ${styles.comment}`}
                  >
                    <input
                      required
                      type="text"
                      name="bankName"
                      value={val.value}
                      onChange={(e) => {
                        handleInput(e.target.value,index)
                      }}
                      className='input'
                      readOnly={val.action}
                    />
                    <div
                      className={`d-flex justify-content-evenly align-items-center`}
                    >
                      {val.action ? (
                        <img
                          className={`${styles.image} ml-4 mr-3`}
                          src="/static/mode_edit.svg"
                          alt="edit button"
                          onClick={() => {
                            handleEditAddressInput(index)
                           
                          }}
                        ></img>
                      ) : (
                        <img
                          src="/static/save-3.svg"
                          className={`${styles.image} ml-4 mr-3`}
                          alt="save"
                          onClick={(e) => {
                             handleEditAddressInput(index)
                          
                          }}
                        />
                      )}
                      <img
                        src="/static/delete 2.svg"
                        className="img-fluid"
                        alt="delete"
                        onClick={() => {
                          onAddressRemove(index)
                        }}
                      ></img>
                    </div>
                  </div>
                </>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Index
