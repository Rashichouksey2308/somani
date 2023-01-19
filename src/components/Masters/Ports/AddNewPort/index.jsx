import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, CreatePortMaster, getAllStates } from 'redux/masters/action';
import {editPortMaster} from 'redux/ports/action'
import { toast } from 'react-toastify';

function Index(props) {
    const{editPort, portDetails, setPortDetails}=props;
    console.log("🚀 ~ file: index.jsx:12 ~ Index ~ portDetails", portDetails)
    const dispatch = useDispatch();
     

    const handlePortDetailsChange = (e) => {
        setPortDetails({
            ...portDetails,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmitPortDetails = async () => {
        if (portDetails?.portType === 'international') {
            setPortDetails((prevState) => ({ ...prevState, State: '' }))
        }
        if (!validate()) return;
        delete portDetails.portType;
        if(!editPort){
            dispatch(CreatePortMaster(portDetails));
        } else {
            dispatch(editPortMaster(portDetails)); 
        }
    }

    const validate = () => {
        let toastMessage = '';
        if (portDetails.portType === 'domestic') {
            if (portDetails.Country == '' ||
                portDetails.Country == undefined || portDetails.Country == 'Select'
            ) {
                toastMessage = 'PLEASE SELECT A COUNTRY';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (portDetails.Port_Name == '' ||
                portDetails.Port_Name == undefined
            ) {
                toastMessage = 'PLEASE ADD A PORT NAME';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (portDetails.State == '' ||
                portDetails.State == undefined || portDetails.State == 'Select'
            ) {
                toastMessage = 'PLEASE SELECT A STATE';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            return true;
        }
        if (portDetails.portType === 'international') {
            if (portDetails.Country == '' ||
                portDetails.Country == undefined || portDetails.Country == 'Select'
            ) {
                toastMessage = 'PLEASE SELECT A COUNTRY';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            if (portDetails.Port_Name == '' ||
                portDetails.Port_Name == undefined
            ) {
                toastMessage = 'PLEASE ADD A PORT NAME';
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    return false;
                }
            }
            return true;
        }
    }

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getAllStates());
    }, []);

    const { getCountriesMasterData, getStatesMasterData } = useSelector((state) => state.MastersData);

    
    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
               
                <div className={`${styles.main} mt-4 card border_color`}>
                    <div
                        className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                    >
                        <h3 className={`${styles.heading} mb-0`}>{ editPort ? 'Edit Ports' :'Ports'} </h3> 
                        <div className='d-flex'>
                            <div className={`${styles.radio_form} mb-4`}>
                                {['radio'].map((type, index) => (
                                    <div key={`inline-${index}`} className={`${styles.radio_group} mt-2`}>
                                        <Form.Check
                                            className={styles.radio}
                                            inline
                                            defaultChecked
                                            label="Domestic"
                                            name="group1"
                                            onChange={() => setPortDetails({ ...portDetails, portType: 'domestic' })}
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            className={styles.radio}
                                            inline
                                            label="International"
                                            name="group1"
                                            onChange={() => setPortDetails({ ...portDetails, portType: 'international' })}
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <span data-toggle="collapse"
                                data-target="#addPort"
                                aria-expanded="true"
                                aria-controls="addPort">+</span>
                        </div>
                    </div>
                    <div id="addPort" className="collapse show" aria-labelledby="addPort">
                        <div className={`${styles.dashboard_form} vessel_card card-body`}>
                            <div className="row row d-flex justify-content-between">
                                <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                                    <div className="d-flex">
                                        <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                            name="Country"
                                            onChange={handlePortDetailsChange}
                                            value={portDetails?.Country}
                                        >
                                            <option value="Select">Select</option>
                                            {getCountriesMasterData?.map((val, index) => {
                                                return <option value={`${val.Country}`}>{val.Country}</option>;
                                            })}
                                        </select>
                                        <label className={`${styles.label_heading} label_heading`}>
                                            Country<strong className="text-danger ml-1">*</strong>
                                        </label>
                                        <div className={`${styles.img_arrow} image_arrow`}>
                                            <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                                    <input
                                        className={`${styles.input_field} border_color input form-control`}
                                        type="text"
                                        required
                                        name="Port_Name"
                                        value={portDetails?.Port_Name}
                                        onChange={handlePortDetailsChange}
                                    />
                                    <label className={`${styles.label_heading} label_heading`}>
                                        Port Name<strong className="text-danger">*</strong>
                                    </label>
                                </div>
                                {portDetails.portType === 'domestic' && (
                                    <div className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}>
                                        <div className="d-flex">
                                            <select className={`${styles.input_field} ${styles.customSelect} border_color input form-control`}
                                                name="State"
                                                value={portDetails?.State}
                                                onChange={handlePortDetailsChange}
                                            >
                                                <option value="Select">Select</option>
                                                {getStatesMasterData?.data?.map((val, index) => {
                                                    return <option value={val?.state}>{val?.state}</option>
                                                })}
                                            </select>
                                            <label className={`${styles.label_heading} label_heading`}>
                                                State<strong className="text-danger ml-1">*</strong>
                                            </label>
                                            <div className={`${styles.img_arrow} image_arrow`}>
                                                <Image width="13px" height="8px" src="/static/inputDropDown.svg" alt="Search" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className={`${styles.switchContainer} d-flex align-items-center flex-column col-lg-2 mt-2`}>
                                    <div className='mb-1'>
                                        <span className="label">Container Handling</span>
                                        <strong className="text-danger ml-1">*</strong>
                                    </div>
                                    <div>
                                        <span className={` ${styles.yes} text-color`}>Yes</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={portDetails.Container_Handling ? 'checked' : ''}
                                                onChange={(e) => {
                                                    setPortDetails((prevState) => ({ ...prevState, Container_Handling: !prevState.Container_Handling }));
                                                }}
                                            ></input>
                                            <span className={`${styles.slider} ${styles.round}`}></span>
                                        </label>
                                        <span className={`${styles.no} text-color`}>No</span>
                                    </div>
                                </div>
                                <div className={`${styles.switchContainer} d-flex align-items-center flex-column col-lg-2 mt-2`}>
                                    <div className='mb-1 mr-5'>
                                        <span className="label">Approved</span>
                                        <strong className="text-danger ml-1">*</strong>
                                    </div>
                                    <div>
                                        <span className={` ${styles.yes} text-color`}>Yes</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={portDetails.Approved ? 'checked' : ''}
                                                onChange={(e) => {
                                                    setPortDetails((prevState) => ({ ...prevState, Approved: !prevState.Approved }));
                                                }}
                                            ></input>
                                            <span className={`${styles.slider} ${styles.round}`}></span>
                                        </label>
                                        <span className={`${styles.no} text-color`}>No</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
                        <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>

                            <button className={`${styles.approve} ml-3`} onClick={handleSubmitPortDetails}>
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
