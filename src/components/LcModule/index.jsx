/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetLcModule } from 'redux/lcModule/action';
import Filter from '../Filter';
import _get from 'lodash/get';
import { setDynamicName, setDynamicOrder, setPageName } from '../../redux/userData/action';
import moment from 'moment';
import { toast } from 'react-toastify';

function Index() {
  const [currentPage, setCurrentPage] = useState(0);

  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const { lcModule } = useSelector((state) => state.lc);

  useEffect(() => {
    let comingFromChecker = sessionStorage.getItem('comingFromChecker');
    if (!comingFromChecker) {
      let id = sessionStorage.getItem('lcCompanyId');
      dispatch(GetLcModule(`?company=${id}&page=${currentPage}&limit=${7}`));
    }
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(setPageName('Lc'));
    dispatch(setDynamicName(lcModule?.data?.company?.companyName));
    dispatch(
      setDynamicOrder(
        lcModule?.data?.order?.orderId ? lcModule?.data?.order?.orderId : lcModule?.data?.order?.applicationId,
      ),
    );
  }, [lcModule]);

  const handleRoute = (lc) => {
    if (lc.firstTimeUpdate) {
      sessionStorage.setItem('lcPreviewId', lc.order.lc);
      Router.push('/letter-table/letter-amend/id');
    } else {
      dispatch(GetLcModule(`?lcModuleId=${lc.order.lc}`));
      sessionStorage.setItem('lcOrder', lc.order.lc);
      Router.push('/letter-credit/lc-create');
    }
  };
  const handleLcAmmendRoute = (lc) => {
    if (lc.ifFormFilled == false) {
      let toastMessage = 'PLS FILL LC FIRST';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        return;
      }
    }
    dispatch(GetLcModule(`?lcModuleId=${lc.order.lc}`));
    sessionStorage.setItem('lcAmmend', lc.order.lc);
    Router.push('/lc-module/lc-application');
  };

  const handleAmmendRoute = (lc) => {
    dispatch(GetLcModule(`?lcModuleId=${lc.order.lc}`));
    sessionStorage.setItem('lcAmmend', lc.order.lc);
    Router.push('/letter-credit/id');
  };

  const [sorting, setSorting] = useState(1);

  const handleSort = () => {
    let id = sessionStorage.getItem('lcCompanyId');
    if (sorting == -1) {
      dispatch(GetLcModule(`?company=${id}&page=${currentPage}&limit=${7}&createdAt=${sorting}`));
      setSorting(1);
    } else if (sorting == 1) {
      dispatch(GetLcModule(`?company=${id}&page=${currentPage}&limit=${7}&createdAt=${sorting}`));
      setSorting(-1);
    }
  };
  /// firstimeUpdate False -- update
  /// firstimeUpdate False && isPostAmmend FAlse -- amend
  /// firstimeUpdate False && isPostAmmed true -- update
  /// isAmmend disable -- amend

  const defineAction = (lc, index) => {
    if (!lc.firstTimeUpdate || !lc.route || lc.route === 'postUpdated' ) {
      return true;
    } else if (lc.route === 'amend') {
      return false;
    }
  };

  const handleBackButtonFunctionality = () => {
    const comingFromCheckerLcModule = sessionStorage.getItem('comingFromCheckerLcModule');
    if (comingFromCheckerLcModule === "1") {
      Router.push('/checker/letter-of-credit/id');
    } else {
      Router.push('/letter-table');
    }
  }

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => handleBackButtonFunctionality()}
              style={{ cursor: 'pointer' }}
            />
            <h1 className={styles.heading}>Letter of Credit</h1>
          </div>
          <div className={styles.search}>
            <div className="input-group">
              <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                <img src="/static/search.svg" className="img-fluid" alt="Search" />
              </div>
              <input
                type="text"
                className={`${styles.formControl} border text_area form-control formControl `}
                placeholder="Search"
              />
            </div>
          </div>
          <Filter />
          {/* <a href="#" className={`${styles.filterList} filterList `}>
            Bhutani Traders
          <img src="/static/close-b.svg" className="img-fluid" alt="Close" />
          </a>  */}

          {/* <button
            className={styles.createBtn}
            onClick={() => {
              Router.push('/lc-module/lc-application');
            }}
            style={{ position: 'absolute', right: 25 }}
          >
            Create
          </button> */}
        </div>

        <div className={`${styles.datatable} border card datatable`}>
          <div className={`${styles.tableFilter} align-items-center d-flex justify-content-between`}>
            <h3 className="heading_card">
              {_get(lcModule, 'data[0].company.companyName', '')?.replace(
                /(^\w|\s\w)(\S*)/g,
                (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase(),
              )}
            </h3>
            <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
              <span>
                Showing Page {currentPage + 1} out of {Math.ceil(lcModule?.totalCount / 7)}
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
                  if (currentPage + 1 < Math.ceil(lcModule?.totalCount / 7)) {
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
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="table_row">
                    <th>
                      ORDER ID{' '}
                      <img
                        className={`mb-1`}
                        src="/static/icons8-sort-24.svg"
                        alt="Sort icon"
                        onClick={() => handleSort()}
                      />{' '}
                    </th>
                    <th>COMMODITY</th>
                    <th>CREATED BY</th>
                    <th>STATUS</th>
                    <th>LC UPDATE</th>
                    <th>AMEND</th>
                  </tr>
                </thead>
                <tbody>
                  {lcModule &&
                    lcModule?.data?.map((lc, index) => (
                      <tr key={index} className="table_row">
                        <td>{lc?.order?.orderId}</td>
                        <td
                          className={styles.buyerName}
                          onClick={() => {
                            handleRoute(lc);
                          }}
                        >
                          {lc?.order?.commodity}
                        </td>
                        <td>RM-Sales</td>

                        <td>
                          <span className={`${styles.status} ${styles.review}`}></span>
                          Pending
                        </td>
                        
                        {lc.route === 'amend' || lc.route === 'PostUpdated'  ? (
                          <>
                            <td>Updated on: {moment(lc?.updatedAt).format('DD-MM-YYYY')}</td>
                            <td>
                              {lc.route !== 'PostUpdated' && (
                                <img
                                  src="/static/mode_edit.svg"
                                  className={`${styles.edit_image} mr-3 img-fluid`}
                                  onClick={() =>  handleAmmendRoute(lc)  }
                                />
                              )}
                            </td>
                          </>
                        ) : (
                          <td colSpan={2}>
                            {' '}
                            <button className={styles.updateBtn} onClick={() => lc.route == 'update' ?   handleAmmendRoute(lc) :  handleLcAmmendRoute(lc) }>
                              Update
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
