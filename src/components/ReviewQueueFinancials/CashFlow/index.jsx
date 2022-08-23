/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../index.module.scss'
import moment from 'moment'
import _get from 'lodash/get'

function Index({ cashData, rtrnChartIndiaction }) {
  // console.log(cashData?.financial.cashFlowStatement[0], 'THIS IS CASH DATA')

  const latestYearData = _get(cashData, 'financial.cashFlowStatement[0]', {})

  const previousYearData = _get(cashData, 'financial.cashFlowStatement[1]', {})

  const lastYearData = _get(cashData, 'financial.cashFlowStatement[2]', {})

  const latestBalanceData = _get(cashData, 'financial.balanceSheet[0]', {})

  const previousBalanceData = _get(cashData, 'financial.balanceSheet[1]', {})

  const lastYearBalanceData = _get(cashData, 'financial.balanceSheet[2]', {})

  const latestIncomeStatement = _get(cashData, 'financial.incomeStatement[0]', {})

  const previousIncomeStatement = _get(cashData, 'financial.incomeStatement[1]', {})

  const lastYearIncomeStatement = _get(cashData, 'financial.incomeStatement[2]', {})

  console.log(cashData, 'lastYearData')

  return (
    <>
      <div className={`${styles.card} card`}>
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}>
          <h2 className="mb-0">Cash Flow Statement</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">+</span>
          </div>
        </div>
        <div id="cashFlowStatement" className="collapse" aria-labelledby="cashFlowStatement" data-parent="#FinancialsAccordion">
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
                      <td>Operating Cash Flow</td>
                      <td className="text-center">
                        {
                          latestYearData?.cashFlowsFromUsedInOperatingActivities
                            ?.cashFlowsFromUsedInOperatingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {
                          previousYearData?.cashFlowsFromUsedInOperatingActivities
                            ?.cashFlowsFromUsedInOperatingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {
                          lastYearData?.cashFlowsFromUsedInOperatingActivities
                            ?.cashFlowsFromUsedInOperatingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities, previousBalanceData?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities, lastYearData?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities)}

                      </td>
                    </tr>
                    <tr>
                      <td>Investing Cash Flow</td>
                      <td className="text-center">
                        {
                          latestYearData?.cashFlowsFromUsedInInvestingActivities
                            ?.cashFlowsFromUsedInInvestingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {
                          previousYearData?.cashFlowsFromUsedInInvestingActivities
                            ?.cashFlowsFromUsedInInvestingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {
                          lastYearData?.cashFlowsFromUsedInInvestingActivities
                            ?.cashFlowsFromUsedInInvestingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities, previousBalanceData?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities, lastYearData?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities)}
                      </td>
                    </tr>

                    <tr>
                      <td>Financing Cash Flow</td>
                      <td className="text-center">
                        {
                          latestYearData?.cashFlowsFromUsedInFinancingActivities
                            ?.cashFlowsFromUsedInFinancingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {
                          previousYearData?.cashFlowsFromUsedInFinancingActivities
                            ?.cashFlowsFromUsedInFinancingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {
                          lastYearData?.cashFlowsFromUsedInFinancingActivities
                            ?.cashFlowsFromUsedInFinancingActivities?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities, previousBalanceData?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities, lastYearData?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities)}
                      </td>
                    </tr>
                    <tr>
                      <td>Net Change in Cash</td>
                      <td className="text-center">
                        {
                          latestYearData
                            ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {
                          previousYearData
                            ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {
                          lastYearData
                            ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents?.toLocaleString()
                        }
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents, previousBalanceData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents, lastYearData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents)}
                      </td>
                    </tr>
                    <tr>
                      <td>Free Cash Flow</td>
                      <td className="text-center">{((latestYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities -
                        latestBalanceData?.assets?.propertyPlantAndEquipment -
                        latestYearData?.previous?.propertyPlantAndEquipment) +
                        latestIncomeStatement?.expenses?.deprcnAmort).toLocaleString()}</td>
                      <td className="text-center">{((previousYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities -
                        previousBalanceData?.assets?.propertyPlantAndEquipment -
                        previousYearData?.previous?.propertyPlantAndEquipment) +
                        previousIncomeStatement?.expenses?.deprcnAmort).toLocaleString()}</td>
                      <td className="text-center">{((lastYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities -
                        lastYearBalanceData?.assets?.propertyPlantAndEquipment -
                        lastYearData?.previous?.propertyPlantAndEquipment) +
                        lastYearIncomeStatement?.expenses?.deprcnAmort).toLocaleString()}</td>
                      <td className="text-center">

                        {rtrnChartIndiaction(((latestYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities -
                          latestBalanceData?.assets?.propertyPlantAndEquipment -
                          latestYearData?.previous?.propertyPlantAndEquipment) +
                          latestIncomeStatement?.expenses?.deprcnAmort), ((previousYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities -
                            previousBalanceData?.assets?.propertyPlantAndEquipment -
                            previousYearData?.previous?.propertyPlantAndEquipment) +
                            previousIncomeStatement?.expenses?.deprcnAmort), ((lastYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities -
                              lastYearBalanceData?.assets?.propertyPlantAndEquipment -
                              lastYearData?.previous?.propertyPlantAndEquipment) +
                              lastYearIncomeStatement?.expenses?.deprcnAmort))}
                      </td>
                    </tr>
                    <tr>
                      <td>Capex</td>
                      <td className="text-center">{((latestBalanceData?.assets?.propertyPlantAndEquipment - latestYearData?.previous?.propertyPlantAndEquipment) + latestIncomeStatement?.expenses?.deprcnAmort).toLocaleString()}</td>
                      <td className="text-center">{((previousBalanceData?.assets?.propertyPlantAndEquipment - previousYearData?.previous?.propertyPlantAndEquipment) + previousIncomeStatement?.expenses?.deprcnAmort).toLocaleString()}</td>
                      <td className="text-center">{((lastYearBalanceData?.assets?.propertyPlantAndEquipment - lastYearData?.previous?.propertyPlantAndEquipment) + lastYearIncomeStatement?.expenses?.deprcnAmort).toLocaleString()}</td>
                      <td className="text-center">
                        {rtrnChartIndiaction(((latestBalanceData?.assets?.propertyPlantAndEquipment - latestYearData?.previous?.propertyPlantAndEquipment) + latestIncomeStatement?.expenses?.deprcnAmort), ((previousBalanceData?.assets?.propertyPlantAndEquipment - previousYearData?.previous?.propertyPlantAndEquipment) + previousIncomeStatement?.expenses?.deprcnAmort), ((lastYearBalanceData?.assets?.propertyPlantAndEquipment - lastYearData?.previous?.propertyPlantAndEquipment) + lastYearIncomeStatement?.expenses?.deprcnAmort))}
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
