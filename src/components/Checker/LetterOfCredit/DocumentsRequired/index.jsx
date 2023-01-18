import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';
import Tooltip from '../../../Tooltip';

function Index({ documentsRequired, documentsRequiredHistory }) {

    return (
        <>
            <SubHeader subHeader="46A DOCUMENT REQUIRED:" color="primary" noPadding />

            {documentsRequired?.length > 0 ?
                documentsRequired?.map((document, index) => (
                    <div className='d-flex text-uppercase'>
                        <div className={`enhanced_label w-50 p-4 pl-5 d-flex`}>
                            <div>
                                <span className={`${styles.inner_label} h5`}>
                                    {index + 1}
                                </span>
                            </div>
                        </div>
                        <div className={`h5 w-75 pt-4 pl-5 pb-3`}>
                            <span className={`${(documentsRequiredHistory && documentsRequiredHistory[index] && documentsRequiredHistory[index] !== documentsRequired[index]) && styles.highlighted_field}`}>
                                {document || '--'}
                            </span>
                            {
                                (documentsRequiredHistory && documentsRequiredHistory[index] && documentsRequiredHistory[index] !== documentsRequired[index]) &&
                                <Tooltip data={documentsRequiredHistory[index] || '--'} />
                            }
                        </div>
                    </div>
                ))
                :
                <div className='p-5 text-center'>
                    <span className='font-weight-bold h5 text-uppercase'>No Records Found</span>
                </div>
            }
        </>
    )
}

export default Index;