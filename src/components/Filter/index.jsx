import React from 'react';
import styles from './index.module.scss';

export default function index({ filterItem, handleFilterChange, handleApplyFilter, filterItems }) {
  return (
    <div className={`${styles.dropdown} filter dropdown`}>
      <a
        className={`${styles.filterIcon} cursor-pointer`}
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src="/static/filter.svg" className="img-fluid" alt="Filter" />
      </a>
      <div className={`${styles.dropdown_menu} dropdown_menu dropdown-menu`} aria-labelledby="dropdownMenu2">
        <div className={`${styles.dropdown_header} dropdown_header dropdown-header d-flex align-items-center`}>
          <img src="/static/filter_alt.svg" className={`${styles.filter_icon} img-fluid`} alt="Filter Small" />
          <h3>Filter</h3>
          <img src="/static/close-2.svg" className={`${styles.close} img-fluid ml-auto cursor-pointer`} alt="Close" />
        </div>
        {filterItems?.length && filterItems.map((item) => (
          <div className={`${styles.filter_list} dropdown-item`} href="#">
            <input
              type="checkbox"
              id={item?.id}
              name={item?.id}
              value={filterItem[item?.id]}
              checked={filterItem[item?.id]}
              onChange={(e) => handleFilterChange(e)}
            />{' '}
            <label htmlFor={item?.id}>{item?.name}</label>
          </div>
        ))}
        <button className={`${styles.btn} btn`} type="button" onClick={() => handleApplyFilter()}>
          Apply Filter
        </button>
      </div>
    </div>
  );
}
