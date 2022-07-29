import React from 'react'
import styles from './index.module.scss'

export default function index() {
  return (
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
  )
}
