import React from 'react';
import styles from '../index.module.scss';
import Tooltip from '../../../../../Tooltip';

const Index = ({ thirdPartyInspection, order, thirdPartyInspectionHistory, orderHistory }) => {
    return (
        <div className={`${styles.main} mt-4 card border_color mx-4`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#inspectionType"
                aria-expanded="true"
                aria-controls="inspectionType"
            >
                <h3 className={`${styles.heading} mb-0`}>Inspection Type</h3>
                <div className='d-flex'>
                    <p className='font-weight-bold label_heading mr-4'>Shipment Type: <p className='d-inline-block text-dark'>{order?.termsheet?.transactionDetails?.shipmentType}{orderHistory?.termsheet?.transactionDetails?.shipmentType && <Tooltip data={orderHistory?.termsheet?.transactionDetails?.shipmentType} />}</p></p>
                    <p className='font-weight-bold label_heading mr-4'>Part Shipment Allowed: <p className='d-inline-block text-dark'>{order?.termsheet?.transactionDetails?.partShipmentAllowed}{orderHistory?.termsheet?.transactionDetails?.partShipmentAllowed && <Tooltip data={orderHistory?.termsheet?.transactionDetails?.partShipmentAllowed} />}</p></p>
                    <span>+</span>
                </div>
            </div>
            <div id="inspectionType" className="collapse" aria-labelledby="inspectionType">
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="row w-100">
                        <div className="col-md-6 col-sm-6 my-4">
                            <div className={`font-weight-bold label_heading mb-2 text-dark`}>
                                Load Port
                            </div>
                            <div className='font-weight-light h5'>
                                {thirdPartyInspection?.loadPortInspection ? 'Yes' : 'No'}
                                {thirdPartyInspectionHistory?.loadPortInspection && <Tooltip data={thirdPartyInspectionHistory?.loadPortInspection ? 'Yes' : 'No'} />}
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 my-4">
                            <div className={`font-weight-bold label_heading mb-2 text-dark`}>
                                Dischare Port
                            </div>
                            <div className='font-weight-light h5'>
                                {thirdPartyInspection?.dischargePortInspection ? 'Yes' : 'No'}
                                {thirdPartyInspectionHistory?.dischargePortInspection && <Tooltip data={thirdPartyInspectionHistory?.dischargePortInspection ? 'Yes' : 'No'} />}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Commodity
                            </div>
                            <div className='font-weight-light h5'>
                                {order?.commodity}
                                {orderHistory?.commodity && <Tooltip data={orderHistory?.commodity} />}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Quantity
                            </div>
                            <div className='font-weight-light h5'>
                                {order?.quantity}
                                {orderHistory?.quantity && <Tooltip data={orderHistory?.quantity} />}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Country of Origin
                            </div>
                            <div className='font-weight-light h5'>
                                {order?.countryOfOrigin}
                                {orderHistory?.countryOfOrigin && <Tooltip data={orderHistory?.countryOfOrigin} />}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Vessel Name
                            </div>
                            <div className='font-weight-light h5'>
                                {order?.vesselName}
                                {orderHistory?.vesselName && <Tooltip data={orderHistory?.vesselName} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index