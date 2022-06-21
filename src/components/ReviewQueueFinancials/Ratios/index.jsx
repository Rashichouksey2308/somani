import React from 'react'
import styles from '../index.module.scss'

function Index() {
  return (
   <>
 <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#ratioAnalysis" aria-expanded="true" aria-controls="ratioAnalysis">
                                            <h2 className="mb-0">Ratio Analysis</h2>
                                            <div className={`${styles.unit_container} d-flex align-items-center`}>
                                          <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
                                          <select className={`${styles.options} accordion_DropDown`}>
                                              <option>Crores</option>
                                          </select>
                                               <span>+</span>
                                              </div>
                                        </div>
                                        <div id="ratioAnalysis" className="collapse" aria-labelledby="ratioAnalysis" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}>
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"><h3>Activity & Profitibility Ratio</h3></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>ACTIVITY RATIO</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Working Capital Turnover Ratio</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Fixed Assets Turnover Ratio</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Working Capital Cycle (Days)</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                 
                                                  <tr>
                                                    <td>Debtors Period (Days)</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Inventory Period (Days)</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Creditors Period (Days)</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>PROFITIBILITY RATIO</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Operating Profit Margin (EBITDA Margin)</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Return On Capital Emplyed (%)</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Return On Total Assets (%)</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"><h3>Coverage, Liquidity & Growth Ratio</h3></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>COVERAGE RATIO</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Debt Equity Ratio</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Debt EBITDA Ratio (EBITDA Coverage)</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Interest Coverage Ratio</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                 
                                                  <tr>
                                                    <td>Debt Service Ratio</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                 
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>LIQUIDITY RATIO</td>
                                                  </tr>
                                                  
                                                  <tr>
                                                    <td>Curent Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Quick Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>GROWTH RATIO</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Asset Growth Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Net Worth Growth Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Sales Growth Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
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