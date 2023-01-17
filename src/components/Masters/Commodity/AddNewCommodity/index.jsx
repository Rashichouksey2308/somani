import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import { AddNewCommodity } from 'redux/masters/action';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '../../../Switch';
import SendApproval from './SendApproval';
import DateCalender from '../../../DateCalender';
import moment from 'moment';
import { toast } from 'react-toastify';

const index = () => {
  const initialState = {
    Commodity: 'Commodity',
    ChapterName: 'Chapter Name',
    ChapterCode: '',
    ApprovedCommodity: '',
    ApprovalDate: '',
    CurrentUnit: '',
    CGST: '',
    SGST: '',
    IGST: '',
    CESS: '',
    TCS: '',
  };
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(initialState);
  const obj = {
    Commodity: inputs?.Commodity,
    Chapter_Name: inputs?.ChapterName,
    Chapter_Code: inputs?.ChapterCode,
    Approved_Commodity: inputs?.ApprovedCommodity ? 'Yes' : 'No',
    Approved_Date: inputs?.ApprovalDate,
    Current_Unit_Price: inputs?.CurrentUnit,
    CGST: inputs?.CGST,
    SGST: inputs?.SGST,
    IGST: inputs?.IGST,
    CESS: inputs?.CESS,
    TCS: inputs?.TCS,
  };
  const handleChange = (event, field) => {
    if (field === 'ApprovedCommodity') {
      setInputs((prev) => ({
        ...prev,
        [field]: event.target.checked,
      }));
    } else if (field === 'ApprovalDate') {
      const date = moment(event).format('DD/MM/YYYY');
      setInputs((prev) => ({
        ...prev,
        [field]: date,
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    }
  };
  const handleSubmit = () => {
    if (inputs?.ChapterCode === '') {
      let toastMessage = 'Please Fill The Chapter Code';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return;
    } else {
      dispatch(AddNewCommodity(obj));
    }
  };
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
          >
            <h3 className={`${styles.heading}`}>Commodity</h3>
            <span>+</span>
          </div>
          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div className={`${styles.form_group} d-flex col-lg-4 col-md-6 col-sm-6`}>
                <select
                  id=""
                  onChange={(e) => handleChange(e, 'Commodity')}
                  name="Commodity"
                  className={`${styles.input_field}   ${styles.customSelect} input form-control`}
                  required
                >
                  <option value="Commodity">Commodity</option>
                  <option value="Trading">Trading</option>
                </select>
                <label className={`${styles.label_heading} label_heading`} id="textInput">
                  Commodity<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>

              <div className={`${styles.form_group} d-flex col-lg-4 col-md-6 col-sm-6`}>
                <select
                  id=""
                  onChange={(e) => handleChange(e, 'ChapterName')}
                  name="Commodity"
                  className={`${styles.input_field}   ${styles.customSelect} input form-control`}
                  required
                >
                  <option value="ChapterName">Chapter Name</option>
                  <option value="Trading">Trading</option>
                </select>
                <label className={`${styles.label_heading} label_heading`} id="textInput">
                  Chapter Name<strong className="text-danger">*</strong>
                </label>
                <img className={`${styles.arrow} image_arrow img-fluid`} src="/static/inputDropDown.svg" alt="Search" />
              </div>

              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  name="ChapterCode"
                  onChange={(e) => handleChange(e, 'ChapterCode')}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Chapter Code
                  <strong className="text-danger">*</strong>
                </label>
              </div>
            </div>

            <div className="row">
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <Switch
                  name="ApprovedCommodity"
                  val={inputs?.ApprovedCommodity}
                  onChange={(e) => handleChange(e, 'ApprovedCommodity')}
                />
              </div>

              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    dateFormat={'dd-MM-yyyy'}
                    name="ApprovalDate"
                    saveDate={handleChange}
                    labelName="Approved Date"
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
              </div>

              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  name="UnitMeasurement"
                  onChange={(e) => handleChange(e, 'UnitMeasurement')}
                />
                <label className={`${styles.label_heading} label_heading`}>Unit of Measurement</label>
              </div>
            </div>
            <div className="row">
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  name="CGST"
                  onChange={(e) => handleChange(e, 'CGST')}
                />
                <label className={`${styles.label_heading} label_heading`}>CGST</label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  name="SGST"
                  onChange={(e) => handleChange(e, 'SGST')}
                />
                <label className={`${styles.label_heading} label_heading`}>SGST</label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  name="IGST"
                  onChange={(e) => handleChange(e, 'IGST')}
                />
                <label className={`${styles.label_heading} label_heading`}>IGST</label>
              </div>
            </div>
            <div className="row">
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  name="CESS"
                  onChange={(e) => handleChange(e, 'CESS')}
                />
                <label className={`${styles.label_heading} label_heading`}>CESS</label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  name="TCS"
                  onChange={(e) => handleChange(e, 'TCS')}
                />
                <label className={`${styles.label_heading} label_heading`}>TCS</label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  name="CurrentUnit"
                  onChange={(e) => handleChange(e, 'CurrentUnit')}
                />
                <label className={`${styles.label_heading} label_heading`}>Current Unit Price Per Kg/L/Nos</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendApproval handle={handleSubmit} />
    </div>
  );
};
export default index;
