import React from 'react'
import styles from '../profile.module.scss'

function Index({ AuditorsDetail }) {
  return (
    
    <div className={`${styles.card}  card`}>
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#AuditorsDetails" aria-expanded="true" aria-controls="AuditorsDetails">
            <h2 className="mb-0">Auditors Details</h2>
            <span>+</span>
        </div>
        <div id="AuditorsDetails" className="collapse" aria-labelledby="AuditorsDetails" data-parent="#profileAccordion">
            <div className={`${styles.cardBody} ${styles.noBorderTable} card-body border_color`}>
                <table className={`${styles.table} table border_color`} cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                        <th width="25%"></th>
                        <th width="25%">MAR-20</th>
                        <th width="25%">MAR-19</th>
                        <th width="25%">MAR-18</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Name of Auditor</td>
                        <td>Matta Garg &amp; Co.</td>
                        <td>Matta Garg &amp; Co.</td>
                        <td>Matta Garg &amp; Co.</td>
                        </tr>
                        <tr>
                        <td>Registration Number</td>
                        <td>000914C</td>
                        <td>000914C</td>
                        <td>000914C</td>
                        </tr>
                        <tr>
                        <td>Change in Auditor</td>
                        <td className={styles.danger}>Yes/2020</td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
  }
  
  export default Index