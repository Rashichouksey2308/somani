
import React, { useState, useEffect } from 'react'
import styles from './user.module.scss'
import { Card } from 'react-bootstrap'
import Router from 'next/router'
import AddNewUser from '../../../src/components/AddNewUser'

function Index() {

  return (
    <Card className={`${styles.card} container-fluid`}>
      <Card.Header className={`${styles.head_container} border-0 p-0`}>
        <div className={`${styles.head_header} align-items-center`}>
          <div  onClick={() => Router.push('/leads')} style={{cursor:'pointer'}}>
          <img
            className={`${styles.arrow} img-fluid image_arrow mr-2`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
            
          />
          </div>
          <h1 className={styles.heading}>Add New User</h1>
        </div>
        <div>
          <button
           
            className={`${styles.clear_btn} clear_btn`}
          >
            Edit
          </button>
        </div>
      </Card.Header>    
      <AddNewUser/>
    
    </Card>
  )
}

export default Index
