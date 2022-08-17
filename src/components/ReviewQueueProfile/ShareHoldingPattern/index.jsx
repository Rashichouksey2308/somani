import React, { useState } from 'react'
import styles from '../profile.module.scss'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, registerables } from 'chart.js'

function Index({ shareHolding }) {

  const [totalShares, setTotalShares] = useState(0)


  console.log(shareHolding, "shareholding")
  Chart.register(ArcElement)
  let tempArr = [
    { name: 'Sail', value: '21', color: '#9675CE' },
    { name: 'Jindal Group', value: '23', color: '#4CAF50' },
    { name: 'SR Steel', value: '23', color: '#EA3F3F' },

  ]


  const EquityValues = shareHolding?.filter((item) => {
    return item.type === 'EquityShares1Member'
  })
  const equityShareNo = []
  let totalEquityShare = 0
  let totalEquitySharePercentage = 0
  const topEquityValues = EquityValues?.sort((a, b) => b.numberOfShares - a.numberOfShares).slice(0, 5).forEach((item) => {
    equityShareNo.push(item.numberOfShares)
    totalEquityShare += item.numberOfShares
    totalEquitySharePercentage += item.percentageShareHolding
  })
  // const top

  const prefrenceValues = shareHolding?.filter((item) => {
    return !item.type === 'EquityShares1Member'
  })
  const topprefrencesShareNo = []
  let totalPrefrenceShare = 0
  let totalPrefrenceSharePercentage = 0

  const topPrefrenceValues = prefrenceValues?.sort((a, b) => b.numberOfShares - a.numberOfShares).slice(0, 5).forEach((item) => {
    topPrefrenceValues.push(item.numberOfShares)
    totalPrefrenceShare += item.numberOfShares
    totalPrefrenceSharePercentage += item.percentageShareHolding
  })

  setTimeout(console.log(equityShareNo, topEquityValues, 'topprefrencesShareNo'), 5000);


  const equitydata = {
    labels: [
      'Sail',
      'Jindal Grou',
      'SR Steel',

    ],
    datasets: [
      {
        label: '',
        data: equityShareNo,

        backgroundColor: ['#4CAF50', '#2884DE', '#FFCE00', '#800000', '#00FF00'],
      },
    ],
  }
  const prefrencedata = {
    labels: [
      'Sail',
      'Jindal Grou',
      'SR Steel',

    ],
    datasets: [
      {
        label: '',
        data: [25, 24, 25],

        backgroundColor: ['#4CAF50', '#2884DE', '#FFCE00'],
      },
    ],
  }
  const options = {
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
    cutout: 60

  }



  return (
    <>
      <div className={`${styles.card} card`}>
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#shareholding" aria-expanded="true" aria-controls="shareholding">
          <h2 className="mb-0">Shareholding Pattern</h2>
          <span>+</span>
        </div>
        <div id="shareholding" className="collapse" aria-labelledby="shareholding" data-parent="#profileAccordion">
          <div className={`${styles.graphTable} ${styles.cardBody} card-body border_color`}>
            <h3 className="label_heading">Equity Capital</h3>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                {/* <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr>
                      <th rowSpan="7">

                        <div className={styles.chart}>
                          <Doughnut data={data} options={options} />
                          <div className={`${styles.total_value} `}>
                            <span className={styles.headSpan}>₹ 24.00 Cr</span>
                            <span className={styles.subSpan}>50%</span>
                          </div>
                        </div>
                      </th>
                      <th></th>
                      <th>FULL NAME</th>
                      <th>NO. OF SHARES</th>
                      <th>% SHAREHOLDING</th>
                      <th>PAN</th>
                      <th>DIRECTOR</th>
                    </tr>
                    <tr>
                      <td className={`${styles.legends} ${styles.green} border-bottom-0`}><span></span></td>
                      <td className={`${styles.name} border-bottom-0`}>Arv Jay</td>
                      <td className="border-bottom-0">20</td>
                      <td className="border-bottom-0">40%</td>
                      <td className="border-bottom-0">AAVPW27766Q</td>
                      <td className="border-bottom-0">Yes</td>
                    </tr>
                    <tr>
                      <td className={`${styles.legends} ${styles.blue} border-top-0 border-bottom-0`}><span></span></td>
                      <td className={`${styles.name} border-top-0 border-bottom-0`}>Radhe Singh</td>
                      <td className="border-top-0 border-bottom-0">10</td>
                      <td className="border-top-0 border-bottom-0">30%</td>
                      <td className="border-top-0 border-bottom-0">AAVPW27766Q</td>
                      <td className="border-top-0 border-bottom-0">No</td>
                    </tr>
                    <tr>
                      <td className={`${styles.legends} ${styles.yellow} border-top-0 border-bottom-0`}><span></span></td>
                      <td className={`${styles.name} border-top-0 border-bottom-0`}>Sagar Sinha</td>
                      <td className="border-top-0 border-bottom-0">10</td>
                      <td className="border-top-0 border-bottom-0">30%</td>
                      <td className="border-top-0 border-bottom-0">AAVPW27766Q</td>
                      <td className="border-top-0 border-bottom-0">No</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="border-top-0"></td>
                      <td>40</td>
                      <td>100%</td>
                      <td className="border-top-0"></td>
                      <td className="border-top-0"></td>
                    </tr>
                  </tbody>
                </table> */}

                <table className={`${styles.table} table mb-4`} cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr>
                      <th rowSpan={shareHolding ? shareHolding?.length : '7'}>
                        <div className={styles.chart}>
                          <Doughnut data={equitydata} options={options} />
                          <div className={`${styles.total_value} `}>
                            <span className={styles.headSpan}>₹ 24.00 Cr</span>
                            <span className={styles.subSpan}>50%</span>
                          </div>
                        </div>
                      </th>
                      <th></th>
                      <th>FULL NAME</th>
                      <th>NO. OF SHARES</th>
                      <th>% SHAREHOLDING</th>
                      <th>PAN</th>
                      <th>DIRECTOR</th>
                    </tr>
                    {shareHolding?.map((shareHolder, index) => {
                      console.log(shareHolder.percentageShareHolding, 'mapping')

                      if (shareHolder.type === "EquityShares1Member") {

                        return (
                          <tr key={index}>
                            <td className={`${styles.legends} ${styles.green} border-bottom-0`}><span></span></td>
                            <td className={`${styles.name} border-bottom-0`}>{shareHolder.fullName}</td>
                            <td className="border-bottom-0">{shareHolder.numberOfShares}</td>
                            <td className="border-bottom-0">{(shareHolder.percentageShareHolding).toFixed(2)}%</td>
                            <td className="border-bottom-0">{shareHolder.pan}</td>
                            <td className="border-bottom-0">{shareHolder.director ? 'Yes' : 'No'}</td>
                          </tr>
                        )
                      }
                    })}
                    <tr>
                      <td></td>
                      <td className="border-top-0"></td>
                      <td>{totalEquityShare}</td>
                      <td>{(totalEquitySharePercentage).toFixed(2)}%</td>
                      <td className="border-top-0"></td>
                      <td className="border-top-0"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h3 className="label_heading">Preference Capital</h3>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr>
                      <th rowSpan="7">

                        <div className={styles.chart}>
                          <Doughnut data={prefrencedata} options={options} />
                          <div className={`${styles.total_value} `}>
                            <span className={styles.headSpan}>₹ 24.00 Cr</span>
                            <span className={styles.subSpan}>50%</span>
                          </div>
                        </div>
                      </th>
                      <th></th>
                      <th>FULL NAME</th>
                      <th>NO. OF SHARES</th>
                      <th>% SHAREHOLDING</th>
                      <th>PAN</th>
                      <th>DIRECTOR</th>
                    </tr>
                    {shareHolding?.map((shareHolder, index) => {

                      if (!shareHolder.type === "EquitySharesMember") {

                        return (
                          <tr key={index}>
                            <td className={`${styles.legends} ${styles.green} border-bottom-0`}><span></span></td>
                            <td className={`${styles.name} border-bottom-0`}>{shareHolder.fullName}</td>
                            <td className="border-bottom-0">{shareHolder.numberOfShares}</td>
                            <td className="border-bottom-0">{shareHolder.percentageShareHolding}</td>
                            <td className="border-bottom-0">{shareHolder.pan}</td>
                            <td className="border-bottom-0">{shareHolder.director ? 'Yes' : 'No'}</td>
                          </tr>
                        )
                      }
                    })}
                    <tr>
                      <td></td>
                      <td className="border-top-0"></td>
                      <td>{totalPrefrenceShare}</td>
                      <td>{(totalPrefrenceSharePercentage).toFixed(2)}%</td>
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
    </>
  )
}

export default Index