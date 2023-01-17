import React from 'react';
import styles from './index.module.scss';
import Documents from './Documents';
import Tooltip from '../../../../Tooltip';

function Index({ plotInspection, plotInspectionHistory, orderId }) {
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#plotInspection"
                aria-expanded="true"
                aria-controls="plotInspection"
            >
                <h3 className={`${styles.heading} mb-0`}>Plot Inspection</h3>
                <div className='d-flex'>
                    <p className='font-weight-bold label_heading mr-4'>Plot Inspection Date: <p className='d-inline-block text-dark'>{plotInspection?.plotInspectionDate.slice(0, 10)}{plotInspectionHistory?.plotInspectionDate && <Tooltip data={plotInspectionHistory?.plotInspectionDate.slice(0, 10)} />}</p></p>
                    <span>+</span>
                </div>
            </div>
            <div id="plotInspection" className="collapse" aria-labelledby="plotInspection">
                <div className={`${styles.dashboard_form} vessel_card card-body p-0`}>
                    <div className="d-flex justify-content-between my-auto flex-column">
                        {plotInspection?.plotInspectionReport ? <Documents plotInspectionReport={[plotInspection?.plotInspectionReport]} orderId={orderId} /> :
                            <div className='h2 text-center'>No records found</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index