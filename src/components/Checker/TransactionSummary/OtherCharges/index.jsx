import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';

function Index({ otherCharges }) {
    return (
        <>
            <SubHeader subHeader='Other Charges' />

            <div className='d-flex flex-column ml-5 mb-4'>
                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {otherCharges?.demurrageOrDetentionChargesOfVessel ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Demurrage / Detention Charges of Vessel</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {otherCharges?.transportationCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Transportation Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {otherCharges?.wagonHaulageCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Wagon Haulage Charges ( in case of delivery through railways )</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {otherCharges?.thirdPartyInspectionCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>3rd Party Inspection Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {otherCharges?.hedgingCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Hedging Charges</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {otherCharges?.anyOtherCostIncurredOnBehalfOfBuyer ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>
                            Any other cost incurred on behalf of Buyer
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index;