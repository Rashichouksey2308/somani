/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from '../profile.module.scss'
import CommonSave from '../../CommonSave'
import { useDispatch} from 'react-redux'
import {UpdateCompanyDetails} from '../../../redux/companyDetail/action'

function Index({order, companyDetail }) {


    const [updateCompany, setUpdateCompany] = useState({
        _id: companyDetail?.company
    })

    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        const Key = e.target.id
        const value = e.target.value
        console.log(Key, ":", value)
        setUpdateCompany(prev => ({ ...prev, [Key]: value }))
    }

    const saveHandler = () => {
        //console.log(updateCompany,"updateCompany")
        dispatch(UpdateCompanyDetails(updateCompany))
    }
    console.log(order,'order', companyDetail)

    return (

        <>
            <div className={`${styles.card} vessel_card card`}>
                <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#companyDetails" aria-expanded="true" aria-controls="companyDetails">
                    <h2 className="mb-0">Company Details</h2>
                    <span>+</span>
                </div>
                <div id="companyDetails" className="collapse" aria-labelledby="companyDetails" data-parent="#profileAccordion">
                    <div className={`${styles.cardBody} card-body border_color`}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Company Name</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.companyName}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>CIN</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.CIN}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Company PAN</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.pans[0]} <img src="/static/approved.svg" alt="Approved" className="img-fluid mt-n1" /></div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>IEC Number</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.IEC}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Type of Business</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.typeOfBusiness[0]}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Date of Incorporation</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.dateOfIncorporation}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Listing Status</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.listingStatus}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Constitution</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.Constitution}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Active Compliant</div>
                                <div className={`${`${styles.value} accordion_Text`} ${companyDetail?.profile?.companyDetail?.activeCompliance ? styles.success : styles.warning}`}>{companyDetail?.activeCompliance ? "Yes" : "No"}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Contact Number</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.contactNumber}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Email Domain</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.emailDomain} <img src='/static/approved.svg' alt='approved' className='img-fluid'/></div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Number of Shareholders</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.numberOfShareholders}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Shell/ Hawala Score</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.hawalaScore}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Paid-Up Capital (Cr)</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.paidUpCapital}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Last Balance Sheet</div>
                                <div className={`${`${styles.value} accordion_Text`} ${companyDetail?.profile?.companyDetail?.lastBalanceSheet ? styles.success : styles.warning}`}>{companyDetail?.lastBalanceSheet}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Employee Count</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.employeeCount}</div>
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
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.registeredAddress}</div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Corporate Address</div>
                                <div className={`${styles.value} accordion_Text`}>{companyDetail?.profile?.companyDetail?.registeredAddress}</div>
                            </div>
                            {/* <div className="col-md-3">
                                <div className={`${styles.label} label_heading`}>Referral Code</div>
                                <div className={`${styles.value} accordion_Text`}>U55101UR19</div>
                            </div> */}

                        </div>
                        <div className="row">
                            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                 <div className='d-flex'>
                                <select id='sourceChanel' onChange={onChangeHandler}
                                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                    name="Sourcing">
                                    <option value="SocialMedia">{order?.sourceChanel}</option>
                                    <option value="Website">Website</option>
                                    
                                </select>
                                <label className={`${styles.label_heading} label_heading`}>
                                    Sourcing Channel
                                    <strong className="text-danger">*</strong>
                                </label>
                                <img
                                    className={`${styles.arrow} img-fluid`}
                                    src="/static/inputDropDown.svg"
                                    alt="Search"
                                />
                           </div>
                            </div>
                            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                <div className='d-flex'>
                                <select id='referedBy' onChange={onChangeHandler}
                                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                    name="Sourcing" >

                                    <option value="CHA">{order?.referedBy}</option>
                                    <option value="Not CHA">Not CHA</option>
                                </select>
                                <label className={`${styles.label_heading} label_heading`}>
                                    Referred By
                                    <strong className="text-danger">*</strong>
                                </label>
                                <img
                                    className={`${styles.arrow} img-fluid`}
                                    src="/static/inputDropDown.svg"
                                    alt="Search"
                                />
                        </div>
                            </div>
                            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                                  <div className='d-flex'>
                                <select id='referalName' onChange={onChangeHandler}
                                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                    name="Sourcing">

                                    <option value="">Bhutani Traders</option>

                                </select>
                                <label className={`${styles.label_heading} label_heading`}>
                                    Referral Name
                                    <strong className="text-danger">*</strong>
                                </label>
                                 <img
                                    className={`${styles.arrow} img-fluid`}
                                    src="/static/inputDropDown.svg"
                                    alt="Search"
                                />
                        </div>
                            </div>
                            <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                             <button onClick={saveHandler} className={`${styles.saveBtn} `}>Save</button>
                            </div>

                            {/* <div className='mt-3 ml-3'>
                            <CommonSave onSave={saveHandler} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index