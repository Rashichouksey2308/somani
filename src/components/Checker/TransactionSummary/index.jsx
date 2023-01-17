import { useEffect, useState } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
import CommodityDetails from './CommodityDetails';
import TransactionDetails from './TransactionDetails';
import StorageofGoods from './StorageofGoods';
import DeliveriesDueDatePayment from './DeliveriesDueDatePayment';
import CommercialTerms from './CommercialTerms';
import ReimbursementofExpenses from './ReimbursementofExpenses';
import OtherTermsAndConditions from './OtherTermsAndConditions';
import CHAStevedoringCharges from './CHAStevedoringCharges';
import Insurance from './Insurance';
import LGOpeningCharges from './LGOpeningCharges';
import OtherCharges from './OtherCharges';
import DutyAndTaxes from './DutyAndTaxes';
import Tooltip from '../../Tooltip';
import Remarks from '../Common/Remarks';
import { UpdateTransactionSummaryRemark } from 'redux/checker/action';
import { toast } from 'react-toastify';

function Index({ transactionSummaryDetails, transactionSummaryHistoryDetails }) {

    const dispatch = useDispatch();
    const transactionSummaryId = sessionStorage.getItem('checkerTransactionSummaryId');

    const [storageOfGoodComments, setStorageOfGoodComments] = useState();
    const [deliveryDueDatePaymentComments, setDeliveryDueDatePaymentComments] = useState();
    const [reimbursementofExpenses, setReimbursementofExpenses] = useState();

    const [storageOfGoodHistoryComments, setStorageOfGoodHistoryComments] = useState();
    const [deliveryDueDatePaymentHistoryComments, setDeliveryDueDatePaymentHistoryComments] = useState();
    const [reimbursementofExpensesHistory, setReimbursementofExpensesHistory] = useState();

    useEffect(() => {

        if (transactionSummaryDetails?.additionalComments?.length > 0) {
            let storageofgood = transactionSummaryDetails?.additionalComments && transactionSummaryDetails?.additionalComments?.find((comment) => comment.additionalCommentType === "Storage of Goods");
            let deliveryduedatepayment = transactionSummaryDetails?.additionalComments && transactionSummaryDetails?.additionalComments?.find((comment) => comment.additionalCommentType === "Deliveries/Due Date/Payment");
            let reimbursementofexpenses = transactionSummaryDetails?.additionalComments && transactionSummaryDetails?.additionalComments?.find((comment) => comment.additionalCommentType === "Payment Reimbursement of Charges");

            setStorageOfGoodComments(storageofgood?.comment);
            setDeliveryDueDatePaymentComments(deliveryduedatepayment?.comment);
            setReimbursementofExpenses(reimbursementofexpenses?.comment);
        }

    }, [transactionSummaryDetails]);


    useEffect(() => {

        if (transactionSummaryHistoryDetails?.additionalComments?.length > 0) {
            let storageofgoodhistory = transactionSummaryHistoryDetails?.additionalComments?.find((comment) => comment.additionalCommentType === "Storage of Goods");
            let deliveryduedatepaymenthistory = transactionSummaryHistoryDetails?.additionalComments?.find((comment) => comment.additionalCommentType === "Deliveries/Due Date/Payment");
            let reimbursementofexpenseshistory = transactionSummaryHistoryDetails?.additionalComments?.find((comment) => comment.additionalCommentType === "Reimbursement of Expenses");

            setStorageOfGoodHistoryComments(storageofgoodhistory?.comment);
            setDeliveryDueDatePaymentHistoryComments(deliveryduedatepaymenthistory?.comment);
            setReimbursementofExpensesHistory(reimbursementofexpenseshistory?.comment);
        }

    }, [transactionSummaryHistoryDetails]);

    const handleRemarkSubmit = async (remark, status) => {
        const payload = { termsheetId: transactionSummaryId, status: status, remarks: remark }

        let code = await dispatch(UpdateTransactionSummaryRemark(payload))
        if (code == 200) {
            let toastMessage = 'TRANSACTION SUMMARY DETAILS UPDATED SUCCESSFULLY';
            if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
            await Router.push('/checker/transaction-summary');
        }
    }

    return (
        <div className='termsheet_main w-100 p-3 mb-5'>
            <div className='termsheet_card m-3 pb-4 pt-4'>
                <div className='d-flex justify-content-between m-3 p-3'>
                    <div className='d-flex flex-column mr-n5'>
                        <div className='m-2'>
                            <span className='font-weight-bold h5 mr-1'>Order ID:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5 ${transactionSummaryHistoryDetails?.order?.orderId && transactionSummaryHistoryDetails?.order?.orderId !== transactionSummaryDetails?.order?.orderId && styles.highlighted_field}`}>
                                {transactionSummaryDetails?.order?.orderId || '--'}
                            </span>
                            {transactionSummaryHistoryDetails?.order?.orderId && transactionSummaryHistoryDetails?.order?.orderId !== transactionSummaryDetails?.order?.orderId &&
                                <Tooltip data={transactionSummaryHistoryDetails?.order?.orderId || '--'} />
                            }
                        </div>

                        <div className='m-2'>
                            <span className='font-weight-bold h5 mr-1'>Buyer:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5 ${transactionSummaryHistoryDetails?.company?.companyName && transactionSummaryHistoryDetails?.company?.companyName !== transactionSummaryDetails?.company?.companyName && styles.highlighted_field}`}>
                                {transactionSummaryDetails?.company?.companyName || '--'}
                            </span>
                            {transactionSummaryHistoryDetails?.company?.companyName && transactionSummaryHistoryDetails?.company?.companyName !== transactionSummaryDetails?.company?.companyName &&
                                <Tooltip data={transactionSummaryHistoryDetails?.company?.companyName || '--'} />
                            }
                        </div>
                    </div>

                    <div className='ml-n5'>
                        <span className={`${styles.main_header} font-weight-bold text-uppercase`}>
                            Transaction Summary
                        </span>
                    </div>

                    <div>
                        <div className='m-2'>
                            <span className='font-weight-bold h5'>Date:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5 ${transactionSummaryHistoryDetails?.createdAt && transactionSummaryHistoryDetails?.createdAt !== transactionSummaryDetails?.createdAt && styles.highlighted_field}`}>
                                {transactionSummaryDetails?.createdAt?.slice(0, 10) || '--'}
                            </span>
                            {transactionSummaryHistoryDetails?.createdAt && transactionSummaryHistoryDetails?.createdAt !== transactionSummaryDetails?.createdAt &&
                                <Tooltip data={transactionSummaryHistoryDetails?.createdAt?.slice(0, 10) || '--'} />
                            }
                        </div>
                    </div>
                </div>

                <CommodityDetails
                    commodityDetails={transactionSummaryDetails?.order}
                    commodityDetailsHistory={transactionSummaryHistoryDetails?.order}
                />

                <TransactionDetails
                    transactionDetails={transactionSummaryDetails?.transactionDetails}
                    transactionDetailsHistory={transactionSummaryHistoryDetails?.transactionDetails}
                />

                <StorageofGoods
                    storageOfGoodComments={storageOfGoodComments}
                    storageOfGoodHistoryComments={storageOfGoodHistoryComments}
                />

                <DeliveriesDueDatePayment
                    deliveryDueDatePaymentComments={deliveryDueDatePaymentComments}
                    deliveryDueDatePaymentHistoryComments={deliveryDueDatePaymentHistoryComments}
                />

                <CommercialTerms
                    commercialTerms={transactionSummaryDetails?.commercials}
                    commercialTermsHistory={transactionSummaryHistoryDetails?.commercials}
                    currency={transactionSummaryDetails?.transactionDetails?.lcCurrency}
                    currencyHistory={transactionSummaryHistoryDetails?.transactionDetails?.lcCurrency}
                />

                <ReimbursementofExpenses
                    reimbursementofExpenses={reimbursementofExpenses}
                    reimbursementofExpensesHistory={reimbursementofExpensesHistory}
                />

                <OtherTermsAndConditions companyName={transactionSummaryDetails?.company?.companyName || '--'} />

                <div className='mt-1 mb-2 d-flex justify-content-center'>
                    <div className='mr-3 w-100'>
                        <CHAStevedoringCharges chaOrstevedoringCharges={transactionSummaryDetails?.otherTermsAndConditions?.chaOrstevedoringCharges} />
                        <Insurance insurance={transactionSummaryDetails?.otherTermsAndConditions?.insurance} />
                    </div>

                    <div className='ml-3 w-100'>
                        <LGOpeningCharges lcOpeningCharges={transactionSummaryDetails?.otherTermsAndConditions?.lcOpeningCharges} />
                        <OtherCharges otherCharges={transactionSummaryDetails?.otherTermsAndConditions?.otherCharges} />
                        <DutyAndTaxes dutyAndTaxes={transactionSummaryDetails?.otherTermsAndConditions?.dutyAndTaxes} />

                    </div>
                </div>

                <span className={`${styles.note} text-center pb-5`}>
                    <p>
                        All necessary documents to be filed with Customs department for discharge of goods & Customs clearance can be filed by {transactionSummaryDetails?.company?.companyName && `${transactionSummaryDetails?.company?.companyName} or`} its nominated person.
                    </p>
                    <div className='m-auto'>
                        <span className={`${styles.markImportant}`}>* </span>
                        <span>GST charges extra wherever applicable</span>
                    </div>
                </span>
            </div>

            <div className='m-3'>
                <Remarks handleRemarkSubmit={handleRemarkSubmit} />
            </div>

        </div>
    );
}

export default Index;