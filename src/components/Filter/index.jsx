import React from 'react';
import styles from './index.module.scss';

export default function index({isSupplier}) {
  return (
    <div className={`${styles.dropdown} filter dropdown`}>
      <a
        className={`${styles.filterIcon}`}
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src="/static/filter.svg" className="img-fluid" alt="Filter" />
      </a>
      <div className={`${styles.dropdown_menu} dropdown_menu dropdown-menu`} aria-labelledby="dropdownMenu2">
        <div className={`${styles.dropdown_header} dropdown_header dropdown-header d-flex align-items-center`}>
          <img src='/static/filter_alt.svg' className={`${styles.filter_icon} img-fluid`} alt='Filter Small' />
          <h3 className={styles.heading}>Filter</h3>
          <img src='/static/close-2.svg' className={`${styles.close} img-fluid ml-auto`} alt='Close' />
        </div>
        <div className={`${styles.filter_list} dropdown-item`} href="#">
          <input type="checkbox" id="orderId" name="orderId" value="Order ID" />{' '}
          {!isSupplier ? <label htmlFor="orderId">Order ID</label> : <label htmlFor="orderId">Supplier Name</label>}
        </div>
        <div className={`${styles.filter_list} dropdown-item`} href="#">
          <input type="checkbox" id="commodity" name="commodity" value="Commodity" />{' '}
          {!isSupplier ? <label htmlFor="commodity">Commodity</label> : <label htmlFor="orderId">Onboarding Date</label>}
        </div>
        <div className={`${styles.filter_list} dropdown-item`} href="#">
          <input type="checkbox" id="status" name="status" value="Status" />
          {!isSupplier ? <label htmlFor="status">Status</label> : <label htmlFor="orderId">Country</label>}
        </div>
        <div className={`${styles.filter_list} dropdown-item`} href="#">
          <input type="checkbox" id="createdBy" name="createdBy" value="Created by" />{' '}
          {!isSupplier ? <label htmlFor="createdBy">Created by</label> : <label htmlFor="orderId">Status</label>}
        </div>
        <button className={`${styles.btn} btn`} type="button">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
