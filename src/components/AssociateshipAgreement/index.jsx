/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import AssociateShipAgreement from '@/templates/AssociateShipAgreement';
import UnderTaking_1 from '@/templates/UnderTaking_1';
import UnderTaking_2 from '@/templates/UnderTaking_2';
import _get from 'lodash/get';
import moment from 'moment';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

function Index(props) {
  console.log(props.type, 'adadf');
  const [active, setActive] = useState('none');
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
          shortbuyer: `${data?.buyer == 'Indo German International Private Limited' ? 'IGPL' : 'EISL'}`,
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

          spec: data?.spec,
          unitOfGrade: data?.unitOfGrade,
          unitOfQuantity: data?.unitOfQuantity,
          unitOfValue: data?.unitOfValue,
          curr: data?.orderCurrency,
          specComment: data?.specComment,
          loadingCargo: data.monthOfLoadingCargo || '',
          supplier: data?.supplier,
          supplierAddress: data?.supplierAddress,
          supplierAuthorized: data?.supplierAuthorized,
          buyerAuthorized: data?.buyerAuthorized,
          toleranceLevel: data?.toleranceLevel,
          incoTerms: data?.incoTerms,
          financialBank: data?.financialBank,
          associateBuyer: data?.associateBuyer,
          associateBuyerAddress: data?.associateBuyerAddress,
          associateBuyerGst: data?.associateBuyerGst,
          associateBuyerPan: data?.associateBuyerPan,
          associateBuyerAuthorized: data?.associateBuyerAuthorized,
          stevedore: data?.stevedore,
          stevedoreAddress: data?.stevedoreAddress,
          stevedoreAuthorized: data?.stevedoreAuthorized,
          cma: data?.cma,
          cmaAddress: data?.cmaAddress,
          vessel: data?.vessel,
          storagePlot: data?.storagePlot,
          cmaAuthorized: data?.cmaAuthorized,
          priceOfGoods: data?.perUnitPrice,
        });
      } else {
        const data = JSON.parse(sessionStorage.getItem('genericSelected'));
        console.log(data, 'data22222');
        let exe;
        let dat = '';
        data?.placeOfExecution?.execution?.forEach((val, index) => {
          if (val.agreementName == 'Sales Agreement') {
            exe = val.place;
            if (val.dateOfExecution) {
              dat = moment(val.dateOfExecution).format('DD-MM-YYYY');
            }
          }
        });
        let comment = [];
        data?.additionalComments?.comments?.forEach((val, index) => {
          if (val.agreementName == 'Sales Agreement') {
            comment.push(val.comment);
          }
        });
        console.log(dat, exe, 'exedasa');

        setData({
          seller: data?.seller?.name,
          buyer: data?.buyer?.name,
          sellerAddress: _get(data, 'seller.addresses[0]', ''),
          buyerAddress: data?.buyer?.name ? getAddress(data?.buyer) : '',
          shortseller: data?.seller?.shortName,
          shortbuyer: `${data?.buyer?.name == 'Indo German International Private Limited' ? 'IGPL' : 'EISL'}`,
          sellerSignature: data?.seller?.name,
          buyerSignature: data?.buyer?.name,
          dateOfExecution: dat,
          placeOfExecution: exe,
          details: data?.supplier?.name,
          detailsOfEndBuyer: '',
          detailsOfComm: data?.order?.commodity,
          quan: data?.order?.quantity,
          unitPrice: data.order?.perUnitPrice,
          totalOrderValue: data?.order?.marginMoney?.calculation?.orderValue ?? '',
          lordPort: data?.order?.termsheet?.transactionDetails?.loadPort,
          dischargePort: data?.order?.portOfDischarge,
          lastDate: data?.order?.shipmentDetail?.lastDateOfShipment,
          terms: `${data?.order?.termsheet?.transactionDetails?.partShipmentAllowed !== 'Yes' ? 'Full' : 'Partial'}`,
          addComm: data?.comment,
          spec: data?.productSpecifications?.specificationTable,
          specComment: data?.productSpecifications.comments,
          unitOfGrade: data?.order?.unitOfGrade,
          unitOfQuantity: data?.order?.unitOfQuantity,
          unitOfValue: data?.order?.unitOfValue,
          curr: data?.order?.orderCurrency,
          supplier: data?.supplier?.name,
          supplierAddress: _get(data, 'supplier.addresses[0]', {}),
          supplierAuthorized: _get(data, 'supplier.authorisedSignatoryDetails', []),
          buyerAuthorized: _get(data, 'buyer.authorisedSignatoryDetails', []),
          buyerEmail: '',
          supplierEmail: '',
          toleranceLevel: data?.order?.tolerance,
          incoTerms: data?.order?.termsheet?.transactionDetails?.incoTerms,
          financialBank: data?.financingBank?.name,
          financialAddress: '',
          associateBuyer: _get(data, 'company.companyName', ''),
          associateBuyerAddress: _get(data, 'associateBuyer.addresses[0]', {}),
          associateBuyerGst: data?.associateBuyer?.gstin,
          associateBuyerPan: _get(data, 'company.detailedCompanyInfo.profile.companyDetail.pans[0]', ''),
          associateBuyerAuthorized: _get(data, 'buyer.authorisedSignatoryDetails', []),
          stevedore: data?.stevedore?.name,
          stevedoreAddress: _get(data, 'stevedore.addresses[0]', {}),
          stevedoreAuthorized: _get(data, 'stevedore.authorisedSignatoryDetails', []),
          cma: data?.CMA?.name,
          cmaAddress: _get(data, 'CMA.addresses[0]', {}),

          cmaAuthorized: _get(data, 'CMA.authorisedSignatoryDetails', []),
          vessel: data?.shippingLine?.vesselName,
          loadingCargo: data?.deliveryTerms?.monthOfLoadingCargo || '',
          storagePlot: data?.order?.termsheet?.transactionDetails?.portOfDischarge,
          priceOfGoods: data?.order?.perUnitPrice,
        });
      }
    }
  }, [props]);
  return (
    <>
      <div className={`${styles.root}`}>
        <div className={`${styles.content} card border_color shadow-none`}>
          {props.preview == '' ? (
            <div
              className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
              data-toggle="collapse"
              data-target="#cashFlowStatement"
              aria-expanded="true"
              aria-controls="cashFlowStatement"
            >
              <div className={`d-flex `}>
                <h2
                  className={`mb-0 mr-4 ${active == 'none' ? styles.underLine : null}`}
                  onClick={() => setActive('none')}
                >
                  Agreement
                </h2>
                <h2
                  className={`mb-0 mr-4 ${active == 'one' ? styles.underLine : null}`}
                  onClick={() => setActive('one')}
                >
                  Undertaking 1
                </h2>
                <h2 className={`mb-0  ${active == 'tow' ? styles.underLine : null}`} onClick={() => setActive('tow')}>
                  Undertaking 2
                </h2>
              </div>
            </div>
          ) : null}
          {props.preview == ''
            ? active == 'none'
              ? AssociateShipAgreement(data, props.preview, props.setPreviewValue)
              : active == 'one'
              ? UnderTaking_1(data, props.preview, props.setPreviewValue)
              : UnderTaking_2(data, props.preview, props.setPreviewValue)
            : props.type == 'ASSO'
            ? AssociateShipAgreement(data, props.preview, props.setPreviewValue)
            : props.type == 'UNDERTAKING1'
            ? UnderTaking_1(data, props.preview, props.setPreviewValue)
            : UnderTaking_2(data, props.preview, props.setPreviewValue)}
        </div>
      </div>
    </>
  );
}

export default Index;
