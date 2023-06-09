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
import {Row, Col} from 'react-bootstrap'
import GrowInput from '../GrowInput'

function Index(props) {
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

          commodityDetails: data?.commodityDetails,
          tradeMargin: data.tradeMargin,
          deliveryTerm: data.deliveryTerm,
          totalPrice: data?.totalPrice,
          advanceMoney: data?.advanceMoney,
          orderValueCurrency: data?.orderValueCurrency,
          paymentTerm: data.paymentTerm,
          cheque:data.cheque || [],
          cin:data.cin,
          orderId:data.orderId,
          associateBuyerShort:data.associateBuyerShort
        });
      } else {
        const data = JSON.parse(sessionStorage.getItem('genericSelected'));

        let exe;
        let dat = '';
        data?.placeOfExecution?.execution?.forEach((val, index) => {
          if (val.agreementName == 'Associateship Agreement') {
            exe = val.place;
            if (val.dateOfExecution) {
              dat = moment(val.dateOfExecution).format('DD-MM-YYYY');
            }
          }
        });
        let comment = [];
        data?.additionalComments?.comments?.forEach((val, index) => {
          if (val.agreementName == 'Associateship Agreement') {
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
          associateBuyerShort: data?.associateBuyer?.shortName,
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
          loadingCargo: data?.deliveryTerms?.monthOfLoadingCargo || '',
          storagePlot: data?.order?.termsheet?.transactionDetails?.portOfDischarge,
          priceOfGoods: data?.order?.perUnitPrice,
          commodityDetails: data?.order?.commodity,
          tradeMargin: data.order?.termsheet?.commercials?.tradeMarginPercentage,
          deliveryTerm: data.deliveryTerms.deliveryTerm,
          totalPrice: data?.order?.marginMoney?.calculation?.orderValue,
          advanceMoney: data?.order?.termsheet?.transactionDetails?.marginMoney,
                                     
          orderValueCurrency: data?.order?.marginMoney?.calculation?.orderValueCurrency,
          paymentTerm: data.deliveryTerms.paymentTerms,
          cheque: data.deliveryTerms?.cheque || [],
          cin:data?.company?.detailedCompanyInfo?.profile?.companyDetail?.CIN,
          orderId:data?.order?.orderId?.slice(-3) || ""
        });
      }
    }
  }, [props]);
  return (
    <>
     


      {/* Undertaking 1 pdf download code end */}

      {/* Undertaking 2 pdf download code start */}
     
      {/* Undertaking 2 pdf download code end */}

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
              ? AssociateShipAgreement(data, props.preview, props.setPreviewValue,active)
              : active == 'one'
              ? UnderTaking_1(data, props.preview, props.setPreviewValue)
              : UnderTaking_2(data, props.preview, props.setPreviewValue)
            : props.type == 'ASSO'
            ? AssociateShipAgreement(data, props.preview, props.setPreviewValue,active)
            : props.type == 'UNDERTAKING1'
            ? UnderTaking_1(data, props.preview, props.setPreviewValue)
            : UnderTaking_2(data, props.preview, props.setPreviewValue)}
        </div>
      </div>
    </>
  );
}

export default Index;

const assignmentSupplier = (props) => {
  return (
    <>
      <div className="card-body">
        <p className="text-center text_sales">
          {' '}
          <strong>
            Assignment Letter between Seller, Buyer and Supplier
          </strong>
        </p>
        <p className="text_sales">
          This Assignment Letter is made at the place and on the day as set out in <strong>Schedule I</strong> hereto by
          and between:
        </p>
        <p className="text_sales">
          <strong>Seller</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the
          “<strong>Seller</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to
          include its legal heirs, successors and permitted assigns) of the First Part.
        </p>
        <p className=" text-center text_sales">And</p>
        <p className="text_sales">
          <strong>Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “
          <strong>Buyer</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to
          include its legal heirs, successors and permitted assigns) of the Second Part.
        </p>
        <p className=" text-center text_sales">And</p>
        <p className="text_sales">
          <strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as
          the “<strong>Supplier</strong>”, which expression shall, unless excluded by or repugnant to the context be
          deemed to include its legal heirs, successors and permitted assigns) of the Third Part.
        </p>
        <p className="text_sales">
          WHEREAS it is hereby agreed that the Supplier accepts that the payment of the goods shall be made by way of a
          Letter of Credit (LC) to be issued on the applicant of Seller and Supplier will sell quantity of Goods
          approximately mentioned in Schedule I to Seller for exclusive use by Buyer under the terms and conditions
          contained within the Sales Contract dated mentioned in Schedule I (“Contract”) by and between Supplier and
          Buyer, with the quality and price of goods as agreed between them with tolerance level as mentioned in
          Schedule I and contained in the Sales Contract dated mentioned in Schedule I.
        </p>
        <p className="text_sales">
          WHEREAS it has been agreed between the parties that the goods are to be loaded by the Supplier in the month
          mentioned in Schedule I, at a price mentioned in Schedule I.{' '}
        </p>
        <p className="text_sales">
          WHEREAS the Buyer hereby confirms to remain responsible for the performance of the said sales contract,
          including any failure or delay in the issuance of LC in accordance with the terms of the sales contract and
          this assignment letter. Further, Buyer shall remain ultimately responsible for payment of the price in the
          event where Supplier is unable to obtain payment under the LC and hereby agree to indemnify Supplier for any
          loss, damage or expense including, without limitation, any liability, Supplier may incur to the Seller by
          reason of the Invoice being addressed to Seller.
        </p>
        <p className="text_sales">
          The title in Goods shall pass on to Seller upon receipt of payment by Supplier from the Seller and the risks
          associated therewith shall pass on to Buyer as per Incoterms 2020. Buyer shall be solely responsible for
          performance of the obligations enumerated in the sales contract mentioned herein above. The supplier shall
          have no claim whatsoever.
        </p>
        <p className="text-center text_sales">
          {' '}
          <strong>Schedule I</strong>
        </p>
        <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution of Assignment Letter
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of execution of Assignment Letter
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Seller
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Seller
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Description of Goods
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Quantity of Goods 
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of execution of Assignment Letter
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
             Per Unit price of Goods
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Tolerance levels
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Load Port
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Discharge Port
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Inco-Terms
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Month of loading of Cargo
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} ${styles.last}`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of Sales Contract between Supplier and Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
        </div>
        <p className=" text_sales">
          {' '}
          <strong>SIGNATURE PAGE</strong>
        </p>

        <div className={`row`}>
          <Col md={6}>
            <p className="text_sales  m-0">
              <strong>.................................................</strong>
            </p>
            <p className="text_sales">
              <strong>(Seller)</strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>.................................................</strong>
            </p>
            <p className="text_sales">
              <strong> (Buyer)</strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="text_sales  m-0">
              <strong>.................................................</strong>
            </p>
            <p className="text_sales">
              <strong>(Shipper)</strong>
            </p>
          </Col>
        </div>
      </div>
    </>
  );
};
const tripartiteAgreement = () => {
  return (
    <>
      <div className="card-body">
        <p className="text-center text_sales">
          {' '}
          <strong>
            TRIPARTITE AGREEMENT
          </strong>
        </p>
        <p className="text_sales">
          This Tripartite Agreement (“<strong>Agreement</strong>”) is made at the place and on the day as set out in{' '}
          <strong>Schedule I</strong> hereto by and between:
        </p>
        <p className="text_sales">
          <GrowInput placeholder="INDO INTERTRADE AG"></GrowInput>, a company organized and existing in accordance with
          Law of Switzerland and having address at <GrowInput placeholder="Industriestrasse 16, Zug 6300"></GrowInput>{' '}
          through its Authorized Signatory (hereinafter referred to as the "<strong>Buyer</strong>", which expression
          shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and
          permitted assigns) of the First Part.
        </p>
        <p className="text_sales">And</p>
        <p className="text_sales">
          <strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as
          the “<strong>Supplier</strong>”, which expression shall, unless excluded by or repugnant to the context be
          deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
        </p>
        <p className=" text_sales">And</p>
        <p className="text_sales">
          <strong>End Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as
          the “<strong>End Buyer</strong>”, which expression shall, unless excluded by or repugnant to the context be
          deemed to include its legal heirs, successors and permitted assigns) of the Third Part.
        </p>
        <p className="text_sales">
          The Buyer, Supplier and the End Buyer shall hereinafter, for the sake of brevity and convenience, be referred
          to individually as "Party" and collectively as the "Parties".
        </p>
        <p className="text_sales">WHEREAS,</p>
        <ol type="A">
          <li>
            <p className="text_sales">
              Supplier has entered into a Sales Contract with Buyer for Sale &amp; Purchase of Goods as details in
              Schedule -1
            </p>
          </li>
          <li>
            <p className="text_sales">
              Buyer has entered into the Sales Contract with Supplier solely at the request of End Buyer and to
              facilitate the End Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">In view of the aforesaid, parties have entered into this binding Agreement.</p>
          </li>
        </ol>
        <p className="text_sales">
          {' '}
          <strong>NOW THEREFORE THE PARTIES HERETO AGREED TO AS UNDER</strong>
        </p>
        <ol type="1">
          <li>
            <p className="text_sales">
              That it is expressly clarify and agreed to amongst the parties that the Buyer has entered into the Sales
              Contract solely at the request and to facilitate the End Buyer.
            </p>
          </li>
          <li>
            <p className="text_sales">
              All terms of the Sales Contract have already been discussed and agreed between the Supplier and End Buyer.{' '}
            </p>
          </li>
          <li>
            <p className="text_sales">
              The role of Buyer is limited to establishment of Letter of Credit (“LC”) in favor of Supplier subject to
              the End Buyer fulfilling its contractual obligations towards the Buyer.{' '}
            </p>
          </li>
          <li>
            <p className="text_sales">
              The End Buyer and Supplier therefore, are fully liable and responsible at all times for performance of the
              Sales Contract including but not limited to making financial arrangements, timely nomination/acceptance of
              vessel, settlement of any and all quality/quantity claims, delayed/no shipment issues, demurrage /
              dispatch amounts, and/or any other claims or liability arising due to execution of the sales contract. All
              such claims, liabilities etc., shall be addressed, discussed and settled directly between the Supplier and
              End Buyer with no reference and liability on the part of Buyer whatsoever.
            </p>
          </li>
          <li>
            <p className="text_sales">
              Supplier will not hold discharge and/or delivery of cargo to the Buyer/Buyer's nominees for any reason
              whatsoever once LC is issued by the Buyer.{' '}
            </p>
          </li>
          <li>
            <p className="text_sales">
              In case of any conflict between the Sales Contract and this Agreement, the terms of this Agreement will
              prevail.{' '}
            </p>
          </li>
          <li>
            <p className="text_sales">
              In case of any conflict between the Sales Contract and this Agreement, the terms of this Agreement will
              prevail.{' '}
            </p>
          </li>
          <li>
            <p className="text_sales">
              In any case, End Buyer shall remain responsible for the performance of the Sales Contract, including any
              failure or delay in the issuance of the LC in accordance with the terms of the Sales Contract.
            </p>
          </li>
          <li>
            <p className="text_sales">
              This Agreement is subject to English laws, and any disputes arising out of this Agreement shall be
              referred to arbitration as per rules of Singapore International Arbitration Center (SIAC) by a sole
              arbitrator. The seat and venue of arbitration shall be Singapore and the language of Arbitration
              Proceedings shall be in English.
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
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized signatory of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Email ID of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of End buyer
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Authorized signatory of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Email ID of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Details of Goods as per Sales Contract
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
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
            <p className="text_sales">Authorised Signator</p>
          </Col>
        </div>
      </div>
    </>
  );
};
const salesContract = () => {
  return (
    <>
      <div className="card-body">
        <p className="text-center text_sales">
          {' '}
          <strong>
            SALES CONTRACT
          </strong>
        </p>
        <p className="text_sales">
          This Sales Contract(“<strong>Contract</strong>”) is made at the place and on the day as set out in{' '}
          <strong>Schedule I</strong> between the Seller and the Buyer.
        </p>

        <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              1
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Seller
            </Col>
            <Col md={7} className={styles.right}>
              <input
                placeholder="Indo Intertrade AgIndustriesstrasse 16,Zug 6300"
                className={`${styles.para} input`}
              ></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              2
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <input
                placeholder="Indo German International Pvt. Ltd.
Plot No-49-48-6/1, Lalitha Nagar, 
Ground Floor, Sakshi Office Road, 
Akkayyapalem, Visakhapatnam, 
Andhra Pradesh, 530016 India
"
                className={`${styles.para} input`}
              ></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              3
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Manufacturer/Supplier / Shipper
            </Col>
            <Col md={7} className={styles.right}>
              Details as per Schedule 1
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              4
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              End User / End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              Details as per Schedule 1
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              5
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Commodity, Quantity, Specification and Unit Price
            </Col>
            <Col md={7} className={styles.right}>
              Details as per Schedule 1
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              6
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Quality / Inspection{' '}
            </Col>
            <Col md={7} className={styles.right}>
              Details as per Schedule 1
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              7
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Discharge Port
            </Col>
            <Col md={7} className={styles.right}>
              Details as per Schedule 1
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              8
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Loading Port
            </Col>
            <Col md={7} className={styles.right}>
              Details as per Schedule 1
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              9
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Quality / Inspection{' '}
            </Col>
            <Col md={7} className={styles.right}>
              In case of issues in Quality, Neutral agency certification for Quality and Quantity will be considered as
              final and binding on Buyer &amp; Seller. Load port report for quality and quantity are final and binding
              between Seller and Buyer for all purpose. If any dispute arises relating but not limited to quantity,
              quality, the same is to be settled directly between Manufacturer/shipper and Buyer.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              10
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Duties and Taxes
            </Col>
            <Col md={7} className={styles.right}>
              All Taxes and duties, present or future, including variations thereto and other taxes shall be borne and
              paid by Buyer.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              11
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Shipment{' '}
            </Col>
            <Col md={7} className={styles.right}>
              Details as per Schedule 1
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              12
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Payment Terms{' '}
            </Col>
            <Col md={7} className={styles.right}>
              <ol type="A">
                <li>
                  <p className="text_sales">
                    All the custom clearance formalities, Duties, Taxes and other charges related to import of cargo and
                    custom clearance shall be to Buyer's account and shall be solely the Buyer's responsibility.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    The Buyer shall pay for entire cargo within 90 days from the date of B/L or 60 days from the date of
                    discharge of vessel at discharge port, whichever is earlier. The Buyer shall make full payment of
                    the material to be lifted through TT remittance. The Seller shall release the part material to Buyer
                    upon receipt of part payment for the part quantity of material to be lifted after obtaining delivery
                    order or Written Release Order from the LC opening bank as per CMA. The delivery order instructions
                    shall be issued for the part material, for which the payment has been made within one banking day.
                    However, Seller will provide first delivery order in Advance as per buyer's request.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    The material shall be stored at Discharge Port for which the cost of such Rent, Claim, and penalty
                    shall be fully borne by the End User. Upon release of payment for the value of each B/L Quantity
                    Release Order from the Financing Bank shall be sent to the CMA Agent, within one banking day
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Documents to be provided to Buyer
                    <ol type="1">
                      <li>
                        {' '}
                        <p className="text_sales">The Seller's Commercial Invoice;</p>{' '}
                      </li>
                      <li>
                        {' '}
                        <p className="text_sales">Full set of 3/3 originals of Bills of Lading,</p>{' '}
                      </li>
                      <li>
                        {' '}
                        <p className="text_sales">Certificate of Quality ;</p>{' '}
                      </li>

                      <li>
                        {' '}
                        <p className="text_sales">Certificate of Weight,</p>{' '}
                      </li>
                      <li>
                        {' '}
                        <p className="text_sales">Certificate of Origin.</p>{' '}
                      </li>
                      <li>
                        {' '}
                        <p className="text_sales">Copy of Marine Insurance Certificate / Insurance Policy</p>{' '}
                      </li>
                    </ol>
                  </p>
                </li>
              </ol>
              <p className="text_sales">All the above documents are subject to receipt from shipper.</p>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              13
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Insurance{' '}
            </Col>
            <Col md={7} className={styles.right}>
              <ol type="A">
                <li>
                  <p className="text_sales">
                    Marine Insurance: Seller will provide Marine Insurance as received from Shipper.{' '}
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Stock Insurance: The Buyer will arrange insurance for 110% of the cargo value at discharge port,
                    valid at all times covering All Risk including Fire, Burglary and Act of God (AOG). The cargo shall
                    be insured by the Buyer at its own cost for the full value of cargo. The Policy shall be endorsed in
                    favour of the Seller or its nominated Bank. The Beneficiary of the Insurance Claim shall be the
                    Seller or its nominated Bank as per Seller's instructions.
                  </p>
                </li>
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              14
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Shipping Terms{' '}
            </Col>
            <Col md={7} className={styles.right}>
              All demurrage/despatch for discharge port to be settled directly between Shipper, Vessel Owner agent and
              End User with no liability upon the Seller whatsoever
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              15
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Title / Risk{' '}
            </Col>
            <Col md={7} className={styles.right}>
              Title to the Goods shall be deemed to have been transferred to the Buyer and the Goods shall be deemed to
              be sold and delivered to the Buyer only upon receipt by the Seller of the entire contract value. It is
              clarified that the Seller shall retain lien and the full legal ownership in the Goods, to secure the
              Buyer's obligation to pay the entire contract value, until receipt by the Seller of the entire contract
              value. All risk of loss or damage shall pass to the Buyer as per Incoterms 2020.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              16
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Time is the essence k{' '}
            </Col>
            <Col md={7} className={styles.right}>
              Time is the Essence of the Contract. In the event of failure of the Buyer to fulfill its obligations as
              contained herein including making of the payment and taking of the delivery of the material within the
              time period specified in the Clause Payment Terms hereinabove, it shall constitute a material breach of
              the Agreement.{' '}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              17
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Remedies Available to the SellerRemedies Available to the Seller{' '}
            </Col>
            <Col md={7} className={styles.right}>
              <ol type="A">
                <li>
                  <p className="text_sales">
                    In the event of the failure of the Buyer to make timely payment as agreed to in terms of the Clause
                    Payment Terms hereinabove, the Buyer shall pay the overdue interest @ 18% p.a. to the Seller for
                    each day of delay. However, the delay in making the payment shall in no event exceed 15 days beyond
                    the due date of making the payment as specified hereinabove.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    However, in the eventuality of Buyer failing to pay for and/or take delivery as per Clause Payment
                    Terms beyond 15 days of the due date, the Seller shall have the absolute right to dispose off the
                    Material, on terms and conditions as may be deemed fit by the Seller, to any other party at full
                    risk, responsibility and costs of Buyer, including financial costs, other expenses as well as
                    liquidated damages. The Buyer further agrees to make good the losses, financial costs and expenses
                    incurred by the Seller due to such disposal of the goods, within 3 working days of the receipt of
                    the demand by the Buyer from the Seller.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    The Buyer shall forthwith on demand indemnify the Seller against all the direct losses, liabilities,
                    claims or damages which Seller shall incur as a result of any breach by the Buyer (including but not
                    limited to any claim, loss, liability or damage Seller may incur to a third party as shipper of the
                    product).
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Failure of the Buyer to make payment in terms of clause hereinabove will entitle the Seller to seek
                    appropriate remedies available to it under the laws of the jurisdiction where the goods are stored
                    for recovery of the amounts and / or any other relief as thought fit by the Seller in its sole
                    discretion.
                  </p>
                </li>
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              18
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Special Conditions{' '}
            </Col>
            <Col md={7} className={styles.right}>
              <ol type="1">
                <li>
                  <p className="text_sales">
                    It is expressly and unconditionally agreed and Buyer fully acknowledges that the title in the goods
                    / material shall pass on to the Buyer only in respect of such specific quantity thereof as released
                    from the storage facility by Collateral Manager in terms of the 'Tripartite Agreement' after receipt
                    of the price and other payables in respect thereof and actual delivery of the goods having been made
                    to the Buyer. The Seller shall continue to be the owner, holding absolute title in the
                    goods/material not so released and delivered to the Buyer in any contingency including of Buyer even
                    becoming insolvent, and shall be entitled to deal with the goods/material as it may deem fit
                    including disposing them of at the risk and cost of the Buyer. For the avoidance of doubt, the
                    parties agree and acknowledge that the Goods shall not be in any manner whatsoever be construed to
                    be in the constructive or ac'ual possession of the Buyer until the Goods are released and delivered
                    by the Seller in accordance with this Agreement. The Buyer specifically represents and agrees to not
                    exercise any or all such possessory rights on the Goods until the Goods are released and delivered
                    by the Seller in accordance with this Agreement.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Notwithstanding anything contained herein to the contrary, all risks, consequences arising out of
                    the actual transaction(s) taking place between Manufacturer/shipper and the Seller under the
                    Contract and/or any modified/amended agreement will be to the account of the Buyer only. The Seller
                    shall in no way be responsible or liable for the same
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    The BUYER unconditionally agrees to abide by a collateral management agreement by and among “
                    <strong>Collateral Manager</strong>”, “<strong>Financing Bank</strong>” and “<strong>Seller</strong>
                    ” and undertakes not to take any delivery of Goods unless Collateral Manager releases such quantity
                    of the Goods in accordance with the Bank's written release instructions under the Collateral
                    Management Agreement. If Buyer, directly or indirectly, violates the undertaking in the preceding
                    sentence, then Buyer shall indemnify Seller for any loss, liability or claim (including without
                    limitation any expenses incurred) without any demur or protest. The Seller shall be under obligation
                    to issue delivery order for the quantity for which the payment has been received within one banking
                    day.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Buyer acknowledges that:(i) pursuant to this Agreement Seller has entered into certain agreements
                    similar to the Collateral Management Agreement to fulfil requirement of the relevant bank which has
                    issued a letter of credit to facilitate purchase of the Goods by Seller; and (ii) the collateral
                    manager appointed by the Bank shall keep the Goods in its custody at a facility leased by the Buyer
                    at Storage facility at Discharge Port. For this purpose, Buyer unconditionally agrees that whenever
                    collateral manager takes Buyer's permission to keep the Goods at the Storage facility which facility
                    is under Buyer's control and management, then Buyer shall ensure the collateral manager has the
                    unfettered and unrestricted access to the Storage Facility and shall have the sole custody over the
                    Goods kept at the Storage facility. If there is any theft or loss of the Goods at the Storage
                    facility, the Buyer shall fully indemnify Seller to such loss of the Goods without any demur or
                    protest
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Notwithstanding anything contained in this Agreement, for avoidance of any doubts, the Parties
                    hereby clarify that unless Buyer fully pays Seller under this Agreement, the Seller shall have lien
                    on unpaid quantity of the Goods which is delivered to Buyer pursuant to this Agreement or any other
                    agreement. Buyer unconditionally represents and warrants that Buyer has not created and shall not
                    create any encumbrance (whatsoever) in favour of any lender or any third party on the Goods under
                    this Agreement or any other similar agreements unless Buyer fully pays for such Goods.{' '}
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Any payment to be made by the Buyer under this contract shall be made free and clear of and without
                    deduction or withholding for or on account of any taxes. If at any time the Buyer is required to
                    make any deduction or withholding in respect of taxes from any payment to be made under this
                    contract, the Buyer shall pay such additional amounts as may be necessary to ensure that, after the
                    making of such deduction or withholding, the Seller receives for such payment a net sum equal to the
                    sum it would have received had no such deduction or withholding been made.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    It is clarified that the Goods shall be deemed to have been supplied to the Buyer when the goods are
                    loaded on board the vessel and the Sales Consideration as mentioned hereinabove shall become due and
                    payable from then onwards by the Buyer to the Seller.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    The contractual amount till the time it is not paid will be treated as an admitted, undisputed debt
                    due and payable by the Buyer to the Seller.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Within seven (7) days of receipt of the statement of accounts, as prepared by Seller, if Buyer does
                    not provide any comment on the statement of accounts, then such statement of accounts shall deem to
                    be accepted by Buyer and binding on it.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    The End User and Manufacturer/shipper shall have direct recourse to each other for matters including
                    but not limited to the following:
                    <ol type="a">
                      <li>
                        <p>
                          For all quantity and quality claims/ issues pertaining to material supplied by
                          Manufacturer/shipper;
                        </p>
                      </li>
                      <li>
                        <p>
                          Any express or implied warranty claim for the quality of material supplied by
                          Manufacturer/shipper;
                        </p>
                      </li>
                      <li>
                        <p>Loss of cargo</p>
                      </li>
                      <li>
                        <p>
                          Any demurrage charges at the load port and/or discharge port shall be settled directly between
                          the Buyer and Manufacturer/shipper;
                        </p>
                      </li>
                    </ol>
                  </p>
                </li>
              </ol>
              {/* <p>All Claims direct or consequential shall be settled directly between End Buyer and Manufacturer/shipper</p> */}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              19
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Mutual Collaboration{' '}
            </Col>
            <Col md={7} className={styles.right}>
              Both the Buyer and the Seller recognize that circumstances may arise that could not have been foreseen at
              the time this Contract is being entered into. Both Parties agree that they will use their commercially
              reasonable effort to achieve a mutually acceptable solution to any problem that may arise due to any
              unforeseen circumstances in the spirit of mutual understanding and collaboration
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              20
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Termination
            </Col>
            <Col md={7} className={styles.right}>
              1. greement, then the Seller may, by giving thirty (30) days prior written notice to the Buyer, terminate
              this Agreement without liability and charge to the Seller. However, the Buyer shall remain liable to the
              Seller for making Payment of the Goods already shipped by the Seller at the instance of the Buyer.
              Provided further, the Parties hereto agree that the Seller may immediately terminate this Agreement
              without providing any notice to the Buyer upon the Buyer, or the Buyer's shareholders commencing a
              voluntary proceeding under any applicable bankruptcy, insolvency, winding up or other similar law now or
              hereafter in effect (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents
              to the entry of an order for relief in an involuntary proceeding under any such law (including but not
              limited to the Insolvency and Bankruptcy Code, 2016), or consents to the appointment or taking possession
              by a resolution professional, Receiver, liquidator, assignee (or similar official) for any or a
              substantial part of its property; or the Buyer has involuntarily become the subject of proceedings
              (including filing of an application/ petition for corporate insolvency resolution) under the Insolvency
              &amp; Bankruptcy Code, 2016 or an order has been made by the appropriate authority for winding up of the
              Buyer. In the event that conditions of Force Majeure continue so that the Buyer's obligations remain
              suspended for a period or periods amounting in aggregate to sixty (60) days in any consecutive period of
              ninety (90) days, and at the end of said period or at anytime thereafter, then the Seller may give thirty
              (30) days prior written notice to the Buyer that the Seller intends to terminate this Agreement. At the
              expiration of the thirty (30) days, the Seller at its discretion may terminate this Agreement forthwith
              without any liability or charge to the Seller. However, the Buyer shall remain liable to the Seller for
              making Payment of the Goods.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              21
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Notices
            </Col>
            <Col md={7} className={styles.right}>
              Any notice given by one Party to the other shall be in the English language and sent by facsimile or by
              pre-paid air courier. Any notice sent by facsimile shall be deemed received on the day of transmission and
              any notice sent by courier shall be deemed duly received on the third (3rd) day following dispatch. Such
              notices shall be addressed at the addresses mentioned hereinabove.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              22
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Force Majeure
            </Col>
            <Col md={7} className={styles.right}>
              <div>
                <p>
                  The Seller shall not be liable to the Buyer or to the Manufacturer/shipper for any damages due to
                  delay, interruption or failure in performance of the obligations under the present Agreement
                  (including but not limited to any loss, damage or delay) if such loss, damage, delay or failure is due
                  to or results from Acts of God, War (whether declared or undeclared), blockades, revolution,
                  insurrection, civil commotion, terrorism, riot, invasion, plague or other epidemic, fire, sabotage,
                  quarantine restriction, explosion or embargo, including any change/modification in commercial laws,
                  rules and regulations by government, , acts of Government in creating any restrictions or control in
                  imports, exports or foreign exchange, fire, flood, storm, earthquakes, accident in and to the Vessel
                  or strikes, breakdown of loading or unloading facilities, or transporting, loading, unloading or
                  delivering freight, embargoes and breakdown of railroads, serious damage to or breakdown of the
                  transmission system connecting to the Buyer 's warehouse or the like or any other cause which may be
                  beyond the control of the Seller{' '}
                </p>
                <p>The force Majeure declared by the Manufacturer/shipper shall be applicable to the Seller.</p>
                <p>
                  No event described in this Clause shall constitute a Force Majeure event with respect to the Buyer's
                  obligation to pay for any product loaded at loading place in transit to the Buyer or stored at the
                  licensed warehouse.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              23
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Breach of Contract{' '}
            </Col>
            <Col md={7} className={styles.right}>
              <ol type="1">
                <li>
                  <p className="text_sales">
                    In the event, the Buyer fails to fulfill its obligations as laid down hereunder, the Buyer shall be
                    fully responsible and liable for all losses, damages, both direct and consequential incurred by the
                    Seller.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    The Buyer indemnifies and shall continue to keep the Seller fully indemnified against all losses,
                    damages, expenses, claims, proceedings, liabilities (including all liabilities of the Seller towards
                    payment of LC charges, interest, default interest and other similar charges to its financing entity,
                    and those arising under the Collateral Management Agreement and the Irrevocable Tripartite
                    Agreement), demands including but not limited to those arising due to the failure of the Buyer to
                    make the payment and/or take delivery of the Goods within the stipulated time period as specified in
                    the Clause Payment Terms hereinabove as well as for executing the transaction as contemplated herein
                    the agreement for and on behalf of the Buyer.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    If, due to the failure of the Buyer to fulfill its obligations as laid down hereunder in the
                    Contract, any dispute or difference arises between the Seller and Manufacturer/Shipper, and due to
                    which any Award/Judgment/decree/Order is passed or otherwise a settlement is reached, the Buyer
                    shall be bound to accept the same and bear the liability, costs, expenses arising there from.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    In the event, any judicial/ legal proceedings are initiated against the Seller by
                    Manufacturer/shipper, the Buyer shall be required to be present and associated at all stages of the
                    proceedings and shall bear the entire expenses of arbitration/litigation and/or of the negotiated
                    settlement. The Buyer shall have no authority or excuse to challenge the same on any ground
                    including that the Buyer has not been consulted therein or that the negotiated settlement is not
                    reasonable or otherwise.
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    Remedies provided under this agreement shall be cumulative and in addition to other remedies
                    provided by law.
                  </p>
                </li>
              </ol>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              24
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Dispute Resolution &amp; Arbitration
            </Col>
            <Col md={7} className={styles.right}>
              <div>
                <p>
                  Both parties agree to use their best efforts to amicably resolve any claims controversies and disputes
                  arising out of this contract, as well as to determine the final costs thereof. Any such claims,
                  controversies and disputes which cannot be resolved through negotiations within a period of 60 days of
                  the notification of such claims, disputes and controversies shall be referred to arbitration in
                  accordance with the rules of Singapore International Arbitration Center (SIAC). One arbitrator to be
                  nominated jointly by both the parties. The award rendered by the arbitrator shall be final and binding
                  upon both the parties concerned and subject to no appeal. The costs and expenses of the prevailing
                  party (including, without limitation, reasonable attorney's fee) will be paid by the losing party. The
                  contract shall be subject to Laws of India. The seat of the arbitration will be Singapore and the
                  proceedings shall be conducted in English language.
                </p>
                <p>
                  Notwithstanding the aforesaid, the parties agree and affirm that relief available under Section 9 of
                  the Indian Arbitration Act, 1996 (as amended) shall be available to the parties, and the parties may
                  initiate appropriate proceedings in India in order to avail such relief.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              25
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Modifications of the contract
            </Col>
            <Col md={7} className={styles.right}>
              No changes in respect of the contract covered by this agreement shall be valid unless the same is agreed
              to in writing by both parties herewith specifically stating the same to on amendment to this agreement.
              Contract is valid if approved by Fax and no mail confirmation will be sent.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              26
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              No Assignment
            </Col>
            <Col md={7} className={styles.right}>
              No changes in respect of the contract covered by this agreement shall be valid unless the same is agreed
              to in writing by both parties herewith specifically stating the same to on amendment to this agreement.
              Contract is valid if approved by Fax and no mail confirmation will be sent.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              27
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Severability
            </Col>
            <Col md={7} className={styles.right}>
              The Parties intend each provision of this Agreement to be severable and distinct from the others. If a
              provision of this Agreement is held to be illegal, invalid or unenforceable, in whole or in part, the
              Parties intend that the legality, validity and enforceability of the remainder of this Agreement shall not
              be affected.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              28
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Waiver
            </Col>
            <Col md={7} className={styles.right}>
              Failure to enforce any condition herein contained shall not operate as a waiver of the condition itself or
              any subsequent breach thereof.
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              29
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              Representations and Warranties{' '}
            </Col>
            <Col md={7} className={styles.right}>
              <ol type="1">
                Each party to this Agreement hereby represents and warrants that:
                <li>
                  <p className="text_sales">
                    it is a legal entity duly organized and validly existing under the laws of the jurisdiction of its
                    incorporation and has all necessary corporate power, authority and capacity to execute this
                    Agreement and undertake the transactions contemplated herein;
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    the execution and delivery of this Agreement has been duly and validly authorized and constitutes
                    valid and legally binding obligations enforceable in accordance with its terms;
                  </p>
                </li>
                <li>
                  <p className="text_sales">
                    the execution, delivery and performance of this Agreement does not and shall not; (i) contravene any
                    provisions of its charter documents; (ii) result in a default, breach or contravention of any
                    conditions or provisions of any agreement to which it is a party or any obligation it is bond by; or
                    (iii) violate any law, order, judgment, injunction, decree, award, rule or regulation applicable to
                    it.
                  </p>
                </li>
              </ol>
            </Col>
          </Row>
        </div>

        <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of execution
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Details of Manufacturer / Supplier / Shipperr
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Details of End Buyer
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Details of Commodity
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Quantity
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Unit Price
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Total Order Value
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Load Port
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Discharge Port
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Last Date of Shipment
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Shipment Term
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Additional Conditions
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Specification
            </Col>
            <Col md={7} className={styles.right}>
              <input className={`${styles.para} input`}></input>
            </Col>
          </Row>
        </div>
        <p className=" text_sales">
          {' '}
          <strong>SIGNATURE PAGE</strong>
        </p>
        <div className={`row`}>
          <Col md={12} className={`d-flex justify-content-around`}>
            <p className="text_sales  m-0">(Seller)</p>
            <p className="text_sales  m-0">(Buyer)</p>
          </Col>
          <Col md={12} className={`d-flex justify-content-around`}>
            <GrowInput></GrowInput>
            <GrowInput></GrowInput>
          </Col>
        </div>
      </div>
    </>
  );
};

