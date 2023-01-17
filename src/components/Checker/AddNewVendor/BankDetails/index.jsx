import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import BankDetails from '../../Common/BankDetails';

function Index({ bankDetails, bankHistoryDetails }) {

  const [bankDetailsModifiedData, setBankDetailsModifiedData] = useState([]);

  useEffect(() => {
    modifybankDetailsCurrentData();
  }, [bankDetails, bankHistoryDetails]);


  const modifybankDetailsCurrentData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < bankDetails?.length; i++) {

      curr = bankDetails[i];

      let history;

      history = bankHistoryDetails && bankHistoryDetails?.find((person) => person?._id === curr?._id);

      if (history) {
        curr = {
          ...curr,
          history
        }
      }
      finalData.push(curr)
    }

    const modifiedFinalData = finalData?.map(({
      bankName: Bank_Name,
      accountNumber: Account_No,
      branchAddress: Branch_Address,
      ...rest
    }) => ({
      Bank_Name,
      Account_No,
      Branch_Address,
      ...rest
    }));

    setBankDetailsModifiedData(modifiedFinalData);

  };

  return (
    <BankDetails
      bankDetailsData={bankDetailsModifiedData}
      uniqueField="_id"
    />
  )
}

export default Index