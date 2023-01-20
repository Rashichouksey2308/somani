import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';
import KeyAddresses from '../../../Common/KeyAddress';
import AuthorisedSignatoryDetails from '../../../Common/AuthorisedSignatoriesDetails';

function Index({ tableColumns, stevedoreDetails, stevedoreDetailsHistory }) {

  const [addresses, setAddresses] = useState([]);
  const [authorisedSignatoryDetailsData, setauthorisedSignatoryDetailsData] = useState([]);

  useEffect(() => {
    modifyKeyAddressesCurrentData();
    modifyCurrentAuthorisedSignatoryData();
  }, [stevedoreDetails, stevedoreDetailsHistory]);

  const modifyCurrentAuthorisedSignatoryData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < stevedoreDetails?.authorisedSignatoryDetails?.length; i++) {

      curr = stevedoreDetails?.authorisedSignatoryDetails[i];

      let history;

      history = stevedoreDetailsHistory?.authorisedSignatoryDetails && stevedoreDetailsHistory?.authorisedSignatoryDetails?.find((address) => address?.email === curr?.email);

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
    for (let i = 0; i < stevedoreDetails?.addresses?.length; i++) {

      curr = stevedoreDetails?.addresses[i];

      let history;

      history = stevedoreDetailsHistory?.addresses && stevedoreDetailsHistory?.addresses?.find((address) => address?.fullAddress === curr?.fullAddress);

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
              data-target="#stevedore"
              aria-expanded="true"
              aria-controls="stevedore"
            >
              <h3 className={`${styles.heading} mb-0`}>Stevedore</h3>
              <div className="d-flex">
                <p className='mr-3 label_heading font-weight-bold d-flex align-items-baseline'>
                  Same as CHA:
                </p>
                <div className='mr-3'>
                  <span className={`h5 ${stevedoreDetailsHistory?.sameAsCHA !== stevedoreDetails?.sameAsCHA && styles.highlighted_field}`}>
                    {stevedoreDetails?.sameAsCHA ? 'Yes' : 'No'}
                  </span>
                  {stevedoreDetailsHistory?.sameAsCHA !== stevedoreDetails?.sameAsCHA && <Tooltip data={stevedoreDetailsHistory?.sameAsCHA ? 'Yes' : 'No'} />}
                </div>

                <span className={`${styles.toggle_handler}`}>{on ? '+' : '-'}</span>
              </div>
            </div>
          </div>
        )}
      </Toggle>

      <div id="stevedore" className="collapse" aria-labelledby="stevedore">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <span className={`font-weight-light h5 ${stevedoreDetailsHistory?.name && stevedoreDetailsHistory?.name !== stevedoreDetails?.name && styles.highlighted_field}`}>
                    {stevedoreDetails?.name || '--'}
                  </span>
                  {stevedoreDetailsHistory?.name && stevedoreDetailsHistory?.name !== stevedoreDetails?.name && <Tooltip data={stevedoreDetailsHistory?.name || '--'} />}
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                  <span className={`font-weight-light h5 text-uppercase ${stevedoreDetailsHistory?.shortName && stevedoreDetailsHistory?.shortName !== stevedoreDetails?.shortName && styles.highlighted_field}`}>
                    {stevedoreDetails?.shortName || '--'}
                  </span>
                  {stevedoreDetailsHistory?.shortName && stevedoreDetailsHistory?.shortName !== stevedoreDetails?.shortName && <Tooltip data={stevedoreDetailsHistory?.shortName || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>GSTIN.</div>
                  <span className={`font-weight-light h5 ${stevedoreDetailsHistory?.gstin && stevedoreDetailsHistory?.gstin !== stevedoreDetails?.gstin && styles.highlighted_field}`}>
                    {stevedoreDetails?.gstin || '--'}
                  </span>
                  {stevedoreDetailsHistory?.gstin && stevedoreDetailsHistory?.gstin !== stevedoreDetails?.gstin && <Tooltip data={stevedoreDetailsHistory?.gstin || '--'} />}

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
