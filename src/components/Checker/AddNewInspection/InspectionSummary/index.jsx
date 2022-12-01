import React from 'react';
import styles from './index.module.scss';
import Remarks from '../../Common/Remarks';
import Appointment from './Appointment';
import ThirdPartyInspection from './ThirdPartyInspection';
import PlotInspection from './PlotInspection';

function Index() {

    const inspectionSummary = {
        "_id": "6387931813aeb30025fa59a4",
        "thirdPartyInspection": {
            "loadPortInspection": true,
            "dischargePortInspection": true,
            "dischargeCertificateOfOriginStatus": "Approved",
            "dischargeCertificateOfQualityStatus": "Approved",
            "dischargeCertificateOfWeightStatus": "Pending",
            "certificateOfOriginStatus": "Approved",
            "certificateOfQualityStatus": "Approved",
            "certificateOfWeightStatus": "Pending",
            "quantity": "500",
            "loadPortInspectionDetails": {
                "numberOfContainer": 45,
                "inspectionPort": "Abbot Point,Australia",
                "inspectedBy": "anybody",
                "startDate": "2022-11-30T18:30:00.000Z"
            },
            "dischargePortInspectionDetails": {
                "numberOfContainer": 45,
                "inspectionPort": "Abbot Point,Australia",
                "inspectedBy": "Honey",
                "startDate": "2022-12-01T18:30:00.000Z"
            },
            "certificateOfOrigin": {
                "deleted": false,
                "uploadedBy": "62fc856c15027f0021336e1e",
                "name": "certificateOfOrigin",
                "originalName": "RequestLetter (3).pdf",
                "format": "application/pdf",
                "path": "assets/user-uploaded/docs/1669830197392_RequestLetter_(3).pdf",
                "date": "2022-11-30T17:43:17.482Z"
            },
            "dischargeCertificateOfOrigin": {
                "deleted": false,
                "uploadedBy": "62fc856c15027f0021336e1e",
                "name": "dischargeCertificateOfOrigin",
                "originalName": "RequestLetter (3).pdf",
                "format": "application/pdf",
                "path": "assets/user-uploaded/docs/1669830197393_RequestLetter_(3).pdf",
                "date": "2022-11-30T17:43:17.482Z"
            },
            "certificateOfQuality": {
                "deleted": false,
                "uploadedBy": "62fc856c15027f0021336e1e",
                "name": "certificateOfQuality",
                "originalName": "ApplicationLC (44).pdf",
                "format": "application/pdf",
                "path": "assets/user-uploaded/docs/1669832331654_ApplicationLC_(44).pdf",
                "date": "2022-11-30T18:18:51.768Z"
            },
            "dischargeCertificateOfQuality": {
                "deleted": false,
                "uploadedBy": "62fc856c15027f0021336e1e",
                "name": "dischargeCertificateOfQuality",
                "originalName": "ApplicationLC (44).pdf",
                "format": "application/pdf",
                "path": "assets/user-uploaded/docs/1669832331656_ApplicationLC_(44).pdf",
                "date": "2022-11-30T18:18:51.768Z"
            }
        },
        "thirdPartyInspectionRequired": true,
        "order": {
            "_id": "63878ac313aeb30025fa56ba",
            "cam": {
                "status": "Approved",
                "approvedBy": "62fc856c15027f0021336e1e",
                "approvedAt": "2022-11-30T17:05:50.038Z",
                "approvalRemarks": []
            },
            "unitOfQuantity": "KG",
            "orderCurrency": "USD",
            "unitOfValue": "Crores",
            "unitOfGrade": "Cr",
            "existingCustomer": true,
            "transactionType": "Import",
            "commodity": "Coal & Coke",
            "quantity": 500,
            "orderValue": 2000000000,
            "supplierName": "ERAMET MARKETING SERVICES",
            "countryOfOrigin": "Belarus",
            "portOfDischarge": "Mundra",
            "ExpectedDateOfShipment": "2023-03-04T18:30:00.000Z",
            "incoTerm": "CFR",
            "grade": "A",
            "tolerance": 4,
            "transactionPeriodDays": 95,
            "manufacturerName": "Adani",
            "shipmentDetail": {
                "_id": "63878c2f13aeb30025fa575b",
                "ETAofDischarge": {
                    "fromDate": "2023-03-05T18:30:00.000Z",
                    "toDate": "2023-03-08T18:30:00.000Z"
                },
                "lastDateOfShipment": "2023-03-09T18:30:00.000Z",
                "loadPort": {
                    "fromDate": "2022-11-30T18:30:00.000Z",
                    "toDate": "2022-12-04T18:30:00.000Z"
                },
                "shipmentType": "Liner",
                "portOfLoading": "Abbot Point,Australia"
            },
            "createdBy": "62fc856c15027f0021336e1e",
            "company": "630068610a3ecb0021651970",
            "lastUpdatedBy": "62fc856c15027f0021336e1e",
            "applicationId": "APPL00000229",
            "createdAt": "2022-11-30T16:54:27.480Z",
            "updatedAt": "2022-12-01T08:57:32.191Z",
            "__v": 0,
            "queue": "CreditQueue",
            "review": "63878ac313aeb30025fa56c6",
            "termsheet": {
                "_id": "63878afc13aeb30025fa56f7",
                "status": "Approved",
                "order": "63878ac313aeb30025fa56ba",
                "company": "630068610a3ecb0021651970",
                "createdBy": "62fc856c15027f0021336e1e",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "otherTermsAndConditions": {
                    "buyer": {
                        "bank": "Indo German International Private Limited (IGPL)"
                    },
                    "chaOrstevedoringCharges": {
                        "customClearingCharges": true,
                        "wharfaceCharges": true,
                        "pollutionCharges": true,
                        "royalyAndPenaltyCharges": true,
                        "tarpaulinCoverageCharges": true,
                        "wheighmentAndWeighmentSurveyCharges": true,
                        "draughtSurveyCharges": true,
                        "boatingWhileDraughtSurveyCharges": true,
                        "hmcCharges": true,
                        "securityCharges": true,
                        "piotRentalAndStorageCharges": true,
                        "bondingOfCargoCharges": true,
                        "exBondDocumentationCharges": true,
                        "transferOfOwnershipCharges": true,
                        "customsBondOfficerOvertimeCharges": true,
                        "grabHireCharges": true,
                        "craneHireCharges": true,
                        "handlingLosses": true,
                        "insuranceCharges": true,
                        "waterSprinklingCharges": true,
                        "others": true
                    },
                    "lcOpeningCharges": {
                        "lcOpeningCharges": true,
                        "lcAmendmentCost": true,
                        "cmaFeesIncludingSupervisionAndSurvey": true,
                        "bankDoIssuanceCharges": true,
                        "remmittanceCharges": true,
                        "usanceInterest": true
                    },
                    "otherCharges": {
                        "demurrageOrDetentionChargesOfVessel": true,
                        "transportationCharges": true,
                        "wagonHaulageCharges": true,
                        "thirdPartyInspectionCharges": true,
                        "hedgingCharges": true,
                        "anyOtherCostIncurredOnBehalfOfBuyer": true
                    },
                    "dutyAndTaxes": {
                        "customsDutyWithAllGovtCess": true,
                        "igstWithCess": true,
                        "cimsCharges": true,
                        "taxCollectedatSource": true
                    },
                    "insurance": {
                        "marineInsurance": true,
                        "storageInsurance": true
                    }
                },
                "additionalComments": [],
                "createdAt": "2022-11-30T16:55:24.171Z",
                "updatedAt": "2022-12-01T08:57:32.198Z",
                "__v": 0,
                "commercials": {
                    "_id": "63886c7c13aeb30025fa7d59",
                    "tradeMarginPercentage": "2.25",
                    "lcOpeningChargesUnit": "1500",
                    "lcOpeningChargesPercentage": "1.5",
                    "usanceInterestPercetage": "4",
                    "overDueInterestPerMonth": "1.5",
                    "exchangeFluctuation": "On Buyers A/C",
                    "forexHedging": "Yes",
                    "otherTermsAndConditions": "As per the Agreements",
                    "version": "1"
                },
                "paymentDueDate": {
                    "_id": "63886c7c13aeb30025fa7d58",
                    "computationOfDueDate": "DaysfromBLDate",
                    "daysFromBlDate": "10"
                },
                "transactionDetails": {
                    "thirdPartyInspectionReq": true,
                    "_id": "63886c7c13aeb30025fa7d57",
                    "typeOfPort": "Both",
                    "lcValue": "5000000000",
                    "marginMoney": "10",
                    "lcOpeningBank": "ICICI",
                    "incoTerms": "CFR",
                    "loadPort": "Abau, Papua New Guinea",
                    "countryOfOrigin": "Belarus",
                    "shipmentType": "Liner",
                    "partShipmentAllowed": "Yes",
                    "portOfDischarge": "Mundra",
                    "billOfEntity": "Home Consumption",
                    "storageOfGoods": "Mundra"
                }
            },
            "hsnCode": "1234567890",
            "productSummary": {
                "existingSuppliers": [
                    "Test"
                ],
                "existingCHA": [
                    "Test"
                ],
                "typeOfCurrency": "",
                "unitOfQuantity": "MT",
                "_id": "63878cd813aeb30025fa5787",
                "AvgMonthlyElectricityBill": 200000,
                "availableStock": 5000,
                "averageStockInTransit": 2000,
                "averageStockOfCommodity": 5000,
                "capacityUtilization": 5,
                "contributionCommoditySenstivity": "High",
                "dailyConsumptionOfCommodity": 50,
                "existingProcurementOfCommodity": "Import",
                "monthlyProductionCapacity": 1500,
                "paymentStatusForElectricityBills": "",
                "stockCoverageOfCommodity": "2022-11-30T18:30:00.000Z"
            },
            "suggestedOrderValue": 2000000000,
            "supplierCredential": {
                "_id": "63878cd813aeb30025fa5788",
                "HSCodesNumber": 123,
                "commodityOfTotalTrade": 4,
                "consigneesNumber": 3,
                "countryOfOrigin": "45",
                "latestShipmentDate": "2022-11-29T18:30:00.000Z",
                "oldestShipmentDate": "2022-11-19T18:30:00.000Z",
                "portOfDestination": "43",
                "remarks": "",
                "shipmentNumber": 2,
                "supplierName": "ERAMET MARKETING SERVICES"
            },
            "approvedOrderValue": 2000000000,
            "perUnitPrice": 10000000,
            "orderId": "INDOI012000019",
            "marginMoney": "63878e2613aeb30025fa5840",
            "generic": {
                "_id": "63878e2613aeb30025fa5843",
                "supplier": {
                    "name": "ERAMET MARKETING SERVICES",
                    "shortName": "XYZ",
                    "bankDetails": {
                        "bankName": "Bank name",
                        "accountNo": "34576453",
                        "swiftCode": "3444",
                        "city": "Mumbai"
                    },
                    "addresses": [
                        {
                            "addressType": "Branch",
                            "fullAddress": "Mumbai",
                            "pinCode": "123411",
                            "country": "India",
                            "gstin": "",
                            "state": "MAharashtra",
                            "city": "Mumbai"
                        }
                    ],
                    "authorisedSignatoryDetails": [
                        {
                            "name": "TATA",
                            "designation": "Director",
                            "email": "devesh@indointertrade.ch",
                            "phoneNo": "9876543210",
                            "document": {
                                "deleted": false,
                                "date": "2022-11-30T17:14:50.158Z"
                            }
                        }
                    ],
                    "multiParty": true,
                    "multiPartyAddresses": [
                        {
                            "addressType": "Branch",
                            "fullAddress": "Mumbai",
                            "pinCode": "123411",
                            "country": "India",
                            "gstin": "",
                            "state": "MAharashtra",
                            "city": "Mumbai"
                        }
                    ],
                    "multiPartyName": "MANUFACTURER",
                    "isSubmitted": true
                },
                "seller": {
                    "name": "Indo Intertrade Ag",
                    "shortName": "XYZ",
                    "addresses": [
                        {
                            "addressType": "Registered",
                            "fullAddress": "Industriestrasse 16",
                            "pinCode": "6300",
                            "country": "Switzerland",
                            "gstin": "",
                            "state": "",
                            "city": "Zug"
                        },
                        {
                            "addressType": "Registered",
                            "fullAddress": "Mumbai",
                            "pinCode": "123411",
                            "country": "India",
                            "gstin": "",
                            "state": "",
                            "city": ""
                        }
                    ],
                    "authorisedSignatoryDetails": [
                        {
                            "name": "Devesh Jain",
                            "designation": "Director",
                            "email": "devesh@indointertrade.ch",
                            "phoneNo": "9876543210"
                        }
                    ],
                    "isSubmitted": true
                },
                "buyer": {
                    "name": "Indo German International Private Limited",
                    "branch": "MORMUGOA",
                    "gstin": "30AAACI3028D1ZF",
                    "pan": "AAACI3028D",
                    "shortName": "IGIPL",
                    "addresses": [
                        {
                            "addressType": "Registered",
                            "fullAddress": "2nd Floor, 7A, Laxmi Chambers, Jetty Road, Mormugao, Vasco Da Gama, South Goa, Goa, 403804",
                            "pinCode": "403804",
                            "country": "India",
                            "gstin": "30AAACI3028D1ZF",
                            "state": "GOA",
                            "city": "Vasco da Gama"
                        }
                    ],
                    "authorisedSignatoryDetails": [
                        {
                            "name": "Vipin Kumar",
                            "designation": "Manager Accounts",
                            "email": "vipinrajput@somanigroup.com",
                            "phoneNo": "9876543210"
                        },
                        {
                            "name": "Bhawana Jain",
                            "designation": "Vice President \n( Finance & Accounts )\n",
                            "email": "bhawanajain@somanigroup.com",
                            "phoneNo": "9876543210"
                        }
                    ],
                    "isSubmitted": true
                },
                "associateBuyer": {
                    "gstin": "30AAACI3028D1ZF",
                    "addresses": [
                        {
                            "addressType": "Registered",
                            "fullAddress": "Mumbai",
                            "pinCode": "123456",
                            "country": "India",
                            "gstin": "",
                            "state": "",
                            "city": ""
                        }
                    ],
                    "authorisedSignatoryDetails": [
                        {
                            "name": "TARUN KUMAR SOMANI",
                            "designation": "DIRECTOR",
                            "email": "ta******60@gmail.com",
                            "phoneNo": "9876543210"
                        },
                        {
                            "name": "ATUL KUMAR VARMA",
                            "designation": "DIRECTOR",
                            "email": "at******ma@gmail.com",
                            "phoneNo": "9876543210"
                        }
                    ],
                    "isSubmitted": true
                },
                "CHA": {
                    "name": "Integral Trading and Logistics",
                    "shortName": "XYZ",
                    "gstin": "37AABFI9574L2ZP",
                    "addresses": [
                        {
                            "addressType": "Registered",
                            "fullAddress": "Flat No. 303, 3rd Floor, Tirumala Plaza,\nDabagarden, Visakhapatnam\nAndhra Pradesh-530020",
                            "pinCode": "530020",
                            "gstin": "37AABFI9574L2ZP",
                            "state": "Andhra Pradesh",
                            "city": "Visakhapatnam"
                        },
                        {
                            "addressType": "Branch",
                            "fullAddress": "Mumbai",
                            "pinCode": "123411",
                            "country": "India",
                            "gstin": "37AABFI9574L2ZP",
                            "state": "MAharashtra",
                            "city": "Mumbai"
                        }
                    ],
                    "authorisedSignatoryDetails": [
                        {
                            "name": "Mr. Anjani Kumar",
                            "designation": "Manager",
                            "email": "anjanikumar@integraltrading.net",
                            "phoneNo": "9246649941"
                        }
                    ],
                    "isSubmitted": true
                },
                "stevedore": {
                    "name": "Integral Trading and Logistics",
                    "shortName": "XYZ",
                    "gstin": "37AABFI9574L2ZP",
                    "addresses": [
                        {
                            "addressType": "Registered",
                            "fullAddress": "Flat No. 303, 3rd Floor, Tirumala Plaza,\nDabagarden, Visakhapatnam\nAndhra Pradesh-530020",
                            "pinCode": "530020",
                            "gstin": "37AABFI9574L2ZP",
                            "state": "Andhra Pradesh",
                            "city": "Visakhapatnam"
                        },
                        {
                            "addressType": "Branch",
                            "fullAddress": "Mumbai",
                            "pinCode": "123411",
                            "country": "India",
                            "gstin": "37AABFI9574L2ZP",
                            "state": "MAharashtra",
                            "city": "Mumbai"
                        }
                    ],
                    "authorisedSignatoryDetails": [
                        {
                            "name": "Mr. Anjani Kumar",
                            "designation": "Manager",
                            "email": "anjanikumar@integraltrading.net",
                            "phoneNo": "9246649941"
                        }
                    ],
                    "isSubmitted": true
                },
                "CMA": {
                    "name": "Dr. Amin Controllers Private Limited",
                    "shortName": "XYZ",
                    "gstin": "29AAACA3912A1ZB",
                    "designatedStorageArea": "Mundra",
                    "addresses": [
                        {
                            "addressType": "Registered",
                            "fullAddress": "Embassy Chambers, 6th Floor, Plot No 5,Road No 3, Khar (West), Mumbai-400 052",
                            "pinCode": "400052",
                            "gstin": "29AAACA3912A1ZB",
                            "state": "Maharashtra",
                            "city": "Mumbai"
                        },
                        {
                            "addressType": "Branch",
                            "fullAddress": "Mumbai",
                            "pinCode": "123411",
                            "country": "India",
                            "gstin": "29AAACA3912A1ZB",
                            "state": "MAharashtra",
                            "city": "Mumbai"
                        }
                    ],
                    "authorisedSignatoryDetails": [
                        {
                            "name": "Ms. Ayushi Amin",
                            "designation": "Manager Administration",
                            "email": "ayushi@rcaindia.net",
                            "phoneNo": "9819699195"
                        }
                    ],
                    "isSubmitted": true
                },
                "deliveryTerms": {
                    "deliveryTerm": "CIF\tCost Insurance Freight Incoterms 2000",
                    "paymentTerms": "DaysfromVesselDate",
                    "cheque": [
                        {
                            "_id": "638790ab13aeb30025fa592f",
                            "sNo": "1",
                            "bankName": "Bank name",
                            "chequeNo": "12345689976",
                            "chequeDate": "2022-11-30T18:30:00.000Z",
                            "amount": 123451
                        }
                    ],
                    "isSubmitted": true
                },
                "additionalComments": {
                    "comments": [
                        {
                            "_id": "6387913313aeb30025fa5956",
                            "agreementName": "Sales Agreement",
                            "comment": "testing",
                            "dateOfExecution": null,
                            "dateOfContract": "",
                            "monthOfLoadingCargo": ""
                        },
                        {
                            "_id": "6387913313aeb30025fa5957",
                            "agreementName": "Associateship Agreement",
                            "comment": "testing",
                            "dateOfExecution": null,
                            "dateOfContract": "",
                            "monthOfLoadingCargo": ""
                        },
                        {
                            "_id": "6387913313aeb30025fa5958",
                            "agreementName": "TPA (Seller)",
                            "comment": "testing",
                            "dateOfExecution": null,
                            "dateOfContract": "",
                            "monthOfLoadingCargo": ""
                        },
                        {
                            "_id": "6387913313aeb30025fa5959",
                            "agreementName": "Assignment Letter",
                            "comment": "testing",
                            "dateOfExecution": null,
                            "dateOfContract": "2022-11-30T18:30:00.000Z",
                            "monthOfLoadingCargo": "December"
                        },
                        {
                            "_id": "6387913313aeb30025fa595a",
                            "agreementName": "QPA",
                            "comment": "testing",
                            "dateOfExecution": null,
                            "dateOfContract": "",
                            "monthOfLoadingCargo": ""
                        },
                        {
                            "_id": "6387913313aeb30025fa595b",
                            "agreementName": "TPA (CMA)",
                            "comment": "testing",
                            "dateOfExecution": null,
                            "dateOfContract": "",
                            "monthOfLoadingCargo": ""
                        }
                    ],
                    "isSubmitted": true
                },
                "placeOfExecution": {
                    "execution": [
                        {
                            "_id": "638790f313aeb30025fa5940",
                            "agreementName": "Sales Agreement",
                            "place": "Mumbai",
                            "dateOfExecution": "2022-11-30T18:30:00.000Z"
                        },
                        {
                            "_id": "638790f313aeb30025fa5941",
                            "agreementName": "Associateship Agreement",
                            "place": "Mumbai",
                            "dateOfExecution": "2022-12-01T18:30:00.000Z"
                        },
                        {
                            "_id": "638790f313aeb30025fa5942",
                            "agreementName": "TPA (Seller)",
                            "place": "Mumbai",
                            "dateOfExecution": "2022-12-02T18:30:00.000Z"
                        },
                        {
                            "_id": "638790f313aeb30025fa5943",
                            "agreementName": "Assignment Letter",
                            "place": "Mumbai",
                            "dateOfExecution": "2022-12-03T18:30:00.000Z"
                        },
                        {
                            "_id": "638790f313aeb30025fa5944",
                            "agreementName": "QPA",
                            "place": "Mumbai",
                            "dateOfExecution": "2022-12-04T18:30:00.000Z"
                        },
                        {
                            "_id": "638790f313aeb30025fa5945",
                            "agreementName": "TPA (CMA)",
                            "place": "Mumbai",
                            "dateOfExecution": "2022-12-05T18:30:00.000Z"
                        }
                    ],
                    "isSubmitted": true
                },
                "productSpecifications": {
                    "comments": [
                        "Sample Test"
                    ],
                    "specificationTable": [
                        {
                            "S. No.": 1,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "05/03/2021",
                            "Prescribed Timeline": "4"
                        },
                        {
                            "S. No.": 2,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "18/05/2020",
                            "Prescribed Timeline": "5"
                        },
                        {
                            "S. No.": 3,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "03/01/2021",
                            "Prescribed Timeline": "6"
                        },
                        {
                            "S. No.": 4,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "18/05/2020",
                            "Prescribed Timeline": "7"
                        },
                        {
                            "S. No.": 5,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "03/02/2021",
                            "Prescribed Timeline": "8"
                        },
                        {
                            "S. No.": 6,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "13/09/2016",
                            "Prescribed Timeline": "9"
                        },
                        {
                            "S. No.": 7,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "18/05/2020",
                            "Prescribed Timeline": "10"
                        },
                        {
                            "S. No.": 8,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "13/09/2016",
                            "Prescribed Timeline": "11"
                        },
                        {
                            "S. No.": 9,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "13/09/2016",
                            "Prescribed Timeline": "12"
                        },
                        {
                            "S. No.": 10,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "18/05/2020",
                            "Prescribed Timeline": "13"
                        },
                        {
                            "S. No.": 11,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 12,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 13,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 14,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 15,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 16,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 17,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 18,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 19,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "13/09/2016",
                            "Prescribed Timeline": "14"
                        },
                        {
                            "S. No.": 20,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "15"
                        },
                        {
                            "S. No.": 21,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "16/09/2016",
                            "Prescribed Timeline": "16"
                        },
                        {
                            "S. No.": 22,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "17"
                        },
                        {
                            "S. No.": 23,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "06/05/2015",
                            "Prescribed Timeline": "18"
                        },
                        {
                            "S. No.": 24,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "03/02/2021",
                            "Prescribed Timeline": "19"
                        },
                        {
                            "S. No.": 25,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "05/12/2018",
                            "Prescribed Timeline": "20"
                        },
                        {
                            "S. No.": 26,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "28/04/2017",
                            "Prescribed Timeline": "21"
                        },
                        {
                            "S. No.": 27,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "13/09/2016",
                            "Prescribed Timeline": "22"
                        },
                        {
                            "S. No.": 28,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "14/10/2016",
                            "Prescribed Timeline": "23"
                        },
                        {
                            "S. No.": 29,
                            "Name of Servcie": "Issuance of Land Status Report",
                            "Concerned Department": "Department of Revenue",
                            "Date of GoLive": "05/07/2021",
                            "Prescribed Timeline": "24"
                        }
                    ],
                    "isSubmitted": true
                },
                "order": "63878ac313aeb30025fa56ba",
                "company": "630068610a3ecb0021651970",
                "createdAt": "2022-11-30T17:08:54.886Z",
                "updatedAt": "2022-12-01T06:36:35.634Z",
                "__v": 0,
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "financingBank": {
                    "name": "Ing Bank N.V",
                    "branch": "Amsterdam",
                    "isSubmitted": true
                },
                "shippingLine": {
                    "name": "SGS India Pvt Ltd",
                    "vesselName": "MV Crimso",
                    "isSubmitted": true
                }
            },
            "vessel": {
                "_id": "63878e2613aeb30025fa5846",
                "partShipmentAllowed": false,
                "order": "63878ac313aeb30025fa56ba",
                "company": "630068610a3ecb0021651970",
                "vessels": [
                    {
                        "_id": "6387997113aeb30025fa5b7e",
                        "shipmentType": "Liner",
                        "commodity": "Coal & Coke",
                        "quantity": 200,
                        "orderValue": 2000000000,
                        "transitDetails": {
                            "countryOfOrigin": "Belarus",
                            "portOfLoading": "Abbot Point,Australia",
                            "portOfDischarge": "Mundra",
                            "laycanFrom": "2022-11-30T18:30:00.000Z",
                            "laycanTo": "2022-12-04T18:30:00.000Z",
                            "EDTatLoadPort": "2023-03-08T18:30:00.000Z",
                            "ETAatDischargePort": "2023-03-09T18:30:00.000Z"
                        },
                        "shippingInformation": {
                            "shippingLineOrCharter": "SGS India Pvt Ltd",
                            "numberOfContainers": 45,
                            "freeDetentionPeriod": 46
                        },
                        "vesselInformation": [
                            {
                                "isVesselInsured": false,
                                "_id": "6387953f13aeb30025fa5a1b",
                                "name": "MV Crimso",
                                "IMONumber": "1234567",
                                "flag": "IND",
                                "yearOfBuilt": "2022-01-01T00:00:00.000Z",
                                "shippingLineOrCharter": "SGS India Pvt Ltd"
                            },
                            {
                                "isVesselInsured": false,
                                "_id": "6387997113aeb30025fa5b80",
                                "name": "TATA",
                                "IMONumber": "1234567",
                                "flag": "ind",
                                "yearOfBuilt": "2022-01-01T00:00:00.000Z"
                            }
                        ]
                    }
                ],
                "createdAt": "2022-11-30T17:08:54.891Z",
                "updatedAt": "2022-11-30T17:57:05.775Z",
                "__v": 0,
                "containerExcel": {
                    "deleted": false,
                    "name": "",
                    "path": "assets/user-uploaded/docs/1669829894603_Sample_Excel.xlsx",
                    "originalName": "Sample Excel.xlsx",
                    "date": "2022-11-30T17:38:14.732Z",
                    "format": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                },
                "containerListDocument": {
                    "deleted": false,
                    "name": "",
                    "path": "assets/user-uploaded/docs/1669829926718_Sample_Excel.xlsx",
                    "originalName": "Sample Excel.xlsx",
                    "date": "2022-11-30T17:38:46.805Z",
                    "format": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                },
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "vesselCertificate": {
                    "deleted": false,
                    "name": "",
                    "path": "assets/user-uploaded/docs/1669829909161_ApplicationLC_(45).pdf",
                    "originalName": "ApplicationLC (45).pdf",
                    "date": "2022-11-30T17:38:29.216Z",
                    "format": "application/pdf"
                }
            },
            "lc": {
                "_id": "63878e2613aeb30025fa5849",
                "ifFormFilled": true,
                "firstTimeUpdate": false,
                "documentRequired": [
                    "All document"
                ],
                "additionalConditions": [
                    "Enviormental"
                ],
                "order": "63878ac313aeb30025fa56ba",
                "company": "630068610a3ecb0021651970",
                "document": [],
                "createdAt": "2022-11-30T17:08:54.896Z",
                "updatedAt": "2022-12-01T09:10:34.963Z",
                "__v": 0,
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "lcApplication": {
                    "formOfDocumentaryCredit": "Irrevocable",
                    "applicableRules": "111",
                    "dateOfExpiry": "2022-11-30T18:30:00.000Z",
                    "placeOfExpiry": "mumbai",
                    "lcIssuingBank": "ICICI",
                    "applicant": "Indo Intertrade AG",
                    "beneficiary": "ERAMET MARKETING SERVICES",
                    "currecyCodeAndAmountValue": "12345",
                    "currecyCodeAndAmountUnit": "USD",
                    "tolerancePercentage": "4",
                    "creditAvailablewith": "BANK",
                    "creditAvailableBy": "By Negotiation",
                    "atSight": "Usuance",
                    "numberOfDays": "10",
                    "drawee": "12",
                    "deferredPayment": "45",
                    "partialShipment": "No",
                    "transhipments": "No",
                    "shipmentForm": "Pune",
                    "portOfLoading": "Abbot Point,Australia",
                    "portOfDischarge": "Mundra",
                    "latestDateOfShipment": "2022-11-29T18:30:00.000Z",
                    "DescriptionOfGoods": "Goods",
                    "presentaionPeriod": "DOCUMENTS TO BE PRESENTED WITHIN 21 DAYS AFTER SHIPMENT DATE BUT WITHIN VALIDITY OF THE LC",
                    "confirmationInstructions": "Confirm",
                    "reimbursingBank": "SBI",
                    "adviceThroughBank": "RBI",
                    "secondAdvisingBank": "Maharashtra",
                    "requestedConfirmationParty": "3rd party",
                    "charges": "ALL THE CHARGES OUTSIDE LC ISSUING BANK ARE FOR THE BENEFICIARY’S ACCOUNT",
                    "instructionToBank": "THE DOCUMENTS ARE TO BE COURIERED TO ........... (LC ISSUING BANK ADDRESS)..............UPON RECEIPT AT OUR COUNTERS OF A STRICTLY COMPLYING PRESENTATION, WE UNDERTAKE TO COVER YOU WITHIN 5 BANKING DAYS AS PER YOUR INSTRUCTIONS",
                    "senderToReceiverInformation": "Information given by client"
                },
                "inspection": "6387931813aeb30025fa59a4",
                "insurance": "6387931813aeb30025fa59a8"
            },
            "forwardHedging": "63878e2613aeb30025fa584c",
            "inspection": "6387931813aeb30025fa59a4",
            "insurance": "6387931813aeb30025fa59a8",
            "transit": "6387953b13aeb30025fa5a0c",
            "customClearance": "6387953b13aeb30025fa5a0f",
            "delivery": "6387953b13aeb30025fa5a12"
        },
        "company": {
            "_id": "630068610a3ecb0021651970",
            "customerId": "DEV2200000$$",
            "companyName": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED"
        },
        "createdAt": "2022-11-30T17:30:00.076Z",
        "updatedAt": "2022-12-01T08:13:32.580Z",
        "__v": 0,
        "lastUpdatedBy": "62fc856c15027f0021336e1e",
        "thirdPartyAppointment": {
            "name": "SGS India Pvt Ltd",
            "dateOfAppointment": "2022-11-30T18:30:00.000Z",
            "address": {
                "fullAddress": "4B, Adi Shankaracharya Marg, Vikhroli (West)",
                "pinCode": ""
            }
        },
        "plotInspection": {
            "plotInspectionDate": "2022-11-30T18:30:00.000Z",
            "plotInspectionReport": {
                "deleted": false,
                "uploadedBy": "62fc856c15027f0021336e1e",
                "name": "plotInspectionReport",
                "originalName": "RequestLetter (3).pdf",
                "format": "application/pdf",
                "path": "assets/user-uploaded/docs/1669830214652_RequestLetter_(3).pdf",
                "date": "2022-11-30T17:43:34.734Z"
            }
        }
    };

    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <Appointment thirdPartyAppointment={inspectionSummary?.thirdPartyAppointment} />
                <ThirdPartyInspection thirdPartyInspection={inspectionSummary?.thirdPartyInspection} order={inspectionSummary?.order} />
                <PlotInspection />
                <Remarks />
            </div>
        </div>
    )
}

export default Index