import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';

function Index({ dutyAndTaxes }) {
    return (
        <>
            <SubHeader subHeader='Duty & Taxes' />

            <div className='d-flex flex-column ml-5 mb-4'>
                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {dutyAndTaxes?.customsDutyWithAllGovtCess ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Customs Duty with all Govt Cess</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {dutyAndTaxes?.igstWithCess ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>IGST with Cess, if applicable</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {dutyAndTaxes?.cimsCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>CIMS Charges ( incase commodity is Coal )</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {dutyAndTaxes?.taxCollectedatSource ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Tax Collected at Source ( if applicable )</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index;