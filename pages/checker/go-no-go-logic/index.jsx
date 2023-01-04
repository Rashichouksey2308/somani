import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetGoNoGoLogicPickupRecords } from '../../../src/redux/checker/action';

const mockData = {
  "data": [
    {
      "verification": {
        "status": "Active"
      },
      "transactionType": [
        "Import",
        "Export"
      ],
      "typeOfBusiness": [
        "Manufacturer"
      ],
      "_id": "63ad2e5e15e5a038ae6c0db2",
      "minTurnOver": 500000000,
      "minOrderValue": 10000000,
      "daysAllowedInExpectedDateOfShipment": 90,
      "remarks": "second",
      "version": 1.1,
      "createdBy": "62fc856c15027f0021336e1e",
      "lastUpdatedBy": "62fc856c15027f0021336e1e",
      "createdAt": "2022-11-01T12:45:24.924Z",
      "updatedAt": "2022-12-29T06:16:33.586Z",
      "__v": 0,
      "versionApprovalDate": "2022-11-07T12:45:24.924Z",
      "status": "GONOGOPENDINGCHECKER"
    },
    {
      "verification": {
        "status": "Active"
      },
      "transactionType": [
        "Import",
        "Export"
      ],
      "typeOfBusiness": [
        "Manufacturer"
      ],
      "_id": "63ad2e5e15e5a038ae6c0db2",
      "minTurnOver": 500000000,
      "minOrderValue": 10000000,
      "daysAllowedInExpectedDateOfShipment": 90,
      "remarks": "second",
      "version": 1.1,
      "createdBy": "62fc856c15027f0021336e1e",
      "lastUpdatedBy": "62fc856c15027f0021336e1e",
      "createdAt": "2022-11-13T12:45:24.924Z",
      "updatedAt": "2022-12-29T06:16:33.586Z",
      "__v": 0,
      "versionApprovalDate": "2022-11-15T12:45:24.924Z",
      "status": "GONOGOPENDINGCHECKER"
    }
  ],
  "total": 2
};

function Index() {
  const dispatch = useDispatch();
  const { goNoGoLogicPickupRecords } = useSelector((state) => state.checker);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `Go No Go Logic`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-go-no-go-logic'));
    dispatch(setDynamicName(null));
  });

  useEffect(() => {
    dispatch(GetGoNoGoLogicPickupRecords(`?page=${currentPage}&limit=${pageLimit}`));
  }, [dispatch, currentPage, pageLimit]);

  const handleSort = (column) => {
    if (column.id === sortByState.column) {
      setSortByState((state) => {
        let updatedOrder = !state.order;
        return { ...state, order: updatedOrder };
      });
    } else {
      let data = { column: column.id, order: !column.isSortedDesc };
      setSortByState(data);
    }
    dispatch(GetGoNoGoLogicPickupRecords(`?page=${currentPage}&limit=${pageLimit}&createdAt=${sortByState.order ? '1' : '-1'}`));
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'Version',
      accessor: 'version',
      disableSortBy: true,
    },
    {
      Header: 'Version Approval Date',
      accessor: 'versionApprovalDate',
      disableSortBy: true,
      Cell: ({ value }) => value?.slice(0, 10),
    },
    {
      Header: 'Submitted On',
      accessor: 'createdAt',
      Cell: ({ value }) => value?.slice(0, 10),
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
              <a className="cursor-pointer">
                <Image height="20px" width="20px" src="/static/mode_edit.svg" alt="Edit" />
              </a>
            </div>
          );
        },
      },
    ]);
  };

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>

        {/* Queue Table */}
        <Table
          tableHeading="Go No Go Logic"
          currentPage={currentPage}
          totalCount={goNoGoLogicPickupRecords?.total}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={goNoGoLogicPickupRecords?.data || []}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          totalCountEnabled={true}
          serverSortEnabled={true}
          handleSort={handleSort}
          sortByState={sortByState}
        />

      </div>
    </div>
  );
}

export default Index;
