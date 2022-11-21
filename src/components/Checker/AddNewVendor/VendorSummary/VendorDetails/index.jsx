import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import ContactPersonDetails from '../ContactPersonDetails';
import Addresses from '../Addresses';

function Index({ vendorDetails, status, keyContactPerson, keyAddresses }) {
    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
                <h3 className={`${styles.heading}`}>Vendor Details</h3>
                <div className={styles.status_heading}>
                    User Status <span className={`${styles.status} ${status == 'active' ? styles.active : styles.rejected}`}>{status}</span>
                </div>
            </div>

            <div className={`m-3 vessel_card card-body`}>
                <div className="d-flex justify-space-between">
                    <div className="row w-100">
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`font-weight-bold label_heading mb-2`}>
                                Vendor
                            </div>
                            <div className='font-weight-light h5'>
                                Domestic
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`font-weight-bold label_heading mb-2`}>
                                Vendor Type
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.vendorType}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Country
                            </div>
                            <div className='font-weight-light h5'>
                                Germany
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Company Name
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.companyName}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Tax ID
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.pan_taxId}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Activation Date
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.activationDate}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Email ID
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.emailId}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Phone Number
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.phoneNumber}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Website
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.website}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Remarks
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.remarks}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Blacklisted
                            </div>
                            <div className='font-weight-light h5'>
                                No
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactPersonDetails contactPersonDetails={keyContactPerson} />
            <Addresses keyAddresses={keyAddresses} />
        </div>
    )
}

export default Index