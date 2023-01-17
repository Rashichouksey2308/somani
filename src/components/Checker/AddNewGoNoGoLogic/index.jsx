import React, { useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styles from './index.module.scss';
import GoNoGoDetails from './GoNoGoDetails';
import Remarks from '../Common/Remarks';
import { GetGoNoGoLogicDetails, UpdateGoNoGoLogicRemark } from 'redux/checker/action';


function Index() {
    

    const dispatch = useDispatch();
    const checkerGoNoGoId = sessionStorage.getItem('checkerGoNoGoId');
    const { goNoGoLogicDetails } = useSelector((state) => state.checker);

    useEffect(() => {
        if (checkerGoNoGoId) {
            fetchInitialData();
        }
    }, [checkerGoNoGoId]);

    const fetchInitialData = () => {
        dispatch(GetGoNoGoLogicDetails(`?goNogoId=${checkerGoNoGoId}`));
    };

    const handleRemarkSubmit = async (remark, status) => {
        const payload = { goNogoId: checkerGoNoGoId, status: status, remarks: remark }

        let code = await dispatch(UpdateGoNoGoLogicRemark(payload))
        if (code == 200) {
            let toastMessage = 'GO NO GO DETAILS UPDATED SUCCESSFULLY';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
            await Router.push('/checker/go-no-go-logic');
        }
    }

    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <GoNoGoDetails 
                    goNoGoLogicDetails={goNoGoLogicDetails[0]}
                    goNoGoHistoryDetails={goNoGoLogicDetails[0]?.history?.length > 0 && goNoGoLogicDetails[0]?.history[0]}
                    />
                <Remarks handleRemarkSubmit={handleRemarkSubmit} />
            </div>
        </div>
    )
}

export default Index