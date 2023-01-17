import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';
import Tooltip from '../../../Tooltip';

function Index({ commodityDetails, commodityDetailsHistory }) {
    return (
        <>
            <SubHeader subHeader='Commodity Details' color='primary' />
            <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>1. Commodity</span>
                    </div>

                    <div className={`${styles.labelValue} font-weight-bold ${commodityDetailsHistory?.commodity && commodityDetailsHistory?.commodity !== commodityDetails?.commodity ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {commodityDetails?.commodity || '--'}
                        </span>

                    </div>
                    {commodityDetailsHistory?.commodity && commodityDetailsHistory?.commodity !== commodityDetails?.commodity &&
                        <Tooltip data={commodityDetailsHistory?.commodity || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>2. Quantity</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${((commodityDetailsHistory?.quantity && commodityDetailsHistory?.unitOfQuantity && commodityDetailsHistory?.tolerance) &&
                        (commodityDetailsHistory?.quantity !== commodityDetails?.quantity || commodityDetailsHistory?.unitOfQuantity !== commodityDetails?.unitOfQuantity || commodityDetailsHistory?.tolerance !== commodityDetails?.tolerance)) ?
                        styles.highlighted_field : 'termsheet_value'} `}>
                        <span className={`${(commodityDetailsHistory?.quantity && commodityDetailsHistory?.unitOfQuantity && commodityDetailsHistory?.tolerance) &&
                            (commodityDetailsHistory?.quantity !== commodityDetails?.quantity || commodityDetailsHistory?.unitOfQuantity !== commodityDetails?.unitOfQuantity || commodityDetailsHistory?.tolerance !== commodityDetails?.tolerance) &&
                            styles.highlighted_field}`}>
                            {`${(commodityDetails?.quantity && commodityDetails?.unitOfQuantity) ? `${commodityDetails?.quantity} ${commodityDetails?.unitOfQuantity}` : '--'}`}
                            {` ${commodityDetails?.tolerance ? `(± ${commodityDetails?.tolerance} %)` : ''}`}
                        </span>

                    </div>
                    {(commodityDetailsHistory?.quantity && commodityDetailsHistory?.unitOfQuantity && commodityDetailsHistory?.tolerance) &&
                        (commodityDetailsHistory?.quantity !== commodityDetails?.quantity || commodityDetailsHistory?.unitOfQuantity !== commodityDetails?.unitOfQuantity || commodityDetailsHistory?.tolerance !== commodityDetails?.tolerance) &&
                        <Tooltip data={`${(commodityDetailsHistory?.quantity && commodityDetailsHistory?.unitOfQuantity) ? `${commodityDetailsHistory?.quantity} ${commodityDetailsHistory?.unitOfQuantity}` : '--'}
                             ${commodityDetailsHistory?.tolerance && `(± ${commodityDetailsHistory?.tolerance}%)`}`} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>3. Unit Price</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${((commodityDetailsHistory?.orderCurrency && commodityDetailsHistory?.perUnitPrice && commodityDetailsHistory?.unitOfQuantity) &&
                        (commodityDetailsHistory?.orderCurrency !== commodityDetails?.orderCurrency || commodityDetailsHistory?.perUnitPrice !== commodityDetails?.perUnitPrice || commodityDetailsHistory?.unitOfQuantity !== commodityDetails?.unitOfQuantity)) ?
                        styles.highlighted_field : 'termsheet_value'}`}>
                        <span className={`${(commodityDetailsHistory?.orderCurrency && commodityDetailsHistory?.perUnitPrice && commodityDetailsHistory?.unitOfQuantity) &&
                            (commodityDetailsHistory?.orderCurrency !== commodityDetails?.orderCurrency || commodityDetailsHistory?.perUnitPrice !== commodityDetails?.perUnitPrice || commodityDetailsHistory?.unitOfQuantity !== commodityDetails?.unitOfQuantity) &&
                            styles.highlighted_field}`}>
                            {`${(commodityDetails?.orderCurrency && commodityDetails?.perUnitPrice && commodityDetails?.unitOfQuantity) ? `${commodityDetails?.orderCurrency} ${commodityDetails?.perUnitPrice}/${commodityDetails?.unitOfQuantity}` : '--'}`}
                        </span>
                    </div>
                    {(commodityDetailsHistory?.orderCurrency && commodityDetailsHistory?.perUnitPrice && commodityDetailsHistory?.unitOfQuantity) &&
                        (commodityDetailsHistory?.orderCurrency !== commodityDetails?.orderCurrency || commodityDetailsHistory?.perUnitPrice !== commodityDetails?.perUnitPrice || commodityDetailsHistory?.unitOfQuantity !== commodityDetails?.unitOfQuantity) &&
                        <Tooltip data={`${(commodityDetailsHistory?.orderCurrency && commodityDetailsHistory?.perUnitPrice && commodityDetailsHistory?.unitOfQuantity) ? `${commodityDetailsHistory?.orderCurrency} ${commodityDetailsHistory?.perUnitPrice}/${commodityDetailsHistory?.unitOfQuantity}` : '--'}`} />
                    }
                </div>

            </div>
        </>

    )
}

export default Index;