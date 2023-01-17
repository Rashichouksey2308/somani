import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import ProfileDetails from './ProfileDetails';
import ProfessionalDetails from './ProfessionalDetails';
import Documents from './Documents';
import Remarks from '../../Common/Remarks';
import { GetUserMasterDetails, UpdateUserMasterRemark } from 'redux/checker/action';
import { toast } from 'react-toastify';
import API from '../../../../utils/endpoints';
function Index() {

    const dispatch = useDispatch();
    const userMasterId = sessionStorage.getItem('checkeruserMasterId');
    const { userMasterDetails } = useSelector((state) => state.checker);

    useEffect(() => {
        if (userMasterId) {
            fetchInitialData();
        }
    }, [userMasterId]);

    const fetchInitialData = () => {
        dispatch(GetUserMasterDetails(`?userMasterId=${userMasterId}`));
    };

    const handleRemarkSubmit = async (remark, status) => {
        const payload = { userMasterId: userMasterId, status: status, remarks: remark }

        let code = await dispatch(UpdateUserMasterRemark(payload))
        if (code == 200) {
            let toastMessage = 'USER MASTER UPDATED SUCCESSFULLY';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
            await Router.push('/checker/users');
        }
    }

    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <ProfileDetails 
                    profileDetails={userMasterDetails?.profileDetails} 
                    profileDetailsHistory={userMasterDetails?.history?.length >=0 && userMasterDetails?.history[0].profileDetails}
                />
                <ProfessionalDetails 
                    professionalDetails={userMasterDetails?.professionalDetails} 
                    remarks={userMasterDetails?.remarks}
                    professionalDetailsHistory={userMasterDetails?.history?.length >=0 && userMasterDetails?.history[0].professionalDetails}
                />
                <Documents 
                    documents={userMasterDetails?.document} 
                    orderId={userMasterDetails?.order} 
                    documentsHistory={userMasterDetails?.history?.length >=0 && userMasterDetails?.history[0].document}
                />
                <Remarks handleRemarkSubmit={handleRemarkSubmit} />
            </div>
        </div>
    )
}

export default Index