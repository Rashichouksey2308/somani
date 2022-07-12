/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../index.module.scss'
import moment from 'moment'

function Index({ incomeData }) {
  console.log(incomeData, 'THIS IS INCOME DATA')

  const latestYearData = incomeData[0]

  const previousYearData = incomeData[1]

  const lastYearData = incomeData[2]

  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
          data-toggle="collapse"
          data-target="#incomeStatement"
          aria-expanded="true"
          aria-controls="incomeStatement"
        >
          <h2 className="mb-0">Income Statement</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="incomeStatement"
          className="collapse"
          aria-labelledby="incomeStatement"
          data-parent="#FinancialsAccordion"
        >
          <div
            className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}
          >
            <table
              className={`${styles.table} table`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th width="50%"></th>
                  <th className="text-center" width="12.5%">
                    {moment(latestYearData.financialEndDate).format('MMM-YY').toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(previousYearData.financialEndDate)
                      .format('MMM-YY')
                      .toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(lastYearData.financialEndDate).format('MMM-YY').toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    TREND
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revenue From Operation</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Other Income</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/average.svg"
                      alt="Average"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Income</strong>
                  </td>
                  <td className="text-center">
                    <strong>2,480.00</strong>
                  </td>
                  <td className="text-center">
                    <strong>1,260.00</strong>
                  </td>
                  <td className="text-center">
                    <strong>7,400.00</strong>
                  </td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
                      className="img-fluid"
                    />
                  </td>
                </tr>

                <tr>
                  <td>Purchases</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Other Expenses (Ex Dep, Int, Tax)</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Expenses</strong>
                  </td>
                  <td className="text-center">
                    <strong>2,480.00</strong>
                  </td>
                  <td className="text-center">
                    <strong>1,260.00</strong>
                  </td>
                  <td className="text-center">
                    <strong>7,400.00</strong>
                  </td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>EBITA</strong>
                  </td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Depreciation</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>EBIT</strong>
                  </td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Interest Cost</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>PBT</strong>
                  </td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Less: Tax</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>PAT</strong>
                  </td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Effective Tax Rate %</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
