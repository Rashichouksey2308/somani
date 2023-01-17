import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';
import Tooltip from '../../../Tooltip';

function Index({ transactionDetails, transactionDetailsHistory, currency, currencyHistory }) {
    return (
        <>
            <SubHeader subHeader='Transaction Details' color='primary' />
            <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>4. LC Value</span>
                    </div>

                    <div className={`${styles.labelValue} font-weight-bold ${(transactionDetailsHistory?.lcValue || transactionDetailsHistory?.lcCurrency) && (transactionDetailsHistory?.lcValue !== transactionDetails?.lcValue || transactionDetailsHistory?.lcCurrency !== transactionDetails?.lcCurrency) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.lcValue && transactionDetails?.lcCurrency ? `${transactionDetails?.lcCurrency} ${transactionDetails?.lcValue}` : '--'}
                        </span>

                    </div>
                    {(transactionDetailsHistory?.lcValue || transactionDetailsHistory?.lcCurrency) && (transactionDetailsHistory?.lcValue !== transactionDetails?.lcValue || transactionDetailsHistory?.lcCurrency !== transactionDetails?.lcCurrency) &&
                        <Tooltip data={transactionDetailsHistory?.lcValue || transactionDetailsHistory?.lcCurrency ? `${transactionDetailsHistory?.lcCurrency || ''} ${transactionDetailsHistory?.lcValue}` : '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>5. LC opening Bank</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(transactionDetailsHistory?.lcOpeningBank && transactionDetailsHistory?.lcOpeningBank !== transactionDetails?.lcOpeningBank) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.lcOpeningBank || '--'}
                        </span>
                    </div>
                    {transactionDetailsHistory?.lcOpeningBank && transactionDetailsHistory?.lcOpeningBank !== transactionDetails?.lcOpeningBank &&
                        <Tooltip data={transactionDetailsHistory?.lcOpeningBank || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>6. Margin Money as % of Import Value</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(transactionDetailsHistory?.marginMoney && transactionDetailsHistory?.marginMoney !== transactionDetails?.marginMoney) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.marginMoney ? `${transactionDetails?.marginMoney} %` : '--'}
                        </span>

                    </div>
                    {transactionDetailsHistory?.marginMoney && transactionDetailsHistory?.marginMoney !== transactionDetails?.marginMoney &&
                        <Tooltip data={transactionDetailsHistory?.marginMoney ? `${transactionDetailsHistory?.marginMoney} %` : '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>7. INCO Terms</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(transactionDetailsHistory?.incoTerms && transactionDetailsHistory?.incoTerms !== transactionDetails?.incoTerms) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.incoTerms || '--'}
                        </span>
                    </div>
                    {transactionDetailsHistory?.incoTerms && transactionDetailsHistory?.incoTerms !== transactionDetails?.incoTerms &&
                        <Tooltip data={transactionDetailsHistory?.incoTerms || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>8. Load Port</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(transactionDetailsHistory?.loadPort && transactionDetailsHistory?.loadPort !== transactionDetails?.loadPort) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.loadPort || '--'}
                        </span>
                    </div>
                    {transactionDetailsHistory?.loadPort && transactionDetailsHistory?.loadPort !== transactionDetails?.loadPort &&
                        <Tooltip data={transactionDetailsHistory?.loadPort || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>9. Country of Origin</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(transactionDetailsHistory?.countryOfOrigin && transactionDetailsHistory?.countryOfOrigin !== transactionDetails?.countryOfOrigin) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span className={`${transactionDetailsHistory?.countryOfOrigin && transactionDetailsHistory?.countryOfOrigin !== transactionDetails?.countryOfOrigin && styles.highlighted_field}`}>
                            {transactionDetails?.countryOfOrigin || '--'}
                        </span>
                    </div>
                    {transactionDetailsHistory?.countryOfOrigin && transactionDetailsHistory?.countryOfOrigin !== transactionDetails?.countryOfOrigin &&
                        <Tooltip data={transactionDetailsHistory?.countryOfOrigin || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>10. Shipment Type</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${transactionDetailsHistory?.shipmentType && transactionDetailsHistory?.shipmentType !== transactionDetails?.shipmentType ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.shipmentType || '--'}
                        </span>

                    </div>
                    {transactionDetailsHistory?.shipmentType && transactionDetailsHistory?.shipmentType !== transactionDetails?.shipmentType &&
                        <Tooltip data={transactionDetailsHistory?.shipmentType || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>11. Part Shipment Allowed</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(transactionDetailsHistory?.partShipmentAllowed && transactionDetailsHistory?.partShipmentAllowed !== transactionDetails?.partShipmentAllowed) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.partShipmentAllowed || '--'}
                        </span>
                    </div>
                    {transactionDetailsHistory?.partShipmentAllowed && transactionDetailsHistory?.partShipmentAllowed !== transactionDetails?.partShipmentAllowed &&
                        <Tooltip data={transactionDetailsHistory?.partShipmentAllowed || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>12. Port of Discharge</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${transactionDetailsHistory?.portOfDischarge && transactionDetailsHistory?.portOfDischarge !== transactionDetails?.portOfDischarge ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.portOfDischarge || '--'}
                        </span>
                    </div>
                    {transactionDetailsHistory?.portOfDischarge && transactionDetailsHistory?.portOfDischarge !== transactionDetails?.portOfDischarge &&
                        <Tooltip data={transactionDetailsHistory?.portOfDischarge || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>13. Bill of Entry</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(transactionDetailsHistory?.billOfEntity && transactionDetailsHistory?.billOfEntity !== transactionDetails?.billOfEntity) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {transactionDetails?.billOfEntity || '--'}
                        </span>
                    </div>
                    {transactionDetailsHistory?.billOfEntity && transactionDetailsHistory?.billOfEntity !== transactionDetails?.billOfEntity &&
                        <Tooltip data={transactionDetailsHistory?.billOfEntity || '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>14. 3rd Party Inspection Required</span>
                    </div>

                    <div className={`${styles.labelValue} d-flex font-weight-bold align-items-center`}>

                        <div className={`${transactionDetailsHistory?.thirdPartyInspectionReq && transactionDetailsHistory?.thirdPartyInspectionReq !== transactionDetails?.thirdPartyInspectionReq ? styles.highlighted_field : 'termsheet_value'}`}>
                            <span>
                                {transactionDetails?.thirdPartyInspectionReq ? 'Yes ' : 'No '}
                            </span>

                        </div>
                        {transactionDetailsHistory?.thirdPartyInspectionReq && transactionDetailsHistory?.thirdPartyInspectionReq !== transactionDetails?.thirdPartyInspectionReq &&
                            <Tooltip data={transactionDetailsHistory?.thirdPartyInspectionReq ? 'Yes ' : 'No '} />
                        }

                        <div className='termsheet_value ml-2'>
                            <span cla>{transactionDetails?.typeOfPort && ` /`}</span>
                        </div>

                        <div className={`ml-2 ${transactionDetailsHistory?.typeOfPort && transactionDetailsHistory?.typeOfPort !== transactionDetails?.typeOfPort ? `${styles.highlighted_field}` : 'termsheet_value'}`}>

                            <span>
                                {transactionDetails?.typeOfPort && ` ${transactionDetails?.typeOfPort}`}
                            </span>

                        </div>
                        {transactionDetailsHistory?.typeOfPort && transactionDetailsHistory?.typeOfPort !== transactionDetails?.typeOfPort &&
                            <Tooltip data={transactionDetailsHistory?.typeOfPort && `${transactionDetailsHistory?.typeOfPort}`} />
                        }
                    </div>
                </div>

            </div>
        </>

    )
}

export default Index;