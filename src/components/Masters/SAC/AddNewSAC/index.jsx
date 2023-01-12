import React, { useState } from 'react';
import styles from '../../../styles/Custom/form.module.scss';
import { useDispatch } from 'react-redux';
import { CreateSACMaster } from 'redux/masters/action';
import { toast } from 'react-toastify';
import Image from 'next/image';

function Index() {
    const dispatch = useDispatch();
    const [SACMasterDetails, setSACMasterDetails] = useState({
        charges: '',
        group: '',
        gst_rate: '',
        inventory: false,
        sac_code: ''
    });

    const handleSACDetailsChange = (e) => {
        setSACMasterDetails({
            ...SACMasterDetails,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        if (!validate()) return;
        let _SACMasterDetails = { ...SACMasterDetails };
        _SACMasterDetails?.inventory ? _SACMasterDetails.inventory = 'Yes' : _SACMasterDetails.inventory = 'No';

        dispatch(CreateSACMaster(_SACMasterDetails));
    }

    const validate = () => {
        let toastMessage = '';
        if (SACMasterDetails.charges == '' ||
            SACMasterDetails.charges == undefined
        ) {
            toastMessage = 'PLEASE ADD CHARGES';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                return false;
            }
        }
        if (SACMasterDetails.group == '' ||
            SACMasterDetails.group == undefined || SACMasterDetails.group == 'Select'
        ) {
            toastMessage = 'PLEASE SELECT A GROUP';
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
                        data-toggle="collapse"
                        data-target="#addSAC"
                        aria-expanded="true"
                        aria-controls="addSAC"
                    >
                        <h3 className={`${styles.heading} mb-0`}>SAC Code Details</h3>
                        <div className='d-flex'
                        >
                            <span>+</span>
                        </div>
                    </div>
                    <div id="addSAC" className="collapse show" aria-labelledby="addSAC">
                        <div className={`${styles.dashboard_form} vessel_card card-body`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="charges"
                                        value={SACMasterDetails?.charges}
                                        onChange={handleSACDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Charges<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <div className="d-flex">
                                        <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                            name="group"
                                            value={SACMasterDetails?.group}
                                            onChange={handleSACDetailsChange}
                                        >
                                            <option value="Select">Select</option>
                                            <option value="Direct Expenses">Direct Expenses</option>
                                            <option value="Interest & Finance Charges">Interest & Finance Charges</option>
                                            <option value="Purchase Accounts">Purchase Accounts</option>
                                            <option value="Sales Accounts">Sales Accounts</option>
                                        </select>
                                        <label className={`${styles.label_heading} label_heading`}>
                                            Group<strong className="text-danger ml-1">*</strong>
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
                                        name="gst_rate"
                                        value={SACMasterDetails?.gst_rate}
                                        onChange={handleSACDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        GST Rate
                                    </label>
                                </div>
                                <div className={`${styles.switchContainer} d-flex align-items-center flex-column col-lg-3 mt-2`}>
                                    <div className='mb-1 mr-5'>
                                        <span className="label">Inventory</span>
                                    </div>
                                    <div>
                                        <span className={` ${styles.yes} text-color ml-n4`}>Yes</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={SACMasterDetails.inventory ? 'checked' : ''}
                                                onChange={(e) => {
                                                    setSACMasterDetails((prevState) => ({ ...prevState, inventory: !prevState.inventory }));
                                                }}
                                            ></input>
                                            <span className={`${styles.slider} ${styles.round}`}></span>
                                        </label>
                                        <span className={`${styles.no} text-color`}>No</span>
                                    </div>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="sac_code"
                                        value={SACMasterDetails?.sac_code}
                                        onChange={handleSACDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        SAC Code
                                    </label>
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
