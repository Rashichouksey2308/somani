import React, { useState, useEffect, useMemo } from 'react';
import styles from './index.module.scss';
import Filter from '../../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { SearchLeads } from 'redux/buyerProfile/action';
import { GetMasterUsersQueueRecords } from '../../../src/redux/masters/action';
import DownloadMasterBar from '../../../src/components/DownloadMasterBar';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import Router from 'next/router';
import slugify from 'slugify';
import ToggleSwitch from '../../../src/components/ToggleSwitch';

const index = () => {
  const dispatch = useDispatch();
  const [serachterm, setSearchTerm] = useState('');
  const { searchedLeads } = useSelector((state) => state.order);
  const { usersQueueRecords } = useSelector((state) => state.MastersData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
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
    dispatch(GetLcModule(`?company=${id}`));
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
      accessor: 'profileDetails._id',
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
      Cell: ({ value }) => <ToggleSwitch status={value} />,
    },
  ], [usersQueueRecords?.data?.data]);

  useEffect(() => {
    dispatch(GetMasterUsersQueueRecords(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
  }, [dispatch, currentPage, pageLimit]);

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
              onClick={() => Router.push('/add-new-user')}
            >
              Add
            </button>
          </div>

          {/*UserTable*/}
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
        </div>
      </div>

      <DownloadMasterBar btnName="Download" />
    </>
  );
};

export default index;
