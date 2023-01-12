
import styles from './index.module.scss';

function Index() {
    return (
        <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3 w-100'>

            <div className='d-flex mb-3 w-100'>
                <div className={`${styles.label}`}>
                    <span>16. Deliveries/Due date/Payment</span>
                </div>

                <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                    <span>
                    90 days from the vessel/container(s) at discharge date at discharge port or 120 days from the from the BL date, whichever is earlier, through TT or LC (in case of LC all Bank charges to be borne by the Buyer).
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Index;