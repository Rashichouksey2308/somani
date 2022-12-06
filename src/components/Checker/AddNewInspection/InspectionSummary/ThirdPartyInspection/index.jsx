import React from 'react';
import styles from './index.module.scss';
import InspectionType from './InspectionType';
import InspectionDetails from './InspectionDetails';
import OtherDocuments from './OtherDocuments';
import LoadPortDocument from './LoadPortDocument';
import DischargePortDocument from './DischargePortDocument';

function Index({ thirdPartyInspection, order, thirdPartyInspectionHistory, orderHistory }) {

    const loadPortDocuments = [thirdPartyInspection?.certificateOfOrigin, thirdPartyInspection?.certificateOfQuality, thirdPartyInspection?.certificateOfWeight].filter(function (element) {
        return element !== undefined;
    });

    const dischargePortDocuments = [thirdPartyInspection?.dischargeCertificateOfOrigin, thirdPartyInspection?.dischargeCertificateOfQuality, thirdPartyInspection?.dischargeCertificateOfWeight].filter(function (element) {
        return element !== undefined;
    });
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#thirdPartyInspection"
                aria-expanded="true"
                aria-controls="thirdPartyInspection"
            >
                <h3 className={`${styles.heading} mb-0`}>Third Party Inspection</h3>
                <span>+</span>
            </div>
            <div id="thirdPartyInspection" className="collapse" aria-labelledby="thirdPartyInspection">
                <div className={`${styles.dashboard_form} vessel_card card-body p-0`}>
                    <div className="d-flex justify-content-between my-auto flex-column">
                        <InspectionType
                            thirdPartyInspection={thirdPartyInspection}
                            order={order}
                            thirdPartyInspectionHistory={thirdPartyInspectionHistory}
                            orderHistory={orderHistory}
                        />
                        <InspectionDetails
                            loadPortInspectionDetails={thirdPartyInspection?.loadPortInspectionDetails}
                            dischargePortInspectionDetails={thirdPartyInspection?.dischargePortInspectionDetails}
                            loadPortInspectionDetailsHistory={thirdPartyInspectionHistory?.loadPortInspectionDetails}
                            dischargePortInspectionHistory={thirdPartyInspectionHistory?.dischargePortInspectionDetails}
                        />
                        {loadPortDocuments.length > 0 && <LoadPortDocument loadPortDocuments={loadPortDocuments} orderId={order._id} />}
                        {dischargePortDocuments.length > 0 && <DischargePortDocument dischargePortDocuments={dischargePortDocuments} orderId={order._id} />}
                        <OtherDocuments orderId={order._id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index