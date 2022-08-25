import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllVessel, GetVessel } from '../../src/redux/vessel/action'
import { GetOrders } from '../../src/redux/registerBuyer/action'
import Filter from '../../src/components/Filter'

function Index() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(0);
  const { allVessel, Vessel } = useSelector((state) => state.vessel)
  console.log(allVessel, Vessel, 'allVessel')
useEffect(() => {
if(window){
    sessionStorage.setItem('loadedPage',"Agreement & Lc Module")
    sessionStorage.setItem('loadedSubPage',`Vessel Nomination`)
    sessionStorage.setItem('openList',2)
    }
},[])
  useEffect(() => {
    dispatch(GetAllVessel(`?page=${currentPage}&limit=7`))
  }, [])

  const handleRoute = (vessel) => {
    sessionStorage.setItem('VesselCompany', vessel.order._id)
    sessionStorage.setItem('VesselId', vessel._id)
    dispatch(GetVessel(`?vesselId=${vessel._id}`))
    setTimeout(() => {
      Router.push('/vessel-nomination/id')
    }, 500)
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
                type="text"
                className={`${styles.formControl} form-control formControl `}
                placeholder="Search"
              />
            </div>
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

        <div className={`${styles.datatable} card datatable border-color`}>
          <div
            className={`${styles.tableFilter} shadow-none align-items-center d-flex justify-content-between border-0 d-flex`}
          >
            <h3 className="heading_card">Vessel Nomination</h3>
            <div
              className={`${styles.pageList} d-flex justify-content-end align-items-center`}
            >
              <span>Showing Page {currentPage + 1}  out of {Math.ceil(allVessel?.totalCount / 7)}</span>
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
                      />
                    </th>
                    <th>BUYER NAME</th>
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
                        <td>{vessel?.order?._id}</td>
                        <td
                          className={styles.buyerName}
                          onClick={() => handleRoute(vessel)}
                        >
                          {vessel?.company?.companyName}
                        </td>
                        <td>RM-Sales</td>
                        <td>22-02-2022</td>
                        <td>
                          <span
                            className={`${styles.status} ${styles.approved}`}
                          ></span>
                          Apporoved
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
