import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllVessel, GetVessel } from '../../src/redux/vessel/action'
import { SearchLeads } from '../../src/redux/buyerProfile/action.js'

import Filter from '../../src/components/Filter'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../src/redux/userData/action'

function Index() {

  const [serachterm, setSearchTerm] = useState('')

  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(0)

  const { searchedLeads } = useSelector((state) => state.order)

  const { allVessel, Vessel } = useSelector((state) => state.vessel)
  console.log(allVessel, 'allVessel')
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Agreement & LC Module')
      sessionStorage.setItem('loadedSubPage', `Vessel Nomination`)
      sessionStorage.setItem('openList', 2)
    }
  }, [])
  useEffect(() => {
    dispatch(GetAllVessel(`?page=${currentPage}&limit=7`))
  }, [currentPage])

  useEffect(() => {
    dispatch(setPageName('vessel'))
    dispatch(setDynamicName(null))
    dispatch(setDynamicOrder(null))
  }, [allVessel])

  const handleRoute = (vessel) => {
    sessionStorage.setItem('VesselCompany', vessel.company._id)
    sessionStorage.setItem('VesselId', vessel._id)
    dispatch(GetVessel(`?vesselId=${vessel._id}`))
    setTimeout(() => {
      Router.push('/vessel')
    }, 500)
  }
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
    dispatch(GetAllVessel(`?company=${id}`))
  }

  const [sorting, setSorting] = useState(1)

  const handleSort = () => {
  
    if(sorting == -1){
    dispatch(GetAllVessel(`?page=${currentPage}&limit=7&createdAt=${sorting}`))
    setSorting(1)
    }else if(sorting == 1){
      
      dispatch(GetAllVessel(`?page=${currentPage}&limit=7&createdAt=${sorting}`))
      setSorting(-1)
    }
  }


  return (
    <div className="container-fluid p-0">
      <div className={`${styles.container_inner}`}>
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
        </a> */}

          {/* <button className={styles.createBtn}
        style={{ position: "absolute", right: 25 }}
        onClick={()=>{Router.push("/letter-table/letter-application")}}
        >
        Create</button> */}
        </div>

        <div className={`${styles.datatable} border card datatable`}>
          <div
            className={`${styles.tableFilter} shadow-none align-items-center d-flex justify-content-between border-0 d-flex`}
          >
            <h3 className="heading_card">Vessel Nomination</h3>
            <div
              className={`${styles.pageList} d-flex justify-content-end align-items-center`}
            >
              <span>
                Showing Page {currentPage + 1} out of{' '}
                {Math.ceil(allVessel?.totalCount / 7)}
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
                  if (currentPage + 1 < Math.ceil(allVessel?.totalCount / 7)) {
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
                      ORDER ID{' '}
                      <img
                        className={`mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                        onClick={()=>handleSort()}
                      />
                    </th>
                    <th>BUYER NAME</th>
                    <th>COMMODITY</th>
                    <th>CREATED BY</th>
                    <th>CREATED ON</th>
                    <th>STATUS</th>
                    <th>PREVIEW</th>
                  </tr>
                </thead>
                <tbody>
                  {allVessel &&
                    allVessel?.data?.map((vessel, index) => (
                      <tr key={index} className="table_row">
                        <td>{vessel?.order?.orderId ? vessel?.order?.orderId : vessel?.order?.applicationId }</td>
                        <td
                          className={styles.buyerName}
                          onClick={() => handleRoute(vessel)}
                        >
                          {vessel?.company?.companyName}
                        </td>
                        <td>{vessel?.order?.commodity}</td>
                        <td>RM-Sales</td>
                        <td>22-02-2022</td>
                        <td>
                          <span
                            className={`${styles.status} ${styles.approved}`}
                          ></span>
                          Approved
                        </td>
                        <td>
                          {' '}
                          <img
                            className="img-fluid"
                            src="/static/preview.svg"
                            alt="P"
                          />{' '}
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
