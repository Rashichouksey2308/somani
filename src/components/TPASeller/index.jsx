import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Row, Col } from 'react-bootstrap';
import GrowInput from '../GrowInput';
import _get from 'lodash/get';
import moment from 'moment';
function Index(props) {
  const [data, setData] = useState({
    seller: '',
    buyer: '',
    sellerAddress: '',
    buyerAddress: '',
    shortseller: '',
    shortbuyer: '',
    sellerSignature: '',
    buyerSignature: '',
    dateOfExecution: '',
    placeOfExecution: '',
    details: '',
    detailsOfEndBuyer: '',
    detailsOfComm: '',
    quan: '',
    unitPrice: '',
    totalOrderValue: '',
    lordPort: '',
    dischargePort: '',
    lastDate: '',
    terms: '',
    addComm: '',
    spec: '',
    unitOfGrade: '',
    unitOfQuantity: '',
    unitOfValue: '',
    curr: '',
    specComment: '',
  });
  const getAddress = (buyer) => {
    if (buyer.name == 'Indo German International Private Limited') {
      if (buyer.branch == 'Delhi') {
        return '7A , SAGAR APARTMENTS,6 TILAK MARG,DELHI,NEW DELHI,110001';
      } else {
        return 'Ground Floor, Plot No-49-18-6/1 Lalitha Nagar, Sakshi Office Road,Akkayyapalem,Visakhapatnam,Andhra Pradesh,530016';
      }
    }
    if (buyer.name == 'Emergent Industrial Solution Limited') {
      if (buyer.branch == 'Delhi') {
        return '8B, SAGAR, 6 TILAK MARG,DELHI,NEW DELHI,110001';
      } else {
        return '49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM,,Akkayyapalem,Visakhapatnam,Andhra Pradesh,530016';
      }
    }
  };
  useEffect(() => {
    if (window) {
      if (props.preview) {
        const data = JSON.parse(sessionStorage.getItem('preview'));

        setData({
          seller: data?.seller,
          buyer: data?.buyer?.toLowerCase(),
          sellerAddress: data.sellerAddress,
          buyerAddress: data.buyerAddress,
          shortseller: data?.shortseller,
          shortbuyer: `${
            data?.buyer == 'Indo German International Private Limited'
              ? 'IGPL'
              : 'EISL'
          }`,
          sellerSignature: data?.sellerSignature,
          buyerSignature: data?.buyerSignature,
          dateOfExecution: data?.dateOfExecution,
          placeOfExecution: data?.placeOfExecution,
          details: data?.details,
          detailsOfEndBuyer: data?.detailsOfEndBuyer,
          detailsOfComm: data?.detailsOfComm,
          quan: data?.quan,
          unitPrice: data?.unitPrice,
          totalOrderValue: data?.totalOrderValue,
          lordPort: data?.lordPort,
          dischargePort: data?.dischargePort,
          lastDate: data?.lastDate,
          terms: data?.terms,
          addComm: data?.addComm,
          // addComm: [],
          spec: data?.spec,
          unitOfGrade: data?.unitOfGrade,
          unitOfQuantity: data?.unitOfQuantity,
          unitOfValue: data?.unitOfValue,
          curr: data?.orderCurrency,
          specComment: data?.specComment,
        });
      } else {
        const data = JSON.parse(sessionStorage.getItem('genericSelected'));

        let exe;
        let dat = '';
        data?.placeOfExecution?.execution?.forEach((val, index) => {
          if (val.agreementName == 'TPA (Seller)') {
            exe = val.place;
            if (val.dateOfExecution) {
              dat = moment(val.dateOfExecution).format('DD-MM-YYYY');
            }
          }
        });
        let comment = [];
        data?.additionalComments?.comments?.forEach((val, index) => {
          if (val.agreementName == 'TPA (Seller)') {
            comment.push(val.comment);
          }
        });
      

        setData({
          seller: data?.seller?.name,
          buyer: data?.buyer?.name,
          sellerAddress:
            data?.seller?.name == 'Indo Intertrade Ag'
              ? 'Industriestrasse 16, Zug,6300'
              : '',
          buyerAddress: data?.buyer?.name ? getAddress(data?.buyer) : '',
          shortseller: data?.seller?.shortName,
          shortbuyer: `${
            data?.buyer?.name == 'Indo German International Private Limited'
              ? 'IGPL'
              : 'EISL'
          }`,
          sellerSignature: data?.seller?.name,
          buyerSignature: data?.buyer?.name,
          dateOfExecution: dat,
          placeOfExecution: exe,
          details: data?.supplier?.name,
          detailsOfEndBuyer: '',
          detailsOfComm: data?.order?.commodity,
          quan: data?.order?.quantity,
          unitPrice: data.order?.perUnitPrice,
          totalOrderValue:
            data?.order?.marginMoney?.calculation?.orderValue ?? '',
          lordPort: data?.order?.termsheet?.transactionDetails?.loadPort,
          dischargePort: data?.order?.portOfDischarge,
          lastDate: data?.order?.shipmentDetail?.lastDateOfShipment,
          terms: `${
            data?.order?.termsheet?.transactionDetails?.partShipmentAllowed ==
            'Yes'
              ? 'Full'
              : 'Partial'
          }`,
          addComm: comment,
          spec: data?.productSpecifications?.specificationTable,
          specComment: data?.productSpecifications.comments,
          unitOfGrade: data?.order?.unitOfGrade,
          unitOfQuantity: data?.order?.unitOfQuantity,
          unitOfValue: data?.order?.unitOfValue,
          curr: data?.order?.orderCurrency,
          supplier: data?.supplier?.name,
          supplierAddress: _get(data, 'supplier.address[0]', ''),
          supplierAuthorized: _get(
            data,
            'supplier.authorisedSignatoryDetails',
            [],
          ),
          buyerAuthorized: _get(data, 'buyer.authorisedSignatoryDetails', []),
          associateBuyerAuthorized: _get(
            data,
            'associateBuyer.authorisedSignatoryDetails',
            [],
          ),
          buyerEmail: '',
          supplierEmail: '',
          financialBank: '',
          financialAddress: '',
          endBuyer: data.company.companyName,
        });
      }
    }
  }, [props]);
  return (
    <>
      {/* TPA (Seller) pdf download code start */}
      {/* <table width='800px' bgColor='#ffffff' cellPadding='0' style={{fontFamily:'Times New Roman, Times, serif', border:'1px solid #d9dde8', marginBottom:'20px', color:'#000000'}} cellSpacing='0' border='0'>
        <tr>
          <td valign='top' style={{padding:'20px'}}>
            <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
              <tr>
                <td align='center' style={{padding:'15px 0'}}>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}><strong>TRIPARTITE AGREEMENT</strong></p></td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>This Tripartite Agreement (“<strong>Agreement</strong>”) is made at the place and on the day as set out in <strong>Schedule I</strong> hereto by and between:</p></td>
              </tr>
              <tr>
                <td valign='top' align='justify'><p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}><strong>{data.seller}</strong>, a company organized and existing in accordance with Law of Switzerland and having address at <strong>{data.sellerAddress}</strong> through its Authorized Signatory (hereinafter referred to as the &quot;<strong>Buyer</strong>&quot;, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the First Part.</p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>And</p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    <strong>Supplier</strong>(s), as detailed in
                    <strong>Schedule-I</strong> hereof (hereinafter referred to as the “
                    <strong>Supplier</strong>”, which expression shall, unless excluded by
                    or repugnant to the context be deemed to include its legal heirs,
                    successors and permitted assigns) of the Second Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>And</p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    <strong>End Buyer</strong>(s), as detailed in
                    <strong>Schedule-I</strong> hereof (hereinafter referred to as the “
                    <strong>End Buyer</strong>”, which expression shall, unless excluded
                    by or repugnant to the context be deemed to include its legal heirs,
                    successors and permitted assigns) of the Third Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    The Buyer, Supplier and the End Buyer shall hereinafter, for the sake
                    of brevity and convenience, be referred to individually as
                    &quot;Party&quot; and collectively as the &quot;Parties&quot;.
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    <strong>WHEREAS,</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <ol type="A" style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        Supplier has entered into a Sales Contract with Buyer for Sale
                        &amp; Purchase of Goods as details in Schedule -1
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        Buyer has entered into the Sales Contract with Supplier solely at
                        the request of End Buyer and to facilitate the End Buyer.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        In view of the aforesaid, parties have entered into this binding
                        Agreement.
                      </p>
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    <strong>NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <ol type="1" style={{fontSize:'12px', lineHeight:'18px', color:'#000000', paddingLeft:'16px'}}>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        That it is expressly clarify and agreed to amongst the parties
                        that the Buyer has entered into the Sales Contract solely at the
                        request and to facilitate the End Buyer.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        All terms of the Sales Contract have already been discussed and
                        agreed between the Supplier and End Buyer.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        The role of Buyer is limited to establishment of Letter of Credit
                        (“LC”) in favor of Supplier subject to the End Buyer fulfilling
                        its contractual obligations towards the Buyer.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        The End Buyer and Supplier therefore, are fully liable and
                        responsible at all times for performance of the Sales Contract
                        including but not limited to making financial arrangements, timely
                        nomination/acceptance of vessel, settlement of any and all
                        quality/quantity claims, delayed/no shipment issues, demurrage /
                        dispatch amounts, and/or any other claims or liability arising due
                        to execution of the sales contract. All such claims, liabilities
                        etc., shall be addressed, discussed and settled directly between
                        the Supplier and End Buyer with no reference and liability on the
                        part of Buyer whatsoever.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        Supplier will not hold discharge and/or delivery of cargo to the
                        Buyer/Buyer's nominees for any reason whatsoever once LC is issued
                        by the Buyer.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        In case of any conflict between the Sales Contract and this
                        Agreement, the terms of this Agreement will prevail.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        In case of any conflict between the Sales Contract and this
                        Agreement, the terms of this Agreement will prevail.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        In any case, End Buyer shall remain responsible for the
                        performance of the Sales Contract, including any failure or delay
                        in the issuance of the LC in accordance with the terms of the
                        Sales Contract.
                      </p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                        This Agreement is subject to English laws, and any disputes
                        arising out of this Agreement shall be referred to arbitration as
                        per rules of Singapore International Arbitration Center (SIAC) by
                        a sole arbitrator. The seat and venue of arbitration shall be
                        Singapore and the language of Arbitration Proceedings shall be in
                        English.
                      </p>
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td style={{paddingTop:'20px'}}>
                  <h3 align="center" style={{ fontSize: '15px', fontWeight: 'bold', color:'#000000', marginBottom:'20px'}}>Schedule I</h3>
                  <table
                    width="100%"
                    cellPadding="10"
                    style={{ border: '1px solid #000000' }}
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        width="30%"
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Date of execution</p>
                      </td>
                      <td
                        width="70%"
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          value
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          Place of execution
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>value</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          Name of Supplier
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>value</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          Address of Supplier
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Value</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          Authorized signatory of Supplier
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Value</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Email ID of Supplier</p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Value</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          Name of End buyer
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Value</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          Authorized signatory of End Buyer
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Value</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Email ID of End Buyer</p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Value</p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          Details of Goods as per Sales Contract
                        </p>
                      </td>
                      <td
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>value</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td valign='top' style={{paddingTop:'30px'}}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align='center' width='50%'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}>Buyer</p></td>
                      <td align='center' width='50%'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}>Authorised Signatory</p></td>
                    </tr>
                    <tr>
                      <td align='center'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}>Supplier</p></td>
                      <td align='center'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}>Authorised Signatory</p></td>
                    </tr>
                    <tr>
                      <td align='center'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}>End Buyer</p></td>
                      <td align='center'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}>Authorised Signatory</p></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> */}
      {/* TPA (Seller) pdf download code end */}

      <div className={`${styles.root}`}>
        <div className={`${styles.content} card border_color shadow-none`}>
          {tripartiteAgreement(data)}
          <div
            className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3`}
            data-toggle="collapse"
            data-target="#cashFlowStatement"
            aria-expanded="true"
            aria-controls="cashFlowStatement"
          >
            <div className={`${styles.approve} mr-3`}>
              <span>Preview</span>
            </div>
            <div className={styles.reject}>
              <span>Save</span>
            </div>
            <div className={styles.approve}>
              <span>Submit</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
const tripartiteAgreement = (data) => {
  return (
    <>
      <div className="card-body">
        <p className="text-center text_sales">
          {' '}
          <strong>
            <u>TRIPARTITE AGREEMENT</u>
          </strong>
        </p>
        <p className="text_sales">
          This Tripartite Agreement (“<strong>Agreement</strong>”) is made at
          the place and on the day as set out in <strong>Schedule I</strong>{' '}
          hereto by and between:
        </p>
        <p className="text_sales">
          <b>{data.seller}</b>, a company organized and existing in accordance
          with Law of Switzerland and having address at{' '}
          <b>{data.sellerAddress}</b> through its Authorized Signatory
          (hereinafter referred to as the &quot;<strong>Buyer</strong>&quot;,
          which expression shall, unless excluded by or repugnant to the context
          be deemed to include its legal heirs, successors and permitted
          assigns) of the First Part.
        </p>
        <p className="text_sales">And</p>
        <p className="text_sales">
          <strong>Supplier</strong>(s), as detailed in{' '}
          <strong>Schedule-I</strong> hereof (hereinafter referred to as the “
          <strong>Supplier</strong>”, which expression shall, unless excluded by
          or repugnant to the context be deemed to include its legal heirs,
          successors and permitted assigns) of the Second Part.
        </p>
        <p className=" text_sales">And</p>
        <p className="text_sales">
          <strong>End Buyer</strong>(s), as detailed in{' '}
          <strong>Schedule-I</strong> hereof (hereinafter referred to as the “
          <strong>End Buyer</strong>”, which expression shall, unless excluded
          by or repugnant to the context be deemed to include its legal heirs,
          successors and permitted assigns) of the Third Part.
        </p>
        <p className="text_sales">
          The Buyer, Supplier and the End Buyer shall hereinafter, for the sake
          of brevity and convenience, be referred to individually as
          &quot;Party&quot; and collectively as the &quot;Parties&quot;.
        </p>
        <p className="text_sales">
          <strong>WHEREAS,</strong>
        </p>
        <ol type="A" className="pl-4">
          <li>
            <p className="text_sales mb-0">
              Supplier has entered into a Sales Contract with Buyer for Sale
              &amp; Purchase of Goods as details in Schedule -1
            </p>
          </li>
          <li>
            <p className="text_sales mb-0">
              Buyer has entered into the Sales Contract with Supplier solely at
              the request of End Buyer and to facilitate the End Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales mb-0">
              In view of the aforesaid, parties have entered into this binding
              Agreement.
            </p>
          </li>
        </ol>
        <p className="text_sales">
          {' '}
          <strong>NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER</strong>
        </p>
        <ol type="1" className="pl-4">
          <li>
            <p className="text_sales">
              That it is expressly clarify and agreed to amongst the parties
              that the Buyer has entered into the Sales Contract solely at the
              request and to facilitate the End Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              All terms of the Sales Contract have already been discussed and
              agreed between the Supplier and End Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              The role of Buyer is limited to establishment of Letter of Credit
              (“LC”) in favor of Supplier subject to the End Buyer fulfilling
              its contractual obligations towards the Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              The End Buyer and Supplier therefore, are fully liable and
              responsible at all times for performance of the Sales Contract
              including but not limited to making financial arrangements, timely
              nomination/acceptance of vessel, settlement of any and all
              quality/quantity claims, delayed/no shipment issues, demurrage /
              dispatch amounts, and/or any other claims or liability arising due
              to execution of the sales contract. All such claims, liabilities
              etc., shall be addressed, discussed and settled directly between
              the Supplier and End Buyer with no reference and liability on the
              part of Buyer whatsoever.
            </p>
          </li>
          <li>
            <p className="text_sales">
              Supplier will not hold discharge and/or delivery of cargo to the
              Buyer/Buyer's nominees for any reason whatsoever once LC is issued
              by the Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              In case of any conflict between the Sales Contract and this
              Agreement, the terms of this Agreement will prevail.
            </p>
          </li>
          <li>
            <p className="text_sales">
              In case of any conflict between the Sales Contract and this
              Agreement, the terms of this Agreement will prevail.
            </p>
          </li>
          <li>
            <p className="text_sales">
              In any case, End Buyer shall remain responsible for the
              performance of the Sales Contract, including any failure or delay
              in the issuance of the LC in accordance with the terms of the
              Sales Contract.
            </p>
          </li>
          <li>
            <p className="text_sales">
              This Agreement is subject to English laws, and any disputes
              arising out of this Agreement shall be referred to arbitration as
              per rules of Singapore International Arbitration Center (SIAC) by
              a sole arbitrator. The seat and venue of arbitration shall be
              Singapore and the language of Arbitration Proceedings shall be in
              English.
            </p>
          </li>
        </ol>
        <p className="text-center text_sales">
          {' '}
          <strong>Schedule I</strong>
        </p>
        <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data.dateOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data.placeOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data?.supplier}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data?.supplierAddress}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized signatory of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <ol>
                {data?.supplierAuthorized?.length > 0 &&
                  data?.supplierAuthorized?.map((val, index) => {
                    return (
                      <li>
                        <div>
                          Name- <span>{val.name}</span>
                        </div>
                        <div>
                          Designation- <span>{val.designation}</span>
                        </div>
                      </li>
                    );
                  })}
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Email ID of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data?.supplierEmailId}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of End buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.endBuyer}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized signatory of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <ol>
                {data?.associateBuyerAuthorized?.length > 0 &&
                  data?.associateBuyerAuthorized?.map((val, index) => {
                    return (
                      <li>
                        <div>
                          Name- <span>{val.name}</span>
                        </div>
                        <div>
                          Designation- <span>{val.designation}</span>
                        </div>
                      </li>
                    );
                  })}
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Email ID of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.buyerEmail}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Details of Goods as per Sales Contract
            </Col>
            <Col md={7} className={styles.right}>
              <>
                <div className={styles.tableWrapper}>
                  <div className={styles.table_scroll_outer}>
                    <div className={styles.table_scroll_inner}>
                      <table>
                        <tr>
                          {data?.spec &&
                            data?.spec.length > 0 &&
                            Object.keys(data?.spec[0]).map((val, index) => (
                              <th key={index}>{val}</th>
                            ))}
                        </tr>
                        {data?.spec &&
                          data?.spec.length > 0 &&
                          data?.spec.map((item, index) => (
                            <tr>
                              {Object.values(item).map((value, id) => (
                                <td key={id}>{value}</td>
                              ))}
                            </tr>
                          ))}
                      </table>
                    </div>
                  </div>
                </div>
                {data.specComment.length > 0 ? <b>Comments</b> : null}
                <ol>
                  {data.specComment.length > 0 &&
                    data.specComment.map((val, index) => {
                      return <li>{val}</li>;
                    })}
                </ol>
              </>
            </Col>
          </Row>
        </div>

        <div className={`row`}>
          <Col md={12} className={`d-flex justify-content-around`}>
            <p className="text_sales  m-0">
              <strong>Buyer</strong>
            </p>
            <p className="text_sales">Authorised Signatory</p>
          </Col>
          <Col md={12} className={`d-flex justify-content-around`}>
            <p className="text_sales m-0">
              <strong>Supplier </strong>
            </p>
            <p className="text_sales">Authorised Signatory</p>
          </Col>
          <Col md={12} className={`d-flex justify-content-around`}>
            <p className="text_sales  m-0">
              <strong>End Buyer </strong>
            </p>
            <p className="text_sales">Authorised Signatory</p>
          </Col>
        </div>
      </div>
    </>
  );
};
const tpaSeller = () => {
  return (
    <div className={`${styles.cardBody} card-body pt-3`}>
      <h3 className={`${styles.heading} text-center`}>
        <span>TRIPARTITE AGREEMENT</span>
      </h3>
      <p className="text-center">
        This tripartite Agreement made on this 21st day of August, 2021 by and
        among below parties:-
      </p>
      <p>
        <GrowInput type="text" placeholder="MULIA GREEN RESOURCES PTE LTD" />,
        having its registered office at{' '}
        <GrowInput
          type="text"
          placeholder="220 Orchard Road # 05-01, MidPoint Orchard, Singapore 238852"
        />{' '}
        through its authorized signatory included its successors, administrators
        etc. (hereinafter referred to as the &quot; SELLER &quot;); which
        expression shall, unless excluded by or repugnant to the context be
        deemed to include its legal heirs, successors and permitted assigns.
      </p>
      <p>And</p>
      <p>
        <GrowInput type="text" placeholder="INDO INTERNATIONAL TRADING FZCO" />,
        a company organized and existing in accordance with Law of UAE and
        having registered address at{' '}
        <GrowInput
          type="text"
          placeholder="JAFZA VIEW-18, LOB-180504, JEBEL ALI, DUBAI, UAE"
        />{' '}
        through its authorized signatory which included its successors,
        administrator setc. (hereinafter referred to as the &quot;BUYER &quot;),
        which expression shall, unless excluded by or repugnant to the context
        be deemed to include its legal heirs, successors and permitted assigns.
      </p>
      <p>And</p>
      <p>
        <GrowInput type="text" placeholder="MOHIT MINERALS LIMITED" />, having
        its registered office address at{' '}
        <GrowInput
          type="text"
          placeholder="7/23, Kirti Nagar Industrial Area, New Delhi 110015, India"
        />{' '}
        through its authorized signatory which included its successors,
        administrators etc (Hereinafter referred to as &quot;ULTIMATE BUYER
        &quot;=, which expression shall, unless excluded by or repugnant to the
        context be deemed to include its legal heirs, successors and permitted
        assigns).
      </p>
      <p>
        <GrowInput
          type="text"
          placeholder="MULIA GREEN RESOURCES PTE LTD. (Seller), INDO INTERNATIONAL TRADING FZCO (Buyer) and MOHIT MINERALS LIMITED"
        />{' '}
        (Ultimate Buyer) shall hereinafter, for the sake of brevity and
        convenience, be referred to individually as &quot;Party &quot; and
        collectively as the &quot;Parties &quot;.
      </p>
      <p>WHEREAS:-</p>
      <ol className={styles.alpha}>
        <li>
          SELLER has entered into a Contract with BUYER for Sale &amp; Purchase{' '}
          <GrowInput
            type="text"
            placeholder="of STEAM (NON COKING) COAL IN BULK OF INDONESIAN ORIGIN"
          />{' '}
          (Goods) vide Sales Contract No. ………………… dated ………………… (“Sales
          Contract”)
        </li>
        <li>
          SELLER and BUYER have agreed on various terms &amp; Conditions of
          Sales Contract.
          <br />
          NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER: -
          <ol>
            <li>
              THAT IT IS EXPRESSLY CLARIFY AND AGREED TO AMONGST THE PARTIES
              THAT THE BUYER HAS ENTERED INTO THE CONTRACT SOLELY AT THE REQUEST
              AND TO FACILITATE THE ULTIMATE BUYER.
            </li>
            <li>
              ALL TERMS OF THE CONTRACT HAVE ALREADY BEEN DISCUSSED AND AGREED
              BETWEEN THE SELLER AND ULTIMATE BUYER.
            </li>
            <li>
              THE ROLE OF BUYER IS LIMITED TO ESTABLISHMENT OF LETTER OF CREDIT
              IN FAVOR OF SELLER SUBJECT TO ULTIMATE BUYER FULFILLING ITS
              CONTRACTUAL OBLIGATIONS TOWARDS THE BUYER.
            </li>
            <li>
              THE ULTIMATE BUYER AND SELLER THEREFORE, ARE FULLY LIABLE AND
              RESPONSIBLE AT ALL TIMES FOR PERFORMANCE OF THE CONTRACT INCLUDING
              BUT NOT LIMITED TO MAKING FINANCIAL ARRANGEMENTS, TIMELY
              NOMINATION/ACCEPTANCE OF VESSEL, SETTLEMENT OF ANY AND ALL
              QUALITY/QUANTITY CLAIMS, DELAYED/NO SHIPMENT ISSUES, DEMURRAGE /
              DESPATCH AMOUNTS, AND/OR ANY OTHER CLAIMS OR LIABILITY ARISING DUE
              TO EXECUTION OF THE SALES CONTRACT. ALL SUCH CLAIMS, LIABILITIES
              ETC., SHALL BE ADDRESSED, DISCUSSED AND SETTLED DIRECTLY BETWEEN
              THE SELLER AND ULTIMATE BUYER WITH NO REFERENCE AND LIABILITY ON
              THE PART OF BUYER WHATSOEVER.
            </li>
            <li>
              SELLER WILL NOT HOLD DISCHARGE AND/OR DELIVERY OF CARGO TO THE
              BUYER/BUYER'S NOMINEES FOR ANY REASON WHATSOEVER ONCE LETTER OF
              CREDIT IS ISSUED BY THE BUYER.
            </li>
            <li>
              IN CASE OF ANY CONFLICT BETWEEN THE SALES CONTRACT AND THIS
              AGREEMENT, THE TERMS OF THIS AGREEMENT WILL PREVAIL.
            </li>
            <li>
              IN ANY CASE, ULTIMATE BUYER SHALL REMAIN RESPONSIBLE FOR THE
              PERFORMANCE OF THE SALES CONTRACT, INCLUDING ANY FAILURE OR DELAY
              IN THE ISSUANCE OF THE LC IN ACCORDANCE WITH THE TERMS OF THE
              SALES CONTRACT.
            </li>
            <li>
              FURTHER, ULTIMATE BUYER SHALL BE FULLY RESPONSIBLE FOR PAYMENT OF
              THE PRICE IN THE EVENT THAT SELLER IS UNABLE TO OBTAIN PAYMENT
              UNDER THE LC. ULTIMATE BUYER SHALL FULLY INDEMNIFY SELLER AND
              BUYER FOR ANY LOSS, DAMAGE OR EXPENSE ARISING DUE TO EXECUTION OF
              THE SALES CONTRACT.
            </li>
            <li>
              THIS AGREEMENT IS SUBJECT TO ENGLISH LAWS, AND DISPUTES TO BE
              REFERRED AS PER RULES OF SINGAPORE INTERNATIONAL ARBITRATION
              CENTER (SIAC).
            </li>
          </ol>
        </li>
      </ol>
      <div className="d-flex justify-content-between align-items-center">
        <GrowInput
          type="text"
          placeholder="For MULIA GREEN RESOURCES PTE LTD. (SELLER)"
        />
        <p>Authorised Signatory</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <GrowInput
          type="text"
          placeholder="For INDO INTERNATIONAL TRADING FZCO. (BUYER)"
        />
        <p>Authorised Signatory</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <GrowInput
          type="text"
          placeholder="For MOHIT MINERALS LIMITED. (ULTIMATE BUYER)"
        />
        <p>Authorised Signatory</p>
      </div>
    </div>
  );
};
