import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'

const index = () => {
  return (
    <div className={styles.main}>
      <Form>
        <div className={styles.heading}>Company Profile</div>
        <div className={styles.radio_form}>
          <div className={styles.sub_heading}>Transaction Type</div>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className={styles.radio_group}>
              <Form.Check
                className={styles.radio}
                inline
                label="Import"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                className={styles.radio}
                inline
                label="Domestic"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </div>

        <div className={`${styles.input_container} row`}>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <label className={styles.label_heading} id="textInput">
              Company PAN
            </label>
            <input
              type="text"
              id="textInput"
              placeholder="IDKOP3409G"
              className={`${styles.input_field} form-control`}
            />
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <label className={styles.label_heading} id="textInput">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Ramakrishna Traders"
              id="textInput"
              className={`${styles.input_field} form-control`}
            />
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <label className={styles.label_heading} id="drop">
              GST
            </label>
            <select id="drop" className={`${styles.input_field} form-control`}>
              <option value="gst">27AAATW4183C2ZG</option>
              <option value="gst1">282176JDEJ88UD</option>
              <option value="gst2">27AAATW46786C2ZG</option>
              <option value="gst3">VW5688TW4183C2ZG</option>
            </select>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <label className={styles.label_heading} id="textInput">
              Type Of Business
            </label>
            <input
              type="text"
              id="textInput"
              placeholder="Manufacturer"
              className={`${styles.input_field} form-control`}
            />
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <label className={styles.label_heading} id="textNumber">
              Phone
            </label>
            <div className={styles.phone_card}>
              <select id="Code" className={styles.code_phone}>
                <option>+91</option>
                <option>+1</option>
                <option>+92</option>
                <option>+95</option>
                <option>+24</option>
              </select>
              <input
                type="text"
                placeholder="9876543210"
                id="textNumber"
                className={`${styles.input_field} form-control`}
              />
            </div>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <label className={styles.label_heading} id="textInput">
              Email ID
            </label>
            <input
              type="text"
              placeholder="johndow@email.com"
              id="textInput"
              className={`${styles.input_field} form-control`}
            />
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className={styles.label_heading} style={{ marginTop: 10 }}>
              Turn Over(in Crores)
            </div>
            <div className={styles.slidecontainer}>
              <input
                type="range"
                min="0"
                max="100"
                step="20"
                list="tickmarks"
                className={`${styles.slider} form-control`}
                id="myRange"
              />
              <datalist id="tickmarks">
                <option value="0" label="0"></option>
                <option value="20" label="20"></option>
                <option value="40" label="40"></option>
                <option value="60" label="60"></option>
                <option value="80" label="80"></option>
                <option value="100" label="100"></option>
              </datalist>
            </div>
          </div>
          <div
            className={`${styles.each_input} col-md-4 col-sm-6`}
            style={{ marginTop: -30 }}
          >
            <div className={styles.radio_form} style={{ paddingLeft: 10 }}>
              <div className={styles.sub_heading}>Communication Mode</div>
              <Form>
                {['checkbox'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Email ID"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="SMS"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />

                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Whatsapp"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <label className={styles.label_heading} id="drop">
              Whatsapp Number(Optional)
            </label>
            <div className={styles.phone_card}>
              <select id="Code" className={styles.code_phone}>
                <option>+91</option>
                <option>+1</option>
                <option>+92</option>
                <option>+95</option>
                <option>+24</option>
              </select>
              <input
                type="text"
                placeholder="9876543210"
                id="textNumber"
                className={`${styles.input_field} form-control`}
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default index
