import styles from './index.module.scss';
import SubHeader from '../Common/SubHeader';
import CommodityDetails from './CommodityDetails';
import TransactionDetails from './TransactionDetails';
import StorageofGoods from './StorageofGoods';
import DeliveriesDueDatePayment from './DeliveriesDueDatePayment';
import CommercialTerms from './CommercialTerms';
import ReimbursementofExpenses from './ReimbursementofExpenses';
import OtherTermsAndConditions from './OtherTermsAndConditions';
import CHAStevedoringCharges from './CHAStevedoringCharges';
import Insurance from './Insurance';
import LGOpeningCharges from './LGOpeningCharges';
import OtherCharges from './OtherCharges';
import DutyAndTaxes from './DutyAndTaxes';

import Remarks from '../Common/Remarks';

function Index() {  
    return (
        <div className='w-100 p-3 mb-5'>
            <div className='card m-3 pb-4 pt-4'>
                <div className='d-flex justify-content-between m-3 p-3'>
                    <div className='d-flex flex-column'>
                        <div className='m-2'>
                            <span className='font-weight-bold h5 mr-1'>Order ID:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`}>2FCH6589</span>
                        </div>

                        <div className='m-2'>
                            <span className='font-weight-bold h5 mr-1'>Buyer:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`} >M/s Vishnu Chemicals Limited</span>
                        </div>
                    </div>

                    <div>
                        <span className={`${styles.main_header} font-weight-bold text-uppercase`}>
                            Transaction Summary
                        </span>
                    </div>

                    <div>
                        <div className='m-2'>
                            <span className='font-weight-bold h5'>Date:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`} >12-02-2022</span>
                        </div>
                    </div>
                </div>

                <SubHeader subHeader='Commodity Details' color='primary' />

                <CommodityDetails />

                <SubHeader subHeader='Transaction Details' color='primary' />

                <TransactionDetails />

                <SubHeader subHeader='Storage of Goods' color='primary' />

                <StorageofGoods />

                <SubHeader subHeader='Deliveries/Due Date/Payment' color='primary' />

                <DeliveriesDueDatePayment />

                <SubHeader subHeader='Commercial Terms' color='primary' />

                <CommercialTerms />

                <SubHeader subHeader='Reimbursement of Expenses' color='primary' />

                <ReimbursementofExpenses />

                <SubHeader subHeader='Other Terms & Conditions' color='primary' />

                <OtherTermsAndConditions />

                <div className='mt-1 mb-2 d-flex justify-content-center'>
                    <div className='mr-3 w-100'>
                        <CHAStevedoringCharges />
                        <Insurance />
                    </div>


                    <div className='ml-3 w-100'>
                        <LGOpeningCharges />
                        <OtherCharges />
                        <DutyAndTaxes />

                    </div>
                </div>

                <span className={`${styles.note} text-center pb-5`}>
                    <p>
                        All necessary documents to be filed with Customs department for discharge of goods & Customs clearance can be filed by IGPL or its nominated person.
                    </p>
                     * GST charges extra wherever applicable
                </span>
            </div>

            <div className='m-3'>
                <Remarks />
            </div>

        </div>
    );
}

export default Index;