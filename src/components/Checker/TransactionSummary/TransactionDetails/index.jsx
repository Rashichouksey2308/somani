import styles from './index.module.scss';

function Index(){
    return(
        <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>4. LC Value</span>
                            </div>

                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>USD 2000</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>5. LC opening Bank</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>First Class European Bank</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>6. Margin Money as % of Import Value</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>20%</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>7. INCO Terms</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>CFR</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>8. Load Port</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>Abbot Port</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>9. Country of Origin</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>Australia</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>10. Shipment Type</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>Bulk</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>11. Part Shipment Allowed</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>No</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>12. Port of Discharge</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>Visakhapatnam</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>13. Bill of Entry</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>Home Consumption</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>14. 3rd Party Inspection Required</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>Yes / Both Load Port & Discharge Port</span>
                            </div>
                        </div>

                    </div>
    )
}

export default Index;