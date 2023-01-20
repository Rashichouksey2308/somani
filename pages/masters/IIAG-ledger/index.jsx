import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetMasterIIAGLedgerQueueRecords, FilterIIAGLedgerQueue } from '../../../src/redux/masters/action';
import SearchAndFilter from '../../../src/components/SearchAndFilter';
import _, { isUndefined } from 'lodash';
import { MASTERS_IIAG_LEDGER_MASTER_QUEUE } from '../../../src/data/constant';
import slugify from 'slugify';
import AddIIAGLedger from '../../../src/components/Masters/IIAG-Ledger/AddIIAGLedger';
import moment from 'moment/moment';

function Index() {
  const dispatch = useDispatch();
  const { IIAGLedgerQueueRecords, filteredIIAGLedgerQueue } = useSelector((state) => state.MastersData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [openList, setOpenList] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState(filteredIIAGLedgerQueue);
  const [filterItem, setFilterItem] = useState({ gl_list: true });
  const [appliedFilters, setAppliedFilters] = useState({ gl_list: true });
  const [showBadges, setShowBadges] = useState([]);
  const delayedQuery = useCallback(
    _.debounce((q) => dispatch(FilterIIAGLedgerQueue(`${q}`)), 1000),
    [],
  );

  const [editIIAGLedger, seteditIIAGLedger] = useState(false);
  const [IIAGLedgerTableQueueData, setIIAGLedgerTableQueueData] = useState(true);
  const [IIAGLedgerMasterDetails, setIIAGLedgerMasterDetails] = useState({
    ledgerId: '',
    gl_list: '',
    group: '',
    createdAt: '',
    lastUpdatedBy: '',
    updatedAt: '',
  });

  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setOpenList(true);
    setSearchTerm(query);
    let queryParams = '';
    if (Object.keys(appliedFilters).length !== 0 && query.length >= 3) {
      Object.keys(appliedFilters).forEach((item) => {
        const isTrue = appliedFilters[item];
        if (isTrue) {
          queryParams += `${item}=${query}&`;
        }
      });
      delayedQuery(queryParams);
    }
  };
  const handleSort = (column) => {
    let columnName = slugify(column.Header, { lower: true });
    if (columnName.includes('list-of-gl')) columnName = 'gl_list';
    let sortOrder = '';
    if (column.id === sortByState.column) {
      setSortByState((state) => {
        let updatedOrder = !state.order;
        sortOrder = updatedOrder ? '1' : '-1';
        return { ...state, order: updatedOrder };
      });
    } else {
      let data = { column: column.id, order: column.isSortedDesc };
      sortOrder = data.order ? '1' : '-1';
      setSortByState(data);
    }
    dispatch(
      GetMasterIIAGLedgerQueueRecords(
        `?page=${currentPage}&limit=${pageLimit}&column=${columnName}&order=${sortOrder}${filterQuery}`,
      ),
    );
  };
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Master');
      sessionStorage.setItem('loadedSubPage', `IIAG-Ledger`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);
  useEffect(() => {
    dispatch(setPageName('master-iiag-ledger'));
    dispatch(setDynamicName(null));
  });
  useEffect(() => {
    dispatch(GetMasterIIAGLedgerQueueRecords(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
  }, [dispatch, currentPage, pageLimit]);
  useEffect(() => {
    if (filteredIIAGLedgerQueue) setFilter(filteredIIAGLedgerQueue);
  }, [filteredIIAGLedgerQueue]);
  const handleBoolean = (value) => {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
    return value;
  };
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilterItem((prevState) => ({
      ...prevState,
      [name]: handleBoolean(checked.toString()),
    }));
  };
  const handleApplyFilter = () => {
    setAppliedFilters(filterItem);
  };
  const handleClose = (index) => {
    showBadges.splice(index, 1);
    let query = '';
    showBadges.map((item) => {
      query = query + `&${item?.key}=${slugify(item?.displayVal, { lower: false })}`;
    });
    setFilterQuery(query);
    dispatch(GetMasterIIAGLedgerQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));
    setShowBadges([...showBadges]);
  };
  const handleListClose = (result) => {
    const badgesItems = [];
    const filterItemData = Object.keys(appliedFilters);
    let query = '';
    filterItemData.map((val) => {
      if (appliedFilters[val]) {
        if (val === 'gl_list') {
          result?.gl_list && badgesItems.push({ key: val, displayVal: result?.gl_list });
          query = query + `&${val}=${slugify(result?.gl_list, { lower: false })}`;
        }
        if (val === 'group') {
          result?.group && badgesItems.push({ key: val, displayVal: result?.group });
          query = query + `&${val}=${slugify(result?.group, { lower: false })}`;
        }
      }
    });
    setFilterQuery(query);
    dispatch(GetMasterIIAGLedgerQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));
    setOpenList(false);
    setShowBadges(badgesItems);
  };
  const searchView = () => {
    return (
      filter &&
      openList &&
      searchTerm?.length >= 3 && (
        <div className="searchResults">
          <ul>
            {filteredIIAGLedgerQueue?.data?.ledgerFilteredData?.length > 0 ? (
              filteredIIAGLedgerQueue?.data?.ledgerFilteredData?.map((results, index) => (
                <li
                  onClick={() => handleListClose(results)}
                  id={results._id}
                  key={results._id}
                  className="cursor-pointer"
                >
                  {appliedFilters?.gl_list === true && results?.gl_list}
                  <span>
                    &nbsp; {appliedFilters?.group === true && <span className="text-right">{results?.group}</span>}
                  </span>
                </li>
              ))
            ) : (
              <li>
                <span>No result found</span>
              </li>
            )}
          </ul>
        </div>
      )
    );
  };
  const tableColumns = useMemo(() => [
    {
      Header: "List of GL's",
      accessor: 'gl_list',
    },
    {
      Header: 'Group',
      accessor: 'group',
    },
  ]);
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'Preview',
        Header: 'Action',
        disableSortBy: true,
        Cell: ({ row }) => {
          return (
            <div className={`${styles.edit_image} img-fluid badge badge-outline`}>
              <a className="cursor-pointer" onClick={() => handleRoute(row?.original)}>
                <Image height="20px" width="20px" src="/static/mode_edit.svg" alt="Edit" />
              </a>
            </div>
          );
        },
      },
    ]);
  };
  const handleRoute = (IIAGLedgerMasterData) => {
    sessionStorage.setItem('IIAGLedgerMasterId', IIAGLedgerMasterData?._id);
    sessionStorage.setItem('IIAGLedgerMasterModuleName', IIAGLedgerMasterData?.Module);
    dispatch(setDynamicName(IIAGLedgerMasterData?.Module));
    setIIAGLedgerTableQueueData(false);
    seteditIIAGLedger(true);
    setIIAGLedgerMasterDetails({
      ledgerId: IIAGLedgerMasterData._id,
      gl_list: IIAGLedgerMasterData.gl_list,
      group: IIAGLedgerMasterData.group,
      createdAt: IIAGLedgerMasterData.createdAt,
      lastUpdatedBy: IIAGLedgerMasterData.lastUpdatedBy,
      updatedAt: IIAGLedgerMasterData.updatedAt,
    });
  };
  const clearState = () => {
    setIIAGLedgerMasterDetails({
      ledgerId: '',
      gl_list: '',
      group: '',
      createdAt: '',
      lastUpdatedBy: '',
      updatedAt: '',
    });
  };
  const updatedATDate = moment(IIAGLedgerMasterDetails.updatedAt).format('DD-MMM, hh:mm A');
  return (
    <>
      {IIAGLedgerTableQueueData ? (
        <div className="container-fluid p-0 border-0">
          <div className={styles.container_inner}>
            <div className={`${styles.filter} d-flex align-items-center`}>
              <div className={`${styles.head_header} align-items-center`}>
                <img
                  className={`${styles.arrow} mr-2 image_arrow img-fluid`}
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="ArrowRight"
                />
                <h1 className={styles.heading}>
                  <span className="text-uppercase">IIAG</span> Ledger
                </h1>
              </div>
              <div className={`${styles.filter} d-flex align-items-center flex-grow-1`}>
                <SearchAndFilter
                  searchterm={searchTerm}
                  handleSearch={handleSearch}
                  filterItem={filterItem}
                  handleFilterChange={handleFilterChange}
                  handleApplyFilter={handleApplyFilter}
                  filterItems={MASTERS_IIAG_LEDGER_MASTER_QUEUE}
                  showBadges={showBadges}
                  handleClose={handleClose}
                  searchView={searchView}
                />
                <button
                  type="button"
                  className={`${styles.createBtn} btn ml-auto btn-primary`}
                  onClick={() => {
                    setIIAGLedgerTableQueueData(false);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
            {/* Queue Table */}
            {IIAGLedgerQueueRecords?.data && (
              <Table
                tableHeading="IIAG Ledger"
                currentPage={currentPage}
                totalCount={IIAGLedgerQueueRecords?.total}
                setCurrentPage={setCurrentPage}
                tableHooks={tableHooks}
                columns={tableColumns}
                data={IIAGLedgerQueueRecords?.data}
                pageLimit={pageLimit}
                setPageLimit={setPageLimit}
                handleSort={handleSort}
                sortByState={sortByState}
                serverSortEnabled={true}
                totalCountEnabled={true}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="container-fluid p-0 border-0">
          <div className={styles.container_inner}>
            <div className={`${styles.filter}`}>
              <div className={`${styles.head_header} align-items-center`}>
                <img
                  className={`${styles.arrow} mr-2 image_arrow img-fluid`}
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="ArrowRight"
                  onClick={() => {
                    setIIAGLedgerTableQueueData(true);
                    seteditIIAGLedger(false);
                    clearState();
                  }}
                />

                <div className={styles.headingTop}>
                  <h1 className={styles.heading}>
                    <span className="text-uppercase">IIAG</span> Ledger
                  </h1>
                  {editIIAGLedger && (
                    <div className={styles.last_modified}>
                      <strong>Last Modified:</strong>
                      <span>Balakrishan</span>SGF001 -{updatedATDate}
                    </div>
                  )}
                </div>
              </div>
              <AddIIAGLedger
                editIIAGLedger={editIIAGLedger}
                setIIAGLedgerMasterDetails={setIIAGLedgerMasterDetails}
                IIAGLedgerMasterDetails={IIAGLedgerMasterDetails}
              />
              {editIIAGLedger && (
                <div className={styles.headingBottom}>
                  <div className={styles.last_modified}>
                    <strong>Created By:</strong>
                    <span>Balakrishan</span>SGF001
                  </div>
                  <div className={styles.last_modified}>
                    <strong>Approved by:</strong>
                    <span>Balakrishan</span>SGF001
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
