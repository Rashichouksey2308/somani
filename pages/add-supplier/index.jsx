import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import DownloadMasterBar from '../../src/components/DownloadMasterBar';
import Image from 'next/image';
import Router from 'next/router';
import { GetSupplier, GetAllSupplier } from 'redux/supplier/action';
import moment from 'moment';

const index = () => {
  const dispatch = useDispatch();
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);


  const { searchedLeads } = useSelector((state) => state.order);
  const { supplierResponse, allSupplierResponse } = useSelector((state) => state.supplier);



  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setSearchTerm(query);
    if (query.length >= 3) {
      dispatch(SearchLeads(query));
    }
  };
  const handleFilteredData = (e) => {
    setSearchTerm('');
    const id = `${e.target.id}`;
    dispatch(GetLcModule(`?company=${id}`));
  };
  useEffect(() => {
    dispatch(GetAllSupplier(`?page=${currentPage}&limit=${pageLimit}`))
  }, [currentPage, pageLimit])

  const handleRoute = (id) => {
    sessionStorage.setItem('supplier', id)
    Router.push('/supplier')
  }

  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={`${styles.search}`}>
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
                  value={serachterm}
                  onChange={handleSearch}
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl `}
                  placeholder="Search"
                />
              </div>
              {searchedLeads && serachterm && (
                <div className={styles.searchResults}>
                  <ul>
                    {searchedLeads.data.data.map((results, index) => (
                      <li
                        onClick={handleFilteredData}
                        id={results._id}
                        key={index}
                      >
                        {results.companyName} <span>{results.customerId}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Filter />

            <button
              type="button"
              className={`${styles.createBtn} btn ml-auto btn-primary`}
              onClick={() => {
                sessionStorage.removeItem('supplier')
                Router.push('/supplier')
              }}
            >
              <span className={styles.add_supplier}>+</span>Add Supplier
            </button>
          </div>

          {/*UserTable*/}
          <div className={`${styles.datatable} border datatable card mt-4`}>
            <div
              className={`${styles.tableFilter} d-flex justify-content-between`}
            >
              <h3 className="heading_card">Suppliers</h3>
              <div className="d-flex align-items-center">
                <div className={`${styles.show_record}`}>Show Records: </div>
                <div className="d-flex align-items-center position-relative ml-2">
                  <select
                    className={`${styles.select} ${styles.customSelect} text1 accordion_body form-select`}
                    onChange={(e) => setPageLimit(e.target.value)}
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                  <img
                    className={`${styles.arrow2} img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="arrow"
                  />
                </div>

                <div
                  className={`${styles.pageList} d-flex justify-content-end align-items-center`}
                >
                  <span> Showing Page {currentPage + 1} out of{' '}
                    {Math.ceil(allSupplierResponse?.totalCount / pageLimit)}</span>
                  <a
                    onClick={() => {
                      if (currentPage === 0) {
                        return;
                      } else {
                        setCurrentPage((prevState) => prevState - 1);
                      }
                    }}
                    href="#"
                    className={`${styles.arrow} ${styles.leftArrow} arrow`}
                  >
                    <img
                      src="/static/keyboard_arrow_right-3.svg"
                      alt="arrow left"
                      className="img-fluid"
                    />
                  </a>
                  <a
                    onClick={() => {
                      if (
                        currentPage + 1 <
                        Math.ceil(allSupplierResponse?.totalCount / 7)
                      ) {
                        setCurrentPage((prevState) => prevState + 1);
                      }
                    }}
                    href="#"
                    className={`${styles.arrow} ${styles.rightArrow} arrow`}
                  >
                    <img
                      src="/static/keyboard_arrow_right-3.svg"
                      alt="arrow right"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th className={`${styles.table_heading} table_heading`}>
                        SUPPLIER NAME{' '}
                        <Image
                          width="9px"
                          height="14px"
                          className={`${styles.sort_img}`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>

                      <th className={`${styles.table_heading} table_heading`}>
                        ONBOARDING DATE{' '}
                        <Image
                          width="9px"
                          height="14px"
                          className={`${styles.sort_img}`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th className={`${styles.table_heading} table_heading`}>
                        COUNTRY
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
                      <th className={`${styles.table_heading} table_heading`}>
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>



                    {allSupplierResponse && allSupplierResponse?.data?.map((supplier) => {

                      return (
                        <tr className={`${styles.table_row} table_row17`}>
                          <td className={styles.buyerName}>{supplier?.supplierProfile?.supplierName}</td>
                          <td>{moment(supplier?.createdAt).format('DD-MM-YYYY')}</td>
                          <td>{supplier?.supplierProfile?.countryOfIncorporation}</td>
                          <td>
                            <span
                              className={`${styles.status} ${styles.review}`}
                            ></span>
                            {supplier?.status}
                          </td>

                          <td>
                            {' '}
                            <div className={`${styles.edit_image} img-fluid`}>
                              <Image
                                onClick={() => {
                                  handleRoute(supplier._id)
                                }}
                                height="40px"
                                width="40px"
                                src="/static/mode_edit.svg"
                                alt="Edit"
                              />
                            </div>
                          </td>
                        </tr>
                      )
                    })}

                    {/* <tr className={`${styles.table_row} table_row17`}>
                      <td className={styles.buyerName}>Bhutani Traders</td>

                      <td>22-02-2022</td>
                      <td>India</td>

                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>

                      <td>
                        {' '}
                        <div className={`${styles.edit_image} img-fluid`}>
                          <Image
                            height="40px"
                            width="40px"
                            src="/static/mode_edit.svg"
                            alt="Edit"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className={`${styles.table_row} table_row17`}>
                      <td className={styles.buyerName}>Ramakrishna Traders </td>

                      <td>22-02-2022</td>
                      <td>India</td>

                      <td>
                        <span
                          className={`${styles.status} ${styles.expired}`}
                        ></span>
                        Inactive
                      </td>
                      <td>
                        {' '}
                        <div className={`${styles.edit_image} img-fluid`}>
                          <Image
                            height="40px"
                            width="40px"
                            src="/static/mode_edit.svg"
                            alt="Edit"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className={`${styles.table_row} table_row17`}>
                      <td className={styles.buyerName}>Bhutani Traders </td>

                      <td>22-02-2022</td>
                      <td>India</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.blacklisted}`}
                        ></span>
                        Blacklisted
                      </td>
                      <td>
                        {' '}
                        <div className={`${styles.edit_image} img-fluid`}>
                          <Image
                            height="40px"
                            width="40px"
                            src="/static/mode_edit.svg"
                            alt="Edit"
                          />
                        </div>
                      </td>
                    </tr>
                   
                    <tr className={`${styles.table_row} table_row17`}>
                      <td className={styles.buyerName}>Ramakrishna Traders </td>
                      <td>22-02-2022</td>
                      <td>India</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>
                      <td>
                        {' '}
                        <div className={`${styles.edit_image} img-fluid`}>
                          <Image
                            height="40px"
                            width="40px"
                            src="/static/mode_edit.svg"
                            alt="Edit"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className={`${styles.table_row} table_row17`}>
                      <td className={styles.buyerName}>Somani Traders </td>
                      <td>22-02-2022</td>
                      <td>India</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>

                      <td>
                        {' '}
                        <div className={`${styles.edit_image} img-fluid`}>
                          <Image
                            height="40px"
                            width="40px"
                            src="/static/mode_edit.svg"
                            alt="Edit"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className={`${styles.table_row} table_row17`}>
                      <td className={styles.buyerName}>Ramakrishna Traders </td>
                      <td>22-02-2022</td>
                      <td>India</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.approved}`}
                        ></span>
                        Approved
                      </td>

                      <td>
                        {' '}
                        <div className={`${styles.edit_image} img-fluid`}>
                          <Image
                            height="40px"
                            width="40px"
                            src="/static/mode_edit.svg"
                            alt="Edit"
                          />
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={`${styles.total_count}`}>
            Total Count: <span>{allSupplierResponse?.totalCount}</span>
          </div>
        </div>
        {/* <div className="d-flex justify-content-end mt-5 mb-4">
        <div className={styles.btn_file}>
          <span>Download</span>
          <img
            src="/static/file_download.svg"
            className="img-fluid"
            alt="FileDownload"
          />
        </div>
      </div> */}
      </div>
      <DownloadMasterBar btnName="Download Reports" />
    </>
  );
};

export default index;
