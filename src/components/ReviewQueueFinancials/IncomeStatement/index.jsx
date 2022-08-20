/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../index.module.scss'
import moment from 'moment'
import _get from 'lodash/get'

function Index({ incomeData }) {
  // console.log(incomeData?.financial?.incomeStatement[0], 'THIS IS INCOME DATA')

  const latestYearData = _get(incomeData, 'financial.incomeStatement[0]', [])

  const previousYearData = _get(incomeData, 'financial.incomeStatement[1]', [])

  const lastYearData = _get(incomeData, 'financial.incomeStatement[2]', [])

  return (
    <>
      <div className={`${styles.card} card`}>
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}>
          <h2 className="mb-0">Income Statement</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span data-toggle="collapse" data-target="#incomeStatement" aria-expanded="true" aria-controls="incomeStatement">+</span>
          </div>
        </div>
        <div
          id="incomeStatement" className="collapse" aria-labelledby="incomeStatement" data-parent="#FinancialsAccordion">
          <div className={`${styles.noBorderTable} ${styles.cardBody} p-0 card-body border_color`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
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
                      <td>Revenue From Operation</td>
                      <td className="text-center">
                        {latestYearData?.revenue?.revenueFromOperations?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.revenue?.revenueFromOperations?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.revenue?.revenueFromOperations?.toLocaleString()}
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
                      <td>Other Income</td>
                      <td className="text-center">
                        {latestYearData?.revenue?.otherIncome?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.revenue?.otherIncome?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.revenue?.otherIncome?.toLocaleString()}
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
                      <td>
                        <strong>Total Income</strong>
                      </td>
                      <td className="text-center">
                        <strong>{latestYearData?.revenue?.totalRev?.toLocaleString()}</strong>
                      </td>
                      <td className="text-center">
                        <strong>{previousYearData?.revenue?.totalRev?.toLocaleString()}</strong>
                      </td>
                      <td className="text-center">
                        <strong>{lastYearData?.revenue?.totalRev?.toLocaleString()}</strong>
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
                      <td className="text-center">
                        {latestYearData?.expenses?.purchaseStock?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.expenses?.purchaseStock?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.expenses?.purchaseStock?.toLocaleString()}
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
                      <td>Other Expenses (Ex Dep, Int, Tax)</td>
                      <td className="text-center">
                        {latestYearData?.expenses?.othExp?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.expenses?.othExp?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.expenses?.othExp?.toLocaleString()}
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
                        <strong>Total Expenses</strong>
                      </td>
                      <td className="text-center">
                        <strong>{latestYearData?.expenses?.totExp?.toLocaleString()}</strong>
                      </td>
                      <td className="text-center">
                        <strong>{previousYearData?.expenses?.totExp?.toLocaleString()}</strong>
                      </td>
                      <td className="text-center">
                        <strong>{lastYearData?.expenses?.totExp?.toLocaleString()}</strong>
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
                      <td className="text-center">
                        {(latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost +
                          latestYearData?.expenses?.deprcnAmort)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {(previousYearData?.revenue?.revenueFromOperations -
                          previousYearData?.expenses?.totExp +
                          previousYearData?.expenses?.finCost +
                          previousYearData?.expenses?.deprcnAmort)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {(lastYearData?.revenue?.revenueFromOperations -
                          lastYearData?.expenses?.totExp +
                          lastYearData?.expenses?.finCost +
                          lastYearData?.expenses?.deprcnAmort)?.toLocaleString()}
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
                      <td>Depreciation</td>
                      <td className="text-center">
                        {(latestYearData?.expenses?.deprcnAmort)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.expenses?.deprcnAmort?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.expenses?.deprcnAmort?.toLocaleString()}
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
                        <strong>EBIT</strong>
                      </td>
                      <td className="text-center">
                        {(latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {(previousYearData?.revenue?.revenueFromOperations -
                          previousYearData?.expenses?.totExp +
                          previousYearData?.expenses?.finCost)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {(lastYearData?.revenue?.revenueFromOperations -
                          lastYearData?.expenses?.totExp +
                          lastYearData?.expenses?.finCost)?.toLocaleString()}
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
                      <td>Interest Cost</td>
                      <td className="text-center">
                        {latestYearData?.expenses?.finCost?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.expenses?.finCost?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.expenses?.finCost?.toLocaleString()}
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
                        <strong>PBT</strong>
                      </td>
                      <td className="text-center">
                        {latestYearData?.profLossBefTax?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.profLossBefTax?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.profLossBefTax?.toLocaleString()}
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
                      <td>Less: Tax</td>
                      <td className="text-center">
                        {latestYearData?.totalTaxExpense?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.totalTaxExpense?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.totalTaxExpense?.toLocaleString()}
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
                        <strong>PAT</strong>
                      </td>
                      <td className="text-center">{latestYearData?.profitLoss?.toLocaleString()}</td>
                      <td className="text-center">
                        {previousYearData?.profitLoss}
                      </td>
                      <td className="text-center">{lastYearData?.profitLoss?.toLocaleString()}</td>
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
                      <td className="text-center">
                        {(latestYearData?.totalTaxExpense /
                          latestYearData?.profLossBefTax)?.toLocaleString() *
                          100}
                      </td>
                      <td className="text-center">
                        {(previousYearData?.totalTaxExpense /
                          previousYearData?.profLossBefTax)?.toLocaleString() *
                          100}
                      </td>
                      <td className="text-center">
                        {(lastYearData?.totalTaxExpense /
                          lastYearData?.profLossBefTax)?.toLocaleString() *
                          100}
                      </td>
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
        </div>
      </div>
    </>
  )
}

export default Index
