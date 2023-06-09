/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Row } from 'react-bootstrap';
import SaveBar from '../SaveBar';
import DateCalender from '../DateCalender';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllForwardHedging, UpdateForwardHedging } from 'redux/ForwardHedging/action';
// import { UploadDocument } from 'redux/registerBuyer/action'
import UploadOther from '../UploadOther';
import _get from 'lodash/get';
import API from '../../utils/endpoints';
import Cookies from 'js-cookie';
import Axios from 'axios';
import { setDynamicName, setDynamicOrder, setPageName } from '../../redux/userData/action';
import moment from 'moment';
import { toast } from 'react-toastify';
import { returnDocFormat } from '@/utils/helpers/global';

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    let ForwardHeading = sessionStorage.getItem('headgingId');
    dispatch(GetAllForwardHedging(`?forwardHedgingId=${ForwardHeading}`));
  }, [dispatch]);

  const { allForwardHedging } = useSelector((state) => state.ForwardHedging);

  let hedgingData = _get(allForwardHedging, 'data[0]', '');
  let hedgingDataDetail = _get(allForwardHedging, 'data[0].detail[0]', {});

  useEffect(() => {
    dispatch(setPageName('forward'));
    dispatch(setDynamicName(_get(allForwardHedging, 'data[0].company.companyName')));
    dispatch(setDynamicOrder(_get(allForwardHedging, 'data[0].order.orderId', {})));
  }, [allForwardHedging]);
  const [list, setList] = useState([
    {
      bankName: '',
      currency: 'INR',
      bookedRate: '',
      bookedRateCurrency: 'INR',
      bookedAmount: '',
      validityFrom: '',
      validityTo: '',
      closingDate: '',
      closingRate: '',
      remarks: '',
      balanceAmount: '',
      forwardSalesContract: null,
    },
  ]);
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    bookedRate: false,
    bookedAmount: false,
    closingRate : false
  });
  const onDeleteClick = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  useEffect(() => {
    setList([
      {
        bankName: hedgingDataDetail?.bankName ?? '',
        currency: hedgingDataDetail?.currency || 'INR',
        bookedRate: hedgingDataDetail?.bookedRate ?? '',
        bookedRateCurrency: hedgingDataDetail?.bookedRateCurrency || 'INR',
        bookedAmount: hedgingDataDetail?.bookedAmount ?? '',
        validityFrom: hedgingDataDetail?.validityFrom,
        validityTo: hedgingDataDetail?.validityTo,
        closingDate: hedgingDataDetail?.closingDate || '',
        closingRate: hedgingDataDetail?.closingRate|| '',
        remarks: hedgingDataDetail?.remarks,
        balanceAmount: hedgingDataDetail?.balanceAmount,
        forwardSalesContract: hedgingDataDetail?.forwardSalesContract,
      },
    ]);
  }, [hedgingData]);

  const onAddForwardHedging = () => {
    setList((prevState) => {
      return [
        ...prevState,
        {
          bankName: '',
          currency: 'INR',
          bookedRate: '',
          bookedRateCurrency: 'INR',
          bookedAmount: '',
          validityFrom: '',
          validityTo: '',
          closingDate: '',
          closingRate: '',
          remarks: '',
          balanceAmount: '',
          forwardSalesContract: null,
        },
      ];
    });
  };

  const saveHedgingData = (name, value, index = 0) => {
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: value,
          };
        }
        return obj;
      });
      return newState;
    });
  };

  const saveDate = (value, name, index) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveHedgingData(name, text, index);
  };

  const uploadDocument = async (e) => {
    let fd = new FormData();
    fd.append('document', e.target.files[0]);

    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      let response = await Axios.post(`${API.corebaseUrl}${API.customClearanceDoc}`, fd, {
        headers: headers,
      });

      if (response.data.code === 200) {
        return response.data.data;
      } else {
      }
    } catch (error) {}
  };

  const uploadDocument1 = async (e, index) => {
    const doc = await uploadDocument(e);
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            forwardSalesContract: doc,
          };
        }
        return obj;
      });
      return newState;
    });
  };

  const [cancel, setCancel] = useState(false);

  const handleCancel = () => {
    setCancel(true);
  };

  const handleClose = (index) => {
    let tempArr = [...list];
    tempArr[index].forwardSalesContract = null;
    setList(tempArr);
  };

  const [editInput, setEditInput] = useState(true);

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false);
    } else {
      setEditInput(true);
    }
  };

  const handleSave = () => {
    let hedgingObj = [...list];

    hedgingObj.balanceAmount = list.bookedAmount;

    let obj = {
      forwardHedgingId: hedgingData?._id,
      detail: hedgingObj,
    };
    let task = 'save';
    dispatch(UpdateForwardHedging({ obj, task }));
  };

  const validation = () => {
    let isOk = true;
    for (let i = 0; i < list.length; i++) {
      if (list[i].bankName === null || list[i].bankName === undefined || list[i].bankName === '') {
        let toastMessage = `Please enter bank name ${i} `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
      if (list[i].currency === null || list[i].currency === undefined || list[i].currency === '') {
        let toastMessage = `Please enter currency ${i}`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
      if (list[i].bookedRate === null || list[i].bookedRate === undefined || list[i].bookedRate === '') {
        let toastMessage = `Please enter booked Rate ${i}`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
      if (list[i].bookedAmount === null || list[i].bookedAmount === undefined || list[i].bookedAmount === '') {
        let toastMessage = `Please enter booked Amount ${i}`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
      if (list[i].validityFrom === null || list[i].validityFrom === undefined || list[i].validityFrom === '') {
        let toastMessage = `Please enter validity From ${i}`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
      if (list[i].validityTo === null || list[i].validityTo === undefined || list[i].validityTo === '') {
        let toastMessage = `Please enter validity To ${i}`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
      if (list[i].validityTo === null || list[i].validityTo === undefined || list[i].validityTo === '') {
        let toastMessage = `Please enter validity To ${i}`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
      if (cancel){
        if (
          list[i].closingRate === null ||
          list[i].closingRate === undefined ||
          list[i].closingRate === ''
        ) {
          let toastMessage = `Please add Closing RAte  ${i}`;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          isOk = false;
          break;
        }
        if (
          list[i].closingDate === null ||
          list[i].closingDate === undefined ||
          list[i].closingDate === ''
        ) {
          let toastMessage = `Please add Closing Date  ${i}`;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          isOk = false;
          break;
        }
      }
      if (
        list[i].forwardSalesContract === null ||
        list[i].forwardSalesContract === undefined ||
        list[i].forwardSalesContract === ''
      ) {
        let toastMessage = `Please add forward Sale Contract ${i}`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        isOk = false;
        break;
      }
    }
    return isOk;
  };
  const handleSubmit = () => {
    if (validation()) {
      let hedgingObj = [...list];

      let obj = {
        forwardHedgingId: hedgingData?._id,
        detail: hedgingObj,
      };
      let task = 'submit';
      dispatch(UpdateForwardHedging({ obj, task }));
      router.push(`/track-shipment`);
    }
  };

  return (
    <>
      <div className={`${styles.backgroundMain} p-0 container-fluid`}>
        <div className={styles.main_page}>
          <div className={`${styles.head_header} align-items-center`}>
            <img
              onClick={() => Router.push('/forward-table')}
              className={`${styles.back_arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />

            <h1 className={`${styles.heading}`}>{hedgingData?.company?.companyName} </h1>
          </div>
          <div className={`${styles.vessel_card} vessel_card border_color`}>
            <div className={`${styles.main}  border_color card `}>
              {list.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                    >
                      <h3 className={`${styles.heading}`}>Forward Hedging</h3>
                      <div className="d-flex align-items-center">
                        <button
                          className={styles.add_btn}
                          onClick={() => {
                            onAddForwardHedging();
                          }}
                        >
                          <span className={styles.add_sign}>+</span>Add
                        </button>
                        {index > 0 ? (
                          <button
                            onClick={() => onDeleteClick(index)}
                            className={`${styles.add_btn} border-danger text-danger`}
                          >
                            <img src="/static/delete.svg" className="ml-1 mt-n1" width={13} alt="delete" /> Delete
                          </button>
                        ) : null}
                      </div>
                    </div>
                    <div className={`${styles.dashboard_form} pb-5 card-body`}>
                      <div className="row">
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                          <div className="d-flex">
                            <input
                              name="bankName"
                              onChange={(e) => saveHedgingData(e.target.name, e.target.value, index)}
                              value={item.bankName}
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                            
                            </input>
                            <label className={`${styles.label_heading} label_heading`}>
                              Bank Name
                              <strong className="text-danger">*</strong>
                            </label>
                           
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`}>
                          <div className="d-flex">
                            <select
                              value={item.currency}
                              name="currency"
                              onChange={(e) => saveHedgingData(e.target.name, e.target.value, index)}
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option selected>Select an option</option>
                              <option value="INR">INR</option>
                              <option value="USD">USD</option>
                              <option value="EURO">EURO</option>
                              <option value="POUND">POUND</option>
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>
                              Currency<strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            onFocus={(e) => {
                              setIsFieldInFocus({
                                ...isFieldInFocus,
                                bookedRate: true,
                              }),
                                (e.target.type = 'number');
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus({
                                ...isFieldInFocus,
                                bookedRate: false,
                              }),
                                (e.target.type = 'text');
                            }}
                            name="bookedRate"
                            onWheel={(event) => event.currentTarget.blur()}
                            value={
                              isFieldInFocus.bookedRate
                                ? item.bookedRate
                                : `${item.currency} ` + item.bookedRate
                                ? Number(item.bookedRate)?.toLocaleString(item.currency == 'INR' ? 'en-IN' : 'en-US')
                                : ''
                            }
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                            onChange={(e) => saveHedgingData(e.target.name, e.target.value, index)}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Booked @<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            required
                            onWheel={(event) => event.currentTarget.blur()}
                            onFocus={(e) => {
                              setIsFieldInFocus({
                                ...isFieldInFocus,
                                bookedAmount: true,
                              }),
                                (e.target.type = 'number');
                            }}
                            onBlur={(e) => {
                              setIsFieldInFocus({
                                ...isFieldInFocus,
                                bookedAmount: false,
                              }),
                                (e.target.type = 'text');
                            }}
                            name="bookedAmount"
                            value={
                              isFieldInFocus.bookedAmount
                                ? item.bookedAmount
                                : `${item.currency} ` +
                                  Number(item.bookedAmount)?.toLocaleString(item.currency == 'INR' ? 'en-IN' : 'en-US')
                            }
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                            onChange={(e) => saveHedgingData(e.target.name, e.target.value, index)}
                          />
                          <label className={`${styles.label_heading} label_heading`}>
                            Booked Amount
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>

                        <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`}>
                          <div className="d-flex">
                            <DateCalender
                              name="validityFrom"
                              defaultDate={item?.validityFrom ?? ''}
                              saveDate={saveDate}
                              labelName="Validity from"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`}>
                          <div className="d-flex">
                            <DateCalender
                              name="validityTo"
                              startFrom={item?.validityFrom != '' && moment(item.validityFrom).format('DD-MM-YYYY')}
                              defaultDate={item?.validityTo ?? ''}
                              saveDate={saveDate}
                              labelName="Validity to"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_group} align-self-center col-lg-2 col-md-6 col-sm-6 `}>
                          <button onClick={() => handleCancel()} className={`${styles.cancel_btn}`}>
                            Cancel
                          </button>
                        </div>
                        <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                          <div className={`${styles.label} text mt-n1`}>Balance Amount</div>
                          <span className={`${styles.value}`}>
                            {item.currency}{' '}
                            {item?.bookedAmount
                              ? Number(item?.bookedAmount)?.toLocaleString(item.currency == 'INR' ? 'en-IN' : 'en-US')
                              : ''}
                          </span>
                        </div>
                      </div>
                      {cancel || item?.closingDate  ? (
                        <Row>
                          <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                            <input
                              className={`${styles.input_field} input form-control`}
                              type="text"
                              onWheel={(event) => event.currentTarget.blur()}
                              required
                              onFocus={(e) => {
                                setIsFieldInFocus({
                                  ...isFieldInFocus,
                                  closingRate: true,
                                }),
                                  (e.target.type = 'number');
                              }}
                              onBlur={(e) => {
                                setIsFieldInFocus({
                                  ...isFieldInFocus,
                                  closingRate: false,
                                }),
                                  (e.target.type = 'text');
                              }}
                              value={
                                isFieldInFocus.closingRate
                                  ? item?.closingRate
                                  : Number(item?.closingRate)?.toLocaleString(item.currency == 'INR' ? 'en-IN' : 'en-US')
                              }
                              name="closingRate"
                              // value={item?.closingRate}
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onChange={(e) => saveHedgingData(e.target.name, e.target.value, index)}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                              Closing Rate
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                          <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                            <div className="d-flex">
                              <DateCalender defaultDate={item?.closingDate}  name="closingDate" saveDate={saveDate} labelName="Closing Date" />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </div>
                        </Row>
                      ) : (
                        ''
                      )}

                      <div className="mt-5">
                        <div className="position-relative">
                          <input
                            as="textarea"
                            rows={3}
                            name="remarks"
                            defaultValue={list?.remarks}
                            required
                            onChange={(e) => saveHedgingData(e.target.name, e.target.value, index)}
                            className={`${styles.comment_field} input form-control`}
                          />
                          <label className={`${styles.label_comment} ${styles.label_heading} label_heading`}>
                            Remarks
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.table_container}`}>
                      <div className={styles.table_scroll_outer}>
                        <div className={styles.table_scroll_inner}>
                          <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                              <tr>
                                <th>
                                  DOCUMENT NAME{' '}
                                  <img
                                    className={`${styles.sort_image} mb-1`}
                                    src="/static/icons8-sort-24.svg"
                                    alt="Sort icon"
                                  />
                                </th>
                                <th>
                                  FORMAT{' '}
                                  <img
                                    className={`${styles.sort_image} mb-1`}
                                    src="/static/icons8-sort-24.svg"
                                    alt="Sort icon"
                                  />
                                </th>
                                <th>
                                  DOCUMENT DATE{' '}
                                  <img
                                    className={`${styles.sort_image} mb-1`}
                                    src="/static/icons8-sort-24.svg"
                                    alt="Sort icon"
                                  />
                                </th>
                                <th width="30%">ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Forward Sales Contract
                                  <strong className="text-danger ml-1">*</strong>
                                </td>
                                <td>
                                {item?.forwardSalesContract?.originalName ? returnDocFormat(item?.forwardSalesContract?.originalName) : null}
                                </td>
                                <td className={styles.doc_row}>
                                  {item?.forwardSalesContract == null
                                    ? ''
                                    : moment(item?.forwardSalesContract.date).format('DD-MM-YYYY , h:mm a ')}
                                </td>
                                <td>
                                  {item && item?.forwardSalesContract == null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          type="file"
                                          name="myfile"
                                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                          onChange={(e) => uploadDocument1(e, index)}
                                        />
                                        <button className={`${styles.button_upload} btn`}>Upload</button>
                                      </div>
                                    </>
                                  ) : (
                                    <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                      <span>{item?.forwardSalesContract?.originalName}</span>
                                      <img
                                        className={`${styles.close_image} image_arrow`}
                                        src="/static/close.svg"
                                        onClick={() => handleClose(index)}
                                        alt="Close"
                                      />{' '}
                                    </div>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="mt-4">
              <UploadOther module={['3rd Party Inspection','Plot Inspection',"Bill of Lading","Letter of Indemnity","BL Surrender","Forward Hedging","CIMS","IGM","Intercompany Invoicing"]  } orderid={hedgingData?.order?._id} />
            </div>
          </div>
        </div>

        <SaveBar handleSave={handleSave} rightBtn="Submit" rightBtnClick={handleSubmit} />
      </div>
    </>
  );
}
