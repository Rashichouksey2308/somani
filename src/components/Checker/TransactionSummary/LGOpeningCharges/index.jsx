import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';

function Index({ lcOpeningCharges }) {
    return (
        <>
            <SubHeader subHeader='LG Opening Charges' />

            <div className='d-flex flex-column ml-5 mb-4'>
                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {lcOpeningCharges?.lcOpeningCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>LC Opening Charges ( on LC value subject to minimum of USD 1500)</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {lcOpeningCharges?.lcAmendmentCost ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>LC Amendment Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {lcOpeningCharges?.cmaFeesIncludingSupervisionAndSurvey ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}> CMA Fees including supervision and survey</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {lcOpeningCharges?.bankDoIssuanceCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Bank DO Issuance charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {lcOpeningCharges?.remmittanceCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Remmittance Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {lcOpeningCharges?.usanceInterest ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>
                            Usance Interest
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index;