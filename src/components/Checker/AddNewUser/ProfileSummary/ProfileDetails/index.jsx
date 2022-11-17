import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

function Index() {
    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
                <h3 className={`${styles.heading}`}>Profile Details</h3>
                <div className={styles.status_heading}>
                    User Status <span className={styles.active}>Active</span>
                </div>
            </div>

            <div className={`m-3 vessel_card card-body`}>
                <div className={`mb-4`}>
                    <div className={`mb-2 font-weight-bold label_heading`}>
                        User Type
                    </div>
                    <div className='font-weight-light h5'>
                        Internal
                    </div>
                </div>
                <div className="d-flex justify-space-between">
                    <div className="row w-75">
                        <div className="col-md-5 col-sm-6">
                            <div className={`font-weight-bold label_heading mb-2`}>
                                Full Name
                            </div>
                            <div className='font-weight-light h5'>
                                Raj Kumar
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Username
                            </div>
                            <div className='font-weight-light h5'>
                                Rajkumar
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Official Email ID
                            </div>
                            <div className='font-weight-light h5'>
                                name@somanigroup.com
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Password
                            </div>
                            <div className='font-weight-light h5'>
                                **************
                            </div>
                        </div>
                    </div>
                    <div className="d-flex" style={{ marginTop: '-100px' }}>
                        <div className="">
                            <Image width="266px" height="287px" src="/static/profile-image.png" alt="Profile Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index