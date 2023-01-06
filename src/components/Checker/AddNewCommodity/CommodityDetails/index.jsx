import React from 'react';
import styles from './index.module.scss';
import Tooltip from '../../../Tooltip';

function Index({ commodityDetails, commodityDetailsHistory}) {

    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            >
                <h3 className={`${styles.heading} mb-0`}>Commodity</h3>
            </div>
            <div>
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="d-flex justify-space-between">
                        <div className="row w-100">
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Commodity
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${commodityDetailsHistory?.Commodity && commodityDetailsHistory?.Commodity !== commodityDetails?.Commodity && styles.highlighted_field}`}>
                                            {commodityDetails?.Commodity || '-'}
                                        </span>
                                        {commodityDetailsHistory?.Commodity && commodityDetailsHistory?.Commodity !== commodityDetails?.Commodity && <Tooltip data={commodityDetailsHistory?.Commodity || '--'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Chapter Name
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${commodityDetailsHistory?.Chapter_Name && commodityDetailsHistory?.Chapter_Name !== commodityDetails?.Chapter_Name && styles.highlighted_field}`}>
                                            {commodityDetails?.Chapter_Name || '-'}
                                        </span>
                                        {commodityDetailsHistory?.Chapter_Name && commodityDetailsHistory?.Chapter_Name !== commodityDetails?.Chapter_Name && <Tooltip data={commodityDetailsHistory?.Chapter_Name || '--'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Chapter Code
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${commodityDetailsHistory?.Chapter_Code && commodityDetailsHistory?.Chapter_Code !== commodityDetails?.Chapter_Code && styles.highlighted_field}`}>
                                            {commodityDetails?.Chapter_Code || '-'}
                                        </span>
                                        {commodityDetailsHistory?.Chapter_Code && commodityDetailsHistory?.Chapter_Code !== commodityDetails?.Chapter_Code && <Tooltip data={commodityDetailsHistory?.Chapter_Code || '--'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Approved Commodity
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${commodityDetailsHistory?.Approved_Commodity && commodityDetailsHistory?.Approved_Commodity !== commodityDetails?.Approved_Commodity && styles.highlighted_field}`}>
                                            {commodityDetails?.Approved_Commodity || '-'}
                                        </span>
                                        {commodityDetailsHistory?.Approved_Commodity && commodityDetailsHistory?.Approved_Commodity !== commodityDetails?.Approved_Commodity && <Tooltip data={commodityDetailsHistory?.Approved_Commodity || '--'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Approved Date
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${commodityDetailsHistory?.Approved_Date && commodityDetailsHistory?.Approved_Date !== commodityDetails?.Approved_Date && styles.highlighted_field}`}>
                                            {commodityDetails?.Approved_Date || '-'}
                                        </span>
                                        {commodityDetailsHistory?.Approved_Date && commodityDetailsHistory?.Approved_Date !== commodityDetails?.Approved_Date && <Tooltip data={commodityDetailsHistory?.Approved_Date || '--'} />}
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