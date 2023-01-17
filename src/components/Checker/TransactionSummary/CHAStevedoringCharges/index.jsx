import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';

function Index({ chaOrstevedoringCharges }) {
    return (
        <>
            <SubHeader subHeader='CHA/Stevedoring Charges' />
            <div className='d-flex flex-column ml-5 mb-4'>
                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.customClearingCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Customs clearing charges / handling charges / CHA Fee</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.wharfaceCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Wharfage Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.pollutionCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Pollution charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.royalyAndPenaltyCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Royalty and Penalty Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.draughtSurveyCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Draught Survey Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.boatingWhileDraughtSurveyCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Boating while Draught Survey Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.hmcCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>HMC Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.securityCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Security Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.piotRentalAndStorageCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Plot Rental & Storage Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.bondingOfCargoCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Bonding of Cargo Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.exBondDocumentationCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Ex - Bond Documentation Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.transferOfOwnershipCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Transfer of Ownership Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.customsBondOfficerOvertimeCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Customs Bond Officer Overtime Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.grabHireCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Grab Hire Charge</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.craneHireCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Crane Hire Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.handlingLosses ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Handling Losses</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.waterSprinklingCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Water Sprinkling Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {chaOrstevedoringCharges?.others ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Others, if any</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index;