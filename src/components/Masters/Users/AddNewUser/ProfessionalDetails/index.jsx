import React from 'react';
import styles from '../index.module.scss';
import { Form } from 'react-bootstrap';
import Image from 'next/image';
import DateCalender from '../../../../DateCalender';

const Index = ({
    addRow,
    onAddRow,
    handleDelete,
    professionalDetails,
    setProfessionalDetails,
    handleProfessionalDetailsChange
}) => {

    const saveProfessionalData = (name, value) => {
        const newInput = { ...professionalDetails };
        newInput[name] = value;
        setProfessionalDetails(newInput);
    };

    const saveDate = (value, name) => {
        const d = new Date(value);
        let text = d.toISOString();
        saveProfessionalData(name, text);
    };

    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#keyAddress"
                aria-expanded="true"
                aria-controls="keyAddress"
            >
                <h3 className={`${styles.heading} mb-0`}>Professional Details</h3>
                <span>+</span>
            </div>
            <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
                <div className={`${styles.dashboard_form} vessel_card card-body`}>
                    <div className="row">
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <div className="d-flex">
                                <select
                                    className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                    name="userRole"
                                    value={professionalDetails?.userRole}
                                    onChange={handleProfessionalDetailsChange}
                                    required
                                >
                                    <option value="HR">HR</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Operation">Operation</option>
                                    <option value="Credit">Credit</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                <label className={`${styles.label_heading} label_heading`}>
                                    User Role<strong className="text-danger ml-1">*</strong>
                                </label>
                                <div className={`${styles.img_arrow} image_arrow`}>
                                    <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {addRow &&
                            addRow.map((val, index) => {
                                return (
                                    <>
                                        <div key={index} className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                            <div className="d-flex">
                                                <select
                                                    className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                                >
                                                    <option value="">Indo German</option>
                                                    <option value="">Ergo Products</option>
                                                </select>
                                                <label className={`${styles.label_heading} label_heading`}>
                                                    Company/Business Name
                                                    <strong className="text-danger ml-1">*</strong>
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
                                                name="supplierName"
                                            />
                                            <label className={`${styles.label_heading} label_heading`}>
                                                Branch
                                                <strong className="text-danger ml-1">*</strong>
                                            </label>
                                        </div>
                                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                            <div className="d-flex mt-2">
                                                {/* { addRow.length >= 0 && ( */}
                                                <div className={`${styles.delete_image} mr-4`}>
                                                    <Image
                                                        src="/static/delete.svg"
                                                        onClick={() => handleDelete(index)}
                                                        width="40px"
                                                        height="40px"
                                                        alt="Bin"
                                                    />
                                                </div>
                                                {/* )} */}
                                                {/* { addRow.length === 1 && ( */}
                                                <Image
                                                    width="36px"
                                                    height="36px"
                                                    src="/static/add-btn.svg"
                                                    className={`${styles.add_image} `}
                                                    alt="Add button"
                                                    onClick={(e) => {
                                                        onAddRow();
                                                    }}
                                                />
                                                {/* ) } */}
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <div className="d-flex">
                                <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                    name="department"
                                    value={professionalDetails?.department}
                                    onChange={handleProfessionalDetailsChange}
                                >
                                    <option value="HR">HR</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Operation">Operation</option>
                                    <option value="Credit">Credit</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                <label className={`${styles.label_heading} label_heading`}>
                                    Department<strong className="text-danger ml-1">*</strong>
                                </label>
                                <div className={`${styles.img_arrow} image_arrow`}>
                                    <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="dropdown" />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <input
                                className={`${styles.input_field} border_color input form-control`}
                                type="text"
                                required
                                name="empId"
                                value={professionalDetails?.empId}
                                onChange={handleProfessionalDetailsChange}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                                EMP ID
                            </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <input
                                className={`${styles.input_field} border_color input form-control`}
                                type="text"
                                required
                                name="designation"
                                value={professionalDetails?.designation}
                                onChange={handleProfessionalDetailsChange}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                                Designation<strong className="text-danger ml-1">*</strong>
                            </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <div className="d-flex">
                                <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                    name="reportingManager"
                                    value={professionalDetails?.reportingManager}
                                    onChange={handleProfessionalDetailsChange}
                                >
                                    <option value="John Doe">John Doe</option>
                                    <option value="Harry">Harry</option>
                                </select>
                                <label className={`${styles.label_heading} label_heading`}>
                                    Reporting Manager
                                    <strong className="text-danger ml-1">*</strong>
                                </label>
                                <div className={`${styles.img_arrow} image_arrow`}>
                                    <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="dropdown" />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <input
                                className={`${styles.input_field} border_color input form-control`}
                                type="email"
                                name="alternateEmailId"
                                value={professionalDetails?.alternateEmailId}
                                onChange={handleProfessionalDetailsChange}
                            />
                            <label className={`${styles.label_heading} label_heading`}>Alternate Email ID</label>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <div className="d-flex">
                                <DateCalender labelName="Date of Joining" name="dateOfJoining" isRequired={true} saveDate={saveDate} />
                                <div className={`${styles.calanderIcon} image_arrow`}>
                                    <Image width="22px" height="24px" src="/static/caldericon.svg" alt="Calender" />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                            <input
                                className={`${styles.input_field} border_color input form-control`}
                                type="number"
                                onWheel={(event) => event.currentTarget.blur()}
                                onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                                required
                                name="phoneNumber"
                                value={professionalDetails?.phoneNumber}
                                onChange={handleProfessionalDetailsChange}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                                Phone Number<strong className="text-danger ml-1">*</strong>
                            </label>
                        </div>
                        <div className={`${styles.form_group} col-lg-8 col-md-12 `}>
                            <input
                                className={`${styles.input_field} border_color input form-control`}
                                type="text"
                                required
                                name="remarks"
                                value={professionalDetails?.remarks}
                                onChange={handleProfessionalDetailsChange}
                            />
                            <label className={`${styles.label_heading} label_heading`}>
                                Approval Remarks
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index