import React from 'react';
import styles from './index.module.scss';

function Index() {
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#keyAddress"
                aria-expanded="true"
                aria-controls="keyAddress"
            >
                <h3 className={`${styles.heading} mb-0`}>Bank Details</h3>
                <span>+</span>
            </div>
            <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="d-flex justify-space-between card p-3">
                        <div className="row w-100">
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Bank Name
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Barclays Bank
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Account No.
                                    </div>
                                    <div className='font-weight-light h5'>
                                        244645756756
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Swift Code
                                    </div>
                                    <div className='font-weight-light h5'>
                                        R356D23
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 px-0 mx-0 row'>
                                <div className="col-md-12 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Branch Address
                                    </div>
                                    <div className='font-weight-light h5'>
                                        A-44, Sagar Apartments, Tilak Marg, Agra
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