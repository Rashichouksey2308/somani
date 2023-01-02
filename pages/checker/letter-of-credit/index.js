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
      _id: '63133fe20112d2002018f1b9',
      firstTimeUpdate: true,
      documentRequired: [],
      additionalConditions: [],
      order: {
        _id: '630f5190cfb5d100221f7bcc',
        cam: {
          status: 'LCMODULEPENDINGCHECKER',
          approvalRemarks: [],
        },
        unitOfQuantity: 'MT',
        orderCurrency: 'INR',
        unitOfValue: 'Crores',
        unitOfGrade: 'Cr',
        existingCustomer: true,
        transactionType: 'Import',
        commodity: 'Iron',
        quantity: 33,
        orderValue: 330000000,
        supplierName: '333',
        countryOfOrigin: 'Australia',
        portOfDischarge: 'Vishakapatnam, India',
        ExpectedDateOfShipment: '2022-09-02T18:30:00.000Z',
        incoTerm: 'FOB',
        grade: '3',
        tolerance: 3,
        transactionPeriodDays: 33,
        manufacturerName: '3333',
        createdBy: '62fc856c15027f0021336e1e',
        company: '630dbc1c84e325002139b5da',
        lastUpdatedBy: '62fc856c15027f0021336e1e',
        applicationId: '164530782',
        createdAt: '2022-08-31T12:18:24.835Z',
        updatedAt: '2022-09-04T22:14:17.921Z',
        __v: 0,
        queue: 'CreditQueue',
        review: '630f5190cfb5d100221f7bd1',
        termsheet: '6313331c0112d2002018e0f5',
        perUnitPrice: 3,
        orderId: 'CITII001000006',
        marginMoney: '63133fe20112d2002018f1b0',
        generic: '63133fe20112d2002018f1b3',
        vessel: '63133fe20112d2002018f1b6',
        lc: '63133fe20112d2002018f1b9',
        forwardHedging: '63133fe20112d2002018f1bc',
        transit: '631523397861260023d9f4ff',
        customClearance: '631523397861260023d9f502',
        delivery: '631523397861260023d9f505',
      },
      company: {
        _id: '630dbc1c84e325002139b5da',
        companyName: 'CITI BANK',
      },
      document: [
        {
          _id: '63163004716c5e0021218637',
          documentName: '1661320563470_1661239221684_sample.pdf',
          format: 'application/pdf',
          documentDate: '2022-09-05T17:21:08.935Z',
        },
      ],
      createdAt: '2022-09-03T11:52:02.727Z',
      updatedAt: '2022-09-05T17:21:08.936Z',
      lcApplication: {
        documentaryCreditNumber: '3456',
        dateOfIssue: '2022-09-13T18:30:00.000Z',
        lcIssuingBank: 'Swiss Bank',
      },
    },
    {
      _id: '630f13033dbbcd002445abab',
      firstTimeUpdate: true,
      documentRequired: ['', 'dfgdfg', 'fgfg'],
      additionalConditions: [],
      order: {
        _id: '630deae0f12a520021c89eae',
        cam: {
          status: 'LCMODULEPENDINGCHECKER',
          approvalRemarks: [],
        },
        unitOfQuantity: 'MT',
        orderCurrency: 'Rupee',
        unitOfValue: 'Crores',
        unitOfGrade: 'Cr',
        existingCustomer: true,
        transactionType: 'Import',
        commodity: 'Iron',
        quantity: 10,
        orderValue: 30000000,
        supplierName: '3ewqd',
        countryOfOrigin: 'India',
        portOfDischarge: 'Mumbai, India',
        ExpectedDateOfShipment: '2022-08-31T18:30:00.000Z',
        incoTerm: 'CFR',
        grade: '3',
        tolerance: 3,
        transactionPeriodDays: 9,
        manufacturerName: '2',
        createdBy: '62fc856c15027f0021336e1e',
        company: '630dbc1c84e325002139b5da',
        lastUpdatedBy: '62fc856c15027f0021336e1e',
        applicationId: '31422429',
        createdAt: '2022-08-30T10:48:00.184Z',
        updatedAt: '2022-09-27T10:01:48.882Z',
        __v: 0,
        queue: 'CreditQueue',
        review: '630deae0f12a520021c89eb3',
        termsheet: '630dfb0b3dbbcd0024458ec9',
        shipmentDetail: {
          _id: '630f13a73dbbcd002445ac20',
        },
        productSummary: {
          existingSuppliers: ['a'],
          existingCHA: [''],
          typeOfCurrency: 'Rupee',
          unitOfQuantity: 'MT',
          _id: '6332ca0c78b92a0021509e84',
          AvgMonthlyElectricityBill: 1,
          availableStock: 1,
          averageStockInTransit: 1,
          averageStockOfCommodity: 1,
          capacityUtilization: 1,
          contributionCommoditySenstivity: 'Very High',
          dailyConsumptionOfCommodity: 1,
          existingProcurementOfCommodity: 'Manufacturers',
          monthlyProductionCapacity: 1,
          paymentStatusForElectricityBills: '',
          stockCoverageOfCommodity: '2022-08-31T18:30:00.000Z',
        },
        perUnitPrice: 3,
        orderId: 'CITII001000001',
        generic: '630f13033dbbcd002445aba5',
        vessel: '630f13033dbbcd002445aba8',
        lc: '630f13033dbbcd002445abab',
        forwardHedging: '630f13033dbbcd002445abae',
        transit: '630f3ecbcfb5d100221f78b7',
        customClearance: '630f3ecbcfb5d100221f78ba',
        delivery: '630f3ecbcfb5d100221f78bd',
        supplierCredential: {
          _id: '6332ca0c78b92a0021509e85',
          HSCodesNumber: 44,
          commodityOfTotalTrade: 99,
          consigneesNumber: 44,
          countryOfOrigin: '77',
          latestShipmentDate: '2022-09-29T18:30:00.000Z',
          oldestShipmentDate: '2022-09-28T18:30:00.000Z',
          portOfDestination: '88',
          remarks: 'jhihu',
          shipmentNumber: 44,
          supplierName: '3ewqd',
        },
      },
      company: {
        _id: '630dbc1c84e325002139b5da',
        companyName: 'CITI BANK',
      },
      document: [
        {
          _id: '630f34a0cfb5d100221f7251',
          documentName: 'sample (2).pdf',
          format: 'application/pdf',
          documentDate: '2022-08-31T10:14:56.042Z',
        },
      ],
      createdAt: '2022-08-31T07:51:31.670Z',
      updatedAt: '2022-09-01T18:33:23.384Z',
      lastUpdatedBy: '62fc856c15027f0021336e1e',
      lcApplication: {
        formOfDocumentaryCredit: 'Revocable',
        applicableRules: 'gfhgf',
        dateOfExpiry: '2022-09-02T18:30:00.000Z',
        placeOfExpiry: 'dfghfgh',
        lcIssuingBank: 'BNP PARIBAS PARIBAS - BNPAFPPX',
        applicant: 'Balaji Traders',
        beneficiary: 'gfgdf',
        currecyCodeAndAmountValue: '45',
        tolerancePercentage: '45',
        creditAvailablewith: 'BNP_BNPAFRPPS',
        creditAvailableBy: 'Not by Negotiation',
        atSight: 'Not Documentary Credit',
        numberOfDays: '45',
        drawee: 'gfgsdfg',
        deferredPayment: 'rfdggh',
        partialShipment: 'Allowed',
        transhipments: 'Prohibited',
        shipmentForm: 'dfgfdhjdfgh',
        portOfLoading: 'fdghfgdjg',
        portOfDischarge: 'Mumbai, India',
        latestDateOfShipment: '2022-09-02T18:30:00.000Z',
        DescriptionOfGoods: 'dfhgdfhdsfgdsfg',
        presentaionPeriod: 'gfsdfgfdg',
        confirmationInstructions: 'grgsdvf',
        reimbursingBank: 'Bnp Paribas Paribas - Bnpafrppxx',
        adviceThroughBank: 'Balaji Traders',
        secondAdvisingBank: 'rfgertwgxh',
        requestedConfirmationParty: 'gsdrgrg',
        charges: 'fgsfghtsjf',
        instructionToBank: 'gdsfgrdghfh',
        senderToReceiverInformation: 'gfhgsfgdrfg',
      },
    },
    {
      _id: '6308c06eb2382c002231c7c2',
      firstTimeUpdate: true,
      documentRequired: [],
      additionalConditions: [],
      order: {
        _id: '62ff2d2b816c7e0022517b77',
        cam: {
          status: 'LCMODULEPENDINGCHECKER',
          approvalRemarks: [],
        },
        unitOfQuantity: 'mt',
        orderCurrency: 'INR',
        unitOfValue: 'Cr',
        unitOfGrade: 'Cr',
        existingCustomer: false,
        transactionType: 'Import',
        commodity: 'Iron',
        quantity: 100,
        orderValue: 10000000,
        supplierName: 'somani 2',
        countryOfOrigin: 'India',
        portOfDischarge: 'Mumbai, India',
        ExpectedDateOfShipment: '2022-08-23T18:30:00.000Z',
        incoTerm: 'FOB',
        createdBy: '62fc856c15027f0021336e1e',
        company: '62ff2d2b816c7e0022517b75',
        lastUpdatedBy: '62fc856c15027f0021336e1e',
        applicationId: '77416194',
        createdAt: '2022-08-19T06:26:51.583Z',
        updatedAt: '2022-08-30T12:59:00.287Z',
        __v: 0,
        queue: 'CreditQueue',
        review: '62ff2d2b816c7e0022517b7c',
        termsheet: '630898d1b2382c002231ba3f',
        perUnitPrice: 100,
        tolerance: 10,
        orderId: 'SHIPI014000001',
        generic: '6308c06eb2382c002231c7bc',
        vessel: '6308c06eb2382c002231c7bf',
        lc: '6308c06eb2382c002231c7c2',
        forwardHedging: '6308c06eb2382c002231c7c5',
        transit: '630e09943dbbcd00244592da',
        customClearance: '630e09943dbbcd00244592dd',
        delivery: '630e09943dbbcd00244592e0',
      },
      company: {
        _id: '62ff2d2b816c7e0022517b75',
        companyName: 'SHIPRA HOTELS LIMITED',
      },
      document: [
        {
          _id: '630f33ddcfb5d100221f7233',
          documentName: '',
          format: '',
          documentDate: null,
        },
      ],
      createdAt: '2022-08-26T12:45:34.167Z',
      updatedAt: '2022-08-31T10:11:41.437Z',
      lastUpdatedBy: '62fc856c15027f0021336e1e',
      lcApplication: {
        formOfDocumentaryCredit: 'Revocable',
        applicableRules: 'fdvf',
        dateOfExpiry: '2022-08-30T18:30:00.000Z',
        placeOfExpiry: 'gfhf',
        lcIssuingBank: 'Zurcher Kantonal Bank,Zurich',
        applicant: 'Balaji Traders',
        beneficiary: 'gfhfgt',
        tolerancePercentage: '5',
        creditAvailablewith: 'BNP_BNPAFRPPS',
        creditAvailableBy: 'Not by Negotiation',
        atSight: 'Not Documentary Credit',
        numberOfDays: '56',
        drawee: 'gfgfxhbg',
        deferredPayment: '56',
        partialShipment: 'Allowed',
        transhipments: 'Not Prohibited',
        shipmentForm: 'hgfhd',
        portOfLoading: 'hfdgfh',
        portOfDischarge: 'Mumbai, India',
        latestDateOfShipment: '2022-09-01T18:30:00.000Z',
        DescriptionOfGoods: 'gbnhcgfh',
        presentaionPeriod: 'tyrtgsdrf',
        confirmationInstructions: 'gtffgyhtujty',
        reimbursingBank: 'Bnp Paribas Paribas - Bnpafrppxx',
        adviceThroughBank: 'Balaji Traders',
        secondAdvisingBank: 'tuytuj',
        requestedConfirmationParty: 'yjutydhjd',
        charges: 'htyhr5y',
        instructionToBank: 'rtytu',
        senderToReceiverInformation: 'jyjyygj',
      },
    },
    {
      _id: '63087ad5b2382c002231a9b6',
      firstTimeUpdate: true,
      documentRequired: [],
      additionalConditions: [],
      order: {
        _id: '6305b6dccc09820021af2280',
        cam: {
          status: 'LCMODULEPENDINGCHECKER',
          approvalRemarks: [],
        },
        unitOfQuantity: 'mt',
        orderCurrency: 'INR',
        unitOfValue: 'Cr',
        unitOfGrade: 'Cr',
        existingCustomer: false,
        transactionType: 'Import',
        commodity: 'Iron',
        quantity: 1,
        orderValue: 700000000,
        supplierName: '1fadf',
        countryOfOrigin: 'Australia',
        portOfDischarge: 'Vishakapatnam, India',
        ExpectedDateOfShipment: '2022-08-23T18:30:00.000Z',
        incoTerm: 'FOB',
        createdBy: '62fc856c15027f0021336e1e',
        company: '6305b6dccc09820021af227e',
        lastUpdatedBy: '62fc856c15027f0021336e1e',
        applicationId: '1582743',
        createdAt: '2022-08-24T05:27:56.636Z',
        updatedAt: '2022-08-26T08:11:05.440Z',
        __v: 0,
        queue: 'CreditQueue',
        review: '6305b6dccc09820021af2285',
        termsheet: '630784a151244300201021a6',
        perUnitPrice: 5,
        tolerance: 6,
        orderId: 'SHIPI040000001',
        generic: '63087ad4b2382c002231a9b0',
        vessel: '63087ad5b2382c002231a9b3',
        lc: '63087ad5b2382c002231a9b6',
        forwardHedging: '63087ad5b2382c002231a9b9',
        transit: '63088019b2382c002231affa',
        customClearance: '63088019b2382c002231affd',
        delivery: '63088019b2382c002231b000',
      },
      company: {
        _id: '6305b6dccc09820021af227e',
        companyName: 'SHIPRA HOTELS LIMITED',
      },
      document: [
        {
          _id: '63087eafb2382c002231ae7b',
          documentName: '',
          format: '',
          documentDate: null,
        },
      ],
      createdAt: '2022-08-26T07:48:37.006Z',
      updatedAt: '2022-09-01T18:35:25.520Z',
      lastUpdatedBy: '62fc856c15027f0021336e1e',
      lcApplication: {
        formOfDocumentaryCredit: 'Irrevocable',
        applicableRules: '78',
        dateOfExpiry: '2022-09-01T18:30:00.000Z',
        placeOfExpiry: 'gfdsj',
        lcIssuingBank: 'BNP PARIBAS PARIBAS - BNPAFPPX',
        applicant: 'Inod International Trading Fzco',
        beneficiary: 'jghff',
        currecyCodeAndAmountValue: '765',
        tolerancePercentage: '7',
        creditAvailablewith: 'BNP PARIBAS PARIBAS _ BNPAFRPPS',
        creditAvailableBy: 'Not by Negotiation',
        atSight: 'Not Documentary Credit',
        numberOfDays: '6',
        drawee: 'ghjf',
        deferredPayment: 'jfh',
        partialShipment: 'Prohibited',
        transhipments: 'Not Prohibited',
        shipmentForm: '6546',
        portOfLoading: '4565',
        portOfDischarge: 'Visakhapatnam, India',
        latestDateOfShipment: '2022-09-01T18:30:00.000Z',
        DescriptionOfGoods: '845',
        presentaionPeriod: '64',
        confirmationInstructions: 'hgdfmjfd',
        reimbursingBank: 'Bnp Paribas Paribas - Bnpafrppxx',
        adviceThroughBank: 'Bnp Paribas Paribas - Bnpafrppxx',
        secondAdvisingBank: 'ytdjdh',
        requestedConfirmationParty: 'fgdhjtydf',
        charges: 'udfjdtft',
        instructionToBank: 'fdjtyrdrtdrt',
        senderToReceiverInformation: 'gfdshuyrt',
      },
    },
    {
      _id: '630507accc09820021aefaf2',
      firstTimeUpdate: true,
      documentRequired: ['none'],
      additionalConditions: [],
      order: {
        _id: '62ff542448337d0021628df7',
        cam: {
          status: 'LCMODULEPENDINGCHECKER',
          approvalRemarks: [],
        },
        unitOfQuantity: 'mt',
        orderCurrency: 'INR',
        unitOfValue: 'Cr',
        unitOfGrade: 'Cr',
        existingCustomer: false,
        transactionType: 'Import',
        commodity: 'Iron',
        quantity: 1,
        orderValue: 20000000,
        supplierName: 'vihswa 1',
        countryOfOrigin: 'India',
        portOfDischarge: 'Gujrat, India',
        ExpectedDateOfShipment: '2022-08-19T18:30:00.000Z',
        incoTerm: 'FOB',
        createdBy: '62fc856c15027f0021336e1e',
        company: '62ff542448337d0021628df5',
        lastUpdatedBy: '62fc856c15027f0021336e1e',
        applicationId: '3969918',
        createdAt: '2022-08-19T09:13:08.764Z',
        updatedAt: '2022-08-24T03:15:33.946Z',
        __v: 0,
        queue: 'CreditQueue',
        review: '62ff542448337d0021628dfc',
        termsheet: '6304a0b8a5f1d90021cbea7c',
        perUnitPrice: 500,
        tolerance: 23,
        orderId: 'SHIPI021000001',
        marginMoney: '630507accc09820021aefae9',
        generic: '630507accc09820021aefaec',
        vessel: '630507accc09820021aefaef',
        lc: '630507accc09820021aefaf2',
        forwardHedging: '630507accc09820021aefaf5',
        transit: '630597d5cc09820021af1a2d',
        customClearance: '630597d5cc09820021af1a30',
        delivery: '630597d5cc09820021af1a33',
      },
      company: {
        _id: '62ff542448337d0021628df5',
        companyName: 'SHIPRA HOTELS LIMITED',
      },
      document: [],
      createdAt: '2022-08-23T17:00:28.028Z',
      updatedAt: '2022-08-25T12:06:31.209Z',
      lastUpdatedBy: '6300c26615027f0021336e8e',
      lcApplication: {
        dateOfExpiry: '2022-09-01T18:30:00.000Z',
        currecyCodeAndAmountValue: '4',
        creditAvailablewith: 'BNP_BNPAFRPPS',
        atSight: 'Not Documentary Credit',
        numberOfDays: '78',
        drawee: 'IGPL',
        deferredPayment: 'yes',
        partialShipment: 'Allowed',
        transhipments: 'Prohibited',
        shipmentForm: 'India',
        portOfLoading: 'Vizag, India',
        portOfDischarge: 'Mumbai, India',
        latestDateOfShipment: '2022-09-02T18:30:00.000Z',
        DescriptionOfGoods: 'great condition',
        presentaionPeriod: '70',
        confirmationInstructions: 'no',
        reimbursingBank: 'Balaji Traders',
        adviceThroughBank: 'Bnp Paribas Paribas - Bnpafrppxx',
        secondAdvisingBank: 'none',
        requestedConfirmationParty: 'none',
        charges: 'none',
        instructionToBank: 'none',
        senderToReceiverInformation: 'none',
      },
    },
  ],
  total: 5,
};

function Index() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

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
              <a className="cursor-pointer">
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
    dispatch(setDynamicName(lcModule?.company?.companyName));
    Router.push('/checker/letter-of-credit/id');
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
            <h1 className={styles.heading}>Letter of Credit</h1>
          </div>
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Letter of Credit"
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
