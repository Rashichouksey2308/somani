import React from 'react';
import styles from './index.module.scss';
import Tooltip from '../../../../Tooltip';

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
                        {contactPersonDetails.length > 0 ?
                            contactPersonDetails?.map((person) => (
                                <div className="card px-4 py-2 mx-2 m-3">
                                    <div className="d-flex justify-content-between my-auto">
                                        <div>
                                            <label className="font-weight-bold h5 pt-2 pl-2 pr-2">
                                                <span className={`${person?.history?.name && person?.history?.name !== person?.name && styles.highlighted_field}`}>
                                                    {person?.name}
                                                </span>
                                                {person?.history?.name && person?.history?.name !== person?.name && <Tooltip data={person?.history?.name || '--'} />}
                                                {' '}
                                                -
                                                {' '}
                                                <span className={`${person?.history?.designation && person?.history?.designation !== person?.designation && styles.highlighted_field}`}>
                                                    {person?.designation}
                                                </span>
                                                {person?.history?.designation && person?.history?.designation !== person?.designation && <Tooltip data={person?.history?.designation || '--'} />}
                                                {' '}
                                                ,
                                                {' '}
                                                <span className={`${person?.history?.department && person?.history?.department !== person?.department && styles.highlighted_field}`}>
                                                    {person?.department}
                                                </span>
                                                {person?.history?.department && person?.history?.department !== person?.department && <Tooltip data={person?.history?.department || '--'} />}
                                            </label>

                                            <div className='mb-2 mt-3 pt-2 pl-2 pr-2'>
                                                <div className='d-flex mb-1'>
                                                    <div className={`font-weight-bold mr-2`}>
                                                        Email:
                                                    </div>
                                                    <div className='font-weight-light h5'>
                                                        <span className={`${person?.history?.emailId && person?.history?.emailId !== person?.emailId && styles.highlighted_field}`}>
                                                            {person?.emailId || '--'}
                                                        </span>
                                                        {person?.history?.emailId && person?.history?.emailId !== person?.emailId && <Tooltip data={person?.history?.emailId || '--'} />}
                                                    </div>
                                                </div>


                                                <div className='d-flex mb-1'>
                                                    <div className={`font-weight-bold mr-2`}>
                                                        Phone:
                                                    </div>
                                                    <div className='font-weight-light h5'>
                                                        <span className={`${person?.history?.phoneNumber && person?.history?.phoneNumber !== person?.phoneNumber && styles.highlighted_field}`}>
                                                            {person?.phoneNumber || '--'}
                                                        </span>
                                                        {person?.history?.phoneNumber && person?.history?.phoneNumber !== person?.phoneNumber && <Tooltip data={person?.history?.phoneNumber || '--'} />}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="font-weight-bold text-right">
                                        Authorised Signatory:
                                        <span className={`${person?.history?.authorizedSignatory && person?.history?.authorizedSignatory !== person?.authorizedSignatory && styles.highlighted_field} font-weight-normal ml-1`}>
                                            {person?.authorizedSignatory || '--'}
                                        </span>
                                        {person?.history?.authorizedSignatory && person?.history?.authorizedSignatory !== person?.authorizedSignatory && <Tooltip data={person?.history?.authorizedSignatory || '--'} />}
                                    </div>
                                </div>
                            ))
                            :
                            <span className='h5 m-auto'>No Records found</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index