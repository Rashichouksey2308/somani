import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import AddNewCurrency from '../../../../src/components/Masters/Currency/AddNewCurrency';

function Index() {
    return (
        <Card className={`${styles.card} container-fluid`}>
            <div className="m-2">
                <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
                    <div className={`${styles.head_header} align-items-center`}>
                        <div onClick={() => Router.push('/masters/currency')} style={{ cursor: 'pointer' }}>
                            <img
                                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                                src="/static/keyboard_arrow_right-3.svg"
                                alt="ArrowRight"
                            />
                        </div>
                        <h1 className={styles.heading}>Add New Currency</h1>
                    </div>
                </Card.Header>
                <AddNewCurrency />
            </div>
        </Card>
    );
}

export default Index;