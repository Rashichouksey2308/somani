import MarginMoneyPreviewTemp from '@/templates/MarginMoneyPreviewTemp';
import jsPDF from 'jspdf';
import _get from 'lodash/get';
import moment from 'moment';
import Router from 'next/router';
import { useEffect, useRef , useState} from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactDOMServer from 'react-dom/server';
import { useDispatch, useSelector } from 'react-redux';
import { GetMarginMoney } from 'redux/marginMoney/action';
import { setDynamicName, setDynamicOrder, setPageName } from 'redux/userData/action';
import { addPrefixOrSuffix } from 'utils/helper';
import MarginBar from '../MarginBar';
import styles from './index.module.scss';
import TermsheetPopUp from '../TermsheetPopUp'

function Index() {
  const toPrint = useRef();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [email,setEmail] = useState('')
 
  const { margin } = useSelector((state) => state.marginMoney);

  const marginData = _get(margin, 'data.data[0]', {});

  useEffect(() => {
    let id = sessionStorage.getItem('marginId');
    dispatch(GetMarginMoney({ orderId: id }));

    dispatch(setPageName('margin-money'));
    dispatch(setDynamicName(marginData?.company?.companyName));
    dispatch(setDynamicOrder(marginData?.order?.orderId));
  }, [dispatch]);

  const exportPDF = () => {
    const doc = new jsPDF('p', 'pt', [1500, 1500]);
    doc.html(ReactDOMServer.renderToString(<MarginMoneyPreviewTemp marginData={marginData} />), {
      callback: function (doc) {
              const totalPages = doc.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.text(`Page ${i} of ${totalPages}`, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 1, {
        align: 'center',
        });;
      }
        doc.save('MarginMoney.pdf');
      },
      margin:[40,0,40,0],
      autoPaging: 'text',
    });
  };
const shareEmail = () => {}
  return (
    <>
      <div className={`${styles.root_container} bg-transparent`} ref={toPrint}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img
              className={`${styles.arrow} mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="Arrow"
              onClick={() => Router.push('/margin-money/id')}
            />
            <h1 className={`${styles.heading} heading`}>Margin Money Preview</h1>
          </div>
        </div>
        <div className={`${styles.term_container} download-pdf-bg container-fluid`}>
          <Row>
            <Col md={4} className={`${styles.left} align-self-end`}>
              <div>
                <span className={`${styles.termSub_head} text-color`}>Order ID:</span>
                <span className={`${styles.termValue} text-color`}>{marginData?.order?.orderId}</span>
              </div>
              <div>
                <span className={`${styles.termSub_head} text-color`}>Buyer:</span>
                <span className={`${styles.termValue} text-color`}>{marginData?.company?.companyName}</span>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <span className="download-pdf-title">MARGIN MONEY</span>
            </Col>
            <Col md={4} className={`${styles.left} ${styles.right}`}>
              <div>
                <span className={`${styles.termSub_head} text-color`}>Date:</span>{' '}
                <span className={`${styles.termValue} text-color`}>
                  {moment(marginData?.createdAt).format('DD-MM-yy')}
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <Card className={styles.content}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0">
                <tr>
                  <th>Commodity Details</th>
                  <th>Margin Money</th>
                </tr>
                <tbody>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>A</span>
                      <span className={`ml-2`}>Quantity</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {addPrefixOrSuffix(marginData?.order?.quantity ? marginData?.order?.quantity : 0, marginData?.order?.unitOfQuantity ? marginData?.order?.unitOfQuantity : 'MT', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>B</span>
                      <span className={`ml-2`}>Unit Price</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {marginData?.order?.orderCurrency}{' '}
                      {marginData?.order?.perUnitPrice?.toLocaleString(
                        marginData?.order?.orderCurrency=="INR"?
                          'en-In':"en-En", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>C</span>
                      <span className={`ml-2`}>Conversion Rate</span>
                    </td>
                    <td className={`${styles.good} `}>{marginData?.conversionRate}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>D</span>
                      <span className={`ml-2`}>Usance Interest (%)</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.usanceInterestPercetage, '%', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>E</span>
                      <span className={`ml-2`}>Trade Margin</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(marginData?.order?.termsheet?.commercials?.tradeMarginPercentage, '%', '')}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>F</span>
                      <span className={`ml-2`}>Tolerance (+/-) Percentage</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {marginData?.order?.tolerance ? marginData?.order?.tolerance : 0} %
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>G</span>
                      <span className={`ml-2`}>Margin Money (%)</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {addPrefixOrSuffix(
                        marginData?.order?.termsheet?.transactionDetails?.marginMoney
                          ? marginData?.order?.termsheet?.transactionDetails?.marginMoney
                          : 0,
                        '%',
                        '',
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>H</span>
                      <span className={`ml-2`}>No. of PDC's</span>
                    </td>
                    <td className={`${styles.good} `}>
                      {marginData?.numberOfPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>I</span>
                      <span className={`ml-2`}>Additional PDC’s</span>
                    </td>
                    <td className={`${styles.highlight} satisfactory`}>{/* {marginData?.additionalPDC} */}</td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}></span>
                      <span className={`ml-2`}></span>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0">
                <tr>
                  <th>Calculation</th>
                  <th></th>
                </tr>
                <tbody>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>J</span>
                      <span className={`ml-2`}>Order Value</span>
                      <span className={`${styles.formula} text1 ml-2`}>(A*B)</span>
                    </td>
                    <td>
                      {marginData?.order?.orderCurrency}{' '}
                      {marginData?.calculation?.orderValue?.toLocaleString(marginData?.order?.orderCurrency=="INR"?
                          'en-In':"en-En", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>K</span>
                      <span className={`ml-2`}>Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(J*C)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.orderValueInINR?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>L</span>
                      <span className={`ml-2`}>Usance Interest (%) for 90 days (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(K*D*90)/365</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.usanceInterest?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>M</span>
                      <span className={`ml-2`}>Trade Margin (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(K*E)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.tradeMargin?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>N</span>
                      <span className={`ml-2`}>Gross Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(K+L+M)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.grossOrderValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>O</span>
                      <span className={`ml-2`}>Tolerance Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(N*F)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.toleranceValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>P</span>
                      <span className={`ml-2`}>Total Order Value (INR)</span>
                      <span className={`${styles.formula} text1 ml-2`}>(N+O)</span>
                    </td>

                    <td>
                      ₹{' '}
                      {marginData?.calculation?.totalOrderValue?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>Q</span>
                      <span className={`ml-2`}>Provisional Unit Price Per Ton (INR)</span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>(N/A)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.provisionalUnitPricePerTon?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}>R</span>
                      <span className={`ml-2`}>Margin Money (INR)</span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>(P*G)</span>
                    </td>
                    <td>
                      ₹{' '}
                      {marginData?.calculation?.marginMoney?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-4 border-bottom">
                      <span className={`${styles.sno} text1`}>S</span>
                      <span className={`ml-2`}>Total SPDC Amount Req. (INR)</span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>(P-R)</span>
                    </td>
                    <td className="pb-4 border-bottom">
                      ₹{' '}
                      {marginData?.calculation?.totalSPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>
                  <tr>
                    <td className="pt-4">
                      <span className={`${styles.sno} text1`}>T</span>
                      <span className={`ml-2`}>Amount per SPDC (INR) </span>{' '}
                      <span className={`${styles.formula} text1 ml-2`}>(S/H)</span>
                    </td>
                    <td className="pt-4">
                      ₹{' '}
                      {marginData?.calculation?.amountPerSPDC?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? 0}
                    </td>
                  </tr>

                  {/* <tr className={`${styles.bordertop} border_color`}>
                    <td>
                      <span className={`${styles.sno}`}>T</span>
                      <span className={`ml-2`}>
                        Additional Amount Per SPDC (INR){' '}
                      </span>{' '}
                      <span className={`${styles.formula} ml-2`}>
                        [(S-Previous Value)/I)]
                      </span>
                    </td>
                    <td
                      className={`${styles.good} ${styles.highlight2} satisfactory`}
                    >
                      {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString('en-In') ??
                        0}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>U</span>
                      <span className={`ml-2`}>
                        Revised Net Order Value (INR){' '}
                      </span>
                      <span className={`${styles.formula} ml-2`}>
                        [(S-Previous Value)/I)]
                      </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.order?.quantity} MT
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>V</span>
                      <span className={`ml-2`}>Margin Money (INR) </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.order?.quantity} MT
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>W</span>
                      <span className={`ml-2`}>
                        Revised Margin Money Calculation (INR){' '}
                      </span>
                      <span className={`${styles.formula} ml-2`}>(R)</span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.order?.quantity} MT
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>X</span>
                      <span className={`ml-2`}>
                        Margin Money Received (INR){' '}
                      </span>
                    </td>
                    <td className={`${styles.good} good`}>
                      {marginData?.order?.quantity} MT
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`${styles.sno}`}>T</span>
                      <span className={`ml-2`}>
                        Additional Amount Per SPDC (INR){' '}
                      </span>{' '}
                      <span className={`${styles.formula} ml-2`}>
                        [(S-Previous Value)/I)]
                      </span>
                    </td>
                    <td
                      className={`${styles.good} ${styles.highlight2} satisfactory`}
                    >
                      {marginData?.revisedMarginMoney?.calculation?.additionalAmountPerPDC?.toLocaleString('en-In') ??
                        0}
                    </td>
                  </tr> */}
                  <tr>
                    <td>
                      <span className={`${styles.sno} text1`}></span>
                      <span className={`ml-2`}></span>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>

      <MarginBar exportPDF={exportPDF} leftButtonTitle={'Margin Money'}  openbar={()=>setOpen(true)} rightButtonTitle={'Send to Buyer'}   pagesDetails={{total : 1, current:1}}  />

      {open ? <TermsheetPopUp
      close={() => setOpen(false)}
      open={open} 
      isMargin 
      setEmail={setEmail}
      shareEmail={shareEmail}
     /> : null} 
    </>
  );
}

export default Index;
