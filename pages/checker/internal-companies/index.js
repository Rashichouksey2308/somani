import React, { useEffect, useState, useMemo } from 'react';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { setDynamicName, setPageName } from '../../../src/redux/userData/action';
import Table from '../../../src/components/Table';
import Image from 'next/image';

const mockData = {
  data: [
    {
      _id: '637339242433dc3074a26e98',
      Country: 'India',
      Company_Name: 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED',
      Short_Name: 'IGIPL',
      PAN: 'AAACI3028D',
      CIN_No: 'U74899DL1994PTC063676',
      keyAddresses: [
        {
          addressType: 'Branch Address',
          pinCode: '395009',
          state: 'GUJARAT',
          city: 'Surat',
          ZIP_Code: '',
          fullAddress: 'PLOT NO-A 54, GANGA NAGAR SOCIETY, NEAR PALANPUR PATIA, RANDAR ROAD, SURAT-395009',
          Branch: 'SURAT',
          gstin: '24AAACI3028D1Z8',
        },
      ],
      keyBanks: [
        {
          IFSC: '',
          Bank_Name: '',
          Branch_Address: '',
          Account_No: '',
          Swift_Code: '',
          AD_Code: '',
          branchType: 'Branch Office',
        },
      ],
      authorisedSignatoryDetails: [
        {
          name: '',
          designation: '',
          email: '',
        },
      ],
      lastUpdatedBy: '62fc856c15027f0021336e1e',
      createdAt: '2022-11-15T07:00:52.414Z',
      updatedAt: '2022-11-15T07:00:52.414Z',
      __v: 0,
      status: 'INTERNALCOMPANYPENDINGCHECKER',
    },
    {
      _id: '6373237e4067ff7090357fdb',
      Country: 'India',
      Company_Name: 'EMERGENT INDUSTRIAL SOLUTIONS LIMITED',
      Short_Name: 'EISL',
      PAN: 'AAACS8253L',
      CIN_No: 'L80902DL1983PLC209722',
      keyAddresses: [
        {
          addressType: 'Branch Address',
          pinCode: '395009',
          state: 'GUJARAT',
          city: 'Surat',
          ZIP_Code: '',
          fullAddress:
            'PLOT A-54, GANGANAGAR SOCIETY, PALANPUR PATIYARANDER ROAD, RANDER ROAD, SURAT, GUJARAT - 395009',
          Branch: 'SURAT',
          gstin: '24AAACS8253L1Z4',
        },
      ],
      keyBanks: [
        {
          IFSC: '',
          Bank_Name: '',
          Branch_Address: '',
          Account_No: '',
          Swift_Code: '',
          AD_Code: '',
          branchType: 'Branch Office',
        },
      ],
      authorisedSignatoryDetails: [
        {
          name: '',
          designation: '',
          email: '',
        },
      ],
      lastUpdatedBy: '62fc856c15027f0021336e1e',
      createdAt: '2022-11-15T05:28:30.292Z',
      updatedAt: '2022-11-15T05:28:30.292Z',
      __v: 0,
      status: 'INTERNALCOMPANYPENDINGCHECKER',
    },
    {
      _id: '63731dc6639d714e78af5715',
      Country: 'India',
      Company_Name: 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED',
      Short_Name: 'IGIPL',
      PAN: 'AAACI3028D',
      CIN_No: 'U74899DL1994PTC063676',
      keyAddresses: [
        {
          addressType: 'Branch Address',
          pinCode: '600118',
          state: 'TAMIL NADU',
          city: 'Chennai',
          ZIP_Code: '',
          fullAddress: 'New No. 5, Sivasankaran Street, Kodungaiyur, Chennai, Tamil Nadu, 600118',
          Branch: 'CHENNAI',
          gstin: '33AAACI3028D1Z9',
        },
      ],
      keyBanks: [
        {
          IFSC: '',
          Bank_Name: '',
          Branch_Address: '',
          Account_No: '',
          Swift_Code: '',
          AD_Code: '',
          branchType: 'Branch Office',
        },
      ],
      authorisedSignatoryDetails: [
        {
          name: '',
          designation: '',
          email: '',
        },
      ],
      lastUpdatedBy: '62fc856c15027f0021336e1e',
      createdAt: '2022-11-15T05:04:06.165Z',
      updatedAt: '2022-11-15T05:04:06.165Z',
      __v: 0,
      status: 'INTERNALCOMPANYPENDINGCHECKER',
    },
    {
      _id: '637319b7639d714e78af56fd',
      keyAddresses: [
        {
          addressType: 'Registered Address',
          pinCode: '110001',
          state: 'DELHI',
          city: 'New Delhi',
          ZIP_Code: '',
          fullAddress: '7A , SAGAR APARTMENTS, 6 TILAK MARG, NEW DELHI-110001',
          Branch: 'DELHI',
          gstin: '07AAACI3028D1Z4',
        },
      ],
      keyBanks: [
        {
          IFSC: 'CNRB0019042',
          Bank_Name: 'CANARA BANK LIMITED',
          Branch_Address: 'Mid Corporate Branch, B-39, 1st Floor, Middle Circle Connaught Circus, New Delhi 110 001',
          Account_No: '1588201001243',
          Swift_Code: '',
          AD_Code: '02400MQ',
          branchType: 'Head Office',
        },
      ],
      authorisedSignatoryDetails: [
        {
          name: '',
          designation: '',
          email: '',
        },
      ],
      lastUpdatedBy: '62fc856c15027f0021336e1e',
      createdAt: '2022-11-15T04:46:47.096Z',
      updatedAt: '2022-11-15T04:46:47.096Z',
      __v: 0,
      Cin_No: 'U74899DL1994PTC063676',
      Company_Name: 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED',
      Country: 'India',
      PAN: 'AAACI3028D',
      Short_Name: 'IGIPL',
      status: 'INTERNALCOMPANYPENDINGCHECKER',
    },
  ],
  total: 4,
};

function Index() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `Internal Companies`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-internal-companies'));
    dispatch(setDynamicName(null));
  });

  const tableColumns = useMemo(() => [
    {
      Header: 'Company Name',
      accessor: 'Company_Name',
      disableSortBy: true,
    },
    {
      Header: 'Short Name',
      accessor: 'Short_Name',
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
            <h1 className={styles.heading}>Internal Companies</h1>
          </div>
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Internal Companies"
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
