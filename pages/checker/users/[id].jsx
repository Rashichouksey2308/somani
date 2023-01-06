import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Header from '../../../src/components/Checker/Common/Header';
import ProfileSummary from '../../../src/components/Checker/AddNewUser/ProfileSummary';

function Index() {
    const userName = sessionStorage.getItem('userMasterFullName');
    
    return (
        <Card className={`${styles.card} container-fluid`}>
            <div className="m-2">
                <Header heading={userName} path="/checker/users" />
                <ProfileSummary />
            </div>
        </Card>
    );
}

export default Index;
