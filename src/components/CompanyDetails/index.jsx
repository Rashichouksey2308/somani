/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import { emailValidation, panValidation, phoneValidation } from 'utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ChangeCurrency } from '../../redux/userData/action';
import { GetPanGst } from 'redux/GetPanGst/action';
import { GetGst } from 'redux/registerBuyer/action';
import { handleErrorToast } from '@/utils/helpers/global';
const Index = ({
  saveCompanyData,
  saveOrderData,
  darkMode,
  mobileFunction,
  whatsappFunction,
  mobileCallingCodeFunction,
  whatsappCallingCodeFunction,
  handleCommunication,
  orderDetails,
  companyDetails,
  setCompanyDetails,
}) => {
  const { gstList } = useSelector((state) => state.buyer);
  const { gettingCompanyPanResponse } = useSelector((state) => state.GetPan);

  const dispatch = useDispatch();

  const [slider, setSlider] = useState(0);
  const [typeOfSlider, setSliderType] = useState(1);
  const [isSliderOnFocus, setIsSliderOnFocus] = useState(false);
  const [sliderWithCr, setSliderWithCr] = useState('');

  useEffect(() => {
    getSlider();
  }, [slider]);

  useEffect(() => {
    if (isSliderOnFocus === false) {
      setSliderWithCr(slider.toString() + ' Cr');
    }
  }, [slider, isSliderOnFocus]);

  const getvalue = () => {
    if (!isSliderOnFocus) {
      if (sliderWithCr == '0 Cr') return '';
      else return sliderWithCr;
    } else {
      if (slider == 0) return '';
      else return slider;
    }
  };

  const getSlider = (val) => {
    if (typeOfSlider == 1) {
      return (
        <div className={styles.slidecontainer}>
          <input
            type="range"
            min="0"
            max="100"
            name="turnOver"
            list="tickmarks"
            value={slider}
            onChange={(e) => {
              saveCompanyData(e.target.name, Number(e.target.value));
              if (Number(e.target.value == 100)) {
                setSliderType(1);
                setSlider(100);
              } else {
                setSlider(Number(e.target.value));
              }
              getSlider();
            }}
            className={`${styles.slider} px-0 input form-control`}
            id="myRange"
            style={{
              background: `linear-gradient(90deg, #3687E8 ${slider}%, #C3C3C31F ${slider}%)`,
            }}
          />
          <datalist id="tickmarks" className={styles.datalist}>
            <option className={styles.datalist_option} value="0" label="0"></option>
            <option className={styles.datalist_option} value="25" label="25"></option>
            <option className={styles.datalist_option} value="50" label="50"></option>
            <option className={styles.datalist_option} value="75" label="75"></option>
            <option className={styles.datalist_option} value="100" label="100"></option>
            {/* <option className={styles.datalist_option} value="200" label="200"></option> */}
            {/* <option className={styles.datalist_option} value="1000" label="1000"></option> */}
          </datalist>
          <div className={`${styles.more_label} d-flex justify-content-end mr-n2`}>or more</div>
        </div>
      );
    }
  };

  useEffect(() => {
    setCompPanName(gstList?.data?.companyData?.companyName);
  }, [gstList]);

  const [serachterm, setSearchTerm] = useState('');
  const [compPan, setCompPan] = useState();
  const [compPanName, setCompPanName] = useState();
  const [boolean1, setBoolean1] = useState(false);

  useEffect(() => {
    if (compPan !== '') {
      const newInput = { ...companyDetails };
      newInput.companyPan = compPan;
      setCompanyDetails(newInput);
      // dispatch(GetGst(compPan))
    }
  }, [compPan]);

  const handleSearch = (e) => {
    const query = `${e.target.value}`;
    setSearchTerm(query);
    if (query.length >= 3) {
      dispatch(GetPanGst({ query: query }));
    }
  };

  const handleFilteredData = (results) => {
    if (results?.pans?.length > 0) {
      setCompPan(results?.pans[0]);
      setCompPanName(results?.name);
      setBoolean1(false);
      dispatch(GetGst(results?.pans[0]));
    } else {
      let toastMessage = 'COULD NOT FETCH PAN FOR THIS COMPANY';
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage });
      }
    }
  };

  return (
    <>
      <div className={`${styles.main} border_color`}>
        <form id="CompanyDetailsForm">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={`${styles.heading} heading_card_switch_blue`}>Company Profile</h2>
            <div className="mr-n5 d-flex">
              <div className={`${styles.unit_container} d-flex align-items-center`}>
                <h5 className={`${styles.unit_label} accordion_Text`}>Quantity :</h5>
                <div className="d-flex align-items-center position-relative">
                  <select
                    className={`${styles.options} ${styles.customSelect} card_main accordion_DropDown input`}
                    name="unitOfQuantity"
                    onChange={(e) => saveOrderData(e.target.name, e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="MT" selected>
                      MT
                    </option>
                    <option value="KG">KG</option>
                  </select>
                  <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
                </div>
              </div>
              <div className={`${styles.unit_container} d-flex align-items-center`}>
                <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
                <div className="d-flex align-items-center position-relative">
                  <select
                    className={`${styles.options} ${styles.customSelect} card_main accordion_DropDown input`}
                    name="unitOfValue"
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value);
                      dispatch(ChangeCurrency(e.target.value.toUpperCase()));
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value="Crores" selected>
                      Crores
                    </option>
                    {/* <option value="Million">Million</option> */}
                    {/* <option value="Lakh">Lakh</option> */}
                  </select>
                  <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.radio_form}>
            <div className={`${styles.sub_heading} label_heading`}>
              Transaction Type <strong className="text-danger">*</strong>
            </div>
            {['radio'].map((type, index) => (
              <div key={`inline-${index}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  defaultChecked
                  onChange={() => saveOrderData('transactionType', 'Import')}
                  label="Import"
                  name="group1"
                  type={type}
                  checked={orderDetails.transactionType == 'Import' ? 'checked' : ''}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Domestic"
                  name="group1"
                  onChange={() => saveOrderData('transactionType', 'Domestic')}
                  type={type}
                  checked={orderDetails.transactionType == 'Domestic' ? 'checked' : ''}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>
          <div className={`${styles.input_container} vessel_card row`}>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <input
                type="text"
                id="textInput"
                value={compPan}
                name="companyPan"
                onChange={(e) => {
                  if (panValidation(e.target.value)) {
                    saveCompanyData(e.target.name, e.target.value);
                    setCompPan(e.target.value);
                  } else {
                    //red mark
                    setCompPan(e.target.value);
                    let toastMessage = 'Invalid Pan';
                    if (!toast.isActive(toastMessage.toUpperCase())) {
                      toast.error(toastMessage.toUpperCase(), {
                        toastId: toastMessage,
                      });
                    }
                  }
                }}
                className={`${styles.input_field} input form-control`}
                required
              />
              <label className={`${styles.label_heading} label_heading`} id="textInput">
                Company PAN<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <input
                type="text"
                onChange={(e) => {
                  setBoolean1(true);
                  saveCompanyData(e.target.name, e.target.value);
                  handleSearch(e);
                  setCompPanName(e.target.value);
                }}
                value={compPanName}
                id="companyInput"
                name="companyName"
                className={`${styles.input_field} ${styles.company_name} input form-control`}
                required
              />
              {gettingCompanyPanResponse && serachterm && boolean1 && (
                <div className={styles.searchResults}>
                  <ul>
                    {gettingCompanyPanResponse
                      ? gettingCompanyPanResponse?.companyRes?.map((results, index) => (
                          <li onClick={() => handleFilteredData(results)} id={results._id} key={index} value={results}>
                            {results.name}{' '}
                          </li>
                        ))
                      : ''}
                  </ul>
                </div>
              )}
              {/* <Filter/> */}
              <label className={`${styles.label_heading} label_heading`} id="textInput">
                Company Name<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="drop"
                  onChange={(e) => {
                    saveCompanyData(e.target.name, e.target.value);
                  }}
                  name="GST"
                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                >
                  {' '}
                  <option value="">Select an option</option>
                  {gstList &&
                    gstList?.data?.gstList?.map((gstId, index) => (
                      <option key={index + 1} value={gstId}>
                        {gstId}
                      </option>
                    ))}
                  {/* <option value="gst1">282176JDEJ88UD</option>
                <option value="gst2">27AAATW46786C2ZG</option>
                <option value="gst3">VW5688TW4183C2ZG</option> */}
                </select>
                <label className={`${styles.label_heading} label_heading`} id="drop">
                  GST<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <div className="d-flex">
                <select
                  id="Code"
                  onChange={(e) => {
                    saveCompanyData(e.target.name, e.target.value);
                  }}
                  name="typeOfBusiness"
                  className={`${styles.input_field}   ${styles.customSelect} input form-control`}
                >
                  <option value="">Select an option</option>
                  <option value="Manufacturer">Manufacturer</option>
                  {/* <option value="Retailer">Retailer</option> */}
                  <option value="Trading">Trading</option>
                </select>
                <label className={`${styles.label_heading} label_heading`} id="textInput">
                  Type Of Business<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>
            </div>
            <div className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}>
              <div className={styles.phone_card}>
                <select
                  name="callingCode"
                  id="Code"
                  onChange={(e) => mobileCallingCodeFunction(e)}
                  className={`${styles.code_phone} input border-right-0`}
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
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      // saveCompanyData(e.target.name, e.target.value)
                      mobileFunction(e);
                      //green tick
                    } else {
                      //red mark
                      let toastMessage = 'Phone no. invalid';
                      if (!toast.isActive(toastMessage.toUpperCase())) {
                        toast.error(toastMessage.toUpperCase(), {
                          toastId: toastMessage,
                        });
                      }
                    }
                  }}
                  className={`${styles.input_field} input form-control border-left-0`}
                  required
                />
                <label className={`${styles.label_heading} label_heading`} id="textNumber">
                  Phone Number<strong className="text-danger">*</strong>
                </label>
              </div>
            </div>
            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
              <input
                type="text"
                id="textInput"
                onChange={(e) => {
                  saveCompanyData(e.target.name, e.target.value);
                }}
                name="email"
                className={`${styles.input_field} input form-control`}
                required
              />
              <label className={`${styles.label_heading} label_heading`} id="textInput">
                Email ID<strong className="text-danger">*</strong>
              </label>
            </div>
            <div className={`${styles.each_input} col-md-6 col-lg-4 col-sm-6`}>
              <div className={`${styles.turnover_input} d-flex align-items-center justify-content-start`}>
                <div className={`${styles.sub_heading} label_heading label-heading`}>
                  Turn Over (in Crores)
                  <strong className="text-danger">*</strong>
                </div>
                <input
                  className={`${styles.input_container} form-control input`}
                  type="text"
                  onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                  value={getvalue()}
                  onFocus={(e) => {
                    e.target.type = 'number';
                    setIsSliderOnFocus(true);
                    setSliderWithCr('');
                  }}
                  onBlur={(e) => {
                    e.target.type = 'text';
                    setIsSliderOnFocus(false);
                  }}
                  // max={100}
                  name="turnOver"
                  onChange={(e) => {
                    setSlider(Number(e.target.value));
                    saveCompanyData(e.target.name, Number(e.target.value));
                    getSlider();
                    if (e.target.value > 100) {
                      // e.target.value = 100
                      setSlider(Number(e.target.value));
                      saveCompanyData(e.target.name, Number(e.target.value));
                      getSlider();
                    }
                  }}
                />
              </div>
              {getSlider()}
            </div>
            <div className={`${styles.each_input} col-md-6 col-lg-4  col-sm-6`} style={{ marginTop: -1 }}>
              <div className={styles.radio_form} style={{ paddingLeft: 10 }}>
                <div className={`${styles.sub_heading} label_heading`}>
                  Communication Mode<strong className="text-danger">*</strong>
                </div>
                <Form selected="">
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={`${styles.radio} radio`}
                        inline
                        label="Email ID"
                        onChange={(e) => handleCommunication(e)}
                        name="Email"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={`${styles.radio} radio`}
                        inline
                        label="SMS"
                        name="SMS"
                        onChange={(e) => handleCommunication(e)}
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        className={`${styles.radio} radio`}
                        inline
                        label="Whatsapp"
                        onChange={(e) => {
                          // saveCompanyData('communicationMode', 'Whatsapp')
                          handleCommunication(e);
                        }}
                        name="Whatsapp"
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>
            <div className={`${styles.each_input} ${styles.phone} col-lg-4 col-md-6 col-sm-6`}>
              <div className={styles.phone_card}>
                <select
                  name="callingCode"
                  id="Code"
                  onChange={(e) => whatsappCallingCodeFunction(e)}
                  className={`${styles.code_phone} input border-right-0`}
                >
                  <option>+91</option>
                  <option>+1</option>
                  <option>+92</option>
                  <option>+95</option>
                  <option>+24</option>
                </select>
                <input
                  type="tel"
                  name="whatsapp"
                  onChange={(e) => {
                    if (phoneValidation(e.target.value)) {
                      // saveCompanyData(e.target.name, e.target.value)
                      whatsappFunction(e);
                      //green tick
                    } else {
                      handleErrorToast('Invalid Number');
                    }
                  }}
                  id="textNumber"
                  className={`${styles.input_field} input form-control border-left-0`}
                  required
                />
                <label className={`${styles.label_heading} label_heading`} id="drop">
                  Whatsapp Number(Optional)
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Index;
