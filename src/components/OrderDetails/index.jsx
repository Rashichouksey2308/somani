/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
const Index = ({ saveOrderData, darkMode, orderDetails, country, port, commodity }) => {
  const [isFieldInFocus, setIsFieldInFocus] = useState({
    quantity: false,
    orderValue: false,
  });
  const [toShow, setToShow] = useState([]);
  const [toView, setToView] = useState(false);
  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveOrderData(name, text);
  };
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
    <div className={`${styles.main} border_color`}>
      <h3 className={`${styles.heading} heading_card_switch_blue`}>Order Details</h3>
      <form id="OrderDetailsForm">
        <div className={`${styles.input_container} vessel_card row`}>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <input
                type="text"
                id="textInput"
                name="commodity"
                value={orderDetails.commodity}
                onChange={(e) => {
                  filterCommodity(e.target.value);
                  saveOrderData(e.target.name, e.target.value);
                }}
                className={`${styles.input_field} input form-control`}
                required
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
              <label className={`${styles.label_heading}  label_heading`} id="textInput">
                Commodity<strong className="text-danger">*</strong>
              </label>
              {/* <img
                className={`${styles.search_image} img-fluid`}
                src="/static/search-grey.svg"
                alt="Search"
              /> */}
            </div>
          </div>
          <div className={`${styles.each_input} ${styles.small_box} col-md-4 col-sm-6 col-lg-4 col-xl-2`}>
            <input
              type="text"
              id="textInput"
              name="quantity"
              onWheel={(event) => event.currentTarget.blur()}
              onFocus={(e) => {
                setIsFieldInFocus({ ...isFieldInFocus, quantity: true }), (e.target.type = 'number');
              }}
              onBlur={(e) => {
                setIsFieldInFocus({ ...isFieldInFocus, quantity: false }), (e.target.type = 'text');
              }}
              onChange={(e) => {
                saveOrderData(e.target.name, e.target.value);
              }}
              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
              value={
                isFieldInFocus.quantity
                  ? orderDetails?.quantity
                  : Number(orderDetails?.quantity).toLocaleString('en-In') +  ` ${orderDetails.unitOfQuantity}`
              }
              className={`${styles.input_field} input form-control`}
              required
            />
            <label className={`${styles.label_heading}  label_heading`} id="textInput">
              Quantity<strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.each_input} ${styles.small_box} col-md-4 col-sm-6 col-lg-4 col-xl-2`}>
            <input
              type="text"
              id="textInput"
              name="orderValue"
              onFocus={(e) => {
                setIsFieldInFocus({ ...isFieldInFocus, orderValue: true }), (e.target.type = 'number');
              }}
              onBlur={(e) => {
                setIsFieldInFocus({ ...isFieldInFocus, orderValue: false }), (e.target.type = 'text');
              }}
              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
              onWheel={(event) => event.currentTarget.blur()}
              value={
                isFieldInFocus.orderValue
                  ? orderDetails?.orderValue
                  : Number(orderDetails?.orderValue)?.toLocaleString('en-In') +
                    ` ${
                      orderDetails?.unitOfValue == 'Millions'
                        ? 'Mn'
                        : orderDetails?.unitOfValue == 'Crores'
                        ? 'Cr'
                        : orderDetails?.unitOfValue
                    }`
              }
              onChange={(e) => {
                saveOrderData(e.target.name, e.target.value);
              }}
              className={`${styles.input_field} input form-control`}
              required
            />
            <label className={`${styles.label_heading}  label_heading`} id="textInput">
              Order Value<strong className="text-danger">*</strong>
            </label>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="text"
              name="supplierName"
              onChange={(e) => {
                saveOrderData(e.target.name, e.target.value);
              }}
              id="textInput"
              className={`${styles.input_field} input form-control`}
              required
            />
            <label className={`${styles.label_heading} label_heading`} id="textInput">
              Supplier Name
            </label>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <select
                id="dropCountry"
                name="countryOfOrigin"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value);
                }}
                className={`${styles.input_field} ${styles.customSelect} input form-control`}
              >
                <option value="">Select an option</option>
                {country?.length>0
                ?
                <>
                {country.map((val, index) => {
                    return <option value={`${val.Country}`}>{val.Country}</option>;
                  })} 
                </>
                :null
                }
                
              </select>
              <label className={`${styles.label_heading} label_heading`} id="dropCountry">
                Country Of Origin<strong className="text-danger">*</strong>
              </label>
              <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
            </div>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <select
                id="dropPort"
                name="portOfDischarge"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value);
                }}
                className={`${styles.input_field} ${styles.customSelect} input form-control`}
              >
                <option value="">Select an option</option>
                {port
                  .filter((val, index) => {
                    if (val.Country.toLowerCase() == 'india') {
                      return val;
                    }
                  })
                  .map((val, index) => {
                    return (
                      <option value={`${val.Port_Name}`}>
                       {val.Port_Name}, {val.Country}
                      </option>
                    );
                  })}
              </select>
              <label className={`${styles.label_heading} label_heading`} id="dropPort">
                Port Of Discharge<strong className="text-danger">*</strong>
              </label>
              <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
            </div>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <DateCalender
                dateFormat={'dd-MM-yyyy'}
                name="ExpectedDateOfShipment"
                saveDate={saveDate}
                labelName="Last date of Shipment"
              />
              <img
                className={`${styles.calanderIcon} image_arrow img-fluid`}
                src="/static/caldericon.svg"
                alt="Search"
              />
            </div>
            {/* <div className="d-flex">
              <input
              type="date" 
              name='ExpectedDateOfShipment'
              id="ExpectedDateOfShipment"
              onChange={(e) => { saveDate(e, e.target.value)}}
              className={`${styles.calender} ${styles.customSelect}  input form-control`}
              required
            />
              <label className={`${styles.label_heading} label_heading`} id="textDate">
                Expected Date Of Shipment<strong className='text-danger'>*</strong>
              </label>
             <img
                   className={`${styles.calanderIcon} img-fluid`}
                   src="/static/caldericon.svg"
                   alt="Search"
               />
             </div> */}
          </div>
          <div className={`${styles.radio_form} col-md-12`}>
            <div className={`${styles.sub_heading} label_heading`}>
              INCO Terms<strong className="text-danger">*</strong>
            </div>
            <Form>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className={styles.radio_group}>
                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="FOB"
                    onChange={() => saveOrderData('incoTerm', 'FOB')}
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="CFR"
                    onChange={() => saveOrderData('incoTerm', 'CFR')}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="CIF"
                    onChange={() => saveOrderData('incoTerm', 'CIF')}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Index;