import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import DateCalender from '../../../../DateCalender';

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
                <h3 className={`${styles.heading} mb-0`}>Professional Details</h3>
                <span>+</span>
            </div>
            <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="d-flex justify-space-between">
                        <div className="row w-100">
                            <div className="col-md-12 mb-5">
                                <div className={`font-weight-bold label_heading mb-2`}>
                                    User Role
                                </div>
                                <div className='font-weight-light h5'>
                                    <span className='badge badge-outline mr-2'>Admin</span>
                                    <span className='badge badge-outline'>HR</span>
                                </div>
                            </div>
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Company/Business Name
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Indo German
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Branch
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className='badge badge-outline mr-2'>New Delhi</span>
                                        <span className='badge badge-outline'>Mumbai</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Company/Business Name
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Emergent
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Branch
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className='badge badge-outline mr-2'>New Delhi</span>
                                        <span className='badge badge-outline'>Mumbai</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Department
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Finance
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        EMP ID
                                    </div>
                                    <div className='font-weight-light h5'>
                                        SG1234
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Designation
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Finance Executive
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Reporting Manager
                                    </div>
                                    <div className='font-weight-light h5'>
                                        John Doe
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Alternate Email ID
                                    </div>
                                    <div className='font-weight-light h5'>
                                        name@somanigroup.com
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className={`mb-2 font-weight-bold label_heading`}>
                                                Date Of Joining
                                            </div>
                                            <div className='font-weight-light h5'>
                                                22-02-2022
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className={`mb-2 font-weight-bold label_heading`}>
                                                Last Working Day
                                            </div>
                                            <div className='font-weight-light h5'>
                                                22-02-2022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Remarks
                                    </div>
                                    <div className='font-weight-light h5'>
                                        Lorem Ipsum
                                        &nbsp;&nbsp;
                                        <button className='btn btn-outline-primary-custom font-weight-bold py-0'>View Document</button>
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