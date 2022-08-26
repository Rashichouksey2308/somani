import React from 'react'
import styles from '../profile.module.scss'
import moment from 'moment'

function Index({ auditorsDetails }) {
  // console.log(auditorsDetails,"auditorsDetails")
  const latestYearData = auditorsDetails && auditorsDetails[0]

  const previousYearData = auditorsDetails && auditorsDetails[1]

  const lastYearData = auditorsDetails && auditorsDetails[2]
  return (
    <div className={`${styles.card}  card`}>
      <div
        className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
        data-toggle="collapse"
        data-target="#AuditorsDetails"
        aria-expanded="true"
        aria-controls="AuditorsDetails"
      >
        <h2 className="mb-0">Auditor's Details</h2>
        <span>+</span>
      </div>
      <div
        id="AuditorsDetails"
        className="collapse"
        aria-labelledby="AuditorsDetails"
        data-parent="#profileAccordion"
      >
        <div
          className={`${styles.cardBody} ${styles.noBorderTable} card-body border_color`}
        >
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} table border_color`}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <thead>
                  <tr>
                    <th width="25%"></th>
                    <th width="25%">
                      {moment(latestYearData?.financialEndDate)
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                    <th width="25%">
                      {moment(previousYearData?.financialEndDate)
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                    <th width="25%">
                      {moment(lastYearData?.financialEndDate)
                        .format('MMM-YY')
                        .toUpperCase()}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name of Auditor</td>
                    <td>{latestYearData?.nameOfAuditor}</td>
                    <td>{previousYearData?.nameOfAuditor}</td>
                    <td>{lastYearData?.nameOfAuditor}</td>
                  </tr>
                  <tr>
                    <td>Registration Number</td>
                    <td>{latestYearData?.regstrnNum}</td>
                    <td>{previousYearData?.regstrnNum}</td>
                    <td>{lastYearData?.regstrnNum}</td>
                  </tr>
                  <tr>
                    <td>Change in Auditor</td>
                    <td
                      className={`${
                        latestYearData?.nameOfAuditor ===
                        previousYearData?.nameOfAuditor
                          ? null
                          : styles.danger
                      }`}
                    >
                      {latestYearData?.nameOfAuditor?.trim() ===
                      previousYearData?.nameOfAuditor?.trim()
                        ? ''
                        : 'Yes'}
                      {`${
                        latestYearData?.nameOfAuditor !==
                        previousYearData?.nameOfAuditor
                          ? moment(latestYearData?.financialEndDate).format(
                              'YYYY',
                            )
                          : ''
                      }`}
                    </td>
                    <td
                      className={`${
                        !previousYearData?.nameOfAuditor ===
                        previousYearData?.nameOfAuditor
                          ? null
                          : styles.danger
                      }`}
                    >
                      {previousYearData?.nameOfAuditor ===
                      lastYearData?.nameOfAuditor
                        ? ''
                        : 'Yes'}
                      {` ${
                        previousYearData?.nameOfAuditor !==
                        lastYearData?.nameOfAuditor
                          ? `/${moment(
                              previousYearData?.financialEndDate,
                            ).format('YYYY')}`
                          : ''
                      }`}
                    </td>
                    <td
                      className={`${
                        previousYearData?.nameOfAuditor ===
                        previousYearData?.nameOfAuditor
                          ? null
                          : styles.danger
                      }`}
                    >
                      {previousYearData?.nameOfAuditor ===
                      previousYearData?.nameOfAuditor
                        ? ''
                        : 'Yes'}
                      {`${
                        previousYearData?.nameOfAuditor !==
                        previousYearData?.nameOfAuditor
                          ? moment(lastYearData?.financialEndDate).format(
                              'YYYY',
                            )
                          : ''
                      }`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
