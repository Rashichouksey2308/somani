import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetLetterOfCreditPickupRecords } from '../../../src/redux/checker/action';

function Index() {
  const dispatch = useDispatch();
  const { letterOfCreditPickupRecords } = useSelector((state) => state.checker);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `LC`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-letter-of-credit'));
    dispatch(setDynamicName(null));
  });

  useEffect(() => {
    dispatch(GetLetterOfCreditPickupRecords(`?page=${currentPage}&limit=${pageLimit}`));
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
    dispatch(GetLetterOfCreditPickupRecords(`?page=${currentPage}&limit=${pageLimit}&createdAt=${sortByState.order ? '1' : '-1'}`));
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'Order ID',
      accessor: 'order.orderId',
      disableSortBy: true,
    },
    {
      Header: 'Buyer Name',
      accessor: 'company.companyName',
      disableSortBy: true,
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
              <a className="cursor-pointer"
              onClick={() =>
                handleRoute(row?.original)
              }
              >
                <Image height="20px" width="20px" src="/static/mode_edit.svg" alt="Edit" />
              </a>
            </div>
          );
        },
      },
    ]);
  };

  const handleRoute = (lcModule) => {
    sessionStorage.setItem('checkerletterOfCreditId', lcModule?._id);
    sessionStorage.setItem('checkerletterOfCreditCompanyName', lcModule?.company?.companyName);
    dispatch(setDynamicName(lcModule?.company?.companyName));
    Router.push('/checker/letter-of-credit/id');
  };

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>

        {/* Queue Table */}
        <Table
          tableHeading="Letter of Credit"
          currentPage={currentPage}
          totalCount={letterOfCreditPickupRecords?.total}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={letterOfCreditPickupRecords?.data || []}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          serverSortEnabled={true}
          handleSort={handleSort}
          sortByState={sortByState}
          totalCountEnabled={true}
        />
      </div>
    </div>
  );
}

export default Index;
