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
      image: '/static/Dashboard.svg',
      route: '/',
    },
    {
      main: 'Leads',
      Other: [
        {
          name: 'Review Queue',
          image: '/static/Review Queue.svg',
          route: '/review-queue',
        },
        {
          name: 'Credit Queue',
          image: '/static/Credit Queue.svg',
          route: '/credit-queue',
        },
        {
          name: 'Termsheet',
          image: '/static/Termsheets.svg',
          route: '/termsheet',
        },

        {
          name: 'Margin Money',
          image: '/static/Termsheets.svg',
          route: '/margin-money',
        },
      ],
      image: '/static/Leads.svg',
      route: '/leads',
    },
    {
      main: 'Agreement & Lc Module',
      Other: [
        {
          name: 'Generic',
          image: '/static/Credit Queue.svg',
          route: '/generic',
        },
        {
          name: 'Agreement',
          image: '/static/Credit Queue.svg',
          route: '/agreement',
        },
        {
          name: 'LC Module',
          image: '/static/Review Queue.svg',
          route: '/letter-table',
        },
        {
          name: 'Vessel Nomination',
          image: '/static/Review Queue.svg',
          route: '/vessel-nomination',
        },
        {
          name: 'Insurance',
          image: '/static/Review Queue.svg',
          route: '/insurance',
        },
      ],
      image: '/static/Agreement&LCModule.svg',
    },
    {
      main: 'Loading, Transit & Unloading',
      Other: [
        {
          name: 'Inspection',
          image: '/static/Credit Queue.svg',
          route: '/third-party',
        },
        {
          name: 'Transit Details',
          image: '/static/Review Queue.svg',
          route: '/transit',
        },
        {
          name: 'Forward Hedging',
          image: '/static/Credit Queue.svg',
          route: '/forward-hedging',
        },
        {
          name: 'Track Shipments',
          image: '/static/Credit Queue.svg',
          route: '/track-shipment',
        },
      ],
      image: '/static/Loading, Transit & Unloading.svg',
      route: '/loading',
    },

    {
      main: 'Custom Clearance & WareHouse',
      Other: ['Review Queue', 'Credit Queue', 'Termsheets'],
      image: '/static/Warehouse.svg',
      route: '/bill-of-entry',
    },
    {
      main: 'Payments, Invoicing & Delivery',
      Other: ['Review Queue', 'Credit Queue', 'Termsheets'],
      image: '/static/Masters.svg',
      route: '',
    },
    {
      main: 'Masters',
      Other: [
        {
          name: 'Users',
          image: '/static/Credit Queue.svg',
          route: '/masters/users',
        },
        { name: 'User Roles', image: '/static/Review Queue.svg', route: '' },
        { name: 'Vendors', image: '/static/Review Queue.svg', route: '' },
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
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('sideBarMain', 'Dashboard')
      sessionStorage.setItem('subsideBarMain', null)
      setcategory(sessionStorage.getItem('sideBarMain'))
      setsubCategory(sessionStorage.getItem('subsideBarMain'))
    }
  }, [])
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
      return index
    } else {
      sessionStorage.setItem('subsideBarMain', val)
      setsubCategory(sessionStorage.getItem('subsideBarMain'))
    }
  }
  console.log('ioooooo', category, subCategory)
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)
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
