import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';
import Tooltip from '../../../Tooltip';

function Index({ reimbursementofExpenses, reimbursementofExpensesHistory }) {
    return (
        <>
            <SubHeader subHeader='Reimbursement of Expenses' color='primary' />
            <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>
                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>25. Reimbursement of Expenses</span>
                    </div>

                    <div className={`${reimbursementofExpenses && styles.labelValue} font-weight-bold ${(reimbursementofExpensesHistory && reimbursementofExpensesHistory !== reimbursementofExpenses) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span className={``}>
                            {reimbursementofExpenses || '--'}
                        </span>

                    </div>
                    {reimbursementofExpensesHistory && reimbursementofExpensesHistory !== reimbursementofExpenses &&
                        <Tooltip data={reimbursementofExpensesHistory || '--'} />
                    }
                </div>
            </div>
        </>
    )
}

export default Index;