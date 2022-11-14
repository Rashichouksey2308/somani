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
          unitPrice: data.unitPrice,
          tradeMargin: data.tradeMargin,
          deliveryTerm: data.deliveryTerm,
          totalPrice: data?.totalPrice,
          advanceMoney: data?.advanceMoney,
          orderValueCurrency: data?.orderValueCurrency,
          paymentTerm: data.paymentTerm,
          cheque:data.cheque || [],
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
          associateBuyerAddress: _get(data, 'company.detailedCompanyInfo.profile.companyDetail.registeredAddress', ''),
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
          commodityDetails: data?.order?.commodity,
          unitPrice: data.order?.perUnitPrice,
          tradeMargin: data.order?.termsheet?.commercials?.tradeMarginPercentage,
          deliveryTerm: data.deliveryTerms.deliveryTerm,
          totalPrice: data?.order?.marginMoney?.calculation?.orderValue,
          advanceMoney: data?.order?.termsheet?.transactionDetails?.marginMoney,
                                     
          orderValueCurrency: data?.order?.marginMoney?.calculation?.orderValueCurrency,
          paymentTerm: data.deliveryTerms.paymentTerms,
          cheque: data.deliveryTerms?.cheque || [],
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

const assignmentSupplier = (props) => {
  return (
    <>
      <div className="card-body">
        <p className="text-center text_sales">
          {' '}
          <strong>
            <u>Assignment Letter between Seller, Buyer and Supplier</u>
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
              Quantity of Goods in MT
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
              Price of Goods / MT
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
            <u>TRIPARTITE AGREEMENT</u>
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
            <u>SALES CONTRACT</u>
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
const tpaSeller = () => {
  return (
    <div className={`${styles.cardBody} card-body pt-3`}>
      <p className="text-center text_sales">
        {' '}
        <strong>TRIPARTITE AGREEMENT</strong>
      </p>
      <p className="text-center text_sales">
        {' '}
        <strong>FOR RECEIPT, STORAGE, CUSTODY AND ISSUE OF PLEDGED GOODS </strong>
      </p>
      <p className="text_sales">
        {' '}
        This Tripartite Agreement (<strong>“Agreement”</strong>) is made at the place and on the day as set out in{' '}
        <strong>Schedule I </strong>hereto by and between:
      </p>
      <p className="text_sales">
        {' '}
        <GrowInput placeholder="Indo German International Private Limited, (CIN: U74899DL1994PTC063676)"></GrowInput>, a
        Company incorporated under the Companies Act, 1956, having its{' '}
        <GrowInput placeholder="registered office"></GrowInput> at{' '}
        <GrowInput placeholder="7A, Sagar Apartments, 6, Tilak Marg, New Delhi-110001"></GrowInput> through its
        Authorised Signatory (hereinafter referred as the “<b>{data.shortbuyer}</b>”, which expression shall, unless
        excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns)
        of the First Part.)
      </p>
      <p className="text-center text_sales">And</p>
      <p className="text_sales">
        The Collateral Manager as detailed in Schedule I (hereinafter referred as the “
        <strong>Collateral Manager</strong>”, which expression shall, unless excluded by or repugnant to the context be
        deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
      </p>
      <p className="text-center text_sales">And</p>
      <p className="text_sales">
        <GrowInput placeholder="INDO INTERTRADE AG, Industriesstrasse 16, 6300 Zug "></GrowInput>
        (hereinafter referred as the <strong>“IIAG”</strong>, which expression shall, unless excluded by or repugnant to
        the context be deemed to include its legal heirs, successors and permitted assigns) of the Third Part.
      </p>
      <p className=" text_sales">WHEREAS</p>
      <p className="text_sales">
        <GrowInput placeholder="IGI "></GrowInput> is engaged in the business of trading of industrial commodities,
        which are stored at the Designated Storage Area as detailed in Schedule-I.
      </p>
      <p className="text_sales">
        <GrowInput placeholder="IGI "></GrowInput> has purchased Commodity from the Supplier, that has been financed by
        the “Financing Bank”. The details of the commodity purchased, Supplier and the Financing Bank are mentioned in
        Schedule-I.
      </p>
      <p className="text_sales">
        Financing Bank has a first ranking security right over the Goods in the form of a pledge, and has appointed
        Collateral Manager pursuant to the terms of the tripartite collateral management agreement executed between{' '}
        <GrowInput placeholder="IIAG"></GrowInput>, Collateral Manager and Financing Bank as amended from time to time
        (the “<strong>Collateral Management Agreement</strong>”) for the purpose of keeping the custody and control of
        Goods.
      </p>
      <p className="text_sales">
        Pursuant to the Collateral Management Agreement, the Goods shall remain under the exclusive custody, control and
        supervision of Collateral Manager and under the order of Financing Bank.
      </p>
      <p className="text_sales">
        <b>{data.shortbuyer}</b>hereby agrees that it shall grant unrestricted access to a clearly demarcated part of
        the Storage Facility (as per stocking requirement) in ready-to-operate-condition exclusively for the use of
        Collateral Manager where the pledged Goods shall only be stored (the “<strong>Designated Storage Area</strong>
        ”).
      </p>
      <p className="text_sales">
        <b>{data.shortbuyer}</b>hereby agrees that it shall grant unrestricted access to a clearly demarcated part of
        the Storage Facility (as per stocking requirement) in ready-to-operate-condition exclusively for the use of
        Collateral Manager where the pledged Goods shall only be stored (the “<strong>Designated Storage Area</strong>
        ”).
      </p>
      <p className=" text_sales">IT IS HEREBY AGREED AS FOLLOWS:</p>
      <p className=" text_sales">
        <strong>Article 1 - STORAGE FACILITY</strong>
      </p>
      <p className=" text_sales">
        <b>{data.shortbuyer}</b>hereby grants unrestricted access of the Designated Storage Area to Collateral Manager,
        which is in a ready to store condition. The Plan duly marking the Designated Storage Area is attached Schedule 1
        to this Agreement. The Goods deposited in the Designated Storage Area shall be accessed exclusively by
        Collateral Manager during the term of this Agreement.{' '}
      </p>
      <p className=" text_sales">
        <strong>
          Article- 2-RESPONSIBILITY OF <b>{data.shortbuyer}</b>{' '}
        </strong>
      </p>
      <p className=" text_sales">
        <b>{data.shortbuyer}</b> shall:
      </p>

      <p className=" text_sales">
        <span className="mr-6">2.1</span> prior to granting access to the Designated Storage Area, be responsible for
        clearly demarcating the Designated Storage Area with chalk and rope from all sides for clear demarcation and
        identification for the exclusive and sole access of Collateral Manager for storing the Goods or any other
        materials as agreed in writing.
      </p>
      <p className=" text_sales">
        <span className="mr-6">2.2</span> be responsible for prominently displaying on the board at the entrance of the
        Designated Storage Area clearly stating that the Goods are under the custody of Collateral Manager and held on
        behalf of <GrowInput placeholder="IIAG"></GrowInput>{' '}
      </p>
      <p className=" text_sales">
        <span className="mr-6">2.3</span> be responsible for putting a Placard on each lot of Goods stored at the
        Designated Storage Area clearly specifying the name of <GrowInput placeholder="IIAG"></GrowInput> as the owner
        of the Goods and Collateral Manager as the Collateral Manager as custodian of the Goods;{' '}
      </p>
      <p className=" text_sales">
        <span className="mr-6">2.4</span> be responsible for providing an office equipped with required infrastructure
        such as electricity, toilet, telephone, access to fax, email etc. will have to be provided free of cost to
        Collateral Manager and the running cost of these facilities will also be borne by <b>{data.shortbuyer}</b>.
        Collateral Manager and their representatives shall have unfettered access to the warehouse/stockyard;{' '}
      </p>
      <p className=" text_sales">
        <span className="mr-6">2.5</span> be responsible for granting unrestricted and unfettered control and access to
        Collateral Manager over the Designated Storage Area;
      </p>
      <p className=" text_sales">
        <span className="mr-6">2.6</span> Obtain permission from Customs to open the Customs Notified Area where the
        Designated Storage area is located for conducting audit/stock verification/stock assessment as and when required
        by Collateral Manager or its authorised representatives by providing full cooperation and without creating any
        hindrance or obstacle
      </p>
      <p className=" text_sales">
        <span className="mr-6">2.6</span> ensure that the Designated Storage Area where pledged Goods being stored is
        suitable for the storage of the goods being stored therein; and
      </p>
      <p className=" text_sales">
        <span className="mr-6">2.6</span>be responsible for payment of all taxes, duties and/or service charges
        presently assessed on the Designated Storage Area, as at the date of signature thereof.
      </p>

      <p className=" text_sales">
        <strong>Article-3 RESPONSIBILITY OF COLLATERAL MANAGER </strong>
      </p>
      <p className=" text_sales">Collateral Manager shall:</p>
      <p className=" text_sales">
        <span className="mr-6">3.1</span> ensure that the Designated Storage Area is manned with adequate surveyors
        round the clock at the Designated Storage Area. The fees for the surveyors shall be borne by Collateral Manager;{' '}
      </p>
      <p className=" text_sales">
        <span className="mr-6">3.2</span> ensure that all safety regulations or industrial regulations will be adhered
        to at all point of time;{' '}
      </p>
      <p className=" text_sales">
        <span className="mr-6">3.3</span> ensure that at least 3 staff and/or representatives of Collateral Manager will
        attend the storage yard at all times during the Term of this Agreement;
      </p>
      <p className=" text_sales">
        <span className="mr-6">3.4</span> ensure that it fulfills all its obligations as laid down in the Collateral
        Management Agreement{' '}
      </p>
      <p className=" text_sales">
        <span className="mr-6">3.5</span> shall maintain proper records and registers for incoming and outgoing of
        material; and
      </p>
      <p className=" text_sales">
        <span className="mr-6">3.6</span> not assign his/its rights under this Agreement.
      </p>

      <p className=" text_sales">
        <strong>Article 4 - TERM </strong>
      </p>
      <p className=" text_sales">
        This Agreement is made on the Effective Date and is entered into by{' '}
        <GrowInput placeholder=" IIAG, IGI"></GrowInput> and Collateral Manager for a period during which the Collateral
        Management Agreement, pursuant to which Collateral Manager is providing the collateral management services (“
        <strong>CMA Services</strong>”), is remains valid and in force.{' '}
      </p>

      <p className=" text_sales">
        <strong>Article 5 - UTILISATION OF THE DESIGNATED STORAGE AREA </strong>
      </p>

      <p className=" text_sales">
        <span className="mr-6">5.1</span> Collateral Manager will provide CMA Services at the Designated Storage Area in
        accordance with the Collateral Management Agreement.
      </p>
      <p className=" text_sales">
        <span className="mr-6">5.2</span> <GrowInput placeholder="IGI "></GrowInput> undertakes that the pledged Goods
        shall be separately stocked at the Designated Storage Area under the custody and control of Collateral Manager{' '}
      </p>

      <p className=" text_sales">
        <strong>Article 6 - IRREVOCABLE AGREEMENT </strong>
      </p>
      <p className=" text_sales">
        This Agreement is irrevocable until the entire stock stored therein has been delivered to IGI under the written
        authorised release orders received by Collateral Manager from the Financing Bank (“
        <strong>Release Orders</strong>”).
      </p>

      <p className=" text_sales">
        <strong>Article 7 - INSURANCE</strong>
      </p>

      <p className=" text_sales">
        <span className="mr-6">7.1</span> <b>{data.shortbuyer}</b> shall take out and maintain an all risks cargo
        insurance policy in respect of the Goods which terms are acceptable to the respective Financing Bank at its full
        discretion. The policy shall cover loss, strikes, riots, civil commotion, theft, misappropriation and damage of
        the Goods during storage in the Designated Storage Area and while under transport to and from the Designated
        Storage Area. The Insurance shall remain valid until the period that the entire Goods at the Designated Storage
        Area have been released by Collateral Manager to <b>{data.shortbuyer}</b>. The insurance policy shall name the
        Financing Bank as a beneficiary of insurances and loss payee.
      </p>
      <p className=" text_sales">
        <span className="mr-6">7.2</span> Upon request <b>{data.shortbuyer}</b> will deliver to Collateral Manager and
        IIAG a copy of the relevant insurance agreements, policies and related documents together with evidence that the
        premiums have been paid.
      </p>

      <p className=" text_sales">
        <strong>Article 8 - PROPERTY TAXES</strong>
      </p>
      <p className=" text_sales">
        <b>{data.shortbuyer}</b> shall be responsible for the payment of all Land and Building taxes as may be
        applicable and that relate to the Designated Storage Area.
      </p>

      <p className=" text_sales">
        <strong>Article 9 - ELECTRICITY AND WATER SUPPLY</strong>
      </p>
      <p className=" text_sales">
        During the period of this Agreement, <b>{data.shortbuyer}</b> shall be responsible for payment of all charges
        with regard to water and electricity.
      </p>
      <p className=" text_sales">
        <strong>Article 10 - CHARGES/DUTIES/TAXES</strong>
      </p>
      <p className=" text_sales">
        <b>{data.shortbuyer}</b> shall bear all duties, taxes, cesses, levies etc. payable under present Indian
        State/Central Government/Semi Government Policies or payable in future under any newly implemented Government
        Policy/ies in respect of the said Designated Storage Area
      </p>
      <p className=" text_sales">
        <b>{data.shortbuyer}</b>hereby agrees to make the payments referred above regularly without any delay and
        default and shall produce to Collateral Manager, after expiry of every 12 months, certified copies of the
        receipts for the payments made during such period.
      </p>

      <p className=" text_sales">
        <strong>Article 11 - RENOVATIONS / ALTERATIONS</strong>
      </p>
      <p className=" text_sales">
        Collateral Manager will not make any renovations or alterations to the Designated Storage Area.
      </p>

      <p className=" text_sales">
        <strong>Article 12 - DEPOSITS</strong>
      </p>
      <p className=" text_sales">
        <b>{data.shortbuyer}</b> will pay any deposits due in respect of water and electricity charges as may be
        required. <b>{data.shortbuyer}</b> hereby indemnifies Collateral Manager against any consequences that may arise
        as a result of failure to pay said deposits or any claims whatsoever with regards to any of the charges.
      </p>

      <p className=" text_sales">
        <strong>Article 13 - IGI 's OBLIGATIONS</strong>
      </p>
      <ul>
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b> shall arrange to obtain no claim on inventory letters from all and any party who
            has an interest in the Storage Facility/Designated Storage Area. Such letters shall proclaim that the
            parties concerned recognize and agree that they do not have any ownership or title rights to the Goods
            stored at the Designated Storage Area, and that they shall not bring any claim to bear on the Goods, under
            the custody, control and supervision of Collateral Manager and stored in the Designated Storage Area.{' '}
          </p>
        </li>
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b>shall furnish written confirmation to Collateral Manager that there are no
            circumstances of which he is aware that may give rise to a claim over the land, plot, Designated Storage
            Area or the Goods stored therein during the period of this Agreement.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            During the period of this Agreement, <b>{data.shortbuyer}</b> shall warrant that it will allow Collateral
            Manager to have the custody, control and supervision of the Goods stored at the Designated Storage Area
            without any interruption and obstruction
          </p>
        </li>
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b> further agrees that he shall not, for any reason whatsoever, prevent Collateral
            Manager from entering or leaving the Designated Storage Area nor shall it at any time prevent Collateral
            Manager from taking in, or delivering out, the Goods stored therein which shall be done under the
            supervision of Collateral Manager at the written instance of the Financing Bank.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b> hereby waives all rights to the Goods stored under the custody of Collateral
            Manager and shall not remove, transfer or otherwise attempt to gain control of the Goods unless authorized
            in writing by Collateral Manager .
          </p>
        </li>
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b> shall take the delivery of the Goods from Collateral Manager only upon receipt [by
            Collateral Manager] of the Release Orders from the Financing Bank and then released by Collateral Manager on
            instructions of <GrowInput placeholder="IIAG"></GrowInput>
          </p>
        </li>
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b> warrants that Collateral Manager shall enjoy complete and uninterrupted custody of
            the Goods in the Designated Storage Area
          </p>
        </li>
      </ul>

      <p className=" text_sales">
        <strong>Article 14-WARRANTIES OF IGI </strong>
      </p>
      <p className=" text_sales">
        <b>{data.shortbuyer}</b> HEREBY WARRANTS AS FOLLOWS:
      </p>
      <ul>
        <li>
          <p className=" text_sales">
            It has full right and absolute authority to provide the Designated Storage Area to Collateral Manager for
            its exclusive use to enable Collateral Manager to carry out its obligations under the Collateral Management
            Agreement.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b>shall furnish written confirmation to Collateral Manager that there are no
            circumstances of which he is aware that may give rise to a claim over the land, plot, Designated Storage
            Area or the Goods stored therein during the period of this Agreement.
          </p>
        </li>
        <li>
          <p className=" text_sales">
            During the period of this Agreement, <b>{data.shortbuyer}</b> shall warrant that it will allow Collateral
            Manager to have the custody, control and supervision of the Goods stored at the Designated Storage Area
            without any interruption and obstruction
          </p>
        </li>
        <li>
          <p className=" text_sales">
            Collateral Manager shall peacefully hold and enjoy unrestricted access of the Designated Storage Area during
            the term or duration of this Agreement, without disturbance or interruption or obstruction from{' '}
            <b>{data.shortbuyer}</b> or any person claiming under it.
          </p>
        </li>
      </ul>

      <p className=" text_sales">
        <strong>Article 15-INDEMNITY BY IGI </strong>
      </p>
      <p className=" text_sales">
        <b>{data.shortbuyer}</b> agrees to indemnify and keep indemnified, defend and hold harmless Collateral Manager
        and <b>{data.shortbuyer}</b>, its officers, directors, employees and agents from and against any and all losses,
        liabilities, claims, obligations, costs, expenses arising during the duration of this Agreement, which result
        from, arise in connection with or are related in any way to claims by third parties or regulatory authorities,
        and which directly arise due to any reasons whatsoever and including the following
      </p>
      <ol type="i">
        <li>
          <p className=" text_sales">
            <b>{data.shortbuyer}</b> 's breach of the terms of this Agreement or;
          </p>
        </li>
        <li>
          <p className=" text_sales">
            negligence, fault or misconduct by <b>{data.shortbuyer}</b> or its officers, employees, agents,
            subcontractors and/or representatives and/or other persons authorized to act on its behalf;
          </p>
        </li>
      </ol>
      <p className=" text_sales">
        <strong>Article 16-SURVIVAL OF INDEMNITY </strong>
      </p>
      <p className=" text_sales">
        The responsibility of <b>{data.shortbuyer}</b> to indemnify set forth in this Clause and the obligations there
        under, shall survive the termination of this Tripartite Agreement for any reason whatsoever with regard to any
        indemnity claims arising out of or in relation to the performance hereof.
      </p>
      <p className=" text_sales">
        <strong> Article 17- GOVERNING LAW AND ARBITRATION</strong>
      </p>
      <p className=" text_sales">
        {' '}
        Any disputes or differences in respect of any matter relating to or arising out of this Quadripartite Agreement
        between the parties hereto shall be settled mutually and if the same is not resolved amicably, then the same
        will be settled by Arbitration by a Sole Arbitrator in accordance with Rules of Arbitration formulated by Indian
        Council of Arbitration (ICA). The Award made in pursuance thereof shall be binding on the parties. The seat and
        venue of the Arbitration will be New Delhi and the language of Arbitration Proceedings shall be in English.
      </p>
      <p className=" text_sales">
        {' '}
        IN WITNESS WHEREOF the parties hereto caused this Agreement to be executed by their duly authorized
        representatives on the date first written above.
      </p>

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
            Name of Collateral Manager
          </Col>
          <Col md={7} className={styles.right}>
            <input className={`${styles.para} input`}></input>
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Address of Collateral Manager
          </Col>
          <Col md={7} className={styles.right}>
            <input className={`${styles.para} input`}></input>
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Authorized Signatory of Collateral Manager
          </Col>
          <Col md={7} className={styles.right}>
            <input className={`${styles.para} input`}></input>
          </Col>
        </Row>
        <Row className={`${styles.row} border_black`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Designated Storage Area
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
            Quantity of Goods
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
            Financing Bank Name
          </Col>
          <Col md={7} className={styles.right}>
            <input className={`${styles.para} input`}></input>
          </Col>
        </Row>
        <Row className={`${styles.row} ${styles.last}`}>
          <Col md={5} className={`${styles.left} border_black`}>
            Financing Bank Address
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
  );
};

// const sales=()=>{
//   return(
//      <div className="card-body">
//             <p className="text_sales" ><strong>ASSOCIATESHIP AGREEMENT NO.</strong></p>
//             <p className="text_sales">
//               <strong> THIS AGREEMENT</strong> is signed at New Delhi on <GrowInput className={`${styles.para} input`} placeholder="90"></GrowInput>day of<GrowInput className={`${styles.para} input`} placeholder="90"></GrowInput>, 20<GrowInput className={`${styles.para} input`} placeholder="90"></GrowInput> by and between:
//             </p>
//              <p className="text_sales">
//               Indo German International Private Limited, a company incorporated under the Indian Companies Act, 1956, having its Registered Office at 7A, Sagar Apartments, 6, Tilak Marg, New Delhi- 110 001, having its branch office as mentioned in <GrowInput className={`${styles.para} input`} placeholder=" Schedule 1"></GrowInput>  (hereinafter called “<GrowInput className={`${styles.para} input`} placeholder="Seller"></GrowInput> ”) which expression shall, unless it be repugnant to the context or meaning thereof, be deemed to mean and include its successors and permitted assigns, attorneys, herein represented by Mrs. Bhawana Jain duly authorized to enter into this Agreement, on One Part
//              </p>
//             <p className="text_sales" >AND</p>
//             <p className="text_sales" >Person(s) detailed in  <GrowInput className={`${styles.para} input`} placeholder=" Schedule 1"></GrowInput> hereof (hereinafter referred to as the “ <GrowInput className={`${styles.para} input`} placeholder=" Associate Buyer"></GrowInput>r”) of the other Part</p>
//             <p className="text_sales" >Seller and the Associate Buyer, wherever required, are collectively referred to as the “Parties” and individually as the “Party.</p>
//             <p className={`text_sales ${styles.head}`} >Recitals</p>
//             <p className="text_sales" >WHEREAS Associate Buyer has requested Seller to arrange import purchase of Goods (Details of the Goods including quantity, quality, origin, INCO terms is annexed in Schedule 2) from the Supplier and sale of the same to the Associate Buyer on stock &amp; sale basis.
//            </p>
//             <p className="text_sales" >Relying upon the representations and information provided by the Associate Buyer in the Request and in the Agreement, Seller has agreed to to arrange import purchase of Goods from the Supplier on CIF / CFR / FOB basis (Details of Supplier in Schedule-3) and to sell the same to the Associate Buyer on stock &amp; sale basis.
//            </p>
//             <p className="text_sales" >Whereas, Supplier shall sell the Goods to Indo Intertrade AG, Zug (hereinafter referred to as “Indo”) for onward sale to Seller and Seller shall in terms of this Agreement sell the same to the Associate Buyer.
//            </p>
//            <p className="text_sales" >Whereas Seller shall import Goods for and on behalf of the Associate Buyer, at the sole risk and responsibility of the Associate Buyer and shall store the same under the custody of the Customs House Agent/ Collateral Manager appointed by Seller.

//            </p>
//            <p className="text_sales" >Whereas Seller shall import Goods for and on behalf of the Associate Buyer, at the sole risk and responsibility of the Associate Buyer and shall store the same under the custody of the Customs House Agent/ Collateral Manager appointed by Seller.

//            </p>
//             <p className="text_sales" >WHEREAS the Associate Buyer has also submitted undertakings for (a) Price Justification(b) Quality and Quantity and Origin of the material and (c) Post Dated Cheques to pay the balance/ outstanding amount to Seller at the time of making the above request for import of the Goods and these undertaking(s) form an integral part of this Agreement and are annexed hereto as Schedule 2A and Schedule 2B.
//            </p>
//            <p><strong>Now Therefore</strong>, in consideration of the promises and of the mutual agreements, covenants, representations and warranties hereinafter contained, and for other good and valuable consideration the Parties hereby agree as follows:
//            </p>

//            <ol className={`${styles.oderListParent}`}>
//              <li>
//               <p className={`${styles.oderListParent_Head}`}>Item &amp; Price</p>
//               <p className="text_sales">The details of the Commodity contracted quantity, Origin, Unit Price and total contract value are mentioned in Schedule 2.</p>
//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">The Associate Buyer affirms that the Supplier, Item, specifications, quantities, Origin, delivery and all other terms &amp; conditions of sale between Indo and the Supplier have been negotiated and firmed up between Associate Buyer and Supplier. The Associate Buyer further undertakes that it has ensured that the Sales Contract to be entered into between Indo and the Supplier (“Sale Contract”) is in accordance with the negotiations undertaken by the Associate Buyer and the Supplier.</p></li>
//                <li><p className="text_sales">The Associate Buyer confirms that he is solely responsible for competitiveness of price, selection of Supplier, quality, and quantity of goods and all the risks associated therewith.</p></li>
//                 <li><p className="text_sales">Pricing: - The calculation of price shall be done as per the formula specified in Schedule 3.</p>
//                 <p className="text_sales">The amount payable as per the final invoice issued by Seller shall be final and binding on the Associate Buyer.</p>
//                 </li>

//              </ol>
//              </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}>Advance Margin Money</p>
//               <p className="text_sales">The Associate Buyer shall provide an advance amount as mentioned in Schedule 4 as margin money, to Seller prior to opening of LC by Indo on the Supplier</p>
//             </li>
//             <li>
//               <p  className={`${styles.oderListParent_Head}`}>Payment</p>
//               <p className="text_sales">The terms of payment shall be as per Schedule 5</p>
//             </li>
//             <li>
//               <p  className={`${styles.oderListParent_Head}`}>Seller's trading Margin</p>
//               <p className="text_sales">The Trading margin of Seller shall be paid by the Associate Buyer as per details mentioned in Schedule 6, and the same shall be collected in the Sale Invoice raised by Seller on the Associate Buyer.</p>
//             </li>
//             <li>
//               <p  className={`${styles.oderListParent_Head}`}>Other Charges</p>
//               <p className="text_sales">Any and all incidental charges that may be incurred by Indo and/or Seller in relation to the import/storage/maintenance/delivery/security, Railway Freight, Penalty, Charges etc.  of the Goods shall be to the account of the Associate Buyer and will be payable by Associate Buyer to Seller at actuals within 5 days of demand from Seller. </p>
//             </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}>Quality, Quantity, Pre-Shipment Inspection </p>
//               <p className="text_sales">Obligations of the Associate Buyer are as under:</p>
//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">Ensuring pre-shipment inspection of the goods/items from agency of international repute as acceptable to Seller.</p></li>
//                <li><p className="text_sales">Approval and/or acceptance of quantity and quality certificate issued by the Supplier. </p></li>
//                 <li><p className="text_sales">Ensuring that quality and quantities of goods shipped are as per LC / Sales Contract / Proforma Invoice at pre-shipment stage and also at port of discharge. </p>

//                 </li>
//                  <li><p className="text_sales">Quantity as per Bill of Lading (“<strong>BL</strong>”) shall be final and binding on the Associate Buyer.  </p></li>
//                  <li><p className="text_sales">Seller shall not be responsible for <em>any</em> variation in quantity and/or quality of material at the port of loading, port of discharge, during transit to godown/warehouse/plot, while in godown/warehouse/plot and/or till it is delivered to the Associate Buyer. It shall at all times remain the sole responsibility of the Associate Buyer. Associate Buyer shall be solely responsible for any non-supply, short supply or deviation in quality standards/quantity or delay in supply for any reason whatsoever.  </p></li>
//                    <li><p className="text_sales">Associate Buyer shall be solely liable and responsible for all consequences arising out of any variation of the item/quality/quantity contracted for &amp; actually shipped. Associate Buyer undertakes to indemnify Seller in this regard. It has been agreed by the Associate Buyer that any claim/liability arising from the Supplier against Indo/Seller shall be passed on to the Associate Buyer. If the Supplier agrees upon any compensation on account of any quality deviation, then Seller shall refund the same to the Associate Buyer on receipt of the same.</p></li>
//              </ol>
//              </li>
//             <li>
//               <p  className={`${styles.oderListParent_Head}`}>Insurance </p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">The Marine Insurance will be arranged by the Associate Buyer in favour of Seller or Seller's nominated Bank (as per Seller's discretion), for 110% of Import Cargo Value, the cost of it shall be borne by the Associate Buyer. In case IGI decides to take the insurance directly in its name, the cost of it shall be borne by the Associate Buyer.
//                  </p></li>
//                <li><p className="text_sales">The cargo while in the port, during transit from port to godown/plot/warehouse and while in the godown/plot/warehouse shall be insured by way of insurance by Associate Buyer in favour of Seller or Seller's nominated Bank (as per Seller's discretion), for 110% of landed cost (inclusive of custom duty, all other taxes applicable under GST Act 2017). Associate Buyer will ensure that the material shall at all times remain insured. In case Seller decides to take the insurance directly in its name, the cost of it shall be borne by the Associate Buyer. </p></li>
//                 <li><p className="text_sales">The Insurance policy in original shall be submitted by Associate Buyer to Seller immediately on demand. In case the Associate Buyer fails to take the Insurance as desired by Seller, Seller shall among other rights reserved under this Agreement, including right to terminate the Agreement, be at liberty to take such insurance at cost of the Associate Buyer. </p>

//                 </li>
//                  <li><p className="text_sales">In the event of any loss, or any other event, leading to invocation of insurance policy, the process of filing of claim, settlement of amount, etc. shall be the sole responsibility of the Associate Buyer. It has been agreed by the Associate Buyer that settlement, if any, arrived with the Insurance Company, shall be paid directly by the Insurance Company to IGI or IGI’s nominated bank as the case may be and the same shall not absolve the Associate Buyer of their liability under the Associateship Agreement towards Seller.</p></li>

//              </ol>
//              </li>
//                <li>
//               <p  className={`${styles.oderListParent_Head}`}>Stock &amp; Sale / Clearance at Port of Entry </p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">The Goods shall be sold by Seller to Associate Buyer on Stock &amp; Sale basis. Seller shall file the Bill of Entry in its name and the Associate Buyer shall arrange to clear the cargo at the port.

//                  </p></li>
//                <li><p className="text_sales">Seller shall generate eway bill from the GST portal under its registration for movement of the goods by Rail or Road </p></li>
//                 <li><p className="text_sales">The Insurance policy in original shall be submitted by Associate Buyer to Seller immediately on demand. In case the Associate Buyer fails to take the Insurance as desired by Seller, Seller shall among other rights reserved under this Agreement, including right to terminate the Agreement, be at liberty to take such insurance at cost of the Associate Buyer. </p>

//                 </li>
//                  <li><p className="text_sales">All Duties and taxes shall be paid by the Associate Buyer to CHA/Seller in advance at the time of Custom Clearance. The Associate Buyer shall bear all Handling Charges, Port Charges, Plot Rental, CHA / Stevedoring Charges etc. </p></li>
//                    <li><p className="text_sales">Quantity in RR/LR shall be the final basis for GST billing. The final reconciliation shall be done based on the BL quantity only. </p></li>
//                      <li><p className="text_sales">BL quantity shall be considered the final quantity. Any shortage from the BL quantity shall be to the account of Associate Buyer and Seller shall in no way be responsible for the same. Any physical excess after despatch of BL quantity shall be the Associate Buyer's property. Seller shall not be liable to pay any extra duty/ port charges on it. In case any liability arises on Seller on this account, the Associate Buyer shall pay upfront.
//                 </p></li>

//              </ol>
//              </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}>Transport/Storage</p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">Associate Buyer shall bear and pay railway / Truck freight &amp; related expenses for movement of goods from discharge Port to Associate Buyer's Plant directly. Seller/Associate Buyer shall generate e-way bill from the GST portal under its registration for movement of the goods by Rail or Road

//                  </p></li>
//                <li><p className="text_sales">It is agreed that Seller shall retain the title over the Goods and that the Associate Buyer shall not create/ put any further charge, encumbrance with any other person/ party/entity, etc. on the Goods. Further Associate Buyer shall not lift any material without Release order issued by Seller.
//                       </p></li>
//                 <li><p className="text_sales">All risks and losses including in terms of variation in quality or quantity of goods lying in the godown/plot/warehouse, including shortage, loss due to theft/burglary/ contamination or any other reason whatsoever shall be borne by Associate Buyer and Seller shall in no way be liable for the same.
//                   </p>

//                 </li>
//                  <li> <p  className={`${styles.oderListChild_Head}`}>Safekeeping and Security of the Goods: </p><p className="text_sales">Proper safekeeping and security of Goods and management of the storage yard shall be the responsibility of the Associate Buyer. The Associate Buyer shall provide round the clock security guards at the Storage yard where Goods shall be stored. Seller shall in no way be responsible or liable for any loss or damage to the Goods for any reason whatsoever including shortage or theft. </p></li>

//              </ol>
//              </li>

//                <li>
//               <p  className={`${styles.oderListParent_Head}`}>Custom House Agent / Stevedoring Agent </p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">On Associate Buyer's request, Seller has agreed to appoint Associate Buyer's nominated Stevedoring agent for providing the stevedoring services as specified in the agreement to be entered with Stevedoring Agent.</p>
//                <p className="text_sales">The Associate Buyer confirms and agrees that Indo German shall not be liable or responsible for any non-performance or breach of the terms of the Agreement by the stevedores in any manner whatsoever, including but not limited to shortage, theft, mix-up of the Goods with other goods or material, delay in performance of terms of Stevedoring agreement by Stevedores. For any claims arising out of the breach of the terms of the stevedoring agreement by the Stevedores, the Associate Buyer shall have direct recourse to the Stevedores without any liability or responsibility of Seller.
//                </p>
//                </li>
//                <li><p className="text_sales">Seller will instruct the stevedoring agent consign the material directly to the Seller's nominated warehouse/plot/etc, where the goods will be stored. The Goods shall remain under the control and custody of the CHA/Stevedoring Agent who will work under the sole instructions of Seller. The CHA/Stevedoring Agent shall furnish an undertaking that goods will not be released to Associate Buyer or to their nominees without a written Release order from Seller. Seller shall enter into an agreement with CHA/Stevedoring Agent &amp; the Associate Buyer. CHA/Stevedoring Agent will raise invoice on the Associate Buyer and the Associate Buyer will make the payment to CHA Directly.

//                       </p></li>
//                 <li><p className="text_sales">CHA/Stevedoring Agent will apply online for EDRM permission for Railway Rakes/Transporter CHA/Stevedoring Agent will place indent online. The Associate Buyer will coordinate with “CHA/Stevedoring Agent for making necessary arrangements to place for Railway Rakes. The Associate Buyer will pay the railway freight and related charges directly. Scanned copy of RR shall be furnished by CHA/Stevedoring Agent to Seller as well as the Associate Buyer as soon as it is issued after loading. The original RR/LR shall be sent by CHA/Stevedoring Agent to the Associate Buyer for taking delivery of the rake.

//                   </p>

//                 </li>
//                  <li> <p className="text_sales">CHA/Stevedoring Agent shall inter-alia undertake the following tasks </p>
//                  <ul>
//                   <li>Arranging allotment of plot at the Discharge Port</li>
//                   <li>Customs Clearance of Cargo.</li>
//                   <li>Cargo discharge at Discharge Port</li>
//                   <li>Transportation to Plot</li>
//                   <li>Segregated stacking of cargo at plot grade wise</li>
//                   <li>Arranging security cover</li>
//                   <li>Placing Railway indents etc</li>
//                   <li>Loading on to wagons / trucks</li>
//                  </ul>
//                  </li>

//              </ol>
//              </li>
//                <li>
//               <p  className={`${styles.oderListParent_Head}`}>Inland Transportation</p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">The movement of goods from port to warehouse/ plot shall be made by an approved transporter under Transit Insurance Cover, taken by the Associate Buyer in favour of Seller or Seller's Nominated Bank, at the cost and risk of Associate Buyer.

//                  </p></li>
//                <li><p className="text_sales">The Goods shall be cleared and consigned directly to the plot/godown/warehouse (leased in favour of and/or in control of Seller) intended to store the goods in the name of Seller.

//                       </p></li>
//                 <li><p className="text_sales">The Associate Buyer shall be held solely liable and responsible for all consequences arising during loading and unloading of Goods at port, movement of goods from port to warehouse/godown/plot and unloading and/or storing of goods at warehouse/godown/plot, and dispatch to the works of the Associate Buyer. All loss in terms of variation in quality and/or quantity of goods shall be borne by Associate Buyer and Seller shall in no way be liable for the same.

//                   </p>

//                 </li>

//              </ol>
//              </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}>Independent Surveyor/Security </p>
//               <p className="text_sales">Seller will appoint an independent surveyor and/ or collateral manager at our own cost who will be present at the time of release of each consignment and will provide a daily report of the stock at godown/warehouse/plot. The CHA/Stevedoring and the Associate Buyer shall provide unrestricted and unfettered access to Seller's agent so appointed by Seller. CHA/Stevedoring, Associate Buyer, Seller and the Collateral Manager shall enter into an agreement detailing the rights and responsibility of each party. </p>
//             </li>
//              <li>
//               <p  className={`${styles.oderListParent_Head}`}>Payment before Completion of Due Date  </p>
//               <p className="text_sales">Associate Buyer shall pay for the entire material 3 working days before the due date as mentioned here in above. </p>
//             </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}>Title/Risk </p>
//               <p className="text_sales">Title to the Goods shall be deemed to have been transferred to the Associate Buyer and the Goods shall be deemed to be sold and delivered to the Associate Buyer only upon receipt by e Seller of the entire contract value. It is clarified that the Seller shall retain full legal ownership in the Goods, to secure the Associate Buyer's obligation to pay the entire contract value, until receipt by the Seller of the entire contract value. All risk of loss or damage thereto shall pass to the Associate Buyer as per INCO terms 2020.</p>
//             </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}>.	 Exchange Rate and Exchange Risk</p>
//               <p className="text_sales">If required, Seller will take forward cover from its Bank, in consultation with Associate Buyer, at the cost and risk of Associate Buyer. The exchange rate so decided, shall be acceptable to Associate Buyer.</p>
//             </li>
//              <li>
//               <p  className={`${styles.oderListParent_Head}`}>Right to Dispose off Goods </p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">In the event of any of the default of Terms &amp; conditions of this contract/delay/failure/refusal on the part of the Associate Buyer to pay the entire contractual value within the due date as aforesaid, and/or refusal to take delivery of the consignment for any reason whatsoever, Seller will be at liberty, but shall not be obligated, to sell the Goods to any other party at the cost, risk, expenses and responsibility of the Associate Buyer, without any reference to Associate Buyer. It has been agreed and undertaken by the Associate Buyer, that Associate Buyer shall not raise any objection to the method adopted by Seller to sell the said goods, in case Seller wishes to exercise its discretion under this clause. The amount so received by selling the Goods shall be adjusted towards the outstanding amount in the account of the Associate Buyer maintained by Seller. Any amount still due and payable by the Associate Buyer after such adjustment shall be payable by the Associate Buyer forthwith upon receipt of demand from Seller, failing which Seller shall have the right to recover the same by exercising any and/or all legal remedies available to Seller.

//                  </p></li>
//                <li><p className="text_sales">Any shortfall on account of such disposal of Goods and any loss incurred by Seller, including and not limited to, interest/ detention/ demurrage/ storage/ carrying charges, consequential damages after adjustment of amounts received by Seller shall be payable by the Associate Buyer forthwith upon receipt of demand from Seller failing which they will be liable to pay interest at the rate of 18% per annum on monthly rest basis. </p></li>
//                 <li><p className="text_sales">Pre-Berthing Delays, Demurrage, Dispatch Port dues and charges at Load Port/ Discharge port will be to Associate Buyer's account. </p>

//                 </li>
//                  <li><p className="text_sales">It is made clear that any profit made upon disposal of the goods to any third party under this clause, shall solely belong to Seller.</p></li>

//              </ol>
//              </li>
//              <li>
//               <p  className={`${styles.oderListParent_Head}`}> GST/Other Tax </p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">The GST Liability and issuance of certificates under the GST Act 2017 as applicable will be the responsibility of Associate Buyer. However, if any other tax liability is levied on this transaction on Seller, the same shall be reimbursed to Seller by Associate Buyer within 7 days of Seller notifying the Associate Buyer of the levy.

//                  </p></li>
//                <li><p className="text_sales">Withholding tax, if any will be to the account of Associate Buyer. Any excess/refund will be settled within a week's time after getting such advice from Seller. </p></li>
//                 <li><p className="text_sales">Associate Buyer to submit Form 27C (in original) to Seller on monthly basis, in advance in absence of form 27C, TCS @ 1% will be applicable on Sales Invoice. </p>

//                 </li>

//              </ol>
//              </li>

//             <li>
//               <p  className={`${styles.oderListParent_Head}`}>Notices</p>
//               <p className="text_sales">Any notice given under this Agreement, and/or any in other agreement emanating from this Agreement, shall be in writing and shall be served by email, registered mail or Speed Post only. The party's address for the service of notice shall be the above-mentioned address or such other address as specified by notice to the other party. The notice shall be deemed to have been served if it was served by post, 48 hours after it was posted.</p>
//             </li>
//             <li>
//               <p  className={`${styles.oderListParent_Head}`}> Arbitration</p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">Any dispute or difference, whatsoever, arising between the parties out of, or relating to, or incidental to the construction, meaning, scope, operation or effect of this Agreement; or the validity or the breach thereof, shall be settled by Arbitration by a Sole Arbitrator in accordance with Rules of Arbitration formulated by Indian Council of Arbitration (ICA) and the Associate Buyer agrees to submit to the said forum. The Award made in pursuance thereof shall be binding on the parties. The seat and venue of Arbitration will be New Delhi and the language of Arbitration Proceedings shall be in English.

//                  </p></li>
//                <li><p className="text_sales">In case there is any dispute, arising out of and/or pursuant to this Agreement, either between Associate Buyer and the Supplier and/ or the Supplier and Indo/Seller, the same shall be settled amicably directly by Associate Buyer with the Supplier, without any recourse to Indo/Seller. In case, such dispute is not settled amicably, any arbitration proceedings and/or other proceeding, which may be initiated by any of the Parties, shall be solely at the costs, risks and consequences of Associate Buyer and Seller shall in no manner be liable and responsible for the same.
//                 </p></li>
//                 <li><p className="text_sales">In case there is any dispute, arising out of and/or pursuant to this Agreement, either between Associate Buyer and the Supplier and/ or the Supplier and Indo/Seller, the same shall be settled amicably directly by Associate Buyer with the Supplier, without any recourse to Indo/Seller. In case, such dispute is not settled amicably, any arbitration proceedings and/or other proceeding, which may be initiated by any of the Parties, shall be solely at the costs, risks and consequences of Associate Buyer and Seller shall in no manner be liable and responsible for the same. </p>

//                 </li>

//              </ol>
//              </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}> Indemnification</p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">Associate Buyer agrees to defend, indemnify, keep indemnified and hold harmless, Seller  including, Seller 's directors, officers and employees from and/or against all and any claims, loss, damage, demands or cost including but not limited to taxes/duties damages, expenses, demurrage, penalties, liabilities, legal cost, no shipment, delayed shipment, short shipment, claims on account of quality/quantity/making/weight/specifications etc., of whatever nature, arising from but not limited to any action, omission, willful conduct, negligence and/or breach of any term or condition of this Agreement, on part of the Associate Buyer or Supplier. No claim shall be passed on to Seller or Indo either by Supplier or Associate Buyer.

//                  </p></li>
//                <li><p className="text_sales">All transit or storage losses on any account whatsoever, shall be borne by Associate Buyer and Seller shall in no way be liable for the same.

//                 </p></li>
//                 <li><p className="text_sales">Associate Buyer shall always abide by the laws of the State and Central Government as applicable/in force from time to time. Seller shall not be responsible for any repercussion on this Agreement on account of any change in Government Acts, Rules and Regulations, or for any failure on the part of the Supplier/Associate Buyer to comply with the same.</p>

//                 </li>
//                  <li><p className="text_sales">That it is made clear that Seller shall not be liable for any loss or damage emanating from the present Agreement unless specifically mentioned herein.</p>

//                 </li>

//              </ol>
//              </li>
//                <li>
//               <p  className={`${styles.oderListParent_Head}`}> 	Settlement of Accounts</p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">After conclusion of the deal i.e. receipt of the amounts due to Seller from Associate Buyer/remittance against the import &amp; receipt of RR copies and all other supporting documents related to domestic sale, the account maintained by Seller for the Associate will be settled as per the procedure followed by Seller.

//                  </p></li>
//                <li><p className="text_sales">In case after opening of Letter of credit by Indo, the supply contract with Supplier is cancelled for any reason whatsoever, IGI shall be entitled to receive from Associate Buyer all costs incurred by Indo and IGI along with its margin/ service charges + applicable GST rate + other costs etc.
//                 </p></li>

//              </ol>
//              </li>
//                <li>
//               <p  className={`${styles.oderListParent_Head}`}> General Dispute Clause</p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">In the event any dispute of whatsoever nature arises including but not limited to regarding the time schedule, quality, quantity and demurrage to the same, or difference between the parties, the liability thereto, if any, will be that of Associate Buyer. It is clearly understood between the Parties to the contract that any claim of whatever nature shall be settled between the Associate Buyer and the Supplier directly themselves without recourse to Seller as a party to the dispute.

//                  </p></li>

//              </ol>
//              </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}> Confidentiality</p>

//              <ol type="A" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">This contract, its provisions and existence, as well as any commercial data including price or technical data and any information provided in accordance herewith to the other party shall be considered as confidential. Such information shall not be disclosed to any third party unless required by any applicable law or authorized in writing by the other party.
//                </p></li>
//                <li><p className="text_sales">All such information shall be used by the other party only for the purpose of performance of this contract.
//                </p></li>
//                <li><p className="text_sales">The restrictions here-in-above shall not apply to any information generally available to the public or received in good faith from a third party without restriction. The parties hereto agree to keep as confidential all documentation furnished or received by either party at any time in connection with this contract.
//                </p></li>
//                 <li><p className="text_sales">This provision, as far as practicable, shall apply to all the concerned officials of either party.

//                </p></li>
//                 <li><p className="text_sales">This clause shall survive upon termination or conclusion of this Agreement.</p></li>

//              </ol>
//              </li>
//              <li>
//               <p  className={`${styles.oderListParent_Head}`}>Amendments</p>
//               <p className="text_sales">This Agreement shall not be amended, altered or modified, or any provision herein shall not be waived, except by an instrument in writing expressly referring to this Agreement and signed by the duly authorized representatives of both the Parties, and no verbal agreement or conduct of any nature related to the subject matter hereof or to the relationship between the Parties will be considered valid enforceable.</p>
//             </li>
//             <li>
//               <p  className={`${styles.oderListParent_Head}`}>Severability</p>
//               <p className="text_sales">If any part or provision of this Agreement not being a fundamental nature is held illegal or unenforceable, the validity of enforceability of the remainder of the Agreement shall not be affected if such part, term of provision is severable from the rest of the Agreement without altering the essence of this Agreement. If such part, term or provision is not so severable, then the whole of this Agreement shall stand terminated, unless the Parties thereupon negotiate in good faith in order to agree to the terms of a mutually satisfactory provision, achieving as nearly as possible the same commercial effect, to be substituted for the provision so found to be invalid, illegal or unenforceable.</p>
//             </li>
//              <li>
//               <p  className={`${styles.oderListParent_Head}`}>Breach of the Contract</p>
//               <p className="text_sales">In the event the Associate Buyer commits any breach of the terms of the agreement, then the  Seller may, by giving thirty (30) days prior written notice to the Associate Buyer, terminate this Agreement without any liability and charge to the Seller whatsoever. However, Associate Buyer shall remain liable to the Seller for making payment of the Goods already shipped by the Supplier at the instance of the Associate Buyer. </p>
//               <p className="text_sales">Provided further, the Parties hereto agree that the Seller may immediately terminate this Agreement without providing any notice to the Associate Buyer upon the Associate Buyer, or the Associate Buyer's shareholders commencing a voluntary proceeding under any applicable bankruptcy, insolvency, winding up or other similar law now or hereafter in effect (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the entry of an order for relief in an involuntary proceeding under any such law (including but not limited to the Insolvency and Bankruptcy Code, 2016), or consents to the appointment or taking possession by a resolution professional, Receiver, liquidator, assignee (or similar official) for any or a substantial part of its property; or the Associate Buyer has involuntarily become the subject of proceedings (including filing of an application/ petition for corporate insolvency resolution) under the Insolvency &amp; Bankruptcy Code, 2016 or an order has been made by the appropriate authority for winding up of the Associate Buyer.</p>
//             </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}> Special Conditions</p>

//              <ol type="i" className={`${styles.oderListChild}`}>
//                <li><p className="text_sales">It is expressly and unconditionally agreed and acknowledged by the and Associate Buyer that the title in the goods/ material shall pass on to the Associate Buyer only in respect of such specific quantity thereof as released from the storage facility by the CHA/Stevedoring under the Authorized Release Orders after receipt by the Seller of the price and other payables in respect thereof from the Associate Buyer and actual delivery of the goods having been made to the Associate Buyer. The Seller shall continue to be the owner, holding absolute title in the goods/material not so released and delivered to the Associate Buyer in any contingency including but not limited to Associate Buyer even becoming insolvent, and shall be entitled to deal with the goods/material as it may deem fit including disposing them off at the risk, costs  and consequences of the Associate Buyer. For the avoidance of doubt, the parties agree and acknowledge that the Goods shall not be in any manner whatsoever be construed to be in the constructive or actual possession of the Associate Buyer until receipt by the Seller of the entire contract value. The Associate Buyer specifically represents and agrees to not exercise any or all such possessory rights on the Goods until it makes payment of the entire contract value to the Selle
//                </p></li>
//                <li><p className="text_sales">It is specifically agreed that the Associate Buyer shall accept the goods on no complaint basis with regard to quality, quantity, mix-up, shortage and/or any other claims. The Seller shall in no way be responsible or liable for the quality, quantity, shortage or any other claims with respect to the Goods supplied by the Supplier and/or any other claim associated or related to this transaction. All such claims shall be lodged, pursued and settled directly between the Associate buyer and Supplier with no liability whatsoever upon Indo and/or the Seller.
//                </p></li>
//                <li><p className="text_sales">The Associate Buyer agrees and acknowledges that the sale of Goods under this Sales Contract is necessary to maintain the Associate Buyer as a going concern and to continue its business operations and consequently, it has requested the Seller to supply goods in accordance with the terms of this Sales Contract. Further, the Associate Buyer agrees and acknowledges that in the event that it is subject to a corporate insolvency resolution process (“CIRP”) under the provisions of the Insolvency and Bankruptcy Code, 2016 (“IBC”) or any other analogous creditors process under applicable law, it (either through itself or through any resolution professional/interim resolution professional appointed to manage its operations pursuant to the IBC) shall make payments of all outstanding amounts due to the Seller under this Sales Contract notwithstanding any general moratorium in relation to the Associate Buyer.

//                </p></li>
//                 <li><p className="text_sales">Notwithstanding anything contained herein to the contrary, all risks, consequences arising out of the actual transaction(s) taking place between Supplier and Indo, Indo and Seller, Seller and Associate Buyer under the contract and/or any modified/amended agreement will be to the account of the Associate Buyer only. Indo/Seller shall in no way be responsible or liable for the same.

//                </p></li>
//                 <li><p className="text_sales">The Associate Buyer undertakes to ensure that all payments to be made to Seller in furtherance of this Agreement or any similar agreements shall be treated as direct cost of production (budgeted operating expenses) and as a ‘insolvency resolution process cost' under the Insolvency and Bankruptcy Code, 2016 at all times during the entire term of any such agreements (including this Agreement). If Associate Buyer has or avails any debt or enters into any arrangement with any of its lenders for the plant or otherwise, including any restructuring arrangements of existing debt, it shall ensure that all payments to be made to Seller shall be treated as ‘direct cost of production' and ‘insolvency resolution process costs' and shall have priority over any financial or operational debt service payments of Associate Buyer. Further, the Associate Buyer shall: (A) not create any lien, or any other encumbrance or security over the goods in favour of its lenders or any other person, without the prior written approval of the Seller and (B) ensure that, if Seller has consented to creation of lien, or any other encumbrance or security as aforesaid, Seller's written consent is taken prior to enforcement of such lien, or any other encumbrance or security. The Associate Buyer hereby agrees and affirms that the aforesaid approval(s) may be granted at the Seller's sole and absolute discretion.</p></li>
//                 <li><p className="text_sales">The Associate Buyer undertakes to ensure that all payments to be made to Seller in furtherance of this Agreement or any similar agreements shall be treated as direct cost of production (budgeted operating expenses) and as a ‘insolvency resolution process cost' under the Insolvency and Bankruptcy Code, 2016 at all times during the entire term of any such agreements (including this Agreement). If Associate Buyer has or avails any debt or enters into any arrangement with any of its lenders for the plant or otherwise, including any restructuring arrangements of existing debt, it shall ensure that all payments to be made to Seller shall be treated as ‘direct cost of production' and ‘insolvency resolution process costs' and shall have priority over any financial or operational debt service payments of Associate Buyer. Further, the Associate Buyer shall: (A) not create any lien, or any other encumbrance or security over the goods in favour of its lenders or any other person, without the prior written approval of the Seller and (B) ensure that, if Seller has consented to creation of lien, or any other encumbrance or security as aforesaid, Seller's written consent is taken prior to enforcement of such lien, or any other encumbrance or security. The Associate Buyer hereby agrees and affirms that the aforesaid approval(s) may be granted at the Seller's sole and absolute discretion.</p></li>
//                   <li><p className="text_sales">The Associate Buyer shall not assign or transfer this Agreement or all or any part of its rights or obligations hereunder to any person, firm or corporation without the prior written consent of Seller. Notwithstanding anything to the contrary contained in this Agreement, for avoidance of any doubts, if Associate Buyer decides to enter into any binding legal agreement with any person which will have the effect of a change in Control of or sale of any material assets of Associate Buyer (such agreement, “Change of Control Agreement”), then Associate Buyer shall immediately notify Seller prior to execution of any Change of Control Agreement (“Change of Control Notice”).  Within sixty (60) days from the receipt of the Change of Control Notice (“Option Period”), Seller shall have the right to cause Associate Buyer to purchase and pay for all of the Goods imported by Seller for Associate Buyer or terminate any agreement (including, without limitation, this Agreement) for sale of the Goods (“Change of Control Option”) and Associate Buyer agrees that during such Option Period, the Associate Buyer shall not execute any such Change of Control Agreement. The Associate Buyer further acknowledges and unconditionally agrees to pay for all Goods imported by the Seller for the Associate Buyer within 7 days of exercise by the Seller of the Change of Control Option. “Control” for the purposes of this Clause shall mean (including, with correlative meanings, the terms “controlled by” and “under common control with”), as applied to any person, the possession, direct or indirect, of the power to direct or cause the direction of the management and policies of such person, whether through the ownership of voting securities or other ownership interest, the power to constitute majority of the board of directors (or similar governing body) of such person, by contract or otherwise;

//                </p></li>

//              </ol>
//              </li>
//               <li>
//               <p  className={`${styles.oderListParent_Head}`}> Force Majeur</p>
//               <p className="text_sales">That Seller shall not be liable for any damages to loss on account of Force Majeure, as defined herein below. However, the Associate Buyer shall at all times remain liable for payment of the Goods to Seller.
//              </p>
//               <p className="text_sales">“Force Majeure Events” means any event, act or performance which is beyond the control of a party, which includes but not limited to, war, invasion, act of foreign enemies, terrorist activities, nationalization, force majeure declared by Shipper/Supplier, government acquisition or sanctions, blockage, embargo, strike, lockout, interruption or failure of power source, act of God (including fire, flood, earthquake, storm, hurricane or other natural disaster), pandemic, epidemic, civil disobedience, riots, flood, etc.</p>
//             </li>
//              <li>
//               <p  className={`${styles.oderListParent_Head}`}>  Waiver</p>
//               <p className="text_sales">That Seller shall not be liable for any damages to loss on account of Force Majeure, as defined herein below. However, the Associate Buyer shall at all times remain liable for payment of the Goods to Seller.
//              </p>
//               <p className="text_sales">Failure of either Party at any time to require performance of any provision of this Agreement shall not affect the right to require full performance thereof, at any time thereafter, and the waiver by any party of a breach of any provision shall not be taken to be a waiver of any subsequent breach thereof, or as nullifying the effectiveness of such provision.
//             </p>
//             </li>

//             </ol>
//             <Row>
//               <Col md={6}><span>For &amp; on behalf of Associate Buyer  </span></Col>
//               <Col md={6}>For &amp; on behalf <GrowInput className={`${styles.para} input`} placeholder="Indo German International Private Limited"></GrowInput> </Col>
//             </Row>
//               <p className="text_sales" >Name: <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//               <p className="text_sales" >  Designation:<GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//               <p className="text_sales" >  Company Stamp:<GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//                <p className="text_sales" >  WITNESSES:  </p>
//               <ol type="1">
//                 <li>  <p className="text_sales" >Name Designation: <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p></li>
//                  <li>  <p className="text_sales" >Name Designation: <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p></li>
//               </ol>
//               <div>
//                  <p className="text_sales" > <strong>Schedule 2A</strong></p>
//              <p className="text_sales" > <strong>Undertaking by Associate Buyer for Price Justification</strong></p>
//              <p className="text_sales" >To: <GrowInput className={`${styles.para} input`} placeholder="to"></GrowInput></p>
//              <p className={`text_sales ${styles.center}`}>UNDERTAKING</p>
//              <p className="text_sales" > 1. We, being the Associate Buyer have to solemnly affirm and undertake as under:</p>
//              <ol type="a">
//                  <li>  <p className="text_sales" >That we have negotiated with the Supplier for supply of the Goods through Indo/ Seller.</p></li>
//                  <li>  <p className="text_sales" >That we have requested Indo German International Private Limited (“IGI”) to import on our behalf the Goods and sell the same to us on stock and sale basis as per Associateship Agreement. We confirm and undertake that all the terms &amp; conditions of the Sales Contract entered into between Indo and the Supplier (“hereinafter referred to as “Sales Contract”) are acceptable and binding on us.</p></li>
//                  <li>
//                   <ol type="1">
//                     <li> <p className="text_sales" >That the price indicated in the Sales Contract is neither under-invoiced nor over-invoiced and is as per prevailing international rates for the above-mentioned item and is at par with prices at which item of similar quality being imported into India.</p></li>
//                     <li> <p className="text_sales" >We undertake to ensure that the item to be shipped by the Supplier shall be strictly as per description &amp; quality indicated in the Sales Contract notwithstanding the inspection report/ quality certificate/ Survey report furnished by the Supplier for the subject consignment. We shall be held solely liable and responsible for all consequences arising out of variation between item/quality/quantity contracted for &amp; actually shipped and we undertake to indemnify and hold harmless Indo/Seller in this regard at all times. </p></li>
//                     <li> <p className="text_sales" >We undertake to accept the goods from Seller/Indo on ‘no complaint basis' with regard to quality, quantity and/or any other claims including shortage. Seller/Indo shall in no way be responsible or liable for the quality, quantity or any other claim pertaining to the Goods being supplied by the Supplier and/or any other claim relating to this transaction. It is our sole responsibility in settling the quality, quantity or other claims pertaining to this transaction directly with the Supplier and/or Custom House Agent (CHA) appointed by Seller, with no liability whatsoever upon Seller/Indo.</p></li>
//                   </ol>
//                  </li>
//               </ol>
//               <p className={`text_sales ${styles.right}`}>For &amp; on behalf of the Associate Buyer
// </p>
//                <Row>
//               <Col md={6}>
//               <p className="text_sales" >For: <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//               <p className="text_sales" >Date: <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//               </Col>
//               <Col md={6}>
//               <p className="text_sales" >Name : <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//               <p className="text_sales" >Designation: <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//               </Col>
//             </Row>
//               </div>
//               <div>
//                  <p className="text_sales" > <strong>Schedule 2B</strong></p>
//              <p className="text_sales" > <strong>Undertaking for Post Dated Cheques issued by Associate Buyer
// </strong></p>
//              <p className="text_sales" > <GrowInput className={`${styles.para} input`} placeholder="to"></GrowInput></p>
//              <p className={`text_sales ${styles.center}`}>UNDERTAKING</p>

//              <ol type="1">
//                  <li>  <p className="text_sales" >That we, being the Associate Buyer have entered into the Associateship Agreement with Seller </p></li>
//                  <li>  <p className="text_sales" >That as requested by us, the Supplier shall sell the Goods to Indo and Indo will establish Letter of Credit in favour of the Supplier and make payment to the Supplier for the Goods. Indo shall sell the Goods to Seller and Seller shall sell the same to the Associate Buyer in terms of the said Associateship Agreement. The Sales Contract and the Associateship Agreement shall jointly be referred to as “Contracts”</p></li>
//                   <li>  <p className="text_sales" >That the present Undertaking is being executed in pursuance of the Contracts being entered into by Indo and Seller on our request. It is pertinent to mention that the terms of the Associateship Agreement be read as a part of this Undertaking</p></li>
//                    <li>  <p className="text_sales" >We enclose herewith the following Post-Dated Cheque(s) as per details in Schedule 2B-1. In pursuance of the above, we authorize Seller to present the Post-Dated Cheques on due date and present the same with its Banker, without any notice to us</p></li>
//                     <li>  <p className="text_sales" >That, the undersigned being the Managing Director of the Associate Buyer duly authorised by the resolution of the Board of Directors (copy enclosed herewith), do hereby undertake as under

// </p></li>
//                  <li>
//                   <ul type="1">
//                     <li> <p className="text_sales" >To pay the balance/outstanding amount in respect of the above-mentioned transaction on the first demand of Seller without recourse, demur and protest.</p></li>
//                     <li> <p className="text_sales" >To honour the cheque(s) on their presentation on due dates.</p></li>
//                     <li> <p className="text_sales" >That we will not intimate the bankers to stop the payment of the aforesaid cheques delivered to Seller under any circumstances.</p></li>
//                      <li> <p className="text_sales" >That we will not intimate the bankers to stop the payment of the aforesaid cheques delivered to Seller under any circumstances.</p></li>
//                       <li> <p className="text_sales" >That, we have duly complied with the Positive Payment Service as per RBI circular dated 25th September 2020 by intimating our bank about the details of the Post-Dated Cheques issued to Seller.
//                     </p></li>

//                      <li> <p className="text_sales" >That, we shall not to close the account from which the cheques have been issued without the prior permission of Seller in writing.

//                     </p></li>
//                      <li> <p className="text_sales" >That, we, shall not give Seller any notice requesting them not to present the cheques delivered to them.</p></li>
//                       <li> <p className="text_sales" >That, we, further undertake not to bring into effect any change in the Authorized Signatories without taking prior written consent of Seller or to do anything which makes the above cheques/claim of Seller redundant.</p></li>
//                   </ul>
//                  </li>
//                  <li> <p className="text_sales" >We further confirm that we are very much aware of the liability that has accrued on us by way of the Associateship Agreement by virtue of which Seller has agreed to import the Goods.

// </p></li>
//                  <li> <p className="text_sales" >TWe further confirm that if we fail to pay the balance amount of liability due to Seller, in respect of aforesaid Agreement, Seller will have unfettered/unconditional right to encash the said cheque(s), without any notice to us
// </p></li>
//                  <li> <p className="text_sales" >The calculation of the Post-Dated Cheques is based on the estimated contract value, However Actual Stevedoring/CHA, Port Charges, Plot Rental, Wharfage etc. to be borne and paid by us directly</p></li>
//                  <li> <p className="text_sales" >In any event of our failure to perform the Associateship Agreement in accordance with its terms including default in honouring the cheques on presentation, Seller shall have the right to file appropriate civil and/or criminal proceedings against us in the Courts of the Jurisdiction as per your sole discretion. We unconditionally and irrevocably waive our right to raise objection to such proceedings on any grounds whatsoever.
// </p></li>
//               </ol>
//               <p className={`text_sales ${styles.right}`}> FOR AND ON BEHALF OF
// 	Associate Buyer

// </p>
//                <Row>
//               <Col md={6}>

//               <p className="text_sales" >Date: <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//               </Col>
//               <Col md={6}>
//               <p className="text_sales" >Name : <GrowInput className={`${styles.para} input`} placeholder="Name"></GrowInput></p>
//               <p className="text_sales" >MANAGING DIRECTOR</p>
//               </Col>
//             </Row>
//               </div>
//               <div>
//                     <p className="text_sales" > <strong>Schedule 2B-I</strong></p>
//                     <p className="text_sales" > <strong>Details of the Post-dated cheques-</strong></p>
//                     <table className={`${styles.table} table`}
//                   cellPadding="0"
//                   cellSpacing="0"
//                  >
//                       <tr>
//                         <th>S No</th>
//                         <th>Bank Name</th>
//                         <th>Cheque No</th>
//                         <th>Cheque Date</th>
//                         <th>Amount</th>
//                       </tr>
//                       <tbody>
//                         <tr>
//                           <td></td>
//                            <td></td>
//                             <td></td>
//                              <td></td>
//                               <td></td>
//                         </tr>
//                           <tr>
//                           <td></td>
//                            <td></td>
//                             <td></td>
//                              <td></td>
//                               <td></td>
//                         </tr>
//                           <tr>
//                           <td></td>
//                            <td></td>
//                             <td></td>
//                              <td></td>
//                               <td></td>
//                         </tr>
//                           <tr>
//                           <td></td>
//                            <td></td>
//                             <td></td>
//                              <td></td>
//                               <td></td>
//                         </tr>
//                           <tr>
//                           <td></td>
//                            <td></td>
//                             <td></td>
//                              <td></td>
//                               <td></td>
//                         </tr>
//                       </tbody>
//                     </table>
//               </div>
//                <div>
//               <p className="text_sales" > <strong>Schedule 3</strong></p>
//              <p className="text_sales" > <strong>Pricing formula</strong></p>

//              <p className="text_sales" > Unit Price: <GrowInput className={`${styles.para} input`} placeholder="to"></GrowInput></p>
//               <p className="text_sales" > Quantity:
//                           <GrowInput className={`${styles.para} input`} placeholder="to"></GrowInput></p>
//                            <p className="text_sales" > <strong>Tentative Exchange Rate for Calculation:
//                         </strong></p>
//                             <p className="text_sales" > <strong>Currency exchange:</strong></p>

//               <p className="text_sales" > Provisional basic Price in INR for invoicing by Seller on Associate Buyer will be calculated as under: </p>
//                 <p className="text_sales" > Import Price Per Ton, Insurance Premium Cost, Basic Customs Duty, Social Welfare Cess, IGST, GST Compensation cess, CIMS charges and any other duty, cost and/or charges, LC Opening Charges, Custodian Charges (CMA), Usance Interest, trade margin of the Seller, as applicable </p>
//                   <p className="text_sales" >Cess, GST, TCS @ 1%, CIMS Charges etc., shall be borne by the Associate Buyer including payment to the Associate Buyer's nominated Stevedoring Handling Agent, M/s ……………………………………………………………. purpose of allocating the plot to the Seller, arranging discharge, movement and delivery of cargo to the Associate Buyer strictly against the written delivery order issued by Seller. All responsibility risk, damage, shortage, Quality Issues if any in this regard is the sole responsibility of the Associate Buyer. The expenses for such services shall also be borne by the Associate Buyer and will be included in the sale price of Goods/Services </p>
//                   <p className="text_sales" >The INR: USD exchange rate price will be taken as above for calculation purpose. The final invoicing will be done in INR and the INR price shall be calculated on basis exchange rate at which the payment of Import is made or forward is booked. The exchange rate difference loss or gain both will be to the Associate Buyer account. </p>
//                    <p className="text_sales" >The final price so worked out shall be reflected in the last invoice carrying out all adjustments regarding exchange rate variation / expenses &amp; charges.</p>

//               </div>
//                <div>
//               <p className="text_sales" > <strong>Schedule 4</strong></p>
//              <p className="text_sales" > <strong>Advance Payment by Associate Buyer </strong></p>

//               <p className="text_sales" > he Associate Buyer shall make payment of ____% of the total Contract Value along with trade margin and Usance Interest as Advance, prior to opening of LC by Indo on the Supplier.
//  </p>
//                 <p className="text_sales" >Indo will open the LC in favor of Supplier within 5 working days of receipt of the Advance as stated herein.
//  </p>
//                   <p className="text_sales" >The margin money shall be adjusted at the time of issuance of the last release order.
//  </p>
//                   <p className="text_sales" >The INR: USD exchange rate price will be taken as above for calculation purpose. The final invoicing will be done in INR and the INR price shall be calculated on basis exchange rate at which the payment of Import is made or forward is booked. The exchange rate difference loss or gain both will be to the Associate Buyer account.It is expressly clarified that the margin money @..................% shall be maintained on Mark-to-Market (M2M) basis on the prevailing exchange rate of INR: USD and market price of the commodity.  In the event of shortfall in the margin money, Seller have the right &amp; the Associate Buyer has the obligation to pay the shortfall amount forthwith in any case not later than 5 days from the date of such demands.The final price so worked out shall be reflected in the last invoice carrying out all adjustments regarding exchange rate variation / expenses &amp; charges.</p>

//               </div>

//           </div>
//   )
// }

const underTaking1 = (data, preview, setPreviewValue) => {
  return (
    <>
      <div className={`${styles.cardBody} card-body pt-3`} style={{ minHeight: 'auto', flex: '0 0 auto' }}>
        <p className="text-center text_sales">
          {' '}
          <strong>Undertaking for Post-dated Cheques issued by Associate Buyer</strong>
        </p>
        <p className="text-left text_sales ml-4 d-flex align-items-start">
          {' '}
          <span className="mb-0">To:</span>{' '}
          <span className="ml-4">
            <u>
              Indo German International Private Limited,
              <br />
              7A, Sagar Apartments, 6, Tilak Marg,
              <br />
              New Delhi
            </u>
          </span>
        </p>
        <p className="text-center text_sales">
          {' '}
          <strong>
            <u>UNDERTAKING</u>
          </strong>
        </p>
        <ol type="1">
          <li>
            <p className="text_sales">
              That we, being the Associate Buyer have entered into the Associateship Agreement with Seller.{' '}
            </p>
          </li>
          <li>
            <p className="text_sales">
              That as requested by us, the Supplier shall sell the Goods to <u>Indo</u> and <u>Indo</u> will establish
              Letter of Credit in favour of the Supplier and make payment to the Supplier for the Goods. <u>Indo</u>{' '}
              shall sell the Goods to Seller and Seller shall sell the same to the Associate Buyer in terms of the said
              Associateship Agreement. The Sales Contract and the Associateship Agreement shall jointly be referred to
              as “Contracts”.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That the present Undertaking is being executed in pursuance of the Contracts being entered into by{' '}
              <u>Indo</u> and Seller on our request. It is pertinent to mention that the terms of the Associateship
              Agreement be read as a part of this Undertaking.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We enclose herewith the following post-dated Cheque(s) as per details in <strong>Schedule I</strong>. In
              pursuance of the above, we authorize Seller to present the post-dated cheques on due date and present the
              same with its Banker, without any notice to us.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That, the undersigned being the Authorised Signatory of the Associate Buyer, do hereby undertake as under:
            </p>
            <ul type="disc">
              <li>
                <p className="text_sales">
                  To pay the balance/outstanding amount in respect of the above-mentioned transaction on the first
                  demand of Seller without recourse, demur and protest.
                </p>
              </li>
              <li>
                <p className="text_sales">To honour the cheque(s) on their presentation on due dates.</p>
              </li>
              <li>
                <p className="text_sales">
                  That we will not intimate the bankers to stop the payment of the aforesaid cheques delivered to Seller
                  under any circumstances.
                </p>
              </li>
              <li>
                <p className="text_sales">
                  That, we have duly complied with the Positive Payment Service as per RBI circular dated 25th September
                  2020 by intimating our bank about the details of the post-dated cheques issued to Seller.
                </p>
              </li>
              <li>
                <p className="text_sales">
                  That, we shall not close the account from which the cheques have been issued without the prior
                  permission of Seller in writing.
                </p>
              </li>
              <li>
                <p className="text_sales">
                  That, we, shall not give Seller any notice requesting them not to present the cheques delivered to
                  them.
                </p>
              </li>
              <li>
                <p className="text_sales">
                  That, we, further undertake not to bring into effect any change in the Authorized Signatories without
                  taking prior written consent of Seller or to do anything which makes the above cheques/claim of Seller
                  redundant.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="text_sales">
              We further confirm that we are very much aware of the liability that has accrued on us by way of the
              Associateship Agreement by virtue of which Seller has agreed to import the Goods.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We further confirm that if we fail to pay the due and outstanding amounts due to Seller, in respect of
              aforesaid Agreement, Seller will have unfettered/unconditional right to encash the said cheque(s), without
              any notice to us.
            </p>
          </li>
          <li>
            <p className="text_sales">
              The calculation of the Post-dated Cheques is based on the contract value, any additional amounts, if
              payable by us will be paid upfront. Further, Actual Stevedoring/CHA, Port Charges, Plot Rental, Wharfage
              etc. to be borne and paid by us directly.
            </p>
          </li>
          <li>
            <p className="text_sales">
              In any event of our failure to perform the Associateship Agreement in accordance with its terms including
              default in honoring the cheques on presentation, Seller shall have the right to file appropriate civil
              and/or criminal proceedings against us in the Courts of the Jurisdiction as per your sole discretion. We
              unconditionally and irrevocably waive our right to raise objection to such proceedings on any grounds
              whatsoever.
            </p>
          </li>
        </ol>

        <p className="text-center text_sales">
          {' '}
          <strong>Schedule I</strong>
        </p>
        <p className="text_sales pb-3">
          <u>Details of post-dated Cheque(s)-</u>
        </p>
        <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={1} className={`${styles.left} border_black`}>
              <strong>S No</strong>
            </Col>
            <Col md={4} className={`${styles.left} border_black`}>
              <strong>Bank Name</strong>
            </Col>
            <Col md={2} className={`${styles.left} border_black`}>
              <strong>Cheque No</strong>
            </Col>
            <Col md={2} className={`${styles.left} border_black`}>
              <strong>Cheque Date</strong>
            </Col>
            <Col md={3} className={styles.right}>
              <strong>Amount</strong>
            </Col>
          </Row>

          {data.cheque.length > 0 &&
            data.cheque.map((val, index) => {
              return (
                <Row className={`${styles.row} border_black`}>
                  <Col md={1} className={`${styles.left} border_black`}>
                    {val.sNo}
                  </Col>
                  <Col md={4} className={`${styles.left} border_black`}>
                    {val.bankName}
                  </Col>
                  <Col md={2} className={`${styles.left} border_black`}>
                    {val.chequeNo}
                  </Col>
                  <Col md={2} className={`${styles.left} border_black`}>
                    {moment(val.chequeDate).format('DD-MM-YYYY')}
                  </Col>
                  <Col md={3} className={styles.right}>
                    {val.amount}
                  </Col>
                </Row>
              );
            })}

          {/* <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data?.dateOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data?.placeOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyer}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.associateBuyerAddress?.fullAddress},
              {data.associateBuyerAddress?.city}{" "} 
              {data.associateBuyerAddress?.country},{" "}
              
              {data.associateBuyerAddress?.pinCode}
             
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              GST of Associate Buyerager
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyerGst}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              PAN of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyerPan}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Signatory of Associate Buyer
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
              Name of Stevedore
            </Col>
            <Col md={7} className={styles.right}>
              {data?.stevedore}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Stevedore
            </Col>
            <Col md={7} className={styles.right}>
             {data.stevedoreAddress?.fullAddress},
              {data.stevedoreAddress?.city}{" "} 
              {data.stevedoreAddress?.country},{" "}
              
              {data.stevedoreAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Signatory of Stevedore
            </Col>
            <Col md={7} className={styles.right}>
             <ol>
              {data?.stevedoreAuthorized?.length > 0 &&
                data?.stevedoreAuthorized?.map((val, index) => {
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
              Name of CMA Agent
            </Col>
            <Col md={7} className={styles.right}>
              {data.cma}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of CMA Agent
            </Col>
            <Col md={7} className={styles.right}>
              {data.cmaAddress?.fullAddress},
              {data.cmaAddress?.city}{" "} 
              {data.cmaAddress?.country},{" "}
              
              {data.cmaAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Signatory of CMA Agent
            </Col>
            <Col md={7} className={styles.right}>
               <ol>
              {data?.cmaAuthorized?.length > 0 &&
                data?.cmaAuthorized?.map((val, index) => {
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
              Commodity Details
            </Col>
            <Col md={7} className={styles.right}>
              {data?.detailsOfComm}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Quantity
            </Col>
            <Col md={7} className={styles.right}>
              {data?.quan}
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
              Details of Vessel
            </Col>
            <Col md={7} className={styles.right}>
              {data?.vessel}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Port of Loading
            </Col>
            <Col md={7} className={styles.right}>
              {data?.lordPort}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Port of Discharge
            </Col>
            <Col md={7} className={styles.right}>
              {data?.dischargePort}
            </Col>
          </Row>
          <Row className={`${styles.row} ${styles.last}`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Storage Plot allotted to IGI
            </Col>
            <Col md={7} className={styles.right}>
              {data.storagePlot}
            </Col>
          </Row> */}
        </div>

        <div className={`row`}>
          <Col md={6} className="offset-md-6">
            <p className="text_sales">FOR AND ON BEHALF OF</p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">Place:</p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>(Associate Buyer)</strong>
              <br />
              <br />
              Name………………………
            </p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">Date : ………………</p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">AUTHORISED SIGNATORY</p>
          </Col>
        </div>
      </div>
      {preview !== 'UNDERTAKING1' ? (
        <>
          <div
            className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`}
          >
            <div className={`${styles.approve} mr-3`}>
              <span
                className="mb-0"
                onClick={(e) => {
                  sessionStorage.setItem('preview', JSON.stringify(data));

                  Router.push('agreement/preview');
                  setPreviewValue('UNDERTAKING1');
                }}
              >
                Preview
              </span>
            </div>
            <div className={styles.reject}>
              <span className="mb-0">Save</span>
            </div>
            <div className={styles.approve}>
              <span className="mb-0">Submit</span>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
const underTaking2 = (data, preview, setPreviewValue) => {
  return (
    <>
      <div className={`${styles.cardBody} card-body pt-3`} style={{ minHeight: 'auto', flex: '0 0 auto' }}>
        <p className="text-center text_sales">
          {' '}
          <strong>Undertaking by Associate Buyer for Price, Quality &amp; Quantity</strong>
        </p>
        <p className="text-left text_sales ml-4 d-flex align-items-start">
          {' '}
          <span className="mb-0">To:</span>{' '}
          <span className="ml-4">
            <u>
              Indo German International Private Limited,
              <br />
              7A, Sagar Apartments, 6, Tilak Marg,
              <br />
              New Delhi
            </u>
          </span>
        </p>
        <p className="text-center text_sales">
          {' '}
          <strong>
            <u>UNDERTAKING</u>
          </strong>
        </p>
        <ol type="1">
          <p className="text_sales">We being the Associate Buyer, do solemnly affirm and undertake as under:</p>
          <li>
            <p className="text_sales">
              That we have negotiated with the Supplier for supply of the Goods through Indo/ Seller.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That we have requested <u>Indo German International Private Limited </u>
              (“IGI/ Seller”) to import on our behalf the Goods and sell the same to us on stock and sale basis as per
              Associateship Agreement. We confirm and undertake that all the terms &amp; conditions of the Sales
              Contract entered into between <u>Indo</u> and the Supplier (hereinafter referred to as “Sales Contract”)
              are acceptable and binding on us.
            </p>
          </li>
          <li>
            <p className="text_sales">
              That the price indicated in the Sales Contract is neither under-invoiced nor over-invoiced and is as per
              prevailing international rates for the above-mentioned item and is at par with prices at which item of
              similar quality being imported into India.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We undertake to ensure that the item to be shipped by the Supplier shall be strictly as per description
              &amp; quality indicated in the Sales Contract notwithstanding the inspection report/ quality certificate/
              Survey report furnished by the Supplier for the subject consignment. We shall be held solely liable and
              responsible for all consequences arising out of variation between item/quality/quantity contracted for
              &amp; actually shipped and we undertake to indemnify and hold harmless Indo/Seller in this regard at all
              times.
            </p>
          </li>
          <li>
            <p className="text_sales">
              We undertake to accept the goods from Seller/<u>Indo</u> on 'no complaint basis' with regard to quality,
              quantity and/or any other claims including shortage. Seller/<u>Indo</u> shall in no way be responsible or
              liable for the quality, quantity or any other claim pertaining to the Goods being supplied by the Supplier
              and/or any other claim relating to this transaction. It is our sole responsibility in settling the
              quality, quantity or other claims pertaining to this transaction directly with the Supplier and/or Custom
              House Agent (CHA), with no liability whatsoever upon Seller/<u>Indo</u>.
            </p>
          </li>
        </ol>
        {/* <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data?.dateOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution
            </Col>
            <Col md={7} className={styles.right}>
              {data?.placeOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyer}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.associateBuyerAddress}
             
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              GST of Associate Buyerager
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyerGst}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              PAN of Associate Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.associateBuyerPan}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Signatory of Associate Buyer
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
              Name of Stevedore
            </Col>
            <Col md={7} className={styles.right}>
              {data?.stevedore}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Stevedore
            </Col>
            <Col md={7} className={styles.right}>
             {data.stevedoreAddress?.fullAddress},
              {data.stevedoreAddress?.city}{" "} 
              {data.stevedoreAddress?.country},{" "}
              
              {data.stevedoreAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Signatory of Stevedore
            </Col>
            <Col md={7} className={styles.right}>
             <ol>
              {data?.stevedoreAuthorized?.length > 0 &&
                data?.stevedoreAuthorized?.map((val, index) => {
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
              Name of CMA Agent
            </Col>
            <Col md={7} className={styles.right}>
              {data.cma}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of CMA Agent
            </Col>
            <Col md={7} className={styles.right}>
              {data.cmaAddress?.fullAddress},
              {data.cmaAddress?.city}{" "} 
              {data.cmaAddress?.country},{" "}
              
              {data.cmaAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Signatory of CMA Agent
            </Col>
            <Col md={7} className={styles.right}>
               <ol>
              {data?.cmaAuthorized?.length > 0 &&
                data?.cmaAuthorized?.map((val, index) => {
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
              Commodity Details
            </Col>
            <Col md={7} className={styles.right}>
              {data?.detailsOfComm}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Quantity
            </Col>
            <Col md={7} className={styles.right}>
              {data?.quan}
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
              Details of Vessel
            </Col>
            <Col md={7} className={styles.right}>
              {data?.vessel}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Port of Loading
            </Col>
            <Col md={7} className={styles.right}>
              {data?.lordPort}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Port of Discharge
            </Col>
            <Col md={7} className={styles.right}>
              {data?.dischargePort}
            </Col>
          </Row>
          <Row className={`${styles.row} ${styles.last}`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Storage Plot allotted to IGI
            </Col>
            <Col md={7} className={styles.right}>
              {data.storagePlot}
            </Col>
          </Row>
        </div> */}
        <div className={`row`}>
          <Col md={6} className="offset-md-6">
            <p className="text_sales">
              <strong>FOR & ON BEHALF OF</strong>
            </p>
          </Col>
        </div>
        <div className={`row`}>
          <Col md={6} className="offset-md-6">
            <p className="text_sales">
              <strong>(Associate Buyer)</strong>
            </p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                <u>Place:</u>
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                <u>Name:</u>
              </strong>
            </p>
          </Col>
        </div>
        <div className={`row my-4`}>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                <u>Date:</u>
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <p className="text_sales m-0">
              <strong>
                <u>Designation:</u>
              </strong>
            </p>
          </Col>
        </div>
      </div>
      {preview !== 'UNDERTAKING2' ? (
        <>
          <div
            className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`}
          >
            <div className={`${styles.approve} mr-3`}>
              <span
                className="mb-0"
                onClick={(e) => {
                  sessionStorage.setItem('preview', JSON.stringify(data));

                  Router.push('agreement/preview');
                  setPreviewValue('UNDERTAKING2');
                }}
              >
                Preview
              </span>
            </div>
            <div className={styles.reject}>
              <span className="mb-0">Save</span>
            </div>
            <div className={styles.approve}>
              <span className="mb-0">Submit</span>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
