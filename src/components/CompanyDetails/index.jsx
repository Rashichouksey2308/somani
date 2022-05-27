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
                        <input type="text"
                            className={`${styles.input_field} form-control`} required />
                        <label className={styles.label_heading}>Company PAN<strong className="text-danger">*</strong></label>
                    </div>

                    <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                        <input
                            type="text"
                            className={`${styles.input_field} form-control`} required />
                            <label className={styles.label_heading}>Company Name<strong className="text-danger">*</strong></label>

                    </div>

                    <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                        <select
                            className={`${styles.input_field} form-control`} required>
                            <option value="gst">Select GST No.</option>
                            <option value="gst1">282176JDEJ88UD</option>
                            <option value="gst2">27AAATW46786C2ZG</option>
                            <option value="gst3">VW5688TW4183C2ZG</option>
                        </select>
                        <label className={styles.label_heading}>GST<strong className="text-danger">*</strong></label>

                    </div>
                    <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                        <input
                            type="text"
                            className={`${styles.input_field} form-control`}  required />
                            <label className={styles.label_heading}>Type Of Business<strong className="text-danger">*</strong></label>

                    </div>

                    <div className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}>
                        <div className={styles.phone_card}>
                            <select className={styles.code_phone}>
                                <option>+91</option>
                                <option>+1</option>
                                <option>+92</option>
                                <option>+95</option>
                                <option>+24</option>
                            </select>
                            <input type="text"
                                className={`${styles.input_field} form-control`} required/>
                                <label className={styles.label_heading}>Phone<strong className="text-danger">*</strong></label>

                        </div>
                    </div>

                    <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                        <input
                            type="text"
                            className={`${styles.input_field} form-control`} required/>
                            <label className={styles.label_heading} >Email ID<strong className="text-danger">*</strong></label>


                    </div>
                    <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                        <div className={styles.label_heading}
                            style={{ marginTop: 10 }}>Turn Over(in Crores)<strong className="text-danger">*</strong></div>
                            <div className={styles.slidecontainer}>
                            <input type="range" min="0" max="100" step="20" id="sliderRange"
                                list="tickmarks"
                                className={`${styles.slider} form-control`} required/>
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
                    <div className={`${styles.each_input} col-md-4 col-sm-6`}
                        style={{ marginTop: -30 }}>
                        <div className={styles.radio_form}
                            style={{ paddingLeft: 10 }}>
                            <div className={styles.sub_heading}>Communication Mode<strong className="text-danger">*</strong></div>
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

                    <div className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}>
                        <div className={styles.phone_card}>
                            <select className={styles.code_phone}>
                                <option>+91</option>
                                <option>+1</option>
                                <option>+92</option>
                                <option>+95</option>
                                <option>+24</option>

                            </select>
                            <input type="text"
                                className={`${styles.input_field} form-control`}  required/>
                                <label className={styles.label_heading}>Whatsapp Number(Optional)</label>
                        </div>

                    </div>


                </div>
            </Form>

        </div>
    );
}



export default index
