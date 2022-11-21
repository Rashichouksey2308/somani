/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../index.module.scss';
import moment from 'moment';
import _get from 'lodash/get';
import { checkNan } from '../../../utils/helper';
import { returnReadableNumber } from '@/utils/helpers/global';

function Index({ ratioData, rtrnChartIndiaction, returnDataPeriodAndColour }) {
  const [unit, setUnit] = useState(10000000);

  const latestYearData = _get(ratioData, 'financial.ratioAnalysis[0]', {});
  const previousYearData = _get(ratioData, 'financial.ratioAnalysis[1]', {});
  const lastYearData = _get(ratioData, 'financial.ratioAnalysis[2]', {});
  const latestBalanceData = _get(ratioData, 'financial.balanceSheet[0]', {});
  const previousBalanceData = _get(ratioData, 'financial.balanceSheet[1]', {});
  const lastBalanceData = _get(ratioData, 'financial.balanceSheet[2]', {});
  const latestIncomeData = _get(ratioData, 'financial.incomeStatement[0]', {});
  const previousIncomeData = _get(ratioData, 'financial.incomeStatement[1]', {});
  const lastIncomeData = _get(ratioData, 'financial.incomeStatement[2]', {});
  const latestCashData = _get(ratioData, 'financial.cashFlowStatement[0]', {});
  const previousCashData = _get(ratioData, 'financial.cashFlowStatement[1]', {});
  const lastCashData = _get(ratioData, 'financial.cashFlowStatement[2]', {});
  const yearArray = _get(ratioData, 'financial.other.financialYears', ['', '', '']);

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
        >
          <h2 className="mb-0">Ratio Analysis</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                onChange={(e) => setUnit(e.target.value)}
                className={`${styles.options} ${styles.customSelect} accordion_DropDown`}
              >
                <option selected value={10000000}>
                  Crores
                </option>
                <option value={100000}>Lakhs</option>
              </select>
              <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
            </div>
            <span
              data-toggle="collapse"
              data-target="#ratioAnalysis"
              aria-expanded="true"
              aria-controls="ratioAnalysis"
            >
              +
            </span>
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
                        <h3 className="text-color">Activity &amp; Profitibility Ratio</h3>
                      </th>
                      <th
                        className="text-center"
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(latestYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(latestYearData?.financialEndDate, 0).date}
                      </th>
                      <th
                        className="text-center"
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(previousYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(previousYearData?.financialEndDate, 0).date}
                      </th>
                      <th
                        className="text-center"
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(lastYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(lastYearData?.financialEndDate, 0).date}
                      </th>
                      <th className="text-center" width="12.5%">
                        TREND
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="text-primary font-weight-bold">
                        ACTIVITY RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Working Capital Turnover Ratio</td>
                      <td className="text-center">
                        {returnReadableNumber(latestYearData?.workingCapitalTurnover, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(previousYearData?.workingCapitalTurnover, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(lastYearData?.workingCapitalTurnover, 'en-In', 2, 2)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.workingCapitalTurnover,
                          previousYearData?.workingCapitalTurnover,
                          lastYearData?.workingCapitalTurnover,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Fixed Assets Turnover Ratio</td>
                      <td className="text-center">
                        {checkNan(
                          latestIncomeData?.revenue?.revenueFromOperations /
                            ((latestBalanceData?.assets?.propertyPlantAndEquipment +
                              latestCashData?.previous?.propertyPlantAndEquipment) /
                              2),
                        )}
                      </td>
                      <td className="text-center">
                        {checkNan(
                          previousIncomeData?.revenue?.revenueFromOperations /
                            ((previousBalanceData?.assets?.propertyPlantAndEquipment +
                              previousCashData?.previous?.propertyPlantAndEquipment) /
                              2),
                        )}
                      </td>
                      <td className="text-center">
                        {checkNan(
                          lastIncomeData?.revenue?.revenueFromOperations /
                            ((lastBalanceData?.assets?.propertyPlantAndEquipment +
                              lastCashData?.previous?.propertyPlantAndEquipment) /
                              2),
                        )}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestIncomeData?.revenue?.revenueFromOperations /
                            ((latestBalanceData?.assets?.propertyPlantAndEquipment +
                              latestCashData?.previous?.propertyPlantAndEquipment) /
                              2),
                          previousIncomeData?.revenue?.revenueFromOperations /
                            ((previousBalanceData?.assets?.propertyPlantAndEquipment +
                              previousCashData?.previous?.propertyPlantAndEquipment) /
                              2),
                          lastIncomeData?.revenue?.revenueFromOperations /
                            ((lastBalanceData?.assets?.propertyPlantAndEquipment +
                              lastCashData?.previous?.propertyPlantAndEquipment) /
                              2),
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Working Capital Cycle (Days)</td>
                      <td className="text-center">
                        {returnReadableNumber(latestYearData?.daysWorkingCapital, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(previousYearData?.daysWorkingCapital, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(lastYearData?.daysWorkingCapital, 'en-In', 2, 2)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.daysWorkingCapital,
                          previousYearData?.daysWorkingCapital,
                          lastYearData?.daysWorkingCapital,
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>Debtors Period (Days)</td>
                      <td className="text-center">
                        {returnReadableNumber(latestYearData?.daysOfSalesOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(previousYearData?.daysOfSalesOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(lastYearData?.daysOfSalesOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.daysOfSalesOutstanding,
                          previousYearData?.daysOfSalesOutstanding,
                          lastYearData?.daysOfSalesOutstanding,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Inventory Period (Days)</td>
                      <td className="text-center">
                        {returnReadableNumber(latestYearData?.daysOfInventoryOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(previousYearData?.daysOfInventoryOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(lastYearData?.daysOfInventoryOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.daysOfInventoryOutstanding,
                          previousYearData?.daysOfInventoryOutstanding,
                          lastYearData?.daysOfInventoryOutstanding,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Creditors Period (Days)</td>
                      <td className="text-center">
                        {returnReadableNumber(latestYearData?.daysOfPayablesOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(previousYearData?.daysOfPayablesOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(lastYearData?.daysOfPayablesOutstanding, 'en-In', 2, 2)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.daysOfPayablesOutstanding,
                          previousYearData?.daysOfPayablesOutstanding,
                          lastYearData?.daysOfPayablesOutstanding,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-primary font-weight-bold">
                        PROFITIBILITY RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Operating Profit Margin (EBITDA Margin)</td>
                      <td className="text-center">
                        {/* {convertValue(((latestIncomeData?.revenue?.revenueFromOperations -
                          latestIncomeData?.expenses?.totExp +
                          latestIncomeData?.expenses?.finCost) /
                          latestYearData?.ebitdaMargin), unit)?.toLocaleString('en-In', {
                            maximumFractionDigits: 4,
                          })} */}

                        {latestYearData?.operatingProfitMargin
                          ? returnReadableNumber(latestYearData?.operatingProfitMargin * 100, 'en-In', 2, 2) + '%'
                          : ''}
                      </td>
                      <td className="text-center">
                        {previousYearData?.operatingProfitMargin
                          ? returnReadableNumber(previousYearData?.operatingProfitMargin * 100, 'en-In', 2, 2) + '%'
                          : ''}
                      </td>
                      <td className="text-center">
                        {lastYearData?.operatingProfitMargin
                          ? returnReadableNumber(lastYearData?.operatingProfitMargin * 100, 'en-In', 2, 2) + '%'
                          : ''}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {/* {rtrnChartIndiaction(((latestIncomeData?.revenue?.revenueFromOperations -
                          latestIncomeData?.expenses?.totExp +
                          latestIncomeData?.expenses?.finCost) /
                          latestYearData?.ebitdaMargin), (previousIncomeData?.revenue?.revenueFromOperations -
                            previousIncomeData?.expenses?.totExp +
                            previousIncomeData?.expenses?.finCost) /
                        previousYearData?.ebitdaMargin, ((lastIncomeData?.revenue?.revenueFromOperations -
                          lastIncomeData?.expenses?.totExp +
                          lastIncomeData?.expenses?.finCost) /
                          lastYearData?.ebitdaMargin))} */}
                        {rtrnChartIndiaction(
                          latestYearData?.operatingProfitMargin,
                          previousYearData?.operatingProfitMargin,
                          lastYearData?.operatingProfitMargin,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Return On Capital Employed (%)</td>
                      <td className="text-center">
                        {returnReadableNumber(
                          ((latestIncomeData?.revenue?.revenueFromOperations -
                            latestIncomeData?.expenses?.totExp +
                            latestIncomeData?.expenses?.finCost) /
                            ((latestBalanceData?.assets?.totalAssets -
                              latestBalanceData?.equityLiabilities?.currentLiabilties +
                              (latestCashData?.previous?.totalAssets - latestCashData?.previous?.currentLiabilties)) /
                              2)) *
                            100,
                          'en-In',
                          2,
                          2,
                        )
                          ? returnReadableNumber(
                              ((latestIncomeData?.revenue?.revenueFromOperations -
                                latestIncomeData?.expenses?.totExp +
                                latestIncomeData?.expenses?.finCost) /
                                ((latestBalanceData?.assets?.totalAssets -
                                  latestBalanceData?.equityLiabilities?.currentLiabilties +
                                  (latestCashData?.previous?.totalAssets -
                                    latestCashData?.previous?.currentLiabilties)) /
                                  2)) *
                                100,
                              'en-In',
                              2,
                              2,
                            ) + ' %'
                          : ''}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(
                          ((previousIncomeData?.revenue?.revenueFromOperations -
                            previousIncomeData?.expenses?.totExp +
                            previousIncomeData?.expenses?.finCost) /
                            ((previousBalanceData?.assets?.totalAssets -
                              previousBalanceData?.equityLiabilities?.currentLiabilties +
                              (previousCashData?.previous?.totalAssets -
                                previousCashData?.previous?.currentLiabilties)) /
                              2)) *
                            100,
                          'en-In',
                          2,
                          2,
                        )
                          ? returnReadableNumber(
                              ((previousIncomeData?.revenue?.revenueFromOperations -
                                previousIncomeData?.expenses?.totExp +
                                previousIncomeData?.expenses?.finCost) /
                                ((previousBalanceData?.assets?.totalAssets -
                                  previousBalanceData?.equityLiabilities?.currentLiabilties +
                                  (previousCashData?.previous?.totalAssets -
                                    previousCashData?.previous?.currentLiabilties)) /
                                  2)) *
                                100,
                              'en-In',
                              2,
                              2,
                            ) + ' %'
                          : ''}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(
                          ((lastIncomeData?.revenue?.revenueFromOperations -
                            lastIncomeData?.expenses?.totExp +
                            lastIncomeData?.expenses?.finCost) /
                            ((lastBalanceData?.assets?.totalAssets -
                              lastBalanceData?.equityLiabilities?.currentLiabilties +
                              (lastCashData?.previous?.totalAssets - lastCashData?.previous?.currentLiabilties)) /
                              2)) *
                            100,
                          'en-In',
                          2,
                          2,
                        )
                          ? returnReadableNumber(
                              ((lastIncomeData?.revenue?.revenueFromOperations -
                                lastIncomeData?.expenses?.totExp +
                                lastIncomeData?.expenses?.finCost) /
                                ((lastBalanceData?.assets?.totalAssets -
                                  lastBalanceData?.equityLiabilities?.currentLiabilties +
                                  (lastCashData?.previous?.totalAssets - lastCashData?.previous?.currentLiabilties)) /
                                  2)) *
                                100,
                              'en-In',
                              2,
                              2,
                            ) + ' %'
                          : ''}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          ((latestIncomeData?.revenue?.revenueFromOperations -
                            latestIncomeData?.expenses?.totExp +
                            latestIncomeData?.expenses?.finCost) /
                            ((latestBalanceData?.assets?.totalAssets -
                              latestBalanceData?.equityLiabilities?.currentLiabilties +
                              (latestCashData?.previous?.totalAssets - latestCashData?.previous?.currentLiabilties)) /
                              2)) *
                            100,
                          ((previousIncomeData?.revenue?.revenueFromOperations -
                            previousIncomeData?.expenses?.totExp +
                            previousIncomeData?.expenses?.finCost) /
                            ((previousBalanceData?.assets?.totalAssets -
                              previousBalanceData?.equityLiabilities?.currentLiabilties +
                              (previousCashData?.previous?.totalAssets -
                                previousCashData?.previous?.currentLiabilties)) /
                              2)) *
                            100,
                          ((lastIncomeData?.revenue?.revenueFromOperations -
                            lastIncomeData?.expenses?.totExp +
                            lastIncomeData?.expenses?.finCost) /
                            ((lastBalanceData?.assets?.totalAssets -
                              lastBalanceData?.equityLiabilities?.currentLiabilties +
                              (lastCashData?.previous?.totalAssets - lastCashData?.previous?.currentLiabilties)) /
                              2)) *
                            100,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Return On Total Assets (%)</td>
                      <td className="text-center">
                        {latestYearData?.returnOnAssets
                          ? returnReadableNumber(latestYearData?.returnOnAssets * 100, 'en-In', 2, 2) + ' %'
                          : ''}
                      </td>
                      <td className="text-center">
                        {previousYearData?.returnOnAssets
                          ? returnReadableNumber(previousYearData?.returnOnAssets * 100, 'en-In', 2, 2) + ' %'
                          : ''}
                      </td>
                      <td className="text-center">
                        {lastYearData?.returnOnAssets
                          ? returnReadableNumber(lastYearData?.returnOnAssets * 100, 'en-In', 2, 2) + ' %'
                          : ''}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.returnOnAssets,
                          previousYearData?.returnOnAssets,
                          lastYearData?.returnOnAssets,
                        )}
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
                        <h3 className="text-color">Coverage, Liquidity &amp; Growth Ratio</h3>
                      </th>
                      <th
                        className="text-center"
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(latestYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(latestYearData?.financialEndDate, 0).date}
                      </th>
                      <th
                        className="text-center"
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(previousYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(previousYearData?.financialEndDate, 0).date}
                      </th>
                      <th
                        className="text-center"
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(lastYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(lastYearData?.financialEndDate, 0).date}
                      </th>
                      <th className="text-center" width="12.5%">
                        TREND
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="text-primary font-weight-bold">
                        COVERAGE RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Debt Equity Ratio</td>
                      <td className="text-center">{returnReadableNumber(latestYearData?.debtEquity, 'en-In', 2, 2)}</td>
                      <td className="text-center">
                        {returnReadableNumber(previousYearData?.debtEquity, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">{returnReadableNumber(lastYearData?.debtEquity, 'en-In', 2, 2)}</td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.debtEquity,
                          previousYearData?.debtEquity,
                          lastYearData?.debtEquity,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Debt EBITDA Ratio</td>
                      <td className="text-center">
                        {returnReadableNumber(latestYearData?.debtToEbitda, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(previousYearData?.debtToEbitda, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">{returnReadableNumber(lastYearData?.debtToEbitda, 'en-In', 2, 2)}</td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.debtToEbitda,
                          previousYearData?.debtToEbitda,
                          lastYearData?.debtToEbitda,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Interest Coverage Ratio</td>
                      <td className="text-center">
                        {returnReadableNumber(latestYearData?.interestCoverage, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(previousYearData?.interestCoverage, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                        {returnReadableNumber(lastYearData?.interestCoverage, 'en-In', 2, 2)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.interestCoverage,
                          previousYearData?.interestCoverage,
                          lastYearData?.interestCoverage,
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>Debt Service Ratio</td>
                      <td className="text-center">
                        {latestYearData?.longTermDebtCoverage >= 0
                          ? returnReadableNumber(latestYearData?.longTermDebtCoverage * 100, 'en-In', 2, 2)
                          : ''}
                      </td>
                      <td className="text-center">
                      {previousYearData?.longTermDebtCoverage >= 0
                          ? returnReadableNumber(previousYearData?.longTermDebtCoverage * 100, 'en-In', 2, 2)
                          : ''}
                      </td>
                      <td className="text-center">
                      {lastYearData?.longTermDebtCoverage >= 0
                          ? returnReadableNumber(lastYearData?.longTermDebtCoverage * 100, 'en-In', 2, 2)
                          : ''}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        
                        {rtrnChartIndiaction(
                          latestYearData?.longTermDebtCoverage >= 0
                          ? returnReadableNumber(latestYearData?.longTermDebtCoverage * 100, 'en-In', 2, 2)
                          : '',
                          previousYearData?.longTermDebtCoverage >= 0
                          ? returnReadableNumber(previousYearData?.longTermDebtCoverage * 100, 'en-In', 2, 2)
                          : '',
                          lastYearData?.longTermDebtCoverage >= 0
                          ? returnReadableNumber(lastYearData?.longTermDebtCoverage * 100, 'en-In', 2, 2)
                          : '',
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-primary font-weight-bold">
                        LIQUIDITY RATIO
                      </td>
                    </tr>

                    <tr>
                      <td>Curent Ratio</td>
                      <td className="text-center">
                      {returnReadableNumber(latestYearData?.currentRatio, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                      {returnReadableNumber(previousYearData?.currentRatio, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                      {returnReadableNumber(lastYearData?.currentRatio, 'en-In', 2, 2)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.currentRatio,
                          previousYearData?.currentRatio,
                          lastYearData?.currentRatio,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Quick Ratio</td>
                      <td className="text-center">
                      {returnReadableNumber(latestYearData?.quickRatio, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                      {returnReadableNumber(previousYearData?.quickRatio, 'en-In', 2, 2)}
                      </td>
                      <td className="text-center">
                      {returnReadableNumber(lastYearData?.quickRatio, 'en-In', 2, 2)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.quickRatio,
                          previousYearData?.quickRatio,
                          lastYearData?.quickRatio,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-primary font-weight-bold">
                        GROWTH RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Asset Growth Ratio</td>
                      <td className="text-center">
                      {latestYearData?.totalAssetsGrowth ? returnReadableNumber(latestYearData?.totalAssetsGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className="text-center">
                      {previousYearData?.totalAssetsGrowth ? returnReadableNumber(previousYearData?.totalAssetsGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className="text-center">
                      {lastYearData?.totalAssetsGrowth ? returnReadableNumber(lastYearData?.totalAssetsGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.totalAssetsGrowth,
                          previousYearData?.totalAssetsGrowth,
                          lastYearData?.totalAssetsGrowth,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Net Worth Growth Ratio</td>
                      <td className="text-center">
                      {latestYearData?.netWorthGrowth ? returnReadableNumber(latestYearData?.netWorthGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className="text-center">
                      {previousYearData?.netWorthGrowth ? returnReadableNumber(previousYearData?.netWorthGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className="text-center">
                      {lastYearData?.netWorthGrowth ? returnReadableNumber(lastYearData?.netWorthGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.netWorthGrowth * 100,
                          previousYearData?.netWorthGrowth * 100,
                          lastYearData?.netWorthGrowth * 100,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Sales Growth Ratio</td>
                      <td className="text-center">
                      {latestYearData?.netSalesGrowth ? returnReadableNumber(latestYearData?.netSalesGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className="text-center">
                      {previousYearData?.netSalesGrowth ? returnReadableNumber(previousYearData?.netSalesGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className="text-center">
                      {lastYearData?.netSalesGrowth ? returnReadableNumber(lastYearData?.netSalesGrowth*100, 'en-In', 2, 2) + ' %' : ''}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.netSalesGrowth,
                          previousYearData?.netSalesGrowth,
                          lastYearData?.netSalesGrowth,
                        )}
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
  );
}

export default Index;
