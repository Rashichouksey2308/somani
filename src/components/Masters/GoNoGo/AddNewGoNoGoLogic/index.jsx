import React, { useState } from 'react';
import styles from '../../../styles/Custom/form.module.scss';
import { useDispatch } from 'react-redux';
import { CreateIIAGLedgerMaster } from 'redux/masters/action';
import { toast } from 'react-toastify';
import Image from 'next/image';

function Index() {
    const dispatch = useDispatch();
    const [IIAGLedgerMasterDetails, setIIAGLedgerMasterDetails] = useState({
        gl_list: '',
        group: ''
    });

    const handleIIAGLedgerDetailsChange = (e) => {
        setIIAGLedgerMasterDetails({
            ...IIAGLedgerMasterDetails,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        if (!validate()) return;

        dispatch(CreateIIAGLedgerMaster(IIAGLedgerMasterDetails));
    }

    const validate = () => {
        let toastMessage = '';
        if (IIAGLedgerMasterDetails.gl_list == '' ||
            IIAGLedgerMasterDetails.gl_list == undefined
        ) {
            toastMessage = 'PLEASE ADD LEDGER HEAD';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                return false;
            }
        }
        if (IIAGLedgerMasterDetails.group == '' ||
            IIAGLedgerMasterDetails.group == undefined
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
                    >
                        <h3 className={`${styles.heading} mb-0`}>Go No Go Details</h3>
                        <div className='d-flex'
                        >
                            <p>Version: 1.0</p>
                        </div>
                    </div>
                    <div id="addIIAGLedger" className="collapse show" aria-labelledby="addIIAGLedger">
                        <div className={`${styles.dashboard_form} vessel_card card-body`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="gl_list"
                                        value={IIAGLedgerMasterDetails?.gl_list}
                                        onChange={handleIIAGLedgerDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Ledger Head<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="group"
                                        value={IIAGLedgerMasterDetails?.group}
                                        onChange={handleIIAGLedgerDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Group<strong className="text-danger">*</strong>
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
