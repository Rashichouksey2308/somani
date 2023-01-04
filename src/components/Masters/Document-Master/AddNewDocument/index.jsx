import React, { useState, useEffect } from 'react';
import styles from '../../../styles/Custom/form.module.scss';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { CreateDocumentMaster } from 'redux/masters/action';
import { toast } from 'react-toastify';

function Index() {
    const dispatch = useDispatch();
    const [documentMasterDetails, setDocumentMasterDetails] = useState({
        Document_Name: '',
        Module: '',
    });

    const handleDocumentMasterDetailsChange = (e) => {
        setDocumentMasterDetails({
            ...documentMasterDetails,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        if (!validate()) return;

        dispatch(CreateDocumentMaster(documentMasterDetails));
    }

    const validate = () => {
        let toastMessage = '';
        if (documentMasterDetails.Document_Name == '' ||
            documentMasterDetails.Document_Name == undefined
        ) {
            toastMessage = 'PLEASE ADD A DOCUMENT NAME';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                return false;
            }
        }
        if (documentMasterDetails.Module == '' ||
            documentMasterDetails.Module == undefined
        ) {
            toastMessage = 'PLEASE SELECT A MODULE';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                return false;
            }
        }
        return true;
    }

    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <div className={`${styles.main} mt-4 card border_color`}>
                    <div
                        className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                    >
                        <h3 className={`${styles.heading} mb-0`}>Document Master</h3>
                        <div className='d-flex'>
                            <span data-toggle="collapse"
                                data-target="#addPort"
                                aria-expanded="true"
                                aria-controls="addPort">+</span>
                        </div>
                    </div>
                    <div id="addPort" className="collapse" aria-labelledby="addPort">
                        <div className={`${styles.dashboard_form} vessel_card card-body`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="Document_Name"
                                        value={documentMasterDetails?.Document_Name}
                                        onChange={handleDocumentMasterDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Document Name<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <div className="d-flex">
                                        <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                            name="Module"
                                            value={documentMasterDetails?.Module}
                                            onChange={handleDocumentMasterDetailsChange}
                                        >
                                            <option value="Leads">Leads</option>
                                            <option value="Aggrement & LC Module">Aggrement & LC Module</option>
                                            <option value="Loading, Transit & Unloading">Loading, Transit & Unloading</option>
                                            <option value="Custom Clearance & WareHouse">Custom Clearance & WareHouse</option>
                                            <option value="Payments, Invoicing & Delivery">Payments, Invoicing & Delivery</option>
                                        </select>
                                        <label className={`${styles.label_heading} label_heading`}>
                                            Module<strong className="text-danger ml-1">*</strong>
                                        </label>
                                        <div className={`${styles.img_arrow} image_arrow`}>
                                            <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
                        <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>

                            <button className={`${styles.approve} ml-3`} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Index;
