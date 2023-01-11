import React from 'react';
import styles from './index.module.scss';
import Table from '../../../Table';
import Toggle from '../../../Toggle/index';
import Tooltip from '../../../Tooltip';

function index({ tableColumns, bankDetailsData, tableView }) {

    const onToggle = (state) => { };

    return (
        <div className={`${styles.main} mt-4 border_color card`}>
            <Toggle onToggle={onToggle}>
                {({ on, onToggle }) => (
                    <div onClick={onToggle}>
                        <div
                            className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
                            data-toggle="collapse"
                            data-target="#bankDetails"
                            aria-expanded="true"
                            aria-controls="bankDetails"
                        >
                            <h3 className={styles.heading}>Bank Details</h3>
                            <span>{on ? '+' : '-'}</span>
                        </div>
                        <div id="bankDetails" className={`collapse ${tableView && 'mb-n4'}`} aria-labelledby="bankDetails" data-parent="#bankDetails">
                            {!tableView ?

                                <div className={`${styles.dashboard_form} vessel_card card-body`}>
                                    <div className="d-flex justify-space-between">

                                        <div className="row w-100">

                                            {bankDetailsData.length > 0 ?
                                                bankDetailsData.map((details) => (
                                                    <>
                                                        <div className={`col-md-12 mb-3 px-0 mx-0 row d-flex flex-wrap  ${!tableView && 'p-4 ml-3 rounded border border-dark'}`}>

                                                            {details.Bank_Name &&

                                                                <div className={`${details.AD_Code ? 'col-md-3' : 'col-md-4'} col-sm-6`}>
                                                                    <div className={`mb-2 font-weight-bold label_heading`}>Bank Name</div>
                                                                    <span className={`font-weight-light h5 ${details?.Account_No === details?.history?.Account_No && details?.history?.Bank_Name && details?.history?.Bank_Name !== details.Bank_Name && styles.highlighted_field}`}>
                                                                        {details.Bank_Name || '--'}
                                                                    </span>
                                                                    {details?.Account_No === details?.history?.Account_No && details?.history?.Bank_Name && details?.history?.Bank_Name !== details.Bank_Name && <Tooltip data={details?.history?.Bank_Name || '--'} />}
                                                                </div>
                                                            }

                                                            {details.Account_No &&
                                                                <div className={`${details.AD_Code ? 'col-md-3' : 'col-md-4'} col-sm-6`}>
                                                                    <div className={`mb-2 font-weight-bold label_heading`}>Account No.</div>
                                                                    <span className={`font-weight-light h5 ${details?.history?.Account_No && details?.history?.Account_No !== details.Account_No && styles.highlighted_field}`}>
                                                                        {details.Account_No || '--'}
                                                                    </span>
                                                                    {details?.history?.Account_No && details?.history?.Account_No !== details.Account_No && <Tooltip data={details?.history?.Account_No || '--'} />}
                                                                </div>
                                                            }

                                                            {details.IFSC &&
                                                                <div className={`${details.AD_Code ? 'col-md-3' : 'col-md-4'} col-sm-6`}>
                                                                    <div className={`mb-2 font-weight-bold label_heading`}>IFSC</div>
                                                                    <span className={`font-weight-light h5 ${details?.Account_No === details?.history?.Account_No && details?.history?.IFSC && details?.history?.IFSC !== details.IFSC && styles.highlighted_field}`}>
                                                                        {details.IFSC || '--'}
                                                                    </span>
                                                                    {details?.Account_No === details?.history?.Account_No && details?.history?.IFSC && details?.history?.IFSC !== details.IFSC && <Tooltip data={details?.history?.IFSC || '--'} />}
                                                                </div>
                                                            }

                                                            {details.AD_Code &&
                                                                <div className={`${details.AD_Code ? 'col-md-3' : 'col-md-4'} col-sm-6`}>
                                                                    <div className={`mb-2 font-weight-bold label_heading`}>AD CODE</div>
                                                                    <span className={`font-weight-light h5 ${details?.Account_No === details?.history?.Account_No && details?.history?.AD_Code && details?.history?.AD_Code !== details.AD_Code && styles.highlighted_field}`}>
                                                                        {details.AD_Code || '--'}
                                                                    </span>
                                                                    {details?.Account_No === details?.history?.Account_No && details?.history?.AD_Code && details?.history?.AD_Code !== details.AD_Code && <Tooltip data={details?.history?.AD_Code || '--'} />}
                                                                </div>
                                                            }


                                                            {details.Branch_Address &&
                                                                <div className={`col-md-3 ${details.Bank_Name && details.IFSC && details.AD_Code && details.Account_No && 'mt-3'} col-sm-6`}>
                                                                        <div className={`mb-2 font-weight-bold label_heading`}>Branch Address
                                                                        </div>
                                                                        <span className={`font-weight-light h5 ${details?.Account_No === details?.history?.Account_No && details?.history?.Branch_Address && details?.history?.Branch_Address !== details.Branch_Address && styles.highlighted_field}`}>
                                                                            {details.Branch_Address || '--'}
                                                                        </span>
                                                                        {details?.Account_No === details?.history?.Account_No && details?.history?.Branch_Address && details?.history?.Branch_Address !== details.Branch_Address && <Tooltip data={details?.history?.Branch_Address || '--'} />}
                                                                </div>
                                                            }

                                                            {details.Swift_Code &&
                                                                <div className={`col-md-3 ${(details.Bank_Name && details.IFSC && details.AD_Code && details.Account_No || details.Branch_Address1) && 'mt-3'} col-sm-6`}>
                                                                        <div className={`mb-2 font-weight-bold label_heading`}>Swift Code
                                                                        </div>
                                                                        <span className={`font-weight-light h5 ${details?.Account_No === details?.history?.Account_No && details?.history?.Swift_Code && details?.history?.Swift_Code !== details.Swift_Code && styles.highlighted_field}`}>
                                                                            {details.Swift_Code || '--'}
                                                                        </span>
                                                                        {details?.Account_No === details?.history?.Account_No && details?.history?.Swift_Code && details?.history?.Swift_Code !== details.Swift_Code && <Tooltip data={details?.history?.Swift_Code || '--'} />}
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
                                <Table columns={tableColumns} data={bankDetailsData || []} />
                            }
                        </div>
                    </div>
                )}
            </Toggle>
        </div>
    );
}

export default index;
