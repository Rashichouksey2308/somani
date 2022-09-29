import React,{useEffect} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import DownloadBar from '../../src/components/DownloadBar'
import Filter from '../../src/components/Filter'
import { setPageName,setDynamicName ,setDynamicOrder} from '../../src/redux/userData/action'
import { useDispatch, useSelector } from 'react-redux'
function Index() {
   const dispatch = useDispatch()
  useEffect(() => {
if(window){
    sessionStorage.setItem('loadedPage',"Loading, Transit & Unloadinge")
    sessionStorage.setItem('loadedSubPage',`Track Shipments`)
    sessionStorage.setItem('openList',3)
    }
},[])
  useEffect(() => {
    dispatch(setPageName('track'))
 
  },[])
  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={`${styles.head_header} align-items-center`}>
            {/* <img
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            /> */}
            <h1 className={styles.heading}>Track Shipments</h1>
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
                className={`${styles.formControl} border form-control formControl `}
                placeholder="Search"
              />
            </div>
          </div>
          <Filter />
          {/* <a href="#" className={`${styles.filterList} filterList `}>
            Bhutani Traders
          <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
          </a>  */}

          {/* <button className={styles.createBtn}
          onClick={()=>{Router.push("/lc-module/lc-application")}}
          style={{ position: "absolute", right: 25 }}>
          Create</button> */}
        </div>
        <div className={`${styles.datatable} border datatable card`}>
          <div
            className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}
          >
            <h5 className="heading_card">Shipments</h5>
            <div className={`${styles.pageList} d-flex align-items-center`}>
              <div className={`${styles.showPage}`}>
                Showing Page 1 out of 1
              </div>
              <a
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
                    <th>SR. NO.</th>
                    <th>ORDER ID</th>
                    <th>BUYER NAME</th>
                    <th>IMO NUMBER</th>
                    <th>VESSEL NAME</th>
                    <th>CONTAINER NUMBER</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td>
                      <strong>01</strong>
                    </td>
                    <td>12323</td>
                    <td>Ramakrishnan Traders</td>
                    <td>465SD465D</td>
                    <td>ABCZ</td>
                    <td>465SD465D</td>
                    <td>
                      <button className={`${styles.trackBtn}`}>Track</button>
                    </td>
                  </tr>
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <DownloadBar downLoadButtonName="Download List" />
    </div>
  )
}
export default Index
