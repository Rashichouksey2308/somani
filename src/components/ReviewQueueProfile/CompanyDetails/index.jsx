import React from 'react'
import styles from '../profile.module.scss'

function Index() {
  return (
   <>
   <div className={`${styles.card}  card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#companyDetails" aria-expanded="true" aria-controls="companyDetails">
                                            <h2 className="mb-0">Company Details</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="companyDetails" className="collapse" aria-labelledby="companyDetails" data-parent="#profileAccordion">
                                            <div className={`${styles.cardBody} card-body border_color`}>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Company Name</div>
                                                        <div className={`${styles.value} accordion_Text`}>Ramakrishna Traders</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>CIN</div>
                                                        <div className={`${styles.value} accordion_Text`}>U55101UR1986PL007811</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Company PAN</div>
                                                        <div className={`${styles.value} accordion_Text`}>AAOCS3552N <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>IEC Number</div>
                                                        <div className={`${styles.value} accordion_Text`}>2904000291</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Type of Business</div>
                                                        <div className={`${styles.value} accordion_Text`}>Manufacturer</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Date of Incorporation</div>
                                                        <div className={`${styles.value} accordion_Text`}>13-01-2019</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Listing Status</div>
                                                        <div className={`${styles.value} accordion_Text`}>Unlisted</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Constitution</div>
                                                        <div className={`${styles.value} accordion_Text`}>Public Ltd.</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Active Compliant</div>
                                                        <div className={`${`${styles.value} accordion_Text`} ${styles.warning}`}>No</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Contact Number</div>
                                                        <div className={`${styles.value} accordion_Text`}>0612-7894523</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Email Domain</div>
                                                        <div className={`${styles.value} accordion_Text`}>ramkrishnatraders@gmail.com</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Number of Shareholders</div>
                                                        <div className={`${styles.value} accordion_Text`}>6</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Shell/ Hawala Score</div>
                                                        <div className={`${styles.value} accordion_Text`}>60</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Paid-Up Capital (Cr)</div>
                                                        <div className={`${styles.value} accordion_Text`}>100.00</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Last Balance Sheet</div>
                                                        <div className={`${`${styles.value} accordion_Text`} ${styles.warning}`}>13-03-2019</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Employee Count</div>
                                                        <div className={`${styles.value} accordion_Text`}>25</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Existing Limit (Cr)</div>
                                                        <div className={`${styles.value} accordion_Text`}>10.00</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Utilized Limit (Cr)</div>
                                                        <div className={`${styles.value} accordion_Text`}>2.00</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Registered Address</div>
                                                        <div className={`${styles.value} accordion_Text`}>123, My Building Famous Lane Hyderabad, Telangana - 500072</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Corporate Address</div>
                                                        <div className={`${styles.value} accordion_Text`}>561, My Building Lane No. 11 Delhi, Delhi - 110001</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className={`${styles.label} label_heading`}>Referral Code</div>
                                                        <div className={`${styles.value} accordion_Text`}>U55101UR19</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
   </>
  )
}

export default Index