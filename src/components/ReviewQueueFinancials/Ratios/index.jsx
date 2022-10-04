/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from '../index.module.scss'
import moment from 'moment'
import _get from 'lodash/get'
import { checkNan, convertValue } from '../../../utils/helper'

function Index({ ratioData, rtrnChartIndiaction }) {
  const [unit, setUnit] = useState(10000000)
  const latestYearData = _get(ratioData, 'financial.ratioAnalysis[0]', {})

  const previousYearData = _get(ratioData, 'financial.ratioAnalysis[1]', {})

  const lastYearData = _get(ratioData, 'financial.ratioAnalysis[2]', {})

  const latestBalanceData = _get(ratioData, 'financial.balanceSheet[0]', {})

  const previousBalanceData = _get(ratioData, 'financial.balanceSheet[1]', {})

  const lastBalanceData = _get(ratioData, 'financial.balanceSheet[2]', {})

  const latestIncomeData = _get(ratioData, 'financial.incomeStatement[0]', {})

  const previousIncomeData = _get(ratioData, 'financial.incomeStatement[1]', {})

  const lastIncomeData = _get(ratioData, 'financial.incomeStatement[2]', {})

  const latestCashData = _get(ratioData, 'financial.cashFlowStatement[0]', {})

  const previousCashData = _get(ratioData, 'financial.cashFlowStatement[1]', {})

  const lastCashData = _get(ratioData, 'financial.cashFlowStatement[2]', {})

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
        >
          <h2 className="mb-0">Ratio Analysis</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select
              onChange={(e) => setUnit(e.target.value)}
              className={`${styles.options} accordion_DropDown`}
            >
              <option selected value={10000000}>
                Crores
              </option>
              <option value={100000}>Lakhs</option>
            </select>
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
        <div
          id="ratioAnalysis"
          className="collapse"
          aria-labelledby="ratioAnalysis"
          data-parent="#FinancialsAccordion"
        >
          <div
            className={`${styles.noBorderTable} ${styles.cardBody} p-0 card-body border_color`}
          >
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th width="50%">
                        <h3 className="text-color">
                          Activity &amp; Profitibility Ratio
                        </h3>
                      </th>
                      <th className="text-center" width="12.5%">
                        {latestYearData?.financialEndDate ? moment(latestYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase() : ''}
                      </th>
                      <th className="text-center" width="12.5%">
                        {previousYearData?.financialEndDate ? moment(previousYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase() : ''}
                      </th>
                      <th className="text-center" width="12.5%">
                        {lastYearData?.financialEndDate ? moment(lastYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase() : ''}
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
                        {latestYearData?.workingCapitalTurnover?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.workingCapitalTurnover?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.workingCapitalTurnover?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                          ((latestBalanceData?.assets
                            ?.propertyPlantAndEquipment +
                            latestCashData?.previous
                              ?.propertyPlantAndEquipment) /
                            2)
                        )}
                      </td>
                      <td className="text-center">
                        {checkNan(
                          previousIncomeData?.revenue?.revenueFromOperations /
                          ((previousBalanceData?.assets
                            ?.propertyPlantAndEquipment +
                            previousCashData?.previous
                              ?.propertyPlantAndEquipment) /
                            2),
                        )}
                      </td>
                      <td className="text-center">
                        {checkNan(
                          lastIncomeData?.revenue?.revenueFromOperations /
                          ((lastBalanceData?.assets
                            ?.propertyPlantAndEquipment +
                            lastCashData?.previous
                              ?.propertyPlantAndEquipment) /
                            2),
                        )}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(
                          latestIncomeData?.revenue?.revenueFromOperations /
                          ((latestBalanceData?.assets
                            ?.propertyPlantAndEquipment +
                            latestCashData?.previous
                              ?.propertyPlantAndEquipment) /
                            2),
                          previousIncomeData?.revenue?.revenueFromOperations /
                          ((previousBalanceData?.assets
                            ?.propertyPlantAndEquipment +
                            previousCashData?.previous
                              ?.propertyPlantAndEquipment) /
                            2),
                          lastIncomeData?.revenue?.revenueFromOperations /
                          ((lastBalanceData?.assets
                            ?.propertyPlantAndEquipment +
                            lastCashData?.previous
                              ?.propertyPlantAndEquipment) /
                            2),
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Working Capital Cycle (Days)</td>
                      <td className="text-center">
                        {latestYearData?.daysWorkingCapital?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.daysWorkingCapital?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.daysWorkingCapital?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                        {latestYearData?.daysOfSalesOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.daysOfSalesOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.daysOfSalesOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                        {latestYearData?.daysOfInventoryOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.daysOfInventoryOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.daysOfInventoryOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                        {latestYearData?.daysOfPayablesOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.daysOfPayablesOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.daysOfPayablesOutstanding?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                      <td className="text-primary font-weight-bold">
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
                        {latestYearData?.operatingProfitMargin ? (Number(latestYearData?.operatingProfitMargin) * 100)?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + '%' : ''}
                      </td>
                      <td className="text-center">
                        {/* {convertValue(((previousIncomeData?.revenue?.revenueFromOperations -
                          previousIncomeData?.expenses?.totExp +
                          previousIncomeData?.expenses?.finCost) /
                          previousYearData?.ebitdaMargin), unit)?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })} */}
                        {previousYearData?.operatingProfitMargin ? (Number(previousYearData?.operatingProfitMargin) * 100)?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + '%' : ''}
                      </td>
                      <td className="text-center">
                        {/* {convertValue(((lastIncomeData?.revenue?.revenueFromOperations -
                          lastIncomeData?.expenses?.totExp +
                          lastIncomeData?.expenses?.finCost) /
                          lastYearData?.ebitdaMargin), unit)?.toLocaleString('en-In', {
                            maximumFractionDigits: 2,
                          })} */}
                        {lastYearData?.operatingProfitMargin ? (Number(lastYearData?.operatingProfitMargin) * 100)?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }) + '%' : ''}
                      </td>
                      <td className="text-center">
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
                        {/* {latestYearData?.returnOnEquity?.toFixed(2).toLocaleString()} %   */}
                        {checkNan(
                          ((latestIncomeData?.revenue?.revenueFromOperations -
                            latestIncomeData?.expenses?.totExp +
                            latestIncomeData?.expenses?.finCost) /
                            ((latestBalanceData?.assets?.totalAssets -
                              latestBalanceData?.equityLiabilities
                                ?.currentLiabilties +
                              (latestCashData?.previous?.totalAssets -
                                latestCashData?.previous?.currentLiabilties)) /
                              2)) * 100
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }) ?? ''}%

                      </td>
                      <td className="text-center">
                        {checkNan(
                          ((previousIncomeData?.revenue?.revenueFromOperations -
                            previousIncomeData?.expenses?.totExp +
                            previousIncomeData?.expenses?.finCost) /
                            ((previousBalanceData?.assets?.totalAssets -
                              previousBalanceData?.equityLiabilities
                                ?.currentLiabilties +
                              (previousCashData?.previous?.totalAssets -
                                previousCashData?.previous
                                  ?.currentLiabilties)) /
                              2)) *
                          100
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }) ?? ''}
                        %
                      </td>
                      <td className="text-center">
                        {checkNan(
                          ((lastIncomeData?.revenue?.revenueFromOperations -
                            lastIncomeData?.expenses?.totExp +
                            lastIncomeData?.expenses?.finCost) /
                            ((lastBalanceData?.assets?.totalAssets -
                              lastBalanceData?.equityLiabilities
                                ?.currentLiabilties +
                              (lastCashData?.previous?.totalAssets -
                                lastCashData?.previous?.currentLiabilties)) /
                              2)) *
                          100
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }) ?? ''}
                        %
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(
                          ((latestIncomeData?.revenue?.revenueFromOperations -
                            latestIncomeData?.expenses?.totExp +
                            latestIncomeData?.expenses?.finCost) /
                            ((latestBalanceData?.assets?.totalAssets -
                              latestBalanceData?.equityLiabilities
                                ?.currentLiabilties +
                              (latestCashData?.previous?.totalAssets -
                                latestCashData?.previous?.currentLiabilties)) /
                              2)) *
                          100,
                          ((lastIncomeData?.revenue?.revenueFromOperations -
                            lastIncomeData?.expenses?.totExp +
                            lastIncomeData?.expenses?.finCost) /
                            ((lastBalanceData?.assets?.totalAssets -
                              lastBalanceData?.equityLiabilities
                                ?.currentLiabilties +
                              (lastCashData?.previous?.totalAssets -
                                lastCashData?.previous?.currentLiabilties)) /
                              2)) *
                          100,
                          ((lastIncomeData?.revenue?.revenueFromOperations -
                            lastIncomeData?.expenses?.totExp +
                            lastIncomeData?.expenses?.finCost) /
                            ((lastBalanceData?.assets?.totalAssets -
                              lastBalanceData?.equityLiabilities
                                ?.currentLiabilties +
                              (lastCashData?.previous?.totalAssets -
                                lastCashData?.previous?.currentLiabilties)) /
                              2)) *
                          100,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Return On Total Assets (%)</td>
                      <td className="text-center">
                        {(latestYearData?.returnOnAssets * 100
                          ? latestYearData?.returnOnAssets * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {(previousYearData?.returnOnAssets * 100
                          ? previousYearData?.returnOnAssets * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {(lastYearData?.returnOnAssets * 100
                          ? lastYearData?.returnOnAssets * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(
                          latestYearData?.returnOnAssets * 100,
                          previousYearData?.returnOnAssets * 100,
                          lastYearData?.returnOnAssets * 100,
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
                <table
                  className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th width="50%">
                        <h3 className="text-color">
                          Coverage, Liquidity &amp; Growth Ratio
                        </h3>
                      </th>
                      <th className="text-center" width="12.5%">
                        {latestYearData?.financialEndDate ? moment(latestYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase() : ''}
                      </th>
                      <th className="text-center" width="12.5%">
                        {previousYearData?.financialEndDate ? moment(previousYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase() : ''}
                      </th>
                      <th className="text-center" width="12.5%">
                        {lastYearData?.financialEndDate ? moment(lastYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase() : ''}
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
                      <td className="text-center">
                        {latestYearData?.debtEquity?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.debtEquity?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.debtEquity?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                        {latestYearData?.debtToEbitda?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.debtToEbitda?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.debtToEbitda?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                        {latestYearData?.interestCoverage?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.interestCoverage?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.interestCoverage?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                        {(latestYearData?.longTermDebtCoverage * 100
                          ? latestYearData?.longTermDebtCoverage * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {(previousYearData?.longTermDebtCoverage * 100
                          ? previousYearData?.longTermDebtCoverage * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {(lastYearData?.longTermDebtCoverage * 100
                          ? lastYearData?.longTermDebtCoverage * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(
                          latestYearData?.longTermDebtCoverage * 100,
                          previousYearData?.longTermDebtCoverage * 100,
                          lastYearData?.longTermDebtCoverage * 100,
                        )}
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
                        {latestYearData?.currentRatio?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.currentRatio?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.currentRatio?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                        {latestYearData?.quickRatio?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {previousYearData?.quickRatio?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {lastYearData?.quickRatio?.toLocaleString('en-In', {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
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
                      <td className="text-primary font-weight-bold">
                        GROWTH RATIO
                      </td>
                    </tr>
                    <tr>
                      <td>Asset Growth Ratio</td>
                      <td className="text-center">
                        {(latestYearData?.totalAssetsGrowth * 100
                          ? latestYearData?.totalAssetsGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {(previousYearData?.totalAssetsGrowth * 100
                          ? previousYearData?.totalAssetsGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {(lastYearData?.totalAssetsGrowth * 100
                          ? lastYearData?.totalAssetsGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
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
                        {(latestYearData?.netWorthGrowth * 100
                          ? latestYearData?.netWorthGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {(previousYearData?.netWorthGrowth * 100
                          ? previousYearData?.netWorthGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {(lastYearData?.netWorthGrowth * 100
                          ? lastYearData?.netWorthGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
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
                        {(latestYearData?.netSalesGrowth * 100
                          ? latestYearData?.netSalesGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {(previousYearData?.netSalesGrowth * 100
                          ? previousYearData?.netSalesGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {(lastYearData?.netSalesGrowth * 100
                          ? lastYearData?.netSalesGrowth * 100
                          : ''
                        )?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(
                          latestYearData?.netSalesGrowth * 100,
                          previousYearData?.netSalesGrowth * 100,
                          lastYearData?.netSalesGrowth * 100,
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
  )
}

export default Index
