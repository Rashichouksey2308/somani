import React from 'react'
import styles from './index.module.scss'
import TableMain from '../../src/components/TableMain'
import Router from 'next/router'
import Filter from '../../src/components/Filter'

function Index() {
  const changeRoute = () => {
    Router.push('/insurance/id')
  }
  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
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
                className={`${styles.formControl} form-control formControl `}
                placeholder="Search"
              />
            </div>
          </div>
          <Filter/>
          {/* <a href="#" className={`${styles.filterList} filterList`}>
              Ramesh Shetty
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a>
            
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
            </a>  */}
        </div>

        <div
          className={`${styles.statusBox} statusBox  d-flex align-items-center justify-content-between`}
        >
          <div className={`${styles.all} ${styles.boxInner}`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={styles.iconBox}>
                <img
                  src="/static/Leads.svg"
                  className="img-fluid"
                  alt="All Leads"
                />
              </div>
              <h3>
                <span>ALL</span>
                3,200
              </h3>
            </div>
          </div>
          <div className={`${styles.approved} ${styles.boxInner}`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={styles.iconBox}>
                <img
                  src="/static/check.svg"
                  className="img-fluid"
                  alt="Check"
                />
              </div>
              <h3>
                <span>ACTIVE</span>
                780
              </h3>
            </div>
          </div>
          <div className={`${styles.rejected} ${styles.boxInner}`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={styles.iconBox}>
                <img
                  src="/static/access-time.svg"
                  className="img-fluid"
                  alt="Access Time"
                />
              </div>
              <h3>
                <span>EXPIRED</span>
                800
              </h3>
            </div>
          </div>
          <div className={`${styles.saved} ${styles.boxInner}`}>
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={styles.iconBox}>
                <img
                  src="/static/bookmark.svg"
                  className="img-fluid"
                  alt="Close"
                />
              </div>
              <h3>
                <span>SAVED</span>
                14
              </h3>
            </div>
          </div>
        </div>

        <TableMain
          tableName="List of Insurance"
          isVesselHeader={false}
          dateHeading="ETD"
          isStatus={true}
          handleRoute={changeRoute}
        />
      </div>
    </div>
  )
}
export default Index
