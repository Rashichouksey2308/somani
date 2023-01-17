import styles from './index.module.scss';

function Index() {
    return (
        <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>
            <div className='d-flex mb-3'>
                <div className={`${styles.label}`}>
                    <span>25. Reimbursement of Expenses</span>
                </div>

                <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                    <span>
                        Post CFR expenses to be reimbursed on actual basis if applicable as attached.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Index;