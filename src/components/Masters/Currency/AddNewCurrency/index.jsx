import React, { useState } from 'react';
import styles from '../../../styles/Custom/form.module.scss';
import { useDispatch } from 'react-redux';
import { CreateCurrencyMaster } from 'redux/masters/action';
import { toast } from 'react-toastify';

function Index() {
    const dispatch = useDispatch();
    const [currencyMasterDetails, setCurrencyMasterDetails] = useState({
        Currency: '',
        Currency_Name: '',
        Symbol: '',
        Status: false,
    });

    const handleCurrencyDetailsChange = (e) => {
        setCurrencyMasterDetails({
            ...currencyMasterDetails,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        if (!validate()) return;
        let _currencyMasterDetails = { ...currencyMasterDetails };
        _currencyMasterDetails?.Status ? _currencyMasterDetails.Status = 'Inactive' : _currencyMasterDetails.Status = 'Active';

        dispatch(CreateCurrencyMaster(_currencyMasterDetails));
    }

    const validate = () => {
        let toastMessage = '';
        if (currencyMasterDetails.Currency == '' ||
            currencyMasterDetails.Currency == undefined
        ) {
            toastMessage = 'PLEASE ADD A CURRENCY';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                return false;
            }
        }
        if (currencyMasterDetails.Currency_Name == '' ||
            currencyMasterDetails.Currency_Name == undefined
        ) {
            toastMessage = 'PLEASE ADD A CURRENCY NAME';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                return false;
            }
        }
        if (currencyMasterDetails.Symbol == '' ||
            currencyMasterDetails.Symbol == undefined
        ) {
            toastMessage = 'PLEASE ADD A SYMBOL';
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
                        data-target="#addCurrency"
                        aria-expanded="true"
                        aria-controls="addCurrency"
                    >
                        <h3 className={`${styles.heading} mb-0`}>Currency</h3>
                        <div className='d-flex'
                        >
                            <span>+</span>
                        </div>
                    </div>
                    <div id="addCurrency" className="collapse show" aria-labelledby="addCurrency">
                        <div className={`${styles.dashboard_form} vessel_card card-body`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="Currency"
                                        value={currencyMasterDetails?.Currency}
                                        onChange={handleCurrencyDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Currency<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="Currency_Name"
                                        value={currencyMasterDetails?.Currency_Name}
                                        onChange={handleCurrencyDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Currency Name<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="Symbol"
                                        value={currencyMasterDetails?.Symbol}
                                        onChange={handleCurrencyDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Symbol<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.switchContainer} d-flex align-items-center flex-column col-lg-3 mt-2`}>
                                    <div className='mb-1 mr-5'>
                                        <span className="label">Status</span>
                                        <strong className="text-danger ml-1">*</strong>
                                    </div>
                                    <div>
                                        <span className={` ${styles.yes} text-color`}>Active</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={currencyMasterDetails.Status ? 'checked' : ''}
                                                onChange={(e) => {
                                                    setCurrencyMasterDetails((prevState) => ({ ...prevState, Status: !prevState.Status }));
                                                }}
                                            ></input>
                                            <span className={`${styles.slider} ${styles.round}`}></span>
                                        </label>
                                        <span className={`${styles.no} text-color`}>Inactive</span>
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