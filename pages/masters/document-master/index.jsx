import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetDocumentMasterQueueRecords, FilterDocumentMasterQueue } from '../../../src/redux/masters/action';
import SearchAndFilter from '../../../src/components/SearchAndFilter';
import _, { isUndefined } from 'lodash';
import { MASTERS_DOCUMENT_MASTER_QUEUE } from '../../../src/data/constant';
import slugify from 'slugify';

function Index() {
    const dispatch = useDispatch();
    const { documentMasterQueueRecords, filteredDocumentMasterQueue } = useSelector((state) => state.MastersData);

    const [currentPage, setCurrentPage] = useState(0);

    const [pageLimit, setPageLimit] = useState(10);
    const [openList, setOpenList] = useState(true);
    const [filterQuery, setFilterQuery] = useState('');
    const [sortByState, setSortByState] = useState({
        column: '',
        order: null,
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState(filteredDocumentMasterQueue);
    const [filterItem, setFilterItem] = useState({ module: true });
    const [appliedFilters, setAppliedFilters] = useState({ module: true });
    const [showBadges, setShowBadges] = useState([]);

    const delayedQuery = useCallback(
        _.debounce((q) => dispatch(FilterDocumentMasterQueue(`${q}`)), 1000),
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
        if (columnName === 'document-name') columnName = 'documentName';
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
        dispatch(GetDocumentMasterQueueRecords(`?page=${currentPage}&limit=${pageLimit}&column=${columnName}&order=${sortOrder}${filterQuery}`));
    };




    useEffect(() => {
        if (window) {
            sessionStorage.setItem('loadedPage', 'Master');
            sessionStorage.setItem('loadedSubPage', `Document-Master`);
            sessionStorage.setItem('openList', 6);
        }
    }, []);

    useEffect(() => {
        dispatch(setPageName('document-master'));
        dispatch(setDynamicName(null));
    });

    useEffect(() => {
        dispatch(GetDocumentMasterQueueRecords(`?page=${currentPage}&limit=${pageLimit}${filterQuery}`));
    }, [dispatch, currentPage, pageLimit]);

    useEffect(() => {
        if (filteredDocumentMasterQueue) setFilter(filteredDocumentMasterQueue);
    }, [filteredDocumentMasterQueue]);

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

        dispatch(GetDocumentMasterQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));

        setShowBadges([...showBadges]);
    };

    const handleListClose = (result) => {
        const badgesItems = [];
        const filterItemData = Object.keys(appliedFilters);

        let query = '';

        filterItemData.map((val) => {
            if (appliedFilters[val]) {
                if (val === 'module') {
                    result?.Module && badgesItems.push({ key: val, displayVal: result?.Module });
                    query = query + `&${val}=${slugify(result?.Module, { lower: false })}`;
                }
            }
        });

        setFilterQuery(query);

        dispatch(GetDocumentMasterQueueRecords(`?page=${currentPage}&limit=${pageLimit}${query}`));

        setOpenList(false);
        setShowBadges(badgesItems);
    };

    const searchView = () => {
        return (
            filter && openList && searchTerm?.length > 3 &&
            <div className='searchResults'>
                <ul>
                    {filteredDocumentMasterQueue?.data?.documentFilteredData?.length > 0 ? filteredDocumentMasterQueue?.data?.documentFilteredData?.map((results, index) => (
                        <li onClick={() => handleListClose(results)} id={results._id} key={results._id} className="cursor-pointer">
                            {appliedFilters?.module === true && results?.Module}
                        </li>
                    )) : <li><span>No result found</span></li>}
                </ul>
            </div>
        )
    }



    const tableColumns = useMemo(() => [
        {
            Header: 'Module',
            accessor: 'Module',
        },
        {
            Header: 'Document Name',
            accessor: 'Document_Name',
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

    const handleRoute = (documentMasterData) => {
        sessionStorage.setItem('documentMasterId', documentMasterData?._id);
        sessionStorage.setItem('documentMasterModuleName', documentMasterData?.Module);
        dispatch(setDynamicName(documentMasterData?.Module));
        Router.push('/master/document-master/id');
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
                        <h1 className={styles.heading}>Document Master</h1>
                    </div>
                    <div className={`${styles.filter} d-flex align-items-center flex-grow-1`}>
                        <SearchAndFilter
                            searchterm={searchTerm}
                            handleSearch={handleSearch}
                            filterItem={filterItem}
                            handleFilterChange={handleFilterChange}
                            handleApplyFilter={handleApplyFilter}
                            filterItems={MASTERS_DOCUMENT_MASTER_QUEUE}
                            showBadges={showBadges}
                            handleClose={handleClose}
                            searchView={searchView}
                        />
                        <button
                            type="button"
                            className={`${styles.createBtn} btn ml-auto btn-primary`}
                            onClick={() => Router.push('/add-document-master')}
                        >
                            Add
                        </button>
                    </div>
                </div>

                {/* Queue Table */}
                {/* {documentMasterQueueRecords?.data && ( */}
                <Table
                    tableHeading="Document Master"
                    currentPage={currentPage}
                    totalCount={documentMasterQueueRecords?.total}
                    setCurrentPage={setCurrentPage}
                    tableHooks={tableHooks}
                    columns={tableColumns}
                    data={documentMasterQueueRecords?.data}
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
    );
}


export default Index;
