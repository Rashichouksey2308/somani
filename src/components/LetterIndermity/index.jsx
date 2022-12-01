/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import { useDispatch,useSelector } from 'react-redux';
import _get from 'lodash/get';
import SavePreviewBar from '../LetterIndermity/SavePreviewBar';
import Image from 'next/image';
import { UpdateTransitDetails } from '../../redux/TransitDetails/action';
import { toast } from 'react-toastify';
import moment from 'moment';
import { getInternalCompanies } from '../../redux/masters/action';

function Index({ TransitDetails }) {
  const dispatch = useDispatch();
  const { getInternalCompaniesMasterData } = useSelector((state) => state.MastersData);
  console.log(getInternalCompaniesMasterData,'getInternalCompaniesMasterData')
  let transId = _get(TransitDetails, `data[0]`, '');
  const [billsofLanding, setBillsofLanding] = useState([
    { 
      blnumber: 'BL-1',
      loadingPort: _get(TransitDetails, 'data[0].order.portOfDischarge', '').toUpperCase(),
      date: moment(_get(TransitDetails, 'data[0].BL.billOfLanding', [new Date()])[0].blDate).format('DD MMMM YYYY'),
    },
  ]);

  const [loi, setLOI] = useState({
    loiIssueDate: new Date(),
    blSurrenderDate: null,
    billOfLanding: billsofLanding,
    document: null,
    authorizedSignatory: {
      name: '',
      designation: '',
    },
  });
  const changeDesignation = (value) => {
    let temp = { ...loi };
    temp.authorizedSignatory.designation = value;
    setLOI({ ...loi });
  };

  useEffect(()=> {
    dispatch(getInternalCompanies());
  },[])
  useEffect(() => {
    if (_get(TransitDetails, 'data[0].LOI.billOfLanding', []).length > 0) {
      setBillsofLanding(_get(TransitDetails, 'data[0].LOI.billOfLanding', []));
    }
  }, [TransitDetails]);

  const onAddClick = () => {
    setBillsofLanding([
      ...billsofLanding,
      {
        blnumber: 'BL-1',
        loadingPort: _get(TransitDetails, 'data[0].order.portOfDischarge', '').toUpperCase(),
        date: moment(_get(TransitDetails, 'data[0].BL.billOfLanding', [new Date()])[0].blDate).format('DD MMMM YYYY'),
      },
    ]);
  };
  useEffect(() => {
    let existingData = _get(TransitDetails, `data[0].LOI`, {});
    if (existingData?.authorizedSignatory) {
      setLOI({
        loiIssueDate: new Date(),
        blSurrenderDate: null,
        billOfLanding: billsofLanding,
        document: null,
        authorizedSignatory: {
          name: existingData.authorizedSignatory.name,
          designation: existingData.authorizedSignatory.designation,
        },
      });
    }
  }, [TransitDetails]);
  const [bolArray, setBolArray] = useState([]);

  
  useEffect(() => {
    if (_get(TransitDetails, `data[0].BL.billOfLanding`, []).length > 0) {
      setBolArray(_get(TransitDetails, `data[0].BL.billOfLanding`, []));
    }
  }, [TransitDetails]);

  const SetAuthorisedSignatoryHanlder = (e) => {
    let signatory = e.target.value.split('-')
    if (e.target.value == '') {
      setLOI({ ...loi, authorizedSignatory: { name: '', designation: '' } });
    } else {
      setLOI({ ...loi, authorizedSignatory: { name: signatory[0], designation: signatory[1] } });
    }
  };

  const BolDropDown = (e, index) => {
    let temp = [...billsofLanding];

    let text = e.target.value;
    let thenum = text.match(/\d+/)[0];

    if (Number(thenum) <= 0) {
      thenum = 0;
    } else {
      thenum = Number(Number(thenum) - 1);
    }

    temp[index].blnumber = e.target.value;

    temp[index].date = moment(_get(TransitDetails, 'data[0].BL.billOfLanding', [new Date()])[thenum].blDate).format(
      'DD MMMM YYYY',
    );
    temp[index].loadingPort = _get(TransitDetails, 'data[0].order.portOfDischarge', '').toUpperCase();
    setBillsofLanding([...temp]);
  };

  const OnAddHandler = () => {
    let tempArray = billsofLanding;
    tempArray.push({
      blnumber: '',
      loadingPort: '',
      date: '',
    });
    setBillsofLanding(tempArray);
  };
  const onDeleteClick = (index) => {
    setBillsofLanding([...billsofLanding.slice(0, index), ...billsofLanding.slice(index + 1)]);
  };

  const isOptionAvailable = (elem, index) => {
    let returned = false;
    const filtered = billsofLanding.filter((item) => {
      return item.blnumber === elem;
    });
    if (filtered.length > 0) {
      returned = true;
    }
    return returned;
  };

  const saveData = () => {
    if (loi.authorizedSignatory.name === '') {
      let toastMessage = 'PLEase select authorized signatory';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    }

    sessionStorage.setItem('transitPId', transId._id);
    // const billOfLanding = [...bolList]
    const LOI = { ...loi };
    LOI.billOfLanding = billsofLanding;

    let fd = new FormData();
    fd.append('loi', JSON.stringify(LOI));
    fd.append('transitId', transId._id);
    let task = 'submit';
    dispatch(UpdateTransitDetails({ fd, task }));

    Router.push('/loi-preview');
  };

  return (
    <div className={`${styles.root} card container-fluid border-0 p-0`}>
      <div className={`${styles.content_container}`}>
        <div className={`${styles.heading} d-flex justify-content-end`}>
          <p>
            <span className={`${styles.title} `}>INDO GERMAN</span>
            <br />
            <span>INTERNATIONAL (P) LTD.</span>
            <br />
            CIN No.: U74899DL1 994PTC063676
          </p>
        </div>
        <div className={`${styles.aboutLetter}`}>
          <p>
            STANDARD FORM LETTER OF INDEMNITY TO BE GIVEN IN RETURN FOR DELIVERING CARGO WITHOUT PRODUCTION OF THE
            ORIGINAL BILL(S) OF LADING.
            <hr />
          </p>
        </div>
        <div className={`${styles.addressAndDAte} d-flex justify-content-between align-content-center`}>
          <div className={`d-flex`}>
            <span>To:</span>
            {'  '}
            <div className={`ml-3 ${styles.noadd} text-left text-uppercase font-weight-bold`}>
              {_get(TransitDetails, 'data[0].order.generic.seller.name')}
              {_get(TransitDetails, 'data[0].order.generic.seller.addresses[0].fullAddress')},{" "}
              {_get(TransitDetails, 'data[0].order.generic.seller.addresses[0].city')},{" "}
              {_get(TransitDetails, 'data[0].order.generic.seller.addresses[0].pinCode')},{" "}
              {_get(TransitDetails, 'data[0].order.generic.seller.addresses[0].country')}
            </div>
          </div>
          <div className="w-25 text-right">
            <span>DATE: </span> {moment(loi.loiIssueDate.toJSON().slice(0, 10).replace(/-/g, '/')).format('DD MMMM YYYY')}
          </div>
        </div>
        <div className={`${styles.salutations}`}>
          <div>Dear Sir,</div>
        </div>
        <div className={`d-flex ${styles.salutations}`}>
          <span>Ship:</span>
          {'  '}
          <div className={`ml-3 font-weight-bold`}>
            {_get(TransitDetails, 'data[0].order.generic.shippingLine.vesselName', '').toUpperCase()}
          </div>
        </div>
        <div className={`d-flex ${styles.salutations}`}>
          <span>Voyage:</span>
          {'  '}
          <div className={`ml-3 font-weight-bold`}>
            FROM {_get(TransitDetails, 'data[0].order.termsheet.transactionDetails.loadPort', '').toUpperCase()} TO{' '}
            {_get(TransitDetails, 'data[0].order.termsheet.transactionDetails.portOfDischarge', '').toUpperCase()}{' '}
          </div>
        </div>
        <div className={`d-flex  ${styles.salutations}`}>
          <span>Cargo:</span>
          {'  '}
          <div className={`ml-3 font-weight-bold`}>
            {_get(TransitDetails, 'data[0].order.quantity', '')?.toLocaleString('en-IN')}{' '}
            {_get(TransitDetails, 'data[0].order.unitOfQuantity', '').toUpperCase()}{' '}
            {_get(TransitDetails, 'data[0].order.commodity', '').toUpperCase()}
          </div>
        </div>
        <div className={`d-flex text-left ${styles.salutations}`}>
          <span className='text-nowrap'>Bill(s) of Lading:</span>
          {'  '}
          <div style={{ marginRight: '10px' }}>
            {billsofLanding.map((bills, index1) => (
              <>
                <div
                  key={index1}
                  className={`ml-3 word-wrap d-flex font-weight-bold justify-content-start align-items-center ${styles.salutationFeatures} `}
                >
                  <select
                    onChange={(e) => BolDropDown(e, index1)}
                    className="input"
                    value={billsofLanding[index1].blnumber}
                  >
                    {bolArray.map((element, index2) => (
                      <option
                        disabled={isOptionAvailable(`BL-${index2 + 1}`, index2)}
                        key={index2}
                        value={`BL-${index2 + 1}`}
                      >
                        BL-{index2 + 1}
                      </option>
                    ))}
                  </select>
                  Dated {billsofLanding[index1].date}, ISSUE AT{' '}
                  {_get(TransitDetails, 'data[0].order.portOfDischarge', '').toUpperCase()}{' '}
                  {bolArray.length - 1 > index1 ? (
                    index1 === billsofLanding.length - 1 ? (
                      <button onClick={() => onAddClick()} 
                      className={`${styles.add_btn}`}
                      >
                        <span className={`${styles.add_sign}`}>+</span>Add
                      </button>
                    ) : null
                  ) : null}
                  {index1 > 0 ? (
                    <div className={`${styles.delete_image} ml-3`} onClick={() => onDeleteClick(index1)}>
                      <Image src="/static/delete.svg" width="40px" height="40px" alt="Bin" />
                    </div>
                  ) : null}
                </div>
              </>
            ))}
          </div>
        </div>

        <div className={styles.body}>
          <p>
            The above cargo was shipped on the above ship by{' '}
            <span className={`${styles.bold} text-uppercase`}>
              {_get(TransitDetails, 'data[0].order.generic.supplier.name')},
              {_get(TransitDetails, 'data[0].order.generic.supplier.addresses[0].fullAddress')},{' '}
              {_get(TransitDetails, 'data[0].order.generic.supplier.addresses[0].city')},{' '}
              {_get(TransitDetails, 'data[0].order.generic.supplier.addresses[0].country')},
              {_get(TransitDetails, 'data[0].order.generic.supplier.addresses[0].pinCode')}
            </span>
            and consigned to <span className={styles.bold}>TO ORDER</span> for delivery at the port of{' '}
            <span className={styles.bold}>ANY PORT (S) IN INDIA </span> but the bill of Lading has not arrived and we,{' '}
            {_get(TransitDetails, 'data[0].order.generic.buyer.name', '').toUpperCase()},
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', '').toUpperCase()},{' '}
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].state', '').toUpperCase()},
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].country', '').toUpperCase()}, hereby request
            you to deliver the said cargo to{' '}
            {_get(TransitDetails, 'data[0].order.generic.buyer.name', '').toUpperCase()},
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', '').toUpperCase()},{' '}
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].state', '').toUpperCase()},
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].country', '').toUpperCase()} or to such
            party as you believe to be or to represent{' '}
            {_get(TransitDetails, 'data[0].order.generic.buyer.name', '').toUpperCase()},
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', '').toUpperCase()},{' '}
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].state', '').toUpperCase()},
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].country', '').toUpperCase()} or to be acting
            on behalf of {''}
            {_get(TransitDetails, 'data[0].order.generic.buyer.name', '').toUpperCase()},
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].fullAddress', '').toUpperCase()},{' '}
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].state', '').toUpperCase()},
            {_get(TransitDetails, 'data[0].order.generic.buyer.addresses[0].country', '').toUpperCase()} at{' '}
            <span className={styles.bold}>
              {_get(TransitDetails, 'data[0].order.termsheet.transactionDetails.portOfDischarge', '').toUpperCase()}{' '}
            </span>{' '}
            without production of the original Bill of Lading.
          </p>

          <div className={`${styles.list}`}>
            <p>
              In consideration of your accepting our request and/or complying with, or taking any steps to comply with,
              or attempting to comply with our above request, we hereby agree as follows :{' '}
            </p>
            <ol>
              <li>
                To indemnify you, your servants, agents and any third party affiliated or associated with Torvald
                Klaveness and to hold all of you harmless in respect of any liability, loss, damage or expense of
                whatsoever nature which you may sustain by reason of delivering the cargo in accordance with our
                request.{' '}
              </li>
              <li>
                In the event of any proceedings being commenced against you or any other person or third party mentioned
                under No. 1 above in connection with the delivery of the cargo as aforesaid, to provide you or them on
                demand with sufficient funds to defend the same.{' '}
              </li>
              <li>
                If, in connection with the delivery of the cargo as aforesaid, the ship, or any other ship or property
                in the same or affiliated/associated ownership, management or control, should be arrested or detained or
                should the arrest or detention thereof be threatened, or should there be any interference in the use or
                trading of the vessel (whether by virtue of a caveat being entered on the ship's registry or otherwise
                howsoever), to provide on demand such bail or other security as may be required to prevent such arrest
                or detention or to secure the release of such ship or property or to remove such interference and to
                indemnify you in respect of any liability, loss, damage or expense caused by such arrest or detention or
                threatened arrest or detention or such interference, whether or not such arrest or detention or
                threatened arrest or detention or such interference may be justified.{' '}
              </li>
              <li>
                If the place at which we have asked you to make delivery is a bulk liquid or gas terminal or facility,
                or another ship, lighter or barge, then delivery to such terminal, facility, ship, lighter or barge
                shall be deemed to be delivery to the party to whom we have requested you to make such delivery.{' '}
              </li>
              <li>
                As soon as all original bills of lading for the above cargo shall have come into our possession, to
                deliver the same to you, or otherwise to cause all original bills of lading to be delivered to you,
                whereupon our liability hereunder shall cease.{' '}
              </li>
              <li>
                The liability of each and every person under this indemnity shall be joint and several and shall not be
                conditional upon your proceeding first against any person, whether or not such person is party to or
                liable under this indemnity.{' '}
              </li>
              <li>
                This indemnity shall be governed by and construed in accordance with English law and each and every
                person liable under this indemnity shall at your request submit to the Jurisdiction of the High Court of
                Justice of England.{' '}
              </li>
            </ol>
          </div>
        </div>
        <div className={`${styles.footerSalutations} ${styles.salutations}`}>
          <div style={{ fontWeight: 'normal' }}>Yours faithfully</div>
          <div style={{ fontWeight: 'normal' }}>For and on behalf of</div>
          <div className={styles.bold}>
            {_get(TransitDetails, 'data[0].order.generic.buyer.name', '').toUpperCase()}
          </div>
          <div style={{ fontWeight: 'normal' }}>The Requestor</div>
          <div className={`${styles.athorised}`}>
            <div style={{ fontWeight: 'bold' }}>Authorised Signatory</div>

            <div>
              Name:{' '}
              <select
                value={loi.authorizedSignatory.name !== '' ? `${loi.authorizedSignatory.name}-${loi.authorizedSignatory?.designation}` : 'select'}
                onChange={(e) => SetAuthorisedSignatoryHanlder(e)}
                className={`${styles.input_field} ${styles.customSelect} input mt-2 pl-3`}
              >
                <option value="select" disabled defaultSelected>
                  Select an option
                </option>
                {getInternalCompaniesMasterData?.map((item,value)=> {
                  if (item.Company_Name == 'INDO GERMAN INTERNATIONAL PRIVATE LIMITED' && item?.authorisedSignatoryDetails[0]?.name ){
                    return <option value={`${item?.authorisedSignatoryDetails[0]?.name}-${item?.authorisedSignatoryDetails[0]?.designation}`}>{item?.authorisedSignatoryDetails[0]?.name}</option>
                  }
                })}
              </select>
              <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
            </div>

            <div>
              Designation:{' '}
              <input
                className="mt-2 pl-3 input"
                value={loi.authorizedSignatory.designation}
                onChange={(e) => {
                  changeDesignation(e.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className={`${styles.footer} mt-5`}>
          <p className="border_color">7A., 'SAGAR', 6 Tilak Marg, New Dethi-11OOO1 (INDIA)</p>
          <div className={`${styles.inner} d-flex justify-content-between`}>
            <div>
              <strong>Joint Venture of</strong>
              <br />
              Thyssehkrupp Mannex GMBH
              <br />
              Essen
              <br />
              Germany
            </div>
            <div>
              Phones (91)-(1 1)-4315-8000, 237&2022, 2338-7413
              <br />
              Fax : (91) (1 1) 2378-2806
              <br />
              E-mail : indogerman@somanigroup.com
            </div>
            <div>
              <strong>Joint Venture of</strong>
              <br />
              Somani Group
              <br />
              New Delhi
              <br />
              lndia
            </div>
          </div>
        </div>
      </div>

      <SavePreviewBar
        // openbar={saveData}
        isDownload={false}
        rightBtn="Save &amp; Preview"
        rightBtnClick={saveData}
      />
    </div>
  );
}

export default Index;
