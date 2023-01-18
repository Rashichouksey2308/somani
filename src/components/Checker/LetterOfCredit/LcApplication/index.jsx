import styles from './index.module.scss';
import Tooltip from '../../../Tooltip';

function Index({ lcApplicationDetails, lcApplicationHistoryDetails }) {

    return (
        <>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>40A</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            FORM OF DOCUMENTARY CREDIT
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.formOfDocumentaryCredit && lcApplicationHistoryDetails.formOfDocumentaryCredit !== lcApplicationDetails?.formOfDocumentaryCredit) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.formOfDocumentaryCredit || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.formOfDocumentaryCredit && lcApplicationHistoryDetails.formOfDocumentaryCredit !== lcApplicationDetails?.formOfDocumentaryCredit) &&
                        <Tooltip data={lcApplicationHistoryDetails?.formOfDocumentaryCredit || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>40E</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            APPLICABLE RULES
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.applicableRules && lcApplicationHistoryDetails.applicableRules !== lcApplicationDetails?.applicableRules) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.applicableRules || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.applicableRules && lcApplicationHistoryDetails.applicableRules !== lcApplicationDetails?.applicableRules) &&
                        <Tooltip data={lcApplicationHistoryDetails?.applicableRules || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>31D</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            DATE OF EXPIRY
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.dateOfExpiry && lcApplicationHistoryDetails.dateOfExpiry !== lcApplicationDetails?.dateOfExpiry) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.dateOfExpiry?.slice(0, 10) || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.dateOfExpiry && lcApplicationHistoryDetails.dateOfExpiry !== lcApplicationDetails?.dateOfExpiry) &&
                        <Tooltip data={lcApplicationHistoryDetails?.dateOfExpiry?.slice(0, 10) || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>31D</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            PLACE OF EXPIRY
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.placeOfExpiry && lcApplicationHistoryDetails.placeOfExpiry !== lcApplicationDetails?.placeOfExpiry) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.placeOfExpiry || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.placeOfExpiry && lcApplicationHistoryDetails.placeOfExpiry !== lcApplicationDetails?.placeOfExpiry) &&
                        <Tooltip data={lcApplicationHistoryDetails?.placeOfExpiry || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>51D</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            LC ISSUING BANK
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.lcIssuingBank && lcApplicationHistoryDetails.lcIssuingBank !== lcApplicationDetails?.lcIssuingBank) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.lcIssuingBank || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.lcIssuingBank && lcApplicationHistoryDetails.lcIssuingBank !== lcApplicationDetails?.lcIssuingBank) &&
                        <Tooltip data={lcApplicationHistoryDetails?.lcIssuingBank || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div className='mr-3'>
                        <span className='h5 mr-4'>50</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            APPLICANT
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.applicant && lcApplicationHistoryDetails.applicant !== lcApplicationDetails?.applicant) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.applicant || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.applicant && lcApplicationHistoryDetails.applicant !== lcApplicationDetails?.applicant) &&
                        <Tooltip data={lcApplicationHistoryDetails?.applicant || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div className='mr-3'>
                        <span className='h5 mr-4'>59</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            BENEFICIARY
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.beneficiary && lcApplicationHistoryDetails.beneficiary !== lcApplicationDetails?.beneficiary) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.beneficiary || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.beneficiary && lcApplicationHistoryDetails.beneficiary !== lcApplicationDetails?.beneficiary) &&
                        <Tooltip data={lcApplicationHistoryDetails?.beneficiary || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>32B</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            CURRENCY CODE & AMOUNT
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.currecyCodeAndAmountValue && lcApplicationHistoryDetails.currecyCodeAndAmountValue !== lcApplicationDetails?.currecyCodeAndAmountValue) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.currecyCodeAndAmountValue || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.currecyCodeAndAmountValue && lcApplicationHistoryDetails.currecyCodeAndAmountValue !== lcApplicationDetails?.currecyCodeAndAmountValue) &&
                        <Tooltip data={lcApplicationHistoryDetails?.currecyCodeAndAmountValue || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>39A</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            TOLERANCE (+/-) PERCENTAGE
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.tolerancePercentage && lcApplicationHistoryDetails.tolerancePercentage !== lcApplicationDetails?.tolerancePercentage) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.tolerancePercentage ? `+- ${lcApplicationDetails?.tolerancePercentage} PCT` : '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.tolerancePercentage && lcApplicationHistoryDetails.tolerancePercentage !== lcApplicationDetails?.tolerancePercentage) &&
                        <Tooltip data={lcApplicationHistoryDetails?.tolerancePercentage ? `+- ${lcApplicationHistoryDetails?.tolerancePercentage} PCT` : '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>41A</span>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className={`${styles.inner_label} h5`}>
                            CREDIT AVAILABLE WITH
                        </span>
                        <p className={`${styles.inner_label} h5`}>
                            BY
                        </p>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <div className='d-flex flex-column'>
                        <div className='d-flex'>
                            <span className={`h5 ${(lcApplicationHistoryDetails?.creditAvailablewith && lcApplicationHistoryDetails.creditAvailablewith !== lcApplicationDetails?.creditAvailablewith) && styles.highlighted_field}`}>
                                {lcApplicationDetails?.creditAvailablewith || '--'}
                            </span>
                            {
                                (lcApplicationHistoryDetails?.creditAvailablewith && lcApplicationHistoryDetails.creditAvailablewith !== lcApplicationDetails?.creditAvailablewith) &&
                                <Tooltip data={lcApplicationHistoryDetails?.creditAvailablewith || '--'} />
                            }
                        </div>
                        <div className='d-flex'>
                            <span className={`h5 ${(lcApplicationHistoryDetails?.creditAvailableBy && lcApplicationHistoryDetails.creditAvailableBy !== lcApplicationDetails?.creditAvailableBy) && styles.highlighted_field}`}>
                                {lcApplicationDetails?.creditAvailableBy || '--'}
                            </span>
                            {
                                (lcApplicationHistoryDetails?.creditAvailableBy && lcApplicationHistoryDetails.creditAvailableBy !== lcApplicationDetails?.creditAvailableBy) &&
                                <Tooltip data={lcApplicationHistoryDetails?.creditAvailableBy || '--'} />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>42C</span>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className={`${styles.inner_label} h5`}>
                            AT SIGHT
                        </span>
                        <p className={`${styles.inner_label} h5`}>
                            NO. OF DAYS
                        </p>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <div className='d-flex flex-column'>
                        <div className='d-flex'>
                            <span className={`h5 ${(lcApplicationHistoryDetails?.atSight && lcApplicationHistoryDetails.atSight !== lcApplicationDetails?.atSight) && styles.highlighted_field}`}>
                                {lcApplicationDetails?.atSight || '--'}
                            </span>
                            {
                                (lcApplicationHistoryDetails?.atSight && lcApplicationHistoryDetails.atSight !== lcApplicationDetails?.atSight) &&
                                <Tooltip data={lcApplicationHistoryDetails?.atSight || '--'} />
                            }
                        </div>
                        <div className='d-flex'>
                            <span className={`h5 ${(lcApplicationHistoryDetails?.numberOfDays && lcApplicationHistoryDetails.numberOfDays !== lcApplicationDetails?.numberOfDays) && styles.highlighted_field}`}>
                                {lcApplicationDetails?.numberOfDays || '--'}
                            </span>
                            {
                                (lcApplicationHistoryDetails?.numberOfDays && lcApplicationHistoryDetails.numberOfDays !== lcApplicationDetails?.numberOfDays) &&
                                <Tooltip data={lcApplicationHistoryDetails?.numberOfDays || '--'} />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>42A</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            DRAWEE
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.drawee && lcApplicationHistoryDetails.drawee !== lcApplicationDetails?.drawee) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.drawee || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.drawee && lcApplicationHistoryDetails.drawee !== lcApplicationDetails?.drawee) &&
                        <Tooltip data={lcApplicationHistoryDetails?.drawee || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>42P</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            DEFERRED PAYMENT
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.deferredPayment && lcApplicationHistoryDetails.deferredPayment !== lcApplicationDetails?.deferredPayment) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.deferredPayment || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.deferredPayment && lcApplicationHistoryDetails.deferredPayment !== lcApplicationDetails?.deferredPayment) &&
                        <Tooltip data={lcApplicationHistoryDetails?.deferredPayment || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>43P</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            PARTIAL SHIPMENT
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.partialShipment && lcApplicationHistoryDetails.partialShipment !== lcApplicationDetails?.partialShipment) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.partialShipment || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.partialShipment && lcApplicationHistoryDetails.partialShipment !== lcApplicationDetails?.partialShipment) &&
                        <Tooltip data={lcApplicationHistoryDetails?.partialShipment || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>43T</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            TRANSHIPMENTS
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.transhipments && lcApplicationHistoryDetails.transhipments !== lcApplicationDetails?.transhipments) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.transhipments || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.transhipments && lcApplicationHistoryDetails.transhipments !== lcApplicationDetails?.transhipments) &&
                        <Tooltip data={lcApplicationHistoryDetails?.transhipments || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>44A</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            SHIPMENT FROM
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.shipmentForm && lcApplicationHistoryDetails.shipmentForm !== lcApplicationDetails?.shipmentForm) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.shipmentForm || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.shipmentForm && lcApplicationHistoryDetails.shipmentForm !== lcApplicationDetails?.shipmentForm) &&
                        <Tooltip data={lcApplicationHistoryDetails?.shipmentForm || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>44E</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            PORT OF LOADING
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.portOfLoading && lcApplicationHistoryDetails.portOfLoading !== lcApplicationDetails?.portOfLoading) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.portOfLoading || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.portOfLoading && lcApplicationHistoryDetails.portOfLoading !== lcApplicationDetails?.portOfLoading) &&
                        <Tooltip data={lcApplicationHistoryDetails?.portOfLoading || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>44F</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            PORT OF DISCHARGE
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.portOfDischarge && lcApplicationHistoryDetails.portOfDischarge !== lcApplicationDetails?.portOfDischarge) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.portOfDischarge || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.portOfDischarge && lcApplicationHistoryDetails.portOfDischarge !== lcApplicationDetails?.portOfDischarge) &&
                        <Tooltip data={lcApplicationHistoryDetails?.portOfDischarge || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>44C</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            LATEST DATE OF SHIPMENT
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.latestDateOfShipment && lcApplicationHistoryDetails.latestDateOfShipment !== lcApplicationDetails?.latestDateOfShipment) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.latestDateOfShipment?.slice(0, 10) || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.latestDateOfShipment && lcApplicationHistoryDetails.latestDateOfShipment !== lcApplicationDetails?.latestDateOfShipment) &&
                        <Tooltip data={lcApplicationHistoryDetails?.latestDateOfShipment?.slice(0, 10) || '--'} />
                    }
                </div>
            </div>

            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>45A</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            DESCRIPTION OF THE GOODS
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplicationHistoryDetails?.DescriptionOfGoods && lcApplicationHistoryDetails.DescriptionOfGoods !== lcApplicationDetails?.DescriptionOfGoods) && styles.highlighted_field}`}>
                        {lcApplicationDetails?.DescriptionOfGoods || '--'}
                    </span>
                    {
                        (lcApplicationHistoryDetails?.DescriptionOfGoods && lcApplicationHistoryDetails.DescriptionOfGoods !== lcApplicationDetails?.DescriptionOfGoods) &&
                        <Tooltip data={lcApplicationHistoryDetails?.DescriptionOfGoods || '--'} />
                    }
                </div>
            </div>
        </>
    )
}

export default Index;