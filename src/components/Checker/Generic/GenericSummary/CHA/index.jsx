import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';
import KeyAddresses from '../../../Common/KeyAddress';
import AuthorisedSignatoryDetails from '../../../Common/AuthorisedSignatoriesDetails';

function Index({ tableColumns, CHADetails, CHADetailsHistory }) {

  const [addresses, setAddresses] = useState([]);
  const [authorisedSignatoryDetailsData, setauthorisedSignatoryDetailsData] = useState([]);

  useEffect(() => {
    modifyKeyAddressesCurrentData();
    modifyCurrentAuthorisedSignatoryData();
  }, [CHADetails, CHADetailsHistory]);

  const modifyCurrentAuthorisedSignatoryData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < CHADetails?.authorisedSignatoryDetails?.length; i++) {

      curr = CHADetails?.authorisedSignatoryDetails[i];

      let history;

      history = CHADetailsHistory?.authorisedSignatoryDetails && CHADetailsHistory?.authorisedSignatoryDetails?.find((address) => address?.email === curr?.email);

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
    for (let i = 0; i < CHADetails?.addresses?.length; i++) {

      curr = CHADetails?.addresses[i];

      let history;

      history = CHADetailsHistory?.addresses && CHADetailsHistory?.addresses?.find((address) => address?.fullAddress === curr?.fullAddress);

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
              data-target="#cha"
              aria-expanded="true"
              aria-controls="cha"
            >
              <h3 className={`${styles.heading} mb-0`}>CHA</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
          </div>
        )}
      </Toggle>
      <div id="cha" className="collapse" aria-labelledby="cha">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <span className={`font-weight-light h5 ${CHADetailsHistory?.name && CHADetailsHistory?.name !== CHADetails?.name && styles.highlighted_field}`}>
                    {CHADetails?.name || '--'}
                  </span>
                  {CHADetailsHistory?.name && CHADetailsHistory?.name !== CHADetails?.name && <Tooltip data={CHADetailsHistory?.name || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                  <span className={`font-weight-light h5 text-uppercase ${CHADetailsHistory?.shortName && CHADetailsHistory?.shortName !== CHADetails?.shortName && styles.highlighted_field}`}>
                    {CHADetails?.shortName || '--'}
                  </span>
                  {CHADetailsHistory?.shortName && CHADetailsHistory?.shortName !== CHADetails?.shortName && <Tooltip data={CHADetailsHistory?.shortName || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>GSTIN.</div>
                  <span className={`font-weight-light h5 ${CHADetailsHistory?.gstin && CHADetailsHistory?.gstin !== CHADetails?.gstin && styles.highlighted_field}`}>
                    {CHADetails?.gstin || '--'}
                  </span>
                  {CHADetailsHistory?.gstin && CHADetailsHistory?.gstin !== CHADetails?.gstin && <Tooltip data={CHADetailsHistory?.gstin || '--'} />}

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
