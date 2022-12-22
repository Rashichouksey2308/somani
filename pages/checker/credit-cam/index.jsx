import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';

const mockData = {
    data: [
        {
            _id: "62fdbce243fa8b0023566192",
            cam: {
                status: "PendingChecker"
            },
            unitOfQuantity: "KG",
            orderCurrency: "Rupee",
            unitOfValue: "INR",
            unitOfGrade: "Cr",
            existingCustomer: true,
            transactionType: "Domestic",
            commodity: "Iron",
            quantity: 10,
            orderValue: 50000000000000,
            supplierName: "TATA",
            countryOfOrigin: "India",
            portOfDischarge: "Gujrat, India",
            ExpectedDateOfShipment: "2022-08-24T18:30:00.000Z",
            incoTerm: "CFR",
            grade: "44-46 MN",
            tolerance: 10,
            transactionPeriodDays: 90,
            manufacturerName: "CBX",
            createdBy: {
                _id: "62fc856c15027f0021336e1e",
                fName: "nilesh",
                lName: "jain",
                userRole: null,
                guid: "f51350a8-9b69-4477-9352-55075013117e"
            },
            company: {
                _id: "62fcedc1f3d0eb002232e785",
                customerId: "NAI220000003",
                companyName: "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
            },
            lastUpdatedBy: "62fc856c15027f0021336e1e",
            applicationId: "178636739",
            createdAt: "2022-08-18T04:15:30.964Z",
            updatedAt: "2022-11-28T11:32:05.190Z",
            __v: 0,
            queue: "CreditQueue",
            review: "62fdbce243fa8b0023566197",
            termsheet: "62fdcd5043fa8b002356665e",
            perUnitPrice: 120,
            orderId: "INDOD002000001",
            marginMoney: "62fdd5af43fa8b0023566b09",
            generic: "62fdd5af43fa8b0023566b0c",
            vessel: "62fdd5af43fa8b0023566b0f",
            lc: "62fdd5af43fa8b0023566b12",
            forwardHedging: "62fdd5af43fa8b0023566b15",
            transit: "63768f289b9719002542a0e5",
            customClearance: "63768f289b9719002542a0e8",
            delivery: "63768f289b9719002542a0eb"
        },
        {
            _id: "62fdbce243fa8b0023566193",
            cam: {
                status: "PendingChecker"
            },
            unitOfQuantity: "KG",
            orderCurrency: "Rupee",
            unitOfValue: "INR",
            unitOfGrade: "Cr",
            existingCustomer: true,
            transactionType: "Domestic",
            commodity: "Iron",
            quantity: 10,
            orderValue: 50000000000000,
            supplierName: "TATA",
            countryOfOrigin: "India",
            portOfDischarge: "Gujrat, India",
            ExpectedDateOfShipment: "2022-08-24T18:30:00.000Z",
            incoTerm: "CFR",
            grade: "44-46 MN",
            tolerance: 10,
            transactionPeriodDays: 90,
            manufacturerName: "CBX",
            createdBy: {
                _id: "62fc856c15027f0021336e1e",
                fName: "nilesh",
                lName: "jain",
                userRole: null,
                guid: "f51350a8-9b69-4477-9352-55075013117e"
            },
            company: {
                _id: "62fcedc1f3d0eb002232e785",
                customerId: "NAI220000003",
                companyName: "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
            },
            lastUpdatedBy: "62fc856c15027f0021336e1e",
            applicationId: "178636739",
            createdAt: "2022-08-19T04:15:30.964Z",
            updatedAt: "2022-11-28T11:32:05.190Z",
            __v: 0,
            queue: "CreditQueue",
            review: "62fdbce243fa8b0023566197",
            termsheet: "62fdcd5043fa8b002356665e",
            perUnitPrice: 120,
            orderId: "INDOD002000001",
            marginMoney: "62fdd5af43fa8b0023566b09",
            generic: "62fdd5af43fa8b0023566b0c",
            vessel: "62fdd5af43fa8b0023566b0f",
            lc: "62fdd5af43fa8b0023566b12",
            forwardHedging: "62fdd5af43fa8b0023566b15",
            transit: "63768f289b9719002542a0e5",
            customClearance: "63768f289b9719002542a0e8",
            delivery: "63768f289b9719002542a0eb"
        },
        {
            _id: "62fdbce243fa8b0023566194",
            cam: {
                status: "PendingChecker"
            },
            unitOfQuantity: "KG",
            orderCurrency: "Rupee",
            unitOfValue: "INR",
            unitOfGrade: "Cr",
            existingCustomer: true,
            transactionType: "Domestic",
            commodity: "Iron",
            quantity: 10,
            orderValue: 50000000000000,
            supplierName: "TATA",
            countryOfOrigin: "India",
            portOfDischarge: "Gujrat, India",
            ExpectedDateOfShipment: "2022-08-24T18:30:00.000Z",
            incoTerm: "CFR",
            grade: "44-46 MN",
            tolerance: 10,
            transactionPeriodDays: 90,
            manufacturerName: "CBX",
            createdBy: {
                _id: "62fc856c15027f0021336e1e",
                fName: "nilesh",
                lName: "jain",
                userRole: null,
                guid: "f51350a8-9b69-4477-9352-55075013117e"
            },
            company: {
                _id: "62fcedc1f3d0eb002232e785",
                customerId: "NAI220000003",
                companyName: "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
            },
            lastUpdatedBy: "62fc856c15027f0021336e1e",
            applicationId: "178636739",
            createdAt: "2022-08-20T04:15:30.964Z",
            updatedAt: "2022-11-28T11:32:05.190Z",
            __v: 0,
            queue: "CreditQueue",
            review: "62fdbce243fa8b0023566197",
            termsheet: "62fdcd5043fa8b002356665e",
            perUnitPrice: 120,
            orderId: "INDOD002000001",
            marginMoney: "62fdd5af43fa8b0023566b09",
            generic: "62fdd5af43fa8b0023566b0c",
            vessel: "62fdd5af43fa8b0023566b0f",
            lc: "62fdd5af43fa8b0023566b12",
            forwardHedging: "62fdd5af43fa8b0023566b15",
            transit: "63768f289b9719002542a0e5",
            customClearance: "63768f289b9719002542a0e8",
            delivery: "63768f289b9719002542a0eb"
        }
    ],
    totalCount: 3
}

function Index() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

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
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={`${styles.head_header} align-items-center`}>
            <img
              className={`${styles.arrow} mr-2 image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>Credit CAM</h1>
          </div>
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Checker Credit CAM"
          currentPage={currentPage}
          totalCount={mockData.totalCount}
          setCurrentPage={setCurrentPage}
          tableHooks={tableHooks}
          columns={tableColumns}
          data={mockData.data || []}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
        />
      </div>
    </div>
  );
}

export default Index;
