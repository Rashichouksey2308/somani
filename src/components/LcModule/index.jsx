/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { GetLcModule } from 'redux/lcModule/action'
import Filter from '../Filter'
import _get from 'lodash/get'
import { setPageName,setDynamicName,setDynamicOrder } from '../../redux/userData/action'
import moment from 'moment'

function Index() {

  const [currentPage, setCurrentPage] = useState(0)

  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()

  const { lcModule } = useSelector((state) => state.lc)

  console.log(lcModule?.data, 'THIS IS LC MOD')

  useEffect(() => {
    let id = sessionStorage.getItem('lcCompanyId')
    dispatch(GetLcModule(`?company=${id}&page=${currentPage}&limit=7`))
    
   
  }, [dispatch, currentPage])


  const handleRoute = (lc) => {
    console.log(lc,"lc-module")
    if(!lc.firstTimeUpdate){
    dispatch(GetLcModule(`?lcModuleId=${lc.order.lc}`))
      sessionStorage.setItem('lcOrder', lc.order.lc)
      Router.push('/letter-credit/lc-create')
    }
  
    else{
       sessionStorage.setItem('lcOrder', lc.order.lc)
       Router.push('/letter-table/letter-amend/id')
    }
  
  }
  const handleLcAmmendRoute = (lc) => {
    dispatch(GetLcModule(`?lcModuleId=${lc.order.lc}`))
    sessionStorage.setItem('lcAmmend', lc.order.lc)
    Router.push('/lc-module/lc-application')
  }

  const handleAmmendRoute = (lc) => {
    dispatch(GetLcModule(`?lcModuleId=${lc.order.lc}`))
    sessionStorage.setItem('lcAmmend', lc.order.lc)
    Router.push('/letter-credit/id')
  }

  const [sorting, setSorting] = useState(1)

  const handleSort = () => {
    let id = sessionStorage.getItem('lcCompanyId')
    if(sorting == -1){
    dispatch(GetLcModule(`?company=${id}&page=${currentPage}&limit=${7}&createdAt=${sorting}`))
    setSorting(1)
    }else if(sorting == 1){
      
      dispatch(GetLcModule(`?company=${id}&page=${currentPage}&limit=${7}&createdAt=${sorting}`))
      setSorting(-1)
    }
  }

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/letter-table')}
            />
            <h1 className={styles.heading}>Letter of Credit </h1>
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
                type="text"
                className={`${styles.formControl} border text_area form-control formControl `}
                placeholder="Search"
              />
            </div>
          </div>
          <Filter />
          {/* <a href="#" className={`${styles.filterList} filterList `}>
            Bhutani Traders
          <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
          </a>  */}

          <button className={styles.createBtn}
          onClick={()=>{Router.push("/lc-module/lc-application")}}
          style={{ position: "absolute", right: 25 }}>
          Create</button>
        </div>

        <div className={`${styles.datatable} border card datatable`}>
          <div
            className={`${styles.tableFilter} align-items-center d-flex justify-content-between`}
          >
            <h3 className="heading_card">
              {_get(lcModule, 'data[0].company.companyName', '')?.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())}
            </h3>
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
                    if (
                      currentPage + 1 <
                      Math.ceil(lcModule?.totalCount / 10)
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
                    <th>COMMODITY</th>
                    <th>CREATED BY</th>
                    <th>STATUS</th>
                    <th>LC UPDATE</th>
                    <th>AMEND</th>
                  </tr>
                </thead>
                <tbody>
                  {lcModule &&
                    lcModule?.data?.map((lc, index) => (
                      <tr key={index} className="table_row">
                        <td>{lc?.order?.orderId}</td>
                        <td
                          className={styles.buyerName}
                          onClick={() => {
                            handleRoute(lc)
                          }}
                        >
                          {lc?.order?.commodity}
                        </td>
                        <td>RM-Sales</td>

                        <td>
                          <span
                            className={`${styles.status} ${styles.review}`}
                          ></span>
                          Pending
                        </td>
                        {!lc.firstTimeUpdate ? (
                          <td colSpan={2}>
                            {' '}
                            <button
                              className={styles.updateBtn}
                              onClick={() => handleLcAmmendRoute(lc)}
                            >
                              Update
                            </button>
                          </td>
                        ) : (
                          <>
                            <td>Updated on: {moment(lc?.updatedAt).format("DD-MM-YYYY")}</td>
                            <td>
                              <img
                                src="/static/mode_edit.svg"
                                className={`${styles.edit_image} mr-3 img-fluid`}
                                onClick={() => handleAmmendRoute(lc)}
                              />
                            </td>
                          </>
                        )}
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
