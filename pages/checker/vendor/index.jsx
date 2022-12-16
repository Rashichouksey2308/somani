import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetVendorPickupRecords } from '../../../src/redux/checker/action';

function Index() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const [pageLimit, setPageLimit] = useState(10);


  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `Vendor`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-vendor'));
    dispatch(setDynamicName(null));
  });

  useEffect(() => {
    // TODO: create action for GetCommodityPickupRecords
    dispatch(GetVendorPickupRecords(`?page=${currentPage}&limit=${pageLimit}`));
  }, [dispatch, currentPage, pageLimit]);


  const tableColumns = useMemo(() => [
    {
      Header: 'Vendor Type',
      accessor: 'vendorDetails.vendorType',
    },
    {
      Header: 'Vendor Name',
      accessor: 'vendorDetails.vendor',
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
      Header: 'Submitted On',
      accessor: 'updatedAt',
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

  const { vendorPickupRecords } = useSelector((state) => state.checker);

  console.log("vendorPickupRecords in component: ", vendorPickupRecords);
// TODO: need to change according to data
  const handleRoute = (vendor) => {
    sessionStorage.setItem('checkerVendorId', vendor?._id);
    sessionStorage.setItem('checkerVendorName', vendor?.company?.companyName);
    dispatch(setDynamicName(vendor?.company?.companyName));
    Router.push('/checker/vendor/id');
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
            <h1 className={styles.heading}>Vendor</h1>
          </div>
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Checker Vendor"
          currentPage={currentPage}
          totalCount={vendorPickupRecords?.totalCount}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={vendorPickupRecords?.data}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          serverSortEnabled={false}
        />
      </div>
    </div>
  );
}

export default Index;
