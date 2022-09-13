import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import _get from 'lodash/get'
import { setDynamicName } from '../../../src/redux/userData/action'

export default function Index({ isQuery }) {
  const dispatch = useDispatch()
  const [show, setShow] = useState({
    units: true,
    currency: true,
  })
  const removeStorage = () => {
    sessionStorage.removeItem('exe')
    sessionStorage.removeItem('Seller')
    sessionStorage.removeItem('Buyer')
    sessionStorage.removeItem('Supplier')
    sessionStorage.removeItem('Associate')
    sessionStorage.removeItem('add')
    sessionStorage.removeItem('Product')
    sessionStorage.removeItem('Finance')
    sessionStorage.removeItem('Shipping')
    sessionStorage.removeItem('Cma')
    sessionStorage.removeItem('Cha')
    sessionStorage.removeItem('Stevedore')
    sessionStorage.removeItem('genericSide')
    sessionStorage.removeItem('setgenActive')
  }
  useEffect(() => {
    if (
      isQuery?.match('/leads') ||
      isQuery?.match('/order-list') ||
      isQuery?.match('/new-order') ||
      isQuery?.match('/termsheet-preview') ||
      isQuery?.match('/letter-table/letter-amend/id') ||
      isQuery == '/agreement/preview' ||
      isQuery == '/transit' ||
      isQuery == '/review-queue' ||
      isQuery == '/margin-preview' ||
      isQuery == '/generic/generic-list' ||
      isQuery == '/track-shipment' ||
      isQuery?.match('/forward-hedging')
    ) {
      show.units = false
      show.currency = false
      removeStorage()
      setShow({ ...show })
    } else if (isQuery?.match('/generic')) {
      show.units = false
      show.currency = false

      setShow({ ...show })
    } else if (
      isQuery?.match('/credit-queue') ||
      isQuery?.match('/termsheet') ||
      isQuery?.match('/margin-money') ||
      isQuery?.match('/review') ||
      isQuery?.match('/vessel') ||
      isQuery?.match('/third-party') ||
      isQuery?.match('/transit/id')
    ) {
      show.units = false
      show.currency = true
      removeStorage()
      setShow({ ...show })
    } else if (
      isQuery?.match('/termsheet/') ||
      isQuery?.match('/margin-money/')
    ) {
      show.units = true
      show.currency = true
      removeStorage()
      setShow({ ...show })
    } else {
      show.units = true
      show.currency = true
      setShow({ ...show })
    }
  }, [isQuery])

  //use effect to call custom data here , in order to get breadcrumb to work
  useEffect(() => {
    dispatch(setDynamicName(customData?.company?.companyName))
  }, [customData])
  const { allCustomClearance } = useSelector((state) => state.Custom)
  const { upperTabs, companyId } = useSelector(
    (state) => state.Breadcrumb.breadCrumbData,
  )
  console.log(upperTabs, companyName, companyId, '12222')

  let customData = _get(allCustomClearance, 'data[0]', {})
  let OrderId = _get(customData, 'order.orderId', {})
  let companyName = _get(customData, 'company.companyName')

  const [myUrl, setUrl] = useState([])
  const [myUrlLength, setUrlLength] = useState([])
  var url = []
  const router = useRouter()
  const pageName = useSelector((state) => state?.user.pageName)
  const { pageTabName } = useSelector((state) => state?.user)
  const id = useSelector((state) => state?.user.id)
  const order = useSelector((state) => state?.user.order)
  const currency = useSelector((state) => state?.user)

  console.log('pageName23', order, id)
  const [unit, setUnit] = useState({ value: 'crores' })
  const [curency, setCurency] = useState({ value: 'inr' })

  const handleUnitChange = (event) => {
    setUnit({ value: event.target.value })
  }

  const handleCurencyChange = (event) => {
    setCurency({ value: event.target.value })
  }

  useEffect(() => {
    if ('dashboard' == pageName) {
      router.route = '/Dashboard'
    }
    if ('newOrder' == pageName) {
      router.route = '/Leads' + `/${id?.toLowerCase()}` + '/New Order'
    }
    if ('leads' == pageName) {
      if (id !== null) {
        router.route = '/Leads' + `/${id?.toLowerCase()}`
      } else {
        router.route = '/Leads'
      }
    }
    if ('leads/' == pageName) {
      router.route = '/Leads' + '/Register Your Company'
    }

    if ('review-queue' == pageName) {
      if (id !== null) {
        router.route = '/Leads' + '/Review Queue' + `/${id?.toLowerCase()}`
      } else {
        router.route = '/Leads' + '/Review Queue'
      }
    }
    if ('credit-queue' == pageName) {
      if (order != null) {
        router.route =
          '/Leads' + '/Credit Queue' + `/${id?.toLowerCase()}` + `/${order}`
      } else if (id !== null) {
        router.route = '/Leads' + '/Credit Queue' + `/${id?.toLowerCase()}`
      } else {
        router.route = '/Leads' + '/Credit Queue'
      }
    }
    if ('margin-money' == pageName) {
      if (id !== null) {
        router.route =
          '/Leads' + '/Margin Money' + `/${id?.toLowerCase()}` + `/${order}`
        console.log('router123', router.route)
      } else {
        router.route = '/Leads' + '/Margin Money'
      }
    }

    if ('termsheet' == pageName) {
      if (order != null) {
        router.route =
          '/Leads' + '/Termsheet' + `/${id?.toLowerCase()}` + `/${order}`
        console.log('router1234', router.route)
      } else if (id !== null) {
        router.route = '/Leads' + '/Termsheet' + `/${id?.toLowerCase()} `
        console.log('router123', router.route)
      } else {
        router.route = '/Leads' + '/Termsheet'
      }
    }
    if ('termsheet-preview' == pageName) {
      if (id !== null) {
        router.route =
          '/Leads' + '/Termsheet' + `/${id?.toLowerCase()}` + `/${order}`
        console.log('router123', router.route)
      } else {
        router.route = '/Leads' + '/Termsheet'
      }
    }
    if ('generic' == pageName) {
      if (id !== null) {
        router.route =
          '/Agreements & LC Module' + '/Generic' + `/${id?.toLowerCase()}` + `/${order}`
        console.log('router123', router.route)
      } else {
        router.route = '/Agreements & LC Module' + '/Generic'
      }
    }
    if ('agreement' == pageName) {
      if (id !== null) {
        router.route =
          '/Agreements & LC Module' + '/Agreement' + `/${id?.toLowerCase()}` + `/${order}`
        console.log('router123', router.route)
      } else {
        router.route = '/Agreements & LC Module' + '/Agreement'
      }
    }
    if ('Lc' == pageName) {
      if (order != null) {
        router.route =
          '/Agreements & LC Module' + '/LC Module' + `/${id?.toLowerCase()}` + `/${order}`
        console.log('router1234', router.route)
      } else if (id !== null) {
        router.route = '/Agreements & LC Module' + '/LC Module' + `/${id?.toLowerCase()}`
        console.log('router123', router.route)
      } else {
        router.route = '/Agreements & LC Module' + '/LC Module'
      }
    }
    if ('vessel' == pageName) {
      if (order != null) {
        router.route =
          '/Agreement & LC Module' +
          '/Vessel Nomination' +
          `/${id?.toLowerCase()}` +
          `/${order}`
      } else if (id != null) {
        router.route =
          '/Agreement & LC Module' + '/Vessel Nomination' + `/${id?.toLowerCase()}`
      } else {
        router.route = '/Agreement & LC Module' + '/Vessel Nomination'
      }
    }
    if ('insurance' == pageName) {
      if (order != null) {
        router.route =
          '/Agreement & LC Module' +
          `/${id?.toLowerCase()}` +
          '/Insurance' +
          `/${order}`
      } else {
        router.route = '/Agreement & LC Module' + '/Insurance'
      }
    }
    if ('insurance Request Letter' == pageName) {
      router.route =
        '/Agreement & LC Module' +
        `/${id?.toLowerCase()}` +
        '/Insurance' +
        '/Request Letter' +
        `/${order}`
    }

    if ('loading' == pageName) {
      if (id !== null) {
        router.route =
          '/Loading, Transit & Unloading' + `/${id?.toLowerCase()}` + '/Order ID'
        console.log('router123', router.route)
      } else {
        router.route = '/Loading, Transit & Unloading'
      }
    }
    // if ('inception' == pageName) {
    //   if (id !== null) {
    //     router.route = '/Loading, Transit & Unloading' + `/${id?.toLowerCase()}`
    //     console.log('router123', router.route)
    //   } else {
    //     router.route = '/Loading, Transit & Unloading'
    //   }
    // }
    if ('inspection2' == pageName) {
      if (order != null) {
        router.route =
          '/Loading, Transit & Unloading' +
          `/Inspection` +
          '/Third Party Inspection' +
          `/${id?.toLowerCase()}` +
          `/${order}`
      } else if (id !== null) {
        router.route =
          '/Loading, Transit & Unloading' +
          `Inspection` +
          '/Third Party Inspection' +
          `/${id?.toLowerCase()}` +
          console.log('router123', router.route)
      } else {
        router.route = '/Loading, Transit & Unloading' + '/Inspection'
      }
    }
    if ('transit' == pageName) {
      if (id !== null) {
        router.route =
          `/Loading, Transit & Unloading` +
          '/Transit Details' +
          `/${id?.toLowerCase()}` +
          `/${upperTabs}` +
          `/${order}`
        console.log('router123', router.route)
      } else {
        router.route = '/Loading, Transit & Unloading' + '/Transit Details'
      }
    }
    if ('forward' == pageName) {
      if (order != null) {
        router.route =
          '/Loading, Transit & Unloading' +
          '/Forward Hedging' +
          `/${id?.toLowerCase()}` +
          `/${order}`
        console.log('router1234', router.route)
      } else if (id !== null) {
        router.route =
          '/Loading, Transit & Unloading' + '/Forward Hedging' + `/${id?.toLowerCase()} `
        console.log('router123', router.route)
      } else {
        router.route = '/Loading, Transit & Unloading' + '/Forward Hedging'
      }
    }
    if ('track' == pageName) {
      if (order != null) {
        router.route = '/Loading, Transit & Unloading' + '/Track Shipments'
        // `/${id}` +
        // `/${order}`
        console.log('router1234', router.route)
      } else if (id !== null) {
        f
        router.route =
          '/Loading, Transit & Unloading' + '/Track Shipments' + `/${id?.toLowerCase()} `
        console.log('router123', router.route)
      } else {
        router.route = '/Loading, Transit & Unloading' + '/Track Shipments'
      }
    }
    if ('custom' == pageName) {
      if (id !== null) {
        router.route =
          '/Custom Clearance & Warehouse' +
          `/${companyName}` +
          `/${upperTabs}` +
          `/${OrderId}`
        console.log('router123', router.route)
        console.log(id, 'id123')
      } else {
        router.route = '/Custom Clearance & Warehouse'
      }
    }
    console.log('tabname', pageTabName)
    if ('payment' == pageName) {
      if (id !== null) {
        router.route =
          '/Payment, Invoicing & Delivery' +
          `/${id?.toLowerCase()}` +
          `/${upperTabs}` +
          `/${companyId}`
      } else {
        router.route = '/Payment, Invoicing & Delivery'
      }
    }

    console.log(router.route, ' router.route')

    router.route.split('/').map((subRoute, index) => {
      console.log(subRoute, 'subRoute')

      if (subRoute !== '') {
        if (subRoute == '[id]') {
          // setUrl([...url, router.query.id])
          // url.push(router.query.id);
          url.push(subRoute)
        } else {
          // setUrl([...url, subRoute])
          url.push(subRoute)
        }
      } else {
        // setUrl([...url, "Home"])
        // url.push("");
      }
      if (index === router.route.split('/').length - 1) {
        setUrl(url)
        setUrlLength(url.length)
      }
    })
  }, [pageName, id, order, upperTabs, companyId])
  console.log(myUrl, 'url')
  console.log(currency, 'pageName')
  return (
    <div
      className={`${styles.main_container} d-sm-flex d-block justify-content-between background1`}
    >
      <div>
        <img src="/static/home.svg"></img>
        {pageName == 'generic' ||
        pageName == 'vessel' ||
        pageName == 'custom' ||
        pageName == 'termsheet' ||
        pageName == 'credit-queue' ||
        pageName == 'payment' ? (
          <div className={`${styles.breadcrumItem}`}>
            {myUrl.map((val, index) => {
              {
                console.log(myUrl.length - 1 == index, 'val')
              }
              return (
                <div
                  key={index}
                  className={`${styles.breadcrumcontainer} ${
                    myUrlLength == index + 1
                      ? `${styles.highlight} highlight`
                      : null
                  }`}
                >
                  <span className="breadcrum_mode">/</span>
                  <span className={`${styles.value} breadcrum_mode`}>
                    {val}
                  </span>
                </div>
              )
            })}
          </div>
        ) : (
          <div className={`${styles.breadcrumItem}`}>
            {myUrl.map((val, index) => {
              {
                console.log(myUrl.length - 1 == index, 'val')
              }
              return (
                <div
                  key={index}
                  className={`${styles.breadcrumcontainer} ${
                    myUrlLength == 4
                      ? myUrlLength - 2 == index
                        ? `${styles.highlight} highlight`
                        : myUrlLength - 1 == index
                        ? `${styles.highlight} highlight`
                        : null
                      : myUrlLength - 1 == index
                      ? `${styles.highlight} highlight`
                      : null
                  }`}
                >
                  <span className="breadcrum_mode">/</span>
                  <span className={`${styles.value} breadcrum_mode`}>
                    {val}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div className={`${styles.unit_container} d-flex`}>
        {show.units && pageName !== 'payment' ? (
          <div className="mr-0 mr-sm-2">
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select
              className={`${styles.options} accordion_DropDown`}
              value={unit.value}
              onChange={handleUnitChange}
            >
              <option value="crores" selected>
                CRORES
              </option>
              {/* <option value="millions">MILLIONS</option> */}
              <option value="Lakh">LAKH</option>
            </select>
          </div>
        ) : null}
        {show.currency && pageName !== 'payment' ? (
          <div>
            <h5 className={`${styles.unit_label} accordion_Text`}>
              Currency :
            </h5>
            <select
              className={`${styles.options} bg-transparent px-0 accordion_DropDown`}
              value={curency.value}
              onChange={handleCurencyChange}
            >
              <option value="inr" selected>
                INR
              </option>
              <option value="euro">EURO</option>
              <option value="usd">USD</option>
              <option value="pound">POUND</option>
            </select>
          </div>
        ) : null}
      </div>
    </div>
  )
}
