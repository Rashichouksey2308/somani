/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import Filter from '../../../src/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setDynamicName, setDynamicOrder, setPageName } from '../../../src/redux/userData/action';
import { GetAllInspection } from '../../../src/redux/Inspections/action';
import { SearchLeads } from '../../../src/redux/buyerProfile/action';
import _get from 'lodash/get';
import Table from '../../../src/components/Table';
import Image from 'next/image';

function Index() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const [pageLimit, setPageLimit] = useState(10);
  const [sortByState, setSortByState] = useState({
    column: '',
    order: null,
  });


  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Loading, Transit & Unloadinge');
      sessionStorage.setItem('loadedSubPage', `Inspection`);
      sessionStorage.setItem('openList', 3);
    }
  }, []);
  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setSearchTerm(query);
    if (query.length >= 3) {
      dispatch(SearchLeads(query));
    }
  };

  const handleFilteredData = (e) => {
    setSearchTerm('');
    const id = `${e.target.id}`;
    dispatch(GetAllInspection(`?company=${id}`));
  };

  useEffect(() => {
    dispatch(setPageName('inception2'));
    dispatch(setDynamicName(null));
    dispatch(setDynamicOrder(null));
  });

  useEffect(() => {
    dispatch(GetAllInspection(`?page=${currentPage}&limit=7`));
  }, [dispatch, currentPage]);

  const [sorting, setSorting] = useState(1);

  const handleSort = () => {
    if (sorting == -1) {
      dispatch(GetAllInspection(`?page=${currentPage}&limit=7&createdAt=${sorting}`));
      setSorting(1);
    } else if (sorting == 1) {
      dispatch(GetAllInspection(`?page=${currentPage}&limit=7&createdAt=${sorting}`));
      setSorting(-1);
    }
  };

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
          className="font-weight-bold text-primary"
        >
          {value}
        </span>
      ),
    },
    {
      Header: 'Submitted At',
      accessor: 'createdAt',
    },
  ]);

  const dummyData = [
    {
      "_id": "6390d539c9f22e0026b4a194",
      "order": {
        "_id": "6390c35ec9f22e0026b49f1a",
        "cam": {
          "status": "Pending"
        },
        "orderId": "INDOI012000032"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-07T18:02:33.382Z"
    },
    {
      "_id": "6390a456c9f22e0026b49547",
      "order": {
        "_id": "639088ddc9f22e0026b47e19",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000031"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-07T14:33:58.904Z"
    },
    {
      "_id": "638f3a3bc9f22e0026b451c9",
      "order": {
        "_id": "638f02df10e56800269894ee",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000030"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-06T12:48:59.717Z"
    },
    {
      "_id": "638e204310e568002698798f",
      "order": {
        "_id": "638dfa3c10e5680026987563",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000029"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-05T16:45:55.371Z"
    },
    {
      "_id": "638ddcb310e568002698675e",
      "order": {
        "_id": "638db34410e5680026984683",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000027"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-05T11:57:39.159Z"
    },
    {
      "_id": "638dd58810e5680026985ffa",
      "order": {
        "_id": "638dcc7610e568002698592f",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000028"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-05T11:27:04.131Z"
    },
    {
      "_id": "638a1206af39a40026722b0e",
      "order": {
        "_id": "63897b46af39a4002671dca6",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000024"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-02T14:56:06.426Z"
    },
    {
      "_id": "638a103daf39a40026722a79",
      "order": {
        "_id": "63898e20af39a4002671e342",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000025"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-02T14:48:29.648Z"
    },
    {
      "_id": "6389c9b4af39a40026721687",
      "order": {
        "_id": "6388a45e13aeb30025faacde",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000022"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-12-02T09:47:32.918Z"
    },
    {
      "_id": "6387931813aeb30025fa59a4",
      "order": {
        "_id": "63878ac313aeb30025fa56ba",
        "cam": {
          "status": "Approved"
        },
        "orderId": "INDOI012000019"
      },
      "company": {
        "_id": "630068610a3ecb0021651970",
        "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
      },
      "createdAt": "2022-11-30T17:30:00.076Z"
    }
  ];

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Preview",
        Header: "Action",
        Cell: ({ row }) => {
          return <div className={`${styles.edit_image} img-fluid badge badge-outline`}>
            <a href={row?.originall?.path} download={row?.original?.name}>
              <Image
                height="30px"
                width="30px"
                src="/static/blue-eye.svg"
                alt="Edit"
              />
            </a>
          </div>
        }
      }
    ])
  };

  // const { allInspection } = useSelector((state) => state.Inspection);

  const { searchedLeads } = useSelector((state) => state.order);

  const handleRoute = (inspection) => {
    sessionStorage.setItem('inspectionId', inspection?._id);
    dispatch(GetAllInspection(`?inspectionId=${inspection?._id}`));
    dispatch(setDynamicName(inspection?.company?.companyName));
    Router.push('/third-party');
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
          <div className={styles.search}>
            <div className="input-group">
              <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                <img src="/static/search.svg" className="img-fluid" alt="Search" />
              </div>
              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                className={`${styles.formControl} border text_area form-control formControl `}
                placeholder="Search"
              />
            </div>
            {searchedLeads && searchTerm && (
              <div className={styles.searchResults}>
                <ul>
                  {searchedLeads.data.data.map((results, index) => (
                    <li onClick={handleFilteredData} id={results._id} key={index}>
                      {results.companyName} <span>{results.customerId}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Filter />
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Checker Inspection"
          currentPage={currentPage}
          totalCount={dummyData.length}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={dummyData}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          handleSort={handleSort}
          sortByState={sortByState}
          serverSortEnabled={false}
        />
      </div>
    </div>
  );
}

export default Index;
