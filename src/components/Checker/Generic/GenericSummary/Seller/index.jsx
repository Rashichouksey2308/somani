import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';
import KeyAddresses from '../../../Common/KeyAddress';
import AuthorisedSignatoryDetails from '../../../Common/AuthorisedSignatoriesDetails';

function Index({ tableColumns, sellerDetails, sellerDetailsHistory }) {

  const [addresses, setAddresses] = useState([]);
  const [authorisedSignatoryDetailsData, setauthorisedSignatoryDetailsData] = useState([]);

  useEffect(() => {
    modifyKeyAddressesCurrentData();
    modifyCurrentAuthorisedSignatoryData();
  }, [sellerDetails, sellerDetailsHistory]);

  const modifyCurrentAuthorisedSignatoryData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < sellerDetails?.authorisedSignatoryDetails?.length; i++) {

      curr = sellerDetails?.authorisedSignatoryDetails[i];

      let history;

      history = sellerDetailsHistory?.authorisedSignatoryDetails && sellerDetailsHistory?.authorisedSignatoryDetails?.find((address) => address?.email === curr?.email);

      if (history) {
        curr = {
          ...curr,
          history
        }
      }
      finalData.push(curr)
    }

    setauthorisedSignatoryDetailsData(finalData);
  };

  const modifyKeyAddressesCurrentData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < sellerDetails?.addresses?.length; i++) {

      curr = sellerDetails?.addresses[i];

      let history;

      history = sellerDetailsHistory?.addresses && sellerDetailsHistory?.addresses?.find((address) => address?.fullAddress === curr?.fullAddress);

      if (history) {
        curr = {
          ...curr,
          history
        }
      }
      finalData.push(curr)
    }

    const modifiedFinalData = finalData?.map(({
      address: fullAddress,
      ...rest
    }) => ({
      fullAddress,
      ...rest
    }));
    setAddresses(modifiedFinalData);
  };

  const onToggle = (state) => { };

  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#seller"
              aria-expanded="true"
              aria-controls="seller"
            >
              <h3 className={`${styles.heading} mb-0`}>Seller</h3>
              <span>{on ? '+' : '-'}</span>
            </div>

          </div>
        )}
      </Toggle>
      <div id="seller" className="collapse" aria-labelledby="seller">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <span className={`font-weight-light h5 ${sellerDetailsHistory?.name && sellerDetailsHistory?.name !== sellerDetails?.name && styles.highlighted_field}`}>
                    {sellerDetails?.name || '--'}
                  </span>
                  {sellerDetailsHistory?.name && sellerDetailsHistory?.name !== sellerDetails?.name && <Tooltip data={sellerDetailsHistory?.name || '--'} />}
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                  <span className={`font-weight-light h5 text-uppercase ${sellerDetailsHistory?.shortName && sellerDetailsHistory?.shortName !== sellerDetails?.shortName && styles.highlighted_field}`}>
                    {sellerDetails?.shortName || '--'}
                  </span>
                  {sellerDetailsHistory?.shortName && sellerDetailsHistory?.shortName !== sellerDetails?.shortName && <Tooltip data={sellerDetailsHistory?.shortName || '--'} />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom"></div>

        <KeyAddresses
          Header="Addresses"
          uniqueField="fullAddress"
          KeyAddresses={addresses || []}
        />

        <div className="border-bottom"></div>

        <div className='m-4'>
          <AuthorisedSignatoryDetails
            tableColumns={tableColumns}
            authorisedSignatoryDetailsData={authorisedSignatoryDetailsData || []}
            tableView
          />
        </div>


      </div>
    </div>
  );
}

export default Index;
