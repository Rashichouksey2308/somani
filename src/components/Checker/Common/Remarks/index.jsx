import React, { useState } from 'react';
import styles from './index.module.scss';

function Index({ handleRemarkSubmit }) {
    const [remark, setRemark] = useState();
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div className='row px-3'>
                <div className={`${styles.form_group} col-lg-7 col-md-6 col-sm-6 my-4`}>
                    <input
                        className={`${styles.customSelect} border_color input form-control py-4`}
                        type="text"
                        value={remark}
                        name="supplierName"
                        onChange={(e) => setRemark(e.target.value)}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                        Remarks
                    </label>
                </div>
                <div className='col-lg-5 my-auto remark-action'>
                    <button className='btn btn-danger mx-4' onClick={() => handleRemarkSubmit(remark, 'Reject')} disabled={!remark?.length}>Reject</button>
                    <button className='btn btn-success' onClick={() => handleRemarkSubmit(remark, 'Approve')}>Approve</button>
                </div>
            </div>
        </div>
    )
}

export default Index