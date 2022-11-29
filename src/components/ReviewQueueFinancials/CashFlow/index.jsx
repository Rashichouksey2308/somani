/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../index.module.scss';
import _get from 'lodash/get';
import { convertValue } from '../../../utils/helper';
import { returnReadableNumber } from '@/utils/helpers/global';

function Index({ cashData, rtrnChartIndiaction, returnDataPeriodAndColour }) {
  const [unit, setUnit] = useState(10000000);

  const latestYearData = _get(cashData, 'financial.cashFlowStatement[0]', {});
  const previousYearData = _get(cashData, 'financial.cashFlowStatement[1]', {});
  const lastYearData = _get(cashData, 'financial.cashFlowStatement[2]', {});
  const latestBalanceData = _get(cashData, 'financial.balanceSheet[0]', {});
  const previousBalanceData = _get(cashData, 'financial.balanceSheet[1]', {});
  const lastYearBalanceData = _get(cashData, 'financial.balanceSheet[2]', {});
  const latestIncomeStatement = _get(cashData, 'financial.incomeStatement[0]', {});
  const previousIncomeStatement = _get(cashData, 'financial.incomeStatement[1]', {});
  const lastYearIncomeStatement = _get(cashData, 'financial.incomeStatement[2]', {});

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
              <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
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
          <div className={`${styles.noBorderTable} ${styles.cardBody} p-0 card-body border_color`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th width="50%"></th>
                      <th
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(latestYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(latestYearData?.financialEndDate, 0).date}
                      </th>
                      <th
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(previousYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(latestYearData?.financialEndDate, 1).date}
                      </th>
                      <th
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(lastYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(latestYearData?.financialEndDate, 2).date}
                      </th>
                      <th className="text-center" width="12.5%">
                        TREND
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Operating Cash Flow</td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            latestYearData?.cashFlowsFromUsedInOperatingActivities
                              ?.cashFlowsFromUsedInOperatingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            previousYearData?.cashFlowsFromUsedInOperatingActivities
                              ?.cashFlowsFromUsedInOperatingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            lastYearData?.cashFlowsFromUsedInOperatingActivities
                              ?.cashFlowsFromUsedInOperatingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.cashFlowsFromUsedInOperatingActivities
                            ?.cashFlowsFromUsedInOperatingActivities,
                          previousYearData?.cashFlowsFromUsedInOperatingActivities
                            ?.cashFlowsFromUsedInOperatingActivities,
                          lastYearData?.cashFlowsFromUsedInOperatingActivities?.cashFlowsFromUsedInOperatingActivities,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Investing Cash Flow</td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            latestYearData?.cashFlowsFromUsedInInvestingActivities
                              ?.cashFlowsFromUsedInInvestingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            previousYearData?.cashFlowsFromUsedInInvestingActivities
                              ?.cashFlowsFromUsedInInvestingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            lastYearData?.cashFlowsFromUsedInInvestingActivities
                              ?.cashFlowsFromUsedInInvestingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.cashFlowsFromUsedInInvestingActivities
                            ?.cashFlowsFromUsedInInvestingActivities,
                          previousYearData?.cashFlowsFromUsedInInvestingActivities
                            ?.cashFlowsFromUsedInInvestingActivities,
                          lastYearData?.cashFlowsFromUsedInInvestingActivities?.cashFlowsFromUsedInInvestingActivities,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Financing Cash Flow</td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            latestYearData?.cashFlowsFromUsedInFinancingActivities
                              ?.cashFlowsFromUsedInFinancingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            previousYearData?.cashFlowsFromUsedInFinancingActivities
                              ?.cashFlowsFromUsedInFinancingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            lastYearData?.cashFlowsFromUsedInFinancingActivities
                              ?.cashFlowsFromUsedInFinancingActivities,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.cashFlowsFromUsedInFinancingActivities
                            ?.cashFlowsFromUsedInFinancingActivities,
                          previousYearData?.cashFlowsFromUsedInFinancingActivities
                            ?.cashFlowsFromUsedInFinancingActivities,
                          lastYearData?.cashFlowsFromUsedInFinancingActivities?.cashFlowsFromUsedInFinancingActivities,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Net Change in Cash</td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            latestYearData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                              ?.increaseDecreaseInCashAndCashEquivalents,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            previousYearData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                              ?.increaseDecreaseInCashAndCashEquivalents,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            lastYearData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                              ?.increaseDecreaseInCashAndCashEquivalents,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents,
                          previousYearData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents,
                          lastYearData?.effectOfExchangeRateChangesOnCashAndCashEquivalents
                            ?.increaseDecreaseInCashAndCashEquivalents,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Free Cash Flow</td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            latestBalanceData?.assets?.propertyPlantAndEquipment -
                              latestYearData?.previous?.propertyPlantAndEquipment +
                              latestIncomeStatement?.expenses?.deprcnAmort,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            previousBalanceData?.assets?.propertyPlantAndEquipment -
                              previousYearData?.previous?.propertyPlantAndEquipment +
                              previousIncomeStatement?.expenses?.deprcnAmort,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            lastYearBalanceData?.assets?.propertyPlantAndEquipment -
                              lastYearData?.previous?.propertyPlantAndEquipment +
                              previousIncomeStatement?.expenses?.deprcnAmort,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestBalanceData?.assets?.propertyPlantAndEquipment -
                            latestYearData?.previous?.propertyPlantAndEquipment +
                            latestIncomeStatement?.expenses?.deprcnAmort,
                          previousBalanceData?.assets?.propertyPlantAndEquipment -
                            previousYearData?.previous?.propertyPlantAndEquipment +
                            previousIncomeStatement?.expenses?.deprcnAmort,
                          lastYearBalanceData?.assets?.propertyPlantAndEquipment -
                            lastYearData?.previous?.propertyPlantAndEquipment +
                            lastYearIncomeStatement?.expenses?.deprcnAmort,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Capex</td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            latestBalanceData?.assets?.propertyPlantAndEquipment -
                              latestYearData?.previous?.propertyPlantAndEquipment +
                              latestIncomeStatement?.expenses?.deprcnAmort,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            previousBalanceData?.assets?.propertyPlantAndEquipment -
                              previousYearData?.previous?.propertyPlantAndEquipment +
                              previousIncomeStatement?.expenses?.deprcnAmort,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td>
                        {returnReadableNumber(
                          convertValue(
                            lastYearBalanceData?.assets?.propertyPlantAndEquipment -
                              lastYearData?.previous?.propertyPlantAndEquipment +
                              lastYearIncomeStatement?.expenses?.deprcnAmort,
                            unit,
                          ),
                          'en-In',
                          2,
                          2,
                        )}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestBalanceData?.assets?.propertyPlantAndEquipment -
                            latestYearData?.previous?.propertyPlantAndEquipment +
                            latestIncomeStatement?.expenses?.deprcnAmort,
                          previousBalanceData?.assets?.propertyPlantAndEquipment -
                            previousYearData?.previous?.propertyPlantAndEquipment +
                            previousIncomeStatement?.expenses?.deprcnAmort,
                          lastYearBalanceData?.assets?.propertyPlantAndEquipment -
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
  );
}

export default Index;
