import React, { useState, useEffect } from 'react';
import styles from '../../../styles/Custom/form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CreateGoNoGoMaster, GetMasterGoNoGoSingleRecord } from 'redux/masters/action';

function Index() {
    const dispatch = useDispatch();
    const [goNoGoMasterDetails, setGoNoGoMasterDetails] = useState({
        transactionType: [],
        typeOfBusiness: [],
        minTurnOver: 0,
        minOrderValue: 0,
        daysAllowedInExpectedDateOfShipment: 0,
        version: 1.0,
        remarks: "",
    });

    const handleGoNoGoMasterDetailsChange = (e) => {
        setGoNoGoMasterDetails({
            ...goNoGoMasterDetails,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        dispatch(CreateGoNoGoMaster(goNoGoMasterDetails));
    }



    const gngMasterId = sessionStorage.getItem('GoNoGoMasterId');
    const { GoNoGoSingleRecord } = useSelector((state) => state.MastersData);


    useEffect(() => {
        if (gngMasterId) {
            fetchInitialData();
        }
    }, [gngMasterId]);

    useEffect(() => {
        if (GoNoGoSingleRecord) {
            const goNoGoData = GoNoGoSingleRecord?.data;

            const _goNoGoMasterDetails = { ...goNoGoMasterDetails };
            _goNoGoMasterDetails.transactionType = goNoGoData?.transactionType;
            _goNoGoMasterDetails.typeOfBusiness = goNoGoData?.typeOfBusiness;
            _goNoGoMasterDetails.minTurnOver = goNoGoData?.minTurnOver;
            _goNoGoMasterDetails.minOrderValue = goNoGoData?.minOrderValue;
            _goNoGoMasterDetails.daysAllowedInExpectedDateOfShipment = goNoGoData?.daysAllowedInExpectedDateOfShipment;
            _goNoGoMasterDetails.remarks = goNoGoData?.remarks;
            setGoNoGoMasterDetails(_goNoGoMasterDetails);
        }

    }, [GoNoGoSingleRecord]);

    const fetchInitialData = async () => {
        await dispatch(GetMasterGoNoGoSingleRecord(`?gngMasterId=${gngMasterId}`));
    };

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
                            <p>Version: {GoNoGoSingleRecord?.data?.version ? GoNoGoSingleRecord?.data?.version : '-'}</p>
                        </div>
                    </div>
                    <div id="addIIAGLedger" className="collapse show" aria-labelledby="addIIAGLedger">
                        <div className={`${styles.dashboard_form} vessel_card card-body`}>
                            <div className="row">
                                <div className={`mb-5 row col-12`}>
                                    <p className={`mb-1 pl-3 w-25`}>Transaction Type</p>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="Import"
                                                onChange={() => {
                                                    let prevData = { ...goNoGoMasterDetails };
                                                    if (prevData.transactionType.includes('Import')) {
                                                        prevData.transactionType = prevData.transactionType.filter(item => item !== 'Import')
                                                    }
                                                    else {
                                                        prevData.transactionType.push('Import');
                                                    }
                                                    setGoNoGoMasterDetails((prevState) => ({ ...prevState, ...prevData }));
                                                }}
                                                checked={goNoGoMasterDetails?.transactionType?.includes('Import') ? 'checked' : ''}
                                            />
                                            <label className="form-check-label" htmlFor="Import">
                                                Import
                                            </label>
                                        </div>
                                    </div>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="export"
                                                onChange={() => {
                                                    let prevData = { ...goNoGoMasterDetails };
                                                    if (prevData.transactionType.includes('Export')) {
                                                        prevData.transactionType = prevData.transactionType.filter(item => item !== 'Export')
                                                    }
                                                    else {
                                                        prevData.transactionType.push('Export');
                                                    }
                                                    setGoNoGoMasterDetails((prevState) => ({ ...prevState, ...prevData }));
                                                }}
                                                checked={goNoGoMasterDetails?.transactionType?.includes('Export') ? 'checked' : ''}
                                            />
                                            <label className="form-check-label" htmlFor="export">
                                                Export
                                            </label>
                                        </div>
                                    </div>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="domestic"
                                                onChange={() => {
                                                    let prevData = { ...goNoGoMasterDetails };
                                                    if (prevData.transactionType.includes('Domestic')) {
                                                        prevData.transactionType = prevData.transactionType.filter(item => item !== 'Domestic')
                                                    }
                                                    else {
                                                        prevData.transactionType.push('Domestic');
                                                    }
                                                    setGoNoGoMasterDetails((prevState) => ({ ...prevState, ...prevData }));
                                                }}
                                                checked={goNoGoMasterDetails?.transactionType?.includes('Domestic') ? 'checked' : ''}
                                            />
                                            <label className="form-check-label" htmlFor="domestic">
                                                Domestic
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={`mb-5 row col-12`}>
                                    <p className={`mb-1 pl-3 w-25`}>Type of Business</p>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="Manufacturer"
                                                onChange={() => {
                                                    let prevData = { ...goNoGoMasterDetails };
                                                    if (prevData.typeOfBusiness.includes('Manufacturer')) {
                                                        prevData.typeOfBusiness = prevData.typeOfBusiness.filter(item => item !== 'Manufacturer')
                                                    }
                                                    else {
                                                        prevData.typeOfBusiness.push('Manufacturer');
                                                    }
                                                    setGoNoGoMasterDetails((prevState) => ({ ...prevState, ...prevData }));
                                                }}
                                                checked={goNoGoMasterDetails?.typeOfBusiness?.includes('Manufacturer') ? 'checked' : ''}
                                            />
                                            <label className="form-check-label" htmlFor="Manufacturer">
                                                Manufacturer
                                            </label>
                                        </div>
                                    </div>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="trader"
                                                onChange={() => {
                                                    let prevData = { ...goNoGoMasterDetails };
                                                    if (prevData.typeOfBusiness.includes('Trader')) {
                                                        prevData.typeOfBusiness = prevData.typeOfBusiness.filter(item => item !== 'Trader')
                                                    }
                                                    else {
                                                        prevData.typeOfBusiness.push('Trader');
                                                    }
                                                    setGoNoGoMasterDetails((prevState) => ({ ...prevState, ...prevData }));
                                                }}
                                                checked={goNoGoMasterDetails?.typeOfBusiness?.includes('Trader') ? 'checked' : ''}
                                            />
                                            <label className="form-check-label" htmlFor="trader">
                                                Trader
                                            </label>
                                        </div>
                                    </div>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="wholesaler"
                                                onChange={() => {
                                                    let prevData = { ...goNoGoMasterDetails };
                                                    if (prevData.typeOfBusiness.includes('Wholesaler')) {
                                                        prevData.typeOfBusiness = prevData.typeOfBusiness.filter(item => item !== 'Wholesaler')
                                                    }
                                                    else {
                                                        prevData.typeOfBusiness.push('Wholesaler');
                                                    }
                                                    setGoNoGoMasterDetails((prevState) => ({ ...prevState, ...prevData }));
                                                }}
                                                checked={goNoGoMasterDetails?.typeOfBusiness?.includes('Wholesaler') ? 'checked' : ''}
                                            />
                                            <label className="form-check-label" htmlFor="wholesaler">
                                                Wholesaler
                                            </label>
                                        </div>
                                    </div>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="service"
                                                onChange={() => {
                                                    let prevData = { ...goNoGoMasterDetails };
                                                    if (prevData.typeOfBusiness.includes('Service')) {
                                                        prevData.typeOfBusiness = prevData.typeOfBusiness.filter(item => item !== 'Service')
                                                    }
                                                    else {
                                                        prevData.typeOfBusiness.push('Service');
                                                    }
                                                    setGoNoGoMasterDetails((prevState) => ({ ...prevState, ...prevData }));
                                                }}
                                                checked={goNoGoMasterDetails?.typeOfBusiness?.includes('Service') ? 'checked' : ''}
                                            />
                                            <label className="form-check-label" htmlFor="service">
                                                Service
                                            </label>
                                        </div>
                                    </div>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="retailer"
                                                onChange={() => {
                                                    let prevData = { ...goNoGoMasterDetails };
                                                    if (prevData.typeOfBusiness.includes('Retailer')) {
                                                        prevData.typeOfBusiness = prevData.typeOfBusiness.filter(item => item !== 'Retailer')
                                                    }
                                                    else {
                                                        prevData.typeOfBusiness.push('Retailer');
                                                    }
                                                    setGoNoGoMasterDetails((prevState) => ({ ...prevState, ...prevData }));
                                                }}
                                                checked={goNoGoMasterDetails?.typeOfBusiness?.includes('Retailer') ? 'checked' : ''}
                                            />
                                            <label className="form-check-label" htmlFor="retailer">
                                                Retailer
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 row mb-5'>
                                    <p className={`mb-1 w-25 pl-3`}>Turnover</p>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        less than
                                    </div>
                                    <div class="input-group border pr-2 pl-0" style={{ width: '80px' }}>
                                        <input type="text" class="form-control border-0" name="minTurnOver"
                                            value={goNoGoMasterDetails?.minTurnOver} onChange={handleGoNoGoMasterDetailsChange} />
                                        <span class="input-group-addon my-auto font-weight-bolder">CR</span>
                                    </div>
                                </div>
                                <div className='col-12 row mb-5'>
                                    <p className={`mb-1 w-25 pl-3`}>Transaction Value</p>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        less than
                                    </div>
                                    <div class="input-group border pr-2 pl-0" style={{ width: '80px' }}>
                                        <input type="text" class="form-control border-0" name="minOrderValue"
                                            value={goNoGoMasterDetails?.minOrderValue} onChange={handleGoNoGoMasterDetailsChange} />
                                        <span class="input-group-addon my-auto font-weight-bolder">CR</span>
                                    </div>
                                </div>
                                <div className='col-12 row mb-5'>
                                    <p className={`mb-1 w-25 pl-3`}>Expected Date of Shipment</p>
                                    <div className={` d-flex align-items-center justify-content-start mx-5`}>
                                        less than or equal to
                                    </div>
                                    <div class="input-group border pr-2 pl-0" style={{ width: '90px' }}>
                                        <input type="text" class="form-control border-0" name="daysAllowedInExpectedDateOfShipment"
                                            value={goNoGoMasterDetails?.daysAllowedInExpectedDateOfShipment} onChange={handleGoNoGoMasterDetailsChange} />
                                        <span class="input-group-addon my-auto font-weight-bolder">Days</span>
                                    </div>
                                </div>
                                <div className='col-12 row mb-5'>
                                    <p className={`mb-1 w-25 pl-3`}>Remarks</p>
                                    <div class="input-group border pr-2 pl-0 w-75">
                                        <input type="text" class="form-control border-0" name="remarks"
                                            value={goNoGoMasterDetails?.remarks} onChange={handleGoNoGoMasterDetailsChange} />
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
