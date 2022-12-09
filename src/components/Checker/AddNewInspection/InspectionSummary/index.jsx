import React, { useEffect } from 'react';
import styles from './index.module.scss';
import Remarks from '../../Common/Remarks';
import Appointment from './Appointment';
import ThirdPartyInspection from './ThirdPartyInspection';
import PlotInspection from './PlotInspection';
import { GetInspectionDetails } from 'redux/checker/action';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateInspectionRemark } from '../../../../redux/checker/action';
import { toast } from 'react-toastify';

function Index() {

    const dispatch = useDispatch();

    // let inspectionId = sessionStorage.getItem('checkerInspectionId');
    let inspectionId = '6386fa9313aeb30025fa15e6';

    const handleRemarkSubmit = async (remark, status) => {
        const payload = { inspectionId: inspectionId, status: status, remarks: remark }

        let code = await dispatch(UpdateInspectionRemark(payload))
        if (code == 200) {
            let toastMessage = 'INSPECTION UPDATED SUCCESSFULLY';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
            // await Router.push('/checker/inspection')
        }
    }

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
                {
                    inspectionDetails?.thirdPartyAppointment &&
                    <Appointment
                        thirdPartyAppointment={inspectionDetails?.thirdPartyAppointment}
                        thirdPartyAppointmentHistory={inspectionDetails?.history?.thirdPartyAppointment}
                    />
                }
                {
                    inspectionDetails?.thirdPartyInspection &&
                    <ThirdPartyInspection
                        thirdPartyInspection={inspectionDetails?.thirdPartyInspection}
                        order={inspectionDetails?.order}
                        thirdPartyInspectionHistory={inspectionDetails?.history?.thirdPartyInspection}
                        orderHistory={inspectionDetails?.history?.order}
                    />
                }
                {
                    inspectionDetails?.plotInspection &&
                    <PlotInspection
                        plotInspection={inspectionDetails?.plotInspection}
                        plotInspectionHistory={inspectionDetails?.history?.plotInspection}
                        orderId={inspectionDetails?.order?._id}
                    />
                }
                <Remarks handleRemarkSubmit={handleRemarkSubmit} />
            </div>
        </div>
    )
}

export default Index