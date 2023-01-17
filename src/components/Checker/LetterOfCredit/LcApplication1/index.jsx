import styles from './index.module.scss';
import Tooltip from '../../../Tooltip';

function Index({ lcApplication1Details, lcApplication1HistoryDetails }) {

    return (
        <>
            <div className='d-flex border-top text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div className='mr-3'>
                        <span className='h5 mr-4'>48</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            PRESENTATION PERIOD
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.presentaionPeriod && lcApplication1HistoryDetails.presentaionPeriod !== lcApplication1Details?.presentaionPeriod) && styles.highlighted_field}`}>
                        {lcApplication1Details?.presentaionPeriod || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.presentaionPeriod && lcApplication1HistoryDetails.presentaionPeriod !== lcApplication1Details?.presentaionPeriod) &&
                        <Tooltip data={lcApplication1HistoryDetails?.presentaionPeriod || '--'} />
                    }
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div className='mr-3'>
                        <span className='h5 mr-4'>49</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            CONFIRMATION INSTRUCTIONS
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.confirmationInstructions && lcApplication1HistoryDetails.confirmationInstructions !== lcApplication1Details?.confirmationInstructions) && styles.highlighted_field}`}>
                        {lcApplication1Details?.confirmationInstructions || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.confirmationInstructions && lcApplication1HistoryDetails.confirmationInstructions !== lcApplication1Details?.confirmationInstructions) &&
                        <Tooltip data={lcApplication1HistoryDetails?.confirmationInstructions || '--'} />
                    }
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>53A</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            REIMBURSING BANK
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.reimbursingBank && lcApplication1HistoryDetails.reimbursingBank !== lcApplication1Details?.reimbursingBank) && styles.highlighted_field}`}>
                        {lcApplication1Details?.reimbursingBank || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.reimbursingBank && lcApplication1HistoryDetails.reimbursingBank !== lcApplication1Details?.reimbursingBank) &&
                        <Tooltip data={lcApplication1HistoryDetails?.reimbursingBank || '--'} />
                    }
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div className='mr-3'>
                        <span className='h5 mr-4'>57</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            ADVISE THROUGH BANK
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.adviceThroughBank && lcApplication1HistoryDetails.adviceThroughBank !== lcApplication1Details?.adviceThroughBank) && styles.highlighted_field}`}>
                        {lcApplication1Details?.adviceThroughBank || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.adviceThroughBank && lcApplication1HistoryDetails.adviceThroughBank !== lcApplication1Details?.adviceThroughBank) &&
                        <Tooltip data={lcApplication1HistoryDetails?.adviceThroughBank || '--'} />
                    }
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>57A</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            SECOND ADVISING BANK, IF APPLICABLE
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.secondAdvisingBank && lcApplication1HistoryDetails.secondAdvisingBank !== lcApplication1Details?.secondAdvisingBank) && styles.highlighted_field}`}>
                        {lcApplication1Details?.secondAdvisingBank || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.secondAdvisingBank && lcApplication1HistoryDetails.secondAdvisingBank !== lcApplication1Details?.secondAdvisingBank) &&
                        <Tooltip data={lcApplication1HistoryDetails?.secondAdvisingBank || '--'} />
                    }
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>58A</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            REQUESTED CONFIRMATION PARTY
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.requestedConfirmationParty && lcApplication1HistoryDetails.requestedConfirmationParty !== lcApplication1Details?.requestedConfirmationParty) && styles.highlighted_field}`}>
                        {lcApplication1Details?.requestedConfirmationParty || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.requestedConfirmationParty && lcApplication1HistoryDetails.requestedConfirmationParty !== lcApplication1Details?.requestedConfirmationParty) &&
                        <Tooltip data={lcApplication1HistoryDetails?.requestedConfirmationParty || '--'} />
                    }
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div>
                        <span className='h5 mr-4'>71B</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            CHARGES
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.charges && lcApplication1HistoryDetails.charges !== lcApplication1Details?.charges) && styles.highlighted_field}`}>
                        {lcApplication1Details?.charges || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.charges && lcApplication1HistoryDetails.charges !== lcApplication1Details?.charges) &&
                        <Tooltip data={lcApplication1HistoryDetails?.charges || '--'} />
                    }
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div className='mr-3'>
                        <span className='h5 mr-4'>78</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            INSTRUCTIONS TO PAYING / ACCEPTING / NEGOTIATING BANK
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.instructionToBank && lcApplication1HistoryDetails.instructionToBank !== lcApplication1Details?.instructionToBank) && styles.highlighted_field}`}>
                        {lcApplication1Details?.instructionToBank || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.instructionToBank && lcApplication1HistoryDetails.instructionToBank !== lcApplication1Details?.instructionToBank) &&
                        <Tooltip data={lcApplication1HistoryDetails?.instructionToBank || '--'} />
                    }
                </div>
            </div>
            <div className='d-flex text-uppercase'>
                <div className={`label w-50 p-4 pl-5 d-flex`}>
                    <div className='mr-3'>
                        <span className='h5 mr-4'>72</span>
                    </div>
                    <div>
                        <span className={`${styles.inner_label} h5`}>
                            SENDER TO RECEIVER INFORMATION
                        </span>
                    </div>
                </div>
                <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                    <span className={`${(lcApplication1HistoryDetails?.senderToReceiverInformation && lcApplication1HistoryDetails.senderToReceiverInformation !== lcApplication1Details?.senderToReceiverInformation) && styles.highlighted_field}`}>
                        {lcApplication1Details?.senderToReceiverInformation || '--'}
                    </span>
                    {
                        (lcApplication1HistoryDetails?.senderToReceiverInformation && lcApplication1HistoryDetails.senderToReceiverInformation !== lcApplication1Details?.senderToReceiverInformation) &&
                        <Tooltip data={lcApplication1HistoryDetails?.senderToReceiverInformation || '--'} />
                    }
                </div>
            </div>
        </>
    )
}

export default Index;