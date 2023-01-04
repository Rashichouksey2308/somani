import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetCreditCAMPickupRecords } from '../../../src/redux/checker/action';

function Index() {
  const dispatch = useDispatch();
  const { creditCAMPickupRecords } = useSelector((state) => state.checker);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `Credit CAM`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-credit-cam'));
    dispatch(setDynamicName(null));
  });

  useEffect(() => {
    dispatch(GetCreditCAMPickupRecords(`?page=${currentPage}&limit=${pageLimit}`));
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
    dispatch(GetCreditCAMPickupRecords(`?page=${currentPage}&limit=${pageLimit}&createdAt=${sortByState.order ? '1' : '-1'}`));
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'Company Name',
      accessor: 'company.companyName',
      disableSortBy: true,
    },
    {
      Header: 'Created By',
      accessor: 'createdBy.fName',
      disableSortBy: true,
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

  const handleRoute = (creditCAM) => {
    sessionStorage.setItem('checkerCreditCAMId', creditCAM?._id);
    sessionStorage.setItem('checkerCreditCAMName', creditCAM?.company?.companyName);
    dispatch(setDynamicName(creditCAM?.company?.companyName));
    Router.push('/checker/credit-cam/id');
  };

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>

        {/* Queue Table */}
        <Table
          tableHeading="Credit CAM"
          currentPage={currentPage}
          totalCount={creditCAMPickupRecords?.totalCount}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={creditCAMPickupRecords?.data || []}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          serverSortEnabled={true}
          handleSort={handleSort}
          sortByState={sortByState}
        />
      </div>
    </div>
  );
}

export default Index;
