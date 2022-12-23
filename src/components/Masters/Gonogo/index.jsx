import React, { useEffect, useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import DownloadMasterBar from '../../../components/DownloadMasterBar';
import { GetAllGonogo } from 'redux/masters/action';
import Table from '../../Table';
import Filter from '../../../components/Filter';
import Image from 'next/image';
function Index() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { searchedLeads } = useSelector((state) => state.order);
  const { getGonogoMasterData } = useSelector((state) => state.MastersData);
  useEffect(() => {
    dispatch(GetAllGonogo());
  }, []);
  const tableColumns = useMemo(() => [
    {
      Header: 'VERSION',
      accessor: 'version',
    },
    {
      Header: 'VERSION APPROVAL DATE',
      accessor: 'versionApprovalDate',
    },
    {
      Header: 'STATUS',
      accessor: 'verification.status',
    },
  ]);
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'Edit',
        Header: 'Action',
        Cell: ({ row }) => {
          return (
            <div className={`${styles.edit_image} img-fluid badge badge-outline`}>
              <Image height="30px" width="30px" src="/static/mode_edit.svg" alt="Edit" />
            </div>
          );
        },
      },
    ]);
  };
  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={`${styles.container_inner}`}>
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
            <div className={`${styles.search}`}>
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
              {searchedLeads && searchterm && (
                <div className={styles.searchResults}>
                  <ul>
                    {searchedLeads?.data?.data?.map((results, index) => (
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
              onClick={() => Router.push('/vendors/add-new-vendor')}
            >
              Add
            </button>
          </div>
          {/*UserTable*/}
          <div className={`${styles.datatable} border datatable card mt-4`}>
            <div className={`${styles.tableFilter} d-flex justify-content-between`}>
              <h3 className="heading_card">Go No Go Logic</h3>
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
                  <span>Showing Page 1 out of 10</span>
                  <a href="#" className={`${styles.arrow} ${styles.leftArrow} arrow`}>
                    <img src="/static/keyboard_arrow_right-3.svg" alt="arrow left" className="img-fluid" />
                  </a>
                  <a href="#" className={`${styles.arrow} ${styles.rightArrow} arrow`}>
                    <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="generic-table">
              <Table columns={tableColumns} data={getGonogoMasterData && getGonogoMasterData} tableHooks={tableHooks} />
            </div>
          </div>
          <div className={`${styles.total_count}`}>
            Total Count: <span>280</span>
          </div>
        </div>
      </div>
      <DownloadMasterBar btnName="Download as Excel" />
    </>
  );
}
export default Index;
