import React from 'react';
import styles from './index.module.scss';

function Index() {
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            >
                <h3 className={`${styles.heading} mb-0`}>Go No Go Logic</h3>
            </div>
            <div>
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="d-flex justify-space-between">
                        <div className="row w-100">
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Transaction Type
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className='badge badge-outline mr-2'>Import</span>
                                        <span className='badge badge-outline mr-2'>Export</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Type of Business
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className='badge badge-outline mr-2'>Manufacturer</span>
                                        <span className='badge badge-outline mr-2'>Trader</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Turnover
                                    </div>
                                    <div className='font-weight-light h5'>
                                        less than 50 CR
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Transaction Value
                                    </div>
                                    <div className='font-weight-light h5'>
                                        less than 1 CR
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Expected Date of Shipment
                                    </div>
                                    <div className='font-weight-light h5'>
                                        less than or equal to 90 days
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Remarks
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Lorem Ipsum
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index