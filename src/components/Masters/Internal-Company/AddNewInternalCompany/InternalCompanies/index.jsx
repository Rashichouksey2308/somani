import React, { useState } from 'react';
import styles from '../index.module.scss';
import { Form } from 'react-bootstrap';
import Image from 'next/image';
import AddComponent from './AddComponent';
import { addressValidtion } from '@/utils/helpers/review';

const Index = ({
    companyTypeRadio,
    setCompanyTypeRadio,
    companyData,
    saveCompanyData,
    getCountriesMasterData,
    keyAddData,
    setKeyAddData,
    pincodes
}) => {
    const [showEditAddress, setShowEditAddress] = useState(false);
    const [showAddress, setShowAddress] = useState(true);
    const [Index, setIndex] = useState('0');
    const [keyAddressData, setKeyAddressData] = useState({
        GSTIN: '',
        addressType: '',
        branch: '',
        city: '',
        state: '',
        fullAddress: '',
        email: '',
        pinCode: '',
    });
    const [editData, setEditData] = useState({
        GSTIN: '',
        addressType: '',
        branch: '',
        city: '',
        state: '',
        fullAddress: '',
        email: '',
        pinCode: '',
    });

    const handleChange = (name, value) => {
        const newInput = { ...keyAddressData };
        newInput[name] = value;
        setKeyAddressData(newInput);
    };

    const handleClick = () => {
        if (addressValidtion(keyAddressData)) {
            keyAddDataArr(keyAddressData);
            setKeyAddressData({
                GSTIN: '',
                addressType: '',
                branch: '',
                city: '',
                state: '',
                fullAddress: '',
                email: '',
                pinCode: '',
            });
        }
    };

    const handleCancel = () => {
        setKeyAddressData({
            GSTIN: '',
            addressType: '',
            branch: '',
            city: '',
            state: '',
            fullAddress: '',
            email: '',
            pinCode: '',
        });
    };

    const editAddress = (index) => {
        setShowAddress(false);
        setShowEditAddress(true);
        setIndex(index);
        let tempArr = keyAddData;
        setEditData({
            GSTIN: tempArr[index].GSTIN,
            addressType: tempArr[index].addressType,
            branch: tempArr[index].branch,
            city: tempArr[index].city,
            state: tempArr[index].state,
            email: tempArr[index].email,
            fullAddress: tempArr[index].fullAddress,
            pinCode: tempArr[index].pinCode,
        });
    };

    const changeData = (name, value) => {
        const newInput = { ...editData };
        newInput[name] = value;
        setEditData(newInput);
    };

    const handleEditCancel = () => {
        setEditData({
            GSTIN: '',
            addressType: '',
            branch: '',
            city: '',
            state: '',
            fullAddress: '',
            email: '',
            pinCode: '',
        });
    };

    const keyAddDataArr = (keyAddressData) => {
        const newArr = [...keyAddData];
        newArr.push(keyAddressData);
        setKeyAddData(newArr);
    };

    const updateKeyAddDataArr = (newData, index) => {
        setKeyAddData((prevState) => {
            const newState = prevState.map((obj, i) => {
                if (i === index) {
                    return newData;
                }
                return obj;
            });

            return newState;
        });
    };

    const deleteAddress = (index) => {
        setKeyAddData([...keyAddData.slice(0, index), ...keyAddData.slice(index + 1)]);
    };

    return (
        <div className={`${styles.main} vessel_card card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
                <h3 className={`${styles.heading}`}>Internal Companies</h3>
                <div className='d-flex'>
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
                    <span
                        data-toggle="collapse"
                        data-target="#internalCompanies"
                        aria-expanded="true"
                        aria-controls="internalCompanies"
                    >+</span>
                </div>
            </div>
            <div
                id="internalCompanies"
                // className="collapse"
                aria-labelledby="internalCompanies"
            >
                <div className={`${styles.dashboard_form} card-body`}>
                    <div className="row">
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <div className="d-flex">
                                <select
                                    name="Country"
                                    value={companyData?.Country}
                                    className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                    onChange={(e) => {
                                        {
                                            saveCompanyData(e.target.name, e.target.value);
                                        }
                                    }}
                                >
                                    <option selected disabled>
                                        Select
                                    </option>
                                    {getCountriesMasterData?.map((val, index) => {
                                        return <option value={`${val.Country}`}>{val.Country}</option>;
                                    })}
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
                                value={companyData?.Company_Name}
                                onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
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
                                value={companyData?.Short_Name}
                                name="Short_Name"
                                onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
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
                                        value={companyData?.PAN}
                                        required
                                        name="PAN"
                                        onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
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
                                        value={companyData?.CIN_No}
                                        name="CIN_No"
                                        onChange={(e) => saveCompanyData(e.target.name, e.target.value)}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        CIN No. <strong className="text-danger">*</strong>
                                    </label>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className={`${styles.dashboard_form} card-body`} style={{ borderTop: '3px solid #D2D7E5' }}>
                    <div className={`${styles.card_heading} mt-3`}>Key Addresses</div>
                    {showAddress ? (
                        <AddComponent
                            handleChange={handleChange}
                            handleCancel={handleCancel}
                            handleClick={handleClick}
                            companyTypeRadio={companyTypeRadio}
                            keyAddressData={keyAddressData}
                            setKeyAddressData={setKeyAddressData}
                            pincodes={pincodes}
                        />
                    ) : null}
                    {showEditAddress ? (
                        <AddComponent
                            index={Index}
                            editData={editData}
                            setShowEditAddress={setShowEditAddress}
                            setShowAddress={setShowAddress}
                            showEditAddress={showEditAddress}
                            handleChange={changeData}
                            handleCancel={handleEditCancel}
                            handleClick={updateKeyAddDataArr}
                            companyTypeRadio={companyTypeRadio}
                            keyAddressData={editData}
                            setKeyAddressData={setKeyAddressData}
                            pincodes={pincodes}
                        />
                    ) : null}
                    {keyAddData &&
                        keyAddData?.length > 0 &&
                        keyAddData?.map((val, index) => (
                            <div key={index} className="d-flex justify-content-between">
                                <div className={`${styles.address_card} value background1`} style={{ padding: '22px' }}>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <label className={styles.label}>{val.addressType}</label>
                                            <div className={styles.address_values}>
                                                <p>{val.fullAddress}</p>
                                                <div className="d-flex">
                                                    <p>
                                                        <span>Email:</span> {val.email}
                                                    </p>
                                                    {companyTypeRadio === 'domestic' && (
                                                        <p>
                                                            <span className="ml-5">GSTIN:</span> {val.GSTIN}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex">
                                                <img
                                                    onClick={() => {
                                                        editAddress(index);
                                                    }}
                                                    className={`${styles.edit_image} img-fluid`}
                                                    src="/static/mode_edit.svg"
                                                    alt="Edit"
                                                />
                                                <div className={`${styles.delete_image} ml-3`}>
                                                    <Image
                                                        onClick={() => deleteAddress(index)}
                                                        src="/static/delete.svg"
                                                        width="40px"
                                                        height="40px"
                                                        alt="Bin"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Index