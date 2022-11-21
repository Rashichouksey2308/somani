import React from 'react';
import styles from './index.module.scss';

function Index({ status }) {
    return (
        <>
            <span
                className={`${styles.status} ${status === 'Rejected'
                    ? styles.rejected
                    : status === 'ReviewQueue'
                        ? styles.review
                        : status === 'CreditQueue'||'Approved'
                            ? styles.approved
                            : styles.rejected
                    }`}
            ></span>

            {status === 'Rejected'
                ? 'Rejected'
                : status === 'ReviewQueue'
                    ? 'Review'
                    : status === 'CreditQueue'||'Approved'
                        ? 'Approved'
                        : 'Rejected'}
        </>
    )
}

export default Index