import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

function Index() {

 
  return (
    <div className='container-fluid p-0 border-0'> 
    <div className={styles.container_inner}>
      <div className={`${styles.filter} d-flex align-items-center justify-content-between`}>
        <div className={styles.head_header}>
            <img
              className={`${styles.arrow} img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>Track Shipments </h1>
          </div>
          <div className={styles.search}>
            <div className="input-group">
              <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                <img src="/static/search.svg" className="img-fluid" alt="Search" />
              </div>
              <input type="text" className={`${styles.formControl} form-control formControl `} placeholder="Search" />
            </div>
          
          </div>
         
      
      </div>
      <div className={`${styles.datatable} datatable card `}>
        <div className={`${styles.tableFilter} d-flex justify-content-between`}>
          <h5 className="heading_card">200 Results found</h5>
          <div
            className={`${styles.pageList} d-flex align-items-center`}
          >
     
            <div className={`${styles.showPage}`}>Showing Page 1 out of 10</div>
            <a href="#" className={`${styles.arrow} ${styles.leftArrow} arrow`}>
              {' '}
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className="img-fluid"
              />
            </a>
            <a href="#" className={`${styles.arrow} ${styles.rightArrow} arrow`}>
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
          className={`${styles.table} table` }
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <thead>
          <tr className="table_row">
              <th>SR. NO. <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon"/> </th>
              <th>VESSEL NAME</th>
              <th>IMO NUMBER</th>
              <th>CONTAINER NUMBER</th>
              <th>CONTAINER SEAL NUMBER</th>
              <th width="20%" >ACTION</th>
            </tr>
          </thead>
          <tbody>
          <tr className="table_row">
              <td><strong>01</strong></td>
              <td>ABCZ</td>
              <td>465SD465D</td>
              <td>465SD465D</td>
              <td>465SD465D</td>
              <td>
                <button className={`${styles.trackBtn}`}>Track</button>
              </td>
            
            </tr>
            <tr className="table_row">
              <td><strong>02</strong></td>
              <td>ABCZ</td>
              <td>465SD465D</td>
              <td>465SD465D</td>
              <td>465SD465D</td>
              <td>
                <button className={`${styles.trackBtn}`}>Track</button>
              </td>
            
            </tr>
            <tr className="table_row">
              <td><strong>03</strong></td>
              <td>ABCZ</td>
              <td>465SD465D</td>
              <td>465SD465D</td>
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
    </div>
)
}
export default Index
