import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Filter from '../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import DownloadMasterBar from '../../src/components/DownloadMasterBar';
import Image from 'next/image';
import Router from 'next/router';
import { GetAllCommodity, GetCommodity } from '../../src/redux/commodity/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../src/redux/userData/action';
import ToggleSwitch from '../../src/components/ToggleSwitch'

const index = () => {
  const dispatch = useDispatch();
  const [serachterm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const { searchedLeads } = useSelector((state) => state.order);

  const { allCommodity } = useSelector((state) => state.commodity);

  useEffect(() => {
    dispatch(GetAllCommodity(`?page=${currentPage}&limit=${10}`));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(setPageName('commodity'));
    dispatch(setDynamicName(null));
    dispatch(setDynamicOrder(null));
  });

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
    // dispatch(GetAllCommodity(`?company=${id}`));
  };

  const handleRoute = (commodity) => {
    sessionStorage.setItem('commodityId', commodity._id);
    dispatch(GetCommodity(`?commodityId=${commodity._id}`));
    Router.push('/update-commodity');
  };

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
              <h1 className={styles.heading}>Commodity</h1>
            </div>
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
              {searchedLeads && serachterm && (
                <div className={styles.searchResults}>
                  <ul>
                    {searchedLeads.data.data.map((results, index) => (
                      <li onClick={handleFilteredData} id={results._id} key={index}>
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
              onClick={() => Router.push('/commodity/id')}
            >
              Add
            </button>
          </div>

          {/*UserTable*/}
          <div className={`${styles.datatable} border datatable card mt-4`}>
            <div className={`${styles.tableFilter} d-flex justify-content-between`}>
              <h3 className="heading_card">Commodity</h3>
              <div className="d-flex align-items-center">
                <div className={`${styles.show_record}`}>Show Records:</div>
                <div className="d-flex align-items-center position-relative ml-2">
                  <select className={`${styles.select} ${styles.customSelect} text1 accordion_body form-select`}>
                    <option>10</option>
                    <option>20</option>
                  </select>
                  <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
                </div>

                <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                  <span>
                    Showing Page {currentPage + 1} out of {Math.ceil(allCommodity?.totalCount / 7)}
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
                    {' '}
                    <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
                  </a>
                  <a
                    onClick={() => {
                      if (currentPage + 1 < Math.ceil(allCommodity?.totalCount / 7)) {
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
                        COMMODITY{' '}
                        <Image
                          width="9px"
                          height="14px"
                          className={`${styles.sort_img}`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th width="25%" className={`${styles.table_heading} table_heading`}>
                        CHAPTER NAME{' '}
                        <Image
                          width="9px"
                          height="14px"
                          className={`${styles.sort_img}`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th className={`${styles.table_heading} table_heading`}>
                        CHAPTER CODE{' '}
                        <Image
                          width="9px"
                          height="14px"
                          className={`${styles.sort_img}`}
                          src="/static/icons8-sort-24.svg"
                          alt="Sort icon"
                        />
                      </th>
                      <th className={`${styles.table_heading} table_heading`}>
                        APPROVED{' '}
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
                    {allCommodity &&
                      allCommodity?.data?.map((commodity, index) => (
                        <tr key={index} className={`${styles.table_row} table_row17`}>
                          <td className={styles.buyerName}>{commodity.Commodity}</td>
                          <td>{commodity.Chapter_Name}</td>

                          <td>{commodity.Chapter_Code}</td>
                          <td> <ToggleSwitch/></td>
                          {/* {commodity && commodity.Approved_Commodity == 'Yes' ? (
                            <td>
                              <img src="/static/active.svg" className="img-fluid" alt="active" />
                              <span className="m-3">{'Yes'}</span>
                            </td>
                          ) : (
                            <td>
                              <img src="/static/blacklisted.svg" className="img-fluid" alt="blacklisted" />
                              <span className="m-3">No</span>
                            </td>
                          )} */}
                          <td>
                            {' '}
                            <div className={`${styles.edit_image} img-fluid`} onClick={() => handleRoute(commodity)}>
                              <Image height="40px" width="40px" src="/static/mode_edit.svg" alt="Edit" />
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
            Total Count: <span>{allCommodity?.totalCount}</span>
          </div>
        </div>
      </div>
      <DownloadMasterBar btnName="Download" />
    </>
  );
};

export default index;
