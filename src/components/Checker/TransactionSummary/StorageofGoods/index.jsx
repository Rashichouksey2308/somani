import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';
import Tooltip from '../../../Tooltip';

function Index({ storageOfGoodComments, storageOfGoodHistoryComments }) {
    return (
        <>
            <SubHeader subHeader='Storage of Goods' color='primary' />
            <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3 w-100'>

                <div className='d-flex mb-3 w-100 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>15. Storage of Goods</span>
                    </div>

                    <div className={`${storageOfGoodComments && styles.labelValue} font-weight-bold ${(storageOfGoodHistoryComments && storageOfGoodHistoryComments !== storageOfGoodComments) ? styles.highlighted_field : 'termsheet_value'} `}>
                        <span>
                            {storageOfGoodComments || '--'}
                        </span>
                        
                    </div>
                    {storageOfGoodHistoryComments && storageOfGoodHistoryComments !== storageOfGoodComments &&
                            <Tooltip data={storageOfGoodHistoryComments || '--'} />
                        }
                </div>
            </div>
        </>
    )
}

export default Index;