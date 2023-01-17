import React, { useState } from 'react';
import styles from '../../../styles/Custom/form.module.scss';
import { useDispatch } from 'react-redux';
import { CreateCountryMaster } from 'redux/masters/action';
import { toast } from 'react-toastify';
function Index() {
    const dispatch = useDispatch();
    const [countryMasterDetails, setCountryMasterDetails] = useState({
        Country: '',
        Status: false,
    });
    const handleCountryDetailsChange = (e) => {
        setCountryMasterDetails({
            ...countryMasterDetails,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async () => {
        if (!validate()) return;
        let _countryMasterDetails = {...countryMasterDetails};
        _countryMasterDetails?.Status ? _countryMasterDetails.Status = 'Not Approved' : _countryMasterDetails.Status = 'Approved';
        dispatch(CreateCountryMaster(_countryMasterDetails));
    }
    const validate = () => {
        let toastMessage = '';
        if (countryMasterDetails.Country == '' ||
            countryMasterDetails.Country == undefined
        ) {
            toastMessage = 'PLEASE ADD A COUNTRY NAME';
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
                        data-target="#addCountry"
                        aria-expanded="true"
                        aria-controls="addCountry"
                    >
                        <h3 className={`${styles.heading} mb-0`}>Country</h3>
                        <div className='d-flex'
                        >
                            <span>+</span>
                        </div>
                    </div>
                    <div id="addCountry" className="collapse show" aria-labelledby="addCountry">
                        <div className={`${styles.dashboard_form} vessel_card card-body`}>
                            <div className="row">
                                <div className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="Country"
                                        value={countryMasterDetails?.Country}
                                        onChange={handleCountryDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Country<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                <div className={`${styles.switchContainer} d-flex align-items-center flex-column col-lg-3 mt-2`}>
                                    <div className='mb-1 mr-5'>
                                        <span className="label">Status</span>
                                        <strong className="text-danger ml-1">*</strong>
                                    </div>
                                    <div>
                                        <span className={` ${styles.yes} text-color`}>Approved</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={countryMasterDetails.Status ? 'checked' : ''}
                                                onChange={(e) => {
                                                    setCountryMasterDetails((prevState) => ({ ...prevState, Status: !prevState.Status }));
                                                }}
                                            ></input>
                                            <span className={`${styles.slider} ${styles.round}`}></span>
                                        </label>
                                        <span className={`${styles.no} text-color`}>Not Approved</span>
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
