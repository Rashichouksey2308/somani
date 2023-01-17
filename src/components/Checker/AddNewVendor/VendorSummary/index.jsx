import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';
import styles from './index.module.scss';
import VendorDetails from './VendorDetails';
import BankDetails from '../BankDetails';
import Documents from '../Documents';
import Remarks from '../../Common/Remarks';
import { GetVendorDetails, UpdateVendorRemark } from 'redux/checker/action';

function Index() {

    const dispatch = useDispatch();
    const checkerVendorId = sessionStorage.getItem('checkerVendorId');
    const { vendorDetails } = useSelector((state) => state.checker);

    useEffect(() => {
        if (checkerVendorId) {
            fetchInitialData();
        }
    }, [checkerVendorId]);

    const fetchInitialData = () => {
        dispatch(GetVendorDetails(`?vendorId=${checkerVendorId}`));
    };

    const handleRemarkSubmit = async (remark, status) => {
        const payload = { vendorId: checkerVendorId, status: status, remarks: remark }

        let code = await dispatch(UpdateVendorRemark(payload))
        if (code == 200) {
            let toastMessage = 'VENDOR UPDATED SUCCESSFULLY';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
            await Router.push('/checker/vendor');
        }
    }

    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <VendorDetails
                    vendorDetails={vendorDetails?.vendorDetails}
                    vendorHistoryDetails={vendorDetails?.history?.length > 0 && vendorDetails?.history[0]?.vendorDetails}
                    status={vendorDetails?.vendorDetails?.status}
                    keyContactPerson={vendorDetails?.keyContactPerson}
                    keyContactPersonHistory={vendorDetails?.history?.length > 0 && vendorDetails?.history[0]?.keyContactPerson}
                    keyAddresses={vendorDetails?.keyAddresses}
                    keyAddressesHistory={vendorDetails?.history?.length > 0 && vendorDetails?.history[0]?.keyAddresses}
                />
                <BankDetails
                    bankDetails={vendorDetails?.bankDetails}
                    bankHistoryDetails={vendorDetails?.history?.length > 0 && vendorDetails?.history[0]?.bankDetails}
                />
                <Documents
                    documents={vendorDetails?.document?.length > 0 && vendorDetails?.document}
                />
                <Remarks handleRemarkSubmit={handleRemarkSubmit} />
            </div>
        </div>
    )
}

export default Index