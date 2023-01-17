import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'
import Header from '../../../src/components/Checker/Common/Header'
import VendorSummary from '../../../src/components/Checker/AddNewVendor/VendorSummary'

function Index () {

  const checkerVendorName = sessionStorage.getItem('checkerVendorName');
  return (
    <Card className={`${styles.card} container-fluid`}>
      <div className='m-2'>
        <Header heading={checkerVendorName} path='/checker/vendor' />
        <VendorSummary />
      </div>
    </Card>
  )
}

export default Index
