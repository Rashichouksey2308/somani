import React from 'react';
import Router from 'next/router';
import styles from './index.module.scss';
import LetterOfCreditDetails from '../../../src/components/Checker/LetterOfCredit';

function Index() {
    const companyName = sessionStorage.getItem('checkerletterOfCreditCompanyName');
    
    const handleRoute = () => {
        Router.push('/lc-module');
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
                                onClick={() => Router.push('/checker/letter-of-credit')}
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
            <LetterOfCreditDetails />
        </>
    );
}

export default Index;
