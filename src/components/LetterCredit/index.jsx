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
    sessionStorage.setItem('lcCompanyId', lc.company._id)
    dispatch(GetLcModule(`?company=${lc.company._id}`))
    
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
        <div className={`${styles.dropdown} dropdown`}>
          <a className={`${styles.filterIcon}`} id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="/static/filter.svg" className="img-fluid" alt="Filter" />
          </a>
          <div className={`${styles.dropdown_menu} dropdown-menu`} aria-labelledby="dropdownMenu2">
            <div className={`${styles.dropdown_header} dropdown-header d-flex align-items-center`}>
              <img src="/static/filter_alt.svg" className={`${styles.filter_icon} img-fluid`} alt="Filter Small" />
              <h3>Filter</h3>
              <img src="/static/close-2.svg" className={`${styles.close} img-fluid ml-auto`} alt="Close" />
            </div>
            <div className={`${styles.filter_list} dropdown-item`} href="#"><input type="checkbox" id="orderId" name="orderId" value="Order ID"/> <label htmlFor="orderId">Order ID</label></div>
            <div className={`${styles.filter_list} dropdown-item`} href="#"><input type="checkbox" id="commodity" name="commodity" value="Commodity"/> <label htmlFor="commodity">Commodity</label></div>
            <div className={`${styles.filter_list} dropdown-item`} href="#"><input type="checkbox" id="status" name="status" value="Status"/> <label htmlFor="status">Status</label></div>
            <div className={`${styles.filter_list} dropdown-item`} href="#"><input type="checkbox" id="createdBy" name="createdBy" value="Created by"/> <label htmlFor="createdBy">Created by</label></div>
            <button className={`${styles.btn} btn`} type='button'>Apply Filter</button>
          </div>
        </div>
        
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
        <div className={`${styles.tableFilter} d-flex justify-content-between`}>
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
