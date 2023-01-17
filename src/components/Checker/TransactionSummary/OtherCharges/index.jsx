import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';

function Index() {
    return (
        <>
            <SubHeader subHeader='Other Charges' />

            <div className='d-flex flex-column ml-5 mb-4'>
                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-3.svg" className={`${styles.checked}`} alt="not present" />
                    </div>
                    <span className={`${styles.label}`}>Demurrage / Detention Charges of Vessel</span>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" />
                    </div>
                    <span className={`${styles.label}`}>Transportation Charges</span>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" />
                    </div>
                    <span className={`${styles.label}`}>Wagon Haulage Charges ( in case of delivery through railways )</span>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-3.svg" className={`${styles.checked}`} alt="not present" />
                    </div>
                    <span className={`${styles.label}`}>3rd Party Inspection Charges</span>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" />
                    </div>
                    <span className={`${styles.label}`}>Hedging Charges</span>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" />
                    </div>
                    <span className={`${styles.label}`}>
                        Any other cost incurred on behalf of Buyer
                    </span>
                </div>

            </div>
        </>
    )
}

export default Index;