import React from 'react';
import styles from './index.module.scss';
import VendorDetails from './VendorDetails';
import BankDetails from '../BankDetails';
import Documents from '../Documents';
import Remarks from '../../Common/Remarks';

function Index() {

    const vendorSummary = [
        {
            "_id": "63728df5c1c96906f23e7a55",
            "vendorDetails": {
                "_id": "637489d848ce8d3ce6af6465",
                "vendor": "IGPL",
                "vendorType": "Indo German Private Limited",
                "pan_taxId": "XXXXXXXXXX",
                "companyName": "Indo German Private Limited",
                "activationDate": "2022-09-05T16:08:46.828Z",
                "DeactivationDate": "",
                "blackListedDate": "+011110-12-31T18:30:00.000Z",
                "emailId": "igpl@somani.com",
                "phoneNumber": "123456789",
                "website": "",
                "remarks": ""
            },
            "keyContactPerson": [
                {
                    "_id": "637489d848ce8d3ce6af6466",
                    "name": "John Doe",
                    "department": "Finance",
                    "designation": "Financial Analyst",
                    "phoneNumber": "123456789",
                    "emailId": "johndoe@simport.com",
                    "authorizedSignatory": "Yes"
                },
                {
                    "_id": "637489d848ce8d3ce6af6466",
                    "name": "Jack Sparrow",
                    "department": "Finance",
                    "designation": "Financial Analyst",
                    "phoneNumber": "123456789",
                    "emailId": "johndoe@simport.com",
                    "authorizedSignatory": "No"
                }
            ],
            "keyAddresses": [
                {
                    "_id": "637489d848ce8d3ce6af6467",
                    "addressType": "Registered Office",
                    "pinCode": "123445",
                    "address": "A-44, Woodruff, Pittsburgh",
                    "gstin": "",
                    "email": "abc@gmail.com",
                    "zipCode": "123114",
                    "country": "United States",
                    "state": "Pittsburgh",
                    "city": "Pittsburgh"
                }
            ],
            "company": {
                "_id": "6347ff0147019a00212dbe34",
                "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED",
                "customerId": "NAI220000002"
            },
            "order": {
                "_id": "6347ff0147019a00212dbe38",
                "cam": {
                    "status": "Approved",
                    "approvedBy": "63161f1ed067e1002109e41f",
                    "approvedAt": "2022-10-13T18:04:29.538Z",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "MT",
                "orderCurrency": "USD",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": false,
                "transactionType": "Import",
                "commodity": "Coal",
                "quantity": 1000,
                "orderValue": 150000,
                "supplierName": "Eramet marketing solution ",
                "countryOfOrigin": "Australia",
                "portOfDischarge": "Mumbai, India",
                "ExpectedDateOfShipment": "2022-11-04T18:30:00.000Z",
                "incoTerm": "CFR",
                "createdBy": "63161f57d067e1002109e421",
                "company": "6347ff0147019a00212dbe34",
                "lastUpdatedBy": "63161f1ed067e1002109e41f",
                "applicationId": "121858263",
                "createdAt": "2022-10-13T12:05:21.256Z",
                "updatedAt": "2022-10-15T05:42:51.440Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "6347ff0147019a00212dbe3d",
                "termsheet": "6347ff7647019a00212dbe50",
                "grade": "45 -46 cm ",
                "hsnCode": "HSN03058",
                "manufacturerName": "Edge Company",
                "shipmentDetail": {
                    "_id": "634852cd47019a00212dc5a2",
                    "ETAofDischarge": {
                        "fromDate": "2022-11-03T18:30:00.000Z",
                        "toDate": "2022-12-14T18:30:00.000Z"
                    },
                    "lastDateOfShipment": "2023-01-26T18:30:00.000Z",
                    "loadPort": {
                        "fromDate": "2022-10-19T18:30:00.000Z",
                        "toDate": "2022-11-02T18:30:00.000Z"
                    },
                    "shipmentType": "Liner",
                    "portOfLoading": "Abbot Point,Australia"
                },
                "tolerance": 5,
                "productSummary": {
                    "existingSuppliers": [
                        "stevedore"
                    ],
                    "existingCHA": [
                        "stevedore"
                    ],
                    "typeOfCurrency": "INR",
                    "unitOfQuantity": "MT",
                    "_id": "634852f547019a00212dc5b2",
                    "AvgMonthlyElectricityBill": 3500,
                    "availableStock": 25,
                    "averageStockInTransit": 15,
                    "averageStockOfCommodity": 50,
                    "capacityUtilization": 25,
                    "contributionCommoditySenstivity": "Very High",
                    "dailyConsumptionOfCommodity": 35,
                    "existingProcurementOfCommodity": "Import",
                    "monthlyProductionCapacity": 100,
                    "paymentStatusForElectricityBills": "",
                    "stockCoverageOfCommodity": "2022-10-31T18:30:00.000Z"
                },
                "supplierCredential": {
                    "_id": "634852f547019a00212dc5b3",
                    "HSCodesNumber": 23445,
                    "commodityOfTotalTrade": 2,
                    "consigneesNumber": 34,
                    "countryOfOrigin": "45",
                    "latestShipmentDate": "2022-10-13T18:30:00.000Z",
                    "oldestShipmentDate": "2022-10-03T18:30:00.000Z",
                    "portOfDestination": "43",
                    "remarks": "",
                    "shipmentNumber": 23,
                    "supplierName": "Eramet marketing solution "
                },
                "suggestedOrderValue": 2500000000,
                "approvedOrderValue": 2500000000,
                "perUnitPrice": 150,
                "orderId": "INDOI001000001",
                "marginMoney": "6348536e47019a00212dc5f2",
                "generic": "6348536e47019a00212dc5f5",
                "vessel": "6348536e47019a00212dc5f8",
                "lc": "6348536e47019a00212dc5fb",
                "forwardHedging": "6348536e47019a00212dc5fe",
                "inspection": "634855c247019a00212dc728",
                "insurance": "634855c247019a00212dc72c",
                "transit": "634855f147019a00212dc744",
                "customClearance": "634855f147019a00212dc747",
                "delivery": "634855f147019a00212dc74a",
                "lifting": "634857e147019a00212dc90a"
            },
            "lastUpdatedBy": "636892de52e6bd2015dfbac8",
            "updatedAt": "2022-11-16T09:47:46.223Z",
            "remarks": "Discrepant",
            "status": "Rejected"
        }
    ];
    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <VendorDetails
                    vendorDetails={vendorSummary[0].vendorDetails}
                    status={vendorSummary[0].status}
                    keyContactPerson={vendorSummary[0].keyContactPerson}
                    keyAddresses={vendorSummary[0].keyAddresses}
                />
                <BankDetails />
                <Documents />
                <Remarks />
            </div>
        </div>
    )
}

export default Index