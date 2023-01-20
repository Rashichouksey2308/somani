import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetMasterCurrencyQueueRecords, FilterCurrencyQueue } from '../../../src/redux/masters/action';
import SearchAndFilter from '../../../src/components/SearchAndFilter';
import _, { isUndefined } from 'lodash';
import { MASTERS_CURRENCY_MASTER_QUEUE } from '../../../src/data/constant';
import slugify from 'slugify';
import AddNewCurrency from '../../../src/components/Masters/Currency/AddNewCurrency'
import moment from 'moment/moment';


function Index() {
  const dispatch = useDispatch();
  const { currencyQueueRecords, filteredCurrencyQueue } = useSelector((state) => state.MastersData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [openList, setOpenList] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState(filteredCurrencyQueue);
  const [filterItem, setFilterItem] = useState({ currency: true });
  const [appliedFilters, setAppliedFilters] = useState({ currency: true });
  const [showBadges, setShowBadges] = useState([]);
  const delayedQuery = useCallback(
    _.debounce((q) => dispatch(FilterCurrencyQueue(`${q}`)), 1000),
    [],
  );

  const [editCurrency, setEditCurrency] = useState(false);
  const [currencyTableQueueData, setCurrencyTableQueueData] = useState(true);
  const [currencyMasterDetails, setCurrencyMasterDetails] = useState({
    currencyMasterId: '',
    Currency: '',
    Currency_Name: '',
    Symbol: '',
    Status: false,
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
    if (columnName === 'currency-name') columnName = 'currencyName';
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
      GetMasterCurrencyQueueRecords(
        `?page=${currentPage}&limit=${pageLimit}&column=${columnName}&order=${sortOrder}${filterQuery}`,
      ),
    );
  };
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Master');
      sessionStorage.setItem('loadedSubPage', `Currency`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);
  useEffect(() => {
    dispatch(setPageName('master-currency'));
    dispatch(setDynamicName(null));
  });
  useEffect(() => {
    dispatch(GetMasterCurrencyQueueRecords(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
  }, [dispatch, currentPage, pageLimit]);
  useEffect(() => {
    if (filteredCurrencyQueue) setFilter(filteredCurrencyQueue);
  }, [filteredCurrencyQueue]);
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
    dispatch(GetMasterCurrencyQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));
    setShowBadges([...showBadges]);
  };
  const handleListClose = (result) => {
    const badgesItems = [];
    const filterItemData = Object.keys(appliedFilters);
    let query = '';
    filterItemData.map((val) => {
      if (appliedFilters[val]) {
        if (val === 'currency') {
          result?.Currency && badgesItems.push({ key: val, displayVal: result?.Currency });
          query = query + `&${val}=${slugify(result?.Currency, { lower: false })}`;
        }
        if (val === 'currencyName') {
          result?.Currency_Name && badgesItems.push({ key: val, displayVal: result?.Currency_Name });
          query = query + `&${val}=${slugify(result?.Currency_Name, { lower: false })}`;
        }
        if (val === 'status' && result?.Status) {
          result?.Status && badgesItems.push({ key: val, displayVal: result?.Status });
          query = query + `&${val}=${slugify(result?.Status, { lower: false })}`;
        }
      }
    });
    setFilterQuery(query);
    dispatch(GetMasterCurrencyQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));
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
            {filteredCurrencyQueue?.data?.currencyFilteredData?.length > 0 ? (
              filteredCurrencyQueue?.data?.currencyFilteredData?.map((results, index) => (
                <li
                  onClick={() => handleListClose(results)}
                  id={results._id}
                  key={results._id}
                  className="cursor-pointer"
                >
                  {appliedFilters?.currency === true && results?.Currency}
                  <span>
                    &nbsp;
                    {appliedFilters?.currencyName === true && (
                      <span className="text-right">{results?.Currency_Name}</span>
                    )}
                    &nbsp; {appliedFilters?.status === true && <span className="text-right">{results?.Status}</span>}
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
      Header: 'Currency',
      accessor: 'Currency',
      Cell: ({ cell: { value }, row: { original } }) => (
        <span
          className="cursor-pointer font-weight-bold text-primary"
          onClick={() => {
            handleRoute(original);
          }}
        >
          {value}
        </span>
      ),
    },
    {
      Header: 'Currency Name',
      accessor: 'Currency_Name',
    },
    {
      Header: 'Status',
      accessor: 'Status',
      disableSortBy: true,
      Cell: ({ cell: { value }, row: { original } }) => <ToggleSwitch data={original} />,
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
  const handleRoute = (currencyMasterData) => {
    sessionStorage.setItem('currencyMasterId', currencyMasterData?._id);
    sessionStorage.setItem('currencyMasterModuleName', currencyMasterData?.Module);
    dispatch(setDynamicName(currencyMasterData?.Module));
    setCurrencyTableQueueData(false);
    setEditCurrency(true);
    setCurrencyMasterDetails({
      currencyMasterId: currencyMasterData._id,
      Currency: currencyMasterData.Currency,
      Currency_Name: currencyMasterData.Currency_Name,
      Symbol: currencyMasterData.Symbol,
      Status: currencyMasterData.Status,
      createdAt: currencyMasterData.createdAt,
      lastUpdatedBy: currencyMasterData.lastUpdatedBy,
      updatedAt: currencyMasterData.updatedAt,
    });
  };
  const clearState = () => {
    setCurrencyMasterDetails({
        currencyMasterId: '',
      Currency: '',
      Currency_Name: '',
      Symbol: '',
      Status: false,
      createdAt: '',
      lastUpdatedBy: '',
      updatedAt: '',
    });
  };
  const updatedATDate = moment(currencyMasterDetails.updatedAt).format('DD-MMM, hh:mm A');
  return (
    <>
      {currencyTableQueueData === true ? (
        <div className="container-fluid p-0 border-0">
          <div className={styles.container_inner}>
            <div className={`${styles.filter} d-flex align-items-center`}>
              <div className={`${styles.head_header} align-items-center`}>
                <img
                  className={`${styles.arrow} mr-2 image_arrow img-fluid`}
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="ArrowRight"
                />
                <h1 className={styles.heading}>Currency</h1>
              </div>
              <div className={`${styles.filter} d-flex align-items-center flex-grow-1`}>
                <SearchAndFilter
                  searchterm={searchTerm}
                  handleSearch={handleSearch}
                  filterItem={filterItem}
                  handleFilterChange={handleFilterChange}
                  handleApplyFilter={handleApplyFilter}
                  filterItems={MASTERS_CURRENCY_MASTER_QUEUE}
                  showBadges={showBadges}
                  handleClose={handleClose}
                  searchView={searchView}
                />
                <button
                  type="button"
                  className={`${styles.createBtn} btn ml-auto btn-primary`}
                  onClick={() => {
                    setCurrencyTableQueueData(false);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
            {/* Queue Table */}
            {currencyQueueRecords?.data && (
              <Table
                tableHeading="Currency"
                currentPage={currentPage}
                totalCount={currencyQueueRecords?.total}
                setCurrentPage={setCurrentPage}
                tableHooks={tableHooks}
                columns={tableColumns}
                data={currencyQueueRecords?.data}
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
                    setCurrencyTableQueueData(true);
                    setEditCurrency(false);
                    clearState();
                  }}
                />
                <div className={styles.headingTop}>
                <h1 className={styles.heading}>Currency</h1>
                {editCurrency &&
                  <div className={styles.last_modified}>
                    <strong>Last Modified:</strong>
                    <span>Balakrishan</span>SGF001 -{updatedATDate}
                  </div>
                }
                </div>
              </div>
              <AddNewCurrency
                editCurrency={editCurrency}
                setCurrencyMasterDetails={setCurrencyMasterDetails}
                currencyMasterDetails={currencyMasterDetails}
              />
              {editCurrency && (
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

export const ToggleSwitch = ({ data }) => {
  return (
    <div className={`${styles.tw_toggle}`}>
      <input
        type="radio"
        className={styles.toggle_left}
        name={`toggle_${data?._id}`}
        value="true"
        checked={data?.Status === 'Active' ? true : false}
      />
      <label className={`${styles.toggle} ${styles.toggle_label_left}`}>
        <img src="/static/check.svg" className={`${styles.toggle_check} img_fluid`} alt="check" />
      </label>
      <input
        className={styles.toggle_between}
        type="radio"
        name={`toggle_${data?._id}`}
        value="-1"
        checked={isUndefined(data?.Status)}
      />
      <label className={`${styles.toggle} ${styles.toggle_label_between}`}></label>
      <input
        type="radio"
        className={styles.toggle_right}
        name={`toggle_${data?._id}`}
        value="false"
        checked={data?.Status === 'Inactive' ? true : false}
      />
      <label className={`${styles.toggle} ${styles.toggle_label_right}`}>
        <img src="/static/close-b.svg" className={`${styles.toggle_close} img_fluid`} alt="close" />
      </label>
      <span></span>
    </div>
  );
};

export default Index;
