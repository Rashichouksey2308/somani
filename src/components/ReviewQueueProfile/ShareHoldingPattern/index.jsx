import React from 'react'
import styles from '../profile.module.scss'

function Index() {
  return (
   <>
    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#shareholding" aria-expanded="true" aria-controls="shareholding">
                                            <h2 className="mb-0">Shareholding Pattern</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="shareholding" className="collapse" aria-labelledby="shareholding" data-parent="#profileAccordion">
                                            <div className={`${styles.graphTable} ${styles.cardBody} card-body border_color` }>
                                              <h3 className="label_heading">Equity Capital</h3>
                                              <table className={`${styles.table} table mb-4`} cellpadding="0" cellspacing="0" border="0">
                                                  <tbody>
                                                    <tr>
                                                      <th rowspan="7">PIE CHART</th>
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
                                                </table>
                                                <h3 className="label_heading">Equity Capital</h3>
                                                <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                    <tbody>
                                                      <tr>
                                                      <th rowspan="7">PIE CHART</th>
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
                                                </table>
                                            </div>
                                        </div>
                                    </div>
   </>
  )
}

export default Index