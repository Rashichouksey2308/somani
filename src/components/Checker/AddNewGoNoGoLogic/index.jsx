import React from 'react';
import styles from './index.module.scss';
import GoNoGoDetails from './GoNoGoDetails';
import Remarks from '../Common/Remarks';

function Index() {
    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <GoNoGoDetails />
                <Remarks />
            </div>
        </div>
    )
}

export default Index