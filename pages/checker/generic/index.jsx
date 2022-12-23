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
            "_id": "6300caac2ed0af0021b2c1d4",
            "supplier": {
                "multiParty": false,
                "addresses": [],
                "authorisedSignatoryDetails": [],
                "multiPartyAddresses": []
            },
            "seller": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "buyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "associateBuyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CHA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "stevedore": {
                "sameAsCHA": false,
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CMA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "additionalComments": {
                "comments": []
            },
            "placeOfExecution": {
                "execution": []
            },
            "productSpecifications": {
                "textData": false,
                "tableData": false,
                "specification": [],
                "comments": []
            },
            "order": {
                "_id": "62ff563248337d0021628eba",
                "cam": {
                    "status": "GENERICPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": false,
                "transactionType": "Import",
                "commodity": "test3",
                "quantity": 2,
                "orderValue": 50000000,
                "supplierName": "name some",
                "countryOfOrigin": "America",
                "portOfDischarge": "VishakaPatnam, India",
                "ExpectedDateOfShipment": "2022-08-26T18:30:00.000Z",
                "incoTerm": "FOB",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62ff563248337d0021628eb8",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "1718634",
                "createdAt": "2022-08-19T09:21:54.457Z",
                "updatedAt": "2022-08-20T11:58:29.260Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62ff563248337d0021628ebf",
                "termsheet": "6300b37782708c0022780fc5",
                "perUnitPrice": 3,
                "tolerance": 3,
                "orderId": "SHIPI023000001",
                "marginMoney": "6300caac2ed0af0021b2c1d1",
                "generic": "6300caac2ed0af0021b2c1d4",
                "vessel": "6300caac2ed0af0021b2c1d7",
                "lc": "6300caac2ed0af0021b2c1da",
                "forwardHedging": "6300caac2ed0af0021b2c1dd"
            },
            "company": "SHIPRA HOTELS LIMITED",
            "createdAt": "2022-08-20T11:51:08.073Z",
            "updatedAt": "2022-08-20T11:51:08.073Z",
            "__v": 0
        },
        {
            "_id": "63007d9db2a43a0021cd8386",
            "supplier": {
                "multiParty": false,
                "addresses": [],
                "authorisedSignatoryDetails": [],
                "multiPartyAddresses": []
            },
            "seller": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "buyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "associateBuyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CHA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "stevedore": {
                "sameAsCHA": false,
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CMA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "additionalComments": {
                "comments": []
            },
            "placeOfExecution": {
                "execution": []
            },
            "productSpecifications": {
                "textData": false,
                "tableData": false,
                "specification": [],
                "comments": []
            },
            "order": {
                "_id": "62ff593f48337d0021629063",
                "cam": {
                    "status": "GENERICPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": false,
                "transactionType": "Import",
                "commodity": "iron",
                "quantity": 50,
                "orderValue": 60000000,
                "supplierName": "ccvb",
                "countryOfOrigin": "America",
                "portOfDischarge": "VishakaPatnam, India",
                "ExpectedDateOfShipment": "2022-08-19T18:30:00.000Z",
                "incoTerm": "FOB",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62ff593f48337d002162905f",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "54097894",
                "createdAt": "2022-08-19T09:34:55.659Z",
                "updatedAt": "2022-12-07T09:20:50.700Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62ff593f48337d0021629068",
                "termsheet": "630066230a3ecb0021651880",
                "perUnitPrice": 100,
                "tolerance": 20,
                "orderId": "SHIPI026000001",
                "marginMoney": "63007d9db2a43a0021cd8383",
                "generic": "63007d9db2a43a0021cd8386",
                "vessel": "63007d9db2a43a0021cd8389",
                "lc": "63007d9db2a43a0021cd838c",
                "forwardHedging": "63007d9db2a43a0021cd838f",
                "transit": "6300939eca41220020f72b24",
                "customClearance": "6300939eca41220020f72b27",
                "delivery": "6300939eca41220020f72b2a"
            },
            "company": "SHIPRA HOTELS LIMITED",
            "createdAt": "2022-08-20T06:22:21.226Z",
            "updatedAt": "2022-08-20T06:22:21.226Z",
            "__v": 0
        },
        {
            "_id": "62ffcf840a3ecb0021650eb8",
            "supplier": {
                "multiParty": false,
                "addresses": [],
                "authorisedSignatoryDetails": [],
                "multiPartyAddresses": []
            },
            "seller": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "buyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "associateBuyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CHA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "stevedore": {
                "sameAsCHA": false,
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CMA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "additionalComments": {
                "comments": []
            },
            "placeOfExecution": {
                "execution": []
            },
            "productSpecifications": {
                "textData": false,
                "tableData": false,
                "specification": [],
                "comments": []
            },
            "order": {
                "_id": "62ff6ecf48337d0021629981",
                "cam": {
                    "status": "GENERICPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": false,
                "transactionType": "Import",
                "commodity": "iron",
                "quantity": 11,
                "orderValue": 110000000,
                "supplierName": "ccvb",
                "countryOfOrigin": "America",
                "portOfDischarge": "VishakaPatnam, India",
                "ExpectedDateOfShipment": "2022-08-24T18:30:00.000Z",
                "incoTerm": "CFR",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62ff6ecf48337d002162997f",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "208146522",
                "createdAt": "2022-08-19T11:06:55.606Z",
                "updatedAt": "2022-08-19T20:49:06.626Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62ff6ecf48337d0021629986",
                "termsheet": "62ffbc030a3ecb0021650507",
                "perUnitPrice": 12,
                "tolerance": null,
                "orderId": "SHIPI027000001",
                "marginMoney": "62ffcf840a3ecb0021650eb5",
                "generic": "62ffcf840a3ecb0021650eb8",
                "vessel": "62ffcf840a3ecb0021650ebb",
                "lc": "62ffcf840a3ecb0021650ebe",
                "forwardHedging": "62ffcf840a3ecb0021650ec1",
                "transit": "62fff7420a3ecb0021651524",
                "customClearance": "62fff7420a3ecb0021651527",
                "delivery": "62fff7420a3ecb002165152a"
            },
            "company": "SHIPRA HOTELS LIMITED",
            "createdAt": "2022-08-19T17:59:32.549Z",
            "updatedAt": "2022-08-19T17:59:32.549Z",
            "__v": 0
        },
        {
            "_id": "62fe3832a972550021d50560",
            "supplier": {
                "multiParty": false,
                "addresses": [],
                "authorisedSignatoryDetails": [],
                "multiPartyAddresses": []
            },
            "seller": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "buyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "associateBuyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CHA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "stevedore": {
                "sameAsCHA": false,
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CMA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "additionalComments": {
                "comments": [
                    "dcfv",
                    "dcfvgfd"
                ]
            },
            "placeOfExecution": {
                "execution": []
            },
            "productSpecifications": {
                "textData": false,
                "tableData": false,
                "specification": [],
                "comments": []
            },
            "order": {
                "_id": "62fe25f2a972550021d4fb1f",
                "cam": {
                    "status": "GENERICPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": false,
                "transactionType": "Domestic",
                "commodity": "Coal",
                "quantity": 55000,
                "orderValue": 5e+23,
                "supplierName": "",
                "countryOfOrigin": "America",
                "portOfDischarge": "Mumbai, India",
                "ExpectedDateOfShipment": "2022-08-31T18:30:00.000Z",
                "incoTerm": "CFR",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62fe25f2a972550021d4fb1d",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "62052615",
                "createdAt": "2022-08-18T11:43:46.263Z",
                "updatedAt": "2022-08-18T13:26:07.085Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62fe25f2a972550021d4fb24",
                "termsheet": "62fe30cfa972550021d500aa",
                "perUnitPrice": 10,
                "tolerance": null,
                "orderId": "INDOD004000001",
                "marginMoney": "62fe3832a972550021d5055d",
                "generic": "62fe3832a972550021d50560",
                "vessel": "62fe3832a972550021d50563",
                "lc": "62fe3832a972550021d50566",
                "forwardHedging": "62fe3832a972550021d50569",
                "transit": "62fe3defa972550021d5082e",
                "customClearance": "62fe3defa972550021d50831",
                "delivery": "62fe3defa972550021d50834"
            },
            "company": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED",
            "createdAt": "2022-08-18T13:01:38.836Z",
            "updatedAt": "2022-08-19T14:00:24.435Z",
            "__v": 0,
            "lastUpdatedBy": "62fc856c15027f0021336e1e"
        },
        {
            "_id": "62fe143cdc557b00216c8eac",
            "supplier": {
                "multiParty": false,
                "addresses": [],
                "authorisedSignatoryDetails": [],
                "multiPartyAddresses": []
            },
            "seller": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "buyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "associateBuyer": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CHA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "stevedore": {
                "sameAsCHA": false,
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "CMA": {
                "addresses": [],
                "authorisedSignatoryDetails": []
            },
            "additionalComments": {
                "comments": []
            },
            "placeOfExecution": {
                "execution": []
            },
            "productSpecifications": {
                "textData": false,
                "tableData": false,
                "specification": [],
                "comments": []
            },
            "order": {
                "_id": "62fcedc1f3d0eb002232e787",
                "cam": {
                    "status": "GENERICPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": false,
                "transactionType": "Domestic",
                "commodity": "Steel",
                "quantity": 1000,
                "orderValue": 1000000000000000,
                "supplierName": "Test",
                "countryOfOrigin": "India",
                "portOfDischarge": "VishakaPatnam, India",
                "ExpectedDateOfShipment": "2022-08-24T18:30:00.000Z",
                "incoTerm": "FOB",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62fcedc1f3d0eb002232e785",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "87143395",
                "createdAt": "2022-08-17T13:31:45.362Z",
                "updatedAt": "2022-11-28T11:34:39.435Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62fcedc1f3d0eb002232e78c",
                "termsheet": "62fcefcef3d0eb002232e7eb",
                "perUnitPrice": 100,
                "tolerance": 20,
                "orderId": "INDOD002000002",
                "marginMoney": "62fe143cdc557b00216c8ea9",
                "generic": "62fe143cdc557b00216c8eac",
                "vessel": "62fe143cdc557b00216c8eaf",
                "lc": "62fe143cdc557b00216c8eb2",
                "forwardHedging": "62fe143cdc557b00216c8eb5",
                "transit": "62fe1eaaa972550021d4f76e",
                "customClearance": "62fe1eaaa972550021d4f771",
                "delivery": "62fe1eaaa972550021d4f774"
            },
            "company": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED",
            "createdAt": "2022-08-18T10:28:12.909Z",
            "updatedAt": "2022-11-28T11:34:39.479Z",
            "__v": 0,
            "lastUpdatedBy": "62fc856c15027f0021336e1e"
        }
    ],
    "total": 5
}

function Index() {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit, setPageLimit] = useState(10);

    useEffect(() => {
        if (window) {
            sessionStorage.setItem('loadedPage', 'Checker');
            sessionStorage.setItem('loadedSubPage', `Generic`);
            sessionStorage.setItem('openList', 6);
        }
    }, []);

    useEffect(() => {
        dispatch(setPageName('checker-generic'));
        dispatch(setDynamicName(null));
    });

    const tableColumns = useMemo(() => [
        {
            Header: 'Order ID',
            accessor: 'order.orderId',
            disableSortBy: true,
        },
        {
            Header: 'Company Name',
            accessor: 'company',
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
                            onClick={() => {
                                handleRoute(row?.original);
                            }}
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

    const handleRoute = (generic) => {
        sessionStorage.setItem('checkerGenericId', generic?._id);
        dispatch(setDynamicName(generic?.company?.companyName));
        Router.push('/checker/generic/id');
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
                        <h1 className={styles.heading}>Generic</h1>
                    </div>
                </div>

                {/* Queue Table */}
                <Table
                    tableHeading="Generic"
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
