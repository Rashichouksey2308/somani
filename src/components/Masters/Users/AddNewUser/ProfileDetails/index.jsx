import React, { useState, useRef } from 'react';
import styles from '../index.module.scss';
import { Form } from 'react-bootstrap';
import Image from 'next/image';
import DateCalender from '../../../../DateCalender';

const Index = ({
    userTypeRadio,
    setUserTypeRadio,
    profileDetails,
    setProfileDetails,
    handleProfileDetailsChange
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [filePreview, setFilePreview] = React.useState("/static/profile-image.png");
    const fileRef = useRef();

    const onShowPasswordHandler = () => {
        setShowPassword(!showPassword);
    };

    const handleFileRef = () => {
        fileRef.current.click();
    };

    const handleFile = (event) => {
        const reader = new FileReader();
        let selectedFile = null;
        if (event.currentTarget.files[0].size < 2000000) {
            setProfileDetails({ ...profileDetails, profileImage: event.currentTarget.files[0] });
            selectedFile = event.target.files[0];
        } else {
            alert("File larger than 2MB");
        }

        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }

        reader.onload = (e) => {
            setFilePreview(e.target.result);
        };
    };

    const saveProfileData = (name, value) => {
        const newInput = { ...profileDetails };
        profileDetails[name] = value;
        setProfileDetails(newInput);
    };

    const saveDate = (value, name) => {
        const d = new Date(value);
        let text = d.toISOString();
        saveProfileData(name, text);
    };

    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
                <h3 className={`${styles.heading}`}>Profile Details</h3>
                {userTypeRadio === 'internal' && (
                    <div className={styles.status_heading}>
                        User Status <span className={styles.active}>Active</span>
                    </div>
                )}
            </div>

            <div className={`${styles.dashboard_form} vessel_card card-body`}>
                <div className={`${styles.radio_form} mb-4`}>
                    <div className={`${styles.sub_heading} label_heading`}>
                        User Type <strong className="text-danger">*</strong>
                    </div>
                    {['radio'].map((type, index) => (
                        <div key={`inline-${index}`} className={`${styles.radio_group} mt-2`}>
                            <Form.Check
                                className={styles.radio}
                                inline
                                defaultChecked
                                label="Internal"
                                name="group1"
                                onChange={() => setUserTypeRadio('internal')}
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                className={styles.radio}
                                inline
                                label="External"
                                name="group1"
                                onChange={() => setUserTypeRadio('external')}
                                type={type}
                                id={`inline-${type}-2`}
                            />
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-space-between">
                    <div className="row">
                        {userTypeRadio === 'internal' && (
                            <>
                                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="fullName"
                                        value={profileDetails?.fullName}
                                        onChange={handleProfileDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Full Name
                                        <strong className="text-danger ml-1">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 mr-1`}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="supplierName"
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>Username</label>
                                </div>
                            </>
                        )}
                        {userTypeRadio === 'external' && (
                            <>
                                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                    <input
                                        type="text"
                                        id="textInput"
                                        name="companyName"
                                        className={`${styles.input_field} border_color input form-control`}
                                        value={profileDetails?.companyName}
                                        onChange={handleProfileDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                                        Company/ Business Name
                                        <strong className="text-danger ml-1">*</strong>
                                    </label>
                                </div>

                                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                    <input
                                        type="text"
                                        id="textInput"
                                        name="shortName"
                                        className={`${styles.input_field} border_color input form-control`}
                                        value={profileDetails?.shortName}
                                        onChange={handleProfileDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                                        Short Name
                                    </label>
                                </div>

                                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                    <input
                                        type="text"
                                        id="textInput"
                                        name="pan"
                                        className={`${styles.input_field} border_color input form-control`}
                                        value={profileDetails?.pan}
                                        onChange={handleProfileDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                                        PAN
                                        <strong className="text-danger ml-1">*</strong>
                                    </label>
                                </div>

                                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                    <div className="d-flex">
                                        <DateCalender labelName="Date of Incorporation" name="dateOfIncorporation" isRequired={true} saveDate={saveDate} />
                                        <div className={`${styles.calanderIcon} image_arrow`}>
                                            <Image width="22px" height="24px" src="/static/caldericon.svg" alt="Calender" />
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}

                        <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="officialEmailId"
                                className={`${styles.input_field} border_color input form-control`}
                                value={profileDetails?.officialEmailId}
                                onChange={handleProfileDetailsChange}
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                Official Email ID
                                <strong className="text-danger ml-1">*</strong>
                            </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <div className="d-flex" id="password">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={profileDetails?.password}
                                    onChange={handleProfileDetailsChange}
                                    className={`${styles.input_field} border_color input form-control`}
                                    required
                                />
                                <label className={`${styles.label_heading} label_heading`} htmlFor="password">
                                    Password<strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.img_arrow} image_arrow`}>
                                    <img
                                        src="/static/eye.svg"
                                        onClick={onShowPasswordHandler}
                                        alt="Show Password"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        {userTypeRadio === 'external' && (
                            <>
                                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                    <input
                                        type="text"
                                        id="textInput"
                                        name="userRole"
                                        className={`${styles.input_field} border_color input form-control`}
                                        value={profileDetails?.userRole}
                                        onChange={handleProfileDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                                        User Role
                                        <strong className="text-danger ml-1">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                    <input
                                        type="text"
                                        id="textInput"
                                        name="phoneNumber"
                                        className={`${styles.input_field} border_color input form-control`}
                                        value={profileDetails?.phoneNumber}
                                        onChange={handleProfileDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                                        Phone Number
                                        <strong className="text-danger ml-1">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                    <input
                                        type="text"
                                        id="textInput"
                                        name="alternatePhoneNumber"
                                        className={`${styles.input_field} border_color input form-control`}
                                        value={profileDetails?.alternatePhoneNumber}
                                        onChange={handleProfileDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                                        Alternate Phone Number
                                    </label>
                                </div>

                                <div className={`${styles.each_input} col-md-6 col-lg-4  col-sm-6`} style={{ marginTop: -1 }}>
                                    <div className={styles.radio_form} style={{ paddingLeft: 10 }}>
                                        <div className={`${styles.sub_heading} label_heading`}>
                                            Communication Mode
                                        </div>
                                        <Form selected="">
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className={styles.radio_group}>
                                                    <Form.Check
                                                        className={`${styles.radio} radio`}
                                                        inline
                                                        // defaultChecked={true}
                                                        label="Email ID"
                                                        name="email"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                        checked={profileDetails?.communicationMode.includes('email')}
                                                        onClick={handleProfileDetailsChange}
                                                    />
                                                    <Form.Check
                                                        className={`${styles.radio} radio`}
                                                        inline
                                                        label="SMS"
                                                        name="sms"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        checked={profileDetails?.communicationMode.includes('sms')}
                                                        onClick={handleProfileDetailsChange}
                                                    />

                                                    <Form.Check
                                                        className={`${styles.radio} radio`}
                                                        inline
                                                        label="Whatsapp"
                                                        name="whatsapp"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        checked={profileDetails?.communicationMode.includes('whatsapp')}
                                                        onClick={handleProfileDetailsChange}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </div>
                                </div>
                                <div className={`${styles.form_group} ${styles.phone} col-md-4 col-sm-6`}>
                                    <div className={`${styles.phone_card} d-flex`}>
                                        <select name="callingCode" id="Code" className={`${styles.code_phone} input border-right-0`}>
                                            <option>+91</option>
                                            <option>+1</option>
                                            <option>+92</option>
                                            <option>+95</option>
                                            <option>+24</option>
                                        </select>
                                        <input
                                            type="number"
                                            onWheel={(event) => event.currentTarget.blur()}
                                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                                            id="textNumber"
                                            name="whatsappNumber"
                                            className={`${styles.input_field}  input form-control border-left-0`}
                                            value={profileDetails?.whatsappNumber}
                                            onChange={handleProfileDetailsChange}
                                        />
                                        <label className={`${styles.label_heading} label_heading`} id="textNumber">
                                            Whatsapp Number (Optional)
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    {userTypeRadio === 'internal' && (
                        <div className="d-flex" style={{ marginTop: '-100px' }}>
                            <div className="">
                                <Image width="266px" height="287px" src={filePreview} alt="Profile Image" />
                                <div style={{ marginLeft: '200px', marginTop: '-270px' }}>
                                    <Image width="41px" height="41px" src="/static/edit-white-background.png" alt="Edit" className='cursor-pointer' onClick={() => handleFileRef()} />
                                </div>
                                <input
                                    id="image_url"
                                    name="image_url"
                                    className='d-none'
                                    ref={fileRef}
                                    type="file"
                                    accept="image/jpg, image/jpeg, image/png"
                                    onChange={(e) => handleFile(e)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index