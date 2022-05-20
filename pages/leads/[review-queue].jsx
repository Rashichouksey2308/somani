import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styles from './reviewqueue.module.scss'
function index() {
    return (
        <div className={`${styles.dashboardTab} w-100`}>
            <div className={styles.tabHeader}>
              <div className="d-flex align-items-center">
                <h1 className={styles.title}><img src="/static/arrow-right.svg" alt="arrow right" className="img-fluid" />Ramakrishna Traders</h1>
                <div className="ml-auto">
                  <button type="button" className={`${styles.btnPrimary} btn btn-primary`}><img src="/static/refresh.svg" alt="refresh" className="img-fluid" />Update Info</button>
                  <div className={styles.lastModified}><span>Last Modified:</span> 28 Jan,11:34am</div>
                </div>
              </div>
              <ul className={`${styles.navTabs} nav nav-tabs`}>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} ${styles.active} nav-link active`} data-toggle="tab" href="#Profile" role="tab" aria-controls="Profile" aria-selected="true">Profile</a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} nav-link`} data-toggle="tab" href="#Financials" role="tab" aria-controls="Financials" aria-selected="false">Financials</a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} nav-link`} data-toggle="tab" href="#gst" role="tab" aria-controls="GST" aria-selected="false">GST</a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} nav-link`} data-toggle="tab" href="#Compliance" role="tab" aria-controls="Compliance" aria-selected="false">Compliance</a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} nav-link`} data-toggle="tab" href="#Orders" role="tab" aria-controls="Orders" aria-selected="false">Orders</a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} nav-link`} data-toggle="tab" href="#Credit" role="tab" aria-controls="Credit" aria-selected="false">Credit</a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} nav-link`} data-toggle="tab" href="#cam" role="tab" aria-controls="CAM" aria-selected="false">CAM</a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} nav-link`} data-toggle="tab" href="#Documents" role="tab" aria-controls="Documents" aria-selected="false">Documents</a>
                  </li>
              </ul>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className={`${styles.tabContent} tab-content`}>
                            <div className="tab-pane fade show active" id="Profile" role="tabpanel">
                                <div className="accordion" id="profileAccordion">
                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#companyDetails" aria-expanded="true" aria-controls="companyDetails">
                                            <h2 className="mb-0">Company Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="companyDetails" className="collapse" aria-labelledby="companyDetails" data-parent="#profileAccordion">
                                            <div className={`${styles.cardBody} card-body`}>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Company Name</div>
                                                        <div className={styles.value}>Ramakrishna Traders</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>CIN</div>
                                                        <div className={styles.value}>U55101UR1986PL007811</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Company PAN</div>
                                                        <div className={styles.value}>AAOCS3552N <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>IEC Number</div>
                                                        <div className={styles.value}>2904000291</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Type of Business</div>
                                                        <div className={styles.value}>Manufacturer</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Date of Incorporation</div>
                                                        <div className={styles.value}>13-01-2019</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Listing Status</div>
                                                        <div className={styles.value}>Unlisted</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Constitution</div>
                                                        <div className={styles.value}>Public Ltd.</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Active Compliant</div>
                                                        <div className={`${styles.value} ${styles.warning}`}>No</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Contact Number</div>
                                                        <div className={styles.value}>0612-7894523</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Email Domain</div>
                                                        <div className={styles.value}>ramkrishnatraders@gmail.com</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Number of Shareholders</div>
                                                        <div className={styles.value}>6</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Shell/ Hawala Score</div>
                                                        <div className={styles.value}>60</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Paid-Up Capital (Cr)</div>
                                                        <div className={styles.value}>100.00</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Last Balance Sheet</div>
                                                        <div className={`${styles.value} ${styles.warning}`}>13-03-2019</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Employee Count</div>
                                                        <div className={styles.value}>25</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Existing Limit (Cr)</div>
                                                        <div className={styles.value}>10.00</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Utilized Limit (Cr)</div>
                                                        <div className={styles.value}>2.00</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Registered Address</div>
                                                        <div className={styles.value}>123, My Building Famous Lane Hyderabad, Telangana - 500072</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Corporate Address</div>
                                                        <div className={styles.value}>561, My Building Lane No. 11 Delhi, Delhi - 110001</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={styles.label}>Referral Code</div>
                                                        <div className={styles.value}>U55101UR19</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.card} card`}>                             
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#auditorDetails" aria-expanded="true" aria-controls="auditorDetails">
                                            <h2 className="mb-0">Auditor’s Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="auditorDetails" className="collapse" aria-labelledby="auditorDetails" data-parent="#profileAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body`}>
                                              <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th></th>
                                                    <th>MAR-20</th>
                                                    <th>MAR-19</th>
                                                    <th>MAR-18</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>Name of Auditor</td>
                                                    <td>Matta Garg &amp; Co.</td>
                                                    <td>Matta Garg &amp; Co.</td>
                                                    <td>Matta Garg &amp; Co.</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Registration Number</td>
                                                    <td>000914C</td>
                                                    <td>000914C</td>
                                                    <td>000914C</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#directorDetails" aria-expanded="true" aria-controls="directorDetails">
                                            <h2 className="mb-0">Director Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="directorDetails" className="collapse show" aria-labelledby="directorDetails" data-parent="#profileAccordion">
                                            <div className={`${styles.directorDetails} ${styles.cardBody} card-body`}>
                                              <div className="accordion" id="directorDetails">
                                                  <div className={`${styles.card} card`}>
                                                      <div className={`${styles.cardHeader} ${styles.collapsed} card-header row no-gutters bg-transparent collapsed`} data-toggle="collapse" data-target="#director1" aria-expanded="true" aria-controls="director1">
                                                          <div className={`${styles.detailsBox} col-md-2`}><label>Name</label>Arv Jay</div>
                                                          <div className={`${styles.detailsBox} col-md-2`}><label>PAN</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                                          <div className={`${styles.detailsBox} col-md-2`}><label>Email Id</label>email@example.com</div>
                                                          <div className={`${styles.detailsBox} ${styles.success} col-md-2`}><label>DIN</label>03148692</div>
                                                          <div className={`${styles.detailsBox} col-md-2`}><label>Tenure Start Date</label>17-02-2019</div>
                                                          <div className={`${styles.detailsBox} col-md-2`}><label>DSC Status</label>Approved</div>
                                                          <div className={styles.downArrow}><img src="/static/arrow-right.svg" alt="arrow right" className="img-fluid" /></div>
                                                      </div>
                                                      <div id="director1" className="collapse show" aria-labelledby="director1" data-parent="#directorDetails">
                                                        <div className={`${styles.cardBody} card-body`}>
                                                            <div className="row no-gutters">
                                                                <div className={`${styles.detailsBox} col-md-2`}><label>DIN Status</label>Arv Jay</div>
                                                                <div className={`${styles.detailsBox} col-md-2`}><label>DSC Registered</label>AAVPW27766Q <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                                                <div className={`${styles.detailsBox} col-md-2`}><label>DSC Expiry Date</label>email@example.com</div>
                                                                <div className={`${styles.detailsBox} ${styles.success} col-md-2`}><label>Designation</label>03148692</div>
                                                                <div className={`${styles.detailsBox} col-md-2`}><label>Date Of Birth</label>17-02-2019</div>
                                                                <div className={`${styles.detailsBox} col-md-2`}><label>Contact</label>Approved</div>
                                                            </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#shareholding" aria-expanded="true" aria-controls="shareholding">
                                            <h2 className="mb-0">Shareholding Pattern</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="shareholding" className="collapse" aria-labelledby="shareholding" data-parent="#profileAccordion">
                                            <div className={`${styles.graphTable} ${styles.cardBody} card-body`}>
                                              <h3>Equity Capital</h3>
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
                                                <h3>Equity Capital</h3>
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
                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#creditRatings" aria-expanded="true" aria-controls="creditRatings">
                                            <h2 className="mb-0">Credit Ratings</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="creditRatings" className="collapse" aria-labelledby="creditRatings" data-parent="#profileAccordion">
                                            <div className={`${styles.borderTable} ${styles.cardBody} card-body`}>
                                              <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                  <thead>
                                                    <tr>
                                                      <th width="10%" rowspan="2">DATE</th>
                                                      <th width="15%" rowspan="2">RATING AGENCY</th>
                                                      <th width="15%" rowspan="2">TERM</th>
                                                      <th width="28%" rowspan="2">INSTRUMENT</th>
                                                      <th width="8%" rowspan="2" className="text-center">CHANGE IN RATING</th>
                                                      <th colspan="3" className="text-center">CREDIT RATING</th>
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
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Financials" role="tabpanel">
                                <div className="accordion" id="FinancialsAccordion">
                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#balanceSheet1" aria-expanded="true" aria-controls="balanceSheet1">
                                            <h2 className="mb-0">Balance Sheet</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="balanceSheet1" className="collapse show" aria-labelledby="balanceSheet1" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body`}>
                                              <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"><h3>Liabilities</h3></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>Capital</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Reserves</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>Total Equity / Net Worth</strong></td>
                                                    <td className="text-center"><strong>2,480.00</strong></td>
                                                    <td className="text-center"><strong>1,260.00</strong></td>
                                                    <td className="text-center"><strong>7,400.00</strong></td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colspan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Creditors</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Other Current Liabilities</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border-top"><strong>Total Liabilities</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#incomeStatement" aria-expanded="true" aria-controls="incomeStatement">
                                            <h2 className="mb-0">Income Statement</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="incomeStatement" className="collapse" aria-labelledby="incomeStatement" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body`}>
                                              <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>Capital</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Reserves</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>Total Equity / Net Worth</strong></td>
                                                    <td className="text-center"><strong>2,480.00</strong></td>
                                                    <td className="text-center"><strong>1,260.00</strong></td>
                                                    <td className="text-center"><strong>7,400.00</strong></td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colspan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Creditors</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Other Current Liabilities</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border-top"><strong>Total Liabilities</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="gst" role="tabpanel">
                                <div className={`${styles.card} card`}>GST</div>
                            </div>
                            <div className="tab-pane fade" id="Compliance" role="tabpanel">
                                <div className={`${styles.card} card`}>Compliance</div>
                            </div>
                            <div className="tab-pane fade" id="Orders" role="tabpanel">
                                <div className={`${styles.card} card`}>Orders</div>
                            </div>
                            <div className="tab-pane fade" id="Credit" role="tabpanel">
                                <div className={`${styles.card} card`}>Credit</div>
                            </div>
                            <div className="tab-pane fade" id="cam" role="tabpanel">
                                <div className={`${styles.card} card`}>CAM</div>
                            </div>
                            <div className="tab-pane fade" id="Documents" role="tabpanel">
                                <div className={`${styles.card} card`}>Documents</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default index