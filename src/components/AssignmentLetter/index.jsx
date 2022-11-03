import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Col, Row } from 'react-bootstrap';
import _get from 'lodash/get';
import moment from 'moment';
import Router from 'next/router';

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
  // const getAddress = (buyer) => {
  //   if (buyer.name == 'Indo German International Private Limited') {
  //     if (buyer.branch == 'Delhi') {
  //       return '7A , SAGAR APARTMENTS,6 TILAK MARG,DELHI,NEW DELHI,110001';
  //     } else {
  //       return 'Ground Floor, Plot No-49-18-6/1 Lalitha Nagar, Sakshi Office Road,Akkayyapalem,Visakhapatnam,Andhra Pradesh,530016';
  //     }
  //   }
  //   if (buyer.name == 'Emergent Industrial Solution Limited') {
  //     if (buyer.branch == 'Delhi') {
  //       return '8B, SAGAR, 6 TILAK MARG,DELHI,NEW DELHI,110001';
  //     } else {
  //       return '49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM,,Akkayyapalem,Visakhapatnam,Andhra Pradesh,530016';
  //     }
  //   }
  // };
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
          // addComm: data?.addComm,
          addComm: [],
          spec: data?.spec,
          unitOfGrade: data?.unitOfGrade,
          unitOfQuantity: data?.unitOfQuantity,
          unitOfValue: data?.unitOfValue,
          curr: data?.orderCurrency,
          specComment: data?.specComment,
          priceOfGoods:data?.priceOfGoods,
          supplier:data?.supplier,
          supplierAddress:data?.supplierAddress,
          supplierAuthorized:data?.supplierAuthorized,
          buyerAuthorized:data?.buyerAuthorized,
          toleranceLevel:data?.toleranceLevel,
          incoTerms:data.incoTerms,
          addComm: data.addComm,
          priceOfGoods:data.priceOfGoods,
          specComment:data.specComment,
          buyerEmail:data.buyerEmail,
          supplierEmail:data.supplierEmail,
          loadingCargo:data.loadingCargo,
          dateOfContract:data.dateOfContract,
          financialAddress:data?.financialAddress


         



        });
      } else {
        const data = JSON.parse(sessionStorage.getItem('genericSelected'));
        console.log(data, 'data22222');
        let exe;
        let dat = '';
        data?.placeOfExecution?.execution?.forEach((val, index) => {
          if (val.agreementName == 'Assignment Letter') {
            exe = val.place;
            if (val.dateOfExecution) {
              dat = moment(val.dateOfExecution).format('DD-MM-YYYY');
            }
          }
        });
        let comment = [];
        let dateOfContract =''
        data?.additionalComments?.comments?.forEach((val, index) => {
          if (val.agreementName == 'Assignment Letter') {
            comment.push(val.comment);
            dateOfContract=moment(val?.dateOfContract).format('DD-MM-YYYY')
          }
        });
        console.log(dat, exe, 'exedasa');

        setData({
          seller: data?.seller?.name,
          buyer: data?.buyer?.name,
          sellerAddress:_get(data, 'seller.addresses[0]', {}),
          buyerAddress:  _get(data, 'buyer.addresses[0]', {}),
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
          terms: `${
            data?.order?.termsheet?.transactionDetails?.partShipmentAllowed !==
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
          supplierAddress: _get(data, 'supplier.addresses[0]', {}),
          supplierAuthorized: _get(
            data,
            'supplier.authorisedSignatoryDetails',
            [],
          ),
          buyerAuthorized: _get(data, 'buyer.authorisedSignatoryDetails', []),
          buyerEmail: '',
          supplierEmail: '',
          toleranceLevel: data?.order?.tolerance,
          incoTerms: data?.order?.termsheet?.transactionDetails?.incoTerms,
          spec: data?.productSpecifications?.specificationTable,
          specComment: data?.productSpecifications.comments,
          priceOfGoods: data?.order?.perUnitPrice,
          loadingCargo:data?.deliveryTerms?.monthOfLoadingCargo || "",
          dateOfContract:dateOfContract
        });
      }
    }
  }, [props]);
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.content} card border_color shadow-none`}>
        {assignmentSupplier(data, props.preview)}
        {props.preview !== 'LETTER' ? (
          <>
            <div
              className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3 bg-transparent`}
            >
              <div className={`${styles.approve} mr-3`}>
                <span
                  onClick={(e) => {
                    sessionStorage.setItem('preview', JSON.stringify(data));

                    Router.push('agreement/preview');
                    props.setPreviewValue('LETTER');
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
        <>
          {/* Assignment Letter pdf download code start */}
          {/* <table width='800px' bgColor='#ffffff' cellPadding='0' style={{fontFamily:'Times New Roman, Times, serif', border:'1px solid #d9dde8', marginBottom:'20px', color:'#000000'}} cellSpacing='0' border='0'>
        <tr>
          <td valign='top' style={{padding:'20px'}}>
            <table width='100%' cellPadding='0' cellSpacing='0' border='0'>
              <tr>
                <td align='center' style={{padding:'15px 0'}}>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000', marginBottom:'0'}}><strong><u>Assignment Letter between Seller, Buyer and Supplier</u></strong></p></td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    This Assignment Letter is made at the place and on the day as set out
                    in <strong>Schedule I</strong> hereto by and between:
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    <strong>Seller</strong>(s), as detailed in <strong>Schedule-I</strong>{' '}
                    hereof (hereinafter referred to as the “<strong>Seller</strong>”,
                    which expression shall, unless excluded by or repugnant to the context
                    be deemed to include its legal heirs, successors and permitted
                    assigns) of the First Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align='center'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>And</p>
                </td>
              </tr>
              <tr>
                <td align='justify'> 
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    <strong>Buyer</strong>(s), as detailed in <strong>Schedule-I</strong>{' '}
                    hereof (hereinafter referred to as the “<strong>Buyer</strong>”, which
                    expression shall, unless excluded by or repugnant to the context be
                    deemed to include its legal heirs, successors and permitted assigns)
                    of the Second Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align='center'>
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>And</p>
                </td>
              </tr>
              <tr>
                <td align='justify'> 
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    <strong>Supplier</strong>(s), as detailed in{' '}
                    <strong>Schedule-I</strong> hereof (hereinafter referred to as the “
                    <strong>Supplier</strong>”, which expression shall, unless excluded by
                    or repugnant to the context be deemed to include its legal heirs,
                    successors and permitted assigns) of the Third Part.
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'> 
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    WHEREAS it is hereby agreed that the Supplier accepts that the payment
                    of the goods shall be made by way of a Letter of Credit (LC) to be
                    issued on the applicant of Seller and Supplier will sell quantity of
                    Goods approximately mentioned in Schedule I to Seller for exclusive
                    use by Buyer under the terms and conditions contained within the Sales
                    Contract dated mentioned in Schedule I (“Contract”) by and between
                    Supplier and Buyer, with the quality and price of goods as agreed
                    between them with tolerance level as mentioned in Schedule I and
                    contained in the Sales Contract dated mentioned in Schedule I.
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'> 
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    WHEREAS it has been agreed between the parties that the goods are to
                    be loaded by the Supplier in the month mentioned in Schedule I, at a
                    price mentioned in Schedule I.{' '}
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'> 
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    WHEREAS the Buyer hereby confirms to remain responsible for the
                    performance of the said sales contract, including any failure or delay
                    in the issuance of LC in accordance with the terms of the sales
                    contract and this assignment letter. Further, Buyer shall remain
                    ultimately responsible for payment of the price in the event where
                    Supplier is unable to obtain payment under the LC and hereby agree to
                    indemnify Supplier for any loss, damage or expense including, without
                    limitation, any liability, Supplier may incur to the Seller by reason
                    of the Invoice being addressed to Seller.
                  </p>
                </td>
              </tr>
              <tr>
                <td align='justify'> 
                  <p style={{fontSize:'12px', lineHeight:'18px', color:'#000000'}}>
                    The title in Goods shall pass on to Seller upon receipt of payment by
                    Supplier from the Seller and the risks associated therewith shall pass
                    on to Buyer as per Incoterms 2020. Buyer shall be solely responsible
                    for performance of the obligations enumerated in the sales contract
                    mentioned herein above. The supplier shall have no claim whatsoever.
                  </p>
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
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Place of execution of Assignment Letter</p>
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
                          Date of execution of Assignment Letter
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
                          Name of Seller
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
                          Address of Seller
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
                          Name of Buyer
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
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Address of Buyer</p>
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
                          Name of Supplier
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
                        <p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom: '0'}}>Description of Goods</p>
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
                          Quantity of Goods in MT
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
                          Date of execution of Assignment Letter
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
                          Price of Goods / MT
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
                          Tolerance levels
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
                          Load Port
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
                          Discharge Port
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
                          Inco-Terms
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
                          Month of loading of Cargo
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
                          Date of Sales Contract between Supplier and Buyer
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
                  </table>
                </td>
              </tr>
              <tr>
                <td valign='top'>
                  <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                    <tr>
                      <td align='left' colSpan={2}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', paddingTop:'30px'}}><strong>SIGNATURE PAGE</strong></p></td>
                    </tr>
                    <tr>
                      <td align='left' width='50%'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0'}}>.................................................</p></td>
                      <td align='left' width='50%'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0'}}>.................................................</p></td>
                    </tr>
                    <tr>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}><strong>(Seller)</strong></p></td>
                      <td align='left'><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}><strong>(Buyer)</strong></p></td>
                    </tr>
                    <tr>
                      <td align='left' colSpan={2}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000', marginBottom:'0'}}>.................................................</p></td>
                    </tr>
                    <tr>
                      <td align='left' colSpan={2}><p style={{fontSize:'12px', lineHeight:'18px', color: '#000000'}}><strong>(Shipper)</strong></p></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> */}
          {/* Assignment Letter pdf download code end */}

      {/* <div className={`${styles.root}`}>
        <div className={`${styles.content} card border_color shadow-none`}>
          {assignmentSupplier(data)}
          <div
            className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end p-3`}
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
      </div> */}
    </>
     </div>
     </div>
  );
}

export default Index;
const assignmentSupplier = (data, preview) => {
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
              {data.sellerAddress?.fullAddress},
              {data.sellerAddress?.city}{" "} 
              {data.sellerAddress?.country},{" "}
              
              {data.sellerAddress?.pinCode}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Name of Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.buyer}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Address of Buyer
            </Col>
            <Col md={7} className={styles.right}>
              {data.buyerAddress?.fullAddress},
              {data.buyerAddress?.city}{" "} 
              {data.buyerAddress?.country},{" "}
              
              {data.buyerAddress?.pinCode}
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
              {data.supplierAddress?.fullAddress},
              {data.supplierAddress?.city}{" "} 
              {data.supplierAddress?.country},{" "}
              
              {data.supplierAddress?.pinCode}
              
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Description of Goods
            </Col>
            <Col md={7} className={`${styles.right} d-flex flex-column justify-content-start align-items-start`}>
              <>
                <div className={styles.tableWrapper}>
                  <div className={styles.table_scroll_outer}>
                    <div className={styles.table_scroll_inner}>
                      <table>
                        <tr>
                          {data?.spec &&
                            data?.spec.length > 0 &&
                            Object.keys(data?.spec[0]).map((val, index) => <th key={index}>{val}</th>)}
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
                {data?.specComment?.length > 0 ? <b>Comments</b> : null}
                <ol>
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
              Quantity of Goods in MT
            </Col>
            <Col md={7} className={styles.right}>
              {data.quan?.toLocaleString('en-In', { maximumFractionDigits: 2 })} MT
            </Col>
          </Row>
          
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Price of Goods / MT
            </Col>
            <Col md={7} className={styles.right}>
              {'INR '}
              {data.priceOfGoods}
            </Col>
          </Row>
          <Row className={`${styles.row} border_black`}>
            <Col md={5} className={`${styles.left} border_black`}>
              Tolerance levels
            </Col>
            <Col md={7} className={styles.right}>
              {data.toleranceLevel?.toLocaleString('en-In', {
                maximumFractionDigits: 2,
              })} %
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
              {data.dischargePort}
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
              {data?.loadingCargo}
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
              <strong></strong>
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
// const assignment=()=>{
//   return(
//     <div className={`${styles.card_body} card-body `}>
//     <h5 className={styles.sub_heading}>Assignment Letter between: </h5>

//       <GrowInput  type="text" className={`${styles.para} input `} />
//       <GrowInput  type="text" className={`${styles.para} input `} />

//       <p>and</p>
//       <p><GrowInput type="text"/>, registered under the Trade Register of Paris under the number<GrowInput  type="text" className={`${styles.para} input `}  />, whose head office is at <GrowInput  className={`${styles.para} input `} eholder = "10 boulevard de Grenelle – CS 63205 – 75015 Paris – FRANCE (“the Seller or Producer”)" />.
//       </p>
//       <p>It is hereby agreed that the Seller will accept that the payment for the commodity - approximately <GrowInput  type="text"  className={`${styles.para} input `}  /> under the  <GrowInput  type="text"  className={`${styles.para} input `}/> by and between the Seller and Hira Power and Steels Ltd (“Buyer”) is to be made by way of a Letter of Credit (L/C), to be issued on the applicant of Indo International Trading FZCO as per the above-mentioned Contract.  The commodity is for use by Hira Power and Steels Ltd (“the Buyer”) only under the terms and conditions contained within the Sales Contract.
//       </p>
//       <p>The Buyer hereby confirms to remain responsible for the performance of the said contact, including any failure or delay in the issuance of the L/C in accordance with the terms of the contract and this letter.  Further Hira Power and Steels Ltd (“Buyer”) shall remain ultimately responsible for payment of the price in the event that the Seller is unable to obtain payment under the L/C, and hereby agree to indemnify the Seller for any loss, damage or expense including, without limitation, any liability Eramet Marketing Services (“the Seller”) may incur to Indo International Trading FZCO by reason of the invoice being addressed to Indo International Trading FZCO.
//       </p>
//       <p className="text_sales">Yours faithfully,
//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       </p>
//      <div className='mr-4'>
//       <div className='d-flex justify-content-between align-items-center'>
//         <div>
//         <strong>………………………………………………………</strong>
//       <br/>
//       <strong>………………………………………………………</strong>
//       <br/>
//       <GrowInput type="text" className={`${styles.para} input`} />
//       <br/>
//       <br/>

//       </div>
//       <GrowInput type="text" className={`${styles.para} input `} />

//       </div>
//       <p className='mt-5'>
//       <strong>………………………………………………………</strong>

//       <br/>
//       <GrowInput type="text" className={`${styles.para} input `} />

//       </p>
//       </div>

//       </div>

//   )
// }
