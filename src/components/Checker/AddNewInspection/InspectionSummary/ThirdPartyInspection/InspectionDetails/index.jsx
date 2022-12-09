import React from 'react';
import styles from '../index.module.scss';
import Tooltip from '../../../../../Tooltip';

const Index = ({ loadPortInspectionDetails, dischargePortInspectionDetails, loadPortInspectionDetailsHistory, dischargePortInspectionDetailsHistory }) => {
    return (
        <div className={`${styles.main} mt-4 card border_color mx-4`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#inspectionDetails"
                aria-expanded="true"
                aria-controls="inspectionDetails"
            >
                <h3 className={`${styles.heading} mb-0`}>Inspection Details</h3>
                <span>+</span>
            </div>
            <div id="inspectionDetails" className="collapse" aria-labelledby="inspectionDetails">
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className='card-header border_color d-flex justify-content-between bg-transparent h5 px-0'>Inspection at Load Port</div>
                    <div className="row w-100">
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                No. of Containers
                            </div>
                            <div className='font-weight-light h5'>
                                {loadPortInspectionDetails?.numberOfContainer}
                                {loadPortInspectionDetailsHistory?.numberOfContainer && <Tooltip data={loadPortInspectionDetailsHistory?.numberOfContainer} />}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Inspection Port
                            </div>
                            <div className='font-weight-light h5'>
                                {loadPortInspectionDetails?.inspectionPort}
                                {loadPortInspectionDetailsHistory?.inspectionPort && <Tooltip data={loadPortInspectionDetailsHistory?.inspectionPort} />}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Inspected By
                            </div>
                            <div className='font-weight-light h5'>
                                {loadPortInspectionDetails?.inspectedBy}
                                {loadPortInspectionDetailsHistory?.inspectedBy && <Tooltip data={loadPortInspectionDetailsHistory?.inspectedBy} />}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Inspection Date
                            </div>
                            <div className='font-weight-light h5'>
                                {loadPortInspectionDetails?.startDate.slice(0, 10)}
                                {loadPortInspectionDetailsHistory?.startDate && <Tooltip data={loadPortInspectionDetailsHistory?.startDate.slice(0, 10)} />}
                            </div>
                        </div>
                        <div className="col-12 my-4">
                            <div className={`mb-2 font-weight-bold label_heading text-dark`}>
                                Special Mention
                            </div>
                            <div className='font-weight-light h5'>
                                {loadPortInspectionDetails?.specialMention}
                                {loadPortInspectionDetailsHistory?.specialMention && <Tooltip data={loadPortInspectionDetailsHistory?.specialMention} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className='card-header border_color d-flex justify-content-between bg-transparent h5 px-0'>Inspection at Discharge Port</div>
                    <div className="row w-100">
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                No. of Containers
                            </div>
                            <div className='font-weight-light h5'>
                                {dischargePortInspectionDetails?.numberOfContainer}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Inspection Port
                            </div>
                            <div className='font-weight-light h5'>
                                {dischargePortInspectionDetails?.inspectionPort}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Inspected By
                            </div>
                            <div className='font-weight-light h5'>
                                {dischargePortInspectionDetails?.inspectedBy}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-4">
                            <div className={`mb-2 font-weight-bold label_heading`}>
                                Inspection Date
                            </div>
                            <div className='font-weight-light h5'>
                                {dischargePortInspectionDetails?.startDate.slice(0, 10)}
                            </div>
                        </div>
                        <div className="col-12 my-4">
                            <div className={`mb-2 font-weight-bold label_heading text-dark`}>
                                Special Mention
                            </div>
                            <div className='font-weight-light h5'>
                                {dischargePortInspectionDetails?.specialMention}
                                {dischargePortInspectionDetailsHistory?.specialMention && <Tooltip data={dischargePortInspectionDetailsHistory?.specialMention} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index