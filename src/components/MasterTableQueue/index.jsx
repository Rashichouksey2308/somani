import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import Image from 'next/image';
import _get from 'lodash/get'



const index = ({ tableName, header1, header2, header3, header4, isHeader, header, isDate, handleRoute, selectorData }) => {

 
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  console.log(selectorData, 'SELECTOR DATA')

  

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
               {selectorData && selectorData?.data?.map((supplier, index) => <tr key={index} className={`${styles.table_row} table_row17`}>
                  <td className={styles.buyerName}>{supplier.Company_Name}</td>
                  <td>{supplier.Short_Name}</td>
                  <td>{supplier.Country}</td>
                  {isDate ? <td>22-02-2022</td> : ''}

                  <td>
                    <img src="/static/active.svg" className="img-fluid" alt="active" />
                    <span className="m-3">Approved</span>
                  </td>

                  <td>
                    {' '}
                    <div className={`${styles.edit_image} img-fluid`}>
                      <Image
                        onClick={() => {
                          handleRoute(supplier._id);
                        }}
                        height="40px"
                        width="40px"
                        src="/static/mode_edit.svg"
                        alt="Edit"
                      />
                    </div>
                  </td>
                </tr>)}
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
