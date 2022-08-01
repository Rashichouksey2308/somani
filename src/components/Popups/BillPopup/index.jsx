import React from 'react'
import {
  Modal,
  Row,
  Col,
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Form,
} from 'react-bootstrap'
import styles from './index.module.scss'


function index(props) {
  return (
    <Modal
     show={false}
     size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.wrapper}
      backdropClassName={styles.backdrop}
    >
      <Modal.Header className={styles.head}>
        <Modal.Title id="contained-modal-title-vcenter" 
        className={`${styles.title}  d-flex justify-content-between align-items-center`}>
         <div className={`${styles.blue}`}>BL Details </div>
         <div><span>Commodity: </span>Iron </div>
         <img src="/static/close-2.svg"></img>
        </Modal.Title>
       
      </Modal.Header>
      <Modal.Body className={`${styles.body} container-fluid`} >
       <table className={`${styles.table} table `} cellPadding="0" cellSpacing="0" border="0">
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
       <div><span>Total Quantity:{" "}</span>8,000 MT </div>
    
      </Modal.Body>
    </Modal>
  )
}

export default index
