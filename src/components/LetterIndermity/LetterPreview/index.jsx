/* eslint-disable @next/next/no-img-element */
import jsPDF from 'jspdf';
import _get from 'lodash/get';
import moment from 'moment/moment';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useDispatch } from 'react-redux';
import { GetTransitDetails } from '../../../redux/TransitDetails/action';
import SavePreviewBar from '../SavePreviewBar';
import styles from './index.module.scss';

function Index() {
  const [transitDetails, setTransitDetails] = useState();
  const dispatch = useDispatch();
  const id = sessionStorage.getItem('transitPId');

  useEffect(() => {
    if (id) {
      fetchInitialData();
    }
  }, [id]);

  function titleCase(mySentence){
        return mySentence.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
  }

  const fetchInitialData = async () => {
    const data = await dispatch(GetTransitDetails(`?transitId=${id}`));
    setTransitDetails(data);
  };

  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [800, 1150]);
    doc.html(
      ReactDOMServer.renderToString(
        <table width="800px" cellPadding="0" cellSpacing="0" border="0">
          <tr>
            <td valign="top" align="left">
              <table
                width="100%"
                bgColor="#FFFFFF"
                style={{
                  fontFamily: 'Times New Roman, Times, serif',
                  borderRadius: '6px',
                  boxShadow: '0 3px 6px #CAD0E2',
                  marginBottom: '26px',
                  border: '2px solid rgba(202, 214, 230, 0.3)',
                }}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <tr>
                  <td valign="top" align="left">
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        <tr>
                          <td
                            colSpan={2}
                            valign="top"
                          >
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                              <tr>
                                <td align="left" style={{ padding: '0 35px 15px' }}></td>
                                <td
                                  align="left"
                                  width="40%"
                                  style={{ padding: '0 35px 15px' }}
                                >
                                  <span
                                    style={{                                    
                                      fontSize: '30px',
                                      color: '#111111',
                                      lineHeight: '25px',
                                      fontWeight: 'bold',
                                      display: 'block'
                                    }}
                                  >
                                    INDO GERMAN</span>
                                  <span
                                    style={{
                                      fontSize: '18px',
                                      color: '#111111',
                                      lineHeight: '18px',
                                      fontWeight: 'normal',
                                      display: 'block'
                                    }}
                                  >
                                    INTERNATIONAL (P) LTD.
                                  </span>
                                  <span
                                    style={{
                                      fontSize: '14px',
                                      color: '#111111',
                                      lineHeight: '20px',
                                      fontWeight: 'normal',
                                      display: 'block'
                                    }}
                                  >
                                    CIN No.: U74899DL1 994PTC063676
                                  </span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              textAlign: 'justify',
                            }}
                          >
                            <span                              
                              style={{
                                fontSize: '12px',
                                color: '#111111',
                                lineHeight: '18px',
                                fontWeight: 'bold',
                                display: 'block',
                                padding: '20px 35px 50px'
                              }}
                            >
                              STANDARD FORM LETTER OF INDEMNITY TO BE GIVEN IN RETURN FOR DELIVERING CARGO WITHOUT PRODUCTION OF THE ORIGINAL BILL(S) OF LADING.</span>                            
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'bold',
                              padding: '0 15px 30px 35px',
                              marginBottom: '0',
                              textTransform: 'uppercase',
                              display: 'table'
                            }}
                          >
                            <span
                              style={{
                                // display: 'inline-block',
                                // float: 'left',
                                height: '60px',
                                // width: '30px',                                
                                padding: '0 10px 0 35px',
                                fontWeight: 'normal',
                                textTransform: 'capitalize',
                                display: 'table-cell'
                              }}
                            >
                              To : 
                            </span>
                            <span
                              style={{
                                display: 'table-cell'
                              }}>
                              {_get(transitDetails, 'data[0].order.generic.seller.name')}<br /> 
                              {_get(transitDetails, 'data[0].order.generic.seller.addresses[0].fullAddress')},<br />
                              {_get(transitDetails, 'data[0].order.generic.seller.addresses[0].city')}, {_get(transitDetails, 'data[0].order.generic.seller.addresses[0].pinCode')}, {_get(transitDetails, 'data[0].order.generic.seller.addresses[0].country')}
                            </span>
                          </td>
                          <td
                            valign="top"
                            align="right"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'normal',
                              padding: '0 35px 30px 15px',
                            }}
                          >
                            DATE : {moment(_get(transitDetails, 'data[0].LOI.loiIssueDate', '').slice(0, 10).replace(/-/g, '/'),).format('DD MMMM YYYY')}
                          </td>
                        </tr>
                        <tr>
                          <td
                            valign="top"
                            colSpan={2}
                            align="left"
                            style={{
                              padding: '30px 35px 30px'
                            }}
                          >
                            <span style={{ fontSize: '12px', color: '#111111', lineHeight: '18px', fontWeight: 'normal'}}>Dear Sir,</span>
                          </td>
                        </tr>
                        <br />
                        <br />
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'bold',
                              display: 'table'
                            }}
                          >
                            <span style={{ display: 'table-cell', padding: '0 5px 0 35px', fontWeight: 'normal' }}>Ship : </span>
                            <span style={{ display: 'table-cell', paddingRight: '35px' }}>{_get(transitDetails, 'data[0].BL.billOfLanding[0].vesselName', '').toUpperCase()}</span>
                            <br />
                            <br />
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'bold',
                              display: 'table'
                            }}
                          >
                            <span style={{ display: 'table-cell', padding: '0 5px 0 35px', fontWeight: 'normal' }}>Voyage : </span>
                            <span style={{ display: 'table-cell', paddingRight: '35px' }}>FROM {_get(transitDetails, 'data[0].order.termsheet.transactionDetails.loadPort', '',).toUpperCase()} TO {_get(transitDetails, 'data[0].order.termsheet.transactionDetails.portOfDischarge', '',).toUpperCase()}, INDIA</span>
                            <br />
                            <br />
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'bold',
                              display: 'table'
                            }}
                          >
                             <span style={{ display: 'table-cell', padding: '0 5px 0 35px', fontWeight: 'normal' }}>Cargo : </span>
                             <span style={{ display: 'table-cell', paddingRight: '35px' }}>{_get(transitDetails, 'data[0].order.quantity', '')?.toLocaleString('en-IN')} {_get(transitDetails, 'data[0].order.unitOfQuantity', '').toUpperCase()} {_get(transitDetails, 'data[0].order.commodity', '').toUpperCase()}</span>
                            <br />
                            <br />
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            valign="top"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'bold',
                              padding: '0 35px 20px'
                            }}
                          >
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                              <tr>
                                <td valign='top' align="left" width="13%">
                                  <span style={{ fontWeight: 'normal' }}>Bill(s) of Lading :</span>
                                </td>
                                <td align="left" width="87%">
                                  <ol style={{paddingLeft:'6px', listStyle:'none', margin:'0'}}>
                                    {_get(transitDetails, 'data[0].LOI.billOfLanding', []).map((val, index) => {
                                      return (
                                        <>
                                        <li>
                                          <span>
                                            {val.blnumber} Dated {val.date}, ISSUED AT {_get(transitDetails, 'data[0].order.termsheet.transactionDetails.loadPort', '').toUpperCase()}
                                          </span>
                                        </li>
                                        </>
                                      );
                                    })}
                                  </ol>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'normal',
                              padding: '20px 35px',
                              textAlign: 'justify',
                            }}
                          >
                            The above cargo was shipped on the above ship by <span style={{ fontWeight: 'bold', textTransform:'uppercase' }}>{_get(transitDetails, 'data[0].order.generic.supplier.name')}, {_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].fullAddress')}, {_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].city')}{_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].city') == '' ? '' : ','} {_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].country')}, {_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].pinCode')}</span> and consigned to <span style={{ fontWeight: 'bold' }}>TO ORDER</span> for delivery at the port of <span style={{ fontWeight: 'bold' }}>ANY PORT (S) IN INDIA</span> but the bill of lading has not arrived and we, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.name', ''))}, {titleCase(_get(
                              transitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', '',))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].state', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].country', ''))} hereby request you to deliver the said cargo to {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.name', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', '',))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].state', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].country', ''))} or to such party as you believe to be or to represent {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.name', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', '',))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].state', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].country', ''))} or to be acting on behalf of {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.name', ''))}, {titleCase(_get(
                              transitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', '',
                            ))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].state', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].country', ''))} at <span style={{ fontWeight: 'bold' }}>
                              {_get( transitDetails, 'data[0].order.termsheet.transactionDetails.portOfDischarge', '',).toUpperCase()}</span> without production of the original bill of lading.
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'normal',
                              padding: '0 35px 30px',
                              textAlign: 'justify',
                            }}
                          >
                            In consideration of your accepting our request and/or complying with, or taking any steps to comply with, or attempting to comply with our above request, we hereby agree as follows:
                            <br />
                            <br />
                            1. To indemnify you, your servants, agents and any third party affiliated or associated with Torvald Klaveness and to hold all of you harmless in respect of any liability, loss, damage or expense of whatsoever nature which you may sustain by reason of delivering the cargo in accordance with our request.
                            <br />
                            <br />
                            2. In the event of any proceedings being commenced against you or any other person or third party mentioned under No. 1 above in connection with the delivery of the cargo as aforesaid, to provide you or them on demand with sufficient funds to defend the same.
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} valign="top" style={{ padding: '0 35px 30px' }}>
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                              <tr>
                                <td
                                  align="center"
                                  colSpan={3}
                                  style={{
                                    fontSize: '16px',
                                    color: '#111111',
                                    lineHeight: '20px',
                                    fontWeight: 'normal',
                                    borderBottom: '2px solid #111111',
                                    paddingBottom: '10px',
                                  }}
                                >
                                  7A., 'SAGAR', 6 Tilak Marg, New Delhi-11OOO1 (INDIA)
                                </td>
                              </tr>
                              <tr>
                                <td
                                  valign="top"
                                  style={{
                                    fontSize: '12px',
                                    color: '#111111',
                                    lineHeight: '18px',
                                    fontWeight: 'normal',
                                    paddingTop: '10px',
                                  }}
                                >
                                  <strong>Joint Venture of</strong>
                                  <br />
                                  Thyssehkrupp Mannex GMBH
                                  <br />
                                  Essen
                                  <br />
                                  Germany
                                </td>
                                <td
                                  valign="top"
                                  style={{
                                    fontSize: '12px',
                                    color: '#111111',
                                    lineHeight: '18px',
                                    fontWeight: 'normal',
                                    paddingTop: '10px',
                                  }}
                                >
                                  Phones : (91)-(11)-4315-8000, 237&2022, 2338-7413
                                  <br />
                                  Fax : (91) (11) 2378-2806
                                  <br />
                                  E-mail : indogerman@somanigroup.com
                                </td>
                                <td
                                  valign="top"
                                  style={{
                                    fontSize: '12px',
                                    color: '#111111',
                                    lineHeight: '18px',
                                    fontWeight: 'normal',
                                    paddingTop: '10px',
                                  }}
                                >
                                  <strong>Joint Venture of</strong>
                                  <br />
                                  Somani Group
                                  <br />
                                  New Delhi
                                  <br />
                                  lndia
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <table
                width="100%"
                bgColor="#FFFFFF"
                style={{
                  fontFamily: 'Times New Roman, Times, serif',
                  borderRadius: '6px',
                  boxShadow: '0 3px 6px #CAD0E2',
                  marginBottom: '26px',
                  border: '2px solid rgba(202, 214, 230, 0.3)',
                }}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <tr>
                  <td valign="top" align="left">
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        <tr>
                          <td valign='top'>
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                              <tr>
                                <td align="left" style={{ padding: '35px 35px 15px' }}></td>
                                <td
                                  align="left"
                                  width="40%"
                                  style={{ padding: '35px 35px 15px' }}
                                >
                                  <span
                                    style={{                                    
                                      fontSize: '30px',
                                      color: '#111111',
                                      lineHeight: '25px',
                                      fontWeight: 'bold',
                                      display: 'block'
                                    }}
                                  >
                                    INDO GERMAN</span>
                                  <span
                                    style={{
                                      fontSize: '18px',
                                      color: '#111111',
                                      lineHeight: '18px',
                                      fontWeight: 'normal',
                                      display: 'block'
                                    }}
                                  >
                                    INTERNATIONAL (P) LTD.
                                  </span>
                                  <span
                                    style={{
                                      fontSize: '14px',
                                      color: '#111111',
                                      lineHeight: '20px',
                                      fontWeight: 'normal',
                                      display: 'block'
                                    }}
                                  >
                                    CIN No.: U74899DL1 994PTC063676
                                  </span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'normal',
                              padding: '30px 35px 30px',
                              textAlign: 'justify',
                            }}
                          >
                            3. If, in connection with the delivery of the cargo as aforesaid, the ship, or any other ship or property in the same or affiliated/associated ownership, management or control, should be arrested or detained or should the arrest or detention thereof be threatened, or should there be any interference in the use or trading of the vessel (whether by virtue of a caveat being entered on the ship's registry or otherwise howsoever), to provide on demand such bail or other security as may be required to prevent such arrest or detention or to secure the release of such ship or property or to remove such interference and to indemnify you in respect of any liability, loss, damage or expense caused by such arrest or detention or threatened arrest or detention or such interference, whether or not such arrest or detention or threatened arrest or detention or such interference may be justified.
                            <br />
                            <br />
                            4. If the place at which we have asked you to make delivery is a bulk liquid or gas terminal or facility, or another ship, lighter or barge, then delivery to such terminal, facility, ship, lighter or barge shall be deemed to be delivery to the party to whom we have requested you to make such delivery.
                            <br />
                            <br />
                            5. As soon as all original bills of lading for the above cargo shall have come into our possession, to deliver the same to you, or otherwise to cause all original bills of lading to be delivered to you, whereupon our liability hereunder shall cease.
                            <br />
                            <br />
                            6. The liability of each and every person under this indemnity shall be joint and several and shall not be conditional upon your proceeding first against any person, whether or not such person is party to or liable under this indemnity.
                            <br />
                            <br />
                            7. This indemnity shall be governed by and construed in accordance with English law and each and every person liable under this indemnity shall at your request submit to the Jurisdiction of the High Court of Justice of England.
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'bold',
                              padding: '30px 35px 20px',
                            }}
                          >
                            <span style={{ fontWeight: 'normal' }}>
                              Yours faithfully
                              <br />
                              For and on behalf of
                            </span>
                            <br />
                            {_get(transitDetails, 'data[0].order.generic.buyer.name', '')}
                            <br />
                            <span style={{ fontWeight: 'normal' }}>The Requestor</span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="left"
                            style={{
                              fontSize: '12px',
                              color: '#111111',
                              lineHeight: '18px',
                              fontWeight: 'bold',
                              padding: '40px 35px 50px',
                            }}
                          >
                            <span style={{ fontWeight: 'normal' }}>Authorised Signatory</span>
                            <br />
                            <span style={{ fontWeight: 'normal' }}>Name: </span>
                            {_get(transitDetails, 'data[0].LOI.authorizedSignatory.name', '')}
                            <br />
                            <span style={{ fontWeight: 'normal' }}>Designation:</span> {_get(transitDetails, 'data[0].LOI.authorizedSignatory.designation', '')}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} valign="top" style={{ padding: '0 35px 15px' }}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                              <tr>
                                <td
                                  align="center"
                                  colSpan={3}
                                  style={{
                                    fontSize: '16px',
                                    color: '#111111',
                                    lineHeight: '20px',
                                    fontWeight: 'normal',
                                    borderBottom: '2px solid #111111',
                                    paddingBottom: '10px',
                                  }}
                                >
                                  7A., 'SAGAR', 6 Tilak Marg, New Delhi-11OOO1 (INDIA)
                                </td>
                              </tr>
                              <tr>
                                <td
                                  valign="top"
                                  style={{
                                    fontSize: '12px',
                                    color: '#111111',
                                    lineHeight: '18px',
                                    fontWeight: 'normal',
                                    paddingTop: '10px',
                                  }}
                                >
                                  <strong>Joint Venture of</strong>
                                  <br />
                                  Thyssehkrupp Mannex GMBH
                                  <br />
                                  Essen
                                  <br />
                                  Germany
                                </td>
                                <td
                                  valign="top"
                                  style={{
                                    fontSize: '12px',
                                    color: '#111111',
                                    lineHeight: '18px',
                                    fontWeight: 'normal',
                                    paddingTop: '10px',
                                  }}
                                >
                                  Phones : (91)-(11)-4315-8000, 237&2022, 2338-7413
                                  <br />
                                  Fax : (91) (11) 2378-2806
                                  <br />
                                  E-mail : indogerman@somanigroup.com
                                </td>
                                <td
                                  valign="top"
                                  style={{
                                    fontSize: '12px',
                                    color: '#111111',
                                    lineHeight: '18px',
                                    fontWeight: 'normal',
                                    paddingTop: '10px',
                                  }}
                                >
                                  <strong>Joint Venture of</strong>
                                  <br />
                                  Somani Group
                                  <br />
                                  New Delhi
                                  <br />
                                  lndia
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>,
      ),
      {
        callback: function (doc) {
              const totalPages = doc.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.text(`Page ${i} of ${totalPages}`, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 1, {
        align: 'center',
        });;
      }
          doc.save('LetterOfIndemnity.pdf');
        },
        // margin:margins,
        margin:[40,0,40,0],
        autoPaging: 'text',
      },
    );
  };

  return (
    <div className="container-fluid p-0">
      <div className={`${styles.root} card border-0`}>
        <div className={`${styles.content_container}`}>
          <div className={`${styles.heading} d-flex justify-content-end`}>
            <p>
              <span className={`${styles.title} `}>INDO GERMAN</span>
              <br />
              <span>INTERNATIONAL (P) LTD.</span>
              <br />
              CIN No.: U74899DL1 994PTC063676
            </p>
          </div>
          <div className={`${styles.aboutLetter}`}>
            <p>
              STANDARD FORM LETTER OF INDEMNITY TO BE GIVEN IN RETURN FOR DELIVERING CARGO WITHOUT PRODUCTION OF THE ORIGINAL BILL(S) OF LADING.
            </p>
          </div>
          <div className={`${styles.addressAndDAte} d-flex justify-content-between align-content-center`}>
            <div className={`d-flex`}>
              <span>To: </span>
              <div className={`ml-3 ${styles.noadd} text-left text-uppercase`}>
                {_get(transitDetails, 'data[0].order.generic.seller.name')}<br/>
                {_get(transitDetails, 'data[0].order.generic.seller.addresses[0].fullAddress')},<br/>
                {_get(transitDetails, 'data[0].order.generic.seller.addresses[0].city')}, {_get(transitDetails, 'data[0].order.generic.seller.addresses[0].pinCode')}, {_get(transitDetails, 'data[0].order.generic.seller.addresses[0].country')}
              </div>
            </div>
            <div className="w-25 text-right font-weight-normal">
              <span>DATE: </span>
              {moment(_get(transitDetails, 'data[0].LOI.loiIssueDate', '').slice(0, 10).replace(/-/g, '/')).format(
                'DD MMMM YYYY',
              )}
            </div>
          </div>
          <span>Dear Sir, </span>
          <div className={`d-flex ${styles.salutations}`}>
            <span>Ship: </span>
            <div className={`ml-3`}>
              {_get(transitDetails, 'data[0].BL.billOfLanding[0].vesselName', '').toUpperCase()}
            </div>
          </div>
          <div className={`d-flex ${styles.salutations}`}>
            <span>Voyage: </span>
            <div className={`ml-3`}>
              FROM {_get(transitDetails, 'data[0].order.termsheet.transactionDetails.loadPort', '').toUpperCase()} TO {_get(transitDetails, 'data[0].order.termsheet.transactionDetails.portOfDischarge', '').toUpperCase()}, INDIA
            </div>
          </div>
          <div className={`d-flex ${styles.salutations}`}>
            <span>Cargo: </span>
            <div className={`ml-3`}>
              {_get(transitDetails, 'data[0].order.quantity', '').toLocaleString()} {_get(transitDetails, 'data[0].order.unitOfQuantity', '').toUpperCase()} {_get(transitDetails, 'data[0].order.commodity', '').toUpperCase()}
            </div>
          </div>
          <div className={`d-flex ${styles.salutations}`}>
            <span>Bill(s) of Lading: </span>
            <ol style={{ listStyle: 'none', paddingLeft: '0.2rem' }}>
              {_get(transitDetails, 'data[0].LOI.billOfLanding', []).map((val, index) => {
                return (
                  <>
                    <li>
                      <div
                        className={`ml-3 d-flex justify-content-start align-items-center ${styles.salutationFeatures} `}
                      >
                        {val.blnumber} Dated {val.date}, ISSUED AT {_get(transitDetails, 'data[0].order.termsheet.transactionDetails.loadPort', '').toUpperCase()}
                      </div>
                    </li>
                  </>
                );
              })}
            </ol>
          </div>

          <div className={styles.body}>
            <p>
              The above cargo was shipped on the above ship by <span className={`${styles.bold} text-uppercase`}>{_get(transitDetails, 'data[0].order.generic.supplier.name')}, {_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].fullAddress')}, {_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].city')}{_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].city') == '' ? '' : ','} {_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].country')}, {_get(transitDetails, 'data[0].order.generic.supplier.addresses[0].pinCode')}</span> and consigned to <span className={styles.bold}>TO ORDER</span> for delivery at the port of <span className={styles.bold}>ANY PORT (S) IN INDIA </span> but the bill of lading has not arrived and we, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.name', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].state', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].country', ''))}, hereby request you to deliver the said cargo to {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.name', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].state', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].country', ''))} or to such party as you believe to be or to represent {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.name', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].state', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].country', ''))} or to be acting on behalf of {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.name', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].state', ''))}, {titleCase(_get(transitDetails, 'data[0].order.generic.buyer.addresses[0].country', ''))} at <span className={styles.bold}>{_get(transitDetails, 'data[0].order.termsheet.transactionDetails.portOfDischarge', '',).toUpperCase()}</span> without production of the original bill of lading.
            </p>
            <div className={`${styles.list}`}>
              <p>
                In consideration of your accepting our request and/or complying with, or taking any steps to comply with, or attempting to comply with our above request, we hereby agree as follows :
              </p>
              <ol>
                <li>
                  To indemnify you, your servants, agents and any third party affiliated or associated with Torvald Klaveness and to hold all of you harmless in respect of any liability, loss, damage or expense of whatsoever nature which you may sustain by reason of delivering the cargo in accordance with our request.
                </li>
                <li>
                  In the event of any proceedings being commenced against you or any other person or third party mentioned under No. 1 above in connection with the delivery of the cargo as aforesaid, to provide you or them on demand with sufficient funds to defend the same.
                </li>
                <li>
                  If, in connection with the delivery of the cargo as aforesaid, the ship, or any other ship or property in the same or affiliated/associated ownership, management or control, should be arrested or detained or should the arrest or detention thereof be threatened, or should there be any interference in the use or trading of the vessel (whether by virtue of a caveat being entered on the ship's registry or otherwise howsoever), to provide on demand such bail or other security as may be required to prevent such arrest or detention or to secure the release of such ship or property or to remove such interference and to indemnify you in respect of any liability, loss, damage or expense caused by such arrest or detention or threatened arrest or detention or such interference, whether or not such arrest or detention or threatened arrest or detention or such interference may be justified.
                </li>
                <li>
                  If the place at which we have asked you to make delivery is a bulk liquid or gas terminal or facility, or another ship, lighter or barge, then delivery to such terminal, facility, ship, lighter or barge shall be deemed to be delivery to the party to whom we have requested you to make such delivery.
                </li>
                <li>
                  As soon as all original bills of lading for the above cargo shall have come into our possession, to deliver the same to you, or otherwise to cause all original bills of lading to be delivered to you, whereupon our liability hereunder shall cease.
                </li>
                <li>
                  The liability of each and every person under this indemnity shall be joint and several and shall not be conditional upon your proceeding first against any person, whether or not such person is party to or liable under this indemnity.
                </li>
                <li>
                  This indemnity shall be governed by and construed in accordance with English law and each and every person liable under this indemnity shall at your request submit to the Jurisdiction of the High Court of Justice of England.
                </li>
              </ol>
            </div>
          </div>
          <div className={styles.footerSalutations}>
            <p>Yours faithfully</p>
            <p>For and on behalf of </p>
            <p className={styles.bold}>{_get(transitDetails, 'data[0].order.generic.buyer.name', '').toUpperCase()}</p>
            <p>The Requestor</p>
            <div className={`${styles.athorised} ml-n3`}>
              <p>Authorised Signatory</p>
              <p>
                Name: <span className={styles.bold}>{_get(transitDetails, 'data[0].LOI.authorizedSignatory.name', '')}</span>
              </p>
              <p>
                Designation: <span className={styles.bold}>
                  {_get(transitDetails, 'data[0].LOI.authorizedSignatory.designation', '')}
                </span>
              </p>
            </div>
          </div>
          <div className={`${styles.footer} mt-5`}>
            <p className="border_color">7A., 'SAGAR', 6 Tilak Marg, New Delhi-11OOO1 (INDIA)</p>
            <div className={`${styles.inner} d-flex justify-content-between`}>
              <div>
                <strong>Joint Venture of</strong>
                <br />
                Thyssehkrupp Mannex GMBH
                <br />
                Essen
                <br />
                Germany
              </div>
              <div>
                Phones : (91)-(11)-4315-8000, 237&2022, 2338-7413
                <br />
                Fax : (91) (11) 2378-2806
                <br />
                E-mail : indogerman@somanigroup.com
              </div>
              <div>
                <strong>Joint Venture of</strong>
                <br />
                Somani Group
                <br />
                New Delhi
                <br />
                lndia
              </div>
            </div>
          </div>
        </div>

        <SavePreviewBar
          download={exportPDF}
          rightBtn="Edit"
          isDownload={true}
          rightBtnClick={() => Router.push('/transit/id?loi')}
        />
      </div>
    </div>
  );
}

export default Index;
