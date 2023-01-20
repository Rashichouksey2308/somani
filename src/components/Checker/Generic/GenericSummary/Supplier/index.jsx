import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import KeyAddresses from '../../../Common/KeyAddress';
import Tooltip from '../../../../Tooltip';
import AuthorisedSignatoryDetails from '../../../Common/AuthorisedSignatoriesDetails';

function Index({ tableColumns, supplierDetails, supplierDetailsHistory }) {

  const [addresses, setAddresses] = useState([]);
  const [authorisedSignatoryDetailsData, setauthorisedSignatoryDetailsData] = useState([]);

  const modifyCurrentAuthorisedSignatoryData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < supplierDetails?.authorisedSignatoryDetails?.length; i++) {

      curr = supplierDetails?.authorisedSignatoryDetails[i];

      let history;

      history = supplierDetailsHistory?.authorisedSignatoryDetails && supplierDetailsHistory?.authorisedSignatoryDetails?.find((address) => address?.email === curr?.email);

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

  useEffect(() => {
    modifyKeyAddressesCurrentData();
    modifyCurrentAuthorisedSignatoryData();
  }, [supplierDetails, supplierDetailsHistory]);

  const modifyKeyAddressesCurrentData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < supplierDetails?.addresses?.length; i++) {

      curr = supplierDetails?.addresses[i];

      let history;

      history = supplierDetailsHistory?.addresses && supplierDetailsHistory?.addresses?.find((address) => address?.fullAddress === curr?.fullAddress);

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
              data-target="#supplier"
              aria-expanded="true"
              aria-controls="supplier"
            >
              <h3 className={`${styles.heading} mb-0`}>Supplier</h3>


              <div className="d-flex">

                <p className='font-weight-bold mr-4 d-flex align-items-baseline'>
                  <p className='mr-2 label_heading'>
                    Multiple Parties Involved:
                  </p>
                  <span>
                    {supplierDetails?.multiParty ? 'Yes' : 'No'}
                  </span>
                </p>

                <span className={`${styles.toggle_handler}`}>{on ? '+' : '-'}</span>

              </div>

            </div>
          </div>
        )}
      </Toggle>

      <div id="supplier" className="collapse" aria-labelledby="supplier">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Supplier Name</div>

                  <span className={`font-weight-light h5 ${supplierDetailsHistory?.name && supplierDetailsHistory?.name !== supplierDetails?.name && styles.highlighted_field}`}>
                    {supplierDetails?.name || '--'}
                  </span>
                  {supplierDetailsHistory?.name && supplierDetailsHistory?.name !== supplierDetails?.name && <Tooltip data={supplierDetailsHistory?.name || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                  <span className={`font-weight-light h5 text-uppercase ${supplierDetailsHistory?.shortName && supplierDetailsHistory?.shortName !== supplierDetails?.shortName && styles.highlighted_field}`}>
                    {supplierDetails?.shortName || '--'}
                  </span>
                  {supplierDetailsHistory?.shortName && supplierDetailsHistory?.shortName !== supplierDetails?.shortName && <Tooltip data={supplierDetailsHistory?.shortName || '--'} />}
                </div>
              </div>
              <div>
                <h4 className={`${styles.bank_detail} ml-2 mt-2`}>Bank Details</h4>
              </div>

              <div className="col-md-12 mb-5 mt-2 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Bank Name</div>
                  <span className={`font-weight-light h5 ${supplierDetailsHistory?.bankDetails?.bankName && supplierDetailsHistory?.bankDetails?.bankName !== supplierDetails?.bankDetails?.bankName && styles.highlighted_field}`}>
                    {supplierDetails?.bankDetails?.bankName || '--'}
                  </span>
                  {supplierDetailsHistory?.bankDetails?.bankName && supplierDetailsHistory?.bankDetails?.bankName !== supplierDetails?.bankDetails?.bankName && <Tooltip data={supplierDetailsHistory?.bankDetails?.bankName || '--'} />}
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Account No</div>
                  <span className={`font-weight-light h5 ${supplierDetailsHistory?.bankDetails?.accountNo && supplierDetailsHistory?.bankDetails?.accountNo !== supplierDetails?.bankDetails?.accountNo && styles.highlighted_field}`}>
                    {supplierDetails?.bankDetails?.accountNo || '--'}
                  </span>
                  {supplierDetailsHistory?.bankDetails?.accountNo && supplierDetailsHistory?.bankDetails?.accountNo !== supplierDetails?.bankDetails?.accountNo && <Tooltip data={supplierDetailsHistory?.bankDetails?.accountNo || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Swift Code</div>
                  <span className={`font-weight-light h5 ${supplierDetailsHistory?.bankDetails?.swiftCode && supplierDetailsHistory?.bankDetails?.swiftCode !== supplierDetails?.bankDetails?.swiftCode && styles.highlighted_field}`}>
                    {supplierDetails?.bankDetails?.swiftCode || '--'}
                  </span>
                  {supplierDetailsHistory?.bankDetails?.swiftCode && supplierDetailsHistory?.bankDetails?.swiftCode !== supplierDetails?.bankDetails?.swiftCode && <Tooltip data={supplierDetailsHistory?.bankDetails?.swiftCode || '--'} />}

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
