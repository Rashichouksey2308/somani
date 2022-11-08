/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import DateCalender from '../DateCalender';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { UpdateCommodity } from 'redux/commodity/action';
import { useSelector } from 'react-redux';
import _get from 'lodash/get';


function Index() {
  const dispatch = useDispatch();

  const { Commodity } = useSelector((state) => state.commodity);

  const commodityDetail = _get(Commodity, 'data[0]', {});

  const [commodityData, setCommodityData] = useState({
    Commodity: '',
    Chapter_Name: '',
    Chapter_Code: '',
    Approved_Commodity: '',
    Approved_Date: '',
  });


  useEffect(() => {
    setCommodityData({
      Commodity: commodityDetail?.Commodity,
      Chapter_Name: commodityDetail?.Chapter_Name,
      Chapter_Code: commodityDetail?.Chapter_Code,
      Approved_Commodity: commodityDetail?.Approved_Commodity,
      Approved_Date: commodityDetail?.Approved_Date,
    });
  }, [commodityDetail]);

  const saveCommodityData = (name, value) => {
    const newInput = { ...commodityData };
    newInput[name] = value;
    setCommodityData(newInput);
  };

  const saveDate = (value, name) => {
    const d = new Date(value);
    let text = d.toISOString();
    saveCommodityData(name, text);
  };

  const handleUpdate = () => {
    let data = {
      commodityId: commodityDetail._id,
      Commodity: commodityData?.Commodity,
      Chapter_Name: commodityData?.Chapter_Name,
      Chapter_Code: commodityData?.Chapter_Code,
      Approved_Commodity: commodityData?.Approved_Commodity,
      Approved_Date: commodityData?.Approved_Date,
    };
    dispatch(UpdateCommodity(data));
  };

  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <div className={`${styles.main} vessel_card card border_color`}>
          <div
            className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
          >
            <h3 className={`${styles.heading}`}>Commodity</h3>
          </div>

          <div className={`${styles.dashboard_form} card-body`}>
            <div className="row">
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  value={commodityData?.Commodity}
                  name="Commodity"
                  onChange={(e) => saveCommodityData(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Commodity <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="text"
                  required
                  value={commodityData.Chapter_Name}
                  name="Chapter_Name"
                  onChange={(e) => saveCommodityData(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Chapter Name <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                <input
                  className={`${styles.input_field} border_color input form-control`}
                  type="number"
                  value={commodityData?.Chapter_Code}
                  required
                  name="Chapter_Code"
                  onChange={(e) => saveCommodityData(e.target.name, e.target.value)}
                />
                <label className={`${styles.label_heading} label_heading`}>
                  Chapter Code <strong className="text-danger">*</strong>
                </label>
              </div>
              <div className={`${styles.form_group} mt-0 col-lg-2 col-md-6 col-sm-6 `}>
                <div className={`${styles.radio_form} ml-1`}>
                  <div className={`${styles.sub_heading} label_heading`}>Approved Commodity</div>
                  {['radio'].map((type, index) => (
                    <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        defaultChecked={commodityData?.Approved_Commodity == 'Yes'}
                        onChange={(e) => saveCommodityData('Approved_Commodity', 'Yes')}
                        label="Yes"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="No"
                        defaultChecked={commodityData?.Approved_Commodity == 'No'}
                        onChange={(e) => saveCommodityData('Approved_Commodity', 'No')}
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                <div className="d-flex">
                  <DateCalender
                    name="Approved_Date"
                    defaultDate={commodityData?.Approved_Date ?? ''}
                    saveDate={saveDate}
                    labelName="Approved Date "
                  />
                  <div className={`${styles.calanderIcon} image_arrow`}>
                    <Image width="22px" height="24px" src="/static/caldericon.svg" alt="Calender" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>
              <button onClick={handleUpdate} className={`${styles.approve} ml-3`}>
                Update
              </button>
            </div>
          </div>
        }
        <div className="d-flex justify-content-end mb-5" style={{ marginTop: '35px' }}>
          <div className={`${styles.footer_heading} mr-5`}>
            Created By <span>Balakrishna SGF001</span>
          </div>
          <div className={`${styles.footer_heading}`}>
            Approved By <span>Ramakrishna SGF001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
