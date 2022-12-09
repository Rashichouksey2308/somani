import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetInspectionPickupRecords } from '../../../src/redux/checker/action';

function Index() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const [pageLimit, setPageLimit] = useState(10);


  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `Inspection`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-inspection'));
    dispatch(setDynamicName(null));
  });

  useEffect(() => {
    dispatch(GetInspectionPickupRecords(`?page=${currentPage}&limit=${pageLimit}`));
  }, [dispatch, currentPage, pageLimit]);


  const tableColumns = useMemo(() => [
    {
      Header: 'Order Id',
      accessor: 'order._id',
    },
    {
      Header: 'Buyer Name',
      accessor: 'company.companyName',
      Cell: ({ cell: { value }, row: { original } }) => (
        <span
          onClick={() => {
            handleRoute(original);
          }}
        >
          {value}
        </span>
      ),
    },
    {
      Header: 'Submitted At',
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

  const { inspectionPickupRecords } = useSelector((state) => state.checker);

  const handleRoute = (inspection) => {
    sessionStorage.setItem('checkerInspectionId', inspection?._id);
    sessionStorage.setItem('checkerInspectionName', inspection?.company?.companyName);
    dispatch(setDynamicName(inspection?.company?.companyName));
    Router.push('/checker/inspection/id');
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
            <h1 className={styles.heading}>Inspection</h1>
          </div>
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Checker Inspection"
          currentPage={currentPage}
          totalCount={inspectionPickupRecords?.totalCount}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={inspectionPickupRecords?.data}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          serverSortEnabled={false}
        />
      </div>
    </div>
  );
}

export default Index;
