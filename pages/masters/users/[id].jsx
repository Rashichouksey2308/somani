import React, { useState, useEffect } from 'react'
import styles from './user.module.scss'
import { Card } from 'react-bootstrap'
import Router from 'next/router'
import AddNewUser from '../../../src/components/AddNewUser'

function Index() {
  return (
    <Card className={`${styles.card} container-fluid`}>
      <div className='m-2'>
      <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
        <div className={`${styles.head_header} align-items-center`}>
          <div
            onClick={() => Router.push('/leads')}
            style={{ cursor: 'pointer' }}
          >
            <img
              className={`${styles.arrow} img-fluid image_arrow mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
          </div>
          <h1 className={styles.heading}>Add New User</h1>
          </div>
        <div className='d-flex align-items-center'>
        <div className={`${styles.lastModified} text `}>
                <span style={{ marginRight: '7px' }} className="accordion_Text">
                  Last Modified:
                </span>
                Balakrishna SGF001 - 28 Jan,11:34am
              </div>
          <button className={`${styles.clear_btn} ml-5 clear_btn`}>Edit</button>
        </div>
      
      </Card.Header>
      <AddNewUser />
      </div>
    </Card>
  )
}

export default Index
