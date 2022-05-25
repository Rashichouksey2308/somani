import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styles from './reviewqueue.module.scss'
import Order from '../../src/components/Order';
import ShipmentDetails from '../../src/components/ShipmentDetails'



import {Row,Col} from 'react-bootstrap'
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
                                <div className={`${styles.card} card`}>
                                   
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#compliance" aria-expanded="true" aria-controls="compliance">
                                            <div className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}>
                                              <h2 className="mb-0 w-100 ">Compliance</h2>
                                              <div className={`${styles.categories} mb-0  d-flex align-items-center justify-content-end `}>
                                                <label className={styles.label}>Status:</label>
                                                <div className={`${styles.status} d-flex align-items-center justify-content-between`}>
                                                  <span> NON-COMPLIANT HIGH RISK</span>
                                                </div>
                                              </div>
                                            </div>
                                            <span>+</span>
                                        </div>
                                        <div id="compliance" className="collapse" aria-labelledby="compliance" data-parent="#profileAccordion">
                                            <div className={` ${styles.cardBody_compliance} card-body`}>
                                              <Row className={` ${styles.row} mt-1 mb-1`}>
                                                <Col className={`${styles.col}`}  sm={2}>
                                                <span className={`${styles.head} d-flex align-items-center justify-content-flex-start`}>
                                                  Severe Risk (1)
                                                </span></Col>
                                                <Col className={`${styles.col}`}>
                                                 <div className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}>
                                              
                                                <div className={`${styles.val} d-flex align-items-center justify-content-flex-start`}>
                                                  <div className={`${styles.compliance_purple} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.purple_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                       IBBB
                                                     </div>
                                                  </div>
                                                 
                                               
                                                </div>
                                              </div>
                                                </Col>
                                              </Row>
                                               <Row className={` ${styles.row} mt-1 mb-1`} >
                                                <Col className={`${styles.col}`} sm={2}>
                                                <span className={styles.head}>
                                                 High Risk (4)
                                                </span></Col>
                                                <Col className={`${styles.col}`} >
                                                 <div className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}>
                                              
                                                <div className={`${styles.val} d-flex align-items-center justify-content-flex-start`}>
                                                <div className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.red_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                      EPF Transaction Default
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.red_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                     Credit Rating Suspended
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.red_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                      Credit Rating Withdrawn
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.red_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                     Qualified Opinion
                                                     </div>
                                                  </div>
                                                 
                                               
                                                </div>
                                              </div>
                                                </Col>
                                              </Row>
                                                <Row className={` ${styles.row} mt-1 mb-1`} >
                                                <Col className={`${styles.col}`} sm={2}>
                                                <span className={styles.head}>
                                                 Medium Risk (2)
                                                </span></Col>
                                                <Col className={`${styles.col}`} >
                                                 <div className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}>
                                              
                                                <div className={`${styles.val} d-flex align-items-center justify-content-flex-start`}>
                                                <div className={`${styles.compliance_yellow} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.yellow_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                      Generic Address
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_yellow} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.yellow_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                   GST Transaction Delay
                                                     </div>
                                                  </div>
                                              
                                                 
                                               
                                                </div>
                                              </div>
                                                </Col>
                                              </Row>
                                                <Row className={` ${styles.row} mt-1 mb-1`} >
                                                <Col className={`${styles.col}`} sm={2}>
                                                <span className={styles.head}>
                                                 High Risk (4)
                                                </span></Col>
                                                <Col className={`${styles.col}`} >
                                                 <div className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}>
                                              
                                                <div className={`${styles.val} d-flex align-items-center justify-content-flex-start`}>
                                                <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                     GST Inactive
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                     GST Transaction Default
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                      IEC In Denied Entity List
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                     TDS Payment Delay
                                                     </div>
                                                  </div>
                                                    <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                    EPF Closed
                                                     </div>
                                                  </div>
                                                    <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                  EPF Transaction Delay
                                                     </div>
                                                  </div>
                                                      <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} ml-1`}>
                                                 Credit Rating Outlook Negative
                                                     </div>
                                                  </div>
                                                 
                                               
                                                </div>
                                              </div>
                                                </Col>
                                              </Row>
                                             
                                              

                                             

                                             
                                             
                                              
                                            
                                              
                                            </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                    </div>
                                </div>
                                {/* details */}
                                 <div className={`${styles.card} card`}>
                                   
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#details" aria-expanded="true" aria-controls="details">
                                            <div className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}>
                                              <h2 className="mb-0 w-100 ">Details</h2>
                                              <div className={`${styles.categories} mb-0  d-flex align-items-center justify-content-between `}>
                                                <label className={styles.label}>Categories:</label>
                                                <select class="form-control">
                                                  <option>Statutory Compliance</option>
                                                </select>
                                              </div>
                                            </div>
                                            <span>+</span>
                                        </div>
                                        <div id="details" className="collapse" aria-labelledby="details" data-parent="#profileAccordion">
                                            <div className={` ${styles.cardBody_details} card-body`}>
                                           
                                              
                                            {table2()}
                                             

                                             
                                             
                                              
                                            
                                              
                                            </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                    </div>
                                </div>
                                 <div className={`${styles.card} card`}>
                                   
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations" aria-expanded="true" aria-controls="litigations">
                                            <h2 className="mb-0">Litigations</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="litigations" className="collapse" aria-labelledby="litigations" data-parent="#profileAccordion">
                                          <div className={` ${styles.cardBody_litigations} card-body`}>
                                           <div className={`${styles.checkbox_Container} d-flex align-items-center justify-content-between`} data-toggle="collapse">
                                             <div className={`${styles.leftGroup}  d-flex align-items-center justify-content-start`}>
                                               <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                 Pending (4)
                                                </label>
                                              </div>
                                               <div className="form-check ml-4">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                 Disposed (2)
                                                </label>
                                              </div>
                                               <div className="form-check  ml-4">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                 Total Cases (5)
                                                </label>
                                              </div>
                                             </div>
                                              <div className={`${styles.rightGroup} d-flex align-items-center justify-content-start`}>
                                           <div className="form-check mr-4">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                              <label className="form-check-label" for="flexRadioDefault1">
                                                Respondent
                                              </label>
                                            </div>
                                            <div className="form-check">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                              <label className="form-check-label" for="flexRadioDefault2">
                                               Petitioner
                                              </label>
                                            </div>

                                              </div>
                                            
                                           </div>
                                           <div className={`${styles.risk_Container} d-flex align-items-center justify-content-between mt-4 mb-4`}>
                                             <div className={`${styles.risk}  d-flex align-items-center`}>
                                               <div className={`${styles.risk_icon} d-flex align-items-center justify-content-center`}>
                                                 <img src="#"></img>
                                               </div>
                                               <div className={`ml-4`}>
                                                 <div>High Risk (5)</div>
                                                 <span>Pending Case: 4 Disposed Case: 4</span>
                                               </div>

                                               
                                             </div>
                                              <div className={`${styles.risk}  d-flex align-items-center ml-2`} style={{backgroundColor:"#FFE9C5"}}>
                                               <div className={`${styles.risk_icon} d-flex align-items-center justify-content-center`} style={{backgroundColor:"#FF9D00"}}>
                                                 <img src="#"></img>
                                               </div>
                                               <div className={`ml-4`}>
                                                 <div>Medium Risk (5)</div>
                                                 <span>Pending Case: 4 Disposed Case: 4</span>
                                               </div>

                                               
                                             </div>
                                              <div className={`${styles.risk}  d-flex align-items-center ml-2`}  style={{backgroundColor:"#F3F4F7"}}>
                                               <div className={`${styles.risk_icon} d-flex align-items-center justify-content-center`}  style={{backgroundColor:"#9EB6FF"}}>
                                                 <img src="#"></img>
                                               </div>
                                               <div className={`ml-4`}>
                                                 <div>High Priority (5)</div>
                                                 <span>Pending Case: 4 Disposed Case: 4</span>
                                               </div>

                                               
                                             </div>
                                              <div className={`${styles.risk}  d-flex align-items-center ml-2`} style={{backgroundColor:"#FFE8E8"}}>
                                               <div className={`${styles.risk_icon} d-flex align-items-center justify-content-center`}  style={{backgroundColor:"#EA3F3F"}}>
                                                 <img src="#"></img>
                                               </div>
                                               <div className={`ml-4`}>
                                                 <div>Stagnant Cases (5))</div>
                                                 <span>Pending Case: 4 Disposed Case: 4</span>
                                               </div>

                                               
                                             </div>
                                           </div>

                                           <div>
                                           {ligitations()}
                                           </div>
                                         

                                          </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Orders" role="tabpanel">
                                <div>
                                 
                                  <Order/>
                                  <ShipmentDetails/>
                                 
                                </div>
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

const ligitations=()=>{
  return(
    <>
       <div className={`${styles.card_litigations} card`}>
                                   
                                         <div className={`${styles.card_ligitations_holder}`}>
                                             <div className={`${styles.cardHeader_litigations} card-header d-flex align-items-center justify-content-between`} data-toggle="collapse" data-target="#Tribunals" aria-expanded="true" aria-controls="Tribunals">
                                            <Row className={`${styles.row}`}>
                                              <Col><div className="mb-0">Tribunals</div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center `}><span>Pending Case</span><span className={styles.lower}>4</span></div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center `}><span>Disposed case</span><span className={styles.lower}>4</span></div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center`}><span>Total cases</span>
                                              <div className={styles.chart}>
                                                <div className={styles.container}>
                                                  <div className={styles.fill}></div>
                                                  <span>11</span>
                                                </div>
                                                
                                              </div>
                                              </div>
                                             </Col>
                                            
                                             
                                            </Row>
                                              <h2 className="mb-0" sm={1}>+</h2>
                                        </div>
                                        <div id="Tribunals" className="collapse" aria-labelledby="Tribunals" data-parent="#profileAccordion">
                                          <div className={` ${styles.cardBody_Tribunals} card-body`}>
                                         
                                               <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                   
                                                    <th className="">S.NO</th>
                                                    <th className="">CINO.</th>
                                                    <th className="">CASE NO.</th>
                                                    <th className="">CASE TYPE</th>
                                                    <th className="">SECTION</th>
                                                    <th className="">PETITIONER</th>
                                                    <th className="">RESPONDENT</th>
                                                    <th className="">PREVIEW</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>1.</td>
                                                    <td className="">DLND0201</td>
                                                    <td className="">CC NI ACT/4476/2021</td>
                                                    <td className="">CC NI ACT</td>
                                                    <td className="">U/S 7 lbc 2016</td>
                                                    <td className="">Ms. Juhi Singh</td>
                                                    <td className="">Ms. Juhi Singh</td>
                                                     <td className="text-center"><img src="static/eye"></img></td>
                                                  </tr>
                                                 
                                                </tbody>
                                              </table>
                           
                                       

                                           <div>
                                            
                                           </div>
                                         

                                          </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                         </div>
                                         </div>
                                      
                                        


    </div>
      <div className={`${styles.card_litigations} card`}>
                                   
                                         <div className={`${styles.card_ligitations_holder}`}>
                                             <div className={`${styles.cardHeader_litigations} card-header d-flex align-items-center justify-content-between`} data-toggle="collapse" data-target="#Tribunals" aria-expanded="true" aria-controls="Tribunals">
                                            <Row className={`${styles.row}`}>
                                              <Col><div className="mb-0">Tribunals</div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center `}><span>Pending Case</span><span className={styles.lower}>4</span></div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center `}><span>Disposed case</span><span className={styles.lower}>4</span></div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center`}><span>Total cases</span>
                                              <div className={styles.chart}>
                                                <div className={styles.container}>
                                                  <div className={styles.fill}></div>
                                                  <span>11</span>
                                                </div>
                                                
                                              </div>
                                              </div>
                                             </Col>
                                            
                                             
                                            </Row>
                                              <h2 className="mb-0" sm={1}>+</h2>
                                        </div>
                                        <div id="Tribunals" className="collapse" aria-labelledby="Tribunals" data-parent="#profileAccordion">
                                          <div className={` ${styles.cardBody_Tribunals} card-body`}>
                                         
                                               <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                   
                                                    <th className="">S.NO</th>
                                                    <th className="">CINO.</th>
                                                    <th className="">CASE NO.</th>
                                                    <th className="">CASE TYPE</th>
                                                    <th className="">SECTION</th>
                                                    <th className="">PETITIONER</th>
                                                    <th className="">RESPONDENT</th>
                                                    <th className="">PREVIEW</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>1.</td>
                                                    <td className="">DLND0201</td>
                                                    <td className="">CC NI ACT/4476/2021</td>
                                                    <td className="">CC NI ACT</td>
                                                    <td className="">U/S 7 lbc 2016</td>
                                                    <td className="">Ms. Juhi Singh</td>
                                                    <td className="">Ms. Juhi Singh</td>
                                                     <td className="text-center"><img src="static/eye"></img></td>
                                                  </tr>
                                                 
                                                </tbody>
                                              </table>
                           
                                       

                                           <div>
                                            
                                           </div>
                                         

                                          </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                         </div>
                                         </div>
                                      
                                        


    </div>
      <div className={`${styles.card_litigations} card`}>
                                   
                                         <div className={`${styles.card_ligitations_holder}`}>
                                             <div className={`${styles.cardHeader_litigations} card-header d-flex align-items-center justify-content-between`} data-toggle="collapse" data-target="#Tribunals" aria-expanded="true" aria-controls="Tribunals">
                                            <Row className={`${styles.row}`}>
                                              <Col><div className="mb-0">Tribunals</div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center `}><span>Pending Case</span><span className={styles.lower}>4</span></div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center `}><span>Disposed case</span><span className={styles.lower}>4</span></div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center`}><span>Total cases</span>
                                              <div className={styles.chart}>
                                                <div className={styles.container}>
                                                  <div className={styles.fill}></div>
                                                  <span>11</span>
                                                </div>
                                                
                                              </div>
                                              </div>
                                             </Col>
                                            
                                             
                                            </Row>
                                              <h2 className="mb-0" sm={1}>+</h2>
                                        </div>
                                        <div id="Tribunals" className="collapse" aria-labelledby="Tribunals" data-parent="#profileAccordion">
                                          <div className={` ${styles.cardBody_Tribunals} card-body`}>
                                         
                                               <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                   
                                                    <th className="">S.NO</th>
                                                    <th className="">CINO.</th>
                                                    <th className="">CASE NO.</th>
                                                    <th className="">CASE TYPE</th>
                                                    <th className="">SECTION</th>
                                                    <th className="">PETITIONER</th>
                                                    <th className="">RESPONDENT</th>
                                                    <th className="">PREVIEW</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>1.</td>
                                                    <td className="">DLND0201</td>
                                                    <td className="">CC NI ACT/4476/2021</td>
                                                    <td className="">CC NI ACT</td>
                                                    <td className="">U/S 7 lbc 2016</td>
                                                    <td className="">Ms. Juhi Singh</td>
                                                    <td className="">Ms. Juhi Singh</td>
                                                     <td className="text-center"><img src="static/eye"></img></td>
                                                  </tr>
                                                 
                                                </tbody>
                                              </table>
                           
                                       

                                           <div>
                                            
                                           </div>
                                         

                                          </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                         </div>
                                         </div>
                                      
                                        


    </div>
      <div className={`${styles.card_litigations} card`}>
                                   
                                         <div className={`${styles.card_ligitations_holder}`}>
                                             <div className={`${styles.cardHeader_litigations} card-header d-flex align-items-center justify-content-between`} data-toggle="collapse" data-target="#Tribunals" aria-expanded="true" aria-controls="Tribunals">
                                            <Row className={`${styles.row}`}>
                                              <Col><div className="mb-0">Tribunals</div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center `}><span>Pending Case</span><span className={styles.lower}>4</span></div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center `}><span>Disposed case</span><span className={styles.lower}>4</span></div>
                                             </Col>
                                              <Col><div className={`${styles.head} mb-0 d-flex align-items-center`}><span>Total cases</span>
                                              <div className={styles.chart}>
                                                <div className={styles.container}>
                                                  <div className={styles.fill}></div>
                                                  <span>11</span>
                                                </div>
                                                
                                              </div>
                                              </div>
                                             </Col>
                                            
                                             
                                            </Row>
                                              <h2 className="mb-0" sm={1}>+</h2>
                                        </div>
                                        <div id="Tribunals" className="collapse" aria-labelledby="Tribunals" data-parent="#profileAccordion">
                                          <div className={` ${styles.cardBody_Tribunals} card-body`}>
                                         
                                               <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                   
                                                    <th className="">S.NO</th>
                                                    <th className="">CINO.</th>
                                                    <th className="">CASE NO.</th>
                                                    <th className="">CASE TYPE</th>
                                                    <th className="">SECTION</th>
                                                    <th className="">PETITIONER</th>
                                                    <th className="">RESPONDENT</th>
                                                    <th className="">PREVIEW</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>1.</td>
                                                    <td className="">DLND0201</td>
                                                    <td className="">CC NI ACT/4476/2021</td>
                                                    <td className="">CC NI ACT</td>
                                                    <td className="">U/S 7 lbc 2016</td>
                                                    <td className="">Ms. Juhi Singh</td>
                                                    <td className="">Ms. Juhi Singh</td>
                                                     <td className="text-center"><img src="static/eye"></img></td>
                                                  </tr>
                                                 
                                                </tbody>
                                              </table>
                           
                                       

                                           <div>
                                            
                                           </div>
                                         

                                          </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                         </div>
                                         </div>
                                      
                                        


    </div>
     

    </>
                                            
  )
}

const table2=()=>{
return(
    <table className={`${styles.table_details} table`} cellpadding="0" cellspacing="0" border="1">
                                                <thead>
                                                  <tr>
                                                   
                                                    <th className=""></th>
                                                    <th className="">ALERT</th>
                                                    <th className="">SEVERITY</th>
                                                    <th className="">SOURCE</th>
                                                    <th className="">ID TYPE</th>
                                                    <th className="">VALUE</th>
                                                    
                                                  </tr>
                                                </thead>
                                                <tbody >
                                                  <tr>
                                                    <td className={styles.firstCell} rowspan="3">Statutory Compliance</td>
                                                    <td> EPF Transaction Default</td>
                                                       <td> High</td>
                                                          <td> EPF</td>
                                                             <td> Establishment ID</td>
                                                                <td> MRMRT0015543000, UKDDN0020827000</td>
                                                                  
                                                        
                                                      
                                                   </tr>
                                                   <tr>
                                                   
                                                      <td> IEC In Denied Entity List</td>
                                                          <td> Medium</td>
                                                             <td> IEC</td>
                                                                <td> IEC</td>
                                                                   <td> 290000291</td>
                                                   </tr>

                                                    <tr>
                                                    {/* <td rowspan="3">Statutory Compliance</td> */}
                                                   
                                                       <td> GST Transaction Default</td>
                                                          <td> Medium</td>
                                                             <td> GST</td>
                                                                <td> GSTIN</td>
                                                                   <td>05AAGCS8808K2ZY, 09AAGCS8808K1ZR</td>
                                                        
                                                      
                                                   </tr>
                                                  
                                                   <tr>
                                                     <td className={styles.firstCell} rowspan="6">Banking Defaults</td>
                                                        <td> IBBI</td>
                                                          <td>Severe</td>
                                                             <td> </td>
                                                                <td> </td>
                                                                   <td> </td>
                                                   </tr>
                                                     <tr>
                                                  
                                                        <td> Credit Rating Suspended</td>
                                                          <td> High</td>
                                                             <td>ICRA</td>
                                                                <td>Establishment ID</td>
                                                                   <td>MRMRT0015543000, UKDDN0020827000</td>
                                                   </tr>
                                                      <tr>
                                                  
                                                        <td> Credit Rating Withdrawn</td>
                                                          <td>High</td>
                                                             <td> BRICKWORK</td>
                                                                <td> Date Of Issuance</td>
                                                                   <td>30-04-2020</td>
                                                   </tr>
                                                      <tr>
                                                  
                                                        <td> </td>
                                                          <td> </td>
                                                             <td> BRICKWORK</td>
                                                                <td> Date Of Issuance</td>
                                                                   <td>30-04-2020</td>
                                                   </tr>

                                                      <tr>
                                                  
                                                         <td> </td>
                                                          <td> </td>
                                                             <td> BRICKWORK</td>
                                                                <td> Date Of Issuance</td>
                                                                   <td>30-04-2020</td>
                                                   </tr>
                                                      <tr>
                                                  
                                                         <td> </td>
                                                          <td> </td>
                                                             <td> BRICKWORK</td>
                                                                <td> Date Of Issuance</td>
                                                                   <td>30-04-2020</td>
                                                   </tr>
                                                 

                                                </tbody>
                                              </table>
)
}