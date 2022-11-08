import jsPDF from 'jspdf';
import {toPdf,letterPrint,igiPrint,sellerPrint,qpaPrint,associateshipPrint} from '../../../src/utils/agreementTemplate'
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
import IGIAgreementPreview from '../../../src/templates/IGIAgreementPreview';
import QuadripartiteAgreementPreview from '../../../src/templates/QuadripartiteAgreementPreview';
import SalesContractPreview from '../../../src/templates/SalesContractPreview';
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
       if(data2=="ASSO"){
        toCheck="Associateship Agreement"
      }
        if(data2=="UNDERTAKING1"){
        toCheck="Associateship Agreement"
      }
        if(data2=="UNDERTAKING2"){
        toCheck="Associateship Agreement"
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
          if (toCheck == 'LETTER') {
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
          supplierAuthorized: _get(
            data,
            'supplier.authorisedSignatoryDetails',
            [],
          ),
          buyerAuthorized: _get(data, 'buyer.authorisedSignatoryDetails', []),
          buyerEmail: _get(
            data,
            'associateBuyer.authorisedSignatoryDetails',
            [],
          ),
          supplierEmail:  _get(
            data,
            'supplier.authorisedSignatoryDetails',
            [],
          ) ,
          toleranceLevel: data?.order?.tolerance,
          incoTerms: data?.order?.termsheet?.transactionDetails?.incoTerms,
          financialBank: data?.financingBank?.name,
          financialAddress: `${data?.financingBank?.branch}, Netherlands`,
          associateBuyer: _get(data,"company.companyName",""),
          associateBuyerAddress: _get(
            data,
            'company.detailedCompanyInfo.profile.companyDetail.registeredAddress'
            ,""
          ),
          associateBuyerGst: data?.associateBuyer?.gstin,
          associateBuyerPan: _get(data,"company.detailedCompanyInfo.profile.companyDetail.pans[0]",""),
          associateBuyerAuthorized: _get(
            data,
            'associateBuyer.authorisedSignatoryDetails',
            [],
          ),
          stevedore: data?.stevedore?.name,
          stevedoreAddress: _get(
            data,
            'stevedore.addresses[0]',
            {},
          ),
          stevedoreAuthorized: _get(
            data,
            'stevedore.authorisedSignatoryDetails',
            [],
          ),
          cma: data?.CMA?.name,
          cmaAddress:_get(
            data,
            'CMA.addresses[0]',
            {},
            
          ),
            
          cmaAuthorized: _get(data, 'CMA.authorisedSignatoryDetails', []),
          vessel: data?.shippingLine?.vesselName,
          storagePlot:
          data?.order?.termsheet?.transactionDetails?.portOfDischarge,
          loadingCargo:data?.deliveryTerms?.monthOfLoadingCargo || "",
          priceOfGoods: data?.order?.perUnitPrice,
          dateOfContract:dateOfContract,
          designatedStorageArea:data?.CMA?.designatedStorageArea,
          supplier: data?.supplier?.name,
          endBuyer: data.company.companyName,
          priceOfGoods: data?.order?.perUnitPrice,
          commodityDetails:data?.order?.commodity,
          unitPrice: data.order?.perUnitPrice,
          tradeMargin:data.order?.termsheet?.commercials?.tradeMarginPercentage,
          deliveryTerm:data.deliveryTerms.deliveryTerm,
          totalPrice:data?.order?.marginMoney?.calculation?.totalOrderValue,
          advanceMoney:data?.order?.marginMoney?.calculation?.marginMoney,
          orderValueCurrency:data?.order?.marginMoney?.calculation?.orderValueCurrency,
          paymentTerm:data.deliveryTerms.paymentTerms,
          cheque:data.deliveryTerms?.cheque || []
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
    if(preview=="ASSO"){
      toPrint=associateshipPrint(data)
      name ="Associateship.pdf"
    }
     if(preview=="UNDERTAKING1"){
      toPrint=undertakingPrint(data)
      name ="Undertaking1.pdf"
    }
    if(preview=="UNDERTAKING1"){
      toPrint=undertaking2Print(data)
      name ="Undertaking2.pdf"
    }
    if(preview=="TPASELLER"){
      toPrint=sellerPrint(data)
      name="TPA(Seller).pdf"
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
    </>
  )

}















