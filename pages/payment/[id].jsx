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
import Router from 'next/router'
import {
  GetAllDelivery,
  GetDelivery,
  UpdateDelivery,
} from '../../src/redux/release&DeliveryOrder/action'
import {
  GetAllLifting,
  UpdateLiftingData,
} from '../../src/redux/Lifting/action'
import _get from 'lodash/get'
import { toast } from 'react-toastify'
import {
  setPageName,
  setDynamicName,
  setPageTabName,
} from '../../src/redux/userData/action'
import { getBreadcrumbValues } from '../../src/redux/breadcrumb/action'
function Index() {
  const dispatch = useDispatch()

  const { allLiftingData } = useSelector((state) => state.Lifting)
  const { ReleaseOrderData } = useSelector((state) => state.Release)
  console.log(allLiftingData, 'allLiftingData')
  const [darkMode, setDarkMode] = useState(false)
  const [releaseDetail, setReleaseDetail] = useState([
    {
      orderNumber: 1,
      releaseOrderDate: '',
      netQuantityReleased: 0,
      unitOfMeasure: '',
      document: null,
    },
  ])
  useEffect(() => {
    dispatch(setPageName('payment'))
    dispatch(setDynamicName(ReleaseOrderData?.data[0]?.company.companyName))
    dispatch(setPageTabName('release'))
     dispatch(
      getBreadcrumbValues({
        companyId: companyOrderId,
        companyName: ReleaseOrderData?.data[0]?.company?.companyName,
      })
    )
  }, [ReleaseOrderData])


   


  useEffect(() => {
  let temp=[];
  if (_get(allLiftingData, 'data[0].liftingOrders', []).length > 0) {



  _get(allLiftingData, 'data[0].liftingOrders', []).map((val,index)=>{
  temp.push(
  {
  deliveryOrder:val.deliveryOrder,
          detail:[
          
      ]
  }
  )

  if(val.deliveryOrderDetail.length > 0){

  val.deliveryOrderDetail.forEach((val2,index2)=>{

    temp[index].detail.push(
          {
          dateOfLifting: val2.dateOfLifting ||null,
          liftingQuant: val2.liftingQuantity,
          modeOfTransportation:val2.modeOfTransport,
          eWayBill: val2.ewayBillNo,
          LRorRRDoc: val2.LRDocument||val2.RRDocument||{},
          eWayBillDoc: val2.ewayBillDocument|| {},
          }
    )

  })
  }
  })

  }
  console.log(temp,"temppppp")
  setLifting([...temp])

  }, [allLiftingData])


 console.log(_get(allLiftingData, 'data[0].liftingOrders', []),"deliveryOrder=val.deliveryOrder")



  useEffect(() => {
    getOrderData()
  }, [dispatch])
  const getOrderData = async () => {
    let id = sessionStorage.getItem('ROrderID')
    let orderid = _get(ReleaseOrderData, 'data[0].order._id', '')
    await dispatch(GetDelivery(`?deliveryId=${id}`))
    
}
useEffect(() => {
  

  if( _get(ReleaseOrderData, 'data[0].order.lifting', '')!==''){
   dispatch(GetAllLifting(`?liftingId=${_get(ReleaseOrderData, 'data[0].order.lifting', '')}`))
  }
  
},[ReleaseOrderData])
  console.log(allLiftingData, 'allLiftingData')
  const liftingData = _get(allLiftingData, 'data[0]', '')
  const [lifting, setLifting] = useState([])

  const addNewLifting = (value) => {
    setLifting([
      ...lifting,
      {
        deliveryOrder: value,
        detail: [
          {
            dateOfLifting: '',
            liftingQuant: '',
            modeOfTransportation: 'RR',
            eWayBill: '',
            LRorRRDoc: {},
            eWayBillDoc: {},
          },
        ],
      },
    ])
  }
  console.log(lifting, 'listting to send')
  const addNewSubLifting = (index) => {
    let tempArr = lifting
    tempArr.forEach((val, i) => {
      if (i == index) {
        val.detail.push({
          dateOfLifting: '',
          liftingQuant: '',
          modeOfTransportation: 'RR',
          eWayBill: '',
          LRorRRDoc: {},
          eWayBillDoc: {},
        })
      }
    })
    setLifting([...tempArr])
  }
  const handleChange = (name, value, index, index2) => {
    console.log(index, index2, 'date')
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
  console.log(lifting)
  const handleLiftingSubmit = () => {
    let tempArr = []
    let temp2 = []
    lifting.forEach((val, index) => {
      console.log(val, 'val88')
      if (val.detail.modeOfTransportation == 'RR') {
        val.detail.map((val2, index2) => {
          temp2.push({
            dateOfLifting: val2.dateOfLifting,
            liftingQuantity: val2.liftingQuant,
            unitOfQuantity: val2.unitOfQuantity,
            modeOfTransport: val2.modeOfTransportation,
            ewayBillNo: val2.eWayBill,
            ewayBillDocument: val2.eWayBillDoc || {},
            RRDocument: val2.LRorRRDoc || {},
          })
        })
        tempArr.push({
          deliveryOrder: val.deliveryOrder,
          deliveryOrderDetail: temp2,
        })
      } else {
        val.detail.map((val2, index2) => {
          temp2.push({
            dateOfLifting: val2.dateOfLifting,
            liftingQuantity: val2.liftingQuant,
            unitOfQuantity: val2.unitOfQuantity,
            modeOfTransport: val2.modeOfTransportation,
            ewayBillNo: val2.eWayBill,
            ewayBillDocument: val2.eWayBillDoc || {},
            LRDocument: val2.LRorRRDoc || {},
          })
        })
        tempArr.push({
          deliveryOrder: val.deliveryOrder,
          deliveryOrderDetail: temp2,
        })
      }
    })

    let data = {
      liftingId: _get(ReleaseOrderData, 'data[0].order.lifting', ''),
      liftingOrders: tempArr,
    }
    console.log(data, 'datatoSend')
    dispatch(UpdateLiftingData(data))
  }
  //console.log(lifting, "newLift")

  const [deliveryOrder, setDeliveryOrder] = useState([
    {
      orderNumber: 1,
      unitOfMeasure: 'MT',
      isDelete: false,
      Quantity: '',
      deliveryOrderNo: '',
      deliveryOrderDate: '',
      status: '',
    },
  ])
  useEffect(() => {
    let tempArr = []
    if (_get(ReleaseOrderData, 'data[0].deliveryDetail', []).length > 0) {
      _get(ReleaseOrderData, 'data[0].deliveryDetail', []).forEach(
        (val, index) => {
          tempArr.push({
            orderNumber: val.orderNumber || 1,
            unitOfMeasure: val.unitOfMeasure || 'MT',
            isDelete: false,
            Quantity: val.netQuantityReleased,
            deliveryOrderNo: val.deliveryOrderNumber,
            deliveryOrderDate: val.deliveryOrderDate,
            status: val.deliveryStatus,
          })
        },
      )

      setDeliveryOrder(tempArr)
    }
    let tempArr2 = []
    if (_get(ReleaseOrderData, 'data[0].releaseDetail', []).length > 0) {
      _get(ReleaseOrderData, 'data[0].releaseDetail', []).forEach(
        (val, index) => {
          tempArr2.push({
            orderNumber: val.orderNumber || 1,
            releaseOrderDate: val.releaseOrderDate,
            netQuantityReleased: val.netQuantityReleased,
            unitOfMeasure: val.unitOfMeasure || 'MT',
            document: val.document,
          })
        },
      )

      setReleaseDetail(tempArr2)
    }

    setLastMileDelivery(_get(ReleaseOrderData, 'data[0].lastMileDelivery', []))
  }, [ReleaseOrderData])

  const [quantity, setQuantity] = useState(0)
  //console.log(deliveryOrder, "deliveryOrder")
  const addNewDelivery = (value) => {
    setDeliveryOrder([
      ...deliveryOrder,
      {
        orderNumber: 1,
        unitOfMeasure: 'MT',
        isDelete: false,
        Quantity: '',
        deliveryOrderNo: '',
        deliveryOrderDate: '',
        status: '',
      },
    ])
  }
  const deleteNewDelivery = (index) => {
    setDeliveryOrder([
      ...deliveryOrder.slice(0, index),
      ...deliveryOrder.slice(index + 1),
    ])
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
      let toastMessage =
        'Delivery Order Quantity Cannot Be Greater than Realese Quantity'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
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
    let orderDONumber = index < 10 ? `0${index}` : index
    let orderId = _get(ReleaseOrderData, 'data[0].order.orderId', '')
    let string = `${orderId.slice(0, 7)}-${orderId.slice(7)}`
    return `${string}/${orderDONumber}`
  }

  const BalanceQuantity = () => {
    let number = Number(
      _get(
        ReleaseOrderData,
        'data[0].order.customClearance.billOfEntry.billOfEntry[0].boeDetails.invoiceQuantity',
        0,
      ),
    )

    deliveryOrder.forEach((item) => {
      number = number - Number(item.Quantity)
    })
    return number
  }

  const returnLiftingData = (number) => {
    // console.log(index, 'props.liftingData1')
    let datainNeed = {}
    let data = _get(ReleaseOrderData, 'data[0].deliveryDetail', [{}])
    data.forEach((item) => {
      if (item.deliveryOrderNumber === number) {
        datainNeed = item
      }
    })
    let doQuantity = Number(datainNeed.netQuantityReleased)
    let balaceQuantity = doQuantity
    // console.log(props.liftingData, balaceQuantity, number, 'props.liftingData12')
    lifting.forEach((item) => {
      // console.log(item.deliveryOrder,item, number,'props.liftingData12')
      if (item.deliveryOrder === number) {
        item.detail.forEach((item2) => {
          balaceQuantity = balaceQuantity - Number(item2.liftingQuant)
          console.log(balaceQuantity, 'props.liftingData')
        })
        if (balaceQuantity < 0) {
          let toastMessage =
            'Lifting quantity cannot be greater than balance quantity'
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
          }
        }
      }
    })
    return { doQuantity, balaceQuantity }
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
          setQuantity(filteredArray[0]?.netQuantityReleased)
          setDoLimit(filteredArray[0]?.netQuantityReleased)

          let tempString = generateDoNumber(index)
          val.deliveryOrderNo = tempString
        }
        val[name] = value
      }
    })
    setDeliveryOrder([...tempArr])
  }
  const onSaveDoHAndler = async () => {
    let newarr = []
    deliveryOrder.forEach((item) => {
      newarr.push({
        orderNumber: item.orderNumber,
        unitOfMeasure: item.unitOfMeasure,
        netQuantityReleased: item.Quantity,
        deliveryOrderNumber: item.deliveryOrderNo,
        deliveryOrderDate: item.deliveryOrderDate,
        deliveryStatus: item.status,
      })
    })

    let payload = {
      deliveryId: _get(ReleaseOrderData, 'data[0]._id', ''),
      deliveryDetail: newarr,
      lastMileDelivery: Boolean(lastMileDelivery),
    }
    //console.log(payload,ReleaseOrderData, 'releaseOrderDate')
    await dispatch(UpdateDelivery(payload))
  }
  const removeLiftinDoc = (type, index1, index2) => {
    let temp = [...lifting]

    temp.forEach((val, i) => {
      if (i == index1) {
        console.log(val, 'temppp')
        val.detail.forEach((val2, i2) => {
          if (i2 == index2) {
            if (type == 'lr') {
              val2.LRorRRDoc = {}
            }
            if (type == 'eway') {
              val2.eWayBillDoc = {}
            }
          }
        })
      }
    })

    setLifting([...temp])

    console.log(temp, 'temppp')

    //   setList(prevState => {
    //   const newState = prevState.map((obj, i) => {
    //     if (i == index) {
    //       return { ...obj, shipmentType: e.target.value };
    //     }
    //     return obj;
    //   });
    //   return newState;
    // })
  }

  // const tabNameHandler = (value) => {
  //   dispatch(setPageTabName(value))
  //   console.log('value', value)
  // }

  // for setting default breadcrumb tab value //
  useEffect(() => {
    console.log('workinguse')
    dispatch(getBreadcrumbValues({ upperTabs: 'Release Order' }))
  }, [])

  return (
    <>
      <div className={`${styles.dashboardTab}  w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div
            className={`${styles.tab_header_inner} d-flex align-items-center`}
          >
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid mr-2 image_arrow"
              onClick={() => Router.push('/payment')}
            />
            <h1 className={`${styles.title} heading`}>
              <span>
                {_get(ReleaseOrderData, 'data[0].company.companyName', '')} -
                {` ${_get(ReleaseOrderData, 'data[0].order.orderId', '').slice(
                  0,
                  8,
                )}-${_get(ReleaseOrderData, 'data[0].order.orderId', '').slice(
                  8,
                )}`}
              </span>
            </h1>
          </div>
          <ul className={`${styles.navTabs} nav nav-tabs`}>
            <li
              className={`${styles.navItem}  nav-item`}
              onClick={() => {
                dispatch(setPageTabName('release')),
                  dispatch(getBreadcrumbValues({ upperTabs: 'Release Order' }))
              }}
            >
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
            <li
              className={`${styles.navItem} nav-item`}
              onClick={() => {
                dispatch(setPageTabName('delivery'))
                dispatch(getBreadcrumbValues({ upperTabs: 'Delivery Order' }))
              }}
            >
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
            {_get(ReleaseOrderData, 'data[0].lastMileDelivery', false) ? (
              <>
                <li
                  className={`${styles.navItem} nav-item`}
                  onClick={() =>
                    dispatch(
                      setPageTabName('lifting'),
                      dispatch(
                        getBreadcrumbValues({ upperTabs: 'Lifting Details' }),
                      ),
                    )
                  }
                >
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
              </>
            ) : null}
          </ul>
        </div>

        <div className="p-0 container-fluid">
          <div className="row">
            <div className="col-md-12 p-0 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane show active fade"
                  id="releaseOrder"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <ReleaseOrder
                      ReleaseOrderData={ReleaseOrderData}
                      releaseDetail={releaseDetail}
                      setReleaseDetail={setReleaseDetail}
                    />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="deliveryOrder"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <DeliveryOrder
                      BalanceQuantity={BalanceQuantity}
                      setLastMileDelivery={setLastMileDelivery}
                      lastMileDelivery={lastMileDelivery}
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
                      returnLiftingData={returnLiftingData}
                      data={ReleaseOrderData}
                      liftingData={lifting}
                      addNewLifting={addNewLifting}
                      addNewSubLifting={addNewSubLifting}
                      handleChange={handleChange}
                      handleLiftingSubmit={handleLiftingSubmit}
                      removeLiftinDoc={removeLiftinDoc}
                      ReleaseOrderData={ReleaseOrderData}
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
