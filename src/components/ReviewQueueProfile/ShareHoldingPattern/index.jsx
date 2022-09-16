import React, { useState, useRef, useEffect } from 'react'
import styles from '../profile.module.scss'
import {
  Doughnut,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
  onElementsClick,
} from 'react-chartjs-2'
import { Chart, ArcElement, registerables } from 'chart.js'

function Index({ shareHolding }) {
  const chartRef = useRef(null)

  console.log(shareHolding, 'shareholding')
  Chart.register(ArcElement)
  let tempArr = [
    { name: 'Sail', value: '21', color: '#9675CE' },
    { name: 'Jindal Group', value: '23', color: '#4CAF50' },
    { name: 'SR Steel', value: '23', color: '#EA3F3F' },
  ]

  const EquityValues = shareHolding?.filter((item) => {
    return item.type === 'EquityShares1Member'
  })
  let equityShareNo = []
  let totalEquityShare = 0
  let totalEquitySharePercentage = 0
  const topEquityValues = EquityValues?.sort(
    (a, b) => b.numberOfShares - a.numberOfShares,
  )
    .slice(0, 5)
    .forEach((item) => {
      equityShareNo.push(item.numberOfShares)
    })
  EquityValues?.forEach((equity) => {
    totalEquityShare += equity.numberOfShares
    totalEquitySharePercentage += equity.percentageShareHolding
  })
  // const top
  

  const prefrenceValues = shareHolding?.filter((item) => {
    return !item.type === 'EquityShares1Member'
  })
  const topprefrencesShareNo = []
  let totalPrefrenceShare = 0
  let totalPrefrenceSharePercentage = 0

  const topPrefrenceValues = prefrenceValues
    ?.sort((a, b) => b.numberOfShares - a.numberOfShares)
    .slice(0, 5)
    .forEach((item) => {
      topPrefrenceValues.push(item.numberOfShares)
      totalPrefrenceShare += item.numberOfShares
      totalPrefrenceSharePercentage += item.percentageShareHolding
    })

  //setTimeout(console.log(equityShareNo, topEquityValues, 'topprefrencesShareNo'), 5000);
  console.log(equityShareNo, 'equityShareNo',topprefrencesShareNo)
  const equitydata = {
    labels: ['Sail', 'Jindal Grou', 'SR Steel'],
    datasets: [
      {
        label: '',
        data: equityShareNo,

        backgroundColor: [
          '#4CAF50',
          '#2884DE',
          '#FFCE00',
          '#800000',
          '#00FF00',
        ],
        hoverOffset: 4,
        hoverBorderWidth: 70,
        hoverBackgroundColor: 'red',
      },
    ],
  }
  const prefrencedata = {
    labels: ['Sail', 'Jindal Grou', 'SR Steel'],
    datasets: [
      {
        label: '',
        data: topprefrencesShareNo,

        backgroundColor: ['#4CAF50', '#2884DE', '#FFCE00'],
      },
    ],
  }
  const options = {
    onClick: (e, element) => {
      console.log(':doughnut click')
      if (element.length > 0) {
        let ind = element[0]._index
        alert(ind)
      }
    },
    plugins: {
      title: {
        display: false,
        text: 'Doughnut Chart',
        color: 'blue',

        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },

        animation: {
          animateScale: true,
        },
      },
    },

    responsive: true,
    cutout: 60,
  }

  const onClickEvent = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event))
  }
  //   useEffect(() => {

  //     if(chartRef?.current!=null){
  //     let ctx = document.getElementById("canvas").getContext("2d");
  // let myLine = new Chart(ctx, config);

  // document.getElementById("canvas").onclick = function(evt) {
  //   let activePoint = myLine.getElementAtEvent(event);

  //   // make sure click was on an actual point
  //   if (activePoint.length > 0) {
  //     let clickedDatasetIndex = activePoint[0]._datasetIndex;
  //     let clickedElementindex = activePoint[0]._index;
  //     let label = myLine.data.labels[clickedElementindex];
  //     let value = myLine.data.datasets[clickedDatasetIndex].data[clickedElementindex];
  //     alert("Clicked: " + label + " - " + value);
  //   }
  // };
  //     }

  //   },[chartRef])

  console.log(equitydata,"equitydata")
  return (
    <>
      <div className={`${styles.card} card`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#shareholding"
          aria-expanded="true"
          aria-controls="shareholding"
        >
          <h2 className="mb-0">Shareholding Pattern</h2>
          <span>+</span>
        </div>
        <div
          id="shareholding"
          className="collapse"
          aria-labelledby="shareholding"
          data-parent="#profileAccordion"
        >
          <div
            className={`${styles.graphTable} ${styles.cardBody} card-body border_color`}
          >
            <h3 className="label_heading">Equity Capital</h3>
            <div className={`${styles.tableParent}`}>
              <div className={`${styles.table_scroll_outer}`}>
                <div className={styles.table_scroll_inner}>
                  <table
                    className={`${styles.table} table mb-0`}
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <th width="23%"
                          rowSpan={shareHolding ? shareHolding?.length + 2 : '17'}
                        >
                          <div className={styles.chart}>
                            <Doughnut
                              data={equitydata}
                              ref={chartRef}
                              options={options}
                              onClick={(e) => {
                                onClickEvent(e)
                              }}
                              getElementAtEvent={(data) => {
                                console.log('data')
                                if (data.length >= 1) {
                                  // redirect or do stuff
                                }
                              }}
                              onElementsClick={(e) => {
                                onClickEvent(e)
                              }}
                            />
                            <div className={`${styles.total_value} `}>
                              {/* <span className={styles.headSpan}>
                                {shareHolding
                                  ? shareHolding[0]?.fullName ?? 'Name'
                                  : ''}
                              </span> */}
                              {/* <span className={styles.subSpan}>{`${shareHolding
                                  ? shareHolding[0]?.percentageShareHolding ??
                                  '0'
                                  : ''
                                }%`}</span> */}
                            </div>
                          </div>
                        </th>
                        <th width="5%"></th>
                        <th>FULL NAME</th>
                        <th>NO. OF SHARES</th>
                        <th>% SHAREHOLDING</th>
                        <th>PAN</th>
                        <th>DIRECTOR</th>
                      </tr>
                      {shareHolding?.map((shareHolder, index) => {
                        console.log(
                          shareHolder.percentageShareHolding,
                          'mapping',
                        )

                        if (
                          shareHolder.type === 'EquityShares1Member' ||
                          shareHolder.type === 'EquitySharesMember'
                        ) {
                          return (
                            <tr key={index}>
                              <td
                                className={`${styles.legends} ${styles.green} border-top-0 border-bottom-0`}
                              >
                                <span></span>
                              </td>
                              <td className={`${styles.name} border-top-0 border-bottom-0`}>
                                {shareHolder.fullName}
                              </td>
                              <td className="border-top-0 border-bottom-0">
                                {Number(shareHolder.numberOfShares).toLocaleString()}
                              </td>
                              <td className="border-top-0 border-bottom-0">
                                {shareHolder.percentageShareHolding?.toLocaleString(
                                  undefined,
                                  { maximumFractionDigits: 2 },
                                )}
                                %
                              </td>
                              <td className="border-top-0 border-bottom-0">
                                {shareHolder.pan}
                              </td>
                              <td className="border-top-0 border-bottom-0">
                                {shareHolder.director ? 'Yes' : 'No'}
                              </td>
                            </tr>
                          )
                        }
                      })}
                      <tr>
                        <td className='border-top-0'></td>
                        <td className="border-top-0"></td>
                        <td>{Number(totalEquityShare).toLocaleString()}</td>
                        <td>{totalEquitySharePercentage.toFixed(2)}%</td>
                        <td className="border-top-0"></td>
                        <td className="border-top-0"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h3 className="label_heading mt-4 pt-1">Preference Capital</h3>
            <div className={styles.tableParent}>
              <div className={styles.table_scroll_outer}>
                <div className={styles.table_scroll_inner}>
                  <table
                    className={`${styles.table} table mb-0`}
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <th rowSpan="7" width="23%">
                          <div className={styles.chart}>
                            <Doughnut data={prefrencedata} options={options} />
                            <div className={`${styles.total_value} `}>
                              {/* <span className={styles.headSpan}>
                                {shareHolding
                                  ? shareHolding[0]?.fullName ?? 'Name'
                                  : ''}
                              </span>
                              <span className={styles.subSpan}>{`${shareHolding
                                  ? shareHolding[0]?.percentageShareHolding ??
                                  '0'
                                  : ''
                                }%`}</span> */}
                            </div>
                          </div>
                        </th>
                        <th width="5%"></th>
                        <th>FULL NAME</th>
                        <th>NO. OF SHARES</th>
                        <th>% SHAREHOLDING</th>
                        <th>PAN</th>
                        <th>DIRECTOR</th>
                      </tr>
                      {shareHolding?.map((shareHolder, index) => {
                        if (!shareHolder.type === 'EquitySharesMember') {
                          return (
                            <tr key={index}>
                              <td
                                className={`${styles.legends} ${styles.green} border-top-0 border-bottom-0`}
                              >
                                <span></span>
                              </td>
                              <td className={`${styles.name} border-top-0 border-bottom-0`}>
                                {shareHolder.fullName}
                              </td>
                              <td className="border-top-0 border-bottom-0">
                                {Number(shareHolder.numberOfShares).toLocaleString()}
                              </td>
                              <td className="border-top-0 border-bottom-0">
                                {shareHolder.percentageShareHolding.toFixed(2)}
                              </td>
                              <td className="border-top-0 border-bottom-0">
                                {shareHolder.pan}
                              </td>
                              <td className="border-top-0 border-bottom-0">
                                {shareHolder.director ? 'Yes' : 'No'}
                              </td>
                            </tr>
                          )
                        }
                      })}
                      <tr>
                        <td className='border-top-0'></td>
                        <td className="border-top-0"></td>
                        <td>{Number(totalPrefrenceShare)?.toLocaleString()}</td>
                        <td>{totalPrefrenceSharePercentage.toFixed(2)}%</td>
                        <td className="border-top-0"></td>
                        <td className="border-top-0"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
