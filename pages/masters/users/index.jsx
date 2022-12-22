import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styles from './index.module.scss';
import Filter from '../../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { GetMasterUsersQueueRecords, FilterUsersQueue } from '../../../src/redux/masters/action';
import DownloadMasterBar from '../../../src/components/DownloadMasterBar';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import Router from 'next/router';
import slugify from 'slugify';
import _ from 'lodash';
import ToggleSwitch from '../../../src/components/ToggleSwitch';
import SearchAndFilter from '../../../src/components/SearchAndFilter';
import { CHECKER_USERS_QUEUE } from '../../../src/data/constant';

const index = () => {
  const dispatch = useDispatch();
  const { usersQueueRecords, filteredUsersQueue } = useSelector((state) => state.MastersData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [openList, setOpenList] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState(filteredUsersQueue);
  const [filterItem, setFilterItem] = useState({ department: true });
  const [appliedFilters, setAppliedFilters] = useState({ department: true });
  const [showBadges, setShowBadges] = useState([]);

  const delayedQuery = useCallback(
    _.debounce((q) => dispatch(FilterUsersQueue(`${q}`)), 1000),
    [],
  );

  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setOpenList(true);
    setSearchTerm(query);

    let queryParams = '';
    if (Object.keys(appliedFilters).length !== 0 && query.length > 3) {
      Object.keys(appliedFilters).forEach((item) => {
        const isTrue = appliedFilters[item];
        if (isTrue) {
          queryParams += `${item}=${query}&`;
        }
      });
      delayedQuery(queryParams);
    }
  };

  const handleRoute = (user) => {
    sessionStorage.setItem('masterUserId', user._id);
    dispatch(GetOrders(`?company=${buyer.company._id}`));
    setTimeout(() => {
      // Router.push('/master/users/id');
    }, 500);
  };

  const handleSort = (column) => {
    let columnName = slugify(column.Header, { lower: true });
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
    dispatch(GetMasterUsersQueueRecords(`?page=${currentPage}&column=${columnName}&order=${sortOrder}${filterQuery}`));
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'User Id',
      accessor: 'profileDetails.officialEmailId',
      disableSortBy: true,
    },
    {
      Header: 'Full Name',
      accessor: 'profileDetails.fullName',
      disableSortBy: true,
      Cell: ({ cell: { value }, row: { original } }) => (
        <span
          onClick={() => {
            handleRoute(original);
          }}
          className="font-weight-bold text-primary"
        >
          {value}
        </span>
      ),
    },
    {
      Header: 'Department',
      accessor: 'professionalDetails.department',
      Cell: ({ value }) => <span className='text-capitalize'>{value}</span>
    },
    {
      Header: 'Activation Date',
      accessor: 'createdAt',
      Cell: ({ value }) => value.slice(0, 10)
    },
    {
      Header: 'Status',
      accessor: 'profileDetails.status',
      disableSortBy: true,
      Cell: ({ cell: { value }, row: { original } }) => (
        <ToggleSwitch data={original} />
      ),
    },
  ], [usersQueueRecords?.data?.data]);

  useEffect(() => {
    dispatch(GetMasterUsersQueueRecords(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
  }, [dispatch, currentPage, pageLimit]);

  useEffect(() => {
    if (filteredUsersQueue) setFilter(filteredUsersQueue);
  }, [filteredUsersQueue]);

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Preview",
        Header: "Action",
        disableSortBy: true,
        Cell: ({ row }) => {
          return <div className={`${styles.edit_image} img-fluid badge badge-outline`}>
            <a className="cursor-pointer"
              onClick={() =>
                handleRoute(row?.original)
              }
            >
              <Image
                height="20px"
                width="20px"
                src="/static/mode_edit.svg"
                alt="Edit"
              />
            </a>
          </div >
        }
      }
    ])
  };

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
    })

    setFilterQuery(query);

    dispatch(GetMasterUsersQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));

    setShowBadges([...showBadges]);
  };

  const handleListClose = (result) => {
    const badgesItems = [];
    const filterItemData = Object.keys(appliedFilters);

    let query = '';

    filterItemData.map((val) => {
      if (appliedFilters[val]) {
        if (val === 'status') {
          result?.status && badgesItems.push({ key: val, displayVal: result?.status });
          query = query + `&${val}=${result?.status}`;
        }
        else if (val === 'fullname') {
          result?.fullname && badgesItems.push({ key: val, displayVal: result?.fullname });
          query = query + `&${val}=${slugify(result?.fullname, { lower: false })}`;
        }
        else if (val === 'department') {
          result?.department && badgesItems.push({ key: val, displayVal: result?.department });
          query = query + `&${val}=${slugify(result?.department, { lower: false })}`;
        }
      }
    });

    setFilterQuery(query);

    dispatch(GetMasterUsersQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));

    setOpenList(false);
    setShowBadges(badgesItems);
  };

  const searchView = () => {
    return (
      filter && openList && searchTerm?.length > 3 &&
      <div className={styles.searchResults}>
        <ul>
          {filteredUsersQueue?.data?.data?.length > 0 ? filteredUsersQueue?.data?.data?.map((results, index) => (
            <li onClick={() => handleListClose(results)} id={results._id} key={index} className="cursor-pointer">
              {appliedFilters?.fullname === true && results?.fullname}
              <span>
                &nbsp; {appliedFilters?.department === true && <span className='text-right'>{results?.department}</span>}
                &nbsp; {appliedFilters?.status === true && <span className='text-right'>{results?.status}</span>}
              </span>
            </li>
          )) : <li><span>No result found</span></li>}
        </ul>
      </div>
    )
  }

  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <SearchAndFilter
              searchterm={searchTerm}
              handleSearch={handleSearch}
              filterItem={filterItem}
              handleFilterChange={handleFilterChange}
              handleApplyFilter={handleApplyFilter}
              filterItems={CHECKER_USERS_QUEUE}
              showBadges={showBadges}
              handleClose={handleClose}
              searchView={searchView}
            />
            <button
              type="button"
              className={`${styles.createBtn} btn ml-auto btn-primary`}
              onClick={() => Router.push('/add-new-user')}
            >
              Add
            </button>
          </div>

          {/*UserTable*/}
          {usersQueueRecords?.data && (
            <Table
              tableHeading="Users"
              currentPage={currentPage}
              totalCount={usersQueueRecords?.totalCount}
              setCurrentPage={setCurrentPage}
              columns={tableColumns}
              data={usersQueueRecords?.data}
              tableHooks={tableHooks}
              pageLimit={pageLimit}
              setPageLimit={setPageLimit}
              handleSort={handleSort}
              sortByState={sortByState}
              serverSortEnabled={true}
              totalCountEnable={true}
            />
          )}
        </div>
      </div>

      <DownloadMasterBar btnName="Download" />
    </>
  );
};

export default index;
