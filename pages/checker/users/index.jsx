import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';

const mockData = {
  "data": [
    {
      "status": "USERMASTERPENDINGCHECKER",
      "_id": "639c26f040f27f42760713b4",
      "profileDetails": {
        "_id": "639c26f040f27f42760713b5",
        "userType": "Internal",
        "companyName": "Somani",
        "fullName": "John Doe",
        "userName": "John",
        "userRole": "Lead",
        "status": false,
        "officialEmailId": "JohnDoe@gmail.com"
      },
      "professionalDetails": {
        "_id": "639c26f040f27f42760713b6",
        "company": [
          {
            "companyBranch": [
              "del"
            ],
            "_id": "639c26f040f27f42760713b7",
            "companyName": "success"
          }
        ],
        "userRole": "abc",
        "businessBranch": "trade",
        "businessName": "trading",
        "department": "test"
      },
      "company": "6347ff0147019a00212dbe34",
      "order": "6347ff0147019a00212dbe38",
      "document": [
        {
          "deleted": false,
          "name": "test",
          "path": "/user-uploaded/docs/1671175635874_abc.pdf",
          "format": "application/pdf",
          "uploadedBy": "62fc856c15027f0021336e1e",
          "date": "2022-12-16T08:06:08.189Z"
        }
      ],
      "keyAddresses": [],
      "createdAt": "2022-12-16T08:06:08.193Z",
      "updatedAt": "2022-12-16T08:06:08.193Z",
      "__v": 0
    },
    {
      "status": "USERMASTERPENDINGCHECKER",
      "_id": "63b40af1a69dc611f405e7e8",
      "profileDetails": {
        "_id": "639acddd7220024dcfc0ce29",
        "userType": "Internal",
        "companyName": "Somani",
        "fullName": "Aman Verma",
        "userName": "Aman",
        "userRole": "Lead",
        "status": true,
        "officialEmailId": "asW@gmail.com"
      },
      "professionalDetails": {
        "_id": "639acddd7220024dcfc0ce2a",
        "company": [
          {
            "companyBranch": [
              "del"
            ],
            "_id": "639acddd7220024dcfc0ce2b",
            "companyName": "success"
          }
        ],
        "userRole": "abc",
        "businessBranch": "trade",
        "businessName": "trading",
        "department": "finance"
      },
      "company": "6347ff0147019a00212dbe34",
      "order": "6347ff0147019a00212dbe38",
      "keyAddresses": [],
      "createdAt": "2022-12-15T07:33:49.792Z",
      "updatedAt": "2022-12-15T07:33:49.792Z",
      "__v": 0,
      "document": []
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
      sessionStorage.setItem('loadedSubPage', `Users`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-users'));
    dispatch(setDynamicName(null));
  });

  const tableColumns = useMemo(() => [
    {
      Header: 'User ID',
      accessor: 'profileDetails.officialEmailId',
      disableSortBy: true,
    },
    {
      Header: 'Full Name',
      accessor: 'profileDetails.fullName',
      disableSortBy: true,
    },
    {
      Header: 'Submitted On',
      accessor: 'createdAt',
      Cell: ({ value }) => value?.slice(0, 10)
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

  const handleRoute = (user) => {
    sessionStorage.setItem('checkeruserId', user?._id);
    dispatch(setDynamicName(user?.profileDetails?.fullName));
    Router.push('/checker/users/id');
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
            <h1 className={styles.heading}>Users</h1>
          </div>
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Users"
          currentPage={currentPage}
          totalCount={mockData?.total}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={mockData?.data || []}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
        />
      </div>
    </div>
  );
}

export default Index;
