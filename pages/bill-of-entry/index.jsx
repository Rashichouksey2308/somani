/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import BillOfEntryTableMain from '../../src/components/BillOfEntryTableMain'
import Router from 'next/router'
import Filter from '../../src/components/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCustomClearance } from '../../src/redux/CustomClearance&Warehousing/action'
import { setDynamicName, setPageName } from '../../src/redux/userData/action'
import { SearchLeads } from '../../src/redux/buyerProfile/action'

function Index () {
  const [serachterm, setSearchTerm] = useState('')

  const { searchedLeads } = useSelector((state) => state.order)

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Custom Clearance & WareHouse')
      sessionStorage.setItem('loadedSubPage', null)
      sessionStorage.setItem('openList', 4)
    }
  }, [])

  const dispatch = useDispatch()

  const routeChange = (insured) => {
    sessionStorage.setItem('customId', insured._id)
    dispatch(GetAllCustomClearance(`?customClearanceId=${insured._id}`))
    Router.push('/bill-of-entry/id')
  }
  useEffect(() => {
    dispatch(setPageName('custom'))
    dispatch(setDynamicName(null))
  })

  const handleSearch = (e) => {
    const query = `${e.target.value}`
    setSearchTerm(query)
    if (query.length >= 3) {
      dispatch(SearchLeads(query))
    }
  }

  const handleFilteredData = (e) => {
    setSearchTerm('')
    const id = `${e.target.id}`
    dispatch(GetAllCustomClearance(`?company=${id}`))
  }

  return (
    <div className='container-fluid p-0 border-0'>
      <div className={styles.container_inner}>
        <div
          className={`${styles.filter_outer} d-md-flex justify-content-between align-items-center d-inline-block`}
        >
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={`${styles.head_header} align-items-center`}>
              {/* <img
                className={`${styles.arrow} image_arrow mr-2 img-fluid`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              /> */}
              <h1 className={styles.heading}>Bill of Entry</h1>
            </div>
            <div className={styles.search}>
              <div className='input-group'>
                <div
                  className={`${styles.inputGroupPrepend} input-group-prepend`}
                >
                  <img
                    src='/static/search.svg'
                    className='img-fluid'
                    alt='Search'
                  />
                </div>
                <input
                  value={serachterm}
                  onChange={handleSearch}
                  type='text'
                  className={`${styles.formControl} border text_area form-control formControl`}
                  placeholder='Search'
                />
              </div>
              {searchedLeads && serachterm && (
                <div className={styles.searchResults}>
                  <ul>
                    {searchedLeads.data.data.map((results, index) => (
                      <li
                        onClick={handleFilteredData}
                        id={results._id}
                        key={index}
                      >
                        {results.companyName} <span>{results.customerId}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Filter />
            {/* <a href="#" className={`${styles.filterList} filterList `}>
        Bhutani Traders
        <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
      </a>
       */}
          </div>
          {/* <button className={`${styles.addBtn}`}>Add</button> */}
        </div>

        <div
          className={`${styles.statusBox} border statusBox d-flex align-items-center justify-content-between`}
        >
          <div className={`${styles.all} ${styles.boxInner} all border_color`}>
            <div className='d-lg-flex align-items-center d-inline-block'>
              <div className={`${styles.iconBox} iconBox`}>
                <img
                  src='/static/leads-icon.svg'
                  className='img-fluid'
                  alt='All Leads'
                />
              </div>
              <h3>
                <span>ALL</span>
                3,200
              </h3>
            </div>
          </div>
          <div
            className={`${styles.approved} ${styles.boxInner} approved border_color`}
          >
            <div className='d-lg-flex align-items-center d-inline-block'>
              <div className={`${styles.iconBox} iconBox`}>
                <img
                  src='/static/check.svg'
                  className='img-fluid'
                  alt='Check'
                />
              </div>
              <h3>
                <span>FINAL ASSESSMENT</span>
                780
              </h3>
            </div>
          </div>
          <div
            className={`${styles.review} ${styles.boxInner} review border_color`}
          >
            <div className='d-lg-flex align-items-center d-inline-block'>
              <div className={`${styles.iconBox} iconBox`}>
                <img
                  src='/static/access-time.svg'
                  className='img-fluid'
                  alt='Access Time'
                />
              </div>
              <h3>
                <span>PROVISIONAL</span>
                800
              </h3>
            </div>
          </div>
          <div
            className={`${styles.saved} ${styles.boxInner} saved border_color`}
          >
            <div className='d-lg-flex align-items-center d-inline-block'>
              <div className={`${styles.iconBox} iconBox`}>
                <img
                  src='/static/bookmark.svg'
                  className='img-fluid'
                  alt='Close'
                />
              </div>
              <h3>
                <span>SAVED</span>
                14
              </h3>
            </div>
          </div>
        </div>
        <BillOfEntryTableMain
          tableName='Bill of Entries'
          isVesselHeader
          dateHeading='BOE DATE'
          isStatus
          handleRoute={routeChange}
        />
      </div>
    </div>
  )
}

export default Index
