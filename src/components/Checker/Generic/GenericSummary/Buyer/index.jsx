import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';
import KeyAddresses from '../../../Common/KeyAddress';
import AuthorisedSignatoryDetails from '../../../Common/AuthorisedSignatoriesDetails';

function Index({ tableColumns, buyerDetails, buyerDetailsHistory }) {
  const onToggle = (state) => { };

  const [addresses, setAddresses] = useState([]);
  const [authorisedSignatoryDetailsData, setauthorisedSignatoryDetailsData] = useState([]);

  useEffect(() => {
    modifyKeyAddressesCurrentData();
    modifyCurrentAuthorisedSignatoryData();
  }, [buyerDetails, buyerDetailsHistory]);

  const modifyCurrentAuthorisedSignatoryData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < buyerDetails?.authorisedSignatoryDetails?.length; i++) {

      curr = buyerDetails?.authorisedSignatoryDetails[i];

      let history;

      history = buyerDetailsHistory?.authorisedSignatoryDetails && buyerDetailsHistory?.authorisedSignatoryDetails?.find((address) => address?.email === curr?.email);

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
    for (let i = 0; i < buyerDetails?.addresses?.length; i++) {

      curr = buyerDetails?.addresses[i];

      let history;

      history = buyerDetailsHistory?.addresses && buyerDetailsHistory?.addresses?.find((address) => address?.fullAddress === curr?.fullAddress);

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

  return (
    <div className={`${styles.main} mb-0 vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#buyer"
              aria-expanded="true"
              aria-controls="buyer"
            >
              <h3 className={`${styles.heading} mb-0`}>Buyer</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
          </div>
        )}
      </Toggle>
      <div id="buyer" className="collapse" aria-labelledby="buyer">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <span className={`font-weight-light h5 ${buyerDetailsHistory?.name && buyerDetailsHistory?.name !== buyerDetails?.name && styles.highlighted_field}`}>
                    {buyerDetails?.name || '--'}
                  </span>
                  {buyerDetailsHistory?.name && buyerDetailsHistory?.name !== buyerDetails?.name && <Tooltip data={buyerDetailsHistory?.name || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Branch Name</div>
                  <span className={`font-weight-light h5 ${buyerDetailsHistory?.branch && buyerDetailsHistory?.branch !== buyerDetails?.branch && styles.highlighted_field}`}>
                    {buyerDetails?.branch || '--'}
                  </span>
                  {buyerDetailsHistory?.branch && buyerDetailsHistory?.branch !== buyerDetails?.branch && <Tooltip data={buyerDetailsHistory?.branch || '--'} />}

                </div>

                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>PAN</div>
                  <span className={`font-weight-light h5 ${buyerDetailsHistory?.pan && buyerDetailsHistory?.pan !== buyerDetails?.pan && styles.highlighted_field}`}>
                    {buyerDetails?.pan || '--'}
                  </span>
                  {buyerDetailsHistory?.pan && buyerDetailsHistory?.pan !== buyerDetails?.pan && <Tooltip data={buyerDetailsHistory?.pan || '--'} />}

                </div>
              </div>
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>GSTIN.</div>
                  <span className={`font-weight-light h5 ${buyerDetailsHistory?.gstin && buyerDetailsHistory?.gstin !== buyerDetails?.gstin && styles.highlighted_field}`}>
                    {buyerDetails?.gstin || '--'}
                  </span>
                  {buyerDetailsHistory?.gstin && buyerDetailsHistory?.gstin !== buyerDetails?.gstin && <Tooltip data={buyerDetailsHistory?.gstin || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                  <span className={`font-weight-light h5 text-uppercase ${buyerDetailsHistory?.shortName && buyerDetailsHistory?.shortName !== buyerDetails?.shortName && styles.highlighted_field}`}>
                    {buyerDetails?.shortName || '--'}
                  </span>
                  {buyerDetailsHistory?.shortName && buyerDetailsHistory?.shortName !== buyerDetails?.shortName && <Tooltip data={buyerDetailsHistory?.shortName || '--'} />}

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
