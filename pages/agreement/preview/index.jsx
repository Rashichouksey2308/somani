import jsPDF from 'jspdf';
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
import AssociateshipAgreementPreview from '../../../src/templates/AssociateshipAgreementPreview';
import TPAIGIPreview from '../../../src/templates/TPAIGIPreview';
import QuadripartiteAgreementPreview from '../../../src/templates/QuadripartiteAgreementPreview';
import SalesContractPreview from '../../../src/templates/SalesContractPreview';
import TPASellerPreview from '../../../src/templates/TPASellerPreview';
import { returnReadableNumber } from '@/utils/helpers/global';
import { useDispatch } from 'react-redux';
import { setDynamicName, setDynamicOrder, setPageName } from '../../../src/redux/userData/action';
import constants from '@/utils/constants'

const Index = () => {
  const dispatch = useDispatch();
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
  if(window){
      const term =  JSON.parse(sessionStorage.getItem('genericSelected'));
       dispatch(setPageName('agreement'));
        dispatch(setDynamicName(term.company.companyName));
        dispatch(setDynamicOrder(term.order.orderId));
        }
  },[]);
  
  useEffect(() => {
    if (window) {
      const data1 = JSON.parse(sessionStorage.getItem('genericSelected'));
      const associateshipAgreement = 'Associateship Agreement'
     

      const data2 = sessionStorage.getItem('agreementPreview');
      setPreview(data2);
      let toCheck = 'Sales Agreement';
      if (data2 === 'QPA') {
        toCheck = 'QPA';
      }else if (data2 === 'LETTER') {
        toCheck = 'Assignment Letter';
      }else if (data2 === 'TPASELLER') {
        toCheck = 'TPA (Seller)';
      }else if (data2 === 'TPAIGI') {
        toCheck = 'TPA (CMA)';
      }else if (data2 === 'ASSO') {
        toCheck = associateshipAgreement;
      }else if (data2 === 'UNDERTAKING1') {
        toCheck = associateshipAgreement;
      }else if (data2 === 'UNDERTAKING2') {
        toCheck = associateshipAgreement;
      } else toCheck = 'Sales Agreement';

      let exe;
      let dat = '';
      let dateOfContract = '';
      data1?.placeOfExecution?.execution?.forEach((val, index) => {
        if (val.agreementName === toCheck) {
          exe = val.place;
          if (val.dateOfExecution) {
            dat = moment(val.dateOfExecution).format(constants.dateFormatString);
          }
        }
      });
      const comment = [];
      let month=""
      data1?.additionalComments?.comments?.forEach((val, index) => {
        if (val.agreementName === toCheck) {
          comment.push(val.comment);
         
          if (toCheck === 'Assignment Letter') {
            
            dateOfContract = moment(val?.dateOfContract).format(constants.dateFormatString);
             month= val?.monthOfLoadingCargo
          }
        }
      });
    
      setData({
        seller: data1?.seller?.name,
        buyer: data1?.buyer?.name,
        sellerAddress: _get(data1, 'seller.addresses[0]', {}),
        buyerAddress: _get(data1, 'buyer.addresses[0]', {}),
        shortseller: data1?.seller?.shortName,
       shortbuyer: `${data1?.buyer.shortName}`,

        sellerSignature: data1?.seller?.name,
        buyerSignature: data1?.buyer?.name,
        dateOfExecution: dat,
        placeOfExecution: exe,
        details: data1?.supplier?.name,
        detailsOfEndBuyer: data1?.company.companyName,
        detailsOfComm: data1?.order?.commodity,
        quan: data1?.order?.quantity,
        totalOrderValue: data1?.order?.marginMoney?.calculation?.orderValue ?? '',
        lordPort: data1?.order?.termsheet?.transactionDetails?.loadPort,
        dischargePort: data1?.order?.portOfDischarge,
        lastDate: data1?.order?.shipmentDetail?.lastDateOfShipment,
        terms: `${data1?.order?.termsheet?.transactionDetails?.partShipmentAllowed !== 'Yes' ? 'Full' : 'Partial'}`,
        addComm: comment,
        spec: data1?.productSpecifications?.specificationTable,
        specComment: data1?.productSpecifications.comments,
        unitOfGrade: data1?.order?.unitOfGrade,
        unitOfQuantity: data1?.order?.unitOfQuantity,
        unitOfValue: data1?.order?.unitOfValue,
        curr: data1?.order?.orderCurrency,
        supplierAddress: _get(data1, 'supplier.addresses[0]', {}),
        supplierAuthorized: _get(data1, 'supplier.authorisedSignatoryDetails', []),
        buyerAuthorized: _get(data1, 'buyer.authorisedSignatoryDetails', []),
        buyerEmail: _get(data1, 'associateBuyer.authorisedSignatoryDetails', []),
        supplierEmail: _get(data1, 'supplier.authorisedSignatoryDetails', []),
        toleranceLevel: data1?.order?.tolerance,
        incoTerms: data1?.order?.termsheet?.transactionDetails?.incoTerms,
        financialBank: data1?.financingBank?.name,
        financialAddress: `${data1?.financingBank?.branch}, Netherlands`,
        associateBuyer: _get(data1, 'company.companyName', ''),
        associateBuyerAddress: _get(data1, 'company.detailedCompanyInfo.profile.companyDetail.registeredAddress', ''),
        associateBuyerGst: data1?.associateBuyer?.gstin,
        associateBuyerPan: _get(data1, 'company.detailedCompanyInfo.profile.companyDetail.pans[0]', ''),
        associateBuyerAuthorized: _get(data1, 'associateBuyer.authorisedSignatoryDetails', []),
        stevedore: data1?.stevedore?.name,
        stevedoreAddress: _get(data1, 'stevedore.addresses[0]', {}),
        stevedoreAuthorized: _get(data1, 'stevedore.authorisedSignatoryDetails', []),
        cma: data1?.CMA?.name,
        cmaAddress: _get(data1, 'CMA.addresses[0]', {}),
        cmaAuthorized: _get(data1, 'CMA.authorisedSignatoryDetails', []),
        cha: data1?.CHA?.name,
        chaAddress: _get(data1, 'CHA.addresses[0]', {}),
        chaAuthorized: _get(data1, 'CHA.authorisedSignatoryDetails', []),
        vessel: data1?.shippingLine?.vesselName,
        storagePlot: data1?.order?.termsheet?.transactionDetails?.portOfDischarge,
        loadingCargo: data1?.deliveryTerms?.monthOfLoadingCargo || '',
        dateOfContract: dateOfContract,
        designatedStorageArea: data1?.CMA?.designatedStorageArea,
        supplier: data1?.supplier?.name,
        endBuyer: data1.company.companyName,
        priceOfGoods: data1?.order?.perUnitPrice,
        commodityDetails: data1?.order?.commodity,
        unitPrice: data1.order?.perUnitPrice,
        tradeMargin: data1.order?.termsheet?.commercials?.tradeMarginPercentage,
        deliveryTerm: data1.deliveryTerms.deliveryTerm,
        totalPrice: data1?.order?.marginMoney?.calculation?.orderValue,
        advanceMoney: data1?.order?.termsheet?.transactionDetails?.marginMoney,
        orderValueCurrency: data1?.order?.marginMoney?.calculation?.orderValueCurrency,
        paymentTerm: data1.deliveryTerms.paymentTerms,
        cheque: data1.deliveryTerms?.cheque || [],
        cmaShort: data1?.CMA?.shortName,
        loadingCargo2: month ,
        cin:data1?.company?.detailedCompanyInfo.profile.companyDetail.CIN,
        orderId:data1?.order?.orderId.slice(-3),
        orderId2:data1?.order?.orderId.slice(-4),
        associateBuyerShort: _get(data1, 'associateBuyer.shortName', ''),
      });
    }
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [800, 1200]);
  
    let toPrint = SalesContractPreview(data);
    let name = 'SalesAgreement';
    if (preview === 'Sales') {
      toPrint = SalesContractPreview(data);
      name = 'SalesAgreement.pdf';
    }
    if (preview === 'QPA') {
      toPrint = QuadripartiteAgreementPreview(data);
      name = 'QPA.pdf';
    }
    if (preview === 'ASSO') {
      toPrint = AssociateshipAgreementPreview(data);
      name = 'Associateship.pdf';
    }
    if (preview === 'UNDERTAKING1') {
      toPrint = undertaking1Pdf(data,constants.dateFormatString);
      name = 'Undertaking1.pdf';
    }
    if (preview === 'UNDERTAKING2') {
      toPrint = undertaking2Pdf(data);
      name = 'Undertaking2.pdf';
    }
    if (preview === 'TPASELLER') {
      toPrint = TPASellerPreview(data);
      name = 'TPA(Seller).pdf';
    }
    if (preview === 'TPAIGI') {
      toPrint = TPAIGIPreview(data);
      name = 'TPA(CAM).pdf';
    }
    if (preview === 'LETTER') {
      toPrint = AssignmentLetterPreview(data);
      name = 'AssignmentLetter.pdf';
    }
   
    doc.html(ReactDOMServer.renderToString(toPrint), {
      callback: function (doc) {
      const totalPages = doc.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
     
      doc.text(
        `Page ${i} of ${totalPages}`, 
        doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 5, {
        align: 'center',
        });;
      }
        doc.save(name);
      },
      margin:[40,0],
      autoPaging: 'text',
      
    });
  };
  return (
    <>
      {preview === 'Sales' ? <Contract preview={true} /> : null}
      {preview === 'QPA' ? <QPA preview={true} /> : null}
      {preview === 'TPASELLER' ? <TPASeller preview={true} /> : null}
      {preview === 'TPAIGI' ? <TPAIGI preview={true} /> : null}
      {preview === 'LETTER' ? <AssignmentLetter preview={true} /> : null}
      {preview === 'ASSO' || preview === 'UNDERTAKING1' || preview === 'UNDERTAKING2' ? (
        <AssociateshipAgreement preview={true} type={preview} />
      ) : null}

      <DownloadBar downLoadButtonName={`Download`} handleReject={exportPDF} />
    </>
  );
}

export default Index;

export const undertaking1Pdf = (data,dateFormatString) => {
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
                      <td valign='top' align='left' width="5%">
                        <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>To:</p>
                      </td>
                      <td valign='top' align='left' width="95%">
                        <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0', textTransform:'capitalize'}}>
                          {data.buyer},<br/>
                          {data.buyerAddress?.fullAddress},
                          {data.buyerAddress?.city}{" "}<br/>
                          {data.buyerAddress?.country},{" "}
                          {data.buyerAddress?.pinCode}</p>
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
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That as requested by us, the Supplier shall sell the Goods to {data.shortseller} and {data.shortseller} will establish Letter of Credit in favour of the Supplier and make payment to the Supplier for the Goods. {data.shortseller} shall sell the Goods to Seller and Seller shall sell the same to the Associate Buyer in terms of the said Associateship Agreement. The Sales Contract and the Associateship Agreement shall jointly be referred to as “Contracts”.</p>
                    </li>
                    <li>
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That the present Undertaking is being executed in pursuance of the Contracts being entered into by {data.shortseller} and Seller on our request. It is pertinent to mention that the terms of the Associateship Agreement be read as a part of this Undertaking.</p>
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
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
                     {data?.cheque?.length > 0 &&
            data.cheque.map((val, index) => {
              return (
                 <tr>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}> {val.sNo}</p>
                      </td>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>{val.bankName}</p>
                      </td>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>{val.chequeNo}</p>
                      </td>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}> {moment(val.chequeDate).format(dateFormatString)}</p>
                      </td>
                      <td style={{
                          borderBottom: '1px solid #000000',
                          borderRight: '1px solid #000000',
                        }}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>
                           INR  {returnReadableNumber(val.amount,"en-IN",2,2)}
                         
                           </p>
                      </td>
                    </tr>
              );
            })} 
                  
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
                      <td valign='bottom' align='left' width='70%'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', paddingTop:'70px', marginBottom:'0'}}><strong>Place: {data.placeOfExecution}<br/>Date: {data.dateOfExecution}</strong></p>
                      </td>
                      <td valign='top' align='left' width='30%'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0'}}>
                          {/* <strong>(Associate Buyer)</strong> */}
                          <strong>({data.associateBuyer})</strong>
                              {
                                data?.associateBuyerAuthorized?.length > 0 &&
                                data?.associateBuyerAuthorized?.map((val, index) => {
                                  return (
                                     <><strong style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'10px', display:'block', paddingTop:'70px'}}>Name: {val.name}
                                       <br/>Designation: {val.designation}</strong>
                                     </>
                                  );
                                })
                              }                          
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td align='left'>&nbsp;</td>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000' }}>AUTHORISED SIGNATORY</p></td>
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
                      <td valign='top' align='left' width="5%">
                        <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}>To:</p>
                      </td>
                      <td valign='top' align='left' width="95%">
                        <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0', textTransform:'capitalize'}}>
                          {data.buyer},<br/>
                          {data.buyerAddress?.fullAddress},
                          {data.buyerAddress?.city}{" "}<br/>
                          {data.buyerAddress?.country},{" "}
                          {data.buyerAddress?.pinCode}</p>
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
                      <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>That we have requested Seller to import on our behalf the Goods and sell the same to us on stock and sale basis as per Associateship Agreement. We confirm and undertake that all the terms & conditions of the Sales Contract entered into between {data.shortseller} and the Supplier (hereinafter referred to as “Sales Contract”) are acceptable and binding on us.</p>
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
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', paddingBottom:'20px'}}>
                        <strong>({data.associateBuyer})</strong>
                        </p></td>
                    </tr>
                    <tr>
                      <td valign='bottom' align='left' width='70%'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', paddingTop:'50px', marginBottom:'0'}}><strong>Place: {data.placeOfExecution} </strong><br/><strong>Date : {data.dateOfExecution}</strong></p>
                      </td>
                      <td valign='top' align='left' width='30%'>
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0' }}>
                          
                            {
                            data?.associateBuyerAuthorized?.length > 0 &&
                            data?.associateBuyerAuthorized?.map((val, index) => {
                              return ( 
                                <strong style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'10px', display:'block', paddingTop:'50px'}}>Name: {val.name}<br/>Designation: {val.designation}</strong>
                              );
                            })
                            }
                           
                        
                          </p>
                      </td>
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
