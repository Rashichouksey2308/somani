<<<<<<< Updated upstream
import Router from 'next/router';
import React from 'react';
import styles from './index.module.scss';

function Index() {
  const handleRoute = () => {
    Router.push('/agreement');
  };

  return (
    <div className="container-fluid p-0">
=======
import Router from 'next/router'
import React from 'react'
import styles from './index.module.scss'

function Index () {
  const handleRoute = () => {
    Router.push('/agreement')
  }

  return (
    <div className='container-fluid p-0'>
>>>>>>> Stashed changes
      <div className={`${styles.container_inner}`}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} img-fluid mr-2`}
<<<<<<< Updated upstream
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
=======
              src='/static/keyboard_arrow_right-3.svg'
              alt='ArrowRight'
>>>>>>> Stashed changes
            />
            <h1 className={styles.heading}>Ramakrishna Traders </h1>
          </div>
        </div>

        <div className={`${styles.datatable} card datatable border-color`}>
          <div
            className={`${styles.tableFilter} shadow-none align-items-center d-flex justify-content-between border-0 d-flex`}
          >
<<<<<<< Updated upstream
            <h3 className="heading_card">All Orders</h3>
            <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
              <span>Showing Page 1 out of 10</span>
              <a href="#" className={`${styles.arrow} ${styles.leftArrow} arrow`}>
                {' '}
                <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
              </a>
              <a href="#" className={`${styles.arrow} ${styles.rightArrow} arrow`}>
                <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
=======
            <h3 className='heading_card'>All Orders</h3>
            <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
              <span>Showing Page 1 out of 10</span>
              <a href='#' className={`${styles.arrow} ${styles.leftArrow} arrow`}>
                {' '}
                <img src='/static/keyboard_arrow_right-3.svg' alt='arrow right' className='img-fluid' />
              </a>
              <a href='#' className={`${styles.arrow} ${styles.rightArrow} arrow`}>
                <img src='/static/keyboard_arrow_right-3.svg' alt='arrow right' className='img-fluid' />
>>>>>>> Stashed changes
              </a>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
<<<<<<< Updated upstream
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="table_row">
                    <th>
                      ORDER ID <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
=======
              <table className={`${styles.table} table`} cellPadding='0' cellSpacing='0' border='0'>
                <thead>
                  <tr className='table_row'>
                    <th>
                      ORDER ID <img className={`mb-1`} src='/static/icons8-sort-24.svg' alt='Sort icon' />
>>>>>>> Stashed changes
                    </th>
                    <th>COMMODITY</th>
                    <th>CREATED BY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
<<<<<<< Updated upstream
                  <tr className="table_row">
=======
                  <tr className='table_row'>
>>>>>>> Stashed changes
                    <td>12432</td>
                    <td className={styles.buyerName} onClick={() => handleRoute()}>
                      Iron
                    </td>
                    <td>22-02-2022</td>
                    <td>
                      <span className={`${styles.status} ${styles.review}`} />
                      Pending
                    </td>
                  </tr>
<<<<<<< Updated upstream
                  <tr className="table_row">
=======
                  <tr className='table_row'>
>>>>>>> Stashed changes
                    <td>12432</td>
                    <td className={styles.buyerName} onClick={() => handleRoute()}>
                      Crude Oil
                    </td>
                    <td>22-02-2022</td>
                    <td>
                      <span className={`${styles.status} ${styles.review}`} />
                      Pending
                    </td>
                  </tr>
<<<<<<< Updated upstream
                  <tr className="table_row">
=======
                  <tr className='table_row'>
>>>>>>> Stashed changes
                    <td>12432</td>
                    <td className={styles.buyerName} onClick={() => handleRoute()}>
                      Brass
                    </td>
                    <td>22-02-2022</td>
                    <td>
                      <span className={`${styles.status} ${styles.approved}`} />
                      Approved
                    </td>
                  </tr>
<<<<<<< Updated upstream
                  <tr className="table_row">
=======
                  <tr className='table_row'>
>>>>>>> Stashed changes
                    <td>12432</td>
                    <td className={styles.buyerName} onClick={() => handleRoute()}>
                      Steel
                    </td>
                    <td>22-02-2022</td>
                    <td>
                      <span className={`${styles.status} ${styles.review}`} />
                      Pending
                    </td>
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
