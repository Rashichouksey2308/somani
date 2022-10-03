/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import dash from '../../../public/static/Dashboard.svg'
import accord from '../../../public/static/next-logo.png'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

function Index() {
  let tempArr = [
    {
      main: 'Dashboard',
      Other: [],
      image: '/static/dashboard.svg',
      route: '/',
    },
    {
      main: 'Leads',
      Other: [
        {
          name: 'Review Queue',
          image: '/static/review-queue.svg',
          route: '/review-queue',
        },
        {
          name: 'Credit Queue',
          image: '/static/credit-queue.svg',
          route: '/credit-queue',
        },
        {
          name: 'Termsheet',
          image: '/static/termsheets.svg',
          route: '/termsheet',
        },

        {
          name: 'Margin Money',
          image: '/static/margin-money.svg',
          route: '/margin-money',
        },
      ],
      image: '/static/leads.svg',
      route: '/leads',
    },
    {
      main: 'Agreement & LC Module',
      Other: [
        {
          name: 'Generic',
          image: '/static/generic.svg',
          route: '/generic/generic-list/',
        },
        {
          name: 'Agreement',
          image: '/static/agreement.svg',
          route: '/agreement-table',
        },
        {
          name: 'LC Module',
          image: '/static/lc-module.svg',
          route: '/letter-table',
        },
        {
          name: 'Vessel Nomination',
          image: '/static/vessel-nomination.svg',
          route: '/vessel-nomination',
        },
        {
          name: 'Insurance',
          image: '/static/insurance.svg',
          route: '/insurance',
        },
      ],
      route: '',
      image: '/static/Agreement&LCModule.svg',
    },
    {
      main: 'Loading, Transit & Unloading',
      Other: [
        {
          name: 'Inspection',
          image: '/static/inspection.svg',
          route: '/inspection',
        },
        {
          name: 'Transit Details',
          image: '/static/transit-details.svg',
          route: '/transit',
        },
        {
          name: 'Forward Hedging',
          image: '/static/forward-hedging.svg',
          route: '/forward-table',
        },
        {
          name: 'Track Shipments',
          image: '/static/track-shipments.svg',
          route: '/track-shipment',
        },
      ],
      image: '/static/LoadingTransit&Unloading.svg',
      route: '',
    },

    {
      main: 'Custom Clearance & WareHouse',
      Other: [],
      image: '/static/warehouse.svg',
      route: '/bill-of-entry',
    },
    {
      main: 'Payments, Invoicing & Delivery',
      Other: [],
      image: '/static/PaymentsInvoicing&Delivery.svg',
      route: '/payment',
    },
    {
      main: 'Masters',
      Other: [
        {
          name: 'Users',
          image: '/static/users.svg',
          route: '/masters/users',
        },
        { name: 'User Roles',
          image: '/static/user-roles.svg',
          route: ''
        },
        { name: 'Vendors',
          image: '/static/vendors.svg',
          route: ''
        },
        { name: 'Insurance Company',
          image: '/static/insurance-company.svg',
          route: ''
        },
        { name: 'Commodity',
          image: '/static/commodity.svg',
          route: ''
        },
        { name: 'GL',
          image: '/static/gl.svg',
          route: ''
        },
        { name: 'Others',
          image: '/static/others.svg',
          route: ''
        },
        {
          name: 'Third-Party Inspection',
          image: '/static/Review Queue.svg',
          route: '',
        },
      ],
      image: '/static/Masters.svg',
      route: '',
    },
  ]
  const [className, setClassName] = useState('')
  const [category, setcategory] = useState('Dashboard')
  const [subCategory, setsubCategory] = useState(null)
  const [index12, setIndex] = useState('')
 const side = useSelector((state) => state.breadcrumb)
 console.log(side,"subsideBarMain")
  useEffect(() => {
    console.log("aaasqqaq")
    if (window) {
      sessionStorage.setItem('sideBarMain', sessionStorage.getItem("loadedPage")? sessionStorage.getItem("loadedPage"):"Dashboard")
      sessionStorage.setItem('subsideBarMain', sessionStorage.getItem("loadedSubPage")?sessionStorage.getItem("loadedSubPage"):null)
      setcategory(sessionStorage.getItem('sideBarMain'))
      setsubCategory(sessionStorage.getItem('subsideBarMain'))
     if(sessionStorage.getItem('openList')){
   
      setIndex(sessionStorage.getItem('openList'))
      setClassName(`${styles.openlist}`)
     }else{
     
      setIndex(``)
      setClassName(``)
     }
      
      
    }
  }, [])
    useEffect(() => {
    if (window) {
      console.log("changed",sessionStorage.getItem('sideBarMain'),sessionStorage.getItem('subsideBarMain'))
     
      setcategory(sessionStorage.getItem('sideBarMain'))
      setsubCategory(sessionStorage.getItem('subsideBarMain'))
     if(sessionStorage.getItem('openList')){
   
      setIndex(sessionStorage.getItem('openList'))
      setClassName(`${styles.openlist}`)
     }else{
     
      setIndex(``)
      setClassName(``)
     }
      
      
    }
  }, [Router.asPath]);
  
    // useEffect(() => {
    //     const onHashChangeStart = (url) => {
    //         console.log(`Path changing to ${url}`);
    //     };

    //       Router.events.on("hashChangeStart", onHashChangeStart);

    //     return () => {
    //         Router.events.off("hashChangeStart", onHashChangeStart);
    //     };
    // }, [Router.events]);

  console.log(subCategory,"opne")
  const handleOpen = (val, index, from) => {
    console.log(val, 'val233')
    if (from == 'main') {
      sessionStorage.setItem('sideBarMain', val)
      sessionStorage.setItem('subsideBarMain', null)
      setsubCategory(sessionStorage.getItem('subsideBarMain'))
      setcategory(sessionStorage.getItem('sideBarMain'))
      setClassName(`${styles.openlist} `)
      setcategory(val)
      setIndex(index)
       sessionStorage.setItem("loadedPage",val)
       sessionStorage.setItem("loadedSubPage",null)
       sessionStorage.setItem('openList', index)
      return index
    } else {
      sessionStorage.setItem('subsideBarMain', val)
      setsubCategory(sessionStorage.getItem('subsideBarMain'))
    }
  }

  console.log(category,subCategory,"sub")

  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
  const openList = useSelector((state) => state.sidebar.openList)
 
  const isMobile = useSelector((state) => state.sidebar.isMobile)
  //   console.log(isMobile,"isMobile123")
  //   console.log("sidebar",)
  // console.log(tempArr,"yem")
  return (
    <>
      {isMobile ? (
        <div
          className={`${styles.main_container_mobile} sidebar-bg  ${
            !sidebar ? styles.collapse_sidebar_mobile : null
          }`}
        >
          {tempArr.map((val, index) => {
            const className1 =
              subCategory == null || subCategory == 'null'
                ? category == val.main
                  ? `${styles.selected}`
                  : null
                : null
            return (
              <>
                <div key={index} className={styles.wrapper}>
                  <div
                    className={`${styles.header} ${className1}`}
                    onClick={(e) => {
                      handleOpen(val.main, index, 'main')
                      Router.push(val.route)
                    }}
                  >
                    <div>
                      <img src={`${val.image}`}></img>
                      <span>{val.main}</span>
                    </div>
                    {val.Other.length > 0 ? (
                      <img
                        src="/static/Accordion - menu.svg"
                        className={styles.icon}
                      ></img>
                    ) : (
                      <div className={styles.icon}></div>
                    )}
                  </div>
                  <div
                    className={`${styles.sub_wrapper} ${
                     index12  == index    ? className : null
                    }`}
                  >
                    {val.Other.length > 0
                      ? val.Other.map((other, index2) => {
                          const className12 =
                            index12 == index|| subCategory==other.main
                              ? `${styles.openlist} sidebar-selected`
                              : null
                          return (
                            <>
                              <div
                                index={index2}
                                className={`${styles.sub_header} ${
                                  subCategory == null
                                    ? null
                                    : subCategory == other.name
                                    ? styles.subSelected
                                    : null
                                }`}
                                onClick={() => {
                                  handleOpen(other.name, index2, '')
                                  Router.push(other.route)
                                }}
                              >
                                <div>
                                  <img src={`${other.image}`}></img>
                                  <span
                                    className={`${
                                      subCategory == null
                                        ? null
                                        : subCategory == other.name
                                        ? styles.subSelected
                                        : null
                                    }`}
                                  >
                                    {other.name}
                                  </span>
                                </div>
                              </div>
                            </>
                          )
                        })
                      : null}
                  </div>
                </div>
              </>
            )
          })}
        </div>
      ) : (
        <div
          className={`${styles.main_container} sidebar-bg  ${
            !sidebar ? styles.collapse_sidebar : null
          }`}
        >
          {tempArr.map((val, index) => {
            const className1 =
              subCategory == null || subCategory == 'null'
                ? category == val.main
                  ? `${styles.selected}`
                  : null
                : null
            return (
              <>
                <div
                  key={index}
                  className={`${styles.wrapper} ${
                    category == val.main ? styles.wrapperSlected : null
                  } `}
                >
                  <div
                    className={`${styles.header} ${className1}`}
                    onClick={(e) => {
                      handleOpen(val.main, index, 'main')
                      console.log('router', val.route)
                      Router.push(val.route)
                    }}
                  >
                    <div>
                      <img src={`${val.image}`} style={{filter:'invert(50%) sepia(9%) saturate(5858%) hue-rotate(183deg) brightness(92%) contrast(92%)'}}></img>
                      <span>{val.main}</span>
                    </div>
                    {val.Other.length > 0 ? (
                      <img
                        src="/static/Accordion - menu.svg"
                        className={styles.icon}
                      ></img>
                    ) : (
                      <div className={styles.icon}></div>
                    )}
                  </div>
                  <div
                    className={`${styles.sub_wrapper} ${
                      index12 == index ? className : null
                    }`}
                  >
                    {val.Other.length > 0
                      ? val.Other.map((other, index2) => {
                          const className12 =
                            index12 == index
                              ? `${styles.openlist} sidebar-selected`
                              : null
                          return (
                            <>
                              <div
                                index={index2}
                                className={`${styles.sub_header} ${
                                  subCategory == null
                                    ? null
                                    : subCategory == other.name
                                    ? styles.subSelected
                                    : null
                                }`}
                                onClick={() => {
                                  handleOpen(other.name, index2, '')
                                  Router.push(other.route)
                                }}
                              >
                                <div>
                                  <img src={`${other.image}`}></img>
                                  <span
                                    className={`${
                                      subCategory == null
                                        ? null
                                        : subCategory == other.name
                                        ? styles.subSelected
                                        : null
                                    }`}
                                  >
                                    {other.name}
                                  </span>
                                </div>
                              </div>
                            </>
                          )
                        })
                      : null}
                  </div>
                </div>
              </>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Index
