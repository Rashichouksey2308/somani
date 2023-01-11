import React from 'react';
import styles from './index.module.scss';
import Tooltip from '../../../Tooltip';

function Index({ id, ariaLabelledby, className, Header, KeyAddresses }) {
    return (
        <div id={id} className={className} aria-labelledby={ariaLabelledby}>
            <div className={`${styles.dashboard_form} vessel_card card-body m-2`}>
                <div className={`${styles.inner_head_container} bg-transparent`}>
                    <h3 className={`${styles.heading} mb-0`}>{Header}</h3>
                </div>
                <div className={`${styles.inner_head_containt} bg-transparent d-flex flex-wrap`}>

                    {KeyAddresses?.length > 0 ?
                        KeyAddresses.map((address) => (
                            <div className={`${styles.registered_address} bg-transparent m-1 d-flex flex-column justify-content-between`}>
                                <>
                                    {address?.fullAddress &&
                                        <>
                                            <div>
                                                <h3>Registered Address</h3>
                                                <div></div>
                                            </div>

                                            <div className="address mb-2 d-flex">
                                                <span className={`${address?.history?.fullAddress && address?.fullAddress !== address?.history?.fullAddress && styles.highlighted_field}`}>
                                                    {address?.fullAddress || '--'}
                                                </span>
                                                {address?.history?.fullAddress && address?.fullAddress !== address?.history?.fullAddress && <Tooltip data={address?.history?.fullAddress || '--'} />}
                                            </div>
                                        </>
                                    }

                                    <div className="account-info d-flex justify-content-between m-3">
                                    {address?.email &&
                                            <h3>
                                                Email:
                                                {' '}
                                                <span className={`${address?.history?.email && address?.email !== address?.history?.email && styles.highlighted_field}`}>
                                                    {address?.email || '--'}
                                                </span>
                                                {address?.history?.email && address?.email !== address?.history?.email && <Tooltip data={address?.history?.email || '--'} />}
                                            </h3>
                                        }
                                        {address?.Branch &&
                                            <h3>
                                                Branch:
                                                {' '}
                                                <span className={`${address?.history?.Branch && address?.Branch !== address?.history?.Branch && styles.highlighted_field}`}>
                                                    {address?.Branch || '--'}
                                                </span>
                                                {address?.history?.Branch && address?.Branch !== address?.history?.Branch && <Tooltip data={address?.history?.Branch || '--'} />}
                                            </h3>
                                        }
                                        {address?.gstin &&
                                            <h3>
                                                GSTIN:
                                                {' '}
                                                <span className={`${address?.history?.gstin && address?.gstin !== address?.history?.gstin && styles.highlighted_field}`}>
                                                    {address?.gstin || '--'}
                                                </span>
                                                {address?.history?.gstin && address?.gstin !== address?.history?.gstin && <Tooltip data={address?.history?.gstin || '--'} />}
                                            </h3>
                                        }
                                    </div>
                                </>
                            </div>
                        ))
                        :
                        <h5 className='m-auto'>No Address Details found</h5>
                    }
                </div>
            </div>
        </div>
    );
}

export default Index;