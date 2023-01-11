import React from 'react';
import styles from './index.module.scss';
import Tooltip from '../../../Tooltip';

function Index({ goNoGoLogicDetails, goNoGoHistoryDetails}) {

    function numDifferentiation(value) {
        let val = Math.abs(value)
        if (val >= 10000000) {
          val = (val / 10000000).toFixed(0) + ' Cr';
        } else if (val >= 100000) {
          val = (val / 100000).toFixed(0) + ' Lac';
        }
        return val;
      }

    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
            >
                <h3 className={`${styles.heading} mb-0`}>Go No Go Logic</h3>
            </div>
            <div>
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="d-flex justify-space-between">
                        <div className="row w-100">
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Transaction Type
                                    </div>
                                    <div className='font-weight-light h5'>
                                    <span className={`${goNoGoHistoryDetails?.transactionType?.length > 0 && JSON.stringify(goNoGoLogicDetails?.transactionType) !== JSON.stringify(goNoGoHistoryDetails?.transactionType) && styles.highlighted_field_pd_10}`}>
                                        {goNoGoLogicDetails?.transactionType?.length ?
                                            goNoGoLogicDetails?.transactionType.map((transaction) => (
                                                <span className='badge badge-outline mr-2'>{transaction}</span>
                                            ))
                                            :
                                            <span>--</span>
                                        }
                                    </span>
                                    { goNoGoHistoryDetails?.transactionType?.length > 0 && JSON.stringify(goNoGoLogicDetails?.transactionType) !== JSON.stringify(goNoGoHistoryDetails?.transactionType)
                                        &&
                                        <Tooltip data={goNoGoHistoryDetails?.transactionType?.join(', ')} />
                                    }
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Type of Business
                                    </div>
                                    <div className='font-weight-light h5'>
                                    <span className={`${goNoGoHistoryDetails?.typeOfBusiness?.length > 0 && JSON.stringify(goNoGoLogicDetails?.typeOfBusiness) !== JSON.stringify(goNoGoHistoryDetails?.typeOfBusiness) && styles.highlighted_field_pd_10}`}>
                                        {goNoGoLogicDetails?.typeOfBusiness?.length ?
                                            goNoGoLogicDetails?.typeOfBusiness.map((business) => (
                                                <span className='badge badge-outline mr-2'>{business}</span>
                                            ))
                                            :
                                            <span>--</span>
                                        }
                                    </span>
                                    { goNoGoHistoryDetails?.typeOfBusiness?.length > 0 && JSON.stringify(goNoGoLogicDetails?.typeOfBusiness) !== JSON.stringify(goNoGoHistoryDetails?.typeOfBusiness)
                                        &&
                                        <Tooltip data={goNoGoHistoryDetails?.typeOfBusiness?.join(', ')} />
                                    }
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Turnover
                                    </div>
                                    <div className='font-weight-light h5'>
                                        less than
                                        {' '}
                                        <span className={`${goNoGoHistoryDetails?.minTurnOver && goNoGoHistoryDetails?.minTurnOver !== goNoGoLogicDetails?.minTurnOver && styles.highlighted_field}`}>
                                            {numDifferentiation(goNoGoLogicDetails?.minTurnOver) || '-'}
                                        </span>
                                        {goNoGoHistoryDetails?.minTurnOver && goNoGoHistoryDetails?.minTurnOver !== goNoGoLogicDetails?.minTurnOver && <Tooltip data={numDifferentiation(goNoGoHistoryDetails?.minTurnOver) || '-'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Transaction Value
                                    </div>
                                    <div className='font-weight-light h5'>
                                        less than
                                        {' '}
                                    <span className={`${goNoGoHistoryDetails?.minOrderValue && goNoGoHistoryDetails?.minOrderValue !== goNoGoLogicDetails?.minOrderValue && styles.highlighted_field}`}>
                                            {numDifferentiation(goNoGoLogicDetails?.minOrderValue) || '-'}
                                        </span>
                                        {goNoGoHistoryDetails?.minOrderValue && goNoGoHistoryDetails?.minOrderValue !== goNoGoLogicDetails?.minOrderValue && <Tooltip data={numDifferentiation(goNoGoHistoryDetails?.minOrderValue) || '-'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Expected Date of Shipment
                                    </div>
                                    <div className='font-weight-light h5'>
                                        less than or equal to
                                        {' '}
                                        <span className={`${goNoGoHistoryDetails?.daysAllowedInExpectedDateOfShipment && goNoGoHistoryDetails?.daysAllowedInExpectedDateOfShipment !== goNoGoLogicDetails?.daysAllowedInExpectedDateOfShipment && styles.highlighted_field}`}>
                                            {goNoGoLogicDetails?.daysAllowedInExpectedDateOfShipment && `${goNoGoLogicDetails?.daysAllowedInExpectedDateOfShipment} days` || '-'}
                                        </span>
                                        {goNoGoHistoryDetails?.daysAllowedInExpectedDateOfShipment && goNoGoHistoryDetails?.daysAllowedInExpectedDateOfShipment !== goNoGoLogicDetails?.daysAllowedInExpectedDateOfShipment && <Tooltip data={goNoGoHistoryDetails?.daysAllowedInExpectedDateOfShipment && `${goNoGoHistoryDetails?.daysAllowedInExpectedDateOfShipment} days` || '-'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Remarks
                                    </div>
                                    <div className='font-weight-light h5'>
                                    <span className={`${goNoGoHistoryDetails?.remarks && goNoGoHistoryDetails?.remarks !== goNoGoLogicDetails?.remarks && styles.highlighted_field}`}>
                                            {goNoGoLogicDetails?.remarks || '-'}
                                        </span>
                                        {goNoGoHistoryDetails?.remarks && goNoGoHistoryDetails?.remarks !== goNoGoLogicDetails?.remarks && <Tooltip data={goNoGoHistoryDetails?.remarks || '-'} />}
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