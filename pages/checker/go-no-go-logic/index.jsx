import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';

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

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `Go No Go Logic`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-go-no-go-logic123'));
    dispatch(setDynamicName(null));
  });

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
        <Table
          tableHeading="Go No Go Logic"
          currentPage={currentPage}
          totalCount={mockData?.total}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={mockData?.data || []}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          totalCountEnabled={true}
        />
      </div>
    </div>
  );
}

export default Index;
