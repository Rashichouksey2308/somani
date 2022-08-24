/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styles from '../index.module.scss'
import _get from 'lodash/get'
import {checkNan} from '../../../utils/helper'
function Index({ balanceData,rtrnChartIndiaction }) {
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

  const latestYearData = _get(balanceData, 'financial.balanceSheet[0]', {})
  const previousYearData = _get(balanceData, 'financial.balanceSheet[1]', {})
  const lastYearData = _get(balanceData, 'financial.balanceSheet[2]', {})

  // const checkTrend = (latest,previous,last) => {
  //   if(latest>=previous && previous>last){
  //     return 'green'
  //   }
  //   else if(latest>previous)
  // }

  // const rtrnChartIndiaction = (latest, previous, last) => {
  //   if (latest > previous && previous > last) {
  //     return (<img
  //       src="/static/profit.svg"
  //       alt="Profit"
  //       className="img-fluid"
  //     />)
  //   }
  //   else if (latest < previous && previous < last) {
  //     return (
  //       <img
  //         src="/static/loss.svg"
  //         alt="Loss"
  //         className="img-fluid"
  //       />
  //     )
  //   }
  //   else
  //     return (<img
  //       src="/static/average.svg"
  //       alt="Average"
  //       className="img-fluid"
  //     />)

  // }

  return (
    <>
      <div className={`${styles.card} card`}>
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}>
          <h2 className="mb-0">Balance Sheet</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span data-toggle="collapse" data-target="#balanceSheet1"
              aria-expanded="true" aria-controls="balanceSheet1">+</span>
          </div>
        </div>
        <div id="balanceSheet1" className="collapse show" aria-labelledby="balanceSheet1" data-parent="#FinancialsAccordion">
          <div className={`${styles.noBorderTable} ${styles.cardBody} p-0 card-body`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table border_color`} cellPadding="0" cellSpacing="0"
                  border="0">
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
                        {latestYearData?.equityLiabilities?.shareCap?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.equityLiabilities?.shareCap?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.equityLiabilities?.shareCap?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.equityLiabilities?.shareCap, previousYearData?.equityLiabilities?.shareCap, lastYearData?.equityLiabilities?.shareCap)}
                      </td>
                    </tr>
                    <tr>
                      <td>Reserves</td>
                      <td className="text-center">
                        {latestYearData?.equityLiabilities?.otherEquity?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.equityLiabilities?.otherEquity?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.equityLiabilities?.otherEquity?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.equityLiabilities?.otherEquity, previousYearData?.equityLiabilities?.otherEquity, lastYearData?.equityLiabilities?.otherEquity)}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Equity / Net Worth</strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {latestYearData?.equityLiabilities?.totalEquity?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {previousYearData?.equityLiabilities?.totalEquity?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {lastYearData?.equityLiabilities?.totalEquity?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.equityLiabilities?.totalEquity, previousYearData?.equityLiabilities?.totalEquity, lastYearData?.equityLiabilities?.totalEquity)}

                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td>Long Term Borrowings</td>
                      <td className="text-center">
                        {latestYearData?.equityLiabilities?.borrowingsNonCurrent?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.equityLiabilities?.borrowingsNonCurrent?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.equityLiabilities?.borrowingsNonCurrent?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.equityLiabilities?.borrowingsNonCurrent, previousYearData?.equityLiabilities?.borrowingsNonCurrent, lastYearData?.equityLiabilities?.borrowingsNonCurrent)}

                      </td>
                    </tr>
                    <tr>
                      <td>Short Term Borrowings</td>
                      <td className="text-center">
                        {latestYearData?.equityLiabilities?.borrowingsCurrent?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.equityLiabilities?.borrowingsCurrent?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.equityLiabilities?.borrowingsCurrent?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.borrowingsCurrent?.totalEquity, previousYearData?.borrowingsCurrent?.totalEquity, lastYearData?.borrowingsCurrent?.totalEquity)}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Borrowings</strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {checkNan(
                            (latestYearData?.equityLiabilities?.borrowingsCurrent +
                            latestYearData?.equityLiabilities?.borrowingsNonCurrent),true
                            )}
                          
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {checkNan(
                            (previousYearData?.equityLiabilities?.borrowingsCurrent +
                            previousYearData?.equityLiabilities
                              ?.borrowingsNonCurrent),true
                            )}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {checkNan(
                            (lastYearData?.equityLiabilities?.borrowingsCurrent +
                            lastYearData?.equityLiabilities?.borrowingsNonCurrent),true
                            )}
                         
                        </strong>
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.equityLiabilities?.borrowingsCurrent +
                          latestYearData?.equityLiabilities?.borrowingsNonCurrent), (latestYearData?.equityLiabilities?.borrowingsCurrent +
                            latestYearData?.equityLiabilities?.borrowingsNonCurrent), (latestYearData?.equityLiabilities?.borrowingsCurrent +
                              latestYearData?.equityLiabilities?.borrowingsNonCurrent))}

                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td>Creditors</td>
                      <td className="text-center">
                        {
                        checkNan(
                        latestYearData?.equityLiabilities?.tradePay +
                          latestYearData?.equityLiabilities
                            ?.tradePayablesNoncurrent,
                          true,
                        )
                      }
                       
                      </td>
                      <td className="text-center">
                           {
                      checkNan(
                       (previousYearData?.equityLiabilities?.tradePay +
                          previousYearData?.equityLiabilities
                            ?.tradePayablesNoncurrent),
                          true,
                        )
                      }
                    
                      </td>
                      <td className="text-center">
                      {
                      checkNan(
                       (lastYearData?.equityLiabilities?.tradePay +
                          lastYearData?.equityLiabilities?.tradePayablesNoncurrent),
                          true,
                        )
                      }
                      
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.equityLiabilities?.tradePay +
                          latestYearData?.equityLiabilities
                            ?.tradePayablesNoncurrent), (previousYearData?.equityLiabilities?.tradePay +
                              previousYearData?.equityLiabilities
                                ?.tradePayablesNoncurrent), (lastYearData?.equityLiabilities?.tradePay +
                                  lastYearData?.equityLiabilities
                                    ?.tradePayablesNoncurrent))}

                      </td>
                    </tr>
                    <tr>
                      <td>Other Current Liabilities</td>
                      <td className="text-center">
                        {checkNan(
                            (latestYearData?.equityLiabilities?.otherCurrentLiabilities),true
                            )}
                        
                      </td>
                      <td className="text-center">
                        {checkNan(
                            (previousYearData?.equityLiabilities
                            ?.otherCurrentLiabilities),true
                            )}
     
                      </td>
                      <td className="text-center">
                        {checkNan(
                            (lastYearData?.equityLiabilities?.otherCurrentLiabilities),true
                            )}
                        
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.borrowingsCurrent?.totalEquity, previousYearData?.borrowingsCurrent?.totalEquity, lastYearData?.borrowingsCurrent?.totalEquity)}

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
                          {latestYearData?.equityLiabilities?.totalLiabilities?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center border-top">
                        <strong>
                          {previousYearData?.equityLiabilities?.totalLiabilities?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center border-top">
                        <strong>
                          {lastYearData?.equityLiabilities?.totalLiabilities?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center border-top">
                        {rtrnChartIndiaction(latestYearData?.borrowingsCurrent?.totalLiabilities, previousYearData?.borrowingsCurrent?.totalLiabilities, lastYearData?.borrowingsCurrent?.totalLiabilities)}

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table border_color`} cellPadding="0" cellSpacing="0" border="0">
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
                        {latestYearData?.assets?.propertyPlantAndEquipment?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.assets?.propertyPlantAndEquipment?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.assets?.propertyPlantAndEquipment?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.propertyPlantAndEquipment, previousYearData?.assets?.propertyPlantAndEquipment, lastYearData?.assets?.propertyPlantAndEquipment)}

                      </td>
                    </tr>
                    <tr>
                      <td>Net Block (Other Assets)</td>
                      <td className="text-center">
                         {
                      checkNan(
                       (latestYearData?.assets
                          ?.biologicalAssetsOtherThanBearerPlants +
                          latestYearData?.assets?.goodwill +
                          latestYearData?.assets?.intangAsset +
                          latestYearData?.assets?.intangAssetAud +
                          latestYearData?.assets?.investmentProperty),
                          true,
                      )
                      }
                       
                      </td>
                      <td className="text-center">
                          {
                      checkNan(
                       (previousYearData?.assets
                          ?.biologicalAssetsOtherThanBearerPlants +
                          previousYearData?.assets?.goodwill +
                          previousYearData?.assets?.intangAsset +
                          previousYearData?.assets?.intangAssetAud +
                          previousYearData?.assets?.investmentProperty),
                          true,
                      )
                      }
                       
                      </td>
                      <td className="text-center">
                           {
                      checkNan(
                       (lastYearData?.assets
                          ?.biologicalAssetsOtherThanBearerPlants +
                          lastYearData?.assets?.goodwill +
                          lastYearData?.assets?.intangAsset +
                          lastYearData?.assets?.intangAssetAud +
                          lastYearData?.assets?.investmentProperty),
                          true,
                      )
                      }
                     
                      </td>
                      <td className="text-center">

                        {rtrnChartIndiaction((latestYearData?.assets
                          ?.biologicalAssetsOtherThanBearerPlants +
                          latestYearData?.assets?.goodwill +
                          latestYearData?.assets?.intangAsset +
                          latestYearData?.assets?.intangAssetAud +
                          latestYearData?.assets?.investmentProperty), (previousYearData?.assets
                            ?.biologicalAssetsOtherThanBearerPlants +
                            previousYearData?.assets?.goodwill +
                            previousYearData?.assets?.intangAsset +
                            previousYearData?.assets?.intangAssetAud +
                            previousYearData?.assets?.investmentProperty), (lastYearData?.assets
                              ?.biologicalAssetsOtherThanBearerPlants +
                              lastYearData?.assets?.goodwill +
                              lastYearData?.assets?.intangAsset +
                              lastYearData?.assets?.intangAssetAud +
                              lastYearData?.assets?.investmentProperty))}

                      </td>
                    </tr>
                    <tr>
                      <td>CWIP</td>
                      <td className="text-center">
                        {latestYearData?.assets?.capWip?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {previousYearData?.assets?.capWip?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {lastYearData?.assets?.capWip?.toLocaleString()}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.capWip, previousYearData?.assets?.capWip, lastYearData?.assets?.capWip)}

                      </td>
                    </tr>
                    <tr>
                      <td>Investment</td>
                      <td className="text-center">
                              {
                                  checkNan(
                              (latestYearData?.assets?.currInv +
                                  latestYearData?.assets?.nonCurrInv),
                                  true,
                              )
                              }
                       
                      </td>
                      <td className="text-center">
                          {
                          checkNan(
                          (previousYearData?.assets?.currInv +
                          previousYearData?.assets?.nonCurrInv),
                           true,
                            )
                          }
                        
                      </td>
                      <td className="text-center">
                        {
                          checkNan(
                          (lastYearData?.assets?.currInv +
                          lastYearData?.assets?.nonCurrInv),
                           true,
                            )
                          }
                      
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.assets?.currInv +
                          latestYearData?.assets?.nonCurrInv), (previousYearData?.assets?.currInv +
                            previousYearData?.assets?.nonCurrInv), (lastYearData?.assets?.currInv +
                              lastYearData?.assets?.nonCurrInv))}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Non-Current Assets</strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {latestYearData?.assets?.totalNonCurrentAssets?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {previousYearData?.assets?.totalNonCurrentAssets?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {lastYearData?.assets?.totalNonCurrentAssets?.toLocaleString()?.toLocaleString()}
                        </strong>
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.totalNonCurrentAssets, previousYearData?.assets?.totalNonCurrentAssets, lastYearData?.assets?.totalNonCurrentAssets)}

                      </td>
                    </tr>
                    <tr>
                      <td colSpan="5" height="5px"></td>
                    </tr>
                    <tr>
                      <td>Inventories</td>
                      <td className="text-center">{latestYearData?.assets?.inventory?.toLocaleString()}</td>
                      <td className="text-center">{previousYearData?.assets?.inventory?.toLocaleString()}</td>
                      <td className="text-center">{lastYearData?.assets?.inventory?.toLocaleString()}</td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.inventory, previousYearData?.assets?.inventory, lastYearData?.assets?.inventory)}

                      </td>
                    </tr>
                    <tr>
                      <td>Trade Receivables (Debtors)</td>
                      <td className="text-center">
                        {
                          checkNan(
                         (latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent),
                           true,
                            )
                          }
                       
                        
                        </td>
                      <td className="text-center">
                        {
                          checkNan(
                         (previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent),
                           true,
                            )
                          }
                        
                        
                        </td>
                      <td className="text-center">
                         {
                          checkNan(
                         (lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent),
                           true,
                            )
                          }
                        
                        
                        </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent), (previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent), (lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent))}

                      </td>
                    </tr>
                    <tr>
                      <td>Cash &amp; Bank Balance</td>
                      <td className="text-center">
                        {
                          checkNan(
                       (latestYearData?.assets?.cashEqui + latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents),
                           true,
                            )
                          }
                        </td>
                      <td className="text-center">
                         {
                        checkNan(
                       (previousYearData?.assets?.cashEqui + previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents),
                        true,
                        )
                        }
                      </td>
                      <td className="text-center">
                          {
                        checkNan(
                       (lastYearData?.assets?.cashEqui + lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents),
                        true,
                        )
                        }
                        
                        
                        </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.assets?.cashEqui + latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents), (previousYearData?.assets?.cashEqui + previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents), (lastYearData?.assets?.cashEqui + lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents))}

                      </td>
                    </tr>
                    <tr>
                      <td>Loans &amp; Advances</td>
                      <td className="text-center">
                          {
                        checkNan(
                       (latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent),
                        true,
                        )}
                        </td>
                      <td className="text-center">
                          {
                        checkNan(
                       (previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent),
                        true,
                        )}
                        </td>
                      <td className="text-center">
                       { checkNan(
                       (lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent),
                        true,
                        )}
                        </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent), (previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent), (lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent))}

                      </td>
                    </tr>
                    <tr>
                      <td>Other Current Assets</td>
                      <td className="text-center">{latestYearData?.assets?.othCurrAsset?.toLocaleString()}</td>
                      <td className="text-center">{previousYearData?.assets?.othCurrAsset?.toLocaleString()}</td>
                      <td className="text-center">{lastYearData?.assets?.othCurrAsset?.toLocaleString()}</td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.othCurrAsset, previousYearData?.assets?.othCurrAsset, lastYearData?.assets?.othCurrAsset)}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Current Assets</strong>
                      </td>
                      <td className="text-center">{latestYearData?.assets?.totalCurrentAssets?.toLocaleString()}</td>
                      <td className="text-center">{previousYearData?.assets?.totalCurrentAssets?.toLocaleString()}</td>
                      <td className="text-center">{lastYearData?.assets?.totalCurrentAssets?.toLocaleString()}</td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.totalCurrentAssets, previousYearData?.assets?.totalCurrentAssets, lastYearData?.assets?.totalCurrentAssets)}

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
                        <strong>{latestYearData?.assets?.totalAssets?.toLocaleString()}</strong>
                      </td>
                      <td className="text-center border-top">
                        <strong>{previousYearData?.assets?.totalAssets?.toLocaleString()}</strong>
                      </td>
                      <td className="text-center border-top">
                        <strong>{lastYearData?.assets?.totalAssets?.toLocaleString()}</strong>
                      </td>
                      <td className="text-center border-top">
                        {rtrnChartIndiaction(latestYearData?.assets?.totalAssets, previousYearData?.assets?.totalAssets, lastYearData?.assets?.totalAssets)}

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
