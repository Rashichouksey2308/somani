<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.datatable} datatable card `}>
          <div className={`${styles.tableFilter} d-flex justify-content-between`}>
            <h5 className="heading_card">Order Summary - Last 6 Orders</h5>
            <div className={`${styles.pageList} d-flex align-items-center`}>
              <img src="/static/accordion_close_black.svg" alt="close" className="img-fluid" />
=======
import React from 'react'
import styles from './index.module.scss'

function Index () {
  return (
    <div className='container-fluid p-0 border-0'>
      <div className={styles.container_inner}>
        <div className={`${styles.datatable} datatable card `}>
          <div className={`${styles.tableFilter} d-flex justify-content-between`}>
            <h5 className='heading_card'>Order Summary - Last 6 Orders</h5>
            <div className={`${styles.pageList} d-flex align-items-center`}>
              <img src='/static/accordion_close_black.svg' alt='close' className='img-fluid' />
>>>>>>> Stashed changes
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
<<<<<<< Updated upstream
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="table_row">
=======
              <table className={`${styles.table} table`} cellPadding='0' cellSpacing='0' border='0'>
                <thead>
                  <tr className='table_row'>
>>>>>>> Stashed changes
                    <th>SUPPLIER NAME</th>
                    <th>ORDER ID</th>
                    <th>ORDER DATE</th>
                    <th>ORDER VALUE</th>
                    <th>COMMODITY</th>
                    <th>STATUS</th>
                    <th>DAYS DUE</th>
                  </tr>
                </thead>
                <tbody>
<<<<<<< Updated upstream
                  <tr className="table_row">
=======
                  <tr className='table_row'>
>>>>>>> Stashed changes
                    <td className={`d-flex justify-content-start align-items-center`}>
                      <div className={`${styles.icon} `}>
                        <span className={`d-flex justify-content-center align-items-center`}>ET</span>
                      </div>

                      <span className={` ${styles.name} ml-4`}>Emerging Traders</span>
                    </td>
                    <td>2765470888</td>
                    <td>22-02-2022</td>
                    <td>1,900.00</td>
                    <td>Iron</td>
                    <td>
                      <span className={`${styles.status} ${styles.rejected}`} />
                      In Process
                    </td>
                    <td> 12</td>
                  </tr>
<<<<<<< Updated upstream
                  <tr className="table_row">
=======
                  <tr className='table_row'>
>>>>>>> Stashed changes
                    <td className={`d-flex justify-content-start align-items-center`}>
                      <div className={`${styles.icon} `}>
                        <span className={`d-flex justify-content-center align-items-center`}>ET</span>
                      </div>

                      <span className={` ${styles.name} ml-4 `}>Emerging Traders</span>
                    </td>
                    <td>2765470888</td>
                    <td>22-02-2022</td>
                    <td>1,900.00</td>
                    <td>Iron</td>
                    <td>
                      <span className={`${styles.status} ${styles.rejected}`} />
                      In Process
                    </td>
                    <td> 12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
  );
}

export default Index;
=======
  )
}

export default Index
>>>>>>> Stashed changes
