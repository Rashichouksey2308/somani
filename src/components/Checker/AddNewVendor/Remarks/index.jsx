import React from 'react';
import styles from './index.module.scss';

function Index() {
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div className='row px-3'>
                <div className={`${styles.form_group} col-lg-7 col-md-6 col-sm-6 my-4`}>
                    <input
                        className={`${styles.customSelect} border_color input form-control py-4`}
                        type="text"
                        required
                        name="supplierName"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                        Remarks
                    </label>
                </div>
                <div className='col-lg-5 my-auto remark-action'>
                    <button className='btn btn-danger mx-4'>Reject</button>
                    <button className='btn btn-success'>Approve</button>
                </div>
            </div>
        </div>
    )
}

export default Index