import styles from './index.module.scss';

function Index(){
    return(
        <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>17. Trade Margin (%)</span>
                            </div>

                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>2.25%</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>18. LC Opening Charges (Minimum)</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>USD 1500</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>19. LC Opening Charges (%)</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>1.5 - 2.25%</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>20. Usance Interest (%) For 90 Days</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>4%</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>21. Overdue Interest per Month (%)</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>1.5%</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>22. Exchange Fluctuation</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>All actual exchange fluctuation if applicable is on Buyer's account</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>23. Forex Hedging</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>Yes</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>24. Other Terms & Conditions</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>As Per Sales Contract</span>
                            </div>
                        </div>

                    </div>
    )
}

export default Index;