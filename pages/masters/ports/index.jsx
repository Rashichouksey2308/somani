import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetMasterPortsQueueRecords, FilterPortsQueue } from '../../../src/redux/masters/action';
import SearchAndFilter from '../../../src/components/SearchAndFilter';
import _, { isUndefined } from 'lodash';
import { MASTERS_PORTS_QUEUE } from '../../../src/data/constant';
import slugify from 'slugify';
import AddNewPort from '../../../src/components/Masters/Ports/AddNewPort';
import moment from 'moment/moment';

function Index() {
  const dispatch = useDispatch();
  const { portsQueueRecords, filteredPortsQueue } = useSelector((state) => state.MastersData);
  const [portTableQueueData, setPortTableQueueData] = useState(true);
  const [editPort, setEditPort] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [pageLimit, setPageLimit] = useState(10);
  const [openList, setOpenList] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState(filteredPortsQueue);
  const [filterItem, setFilterItem] = useState({ port: true });
  const [appliedFilters, setAppliedFilters] = useState({ port: true });
  const [showBadges, setShowBadges] = useState([]);

  const delayedQuery = useCallback(
    _.debounce((q) => dispatch(FilterPortsQueue(`${q}`)), 1000),
    [],
  );

  const [portDetails, setPortDetails] = useState({
    portId: '',
    Country: '',
    Port_Name: '',
    State: '',
    Container_Handling: false,
    Approved: false,
    portType: 'domestic',
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
    if (columnName === 'approved-date') columnName = 'approvedDate';
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
      GetMasterPortsQueueRecords(
        `?page=${currentPage}&limit=${pageLimit}&column=${columnName}&order=${sortOrder}${filterQuery}`,
      ),
    );
  };

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Master');
      sessionStorage.setItem('loadedSubPage', `Ports`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('master-ports'));
    dispatch(setDynamicName(null));
  });

  useEffect(() => {
    dispatch(GetMasterPortsQueueRecords(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
  }, [dispatch, currentPage, pageLimit]);

  useEffect(() => {
    if (filteredPortsQueue) setFilter(filteredPortsQueue);
  }, [filteredPortsQueue]);

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

    dispatch(GetMasterPortsQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));

    setShowBadges([...showBadges]);
  };

  const handleListClose = (result) => {
    const badgesItems = [];
    const filterItemData = Object.keys(appliedFilters);

    let query = '';

    filterItemData.map((val) => {
      if (appliedFilters[val]) {
        if (val === 'port') {
          result?.Port_Name && badgesItems.push({ key: val, displayVal: result?.Port_Name });
          query = query + `&${val}=${slugify(result?.Port_Name, { lower: false })}`;
        } else if (val === 'country') {
          result?.Country && badgesItems.push({ key: val, displayVal: result?.Country });
          query = query + `&${val}=${slugify(result?.Country, { lower: false })}`;
        } else if (val === 'status') {
          if (isUndefined(result?.Approved)) {
            badgesItems.push({ key: val, displayVal: 'In-Review' });
            query = query + `&${val}=in-review`;
          } else {
            badgesItems.push({ key: val, displayVal: result?.Approved });
            query = query + `&${val}=${result?.Approved}`;
          }
        }
      }
    });

    setFilterQuery(query);

    dispatch(GetMasterPortsQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));

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
            {filteredPortsQueue?.data?.portFilteredData?.length > 0 ? (
              filteredPortsQueue?.data?.portFilteredData?.map((results, index) => (
                <li
                  onClick={() => handleListClose(results)}
                  id={results._id}
                  key={results._id}
                  className="cursor-pointer"
                >
                  {appliedFilters?.port === true && results?.Port_Name}
                  <span>
                    &nbsp; {appliedFilters?.country === true && <span className="text-right">{results?.Country}</span>}
                    &nbsp;{' '}
                    {appliedFilters?.status === true && (
                      <span className="text-right">{results?.Approved !== undefined ? results?.Approved : 'Null'}</span>
                    )}
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
      Header: 'Port Name',
      accessor: 'Port_Name',
      Cell: ({ cell: { value }, row: { original } }) => (
        <span
          className="cursor-pointer font-weight-bold text-primary"
          onClick={() => {
            handleEdit(original);
          }}
        >
          {value}
        </span>
      ),
    },
    {
      Header: 'Country',
      accessor: 'Country',
    },
    {
      Header: 'State',
      accessor: 'State',
    },
    {
      Header: 'Approved Date',
      accessor: 'createdAt',
      Cell: ({ value }) => (value ? value.slice(0, 10) : 'NA'),
    },
    {
      Header: 'Status',
      accessor: 'Approved',
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
              <a className="cursor-pointer" onClick={() => handleEdit(row?.original)}>
                <Image height="20px" width="20px" src="/static/mode_edit.svg" alt="Edit" />
              </a>
            </div>
          );
        },
      },
    ]);
  };

  const handleEdit = (portData) => {
    sessionStorage.setItem('masterPortId', portData?._id);
    sessionStorage.setItem('masterPortName', portData?.Port_Name);
    dispatch(setDynamicName(portData?.Port_Name));
    setPortTableQueueData(false);
    setEditPort(true);
    setPortDetails({
      portId: portData?._id,
      Country: portData?.Country,
      Port_Name: portData?.Port_Name,
      State: portData?.State,
      Container_Handling: portData?.Container_Handling,
      Approved: portData?.Approved,
      portType: 'domestic',
      createdAt: portData.createdAt,
      lastUpdatedBy: portData.lastUpdatedBy,
      updatedAt: portData.updatedAt,
    });
  };

  const clearState = () => {
    setPortDetails({
      portId: '',
      Country: '',
      Port_Name: '',
      State: '',
      Container_Handling: '',
      Approved: '',
      portType: 'domestic',
      createdAt: '',
      lastUpdatedBy: '',
      updatedAt: '',
    });
  };
  const updatedATDate = moment(portDetails.updatedAt).format('DD-MMM, hh:mm A');
  return (
    <>
      {portTableQueueData === true ? (
        <div className="container-fluid p-0 border-0">
          <div className={styles.container_inner}>
            <div className={`${styles.filter} d-flex align-items-center`}>
              <div className={`${styles.head_header} align-items-center`}>
                <img
                  className={`${styles.arrow} mr-2 image_arrow img-fluid`}
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="ArrowRight"
                />
                <h1 className={styles.heading}>Ports</h1>
              </div>
              <div className={`${styles.filter} d-flex align-items-center flex-grow-1`}>
                <SearchAndFilter
                  searchterm={searchTerm}
                  handleSearch={handleSearch}
                  filterItem={filterItem}
                  handleFilterChange={handleFilterChange}
                  handleApplyFilter={handleApplyFilter}
                  filterItems={MASTERS_PORTS_QUEUE}
                  showBadges={showBadges}
                  handleClose={handleClose}
                  searchView={searchView}
                />
                <button
                  type="button"
                  className={`${styles.createBtn} btn ml-auto btn-primary`}
                  onClick={() => {
                    setPortTableQueueData(false);
                  }}
                >
                  Add
                </button>
              </div>
            </div>

            {/* Queue Table */}
            {/* {portsQueueRecords?.data && ( */}
            <Table
              tableHeading="Ports"
              currentPage={currentPage}
              totalCount={portsQueueRecords?.total}
              setCurrentPage={setCurrentPage}
              tableHooks={tableHooks}
              columns={tableColumns}
              data={portsQueueRecords?.data}
              pageLimit={pageLimit}
              setPageLimit={setPageLimit}
              handleSort={handleSort}
              sortByState={sortByState}
              serverSortEnabled={true}
              totalCountEnabled={true}
            />
            {/* )} */}
          </div>
        </div>
      ) : (
        <div className="container-fluid p-0 border-0">
          <div className={styles.container_inner}>
            <div className={`${styles.filter} align-items-center`}>
              <div className={`${styles.head_header} align-items-center`}>
                <img
                  className={`${styles.arrow} mr-2 image_arrow img-fluid`}
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="ArrowRight"
                  onClick={() => {
                    setPortTableQueueData(true);
                    setEditPort(false);
                    clearState();
                  }}
                />
                <div className={styles.headingTop}>
                  <h1 className={styles.heading}>Ports </h1>
                  {editPort && 
                  <div className={styles.last_modified}>
                    <strong>Last Modified:</strong>
                    <span>Balakrishan</span>SGF001 -{updatedATDate}
                  </div>
                  }
                </div>
              </div>
            </div>
            <AddNewPort
              editPort={editPort}
              setPortDetails={setPortDetails}
              portDetails={portDetails}
            />
            {editPort && (
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
        checked={data?.Approved === 'Yes' ? true : false}
      />
      <label className={`${styles.toggle} ${styles.toggle_label_left}`}>
        <img src="/static/check.svg" className={`${styles.toggle_check} img_fluid`} alt="check" />
      </label>
      <input
        className={styles.toggle_between}
        type="radio"
        name={`toggle_${data?._id}`}
        value="-1"
        checked={isUndefined(data?.Approved)}
      />
      <label className={`${styles.toggle} ${styles.toggle_label_between}`}></label>
      <input
        type="radio"
        className={styles.toggle_right}
        name={`toggle_${data?._id}`}
        value="false"
        checked={data?.Approved === 'No' ? true : false}
      />
      <label className={`${styles.toggle} ${styles.toggle_label_right}`}>
        <img src="/static/close-b.svg" className={`${styles.toggle_close} img_fluid`} alt="close" />
      </label>
      <span></span>
    </div>
  );
};

export default Index;
