import styles from '@/components/AssignmentLetter/index.module.scss';
import { Col, Row } from 'react-bootstrap';

export default function AssignmentLetter(data) {
  return (
    <>
      <div className="card-body">
        <p className="text-center text_sales">
          <strong>
            Assignment Letter between Seller, Buyer and Supplier
          </strong>
        </p>
        <p className="text_sales">
          This Assignment Letter is made at the place and on the day as set out in <strong>Schedule I</strong> hereto by and between:
        </p>
        <p className="text_sales">
          <strong>Seller</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Seller</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the First Part.
        </p>
        <p className=" text-center text_sales">And</p>
        <p className="text_sales">
          <strong>Buyer</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Buyer</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the Second Part.
        </p>
        <p className=" text-center text_sales">And</p>
        <p className="text_sales">
          <strong>Supplier</strong>(s), as detailed in <strong>Schedule-I</strong> hereof (hereinafter referred to as the “<strong>Supplier</strong>”, which expression shall, unless excluded by or repugnant to the context be deemed to include its legal heirs, successors and permitted assigns) of the Third Part.
        </p>
        <p className="text_sales">
          WHEREAS it is hereby agreed that the Supplier accepts that the payment of the goods shall be made by way of a Letter of Credit (LC) to be issued on the applicant of Seller and Supplier will sell quantity of Goods approximately mentioned in Schedule I to Seller for exclusive use by Buyer under the terms and conditions contained within the Sales Contract dated mentioned in Schedule I (“Contract”) by and between Supplier and Buyer, with the quality and price of goods as agreed between them with tolerance level as mentioned in Schedule I and contained in the Sales Contract dated mentioned in Schedule I.
        </p>
        <p className="text_sales">
          WHEREAS it has been agreed between the parties that the goods are to be loaded by the Supplier in the month mentioned in Schedule I, at a price mentioned in Schedule I.
        </p>
        <p className="text_sales">
          WHEREAS the Buyer hereby confirms to remain responsible for the performance of the said sales contract, including any failure or delay in the issuance of LC in accordance with the terms of the sales contract and this assignment letter. Further, Buyer shall remain ultimately responsible for payment of the price in the event where Supplier is unable to obtain payment under the LC and hereby agree to indemnify Supplier for any loss, damage or expense including, without limitation, any liability, Supplier may incur to the Seller by reason of the Invoice being addressed to Seller.
        </p>
        <p className="text_sales">
          The title in Goods shall pass on to Seller upon receipt of payment by Supplier from the Seller and the risks associated therewith shall pass on to Buyer as per Incoterms 2020. Buyer shall be solely responsible for performance of the obligations enumerated in the sales contract mentioned herein above. The supplier shall have no claim whatsoever.
        </p>
        <p className="text-center text_sales">
          <strong>Schedule I</strong>
        </p>
        <div className={`${styles.inputsContainer} border_black`}>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Place of execution of Assignment Letter
            </Col>
            <Col md={7} className={styles.right}>
              {data.placeOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of execution of Assignment Letter
            </Col>
            <Col md={7} className={styles.right}>
              {data.dateOfExecution}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Seller
            </Col>
            <Col md={7} className={styles.right}>
              {data.seller}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Seller
            </Col>
            <Col md={7} className={styles.right}>
              {data.sellerAddress?.fullAddress}, {data.sellerAddress?.city}, {data.sellerAddress?.country}, {data.sellerAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.associateBuyer}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.associateBuyerAddress}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data.supplier}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Supplier
            </Col>
            <Col md={7} className={styles.right}>
              {data.supplierAddress?.fullAddress}, {data.supplierAddress?.city}, {data.supplierAddress?.country}, {data.supplierAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Description of Goods
            </Col>
            <Col md={7} className={`${styles.right}`}>
              <>
                <div className={styles.tableWrapper}>
                  <div className={styles.table_scroll_outer}>
                    <div className={styles.table_scroll_inner}>
                      <table className={styles.schedule_table}>
                        <tr>
                          {data?.spec &&
                            data?.spec.length > 0 &&
                            Object.keys(data?.spec[0]).map((val, index) => <th className='text-color' key={index}>{val}</th>)}
                        </tr>
                        {data?.spec &&
                          data?.spec.length > 0 &&
                          data?.spec.map((item, index) => (
                            <tr>
                              {Object.values(item).map((value, id) => (
                                <td className='text-color' key={id}>{value}</td>
                              ))}
                            </tr>
                          ))}
                      </table>
                    </div>
                  </div>
                </div>
                {data?.specComment?.length > 0 ? <strong className='mb-2 d-block'>Comments</strong> : null}
                <ol className='mb-2'>
                  {data.specComment.length > 0 &&
                    data.specComment.map((val, index) => {
                      return <li>{val}</li>;
                    })}
                </ol>
              </>
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Quantity of Goods 
            </Col>
            <Col md={7} className={styles.right}>
              {data.quan?.toLocaleString('en-In', { maximumFractionDigits: 2 })} {data?.unitOfQuantity?.toUpperCase()}
            </Col>
          </Row>

          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
             Per Unit price of Goods
            </Col>
            <Col md={7} className={styles.right}>
              {data.curr} {data.priceOfGoods?.toLocaleString(`${data.orderValueCurrency=="INR"?"en-In":"en-En"}`, {maximumFractionDigits: 2,})}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Tolerance levels
            </Col>
            <Col md={7} className={styles.right}>
              +/-  {data.toleranceLevel?.toLocaleString('en-In', {maximumFractionDigits: 2,})} %
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Load Port
            </Col>
            <Col md={7} className={styles.right}>
              {data.lordPort}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Discharge Port
            </Col>
            <Col md={7} className={styles.right}>
              {data.dischargePort}, India
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Inco-Terms
            </Col>
            <Col md={7} className={styles.right}>
              {data.incoTerms}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Month of loading of Cargo
            </Col>
            <Col md={7} className={styles.right}>
              {data?.loadingCargo2}
            </Col>
          </Row>
          <Row className={`${styles.row} ${styles.last}`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Date of Sales Contract between Supplier and Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data?.dateOfContract}
            </Col>
          </Row>
        </div>
        <p className=" text_sales">
          <strong>SIGNATURE PAGE</strong>
        </p>

        <div className={`row`}>
          <Col md={8}>
            <p className="text_sales text-left m-0">
              <strong>.................................................</strong>
            </p>
            <p className="text_sales text-left">
              <strong>(Seller)</strong>
            </p>
          </Col>
          <Col md={4}>
            <p className="text_sales text-left m-0">
              <strong>.................................................</strong>
            </p>
            <p className="text_sales text-left">
              <strong>(Buyer)</strong>
            </p>
          </Col>
          <Col md={12}>
            <p className="text_sales text-left m-0">
              <strong>.................................................</strong>
            </p>
            <p className="text_sales text-left">
              <strong>(Shipper)</strong>
            </p>
          </Col>
        </div>
      </div>
    </>
  );
}
