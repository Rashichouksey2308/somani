import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Header from '../../../src/components/Checker/AddNewUser/Header';
import ProfileSummary from '../../../src/components/Checker/AddNewUser/ProfileSummary';

function Index() {
    return (
        <Card className={`${styles.card} container-fluid`}>
            <div className="m-2">
                <Header />
                <ProfileSummary />
            </div>
        </Card>
    );
}

export default Index;
