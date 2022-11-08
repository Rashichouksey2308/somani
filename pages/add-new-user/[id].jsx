<<<<<<< Updated upstream
import React from 'react';
import styles from './user.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import AddNewUser from '../../src/components/AddNewUser';

function Index() {
  return (
    <div className="container-fluid p-0 border-0">
    <Card className={`${styles.card}`}>
=======
import React from 'react'
import styles from './user.module.scss'
import { Card } from 'react-bootstrap'
import Router from 'next/router'
import AddNewUser from '../../src/components/AddNewUser'

function Index () {
  return (
    <div className='container-fluid p-0 border-0'>
      <Card className={`${styles.card}`}>
>>>>>>> Stashed changes
        <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/masters/users')} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
<<<<<<< Updated upstream
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
=======
                src='/static/keyboard_arrow_right-3.svg'
                alt='ArrowRight'
>>>>>>> Stashed changes
              />
            </div>
            <h1 className={styles.heading}>Add New User</h1>
          </div>
<<<<<<< Updated upstream
          <div className="d-flex align-items-center">
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className="accordion_Text">
=======
          <div className='d-flex align-items-center'>
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className='accordion_Text'>
>>>>>>> Stashed changes
                Last Modified:
              </span>
              Balakrishna SGF001 - 28 Jan,11:34am
            </div>
            <button className={`${styles.clear_btn} ml-5 clear_btn`}>Edit</button>
          </div>
        </Card.Header>
        <AddNewUser />
<<<<<<< Updated upstream
      
    </Card>
    </div>
  );
}

export default Index;
=======

      </Card>
    </div>
  )
}

export default Index
>>>>>>> Stashed changes
