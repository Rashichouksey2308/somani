import React, { useEffect, useState } from 'react';
import styles from '../commodity/index.module.scss';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import Image from 'next/image';
import Router from 'next/router';
import { GetAllGoNoGo } from '../../src/redux/goNoGo/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';

const index = () => {

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const { allGoNoGo } = useSelector((state) => state.Gng);

  useEffect(() => {
    dispatch(GetAllGoNoGo(`?page=${currentPage}&limit=${10}`));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(setPageName('GO-NO-GO'));
    dispatch(setDynamicName(null));
    dispatch(setDynamicOrder(null));
  });

  const statusArr = allGoNoGo?.data?.map((val, index) => {return val.verification.status} )
  console.log(statusArr, 'status')

  const handleRoute = (val) => {
    sessionStorage.setItem('gngMasterId', val._id)
    Router.push('/go-no-go-logic/id')
  }

  const handleChangeRoute = (val) => {
    sessionStorage.setItem('gngMasterId', val._id)
    Router.push('/go-no-go-logic/view')
  }

  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={`${styles.head_header} mr-3 align-items-center`}>
              <img
                className={`${styles.arrow} image_arrow mr-3 img-fluid`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
              <h1 className={styles.heading}>Go No Go Logic</h1>
            </div>
          </div>
          {/*UserTable*/}
          <div className={`${styles.datatable} border datatable card mt-4`}>
            <div className={`${styles.tableFilter} d-flex justify-content-between`}>
              <h3 className="heading_card">Go No Go Logic</h3>
              <div className="d-flex align-items-center">
                <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                  <span>
                    Showing Page {currentPage + 1} out of {Math.ceil(allGoNoGo?.totalCount / 7)}
                  </span>
                  <a
                    onClick={() => {
                      if (currentPage === 0) return;
                      else {
                        setCurrentPage((prevState) => prevState - 1);
                      }
                    }}
                    href="#"
                    className={`${styles.arrow} ${styles.leftArrow} arrow`}
                  >
                    {' '}
                    <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
                  </a>
                  <a
                    onClick={() => {
                      if (currentPage + 1 < Math.ceil(allGoNoGo?.totalCount / 7)) {
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
                      <th width="35%" className={`${styles.table_heading} table_heading`}>
                        VERSION{' '}
                        <Image
                          width="9px"
                          height="14px"
                          className={`${styles.sort_img}`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th className={`${styles.table_heading} table_heading`}>
                        VERSION APPROVAL DATE{' '}
                        <Image
                          width="9px"
                          height="14px"
                          className={`${styles.sort_img}`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th className={`${styles.table_heading} table_heading`}>
                        STATUS{' '}
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
                    {allGoNoGo &&
                      allGoNoGo?.data?.map((val, index) => (
                        <tr key={index} className={`${styles.table_row} table_row17`}>
                          <td
                            className={styles.buyerName}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleChangeRoute(val)}
                          >
                            {val.version}
                          </td>
                          <td>22-02-2022</td>

                          <td>
                            {' '}
                            <img
                              src={`${
                                val.verification.status === 'Active'
                                  ? '/static/active.svg'
                                  : val.verification.status === 'Inactive'
                                  ? '/static/inactive.svg'
                                  : val.verification.status === 'Pending'
                                  ? '/static/pending2.svg'
                                  : '/static/inactive.svg'
                              }`}
                              className="img-fluid"
                              alt="active"
                            />
                            <span className="m-3">{val.verification.status}</span>
                          </td>
                          <td>
                          {(statusArr?.includes('Pending') ? val.verification.status === 'Pending' : val.verification.status === 'Active') && <div className={`${styles.edit_image} img-fluid`}>
                              <Image
                                onClick={() => handleRoute(val)}
                                height="40px"
                                width="40px"
                                src="/static/mode_edit.svg"
                                alt="Edit"
                              />
                            </div>}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
