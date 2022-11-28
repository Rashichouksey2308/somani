import React from 'react';
import styles from '../profile.module.scss';
import moment from 'moment';
import _get from 'lodash/get';

function Index({ auditorsDetails, companyData }) {
  const latestYearData = auditorsDetails && auditorsDetails[0];

  const previousYearData = auditorsDetails && auditorsDetails[1];

  const lastYearData = auditorsDetails && auditorsDetails[2];

  const yearArray = _get(companyData, 'profile.other.financialYears', ['', '', '']);

  return (
    <div className={`${styles.card} card border_color border-bottom`}>
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
      <div id="AuditorsDetails" className="collapse" aria-labelledby="AuditorsDetails" data-parent="#profileAccordion">
        <div className={`${styles.cardBody} ${styles.noBorderTable} card-body border_color`}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table border_color`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr>
                    <th width="25%"></th>
                    <th
                      width="25%"
                      style={{
                        color: `${latestYearData?.financialEndDate ? '#3687e8' : 'red'}`,
                      }}
                    >
                      {latestYearData?.financialEndDate
                        ? moment(latestYearData?.financialEndDate).format('MMM-YY').toUpperCase()
                        : 'MAR-' + yearArray[0].slice(5, 7)}
                    </th>
                    <th
                      width="25%"
                      style={{
                        color: `${previousYearData?.financialEndDate ? '#3687e8' : 'red'}`,
                      }}
                    >
                      {previousYearData?.financialEndDate
                        ? moment(previousYearData?.financialEndDate).format('MMM-YY').toUpperCase()
                        : 'MAR-' + yearArray[1].slice(5, 7)}
                    </th>
                    <th
                      width="25%"
                      style={{
                        color: `${lastYearData?.financialEndDate ? '#3687e8' : 'red'}`,
                      }}
                    >
                      {lastYearData?.financialEndDate
                        ? moment(lastYearData?.financialEndDate).format('MMM-YY').toUpperCase()
                        : 'MAR-' + yearArray[2].slice(5, 7)}
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
                        latestYearData?.regstrnNum?.trim() === previousYearData?.regstrnNum?.trim()
                          ? null
                          : styles.danger
                      }`}
                    >
                      {latestYearData?.regstrnNum
                        ? latestYearData?.regstrnNum?.trim() === previousYearData?.regstrnNum?.trim()
                          ? 'No'
                          : 'Yes'
                        : ''}
                      {`${
                        latestYearData?.regstrnNum
                          ? latestYearData?.regstrnNum?.trim() !== previousYearData?.regstrnNum?.trim()
                            ? latestYearData?.financialEndDate
                              ? moment(latestYearData?.financialEndDate).format('YYYY')
                              : ''
                            : ''
                          : ''
                      }`}
                    </td>

                    <td
                      className={`${
                        previousYearData?.regstrnNum
                          ? previousYearData?.regstrnNum?.trim() === lastYearData?.regstrnNum?.trim()
                            ? null
                            : styles.danger
                          : null
                      }`}
                    >
                      {previousYearData?.regstrnNum
                        ? previousYearData?.regstrnNum?.trim() === lastYearData?.regstrnNum?.trim()
                          ? 'No'
                          : 'Yes'
                        : ''}
                      {` ${
                        previousYearData?.regstrnNum
                          ? previousYearData?.regstrnNum?.trim() !== lastYearData?.regstrnNum?.trim()
                            ? `${
                                previousYearData?.financialEndDate
                                  ? moment(previousYearData?.financialEndDate).format('YYYY')
                                  : ''
                              }`
                            : ''
                          : ''
                      }`}
                    </td>

                    <td
                      className={`${
                        previousYearData?.regstrnNum?.trim() === previousYearData?.regstrnNum?.trim()
                          ? null
                          : styles.danger
                      }`}
                    >
                      {`${
                        previousYearData?.regstrnNum?.trim() !== previousYearData?.regstrnNum?.trim()
                          ? moment(lastYearData?.financialEndDate).format('YYYY')
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
  );
}

export default Index;
