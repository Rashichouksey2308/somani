/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './inspection.module.scss'
import Router from 'next/router'
import Filter from '../../src/components/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName, setDynamicName,setDynamicOrder } from '../../src/redux/userData/action'
import { GetAllInspection } from '../../src/redux/Inspections/action'
import { SearchLeads } from '../../src/redux/buyerProfile/action'
import _get from 'lodash/get'

function Index() {
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(0)

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
if(window){
    sessionStorage.setItem('loadedPage',"Loading, Transit & Unloadinge")
    sessionStorage.setItem('loadedSubPage',`Inspection`)
    sessionStorage.setItem('openList',3)
    }
},[])
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
    dispatch(GetAllInspection(`?company=${id}`))
  }

  useEffect(() => {
    dispatch(setPageName('inception2'))
    dispatch(setDynamicName(null))
    dispatch(setDynamicOrder(null))
  })

  useEffect(() => {
    dispatch(GetAllInspection(`?page=${currentPage}&limit=7`))
  }, [dispatch, currentPage])

  const { allInspection } = useSelector((state) => state.Inspection)

  const { searchedLeads } = useSelector((state) => state.order)

  // console.log(allInspection, 'THIS IS ALL INSPECTION')

  const handleRoute = (inspection) => {
    sessionStorage.setItem('inspectionId', inspection?._id )
    dispatch(GetAllInspection(`?inspectionId=${inspection?._id}`))
    dispatch(setDynamicName(inspection?.company?.companyName))
    Router.push('/third-party')
  }

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={`${styles.head_header} align-items-center`}>
            <img
              className={`${styles.arrow} mr-2 image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>Inspection</h1>
          </div>
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
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                className={`${styles.formControl} border form-control formControl `}
                placeholder="Search"
              />
            </div>
            {searchedLeads && searchTerm && (
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
                  src="/static/Leads.svg"
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
                <span>TOTAL INSPECTION</span>
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
                <span>BL GENERATION</span>
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
        <div className={`${styles.datatable} border datatable card`}>
          <div
            className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}
          >
            <h3 className="heading_card">Inspection Details</h3>
            <div
              className={`${styles.pageList} d-flex justify-content-end align-items-center`}
            >
              <span>
                Showing Page {currentPage + 1} out of{' '}
                {Math.ceil(allInspection?.totalCount / 7)}
              </span>
              <a
                onClick={() => {
                  if (currentPage === 0) {
                    return
                  } else {
                    setCurrentPage((prevState) => prevState - 1)
                  }
                }}
                href="#"
                className={`${styles.arrow} ${styles.leftArrow} arrow`}
              >
                {' '}
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow right"
                  className="img-fluid"
                />
              </a>
              <a
                onClick={() => {
                  if (
                    currentPage + 1 <
                    Math.ceil(allInspection?.totalCount / 7)
                  ) {
                    setCurrentPage((prevState) => prevState + 1)
                  }
                }}
                href="#"
                className={`${styles.arrow} ${styles.rightArrow} arrow`}
              >
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow right"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} table`}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <thead>
                  <tr className="table_row">
                    <th>
                      CUSTOMER ID{' '}
                      <img
                        className={`mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />{' '}
                    </th>
                    <th>BUYER NAME</th>
                    <th>COMMODITY</th>
                    <th>VESSEL NAME</th>
                    <th>DATE</th>
                    <th>
                      STATUS
                      <img
                        className={`mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />{' '}
                    </th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {allInspection &&
                    allInspection?.data?.map((inspection, index) => (
                      <tr key={index} className="table_row">
                        <td>{inspection?.company?.customerId}</td>
                        <td
                          className={styles.buyerName}
                          onClick={() => {
                            handleRoute(inspection)
                          }}
                        >
                          {inspection?.company?.companyName}
                        </td>
                        <td>{inspection?.order?.commodity}</td>

                        <td>  {_get(
                      inspection,
                       'order.vessel.vessels[0].vesselInformation[0].name',
                      '',
                    )}</td>
                        <td>22-02-2022</td>
                        <td>
                          <span
                            className={`${styles.status} ${styles.review}`}
                          ></span>
                          Yes
                        </td>
                        <td>
                          <img
                            className={`${styles.edit_image} img-fluid mr-3`}
                            src="/static/mode_edit.svg"
                            alt="edit"
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
