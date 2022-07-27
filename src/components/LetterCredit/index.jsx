/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetLcModule } from 'redux/lcModule/action'


function Index() {

  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(0);

  const {lcModule} = useSelector((state)=>state.lc)
  

  useEffect(() => {
   dispatch(GetLcModule(`?page=${currentPage}&limit=7`))
  }, [currentPage, dispatch])

  const handleRoute = (lc) => {
    dispatch(GetLcModule(`?company=${lc.company._id}`))
    sessionStorage.setItem('lcId', lc.company.id)
    Router.push('/lc-module')
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
          <h1 className={styles.heading}>Letter of Credit </h1>
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
        <a className={styles.filterIcon}>
          <img src="/static/filter.svg" className="img-fluid" alt="Filter" />
        </a>
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
          <h3 className="heading_card">Letter of Credit</h3>
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
             {lcModule && lcModule?.data?.map((lc, index) => ( <tr key={index} className="table_row">
                  <td>{lc.order.orderId}</td>
                  <td
                    className={styles.buyerName}
                    onClick={() => handleRoute(lc)}
                  >
                    {lc.company.companyName}
                  </td>
                  <td>RM-Sales</td>
                  <td>
                    <span
                      className={`${styles.status} ${styles.review}`}
                    ></span>
                    Pending
                  </td>
                </tr>))}

                {/* <tr className="table_row">
                  <td>124621</td>
                  <td
                    className={styles.buyerName}
                    onClick={() => Router.push('/lc-module')}
                  >
                    Ramakrishna Traders
                  </td>
                  <td>RM-Sales</td>
                  <td>
                    <span
                      className={`${styles.status} ${styles.approved}`}
                    ></span>
                    Approved
                  </td>
                </tr>
                <tr className="table_row">
                  <td>124621</td>
                  <td
                    className={styles.buyerName}
                    onClick={() => Router.push('/lc-module')}
                  >
                    Ramakrishna Traders
                  </td>
                  <td>RM-Sales</td>
                  <td>
                    <span
                      className={`${styles.status} ${styles.approved}`}
                    ></span>
                    Approved
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
