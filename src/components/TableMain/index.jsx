/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { GettingAllInsurance } from 'redux/insurance/action'
import { Router } from 'next/router'
import _get from 'lodash/get'
import moment from 'moment/moment'

function Index({
  tableName,
  pageType,
  isStatus,
  dateHeading,
  handleRoute,

  handleEditRoute,
}) {
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(0)

  let d = new Date()

  const { insuranceResponse } = useSelector((state) => state.insurance)

  // console.log(insuranceResponse, 'INSURANCE RESPONSE')

  useEffect(() => {
    dispatch(GettingAllInsurance(`?page=${currentPage}&limit=7`))
  }, [dispatch, currentPage])

  const [sorting, setSorting] = useState(1)

  const handleSort = () => {
    let id = sessionStorage.getItem('lcCompanyId')
    if(sorting == -1){
    dispatch(GettingAllInsurance(`?page=${currentPage}&limit=7&createdAt=${sorting}`))
    setSorting(1)
    }else if(sorting == 1){
      
      dispatch(GettingAllInsurance(`?page=${currentPage}&limit=7&createdAt=${sorting}`))
      setSorting(-1)
    }
  }

  return (
    <div className={`${styles.datatable} border datatable card`}>
      <div
        className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}
      >
        <h3 className="heading_card">{tableName}</h3>
        <div
          className={`${styles.pageList} d-flex justify-content-end align-items-center`}
        >
          <span>
            Showing Page {currentPage + 1} out of{' '}
            {Math.ceil(insuranceResponse?.totalCount / 7)}
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
                Math.ceil(insuranceResponse?.totalCount / 7)
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
                  ORDER ID{' '}
                  <img
                    className={`mb-1`}
                    src="/static/icons8-sort-24.svg"
                    alt="Sort icon"
                    onClick={()=>handleSort()}
                  />{' '}
                </th>
                <th>
                  BUYER NAME{' '}
                  <img
                    className={`mb-1`}
                    src="/static/icons8-sort-24.svg"
                    alt="Sort icon"
                  />{' '}
                </th>
                <th>COMMODITY</th>
                <th>{pageType}</th>
                {/* {isVesselHeader ? (
                  <th>VESSEL NAME</th>
                ) : (
                  <th>INSURANCE TYPE</th>
                )} */}
                <th>{dateHeading}</th>

                {isStatus ? (
                  <th>
                    STATUS{' '}
                    <img
                      className={`mb-1`}
                      src="/static/icons8-sort-24.svg"
                      alt="Sort icon"
                    />
                  </th>
                ) : (
                  <th>PAYMENT STATUS</th>
                )}
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {insuranceResponse &&
                insuranceResponse?.data?.map((insured, index) => (
                  <tr key={index} className="table_row">
                    <td>{insured?.order?.orderId}</td>
                    <td
                      className={styles.buyerName}
                      onClick={() => {
                        handleRoute(insured)
                      }}
                    >
                      {insured?.company?.companyName}
                    </td>
                    <td>{insured?.order?.commodity}</td>
                    <td>{insured?.quotationRequest?.insuranceType}</td>
                    <td>
                      {
                        moment(insured?.quotationRequest?.expectedTimeOfDispatch).format("DD-MM-YYYY")
                        // insured?.quotationRequest?.expectedTimeOfDispatch?.split(
                        //   'T',
                        // )[0]
                      }
                    </td>
                    {insured && (moment(insured?.marineInsurance?.insuranceTo).toDate() < d || moment(insured?.storageInsurance?.insuranceTo).toDate() < d) ? <td>
                      <span
                        className={`${styles.status} ${styles.rejected}`}
                      ></span>{' '}
                      Expired
                    </td> :  <td>
                      <span
                        className={`${styles.status} ${styles.approved}`}
                      ></span>{' '}
                      Active
                    </td>}
                    <td>
                      {_get(insured, 'quotationRequest.quotationRequestSubmitted', false) && <span onClick={() => handleEditRoute(insured)}>
                        <img
                          className={`${styles.edit_image} img-fluid mr-3`}
                          src="/static/mode_edit.svg"
                          alt="edit"
                        />
                      </span>}
                    </td>
                  </tr>
                ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Index
