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
            "_id": "62ff462348337d00216289f3",
            "status": "Pending",
            "order": {
                "_id": "62ff45cd48337d00216289cc",
                "cam": {
                    "status": "TRANSACTIONSUMMARYPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": "Yes",
                "transactionType": "Import",
                "commodity": "Steel",
                "quantity": 1,
                "orderValue": 2000000000000000,
                "supplierName": "Prashant",
                "countryOfOrigin": "India",
                "portOfDischarge": "Gujrat, India",
                "ExpectedDateOfShipment": "2022-08-25T18:30:00.000Z",
                "incoTerm": "FOB",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62ff45cd48337d00216289ca",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "65807437",
                "createdAt": "2022-08-19T08:11:57.609Z",
                "updatedAt": "2022-08-19T09:28:53.533Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62ff45cd48337d00216289d1",
                "termsheet": "62ff462348337d00216289f3",
                "productSummary": {
                    "existingSuppliers": [
                        "fd"
                    ],
                    "existingCHA": [
                        "dsa"
                    ],
                    "typeOfCurrency": "INR",
                    "unitOfQuantity": "MT",
                    "_id": "62ff57d548337d0021628f9a",
                    "AvgMonthlyElectricityBill": 234,
                    "availableStock": 213,
                    "averageStockInTransit": 231,
                    "averageStockOfCommodity": 3232,
                    "capacityUtilization": 43,
                    "contributionCommoditySenstivity": "Very High",
                    "dailyConsumptionOfCommodity": 2313,
                    "existingProcurementOfCommodity": "Manufacturers",
                    "monthlyProductionCapacity": 1234,
                    "stockCoverageOfCommodity": "2022-08-25T18:30:00.000Z"
                },
                "supplierCredential": {
                    "_id": "62ff57d548337d0021628f9b",
                    "HSCodesNumber": 2343,
                    "commodityOfTotalTrade": 34,
                    "consigneesNumber": 12,
                    "countryOfOrigin": "USA",
                    "latestShipmentDate": "2022-08-26T18:30:00.000Z",
                    "oldestShipmentDate": "2022-08-26T18:30:00.000Z",
                    "portOfDestination": "USA",
                    "remarks": "fssdsd",
                    "shipmentNumber": 12,
                    "supplierName": "Bhutani Traders"
                },
                "grade": "a",
                "manufacturerName": "CBX",
                "shipmentDetail": {
                    "_id": "62ff565648337d0021628edd",
                    "ETAofDischarge": {
                        "fromDate": "2022-08-22T18:30:00.000Z",
                        "toDate": "2022-08-23T18:30:00.000Z"
                    },
                    "lastDateOfShipment": "2022-08-21T18:30:00.000Z",
                    "loadPort": {
                        "fromDate": "2022-08-19T18:30:00.000Z",
                        "toDate": "2022-08-20T18:30:00.000Z"
                    },
                    "shipmentType": "Bulk"
                },
                "tolerance": 1,
                "transactionPeriodDays": 23
            },
            "company": "HIRA POWER AND STEELS LIMITED",
            "createdBy": "62fc856c15027f0021336e1e",
            "lastUpdatedBy": "62fc856c15027f0021336e1e",
            "otherTermsAndConditions": {
                "buyer": "",
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
                    "cimsCharges": true
                },
                "insurance": {
                    "marineInsurance": true,
                    "storageInsurance": true
                }
            },
            "additionalComments": [],
            "createdAt": "2022-08-19T08:13:23.213Z",
            "updatedAt": "2022-08-19T08:13:23.213Z",
            "__v": 0
        },
        {
            "_id": "62ff450b48337d002162897e",
            "status": "Pending",
            "order": {
                "_id": "62ff449548337d002162895b",
                "cam": {
                    "status": "TRANSACTIONSUMMARYPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": "Yes",
                "transactionType": "Import",
                "commodity": "Crude",
                "quantity": 1,
                "orderValue": 51000000000000,
                "supplierName": "",
                "countryOfOrigin": "India",
                "portOfDischarge": "Gujrat, India",
                "ExpectedDateOfShipment": "2022-08-19T18:30:00.000Z",
                "incoTerm": "FOB",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62ff449548337d0021628959",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "100293912",
                "createdAt": "2022-08-19T08:06:45.853Z",
                "updatedAt": "2022-08-19T08:08:43.334Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62ff449548337d0021628960",
                "termsheet": "62ff450b48337d002162897e"
            },
            "company": "INDO GERMAN INTERNATIONAL PRIVATE LIMITED",
            "createdBy": "62fc856c15027f0021336e1e",
            "lastUpdatedBy": "62fc856c15027f0021336e1e",
            "otherTermsAndConditions": {
                "buyer": "",
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
                    "cimsCharges": true
                },
                "insurance": {
                    "marineInsurance": true,
                    "storageInsurance": true
                }
            },
            "additionalComments": [],
            "createdAt": "2022-08-19T08:08:43.314Z",
            "updatedAt": "2022-08-19T08:08:43.314Z",
            "__v": 0
        },
        {
            "_id": "62fe2137a972550021d4f83f",
            "status": "Approved",
            "order": {
                "_id": "62fe024e43fa8b0023567c68",
                "cam": {
                    "status": "TRANSACTIONSUMMARYPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": "Yes",
                "transactionType": "Domestic",
                "commodity": "Coal",
                "quantity": 1000,
                "orderValue": 2000000000,
                "supplierName": "",
                "countryOfOrigin": "America",
                "portOfDischarge": "VishakaPatnam, India",
                "ExpectedDateOfShipment": "2022-08-25T18:30:00.000Z",
                "incoTerm": "CFR",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62fe024e43fa8b0023567c66",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "103516496",
                "createdAt": "2022-08-18T09:11:42.564Z",
                "updatedAt": "2022-09-29T15:12:07.421Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62fe024e43fa8b0023567c6d",
                "termsheet": "62fe2137a972550021d4f83f",
                "perUnitPrice": 23,
                "tolerance": 5,
                "orderId": "INDOD003000001",
                "marginMoney": "6335b5c7cd37ea002173ff26",
                "generic": "6335b5c7cd37ea002173ff29",
                "vessel": "6335b5c7cd37ea002173ff2c",
                "lc": "6335b5c7cd37ea002173ff2f",
                "forwardHedging": "6335b5c7cd37ea002173ff32"
            },
            "company": "ADN FIRE SAFETY PRIVATE LIMITED",
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
                    "cimsCharges": true
                },
                "insurance": {
                    "marineInsurance": true,
                    "storageInsurance": true
                }
            },
            "additionalComments": [],
            "createdAt": "2022-08-18T11:23:35.393Z",
            "updatedAt": "2022-09-29T15:12:07.388Z",
            "__v": 0,
            "commercials": {
                "_id": "6335b5c7cd37ea002173ff21",
                "tradeMarginPercentage": "5",
                "lcOpeningChargesUnit": "1500",
                "lcOpeningChargesPercentage": "1.5",
                "usanceInterestPercetage": "4",
                "overDueInterestPerMonth": "1.5",
                "exchangeFluctuation": "On Buyers A/C",
                "forexHedging": "Yes",
                "otherTermsAndConditions": "As Per Sales Contract",
                "version": "1"
            },
            "paymentDueDate": {
                "_id": "6335b5c7cd37ea002173ff20",
                "daysFromBlDate": "10",
                "daysFromVesselDischargeDate": "6"
            },
            "transactionDetails": {
                "thirdPartyInspectionReq": true,
                "_id": "6335b5c7cd37ea002173ff1f",
                "typeOfPort": "Discharge Port",
                "lcValue": "23000",
                "marginMoney": "10",
                "lcOpeningBank": "Reserve Bank of Spain",
                "incoTerms": "CFR",
                "loadPort": "Westshore Terminals,Canada",
                "countryOfOrigin": "America",
                "shipmentType": "Bulk",
                "partShipmentAllowed": "Yes",
                "portOfDischarge": "VishakaPatnam, India",
                "billOfEntity": "Home Consumption",
                "storageOfGoods": "Mumbai, India"
            }
        },
        {
            "_id": "62fcda54f3d0eb002232dfab",
            "status": "Pending",
            "order": {
                "_id": "62fcd563f3d0eb002232dd9a",
                "cam": {
                    "status": "TRANSACTIONSUMMARYPENDINGCHECKER",
                    "approvalRemarks": []
                },
                "unitOfQuantity": "mt",
                "orderCurrency": "INR",
                "unitOfValue": "Cr",
                "unitOfGrade": "Cr",
                "existingCustomer": "Yes",
                "transactionType": "Domestic",
                "commodity": "Iron",
                "quantity": 100,
                "orderValue": 5e+22,
                "supplierName": "Ramakrishna Traders",
                "countryOfOrigin": "India",
                "portOfDischarge": "Gujrat, India",
                "ExpectedDateOfShipment": "2022-08-26T18:30:00.000Z",
                "incoTerm": "CIF",
                "createdBy": "62fc856c15027f0021336e1e",
                "company": "62fcd563f3d0eb002232dd98",
                "lastUpdatedBy": "62fc856c15027f0021336e1e",
                "applicationId": "6840752",
                "createdAt": "2022-08-17T11:47:47.228Z",
                "updatedAt": "2022-10-02T19:01:26.592Z",
                "__v": 0,
                "queue": "CreditQueue",
                "review": "62fcd563f3d0eb002232dd9f",
                "termsheet": "62fcda54f3d0eb002232dfab",
                "shipmentDetail": {
                    "_id": "6339df6ab401ce0021dc0527",
                    "ETAofDischarge": {
                        "fromDate": "2022-10-11T18:30:00.000Z",
                        "toDate": "2022-10-19T18:30:00.000Z"
                    },
                    "lastDateOfShipment": "2022-10-02T18:30:00.000Z",
                    "loadPort": {
                        "fromDate": "2022-10-03T18:30:00.000Z",
                        "toDate": "2022-10-09T18:30:00.000Z"
                    },
                    "shipmentType": "Liner",
                    "portOfLoading": "Abbot Point,Australia"
                },
                "grade": "c",
                "hsnCode": "34343",
                "tolerance": 5,
                "productSummary": {
                    "existingSuppliers": [
                        "JINDAL"
                    ],
                    "existingCHA": [
                        "mom"
                    ],
                    "typeOfCurrency": "INR",
                    "unitOfQuantity": "mt",
                    "_id": "6339e006b401ce0021dc054e",
                    "AvgMonthlyElectricityBill": 200000,
                    "availableStock": 456,
                    "averageStockInTransit": 3456,
                    "averageStockOfCommodity": 344,
                    "capacityUtilization": 34,
                    "contributionCommoditySenstivity": "Very High",
                    "dailyConsumptionOfCommodity": 10,
                    "existingProcurementOfCommodity": "Manufacturers",
                    "monthlyProductionCapacity": 33456,
                    "paymentStatusForElectricityBills": "",
                    "stockCoverageOfCommodity": "2022-10-13T18:30:00.000Z"
                },
                "supplierCredential": {
                    "_id": "6339e006b401ce0021dc054f",
                    "HSCodesNumber": 234,
                    "commodityOfTotalTrade": 4,
                    "consigneesNumber": 2,
                    "countryOfOrigin": "45",
                    "latestShipmentDate": "2022-10-02T18:30:00.000Z",
                    "oldestShipmentDate": "2022-09-27T18:30:00.000Z",
                    "portOfDestination": "43",
                    "remarks": "",
                    "shipmentNumber": 2,
                    "supplierName": "Ramakrishna Traders"
                }
            },
            "company": "ONEASSIST CONSUMER SOLUTIONS PRIVATE LIMITED",
            "createdBy": "62fc856c15027f0021336e1e",
            "lastUpdatedBy": "62fc856c15027f0021336e1e",
            "otherTermsAndConditions": {
                "buyer": "",
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
                    "cimsCharges": true
                },
                "insurance": {
                    "marineInsurance": true,
                    "storageInsurance": true
                }
            },
            "additionalComments": [],
            "createdAt": "2022-08-17T12:08:52.071Z",
            "updatedAt": "2022-08-17T12:08:52.071Z",
            "__v": 0
        }
    ],
    "total": 4
}

function Index() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Checker');
      sessionStorage.setItem('loadedSubPage', `Transaction Summary`);
      sessionStorage.setItem('openList', 6);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageName('checker-transaction-summary'));
    dispatch(setDynamicName(null));
  });

  const tableColumns = useMemo(() => [
    {
      Header: 'Company Name',
      accessor: 'company',
      disableSortBy: true,
    },
    {
      Header: 'Existing Customer',
      accessor: 'order.existingCustomer',
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
            <a className="cursor-pointer">
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

  const handleRoute = (transactionSummary) => {
    sessionStorage.setItem('checkerTransactionSummaryId', transactionSummary?._id);
    sessionStorage.setItem('checkerTransactionSummaryName', transactionSummary?.order?.company);
    dispatch(setDynamicName(transactionSummary?.company?.companyName));
    Router.push('/checker/transaction-summary/id');
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
            <h1 className={styles.heading}>Transaction Summary</h1>
          </div>
        </div>

        {/* Queue Table */}
        <Table
          tableHeading="Transaction Summary"
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
