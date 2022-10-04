/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from '../index.module.scss'
import moment from 'moment'
import _get from 'lodash/get'
import { checkNan, convertValue } from '../../../utils/helper'

function Index({ incomeData, rtrnChartIndiaction }) {
  const [unit, setUnit] = useState(10000000)
  // console.log(incomeData?.financial?.incomeStatement[0], 'THIS IS INCOME DATA')

  const latestYearData = _get(incomeData, 'financial.incomeStatement[0]', {})

  const previousYearData = _get(incomeData, 'financial.incomeStatement[1]', {})

  const lastYearData = _get(incomeData, 'financial.incomeStatement[2]', {})

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}>
          <h2 className="mb-0">Income Statement</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select onChange={(e) => setUnit(e.target.value)} className={`${styles.options} ${styles.customSelect} accordion_DropDown`}>
                <option value={10000000}>Crores</option>
                <option value={100000}>Lakhs</option>
              </select>
              <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow"/>
            </div>
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
                      <td>Revenue From Operation</td>
                      <td className="text-center">
                        {/* {latestYearData?.revenue?.revenueFromOperations?.toLocaleString()} */}
                        {convertValue((latestYearData?.revenue?.revenueFromOperations), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.revenue?.revenueFromOperations?.toLocaleString()} */}
                        {convertValue((previousYearData?.revenue?.revenueFromOperations), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.revenue?.revenueFromOperations?.toLocaleString()} */}
                        {convertValue((lastYearData?.revenue?.revenueFromOperations), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.revenue?.revenueFromOperations, previousYearData?.revenue?.revenueFromOperations, lastYearData?.revenue?.revenueFromOperations)}

                      </td>
                    </tr>
                    <tr>
                      <td>Other Income</td>
                      <td className="text-center">
                        {/* {latestYearData?.revenue?.otherIncome?.toLocaleString()} */}
                        {convertValue((latestYearData?.revenue?.otherIncome), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.revenue?.otherIncome?.toLocaleString()} */}
                        {convertValue((previousYearData?.revenue?.otherIncome), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.revenue?.otherIncome?.toLocaleString()} */}
                        {convertValue((lastYearData?.revenue?.otherIncome), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.revenue?.otherIncome, previousYearData?.revenue?.otherIncome, lastYearData?.revenue?.otherIncome)}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Income</strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {latestYearData?.revenue?.totalRev?.toLocaleString()} */}
                          {convertValue((latestYearData?.revenue?.totalRev), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {previousYearData?.revenue?.totalRev?.toLocaleString()} */}
                          {convertValue((previousYearData?.revenue?.totalRev), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {lastYearData?.revenue?.totalRev?.toLocaleString()} */}
                          {convertValue((lastYearData?.revenue?.totalRev), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.revenue?.totalRev, previousYearData?.revenue?.totalRev, lastYearData?.revenue?.totalRev)}

                      </td>
                    </tr>

                    <tr>
                      <td>Purchases</td>
                      <td className="text-center">
                        {/* {latestYearData?.expenses?.purchaseStock?.toLocaleString()} */}
                        {convertValue((latestYearData?.expenses?.purchaseStock), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.expenses?.purchaseStock?.toLocaleString()} */}
                        {convertValue((previousYearData?.expenses?.purchaseStock), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.expenses?.purchaseStock?.toLocaleString()} */}
                        {convertValue((lastYearData?.expenses?.purchaseStock), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.expenses?.purchaseStock, previousYearData?.expenses?.purchaseStock, lastYearData?.expenses?.purchaseStock)}

                      </td>
                    </tr>
                    <tr>
                      <td>Other Expenses (Ex Dep, Int, Tax)</td>
                      <td className="text-center">
                        {/* {latestYearData?.expenses?.othExp?.toLocaleString()} */}
                        {convertValue((latestYearData?.expenses?.othExp), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.expenses?.othExp?.toLocaleString()} */}
                        {convertValue((previousYearData?.expenses?.othExp), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.expenses?.othExp?.toLocaleString()} */}
                        {convertValue((lastYearData?.expenses?.othExp), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.expenses?.othExp, previousYearData?.expenses?.othExp, lastYearData?.expenses?.othExp)}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Expenses</strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {latestYearData?.expenses?.totExp?.toLocaleString()} */}
                          {convertValue((latestYearData?.expenses?.totExp), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {previousYearData?.expenses?.totExp?.toLocaleString()} */}
                          {convertValue((previousYearData?.expenses?.totExp), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {lastYearData?.expenses?.totExp?.toLocaleString()} */}
                          {convertValue((lastYearData?.expenses?.totExp), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.expenses?.totExp, previousYearData?.expenses?.totExp, lastYearData?.expenses?.totExp)}

                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>EBITDA</strong>
                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (latestYearData?.revenue?.revenueFromOperations -
                            latestYearData?.expenses?.totExp +
                            latestYearData?.expenses?.finCost +
                            latestYearData?.expenses?.deprcnAmort), true
                        )} */}
                        {convertValue((latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost +
                          latestYearData?.expenses?.deprcnAmort), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}

                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (previousYearData?.revenue?.revenueFromOperations -
                            previousYearData?.expenses?.totExp +
                            previousYearData?.expenses?.finCost +
                            previousYearData?.expenses?.deprcnAmort), true
                        )} */}
                        {convertValue((previousYearData?.revenue?.revenueFromOperations -
                          previousYearData?.expenses?.totExp +
                          previousYearData?.expenses?.finCost +
                          previousYearData?.expenses?.deprcnAmort), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}

                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (lastYearData?.revenue?.revenueFromOperations -
                            lastYearData?.expenses?.totExp +
                            lastYearData?.expenses?.finCost +
                            lastYearData?.expenses?.deprcnAmort), true
                        )} */}
                        {convertValue((lastYearData?.revenue?.revenueFromOperations -
                          lastYearData?.expenses?.totExp +
                          lastYearData?.expenses?.finCost +
                          lastYearData?.expenses?.deprcnAmort), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}

                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost +
                          latestYearData?.expenses?.deprcnAmort), (previousYearData?.revenue?.revenueFromOperations -
                            previousYearData?.expenses?.totExp +
                            previousYearData?.expenses?.finCost +
                            previousYearData?.expenses?.deprcnAmort), (lastYearData?.revenue?.revenueFromOperations -
                              lastYearData?.expenses?.totExp +
                              lastYearData?.expenses?.finCost +
                              lastYearData?.expenses?.deprcnAmort))}

                      </td>
                    </tr>
                    <tr>
                      <td>Depreciation</td>
                      <td className="text-center">
                        {/* {(latestYearData?.expenses?.deprcnAmort)?.toLocaleString()} */}
                        {convertValue((latestYearData?.expenses?.deprcnAmort), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.expenses?.deprcnAmort?.toLocaleString()} */}
                        {convertValue((previousYearData?.expenses?.deprcnAmort), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.expenses?.deprcnAmort?.toLocaleString()} */}
                        {convertValue((lastYearData?.expenses?.deprcnAmort), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.expenses?.deprcnAmort, previousYearData?.expenses?.deprcnAmort, lastYearData?.expenses?.deprcnAmort)}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>EBIT</strong>
                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (latestYearData?.revenue?.revenueFromOperations -
                            latestYearData?.expenses?.totExp +
                            latestYearData?.expenses?.finCost), true
                        )} */}
                        {convertValue((latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}

                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (previousYearData?.revenue?.revenueFromOperations -
                            previousYearData?.expenses?.totExp +
                            previousYearData?.expenses?.finCost), true
                        )} */}
                        {convertValue((previousYearData?.revenue?.revenueFromOperations -
                          previousYearData?.expenses?.totExp +
                          previousYearData?.expenses?.finCost), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}

                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (lastYearData?.revenue?.revenueFromOperations -
                            lastYearData?.expenses?.totExp +
                            lastYearData?.expenses?.finCost), true
                        )} */}
                        {convertValue((lastYearData?.revenue?.revenueFromOperations -
                          lastYearData?.expenses?.totExp +
                          lastYearData?.expenses?.finCost), unit)?.toLocaleString('en-In', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}


                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost), (previousYearData?.revenue?.revenueFromOperations -
                            previousYearData?.expenses?.totExp +
                            previousYearData?.expenses?.finCost), (lastYearData?.revenue?.revenueFromOperations -
                              lastYearData?.expenses?.totExp +
                              lastYearData?.expenses?.finCost))}

                      </td>
                    </tr>
                    <tr>
                      <td>Interest Cost</td>
                      <td className="text-center">
                        {/* {latestYearData?.expenses?.finCost?.toLocaleString()} */}
                        {convertValue((latestYearData?.expenses?.finCost), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.expenses?.finCost?.toLocaleString()} */}
                        {convertValue((previousYearData?.expenses?.finCost), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.expenses?.finCost?.toLocaleString()} */}
                        {convertValue((lastYearData?.expenses?.finCost), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.expenses?.finCost, previousYearData?.expenses?.finCost, lastYearData?.expenses?.finCost)}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>PBT</strong>
                      </td>
                      <td className="text-center">
                        {/* {latestYearData?.profLossBefTax?.toLocaleString()} */}
                        {convertValue((latestYearData?.profLossBefTax), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.profLossBefTax?.toLocaleString()} */}
                        {convertValue((previousYearData?.profLossBefTax), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.profLossBefTax?.toLocaleString()} */}
                        {convertValue((lastYearData?.profLossBefTax), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.profLossBefTax, previousYearData?.profLossBefTax, lastYearData?.profLossBefTax)}

                      </td>
                    </tr>
                    <tr>
                      <td>Less: Tax</td>
                      <td className="text-center">
                        {/* {latestYearData?.totalTaxExpense?.toLocaleString()} */}
                        {convertValue((latestYearData?.totalTaxExpense), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.totalTaxExpense?.toLocaleString()} */}
                        {convertValue((previousYearData?.totalTaxExpense), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.totalTaxExpense?.toLocaleString()} */}
                        {convertValue((lastYearData?.totalTaxExpense), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.totalTaxExpense, previousYearData?.totalTaxExpense, lastYearData?.totalTaxExpense)}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>PAT</strong>
                      </td>
                      <td className="text-center">
                        {/* {latestYearData?.profitLoss?.toLocaleString()} */}
                        {convertValue((latestYearData?.profitLoss), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.profitLoss?.toLocaleString()} */}
                        {convertValue((previousYearData?.profitLoss), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.profitLoss?.toLocaleString()} */}
                        {convertValue((lastYearData?.profitLoss), unit)?.toLocaleString('en-In', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.profitLoss, previousYearData?.profitLoss, lastYearData?.profitLoss)}

                      </td>
                    </tr>
                    <tr>
                      <td>Effective Tax Rate %</td>
                      <td className="text-center">
                        {(checkNan(
                          (latestYearData?.totalTaxExpense /
                            latestYearData?.profLossBefTax), true
                        ) * 100).toFixed(2)}%

                      </td>
                      <td className="text-center">
                        {(checkNan(
                          (previousYearData?.totalTaxExpense /
                            previousYearData?.profLossBefTax), true
                        ) * 100).toFixed(2)}%

                      </td>
                      <td className="text-center">
                        {(checkNan(
                          (lastYearData?.totalTaxExpense /
                            lastYearData?.profLossBefTax), true
                        ) * 100).toFixed(2)}%

                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.totalTaxExpense /
                          latestYearData?.profLossBefTax)?.toLocaleString() *
                          100, (previousYearData?.totalTaxExpense /
                            previousYearData?.profLossBefTax)?.toLocaleString() *
                        100, (lastYearData?.totalTaxExpense /
                          lastYearData?.profLossBefTax)?.toLocaleString() *
                        100)}

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
