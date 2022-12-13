import _get from 'lodash/get';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { GetDelivery,UpdateDelivery } from '../../redux/release&DeliveryOrder/action';
import SaveBar from '../SaveBar';
import styles from './index.module.scss';

function Index() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handlePopup = () => {
    setShow(true);
  };
  const [quantity, setQuantity] = useState(0);
  const [balanceQuantity, setbalanceQuantity] = useState(0);
  const [releasedQuantity, setreleasedQuantity] = useState(0);
  const [signatoryList, setSignatoryList] = useState([]);
   const [selectedSignatory, setSelectedSignatory] = useState('');
  const DeliveryNo = sessionStorage.getItem('dono');
   
  const { ReleaseOrderData } = useSelector((state) => state.Release);

  useEffect(() => {
    getOrderData();
  }, []);
  console.log(selectedSignatory,"signatoryList")
  const getOrderData = async () => {
    let id = sessionStorage.getItem('ROrderID');
    let orderid = _get(ReleaseOrderData, 'data[0].order._id', '');
    await dispatch(GetDelivery(`?deliveryId=${id}`));
  };
  useEffect(() => {
    if (ReleaseOrderData) {
      if (window) {
        let temp = 0;
        _get(ReleaseOrderData, 'data[0].deliveryDetail').forEach((val, index) => {
          temp = Number(temp) + Number(val.netQuantityReleased);
           if(sessionStorage.getItem('deliveryPreviewId')==val.deliveryOrderNumber){
            console.log("asgdajsdasd")
            setSelectedSignatory(val.authorisedSignatory)
          }
        });
        setQuantity(temp);

        let number = Number(
          _get(ReleaseOrderData, 'data[0].order.customClearance.warehouseDetails.wareHouseDetails.quantity', 0),
        );

        const balance = sessionStorage.getItem('balanceQuantity');

        setreleasedQuantity(balance);
        setbalanceQuantity(Number(number) - Number(balance));

        let sig=[];
        _get(ReleaseOrderData, 'data[0].order.generic.buyer.authorisedSignatoryDetails').forEach((val, index) => {
          sig.push([val.name]);
         
        });
        setSignatoryList([...sig])
      }
    }
  }, [ReleaseOrderData]);
   const [emailAdd, setEmailAdd] = useState([{ emailID: '' }]);
  const [insuranceAdd, setinsuranceAdd] = useState([{ insurance: '' }]);

  const addMoreRows = (val) => {
    if (val == 'email') {
      setEmailAdd([
        ...emailAdd,
        {
          emailID: '',
        },
      ]);
    } else {
      setinsuranceAdd([
        ...insuranceAdd,
        {
          insurance: '',
        },
      ]);
    }
  };
   const deleteArr = (val,index) => {
    if (val == 'email') {
    
     setEmailAdd([...emailAdd.slice(0, index), ...emailAdd.slice(index + 1)]);
    } else {
     setinsuranceAdd([...insuranceAdd.slice(0, index), ...insuranceAdd.slice(index + 1)]);
    }
  };
  const handleSave= async ()=>{
      let newarr = [];
      _get(ReleaseOrderData, 'data[0].deliveryDetail').forEach((item) => {
        console.log(sessionStorage.getItem('deliveryPreviewId'),item.deliveryOrderNumber,"idsss")
        if(sessionStorage.getItem('deliveryPreviewId')==item.deliveryOrderNumber){
          
          newarr.push({
          orderNumber: item.orderNumber,
          unitOfMeasure: item.unitOfMeasure,
          netQuantityReleased: item.netQuantityReleased,
          deliveryOrderNumber: item.deliveryOrderNumber,
          deliveryOrderDate: item.deliveryOrderDate,
          deliveryStatus: item.status,
          authorisedSignatory:selectedSignatory
        });
        }else{
           newarr.push({
          orderNumber: item.orderNumber,
          unitOfMeasure: item.unitOfMeasure,
          netQuantityReleased: item.netQuantityReleased,
          deliveryOrderNumber: item.deliveryOrderNumber,
          deliveryOrderDate: item.deliveryOrderDate,
          deliveryStatus: item.status,
          authorisedSignatory:""
        });
        }
       
      });
     console.log(newarr,"newarr",selectedSignatory,)
      let payload = {
        deliveryId: _get(ReleaseOrderData, 'data[0]._id', ''),
        deliveryDetail: newarr,
        lastMileDelivery: _get(ReleaseOrderData, 'data[0].lastMileDelivery'),
      };
      let task = 'save';
      await dispatch(UpdateDelivery({ payload, task }));
  }
  return (
    <>
      <div className='container-fluid p-0'>
        <div className={`${styles.root} card`}>
          <div className={`${styles.head}`}>
            <p className={`${styles.heading}`}>
              {_get(ReleaseOrderData, 'data[0].order.termsheet.otherTermsAndConditions.buyer.bank', '')?.replace(
                / *\([^)]*\) */g,
                '',
              )}
            </p>
            <div className={`${styles.heading_addresses}`}>
              <p>7A, SAGAR APARTMENTS, 6-TILAK MARG, NEW DELHI-110001 </p>
              <p>TEL: +91 – 11 – 23782022, 23387413, 23382592, 23384968, FAX: +91 – 11 – 23782806 </p>
              <p>CIN NO-U74899DL1994PTC063676</p>
            </div>
            <div className={`${styles.type}`}>
              <p>DELIVERY ORDER </p>
              <p>(ORIGINAL) </p>
            </div>
          </div>
          <div className={`${styles.body}`}>
            <div className={`${styles.body_header} d-flex justify-content-between align-item-center`}>
              <div className={`${styles.date} `}>
                <p>
                  DO.NO:{' '}
                  <span className={`${styles.bold}`}>
                    {DeliveryNo} / {_get(ReleaseOrderData, 'data[0].order.generic.shippingLine.vesselName', '')}
                  </span>
                </p>
                <p className='mb-0'>
                  DATE: <span className={`${styles.bold}`}>{moment().format('DD.MM.YYYY')}</span>
                </p>
              </div>
              <div className={`${styles.validity}`}>
                <p className='mb-0'>
                  VALIDITY: <span className={`${styles.bold}`}>10 Days</span>
                </p>
              </div>
            </div>
            <div className={`${styles.content}`}>
              <p>To:</p>
              <p className={`${styles.bold} ${styles.width} w-50`}>
                {_get(ReleaseOrderData, 'data[0].order.generic.CHA.name', '') !== ''
                  ? _get(ReleaseOrderData, 'data[0].order.generic.CHA.name', '')
                  : _get(ReleaseOrderData, 'data[0].order.generic.stevedore.name', '')}
                ,<br></br>
                {_get(ReleaseOrderData, 'data[0].order.generic.CHA.name', '') !== '' ? (
                  <span>
                    {_get(ReleaseOrderData, 'data[0].order.generic.CHA.addresses[0].fullAddress', '')},
                    {_get(ReleaseOrderData, 'data[0].order.generic.CHA.addresses[0].state', '')},
                    {_get(ReleaseOrderData, 'data[0].order.generic.CHA.addresses[0].pinCode', '')}
                  </span>
                ) : (
                  <span>
                    {_get(ReleaseOrderData, 'data[0].order.generic.stevedore.addresses[0].fullAddress', '')},
                    {_get(ReleaseOrderData, 'data[0].order.generic.stevedore.addresses[0].state', '')},
                    {_get(ReleaseOrderData, 'data[0].order.generic.stevedore.addresses[0].pinCode', '')}
                  </span>
                )}
              </p>

              <div>
                {_get(ReleaseOrderData, 'data[0].order.generic.associateBuyer.authorisedSignatoryDetails', []).map(
                  (val, index) => {
                    return (
                      <>
                        CC:{' '}
                        <span className={`${styles.bold} ${styles.width2} `}>
                          {val.name}, M/S {_get(ReleaseOrderData, 'data[0].company.companyName')},
                          {_get(ReleaseOrderData, 'data[0].order.generic.associateBuyer.branch', '')}{' '}
                        </span>
                      </>
                    );
                  },
                )}
              </div>
              <div>
                CC:{' '}
                <span className={`${styles.bold} ${styles.width2} `}>
                  {_get(ReleaseOrderData, 'data[0].order.generic.CMA.name', '')},{' '}
                  {_get(ReleaseOrderData, 'data[0].order.generic.CMA.addresses[0].state', '')}.
                </span>
              </div>
              <p>
                Kind Attn.{' '}
                {_get(ReleaseOrderData, 'data[0].order.generic.stevedore.authorisedSignatoryDetails', []).map(
                  (val, index) => {
                    return (
                      <>
                        <span className={`${styles.bold} ${styles.width2} `}>
                          {`${index !== 0 ? '/' : ''}${val.name} `}
                        </span>
                      </>
                    );
                  },
                )}
                {/* <span className={`${styles.bold} w-50`}>
                  Mr. N.A. Khan / Mr. Nabin Chand Boyed.
                </span> */}
              </p>
              <div className={`${styles.letter_content}`}>
                <p>Dear Sir,</p>
                <p>
                  We hereby authorize you to deliver the quantity to{' '}
                  <span className={`${styles.bold}`}>{_get(ReleaseOrderData, 'data[0].company.companyName')},</span> Vide{' '}
                  <span className={`${styles.bold}`}>BL No. 1</span> dated{' '}
                  <span className={`${styles.bold}`}>18/03/2021</span> as per the detail given below:
                </p>
                <div className={`${styles.material}`}>
                  <div className={`d-flex justify-content-start align-items-start`}>
                    <span className={styles.head}>1) Material :</span>{' '}
                    <span className={`${styles.bold} `}>
                      {_get(ReleaseOrderData, 'data[0].order.commodity', '')}  (
                      {_get(ReleaseOrderData, 'data[0].order.generic.shippingLine.vesselName', '')}){ ' '}
                      {_get(
                        ReleaseOrderData,
                        'data[0].order.insurance.quotationRequest.storageDetails.storagePlotAddress',
                        ' ',
                      )}
                      {_get(
                        ReleaseOrderData,
                        'data[0].order.insurance.quotationRequest.storageDetails.placeOfStorage',
                        '',
                      )!== ''
                        ? `, ${_get(
                            ReleaseOrderData,
                            'data[0].order.insurance.quotationRequest.storageDetails.placeOfStorage',
                            ' ',
                          )}`
                        : ''}
                    </span>
                  </div>
                  <div className={`d-flex justify-content-start align-items-start`}>
                    <span className={styles.head}>2) Quantity : </span>{' '}
                    <span className={`${styles.bold} `}>
                      {releasedQuantity} {_get(ReleaseOrderData, 'data[0].order.unitOfQuantity', '').toUpperCase()}
                      s. {_get(ReleaseOrderData, 'data[0].order.commodity', '')}
                    </span>
                  </div>
                  <div className={`d-flex justify-content-start align-items-start`}>
                    <span className={styles.head}>3) Balance Qty :</span>{' '}
                    <span className={`${styles.bold} `}>
                      After delivery of material against this DO the balance Qty. will be as under :
                      <p>
                        a) {_get(ReleaseOrderData, 'data[0].order.commodity', '')} {balanceQuantity==0?"Nil":balanceQuantity}{' '}
                        {_get(ReleaseOrderData, 'data[0].order.unitOfQuantity', '').toUpperCase()}s
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.footer} m-3`}>
              <p>
                For{' '}
                <span className={`${styles.bold}`}>
                  {_get(ReleaseOrderData, 'data[0].order.termsheet.otherTermsAndConditions.buyer.bank', '')?.replace(
                    / *\([^)]*\) */g,
                    '',
                  )}
                </span>
              </p>
              <div>
                <p className={`${styles.bold}`}>Authorised Signatory</p>
                <select className='input'
                value={selectedSignatory}
                onChange={(e)=>{
                  setSelectedSignatory(e.target.value)
                }}
                >
                  <option value=''>Select an Option</option>
                  {
                  signatoryList.length>0?
                  signatoryList.map((val,index)=>{
                    return(
                      <option value={val}>{val}</option>
                    )
                  })  :null
                  }
                  </select>
              
              </div>
            </div>
          </div>
          <div className={`${styles.cc}`}>
            <p>
              CC :{' '}
              {_get(ReleaseOrderData, 'data[0].order.termsheet.otherTermsAndConditions.buyer.bank', '')?.replace(
                / *\([^)]*\) */g,
                '',
              )}
              , VIZAG
            </p>
            <p className={`${styles.bold} ${styles.extra_margin}`}>: Delivery order file</p>
          </div>
        </div>
      </div>
      <SaveBar rightBtn={'Send'} rightBtnClick={handlePopup} handleSave={handleSave} />

      <Modal show={show} className={`${styles.share_lc} vessel_card card share_lc`}>
        <Modal.Body className={`${styles.card_body} card-body`}>
          <form>
            <div className={`${styles.tab_content} tab-content`} id="LCDraft">
              <div
                className="tab-pane fade show active"
                id="shareLCDraft"
                role="tabpanel"
                aria-labelledby="share-LC-draft"
              >
                <h3>Share as</h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className={`${styles.lc_document} ${styles.box} d-flex align-items-center`}>
                    <img src="/static/pdf-icon.png" width={`55px`} alt="PDF" className="img-fluid" />
                    <label for="lc_document">
                      Deliveryorder.pdf<span>128kb</span>
                    </label>
                    <input type="checkbox" className="ml-auto" id="lc_document" value="LC Document" />
                  </div>
                </div>
                <ul
                  className={`${styles.nav_tabs} ${styles.share_via} share_via nav nav-tabs`}
                  id="shareVia"
                  role="tablist"
                >
                  <li className={`${styles.nav_item} nav-item`}>
                    <a
                      className={`${styles.nav_link} nav-link active`}
                      id="email-address"
                      data-toggle="tab"
                      href="#emailAddress"
                      role="tab"
                      aria-controls="emailAddress"
                      aria-selected="true"
                    >
                      <img src="/static/email-icon.png" width={`32px`} className="img-fluid" alt="Email Address" />
                      Email Address
                    </a>
                  </li>
                  <li className={`${styles.nav_item} nav-item`}>
                    <a
                      className={`${styles.nav_link} nav-link`}
                      id="whatsapp"
                      data-toggle="tab"
                      href="#whatsApp"
                      role="tab"
                      aria-controls="whatsApp"
                      aria-selected="false"
                    >
                      <img src="/static/icons8-whatsapp.svg" width={`27px`} className="img-fluid" alt="WhatsApp" />
                      WhatsApp
                    </a>
                  </li>
                </ul>
                <div className={`${styles.tab_content} tab-content`} id="shareVia">
                  <div
                    className="tab-pane fade show active"
                    id="emailAddress"
                    role="tabpanel"
                    aria-labelledby="email-address"
                  >
                    {emailAdd.map((val,index)=>{
                      return(
                        <>
                        <div className={`d-flex align-items-center form-group`}>
                          <div className={`${styles.each_input} flex-grow-1`}>
                              <input
                                id="email"
                                name="email"
                                className={`${styles.formControl} input form-control`}
                                selected
                              />
                              <label
                                className={`${styles.label_heading} label_heading_login label_heading bg-transparent`}
                                htmlFor="email"
                              >
                                Email
                              </label>
                              
                          </div>
                          <img
                            onClick={()=>{
                              deleteArr("email",index)
                            }}
                            src="/static/delete 2.svg"
                            alt="delete"
                            role="button"
                            className="ml-3"
                          />
                        </div>
                        </>
                      )
                    })}
                  
                    <div
                      className={`${styles.addMoreRows}`}
                      onClick={(e) => {
                         addMoreRows('email');
                      }}
                    >
                      <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                        +
                      </span>{' '}
                      add another
                    </div>
                    <div className="d-flex justify-content-between">
                      <button onClick={handleClose} type="button" className={`${styles.close} ${styles.btn} btn mr-2 w-50`}>
                        Close
                      </button>
                      <button type="button" className={`${styles.submit} ${styles.btn} btn ml-2 w-50`}>
                        Share
                      </button>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="whatsApp" role="tabpanel" aria-labelledby="whatsapp">
                    {insuranceAdd.map((val,index)=>{
                      return(
                        <>
                        <div className="d-flex align-items-center form-group">
                          <div className={`${styles.each_input} ${styles.phone} flex-grow-1`}>
                            <div className={styles.phone_card}>
                              <select
                                name="callingCode"
                                id="Code"
                                className={`${styles.code_phone} input border-right-0 bg-transparent`}
                              >
                                <option>+91</option>
                                <option>+1</option>
                                <option>+92</option>
                                <option>+95</option>
                                <option>+24</option>
                              </select>
                              <input
                                type="tel"
                                id="textNumber"
                                name="primary"
                                className={`${styles.formControl} input form-control border-left-0`}
                                required
                              />
                              <label className={`${styles.label_heading} label_heading`} id="textNumber">
                                Phone Number
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </div>
                          <img
                           onClick={()=>{
                              deleteArr("whats",index)
                            }}
                            src="/static/delete 2.svg"
                            alt="delete"
                            role="button"
                            className="ml-3"
                          />
                        </div>
                        </>
                      )
                    })}
                    {/* <div className={`${styles.labelFloat} form-group`}>
                          <input type='text' id='phone' name="phone" className={`${styles.formControl} ${styles.input} input form-control`} required />
                          <label className={`label_heading_login`} htmlFor='phone'>Phone Number</label>
                        </div> */}
                    <div
                      className={`${styles.addMoreRows}`}
                      onClick={(e) => {
                        addMoreRows('number');
                      }}
                    >
                      <span style={{ fontSize: '2rem' }} className={`mr-2`}>
                        +
                      </span>{' '}
                      add another
                    </div>
                    <div className="d-flex justify-content-between">
                      <button onClick={handleClose} type="button" className={`${styles.close} ${styles.btn} btn mr-2 w-50`}>
                        Close
                      </button>
                      <button onClick={handleClose} type="button" className={`${styles.submit} ${styles.btn} btn ml-2 w-50`}>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="downloadLCDraft" role="tabpanel" aria-labelledby="download-LC-draft">
                <h3>Download as</h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className={`${styles.lc_document} ${styles.box} d-flex align-items-center`}>
                    <img src="/static/pdf-icon.png" width={`55px`} alt="PDF" className="img-fluid" />
                    <label for="lc_document">
                      Deliveryorder.pdf<span>128kb</span>
                    </label>
                    <input type="checkbox" className="ml-auto" id="lc_document" value="LC Document" />
                  </div>
                  <div className={`${styles.word_document} ${styles.box} d-flex align-items-center`}>
                    <img src="/static/doc-icon.png" width={`55px`} alt="DOC" className="img-fluid" />
                    <label for="word_document">
                      word document.doc<span>128kb</span>
                    </label>
                    <input type="checkbox" className="ml-auto" id="word_document" value="word document" />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <button onClick={handleClose} type="button" className={`${styles.close} ${styles.btn} btn mr-2 w-50`}>
                    Close
                  </button>
                  <button onClick={handleClose} type="button" className={`${styles.submit} ${styles.btn} btn ml-2 w-50`}>
                    Download
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Index;
