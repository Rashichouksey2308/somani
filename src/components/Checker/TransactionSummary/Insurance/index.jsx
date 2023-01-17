import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';

function Index({ insurance }) {
    return (
        <>
            <SubHeader subHeader='Insurance' />

            <div className='d-flex flex-column ml-5 mb-4'>
                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {insurance?.marineInsurance ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Marine Insurance ( if applicable )</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {insurance?.storageInsurance ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>Storage Insurance ( Fire & Burglary )</span>
                    </div>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        {insurance?.insuranceCharges ?
                            <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" /> :
                            <img src="/static/check-4.svg" className={`${styles.checked}`} alt="not present" />
                        }
                    </div>
                    <div className='termsheet_value'>
                        <span className={`${styles.label}`}>
                            Insurance Charges ( While transferring the material to customs bonded warehouse )
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index;