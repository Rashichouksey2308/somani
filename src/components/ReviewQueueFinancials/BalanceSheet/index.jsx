/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styles from '../index.module.scss'
import _get from 'lodash/get'
import { checkNan, convertValue } from '../../../utils/helper'
function Index({ balanceData, rtrnChartIndiaction }) {
  // console.log(balanceData, 'THIS IS BALANCE ARRAY')

  const [darkMode, setDarkMode] = useState(false)
  const [unit, setUnit] = useState(10000000)

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
            <select onChange={(e) => setUnit(e.target.value)} className={`${styles.options} accordion_DropDown`}>
              <option value={10000000}>Crores</option>
              <option value={100000}>Lakhs</option>
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
                        <h3 className="text-color">Liabilities</h3>
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
                        {convertValue(latestYearData?.equityLiabilities?.shareCap, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.equityLiabilities?.shareCap?.toLocaleString()} */}
                        {convertValue(previousYearData?.equityLiabilities?.shareCap, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.equityLiabilities?.shareCap?.toLocaleString()} */}
                        {convertValue(lastYearData?.equityLiabilities?.shareCap, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.equityLiabilities?.shareCap, previousYearData?.equityLiabilities?.shareCap, lastYearData?.equityLiabilities?.shareCap)}
                      </td>
                    </tr>
                    <tr>
                      <td>Reserves</td>
                      <td className="text-center">
                        {/* {latestYearData?.equityLiabilities?.otherEquity?.toLocaleString()} */}
                        {convertValue(latestYearData?.equityLiabilities?.otherEquity, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.equityLiabilities?.otherEquity?.toLocaleString()} */}
                        {convertValue(previousYearData?.equityLiabilities?.otherEquity, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.equityLiabilities?.otherEquity?.toLocaleString()} */}
                        {convertValue(lastYearData?.equityLiabilities?.otherEquity, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
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
                          {/* {latestYearData?.equityLiabilities?.totalEquity?.toLocaleString()} */}
                          {convertValue(latestYearData?.equityLiabilities?.totalEquity, unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {previousYearData?.equityLiabilities?.totalEquity?.toLocaleString()} */}
                          {convertValue(previousYearData?.equityLiabilities?.totalEquity, unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {lastYearData?.equityLiabilities?.totalEquity?.toLocaleString()} */}
                          {convertValue(lastYearData?.equityLiabilities?.totalEquity, unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
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
                        {/* {latestYearData?.equityLiabilities?.borrowingsNonCurrent?.toLocaleString()} */}
                        {convertValue(latestYearData?.equityLiabilities?.borrowingsNonCurrent, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.equityLiabilities?.borrowingsNonCurrent?.toLocaleString()} */}
                        {convertValue(previousYearData?.equityLiabilities?.borrowingsNonCurrent, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.equityLiabilities?.borrowingsNonCurrent?.toLocaleString()} */}
                        {convertValue(lastYearData?.equityLiabilities?.borrowingsNonCurrent, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.equityLiabilities?.borrowingsNonCurrent, previousYearData?.equityLiabilities?.borrowingsNonCurrent, lastYearData?.equityLiabilities?.borrowingsNonCurrent)}

                      </td>
                    </tr>
                    <tr>
                      <td>Short Term Borrowings</td>
                      <td className="text-center">
                        {/* {latestYearData?.equityLiabilities?.borrowingsCurrent?.toLocaleString()} */}
                        {convertValue(latestYearData?.equityLiabilities?.borrowingsCurrent, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.equityLiabilities?.borrowingsCurrent?.toLocaleString()} */}
                        {convertValue(previousYearData?.equityLiabilities?.borrowingsCurrent, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.equityLiabilities?.borrowingsCurrent?.toLocaleString()} */}
                        {convertValue(lastYearData?.equityLiabilities?.borrowingsCurrent, unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
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
                          {/* {checkNan(
                            (latestYearData?.equityLiabilities?.borrowingsCurrent +
                              latestYearData?.equityLiabilities?.borrowingsNonCurrent), true
                          )} */}
                          {convertValue((latestYearData?.equityLiabilities?.borrowingsCurrent +
                            latestYearData?.equityLiabilities?.borrowingsNonCurrent), unit)?.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}

                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {checkNan(
                            (previousYearData?.equityLiabilities?.borrowingsCurrent +
                              previousYearData?.equityLiabilities
                                ?.borrowingsNonCurrent), true
                          )} */}
                          {convertValue((previousYearData?.equityLiabilities?.borrowingsCurrent +
                            previousYearData?.equityLiabilities
                              ?.borrowingsNonCurrent), unit)?.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                              })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {checkNan(
                            (lastYearData?.equityLiabilities?.borrowingsCurrent +
                              lastYearData?.equityLiabilities?.borrowingsNonCurrent), true
                          )} */}

                          {convertValue((lastYearData?.equityLiabilities?.borrowingsCurrent +
                            lastYearData?.equityLiabilities?.borrowingsNonCurrent), unit)?.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}


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
                        {/* {
                          checkNan(
                            latestYearData?.equityLiabilities?.tradePay +
                            latestYearData?.equityLiabilities
                              ?.tradePayablesNoncurrent,
                            true,
                          )
                        } */}

                        {convertValue((latestYearData?.equityLiabilities?.tradePay +
                          latestYearData?.equityLiabilities
                            ?.tradePayablesNoncurrent), unit)?.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}

                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (previousYearData?.equityLiabilities?.tradePay +
                              previousYearData?.equityLiabilities
                                ?.tradePayablesNoncurrent),
                            true,
                          )
                        } */}
                        {convertValue((previousYearData?.equityLiabilities?.tradePay +
                          previousYearData?.equityLiabilities
                            ?.tradePayablesNoncurrent), unit)?.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}

                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (lastYearData?.equityLiabilities?.tradePay +
                              lastYearData?.equityLiabilities?.tradePayablesNoncurrent),
                            true,
                          )
                        } */}
                        {convertValue((lastYearData?.equityLiabilities?.tradePay +
                          lastYearData?.equityLiabilities?.tradePayablesNoncurrent), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}

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
                        {/* {checkNan(
                          (latestYearData?.equityLiabilities?.otherCurrentLiabilities), true
                        )} */}
                        {convertValue((latestYearData?.equityLiabilities?.otherCurrentLiabilities), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (previousYearData?.equityLiabilities
                            ?.otherCurrentLiabilities), true
                        )} */}
                        {convertValue((previousYearData?.equityLiabilities
                          ?.otherCurrentLiabilities), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}

                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (lastYearData?.equityLiabilities?.otherCurrentLiabilities), true
                        )} */}
                        {convertValue((lastYearData?.equityLiabilities?.otherCurrentLiabilities), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

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
                          {/* {latestYearData?.equityLiabilities?.totalLiabilities?.toLocaleString()} */}
                          {convertValue((latestYearData?.equityLiabilities?.totalLiabilities), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </td>
                      <td className="text-center border-top">
                        <strong>
                          {/* {previousYearData?.equityLiabilities?.totalLiabilities?.toLocaleString()} */}
                          {convertValue((previousYearData?.equityLiabilities?.totalLiabilities), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </td>
                      <td className="text-center border-top">
                        <strong>
                          {/* {lastYearData?.equityLiabilities?.totalLiabilities?.toLocaleString()} */}
                          {convertValue((lastYearData?.equityLiabilities?.totalLiabilities), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
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
                        <h3 className="text-color">Assets</h3>
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
                        {/* {latestYearData?.assets?.propertyPlantAndEquipment?.toLocaleString()} */}
                        {convertValue((latestYearData?.assets?.propertyPlantAndEquipment), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.assets?.propertyPlantAndEquipment?.toLocaleString()} */}
                        {convertValue((previousYearData?.assets?.propertyPlantAndEquipment), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.assets?.propertyPlantAndEquipment?.toLocaleString()} */}
                        {convertValue((lastYearData?.assets?.propertyPlantAndEquipment), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.propertyPlantAndEquipment, previousYearData?.assets?.propertyPlantAndEquipment, lastYearData?.assets?.propertyPlantAndEquipment)}

                      </td>
                    </tr>
                    <tr>
                      <td>Net Block (Other Assets)</td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (latestYearData?.assets
                              ?.biologicalAssetsOtherThanBearerPlants +
                              latestYearData?.assets?.goodwill +
                              latestYearData?.assets?.intangAsset +
                              latestYearData?.assets?.intangAssetAud +
                              latestYearData?.assets?.investmentProperty),
                            true,
                          )
                        } */}
                        {convertValue((latestYearData?.assets
                          ?.biologicalAssetsOtherThanBearerPlants +
                          latestYearData?.assets?.goodwill +
                          latestYearData?.assets?.intangAsset +
                          latestYearData?.assets?.intangAssetAud +
                          latestYearData?.assets?.investmentProperty), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}

                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (previousYearData?.assets
                              ?.biologicalAssetsOtherThanBearerPlants +
                              previousYearData?.assets?.goodwill +
                              previousYearData?.assets?.intangAsset +
                              previousYearData?.assets?.intangAssetAud +
                              previousYearData?.assets?.investmentProperty),
                            true,
                          )
                        } */}
                        {convertValue((previousYearData?.assets
                          ?.biologicalAssetsOtherThanBearerPlants +
                          previousYearData?.assets?.goodwill +
                          previousYearData?.assets?.intangAsset +
                          previousYearData?.assets?.intangAssetAud +
                          previousYearData?.assets?.investmentProperty), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}

                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (lastYearData?.assets
                              ?.biologicalAssetsOtherThanBearerPlants +
                              lastYearData?.assets?.goodwill +
                              lastYearData?.assets?.intangAsset +
                              lastYearData?.assets?.intangAssetAud +
                              lastYearData?.assets?.investmentProperty),
                            true,
                          )
                        } */}
                        {convertValue((lastYearData?.assets
                          ?.biologicalAssetsOtherThanBearerPlants +
                          lastYearData?.assets?.goodwill +
                          lastYearData?.assets?.intangAsset +
                          lastYearData?.assets?.intangAssetAud +
                          lastYearData?.assets?.investmentProperty), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}

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
                        {/* {latestYearData?.assets?.capWip?.toLocaleString()} */}
                        {convertValue((latestYearData?.assets?.capWip), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.assets?.capWip?.toLocaleString()} */}
                        {convertValue((previousYearData?.assets?.capWip), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.assets?.capWip?.toLocaleString()} */}
                        {convertValue((lastYearData?.assets?.capWip), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.capWip, previousYearData?.assets?.capWip, lastYearData?.assets?.capWip)}

                      </td>
                    </tr>
                    <tr>
                      <td>Investment</td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (latestYearData?.assets?.currInv +
                              latestYearData?.assets?.nonCurrInv),
                            true,
                          )
                        } */}
                        {convertValue((latestYearData?.assets?.currInv +
                          latestYearData?.assets?.nonCurrInv), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}

                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (previousYearData?.assets?.currInv +
                              previousYearData?.assets?.nonCurrInv),
                            true,
                          )
                        } */}
                        {convertValue((previousYearData?.assets?.currInv +
                          previousYearData?.assets?.nonCurrInv), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}

                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (lastYearData?.assets?.currInv +
                              lastYearData?.assets?.nonCurrInv),
                            true,
                          )
                        } */}
                        {convertValue((lastYearData?.assets?.currInv +
                          lastYearData?.assets?.nonCurrInv), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}

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
                          {/* {latestYearData?.assets?.totalNonCurrentAssets?.toLocaleString()} */}
                          {convertValue((latestYearData?.assets?.totalNonCurrentAssets), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {previousYearData?.assets?.totalNonCurrentAssets?.toLocaleString()} */}
                          {convertValue((previousYearData?.assets?.totalNonCurrentAssets), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </td>
                      <td className="text-center">
                        <strong>
                          {/* {lastYearData?.assets?.totalNonCurrentAssets?.toLocaleString()?.toLocaleString()} */}
                          {convertValue((lastYearData?.assets?.totalNonCurrentAssets), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
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
                      <td className="text-center">
                        {convertValue((latestYearData?.assets?.inventory), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                        {/* {latestYearData?.assets?.inventory?.toLocaleString()} */}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.assets?.inventory?.toLocaleString()} */}
                        {convertValue((previousYearData?.assets?.inventory), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.assets?.inventory?.toLocaleString()} */}
                        {convertValue((lastYearData?.assets?.inventory), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.inventory, previousYearData?.assets?.inventory, lastYearData?.assets?.inventory)}

                      </td>
                    </tr>
                    <tr>
                      <td>Trade Receivables (Debtors)</td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent),
                            true,
                          )
                        } */}
                        {convertValue((latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}


                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent),
                            true,
                          )
                        } */}
                        {convertValue((previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}


                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent),
                            true,
                          )
                        } */}
                        {convertValue((lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}


                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.assets?.tradeRec + latestYearData?.assets?.tradeReceivablesNonCurrent), (previousYearData?.assets?.tradeRec + previousYearData?.assets?.tradeReceivablesNonCurrent), (lastYearData?.assets?.tradeRec + lastYearData?.assets?.tradeReceivablesNonCurrent))}

                      </td>
                    </tr>
                    <tr>
                      <td>Cash &amp; Bank Balance</td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (latestYearData?.assets?.cashEqui + latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents),
                            true,
                          )
                        } */}
                        {convertValue((latestYearData?.assets?.cashEqui + latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (previousYearData?.assets?.cashEqui + previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents),
                            true,
                          )
                        } */}
                        {convertValue((previousYearData?.assets?.cashEqui + previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (lastYearData?.assets?.cashEqui + lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents),
                            true,
                          )
                        } */}
                        {convertValue((lastYearData?.assets?.cashEqui + lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}


                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.assets?.cashEqui + latestYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents), (previousYearData?.assets?.cashEqui + previousYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents), (lastYearData?.assets?.cashEqui + lastYearData?.assets?.bankBalanceOtherThanCashAndCashEquivalents))}

                      </td>
                    </tr>
                    <tr>
                      <td>Loans &amp; Advances</td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent),
                            true,
                          )} */}
                        {convertValue((latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {/* {
                          checkNan(
                            (previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent),
                            true,
                          )} */}
                        {convertValue((previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {/* {checkNan(
                          (lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent),
                          true,
                        )} */}
                        {convertValue((lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction((latestYearData?.assets?.loansCurrent + latestYearData?.assets?.loansNonCurrent), (previousYearData?.assets?.loansCurrent + previousYearData?.assets?.loansNonCurrent), (lastYearData?.assets?.loansCurrent + lastYearData?.assets?.loansNonCurrent))}

                      </td>
                    </tr>
                    <tr>
                      <td>Other Current Assets</td>
                      <td className="text-center">
                        {/* {latestYearData?.assets?.othCurrAsset?.toLocaleString()} */}
                        {convertValue((latestYearData?.assets?.othCurrAsset), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.assets?.othCurrAsset?.toLocaleString()} */}
                        {convertValue((previousYearData?.assets?.othCurrAsset), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.assets?.othCurrAsset?.toLocaleString()} */}
                        {convertValue((lastYearData?.assets?.othCurrAsset), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {rtrnChartIndiaction(latestYearData?.assets?.othCurrAsset, previousYearData?.assets?.othCurrAsset, lastYearData?.assets?.othCurrAsset)}

                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Current Assets</strong>
                      </td>
                      <td className="text-center">
                        {/* {latestYearData?.assets?.totalCurrentAssets?.toLocaleString()} */}
                        {convertValue((latestYearData?.assets?.totalCurrentAssets), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}

                      </td>
                      <td className="text-center">
                        {/* {previousYearData?.assets?.totalCurrentAssets?.toLocaleString()} */}
                        {convertValue((previousYearData?.assets?.totalCurrentAssets), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-center">
                        {/* {lastYearData?.assets?.totalCurrentAssets?.toLocaleString()} */}
                        {convertValue((lastYearData?.assets?.totalCurrentAssets), unit)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </td>
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
                        <strong>
                          {/* {latestYearData?.assets?.totalAssets?.toLocaleString()} */}
                          {convertValue((latestYearData?.assets?.totalAssets), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </td>
                      <td className="text-center border-top">
                        <strong>
                          {/* {previousYearData?.assets?.totalAssets?.toLocaleString()} */}
                          {convertValue((previousYearData?.assets?.totalAssets), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </td>
                      <td className="text-center border-top">
                        <strong>
                          {/* {lastYearData?.assets?.totalAssets?.toLocaleString()} */}
                          {convertValue((lastYearData?.assets?.totalAssets), unit)?.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}
                        </strong>
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
