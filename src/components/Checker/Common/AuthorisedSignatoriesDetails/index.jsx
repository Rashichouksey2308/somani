import React from 'react';
import styles from './index.module.scss';
import Tooltip from '../../../Tooltip';
import Toggle from '../../../Toggle';
import Table from '../../../Table';

function Index({ className, tableView, tableColumns, authorisedSignatoryDetailsData }) {
    const onToggle = (state) => { };

    return (
        <div className={`${styles.main} vessel_card mt-4 card border_color`}>
            <Toggle onToggle={onToggle}>
                {({ on, onToggle }) => (
                    <div onClick={onToggle}>
                        <div
                            className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                            data-toggle="collapse"
                            data-target="#AuthorisedSignatoriesDetails"
                            aria-expanded="true"
                            aria-controls="keyAddress"
                        >
                            <h3 className={`${styles.heading} mb-0`}>Authorised Signatory Details</h3>
                            <span>{on ? '+' : '-'}</span>
                        </div>
                        <div id="AuthorisedSignatoriesDetails" className={`collapse ${tableView && 'mb-n4'}`}>
                            {!tableView ?

                                <div className={`${styles.dashboard_form} vessel_card card-body ml-3 mr-3 mt-2`}>
                                    <div className="d-flex justify-space-between">

                                        <div className="row w-100">

                                            {authorisedSignatoryDetailsData.length > 0 ?
                                                authorisedSignatoryDetailsData.map((details) => (

                                                    <>
                                                        <div className="col-md-12 mb-5 px-0 mx-0 row d-flex flex-wrap">

                                                            {details.name &&

                                                                <div className={`${details.phone ? 'col-md-3' : 'col-md-4'} col-sm-6`}>
                                                                    <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                                                                    <span className={`font-weight-light h5 ${details?.email === details?.history?.email && details?.history?.name && details?.history?.name !== details.name && styles.highlighted_field}`}>
                                                                        {details.name || '--'}
                                                                    </span>
                                                                    {details?.email === details?.history?.email && details?.history?.name && details?.history?.name !== details.name && <Tooltip data={details?.history?.name || '--'} />}
                                                                </div>
                                                            }

                                                            {details.email &&
                                                                <div className={`${details.phone ? 'col-md-3' : 'col-md-4'} col-sm-6`}>
                                                                    <div className={`mb-2 font-weight-bold label_heading`}>Email</div>
                                                                    <span className={`font-weight-light h5 ${details?.history?.email && details?.history?.email !== details.email && styles.highlighted_field}`}>
                                                                        {details.email || '--'}
                                                                    </span>
                                                                    {details?.history?.email && details?.history?.email !== details.email && <Tooltip data={details?.history?.email || '--'} />}
                                                                </div>
                                                            }

                                                            {details.designation &&
                                                                <div className={`${details.phone ? 'col-md-3' : 'col-md-4'} col-sm-6`}>
                                                                    <div className={`mb-2 font-weight-bold label_heading`}>Designation</div>
                                                                    <span className={`font-weight-light h5 ${details?.email === details?.history?.email && details?.history?.designation && details?.history?.designation !== details.designation && styles.highlighted_field}`}>
                                                                        {details.designation || '--'}
                                                                    </span>
                                                                    {details?.email === details?.history?.email && details?.history?.designation && details?.history?.designation !== details.designation && <Tooltip data={details?.history?.designation || '--'} />}
                                                                </div>
                                                            }

                                                            {details.phone &&
                                                                <div className={`${details.phone ? 'col-md-3' : 'col-md-4'} col-sm-6`}>
                                                                    <div className={`mb-2 font-weight-bold label_heading`}>Phone No.</div>
                                                                    <span className={`font-weight-light h5 ${details?.email === details?.history?.email && details?.history?.phone && details?.history?.phone !== details.phone && styles.highlighted_field}`}>
                                                                        {details.phone || '--'}
                                                                    </span>
                                                                    {details?.email === details?.history?.email && details?.history?.phone && details?.history?.phone !== details.phone && <Tooltip data={details?.history?.phone || '--'} />}
                                                                </div>
                                                            }
                                                        </div>
                                                        <div></div>
                                                    </>
                                                ))
                                                : 
                                                        <span className='h5 m-auto'>No records found</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                :
                                <Table columns={tableColumns || []} data={authorisedSignatoryDetailsData || []} />
                            }
                        </div>
                    </div>
                )}
            </Toggle>
        </div>
    );
}

export default Index;