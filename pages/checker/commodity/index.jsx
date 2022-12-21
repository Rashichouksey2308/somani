import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';
import { GetCommodityPickupRecords } from '../../../src/redux/checker/action';

function Index() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `Commodity`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-commodity'));
    dispatch(setDynamicName(null));
  });

  useEffect(() => {
    dispatch(GetCommodityPickupRecords(`?page=${currentPage}&limit=${pageLimit}`));
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
    dispatch(GetCommodityPickupRecords(`?page=${currentPage}&createdAt=${sortByState.order ? '1' : '-1'}`));
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'Commodity',
      accessor: 'Commodity',
      disableSortBy: true,
    },
    {
      Header: 'Chapter Name',
      accessor: 'Chapter_Name',
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


  const { commodityPickupRecords } = useSelector((state) => state.checker);

  const handleRoute = (commodity) => {
    sessionStorage.setItem('checkerCommodityId', commodity?._id);
    sessionStorage.setItem('checkerCommodityName', commodity?.company?.companyName);
    dispatch(setDynamicName(commodity?.company?.companyName));
    Router.push('/checker/commodity/id');
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
            <h1 className={styles.heading}>Commodity</h1>
          </div>
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Commodity"
          currentPage={currentPage}
          totalCount={commodityPickupRecords?.total}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={commodityPickupRecords?.data}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          serverSortEnabled={true}
          totalCountEnable={true}
          handleSort={handleSort}
          sortByState={sortByState}
        />
      </div>
    </div>
  );
}

export default Index;
