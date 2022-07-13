/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../index.module.scss'
import moment from 'moment'

function Index({ ratioData }) {
  const latestYearData = ratioData?.financial?.ratioAnalysis[0]

  const previousYearData = ratioData?.financial?.ratioAnalysis[1]

  const lastYearData = ratioData?.financial?.ratioAnalysis[2]

  const latestBalanceData = ratioData?.financial?.balanceSheet[0]

  const previousBalanceData = ratioData?.financial?.balanceSheet[1]

  const lastBalanceData = ratioData?.financial?.balanceSheet[2]

  const latestIncomeData = ratioData?.financial?.incomeStatement[0]

  const previousIncomeData = ratioData?.financial?.incomeStatement[1]

  const lastIncomeData = ratioData?.financial?.incomeStatement[2]

  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
          data-toggle="collapse"
          data-target="#ratioAnalysis"
          aria-expanded="true"
          aria-controls="ratioAnalysis"
        >
          <h2 className="mb-0">Ratio Analysis</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="ratioAnalysis"
          className="collapse"
          aria-labelledby="ratioAnalysis"
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
                  <th width="50%">
                    <h3>Activity & Profitibility Ratio</h3>
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
                    {latestYearData?.workingCapitalTurnover}
                  </td>
                  <td className="text-center">
                    {previousYearData?.workingCapitalTurnover}
                  </td>
                  <td className="text-center">
                    {lastYearData?.workingCapitalTurnover}
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
                    {latestIncomeData?.revenue?.revenueFromOperations /
                      (latestBalanceData?.assets?.propertyPlantAndEquipment +
                        latestBalanceData?.assets?.propertyPlantAndEquipment /
                          2)}
                  </td>
                  <td className="text-center">
                    {previousIncomeData?.revenue?.revenueFromOperations /
                      (previousBalanceData?.assets?.propertyPlantAndEquipment +
                        previousBalanceData?.assets?.propertyPlantAndEquipment /
                          2)}
                  </td>
                  <td className="text-center">
                    {lastIncomeData?.revenue?.revenueFromOperations /
                      (lastBalanceData?.assets?.propertyPlantAndEquipment +
                        lastBalanceData?.assets?.propertyPlantAndEquipment / 2)}
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
                    {latestYearData?.daysWorkingCapital}
                  </td>
                  <td className="text-center">
                    {previousYearData?.daysWorkingCapital}
                  </td>
                  <td className="text-center">
                    {lastYearData?.daysWorkingCapital}
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
                    {latestYearData?.daysOfSalesOutstanding}
                  </td>
                  <td className="text-center">
                    {previousYearData?.daysOfSalesOutstanding}
                  </td>
                  <td className="text-center">
                    {lastYearData?.daysOfSalesOutstanding}
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
                    {latestYearData?.daysOfInventoryOutstanding}
                  </td>
                  <td className="text-center">
                    {previousYearData?.daysOfInventoryOutstanding}
                  </td>
                  <td className="text-center">
                    {lastYearData?.daysOfInventoryOutstanding}
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
                    {latestYearData?.daysOfPayablesOutstanding}
                  </td>
                  <td className="text-center">
                    {previousYearData?.daysOfPayablesOutstanding}
                  </td>
                  <td className="text-center">
                    {lastYearData?.daysOfPayablesOutstanding}
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
                    {(latestIncomeData?.revenue?.revenueFromOperations -
                      latestIncomeData?.expenses?.totExp +
                      latestIncomeData?.expenses?.finCost) /
                      latestYearData?.ebitdaMargin}
                  </td>
                  <td className="text-center">
                    {(previousIncomeData?.revenue?.revenueFromOperations -
                      previousIncomeData?.expenses?.totExp +
                      previousIncomeData?.expenses?.finCost) /
                      previousYearData?.ebitdaMargin}
                  </td>
                  <td className="text-center">
                    {(lastIncomeData?.revenue?.revenueFromOperations -
                      lastIncomeData?.expenses?.totExp +
                      lastIncomeData?.expenses?.finCost) /
                      lastYearData?.ebitdaMargin}
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
                    {latestYearData?.returnOnEquity}
                  </td>
                  <td className="text-center">
                    {previousYearData?.returnOnEquity}
                  </td>
                  <td className="text-center">
                    {lastYearData?.returnOnEquity}
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
                    {latestYearData?.returnOnAssets}
                  </td>
                  <td className="text-center">
                    {previousYearData?.returnOnAssets}
                  </td>
                  <td className="text-center">
                    {lastYearData?.returnOnAssets}
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

            <table
              className={`${styles.table} table`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th width="50%">
                    <h3>Coverage, Liquidity & Growth Ratio</h3>
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
                  <td className="text-center">{latestYearData?.debtEquity}</td>
                  <td className="text-center">
                    {previousYearData?.debtEquity}
                  </td>
                  <td className="text-center">{lastYearData?.debtEquity}</td>
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
                    {latestYearData?.debtToEbitda}
                  </td>
                  <td className="text-center">
                    {previousYearData?.debtToEbitda}
                  </td>
                  <td className="text-center">{lastYearData?.debtToEbitda}</td>
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
                    {latestYearData?.interestCoverage}
                  </td>
                  <td className="text-center">
                    {previousYearData?.interestCoverage}
                  </td>
                  <td className="text-center">
                    {lastYearData?.interestCoverage}
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
                    {latestYearData?.longTermDebtCoverage}
                  </td>
                  <td className="text-center">
                    {previousYearData?.longTermDebtCoverage}
                  </td>
                  <td className="text-center">
                    {lastYearData?.longTermDebtCoverage}
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
                    {latestYearData?.currentRatio}
                  </td>
                  <td className="text-center">
                    {previousYearData?.currentRatio}
                  </td>
                  <td className="text-center">{lastYearData?.currentRatio}</td>
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
                  <td className="text-center">{latestYearData?.quickRatio}</td>
                  <td className="text-center">
                    {previousYearData?.quickRatio}
                  </td>
                  <td className="text-center">{lastYearData?.quickRatio}</td>
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
                    {latestYearData?.totalAssetsGrowth}
                  </td>
                  <td className="text-center">
                    {previousYearData?.totalAssetsGrowth}
                  </td>
                  <td className="text-center">
                    {lastYearData?.totalAssetsGrowth}
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
                    {latestYearData?.netWorthGrowth}
                  </td>
                  <td className="text-center">
                    {previousYearData?.netWorthGrowth}
                  </td>
                  <td className="text-center">
                    {lastYearData?.netWorthGrowth}
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
                    {latestYearData?.netSalesGrowth}
                  </td>
                  <td className="text-center">
                    {previousYearData?.netSalesGrowth}
                  </td>
                  <td className="text-center">
                    {lastYearData?.netSalesGrowth}
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
    </>
  )
}

export default Index
