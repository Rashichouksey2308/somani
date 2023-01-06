import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Header from '../../../src/components/Checker/Common/Header';
import AddNewCommodity from '../../../src/components/Checker/AddNewCommodity';

function Index() {
    const commodityName = sessionStorage.getItem('checkerCommodityName');

    return (
        <Card className={`${styles.card} container-fluid`}>
            <div className="m-2">
                <Header heading={commodityName} path="/checker/commodity" />
                <AddNewCommodity />
            </div>
        </Card>
    );
}

export default Index;
