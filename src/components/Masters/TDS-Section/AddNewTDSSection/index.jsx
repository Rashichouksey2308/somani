import React, { useState } from 'react';
import styles from '../../../styles/Custom/form.module.scss';
import { useDispatch } from 'react-redux';
import { CreateTDSSectionMaster } from 'redux/masters/action';
import { toast } from 'react-toastify';

function Index() {
    const dispatch = useDispatch();
    const [TDSSectionMasterDetails, setTDSSectionMasterDetails] = useState({
        TDSSection: '',
        TDSSection_Name: '',
        Symbol: '',
        Status: false,
    });

    const handleTDSSectionDetailsChange = (e) => {
        setTDSSectionMasterDetails({
            ...TDSSectionMasterDetails,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        if (!validate()) return;
        let _TDSSectionMasterDetails = { ...TDSSectionMasterDetails };
        _TDSSectionMasterDetails?.Status ? _TDSSectionMasterDetails.Status = 'Active' : _TDSSectionMasterDetails.Status = 'Inactive';

        dispatch(CreateTDSSectionMaster(_TDSSectionMasterDetails));
    }

    const validate = () => {
        let toastMessage = '';
        if (TDSSectionMasterDetails.section == '' ||
            TDSSectionMasterDetails.section == undefined
        ) {
            toastMessage = 'PLEASE ADD A SECTION';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                return false;
            }
        }
        if (TDSSectionMasterDetails.paymentNature == '' ||
            TDSSectionMasterDetails.paymentNature == undefined
        ) {
            toastMessage = 'PLEASE ADD A PAYMENT NATURE';
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
                        data-target="#addTDSSection"
                        aria-expanded="true"
                        aria-controls="addTDSSection"
                    >
                        <h3 className={`${styles.heading} mb-0`}>TDS Section Details</h3>
                        <div className='d-flex'
                        >
                            <span>+</span>
                        </div>
                    </div>
                    <div id="addTDSSection" className="collapse show" aria-labelledby="addTDSSection">
                        <div className={`${styles.dashboard_form} vessel_card card-body`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="section"
                                        value={TDSSectionMasterDetails?.section}
                                        onChange={handleTDSSectionDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Section<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="paymentNature"
                                        value={TDSSectionMasterDetails?.paymentNature}
                                        onChange={handleTDSSectionDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Nature of Payment<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="tds_rate"
                                        value={TDSSectionMasterDetails?.tds_rate}
                                        onChange={handleTDSSectionDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        TDS Rate
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
