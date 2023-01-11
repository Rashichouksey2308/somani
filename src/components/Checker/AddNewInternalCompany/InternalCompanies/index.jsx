import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';
import styles from './index.module.scss';
import InternalCompany from './InternalCompany';
import BankDetails from './BankDetails';
import AuthorisedSignatoriesDetails from './AuthorisedSignatoriesDetails';
import { GetInternalCompanyDetails, UpdateInternalCompanyRemark } from 'redux/checker/action';
import Remark from '../../Common/Remarks';

function Index() {

  const dispatch = useDispatch();
  const internalCompanyId = sessionStorage.getItem('checkerInternalCompanyId');
  const { internalCompanyDetails } = useSelector((state) => state.checker);

  const [internalCompaniesDetails, setInternalCompaniesDetails] = useState({});
  const [internalCompaniesHistoryDetails, setInternalCompaniesHistory] = useState({});

  useEffect(() => {
    if (internalCompanyId) {
      fetchInitialData();
    }
  }, [internalCompanyId]);

  const fetchInitialData = () => {
    dispatch(GetInternalCompanyDetails(`?internalCompanyId=${internalCompanyId}`));
  };

  useEffect(() => {

    if (internalCompanyDetails.length > 0) {
      let data = {
        CompanyType: internalCompanyDetails[0]?.CompanyType,
        Country: internalCompanyDetails[0]?.Country,
        Company_Name: internalCompanyDetails[0]?.Company_Name,
        Short_Name: internalCompanyDetails[0]?.Short_Name,
        PAN: internalCompanyDetails[0]?.PAN,
        CIN_No: internalCompanyDetails[0]?.CIN_No,
        keyAddresses: internalCompanyDetails[0]?.keyAddresses,
      }

      setInternalCompaniesDetails(data);

      if (internalCompanyDetails.length > 0 && internalCompanyDetails[0]?.history?.length > 0) {
        let historyData = {
          CompanyType: internalCompanyDetails[0]?.history[0]?.CompanyType,
          Country: internalCompanyDetails[0]?.history[0]?.Country,
          Company_Name: internalCompanyDetails[0]?.history[0]?.Company_Name,
          Short_Name: internalCompanyDetails[0]?.history[0]?.Short_Name,
          PAN: internalCompanyDetails[0]?.history[0]?.PAN,
          CIN_No: internalCompanyDetails[0]?.history[0]?.CIN_No,
          keyAddresses: internalCompanyDetails[0]?.history[0]?.keyAddresses,
        }
        setInternalCompaniesHistory(historyData);
      }
    }

  }, [internalCompanyDetails]);

  const handleRemarkSubmit = async (remark, status) => {
    const payload = { internalCompanyId: internalCompanyId, status: status, remarks: remark }

    let code = await dispatch(UpdateInternalCompanyRemark(payload))
    if (code == 200) {
      let toastMessage = 'INTERNAL COMPANY UPDATED SUCCESSFULLY';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      await Router.push('/checker/internal-companies');
    }
  }

  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <InternalCompany
          internalCompanyDetails={internalCompaniesDetails}
          internalCompanyHistoryDetails={internalCompaniesHistoryDetails}
        />
        <BankDetails
          bankDetails={internalCompanyDetails[0]?.keyBanks.length > 0 && internalCompanyDetails[0]?.keyBanks || []}
          bankHistoryDetails={internalCompanyDetails[0]?.history.length > 0 && internalCompanyDetails[0]?.history[0]?.keyBanks || []}
        />
        <AuthorisedSignatoriesDetails
          authorisedSignatoryDetails={internalCompanyDetails[0]?.authorisedSignatoryDetails.length >= 0 && internalCompanyDetails[0]?.authorisedSignatoryDetails || []}
          authorisedSignatoryHistoryDetails={internalCompanyDetails[0]?.history.length > 0 && internalCompanyDetails[0]?.history[0]?.authorisedSignatoryDetails || []}
        />
        <Remark handleRemarkSubmit={handleRemarkSubmit}
        />
      </div>
    </div>
  );
}

export default Index;
