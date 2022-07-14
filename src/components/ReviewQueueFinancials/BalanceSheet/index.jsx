/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styles from '../index.module.scss'

function Index({ balanceData }) {
  // console.log(balanceData, 'THIS IS BALANCE ARRAY')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true
    ) {
      // console.log('this')
      setDarkMode(true)
    } else {
      // console.log('this2')
      setDarkMode(false)
    }
  }, [])

  const latestYearData = balanceData?.financial?.balanceSheet[0]

  const previousYearData = balanceData?.financial?.balanceSheet[1]

  const lastYearData = balanceData?.financial?.balanceSheet[1]

  // const checkTrend = (latest,previous,last) => {
  //   if(latest>=previous && previous>last){
  //     return 'green'
  //   }
  //   else if(latest>previous)
  // }

  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
          data-toggle="collapse"
          data-target="#balanceSheet1"
          aria-expanded="true"
          aria-controls="balanceSheet1"
        >
          <h2 className="mb-0">Balance Sheet</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span>+</span>
          </div>
        </div>
        <div
          id="balanceSheet1"
          className="collapse show"
          aria-labelledby="balanceSheet1"
          data-parent="#FinancialsAccordion"
        >
          <div
            className={`${styles.noBorderTable} ${styles.cardBody} card-body`}
          >
            <table
              className={`${styles.table} table border_color`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th width="50%">
                    <h3>Liabilities</h3>
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(latestYearData?.date).format('MMM-YY').toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(previousYearData?.date)
                      .format('MMM-YY')
                      .toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(lastYearData?.date).format('MMM-YY').toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    TREND
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td className="text-center">
                    {latestYearData?.equityLiabilities?.shareCap}
                  </td>
                  <td className="text-center">
                    {previousYearData?.equityLiabilities?.shareCap}
                  </td>
                  <td className="text-center">
                    {lastYearData?.equityLiabilities?.shareCap}
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
                  <td>Reserves</td>
                  <td className="text-center">
                    {latestYearData?.equityLiabilities?.otherEquity}
                  </td>
                  <td className="text-center">
                    {previousYearData?.equityLiabilities?.otherEquity}
                  </td>
                  <td className="text-center">
                    {lastYearData?.equityLiabilities?.otherEquity}
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
                  <td>
                    <strong>Total Equity / Net Worth</strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {latestYearData?.equityLiabilities?.totalEquity}
                    </strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {previousYearData?.equityLiabilities?.totalEquity}
                    </strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {lastYearData?.equityLiabilities?.totalEquity}
                    </strong>
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
                  <td colSpan="5" height="5px"></td>
                </tr>
                <tr>
                  <td>Long Term Borrowings</td>
                  <td className="text-center">
                    {latestYearData?.equityLiabilities?.borrowingsNonCurrent}
                  </td>
                  <td className="text-center">
                    {previousYearData?.equityLiabilities?.borrowingsNonCurrent}
                  </td>
                  <td className="text-center">
                    {lastYearData?.equityLiabilities?.borrowingsNonCurrent}
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
                  <td>Short Term Borrowings</td>
                  <td className="text-center">
                    {latestYearData?.equityLiabilities?.borrowingsCurrent}
                  </td>
                  <td className="text-center">
                    {previousYearData?.equityLiabilities?.borrowingsCurrent}
                  </td>
                  <td className="text-center">
                    {lastYearData?.equityLiabilities?.borrowingsCurrent}
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
                  <td>
                    <strong>Total Borrowings</strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {latestYearData?.equityLiabilities?.borrowingsCurrent +
                        latestYearData?.equityLiabilities?.borrowingsNonCurrent}
                    </strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {previousYearData?.equityLiabilities?.borrowingsCurrent +
                        previousYearData?.equityLiabilities
                          ?.borrowingsNonCurrent}
                    </strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {lastYearData?.equityLiabilities?.borrowingsCurrent +
                        lastYearData?.equityLiabilities?.borrowingsNonCurrent}
                    </strong>
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
                  <td colSpan="5" height="5px"></td>
                </tr>
                <tr>
                  <td>Creditors</td>
                  <td className="text-center">
                    {latestYearData?.equityLiabilities?.tradePay +
                      latestYearData?.equityLiabilities
                        ?.tradePayablesNoncurrent}
                  </td>
                  <td className="text-center">
                    {previousYearData?.equityLiabilities?.tradePay +
                      previousYearData?.equityLiabilities
                        ?.tradePayablesNoncurrent}
                  </td>
                  <td className="text-center">
                    {lastYearData?.equityLiabilities?.tradePay +
                      lastYearData?.equityLiabilities?.tradePayablesNoncurrent}
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
                  <td>Other Current Liabilities</td>
                  <td className="text-center">
                    {latestYearData?.equityLiabilities?.otherCurrentLiabilities}
                  </td>
                  <td className="text-center">
                    {
                      previousYearData?.equityLiabilities
                        ?.otherCurrentLiabilities
                    }
                  </td>
                  <td className="text-center">
                    {lastYearData?.equityLiabilities?.otherCurrentLiabilities}
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
                  <td colSpan="5" height="5px"></td>
                </tr>
                <tr>
                  <td className="border-top">
                    <strong>Total Liabilities</strong>
                  </td>
                  <td className="text-center border-top">
                    <strong>
                      {latestYearData?.equityLiabilities?.totalLiabilities}
                    </strong>
                  </td>
                  <td className="text-center border-top">
                    <strong>
                      {previousYearData?.equityLiabilities?.totalLiabilities}
                    </strong>
                  </td>
                  <td className="text-center border-top">
                    <strong>
                      {lastYearData?.equityLiabilities?.totalLiabilities}
                    </strong>
                  </td>
                  <td className="text-center border-top">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
                      className="img-fluid"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              className={`${styles.table} table border_color`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th width="50%">
                    <h3>Assets</h3>
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(latestYearData?.date).format('MMM-YY').toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(previousYearData?.date)
                      .format('MMM-YY')
                      .toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    {moment(lastYearData?.date).format('MMM-YY').toUpperCase()}
                  </th>
                  <th className="text-center" width="12.5%">
                    TREND
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Net Block (Land, Building, Plant &amp; Machinery)</td>
                  <td className="text-center">
                    {latestYearData?.assets?.propertyPlantAndEquipment}
                  </td>
                  <td className="text-center">
                    {previousYearData?.assets?.propertyPlantAndEquipment}
                  </td>
                  <td className="text-center">
                    {lastYearData?.assets?.propertyPlantAndEquipment}
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
                  <td>Net Block (Other Assets)</td>
                  <td className="text-center">
                    {latestYearData?.assets
                      ?.biologicalAssetsOtherThanBearerPlants +
                      latestYearData?.assets?.goodwill +
                      latestYearData?.assets?.intangAsset +
                      latestYearData?.assets?.intangAssetAud +
                      latestYearData?.assets?.investmentProperty}
                  </td>
                  <td className="text-center">
                    {previousYearData?.assets
                      ?.biologicalAssetsOtherThanBearerPlants +
                      previousYearData?.assets?.goodwill +
                      previousYearData?.assets?.intangAsset +
                      previousYearData?.assets?.intangAssetAud +
                      previousYearData?.assets?.investmentProperty}
                  </td>
                  <td className="text-center">
                    {lastYearData?.assets
                      ?.biologicalAssetsOtherThanBearerPlants +
                      lastYearData?.assets?.goodwill +
                      lastYearData?.assets?.intangAsset +
                      lastYearData?.assets?.intangAssetAud +
                      lastYearData?.assets?.investmentProperty}
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
                  <td>CWIP</td>
                  <td className="text-center">
                    {latestYearData?.assets?.capWip}
                  </td>
                  <td className="text-center">
                    {previousYearData?.assets?.capWip}
                  </td>
                  <td className="text-center">
                    {lastYearData?.assets?.capWip}
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
                  <td>Investment</td>
                  <td className="text-center">
                    {latestYearData?.assets?.currInv +
                      latestYearData?.assets?.nonCurrInv}
                  </td>
                  <td className="text-center">
                    {previousYearData?.assets?.currInv +
                      previousYearData?.assets?.nonCurrInv}
                  </td>
                  <td className="text-center">
                    {lastYearData?.assets?.currInv +
                      lastYearData?.assets?.nonCurrInv}
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
                  <td>
                    <strong>Total Non-Current Assets</strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {latestYearData?.assets?.totalNonCurrentAssets}
                    </strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {previousYearData?.assets?.totalNonCurrentAssets}
                    </strong>
                  </td>
                  <td className="text-center">
                    <strong>
                      {lastYearData?.assets?.totalNonCurrentAssets}
                    </strong>
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
                  <td colSpan="5" height="5px"></td>
                </tr>
                <tr>
                  <td>Inventories</td>
                  <td className="text-center">{latestYearData?.assets?.inventory}</td>
                  <td className="text-center">{previousYearData?.assets?.inventory}</td>
                  <td className="text-center">{lastYearData?.assets?.inventory}</td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Trade Receivables (Debtors)</td>
                  <td className="text-center">{latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent }</td>
                  <td className="text-center">{previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent }</td>
                  <td className="text-center">{lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent }</td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cash & Bank Balance</td>
                  <td className="text-center">{latestYearData?.assets?.cashEqui  + latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents }</td>
                  <td className="text-center">{previousYearData?.assets?.cashEqui  + previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents }</td>
                  <td className="text-center">{lastYearData?.assets?.cashEqui  + lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents }</td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Loans & Advances</td>
                  <td className="text-center">{latestYearData?.assets?.loansCurrent   + latestYearData?.assets?.loansNonCurrent }</td>
                  <td className="text-center">{previousYearData?.assets?.loansCurrent   + previousYearData?.assets?.loansNonCurrent }</td>
                  <td className="text-center">{lastYearData?.assets?.loansCurrent   + lastYearData?.assets?.loansNonCurrent }</td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Other Current Assets</td>
                  <td className="text-center">{latestYearData?.assets?.othCurrAsset}</td>
                  <td className="text-center">{previousYearData?.assets?.othCurrAsset}</td>
                  <td className="text-center">{lastYearData?.assets?.othCurrAsset}</td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Current Assets</strong>
                  </td>
                  <td className="text-center">{latestYearData?.assets?.totalCurrentAssets}</td>
                  <td className="text-center">{previousYearData?.assets?.totalCurrentAssets}</td>
                  <td className="text-center">{lastYearData?.assets?.totalCurrentAssets}</td>
                  <td className="text-center">
                    <img
                      src="/static/loss.svg"
                      alt="Loss"
                      className="img-fluid"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" height="5px"></td>
                </tr>
                <tr>
                  <td className="border-top">
                    <strong>Total Assets</strong>
                  </td>
                  <td className="text-center border-top">
                    <strong>{latestYearData?.assets?.totalAssets}</strong>
                  </td>
                  <td className="text-center border-top">
                    <strong>{previousYearData?.assets?.totalAssets}</strong>
                  </td>
                  <td className="text-center border-top">
                    <strong>{lastYearData?.assets?.totalAssets}</strong>
                  </td>
                  <td className="text-center border-top">
                    <img
                      src="/static/profit.svg"
                      alt="Profit"
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
