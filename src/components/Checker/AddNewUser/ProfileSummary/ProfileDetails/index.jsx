import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Tooltip from '../../../../Tooltip';
function Index({ profileDetails, profileDetailsHistory }) {
    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
                <h3 className={`${styles.heading}`}>Profile Details</h3>
                <div className={styles.status_heading}>
                    User Status <span className={profileDetails?.status ? styles.active : styles.inActive}>{ profileDetails?.status ? 'Active' : 'Inactive' }</span>
                </div>
            </div>

            <div className={`m-3 vessel_card card-body`}>
                <div className={`mb-4`}>
                    <div className={`mb-2 font-weight-bold label_heading`}>
                        User Type
                    </div>
                    <div className={`font-weight-light h5`}>
                        <span className={`${profileDetailsHistory?.userType && profileDetailsHistory?.userType !== profileDetails?.userType && styles.highlighted_field}`}>
                            { profileDetails?.userType || '-' }
                        </span>
                        { profileDetailsHistory?.userType && profileDetailsHistory?.userType !== profileDetails?.userType && <Tooltip data={profileDetailsHistory?.userType || '--'} />}
                    </div>
                </div>
                <div className="d-flex justify-space-between">
                    <div className="row w-75">
                        <div className="col-md-5 col-sm-6">
                            <div className={`font-weight-bold label_heading mb-2`}>
                                Full Name
                            </div>
                            <div className={`font-weight-light h5`}>
                                <span className={`${profileDetailsHistory?.fullName && profileDetailsHistory?.fullName !== profileDetails?.fullName && styles.highlighted_field}`}>
                                        { profileDetails?.fullName || '-' }
                                </span>
                            { profileDetailsHistory?.fullName && profileDetailsHistory?.fullName !== profileDetails?.fullName && <Tooltip data={profileDetailsHistory?.fullName || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Username
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${profileDetailsHistory?.userName && profileDetailsHistory?.userName !== profileDetails?.userName && styles.highlighted_field}`}>
                                    { profileDetails?.userName || '-' }
                                </span>
                                { profileDetailsHistory?.userName && profileDetailsHistory?.userName !== profileDetails?.userName && <Tooltip data={profileDetailsHistory?.userName || '--'} />}
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Official Email ID
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${profileDetailsHistory?.officialEmailId && profileDetailsHistory?.officialEmailId !== profileDetails?.officialEmailId && styles.highlighted_field}`}>
                                    { profileDetails?.officialEmailId || '-' }
                                </span>
                            { profileDetailsHistory?.officialEmailId && profileDetailsHistory?.officialEmailId  !== profileDetails?.officialEmailId && <Tooltip data={profileDetailsHistory?.officialEmailId || '--'} />}
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