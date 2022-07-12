/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../index.module.scss'
import moment from 'moment'

function Index({ cashData }) {
  console.log(cashData?.financial?.cashFlowStatement[0], 'THIS IS CASH DATA')

  const latestYearData = cashData?.financial?.cashFlowStatement[0]

  const previousYearData = cashData?.financial?.cashFlowStatement[1]

  const lastYearData = cashData?.financial?.cashFlowStatement[2]

  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
          data-toggle="collapse"
          data-target="#cashFlowStatement"
          aria-expanded="true"
          aria-controls="cashFlowStatement"
        >
          <h2 className="mb-0">Cash Flow Statement</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="cashFlowStatement"
          className="collapse"
          aria-labelledby="cashFlowStatement"
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
                    {moment(latestYearData?.financialEndDate)
                      .format('MMM-YY')
                      .toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(previousYearData?.financialEndDate)
                      .format('MMM-YY')
                      .toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(lastYearData?.financialEndDate)
                      .format('MMM-YY')
                      .toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    TREND
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operating Cash Flow</td>
                  <td className="text-center">
                    {
                      latestYearData?.cashFlowsFromUsedInOperatingActivities
                        ?.cashFlowsFromUsedInOperatingActivities
                    }
                  </td>
                  <td className="text-center">
                    {
                      previousYearData?.cashFlowsFromUsedInOperatingActivities
                        ?.cashFlowsFromUsedInOperatingActivities
                    }
                  </td>
                  <td className="text-center">
                    {
                      lastYearData?.cashFlowsFromUsedInOperatingActivities
                        ?.cashFlowsFromUsedInOperatingActivities
                    }
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
                  <td>Investing Cash Flow</td>
                  <td className="text-center">
                    {
                      latestYearData?.cashFlowsFromUsedInInvestingActivities
                        ?.cashFlowsFromUsedInInvestingActivities
                    }
                  </td>
                  <td className="text-center">
                    {
                      previousYearData?.cashFlowsFromUsedInInvestingActivities
                        ?.cashFlowsFromUsedInInvestingActivities
                    }
                  </td>
                  <td className="text-center">
                    {
                      lastYearData?.cashFlowsFromUsedInInvestingActivities
                        ?.cashFlowsFromUsedInInvestingActivities
                    }
                  </td>
                  <td className="text-center">
                    <img
                      src="/static/average.svg"
                      alt="Average"
                      className="img-fluid"
                    />
                  </td>
                </tr>

                <tr>
                  <td>Financing Cash Flow</td>
                  <td className="text-center">
                    {
                      latestYearData?.cashFlowsFromUsedInFinancingActivities
                        ?.cashFlowsFromUsedInFinancingActivities
                    }
                  </td>
                  <td className="text-center">
                    {
                      previousYearData?.cashFlowsFromUsedInFinancingActivities
                        ?.cashFlowsFromUsedInFinancingActivities
                    }
                  </td>
                  <td className="text-center">
                    {
                      lastYearData?.cashFlowsFromUsedInFinancingActivities
                        ?.cashFlowsFromUsedInFinancingActivities
                    }
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
                  <td>Net Change in Cash</td>
                  <td className="text-center">
                    {
                      latestYearData
                        ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                        ?.increaseDecreaseInCashAndCashEquivalents
                    }
                  </td>
                  <td className="text-center">
                    {
                      previousYearData
                        ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                        ?.increaseDecreaseInCashAndCashEquivalents
                    }
                  </td>
                  <td className="text-center">
                    {
                      lastYearData
                        ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                        ?.increaseDecreaseInCashAndCashEquivalents
                    }
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
                  <td>Free Cash Flow</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Capex</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">1,900.00</td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
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
