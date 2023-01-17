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
import Buyername from '../../src/components/VTwo/BuyerName';
import CommodityDropdown from '../../src/components/VTwo/CommodityDropdown';
import StatusDropDown from '../../src/components/VTwo/StatusDropDown';

import slugify from 'slugify';
import { LEADS_QUEUE_FILTER_ITEMS } from '../../src/data/constant';
import Select from 'react-select';

function Index() {
  const dispatch = useDispatch();

  const { updatedBuyerList, getOrderLeads } = useSelector((state) => state.buyer);
  const initialSelectOptionsState = {
    companyName: '',
    commodity: '',
    status: '',
  };
  const { filteredLeads } = useSelector((state) => state.order);
  const [searchterm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState(filteredLeads);
  const [filterItem, setFilterItem] = useState();
  const [appliedFilters, setAppliedFilters] = useState({ company_name: true });
  const [selectOptions, setSelectOptions] = useState(initialSelectOptionsState);
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
  }, [dispatch, selectOptions]);

  useEffect(() => {
    SearchAndFilter;
    if (filteredLeads) setFilter(filteredLeads);
  }, [filteredLeads]);

  useEffect(() => {
    let query = '';
    if (selectOptions?.companyName?.value) {
      query = query + `&company_name=${selectOptions?.companyName?.value}`;
    }
    if (selectOptions.commodity) {
      query = query + `&commodity=${selectOptions?.commodity?.value}`;
    }
    if (selectOptions.status) {
      query = query + `&status=${selectOptions?.status?.value}`;
    }
    setFilterQuery(query);
    dispatch(GetAllUpdatedBuyer(`?page=${currentPage}&limit=${pageLimit}${query}`));
  }, [selectOptions, filterQuery, currentPage, pageLimit]);

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
    setAppliedFilters(filterSearchAndFilterItem);
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

  const handleSort = (column) => {
    let columnName = slugify(column.Header, { lower: true });
    if (columnName === 'commodity') {
      columnName = 'commodity-sort';
    }
    let sortOrder = '';
    if (column.id === sortByState.column) {
      setSortByState((state) => {
        let updatedOrder = !state.order;
        sortOrder = updatedOrder ? '-1' : '1';
        return { ...state, order: updatedOrder };
      });
    } else {
      let data = { column: column.id, order: column.isSortedDesc };
      sortOrder = data.order ? '-1' : '1';
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
      Cell: ({ value }) => `${value.toLocaleString('en-US')} USD`,
    },
    {
      Header: 'Creation Date',
      accessor: 'createdAt',
      Cell: ({ value }) => value.slice(0, 10),
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
  return (
    <>
      {' '}
      <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
          <div className="">
            {/*filter*/}
            <div className={`${styles.filter} d-flex align-items-center`}>
              <SearchAndFilter
                searchterm={searchterm}
                handleSearch={handleSearch}
                filterItem={filterItem}
                handleFilterChange={handleFilterChange}
                handleApplyFilter={handleApplyFilter}
                filterItems={LEADS_QUEUE_FILTER_ITEMS}
              />

              {/* selectOptions */}
              <div className={`${styles.searchDropdown} d-flex flex-wrap`}>
                <Buyername SelectOptions={setSelectOptions} value={selectOptions} />
                <CommodityDropdown SelectOptions={setSelectOptions} value={selectOptions} />
                <StatusDropDown SelectOptions={setSelectOptions} value={selectOptions} />
              </div>

              <button
                type="button"
                className={`${styles.btnPrimary} btn ml-auto btn-primary`}
                onClick={() => Router.push('/leads/12')}
              >
                <span style={{ fontSize: '28px' }}>+</span>
                <span className={`ml-1 mr-2`}>New Customer</span>
              </button>
            </div>
          </div>
          {/*status Box*/}
          <QueueStats data={statLeadsData} />
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
                    Showing Page {currentPage + 1} out of {Math.ceil(updatedBuyerList?.data?.totalData / 10)}
                  </span>
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
                    <img src="/static/keyboard_arrow_right-3.svg" alt="arrow left" className="img-fluid" />
                  </a>
                  <a
                    onClick={() => {
                      if (currentPage + 1 < Math.ceil(updatedBuyerList?.data?.totalData / 10)) {
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
            <div className="generic-table">
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

          {/*leads table*/}
        </div>
      </div>
    </>
  );
}

export default Index;
