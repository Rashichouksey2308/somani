/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule } from 'redux/lcModule/action'
import Filter from '../Filter'
import {
  setPageName,
  setDynamicName,
  setDynamicOrder,
} from '../../redux/userData/action'
import { SearchLeads } from 'redux/buyerProfile/action'

function Index() {
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(0)

  const [serachterm, setSearchTerm] = useState('')

  const { searchedLeads } = useSelector((state) => state.order)

  const { lcModule } = useSelector((state) => state.lc)

  useEffect(() => {
    dispatch(GetLcModule(`?page=${currentPage}&limit=7`))
  }, [currentPage, dispatch])

  const handleRoute = (lc) => {
    sessionStorage.setItem('lcCompanyId', lc.company._id)
    dispatch(GetLcModule(`?company=${lc.company._id}`))
    dispatch(setDynamicName(lc?.company?.companyName))

    Router.push('/lc-module')
  }
  useEffect(() => {
    dispatch(setPageName('lc'))
    dispatch(setDynamicName(null))
    dispatch(setDynamicOrder(null))
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
    dispatch(GetLcModule(`?company=${id}`))
  }

  const [sorting, setSorting] = useState(1)

  const handleSort = () => {
    if (sorting == -1) {
      dispatch(
        GetLcModule(`?page=${currentPage}&limit=${7}&createdAt=${sorting}`),
      )
      setSorting(1)
    } else if (sorting == 1) {
      dispatch(
        GetLcModule(`?page=${currentPage}&limit=${7}&createdAt=${sorting}`),
      )
      setSorting(-1)
    }
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
        </a> */}

          <button
            className={styles.createBtn}
            style={{ position: 'absolute', right: 25 }}
            onClick={() => {
              Router.push('/letter-table/letter-application')
            }}
          >
            Create
          </button>
        </div>

        <div className={`${styles.datatable} border card datatable`}>
          <div
            className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}
          >
            <h3 className="heading_card">Letter of Credit</h3>
            <div
              className={`${styles.pageList} d-flex justify-content-end align-items-center`}
            >
              <span>
                Showing Page {currentPage + 1} out of{' '}
                {Math.ceil(lcModule?.totalCount / 10)}
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
                  if (currentPage + 1 < Math.ceil(lcModule?.totalCount / 10)) {
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
                        src="./static/icons8-sort-24.svg "
                        alt="Sort icon"
                        onClick={() => handleSort()}
                      />
                    </th>
                    <th>BUYER NAME</th>
                    <th>CREATED BY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {lcModule &&
                    lcModule?.data?.map((lc, index) => (
                      <tr key={index} className="table_row">
                        <td>{lc?.order?.orderId}</td>
                        <td
                          className={styles.buyerName}
                          onClick={() => handleRoute(lc)}
                        >
                          {lc?.company?.companyName}
                        </td>
                        <td>RM-Sales</td>
                        <td>
                          <span
                            className={`${styles.status} ${styles.review}`}
                          ></span>
                          Pending
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
