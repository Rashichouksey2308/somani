/* eslint-disable @next/next/no-img-element */
import ApplicationLCTemp from '@/templates/ApplicationLCTemp';
import jsPDF from 'jspdf';
import _get from 'lodash/get';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ReactDOMServer from 'react-dom/server';
import { useDispatch, useSelector } from 'react-redux';
import { GetLcModule } from 'redux/lcModule/action';
import { checkNan } from 'utils/helper';
import LCAmendBar from '../LCAmendBar';
import styles from './index.module.scss';
import { setDynamicName, setDynamicOrder, setPageName } from '../../../src/redux/userData/action';
function Index() {
  const dispatch = useDispatch();

  let d = new Date();

  useEffect(() => {
    let id = sessionStorage.getItem('lcPreviewId');
    dispatch(GetLcModule(`?lcModuleId=${id}`));
  }, [dispatch]);

  const { lcModule } = useSelector((state) => state.lc);

  const lcModuleData = _get(lcModule, 'data[0]', {});
useEffect(() => {
    dispatch(setPageName('Lc'));

    dispatch(setDynamicName(_get(lcModule, 'data[0].company.companyName', 'Company Name')));
    dispatch(setDynamicOrder(_get(lcModule, 'data[0].order.orderId', 'Order Id')));
  }, [lcModuleData]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [what, setWhat] = useState('email');
  const handlePopup = () => {
    setShow(true);
  };
  const [emailAdd, setEmailAdd] = useState([
    {
      emailID: '',
    },
  ]);
  const [number, setNumber] = useState([
    {
      number: '',
    },
  ]);
  const addMoreRows = () => {
    setEmailAdd([
      ...emailAdd,
      {
        emailID: '',
      },
    ]);
  };
  const addWhatRows = () => {
    setNumber([
      ...number,
      {
        number: '',
      },
    ]);
  };
  const handleDeleteEmail = (index) => {
    setEmailAdd([...emailAdd.slice(0, index), ...emailAdd.slice(index + 1)]);
  };
  const handleDeleteNumber = (index) => {
    setNumber([...number.slice(0, index), ...number.slice(index + 1)]);
  };
  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [1500, 2100]);
    doc.html(ReactDOMServer.renderToString(<ApplicationLCTemp lcModuleData={lcModuleData} lcModule={lcModule} />), {
      callback: function (doc) {
        doc.save('ApplicationLC.pdf');
      },
      autoPaging: 'text',
    });
  };
  const getIndex = (index) => {
    if (_get(lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []).length > 0) {
      return (index = index + 2);
    } else {
      return index + 1;
    }
  };
  return (
    <>
      <div className="container-fluid p-0 border-0">
        <div className={`${styles.root_container} card shadow-none border-0 bg-transparent`}>
          <div className={`${styles.term_container} container-fluid download-pdf-bg`}>
            <Row>
              <Col sm={12} className={`d-flex justify-content-center align-items-center`}>
                <h3 className="download-pdf-title">APPLICATION FOR LETTER OF CREDIT</h3>
              </Col>
            </Row>

            <div className="d-flex justify-content-between">
              <div>
                <div className={`${styles.sub_heading} term_para`}>
                  Order ID: <span className="label1">{lcModuleData?.order?.orderId}</span>
                </div>
                <div className={`${styles.sub_heading} term_para`}>
                  Buyer: <span className="label1">{lcModuleData?.company?.companyName}</span>
                </div>
              </div>
              <div>
                <div className={`${styles.sub_heading} term_para mt-4`}>
                  Date: <span className="label1">{moment(d).format('DD.MM.yyyy')}</span>
                </div>
              </div>
            </div>
          </div>

          <Card className={`${styles.content}`}>
            <div className={`${styles.datatable} datatable`}>
              <div className={styles.table_scroll_outer}>
                <div className={styles.table_scroll_inner}>
                  <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                      {lcModuleData && lcModuleData?.lcApplication?.formOfDocumentaryCredit ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>40A </span>
                            <span>FORM OF DOCUMENTARY CREDIT</span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.formOfDocumentaryCredit?.toUpperCase()}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.applicableRules ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>40E </span>
                            <span>APPLICABLE RULES</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.applicableRules?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.dateOfExpiry ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>31D </span>
                            <span>DATE OF EXPIRY</span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.dateOfExpiry
                              ? moment(lcModuleData?.lcApplication?.dateOfExpiry).format('DD-MM-YYYY')
                              : ''}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.placeOfExpiry ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>31D </span>
                            <span>PLACE OF EXPIRY</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.placeOfExpiry?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.lcIssuingBank ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>51D </span>
                            <span>LC ISSUING BANK</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.lcIssuingBank?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.applicant ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>50 </span>
                            <span>APPLICANT</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.applicant?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.beneficiary ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>59 </span>
                            <span>BENEFICIARY</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.beneficiary?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.currecyCodeAndAmountValue ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>32B </span>
                            <span>CURRENCY CODE &amp; AMOUNT</span>
                          </td>
                          <td className="term_para">
                            {/* {addPrefixOrSuffix(
                              lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase()
                                ? lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase()
                                : 0,
                              'USD',
                              '',
                            )} */}
                            USD{' '}
                            {lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase()
                              ? lcModuleData?.lcApplication?.currecyCodeAndAmountValue?.toUpperCase()
                              : 0}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.tolerancePercentage ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>39A </span>
                            <span>TOLERANCE (+/-) PERCENTAGE</span>
                          </td>
                          <td className="term_para">
                            +/-{' '}
                            {checkNan(
                              Number(lcModuleData?.lcApplication?.tolerancePercentage)?.toLocaleString('en-IN', {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }),
                            )}{' '}
                            %
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.creditAvailablewith ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>41A </span>
                            <span>CREDIT AVAILABLE WITH</span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.creditAvailablewith?.toUpperCase()}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.creditAvailableBy ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>41B </span>
                            <span>CREDIT AVAILABLE BY</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.creditAvailableBy?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.atSight ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>42C </span>
                            <span>
                              DRAFT AT
                              <br />
                              {lcModuleData?.lcApplication?.atSight?.toUpperCase() == 'AT SIGHT' ? null : `NO. OF DAYS`}
                            </span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.atSight?.toUpperCase()} <br />{' '}
                            {lcModuleData?.lcApplication?.numberOfDays}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.drawee ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>42A </span>
                            <span>DRAWEE</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.drawee?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.deferredPayment ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>42P </span>
                            <span>DEFERRED PAYMENT</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.deferredPayment?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.partialShipment ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>43P </span>
                            <span>PARTIAL SHIPMENT</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.partialShipment?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.transhipments ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>43T </span>
                            <span>TRANSHIPMENTS</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.transhipments?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.shipmentForm ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>44A </span>
                            <span>SHIPMENT FROM</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.shipmentForm?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.portOfLoading ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>44E </span>
                            <span>PORT OF LOADING</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.portOfLoading?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.portOfDischarge ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>44F </span>
                            <span>PORT OF DISCHARGE</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.portOfDischarge?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.latestDateOfShipment ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>44C </span>
                            <span>LATEST DATE OF SHIPMENT</span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.latestDateOfShipment
                              ? moment(lcModuleData?.lcApplication?.latestDateOfShipment).format('DD-MM-YYYY')
                              : ''}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                      {lcModuleData && lcModuleData?.lcApplication?.DescriptionOfGoods ? (
                        <tr className="table_row">
                          <td className="border-bottom-0" width="40%">
                            <span className={`${styles.serial_no} term_para`}>45A </span>
                            <span>DESCRIPTION OF THE GOODS</span>
                          </td>
                          <td className="border-bottom-0 term_para">
                            {lcModuleData?.lcApplication?.DescriptionOfGoods?.toUpperCase()}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                      <tr className={`${styles.content_header} background2`}>
                        <td className="border-bottom-0 border-top-0 " colSpan={2}>
                          <div className={`${styles.content_header} background2`}>46A DOCUMENT REQUIRED:</div>
                        </td>
                      </tr>
                      {lcModuleData &&
                        lcModuleData?.documentRequired?.map((doc, index) => (
                          <tr key={index} className="table_row">
                            <td className="border-top-0" width="40%">
                              {(index += 1)}
                            </td>
                            <td className="border-top-0">{doc}</td>
                          </tr>
                        ))}
                      {/* <tr className="table_row">
                      <td className="border-bottom-0" width="40%">
                        2
                      </td>
                      <td className="border-bottom-0">
                        SIGNED PROVISIONAL / COMMERCIAL INVOICE IN 1 ORIGINAL
                        AND 3 COPIES, BASED ON THE DRY WEIGHT AND THE MANGANESE
                        CONTENT SHOWN ON THE CERTIFICATE OF TYPICAL ANALYSIS.
                      </td>
                    </tr> */}
                      <tr className={`${styles.content_header} background2`}>
                        <td className="border-bottom-0 border-top-0 " colSpan={2}>
                          <div className={`${styles.content_header} background2 `}>47A ADDITIONAL CONDITIONS:</div>
                        </td>
                      </tr>
                      {_get(lcModuleData.lcModule, 'data[0].order.generic.productSpecifications.specificationTable', []).length >
                      0 ? (
                        <>
                          <tr className="table_row">
                            <td width="40%">1</td>
                            <td className="border-top-0">
                              <div className={`${styles.datatable} datatable `}>
                                <div className={styles.table_scroll_outer}>
                                  <div className={styles.table_scroll_inner}>
                                    <table
                                      className={`${styles.table} ${styles.add_cond_table} table`}
                                      cellPadding="0"
                                      cellSpacing="0"
                                      border="0"
                                    >
                                      <tbody>
                                        <tr className="table_row">
                                          {_get(
                                            lcModuleData.lcModule,
                                            'data[0].order.generic.productSpecifications.specificationTable',
                                            [],
                                          ) &&
                                            _get(
                                              lcModuleData.lcModule,
                                              'data[0].order.generic.productSpecifications.specificationTable',
                                              [],
                                            ).length > 0 &&
                                            Object.keys(
                                              _get(
                                                lcModuleData.lcModule,
                                                'data[0].order.generic.productSpecifications.specificationTable',
                                                [],
                                              )[0],
                                            ).map((val, index) => (
                                              <th className="border-left" key={index}>
                                                {val}
                                              </th>
                                            ))}
                                        </tr>
                                        {_get(
                                         lcModuleData. lcModule,
                                          'data[0].order.generic.productSpecifications.specificationTable',
                                          [],
                                        ) &&
                                          _get(
                                            lcModuleData.lcModule,
                                            'data[0].order.generic.productSpecifications.specificationTable',
                                            [],
                                          ).length > 0 &&
                                          _get(
                                            lcModuleData.lcModule,
                                            'data[0].order.generic.productSpecifications.specificationTable',
                                            [],
                                          ).map((item, index) => (
                                            <tr>
                                              {Object.values(item).map((value, id) => (
                                                <td key={id}>{value}</td>
                                              ))}
                                            </tr>
                                          ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      ) : null}
                      {lcModuleData &&
                        lcModuleData?.additionalConditions?.map((comment, index) => (
                          <tr key={index} className="table_row">
                            <td className="border-top-0" width="40%">
                              {getIndex(index)}
                            </td>
                            <td className="border-top-0">{comment}</td>
                          </tr>
                        ))}
                      {lcModuleData && lcModuleData?.lcApplication?.presentaionPeriod ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>48 </span>
                            <span>PRESENTATION PERIOD</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.presentaionPeriod?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}{' '}
                      {lcModuleData && lcModuleData?.lcApplication?.confirmationInstructions ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>49 </span>
                            <span>CONFIRMATION INSTRUCTIONS</span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.confirmationInstructions?.toUpperCase()}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}{' '}
                      {lcModuleData && lcModuleData?.lcApplication?.reimbursingBank ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>53A </span>
                            <span>REIMBURSING BANK</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.reimbursingBank?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}{' '}
                      {lcModuleData && lcModuleData?.lcApplication?.adviceThroughBank ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>57 </span>
                            <span>ADVISE THROUGH BANK</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.adviceThroughBank?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}{' '}
                      {lcModuleData && lcModuleData?.lcApplication?.secondAdvisingBank ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>57A </span>
                            <span>SECOND ADVISING BANK, IF APPLICABLE</span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.secondAdvisingBank?.toUpperCase()}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}{' '}
                      {lcModuleData && lcModuleData?.lcApplication?.requestedConfirmationParty ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>58A </span>
                            <span>REQUESTED CONFIRMATION PARTY</span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.requestedConfirmationParty?.toUpperCase()}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}{' '}
                      {lcModuleData && lcModuleData?.lcApplication?.charges ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>71B </span>
                            <span>CHARGES</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.charges?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}{' '}
                      {lcModuleData && lcModuleData?.lcApplication?.instructionToBank ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>78 </span>
                            <span>INSTRUCTIONS TO PAYING / ACCEPTING / NEGOTIATING BANK</span>
                          </td>
                          <td className="term_para">{lcModuleData?.lcApplication?.instructionToBank?.toUpperCase()}</td>
                        </tr>
                      ) : (
                        ''
                      )}{' '}
                      {lcModuleData && lcModuleData?.lcApplication?.senderToReceiverInformation ? (
                        <tr className="table_row">
                          <td width="40%">
                            <span className={`${styles.serial_no} term_para`}>72 </span>
                            <span>SENDER TO RECEIVER INFORMATION</span>
                          </td>
                          <td className="term_para">
                            {lcModuleData?.lcApplication?.senderToReceiverInformation?.toUpperCase()}
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>

          <Modal show={show} className={`${styles.share_lc} vessel_card card share_lc`}>
            <Modal.Body className={`${styles.card_body} card-body`}>
              <form>
                <ul
                  className={`${styles.nav_tabs} ${styles.LC_draft_tabs} LC_draft_tabs nav nav-tabs`}
                  id="LCDraft"
                  role="tablist"
                >
                  <li className={`${styles.nav_item} nav-item`}>
                    <a
                      className={`${styles.nav_link} nav-link active`}
                      id="share-LC-draft"
                      data-toggle="tab"
                      href="#shareLCDraft"
                      role="tab"
                      aria-controls="shareLCDraft"
                      aria-selected="true"
                    >
                      Share LC Draft
                    </a>
                  </li>
                  <li className={`${styles.nav_item} nav-item`}>
                    <a
                      className={`${styles.nav_link} nav-link`}
                      id="download-LC-draft"
                      data-toggle="tab"
                      href="#downloadLCDraft"
                      role="tab"
                      aria-controls="downloadLCDraft"
                      aria-selected="false"
                    >
                      Download LC Draft
                    </a>
                  </li>
                </ul>
                <div className={`${styles.tab_content} tab-content`} id="LCDraft">
                  <div
                    className="tab-pane fade show active"
                    id="shareLCDraft"
                    role="tabpanel"
                    aria-labelledby="share-LC-draft"
                  >
                    <h3>Share as</h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className={`${styles.lc_document} ${styles.box} d-flex align-items-center`}>
                        <img src="/static/pdf-icon.png" width={`55px`} alt="PDF" className="img-fluid" />
                        <label for="lc_Application">
                          LC Application.pdf<span>128kb</span>
                        </label>
                        <input type="checkbox" className="ml-auto" id="lc_Application" value="LC Application" />
                      </div>
                      <div className={`${styles.word_document} ${styles.box} d-flex align-items-center`}>
                        <img src="/static/doc-icon.png" width={`55px`} alt="DOC" className="img-fluid" />
                        <label for="LC_Application_word">
                          LC Application.doc<span>128kb</span>
                        </label>
                        <input type="checkbox" className="ml-auto" id="LC_Application_word" value="LC Application" />
                      </div>
                    </div>
                    <ul
                      className={`${styles.nav_tabs} ${styles.share_via} share_via nav nav-tabs`}
                      id="shareVia"
                      role="tablist"
                    >
                      <li className={`${styles.nav_item} nav-item`}>
                        <a
                          className={`${styles.nav_link} nav-link active`}
                          id="email-address"
                          data-toggle="tab"
                          href="#emailAddress"
                          role="tab"
                          aria-controls="emailAddress"
                          aria-selected="true"
                          onClick={() => {
                            setWhat('email');
                          }}
                        >
                          <img src="/static/email-icon.png" width={`32px`} className="img-fluid" alt="Email Address" />
                          Email Address
                        </a>
                      </li>
                      <li className={`${styles.nav_item} nav-item`}>
                        <a
                          className={`${styles.nav_link} nav-link`}
                          id="whatsapp"
                          data-toggle="tab"
                          href="#whatsApp"
                          role="tab"
                          aria-controls="whatsApp"
                          aria-selected="false"
                          onClick={() => {
                            setWhat('what');
                          }}
                        >
                          <img src="/static/icons8-whatsapp.svg" width={`27px`} className="img-fluid" alt="WhatsApp" />
                          WhatsApp
                        </a>
                      </li>
                    </ul>
                    <div className={`${styles.tab_content} tab-content`} id="shareVia">
                      <div
                        className="tab-pane fade show active"
                        id="emailAddress"
                        role="tabpanel"
                        aria-labelledby="email-address"
                      >
                        {emailAdd.map((val, index) => (
                          <div className="d-flex align-items-center form-group">
                            <div key={index} className={`${styles.each_input} flex-grow-1`}>
                              <div className="d-flex">
                                <select
                                  id="email"
                                  name="email"
                                  className={`${styles.formControl} ${styles.customSelect} input form-control`}
                                  selected
                                >
                                  <option value="javanika.seth@hdfcbank.com">javanika.seth@hdfcbank.com</option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading_login label_heading bg-transparent`}
                                  htmlFor="email"
                                >
                                  Email
                                </label>
                                <img
                                  className={`${styles.arrow} image_arrow img-fluid`}
                                  src="/static/inputDropDown.svg"
                                  alt="Search"
                                />
                              </div>
                            </div>
                            <img
                              src="/static/delete 2.svg"
                              alt="delete"
                              role="button"
                              className="ml-3"
                              onClick={() => {
                                handleDeleteEmail(index);
                              }}
                            />
                          </div>
                        ))}
                        <div
                          className={`${styles.addMoreRows}`}
                          onClick={(e) => {
                            addMoreRows();
                          }}
                        >
                          <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                            +
                          </span>{' '}
                          add another
                        </div>
                        <div className="d-flex justify-content-between">
                          <button
                            onClick={handleClose}
                            type="button"
                            className={`${styles.close} ${styles.btn} btn mr-2 w-50`}
                          >
                            Close
                          </button>
                          <button type="button" className={`${styles.submit} ${styles.btn} btn ml-2 w-50`}>
                            Share
                          </button>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="whatsApp" role="tabpanel" aria-labelledby="whatsapp">
                        {number.length > 0 &&
                          number.map((val, index) => {
                            return (
                              <>
                                <div className="d-flex align-items-center form-group">
                                  <div className={`${styles.each_input} ${styles.phone} flex-grow-1`}>
                                    <div className={styles.phone_card}>
                                      <select
                                        name="callingCode"
                                        id="Code"
                                        className={`${styles.code_phone} input border-right-0 bg-transparent`}
                                      >
                                        <option>+91</option>
                                        <option>+1</option>
                                        <option>+92</option>
                                        <option>+95</option>
                                        <option>+24</option>
                                      </select>
                                      <input
                                        type="tel"
                                        id="textNumber"
                                        name="primary"
                                        className={`${styles.formControl} input form-control border-left-0`}
                                        required
                                      />
                                      <label className={`${styles.label_heading} label_heading`} id="textNumber">
                                        Phone Number
                                        <strong className="text-danger">*</strong>
                                      </label>
                                    </div>
                                  </div>
                                  <img
                                    src="/static/delete 2.svg"
                                    alt="delete"
                                    role="button"
                                    className="ml-3"
                                    onClick={() => {
                                      handleDeleteNumber(index);
                                    }}
                                  />
                                </div>
                              </>
                            );
                          })}
                        {/* <div className={`${styles.labelFloat} form-group`}>
                          <input type='text' id='phone' name="phone" className={`${styles.formControl} ${styles.input} input form-control`} required />
                          <label className={`label_heading_login`} htmlFor='phone'>Phone Number</label>
                        </div> */}
                        <div
                          className={`${styles.addMoreRows}`}
                          onClick={(e) => {
                            if (what == 'what') {
                              addWhatRows();
                            } else {
                              addMoreRows();
                            }
                          }}
                        >
                          <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                            +
                          </span>{' '}
                          add another
                        </div>
                        <div className="d-flex justify-content-between">
                          <button
                            onClick={handleClose}
                            type="button"
                            className={`${styles.close} ${styles.btn} btn mr-2 w-50`}
                          >
                            Close
                          </button>
                          <button
                            onClick={handleClose}
                            type="button"
                            className={`${styles.submit} ${styles.btn} btn ml-2 w-50`}
                          >
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="downloadLCDraft"
                    role="tabpanel"
                    aria-labelledby="download-LC-draft"
                  >
                    <h3>Download as</h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className={`${styles.lc_document} ${styles.box} d-flex align-items-center`}>
                        <img src="/static/pdf-icon.png" width={`55px`} alt="PDF" className="img-fluid" />
                        <label for="lc_document">
                          LC Document.pdf<span>128kb</span>
                        </label>
                        <input type="checkbox" className="ml-auto" id="lc_document" value="LC Document" />
                      </div>
                      <div className={`${styles.word_document} ${styles.box} d-flex align-items-center`}>
                        <img src="/static/doc-icon.png" width={`55px`} alt="DOC" className="img-fluid" />
                        <label for="word_document">
                          word document.doc<span>128kb</span>
                        </label>
                        <input type="checkbox" className="ml-auto" id="word_document" value="word document" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button onClick={handleClose} type="button" className={`${styles.close} ${styles.btn} btn mr-2 w-50`}>
                        Close
                      </button>
                      <button onClick={handleClose} type="button" className={`${styles.submit} ${styles.btn} btn ml-2 w-50`}>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>

      <LCAmendBar download={exportPDF} openbar={handlePopup} barName="Application for LC" />
    </>
  );
}

export default Index;
