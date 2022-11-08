/* eslint-disable jsx-a11y/ermsalt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
import moment from 'moment';

function Index(props) {
  const [deliveryData, setDeliveryData] = useState('');
  const [monthOfLoadingCargo, setMonthOfLoadingCargo] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [saveContactTable, setContactTable] = useState(false);
  const [listContact, setListContact] = useState([
    {
      sNo: '',
      bankName: '',
      chequeNo: '',
      chequeDate: null,
      amount: '',
    },
  ]);

  const [isFieldInFocus, setIsFieldInFocus] = useState([]);
  const onAddContact = () => {
    setListContact([
      ...listContact,
      {
        sNo: '',
        bankName: '',
        chequeNo: '',
        chequeDate: null,
        amount: '',
      },
    ]);
    setIsFieldInFocus([...isFieldInFocus, { amount: false }]);
  };
  const handleDeleteContact = (index) => {
    setListContact([...listContact.slice(0, index), ...listContact.slice(index + 1)]);

    setIsFieldInFocus([...isFieldInFocus.slice(0, index), ...isFieldInFocus.slice(index + 1)]);
  };

  useEffect(() => {
    let tempArray = [];

    listContact.forEach((item) => {
      tempArray.push({ amount: false });
    });
    setIsFieldInFocus(tempArray);
  }, [listContact]);

  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('Delivery')) {
        let savedData = JSON.parse(sessionStorage.getItem('Delivery'));

        setDeliveryData(savedData?.deliveryTerm);
        setMonthOfLoadingCargo(savedData?.monthOfLoadingCargo);
        setPaymentTerms(savedData?.paymentTerms);

        setListContact(
          savedData?.cheque?.length > 0
            ? savedData.cheque
            : [
                {
                  sNo: '',
                  bankName: '',
                  chequeNo: '',
                  chequeDate: null,
                  amount: '',
                },
              ],
        );
      } else {
        setDeliveryData(props?.data?.deliveryTerm);
        setMonthOfLoadingCargo(props?.data?.monthOfLoadingCargo);
        setPaymentTerms(props?.data?.paymentTerms);
        setListContact(
          props?.data?.cheque?.length > 0
            ? props.data.cheque
            : [
                {
                  sNo: '',
                  bankName: '',
                  chequeNo: '',
                  chequeDate: null,
                  amount: '',
                },
              ],
        );
      }
    }
  }, [props.data]);

  useEffect(() => {
    let temp = [...listContact];
    temp.forEach((val, index) => {
      delete val?._id;
    });
    if (props.saveData == true && props.active == 'Delivery Terms') {
      let data = {
        deliveryData: deliveryData,
        monthOfLoadingCargo: monthOfLoadingCargo,
        paymentTerms: paymentTerms,
        listContact: temp,
      };
      props.sendData('Delivery Terms', data);
    }
    if (props.submitData == true && props.active == 'Delivery Terms') {
      console.log(temp, 'listContact');
      let data = {
        deliveryData: deliveryData,
        monthOfLoadingCargo: monthOfLoadingCargo,
        paymentTerms: paymentTerms,
        listContact: temp,
      };

      props.updateData('Delivery Terms', data);
    }
  }, [props.saveData, props.submitData]);

  const handleInput = (name, value, key) => {
    setDeliveryData(value);
    let dataToSend2 = {
      deliveryTerms: value,
    };
    // sessionStorage.setItem('Delivery', JSON.stringify(dataToSend2))
  };
  const handleChangeInput = (name, value, index) => {
    let temp = [...listContact];
    temp[index][name] = value;
    setListContact([...temp]);
  };

  return (
    <>
      <div className={`${styles.container} vessel_card card-body p-0 `}>
        <Form className={`${styles.form} border_color`}>
          <div className="row border_color ">
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="delivery"
                  onChange={(e) => {
                    handleInput(e.target.name, e.target.value);
                  }}
                  value={deliveryData}
                >
                  <option value="">Select an option</option>
                  <option value="CIF	Cost Insurance Freight Incoterms 2000">
                    CIF Cost Insurance Freight Incoterms 2000
                  </option>
                  <option value={`CFR	Cost & Freight Incoterms 2000`}>{`CFR	Cost & Freight Incoterms 2000`}</option>
                  <option value="DDP	Delivery Duties Paid Incoterms 2000">
                    DDP Delivery Duties Paid Incoterms 2000
                  </option>
                  <option value="">EXW Ex Works Incoterms 2000</option>
                  <option value="FOB	Free on Board Incoterms 2000">FOB Free on Board Incoterms 2000</option>
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                  Delivery Terms <strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="paymentTerms"
                  value={paymentTerms}
                  onChange={(e) => {
                    setPaymentTerms(e.target.value);
                  }}
                >
                  <option selected>Select an option</option>
                  <option value="DaysfromBLDate">Days from BL Date</option>
                  <option value="DaysfromVesselDischargeDate"> Days from Vessel Discharge Date</option>
                  <option value="Whicheverisearlier">Whichever is earlier</option>
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                  Payment Terms <strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                  name="delivery"
                  onChange={(e) => {
                    setMonthOfLoadingCargo(e.target.value);
                  }}
                  value={monthOfLoadingCargo}
                >
                  <option value="">Select an option</option>
                  <option value="January">January</option>
                  <option value={`February`}>{`February`}</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <Form.Label className={`${styles.label_heading} ${styles.select}  label_heading`}>
                  Month of loading of Cargo
                  <strong className="text-danger">*</strong>
                </Form.Label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </Form.Group>
          </div>
        </Form>
      </div>
      <div className={`${styles.main} mr-2 ml-2 mt-4  border_color`}>
        <div
          className={`${styles.head_container} border_color card-header d-flex justify-content-between bg-transparent`}
        >
          <h3 className={`${styles.heading} mb-0`}>Details of post-dated Cheque(s)-</h3>
        </div>
        <div>
          <div className={`${styles.datatable}`}>
            <div className={`${styles.table_scroll_outer}`}>
              <div className={`${styles.table_scroll_inner}`}>
                <table className={`${styles.table}`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th width="10%">S NO.</th>
                      <th width="20%">BANK NAME</th>
                      <th width="20%">CHEQUE NO.</th>
                      <th width="20%">CHEQUE DATE</th>
                      <th width="20%">AMOUNT</th>
                      <th width="10%">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {listContact?.length > 0 &&
                      listContact.map((val, index) => (
                        <tr key={index} className="table_credit">
                          <td>
                            <input
                              className="input font-weight-bold"
                              name="sNo"
                              type="text"
                              value={val.sNo}
                              onChange={(e) => {
                                handleChangeInput(e.target.name, e.target.value, index);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="input"
                              name="bankName"
                              type="text"
                              value={val.bankName}
                              onChange={(e) => {
                                handleChangeInput(e.target.name, e.target.value, index);
                              }}
                            />
                          </td>

                          <td>
                            <input
                              className="input"
                              name="chequeNo"
                              type="text"
                              value={val.chequeNo}
                              onChange={(e) => {
                                handleChangeInput(e.target.name, e.target.value, index);
                              }}
                              // readOnly={!saveContactTable}
                            />
                          </td>
                          <td style={{ minWidth: '200px' }}>
                            <div className="d-flex align-items-center">
                              <DateCalender
                                name="chequeDate"
                                saveDate={(val, name, index) => {
                                  handleChangeInput(name, val, index);
                                }}
                                defaultDate={val.chequeDate == null ? null : moment(val.chequeDate).toDate()}
                                // small={true}
                                index={index}
                              />
                              <img
                                className={`${styles.calanderIcon} border-0 mt-0 p-0 form-control image_arrow`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </td>
                          <td>
                            <input
                              // onFocus={(e) => {
                              //   let tempArray = [...isFieldInFocus]
                              //   tempArray[index].amount = true
                              //   setIsFieldInFocus(tempArray),

                              //     (e.target.type = 'number');
                              // }}
                              // onBlur={(e) => {
                              //   let tempArray = [...isFieldInFocus]
                              //   tempArray[index].amount = false
                              //   setIsFieldInFocus(tempArray),

                              //     (e.target.type = 'text');
                              // }}
                              onWheel={(event) => event.currentTarget.blur()}
                              // value={
                              //   isFieldInFocus[index].amount
                              //     ? val.amount
                              //     : `INR ` + Number(
                              //       val.amount
                              //     )?.toLocaleString('en-In', {
                              //       maximumFractionDigits: 2,
                              //     })
                              // }
                              className="input"
                              name="amount"
                              type="text"
                              value={val.amount}
                              onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                              onChange={(e) => {
                                handleChangeInput(e.target.name, e.target.value, index);
                              }}
                              // readOnly={!saveContactTable}
                            />
                          </td>

                          <td className="text-right">
                            <div className="d-flex">
                              <img
                                className={`${styles.plus_field} mr-2`}
                                src="/static/add-btn.svg"
                                alt="add button"
                                onClick={(e) => {
                                  onAddContact();
                                }}
                              />

                              {index != 0 ? (
                                <img
                                  src="/static/delete 2.svg"
                                  // className="img-fluid"
                                  alt="delete"
                                  onClick={() => handleDeleteContact(index)}
                                />
                              ) : null}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
