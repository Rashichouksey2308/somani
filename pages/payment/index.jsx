/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import PaymentTableMain from '../../src/components/PaymentTableMain'
import Filter from '../../src/components/Filter'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName, setDynamicName } from '../../src/redux/userData/action'
import { SearchLeads } from '../../src/redux/buyerProfile/action'
import { GetAllDelivery } from '../../src/redux/release&DeliveryOrder/action'

function Index() {

  const dispatch = useDispatch()

  const [serachterm, setSearchTerm] = useState('')

  const { searchedLeads } = useSelector((state) => state.order)

  useEffect(() => {
    dispatch(setPageName('payment'))
    dispatch(setDynamicName(null))
  })

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Payments, Invoicing & Delivery')
      sessionStorage.setItem('loadedSubPage', null)
      sessionStorage.setItem('openList', 5)
    }
  }, [])

  
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
    dispatch(GetAllDelivery(`?company=${id}`))
  }

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.search}>
            <div className="input-group">
              <div
                className={`${styles.inputGroupPrepend} input-group-prepend`}
              >
                <img
                  src="/static/search.svg"
                  className="img-fluid"
                  alt="Search"
                />
              </div>
              <input
                  value={serachterm}
                  onChange={handleSearch}
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl `}
                  placeholder="Search"
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

        <div
          className={`${styles.statusBox} border statusBox d-flex align-items-center justify-content-between`}
        >
          <div className={`${styles.all} ${styles.boxInner} all border_color`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img
                  src="/static/leads-icon.svg"
                  className="img-fluid"
                  alt="All Leads"
                />
              </div>
              <h3>
                <span>ALL</span>
                3,200
              </h3>
            </div>
          </div>
          <div className={`${styles.approved} ${styles.boxInner} approved border_color`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img
                  src="/static/check.svg"
                  className="img-fluid"
                  alt="Check"
                />
              </div>
              <h3>
                <span>FINAL ASSESSMENT</span>
                780
              </h3>
            </div>
          </div>
          <div className={`${styles.review} ${styles.boxInner} review border_color`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img
                  src="/static/access-time.svg"
                  className="img-fluid"
                  alt="Access Time"
                />
              </div>
              <h3>
                <span>PROVISIONAL</span>
                800
              </h3>
            </div>
          </div>
          <div className={`${styles.saved} ${styles.boxInner} saved border_color`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img
                  src="/static/bookmark.svg"
                  className="img-fluid"
                  alt="Close"
                />
              </div>
              <h3>
                <span>SAVED</span>
                14
              </h3>
            </div>
          </div>
        </div>
        <PaymentTableMain
          tableName="Payment, Invoicing &amp; Delivery"
          pageType="DELIVERY ORDER NO."
          dateHeading="DELIVERY ORDER DATE"
          isStatus={true}
        />
      </div>
    </div>
  )
}
export default Index
