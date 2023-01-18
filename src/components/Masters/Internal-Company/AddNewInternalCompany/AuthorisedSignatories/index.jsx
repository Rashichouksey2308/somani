import React, { useState } from 'react';
import styles from '../index.module.scss';
import Image from 'next/image';

const Index = ({
    authorisedSignatoryDetails,
    setAuthorisedSignatoryDetails
}) => {

    const addMoreSignatoryRows = () => {
        setAuthorisedSignatoryDetails([
            ...authorisedSignatoryDetails,
            {
                name: '',
                designation: '',
                email: '',
                // phoneNo: '',
                actions: false,
            },
        ]);
    };

    const handleSignatoryChange = (name, value, index) => {
        let tempArr = [...authorisedSignatoryDetails];
        tempArr.forEach((val, i) => {
            if (i == index) {
                val[name] = value;
            }
        });

        setAuthorisedSignatoryDetails([...tempArr]);
    };

    const setActions = (index, val) => {
        setAuthorisedSignatoryDetails((prevState) => {
            const newState = prevState.map((obj, i) => {
                if (i == index) {
                    return { ...obj, actions: val };
                }
                return obj;
            });

            return newState;
        });
    };

    const handleRemoveSignatory = (index) => {
        setAuthorisedSignatoryDetails([
            ...authorisedSignatoryDetails.slice(0, index),
            ...authorisedSignatoryDetails.slice(index + 1),
        ]);
    };

    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#authorisedDetails"
                aria-expanded="true"
                aria-controls="authorisedDetails"
            >
                <h3 className={`${styles.heading} mb-0`}>Authorised Signatories Details</h3>
                <span>+</span>
            </div>

            <div id="authorisedDetails" className="collapse" aria-labelledby="authorisedDetails">
                {authorisedSignatoryDetails &&
                    authorisedSignatoryDetails?.map((val, index) => (
                        <div key={index} className={`${styles.dashboard_form} card-body`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <div className="d-flex">
                                        <select
                                            value={val.name}
                                            name="name"
                                            disabled={!val.actions}
                                            onChange={(e) => handleSignatoryChange(e.target.name, e.target.value, index)}
                                            className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                        >
                                            <option value='' disabled >Select</option>
                                            <option value="John Doe">John Doe</option>
                                            <option value="Ashish Jha">Ashish Jha</option>
                                        </select>
                                        <label className={`${styles.label_heading} label_heading`}>
                                            Name <strong className="text-danger">*</strong>
                                        </label>
                                        <div className={`${styles.img_arrow} image_arrow`}>
                                            <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        value={val.email}
                                        onChange={(e) => handleSignatoryChange(e.target.name, e.target.value, index)}
                                        disabled={!val.actions}
                                        name="email"
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Email <strong className="text-danger">*</strong>
                                    </label>
                                </div>

                                <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                                    <input
                                        type="text"
                                        id="textInput"
                                        name="designation"
                                        value={val.designation}
                                        onChange={(e) => handleSignatoryChange(e.target.name, e.target.value, index)}
                                        disabled={!val.actions}
                                        required
                                        className={`${styles.input_field} border_color input form-control`}
                                    />
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                                        Designation <strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-sm-6`}>
                                    <div className="d-flex align-items-center mt-2">
                                        {!val.actions ? (
                                            <img
                                                src="/static/mode_edit.svg"
                                                role="button"
                                                className={`${styles.edit_image} mr-3`}
                                                onClick={() => {
                                                    setActions(index, true);
                                                }}
                                            />
                                        ) : (
                                            <img
                                                src="/static/save-3.svg"
                                                role="button"
                                                className={`${styles.edit_image} mr-3`}
                                                alt="save"
                                                onClick={(e) => {
                                                    setActions(index, false);
                                                }}
                                            />
                                        )}
                                        {index && index !== 0 ? <img
                                            src="/static/delete 2.svg"
                                            className={`${styles.delete_image} mr-3 border-0 p-0`}
                                            onClick={() => handleRemoveSignatory(index)}
                                            alt="delete"
                                        /> : ''}
                                        <img
                                            className={`${styles.plus_add}`}
                                            onClick={() => addMoreSignatoryRows()}
                                            src="/static/add-btn.svg"
                                            alt="Plus"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Index