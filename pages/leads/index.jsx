/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUpdatedBuyer, GetOrderLeads, GetOrders } from '../../src/redux/registerBuyer/action';
import { FilterLeads } from '../../src/redux/buyerProfile/action.js';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import SearchAndFilter from '../../src/components/SearchAndFilter';
import QueueStats from '../../src/components/QueueStats';
import Table from '../../src/components/Table';
import QueueStatusSymbol from '../../src/components/QueueStatusSymbol';
import slugify from 'slugify';
import { LEADS_QUEUE_FILTER_ITEMS } from '../../src/data/constant';

function Index() {
  const dispatch = useDispatch();

  const { updatedBuyerList, getOrderLeads } = useSelector((state) => state.buyer);
  const { filteredLeads } = useSelector((state) => state.order);
  const [searchterm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState(filteredLeads);
  const [filterItem, setFilterItem] = useState({ company_name: true });
  const [appliedFilters, setAppliedFilters] = useState({ company_name: true });
  const [showBadges, setShowBadges] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });
  const [openList, setOpenList] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => {
    dispatch(GetAllUpdatedBuyer(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
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

  useEffect(() => {
    if (!isFilterApply()) {
      setSearchTerm('');
      setShowBadges([]);
      dispatch(GetAllUpdatedBuyer(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
      dispatch(FilterLeads('status=" "'));
    }
  }, [JSON.stringify(filterItem)]);

  useEffect(() => {
    if (filteredLeads) setFilter(filteredLeads);
  }, [filteredLeads]);

  const handleClose = (index) => {
    showBadges.splice(index, 1);

    let query = '';

    showBadges.map((item) => {
      query = query + `&${item?.key}=${slugify(item?.displayVal, { lower: false })}`;
    })

    setFilterQuery(query);

    dispatch(GetAllUpdatedBuyer(`?page=${currentPage}&limit=${pageLimit}${query}`));

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
        else if (val === 'company_name') {
          result?.buyerName && badgesItems.push({ key: val, displayVal: result?.buyerName });
          query = query + `&${val}=${slugify(result?.buyerName, { lower: false })}`;
        }
        else if (val === 'commodity') {
          result?.commodity && badgesItems.push({ key: val, displayVal: result?.commodity });
          query = query + `&${val}=${slugify(result?.commodity, { lower: false })}`;
        }
      }
    });

    setFilterQuery(query);

    dispatch(GetAllUpdatedBuyer(`?page=${currentPage}&limit=${pageLimit}${query}`));

    setOpenList(false);
    setShowBadges(badgesItems);
  };

  const handleRoute = (buyer) => {
    sessionStorage.setItem('orderId', buyer._id);
    sessionStorage.setItem('companyID', buyer.company._id);
    dispatch(GetOrders(`?company=${buyer.company._id}`));
    setTimeout(() => {
      Router.push('/order-list');
    }, 500);
  };

  const delayedQuery = useCallback(
    _.debounce((q) => dispatch(FilterLeads(`${q}`)), 1000),
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

  const handleApplyFilter = () => {
    setAppliedFilters(filterItem);
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

  const isFilterApply = () => {
    return Object.values(filterItem).some((val) => {
      return val;
    });
  };

  const handleSort = (column) => {
    let columnName = slugify(column.Header, { lower: true });
    if (columnName === 'commodity') {
      columnName = 'commodity-sort';
    }
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
    dispatch(GetAllUpdatedBuyer(`?page=${currentPage}&column=${columnName}&order=${sortOrder}${filterQuery}`));
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
      Header: 'Commodity',
      accessor: 'commodity',
    },
    {
      Header: 'Order Value',
      accessor: 'orderValue',
      Cell: ({ value }) => `${(value.toLocaleString('en-US'))} USD`
    },
    {
      Header: 'Creation Date',
      accessor: 'createdAt',
      Cell: ({ value }) => value.slice(0, 10)
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

  const searchView = () => {
    return (
      filter && openList && searchterm.length > 3 &&
      <div className={styles.searchResults}>
        <ul>
          {filteredLeads?.data?.data?.length > 0 ? filteredLeads?.data?.data?.map((results, index) => (
            <li onClick={() => handleListClose(results)} id={results._id} key={index} className="cursor-pointer">
              {appliedFilters?.company_name === true && results?.buyerName}
              <span>
                &nbsp; {appliedFilters?.commodity === true && <span className='text-right'>{results?.commodity}</span>}
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
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>
            <SearchAndFilter
              searchterm={searchterm}
              handleSearch={handleSearch}
              filterItem={filterItem}
              handleFilterChange={handleFilterChange}
              handleApplyFilter={handleApplyFilter}
              filterItems={LEADS_QUEUE_FILTER_ITEMS}
              showBadges={showBadges}
              handleClose={handleClose}
              searchView={searchView}
            />
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
          {updatedBuyerList?.data?.data && (
            <Table
              tableHeading="Leads"
              currentPage={currentPage}
              totalCount={updatedBuyerList?.data?.total}
              setCurrentPage={setCurrentPage}
              columns={tableColumns}
              data={updatedBuyerList?.data?.data}
              pageLimit={pageLimit}
              setPageLimit={setPageLimit}
              handleSort={handleSort}
              sortByState={sortByState}
              serverSortEnabled={true}
              totalCountEnable={false}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
