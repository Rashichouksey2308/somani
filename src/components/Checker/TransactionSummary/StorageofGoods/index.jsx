import styles from './index.module.scss';

function Index() {
    return (
        <div className='d-flex flex-column ml-4 mt-2 mb-2 mr-2 p-3 w-100'>

            <div className='d-flex mb-3 w-100'>
                <div className={`${styles.label}`}>
                    <span>15. Storage of Goods</span>
                </div>

                <div className={`${styles.labelValue} font-weight-bold ml-n5`}>
                    <span>
                        Cargo to be stored in Custom Bonded warehouse at the port of Discharge (Vizag India) under CMA with Dr. 
                        Amin Controllers.
                        <br />
                        <br />
                        "lGM and Into Bond Bill of Entry" shall be filled by the lndo's nominated party and all expenses/charges to be born and paid by the Buyer.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Index;