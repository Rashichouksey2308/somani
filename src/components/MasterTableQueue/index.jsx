import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import Image from 'next/image';
import _get from 'lodash/get';
import _ from 'lodash';

const index = ({
  tableName,
  header1,
  header2,
  header3,
  header4,
  isHeader,
  header,
  isDate,
  handleRoute,
  selectorData,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  let queueData;

  if (tableName === 'Ports') {
    queueData = _.map(selectorData?.data, (item, index) => {
      return {
        id: index + 1,
        // prevDate: moment(item.Date).format('MMMD'),
        col2: item.Country,
        col1: item.Port_Name,
        col3: item.State,
        date: '11-11-2022',
        status: item.Approved === 'Yes' ? 'Approved' : 'Pending',
        id: item._id
      };
    });
  } else if (tableName === 'Internal Companies') {
    queueData = _.map(selectorData?.data, (item, index) => {
      return {
        id: index + 1,
        // prevDate: moment(item.Date).format('MMMD'),
        col1: item.Company_Name,
        col2: item.Short_Name,
        col3: item.Country,
        status: 'Approved',
        id: item._id
      };
    });
  }

  console.log(queueData, 'QUEUE')

  return (
    <>
      {/*UserTable*/}
      <div className={`${styles.datatable} border datatable card mt-4`}>
        <div className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}>
          <h3 className="heading_card">{tableName}</h3>
          <div className="d-flex align-items-center">
            <div className={`${styles.show_record}`}>Show Records:</div>
            <div className="d-flex align-items-center position-relative ml-2">
              <select
                className={`${styles.select} ${styles.customSelect} text1 accordion_body form-select`}
                onChange={(e) => setPageLimit(e.target.value)}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
            </div>

            <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
              <span>
                {' '}
                Showing Page {currentPage + 1} out of {Math.ceil(selectorData?.totalCount / pageLimit)}
              </span>
              <a
                onClick={() => {
                  if (currentPage === 0) {
                  } else {
                    setCurrentPage((prevState) => prevState - 1);
                  }
                }}
                href="#"
                className={`${styles.arrow} ${styles.leftArrow} arrow`}
              >
                <img src="/static/keyboard_arrow_right-3.svg" alt="arrow left" className="img-fluid" />
              </a>
              <a
                onClick={() => {
                  if (currentPage + 1 < Math.ceil(selectorData?.totalCount / 7)) {
                    setCurrentPage((prevState) => prevState + 1);
                  }
                }}
                href="#"
                className={`${styles.arrow} ${styles.rightArrow} arrow`}
              >
                <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.table_scroll_outer}>
          <div className={styles.table_scroll_inner}>
            <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th className={`${styles.table_heading} table_heading`}>
                    {header1}{' '}
                    <Image
                      width="9px"
                      height="14px"
                      className={`${styles.sort_img}`}
                      src="/static/icons8-sort-24.svg"
                      alt="Sort icon"
                    />
                  </th>

                  <th className={`${styles.table_heading} table_heading`}>
                    {header2}{' '}
                    <Image
                      width="9px"
                      height="14px"
                      className={`${styles.sort_img}`}
                      src="/static/icons8-sort-24.svg"
                      alt="Sort icon"
                    />
                  </th>
                  <th className={`${styles.table_heading} table_heading`}>
                    {header3}{' '}
                    <Image
                      width="9px"
                      height="14px"
                      className={`${styles.sort_img}`}
                      src="/static/icons8-sort-24.svg"
                      alt="Sort icon"
                    />
                  </th>
                  {isHeader ? (
                    <th className={`${styles.table_heading} table_heading`}>
                      {header}{' '}
                      <Image
                        width="9px"
                        height="14px"
                        className={`${styles.sort_img}`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                      />
                    </th>
                  ) : (
                    ''
                  )}
                  <th className={`${styles.table_heading} table_heading`}>
                    {header4}{' '}
                    <Image
                      width="9px"
                      height="14px"
                      className={`${styles.sort_img}`}
                      src="/static/icons8-sort-24.svg"
                      alt="Sort icon"
                    />
                  </th>
                  <th className={`${styles.table_heading} table_heading`}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {queueData &&
                  queueData?.map((supplier, index) => (
                    <tr key={index} className={`${styles.table_row} table_row17`}>
                      <td className={styles.buyerName}>{supplier.col1}</td>
                      <td>{supplier.col2}</td>
                      <td>{supplier.col3}</td>
                      {supplier?.date && <td>{supplier.date}</td>}

                      <td>
                        <img src="/static/active.svg" className="img-fluid" alt="active" />
                        <span className="m-3">{supplier.status}</span>
                      </td>

                      <td>
                        {' '}
                        <div className={`${styles.edit_image} img-fluid`}>
                          <Image
                            onClick={() => {
                              handleRoute(supplier.id);
                            }}
                            height="40px"
                            width="40px"
                            src="/static/mode_edit.svg"
                            alt="Edit"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={`${styles.total_count}`}>
        Total Count: <span>{selectorData?.totalCount}</span>
      </div>
    </>
  );
};

export default index;
