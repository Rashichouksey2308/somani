import React from 'react';
import styles from './index.module.scss';

function Index({ contactPersonDetails }) {
    return (
        <div className={`${styles.main} mt-4 card border_color mx-4`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            >
                <h3 className={`${styles.heading} mb-0`}>Key Contact Person Details</h3>
            </div>
            <div>
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="row">
                        {contactPersonDetails.map((person) => (
                            <div className="card px-4 py-2 mx-2">
                                <div className="d-flex justify-content-between my-auto">
                                    <div>
                                        <label className="font-weight-bold">{person?.name} - {person?.designation}, {person?.department}</label>
                                        <div>
                                            <p>
                                                {person?.emailId}, <span className={styles.phone_number}>{person?.phoneNumber}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="font-weight-bold text-right">
                                    Authorised Signatory: <span className='font-weight-normal'>{person?.authorizedSignatory}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index