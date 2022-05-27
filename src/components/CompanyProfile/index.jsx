import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'

function index() {
  return (
    <Card className={styles.card}>
      <Card.Header className={styles.header}>
        <span>Company Profile</span>
        <span class={styles.addicon}>+</span>
      </Card.Header>
      {/* <hr className={styles.hr}/> */}
      <Card.Body className={styles.body}>
        {fields('Company Name', 'Ramakrishna Traders', false)}
        {fields('Company PAN', '1123456780', false)}
        {fields('Type Of Business', 'Manufacturer', false)}
        {fields('Transaction Type', 'International', false)}
        {fields('Turn-Over (in Cr)', '60', false)}
        {fields('Email ID', 'Johndoe@Email.Com', false)}

        {fields('Phone Number', '+91 9876543210', false)}
        {fields('Whatsapp Number', '+91 9876543210', false)}
        {fields('Communication Mode', 'Email, Whatsapp', true)}
      </Card.Body>
    </Card>
  )
}

export default index

const fields = (head, value, isButton) => {
  return (
    <>
      <div className={styles.filed_container}>
        <span className={styles.top}>{head}</span>
        <div>
          <span className={styles.value}>{value}</span>
          {isButton ? <span className={styles.button}>View</span> : null}
        </div>
      </div>
    </>
  )
}
