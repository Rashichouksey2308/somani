/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import moment from 'moment';
import styles from '../index.module.scss';
import _get from 'lodash/get';
import { convertValue } from '@/utils/helper';
import { returnReadableNumber } from '@/utils/helpers/global';

function Index({ balanceData, rtrnChartIndiaction, returnDataPeriodAndColour }) {

  const [unit, setUnit] = useState(10000000);
  const latestYearData = _get(balanceData, 'financial.balanceSheet[0]', {});
  const previousYearData = _get(balanceData, 'financial.balanceSheet[1]', {});
  const lastYearData = _get(balanceData, 'financial.balanceSheet[2]', {});

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
        >
          <h2 className="mb-0">Balance Sheet</h2>
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
              data-target="#balanceSheet1"
              aria-expanded="true"
              aria-controls="balanceSheet1"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="balanceSheet1"
          className="collapse show"
          aria-labelledby="balanceSheet1"
          data-parent="#FinancialsAccordion"
        >
          <div className={`${styles.noBorderTable} ${styles.cardBody} p-0 card-body`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table border_color`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th width="50%">
                        <h3 className="text-color">Liabilities</h3>
                      </th>
                      <th
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(latestYearData?.date).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(latestYearData?.date, 0).date}
                      </th>
                      <th
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(previousYearData?.date).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(previousYearData?.date, 1).date}
                      </th>
                      <th
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(lastYearData?.date).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(lastYearData?.date, 2).date}
                      </th>
                      <th className="text-center" width="12.5%">
                        TREND
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Capital</td>
                      <td>
                        {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.shareCap, unit), 'en-In', 2, 2,)}
                      </td>
                      <td>
                        {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.shareCap, unit), 'en-In', 2, 2,)}
                      </td>
                      <td>
                        {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.shareCap, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.shareCap,
                          previousYearData?.equityLiabilities?.shareCap,
                          lastYearData?.equityLiabilities?.shareCap,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Reserves</td>
                      <td>
                        {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.otherEquity, unit), 'en-In', 2, 2,)}
                      </td>
                      <td>
                        {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.otherEquity, unit), 'en-In', 2, 2,)}
                      </td>
                      <td>
                        {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.otherEquity, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.otherEquity,
                          previousYearData?.equityLiabilities?.otherEquity,
                          lastYearData?.equityLiabilities?.otherEquity,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Equity / Net Worth</strong>
                      </td>
                      <td>
                        <strong>
                          {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.totalEquity, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td>
                        <strong>
                          {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.totalEquity, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td>
                        <strong>
                          {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.totalEquity, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.totalEquity,
                          previousYearData?.equityLiabilities?.totalEquity,
                          lastYearData?.equityLiabilities?.totalEquity,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td>Long Term Borrowings</td>
                      <td>
                        {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.borrowingsNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.borrowingsNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.borrowingsNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.borrowingsNonCurrent,
                          previousYearData?.equityLiabilities?.borrowingsNonCurrent,
                          lastYearData?.equityLiabilities?.borrowingsNonCurrent,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Short Term Borrowings</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.borrowingsCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.borrowingsCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.borrowingsCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.borrowingsCurrent,
                          previousYearData?.equityLiabilities?.borrowingsCurrent,
                          lastYearData?.equityLiabilities?.borrowingsCurrent,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Borrowings</strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.borrowingsCurrent +
                            latestYearData?.equityLiabilities?.borrowingsNonCurrent, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.borrowingsCurrent +
                            previousYearData?.equityLiabilities?.borrowingsNonCurrent, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.borrowingsCurrent +
                            lastYearData?.equityLiabilities?.borrowingsNonCurrent, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.borrowingsCurrent +
                          latestYearData?.equityLiabilities?.borrowingsNonCurrent,
                          previousYearData?.equityLiabilities?.borrowingsCurrent +
                          previousYearData?.equityLiabilities?.borrowingsNonCurrent,
                          lastYearData?.equityLiabilities?.borrowingsCurrent +
                          lastYearData?.equityLiabilities?.borrowingsNonCurrent,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td>Creditors</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.tradePay +
                          latestYearData?.equityLiabilities?.tradePayablesNoncurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.tradePay +
                          previousYearData?.equityLiabilities?.tradePayablesNoncurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.tradePay +
                          lastYearData?.equityLiabilities?.tradePayablesNoncurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.tradePay +
                          latestYearData?.equityLiabilities?.tradePayablesNoncurrent,
                          previousYearData?.equityLiabilities?.tradePay +
                          previousYearData?.equityLiabilities?.tradePayablesNoncurrent,
                          lastYearData?.equityLiabilities?.tradePay +
                          lastYearData?.equityLiabilities?.tradePayablesNoncurrent,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Other Current Liabilities</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.totalEl -
                          (latestYearData?.equityLiabilities?.totalEquity +
                            latestYearData?.equityLiabilities?.borrowingsNonCurrent +
                            latestYearData?.equityLiabilities?.borrowingsCurrent +
                            latestYearData?.equityLiabilities?.tradePay +
                            latestYearData?.equityLiabilities?.tradePayablesNoncurrent), unit), 'en-In', 2, 2,)}
                      </td>
                      <td >

                        {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.totalEl -
                          (previousYearData?.equityLiabilities?.totalEquity +
                            previousYearData?.equityLiabilities?.borrowingsNonCurrent +
                            previousYearData?.equityLiabilities?.borrowingsCurrent +
                            previousYearData?.equityLiabilities?.tradePay +
                            previousYearData?.equityLiabilities?.tradePayablesNoncurrent), unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.totalEl -
                          (lastYearData?.equityLiabilities?.totalEquity +
                            lastYearData?.equityLiabilities?.borrowingsNonCurrent +
                            lastYearData?.equityLiabilities?.borrowingsCurrent +
                            lastYearData?.equityLiabilities?.tradePay +
                            lastYearData?.equityLiabilities?.tradePayablesNoncurrent), unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.totalEl -
                          (latestYearData?.equityLiabilities?.totalEquity +
                            latestYearData?.equityLiabilities?.borrowingsNonCurrent +
                            latestYearData?.equityLiabilities?.borrowingsCurrent +
                            latestYearData?.equityLiabilities?.tradePay +
                            latestYearData?.equityLiabilities?.tradePayablesNoncurrent),
                          previousYearData?.equityLiabilities?.totalEl -
                          (previousYearData?.equityLiabilities?.totalEquity +
                            previousYearData?.equityLiabilities?.borrowingsNonCurrent +
                            previousYearData?.equityLiabilities?.borrowingsCurrent +
                            previousYearData?.equityLiabilities?.tradePay +
                            previousYearData?.equityLiabilities?.tradePayablesNoncurrent),
                          lastYearData?.equityLiabilities?.totalEl -
                          (lastYearData?.equityLiabilities?.totalEquity +
                            lastYearData?.equityLiabilities?.borrowingsNonCurrent +
                            lastYearData?.equityLiabilities?.borrowingsCurrent +
                            lastYearData?.equityLiabilities?.tradePay +
                            lastYearData?.equityLiabilities?.tradePayablesNoncurrent),
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="0">
                        <hr className="m-0 border_color" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Liabilities</strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(latestYearData?.equityLiabilities?.totalEl, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(previousYearData?.equityLiabilities?.totalEl, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(lastYearData?.equityLiabilities?.totalEl, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.equityLiabilities?.totalEl,
                          previousYearData?.equityLiabilities?.totalEl,
                          lastYearData?.equityLiabilities?.totalEl,
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr className="border_color m-0" style={{ borderWidth: '2px' }} />
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table border_color`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th width="50%">
                        <h3 className="text-color">Assets</h3>
                      </th>
                      <th
                        
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(latestYearData?.date).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(latestYearData?.date, 0).date}
                      </th>
                      <th
                        
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(previousYearData?.date).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(previousYearData?.date, 1).date}
                      </th>
                      <th
                        
                        width="12.5%"
                        style={{
                          color: `${returnDataPeriodAndColour(lastYearData?.date).colour}`,
                        }}
                      >
                        {returnDataPeriodAndColour(lastYearData?.date, 2).date}
                      </th>
                      <th className="text-center" width="12.5%">
                        TREND
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Net Block (Land, Building, Plant &amp; Machinery)</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.propertyPlantAndEquipment, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.propertyPlantAndEquipment, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.propertyPlantAndEquipment, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.propertyPlantAndEquipment,
                          previousYearData?.assets?.propertyPlantAndEquipment,
                          lastYearData?.assets?.propertyPlantAndEquipment,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Net Block (Other Assets)</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                          latestYearData?.assets?.goodwill +
                          latestYearData?.assets?.intangAsset +
                          latestYearData?.assets?.intangAssetAud +
                          latestYearData?.assets?.investmentProperty, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                          previousYearData?.assets?.goodwill +
                          previousYearData?.assets?.intangAsset +
                          previousYearData?.assets?.intangAssetAud +
                          previousYearData?.assets?.investmentProperty, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                          lastYearData?.assets?.goodwill +
                          lastYearData?.assets?.intangAsset +
                          lastYearData?.assets?.intangAssetAud +
                          lastYearData?.assets?.investmentProperty, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                          latestYearData?.assets?.goodwill +
                          latestYearData?.assets?.intangAsset +
                          latestYearData?.assets?.intangAssetAud +
                          latestYearData?.assets?.investmentProperty,
                          previousYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                          previousYearData?.assets?.goodwill +
                          previousYearData?.assets?.intangAsset +
                          previousYearData?.assets?.intangAssetAud +
                          previousYearData?.assets?.investmentProperty,
                          lastYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                          lastYearData?.assets?.goodwill +
                          lastYearData?.assets?.intangAsset +
                          lastYearData?.assets?.intangAssetAud +
                          lastYearData?.assets?.investmentProperty,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>CWIP</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.capWip, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.capWip, unit), 'en-In', 2, 2,)}

                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.capWip, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.capWip,
                          previousYearData?.assets?.capWip,
                          lastYearData?.assets?.capWip,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Investment</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.currInv + latestYearData?.assets?.nonCurrInv, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.currInv + previousYearData?.assets?.nonCurrInv, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-right`}>
                        {returnReadableNumber(convertValue(lastYearData?.assets?.currInv + lastYearData?.assets?.nonCurrInv, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.currInv + latestYearData?.assets?.nonCurrInv,
                          previousYearData?.assets?.currInv + previousYearData?.assets?.nonCurrInv,
                          lastYearData?.assets?.currInv + lastYearData?.assets?.nonCurrInv,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Non-Current Assets</strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(latestYearData?.assets?.propertyPlantAndEquipment +
                            (latestYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                              latestYearData?.assets?.goodwill +
                              latestYearData?.assets?.intangAsset +
                              latestYearData?.assets?.intangAssetAud +
                              latestYearData?.assets?.investmentProperty) +
                            latestYearData?.assets?.capWip +
                            (latestYearData?.assets?.currInv + latestYearData?.assets?.nonCurrInv), unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(previousYearData?.assets?.propertyPlantAndEquipment +
                            (previousYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                              previousYearData?.assets?.goodwill +
                              previousYearData?.assets?.intangAsset +
                              previousYearData?.assets?.intangAssetAud +
                              previousYearData?.assets?.investmentProperty) +
                            previousYearData?.assets?.capWip +
                            (previousYearData?.assets?.currInv + previousYearData?.assets?.nonCurrInv), unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(lastYearData?.assets?.propertyPlantAndEquipment +
                            (lastYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                              lastYearData?.assets?.goodwill +
                              lastYearData?.assets?.intangAsset +
                              lastYearData?.assets?.intangAssetAud +
                              lastYearData?.assets?.investmentProperty) +
                            lastYearData?.assets?.capWip +
                            (lastYearData?.assets?.currInv + lastYearData?.assets?.nonCurrInv), unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.propertyPlantAndEquipment +
                          (latestYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                            latestYearData?.assets?.goodwill +
                            latestYearData?.assets?.intangAsset +
                            latestYearData?.assets?.intangAssetAud +
                            latestYearData?.assets?.investmentProperty) +
                          latestYearData?.assets?.capWip +
                          (latestYearData?.assets?.currInv + latestYearData?.assets?.nonCurrInv),
                          previousYearData?.assets?.propertyPlantAndEquipment +
                          (previousYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                            previousYearData?.assets?.goodwill +
                            previousYearData?.assets?.intangAsset +
                            previousYearData?.assets?.intangAssetAud +
                            previousYearData?.assets?.investmentProperty) +
                          previousYearData?.assets?.capWip +
                          (previousYearData?.assets?.currInv + previousYearData?.assets?.nonCurrInv),
                          lastYearData?.assets?.propertyPlantAndEquipment +
                          (lastYearData?.assets?.biologicalAssetsOtherThanBearerPlants +
                            lastYearData?.assets?.goodwill +
                            lastYearData?.assets?.intangAsset +
                            lastYearData?.assets?.intangAssetAud +
                            lastYearData?.assets?.investmentProperty) +
                          lastYearData?.assets?.capWip +
                          (lastYearData?.assets?.currInv + lastYearData?.assets?.nonCurrInv),
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td>Inventories</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.inventory, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.inventory, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.inventory, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.inventory,
                          previousYearData?.assets?.inventory,
                          lastYearData?.assets?.inventory,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Trade Receivables (Debtors)</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent,
                          previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent,
                          lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Cash &amp; Bank Balance</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.cashEqui + latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.cashEqui + previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.cashEqui + lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.cashEqui +
                          latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents,
                          previousYearData?.assets?.cashEqui +
                          previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents,
                          lastYearData?.assets?.cashEqui +
                          lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Loans &amp; Advances</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent,
                          previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent,
                          lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Other Current Assets</td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.othCurrAsset, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.othCurrAsset, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.othCurrAsset, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.othCurrAsset,
                          previousYearData?.assets?.othCurrAsset,
                          lastYearData?.assets?.othCurrAsset,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Current Assets</strong>
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(latestYearData?.assets?.inventory +
                          (latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent) +
                          (latestYearData?.assets?.cashEqui +
                            latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents) +
                          (latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent) +
                          latestYearData?.assets?.othCurrAsset, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(previousYearData?.assets?.inventory +
                          (previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent) +
                          (previousYearData?.assets?.cashEqui +
                            previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents) +
                          (previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent) +
                          previousYearData?.assets?.othCurrAsset, unit), 'en-In', 2, 2,)}
                      </td>
                      <td >
                        {returnReadableNumber(convertValue(lastYearData?.assets?.inventory +
                          (lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent) +
                          (lastYearData?.assets?.cashEqui +
                            lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents) +
                          (lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent) +
                          lastYearData?.assets?.othCurrAsset, unit), 'en-In', 2, 2,)}
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.inventory +
                          (latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent) +
                          (latestYearData?.assets?.cashEqui +
                            latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents) +
                          (latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent) +
                          latestYearData?.assets?.othCurrAsset,
                          previousYearData?.assets?.inventory +
                          (previousYearData?.assets?.tradeRec +
                            previousYearData?.assets?.tradeReceivablesNonCurrent) +
                          (previousYearData?.assets?.cashEqui +
                            previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents) +
                          (previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent) +
                          previousYearData?.assets?.othCurrAsset,
                          lastYearData?.assets?.inventory +
                          (lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent) +
                          (lastYearData?.assets?.cashEqui +
                            lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents) +
                          (lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent) +
                          lastYearData?.assets?.othCurrAsset,
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="0">
                        <hr className="m-0 border_color" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Assets</strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(latestYearData?.assets?.totalAssets, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(previousYearData?.assets?.totalAssets, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td >
                        <strong>
                          {returnReadableNumber(convertValue(lastYearData?.assets?.totalAssets, unit), 'en-In', 2, 2,)}
                        </strong>
                      </td>
                      <td className={`${styles.trend} text-center`}>
                        {rtrnChartIndiaction(
                          latestYearData?.assets?.totalAssets,
                          previousYearData?.assets?.totalAssets,
                          lastYearData?.assets?.totalAssets,
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
