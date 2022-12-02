import React, { useEffect } from 'react';
import styles from './index.module.scss';
import Remarks from '../../Common/Remarks';
import Appointment from './Appointment';
import ThirdPartyInspection from './ThirdPartyInspection';
import PlotInspection from './PlotInspection';
import { GetInspectionDetails } from 'redux/checker/action';
import { useDispatch, useSelector } from 'react-redux';

function Index() {

    const dispatch = useDispatch();
    // let inspectionId = sessionStorage.getItem('checkerCommodityId');
    let inspectionId = '6387931813aeb30025fa59a4';
    useEffect(() => {
        if (inspectionId) {
            fetchInitialData();
        }
    }, [inspectionId]);
    const fetchInitialData = async () => {
        await dispatch(GetInspectionDetails(`?inspectionId=${inspectionId}`));
    };
    const { inspectionDetails } = useSelector((state) => state.checker);

    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                {inspectionDetails?.thirdPartyAppointment && <Appointment thirdPartyAppointment={inspectionDetails?.thirdPartyAppointment} />}
                {inspectionDetails?.thirdPartyInspection && <ThirdPartyInspection thirdPartyInspection={inspectionDetails?.thirdPartyInspection} order={inspectionDetails?.order} />}
                {inspectionDetails?.plotInspection && <PlotInspection plotInspection={inspectionDetails?.plotInspection} />}
                <Remarks />
            </div>
        </div>
    )
}

export default Index