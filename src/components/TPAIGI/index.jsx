import TPAIGITemp from '@/templates/TPAIGITemp';
import _get from 'lodash/get';
import moment from 'moment';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './index.module.scss';

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
          designatedStorageArea: data?.designatedStorageArea,
          cmaAddress: data?.cmaAddress,
          cma: data?.cma,
          toleranceLevel: data?.toleranceLevel,
          incoTerms: data?.incoTerms,
          supplierAddress: data?.supplierAddress,
          financialAddress: data?.financialAddress,
          designatedStorageArea: data.designatedStorageArea,
          cmaAuthorized: data.cmaAuthorized,
          financialBank: data?.financialBank,
          supplier: data?.supplier,
        });
      } else {
        const data = JSON.parse(sessionStorage.getItem('genericSelected'));

        let exe;
        let dat = '';
        data?.placeOfExecution?.execution?.forEach((val, index) => {
          if (val.agreementName == 'TPA (CMA)') {
            exe = val.place;
            if (val.dateOfExecution) {
              dat = moment(val.dateOfExecution).format('DD-MM-YYYY');
            }
          }
        });
        let comment = [];
        data?.additionalComments?.comments?.forEach((val, index) => {
          if (val.agreementName == 'TPA (CMA)') {
            comment.push(val.comment);
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
          detailsOfEndBuyer: '',
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
          supplier: data?.supplier?.name,
          supplierAddress: _get(data, 'supplier.addresses[0]', ''),
          supplierAuthorized: _get(data, 'supplier.authorisedSignatoryDetails', []),
          buyerAuthorized: _get(data, 'buyer.authorisedSignatoryDetails', []),
          buyerEmail: '',
          supplierEmail: '',
          toleranceLevel: data?.order?.tolerance,
          incoTerms: data?.order?.termsheet?.transactionDetails?.incoTerms,
          financialBank: data?.financingBank?.name,
          financialAddress: `${data?.financingBank?.branch}, Netherlands`,
          cma: data?.CMA?.name,
          cmaAddress: _get(data, 'CMA.addresses[0]', {}),
          cmaAuthorized: _get(data, 'CMA.authorisedSignatoryDetails', []),
          designatedStorageArea: data?.CMA?.designatedStorageArea,
          supplierAddress: _get(data, 'supplier.addresses[0]', {}),
        });
      }
    }
  }, [props]);
  return (
    <>
      {/* TPA (CMA) pdf download code end */}

      <div className={`${styles.root}`}>
        <div className={`${styles.content} card border_color shadow-none`}>
          {TPAIGITemp(data, props.preview)}
          {props.preview !== 'TPAIGI' ? (
            <>
              <div
                className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`}
              >
                <div className={`${styles.approve} mr-3`}>
                  <span
                    onClick={(e) => {
                      sessionStorage.setItem('preview', JSON.stringify(data));

                      Router.push('agreement/preview');
                      props.setPreviewValue('TPAIGI');
                    }}
                  >
                    Preview
                  </span>
                </div>
                <div className={styles.reject}>
                  <span>Save</span>
                </div>
                <div className={styles.approve}>
                  <span>Submit</span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Index;