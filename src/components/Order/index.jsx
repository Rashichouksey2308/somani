/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './index.module.scss';
import DateCalender from '../DateCalender';

const Index = ({ orderDetail, saveOrderData, country, port, commodity }) => {
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    quantity: false,
    orderValue: false,
    tolerance: false,
    hsnCode: false,
  });

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveOrderData(name, text);
  };
  const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
  const filterCommodity = (value) => {
    if (value == '') {
      setToShow([]);
      setToView(false);
      return;
    }
    let filterData = commodity.filter((o) => {
      return o.Commodity.toLowerCase().includes(value.toLowerCase());
    });

    setToShow(filterData);
    setToView(true);
  };
  const handleData = (name, value) => {
    saveOrderData(name, value);
    setToView(false);
  };

  return (
    <div className={`${styles.main} vessel_card card border_color border-bottom`}>
      <div
        className={`${styles.head_container} card-header align-items-center border_color head_container d-flex justify-content-between bg-transparent`}
      >
        <h3 className={`${styles.heading} mb-0`}>Order Summary</h3>
        <div className="d-flex">
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Quantity :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                className={`${styles.options} ${styles.customSelect} accordion_DropDown`}
                name="unitOfQuantity"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value);
                }}
              >
                <option>{orderDetail?.unitOfQuantity?.toUpperCase()}</option>
                {/* <option selected>MT</option> */}
              </select>
              <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
            </div>
          </div>

          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                className={`${styles.options} ${styles.customSelect} accordion_DropDown `}
                name="unitOfValue"
                onChange={(e) => saveOrderData(e.target.name, e.target.value)}
              >
                <option value="Crores">Crores</option>

                {/* <option selected>Crores</option> */}
                <option value="Million">Million</option>
                <option value="Lakh">Lakh</option>
              </select>
              <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
            </div>
            <span data-toggle="collapse" data-target="#orderSummary" aria-expanded="true" aria-controls="orderSummary">
              +
            </span>
          </div>
        </div>
      </div>
      <div id="orderSummary" aria-labelledby="orderSummary">
        <div className={`${styles.dashboard_form} card-body border_color`}>
          <div className={styles.radio_form}>
            <div className={styles.sub_heading}>Transaction Type</div>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Import"
                  onChange={(e) => {
                    saveOrderData('transactionType', 'Import');
                  }}
                  checked={orderDetail?.transactionType === 'Import' ? 'checked' : ''}
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Domestic"
                  onChange={(e) => {
                    saveOrderData('transactionType', 'Domestic');
                  }}
                  checked={orderDetail?.transactionType === 'Domestic' ? 'checked' : ''}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>
          <Form>
            <div className="row">
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                    value={orderDetail?.commodity}
                    onChange={(e) => {
                      filterCommodity(e.target.value);
                      saveOrderData(e.target.name, e.target.value);
                    }}
                  />
                  {toShow.length > 0 && toView && (
                    <div className={styles.searchResults}>
                      <ul>
                        {toShow
                          ? toShow?.map((results, index) => (
                              <li
                                onClick={() => handleData('commodity', results.Commodity)}
                                id={results._id}
                                key={index}
                                value={results.Commodity}
                              >
                                {results.Commodity}{' '}
                              </li>
                            ))
                          : ''}
                      </ul>
                    </div>
                  )}
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    Commodity<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="quantity"
                  onFocus={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, quantity: true }), (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, quantity: false }), (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.quantity
                      ? orderDetail?.quantity
                      : Number(orderDetail?.quantity).toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                        }) + ` ${orderDetail?.unitOfQuantity?.toUpperCase()}`
                  }
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value);
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Quantity<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="orderValue"
                  onFocus={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, orderValue: true }), (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, orderValue: false }), (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.orderValue
                      ? orderDetail?.orderValue
                      : Number(orderDetail?.orderValue).toLocaleString('en-In', { maximumFractionDigits: 2 }) +
                        ` ${orderDetail?.unitOfValue == 'Crores' ? 'Cr' : orderDetail?.unitOfValue}`
                  }
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value);
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Order Value<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="grade"
                  defaultValue={orderDetail?.grade}
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value);
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Grade<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    name="countryOfOrigin"
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value);
                    }}
                    value={orderDetail?.countryOfOrigin}
                    required
                  >
                    <option disabled>Select an option</option>
                    {country.map((val, index) => {
                      return <option value={`${val.Country}`}>{val.Country}</option>;
                    })}
                  </select>
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    Country Of Origin<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="tolerance"
                  onFocus={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, tolerance: true }), (e.target.type = 'number');
                  }}
                  onBlur={(e) => {
                    setIsFieldInFocus({ ...isFieldInFocus, tolerance: false }), (e.target.type = 'text');
                  }}
                  value={
                    isFieldInFocus.tolerance
                      ? orderDetail?.tolerance
                      : Number(orderDetail?.tolerance)?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                        }) + ' %'
                  }
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value);
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Tolerance (+/-) Percentage
                  <strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="supplierName"
                    defaultValue={orderDetail?.supplierName}
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value);
                    }}
                  />
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    Supplier Name<strong className="text-danger">*</strong>
                  </Form.Label>
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  {/* <select className={`${styles.input_field} ${styles.customSelect} input form-control`} value={orderDetail?.manufacturerName} name='manufacturerName' onChange={(e) => { saveOrderData(e.target.name, e.target.value) }} >
                    <option disabled>Select an option</option>
                    <option value="CBX">CBX</option>
                    <option value="ABX">ABX</option>
                  </select> */}
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="manufacturerName"
                    defaultValue={orderDetail?.manufacturerName}
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value);
                    }}
                  />
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    Manufacturer / Mines name
                    {/* <strong className="text-danger">*</strong> */}
                  </Form.Label>
                  <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    value={orderDetail?.portOfDischarge}
                    name="portOfDischarge"
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value);
                    }}
                    required
                  >
                    <option>Select an option</option>
                    {port
                      .filter((val, index) => {
                        if (val.Country.toLowerCase() == 'india' && val.Approved=="YES") {
                          return val;
                        }
                      })
                      .map((val, index) => {
                        return (
                          <option value={`${val.Port_Name},${val.Country}`}>
                           {val.Port_Name}, {val.Country}
                          </option>
                        );
                      })}
                  </select>
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    Port Of Discharge<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    value={orderDetail?.incoTerm}
                    className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    name="incoTerm"
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value);
                    }}
                    required
                  >
                    <option disabled>Select an option</option>
                    <option value="CFR">CFR</option>
                    <option value="CIF">CIF</option>
                    <option value="FOB">FOB</option>
                  </select>
                  <Form.Label className={`${styles.label_heading} label_heading`}>
                    INCO Terms<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>
              {/* defaultDate={orderDetail?.ExpectedDateOfShipment?.split('T')[0]} */}
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    name="ExpectedDateOfShipment"
                    defaultDate={orderDetail?.ExpectedDateOfShipment ?? ''}
                    saveDate={saveDate}
                    labelName="Expected Date Of Shipment"
                  />
                  <img className={`${styles.calanderIcon} img-fluid`} src="/static/caldericon.svg" alt="Search" />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="hsnCode"
                  maxLength="10"
                  value={orderDetail?.hsnCode}
                  onChange={(e) => { saveOrderData(e.target.name, e.target.value)}}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  HSN code
                  <strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Index;
