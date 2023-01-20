import React from 'react';
import styles from '../index.module.scss';
import Image from 'next/image';

const Index = ({
    keyAddressData,
    setKeyAddressData,
    handleAddNewAddress,
    keyAddData,
    editAddress,
    deleteAddress,
    handleKeyAddressChange
}) => {
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#keyAddress"
                aria-expanded="true"
                aria-controls="keyAddress"
            >
                <h3 className={`${styles.heading} mb-0`}>Key Addresses</h3>
                <span>+</span>
            </div>
            <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
                <div className={`${styles.dashboard_form} card-body`}>
                    <div className="d-flex justify-content-between">
                        {keyAddData?.map((address, index) => {
                            return (
                                <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }} key={index}>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <label className={styles.label}>{address?.addressType} Office Address</label>
                                            <div className={styles.address_values}>
                                                <p>{address?.address}, {address?.city}, {address?.state} - {address?.pincode}</p>
                                                <p>
                                                    <span>GSTIN:</span> {address?.GSTIN}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex">
                                                <img className={`${styles.edit_image} img-fluid`} src="/static/mode_edit.svg" alt="Edit" onClick={() => {
                                                    editAddress(index);
                                                }} />
                                                <div className={`${styles.delete_image} ml-3`}>
                                                    <Image src="/static/delete.svg" width="40px" height="40px" alt="Bin" onClick={() => {
                                                        deleteAddress(index);
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={`${styles.address_card} mt-3 pb-5 value background1`}>
                        <div
                            className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
                        >
                            <h3 className={`${styles.heading}`}>Add a new address</h3>
                        </div>
                        <div className={`${styles.dashboard_form} card-body border_color`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                                    <div className="d-flex">
                                        <select
                                            className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                            name="addressType"
                                            value={keyAddressData?.addressType}
                                            onChange={handleKeyAddressChange}
                                            required
                                        >
                                            <option value="Branch">Branch</option>
                                            <option value="Registered">Registered</option>
                                            <option value="Corporate Office">Corporate Office</option>
                                        </select>
                                        <label className={`${styles.label_heading} label_heading`}>
                                            Address Type<strong className="text-danger">*</strong>
                                        </label>
                                        <div className={`${styles.image_arrow} image_arrow`}>
                                            <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        required
                                        type="number"
                                        name="pinCode"
                                        value={keyAddressData?.pinCode}
                                        onWheel={(e) => e.target.blur()}
                                        onChange={handleKeyAddressChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Pin Code
                                        <strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <div className="d-flex">
                                        <select
                                            className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                            name="countryOfOrigin"
                                            required
                                            style={{ paddingRight: '35px' }}
                                        >
                                            <option value="India">Uttar Pradesh</option>
                                            <option value="Dubai">Dubai</option>
                                        </select>
                                        <label className={`${styles.label_heading} label_heading`}>
                                            State<strong className="text-danger">*</strong>
                                        </label>
                                        <div className={`${styles.image_arrow} image_arrow`}>
                                            <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.form_group} col-md-2 col-sm-4`}>
                                    <div className="d-flex">
                                        <select
                                            className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                            name="countryOfOrigin"
                                            required
                                        >
                                            <option value="India">Agra</option>
                                            <option value="Dubai">Dubai</option>
                                        </select>
                                        <label className={`${styles.label_heading} label_heading`}>
                                            City<strong className="text-danger">*</strong>
                                        </label>
                                        <div className={`${styles.image_arrow} image_arrow`}>
                                            <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.form_group} col-md-3 col-sm-4`}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        required
                                        type="text"
                                        name="GSTIN"
                                        value={keyAddressData?.GSTIN}
                                        onWheel={(e) => e.target.blur()}
                                        onChange={handleKeyAddressChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>GSTIN</label>
                                </div>
                                <div className={`${styles.form_group} col-md-12`}>
                                    <input
                                        className={`${styles.input_field} ${styles.address_field} border_color input form-control`}
                                        required
                                        type="text"
                                        name="address"
                                        value={keyAddressData?.address}
                                        onWheel={(e) => e.target.blur()}
                                        onChange={handleKeyAddressChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Address<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            className={`${styles.add_btn}`}
                            onClick={() => handleAddNewAddress()}
                        >
                            Add
                        </button>
                        <button className={`${styles.cancel_btn}`}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index