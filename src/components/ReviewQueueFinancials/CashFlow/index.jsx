/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from '../index.module.scss'
import moment from 'moment'
import _get from 'lodash/get'
import { convertValue } from '../../../utils/helper'

function Index ({ cashData, rtrnChartIndiaction }) {
  const [unit, setUnit] = useState(10000000)
  // console.log(cashData?.financial.cashFlowStatement[0], 'THIS IS CASH DATA')

  const latestYearData = _get(cashData, 'financial.cashFlowStatement[0]', {})

  const previousYearData = _get(cashData, 'financial.cashFlowStatement[1]', {})

  const lastYearData = _get(cashData, 'financial.cashFlowStatement[2]', {})

  const latestBalanceData = _get(cashData, 'financial.balanceSheet[0]', {})

  const previousBalanceData = _get(cashData, 'financial.balanceSheet[1]', {})

  const lastYearBalanceData = _get(cashData, 'financial.balanceSheet[2]', {})

  const latestIncomeStatement = _get(
    cashData,
    'financial.incomeStatement[0]',
    {},
  )

  const previousIncomeStatement = _get(
    cashData,
    'financial.incomeStatement[1]',
    {},
  )

  const lastYearIncomeStatement = _get(
    cashData,
    'financial.incomeStatement[2]',
    {},
  )

  const yearArray = _get(cashData, 'financial.other.financialYears', [
    '',
    '',
    '',
  ])

  console.log(cashData, 'lastYearData')

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
        >
          <h2 className="mb-0">Cash Flow Statement</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                className={`${styles.options} ${styles.customSelect} accordion_DropDown`}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value={10000000}>Crores</option>
                <option value={100000}>Lakhs</option>
              </select>
              <img
                className={`${styles.arrow2} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="arrow"
              />
            </div>
            <span
              data-toggle="collapse"
              data-target="#cashFlowStatement"
              aria-expanded="true"
              aria-controls="cashFlowStatement"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="cashFlowStatement"
          className="collapse"
          aria-labelledby="cashFlowStatement"
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
                    <th width="50%"></th>
                    <th
                      className="text-center"
                      width="12.5%"
                      style={{
                        color: `${
                          latestYearData?.financialEndDate ? '#3687e8' : 'red'
                        }`,
                      }}
                    >
                      {latestYearData?.financialEndDate
                        ? moment(latestYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase()
                        : 'MAR-' + yearArray[0].slice(5, 7)}
                    </th>
                    <th
                      className="text-center"
                      width="12.5%"
                      style={{
                        color: `${
                          previousYearData?.financialEndDate
                            ? '#3687e8'
                            : 'red'
                        }`,
                      }}
                    >
                      {previousYearData?.financialEndDate
                        ? moment(previousYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase()
                        : 'MAR-' + yearArray[1].slice(5, 7)}
                    </th>
                    <th
                      className="text-center"
                      width="12.5%"
                      style={{
                        color: `${
                          lastYearData?.financialEndDate ? '#3687e8' : 'red'
                        }`,
                      }}
                    >
                      {lastYearData?.financialEndDate
                        ? moment(lastYearData?.financialEndDate)
                          .format('MMM-YY')
                          .toUpperCase()
                        : 'MAR-' + yearArray[2].slice(5, 7)}
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
                      {/* {
                          latestYearData?.cashFlowsFromUsedInOperatingActivities
                            ?.cashFlowsFromUsedInOperatingActivities?.toLocaleString()
                        } */}
                      {convertValue(
                        latestYearData?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {
                          previousYearData?.cashFlowsFromUsedInOperatingActivities
                            ?.cashFlowsFromUsedInOperatingActivities?.toLocaleString()
                        } */}
                      {convertValue(
                        previousYearData
                          ?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {
                          lastYearData?.cashFlowsFromUsedInOperatingActivities
                            ?.cashFlowsFromUsedInOperatingActivities?.toLocaleString()
                        } */}
                      {convertValue(
                        lastYearData?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className={`${styles.trend} text-center`}>
                      {rtrnChartIndiaction(
                        latestYearData?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities,
                        previousYearData
                          ?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities,
                        lastYearData?.cashFlowsFromUsedInOperatingActivities
                          ?.cashFlowsFromUsedInOperatingActivities,
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Investing Cash Flow</td>
                    <td className="text-center">
                      {/* {
                          latestYearData?.cashFlowsFromUsedInInvestingActivities
                            ?.cashFlowsFromUsedInInvestingActivities?.toLocaleString()
                        } */}

                      {convertValue(
                        latestYearData?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {
                          previousYearData?.cashFlowsFromUsedInInvestingActivities
                            ?.cashFlowsFromUsedInInvestingActivities?.toLocaleString()
                        } */}
                      {convertValue(
                        previousYearData
                          ?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {
                          lastYearData?.cashFlowsFromUsedInInvestingActivities
                            ?.cashFlowsFromUsedInInvestingActivities?.toLocaleString()
                        } */}
                      {convertValue(
                        lastYearData?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className={`${styles.trend} text-center`}>
                      {rtrnChartIndiaction(
                        latestYearData?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities,
                        previousYearData
                          ?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities,
                        lastYearData?.cashFlowsFromUsedInInvestingActivities
                          ?.cashFlowsFromUsedInInvestingActivities,
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>Financing Cash Flow</td>
                    <td className="text-center">
                      {/* {
                          latestYearData?.cashFlowsFromUsedInFinancingActivities
                            ?.cashFlowsFromUsedInFinancingActivities?.toLocaleString()
                        } */}
                      {convertValue(
                        latestYearData?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {
                          previousYearData?.cashFlowsFromUsedInFinancingActivities
                            ?.cashFlowsFromUsedInFinancingActivities?.toLocaleString()
                        } */}
                      {convertValue(
                        previousYearData
                          ?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {
                          lastYearData?.cashFlowsFromUsedInFinancingActivities
                            ?.cashFlowsFromUsedInFinancingActivities?.toLocaleString()
                        } */}
                      {convertValue(
                        lastYearData?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className={`${styles.trend} text-center`}>
                      {rtrnChartIndiaction(
                        latestYearData?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities,
                        previousYearData
                          ?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities,
                        lastYearData?.cashFlowsFromUsedInFinancingActivities
                          ?.cashFlowsFromUsedInFinancingActivities,
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Net Change in Cash</td>
                    <td className="text-center">
                      {/* {
                          latestYearData
                            ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents?.toLocaleString()
                        } */}
                      {convertValue(
                        latestYearData
                          ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {
                          previousYearData
                            ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents?.toLocaleString()
                        } */}

                      {convertValue(
                        previousYearData
                          ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {
                          lastYearData
                            ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents?.toLocaleString()
                        } */}
                      {convertValue(
                        lastYearData
                          ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className={`${styles.trend} text-center`}>
                      {rtrnChartIndiaction(
                        latestYearData
                          ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents,
                        previousYearData
                          ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents,
                        lastYearData
                          ?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                          ?.increaseDecreaseInCashAndCashEquivalents,
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Free Cash Flow</td>
                    <td className="text-center">
                      {/* {convertValue(((latestYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities - */}
                      {convertValue(
                        latestBalanceData?.assets?.propertyPlantAndEquipment -
                        latestYearData?.previous
                          ?.propertyPlantAndEquipment +
                        latestIncomeStatement?.expenses?.deprcnAmort,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {convertValue(((previousYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities - */}
                      {convertValue(
                        previousBalanceData?.assets
                          ?.propertyPlantAndEquipment -
                        previousYearData?.previous
                          ?.propertyPlantAndEquipment +
                        previousIncomeStatement?.expenses?.deprcnAmort,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {convertValue(((lastYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities - */}
                      {convertValue(
                        lastYearBalanceData?.assets
                          ?.propertyPlantAndEquipment -
                        lastYearData?.previous?.propertyPlantAndEquipment +
                        previousIncomeStatement?.expenses?.deprcnAmort,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className={`${styles.trend} text-center`}>
                      {rtrnChartIndiaction(
                        latestBalanceData?.assets?.propertyPlantAndEquipment -
                        latestYearData?.previous
                          ?.propertyPlantAndEquipment +
                        latestIncomeStatement?.expenses?.deprcnAmort,
                        previousBalanceData?.assets
                          ?.propertyPlantAndEquipment -
                        previousYearData?.previous
                          ?.propertyPlantAndEquipment +
                        previousIncomeStatement?.expenses?.deprcnAmort,
                        lastYearBalanceData?.assets
                          ?.propertyPlantAndEquipment -
                        lastYearData?.previous?.propertyPlantAndEquipment +
                        lastYearIncomeStatement?.expenses?.deprcnAmort,
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Capex</td>
                    <td className="text-center">
                      {/* {checkNan(
                          ((latestBalanceData?.assets?.propertyPlantAndEquipment - latestYearData?.previous?.propertyPlantAndEquipment) + latestIncomeStatement?.expenses?.deprcnAmort), true
                        )} */}
                      {convertValue(
                        latestBalanceData?.assets?.propertyPlantAndEquipment -
                        latestYearData?.previous
                          ?.propertyPlantAndEquipment +
                        latestIncomeStatement?.expenses?.deprcnAmort,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {checkNan(
                          ((previousBalanceData?.assets?.propertyPlantAndEquipment - previousYearData?.previous?.propertyPlantAndEquipment) + previousIncomeStatement?.expenses?.deprcnAmort), true
                        )} */}
                      {convertValue(
                        previousBalanceData?.assets
                          ?.propertyPlantAndEquipment -
                        previousYearData?.previous
                          ?.propertyPlantAndEquipment +
                        previousIncomeStatement?.expenses?.deprcnAmort,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-center">
                      {/* {checkNan(
                          ((lastYearBalanceData?.assets?.propertyPlantAndEquipment - lastYearData?.previous?.propertyPlantAndEquipment) + lastYearIncomeStatement?.expenses?.deprcnAmort), true
                        )} */}
                      {convertValue(
                        lastYearBalanceData?.assets
                          ?.propertyPlantAndEquipment -
                        lastYearData?.previous?.propertyPlantAndEquipment +
                        lastYearIncomeStatement?.expenses?.deprcnAmort,
                        unit,
                      )?.toLocaleString('en-In', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className={`${styles.trend} text-center`}>
                      {rtrnChartIndiaction(
                        latestBalanceData?.assets?.propertyPlantAndEquipment -
                        latestYearData?.previous
                          ?.propertyPlantAndEquipment +
                        latestIncomeStatement?.expenses?.deprcnAmort,
                        previousBalanceData?.assets
                          ?.propertyPlantAndEquipment -
                        previousYearData?.previous
                          ?.propertyPlantAndEquipment +
                        previousIncomeStatement?.expenses?.deprcnAmort,
                        lastYearBalanceData?.assets
                          ?.propertyPlantAndEquipment -
                        lastYearData?.previous?.propertyPlantAndEquipment +
                        lastYearIncomeStatement?.expenses?.deprcnAmort,
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
