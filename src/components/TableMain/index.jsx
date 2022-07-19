import React from 'react'
import styles from './index.module.scss'

function Index({ tableName, isVesselHeader, isStatus, dateHeading }) {
  return (
    <div className={`${styles.datatable} datatable card`}>
      <div className={`${styles.tableFilter} d-flex justify-content-between`}>
        <h3 className="heading_card">{tableName}</h3>
        <div
          className={`${styles.pageList} d-flex justify-content-end align-items-center`}
        >
          <span>Showing Page 1 out of 10</span>
          <a href="#" className={`${styles.arrow} ${styles.leftArrow} arrow`}>
            {' '}
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid"
            />
          </a>
          <a href="#" className={`${styles.arrow} ${styles.rightArrow} arrow`}>
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
      <div className={styles.table_scroll_outer}>
        <div className={styles.table_scroll_inner}>
          <table
            className={`${styles.table} table`}
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <thead>
              <tr className="table_row">
                <th>ORDER ID <img className={`mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon" /> </th>
                <th>BUYER NAME</th>
                <th>COMMODITY</th>
                {isVesselHeader ?
                  <th>VESSEL NAME</th>
                  :
                  <th>INSURANCE TYPE</th>
                }
                <th>{dateHeading}</th>

                {isStatus ?
                  <th>STATUS  <img className={`mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon" /> </th>
                  :
                  <th>PAYMENT STATUS</th>

                }
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table_row">
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Iron</td>
                <td>Abcz</td>
                <td>22-02-2022</td>
                <td>
                  <span className={`${styles.status} ${styles.review}`}></span>
                  On-Hold
                </td>
                <td>
                  <img
                    className={`${styles.edit_image} img-fluid mr-3`}
                    src="/static/mode_edit.svg"
                    alt="edit" />

                </td>
              </tr>
              <tr className="table_row">
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Iron</td>
                <td>Abcz</td>
                <td>22-02-2022</td>
                <td>
                  <span className={`${styles.status} ${styles.review}`}></span>
                  On-Hold
                </td>
                <td>
                  <img
                    className={`${styles.edit_image} img-fluid mr-3`}
                    src="/static/mode_edit.svg"
                    alt="edit" />

                </td>
              </tr>
              <tr className="table_row">
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Iron</td>
                <td>Abcz</td>
                <td>22-02-2022</td>
                <td>
                  <span className={`${styles.status} ${styles.review}`}></span>
                  On-Hold
                </td>
                <td>
                  <img
                    className={`${styles.edit_image} img-fluid mr-3`}
                    src="/static/mode_edit.svg"
                    alt="edit" />

                </td>
              </tr>
              <tr className="table_row">
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Iron</td>
                <td>Abcz</td>
                <td>22-02-2022</td>
                <td>
                  <span className={`${styles.status} ${styles.review}`}></span>
                  On-Hold
                </td>
                <td>
                  <img
                    className={`${styles.edit_image} img-fluid mr-3`}
                    src="/static/mode_edit.svg"
                    alt="edit" />

                </td>
              </tr>
              <tr className="table_row">
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Iron</td>
                <td>Abcz</td>
                <td>22-02-2022</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    className={`${styles.edit_image} img-fluid mr-3`}
                    src="/static/mode_edit.svg"
                    alt="edit" />

                </td>
              </tr>
              <tr className="table_row">
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Iron</td>
                <td>Abcz</td>
                <td>22-02-2022</td>
                <td>
                  <span className={`${styles.status} ${styles.approved}`}></span>
                  Approved
                </td>
                <td>
                  <img
                    className={`${styles.edit_image} img-fluid mr-3`}
                    src="/static/mode_edit.svg"
                    alt="edit" />

                </td>
              </tr>
              <tr className="table_row">
                <td>124621</td>
                <td className={styles.buyerName}>Ramakrishna Traders</td>
                <td>Iron</td>
                <td>Abcz</td>
                <td>22-02-2022</td>
                <td>
                  <span className={`${styles.status} ${styles.rejected}`}></span>
                  Rejected
                </td>
                <td>
                  <img
                    className={`${styles.edit_image} img-fluid mr-3`}
                    src="/static/mode_edit.svg"
                    alt="edit" />

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Index
