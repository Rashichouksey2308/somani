/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../profile.module.scss'

function Index({ companyDetail }) {
console.log(companyDetail,"company detailes")
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
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.companyName}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>CIN</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.CIN}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Company PAN</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.pans[0]} <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>IEC Number</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.IEC}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Type of Business</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.typeOfBusiness[0]}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Date of Incorporation</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.dateOfIncorporation}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Listing Status</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.listingStatus}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Constitution</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.Constitution}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Active Compliant</div>
                    <div className={`${`${styles.value} accordion_Text`} ${companyDetail.activeCompliance ? styles.success : styles.warning }`}>{companyDetail.activeCompliance ? "YES" : "NO"}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Contact Number</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.contactNumber}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Email Domain</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.emailDomain}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Number of Shareholders</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.numberOfShareholders}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Shell/ Hawala Score</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.hawalaScore}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Paid-Up Capital (Cr)</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.paidUpCapital}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Last Balance Sheet</div>
                    <div className={`${`${styles.value} accordion_Text`} ${companyDetail.lastBalanceSheet ? styles.success : styles.warning }`}>{companyDetail.lastBalanceSheet}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Employee Count</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.employeeCount}</div>
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
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.registeredAddress}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Corporate Address</div>
                    <div className={`${styles.value} accordion_Text`}>{companyDetail.registeredAddress}</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.label} label_heading`}>Referral Code</div>
                    <div className={`${styles.value} accordion_Text`}>U55101UR19</div>
                </div>
                
            </div>
            <div className="row">
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select
                    className={`${styles.input_field} input form-control`}
                    name="Sourcing">
                    
                    <option value="Website">Website</option>
                    
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                    Sourcing Channel*
                    <strong className="text-danger">*</strong>
                    </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select
                    className={`${styles.input_field} input form-control`}
                    name="Sourcing">
                    
                    <option value="CHA">CHA</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                    Referred By 
                    <strong className="text-danger">*</strong>
                    </label>
                </div>
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                    <select
                    className={`${styles.input_field} input form-control`}
                    name="Sourcing">
                    
                    <option value="Bhutani Traders">Bhutani Traders</option>
                    
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                    Referral Name
                    <strong className="text-danger">*</strong>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
   </>
  )
}

export default Index