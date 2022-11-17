import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Paginatebar from '../Paginatebar';
import TermsheetPopUp from '../TermsheetPopUp';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetTermsheet, sharingTermsheetEmail } from 'redux/buyerProfile/action';
import { setDynamicName, setDynamicOrder, setPageName } from '../../redux/userData/action';
import moment from 'moment';
import jsPDF from 'jspdf';
import ReactDOMServer from 'react-dom/server';
import _get from 'lodash/get';

function Index() {
  const toPrint = useRef();

  const dispatch = useDispatch();

  const { termsheet } = useSelector((state) => state.order);

  let Id = sessionStorage.getItem('termID');
  let orderId = _get(termsheet, 'data[0].order.orderId', 'Order Id');

  useEffect(() => {
    dispatch(GetTermsheet(`?termsheetId=${Id}`));
  }, [dispatch, Id]);

  useEffect(() => {
    dispatch(setPageName('termsheet'));
    dispatch(setDynamicName(_get(termsheet, 'data[0].company.companyName', 'Order Id')));
    dispatch(
      setDynamicOrder(orderId !== 'Order Id' ? orderId : _get(termsheet, 'data[0].order.applicationId', 'Order Id')),
    );
  }, [dispatch, termsheet]);

  const [termsheetDetails, setTermsheetDetails] = useState({});
  const [otherTermConditions, setOtherTermConditions] = useState({});
  const [additionalComments, setAdditionalComments] = useState(null);
  const date = new Date();

  useEffect(() => {
    {
      termsheet &&
        termsheet?.data?.map((sheet) =>
          setTermsheetDetails({
            termsheetId: sheet?._id,
            commodityDetails: {
              unitOfQuantity: sheet?.order?.unitOfQuantity,
              orderCurrency: sheet?.order?.orderCurrency,
              quantity: sheet?.order?.quantity,
              perUnitPrice: sheet?.order?.perUnitPrice,
              commodity: sheet?.order?.commodity,
              tolerance: sheet?.order?.tolerance,
            },
            transactionDetails: {
              lcValue: sheet?.transactionDetails?.lcValue,
              lcCurrency: sheet?.transactionDetails?.lcValue,
              marginMoney: sheet?.transactionDetails?.marginMoney,
              lcOpeningBank: sheet?.transactionDetails?.lcOpeningBank,
              incoTerms: sheet?.transactionDetails?.incoTerms,
              loadPort: sheet?.transactionDetails?.loadPort,
              countryOfOrigin: sheet?.transactionDetails?.countryOfOrigin,
              shipmentType: sheet?.transactionDetails?.shipmentType,
              partShipmentAllowed: sheet?.transactionDetails?.partShipmentAllowed,
              portOfDischarge: sheet?.transactionDetails?.portOfDischarge,
              billOfEntity: sheet?.transactionDetails?.billOfEntity,
              thirdPartyInspectionReq: sheet?.transactionDetails?.thirdPartyInspectionReq,
              storageOfGoods: sheet?.transactionDetails?.storageOfGoods,
            },
            paymentDueDate: {
              computationOfDueDate: sheet?.paymentDueDate?.computationOfDueDate,
              daysFromBlDate: sheet?.paymentDueDate?.daysFromBlDate,
              daysFromVesselDischargeDate: sheet?.paymentDueDate?.daysFromVesselDischargeDate,
            },
            commercials: {
              tradeMarginPercentage: sheet?.commercials?.tradeMarginPercentage,
              lcOpeningValue: sheet?.commercials?.lcOpeningValue,
              lcOpeningCurrency: sheet?.commercials?.lcOpeningCurrency,
              lcOpeningChargesUnit: sheet?.commercials?.lcOpeningChargesUnit,
              lcOpeningChargesPercentage: sheet?.commercials?.lcOpeningChargesPercentage,
              usanceInterestPercetage: sheet?.commercials?.usanceInterestPercetage,
              overDueInterestPerMonth: sheet?.commercials?.overDueInterestPerMonth,
              exchangeFluctuation: sheet?.commercials?.exchangeFluctuation,
              forexHedging: sheet?.commercials?.forexHedging,
              otherTermsAndConditions: sheet?.commercials?.otherTermsAndConditions,
              version: sheet?.commercials?.version,
            },
          }),
        );
    }
  }, [termsheet]);

  const filteredValue = (commentType) => {
    let filteredComments = additionalComments?.filter((comment) => comment.additionalCommentType === commentType);

    return filteredComments?.[0]?.comment;
  };

  useEffect(() => {
    termsheet?.data?.forEach((sheets) => {
      setAdditionalComments(sheets.additionalComments);
    });
  }, [termsheet]);
  useEffect(() => {
    {
      termsheet &&
        termsheet?.data?.forEach((sheet, index) => {
          setOtherTermConditions({
            buyer: { bank: sheet?.otherTermsAndConditions?.buyer?.bank },
            chaOrstevedoringCharges: {
              customClearingCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.customClearingCharges,
              wharfaceCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.wharfaceCharges,
              pollutionCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.pollutionCharges,
              royalyAndPenaltyCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.royalyAndPenaltyCharges,
              tarpaulinCoverageCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.tarpaulinCoverageCharges,
              wheighmentAndWeighmentSurveyCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.wheighmentAndWeighmentSurveyCharges,
              draughtSurveyCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.draughtSurveyCharges,
              boatingWhileDraughtSurveyCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.boatingWhileDraughtSurveyCharges,
              hmcCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.hmcCharges,
              securityCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.securityCharges,
              piotRentalAndStorageCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.piotRentalAndStorageCharges,
              bondingOfCargoCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.bondingOfCargoCharges,
              exBondDocumentationCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.exBondDocumentationCharges,
              transferOfOwnershipCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.transferOfOwnershipCharges,
              customsBondOfficerOvertimeCharges:
                sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.customsBondOfficerOvertimeCharges,
              grabHireCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.grabHireCharges,
              craneHireCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.craneHireCharges,
              handlingLosses: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.handlingLosses,
              insuranceCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.insuranceCharges,
              waterSprinklingCharges: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.waterSprinklingCharges,
              others: sheet?.otherTermsAndConditions?.chaOrstevedoringCharges?.others,
            },
            lcOpeningCharges: {
              lcOpeningCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.lcOpeningCharges,
              lcAmendmentCost: sheet?.otherTermsAndConditions?.lcOpeningCharges?.lcAmendmentCost,
              cmaFeesIncludingSupervisionAndSurvey:
                sheet?.otherTermsAndConditions?.lcOpeningCharges?.cmaFeesIncludingSupervisionAndSurvey,
              bankDoIssuanceCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.bankDoIssuanceCharges,
              remmittanceCharges: sheet?.otherTermsAndConditions?.lcOpeningCharges?.remmittanceCharges,
              usanceInterest: sheet?.otherTermsAndConditions?.lcOpeningCharges?.usanceInterest,
            },
            otherCharges: {
              demurrageOrDetentionChargesOfVessel:
                sheet?.otherTermsAndConditions?.otherCharges?.demurrageOrDetentionChargesOfVessel,
              transportationCharges: sheet?.otherTermsAndConditions?.otherCharges?.transportationCharges,
              wagonHaulageCharges: sheet?.otherTermsAndConditions?.otherCharges?.wagonHaulageCharges,
              thirdPartyInspectionCharges: sheet?.otherTermsAndConditions?.otherCharges?.thirdPartyInspectionCharges,
              hedgingCharges: sheet?.otherTermsAndConditions?.otherCharges?.hedgingCharges,
              anyOtherCostIncurredOnBehalfOfBuyer:
                sheet?.otherTermsAndConditions?.otherCharges?.anyOtherCostIncurredOnBehalfOfBuyer,
            },
            dutyAndTaxes: {
              customsDutyWithAllGovtCess: sheet?.otherTermsAndConditions?.dutyAndTaxes?.customsDutyWithAllGovtCess,
              igstWithCess: sheet?.otherTermsAndConditions?.dutyAndTaxes?.igstWithCess,
              cimsCharges: sheet?.otherTermsAndConditions?.dutyAndTaxes?.cimsCharges,
              taxCollectedatSource: sheet?.otherTermsAndConditions?.dutyAndTaxes?.taxCollectedatSource,
            },
            insurance: {
              marineInsurance: sheet?.otherTermsAndConditions?.insurance?.marineInsurance,
              storageInsurance: sheet?.otherTermsAndConditions?.insurance?.storageInsurance,
            },
          });
        });
    }
  }, [termsheet]);

  const [open, setOpen] = useState(false);
  const openbar = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [1500, 2150]);
    doc.html(
      ReactDOMServer.renderToString(toPrintPdf(termsheet, termsheetDetails, additionalComments, otherTermConditions)),
      {
        callback: function (doc) {
          doc.save('TransactionSummary.pdf');
        },

        autoPaging: 'text',
      },
    );
  };
  const exportPDF2 = () => {
    const doc = new jsPDF('p', 'pt', [1500, 1600]);
    doc.addFileToVFS(
      'Termsheet.pdf',
      toPrintPdf2(termsheet, termsheetDetails, additionalComments, otherTermConditions, filteredValue),
    );
    return doc.getFileFromVFS('Termsheet.pdf');
  };
  const shareEmail = async (email) => {
    let doc = exportPDF2();

    let formData = new FormData();
    formData.append('document1', '');
    formData.append('data', {
      subject: 'this is subject',
      text: 'this is text',
      receiver: email,
    });

    await dispatch(sharingTermsheetEmail(formData));
    setOpen(false);
  };
  return (
    <>
      <div className={`${styles.root_container}  `} ref={toPrint}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              onClick={() => Router.push('/termsheet/12')}
              className={`${styles.arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
            />
            <h1 className={`${styles.heading} heading`}>Transaction Summary Preview</h1>
          </div>
        </div>

        <div className={`${styles.term_container} download-pdf-bg container-fluid`}>
          <Row className={`h-50`}>
            <Col md={4} className={`d-flex justify-content-start align-items-start`}>
              {termsheet &&
                termsheet?.data?.map((sheet, index) => (
                  <div key={index} className='mb-2'>
                    <div>
                      <span className={`${styles.termSub_head} text-color`}>Order ID:</span>
                      <span className={`${styles.termValue} text-color`}>{sheet.order.orderId}</span>
                    </div>
                    <div className={`mt-1`}>
                      <span className={`${styles.termSub_head} text-color`}>Buyer:</span>
                      <span className={`${styles.termValue} text-color`}>{sheet.company.companyName}</span>
                    </div>
                  </div>
                ))}
            </Col>
            <Col md={4} className={`d-flex justify-content-center align-items-center`}>
              <span className="download-pdf-title text-center">TRANSACTION SUMMARY</span>
            </Col>
            <Col md={4} className={`d-flex justify-content-end  align-items-end`}>
              <div>
                <span className={`${styles.termSub_head} text-color`}>Date:</span>{' '}
                <span className={`${styles.termValue} text-color`}>
                  {moment(new Date(), 'YYYY-MM-DD', true).format('DD-MM-YYYY')}
                </span>
              </div>
              {/* <div>
                <span className={styles.termSub_head}>Date:</span>{' '}
                <span className={styles.termValue}>
                  {moment(date, 'YYYY-MM-DD', true).format('DD-MM-YYYY')}
                </span>
              </div> */}
            </Col>
          </Row>
        </div>

        <Card className={`${styles.content} ${styles.customCard} border_color`}>
          <div>
            <Row className={`${styles.row_head} row_head`}>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}
              >
                <span>Commodity Details</span>
              </Col>
              <Col md={8} sm={6} xs={6}>
                {''}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.sub_content} border_color label1 pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ol>
                  <li>1. Commodity Name</li>
                  <li>2. Quantity</li>
                  <li>3. Unit Price</li>
                </ol>
              </Col>
              <Col
                md={8}
                sm={6}
                xs={6}
                className={`${styles.sub_contentValue} termsheet_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ul>
                  <li>{termsheetDetails?.commodityDetails?.commodity}</li>
                  <li>
                    {termsheetDetails?.commodityDetails?.quantity?.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}{' '}
                    MT
                  </li>
                  <li>
                    {termsheetDetails?.commodityDetails?.orderCurrency}{' '}
                    {termsheetDetails?.commodityDetails?.perUnitPrice?.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div>
            <Row className={`${styles.row_head} row_head`}>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}
              >
                <span>Transaction Details</span>
              </Col>
              <Col md={8} sm={6} xs={6}>
                {''}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ol>
                  <li>4. LC Value</li>
                  <li>5. LC opening Bank</li>
                  <li>6. Margin Money as % of Import Value</li>
                  <li>7. INCO Terms</li>
                  <li>8. Load Port</li>
                  <li>9. Country of Origin</li>
                  <li>10. Shipment Type</li>
                  <li>11. Part Shipment Allowed</li>
                  <li>12. Port of Discharge</li>
                  <li>13. Bill of Entry</li>
                  <li>14. 3rd Party Inspection Required</li>
                </ol>
              </Col>
              <Col
                md={8}
                sm={6}
                xs={6}
                className={`${styles.sub_contentValue} termsheet_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ul>
                  <li>
                    {termsheetDetails?.commodityDetails?.orderCurrency}{' '}
                    {termsheetDetails?.transactionDetails?.lcValue
                      ? Number(termsheetDetails?.transactionDetails?.lcValue)?.toLocaleString('en-IN', {
                          maximumFractionDigits: 2,
                        })
                      : ''}
                  </li>
                  <li>{termsheetDetails?.transactionDetails?.lcOpeningBank}</li>
                  <li>
                    {termsheetDetails?.transactionDetails?.marginMoney?.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })}
                    %
                  </li>
                  <li>{termsheetDetails?.transactionDetails?.incoTerms}</li>
                  <li>{termsheetDetails?.transactionDetails?.loadPort}</li>
                  <li>{termsheetDetails?.transactionDetails?.countryOfOrigin}</li>
                  <li>{termsheetDetails?.transactionDetails?.shipmentType}</li>
                  <li>{termsheetDetails?.transactionDetails?.partShipmentAllowed}</li>
                  <li>{termsheetDetails?.transactionDetails?.portOfDischarge}</li>
                  <li>{termsheetDetails?.transactionDetails?.billOfEntity}</li>
                  <li>{termsheetDetails?.transactionDetails?.thirdPartyInspectionReq ? 'YES' : 'NO'}</li>
                </ul>
              </Col>
            </Row>
          </div>

          <div></div>
          <div>
            <Row className={`${styles.row_head} row_head`}>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}
              >
                <span>Storage Of Goods</span>
              </Col>
              <Col md={8} sm={6} xs={6}>
                {''}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ol>
                  <li>15. Storage of Goods</li>
                </ol>
              </Col>
              <Col
                md={8}
                sm={6}
                xs={6}
                className={`${styles.sub_contentValue} termsheet_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ul>
                  <li>
                    {' '}
                    {filteredValue('Storage of Goods')
                      ? filteredValue('Storage of Goods')
                      : `Cargo to be stored at a place as agreed under the agreement or at an approved customs bonded warehouse. IGM and Applicable Bill of Entry shall be filed by the ${otherTermConditions?.buyer?.bank
                          ?.match(/\((.*)\)/)
                          ?.pop()}'s nominated party and all expenses/charges to be born and paid by the Buyer. `}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div>
            <Row className={`${styles.row_head} row_head`}>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}
              >
                <span>Deliveries/Due Date/Payment</span>
              </Col>
              <Col md={8} sm={6} xs={6}>
                {''}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ol>
                  <li>16. Deliveries/Due date/Payment</li>
                </ol>
              </Col>
              <Col
                md={8}
                sm={6}
                xs={6}
                className={`${styles.sub_contentValue} termsheet_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ul>
                  <li>
                    {filteredValue('Deliveries/Due Date/Payment')
                      ? filteredValue('Deliveries/Due Date/Payment')
                      : termsheetDetails?.paymentDueDate?.computationOfDueDate === 'DaysfromBLDate'
                      ? `${_get(
                          termsheetDetails,
                          'paymentDueDate.daysFromBlDate',
                        )} days from the date of Bill of Lading.`
                      : termsheetDetails?.paymentDueDate?.computationOfDueDate === 'DaysfromVesselDischargeDate'
                      ? `${_get(
                          termsheetDetails,
                          'paymentDueDate.daysFromVesselDischargeDate',
                        )} days from the discharge date of vessel/container(s) at discharge port.`
                      : `${_get(
                          termsheetDetails,
                          'paymentDueDate.daysFromVesselDischargeDate',
                        )} days from the discharge date of vessel/container(s) at discharge port or ${_get(
                          termsheetDetails,
                          'paymentDueDate.daysFromBlDate',
                        )} days from the date of Bill of Lading, whichever is earlier.`}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div>
            <Row className={`${styles.row_head} row_head`}>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}
              >
                <span>Commercial Terms</span>
              </Col>
              <Col md={8} sm={6} xs={6}>
                {''}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ol>
                  <li>17. Trade Margin (%)</li>
                  <li>18. LC Opening Charges (Minimum)</li>
                  <li>19. LC Opening Charges (%)</li>
                  <li>20. Usance Interest (%) For 90 Days</li>
                  <li>21. Overdue Interest per Month (%)</li>
                  <li>22. Exchange Fluctuation</li>
                  <li>23. Forex Hedging</li>
                  <li>{`24. Other Terms & Conditions`}</li>
                </ol>
              </Col>
              <Col
                md={8}
                sm={6}
                xs={6}
                className={`${styles.sub_contentValue} termsheet_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ul>
                  <li>
                    {' '}
                    {termsheetDetails.commercials?.tradeMarginPercentage
                      ? Number(termsheetDetails.commercials?.tradeMarginPercentage)?.toLocaleString('en-IN', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                      : ''}
                    %{' '}
                  </li>
                  <li>
                    {termsheetDetails?.commodityDetails?.orderCurrency}{' '}
                    {Number(termsheetDetails.commercials?.lcOpeningChargesUnit)?.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}{' '}
                  </li>
                  <li>
                    {' '}
                    {termsheetDetails.commercials?.lcOpeningChargesPercentage
                      ? Number(termsheetDetails.commercials?.lcOpeningChargesPercentage)?.toLocaleString('en-IN', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + '%'
                      : ''}{' '}
                  </li>
                  <li>
                    {' '}
                    {termsheetDetails.commercials?.usanceInterestPercetage
                      ? Number(termsheetDetails.commercials?.usanceInterestPercetage)?.toLocaleString('en-IN', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + '%'
                      : ''}
                    {/* {termsheetDetails.commercials?.usanceInterestPercetage}% */}
                  </li>
                  <li>
                    {' '}
                    {termsheetDetails.commercials?.overDueInterestPerMonth
                      ? Number(termsheetDetails.commercials?.overDueInterestPerMonth)?.toLocaleString('en-IN', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + '%'
                      : ''}
                    {/* {termsheetDetails.commercials?.overDueInterestPerMonth}% */}
                  </li>
                  <li> {termsheetDetails.commercials?.exchangeFluctuation}</li>
                  <li> {termsheetDetails.commercials?.forexHedging}</li>
                  <li>
                    {' '}
                    {/* {termsheetDetails.commercials?.otherTermsAndConditions} */}
                    {filteredValue('Other terms and conditions')
                      ? filteredValue('Other terms and conditions')
                      : 'As per the Agreements executed between the parties.'}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div>
            <Row className={`${styles.row_head} row_head`}>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.content_header} border_color d-flex justify-content-center align-content-center`}
              >
                <span>Reimbursement Of Expenses</span>
              </Col>
              <Col md={8} sm={6} xs={6}>
                {''}
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.sub_content} border_color label_heading pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ol>
                  <li>25. Reimbursement of Expenses</li>
                </ol>
              </Col>
              <Col
                md={8}
                sm={6}
                xs={6}
                className={`${styles.sub_contentValue} termsheet_Text label_heading  pb-3 pt-4 d-flex justify-content-start align-content-center`}
              >
                <ul>
                  <li>
                    {filteredValue('Payment Reimbursement of Charges')
                      ? filteredValue('Payment Reimbursement of Charges')
                      : 'All applicable charges to be paid by the buyer as and when they becomes due.'}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div></div>
          <div>
            <Row className={`${styles.row_head} row_head`}>
              <Col
                md={4}
                sm={6}
                xs={6}
                className={`${styles.content_header_other}  d-flex justify-content-center align-content-center`}
              >
                <span>Other Terms &amp; Conditions</span>
              </Col>
              <Col md={8} sm={6} xs={6}>{``}</Col>
            </Row>
            <Row>
              <Col
                md={12}
                className={`${styles.sub_content_other} termsheet_Text label_heading  d-flex justify-content-start align-content-center`}
              >
                Below charges are to be borne and paid by the Buyer on actual basis,wherever applicable.{' '}
                {otherTermConditions?.buyer?.bank} will provide proof of all expenses to the Buyer.
              </Col>
            </Row>
          </div>

          <div className={styles.dashboard_form}>
            <Form>
              <div className="row">
                <div className={`${styles.form_group} ${styles.formLeft} mt-5 col-md-6`}>
                  <h3 className={`${styles.other_heading} row_head`}>CHA / Stevedoring Charges</h3>
                  <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                    <div className=" d-flex align-items-center">
                      <input
                        id=">Customs clearing charges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.pollutionCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>
                        Customs clearing charges / handling charges / CHA Fee
                      </label>
                    </div>

                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="wharfaceCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.wharfaceCharges}
                      />

                      <label className={`${styles.checkbox_label} termsheet_Text`}>Wharfage Charges </label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="pollutionCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.pollutionCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Pollution Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="royalyAndPenaltyCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.royalyAndPenaltyCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Royalty and Penalty Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="tarpaulinCoverageCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.tarpaulinCoverageCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Tarpaulin Coverage Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="wheighmentAndWeighmentSurveyCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.wheighmentAndWeighmentSurveyCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>
                        Wheighment &amp; Weighment Survey Charges
                      </label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="draughtSurveyCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.draughtSurveyCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Draught Survey Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="boatingWhileDraughtSurveyCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.boatingWhileDraughtSurveyCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>
                        Boating while Draught Survey Charges
                      </label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="hmcCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.hmcCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>HMC Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="securityCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.securityCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Security Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="piotRentalAndStorageCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.piotRentalAndStorageCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>
                        Plot Rental &amp; Storage Charges
                      </label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="bondingOfCargoCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.bondingOfCargoCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Bonding of Cargo Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="exBondDocumentationCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.exBondDocumentationCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>
                        Ex - Bond Documentation Charges
                      </label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="transferOfOwnershipCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.transferOfOwnershipCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Transfer of Ownership Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="customsBondOfficerOvertimeCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.customsBondOfficerOvertimeCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>
                        Customs Bond Officer Overtime Charges
                      </label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="grabHireCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.grabHireCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Grab Hire Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="craneHireCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.craneHireCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Crane Hire Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="handlingLosses"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.handlingLosses}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Handling Losses</label>
                    </div>

                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="waterSprinklingCharges"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.waterSprinklingCharges}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Water Sprinkling Charges</label>
                    </div>
                    <div className="pt-4 d-flex align-items-center">
                      <input
                        id="others"
                        className={styles.checkbox}
                        type="checkbox"
                        checked={otherTermConditions?.chaOrstevedoringCharges?.others}
                      />
                      <label className={`${styles.checkbox_label} termsheet_Text`}>Others, if any</label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className={`${styles.other_heading} row_head`}>Insurance</h3>
                    <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                      <div className="d-flex align-items-center">
                        <input
                          id="marineInsurance"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.insurance?.marineInsurance}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`}>
                          Marine Insurance ( if applicable)
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="storageInsurance"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.insurance?.storageInsurance}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`}>
                          Storage Insurance(Fire &amp; Burglary)
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="insuranceCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.chaOrstevedoringCharges?.insuranceCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`}>
                          Insurance Charges ( While transferring the material to customs bonded warehouse )
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.form_group} ${styles.formRight} mt-5 col-md-6`}>
                  <div className="">
                    <h3 className={`${styles.other_heading} row_head`}>LC Opening Charges</h3>
                    <div className={`${styles.checkbox_container}  label_heading d-flex flex-column`}>
                      <div className="d-flex align-items-center">
                        <input
                          id="lcOpeningCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.lcOpeningCharges?.lcOpeningCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`}>
                          LC Opening Charges ( on LC value subject to minimum of{' '}
                          {termsheetDetails?.commodityDetails?.orderCurrency}{' '}
                          {Number(termsheetDetails?.commercials?.lcOpeningChargesUnit)?.toLocaleString('en-In')})
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="lcAmendmentCost"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.lcOpeningCharges?.lcAmendmentCost}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`}>LC Amendment Charges</label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="cmaFeesIncludingSupervisionAndSurvey"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.lcOpeningCharges?.cmaFeesIncludingSupervisionAndSurvey}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle3">
                          CMA Fees including supervision and survey
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="bankDoIssuanceCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.lcOpeningCharges?.bankDoIssuanceCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle4">
                          Bank DO Issuance Charges
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="remmittanceCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.lcOpeningCharges?.remmittanceCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle5">
                          Remmittance Charges
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="usanceInterest"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.lcOpeningCharges?.usanceInterest}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle6">
                          Usance Interest
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className={`${styles.other_heading} row_head`}>Other Charges</h3>
                    <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="demurrageOrDetentionChargesOfVessel"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.otherCharges?.demurrageOrDetentionChargesOfVessel}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle2">
                          Demurrage / Detention Charges of Vessel
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="transportationCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.otherCharges?.transportationCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle3">
                          Transportation Charges
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="wagonHaulageCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.otherCharges?.wagonHaulageCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle1">
                          Wagon Haulage Charges (in case of Delivery through railways)
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="thirdPartyInspectionCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.otherCharges?.thirdPartyInspectionCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle1">
                          3rd Party Inspection Charges
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="hedgingCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.otherCharges?.hedgingCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle1">
                          Hedging Charges
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="anyOtherCostIncurredOnBehalfOfBuyer"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.otherCharges?.anyOtherCostIncurredOnBehalfOfBuyer}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle1">
                          Any other cost incurred on behalf of Buyer
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className={`${styles.other_heading} row_head`}>Duty &amp; Taxes</h3>
                    <div className={`${styles.checkbox_container} label_heading d-flex flex-column`}>
                      <div className="d-flex align-items-center">
                        <input
                          id="customsDutyWithAllGovtCess"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.dutyAndTaxes?.customsDutyWithAllGovtCess}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle1">
                          Customs Duty with all Govt Cess
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="igstWithCess"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.dutyAndTaxes?.igstWithCess}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`} htmlFor="vehicle2">
                          IGST with CESS, if applicable
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="cimsCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.dutyAndTaxes?.cimsCharges}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`}>
                          CIMS Charges (incase commodity is Coal)
                        </label>
                      </div>
                      <div className="pt-4 d-flex align-items-center">
                        <input
                          id="taxCharges"
                          className={styles.checkbox}
                          type="checkbox"
                          checked={otherTermConditions?.dutyAndTaxes?.taxCollectedatSource ? true : false}
                        />
                        <label className={`${styles.checkbox_label} termsheet_Text`}>
                          Tax Collected at Source ( if applicable )
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>

          <div className={`${styles.footer}`}>
            All necessary documents to be filed with Customs department for discharge of goods &amp; Customs clearance
            can be filed by {otherTermConditions?.buyer?.bank} or its nominated person.
            <p>
              <span className={styles.danger}>*</span> GST charges extra wherever applicable
            </p>
          </div>
        </Card>
      </div>

      <Paginatebar
        exportPDF={exportPDF}
        openbar={openbar}
        rightButtonTitle="Send To Buyer"
        leftButtonTitle="Transaction Summary"
      />
      {open ? <TermsheetPopUp close={close} open={open} shareEmail={shareEmail}/> : null}
    </>
  );
}

export default Index;

const toPrintPdf = (data, termsheetDetails, additionalComments, otherTermConditions) => {
  const filteredValue = (commentType) => {
    let filteredComments = additionalComments?.filter((comment) => comment.additionalCommentType === commentType);

    return filteredComments?.[0]?.comment;
  };
  return (
    <>
      <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#D8EAFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                marginBottom: '26px',
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                height: '126px',
              }}
              cellPadding="10"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left" width="33%">
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      padding: '10px 0 10px 25px',
                    }}
                  >
                    Order ID:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {_get(data, 'data[0].order.orderId', '')}
                    </span>
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      paddingLeft: '0',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        paddingLeft: '25px',
                        width: '90px',
                        float: 'left',
                        height: '50px',
                      }}
                    >
                      Buyer:{' '}
                    </span>
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {_get(data, 'data[0].company.companyName', '')}
                    </span>
                  </span>
                </td>
                <td valign="top" align="center" width="34%">
                  <h2
                    style={{
                      fontSize: '34px',
                      color: '#3687E8',
                      lineHeight: '41px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    }}
                  >
                    TRANSACTION SUMMARY
                  </h2>
                </td>
                <td valign="top" align="right" width="33%">
                  {' '}
                  <span></span>
                  <br />
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      paddingRight: '25px',
                    }}
                  >
                    Date:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {moment(new Date(), 'YYYY-MM-DD', true).format('DD-MM-YYYY')}
                    </span>
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top" align="left">
            <table
              width="100%"
              bgColor="#FFFFFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                border: '2px solid #cad6e64d',
              }}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left">
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td width="33%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                          }}
                        >
                          Commodity Details
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            1.
                          </span>
                          Commodity Name
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.commodityDetails?.commodity}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            2.
                          </span>
                          Quantity Name
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.commodityDetails?.quantity?.toLocaleString('en-In')} MT
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            3.
                          </span>
                          Unit Price
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.commodityDetails?.orderCurrency}{' '}
                          {termsheetDetails?.commodityDetails?.perUnitPrice?.toLocaleString('en-In')}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="33%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                          }}
                        >
                          Transaction Details
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            4.
                          </span>
                          LC Value
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.commodityDetails?.orderCurrency}{' '}
                          {termsheetDetails?.transactionDetails?.lcValue
                            ? Number(termsheetDetails?.transactionDetails?.lcValue)?.toLocaleString('en-In')
                            : ''}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            5.
                          </span>
                          LC opening Bank
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.lcOpeningBank}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            6.
                          </span>
                          Margin Money as % of Import Value
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.marginMoney}%
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            7.
                          </span>
                          INCO Terms
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.incoTerms}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            8.
                          </span>
                          Load Port
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.loadPort}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            9.
                          </span>
                          Country of Origin
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {termsheetDetails?.transactionDetails?.countryOfOrigin}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            10.
                          </span>
                          Shipment Type
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.shipmentType}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            11.
                          </span>
                          Part Shipment Allowed
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {termsheetDetails?.transactionDetails?.partShipmentAllowed}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            12.
                          </span>
                          Port of Discharge
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {termsheetDetails?.transactionDetails?.portOfDischarge}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            13.
                          </span>
                          Bill of Entry
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {termsheetDetails?.transactionDetails?.billOfEntity}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            14.
                          </span>
                          3rd Party Inspection Required
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.thirdPartyInspectionReq ? 'YES' : 'NO'}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="33%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Storage of Goods
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            15.
                          </span>
                          Storage of Goods
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 40px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {filteredValue('Storage of Goods')
                            ? filteredValue('Storage of Goods')
                            : `Cargo to be stored at a place as agreed under the agreement or at an approved customs bonded warehouse. IGM and Applicable Bill of Entry shall be filed by the ${otherTermConditions?.buyer?.bank
                                .match(/\((.*)\)/)
                                ?.pop()}'s nominated party and all expenses/charges to be born and paid by the Buyer. `}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="33%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Deliveries/Due Date/Payment
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            16.
                          </span>
                          Deliveries/Due date/Payment
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 40px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {filteredValue('Deliveries/Due Date/Payment')
                            ? filteredValue('Deliveries/Due Date/Payment')
                            : termsheetDetails?.paymentDueDate?.computationOfDueDate === 'DaysfromBLDate'
                            ? `${_get(
                                termsheetDetails,
                                'paymentDueDate.daysFromBlDate',
                              )} days from the date of Bill of Lading.`
                            : termsheetDetails?.paymentDueDate?.computationOfDueDate === 'DaysfromVesselDischargeDate'
                            ? `${_get(
                                termsheetDetails,
                                'paymentDueDate.daysFromVesselDischargeDate',
                              )} days from the discharge date of vessel/container(s) at discharge port.`
                            : `${_get(
                                termsheetDetails,
                                'paymentDueDate.daysFromVesselDischargeDate',
                              )} days from the discharge date of vessel/container(s) at discharge port or ${_get(
                                termsheetDetails,
                                'paymentDueDate.daysFromBlDate',
                              )} days from the date of Bill of Lading, whichever is earlier.`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="33%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Commercial Terms
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            17.
                          </span>
                          Trade Margin (%)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails.commercials?.tradeMarginPercentage
                            ? Number(termsheetDetails.commercials?.tradeMarginPercentage)?.toLocaleString('en-IN', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }) + ' %'
                            : ''}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            18.
                          </span>
                          LC Opening Charges (Minimum)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.commodityDetails?.orderCurrency
                            ? termsheetDetails?.commodityDetails?.orderCurrency
                            : ''}{' '}
                          {termsheetDetails.commercials?.lcOpeningChargesUnit
                            ? Number(termsheetDetails.commercials?.lcOpeningChargesUnit)?.toLocaleString('en-In')
                            : ''}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            19.
                          </span>
                          LC Opening Charges (%)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails.commercials?.lcOpeningChargesPercentage
                            ? Number(termsheetDetails.commercials?.lcOpeningChargesPercentage)?.toLocaleString(
                                'en-IN',
                                {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                },
                              )
                            : ''}
                          %{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            20.
                          </span>
                          Usance Interest (%) For 90 Days
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {termsheetDetails.commercials?.usanceInterestPercetage
                            ? Number(termsheetDetails.commercials?.usanceInterestPercetage)?.toLocaleString('en-IN', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              })
                            : ''}
                          %
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            21.
                          </span>
                          Overdue Interest per Month (%)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {termsheetDetails.commercials?.overDueInterestPerMonth
                            ? Number(termsheetDetails.commercials?.overDueInterestPerMonth)?.toLocaleString('en-IN', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              })
                            : ''}
                          %
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            22.
                          </span>
                          Exchange Fluctuation
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails.commercials?.exchangeFluctuation}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            23.
                          </span>
                          Forex Hedging
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails.commercials?.forexHedging}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            24.
                          </span>
                          Other Terms &amp; Conditions
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 40px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {filteredValue('Other terms and conditions')
                            ? filteredValue('Other terms and conditions')
                            : 'As per the Agreements executed between the parties.'}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top" align="left">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <table
              width="100%"
              bgColor="#FFFFFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                border: '2px solid #cad6e64d',
              }}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left">
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td width="33%" bgColor="#FAFAFB" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Reimbursement of Expenses
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td width="33%" align="left" style={{ borderRight: '2px solid #cad6e64d' }}>
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-block',
                              width: '35px',
                              float: 'left',
                              height: '30px',
                            }}
                          >
                            25.
                          </span>
                          Reimbursement of Expenses
                        </p>
                      </td>
                      <td width="67%" align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 40px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {filteredValue('Payment Reimbursement of Charges')
                            ? filteredValue('Payment Reimbursement of Charges')
                            : 'All applicable charges to be paid by the buyer as and when they becomes due.'}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} bgColor="#FAFAFB" align="left">
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Other Terms &amp; Conditions
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '23px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Below charges are to be borne and paid by the Buyer on actual basis,wherever applicable. {otherTermConditions?.buyer?.bank} will provide proof of all expenses to the Buyer.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td width="49%" valign="top">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                CHA / Stevedoring Charges
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style={{ padding: '35px 15px 35px 35px' }}>
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.pollutionCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="customsClearingCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="customsClearingCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Customs clearing charges / handling charges / CHA Fee
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.wharfaceCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="wharfaceCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="wharfaceCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Wharfage Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.pollutionCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="pollutionCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="pollutionCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Pollution Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.royalyAndPenaltyCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="royalyAndPenaltyCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="royalyAndPenaltyCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Royalty and Penalty Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.tarpaulinCoverageCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="tarpaulinCoverageCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="tarpaulinCoverageCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Tarpaulin Coverage Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges?.wheighmentAndWeighmentSurveyCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="wheighmentAndWeighmentSurveyCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="wheighmentAndWeighmentSurveyCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Wheighment &amp; Weighment Survey Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.draughtSurveyCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="draughtSurveyCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="draughtSurveyCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Draught Survey Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges?.boatingWhileDraughtSurveyCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="boatingWhileDraughtSurveyCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="boatingWhileDraughtSurveyCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Boating while Draught Survey Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.hmcCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="hmcCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="hmcCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    HMC Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.securityCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="securityCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="securityCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Security Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.piotRentalAndStorageCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="piotRentalAndStorageCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="piotRentalAndStorageCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Plot Rental &amp; Storage Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.bondingOfCargoCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="bondingOfCargoCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="bondingOfCargoCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Bonding of Cargo Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.exBondDocumentationCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="exBondDocumentationCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="exBondDocumentationCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Ex - Bond Documentation Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.transferOfOwnershipCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="transferOfOwnershipCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="transferOfOwnershipCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Transfer of Ownership Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges?.customsBondOfficerOvertimeCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="customsBondOfficerOvertimeCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="customsBondOfficerOvertimeCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Customs Bond Officer Overtime Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.grabHireCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="grabHireCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="grabHireCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Grab Hire Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.craneHireCharges}
                                    d
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="craneHireCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="craneHireCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Crane Hire Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.handlingLosses}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="handlingLosses"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="handlingLosses"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Handling Losses
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.waterSprinklingCharges}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="waterSprinklingCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="waterSprinklingCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Water Sprinkling Charges
                                  </label>
                                </li>
                                <li style={{ display: 'table' }}>
                                  <input
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.others}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                    }}
                                    id="others"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="others"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Others, if any
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                Insurance
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style={{ padding: '35px 15px 35px 35px' }}>
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.insurance?.marineInsurance}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="marineInsurance"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="marineInsurance"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Marine Insurance (if applicable)
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    checked={otherTermConditions?.insurance?.storageInsurance}
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="storageInsurance"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="storageInsurance"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Storage Insurance(Fire &amp; Burglary)
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.chaOrstevedoringCharges?.insuranceCharges}
                                    id="insuranceCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="insuranceCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Insurance Charges ( While transferring the material to customs bonded warehouse )
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="2%"></td>
                      <td width="49%" valign="top">
                        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                LC Opening Charges
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style={{ padding: '35px 15px 35px 35px' }}>
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    id="lcOpeningCharges"
                                    type="checkbox"
                                    checked={otherTermConditions?.lcOpeningCharges?.lcOpeningCharges}
                                  />
                                  <label
                                    htmlFor="lcOpeningCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    LC Opening Charges ( on LC value subject to minimum of{' '}
                                    {termsheetDetails?.commodityDetails?.orderCurrency}{' '}
                                    {Number(termsheetDetails.commercials?.lcOpeningChargesUnit)?.toLocaleString(
                                      'en-In',
                                    )}{' '}
                                    )
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.lcOpeningCharges?.lcAmendmentCost}
                                    id="lcAmendmentCost"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="lcAmendmentCost"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    LC Amendment Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={
                                      otherTermConditions?.lcOpeningCharges?.cmaFeesIncludingSupervisionAndSurvey
                                    }
                                    id="cmaFeesIncludingSupervisionAndSurvey"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="cmaFeesIncludingSupervisionAndSurvey"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    CMA Fees including supervision and survey
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.lcOpeningCharges?.bankDoIssuanceCharges}
                                    id="bankDoIssuanceCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="bankDoIssuanceCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Bank DO Issuance Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.lcOpeningCharges?.remmittanceCharges}
                                    id="remmittanceCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="remmittanceCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Remmittance Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.lcOpeningCharges?.usanceInterest}
                                    id="usanceInterest"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="usanceInterest"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Usance Interest
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                Other Charges
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style={{ padding: '35px 15px 35px 35px' }}>
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.otherCharges?.demurrageOrDetentionChargesOfVessel}
                                    id="demurrageOrDetentionChargesOfVessel"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="demurrageOrDetentionChargesOfVessel"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Demurrage / Detention Charges of Vessel
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.otherCharges?.transportationCharges}
                                    id="transportationCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="transportationCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Transportation Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.otherCharges?.wagonHaulageCharges}
                                    id="wagonHaulageCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="wagonHaulageCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Wagon Haulage Charges (in case of Delivery through railways)
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.otherCharges?.thirdPartyInspectionCharges}
                                    id="thirdPartyInspectionCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="thirdPartyInspectionCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    3rd Party Inspection Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.otherCharges?.hedgingCharges}
                                    id="hedgingCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="hedgingCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Hedging Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.otherCharges?.anyOtherCostIncurredOnBehalfOfBuyer}
                                    id="anyOtherCostIncurredOnBehalfOfBuyer"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="anyOtherCostIncurredOnBehalfOfBuyer"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Any other cost incurred on behalf of Buyer
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                Duty &amp; Taxes
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style={{ padding: '35px 15px 35px 35px' }}>
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.dutyAndTaxes?.customsDutyWithAllGovtCess}
                                    id="customsDutyWithAllGovtCess"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="customsDutyWithAllGovtCess"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Customs Duty with all Govt Cess
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.dutyAndTaxes?.igstWithCess}
                                    id="igstWithCess"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="igstWithCess"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    IGST with CESS, if applicable
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.dutyAndTaxes?.cimsCharges}
                                    id="cimsCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="cimsCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    CIMS Charges (incase commodity is Coal)
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table',
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px',
                                    }}
                                    checked={otherTermConditions?.dutyAndTaxes?.taxCollectedatSource}
                                    id="taxCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="taxCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    Tax Collected at Source ( if applicable )
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style={{ padding: '35px 15px 35px 35px' }}>
                  <p
                    style={{
                      fontSize: '20px',
                      lineHeight: '30px',
                      color: '#111111',
                      letterSpacing: '0.19px',
                    }}
                  >
                    All necessary documents to be filed with Customs department for discharge of goods &amp; Customs
                    clearance can be filed by {otherTermConditions?.buyer?.bank} or its nominated person.
                    <br />
                    <span style={{ color: 'red' }}>*</span> GST charges extra wherever applicable
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};
const toPrintPdf2 = (data, termsheetDetails, additionalComments, otherTermConditions) => {
  return `  <>
      <table width="1500px" cellPadding="0" cellSpacing="0" border="0">
        <tr>
          <td valign="top">
            <table
              width="100%"
              bgColor="#D8EAFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                marginBottom: '26px',
                border: '1px solid #D2D7E5',
                borderRadius: '6px',
                height: '126px',
              }}
              cellPadding="10"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left" width="33%">
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      padding: '10px 0 0 25px',
                    }}
                  >
                    Order ID:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {_get(data, 'data[0].order.orderId', '')}
                    </span>
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      paddingLeft: '0',
                    }}
                  >
                    <span style={{ display: 'inline-block', paddingLeft: '25px', width: '90px', float: 'left', height: '50px' }}>
                      Buyer:{' '}
                    </span>
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {_get(data, 'data[0].company.companyName', '')}
                    </span>
                  </span>
                </td>
                <td valign="top" align="center" width="34%">
                  <h2
                    style={{
                      fontSize: '34px',
                      color: '#3687E8',
                      lineHeight: '41px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    }}
                  >
                    TERMSHEET
                  </h2>
                </td>
                <td valign="top" align="right" width="33%">
                  {' '}
                  <span></span><br />
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#111111',
                      lineHeight: '25px',
                      fontWeight: '500',
                      paddingRight: '25px',
                    }}
                  >
                    Date:{' '}
                    <span
                      style={{
                        lineHeight: '24px',
                        fontWeight: 'normal',
                        opacity: '0.7',
                      }}
                    >
                      {moment(new Date(), 'YYYY-MM-DD', true).format(
                        'DD-MM-YYYY',
                      )}
                    </span>
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td valign="top" align="left">
            <table
              width="100%"
              bgColor="#FFFFFF"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                borderRadius: '6px',
                boxShadow: '0 3px 6px #CAD0E2',
                border: '2px solid #cad6e64d'
              }}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <tr>
                <td valign="top" align="left">
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        width="33%"
                        bgColor="#FAFAFB"
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px'
                          }}
                        >
                          Commodity Details
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            1.
                          </span>
                          Commodity Name
                        </p>
                      </td>
                      <td align="left">
                        <p style={{
                          fontSize: '20px',
                          color: '#111111',
                          lineHeight: '24px',
                          fontWeight: '500',
                          float: 'left',
                          padding: '23px 15px 11px 24px',
                          marginBottom: '0',
                        }}
                        >
                          {termsheetDetails?.commodityDetails?.commodity}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            2.
                          </span>
                          Quantity Name
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.commodityDetails?.quantity?.toLocaleString('en-In')} MT
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            3.
                          </span>
                          Unit Price
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                        {termsheetDetails?.commodityDetails?.orderCurrency}{" "}  {termsheetDetails?.commodityDetails?.perUnitPrice?.toLocaleString('en-In')}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        width="33%"
                        bgColor="#FAFAFB"
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px'
                          }}
                        >
                          Transaction Details
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            4.
                          </span>
                          LC Value
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.commodityDetails?.orderCurrency}{' '}
                          {termsheetDetails?.transactionDetails?.lcValue ? Number(termsheetDetails?.transactionDetails?.lcValue)?.toLocaleString('en-In') : ''}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            5.
                          </span>
                          LC opening Bank
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {
                            termsheetDetails?.transactionDetails
                              ?.lcOpeningBank
                          }
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            6.
                          </span>
                          Margin Money as % of Import Value
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.marginMoney}%
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            7.
                          </span>
                          INCO Terms
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.incoTerms}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            8.
                          </span>
                          Load Port
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.loadPort}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            9.
                          </span>
                          Country of Origin
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {
                            termsheetDetails?.transactionDetails
                              ?.countryOfOrigin
                          }
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            10.
                          </span>
                          Shipment Type
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails?.shipmentType}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            11.
                          </span>
                          Part Shipment Allowed
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {
                            termsheetDetails?.transactionDetails
                              ?.partShipmentAllowed
                          }
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            12.
                          </span>
                          Port of Discharge
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {
                            termsheetDetails?.transactionDetails
                              ?.portOfDischarge
                          }
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            13.
                          </span>
                          Bill of Entry
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {termsheetDetails?.transactionDetails?.billOfEntity}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 38px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            14.
                          </span>
                          3rd Party Inspection Required
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 38px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails?.transactionDetails
                            ?.thirdPartyInspectionReq
                            ? 'YES'
                            : 'NO'}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        width="33%"
                        bgColor="#FAFAFB"
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Storage of Goods
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            15.
                          </span>
                          Storage of Goods
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 40px 24px',
                            marginBottom: '0',
                          }}
                        >
                          
                      
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            19.
                          </span>
                          LC Opening Charges (%)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {
                            termsheetDetails.commercials
                              ?.lcOpeningChargesPercentage ? Number(termsheetDetails.commercials
                                ?.lcOpeningChargesPercentage)?.toLocaleString("en-IN", {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                }) : ''
                          }
                          %{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            20.
                          </span>
                          Usance Interest (%) For 90 Days
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {
                            termsheetDetails.commercials
                              ?.usanceInterestPercetage ? Number(termsheetDetails.commercials
                                ?.usanceInterestPercetage)?.toLocaleString("en-IN", {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                }) : ''
                          }
                          %
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            21.
                          </span>
                          Overdue Interest per Month (%)
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {' '}
                          {
                            termsheetDetails.commercials
                              ?.overDueInterestPerMonth ? Number(termsheetDetails.commercials
                                ?.overDueInterestPerMonth)?.toLocaleString("en-IN", {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                }) : ''
                          }
                          %
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            22.
                          </span>
                          Exchange Fluctuation
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails.commercials?.exchangeFluctuation}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 11px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            23.
                          </span>
                          Forex Hedging
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 11px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {termsheetDetails.commercials?.forexHedging}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '11px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            24.
                          </span>
                          Other Terms &amp; Conditions
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '11px 15px 40px 24px',
                            marginBottom: '0',
                          }}
                        >
                          {
                            termsheetDetails.commercials
                              ?.otherTermsAndConditions
                          }
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        width="33%"
                        bgColor="#FAFAFB"
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Reimbursement of Expenses
                        </span>
                      </td>
                      <td width="67%" bgColor="#FAFAFB" align="left"></td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style={{ borderRight: '2px solid #cad6e64d' }}
                      >
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            opacity: '0.7',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            float: 'left',
                            padding: '23px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          <span
                            style={{ display: 'inline-block', width: '35px', float: 'left', height: '30px' }}
                          >
                            25.
                          </span>
                          Reimbursement of Expenses
                        </p>
                      </td>
                      <td align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: '500',
                            float: 'left',
                            padding: '23px 15px 40px 24px',
                            marginBottom: '0',
                          }}
                        >
                          Post CFR expenses to be reimbursed on actual basis
                          if applicable as attached.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} bgColor="#FAFAFB" align="left">
                        <span
                          style={{
                            fontSize: '22px',
                            color: '#3687E8',
                            lineHeight: '27px',
                            fontWeight: 'bold',
                            display: 'block',
                            padding: '20px 15px 20px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Other Terms &amp; Conditions
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} align="left">
                        <p
                          style={{
                            fontSize: '20px',
                            color: '#111111',
                            lineHeight: '24px',
                            fontWeight: 'normal',
                            padding: '23px 15px 40px 35px',
                            marginBottom: '0',
                          }}
                        >
                          Below charges are to be borne and paid by the Buyer
                          on actual basis,wherever applicable. will provide
                          proof of all expenses to the Buyer.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td width="49%" valign="top">
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                CHA / Stevedoring Charges
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              style={{ padding: '35px 15px 35px 35px' }}
                            >
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.pollutionCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="customsClearingCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="customsClearingCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Customs clearing charges / handling charges
                                    / CHA Fee
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.wharfaceCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="wharfaceCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="wharfaceCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Wharfage Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.pollutionCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="pollutionCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="pollutionCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Pollution Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.royalyAndPenaltyCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="royalyAndPenaltyCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="royalyAndPenaltyCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Royalty and Penalty Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.tarpaulinCoverageCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="tarpaulinCoverageCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="tarpaulinCoverageCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Tarpaulin Coverage Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.wheighmentAndWeighmentSurveyCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="wheighmentAndWeighmentSurveyCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="wheighmentAndWeighmentSurveyCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Wheighment &amp; Weighment Survey Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.draughtSurveyCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="draughtSurveyCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="draughtSurveyCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Draught Survey Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.boatingWhileDraughtSurveyCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="boatingWhileDraughtSurveyCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="boatingWhileDraughtSurveyCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Boating while Draught Survey Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.hmcCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="hmcCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="hmcCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    HMC Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.securityCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="securityCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="securityCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Security Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.piotRentalAndStorageCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="piotRentalAndStorageCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="piotRentalAndStorageCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Plot Rental &amp; Storage Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.bondingOfCargoCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="bondingOfCargoCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="bondingOfCargoCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Bonding of Cargo Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.exBondDocumentationCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="exBondDocumentationCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="exBondDocumentationCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Ex - Bond Documentation Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.transferOfOwnershipCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="transferOfOwnershipCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="transferOfOwnershipCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Transfer of Ownership Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.customsBondOfficerOvertimeCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="customsBondOfficerOvertimeCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="customsBondOfficerOvertimeCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Customs Bond Officer Overtime Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.grabHireCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="grabHireCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="grabHireCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Grab Hire Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.craneHireCharges
                                    } d
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="craneHireCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="craneHireCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Crane Hire Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.handlingLosses
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="handlingLosses"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="handlingLosses"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Handling Losses
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.waterSprinklingCharges
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="waterSprinklingCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="waterSprinklingCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Water Sprinkling Charges
                                  </label>
                                </li>
                                <li style={{ display: 'table' }}>
                                  <input
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges?.others
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px'
                                    }}
                                    id="others"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="others"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Others, if any
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                Insurance
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              style={{ padding: '35px 15px 35px 35px' }}
                            >
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.insurance?.marineInsurance
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="marineInsurance"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="marineInsurance"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Marine Insurance (if applicable)
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    checked={
                                      otherTermConditions?.insurance?.storageInsurance
                                    }
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="storageInsurance"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="storageInsurance"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Storage Insurance(Fire &amp; Burglary)
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.chaOrstevedoringCharges
                                        ?.insuranceCharges
                                    }
                                    id="insuranceCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="insuranceCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Insurance Charges ( While transferring the
                                    material to customs bonded warehouse )
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="2%"></td>
                      <td width="49%" valign="top">
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                LC Opening Charges
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              style={{ padding: '35px 15px 35px 35px' }}
                            >
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="lcOpeningCharges"
                                    type="checkbox"
                                    checked={
                                      otherTermConditions?.lcOpeningCharges
                                        ?.lcOpeningCharges
                                    }
                                  />
                                  <label
                                    htmlFor="lcOpeningCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    LC Opening Charges ( on LC value subject to
                                    minimum of USD )
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.lcOpeningCharges
                                        ?.lcAmendmentCost
                                    }
                                    id="lcAmendmentCost"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="lcAmendmentCost"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    LC Amendment Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.lcOpeningCharges
                                        ?.cmaFeesIncludingSupervisionAndSurvey
                                    }
                                    id="cmaFeesIncludingSupervisionAndSurvey"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="cmaFeesIncludingSupervisionAndSurvey"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    CMA Fees including supervision and survey
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.lcOpeningCharges
                                        ?.bankDoIssuanceCharges
                                    }
                                    id="bankDoIssuanceCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="bankDoIssuanceCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Bank DO Issuance Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.lcOpeningCharges
                                        ?.remmittanceCharges
                                    }
                                    id="remmittanceCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="remmittanceCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Remmittance Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.lcOpeningCharges
                                        ?.usanceInterest
                                    }
                                    id="usanceInterest"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="usanceInterest"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Usance Interest
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                Other Charges
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              style={{ padding: '35px 15px 35px 35px' }}
                            >
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.otherCharges
                                        ?.demurrageOrDetentionChargesOfVessel
                                    }
                                    id="demurrageOrDetentionChargesOfVessel"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="demurrageOrDetentionChargesOfVessel"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Demurrage / Detention Charges of Vessel
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.otherCharges
                                        ?.transportationCharges
                                    }
                                    id="transportationCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="transportationCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Transportation Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.otherCharges
                                        ?.wagonHaulageCharges
                                    }
                                    id="wagonHaulageCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="wagonHaulageCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Wagon Haulage Charges (in case of Delivery
                                    through railways)
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.otherCharges
                                        ?.thirdPartyInspectionCharges
                                    }
                                    id="thirdPartyInspectionCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="thirdPartyInspectionCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    3rd Party Inspection Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.otherCharges?.hedgingCharges
                                    }
                                    id="hedgingCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="hedgingCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Hedging Charges
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.otherCharges
                                        ?.anyOtherCostIncurredOnBehalfOfBuyer
                                    }
                                    id="anyOtherCostIncurredOnBehalfOfBuyer"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="anyOtherCostIncurredOnBehalfOfBuyer"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Any other cost incurred on behalf of Buyer
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td align="left">
                              <span
                                style={{
                                  fontSize: '22px',
                                  color: '#111111',
                                  lineHeight: '27px',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '20px 15px 20px 35px',
                                  background: '#FAFAFB',
                                  marginBottom: '0',
                                }}
                              >
                                Duty &amp; Taxes
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              style={{ padding: '35px 15px 35px 35px' }}
                            >
                              <ul
                                style={{
                                  margin: '0',
                                  padding: '0',
                                  listStyle: 'none',
                                }}
                              >
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.dutyAndTaxes
                                        ?.customsDutyWithAllGovtCess
                                    }
                                    id="customsDutyWithAllGovtCess"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="customsDutyWithAllGovtCess"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Customs Duty with all Govt Cess
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.dutyAndTaxes?.igstWithCess
                                    }
                                    id="igstWithCess"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="igstWithCess"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    IGST with CESS, if applicable
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    checked={
                                      otherTermConditions?.dutyAndTaxes?.cimsCharges
                                    }
                                    id="cimsCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="cimsCharges"
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    CIMS Charges (incase commodity is Coal)
                                  </label>
                                </li>
                                <li
                                  style={{
                                    marginBottom: '24px',
                                    display: 'table'
                                  }}
                                >
                                  <input
                                    style={{
                                      display: 'table-cell',
                                      width: '20px',
                                      height: '20px',
                                      verticalAlign: 'middle',
                                      marginRight: '25px',
                                      float: 'left',
                                      height: '30px'
                                    }}
                                    id="taxCharges"
                                    type="checkbox"
                                  />
                                  <label
                                    htmlFor="taxCharges"
                                    checked={
                                      otherTermConditions?.dutyAndTaxes
                                        ?.taxCollectedatSource
                                    }
                                    style={{
                                      fontSize: '20px',
                                      display: 'table-cell',
                                      lineHeight: '25px',
                                      color: '#111111',
                                      letterSpacing: '0.19px',
                                      verticalAlign: 'middle'
                                    }}
                                  >
                                    Tax Collected at Source ( if applicable )
                                  </label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style={{ padding: '35px 15px 35px 35px' }}>
                  <p
                    style={{
                      fontSize: '20px',
                      lineHeight: '30px',
                      color: '#111111',
                      letterSpacing: '0.19px',
                    }}
                  >
                    All necessary documents to be filed with Customs department
                    for discharge of goods &amp; Customs clearance can be filed
                    by {otherTermConditions?.buyer?.bank} or its nominated person.
                    <br />
                    <span style={{ color: 'red' }}>*</span> GST charges extra
                    wherever applicable
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>`;
};
