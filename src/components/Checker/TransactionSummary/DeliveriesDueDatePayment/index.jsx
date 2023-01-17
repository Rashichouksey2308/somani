
import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';
import Tooltip from '../../../Tooltip';

function Index({ deliveryDueDatePaymentComments, deliveryDueDatePaymentHistoryComments }) {
    return (
        <>
            <SubHeader subHeader='Deliveries/Due Date/Payment' color='primary' />
            <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3 w-100'>

                <div className='d-flex mb-3 w-100 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>16. Deliveries/Due date/Payment</span>
                    </div>

                    <div className={`${deliveryDueDatePaymentComments && styles.labelValue} font-weight-bold ${(deliveryDueDatePaymentHistoryComments && deliveryDueDatePaymentHistoryComments !== deliveryDueDatePaymentComments) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {deliveryDueDatePaymentComments || '--'}
                        </span>
                        
                    </div>
                    {deliveryDueDatePaymentHistoryComments && deliveryDueDatePaymentHistoryComments !== deliveryDueDatePaymentComments &&
                            <Tooltip data={deliveryDueDatePaymentHistoryComments || '--'} />
                        }
                </div>
            </div>
        </>

    )
}

export default Index;