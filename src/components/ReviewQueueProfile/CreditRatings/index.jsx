import React from 'react'
import styles from '../profile.module.scss'

function Index() {
  return (
   <>
   <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#creditRatings" aria-expanded="true" aria-controls="creditRatings">
                                            <h2 className="mb-0">Credit Ratings</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="creditRatings" className="collapse" aria-labelledby="creditRatings" data-parent="#profileAccordion">
                                            <div className={`${styles.borderTable} ${styles.cardBody} card-body border_color`}>
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                  <thead>
                                                    <tr>
                                                      <th width="10%" rowSpan="2">DATE</th>
                                                      <th width="15%" rowSpan="2">RATING AGENCY</th>
                                                      <th width="15%" rowSpan="2">TERM</th>
                                                      <th width="28%" rowSpan="2">INSTRUMENT</th>
                                                      <th width="8%" rowSpan="2" className="text-center">CHANGE IN RATING</th>
                                                      <th colSpan="3" className="text-center">CREDIT RATING</th>
                                                    </tr>
                                                    <tr>
                                                      <th width="8%" className="text-center">2020</th>
                                                      <th width="8%" className="text-center">2019</th>
                                                      <th width="8%" className="text-center">2018</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>30-04-2020</td>
                                                      <td>Birchwood</td>
                                                      <td>Long Term</td>
                                                      <td>Long term bank loan 12.60 Crore</td>
                                                      <td className="text-center"><img src="/static/arrow-up-green.svg" alt="Arrow Red" className="img-fluid" /></td>
                                                      <td className={`${styles.stable} text-center`}>AA+<span>(Stable)</span></td>
                                                      <td className="text-center">-</td>
                                                      <td className="text-center">-</td>
                                                    </tr>
                                                    <tr>
                                                      <td>30-04-2019</td>
                                                      <td>America First</td>
                                                      <td>-</td>
                                                      <td>Long term bank loan 165 Crore</td>
                                                      <td className="text-center"><img src="/static/arrow-down-red.svg" alt="Arrow Red" className="img-fluid" /></td>
                                                      <td className="text-center">-</td>
                                                      <td className={`${styles.negative} text-center`}>BB+<span>(Negative)</span></td>
                                                      <td className="text-center">-</td>
                                                    </tr>
                                                    <tr>
                                                      <td>30-04-2018</td>
                                                      <td>Alliant</td>
                                                      <td>Long Term</td>
                                                      <td>Long term bank loan 12.60 Crore</td>
                                                      <td className="text-center"><img src="/static/arrow-up-green.svg" alt="Arrow Red" className="img-fluid" /></td>
                                                      <td className="text-center">-</td>
                                                      <td className="text-center">-</td>
                                                      <td className={`${styles.positive} text-center`}>AA+<span>(Positive)</span></td>
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