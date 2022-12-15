import React from 'react';
import styles from './index.module.scss';
import Tooltip from '../../../../Tooltip';

function Index({ thirdPartyAppointment, thirdPartyAppointmentHistory }) {
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#keyAddress"
                aria-expanded="true"
                aria-controls="keyAddress"
            >
                <h3 className={`${styles.heading} mb-0`}>Appointment of Third Party</h3>
                <span>+</span>
            </div>
            <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="row">
                        <div className="card px-4 py-2 mx-2">
                            <div className="d-flex justify-content-between my-auto">
                                <div>
                                    <label className="font-weight-bold">{thirdPartyAppointment?.name}{thirdPartyAppointmentHistory?.name && <Tooltip data={thirdPartyAppointmentHistory?.name} />}</label>
                                    <div>
                                        <p>
                                            {thirdPartyAppointment?.address?.fullAddress} - {thirdPartyAppointment?.address?.pinCode}
                                            {thirdPartyAppointmentHistory?.address?.fullAddress && <Tooltip data={thirdPartyAppointmentHistory?.address?.fullAddress} />}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index