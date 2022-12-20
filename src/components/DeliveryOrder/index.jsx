/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './index.module.scss';
import SaveBar from '../SaveBar';
import _get from 'lodash/get';
import Router from 'next/router';
import { toast } from 'react-toastify';
import moment from 'moment';
export default function Index(props) {
  const [show, setShow] = useState(false);
  const [isFieldInFocus, setIsFieldInFocus] = useState(false);

  const handleRoute = (val,index) => {
   
    if(val.Quantity==""){
       let toastMessage = 'PLS SELECT ADD QUANTITY RELEASED';
      if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                
        }
        return
    }
    let toRemove=0
    props.releaseOrderData.forEach((release,i)=>{
      if(i<=index){
        if(release.status !== "DO Cancelled"){
            toRemove=toRemove+Number(release.Quantity)
        }
       
      }
    })
    const finalValue=Number(boeTotalQuantity)-Number(toRemove)
  
    sessionStorage.setItem('deliveryPreviewId',val.deliveryOrderNo);
    sessionStorage.setItem('dono', val.deliveryOrderNo);
    sessionStorage.setItem('toRemove', finalValue);
    
    sessionStorage.setItem('balanceQuantity', Number(val.Quantity));
    Router.push('/delivery-preview');
  };

  let boe = _get(props, 'ReleaseOrder.data[0].order.customClearance.billOfEntry.billOfEntry', []);
  const boeTotalQuantity = boe?.reduce((accumulator, object) => {
    return accumulator + Number(object.boeDetails.invoiceQuantity);
  }, 0);

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h3 className={`${styles.heading}`}>Delivery Order</h3>
              <div className="d-flex">
                <span>+</span>
              </div>
            </div>
            <div
              id="lcApplication"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                    <div className={`${styles.label} text`}>Commodity</div>
                    <span className={styles.value}>{_get(props, 'ReleaseOrder.data[0].order.commodity', '')}</span>
                  </div>
                  <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                    <div className={`${styles.label} text`}>Invoice Quantity</div>
                    <span className={styles.value}>
                      {Number(boeTotalQuantity)?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })}{' '}
                      {_get(props, 'ReleaseOrder.data[0].order.unitOfQuantity', '').toUpperCase()}
                    </span>
                  </div>

                  <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                    <div className={`${styles.label} text`}>Balance Quantity</div>
                    <span className={styles.value}>
                      {props.BalanceQuantity()?.toLocaleString('en-In', {
                        maximumFractionDigits: 2,
                      })}{' '}
                      {_get(props, 'ReleaseOrder.data[0].order.unitOfQuantity', '').toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.dashboard_form} border_color card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                {' '}
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <div className="row mb-3">
                      {props.releaseOrderData.map((val, index) => {
                        return (
                          <>
                            <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                              <div className="d-flex">
                                <select
                                  value={props.releaseOrderData[index].orderNumber}
                                  name="orderNumber"
                                  onChange={(e) => props.deliverChange(e.target.name, e.target.value, index)}
                                  disabled={!val.isDelete}
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                >
                                  <option disabled  value="">Select an option</option>
                                  
                                  {_get(props, 'ReleaseOrder.data[0].releaseDetail', []).map((option, index) => (
                                    <option value={option.orderNumber} key={index}
                                    disabled=
                                    {props.isDisabled(option.orderNumber)}
                                    >
                                      {option.orderNumber}
                                    </option>
                                  ))}
                                  <option value="Not Available">Not Available</option>
                                </select>
                                <label className={`${styles.label_heading} label_heading`}>Release Order No.</label>
                                <img
                                  className={`${styles.arrow} image_arrow img-fluid`}
                                  src="/static/inputDropDown.svg"
                                  alt="Search"
                                />
                              </div>
                            </div>
                            <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                              {val.isDelete ? (
                                <div className="d-flex">
                                  <input
                                    onWheel={(event) => event.currentTarget.blur()}
                                    onFocus={(e) => {
                                      setIsFieldInFocus(true), (e.target.type = 'number');
                                    }}
                                    onBlur={(e) => {
                                      setIsFieldInFocus(false), (e.target.type = 'text');
                                    }}
                                    type="text"
                                    value={
                                      isFieldInFocus
                                        ? val.Quantity
                                        : Number(val.Quantity)?.toLocaleString('en-IN') +
                                          ` ${_get(props, 'ReleaseOrder.data[0].order.unitOfQuantity', '')}`
                                    }
                                    name="Quantity"
                                    onChange={(e) => {
                                      props.deliverChange(e.target.name, e.target.value, index);
                                    }}
                                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  />

                                  <label className={`${styles.label_heading} label_heading`}>Quantity Released</label>
                                </div>
                              ) : (
                                <>
                                  <div className={`${styles.label} text`}>Quantity Released</div>
                                  <span className={styles.value}>
                                    {val.Quantity
                                      ? Number(val.Quantity)?.toLocaleString('en-In') +
                                        ' ' +
                                        _get(props, 'ReleaseOrder.data[0].order.unitOfQuantity', '')
                                      : ''}
                                  </span>
                                </>
                              )}
                            </div>
                            <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                              <div className={`${styles.label} text`}>Delivery Order No.</div>
                              <span className={`${styles.value} text-nowrap`}>{val.deliveryOrderNo}</span>
                            </div>
                            <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                              <div className={`${styles.label} text`}>Delivery Order Date</div>
                              <span className={styles.value}>{
                                val.deliveryOrderDate?
                                  moment(val.deliveryOrderDate).format("DD-MM-YYYY")
                                :""
                            
                             }</span>
                            </div>
                            <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                              <div className="row" style={{ marginTop: '-40px' }}>
                                <div className={`${styles.form_group} col-lg-5 col-md-5`}>
                                  <div className={`${styles.label} text`}>Status</div>
                                  <span className={styles.value}>{val.status}</span>
                                </div>

                                {val.isDelete ? (
                                  <div className={`${styles.form_group} col-md-7`}>
                                    <img
                                      src="/static/save-3.svg"
                                      className={`${styles.shareImg}`}
                                      alt="Save"
                                      onClick={(e) => {
                                        props.onEdit(index, false,"Save");
                                      }}
                                    />
                                    <img
                                      src="/static/cancel-3.svg"
                                      className={`${styles.shareImg} ml-2`}
                                      onClick={(e) => {
                                        props.cancelDo(index, false);
                                      }}
                                      alt="Cancel"
                                    />

                                    {props.releaseOrderData.length > 1 && (
                                      <img
                                        className={`${styles.shareImg} border-0 p-0 bg-transparent ml-2`}
                                        src="/static/delete 2.svg"
                                        alt="Search"
                                        onClick={(e) => {
                                          props.deleteNewDelivery(index);
                                        }}
                                      />
                                    )}
                                  </div>
                                ) : (
                                  <div className={`${styles.form_group} col-md-7`}>
                                    <img
                                      src="/static/mode_edit.svg"
                                      className={`${styles.shareImg}`}
                                      alt="Edit"
                                      onClick={(e) => {
                                        props.onEdit(index, true);
                                      }}
                                    />

                                    <img
                                      src="/static/share.svg"
                                      className={`${styles.shareImg} ml-2`}
                                      alt="Share"
                                      onClick={() => handleRoute(val,index)}
                                    />

                                    {props.releaseOrderData.length > 1 && (
                                      <img
                                        className={`${styles.shareImg} border-0 p-0 bg-transparent ml-2`}
                                        src="/static/delete 2.svg"
                                        alt="Search"
                                        onClick={(e) => {
                                          props.deleteNewDelivery(index);
                                        }}
                                      />
                                    )}
                                    {props.releaseOrderData.length - 1 === index && props.BalanceQuantity() > 0 && (
                                      <img
                                        onClick={(e) => {
                                          props.addNewDelivery();
                                        }}
                                        src="/static/add-btn.svg"
                                        className={`${styles.shareImg} border-0 p-0 ml-2 bg-transparent`}
                                        alt="add"
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.dashboard_form} border_color card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                <div className="row">
                  <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `} style={{ top: '5px' }}>
                    <div className="d-flex">
                      <select
                        onChange={(e) => props.setLastMileDelivery(e.target.value)}
                        value={props.lastMileDelivery}
                        className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                      >
                        <option>Select an option</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                      <label className={`${styles.label_heading} label_heading`}>Last Mile Delivery</label>
                      <img
                        className={`${styles.arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SaveBar
          handleSave={props.onSaveHAndler}
          rightBtn="null"
        />
      </div>
    </>
  );
}
