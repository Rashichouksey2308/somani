import React, { useRef, useState } from 'react';
import styles from '../profile.module.scss';
import {
  ArcElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { returnReadableNumber } from '@/utils/helpers/global';

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
  Legend,
);

function Index({ shareHolding }) {
  const chartRef = useRef(null);
  const [equiltyCapitalShares, setEquiltyCapitalShares] = useState([]);
  const [prefrenceCapitalShares, setPrefrenceCapitalShares] = useState([]);

  Chart.register(ArcElement);



  const equityCapital = () => {
    const values = shareHolding
      ?.filter((item) => {
        return item.type.includes('EquityShares');
      })
      .sort((a, b) => b.numberOfShares - a.numberOfShares);
    return values;
  };
  const totalEquitySharePercentage = equityCapital()?.reduce((accumulator, object) => {
    return accumulator + Number(object.percentageShareHolding);
  }, 0);
  const totalEquityShare = equityCapital()?.reduce((accumulator, object) => {
    return accumulator + Number(object.numberOfShares);
  }, 0);

  let totalPrefrenceShare = 0;
  let totalPrefrenceSharePercentage = 0;

  const prefrenceCapital = () => {
    const values = shareHolding
      ?.filter((item) => {
        return item.type.includes('PreferenceShares');
      })
      .sort((a, b) => b.numberOfShares - a.numberOfShares);
    return values;
  };

  const EquityValues = shareHolding?.filter((item) => {
    return item.type === 'EquityShares1Member';
  });
  let equityShareNo = [];
  let equityShareName = [];

  const topEquityValues = equityCapital()
    ?.sort((a, b) => b.numberOfShares - a.numberOfShares)
    .slice(0, 5)
    .forEach((item) => {
      equityShareNo.push(item.numberOfShares);
      equityShareName.push(item.fullName);
    });
  const prefrenceValues = shareHolding?.filter((item) => {
    return item.type !== 'EquityShares1Member';
  });
  const topprefrencesShareNo = [];
  let topprefrencesShareName = [];

  const topPrefrenceValues = prefrenceCapital()
    ?.sort((a, b) => b.numberOfShares - a.numberOfShares)
    ?.slice(0, 5)
    ?.forEach((item) => {
      topprefrencesShareNo.push(item.numberOfShares);
      topprefrencesShareName.push(item.fullName);
    });
  prefrenceCapital()?.forEach((item) => {
    totalPrefrenceShare += item.numberOfShares;
    totalPrefrenceSharePercentage += item.percentageShareHolding;
  });

  const equitydata = {
    labels: equityShareName,
   
    datasets: [
      {
        data: equityShareNo,

        backgroundColor: ['#4CAF50', '#2884DE', '#FFCE00', '#800000', '#00FF00'],
        hoverBorderColor: ['#4CAF50', '#2884DE', '#FFCE00', '#800000', '#00FF00'],
        hoverBorderWidth: 3,
        
      },
    ],
  };
  const prefrencedata = {
    labels: topprefrencesShareName,
    datasets: [
      {
        label: '',
        data: topprefrencesShareNo,

        backgroundColor: ['#4CAF50', '#2884DE', '#FFCE00', '#800000', '#00FF00'],

        hoverBorderColor: ['#4CAF50', '#2884DE', '#FFCE00', '#800000', '#00FF00'],
        hoverBorderWidth: 3,
      },
    ],
  };
  const options = {
    aspectRatio: 1,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
                  position: 'nearest',
                   callbacks: {
                    label: function(context) {
                     
                        let label;
                        if (context.parsed !== null && context.parsed !== undefined) {
                             let number= context.parsed.toLocaleString("en-In")
                             label=`${context.label}, ${number} `
                        }
                      
                        return label;
                    }
                }
              }
      ,
      title: {
        display: false,
        text: 'Doughnut Chart',
        color: 'blue',

        font: {
          size: 20,
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

    tooltip: {
      titleFontSize: 50,
      bodyFontSize: 50,
    },

    responsive: true,
    cutout: 100,
  };

  const colorReturn = (index) => {
    let finalColor = 'red';
    let colors = ['#4CAF50', '#2884DE', '#FFCE00', '#800000', '#00FF00'];

    if (index < 5) {
      finalColor = colors[index];
    } else {
      finalColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    return finalColor;
  };

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
        <div id="shareholding" className="collapse" aria-labelledby="shareholding" data-parent="#profileAccordion">
          {equitydata?.labels?.length > 0 || prefrencedata?.labels?.length > 0 ? (
            <div className={`${styles.graphTable} ${styles.cardBody} card-body border_color`}>
            {equitydata?.labels?.length > 0 && (
              <>
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
                            <th width="23%" className="border_color border-bottom-0" rowSpan={equityCapital()?.length + 2}>
                              <div className={styles.chart}>                     
                                <Doughnut data={equitydata} ref={chartRef} options={options} />
                                {/* <div className={`${styles.total_value} `}>
                              <span className={styles.headSpan}>
                                {shareHolding
                                  ? shareHolding[0]?.fullName ?? 'Name'
                                  : ''}
                              </span>
                              <span className={styles.subSpan}>{`${shareHolding
                                  ? shareHolding[0]?.percentageShareHolding ??
                                  '0'
                                  : ''
                                }%`}</span>
                            </div> */}
                              </div>
                            </th>
                            <th width="5%" className="border_color"></th>
                            <th className="border_color">FULL NAME</th>
                            <th className="border_color">NO. OF SHARES</th>
                            <th className="border_color">% SHAREHOLDING</th>
                            <th className="border_color">PAN</th>
                            <th className="border_color">DIRECTOR</th>
                          </tr>
                          {equityCapital()
                            ?.slice()
                            .sort((a, b) => {
                              return b?.numberOfShares - a?.numberOfShares;
                            })
                            .map((shareHolder, index) => {
                              return (
                                <tr key={index}>
                                  <td
                                    className={`${styles.legends} ${styles.green} border-top-0 border-bottom-0 border_color`}
                                  >
                                    <span
                                      style={{
                                        background: `${colorReturn(index)}`,
                                      }}
                                    ></span>
                                  </td>
                                  <td className={`${styles.name} text-color border-top-0 border-bottom-0 border_color`}>
                                    {shareHolder.fullName}
                                  </td>
                                  <td className="border-top-0 border-bottom-0 border_color">
                                    {Number(shareHolder.numberOfShares).toLocaleString('en-In')}
                                  </td>
                                  <td className="border-top-0 border-bottom-0 border_color">
                                    {shareHolder.percentageShareHolding
                                      ? Number(shareHolder.percentageShareHolding * 100)?.toLocaleString('en-In', {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2,
                                      }) + '%'
                                      : ''}
                                  </td>
                                  <td className="border-top-0 border-bottom-0 border_color">{shareHolder.pan}</td>
                                  <td className="border-top-0 border-bottom-0 border_color">
                                    {shareHolder.director ? 'Yes' : 'No'}
                                  </td>
                                </tr>
                              );
                            })}
                          <tr>
                            <td className="border-top-0 border_color"></td>
                            <td className="border-top-0 border_color"></td>
                            <td> {totalEquityShare ? returnReadableNumber(totalEquityShare, 'en-In', 0, 0) : ''}</td>
                            <td>
                              {totalEquitySharePercentage ? returnReadableNumber(totalEquitySharePercentage * 100, undefined, 2, 2) + ' %' : ''}
                            </td>
                            <td className="border-top-0 border_color"></td>
                            <td className="border-top-0 border_color"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}

            {prefrencedata?.labels?.length > 0 && (
              <>
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
                             <th rowSpan={prefrenceCapital()?.length + 2} width="23%" className="border-bottom-0">
                              <div className={styles.chart}>
                                <Doughnut data={prefrencedata} ref={chartRef} options={options}/>
                                 {/* <div className={`${styles.total_value} `}>
                                  <span className={styles.headSpan}>
                                {shareHolding
                                  ? shareHolding[0]?.fullName ?? 'Name'
                                  : ''}
                              </span>
                              <span className={styles.subSpan}>{`${shareHolding
                                  ? shareHolding[0]?.percentageShareHolding ??
                                  '0'
                                  : ''
                                }%`}</span>  
                                 </div>   */}
                              </div> 
                            </th> 
                            <th width="5%"></th>
                            <th>FULL NAME</th>
                            <th>NO. OF SHARES</th>
                            <th>% SHAREHOLDING</th>
                            <th>PAN</th>
                            <th>DIRECTOR</th>
                          </tr>
                          {prefrenceCapital()?.map((shareHolder, index) => {
                            return (
                              <tr key={index}>
                                <td className={`${styles.legends} ${styles.green} border-top-0 border-bottom-0`}>
                                  <span style={{ background: `${colorReturn(index)}` }}></span>
                                </td>
                                <td className={`${styles.name} border-top-0 border-bottom-0`}>{shareHolder.fullName}</td>
                                <td className="border-top-0 border-bottom-0">
                                  {Number(shareHolder.numberOfShares).toLocaleString('en-In')}
                                </td>
                                <td className="border-top-0 border-bottom-0">
                                  {shareHolder?.percentageShareHolding ? returnReadableNumber((shareHolder.percentageShareHolding * 100), 'en-In', 2, 2) : ''}
                                </td>
                                <td className="border-top-0 border-bottom-0">{shareHolder.pan}</td>
                                <td className="border-top-0 border-bottom-0">{shareHolder.director ? 'Yes' : 'No'}</td>
                              </tr>
                            );
                          })}
                          <tr>
                            <td className="border-top-0"></td>
                            <td className="border-top-0"></td>
                            <td> {totalPrefrenceShare ? returnReadableNumber(totalPrefrenceShare, 'en-In', 0, 0) : ''}</td>
                            <td>
                              {totalPrefrenceSharePercentage
                                ? Number(totalPrefrenceSharePercentage * 100).toFixed(2) + '%'
                                : ''}
                            </td>
                            <td className="border-top-0"></td>
                            <td className="border-top-0"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          ): <p className='text-center h4'>No Records Found</p>}
        </div>
      </div>
    </>
  );
}

export default Index;
