import jsPDF from 'jspdf';
import { associateshipPrint, sellerPrint } from '../../../src/templates/agreementTemplate';
import _get from 'lodash/get';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import Contract from '../../../src/components/A2S_Sales_Contract';
import AssignmentLetter from '../../../src/components/AssignmentLetter';
import AssociateshipAgreement from '../../../src/components/AssociateshipAgreement';
import DownloadBar from '../../../src/components/DownloadBar';
import QPA from '../../../src/components/QPA';
import TPAIGI from '../../../src/components/TPAIGI';
import TPASeller from '../../../src/components/TPASeller';
import AssignmentLetterPreview from '../../../src/templates/AssignmentLetterPreview';
import IGIAgreementPreview from '../../../src/templates/TPAIGIPreview';
import QuadripartiteAgreementPreview from '../../../src/templates/QuadripartiteAgreementPreview';
import SalesContractPreview from '../../../src/templates/SalesContractPreview';
import AssociateshipAgreementPreview from '../../../src/templates/AssociateshipAgreementPreview';
import TPASellerPreview from '../../../src/templates/TPASellerPreview';

function index() {
  const [data, setData] = useState({
    seller: '',
    buyer: '',
    shortseller: '',
    shortbuyer: '',
    sellerAddress: '',
    buyerAddress: '',
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
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (window) {
      const data = JSON.parse(sessionStorage.getItem('genericSelected'));

      const data2 = sessionStorage.getItem('agreementPreview');
      setPreview(data2);
      let toCheck = 'Sales Agreement';
      if (data2 === 'QPA') {
        toCheck = 'QPA';
      }
      if (data2 == 'LETTER') {
        toCheck = 'Assignment Letter';
      }
      if (data2 == 'TPASELLER') {
        toCheck = 'TPA (Seller)';
      }
       if (data2 == 'TPAIGI') {
        toCheck = 'TPA (CMA)';
      }
      if (data2 == 'ASSO') {
        toCheck = 'Associateship Agreement';
      }
      if (data2 == 'UNDERTAKING1') {
        toCheck = 'Associateship Agreement';
      }
      if (data2 == 'UNDERTAKING2') {
        toCheck = 'Associateship Agreement';
      }

      let exe;
      let dat = '';
      let dateOfContract = '';
      data?.placeOfExecution?.execution?.forEach((val, index) => {
        if (val.agreementName == toCheck) {
          exe = val.place;
          if (val.dateOfExecution) {
            dat = moment(val.dateOfExecution).format('DD-MM-YYYY');
          }
        }
      });
      let comment = [];
      data?.additionalComments?.comments?.forEach((val, index) => {
        if (val.agreementName == toCheck) {
          comment.push(val.comment);
          console.log('asdsda',toCheck)
          if (toCheck == 'Assignment Letter') {
            
            dateOfContract = moment(val?.dateOfContract).format('DD-MM-YYYY');
          }
        }
      });
    
      setData({
        seller: data?.seller?.name,
        buyer: data?.buyer?.name,
        sellerAddress: _get(data, 'seller.addresses[0]', {}),
        buyerAddress: _get(data, 'buyer.addresses[0]', {}),
        shortseller: data?.seller?.shortName,
        shortbuyer: `${data?.buyer?.name == 'Indo German International Private Limited' ? 'IGPL' : 'EISL'}`,
        sellerSignature: data?.seller?.name,
        buyerSignature: data?.buyer?.name,
        dateOfExecution: dat,
        placeOfExecution: exe,
        details: data?.supplier?.name,
        detailsOfEndBuyer: data.company.companyName,
        detailsOfComm: data?.order?.commodity,
        quan: data?.order?.quantity,
        unitPrice: data.order?.perUnitPrice,
        totalOrderValue: data?.order?.marginMoney?.calculation?.orderValue ?? '',
        lordPort: data?.order?.termsheet?.transactionDetails?.loadPort,
        dischargePort: data?.order?.portOfDischarge,

        lastDate: data?.order?.shipmentDetail?.lastDateOfShipment,

        terms: `${data?.order?.termsheet?.transactionDetails?.partShipmentAllowed !== 'Yes' ? 'Full' : 'Partial'}`,
        addComm: comment,
        spec: data?.productSpecifications?.specificationTable,
        specComment: data?.productSpecifications.comments,
        unitOfGrade: data?.order?.unitOfGrade,
        unitOfQuantity: data?.order?.unitOfQuantity,
        unitOfValue: data?.order?.unitOfValue,
        curr: data?.order?.orderCurrency,
        supplierAddress: _get(data, 'supplier.addresses[0]', {}),
        supplierAuthorized: _get(data, 'supplier.authorisedSignatoryDetails', []),
        buyerAuthorized: _get(data, 'buyer.authorisedSignatoryDetails', []),
        buyerEmail: _get(data, 'associateBuyer.authorisedSignatoryDetails', []),
        supplierEmail: _get(data, 'supplier.authorisedSignatoryDetails', []),
        toleranceLevel: data?.order?.tolerance,
        incoTerms: data?.order?.termsheet?.transactionDetails?.incoTerms,
        financialBank: data?.financingBank?.name,
        financialAddress: `${data?.financingBank?.branch}, Netherlands`,
        associateBuyer: _get(data, 'company.companyName', ''),
        associateBuyerAddress: _get(data, 'company.detailedCompanyInfo.profile.companyDetail.registeredAddress', ''),
        associateBuyerGst: data?.associateBuyer?.gstin,
        associateBuyerPan: _get(data, 'company.detailedCompanyInfo.profile.companyDetail.pans[0]', ''),
        associateBuyerAuthorized: _get(data, 'associateBuyer.authorisedSignatoryDetails', []),
        stevedore: data?.stevedore?.name,
        stevedoreAddress: _get(data, 'stevedore.addresses[0]', {}),
        stevedoreAuthorized: _get(data, 'stevedore.authorisedSignatoryDetails', []),
        cma: data?.CMA?.name,
        cmaAddress: _get(data, 'CMA.addresses[0]', {}),

        cmaAuthorized: _get(data, 'CMA.authorisedSignatoryDetails', []),
        vessel: data?.shippingLine?.vesselName,
        storagePlot: data?.order?.termsheet?.transactionDetails?.portOfDischarge,
        loadingCargo: data?.deliveryTerms?.monthOfLoadingCargo || '',
        priceOfGoods: data?.order?.perUnitPrice,
        dateOfContract: dateOfContract,
        designatedStorageArea: data?.CMA?.designatedStorageArea,
        supplier: data?.supplier?.name,
        endBuyer: data.company.companyName,
        priceOfGoods: data?.order?.perUnitPrice,
        commodityDetails: data?.order?.commodity,
        unitPrice: data.order?.perUnitPrice,
        tradeMargin: data.order?.termsheet?.commercials?.tradeMarginPercentage,
        deliveryTerm: data.deliveryTerms.deliveryTerm,
        totalPrice: data?.order?.marginMoney?.calculation?.totalOrderValue,
        advanceMoney: data?.order?.marginMoney?.calculation?.marginMoney,
        orderValueCurrency: data?.order?.marginMoney?.calculation?.orderValueCurrency,
        paymentTerm: data.deliveryTerms.paymentTerms,
        cheque: data.deliveryTerms?.cheque || [],
        cmaShort: data?.CMA?.shortName,
      });
    }
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [800, 1200]);
    let toPrint = SalesContractPreview(data);
    let name = 'SalesAgreement';
    if (preview == 'Sales') {
      toPrint = SalesContractPreview(data);
      name = 'SalesAgreement.pdf';
    }
    if (preview == 'QPA') {
      toPrint = QuadripartiteAgreementPreview(data);
      name = 'QPA.pdf';
    }
    if (preview == 'ASSO') {
      toPrint = AssociateshipAgreementPreview(data);
      name = 'Associateship.pdf';
    }
    if (preview == 'UNDERTAKING1') {
      toPrint = undertaking1Pdf(data);
      name = 'Undertaking1.pdf';
    }
    if (preview == 'UNDERTAKING2') {
      toPrint = undertaking2Pdf(data);
      name = 'Undertaking2.pdf';
    }
    if (preview == 'TPASELLER') {
      toPrint = TPASellerPreview(data);
      name = 'TPA(Seller).pdf';
    }
    if (preview == 'TPAIGI') {
      toPrint = IGIAgreementPreview(data);
      name = 'TPA(CAM).pdf';
    }
    if (preview == 'LETTER') {
      toPrint = AssignmentLetterPreview(data);
      name = 'AssignmentLetter.pdf';
    }
    doc.html(ReactDOMServer.renderToString(toPrint), {
      callback: function (doc) {
        doc.save(name);
      },
      autoPaging: 'text',
    });
  };
  return (
    <>
      {preview == 'Sales' ? <Contract preview={true} /> : null}
      {preview == 'QPA' ? <QPA preview={true} /> : null}
      {preview == 'TPASELLER' ? <TPASeller preview={true} /> : null}
      {preview == 'TPAIGI' ? <TPAIGI preview={true} /> : null}
      {preview == 'LETTER' ? <AssignmentLetter preview={true} /> : null}
      {preview == 'ASSO' || preview == 'UNDERTAKING1' || preview == 'UNDERTAKING2' ? (
        <AssociateshipAgreement preview={true} type={preview} />
      ) : null}

      <DownloadBar downLoadButtonName={`Download`} handleReject={exportPDF} />
    </>
  );
}

export default index;

export const undertaking1Pdf = (data) => {
  return (
    <>
         
      <table width='800px' bgColor='#ffffff' cellPadding='0' style={{fontFamily:'Times New Roman, Times, serif', border:'1px solid #d9dde8', marginBottom:'20px', color:'#000000'}} cellSpacing='0' border='0'>
        <tr>
          <td valign='top' style={{padding:'20px'}}>
            <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
              <tr>
                <td align='center' style={{padding:'25px 0'}}>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}><strong>Undertaking for Post-dated Cheques issued by Associate Buyer</strong></p></td>
              </tr>
              <tr>
                <td align='left' valign="top" style={{padding:'15px 0'}}>
                  <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
                    <tr>
                      <td valign='top' align='left' width="10%">
                        <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>To:</p>
                      </td>
                      <td valign='top' align='left'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0', textTransform:'capitalize'}}>
                          <u>{data.buyer}</u>,<br/>
                          <u>{data.buyerAddress?.fullAddress}</u>,
                          <u>{data.buyerAddress?.city}</u>{" "}
                          <u>{data.buyerAddress?.country}</u>,{" "}
                          <u>{data.buyerAddress?.pinCode}</u></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align='center' style={{padding:'15px 0'}}>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}><strong><u>UNDERTAKING</u></strong></p></td>
              </tr>
              <tr>
                <td valign='top' align='justify'>
                  <ol type='1' style={{fontSize:'12px', lineHeight:'18px', color:'#000000', paddingLeft:'16px'}}>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That we, being the Associate Buyer have entered into the Associateship Agreement with Seller.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That as requested by us, the Supplier shall sell the Goods to <u>{data.shortseller}</u> and <u>{data.shortseller}</u> will establish Letter of Credit in favour of the Supplier and make payment to the Supplier for the Goods. <u>{data.shortseller}</u> shall sell the Goods to Seller and Seller shall sell the same to the Associate Buyer in terms of the said Associateship Agreement. The Sales Contract and the Associateship Agreement shall jointly be referred to as “Contracts”.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That the present Undertaking is being executed in pursuance of the Contracts being entered into by <u>{data.shortseller}</u> and Seller on our request. It is pertinent to mention that the terms of the Associateship Agreement be read as a part of this Undertaking.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>We enclose herewith the following post-dated Cheque(s) as per details in Schedule I. In pursuance of the above, we authorize Seller to present the post-dated cheques on due date and present the same with its Banker, without any notice to us.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That, the undersigned being the Authorised Signatory of the Associate Buyer, do hereby undertake as under:</p>
                      <ul type='disc' style={{fontSize:'12px', lineHeight:'18px', color:'#000000', paddingLeft:'10px'}}>
                        <li>
                          <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>To pay the balance/outstanding amount in respect of the above-mentioned transaction on the first demand of Seller without recourse, demur and protest.</p>
                        </li>
                        <li>
                          <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>To honour the cheque(s) on their presentation on due dates.</p>
                        </li>
                        <li>
                          <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>That we will not intimate the bankers to stop the payment of the aforesaid cheques delivered to Seller under any circumstances.</p>
                        </li>
                        <li>
                          <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>That, we have duly complied with the Positive Payment Service as per RBI circular dated 25th September 2020 by intimating our bank about the details of the post-dated cheques issued to Seller.</p>
                        </li>
                        <li>
                          <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>That, we shall not close the account from which the cheques have been issued without the prior permission of Seller in writing.</p>
                        </li>
                        <li>
                          <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>That, we, shall not give Seller any notice requesting them not to present the cheques delivered to them.</p>
                        </li>
                        <li>
                          <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That, we, further undertake not to bring into effect any change in the Authorized Signatories without taking prior written consent of Seller or to do anything which makes the above cheques/claim of Seller redundant.</p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>We further confirm that we are very much aware of the liability that has accrued on us by way of the Associateship Agreement by virtue of which Seller has agreed to import the Goods.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>We further confirm that if we fail to pay the due and outstanding amounts due to Seller, in respect of aforesaid Agreement, Seller will have unfettered/unconditional right to encash the said cheque(s), without any notice to us.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>The calculation of the Post-dated Cheques is based on the contract value, any additional amounts, if payable by us will be paid upfront. Further, Actual Stevedoring/CHA, Port Charges, Plot Rental, Wharfage etc. to be borne and paid by us directly.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>In any event of our failure to perform the Associateship Agreement in accordance with its terms including default in honoring the cheques on presentation, Seller shall have the right to file appropriate civil and/or criminal proceedings against us in the Courts of the Jurisdiction as per your sole discretion. We unconditionally and irrevocably waive our right to raise objection to such proceedings on any grounds whatsoever.</p>
                    </li>
                  </ol>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </td>
              </tr>              
              <tr>
                <td style={{paddingTop:'20px'}}>
                  <h3 align="center" style={{ fontSize: '15px', fontWeight: 'bold', color:'#000000', marginBottom:'30px'}}>Schedule I</h3>
                  <p style={{ fontSize: '12px', lineHeight:'18px', color:'#000000', marginBottom:'30px'}}>Details of post-dated Cheque(s)-</p>
                  <table
                    width="100%"
                    cellPadding="7"
                    style={{ border: '1px solid #000000'}}
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td
                        width="10%"
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}><strong>S No</strong></p>
                      </td>
                      <td
                        width="40%"
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          <strong>Bank Name</strong>
                        </p>
                      </td>
                      <td
                        width="20%"
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          <strong>Cheque No</strong>
                        </p>
                      </td>
                      <td
                        width="10%"
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          <strong>Cheque Date</strong>
                        </p>
                      </td>
                      <td
                        width="20%"
                        style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}
                      >
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                          <strong>Amount</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>value</p>
                      </td>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>value</p>
                      </td>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>value</p>
                      </td>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>value</p>
                      </td>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>value</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td valign='top'>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align='left'></td>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', paddingTop:'30px'}}>FOR AND ON BEHALF OF</p></td>
                    </tr>
                    <tr>
                      <td valign='top' align='left' width='50%'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0'}}>Place: </p>
                      </td>
                      <td valign='top' align='left' width='50%'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0'}}><strong>(Associate Buyer)</strong>
                          <br /><br />Name -
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}>Date : {data.dateOfExecution}</p></td>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}>AUTHORISED SIGNATORY</p></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};

export const undertaking2Pdf = (data) => {
  return (
    <>
         <table width='800px' bgColor='#ffffff' cellPadding='0' style={{fontFamily:'Times New Roman, Times, serif', border:'1px solid #d9dde8', marginBottom:'20px', color:'#000000'}} cellSpacing='0' border='0'>
        <tr>
          <td valign='top' style={{padding:'20px'}}>
            <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
              <tr>
                <td align='center' style={{padding:'25px 0'}}>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}><strong>Undertaking by Associate Buyer for Price, Quality & Quantity</strong></p></td>
              </tr>
              <tr>
                <td align='left' valign="top" style={{padding:'15px 0'}}>
                  <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
                    <tr>
                      <td valign='top' align='left' width="10%">
                        <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>To:</p>
                      </td>
                      <td valign='top' align='left'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>
                          <u>{data.buyer}</u>,<br/>
                          <u>{data.buyerAddress?.fullAddress}</u>,
                          <u>{data.buyerAddress?.city}</u>{" "}
                          <u>{data.buyerAddress?.country}</u>,{" "}
                          <u>{data.buyerAddress?.pinCode}</u></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align='center' style={{padding:'15px 0'}}>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}><strong><u>UNDERTAKING</u></strong></p></td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>We, being the Associate Buyer, do solemnly affirm and undertake as under:</p></td>
              </tr>
              <tr>
                <td valign='top' align='justify'>
                  <ol type='1' style={{fontSize:'12px', lineHeight:'18px', color:'#000000', paddingLeft:'16px'}}>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That we have negotiated with the Supplier for supply of the Goods through Seller.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That we have requested Seller to import on our behalf the Goods and sell the same to us on stock and sale basis as per Associateship Agreement. We confirm and undertake that all the terms & conditions of the Sales Contract entered into between <u>{data.shortseller}</u> and the Supplier (hereinafter referred to as “Sales Contract”) are acceptable and binding on us.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That the price indicated in the Sales Contract is neither under-invoiced nor over-invoiced and is as per prevailing international rates for the above-mentioned item and is at par with prices at which item of similar quality being imported into India.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>We undertake to ensure that the item to be shipped by the Supplier shall be strictly as per description & quality indicated in the Sales Contract notwithstanding the inspection report/ quality certificate/ Survey report furnished by the Supplier for the subject consignment. We shall be held solely liable and responsible for all consequences arising out of variation between item/quality/quantity contracted for & actually shipped and we undertake to indemnify and hold harmless Seller in this regard at all times.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>We undertake to accept the goods from Seller on 'no complaint basis' with regard to quality, quantity and/or any other claims including shortage. Seller shall in no way be responsible or liable for the quality, quantity or any other claim pertaining to the Goods being supplied by the Supplier and/or any other claim relating to this transaction. It is our sole responsibility in settling the quality, quantity or other claims pertaining to this transaction directly with the Supplier and/or Custom House Agent (CHA), with no liability whatsoever upon Seller.</p>
                    </li>
                  </ol>
                </td>
              </tr>              
              <tr>
                <td valign='top'>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align='left'></td>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', paddingTop:'30px'}}><strong>FOR AND ON BEHALF OF</strong></p></td>
                    </tr>
                    <tr>
                      <td align='left'></td>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', paddingBottom:'20px'}}><strong>(Associate Buyer)</strong></p></td>
                    </tr>
                    <tr>
                      <td valign='top' align='left' width='50%'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0'}}><strong><u>Place:</u> </strong></p>
                      </td>
                      <td valign='top' align='left' width='50%'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0'}}><strong><u>Name -</u> </strong></p>
                      </td>
                    </tr>
                    <tr>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}><strong><u>Date :</u> <u>{data.dateOfExecution}</u></strong></p></td>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}><strong><u>Designation:</u></strong></p></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> 
    </>
  );
};
