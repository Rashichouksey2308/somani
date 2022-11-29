/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../index.module.scss';
import _get from 'lodash/get';
import { checkNan, convertValue } from '../../../utils/helper';
import { returnReadableNumber } from '@/utils/helpers/global';


function Index({ incomeData, rtrnChartIndiaction, returnDataPeriodAndColour }) {

  const [unit, setUnit] = useState(10000000);
  const latestYearData = _get(incomeData, 'financial.incomeStatement[0]', {});
  const previousYearData = _get(incomeData, 'financial.incomeStatement[1]', {});
  const lastYearData = _get(incomeData, 'financial.incomeStatement[2]', {});

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
        >
          <h2 className="mb-0">Income Statement</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                onChange={(e) => setUnit(e.target.value)}
                className={`${styles.options} ${styles.customSelect} accordion_DropDown`}
              >
                <option value={10000000}>Crores</option>
                <option value={100000}>Lakhs</option>
              </select>
              <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
            </div>
            <span
              data-toggle="collapse"
              data-target="#incomeStatement"
              aria-expanded="true"
              aria-controls="incomeStatement"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="incomeStatement"
          className="collapse"
          aria-labelledby="incomeStatement"
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
                        className="text-right"
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(latestYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(latestYearData?.financialEndDate, 0).date}
                      </th>
                      <th
                        className="text-right"
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(previousYearData?.financialEndDate).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(previousYearData?.financialEndDate, 0).date}
                      </th>
                      <th
                        className="text-right"
                        width="12.5%"
                        style={{color: `${returnDataPeriodAndColour(lastYearData?.financialEndDate).colour}`,}}
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
                      <td>Revenue From Operation</td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.revenue?.revenueFromOperations, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.revenue?.revenueFromOperations, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.revenue?.revenueFromOperations, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.revenue?.revenueFromOperations,
                          previousYearData?.revenue?.revenueFromOperations,
                          lastYearData?.revenue?.revenueFromOperations,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Other Income</td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.revenue?.otherIncome, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.revenue?.otherIncome, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.revenue?.otherIncome, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.revenue?.otherIncome,
                          previousYearData?.revenue?.otherIncome,
                          lastYearData?.revenue?.otherIncome,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Income</strong>
                      </td>
                      <td className="text-right">
                        <strong>
                      {returnReadableNumber(convertValue(latestYearData?.revenue?.totalRev, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className="text-right">
                        <strong>
                      {returnReadableNumber(convertValue(previousYearData?.revenue?.totalRev, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className="text-right">
                        <strong>
                      {returnReadableNumber(convertValue(lastYearData?.revenue?.totalRev, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.revenue?.totalRev,
                          previousYearData?.revenue?.totalRev,
                          lastYearData?.revenue?.totalRev,
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>Purchases</td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.expenses?.purchaseStock, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.expenses?.purchaseStock, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.expenses?.purchaseStock, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.expenses?.purchaseStock,
                          previousYearData?.expenses?.purchaseStock,
                          lastYearData?.expenses?.purchaseStock,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Other Expenses (Ex Dep, Int, Tax)</td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.expenses?.othExp, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.expenses?.othExp, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.expenses?.othExp, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.expenses?.othExp,
                          previousYearData?.expenses?.othExp,
                          lastYearData?.expenses?.othExp,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Expenses</strong>
                      </td>
                      <td className="text-right">
                        <strong>
                      {returnReadableNumber(convertValue(latestYearData?.expenses?.totExp, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className="text-right">
                        <strong>
                      {returnReadableNumber(convertValue(previousYearData?.expenses?.totExp, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className="text-right">
                        <strong>
                      {returnReadableNumber(convertValue(lastYearData?.expenses?.totExp, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.expenses?.totExp,
                          previousYearData?.expenses?.totExp,
                          lastYearData?.expenses?.totExp,
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>EBITDA</strong>
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue( latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost +
                          latestYearData?.expenses?.deprcnAmort, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue( previousYearData?.revenue?.revenueFromOperations -
                          previousYearData?.expenses?.totExp +
                          previousYearData?.expenses?.finCost +
                          previousYearData?.expenses?.deprcnAmort, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue( lastYearData?.revenue?.revenueFromOperations -
                          lastYearData?.expenses?.totExp +
                          lastYearData?.expenses?.finCost +
                          lastYearData?.expenses?.deprcnAmort, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost +
                          latestYearData?.expenses?.deprcnAmort,
                          previousYearData?.revenue?.revenueFromOperations -
                          previousYearData?.expenses?.totExp +
                          previousYearData?.expenses?.finCost +
                          previousYearData?.expenses?.deprcnAmort,
                          lastYearData?.revenue?.revenueFromOperations -
                          lastYearData?.expenses?.totExp +
                          lastYearData?.expenses?.finCost +
                          lastYearData?.expenses?.deprcnAmort,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Depreciation</td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.expenses?.deprcnAmort, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.expenses?.deprcnAmort, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.expenses?.deprcnAmort, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.expenses?.deprcnAmort,
                          previousYearData?.expenses?.deprcnAmort,
                          lastYearData?.expenses?.deprcnAmort,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>EBIT</strong>
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.revenue?.revenueFromOperations -
                          previousYearData?.expenses?.totExp +
                          previousYearData?.expenses?.finCost, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.revenue?.revenueFromOperations -
                          lastYearData?.expenses?.totExp +
                          lastYearData?.expenses?.finCost, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.revenue?.revenueFromOperations -
                          latestYearData?.expenses?.totExp +
                          latestYearData?.expenses?.finCost,
                          previousYearData?.revenue?.revenueFromOperations -
                          previousYearData?.expenses?.totExp +
                          previousYearData?.expenses?.finCost,
                          lastYearData?.revenue?.revenueFromOperations -
                          lastYearData?.expenses?.totExp +
                          lastYearData?.expenses?.finCost,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Interest Cost</td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.expenses?.finCost, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.expenses?.finCost, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.expenses?.finCost, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.expenses?.finCost,
                          previousYearData?.expenses?.finCost,
                          lastYearData?.expenses?.finCost,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>PBT</strong>
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.profLossBefTax, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.profLossBefTax, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.profLossBefTax, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.profLossBefTax,
                          previousYearData?.profLossBefTax,
                          lastYearData?.profLossBefTax,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Less: Tax</td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.totalTaxExpense, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.totalTaxExpense, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.totalTaxExpense, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.totalTaxExpense,
                          previousYearData?.totalTaxExpense,
                          lastYearData?.totalTaxExpense,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>PAT</strong>
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(latestYearData?.profitLoss, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(previousYearData?.profitLoss, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className="text-right">
                      {returnReadableNumber(convertValue(lastYearData?.profitLoss, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.profitLoss,
                          previousYearData?.profitLoss,
                          lastYearData?.profitLoss,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Effective Tax Rate %</td>
                      <td className="text-right">
                        {/* {latestYearData?.totalTaxExpense && latestYearData?.profLossBefTax } */}
                      {latestYearData?.totalTaxExpense && latestYearData?.profLossBefTax ?
                       returnReadableNumber((latestYearData?.totalTaxExpense / latestYearData?.profLossBefTax)*100 , 'en-In', 2, 2,) + '%': ''}
                      </td>
                      <td className="text-right">
                      {previousYearData?.totalTaxExpense && previousYearData?.profLossBefTax ?
                       returnReadableNumber((previousYearData?.totalTaxExpense / previousYearData?.profLossBefTax)*100 , 'en-In', 2, 2,) + '%': ''}
                      </td>
                      <td className="text-right">
                      {lastYearData?.totalTaxExpense && lastYearData?.profLossBefTax ?
                       returnReadableNumber((lastYearData?.totalTaxExpense / lastYearData?.profLossBefTax)*100 , 'en-In', 2, 2,) + '%': ''}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          (latestYearData?.totalTaxExpense / latestYearData?.profLossBefTax)?.toLocaleString() * 100,
                          (previousYearData?.totalTaxExpense / previousYearData?.profLossBefTax)?.toLocaleString() *
                          100,
                          (lastYearData?.totalTaxExpense / lastYearData?.profLossBefTax)?.toLocaleString() * 100,
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
