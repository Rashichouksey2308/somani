import styles from './index.module.scss';
import LcApplication from './LcApplication';
import DocumentsRequired from './DocumentsRequired';
import AdditionalConditions from './AdditionalConditions';
import LcApplication1 from './LcApplication1';
import Remarks from '../Common/Remarks';
import { useDispatch, useSelector } from 'react-redux';
import { GetLcModuleDetails, UpdateLcModuleRemark } from 'redux/checker/action';
import { useEffect } from 'react';
import { setDynamicName } from 'redux/userData/action';
import { GetLcModule } from 'redux/lcModule/action';

function Index() {

    const dispatch = useDispatch();
    const lcModuleId = sessionStorage.getItem('checkerletterOfCreditId');
    const { lcModuleDetails } = useSelector((state) => state.checker);

    useEffect(() => {
        if (lcModuleId) {
            fetchInitialData();
        }
    }, [lcModuleId]);

    const fetchInitialData = () => {
        dispatch(GetLcModuleDetails(`?lcModuleId=${lcModuleId}`));
    };

    useEffect(() => {
        if(lcModuleDetails){
            sessionStorage.setItem('comingFromChecker', true);
            sessionStorage.setItem('lcCompanyId', lcModuleDetails[0]?.company);
            sessionStorage.setItem('lcOrder', lcModuleDetails[0]?.order);
            dispatch(GetLcModule(`?lcModuleId=${lcModuleId}`));
            dispatch(setDynamicName(lcModuleDetails[0]?.company));
        }
    }, [lcModuleDetails]);

    const handleRemarkSubmit = async (remark, status) => {
        // const payload = { lcModuleId: lcModuleId, status: status, remarks: remark }

        // let code = await dispatch(UpdateLcModuleRemark(payload))
        // if (code == 200) {
        //     let toastMessage = 'LC MODULE UPDATED SUCCESSFULLY';
        //     if (!toast.isActive(toastMessage.toUpperCase())) {
        //         toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        //     }
        //     await Router.push('/checker/letter-of-credit');
        // }
    }

    return (
        <div className='lc_main w-100 p-3 mb-5'>
            <div className='lc_card m-3 pb-0 pt-4'>
                <div className='d-flex justify-content-between m-3 p-3'>
                    <div className='d-flex flex-column'>
                        <div className='m-2'>
                            <span className='font-weight-bold h5 mr-1'>Order ID:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`}>{lcModuleDetails?.length > 0 && lcModuleDetails[0]?.order?.orderId || '--'}</span>
                        </div>

                        <div className='m-2'>
                            <span className='font-weight-bold h5 mr-1'>Buyer:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`} >{lcModuleDetails[0]?.company?.companyName || '--'}</span>
                        </div>
                    </div>

                    <div>
                        <span className={`${styles.main_header} font-weight-bold text-uppercase`}>
                            APPLICATION FOR LETTER OF CREDIT
                        </span>
                    </div>

                    <div>
                        <div className='m-2'>
                            <span className='font-weight-bold h5'>Date:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`} >
                                {lcModuleDetails?.length > 0 && lcModuleDetails[0]?.createdAt?.slice(0, 10) || '--'}
                            </span>
                        </div>
                    </div>
                </div>

                <LcApplication
                    lcApplicationDetails={lcModuleDetails?.length > 0 && lcModuleDetails[0]?.lcApplication || []}
                    lcApplicationHistoryDetails={lcModuleDetails?.length > 0 && lcModuleDetails[0]?.history?.length > 0 && lcModuleDetails[0]?.history[0]?.lcApplication || []}
                />

                <DocumentsRequired
                    documentsRequired={lcModuleDetails?.length > 0 && lcModuleDetails[0]?.documentRequired || []}
                    documentsRequiredHistory={lcModuleDetails?.length > 0 && lcModuleDetails[0]?.history?.length > 0 && lcModuleDetails[0]?.history[0]?.documentRequired || []}
                />

                <AdditionalConditions />

                <LcApplication1
                    lcApplication1Details={lcModuleDetails?.length > 0 && lcModuleDetails[0]?.lcApplication || []}
                    lcApplication1HistoryDetails={lcModuleDetails?.length > 0 && lcModuleDetails[0]?.history?.length > 0 && lcModuleDetails[0]?.history[0]?.lcApplication || []}
                />

            </div>
            <div className='m-3'>
                <Remarks handleRemarkSubmit={handleRemarkSubmit} />
            </div>

        </div>
    );
}

export default Index;