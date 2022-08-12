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
import { GetAllDelivery, GetDelivery, UpdateDelivery } from '../../src/redux/release&DeliveryOrder/action'
import { GetAllLifting, UpdateLiftingData } from '../../src/redux/Lifting/action'
import _get from 'lodash/get'
import { toast } from 'react-toastify'

function Index() {

  const dispatch = useDispatch()

  const { ReleaseOrderData } = useSelector((state) => state.Release)
  //console.log(ReleaseOrderData, 'ReleaseOrderData')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let id = sessionStorage.getItem('ROrderID')
    dispatch(GetDelivery(`?deliveryId=${id}`))
    dispatch(GetAllLifting())
  }, [dispatch])

  const { allLiftingData } = useSelector((state) => state.Lifting)
  //console.log(allLiftingData, "allLiftingData")
  const liftingData = _get(allLiftingData, 'data[0]', '')
  const [lifting, setLifting] = useState([])
  const addNewLifting = (value) => {
    setLifting([...lifting, {
      deliveryOrder: value,
      detail: [
        {
          dateOfLifting: "",
          liftingQuant: "",
          modeOfTransportation: "RR",
          eWayBill: "",
          LRorRRDoc: "",
          eWayBillDoc: ""
        }
      ]

    }])
  }
  const addNewSubLifting = (index) => {
    let tempArr = lifting
    tempArr.forEach((val, i) => {
      if (i == index) {
        val.detail.push({
          dateOfLifting: "",
          liftingQuant: "",
          modeOfTransportation: "RR",
          eWayBill: "",
          LRorRRDoc: "",
          eWayBillDoc: ""
        })
      }
    })
    setLifting([...tempArr])
  }
  const handleChange = (name, value, index, index2) => {
    //console.log(name, value, index, index2, "date")
    let tempArr = lifting
    tempArr.forEach((val, i) => {
      if (i == index) {
        val.detail.forEach((val2, i2) => {
          {
            if (i2 == index2) {
              //console.log(val2, "val2.detail")
              val2[name] = value
            }
          }
        })
      }
    })
    setLifting([...tempArr])
  }
  const handleLiftingSubmit = () => {
    let data = {
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


    //console.log(data, "datatoSend")
    // UpdateLiftingData(data)
  }
  //console.log(lifting, "newLift")

  const [deliveryOrder, setDeliveryOrder] = useState([
    {

      "orderNumber": 1,
      "unitOfMeasure": "MT",
      "isDelete": false,
      "Quantity": "",
      "deliveryOrderNo": '',
      "deliveryOrderDate": "",
      "status": ""

    }
  ])
  const [quantity, setQuantity] = useState(0)
  //console.log(deliveryOrder, "deliveryOrder")
  const addNewDelivery = (value) => {
    setDeliveryOrder([...deliveryOrder, {

      "orderNumber": 1,
      "unitOfMeasure": "MT",
      "isDelete": false,
      "Quantity": "",
      "deliveryOrderNo": '',
      "deliveryOrderDate": "",
      "status": ""

    }])
  }
  const deleteNewDelivery = (index) => {
    setDeliveryOrder([...deliveryOrder.slice(0, index), ...deliveryOrder.slice(index + 1)])
  }
  const [filteredDOArray, setFilteredDOArray] = useState([])
  const [DOlimit, setDoLimit] = useState(0)
  let [lastMileDelivery, setLastMileDelivery] = useState(false)
  console.log(DOlimit, 'DOlimit')

  useEffect(() => {
    let limit = DOlimit
    filteredDOArray.forEach((item, index) => {
      limit = DOlimit - item.Quantity
      setDoLimit(limit)
    })

    if (DOlimit < 0) {
      let toastMessage = 'Delivery Order Quantity Cannot Be Greater than Realese Quantity'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    }
  }, [filteredDOArray, deliveryOrder])
  //console.log(filteredDOArray, 'filteredDOArray')
  const onEdit = (index, value) => {
    let tempArr = deliveryOrder
    tempArr.forEach((val, i) => {
      if (i == index) {
        val.isDelete = value
      }
    })
    setDeliveryOrder([...tempArr])
  }
  console.log(quantity, DOlimit, filteredDOArray, 'deliveryOrder')

  const generateDoNumber = (index) => {

    let orderDONumber = index
    return `Rama001-000001/${orderDONumber}`


  }

  const deliverChange = (name, value, index) => {
    let tempArr = deliveryOrder

    tempArr.forEach((val, i) => {
      if (i == index) {

        if (name === 'Quantity') {
          let temparr = [...deliveryOrder]
          let filteredArray = temparr.filter((item, index2) => {
            //console.log(item, 'quantity1')
            return item.orderNumber == deliveryOrder[index].orderNumber
          })
          setFilteredDOArray(filteredArray)

          // //console.log(filteredArray, 'limit')
          //  //console.log(DOlimit, 'limit')
        }
        if (name === 'Quantity') {
          if (value <= 0) {
            setDoLimit(quantity)
          } else {
            let tempLimit = quantity
            filteredDOArray.forEach((item, index) => {
              // console.log(item, 'deliveryOrder')
              tempLimit = tempLimit - Number(item.Quantity)
            })
            //console.log(tempLimit, 'deliveryOrder')
            setDoLimit(tempLimit)
          }
        }

        if (name === 'orderNumber') {

          let temparr = _get(ReleaseOrderData, 'data[0].releaseDetail', [])
          let filteredArray = temparr.filter((item, index) => {
            // //console.log(item, 'quantity1')
            return item.orderNumber == value
          })
          // //console.log(filteredArray, temparr, 'quantity1')
          setQuantity(filteredArray[0].netQuantityReleased)
          setDoLimit(filteredArray[0].netQuantityReleased)

          let tempString = generateDoNumber(index)
          val.deliveryOrderNo = tempString
        }
        val[name] = value
      }

    })
    setDeliveryOrder([...tempArr])
  }
  // //console.log(quantity, 'quantity1')

  const onSaveDoHAndler = async () => {
    let newarr = []
    deliveryOrder.forEach((item) => {
      newarr.push({
        "orderNumber": item.orderNumber,
        "unitOfMeasure": item.unitOfMeasure,
        "Quantity": item.Quantity,
        "deliveryOrderNo": item.deliveryOrderNo,
        "deliveryOrderDate": item.deliveryOrderDate,
        "status": item.status
      })
    })

    let payload = {
      deliveryId: _get(ReleaseOrderData, 'data[0]._id', ''),
      deliveryDetail: newarr,
      lastMileDelivery: lastMileDelivery
    }
    //console.log(payload,ReleaseOrderData, 'releaseOrderDate')
    await dispatch(UpdateDelivery(payload))


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
                      setLastMileDelivery={setLastMileDelivery}
                      onSaveHAndler={onSaveDoHAndler}
                      quantity={quantity}
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
