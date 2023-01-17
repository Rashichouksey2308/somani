import React, { useEffect } from 'react';
import Router from 'next/router';
import styles from './index.module.scss';
import TransactionSummaryDetails from '../../../src/components/Checker/TransactionSummary';
import { GetTransactionSummaryrDetails } from '../../../src/redux/checker/action';
import { useDispatch, useSelector } from 'react-redux';
import { GetTermsheet } from '../../../src/redux/buyerProfile/action';

function Index() {

    const dispatch = useDispatch();

    const transactionSummaryId = sessionStorage.getItem('checkerTransactionSummaryId');
    const companyName = sessionStorage.getItem('checkerTransactionSummaryCompanyName');

    const { transactionSummaryDetails } = useSelector((state) => state.checker);

    useEffect(() => {
        if (transactionSummaryId) {
            fetchInitialData();
        }
    }, [transactionSummaryId]);

    const fetchInitialData = () => {
        dispatch(GetTransactionSummaryrDetails(`?termsheetId=${transactionSummaryId}`));
    };

    const handleRoute = async () => {
        sessionStorage.setItem('comingFromCheckerTermsheet', 1);
        await dispatch(GetTermsheet(`?termsheetId=${transactionSummaryId}`));
        sessionStorage.setItem('termID', transactionSummaryId);
        sessionStorage.setItem('termOrdID', transactionSummaryDetails?.order._id);
        Router.push({
            pathname: '/termsheet/[id]',
            query: { id: 'id' },
        });
    };

    return (
        <>
            <div className={`${styles.dashboardTab} w-100`}>
                <div className={`${styles.tabHeader} tabHeader`}>
                    <div className={`${styles.title_header} d-flex align-items-center`}>
                        <div className="d-flex align-items-center flex-grow-1">
                            <img
                                src="/static/keyboard_arrow_right-3.svg"
                                alt="arrow right"
                                className="img-fluid image_arrow mr-2"
                                onClick={() => Router.push('/checker/transaction-summary')}
                                style={{ cursor: 'pointer' }} />
                            <h1 className={`${styles.title} heading`}>{companyName}</h1>
                        </div>
                        <button
                            className={styles.editBtn}
                            onClick={() => {
                                handleRoute();
                            }}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <TransactionSummaryDetails
                transactionSummaryDetails={transactionSummaryDetails}
                transactionSummaryHistoryDetails={transactionSummaryDetails?.history?.length > 0 && transactionSummaryDetails?.history[0]}
            />
        </>
    );
}

export default Index;
