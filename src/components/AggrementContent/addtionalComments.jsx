/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect}from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index(props) {
   const [addressList,setAddressList]=useState([])
  const [value,setValue]=useState("")

  useEffect(() => {
    if(props.saveData==true && props.active=="Additional Comments"){
       let data={
        
        addressList:addressList,
       }
       props.sendData("Product",data)
    }
    if(props.submitData==true && props.active=="Additional Comments"){
      let data={
       
        addressList:addressList,
       }

      props.updateData("Product",data)

    }

 
    // setSupplierState({...supplierState,multiParty:props.multiPart})
  },[props])
   const onAddressRemove=(index)=>{
 setAddressList([...addressList.slice(0,index), ...addressList.slice(index+1)])

  }
  //  useEffect(() => {
  //  if(window){
    
    
  //     if(sessionStorage.getItem("Product")){
  //     console.log("herer23123")
      
  //     let savedData=JSON.parse(sessionStorage.getItem("Product"))
     
      
  //      setAddressList(savedData.addresses)
      
  //   }else{
     
  //      setAddressList(props.data?.addresses)
       
  //   }
   
  //  }
  // },[props])
  const handleEditAddressInput=(value,index)=>{
    
     setAddressList(prevState => {
      const newState = prevState.map((obj ,i)=> {
       
        if (i == index) {
          return value;
        }

        
        return obj;
      });

      return newState;
    });
 
  
}
 const handleAddressInput=()=>{
setAddressList([...addressList,value])
   
     
     
  }
  console.log(addressList,"8512")
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.paymet} card-body`}>
     <div className={`d-flex justify-content-between align-items-between`}>
       <input placeholder={`5000 Wet Metric Tons (Wmt) +/- 10Pct Of Mmd: Manganeseore Of Gabon Origin (44,50Pct Mn Typical - 5Pct Moisture), Ciffo Visakhapatnam Port Packing In Bulk.`}
       onChange={(e)=>{
        setValue(e.target.value)
       }}
       ></input>
       <img className="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"
       onClick={()=>{
                    handleAddressInput()
                    }}
       ></img>
     </div>
   
     <span>Additional Comments</span>
     <ol >
     {addressList?.length>0 && addressList.map((val,index)=>{
     return(
      <>
       <li  className={`d-flex justify-content-between align-items-center ${styles.comment}`}>
        <input
                 
                  required
                  type="text"
                  name="bankName"
                  value={val}
                onChange={(e) => {
                // handleInput(e.target.name,e.target.value,"bankName")
              }}

                />
       <div className={`d-flex justify-content-evenly align-items-center`}>
         <img className="img-fluid ml-4" src="/static/add-btn.svg" alt="add button"
          onClick={()=>{
                    handleEditAddressInput(index)
            }}
         ></img>
         <img src="/static/delete 2.svg" className="img-fluid" alt="delete"
         onClick={()=>{
                    onAddressRemove(index)
                  }}
         ></img>
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
