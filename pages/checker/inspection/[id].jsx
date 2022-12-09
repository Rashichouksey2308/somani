import React from 'react'
import styles from './inspection.module.scss'
import { Card } from 'react-bootstrap'
import Header from '../../../src/components/Checker/Common/Header'
import InspectionSummary from '../../../src/components/Checker/AddNewInspection/InspectionSummary'

function Index () {
  return (
    <Card className={`${styles.card} container-fluid`}>
      <div className='m-2'>
        <Header heading='<Inspection Company name>' path='/checker/vendors' />
        <InspectionSummary />
      </div>
    </Card>
  )
}

export default Index
