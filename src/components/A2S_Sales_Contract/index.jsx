import SalesContract from '@/templates/SalesContract';
import _get from 'lodash/get';
import moment from 'moment';
import Router from 'next/router';
import { useEffect, useState } from 'react';
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
          shortbuyer: `${data?.shortbuyer}`,

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
          curr: data?.curr,
          specComment: data?.specComment,
          orderId:data.orderId
        });
      } else {
        const data = JSON.parse(sessionStorage.getItem('genericSelected'));

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

        setData({
          seller: data?.seller?.name,
          buyer: data?.buyer?.name,
          sellerAddress: _get(data, 'seller.addresses[0]', {}),
          buyerAddress: _get(data, 'buyer.addresses[0]', {}),
          shortseller: data?.seller?.shortName,
          shortbuyer: `${data?.buyer.shortName}`,

          sellerSignature: data?.seller?.name,
          buyerSignature: data?.buyer?.name,
          dateOfExecution: dat,
          placeOfExecution: exe,
          details: data?.supplier?.name,
          detailsOfEndBuyer: data?.company.companyName,
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
          totalPrice: data?.order?.marginMoney?.calculation?.totalOrderValue,
          advanceMoney: data?.order?.marginMoney?.calculation?.marginMoney,
          orderId:data?.order?.orderId?.slice(-4) || ""
        });
      }
    }
  }, [props]);

  const changeHandler = (name, val) => {
    setData({ ...data, [name]: val });
  };

  return (
    <>
      <div className={`${styles.root}`}>
        <div className={`${styles.content} card`}>
          {SalesContract(changeHandler, data, props.preview)}
          {props.preview !== 'Sales' ? (
            <>
              <div
                className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`}
              >
                <div  onClick={(e) => {
                      sessionStorage.setItem('preview', JSON.stringify(data));

                      Router.push('agreement/preview');
                      props.setPreviewValue('Sales');
                    }} className={`${styles.approve} mr-3`}>
                  <span
                   
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
