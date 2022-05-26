import React from 'react';
import styles from "./index.module.scss"
import {DropdownButton,Dropdown,Form} from "react-bootstrap"
function index() {
  return (
    <div className={styles.leads}>
          <div className={`${styles.tableFilter} d-flex justify-content-between align-items-center`}>
            <h3>Review Profile</h3>
            <div className={`${styles.pageList}  d-flex justify-content-center align-items-center`}>
              <span>Clear All</span>
            
            </div>
          </div>
          <table className={styles.table} cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>CATEGORIES</th>
                <th>VALUES</th>
                <th>API RESPONSE</th>
                <th>MANUAL APPROVAL</th>
                <th>REVIEWED VALUE</th>
              
              </tr>
            </thead>
            <tbody>
            {tableRow()}
            {tableRow()}
            {tableRow()}
            {tableRow()}
            {tableRow()}
               
           
               
            </tbody>
          </table>   
          <div className={styles.remarks}>
        <Form.Label className={styles.remarksName}>User Remarks</Form.Label>
        <Form.Control as="textarea" rows={3}  className={styles.remarksTextarea}/>
        </div>     
        </div> 
  )
}

export default index

const tableRow=()=>{
    return(
          <tr>
                <td>Transaction Type</td>
                <td >Domestic</td>
                <td ><div className={styles.tick} >
                    <img src="/static/check.svg"></img>
                    </div></td>
                <td><input className={styles.checkBox} type="checkbox"/></td>
                <td>
                <Form.Select size="sm" className={styles.dropDown}>
                         <option>Retailer</option>
                         <option>Copper</option>
                </Form.Select>

                </td>
              
         </tr>
    )

}