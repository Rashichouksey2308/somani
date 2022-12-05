/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import { useDebounce } from 'use-debounce';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBuyer, GetOrderLeads, GetOrders } from '../../src/redux/registerBuyer/action';
import { SearchLeads, FilterLeads } from '../../src/redux/buyerProfile/action.js';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import Filter from '../../src/components/Filter';
import FilterBadge from '../../src/components/FilterBadge';
import QueueStats from '../../src/components/QueueStats';
import Table from '../../src/components/Table';
import QueueStatusSymbol from '../../src/components/QueueStatusSymbol';
import slugify from 'slugify';

// import { getPincodes } from '../../src/redux/masters/action';

function Index() {
  const { allBuyerList, getOrderLeads } = useSelector((state) => state.buyer);
  const { searchedLeads, filteredLeads } = useSelector((state) => state.order);
  const [searchterm, setSearchTerm] = useState('');
  const [value] = useDebounce(searchterm, 50000);
  const [filter, setFilter] = useState(filteredLeads);
  const [filterItem, setFilterItem] = useState({});
  const [showBadges, setShowBadges] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const handleClose = (index) => {
    showBadges.splice(index, 1);
    setShowBadges([...showBadges]);
    setOpen(false);
  };

  const [openList, setOpenList] = useState(true);
  const handleListClose = () => {
    setOpenList(false);
    setShowBadges(searchView().badgesItems);
  };

  useEffect(() => {
    dispatch(GetAllBuyer(`?page=${currentPage}&limit=${pageLimit}`));
  }, [dispatch, currentPage, pageLimit]);

  useEffect(() => {
    dispatch(setPageName('leads'));
    dispatch(setDynamicName(null));
  });
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Leads');
      sessionStorage.setItem('loadedSubPage', null);
      sessionStorage.setItem('openList', 1);
    }
  }, []);

  useEffect(() => {
    dispatch(GetOrderLeads());
  }, [dispatch]);

  const handleRoute = (buyer) => {
    sessionStorage.setItem('orderId', buyer._id);
    sessionStorage.setItem('companyID', buyer.company._id);
    dispatch(GetOrders(`?company=${buyer.company._id}`));
    setTimeout(() => {
      Router.push('/order-list');
    }, 500);
  };

  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setOpenList(true);
    setSearchTerm(query);

    let queryParams = '';
    if (Object.keys(filterItem).length !== 0) {
      Object.keys(filterItem).forEach((item) => {
        const isTrue = filterItem[item];
        if (isTrue) {
          queryParams += `${item}=${query}&`;
        }
      });
      dispatch(FilterLeads(`${queryParams}`));
    }
  };

  const handleApplyFilter = () => {
    setSearch(false);
  };
  
  const handleBoolean = (value) => {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
    return value;
  };

  useEffect(() => {
    if (!isFilterApply()) {
      setSearchTerm('');
      setShowBadges([]);
      dispatch(GetAllBuyer(`?page=${currentPage}&limit=${pageLimit}`));
      dispatch(FilterLeads('status=" "'));
    }
  }, [JSON.stringify(filterItem)]);
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;

    setFilterItem((prevState) => ({
      ...prevState,
      [name]: handleBoolean(checked.toString()),
    }));
    setSearch(false);
  };

  const isFilterApply = () => {
    return Object.values(filterItem).some((val) => {
      return val;
    });
  };

  const handleSort = (column) => {
    let columnName = slugify(column.Header, { lower: true });
    let sortOrder = '';
    if (column.id === sortByState.column) {
      setSortByState((state) => {
        let updatedOrder = !state.order;
        sortOrder = updatedOrder ? 'asc' : 'desc';
        return { ...state, order: updatedOrder };
      });
    } else {
      let data = { column: column.id, order: column.isSortedDesc };
      sortOrder = data.order ? 'asc' : 'desc';
      setSortByState(data);
    }
    dispatch(GetAllBuyer(`?page=${currentPage}&column=${columnName}&order=${sortOrder}`));
  };

  const statLeadsData = {
    all: getOrderLeads?.totalCount,
    approved: getOrderLeads?.approved,
    review: getOrderLeads?.reviewed,
    rejected: getOrderLeads?.rejected,
    pending: getOrderLeads?.pending,
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'Customer Id',
      accessor: 'company.customerId',
    },
    {
      Header: 'Buyer Name',
      accessor: 'company.companyName',
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
      Header: 'Created By',
      accessor: 'createdBy.userRole',
      Cell: ({ value }) => (value ? value : 'RM'),
    },
    {
      Header: 'Username',
      accessor: 'createdBy.fName',
    },
    {
      Header: 'Existing Customer',
      accessor: 'existingCustomer',
      Cell: ({ value }) => {
        return value ? 'Yes' : 'No';
      },
    },
    {
      Header: 'Status',
      accessor: 'queue',
      disableSortBy: true,
      Cell: ({ value }) => <QueueStatusSymbol status={value} />,
    },
  ]);

  const filterTableColumns = useMemo(() => [
    {
      Header: 'Customer Id',
      accessor: 'company.customerId',
    },
    {
      Header: 'Buyer Name',
      accessor: 'company.companyName',
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
      Header: 'Created By',
      accessor: 'createdBy.userRole',
      Cell: ({ value }) => (value ? value : 'RM'),
    },
    {
      Header: 'Username',
      accessor: 'createdBy.fName',
    },
    {
      Header: 'Existing Customer',
      accessor: 'existingCustomer',
      Cell: ({ value }) => {
        return value ? 'Yes' : 'No';
      },
    },
    {
      Header: 'Status',
      accessor: 'cam.status',
      disableSortBy: true,
      Cell: ({ value }) => <QueueStatusSymbol status={value} />,
    },
  ]);

  useEffect(() => {
    if (filteredLeads) setFilter(filteredLeads);
  }, [filteredLeads]);
  const searchView = () => {
    const badgesItems = [];
    const filterItemData = Object.keys(filterItem);

    const listView = filterItemData.map((val) => {
      if (filterItem[val]) {
        if (val === 'status') {
          badgesItems.push({ key: val, displayVal: filter.data[0].cam[val] });

          return <span>{filter.data[0].cam[val]}</span>;
        }
        badgesItems.push({ key: val, displayVal: filter.data[0][val] });

        return <span>{filter.data[0][val]}</span>;
      }
    });
    return { listView, badgesItems: badgesItems.filter((val) => val.displayVal) };
  };
  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <div className={styles.search}>
              <div className="input-group">
                <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                  <img src="/static/search.svg" className="img-fluid" alt="Search" />
                </div>
                <input
                  value={searchterm}
                  onChange={handleSearch}
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl `}
                  placeholder="Search"
                  disabled={!isFilterApply()}
                />
              </div>
              {filter && openList && (
                <div className={styles.searchResults} onClick={handleListClose}>
                  <div>{searchView().listView}</div>
                </div>
              )}
            </div>
            <Filter {...{ filterItem, handleFilterChange, handleApplyFilter }} />

            {showBadges.length > 0 &&
              showBadges.map((val, index) => {
                return <FilterBadge label={val.displayVal} onClose={() => handleClose(index)} />;
              })}
            {/* <a href="#" className={`${styles.filterList} filterList`}>
              Ramesh Shetty
              <img src="/static/close.svg" className="img-fluid" alt="Close" />
            </a>
            
            <a href="#" className={`${styles.filterList} filterList`}>
              Raj Traders
              <img src="/static/close.svg" className="img-fluid" alt="Close" />
            </a> */}

            <button
              type="button"
              className={`${styles.btnPrimary} btn ml-auto btn-primary`}
              onClick={() => Router.push('/leads/12')}
            >
              <span style={{ fontSize: '28px' }}>+</span>
              <span className={`ml-1 mr-2`}>New Customer</span>
            </button>
          </div>

          {/*status Box*/}
          <QueueStats data={statLeadsData} />

          {/*leads table*/}
          {allBuyerList?.data?.data && !filteredLeads?.data && (
            <Table
              tableHeading="Leads"
              currentPage={currentPage}
              totalCount={allBuyerList?.data?.totalCount}
              setCurrentPage={setCurrentPage}
              columns={tableColumns}
              data={allBuyerList?.data?.data}
              pageLimit={pageLimit}
              setPageLimit={setPageLimit}
              handleSort={handleSort}
              sortByState={sortByState}
              serverSortEnabled={true}
            />
          )}
          {filteredLeads?.data && (
            <Table
              tableHeading="Leads"
              currentPage={currentPage}
              totalCount={filteredLeads?.data?.totalCount}
              setCurrentPage={setCurrentPage}
              columns={filterTableColumns}
              data={filteredLeads?.data}
              pageLimit={pageLimit}
              setPageLimit={setPageLimit}
              handleSort={handleSort}
              sortByState={sortByState}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
