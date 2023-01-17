import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';

function Index({ companyName }) {
    return (
        <>
            <SubHeader subHeader='Other Terms & Conditions' color='primary' />
            <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>
                <div className='d-flex mb-3'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>
                            {`Below charges are to be borne and paid by the Buyer on actual basis,wherever applicable. ${companyName} will provide proof of all expenses to the Buyer.`}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;