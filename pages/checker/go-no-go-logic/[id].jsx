import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Header from '../../../src/components/Checker/Common/Header';
import AddNewGoNoGoLogic from '../../../src/components/Checker/AddNewGoNoGoLogic';

function Index() {
    const checkerGoNoGoVersion = sessionStorage.getItem('checkerGoNoGoVersion');

    return (
        <Card className={`${styles.card} container-fluid`}>
            <div className="m-2">
                <Header heading={`Version ${checkerGoNoGoVersion}`} path="/checker/go-no-go-logic" />
                <AddNewGoNoGoLogic />
            </div>
        </Card>
    );
}

export default Index;
