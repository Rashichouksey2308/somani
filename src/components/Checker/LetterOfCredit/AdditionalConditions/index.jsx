import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';
import AdditionalConditionsTable from './AdditionalConditionsTable';

function Index() {
    return (
        <>
            <SubHeader subHeader="47A ADDITIONAL CONDITIONS:" color="primary" noPadding />

            <div className='d-flex'>
                <div className={`enhanced_label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            1
                        </span>
                    </div>
                </div>
                <div className={`h5 w-75 pt-4 pl-5 pb-3`}>
                    <span>
                        UNLESS OTHERWISE STIPULATED, NO DOCUMENT OTHER THAN INVOICE AND DRAFT (IF ANY) TO SHOW UNIT PRICE, VALUE OF GOODS, CONTRACT NO AND DATE, DELIVERY TERMS, REFERENCE TO ANY LETTER OF CREDIT OR ANY BANK’S NAME/STAMP.
                    </span>
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            2
                        </span>
                    </div>

                </div>
                <div className={`label_value w-75 pt-4 pl-5 pb-3`}>
                    <AdditionalConditionsTable />
                </div>
            </div>
        </>
    )
}

export default Index;