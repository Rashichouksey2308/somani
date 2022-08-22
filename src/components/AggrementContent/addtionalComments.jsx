/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect}from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index(props) {
const [addressList,setAddressList]=useState([])
const [value,setValue]=useState("")

  const changeEdit=(index)=>{
setAddressList(prevState => {
const newState = prevState.map((obj ,i)=> {
  
  if (i == index) {
    return {...obj,isEdit:!obj.isEdit};
  }

  
  return obj;
});

return newState;
});
  }
  useEffect(() => {
    if(props.saveData==true && props.active=="Additional Comments"){
       let data={
        
        addressList:addressList,
       }
       props.sendData("Additional Comments",data)
    }
    if(props.submitData==true && props.active=="Additional Comments"){
      let data={
       
        addressList:addressList,
       }

      props.updateData("Additional Comments",data)

    }

 
    // setSupplierState({...supplierState,multiParty:props.multiPart})
  },[props])
const onAddressRemove=(index)=>{
setAddressList([...addressList.slice(0,index), ...addressList.slice(index+1)])

}

const handleEditAddressInput=(value,index)=>{

setAddressList(prevState => {
const newState = prevState.map((obj ,i)=> {
  
  if (i == index) {
    return {...obj,value:value};
  }

  
  return obj;
});

return newState;
});


}
const handleAddressInput=()=>{


  setAddressList([...addressList,{value:value,isEdit:false}])



}
  console.log(addressList,"8512")
  return (
    <>
      <div className={`${styles.container} vessel_card`}>
        <div className={`${styles.paymet} card-body p-0`}>
     <div className={`d-flex justify-content-between align-items-between mb-4`}>
       <input placeholder={``}
       onChange={(e)=>{
        setValue(e.target.value)
       }}
       ></input>
       <img className="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"
       onClick={()=>{
                    handleAddressInput()
                   setValue("")
          }}
       ></img>
     </div>
   
     <span>Additional Comments</span>
     <ol className='p-0 m-0'>
     {addressList?.length>0 && addressList.map((val,index)=>{
     return(
      <>
       <li  className={`d-flex justify-content-between align-items-center ${styles.comment}`}>
          <input

              required
              type="text"
              name="bankName"
              value={val.value}
              onChange={(e) => {
              handleEditAddressInput(e.target.value,index)
              }}
              readOnly={val.isEdit}

          />
       <div className={`d-flex justify-content-end align-items-center`}>
         
            {val.isEdit? <img className={`${styles.image}`} src="/static/mode_edit.svg" alt="edit"
            onClick={()=>{
            changeEdit(index)
            }}
            />: <img className={`${styles.image}`} src="/static/save-3.svg" alt="edit"
            onClick={()=>{
            changeEdit(index)
            }}
            />}
         <img src="/static/delete 2.svg" className="img-fluid ml-3" alt="delete"
         onClick={()=>{
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
