/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './payment.module.scss'
import ReleaseOrder from '../../src/components/ReleaseOrder'
import DeliveryOrder from '../../src/components/DeliveryOrder'
import DeliveryPreview from '../../src/components/DeliveryPreview'
import LiftingDetails from '../../src/components/LiftingDetails'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllDelivery, GetDelivery } from '../../src/redux/release&DeliveryOrder/action'
import {GetAllLifting,UpdateLiftingData} from '../../src/redux/Lifting/action'
import _get from 'lodash/get'

function Index() {

  const dispatch = useDispatch()

  const { ReleaseOrderData } = useSelector((state) => state.Release)

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let id = sessionStorage.getItem('ROrderID')
    dispatch(GetDelivery(`?deliveryId=${id}`))
    dispatch(GetAllLifting())
  }, [dispatch])

  const {allLiftingData} = useSelector((state)=>state.Lifting)
  console.log(allLiftingData,"allLiftingData")
  const liftingData = _get( allLiftingData, 'data[0]', '')
  const [lifting,setLifting]=useState([])
  const addNewLifting=(value)=>{
   setLifting([...lifting,{
    deliveryOrder:value,
    detail:[
      {
        dateOfLifting:"",
        liftingQuant:"",
        modeOfTransportation:"RR",
        eWayBill:"",
        LRorRRDoc:"",
        eWayBillDoc:""
      }
    ]

   }])
  }
  const addNewSubLifting=(index)=>{
    let tempArr=lifting
    tempArr.forEach((val,i)=>{
      if(i==index){
        val.detail.push({
        dateOfLifting:"",
        liftingQuant:"",
        modeOfTransportation:"RR",
        eWayBill:"",
        LRorRRDoc:"",
        eWayBillDoc:""
      })
      }
    })
    setLifting([...tempArr])
  }
  const handleChange=(name,value,index,index2)=>{
    console.log(name,value,index,index2,"date")
     let tempArr=lifting
     tempArr.forEach((val,i)=>{
      if(i==index){
       val.detail.forEach((val2,i2)=>{{
        if(i2==index2){
          console.log(val2,"val2.detail")
           val2[name]=value
        }
       }})
      }
    })
    setLifting([...tempArr])
  }
  const handleLiftingSubmit=()=>{
    let data={
    liftingId: "62f0e9d5c2d05d1eb492aaa5",
    liftingOrders: [
        // {
        //     "deliveryOrder": "deliveryOrder",
        //     "deliveryOrderDetail": [
        //         {
        //             "dateOfLifting": "2022-08-08T10:47:49.628Z",
        //             "liftingQuantity": 10,
        //             "unitOfQuantity": "deliveryOrder",
        //             "modeOfTransport": "RR",
        //             "ewayBillNo": "deliveryOrder",
        //             "RRDocument": {
        //                 "name": "String",
        //                 "originalName": "String",
        //                 "format": "String",
        //                 "path": "String",
        //                 "date": "2022-08-02T15:56:24.263Z",
        //                 "uploadedBy": "629ee8ec0fdff545a0969515"
        //             },
        //             "LRDocument": {
        //                 "name": "String",
        //                 "originalName": "String",
        //                 "format": "String",
        //                 "path": "String",
        //                 "date": "2022-08-02T15:56:24.263Z",
        //                 "uploadedBy": "629ee8ec0fdff545a0969515"
        //             },
        //             "ewayBillDocument": {
        //                 "name": "String",
        //                 "originalName": "String",
        //                 "format": "String",
        //                 "path": "String",
        //                 "date": "2022-08-02T15:56:24.263Z",
        //                 "uploadedBy": "629ee8ec0fdff545a0969515"
        //             }
        //         }
        //     ]
        // }
    ]
}
 

    console.log(data,"datatoSend")
    // UpdateLiftingData(data)
  }
  console.log(lifting,"newLift")

  const [deliveryOrder,setDeliveryOrder]=useState([
    {
      
       "orderNumber" : 1,
       "unitOfMeasure" : "MT",
        "isDelete":false,
         "Quantity":""
   
    }
  ])
  const addNewDelivery=(value)=>{
   setDeliveryOrder([...deliveryOrder,{
  
        "orderNumber" : 1,
       "unitOfMeasure" : "MT",
        "isDelete":false,
        "Quantity":""
   }])
  }
    const deleteNewDelivery=(index)=>{
   setDeliveryOrder([...deliveryOrder.slice(0,index), ...deliveryOrder.slice(index+1)])
  }
    const onEdit=(index,value)=>{
    let tempArr=deliveryOrder
    tempArr.forEach((val,i)=>{
      if(i==index){
       val.isDelete=value
     
      }
    })
    setDeliveryOrder([...tempArr])
  }
  const deliverChange=(name,value,index)=>{
 let tempArr=deliveryOrder
    tempArr.forEach((val,i)=>{
      if(i==index){
       val[name]=value
     
      }
    })
    setDeliveryOrder([...tempArr])
  }
  const generateDeliveryOrderNumber=()=>{
    
    // str.slice(0, 3)
  }
  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading`}>
              <img
                src={`${darkMode
                  ? `/static/white-arrow.svg`
                  : `/static/arrow-right.svg`
                  }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>Ramakrishna Traders - Ramal001-00002</span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li className={`${styles.navItem}  nav-item`}>
              <a
                className={`${styles.navLink} navLink  nav-link active`}
                data-toggle="tab"
                href="#releaseOrder"
                role="tab"
                aria-controls="releaseOrder"
                aria-selected="true"
              >
                Release Order
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#deliveryOrder"
                role="tab"
                aria-controls="deliveryOrder"
                aria-selected="false"
              >
                Delivery Order
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link `}
                data-toggle="tab"
                href="#liftingDetails"
                role="tab"
                aria-controls="liftingDetails"
                aria-selected="false"
              >
                Lifting Details
              </a>
            </li>
          </ul>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane show active fade"
                  id="releaseOrder"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <ReleaseOrder ReleaseOrderData={ReleaseOrderData} />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="deliveryOrder"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <DeliveryOrder 
                    ReleaseOrder={ReleaseOrderData}
                    releaseOrderData={deliveryOrder} 
                    addNewDelivery={addNewDelivery}
                    onEdit={onEdit}
                    deliverChange={deliverChange}
                    deleteNewDelivery={deleteNewDelivery}
                    />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="liftingDetails"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <LiftingDetails 
                    data={ReleaseOrderData}
                    liftingData={lifting} 
                    addNewLifting={addNewLifting} 
                    addNewSubLifting={addNewSubLifting} 
                    handleChange={handleChange}
                    handleLiftingSubmit={handleLiftingSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <DeliveryPreview/> */}
      </div>
    </>
  )
}
export default Index
