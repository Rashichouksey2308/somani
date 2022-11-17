import React from 'react';
import styles from './index.module.scss';
import ProfileDetails from './ProfileDetails';
import ProfessionalDetails from './ProfessionalDetails';
import Documents from './Documents';
import Remarks from '../Remarks';

function Index() {
    return (
        <div className={`${styles.backgroundMain}`}>
            <div className={`${styles.vessel_card} border_color`}>
                <ProfileDetails />
                <ProfessionalDetails />
                <Documents />
                <Remarks />
            </div>
        </div>
    )
}

export default Index