import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';
import { useEffect, useState } from 'react';
import KeyAddresses from '../../../Common/KeyAddress';

const onToggle = (state) => { };

function index({ internalCompanyDetails, internalCompanyHistoryDetails }) {

  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    modifyCurrentData();
  }, [internalCompanyDetails, internalCompanyHistoryDetails]);


  const modifyCurrentData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < internalCompanyDetails?.keyAddresses?.length; i++) {

      curr = internalCompanyDetails?.keyAddresses[i];

      let history;

      history = internalCompanyHistoryDetails?.keyAddresses?.find((historyAddress) => historyAddress?.fullAddress === curr?.fullAddress);

      if (history) {
        curr = {
          ...curr,
          history
        }
      }
      finalData.push(curr)
    }

    let data = {
      ...internalCompanyDetails,
      internalCompanyHistoryDetails,
      keyAddresses: finalData.length > 0 && finalData
    }

    setCompanyData(data);
  };

  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#CompanyDetails"
              aria-expanded="true"
              aria-controls="keyAddress"
            >
              <h3 className={`${styles.heading} mb-0`}>Internal Companies</h3>
              <span className="ml-4">{on ? '+' : '-'}</span>
            </div>
            <div id="CompanyDetails" className="collapse" aria-labelledby="keyAddress">
              <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                <div className="d-flex justify-space-between">
                  <div className="row w-100">
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Company Type</div>
                        <div className="font-weight-light h5">
                          <span className={`${internalCompanyHistoryDetails?.CompanyType && internalCompanyHistoryDetails?.CompanyType !== internalCompanyDetails?.CompanyType && styles.highlighted_field}`}>
                            {internalCompanyDetails?.CompanyType || '--'}
                          </span>
                          {internalCompanyHistoryDetails?.CompanyType && internalCompanyHistoryDetails?.CompanyType !== internalCompanyDetails?.CompanyType && <Tooltip data={internalCompanyHistoryDetails?.CompanyType || '--'} />}
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Country</div>
                        <div className="font-weight-light h5">
                          <span className={`${internalCompanyHistoryDetails?.Country && internalCompanyHistoryDetails?.Country !== internalCompanyDetails?.Country && styles.highlighted_field}`}>
                            {internalCompanyDetails?.Country || '--'}
                          </span>
                          {internalCompanyHistoryDetails?.Country && internalCompanyHistoryDetails?.Country !== internalCompanyDetails?.Country && <Tooltip data={internalCompanyHistoryDetails?.Country || '--'} />}
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Company Name</div>
                        <div className="font-weight-light h5 d-flex align-items-center">
                          <span className={`${internalCompanyHistoryDetails?.Company_Name && internalCompanyHistoryDetails?.Company_Name !== internalCompanyDetails?.Company_Name && styles.highlighted_field}`}>
                            {internalCompanyDetails?.Company_Name || '--'}
                          </span>
                          {internalCompanyHistoryDetails?.Company_Name && internalCompanyHistoryDetails?.Company_Name !== internalCompanyDetails?.Company_Name && <Tooltip data={internalCompanyHistoryDetails?.Company_Name || '--'} />}
                        </div>
                      </div>

                    </div>
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                        <div className="font-weight-light h5">
                          <span className={`${internalCompanyHistoryDetails?.Short_Name && internalCompanyHistoryDetails?.Short_Name !== internalCompanyDetails?.Short_Name && styles.highlighted_field}`}>
                            {internalCompanyDetails?.Short_Name || '--'}
                          </span>
                          {internalCompanyHistoryDetails?.Short_Name && internalCompanyHistoryDetails?.Short_Name !== internalCompanyDetails?.Short_Name && <Tooltip data={internalCompanyHistoryDetails?.Short_Name || '--'} />}
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>PAN</div>
                        <div className="font-weight-light h5">
                          <span className={`${internalCompanyHistoryDetails?.PAN && internalCompanyHistoryDetails?.PAN !== internalCompanyDetails?.PAN && styles.highlighted_field}`}>
                            {internalCompanyDetails?.PAN || '--'}
                          </span>
                          {internalCompanyHistoryDetails?.PAN && internalCompanyHistoryDetails?.PAN !== internalCompanyDetails?.PAN && <Tooltip data={internalCompanyHistoryDetails?.PAN || '--'} />}
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>CIN No</div>
                        <div className="font-weight-light h5">
                          <span className={`${internalCompanyHistoryDetails?.CIN_No && internalCompanyHistoryDetails?.CIN_No !== internalCompanyDetails?.CIN_No && styles.highlighted_field}`}>
                            {internalCompanyDetails?.CIN_No || '--'}
                          </span>
                          {internalCompanyHistoryDetails?.CIN_No && internalCompanyHistoryDetails?.CIN_No !== internalCompanyDetails?.CIN_No && <Tooltip data={internalCompanyHistoryDetails?.CIN_No || '--'} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom"></div>

            <KeyAddresses 
              id="CompanyDetails"
              ariaLabelledby="keyAddress"
              Header="Key Addresses"
              KeyAddresses={companyData?.keyAddresses || []}
              className="collapse"
            />

          </div>
        )}
      </Toggle>
    </div>
  );
}

export default index;
