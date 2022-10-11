import React, { useState, useRef, useEffect } from 'react'
import styles from '../profile.module.scss'
import {
  Chart,
  ArcElement,
  registerables,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Tooltip,
  Legend

} from 'chart.js'
import {
  Doughnut,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
  onElementsClick,
} from 'react-chartjs-2'

Chart.register(
  ArcElement,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Tooltip,
  Legend

)

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
  console.log(equityShareNo, 'equityShareNo', topprefrencesShareNo)
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

    plugins: {
      legend: {
        display: false
      },
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
    cutout: 100,
  }

  const onClickEvent = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event))
  }

  const colorReturn = (index) => {
    let finalColor = 'red'
    let colors = [
      '#4CAF50',
      '#2884DE',
      '#FFCE00',
      '#800000',
      '#00FF00',
    ]

    if (index < 4) {
      finalColor = colors[index]
    } else {
      finalColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }
    console.log(finalColor, colors[index], 'final color')
    return finalColor
  }


  //   useEffect(() => {

  //     if(chartRef?.current!=null){
  //     var ctx = document.getElementById("canvas").getContext("2d");
  // var myLine = new Chart(ctx, config);

  // document.getElementById("canvas").onclick = function(evt) {
  //   var activePoint = myLine.getElementAtEvent(event);

  //   // make sure click was on an actual point
  //   if (activePoint.length > 0) {
  //     var clickedDatasetIndex = activePoint[0]._datasetIndex;
  //     var clickedElementindex = activePoint[0]._index;
  //     var label = myLine.data.labels[clickedElementindex];
  //     var value = myLine.data.datasets[clickedDatasetIndex].data[clickedElementindex];
  //     alert("Clicked: " + label + " - " + value);
  //   }
  // };
  //     }

  //   },[chartRef])

  console.log(equitydata, "equitydata")
  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
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
            <h3 className="label_heading text-color">Equity Capital</h3>
            <div className={`${styles.tableParent} share-holding-border`}>
              <div className={`${styles.table_scroll_outer}`}>
                <div className={styles.table_scroll_inner}>
                  <table
                    className={`${styles.table} shareholding table mb-0`}
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <th width="23%" className='border_color border-bottom-0'
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
                        <th width="5%" className='border_color'></th>
                        <th className='border_color'>FULL NAME</th>
                        <th className='border_color'>NO. OF SHARES</th>
                        <th className='border_color'>% SHAREHOLDING</th>
                        <th className='border_color'>PAN</th>
                        <th className='border_color'>DIRECTOR</th>
                      </tr>
                      {shareHolding?.slice().sort((a, b) => {
                        return b?.numberOfShares - a?.numberOfShares;
                      }).map((shareHolder, index) => {
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
                                className={`${styles.legends} ${styles.green} border-top-0 border-bottom-0 border_color`}
                              >
                                <span style={{ background: `${colorReturn(index)}` }}></span>
                              </td>
                              <td className={`${styles.name} text-color border-top-0 border-bottom-0 border_color`}>
                                {shareHolder.fullName}
                              </td>
                              <td className="border-top-0 border-bottom-0 border_color">
                                {Number(shareHolder.numberOfShares).toLocaleString('en-In')}
                              </td>
                              <td className="border-top-0 border-bottom-0 border_color">
                                {shareHolder.percentageShareHolding ? Number(shareHolder.percentageShareHolding * 100)?.toLocaleString(
                                  'en-In',
                                  {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2
                                  },
                                ) + '%' : ''}

                              </td>
                              <td className="border-top-0 border-bottom-0 border_color">
                                {shareHolder.pan}
                              </td>
                              <td className="border-top-0 border-bottom-0 border_color">
                                {shareHolder.director ? 'Yes' : 'No'}
                              </td>
                            </tr>
                          )
                        }
                      })}
                      <tr>
                        <td className='border-top-0 border_color'></td>
                        <td className="border-top-0 border_color"></td>
                        <td>{Number(totalEquityShare).toLocaleString('en-In')}</td>
                        <td>{totalEquitySharePercentage ? Number(totalEquitySharePercentage * 100).toFixed(2) + '%' : ''}</td>
                        <td className="border-top-0 border_color"></td>
                        <td className="border-top-0 border_color"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h3 className="label_heading mt-4 pt-1 text-color">Preference Capital</h3>
            <div className={`${styles.tableParent} share-holding-border`}>
              <div className={styles.table_scroll_outer}>
                <div className={styles.table_scroll_inner}>
                  <table
                    className={`${styles.table} table shareholding mb-0`}
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <th rowSpan="7" width="23%" className='border-bottom-0'>
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
                        if (shareHolder.type !== 'EquitySharesMember') {
                          if (shareHolder.type !== 'EquityShares1Member') {
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
                                  {Number(shareHolder.numberOfShares).toLocaleString('en-In')}
                                </td>
                                <td className="border-top-0 border-bottom-0">
                                  {shareHolder?.percentageShareHolding ? (shareHolder.percentageShareHolding * 100)?.toLocaleString("en-IN", {
                                    maximumFractionDigits: 2,
                                    minimumFractionDigits: 2,
                                  }) : ''}
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
                        }
                      })}
                      <tr>
                        <td className='border-top-0'></td>
                        <td className="border-top-0"></td>
                        <td>{Number(totalPrefrenceShare)?.toLocaleString('en-In')}</td>
                        <td>{totalPrefrenceSharePercentage?.toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })}%</td>
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
