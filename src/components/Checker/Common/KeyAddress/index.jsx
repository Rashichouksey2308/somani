import React from 'react';
import styles from './index.module.scss';
import Tooltip from '../../../Tooltip';

function Index({ Header, KeyAddresses, uniqueField }) {
    return (
        <>
            <div className={`${styles.main} mt-4 card border_color mx-4`}>
                <div className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}>
                    <h3 className={`${styles.heading} mb-0`}>{Header}</h3>
                </div>

                <div className={`${styles.dashboard_form} vessel_card card-body m-3 d-flex flex-wrap`}>

                    {KeyAddresses?.length > 0 ?
                        KeyAddresses.map((address) => (

                            <div className={`${styles.registered_address} card m-1 d-flex flex-column justify-content-between`}>

                                {(
                                    address.fullAddress === "" &&
                                    address.email === "" &&
                                    address.gstin === "")
                                    ||
                                    (
                                        address.fullAddress === "" &&
                                        address.Branch === "" &&
                                        address.gstin === "")
                                    &&
                                    <span className='m-auto h5'>No Records found</span>
                                }
                                <>
                                    <>
                                        <div>
                                            <div className='h5'>{address.addressType || 'Address'}</div>
                                            <div></div>
                                        </div>

                                        <div className="address mb-2 d-flex">
                                            <span className={`${address?.history?.fullAddress && address?.fullAddress !== address?.history?.fullAddress && styles.highlighted_field}`}>
                                                {address?.fullAddress || '--'}
                                            </span>
                                            {address?.history?.fullAddress && address?.fullAddress !== address?.history?.fullAddress && <Tooltip data={address?.history?.fullAddress || '--'} />}
                                        </div>
                                    </>

                                    {(address?.email || address?.Branch || address?.gstin) &&
                                        <div className="account-info d-flex justify-content-between p-3">
                                            {address?.email &&
                                                <div className='m-2'>
                                                    <span className='h5'>Email:</span>
                                                    {' '}
                                                    <span className={`${address?.history?.[uniqueField] === address?.[uniqueField] && address?.history?.email && address?.email !== address?.history?.email && styles.highlighted_field}`}>
                                                        {address?.email || '--'}
                                                    </span>
                                                    {address?.history?.[uniqueField] === address?.[uniqueField] && address?.history?.email && address?.email !== address?.history?.email && <Tooltip data={address?.history?.email || '--'} />}
                                                </div>
                                            }
                                            {address?.Branch &&
                                                <div className='m-2'>
                                                    <span className='h5'>Branch:</span>
                                                    {' '}
                                                    <span className={`${address?.history?.[uniqueField] === address?.[uniqueField] && address?.history?.Branch && address?.Branch !== address?.history?.Branch && styles.highlighted_field}`}>
                                                        {address?.Branch || '--'}
                                                    </span>
                                                    {address?.history?.[uniqueField] === address?.[uniqueField] && address?.history?.Branch && address?.Branch !== address?.history?.Branch && <Tooltip data={address?.history?.Branch || '--'} />}
                                                </div>
                                            }
                                            {address?.gstin &&
                                                <div className='m-2'>
                                                    <span className='h5'>GSTIN:</span>
                                                    {' '}
                                                    <span className={`${address?.history?.[uniqueField] === address?.[uniqueField] && address?.history?.gstin && address?.gstin !== address?.history?.gstin && styles.highlighted_field}`}>
                                                        {address?.gstin || '--'}
                                                    </span>
                                                    {address?.history?.[uniqueField] === address?.[uniqueField] && address?.history?.gstin && address?.gstin !== address?.history?.gstin && <Tooltip data={address?.history?.gstin || '--'} />}
                                                </div>
                                            }
                                        </div>
                                    }

                                </>
                            </div>
                        ))
                        :
                        <h5 className='m-auto'>No Address address? found</h5>
                    }
                </div>
            </div>
        </>
    );
}

export default Index;