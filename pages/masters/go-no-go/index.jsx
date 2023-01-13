import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetMasterGoNoGoQueueRecords } from '../../../src/redux/masters/action';
import _, { isUndefined } from 'lodash';
import slugify from 'slugify';
function Index() {
  const dispatch = useDispatch();
  const { GoNoGoQueueRecords } = useSelector((state) => state.MastersData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });

  const handleSort = (column) => {
    let columnName = slugify(column.Header, { lower: true });
    if (columnName === 'version-approval-date') columnName = 'versionApprovalDate';
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
    dispatch(GetMasterGoNoGoQueueRecords(`?page=${currentPage}&limit=${pageLimit}&column=${columnName}&order=${sortOrder}`));
  };
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Master');
      sessionStorage.setItem('loadedSubPage', `Go No Go Logic`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);
  useEffect(() => {
    dispatch(setPageName('master-go-no-go'));
    dispatch(setDynamicName(null));
  });
  useEffect(() => {
    dispatch(GetMasterGoNoGoQueueRecords(`?page=${currentPage}&limit=${pageLimit}`));
  }, [dispatch, currentPage, pageLimit]);

  const tableColumns = useMemo(() => [
    {
      Header: 'Version',
      accessor: 'version',
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
      Header: 'Version Approval Date',
      accessor: 'versionApprovalDate',
      Cell: ({ value }) => (<span>{value?.slice(0, 10)}</span>)
    },
    {
      Header: 'Status',
      accessor: 'verification.status',
      Cell: ({ value }) => <span><img src={value === 'Pending' ? '/static/notice.svg' : value === 'Active' ? '/static/done.svg' : value === 'InActive' && '/static/inactive.svg'} /> {value}</span>,
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
          return row?.original?.verification.status !== 'Inactive' && <div className={`${styles.edit_image} img-fluid badge badge-outline`}>
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
  const handleRoute = (GoNoGoMasterData) => {
    sessionStorage.setItem('GoNoGoMasterId', GoNoGoMasterData?._id);
    Router.push('/masters/go-no-go/id');
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
            <h1 className={styles.heading}>Go No Go Logic</h1>
          </div>
        </div>
        {/* Queue Table */}
        {GoNoGoQueueRecords?.data && (
          <Table
            tableHeading="Go No Go Logic"
            currentPage={currentPage}
            totalCount={GoNoGoQueueRecords?.totalCount}
            setCurrentPage={setCurrentPage}
            tableHooks={tableHooks}
            columns={tableColumns}
            data={GoNoGoQueueRecords?.data}
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

export default Index;