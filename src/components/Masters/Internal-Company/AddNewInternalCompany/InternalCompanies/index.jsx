import React, { useState } from 'react';
import styles from '../index.module.scss';
import { Form } from 'react-bootstrap';
import Image from 'next/image';

const Index = ({
    companyDetails,
    setCompanyDetails,
    handleCompanyDetailsChange
}) => {
    const [companyTypeRadio, setCompanyTypeRadio] = useState('internal');

    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
                <h3 className={`${styles.heading}`}>Internal Companies</h3>
                <div className={`${styles.radio_form}`}>
                    {['radio'].map((type, index) => (
                        <div key={`inline-${index}`} className={`${styles.radio_group} mt-2`}>
                            <Form.Check
                                className={styles.radio}
                                inline
                                defaultChecked
                                label="Domestic"
                                name="group1"
                                onChange={() => setCompanyTypeRadio('domestic')}
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                className={styles.radio}
                                inline
                                label="International"
                                name="group1"
                                onChange={() => setCompanyTypeRadio('international')}
                                type={type}
                                id={`inline-${type}-2`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                        <div className="d-flex">
                            <select
                                name="Country"
                                value={companyDetails?.Country}
                                className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                onChange={handleCompanyDetailsChange}
                            >
                                <option value="India">India</option>
                                <option value="Switzerland">Switzerland</option>
                            </select>
                            <label className={`${styles.label_heading} label_heading`}>
                                Country <strong className="text-danger ml-1">*</strong>
                            </label>
                            <div className={`${styles.img_arrow} image_arrow`}>
                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                        <input
                            className={`${styles.input_field} border_color input form-control`}
                            type="text"
                            required
                            name="Company_Name"
                            value={companyDetails?.Company_Name}
                            onChange={handleCompanyDetailsChange}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                            Company Name <strong className="text-danger">*</strong>
                        </label>
                    </div>
                    <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                        <input
                            className={`${styles.input_field} border_color input form-control`}
                            type="text"
                            required
                            value={companyDetails?.Short_Name}
                            name="Short_Name"
                            onChange={handleCompanyDetailsChange}
                        />
                        <label className={`${styles.label_heading} label_heading`}>
                            Short Name <strong className="text-danger">*</strong>
                        </label>
                    </div>
                    {companyTypeRadio === 'domestic' && (
                        <>
                            <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                <input
                                    className={`${styles.input_field} border_color input form-control`}
                                    type="text"
                                    value={companyDetails?.PAN}
                                    required
                                    name="PAN"
                                    onChange={handleCompanyDetailsChange}
                                />
                                <label className={`${styles.label_heading} label_heading`}>
                                    PAN <strong className="text-danger">*</strong>
                                </label>
                            </div>

                            <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                <input
                                    className={`${styles.input_field} border_color input form-control`}
                                    type="text"
                                    required
                                    value={companyDetails?.CIN_No}
                                    name="CIN_No"
                                    onChange={handleCompanyDetailsChange}
                                />
                                <label className={`${styles.label_heading} label_heading`}>
                                    CIN No. <strong className="text-danger">*</strong>
                                </label>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index