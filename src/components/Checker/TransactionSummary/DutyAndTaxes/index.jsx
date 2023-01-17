import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';

function Index() {
    return (
        <>
            <SubHeader subHeader='Duty & Taxes' />

            <div className='d-flex flex-column ml-5 mb-4'>
                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-3.svg" className={`${styles.checked}`} alt="not present" />
                    </div>
                    <span className={`${styles.label}`}>Customs Duty with all Govt Cess</span>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-3.svg" className={`${styles.checked}`} alt="present" />
                    </div>
                    <span className={`${styles.label}`}>IGST with Cess, if applicable</span>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-4.svg" className={`${styles.unChecked}`} alt="not present" />
                    </div>
                    <span className={`${styles.label}`}>CIMS Charges ( incase commodity is Coal )</span>
                </div>

                <div className="ml-3 d-flex mb-4">
                    <div className='mr-4'>
                        <img src="/static/check-4.svg" className={`${styles.unChecked}`} alt="not present" />
                    </div>
                    <span className={`${styles.label}`}>Tax Collected at Source ( if applicable )</span>
                </div>

            </div>
        </>
    )
}

export default Index;