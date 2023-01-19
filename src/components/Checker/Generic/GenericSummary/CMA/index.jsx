import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';
import KeyAddresses from '../../../Common/KeyAddress';
import AuthorisedSignatoryDetails from '../../../Common/AuthorisedSignatoriesDetails';

function Index({ tableColumns, CMADetails, CMADetailsHistory }) {

  const [addresses, setAddresses] = useState([]);
  const [authorisedSignatoryDetailsData, setauthorisedSignatoryDetailsData] = useState([]);

  useEffect(() => {
    modifyKeyAddressesCurrentData();
    modifyCurrentAuthorisedSignatoryData();
  }, [CMADetails, CMADetailsHistory]);

  const modifyCurrentAuthorisedSignatoryData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < CMADetails?.authorisedSignatoryDetails?.length; i++) {

      curr = CMADetails?.authorisedSignatoryDetails[i];

      let history;

      history = CMADetailsHistory?.authorisedSignatoryDetails && CMADetailsHistory?.authorisedSignatoryDetails?.find((address) => address?.email === curr?.email);

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
    for (let i = 0; i < CMADetails?.addresses?.length; i++) {

      curr = CMADetails?.addresses[i];

      let history;

      history = CMADetailsHistory?.addresses && CMADetailsHistory?.addresses?.find((address) => address?.fullAddress === curr?.fullAddress);

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
              data-target="#cma"
              aria-expanded="true"
              aria-controls="cma"
            >
              <h3 className={`${styles.heading} mb-0`}>CMA</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
          </div>
        )}
      </Toggle>
      <div id="cma" className="collapse" aria-labelledby="cma">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <span className={`font-weight-light h5 ${CMADetailsHistory?.name && CMADetailsHistory?.name !== CMADetails?.name && styles.highlighted_field}`}>
                    {CMADetails?.name || '--'}
                  </span>
                  {CMADetailsHistory?.name && CMADetailsHistory?.name !== CMADetails?.name && <Tooltip data={CMADetailsHistory?.name || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                  <span className={`font-weight-light h5 text-uppercase ${CMADetailsHistory?.shortName && CMADetailsHistory?.shortName !== CMADetails?.shortName && styles.highlighted_field}`}>
                    {CMADetails?.shortName || '--'}
                  </span>
                  {CMADetailsHistory?.shortName && CMADetailsHistory?.shortName !== CMADetails?.shortName && <Tooltip data={CMADetailsHistory?.shortName || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>GSTIN.</div>
                  <span className={`font-weight-light h5 ${CMADetailsHistory?.gstin && CMADetailsHistory?.gstin !== CMADetails?.gstin && styles.highlighted_field}`}>
                    {CMADetails?.gstin || '--'}
                  </span>
                  {CMADetailsHistory?.gstin && CMADetailsHistory?.gstin !== CMADetails?.gstin && <Tooltip data={CMADetailsHistory?.gstin || '--'} />}

                </div>
              </div>
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Designated Storage Area</div>
                  <span className={`font-weight-light h5 ${CMADetailsHistory?.designatedStorageArea && CMADetailsHistory?.designatedStorageArea !== CMADetails?.designatedStorageArea && styles.highlighted_field}`}>
                    {CMADetails?.designatedStorageArea || '--'}
                  </span>
                  {CMADetailsHistory?.designatedStorageArea && CMADetailsHistory?.designatedStorageArea !== CMADetails?.designatedStorageArea && <Tooltip data={CMADetailsHistory?.designatedStorageArea || '--'} />}

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
