/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import moment from 'moment';
import { convertValue, CovertvaluefromtoCR } from '../../utils/helper';

import DateCalender from '../DateCalender';
import { returnReadableNumber } from '@/utils/helpers/global';

function Index({
  handleChange,
  reviewedProfile,
  isAddedRow,
  payloadData,
  setFields,
  fields,
  setPayloadData,
  country,
  port,
  commodity,
}) {
  const [transactionTypeDropdown, settransactionTypeDropdown] = useState(['Import', 'Domestic']);

  const commodityDropdown = ['Iron', 'Crude', 'Steel', 'Coal'];
  const countryOfOriginDropdown = ['India', 'Australia', 'Sri Lanka', 'Qatar', 'Dubai'];
  const portOfDischargeDropdown = ['Mumbai, India', 'Gujrat, India', 'Vishakapatnam, India'];
  useEffect(() => {
    if (reviewedProfile) {
      if (reviewedProfile?.transactionType?.originalValue == 'Domestic') {
        settransactionTypeDropdown(['Import']);
      } else if (reviewedProfile?.transactionType?.originalValue == 'Import') {
        settransactionTypeDropdown(['Domestic']);
      } else {
        settransactionTypeDropdown(['Import', 'Domestic']);
      }
    }
  }, [reviewedProfile]);
  const typeOfBusinessDropdown = ['Manufacturer', 'Trader', 'Retail'];

  const [isFieldInFocus, setIsFieldInFocus] = useState({ turnover: false, orderValue: false });
  const DropDown = (values, name, disabled) => {
    return (
      <div className="d-inline-flex align-items-center position-relative">
        <Form.Select
          size="sm"
          name={name}
          className={`${styles.dropDown} ${styles.customSelect} input dropDown`}
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
          value={payloadData[name] ?? ''}
          disabled={disabled}
        >
          {' '}
          <option value="">Select an option</option>
          {values.map((options) => {
            return <option>{options}</option>;
          })}{' '}
        </Form.Select>
        <img className={`${styles.arrow2} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
      </div>
    );
  };

  const clearData = () => {
    document.getElementById('ReviewProfileForm').reset();
    let inputs = document.querySelectorAll('#checkBoxId');
    inputs.forEach((item)=> item.checked = false)
    let tempArr = [...fields]
    tempArr.forEach((item)=> {
      return item.isEdit = true
    })
    setFields(tempArr)
    setPayloadData({
      action: 'APPROVE',
    })
  };

  const handleCheckBox = (index, name) => {
    let tempArr = [...fields];
    tempArr[index].isEdit = !tempArr[index].isEdit;
    setFields([...tempArr]);

    let tempObj = payloadData;
    delete tempObj[name];
    if (tempArr[index]) {
      setPayloadData(tempObj);
    }
  };

  return (
    <div className={`${styles.leads} border card`}>
      <div className={`${styles.tableFilter} tableFilter d-flex justify-content-between align-items-center`}>
        <h3>Review Profile</h3>
        <div className={`${styles.pageList}  d-flex justify-content-center align-items-center`} onClick={clearData}>
          <span>Clear All</span>
        </div>
      </div>
      <div className={`${styles.scrollouter}`}>
        <div className={`${styles.scrollInner}`}>
          <form id="ReviewProfileForm">
            <table className={styles.table} cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th className={`${styles.table_heading} border_color table_heading`}>CATEGORIES</th>
                  <th className={`${styles.table_heading} border_color table_heading`}>VALUES</th>
                  <th className={`${styles.table_heading} border_color text-center table_heading`}>API RESPONSE</th>
                  <th className={`${styles.table_heading} border_color table_heading`}>MANUAL APPROVAL</th>
                  <th className={`${styles.table_heading} border_color table_heading`}>REVIEWED VALUE</th>
                </tr>
              </thead>

              <tbody>
                <tr className={`${styles.table_row} table_row`}>
                  <td>Transaction Type</td>
                  <td>{reviewedProfile?.transactionType?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.transactionType?.apiResponse ? '/static/check.svg' : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.transactionType?.apiResponse ? (
                      <input
                        id='checkBoxId'
                        onChange={(e) => handleCheckBox(0, 'transactionType')}
                        className={styles.checkBox}
                        type="checkbox"
                      />
                    ) : null}
                  </td>
                  <td>
                    {!reviewedProfile?.transactionType?.apiResponse &&
                      DropDown(transactionTypeDropdown, 'transactionType', fields[0]?.isEdit)}
                  </td>
                </tr>
                <tr className={`${styles.table_row} table_row`}>
                  <td>Type Of Business</td>
                  <td>{reviewedProfile?.typeOfBusiness?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={reviewedProfile?.typeOfBusiness?.apiResponse ? '/static/check.svg' : '/static/close-b.svg'}
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.typeOfBusiness?.apiResponse ? (
                      <input
                        id='checkBoxId'
                        onChange={(e) => handleCheckBox(1, 'typeOfBusiness')}
                        className={styles.checkBox}
                        type="checkbox"
                      />
                    ) : null}
                  </td>
                  <td>
                    {!reviewedProfile?.typeOfBusiness?.apiResponse &&
                      DropDown(typeOfBusinessDropdown, 'typeOfBusiness', fields[1].isEdit)}
                  </td>
                </tr>
                <tr className={`${styles.table_row} table_row`}>
                  <td>Turnover (Cr)</td>
                  <td>{convertValue(reviewedProfile?.turnOver?.originalValue).toLocaleString('en-in')} Cr</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={reviewedProfile?.turnOver?.apiResponse ? '/static/check.svg' : '/static/close-b.svg'}
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.turnOver?.apiResponse ? (
                      <input
                        id='checkBoxId'
                        onChange={(e) => handleCheckBox(2, 'turnOver')}
                        className={styles.checkBox}
                        type="checkbox"
                      />
                    ) : null}
                  </td>
                  <td>
                    {!reviewedProfile?.turnOver?.apiResponse && (
                      <Form.Control
                        type="text"
                        onFocus={(e) => {
                          setIsFieldInFocus({ ...isFieldInFocus, turnover: true }), (e.target.type = 'number');
                        }}
                        onBlur={(e) => {
                          setIsFieldInFocus({ ...isFieldInFocus, turnover: false }), (e.target.type = 'text');
                        }}
                        onWheel={(e) => e.target.blur()}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        name="turnOver"
                        id="textDate"
                        value={
                          isFieldInFocus.turnover
                            ? payloadData?.turnOver
                            : returnReadableNumber(payloadData?.turnOver ? payloadData?.turnOver : 0, 'en-In', 2) + ` Cr`
                        }
                        className={`${styles.input} input`}
                        onChange={(e) => handleChange(e.target.name, Number(e.target.value))}
                        disabled={fields[2]?.isEdit}
                      />
                    )}
                  </td>
                </tr>

                <tr className={`${styles.table_row} table_row`}>
                  <td>Commodity</td>
                  <td>{reviewedProfile?.commodity?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={reviewedProfile?.commodity?.apiResponse ? '/static/check.svg' : '/static/close-b.svg'}
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.commodity?.apiResponse ? (
                      <input
                      id='checkBoxId'
                        onChange={(e) => handleCheckBox(3, 'commodity')}
                        className={styles.checkBox}
                        type="checkbox"
                      />
                    ) : null}
                  </td>
                  <td>
                    {!reviewedProfile?.commodity?.apiResponse && (
                      <>
                        <div className="d-inline-flex align-items-center position-relative">
                          <Form.Select
                            size="sm"
                            name={'commodity'}
                            className={`${styles.dropDown} ${styles.customSelect} input dropDown`}
                            onChange={(e) => {
                              handleChange(e.target.name, e.target.value);
                            }}
                            value={payloadData.commodity}
                            disabled={fields[3]?.isEdit}
                          >
                            {' '}
                            <option value="">Select an option</option>
                            {commodity.map((options) => {
                              return <option value={`${options.Commodity}`}>{options.Commodity}</option>;
                            })}{' '}
                          </Form.Select>
                          <img
                            className={`${styles.arrow2} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </>
                    )}
                  </td>
                </tr>

                <tr className={`${styles.table_row} table_row`}>
                  <td>Order Value</td>
                  <td>{CovertvaluefromtoCR(reviewedProfile?.orderValue?.originalValue).toLocaleString('en-in')} Cr</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={reviewedProfile?.orderValue?.apiResponse ? '/static/check.svg' : '/static/close-b.svg'}
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.orderValue?.apiResponse ? (
                      <input
                        id='checkBoxId'
                        onChange={(e) => handleCheckBox(4, 'orderValue')}
                        className={styles.checkBox}
                        type="checkbox"
                      />
                    ) : null}
                  </td>
                  <td>
                    {!reviewedProfile?.orderValue?.apiResponse && (
                      <Form.Control
                        type="number"
                        name="orderValue"
                        onFocus={(e) => {
                          setIsFieldInFocus({ ...isFieldInFocus, orderValue: true }), (e.target.type = 'number');
                        }}
                        onBlur={(e) => {
                          setIsFieldInFocus({ ...isFieldInFocus, orderValue: false }), (e.target.type = 'text');
                        }}
                        onWheel={(e) => e.target.blur()}
                        onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                        onChange={(e) => handleChange(e.target.name, Number(e.target.value))}
                        value={
                          isFieldInFocus.orderValue
                            ? payloadData?.orderValue
                            : returnReadableNumber(payloadData?.orderValue ? payloadData?.orderValue : 0, 'en-In', 2) + ` Cr`
                        }
                        id="textDate"
                        className={`${styles.input} input`}
                        // onBlur={(e) => }
                        disabled={fields[4]?.isEdit}
                      />
                    )}
                  </td>
                </tr>

                <tr className={`${styles.table_row} table_row`}>
                  <td>Country Of Origin</td>
                  <td>{reviewedProfile?.countryOfOrigin?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.countryOfOrigin?.apiResponse ? '/static/check.svg' : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.countryOfOrigin?.apiResponse ? (
                      <input
                        id='checkBoxId'
                        onChange={(e) => handleCheckBox(5, 'countryOfOrigin')}
                        className={styles.checkBox}
                        type="checkbox"
                      />
                    ) : null}
                  </td>
                  <td>
                    {!reviewedProfile?.countryOfOrigin?.apiResponse && (
                      <>
                        <div className="d-inline-flex align-items-center position-relative">
                          <Form.Select
                            size="sm"
                            name={'countryOfOrigin'}
                            className={`${styles.dropDown} ${styles.customSelect} input dropDown`}
                            onChange={(e) => {
                              handleChange(e.target.name, e.target.value);
                            }}
                            value={payloadData.country}
                            disabled={fields[5].isEdit}
                          >
                            {' '}
                            <option value="">Select an option</option>
                            {country.map((options) => {
                              return <option value={`${options.Country}`}>{options.Country}</option>;
                            })}{' '}
                          </Form.Select>
                          <img
                            className={`${styles.arrow2} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </>
                    )}
                  </td>
                </tr>
                <tr className={`${styles.table_row} table_row`}>
                  <td>Port Of Discharge</td>
                  <td>{reviewedProfile?.portOfDischarge?.originalValue}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.portOfDischarge?.apiResponse ? '/static/check.svg' : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.portOfDischarge?.apiResponse ? (
                      <input
                        id='checkBoxId'
                        onChange={(e) => handleCheckBox(6, 'portOfDischarge')}
                        className={styles.checkBox}
                        type="checkbox"
                      />
                    ) : null}
                  </td>
                  <td>
                    {!reviewedProfile?.portOfDischarge?.apiResponse && (
                      <>
                        <div className="d-inline-flex align-items-center position-relative">
                          <Form.Select
                            size="sm"
                            name={'portOfDischarge'}
                            className={`${styles.dropDown} ${styles.customSelect} input dropDown`}
                            onChange={(e) => {
                              handleChange(e.target.name, e.target.value);
                            }}
                            value={payloadData.port}
                            disabled={fields[6]?.isEdit}
                          >
                            {' '}
                            <option value="">Select an option</option>
                            {port
                              .filter((val, index) => {
                                if (val.Country.toLowerCase() == 'india' && val.Approved == "YES") {
                                  return val;
                                }
                              })
                              .map((options) => {
                                return (
                                  <option value={`${options.Port_Name},${options.Country}`}>
                                    {options.Port_Name},{options.Country}
                                  </option>
                                );
                              })}{' '}
                          </Form.Select>
                          <img
                            className={`${styles.arrow2} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </>
                    )}
                  </td>
                </tr>
                <tr className={`${styles.table_row} table_row`}>
                  <td>Expected Date Of Shipment</td>
                  <td>{moment(reviewedProfile?.ExpectedDateOfShipment?.originalValue).format('DD-MM-YYYY')}</td>
                  <td>
                    <div className={styles.tick}>
                      <img
                        src={
                          reviewedProfile?.ExpectedDateOfShipment?.apiResponse
                            ? '/static/check.svg'
                            : '/static/close-b.svg'
                        }
                        alt="Check"
                        className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>
                    {!reviewedProfile?.ExpectedDateOfShipment?.apiResponse ? (
                      <input
                        id='checkBoxId'
                        onChange={(e) => handleCheckBox(7, 'ExpectedDateOfShipment')}
                        className={styles.checkBox}
                        type="checkbox"
                      />
                    ) : null}
                  </td>
                  <td>
                    {!reviewedProfile?.ExpectedDateOfShipment?.apiResponse && (
                      <div className={`${styles.calender}  d-flex`}>
                        <DateCalender
                          defaultDate={payloadData.ExpectedDateOfShipment}
                          reset={fields[7]?.isEdit}
                          name="ExpectedDateOfShipment"
                          saveDate={(name, value) => {
                            handleChange(value, name);
                          }}
                          disabled={fields[7]?.isEdit}
                          labelName=""
                          maxDate={moment(new Date()).add(3, 'months').toDate()}
                          lastDate={moment(reviewedProfile?.ExpectedDateOfShipment?.originalValue).toDate()}
                          small={true}
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    )}
                  </td>
                </tr>
                {isAddedRow ? (
                  <tr className={`${styles.table_row} table_row`}>
                    <td>
                      Delinquency in Past Orders <span className={styles.view_btn}>View</span>
                    </td>
                    <td>Yes</td>
                    <td>
                      <div className={styles.tick}>
                        <img
                          src={
                            reviewedProfile?.ExpectedDateOfShipment?.apiResponse
                              ? '/static/check.svg'
                              : '/static/close-b.svg'
                          }
                          alt="Check"
                          className="img-fluid"
                        />
                      </div>
                    </td>
                    <td>
                      {!reviewedProfile?.ExpectedDateOfShipment?.apiResponse ? (
                        <input
                          id='checkBoxId'
                        onChange={(e) => handleCheckBox(8, 'ExpectedDateOfShipment')}
                          className={styles.checkBox}
                          type="checkbox"
                        />
                      ) : null}
                    </td>
                    <td>
                      {!reviewedProfile?.ExpectedDateOfShipment?.apiResponse && (
                        <Form.Control
                          type="date"
                          name="ExpectedDateOfShipment"
                          id="textDate"
                          className={`${styles.input}`}
                          onBlur={(e) => handleChange(e.target.name, e.target.value)}
                          disabled={fields[8]?.isEdit}
                        />
                      )}
                    </td>
                  </tr>
                ) : (
                  ''
                )}
              </tbody>
            </table>
          </form>

          <div className={`${styles.remarks} border-bottom-0 table_row`}>
            <Form.Label className={styles.remarksName}>User Remarks</Form.Label>
            <Form.Control as="textarea" rows={3} className={`${styles.remarksTextarea} input`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
