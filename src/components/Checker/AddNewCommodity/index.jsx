import React, { useEffect } from 'react';
import styles from './index.module.scss';
import Router from 'next/router';
import CommodityDetails from './CommodityDetails';
import Remarks from '../Common/Remarks';
import { useDispatch, useSelector } from 'react-redux';
import { GetCommodityDetails, UpdateCommodityRemark } from 'redux/checker/action';
import { toast } from 'react-toastify';

function Index() {

    const dispatch = useDispatch();
    const commodityId = sessionStorage.getItem('checkerCommodityId');
    const { commodityDetails } = useSelector((state) => state.checker);

    useEffect(() => {
        if (commodityId) {
            fetchInitialData();
        }
    }, [commodityId]);

    const fetchInitialData = () => {
        dispatch(GetCommodityDetails(`?commodityId=${commodityId}`));
    };

    const handleRemarkSubmit = async (remark, status) => {
        const payload = { commodityId: commodityId, status: status, remarks: remark }

        let code = await dispatch(UpdateCommodityRemark(payload))
        if (code == 200) {
            let toastMessage = 'COMMODITY UPDATED SUCCESSFULLY';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
            await Router.push('/checker/commodity');
        }
    }

    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <CommodityDetails 
                    commodityDetails={commodityDetails}
                    commodityDetailsHistory={commodityDetails.history?.length >=0 && commodityDetails?.history[0]}
                />
                <Remarks handleRemarkSubmit={handleRemarkSubmit}/>
            </div>
        </div>
    )
}

export default Index