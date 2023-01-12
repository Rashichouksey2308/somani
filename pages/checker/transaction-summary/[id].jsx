import React from 'react';
import Router from 'next/router';
import styles from './index.module.scss';
import TransactionSummaryDetails from '../../../src/components/Checker/TransactionSummary';

function Index() {
    const companyName = sessionStorage.getItem('checkerTransactionSummaryCompanyName');

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
                    </div>
                </div>
            </div>
            <TransactionSummaryDetails />
        </>
    );
}

export default Index;
