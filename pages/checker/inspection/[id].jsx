import React from 'react'
import styles from './inspection.module.scss'
import { Card } from 'react-bootstrap'
import Header from '../../../src/components/Checker/Common/Header'
import InspectionSummary from '../../../src/components/Checker/AddNewInspection/InspectionSummary'

function Index() {
    let companyName = sessionStorage.getItem('checkerInspectionName');
    return (
        <Card className={`${styles.card} container-fluid`}>
            <div className='m-2'>
                <Header heading={companyName} path='/checker/inspection' />
                <InspectionSummary />
            </div>
        </Card>
    )
}

export default Index
