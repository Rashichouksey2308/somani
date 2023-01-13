import styles from './index.module.scss';

function Index(){
    return(
        <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3'>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>1. Commodity</span>
                            </div>

                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>Chrome Ore</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>2. Quantity</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>5000 MT (± 10%)</span>
                            </div>
                        </div>

                        <div className='d-flex mb-3'>
                            <div className={`${styles.label}`}>
                                <span>3. Unit Price</span>
                            </div>
                            <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                                <span>USD 192.09/MT</span>
                            </div>
                        </div>

                    </div>
    )
}

export default Index;