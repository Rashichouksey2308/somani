/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../index.module.scss'
import moment from 'moment'
import _get from 'lodash/get'

function Index({ ratioData }) {
  const latestYearData = _get(ratioData, 'financial.ratioAnalysis[0]', {})

  const previousYearData = _get(ratioData, 'financial.ratioAnalysis[1]', {})

  const lastYearData = _get(ratioData, 'financial.ratioAnalysis[2]', {})

  const latestBalanceData = _get(ratioData, 'financial.balanceSheet[0]', {})

  const previousBalanceData = _get(ratioData, 'financial.balanceSheet[1]', {})

  const lastBalanceData = _get(ratioData, 'financial.balanceSheet[2]', {})

  const latestIncomeData = _get(ratioData, 'financial.incomeStatement[0]', {})

  const previousIncomeData = _get(ratioData, 'financial.incomeStatement[1]', {})

  const lastIncomeData = _get(ratioData, 'financial.incomeStatement[2]', {})

  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}>
          <h2 className="mb-0">Ratio Analysis</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span data-toggle="collapse" data-target="#ratioAnalysis" aria-expanded="true" aria-controls="ratioAnalysis">+</span>
          </div>
        </div>
        <div id="ratioAnalysis" className="collapse" aria-labelledby="ratioAnalysis" data-parent="#FinancialsAccordion">
          <div className={`${styles.noBorderTable} ${styles.cardBody} p-0 card-body border_color`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th width="50%">
                        <h3>Activity &amp; Profitibility Ratio</h3>
                      </th>
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
                      <td className="text-primary font-weight-bold">
                        ACTIVITY RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Working Capital Turnover Ratio</td>
                      <td className="text-center">
                        {latestYearData?.workingCapitalTurnover?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.workingCapitalTurnover?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.workingCapitalTurnover?.toFixed(2)?.toLocaleString()}
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
                      <td>Fixed Assets Turnover Ratio</td>
                      <td className="text-center">
                        {(latestIncomeData?.revenue?.revenueFromOperations /
                          (latestBalanceData?.assets?.propertyPlantAndEquipment +
                            latestBalanceData?.assets?.propertyPlantAndEquipment /
                              2))?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {(previousIncomeData?.revenue?.revenueFromOperations /
                          (previousBalanceData?.assets?.propertyPlantAndEquipment +
                            previousBalanceData?.assets?.propertyPlantAndEquipment /
                              2))?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {(lastIncomeData?.revenue?.revenueFromOperations /
                          (lastBalanceData?.assets?.propertyPlantAndEquipment +
                            lastBalanceData?.assets?.propertyPlantAndEquipment / 2))?.toFixed(2)?.toLocaleString()}
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
                      <td>Working Capital Cycle (Days)</td>
                      <td className="text-center">
                        {latestYearData?.daysWorkingCapital?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.daysWorkingCapital?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.daysWorkingCapital?.toFixed(2)?.toLocaleString()}
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
                      <td>Debtors Period (Days)</td>
                      <td className="text-center">
                        {latestYearData?.daysOfSalesOutstanding?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.daysOfSalesOutstanding?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.daysOfSalesOutstanding?.toFixed(2)?.toLocaleString()}
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
                      <td>Inventory Period (Days)</td>
                      <td className="text-center">
                        {latestYearData?.daysOfInventoryOutstanding?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.daysOfInventoryOutstanding?.toFixed(2)?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.daysOfInventoryOutstanding?.toFixed(2)?.toLocaleString()}
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
                      <td>Creditors Period (Days)</td>
                      <td className="text-center">
                        {latestYearData?.daysOfPayablesOutstanding?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.daysOfPayablesOutstanding?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.daysOfPayablesOutstanding?.toFixed(2).toLocaleString()}
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
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td className="text-primary font-weight-bold">
                        PROFITIBILITY RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Operating Profit Margin (EBITDA Margin)</td>
                      <td className="text-center">
                        {((latestIncomeData?.revenue?.revenueFromOperations -
                          latestIncomeData?.expenses?.totExp +
                          latestIncomeData?.expenses?.finCost) /
                          latestYearData?.ebitdaMargin)?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {(previousIncomeData?.revenue?.revenueFromOperations -
                          previousIncomeData?.expenses?.totExp +
                          previousIncomeData?.expenses?.finCost) /
                          previousYearData?.ebitdaMargin}
                      </td>
                      <td className="text-center">
                        {((lastIncomeData?.revenue?.revenueFromOperations -
                          lastIncomeData?.expenses?.totExp +
                          lastIncomeData?.expenses?.finCost) /
                          lastYearData?.ebitdaMargin)?.toFixed(2).toLocaleString()}
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
                      <td>Return On Capital Emplyed (%)</td>
                      <td className="text-center">
                        {latestYearData?.returnOnEquity?.toFixed(2).toLocaleString()} %
                      </td>
                      <td className="text-center">
                        {previousYearData?.returnOnEquity?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {lastYearData?.returnOnEquity?.toFixed(2).toLocaleString()}%
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
                      <td>Return On Total Assets (%)</td>
                      <td className="text-center">
                        {latestYearData?.returnOnAssets?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {previousYearData?.returnOnAssets?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {lastYearData?.returnOnAssets?.toFixed(2).toLocaleString()}%
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
                      <td colSpan="5" height="5px"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th width="50%">
                        <h3>Coverage, Liquidity &amp; Growth Ratio</h3>
                      </th>
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
                      <td className="text-primary font-weight-bold">
                        COVERAGE RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Debt Equity Ratio</td>
                      <td className="text-center">{latestYearData?.debtEquity?.toFixed(2).toLocaleString()}</td>
                      <td className="text-center">
                        {previousYearData?.debtEquity?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">{lastYearData?.debtEquity?.toFixed(2).toLocaleString()}</td>
                      <td className="text-center">
                        <img
                          src="/static/profit.svg"
                          alt="Profit"
                          className="img-fluid"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Debt EBITDA Ratio (EBITDA Coverage)</td>
                      <td className="text-center">
                        {latestYearData?.debtToEbitda?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.debtToEbitda?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">{lastYearData?.debtToEbitda?.toFixed(2).toLocaleString()}</td>
                      <td className="text-center">
                        <img
                          src="/static/average.svg"
                          alt="Average"
                          className="img-fluid"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Interest Coverage Ratio</td>
                      <td className="text-center">
                        {latestYearData?.interestCoverage?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.interestCoverage?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.interestCoverage?.toFixed(2).toLocaleString()}
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
                      <td>Debt Service Ratio</td>
                      <td className="text-center">
                        {latestYearData?.longTermDebtCoverage?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.longTermDebtCoverage?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.longTermDebtCoverage?.toFixed(2).toLocaleString()}
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
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td className="text-primary font-weight-bold">
                        LIQUIDITY RATIO
                      </td>
                    </tr>

                    <tr>
                      <td>Curent Ratio</td>
                      <td className="text-center">
                        {latestYearData?.currentRatio?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.currentRatio?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">{lastYearData?.currentRatio?.toFixed(2).toLocaleString()}</td>
                      <td className="text-center">
                        <img
                          src="/static/profit.svg"
                          alt="Profit"
                          className="img-fluid"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Quick Ratio</td>
                      <td className="text-center">{latestYearData?.quickRatio?.toFixed(2).toLocaleString()}</td>
                      <td className="text-center">
                        {previousYearData?.quickRatio?.toFixed(2).toLocaleString()}
                      </td>
                      <td className="text-center">{lastYearData?.quickRatio?.toFixed(2).toLocaleString()}</td>
                      <td className="text-center">
                        <img
                          src="/static/average.svg"
                          alt="Average"
                          className="img-fluid"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td className="text-primary font-weight-bold">
                        GROWTH RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Asset Growth Ratio</td>
                      <td className="text-center">
                        {latestYearData?.totalAssetsGrowth?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {previousYearData?.totalAssetsGrowth?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {lastYearData?.totalAssetsGrowth?.toFixed(2).toLocaleString()}%
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
                      <td>Net Worth Growth Ratio</td>
                      <td className="text-center">
                        {latestYearData?.netWorthGrowth?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {previousYearData?.netWorthGrowth?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {lastYearData?.netWorthGrowth?.toFixed(2).toLocaleString()}%
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
                      <td>Sales Growth Ratio</td>
                      <td className="text-center">
                        {latestYearData?.netSalesGrowth?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {previousYearData?.netSalesGrowth?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        {lastYearData?.netSalesGrowth?.toFixed(2).toLocaleString()}%
                      </td>
                      <td className="text-center">
                        <img
                          src="/static/average.svg"
                          alt="Average"
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
