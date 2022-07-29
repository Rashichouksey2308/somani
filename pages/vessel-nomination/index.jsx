import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllVessel, GetVessel } from '../../src/redux/vessel/action'
import { GetOrders } from '../../src/redux/registerBuyer/action'
import Filter from '../../src/components/Filter'

function Index() {
  const dispatch = useDispatch()
  const { allVessel, Vessel} = useSelector(state => state.vessel)
  console.log(allVessel,Vessel, 'allVessel')

  useEffect(() => {
    dispatch(GetAllVessel())
  }, [])

  const handleRoute = (vessel) => {
    sessionStorage.setItem('VesselCompany', vessel.order._id)
    sessionStorage.setItem('VesselId', vessel._id)
    dispatch(GetVessel(`?vesselId=${vessel._id}`))
    setTimeout(() => {
      Router.push('/vessel-nomination/id')
    }, 500);


  }

  return (
    <div className="container-fluid mb-4 mt-3">
      <div className={`${styles.filter} ml-2 d-flex align-items-center`}>
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid mr-2`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>Vessel Nomination </h1>
        </div>
        <div className={styles.search}>
          <div className="input-group">
            <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
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
        <Filter/>
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

      <div className={`${styles.datatable} datatable border-color`}>
        <div
          className={`${styles.tableFilter} card d-flex justify-content-between`}
        >
          <h3 className="heading_card">Vessel Nomination</h3>
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
                      src="./static/icons8-sort-24.png "
                      alt="Sort icon"
                    />
                  </th>
                  <th>BUYER NAME</th>
                  <th>CREATED BY</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {allVessel && allVessel?.data?.map((vessel, index) => (
                  <tr key={index} className="table_row">
                    <td>{vessel.order?._id}</td>
                    <td
                      className={styles.buyerName}
                      onClick={() => handleRoute(vessel)}
                    >
                      {vessel.company.companyName}
                    </td>
                    <td>RM-Sales</td>
                    <td>
                      <span
                        className={`${styles.status} ${styles.review}`}
                      ></span>
                      Pending
                    </td>
                  </tr>))}


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
