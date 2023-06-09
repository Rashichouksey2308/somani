import moment from 'moment';
import Image from 'next/image';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllSupplier ,SearchSupplier} from 'redux/supplier/action';
import DownloadMasterBar from '../../src/components/DownloadMasterBar';
import Filter from '../../src/components/Filter';
import styles from './index.module.scss';
import { setDynamicOrder, setPageName } from 'redux/userData/action';


const Index = () => {
  const dispatch = useDispatch();
  const currentPageNumber = 0
  const supplierLimit = 10
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(currentPageNumber);
  const [pageLimit, setPageLimit] = useState(supplierLimit);

  const { allSupplierResponse,searchedSupplier } = useSelector((state) => state.supplier);

  useEffect(() => {
    dispatch(setPageName('Supplier'));
    dispatch(setDynamicOrder(null));

  }, []);
  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setSearchTerm(query);
    if (query.length >= 1) {
      dispatch(SearchSupplier(query));
    }
  };
  const handleFilteredData = (id) => {
    setSearchTerm('');
    sessionStorage.setItem('supplier', id);
    Router.push('/supplier');
  };
  useEffect(() => {
    dispatch(GetAllSupplier(`?page=${currentPage}&limit=${pageLimit}`));
  }, [currentPage, pageLimit]);

  const handleRoute = (id) => {
    sessionStorage.setItem('supplier', id);
    Router.push('/supplier');
  };

  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={`${styles.search}`}>
              <div className="input-group">
                <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                  <img src="/static/search.svg" className="img-fluid" alt="Search" />
                </div>
                <input
                  value={serachterm}
                  onChange={handleSearch}
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl `}
                  placeholder="Search"
                />
              </div>
              {searchedSupplier && serachterm && (
                <div className={styles.searchResults}>
                  <ul>
                    {searchedSupplier.data?.map((results, index) => (
                      <li onClick={()=> handleFilteredData(results._id)} id={results._id} key={index}>
                        {results?.supplierProfile.supplierName} 
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Filter isSupplier={true}/>

            <button
              type="button"
              className={`${styles.createBtn} text-center btn ml-auto btn-primary`}
              onClick={() => {
                sessionStorage.removeItem('supplier');
                Router.push('/supplier');
              }}
            >
              <span className={styles.add_supplier}>+</span>
              <span className="ml-1 mr-2">Add Supplier</span>
            </button>
          </div>

          {/*UserTable*/}
          <div className={`${styles.datatable} border datatable card mt-4`}>
            <div className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}>
              <h3 className="heading_card">Suppliers</h3>
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
                    Showing Page {currentPage + 1} out of {allSupplierResponse && Math.ceil(allSupplierResponse?.totalCount / pageLimit)}
                  </span>
                  <a
                    onClick={() => {
                      if (currentPage === 0) return 
                      else {
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
                      if (currentPage + 1 < Math.ceil(allSupplierResponse?.totalCount / pageLimit)) {
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
                        SUPPLIER NAME{' '}
                        <div className={`${styles.sort_img}`}>
                          <Image
                            width="9px"
                            height="14px"
                            src="/static/icons8-sort-24.svg"
                            alt="Sort icon"
                          />
                        </div>
                      </th>

                      <th className={`${styles.table_heading} table_heading`}>
                        ONBOARDING DATE{' '}
                        <div className={`${styles.sort_img}`}>
                          <Image
                            width="9px"
                            height="14px"
                            src="/static/icons8-sort-24.svg"
                            alt="Sort icon"
                          />
                        </div>
                      </th>
                      <th className={`${styles.table_heading} table_heading`}>COUNTRY{' '}
                        <div className={`${styles.sort_img}`}>
                          <Image
                            width="9px"
                            height="14px"
                            src="/static/icons8-sort-24.svg"
                            alt="Sort icon"
                          />
                        </div>
                      </th>
                      <th className={`${styles.table_heading} table_heading`}>
                        STATUS{' '}
                        <div className={`${styles.sort_img}`}>
                          <Image
                            width="9px"
                            height="14px"
                            src="/static/icons8-sort-24.svg"
                            alt="Sort icon"
                          />
                        </div>
                      </th>
                      <th className={`${styles.table_heading} table_heading`}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allSupplierResponse &&
                      allSupplierResponse?.data?.map((supplier) => {
                        return (
                          <tr className={`${styles.table_row} table_row17`}>
                            <td className={styles.buyerName}>{supplier?.supplierProfile?.supplierName}</td>
                            <td>{moment(supplier?.createdAt).format('DD-MM-YYYY')}</td>
                            <td>{supplier?.supplierProfile?.countryOfIncorporation}</td>
                            <td>
                              <span className={`${styles.status} ${styles.review}`}></span>
                              {supplier?.status}
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
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div className={`${styles.total_count}`}>
            Total Count: <span>{allSupplierResponse?.totalCount}</span>
          </div> */}
        </div>
      </div>
      <DownloadMasterBar btnName="Download Report" isSupplier={true}/>
    </>
  );
};

export default Index;
