import React from 'react'
import styles from './index.module.scss'


function Index() {

 
  return (
    <div className='container-fluid mb-4 mt-3'> 
      <div className={`${styles.filter} ml-2 d-flex align-items-center`}>
   
      <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>Letter of Credit </h1>
        </div>
        <div className={styles.search}>
          <div className="input-group">
            <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
              <img src="/static/search.svg" className="img-fluid" alt="Search" />
            </div>
            <input type="text" className={`${styles.formControl} form-control formControl `} placeholder="Search" />
          </div>
         
        </div>
        <a className={styles.filterIcon}>
        <img src="/static/filter.svg" className="img-fluid" alt="Filter" />
      </a>
      <a href="#" className={`${styles.filterList} filterList `}>
        Bhutani Traders
       <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
      </a>
     
      <button className={styles.createBtn}
      style={{ position: "absolute", right: 25 }}>
       Create</button>
      </div>
     
     
      <div className={`${styles.datatable} datatable border-color`}>
        <div className={`${styles.tableFilter} card d-flex justify-content-between`}>
          <h3 className="heading_card">Ramakrishna Traders</h3>
         
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
              <th>ORDER ID</th>
              <th>COMMODITY</th>
              <th>CREATED BY</th>
              <th>STATUS</th>
              <th>LC UPDATE</th>
              <th>AMEND</th>
             
            </tr>
          </thead>
          <tbody>
          <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName}>Iron</td>
              <td>RM-Sales</td>
              <td>
                <span className={`${styles.status} ${styles.review}`}></span>
                Pending
              </td>
              <td colSpan={2}><button className={styles.updateBtn}>Update</button></td>
              
            </tr>
          <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName}>Crude Oil</td>
              <td>RM-Sales</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>Updated on: 02/06/2022</td>
              <td><img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} mr-3 img-fluid`}
                      /></td>
            </tr>
           
            
            <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName}>Steel</td>
              <td>RM-Sales</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>Updated on: 02/06/2022</td>
              <td><img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} mr-3 img-fluid`}
                      /></td>
             
            </tr>
            <tr className="table_row">
              <td>124621</td>
              <td className={styles.buyerName}>Brent Oil</td>
              <td>RM-Sales</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>Updated on: 02/06/2022</td>
              <td><img
                      src="/static/mode_edit.svg"
                      className={`${styles.edit_image} mr-3 img-fluid`}
                      /></td>
            
            </tr>
           
           
          </tbody>
        </table>
        </div>
        </div>
      </div>
    </div>
)
}
export default Index
