import styles from './index.module.scss';
import SubHeader from '../../Common/SubHeader';
import Tooltip from '../../../Tooltip';

function Index({ commercialTerms, commercialTermsHistory, currency, currencyHistory }) {
    return (
        <>
            <SubHeader subHeader='Commercial Terms' color='primary' />
            <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>17. Trade Margin (%)</span>
                    </div>

                    <div className={`${styles.labelValue} font-weight-bold ${(commercialTermsHistory?.tradeMarginPercentage && commercialTermsHistory?.tradeMarginPercentage !== commercialTerms?.tradeMarginPercentage) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {commercialTerms?.tradeMarginPercentage ? `${commercialTerms?.tradeMarginPercentage} %` : '--'}
                        </span>
                    </div>
                    {commercialTermsHistory?.tradeMarginPercentage && commercialTermsHistory?.tradeMarginPercentage !== commercialTerms?.tradeMarginPercentage &&
                        <Tooltip data={commercialTermsHistory?.tradeMarginPercentage ? `${commercialTermsHistory?.tradeMarginPercentage} %` : '--'} />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>18. LC Opening Charges (Minimum)</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${((currencyHistory || commercialTermsHistory?.lcOpeningChargesUnit) && (currencyHistory !== currency || commercialTermsHistory?.lcOpeningChargesUnit !== commercialTerms?.lcOpeningChargesUnit)) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {currency && `${currency} `}
                            {commercialTerms?.lcOpeningChargesUnit ? `${commercialTerms?.lcOpeningChargesUnit}` : '--'}
                        </span>
                    </div>
                    {(currencyHistory || commercialTermsHistory?.lcOpeningChargesUnit) && (currencyHistory !== currency || commercialTermsHistory?.lcOpeningChargesUnit !== commercialTerms?.lcOpeningChargesUnit) &&
                        <Tooltip data={
                            <>
                                {currencyHistory && `${currencyHistory} `}
                                {commercialTermsHistory?.lcOpeningChargesUnit ? `${commercialTermsHistory?.lcOpeningChargesUnit}` : '--'}
                            </>
                        } />
                    }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>19. LC Opening Charges (%)</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(commercialTermsHistory?.lcOpeningChargesPercentage && commercialTermsHistory?.lcOpeningChargesPercentage !== commercialTerms?.lcOpeningChargesPercentage) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {commercialTerms?.lcOpeningChargesPercentage ? `${commercialTerms?.lcOpeningChargesPercentage} %` : '--'}
                        </span>
                    </div>
                        {commercialTermsHistory?.lcOpeningChargesPercentage && commercialTermsHistory?.lcOpeningChargesPercentage !== commercialTerms?.lcOpeningChargesPercentage &&
                            <Tooltip data={commercialTermsHistory?.lcOpeningChargesPercentage ? `${commercialTermsHistory?.lcOpeningChargesPercentage} %` : '--'} />
                        }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>20. Usance Interest (%) For 90 Days</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(commercialTermsHistory?.usanceInterestPercetage && commercialTermsHistory?.usanceInterestPercetage !== commercialTerms?.usanceInterestPercetage) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {commercialTerms?.usanceInterestPercetage ? `${commercialTerms?.usanceInterestPercetage} %` : '--'}
                        </span>
                    </div>
                        {commercialTermsHistory?.usanceInterestPercetage && commercialTermsHistory?.usanceInterestPercetage !== commercialTerms?.usanceInterestPercetage &&
                            <Tooltip data={commercialTermsHistory?.usanceInterestPercetage ? `${commercialTermsHistory?.usanceInterestPercetage} %` : '--'} />
                        }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>21. Overdue Interest per Month (%)</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(commercialTermsHistory?.overDueInterestPerMonth && commercialTermsHistory?.overDueInterestPerMonth !== commercialTerms?.overDueInterestPerMonth) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {commercialTerms?.overDueInterestPerMonth ? `${commercialTerms?.overDueInterestPerMonth} %` : '--'}
                        </span>
                    </div>
                        {commercialTermsHistory?.overDueInterestPerMonth && commercialTermsHistory?.overDueInterestPerMonth !== commercialTerms?.overDueInterestPerMonth &&
                            <Tooltip data={commercialTermsHistory?.overDueInterestPerMonth ? `${commercialTermsHistory?.overDueInterestPerMonth} %` : '--'} />
                        }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>22. Exchange Fluctuation</span>
                    </div>
                    <div className={`${styles.labelValue} d-flex align-items-center font-weight-bold`}>
                        <div className='termsheet_value'>
                            <span className={`${commercialTerms?.exchangeFluctuation && 'mr-2'}`}>{commercialTerms?.exchangeFluctuation && 'All actual exchange fluctuation if applicable is'}</span>
                        </div>

                        <div className={`${(commercialTermsHistory?.exchangeFluctuation && commercialTermsHistory?.exchangeFluctuation !== commercialTerms?.exchangeFluctuation) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {commercialTerms?.exchangeFluctuation || '--'}
                        </span>
                        </div>
                       
                        {commercialTermsHistory?.exchangeFluctuation && commercialTermsHistory?.exchangeFluctuation !== commercialTerms?.exchangeFluctuation &&
                            <Tooltip data={commercialTermsHistory?.exchangeFluctuation || '--'} />
                        }
                    </div>
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>23. Forex Hedging</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(commercialTermsHistory?.forexHedging && commercialTermsHistory?.forexHedging !== commercialTerms?.forexHedging) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {commercialTerms?.forexHedging || '--'}
                        </span>
                    </div>

                    {commercialTermsHistory?.forexHedging && commercialTermsHistory?.forexHedging !== commercialTerms?.forexHedging &&
                            <Tooltip data={commercialTermsHistory?.forexHedging || '--'} />
                        }
                </div>

                <div className='d-flex mb-3 align-items-center'>
                    <div className={`termsheet_label ${styles.label}`}>
                        <span>24. Other Terms & Conditions</span>
                    </div>
                    <div className={`${styles.labelValue} font-weight-bold ${(commercialTermsHistory?.otherTermsAndConditions && commercialTermsHistory?.otherTermsAndConditions !== commercialTerms?.otherTermsAndConditions) ? styles.highlighted_field : 'termsheet_value'}`}>
                        <span>
                            {commercialTerms?.otherTermsAndConditions || '--'}
                        </span>
                    </div>
                        {commercialTermsHistory?.otherTermsAndConditions && commercialTermsHistory?.otherTermsAndConditions !== commercialTerms?.otherTermsAndConditions &&
                            <Tooltip data={commercialTermsHistory?.otherTermsAndConditions || '--'} />
                        }
                </div>

            </div>
        </>

    )
}

export default Index;