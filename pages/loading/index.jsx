<<<<<<< Updated upstream
import React, { useEffect } from 'react';
import styles from './index.module.scss';
import TableMain from '../../src/components/TableMain';
import Filter from '../../src/components/Filter';
import { useDispatch } from 'react-redux';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';

function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageName('loading'));
    dispatch(setDynamicName(null));
  });
  return (
    <div className="container-fluid p-0 border-0">
=======
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import TableMain from '../../src/components/TableMain'
import Filter from '../../src/components/Filter'
import { useDispatch } from 'react-redux'
import { setDynamicName, setPageName } from '../../src/redux/userData/action'

function Index () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('loading'))
    dispatch(setDynamicName(null))
  })
  return (
    <div className='container-fluid p-0 border-0'>
>>>>>>> Stashed changes
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
<<<<<<< Updated upstream
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
=======
              src='/static/keyboard_arrow_right-3.svg'
              alt='ArrowRight'
>>>>>>> Stashed changes
            />
            <h1 className={styles.heading}>Loading, Transit &amp; Unloading </h1>
          </div>
          <div className={styles.search}>
<<<<<<< Updated upstream
            <div className="input-group">
              <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                <img src="/static/search.svg" className="img-fluid" alt="Search" />
              </div>
              <input
                type="text"
                className={`${styles.formControl} text_area border form-control formControl `}
                placeholder="Search"
=======
            <div className='input-group'>
              <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                <img src='/static/search.svg' className='img-fluid' alt='Search' />
              </div>
              <input
                type='text'
                className={`${styles.formControl} text_area border form-control formControl `}
                placeholder='Search'
>>>>>>> Stashed changes
              />
            </div>
          </div>
          <Filter />
          {/* <a href="#" className={`${styles.filterList} filterList `}>
        Bhutani Traders
        <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
      </a>
       */}
        </div>

        <div className={`${styles.statusBox} statusBox  d-flex align-items-center justify-content-between`}>
          <div className={`${styles.all} ${styles.boxInner} all border_color`}>
<<<<<<< Updated upstream
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img src="/static/leads-icon.svg" className="img-fluid" alt="All Leads" />
=======
            <div className='d-lg-flex align-items-center d-inline-block'>
              <div className={`${styles.iconBox} iconBox`}>
                <img src='/static/leads-icon.svg' className='img-fluid' alt='All Leads' />
>>>>>>> Stashed changes
              </div>
              <h3>
                <span>ALL</span>
                3,200
              </h3>
            </div>
          </div>
          <div className={`${styles.approved} ${styles.boxInner} approved border_color`}>
<<<<<<< Updated upstream
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img src="/static/check.svg" className="img-fluid" alt="Check" />
=======
            <div className='d-lg-flex align-items-center d-inline-block'>
              <div className={`${styles.iconBox} iconBox`}>
                <img src='/static/check.svg' className='img-fluid' alt='Check' />
>>>>>>> Stashed changes
              </div>
              <h3>
                <span>TOTAL INSPECTION</span>
                780
              </h3>
            </div>
          </div>
          <div className={`${styles.review} ${styles.boxInner} review border_color`}>
<<<<<<< Updated upstream
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img src="/static/access-time.svg" className="img-fluid" alt="Access Time" />
=======
            <div className='d-lg-flex align-items-center d-inline-block'>
              <div className={`${styles.iconBox} iconBox`}>
                <img src='/static/access-time.svg' className='img-fluid' alt='Access Time' />
>>>>>>> Stashed changes
              </div>
              <h3>
                <span>BL GENERATION</span>
                800
              </h3>
            </div>
          </div>
          <div className={`${styles.saved} ${styles.boxInner} saved border_color`}>
<<<<<<< Updated upstream
            <div className="d-lg-flex align-items-center d-inline-block">
              <div className={`${styles.iconBox} iconBox`}>
                <img src="/static/bookmark.svg" className="img-fluid" alt="Close" />
=======
            <div className='d-lg-flex align-items-center d-inline-block'>
              <div className={`${styles.iconBox} iconBox`}>
                <img src='/static/bookmark.svg' className='img-fluid' alt='Close' />
>>>>>>> Stashed changes
              </div>
              <h3>
                <span>SAVED</span>
                14
              </h3>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <TableMain tableName="Transit Details" isVesselHeader dateHeading="DATE" isStatus />
      </div>
    </div>
  );
}

export default Index;
=======
        <TableMain tableName='Transit Details' isVesselHeader dateHeading='DATE' isStatus />
      </div>
    </div>
  )
}

export default Index
>>>>>>> Stashed changes
