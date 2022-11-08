<<<<<<< Updated upstream
import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './index.module.scss';

function index(props) {
  return (
    <Modal
      show={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
=======
import React from 'react'
import { Modal } from 'react-bootstrap'
import styles from './index.module.scss'

function index (props) {
  return (
    <Modal
      show={false}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
>>>>>>> Stashed changes
      centered
      className={styles.wrapper}
      backdropClassName={styles.backdrop}
    >
      <Modal.Header className={styles.head}>
        <Modal.Title
<<<<<<< Updated upstream
          id="contained-modal-title-vcenter"
=======
          id='contained-modal-title-vcenter'
>>>>>>> Stashed changes
          className={`${styles.title}  d-flex justify-content-between align-items-center`}
        >
          <div className={`${styles.blue}`}>BL Details</div>
          <div>
            <span>Commodity: </span>Iron{' '}
          </div>
<<<<<<< Updated upstream
          <img src="/static/close-2.svg" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles.body} container-fluid`}>
        <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
=======
          <img src='/static/close-2.svg' />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles.body} container-fluid`}>
        <table className={`${styles.table} table `} cellPadding='0' cellSpacing='0' border='0'>
>>>>>>> Stashed changes
          <tr className={`border_color`}>
            <th>BL NUMBER</th>
            <th>BL DATE</th>
            <th>BL QUANTITY</th>
          </tr>
          <tr className={`border_color`}>
            <td>2345678</td>
            <td>22-02-2022</td>
            <td>5,000 MT</td>
          </tr>
          <tr className={`border_color`}>
            <td>2345678</td>
            <td>22-02-2022</td>
            <td>5,000 MT</td>
          </tr>
          <tr className={`border_color`}>
            <td>2345678</td>
            <td>22-02-2022</td>
            <td>5,000 MT</td>
          </tr>
          <tr className={`border_color`}>
            <td>2345678</td>
            <td>22-02-2022</td>
            <td>5,000 MT</td>
          </tr>
          <tr className={`border_color`}>
            <td>2345678</td>
            <td>22-02-2022</td>
            <td>5,000 MT</td>
          </tr>
        </table>
        <div>
          <span>Total Quantity: </span>8,000 MT{' '}
        </div>
      </Modal.Body>
    </Modal>
<<<<<<< Updated upstream
  );
}

export default index;
=======
  )
}

export default index
>>>>>>> Stashed changes
