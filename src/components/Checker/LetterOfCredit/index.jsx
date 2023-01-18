import styles from './index.module.scss';
import SubHeader from '../Common/SubHeader';
import AdditionalConditionsTable from './AdditionalConditionsTable';
import Remarks from '../Common/Remarks';

function Index() {
    return (
        <div className='lc_main w-100 p-3 mb-5'>
            <div className='lc_card m-3 pb-0 pt-4'>
                <div className='d-flex justify-content-between m-3 p-3'>
                    <div className='d-flex flex-column'>
                        <div className='m-2'>
                            <span className='font-weight-bold h5 mr-1'>Order ID:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`}>2FCH6589</span>
                        </div>
                        <div className='m-2'>
                            <span className='font-weight-bold h5 mr-1'>Buyer:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`} >M/s Vishnu Chemicals Limited</span>
                        </div>
                    </div>

                    <div>
                        <span className={`${styles.main_header} font-weight-bold text-uppercase`}>
                            APPLICATION FOR LETTER OF CREDIT
                        </span>
                    </div>

                    <div>
                        <div className='m-2'>
                            <span className='font-weight-bold h5'>Date:</span>
                            {' '}
                            <span className={`${styles.mainLabelValue} h5`} >12-02-2022</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>IRREVOCABLE</span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>UCP LATEST VERSION</span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>22.02.2022</span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>GUJRAT PORT, INDIA</span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            FIRST CLASS EUROPEAN BANK
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            INDO INTERNATIONAL TRADING FZCO JAFZA VIEW 18, LOB 180504, JEBEL ALI, DUBAI UAE
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            ERAMET MARKETING SERVICES 10 BOULEVARD DE GRENELLE CS 63205 - 75015 PARIS - FRANCE
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            USD 1,00,000.00
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            +/-10PCT
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                            <span className='h5'>
                                BNP PARIBAS PARIBAS – BNPAFRPPXXX
                            </span>
                            <span className='h5'>
                                NEGOTIATION
                            </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex'>
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
                            <span className='h5'>
                                DOCUMENTARY CREDIT
                            </span>
                            <span className='h5'>
                                60
                            </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>ISSUING BANK</span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            BNP PARIBAS PARIBAS – BNPAFRPPXXX
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            PROHIBITED
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            PROHIBITED
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            OWENDO
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            OWENDO
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            VISAKHAPATNAM PORT, INDIA
                        </span>
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
                        <span>
                            22.02.2022
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            5000 WET METRIC TONS (WMT) +/- 10PCT OF MMD: MANGANESEORE OF GABON ORIGIN (44,50PCT MN TYPICAL - 5PCT MOISTURE), CIFFO VISAKHAPATNAM PORT PACKING IN BULK.
                        </span>
                    </div>
                </div>

                <SubHeader subHeader="46A DOCUMENT REQUIRED:" color="primary" noPadding />

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
                            AT SIGHT
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
                    <div className={`label w-50 p-4 pl-5 d-flex`}>
                        <div>
                            <span className={`${styles.inner_label} h5`}>
                                2
                            </span>
                        </div>
                    </div>
                    <div className={`label_value h5 w-75 pt-4 pl-5 pb-3`}>
                        <span>
                            SIGNED PROVISIONAL / COMMERCIAL INVOICE IN 1 ORIGINAL AND 3 COPIES, BASED ON THE DRY WEIGHT AND THE MANGANESE CONTENT SHOWN ON THE CERTIFICATE OF TYPICAL ANALYSIS.
                        </span>
                    </div>
                </div>

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

                <div className='d-flex'>
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

                <div className='d-flex'>
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
                        <span>
                            DOCUMENTS TO BE PRESENTED WITHIN 21 DAYS AFTER SHIPMENT DATE BUT WITHIN VALIDITY OF THE LC.
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            MAY ADD
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            BNP PARIBAS PARIBAS – BNPAFRPPXXX
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            BNP PARIBAS PARIBAS – BNPAFRPPXXX
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            LOREM IPSUM
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            ERAMET MARKETING SERVICES 10 BOULEVARD DE GRENELLE CS 63205 - 75015 PARIS - FRANCE
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            ALL THE CHARGES OUTSIDE LC ISSUING BANK ARE FOR THE BENEFICIARY’S ACCOUNT.
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            THE DOCUMENTS ARE TO BE COURIERED TO ........... (LC ISSUING BANK ADDRESS)..............
                            <br />
                            <br />
                            <p>
                                UPON RECEIPT AT OUR COUNTERS OF A STRICTLY COMPLYING PRESENTATION, WE UNDERTAKE TO COVER YOU WITHIN 5 BANKING DAYS AS PER YOUR INSTRUCTIONS
                            </p>
                        </span>
                    </div>
                </div>

                <div className='d-flex'>
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
                        <span>
                            LOREM IPSUM
                        </span>
                    </div>
                </div>

            </div>

            <div className='m-3'>
                <Remarks />
            </div>

        </div>
    );
}

export default Index;