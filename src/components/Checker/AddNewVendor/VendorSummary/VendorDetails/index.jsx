import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import ContactPersonDetails from '../ContactPersonDetails';
import Addresses from '../Addresses';
import Tooltip from '../../../../Tooltip';

function Index({ vendorDetails, vendorHistoryDetails, status, keyContactPerson, keyContactPersonHistory, keyAddresses, keyAddressesHistory }) {

    const [keyContactPersonModifiedData, setKeyContactPersonModifiedData] = useState([]);
    const [keyAddressesnModifiedData, setKeyAddressesnModifiedData] = useState([]);

    // keyContectPerson
    useEffect(() => {
        modifyKeyContactPersonCurrentData();
    }, [keyContactPerson, keyContactPersonHistory]);


    const modifyKeyContactPersonCurrentData = () => {
        let finalData = [];
        let curr;
        for (let i = 0; i < keyContactPerson?.length; i++) {

            curr = keyContactPerson[i];

            let history;

            history = keyContactPersonHistory && keyContactPersonHistory?.find((person) => person?._id === curr?._id);

            if (history) {
                curr = {
                    ...curr,
                    history
                }
            }
            finalData.push(curr)
        }

        setKeyContactPersonModifiedData(finalData);
    };

    // keyAddresses
    useEffect(() => {
        modifyKeyAddressesCurrentData();
    }, [keyAddresses, keyAddressesHistory]);


    const modifyKeyAddressesCurrentData = () => {
        let finalData = [];
        let curr;
        for (let i = 0; i < keyAddresses?.length; i++) {

            curr = keyAddresses[i];

            let history;

            history = keyAddressesHistory && keyAddressesHistory?.find((address) => address?._id === curr?._id);

            if (history) {
                curr = {
                    ...curr,
                    history
                }
            }
            finalData.push(curr)
        }

        const modifiedFinalData = finalData?.map(({
            address: fullAddress,
            ...rest
        }) => ({
            fullAddress,
            ...rest
        }));
        setKeyAddressesnModifiedData(modifiedFinalData);
    };

    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
                <h3 className={`${styles.heading}`}>Vendor Details</h3>


                <div className={styles.status_heading}>
                    User Status <span className={`${styles.status} ${status ? styles.active : styles.rejected}`}>{status ? 'Active' : 'Inactive'}</span>
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
                                <span className={`${vendorHistoryDetails?.vendor && vendorHistoryDetails?.vendor !== vendorDetails?.vendor && styles.highlighted_field}`}>
                                    {vendorDetails?.vendor || '--'}
                                </span>
                                {vendorHistoryDetails?.vendor && vendorHistoryDetails?.vendor !== vendorDetails?.vendor && <Tooltip data={vendorHistoryDetails?.vendor || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`font-weight-bold label_heading mb-2`}>
                                Vendor Type
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${vendorHistoryDetails?.vendorType && vendorHistoryDetails?.vendorType !== vendorDetails?.vendorType && styles.highlighted_field}`}>
                                    {vendorDetails?.vendorType || '--'}
                                </span>
                                {vendorHistoryDetails?.vendorType && vendorHistoryDetails?.vendorType !== vendorDetails?.vendorType && <Tooltip data={vendorHistoryDetails?.vendorType || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Company Name
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${vendorHistoryDetails?.companyName && vendorHistoryDetails?.companyName !== vendorDetails?.companyName && styles.highlighted_field}`}>
                                    {vendorDetails?.companyName || '--'}
                                </span>
                                {vendorHistoryDetails?.companyName && vendorHistoryDetails?.companyName !== vendorDetails?.companyName && <Tooltip data={vendorHistoryDetails?.companyName || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Tax ID
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${vendorHistoryDetails?.pan_taxId && vendorHistoryDetails?.pan_taxId !== vendorDetails?.pan_taxId && styles.highlighted_field}`}>
                                    {vendorDetails?.pan_taxId || '--'}
                                </span>
                                {vendorHistoryDetails?.pan_taxId && vendorHistoryDetails?.pan_taxId !== vendorDetails?.pan_taxId && <Tooltip data={vendorHistoryDetails?.pan_taxId || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Activation Date
                            </div>
                            <div className='font-weight-light h5'>
                                {vendorDetails?.activationDate || '--'}
                                <span className={`${vendorHistoryDetails?.activationDate && vendorHistoryDetails?.activationDate !== vendorDetails?.activationDate && styles.highlighted_field}`}>
                                    {vendorDetails?.activationDate?.slice(0, 10) || '--'}
                                </span>
                                {vendorHistoryDetails?.activationDate && vendorHistoryDetails?.activationDate !== vendorDetails?.activationDate && <Tooltip data={vendorHistoryDetails?.activationDate || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Email ID
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${vendorHistoryDetails?.emailId && vendorHistoryDetails?.emailId !== vendorDetails?.emailId && styles.highlighted_field}`}>
                                    {vendorDetails?.emailId || '--'}
                                </span>
                                {vendorHistoryDetails?.emailId && vendorHistoryDetails?.emailId !== vendorDetails?.emailId && <Tooltip data={vendorHistoryDetails?.emailId || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Phone Number
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${vendorHistoryDetails?.phoneNumber && vendorHistoryDetails?.phoneNumber !== vendorDetails?.phoneNumber && styles.highlighted_field}`}>
                                    {vendorDetails?.phoneNumber || '--'}
                                </span>
                                {vendorHistoryDetails?.phoneNumber && vendorHistoryDetails?.phoneNumber !== vendorDetails?.phoneNumber && <Tooltip data={vendorHistoryDetails?.phoneNumber || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Website
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${vendorHistoryDetails?.website && vendorHistoryDetails?.website !== vendorDetails?.website && styles.highlighted_field}`}>
                                    {vendorDetails?.website || '--'}
                                </span>
                                {vendorHistoryDetails?.website && vendorHistoryDetails?.website !== vendorDetails?.website && <Tooltip data={vendorHistoryDetails?.website || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Remarks
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${vendorHistoryDetails?.remarks && vendorHistoryDetails?.remarks !== vendorDetails?.remarks && styles.highlighted_field}`}>
                                    {vendorDetails?.remarks || '--'}
                                </span>
                                {vendorHistoryDetails?.remarks && vendorHistoryDetails?.remarks !== vendorDetails?.remarks && <Tooltip data={vendorHistoryDetails?.remarks || '--'} />}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Blacklisted
                            </div>
                            <div className='font-weight-light h5'>
                                <span className={`${vendorHistoryDetails?.isBlackListed && vendorHistoryDetails?.isBlackListed !== vendorDetails?.isBlackListed && styles.highlighted_field}`}>
                                    {vendorDetails?.isBlackListed ? 'Yes' : 'No'}
                                </span>
                                {vendorHistoryDetails?.isBlackListed && vendorHistoryDetails?.isBlackListed !== vendorDetails?.isBlackListed && <Tooltip data={vendorHistoryDetails?.isBlackListed ? 'Yes' : 'No'} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactPersonDetails
                contactPersonDetails={keyContactPersonModifiedData}
            />
            <Addresses keyAddresses={keyAddressesnModifiedData} />
        </div>
    )
}

export default Index