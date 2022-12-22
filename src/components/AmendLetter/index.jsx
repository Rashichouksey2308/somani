import AmendLetterTemp from '@/templates/AmendLetterTemp';
import jsPDF from 'jspdf';
import _get from 'lodash/get';
import moment from 'moment';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ReactDOMServer from 'react-dom/server';
import { useDispatch, useSelector } from 'react-redux';
import { GetLcModule } from 'redux/lcModule/action';
import LCAmendBar from '../LCAmendBar';
import styles from './index.module.scss';

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    let id = sessionStorage.getItem('lcAmmend');
    dispatch(GetLcModule(`?lcModuleId=${id}`));
  }, [dispatch]);

  const { lcModule } = useSelector((state) => state.lc);

  let lcModuleData = _get(lcModule, 'data[0]', {});
   const [emailAdd, setEmailAdd] = useState([{ emailID: '' }]);
  const [insuranceAdd, setinsuranceAdd] = useState([{ insurance: '' }]);
const addMoreRows = (val) => {
    if (val == 'email') {
      setEmailAdd([
        ...emailAdd,
        {
          emailID: '',
        },
      ]);
    } else {
      setinsuranceAdd([
        ...insuranceAdd,
        {
          insurance: '',
        },
      ]);
    }
  };
const deleteArr=(val,index)=>{
  if(val=="email"){
    setEmailAdd([...emailAdd.slice(0, index), ...emailAdd.slice(index + 1)]);
  }else{
    setinsuranceAdd([...insuranceAdd.slice(0, index), ...insuranceAdd.slice(index + 1)]);
  }
}
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handlePopup = () => {
    setShow(true);
  };
  useEffect(() => {
    let id = sessionStorage.getItem('lcAmmend');
    dispatch(GetLcModule(`?lcModuleId=${id}`));
  }, [dispatch]);


  const returnValue = (value) => {
    if (value.dropDownValue === '(32B) Currency Code & Amount') {
      return `${lcModuleData?.order?.orderCurrency}  ${Number(
        lcModuleData?.lcApplication?.currecyCodeAndAmountValue,
      )?.toLocaleString(lcModuleData?.order?.orderCurrency === 'INR' ? 'en-In' : 'en-En', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } else if (value.dropDownValue === '(43T) Transhipments') {
      return lcModuleData?.lcApplication?.transhipments == undefined
        ? ''
        : lcModuleData?.lcApplication?.transhipments == 'Yes'
        ? 'Allowed'
        : 'Not Allowed';
    } else if (value.dropDownValue === '(39A) Tolerance (+/-) Percentage') {
      return `(+/-) ${value.newValue}  %`;
    } else if (value.dropDownValue === '(31D) Date Of Expiry'||value.dropDownValue === '(44C) Latest Date Of Shipment') {
      return moment(value.newValue).format('DD-MM-YYYY');
    } else if (value.dropDownValue === '(42C) Draft At' && lcModuleData?.lcApplication?.atSight == 'Usuance') {
      return `Usuance - ${value.newValue} days`;
    } else {
      return value.newValue.toUpperCase()
    }
  };


  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [1500, 1500]);
    doc.html(ReactDOMServer.renderToString(<AmendLetterTemp lcModuleData={lcModuleData}  />), {
      callback: function (doc) {
      const totalPages = doc.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.text(`Page ${i} of ${totalPages}`, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 1, {
        align: 'center',
        });;
      }
        doc.save('AmendLetter.pdf');
      },
      // margin:margins,
      autoPaging: 'text',
    });
  };
const getNumber=(number)=>{
  console.log(number,"number")
let regex = /\(([^\)]*)\)/;
let data = number.match(regex)[1];
return data
}
const getString=(string)=>{
let regex = /\([^\)]*\)/;
let data = string.replace(regex, "");;
return data
}
const getDate = (value)=>{
  let data = moment(value).format('DD-MM-YYYY')
  return data
  }


  
  return (
    <>
      <div className={`${styles.root_container} card border-0 bg-transparent shadow-none tabHeader`}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.back_arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
              onClick={() => Router.push('/letter-credit/id')}
            />
            <h1 className={`${styles.heading} heading`}>Application for LC</h1>
          </div>
        </div>
        <div className={`${styles.term_container} download-pdf-bg border_color container-fluid`}>
          <Row className={`h-50`}>
            <Col sm={12} className={`d-flex justify-content-center align-items-center`}>
              <h3 className='download-pdf-title'>AMENDED LETTER OF CREDIT</h3>
            </Col>
          </Row>

          <div className="d-flex justify-content-between mt-n2">
            <div>
              <div className={styles.sub_heading}>
                Order ID: <span>{lcModuleData?.order?.orderId}</span>
              </div>
              <div className={styles.sub_heading}>
                Buyer: <span>{lcModuleData?.company?.companyName}</span>
              </div>
            </div>
            <div className="text-right">
              <div className={styles.sub_heading}>
                Documentary Credit Number: <span>{lcModuleData?.lcApplication?.documentaryCreditNumber}</span>
              </div>
              <div className={styles.sub_heading}>
                Date: <span>{moment(lcModuleData?.createdAt).format('DD.MM.yyy')}</span>
              </div>
            </div>
          </div>
        </div>

        <Card className={`${styles.content} bg-transparent border-0`}>
          <div className={`${styles.datatable} datatable`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} mb-0 table`} cellPadding="0" cellSpacing="0" border="0">
                 {lcModuleData?.lcNewApplication?.map((val, index) => ( <tbody key={index}>
                    <tr className="table_row">
                      <td width="40%">
                        <b>{getNumber(val.dropDownValue.toUpperCase())}</b>
                        <span>{getString(val.dropDownValue.toUpperCase())}</span>
                        {}
                      </td>
                      {/* <td width="40%">
                        40A &nbsp; &nbsp; <span>FORM OF DOCUMENTARY CREDIT</span>
                      </td> */}
                      <td>{returnValue(val)}</td>
                      {/* <td>{lcModuleData?.lcApplication?.formOfDocumentaryCredit}</td> */}
                    </tr>
                    {/* <tr className="table_row">
                      <td width="40%">
                        40E &nbsp; &nbsp; <span>APPLICABLE RULES</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.applicableRules}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        31D &nbsp; &nbsp; <span>DATE OF EXPIRY</span>
                      </td>
                      <td>{moment(lcModuleData?.lcApplication?.dateOfExpiry).format('DD-MM-yyy')}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        31D &nbsp; &nbsp; <span>PLACE OF EXPIRY</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.placeOfExpiry}</td>
                    </tr>
                    <tr className="table_row">
                      <td width="40%">
                        51D &nbsp; &nbsp; <span>LC ISSUING BANK</span>
                      </td>
                      <td>{lcModuleData?.lcApplication?.lcIssuingBank}</td>
                    </tr> */}
                  </tbody>))}
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <LCAmendBar download={exportPDF} openbar={handlePopup} barName="LC Amendment Draft" />

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
                      <div className={`d-flex align-items-center form-group`}>
                        <div key={index} className={`${styles.each_input} flex-grow-1`}>
                            <input
                              id="email"
                              name="email"
                              className={`${styles.formControl} input form-control`}
                              
                            />
                            <label
                              className={`${styles.label_heading} label_heading_login label_heading bg-transparent`}
                              htmlFor="email"
                            >
                              Email
                            </label>
                           
                        </div>
                        <img
                            src="/static/delete 2.svg"
                            alt="delete"
                            role="button"
                            className="ml-3"
                            onClick={()=>{
                              deleteArr('email',index)
                            }}
                        />
                      </div>
                    ))}
                    <div
                      className={`${styles.addMoreRows}`}
                      onClick={(e) => {
                        addMoreRows("email");
                      }}
                    >
                      <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                        +
                      </span>{' '}
                      add another
                    </div>
                    <div className="d-flex justify-content-between">
                      <button onClick={handleClose} type="button" className={`${styles.close} ${styles.btn} btn mr-2 w-50`}>
                        Close
                      </button>
                      <button type="button" className={`${styles.submit} ${styles.btn} btn ml-2 w-50`}>
                        Share
                      </button>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="whatsApp" role="tabpanel" aria-labelledby="whatsapp">
                     {insuranceAdd.map((val, index) => {
                      return (
                        <>
                        <div className={`d-flex align-items-center form-group`}>
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
                            onClick={()=>{
                                  deleteArr('rest',index)
                                }}
                              src="/static/delete 2.svg"
                              alt="delete"
                              role="button"
                              className="ml-3"
                          />
                        </div>
                        </>
                      );
                    })}
                   
                   
                    <div
                      className={`${styles.addMoreRows}`}
                      onClick={(e) => {
                        addMoreRows();
                      }}
                    >
                      <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                        +  add another
                      </span>{' '}
                     
                    </div>
                    <div className="d-flex justify-content-between">
                      <button onClick={handleClose} type="button" className={`${styles.close} ${styles.btn} btn mr-2 w-50`}>
                        Close
                      </button>
                      <button onClick={handleClose} type="button" className={`${styles.submit} ${styles.btn} btn ml-2 w-50`}>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="downloadLCDraft" role="tabpanel" aria-labelledby="download-LC-draft">
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
    </>
  );
}

export default Index;
