import React from 'react';
import styles from './index.module.scss';

function Index() {
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            >
                <h3 className={`${styles.heading} mb-0`}>Commodity</h3>
            </div>
            <div>
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="d-flex justify-space-between">
                        <div className="row w-100">
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Commodity
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Ferro-Alloys
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Chapter Name
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Iron & Steel
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Chapter Code
                                    </div>
                                    <div className='font-weight-light h5'>
                                        72
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Approved Commodity
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Yes
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