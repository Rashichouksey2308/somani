import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';
import KeyAddresses from '../../../Common/KeyAddress';
import AuthorisedSignatoryDetails from '../../../Common/AuthorisedSignatoriesDetails';

function Index({ tableColumns, associateBuyerDetails, associateBuyerDetailsHistory }) {

  const [addresses, setAddresses] = useState([]);
  const [authorisedSignatoryDetailsData, setauthorisedSignatoryDetailsData] = useState([]);

  useEffect(() => {
    modifyKeyAddressesCurrentData();
    modifyCurrentAuthorisedSignatoryData();
  }, [associateBuyerDetails, associateBuyerDetailsHistory]);

  const modifyCurrentAuthorisedSignatoryData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < associateBuyerDetails?.authorisedSignatoryDetails?.length; i++) {

      curr = associateBuyerDetails?.authorisedSignatoryDetails[i];

      let history;

      history = associateBuyerDetailsHistory?.authorisedSignatoryDetails && associateBuyerDetailsHistory?.authorisedSignatoryDetails?.find((address) => address?.email === curr?.email);

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
    for (let i = 0; i < associateBuyerDetails?.addresses?.length; i++) {

      curr = associateBuyerDetails?.addresses[i];

      let history;

      history = associateBuyerDetailsHistory?.addresses && associateBuyerDetailsHistory?.addresses?.find((address) => address?.fullAddress === curr?.fullAddress);

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
              data-target="#associateBuyer"
              aria-expanded="true"
              aria-controls="associateBuyer"
            >
              <h3 className={`${styles.heading} mb-0`}>Associate Buyer</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
          </div>
        )}
      </Toggle>

      <div id="associateBuyer" className="collapse" aria-labelledby="associateBuyer">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <span className={`font-weight-light h5 ${associateBuyerDetailsHistory?.name && associateBuyerDetailsHistory?.name !== associateBuyerDetails?.name && styles.highlighted_field}`}>
                    {associateBuyerDetails?.name || '--'}
                  </span>
                  {associateBuyerDetailsHistory?.name && associateBuyerDetailsHistory?.name !== associateBuyerDetails?.name && <Tooltip data={associateBuyerDetailsHistory?.name || '--'} />}
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>PAN No.</div>
                  <span className={`font-weight-light h5 ${associateBuyerDetailsHistory?.pan && associateBuyerDetailsHistory?.pan !== associateBuyerDetails?.pan && styles.highlighted_field}`}>
                    {associateBuyerDetails?.pan || '--'}
                  </span>
                  {associateBuyerDetailsHistory?.pan && associateBuyerDetailsHistory?.pan !== associateBuyerDetails?.pan && <Tooltip data={associateBuyerDetailsHistory?.pan || '--'} />}
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Branch Name</div>
                  <span className={`font-weight-light h5 ${associateBuyerDetailsHistory?.branchName && associateBuyerDetailsHistory?.branchName !== associateBuyerDetails?.branchName && styles.highlighted_field}`}>
                    {associateBuyerDetails?.branchName || '--'}
                  </span>
                  {associateBuyerDetailsHistory?.branchName && associateBuyerDetailsHistory?.branchName !== associateBuyerDetails?.branchName && <Tooltip data={associateBuyerDetailsHistory?.branchName || '--'} />}
                </div>
              </div>
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>GSTIN.</div>
                  <span className={`font-weight-light h5 ${associateBuyerDetailsHistory?.gstin && associateBuyerDetailsHistory?.gstin !== associateBuyerDetails?.gstin && styles.highlighted_field}`}>
                    {associateBuyerDetails?.gstin || '--'}
                  </span>
                  {associateBuyerDetailsHistory?.gstin && associateBuyerDetailsHistory?.gstin !== associateBuyerDetails?.gstin && <Tooltip data={associateBuyerDetailsHistory?.gstin || '--'} />}
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                  <span className={`font-weight-light h5 text-uppercase ${associateBuyerDetailsHistory?.shortName && associateBuyerDetailsHistory?.shortName !== associateBuyerDetails?.shortName && styles.highlighted_field}`}>
                    {associateBuyerDetails?.shortName || '--'}
                  </span>
                  {associateBuyerDetailsHistory?.shortName && associateBuyerDetailsHistory?.shortName !== associateBuyerDetails?.shortName && <Tooltip data={associateBuyerDetailsHistory?.shortName || '--'} />}
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
