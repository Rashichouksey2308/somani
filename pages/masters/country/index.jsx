import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetMasterCountryQueueRecords, FilterCountryQueue } from '../../../src/redux/masters/action';
import SearchAndFilter from '../../../src/components/SearchAndFilter';
import _, { isUndefined } from 'lodash';
import { MASTERS_COUNTRY_MASTER_QUEUE } from '../../../src/data/constant';
import slugify from 'slugify';
function Index() {
    const dispatch = useDispatch();
    const { countryQueueRecords, filteredCountryQueue } = useSelector((state) => state.MastersData);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit, setPageLimit] = useState(10);
    const [openList, setOpenList] = useState(true);
    const [filterQuery, setFilterQuery] = useState('');
    const [sortByState, setSortByState] = useState({
        column: '',
        order: null,
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState(filteredCountryQueue);
    const [filterItem, setFilterItem] = useState({ country: true });
    const [appliedFilters, setAppliedFilters] = useState({ country: true });
    const [showBadges, setShowBadges] = useState([]);
    const delayedQuery = useCallback(
        _.debounce((q) => dispatch(FilterCountryQueue(`${q}`)), 1000),
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
    const handleSort = (column) => {
        let columnName = slugify(column.Header, { lower: true });
        if (columnName === 'approved-date') columnName = 'approvalDate';
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
        dispatch(GetMasterCountryQueueRecords(`?page=${currentPage}&limit=${pageLimit}&column=${columnName}&order=${sortOrder}${filterQuery}`));
    };
    useEffect(() => {
        if (window) {
            sessionStorage.setItem('loadedPage', 'Master');
            sessionStorage.setItem('loadedSubPage', `Country`);
            sessionStorage.setItem('openList', 6);
        }
    }, []);
    useEffect(() => {
        dispatch(setPageName('master-country'));
        dispatch(setDynamicName(null));
    });
    useEffect(() => {
        dispatch(GetMasterCountryQueueRecords(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
    }, [dispatch, currentPage, pageLimit]);
    useEffect(() => {
        if (filteredCountryQueue) setFilter(filteredCountryQueue);
    }, [filteredCountryQueue]);
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
        dispatch(GetMasterCountryQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));
        setShowBadges([...showBadges]);
    };
    const handleListClose = (result) => {
        const badgesItems = [];
        const filterItemData = Object.keys(appliedFilters);
        let query = '';
        filterItemData.map((val) => {
            if (appliedFilters[val]) {
                if (val === 'country') {
                    result?.Country && badgesItems.push({ key: val, displayVal: result?.Country });
                    query = query + `&${val}=${slugify(result?.Country, { lower: false })}`;
                }
                if (val === 'status') {
                    result?.Status && badgesItems.push({ key: val, displayVal: result?.Status });
                    query = query + `&${val}=${slugify(result?.Status, { lower: false })}`;
                }
            }
        });
        setFilterQuery(query);
        dispatch(GetMasterCountryQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));
        setOpenList(false);
        setShowBadges(badgesItems);
    };
    const searchView = () => {
        return (
            filter && openList && searchTerm?.length > 3 &&
            <div className='searchResults'>
                <ul>
                    {filteredCountryQueue?.data?.countryMasterFilteredData?.length > 0 ? filteredCountryQueue?.data?.countryMasterFilteredData?.map((results, index) => (
                        <li onClick={() => handleListClose(results)} id={results._id} key={results._id} className="cursor-pointer">
                            {appliedFilters?.country === true && results?.Country}
                            <span>
                                &nbsp; {appliedFilters?.status === true && <span className='text-right'>{results?.Status}</span>}
                            </span>
                        </li>
                    )) : <li><span>No result found</span></li>}
                </ul>
            </div>
        )
    }
    const tableColumns = useMemo(() => [
        {
            Header: 'Country',
            accessor: 'Country',
            Cell: ({ cell: { value }, row: { original } }) => (
                <span className='cursor-pointer font-weight-bold text-primary'
                    onClick={() => {
                        handleRoute(original);
                    }}
                >
                    {value}
                </span>
            ),
        },
        {
            Header: 'Status',
            accessor: 'Approved',
            disableSortBy: true,
            Cell: ({ cell: { value }, row: { original } }) => (
                <ToggleSwitch data={original} />
            ),
        },
        {
            Header: 'Approved Date',
            accessor: 'Approval_Date',
            Cell: ({ value }) => value.slice(0, 10)
        },
    ]);
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
    const handleRoute = (countryMasterData) => {
        sessionStorage.setItem('countryMasterId', countryMasterData?._id);
        sessionStorage.setItem('countryMasterModuleName', countryMasterData?.Module);
        dispatch(setDynamicName(countryMasterData?.Module));
        Router.push('/master/country-master/id');
    };
    return (
        <div className="container-fluid p-0 border-0">
            <div className={styles.container_inner}>
                <div className={`${styles.filter} d-flex align-items-center`}>
                    <div className={`${styles.head_header} align-items-center`}>
                        <img
                            className={`${styles.arrow} mr-2 image_arrow img-fluid`}
                            src="/static/keyboard_arrow_right-3.svg"
                            alt="ArrowRight"
                        />
                        <h1 className={styles.heading}>Country</h1>
                    </div>
                    <div className={`${styles.filter} d-flex align-items-center flex-grow-1`}>
                        <SearchAndFilter
                            searchterm={searchTerm}
                            handleSearch={handleSearch}
                            filterItem={filterItem}
                            handleFilterChange={handleFilterChange}
                            handleApplyFilter={handleApplyFilter}
                            filterItems={MASTERS_COUNTRY_MASTER_QUEUE}
                            showBadges={showBadges}
                            handleClose={handleClose}
                            searchView={searchView}
                        />
                        <button
                            type="button"
                            className={`${styles.createBtn} btn ml-auto btn-primary`}
                            onClick={() => Router.push('/masters/country/add-new-country')}
                        >
                            Add
                        </button>
                    </div>
                </div>
                {/* Queue Table */}
                {countryQueueRecords?.data && (
                    <Table
                        tableHeading="Country"
                        currentPage={currentPage}
                        totalCount={countryQueueRecords?.total}
                        setCurrentPage={setCurrentPage}
                        tableHooks={tableHooks}
                        columns={tableColumns}
                        data={countryQueueRecords?.data}
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
    );
}

export const ToggleSwitch = ({ data }) => {
    return (
        <div className={`${styles.tw_toggle}`}>
            <input type="radio" className={styles.toggle_left} name={`toggle_${data?._id}`} value="true" checked={data?.Status === 'Approved' ? true : false} />
            <label className={`${styles.toggle} ${styles.toggle_label_left}`}>
                <img src="/static/check.svg" className={`${styles.toggle_check} img_fluid`} alt="check" />
            </label>
            <input className={styles.toggle_between} type="radio" name={`toggle_${data?._id}`} value="-1" checked={isUndefined(data?.Status)} />
            <label className={`${styles.toggle} ${styles.toggle_label_between}`}></label>
            <input type="radio" className={styles.toggle_right} name={`toggle_${data?._id}`} value="false" checked={data?.Status === 'Not Approved' ? true : false} />
            <label className={`${styles.toggle} ${styles.toggle_label_right}`}>
                <img src="/static/close-b.svg" className={`${styles.toggle_close} img_fluid`} alt="close" />
            </label>
            <span></span>
        </div>
    )
};

export default Index;