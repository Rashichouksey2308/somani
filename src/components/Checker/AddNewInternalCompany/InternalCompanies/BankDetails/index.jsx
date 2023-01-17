import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import BankDetails from '../../../Common/BankDetails';
import Tooltip from '../../../../Tooltip';

function Index({ bankDetails, bankHistoryDetails }) {

  const [bankDetailsData, setBankDetailsData] = useState([]);

  useEffect(() => {
    modifyCurrentData();
  }, [bankDetails]);

  const modifyCurrentData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < bankDetails?.length; i++) {

      curr = bankDetails[i];

      let history;

      history = bankHistoryDetails && bankHistoryDetails?.find((historyBankDetail) => historyBankDetail?.Account_No === curr?.Account_No);

      if (history) {
        curr = {
          ...curr,
          history
        }
      }
      finalData.push(curr)
    }

    setBankDetailsData(finalData);
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'BANK NAME',
      accessor: 'Bank_Name',
      Cell: ({ row, value }) => {
        return <>
          <span className={`${row?.original?.Account_No === row?.original?.history?.Account_No && row?.original?.history?.Bank_Name && row?.original?.history?.Bank_Name !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.Account_No === row?.original?.history?.Account_No && row?.original?.history?.Bank_Name && row?.original?.history?.Bank_Name !== value && <Tooltip data={row?.original?.history?.Bank_Name || '--'} />}
        </>
      }
    },
    {
      Header: 'ACCOUNT NO.',
      accessor: 'Account_No',
      Cell: ({ cell: { value } }) => <span>{value}</span>,
      Cell: ({ row, value }) => {
        return <>
          <span className={`${row?.original?.history?.Account_No && row?.original?.history?.Account_No !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.history?.Account_No && row?.original?.history?.Account_No !== value && <Tooltip data={row?.original?.history?.Account_No || '--'} />}
        </>
      }
    },
    {
      Header: 'IFSC',
      accessor: 'IFSC',
      Cell: ({ row, value }) => {
        return <>
          <span className={`${row?.original?.Account_No === row?.original?.history?.Account_No && row?.original?.history?.IFSC && row?.original?.history?.IFSC !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.Account_No === row?.original?.history?.Account_No && row?.original?.history?.IFSC && row?.original?.history?.IFSC !== value && <Tooltip data={row?.original?.history?.IFSC || '--'} />}
        </>
      }
    },
    {
      Header: 'AD CODE',
      accessor: 'AD_Code',
      Cell: ({ row, value }) => {
        return <>
          <span className={`${row?.original?.Account_No === row?.original?.history?.Account_No && row?.original?.history?.AD_Code && row?.original?.history?.AD_Code !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.Account_No === row?.original?.history?.Account_No && row?.original?.history?.AD_Code && row?.original?.history?.AD_Code !== value && <Tooltip data={row?.original?.history?.AD_Code || '--'} />}
        </>
      }
    },
    {
      Header: 'BRANCH ADDRESS',
      accessor: 'Branch_Address',
      Cell: ({ row, value }) => {
        return <>
          <span className={`${row?.original?.Account_No === row?.original?.history?.Account_No && row?.original?.history?.Branch_Address && row?.original?.history?.Branch_Address !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.Account_No === row?.original?.history?.Account_No && row?.original?.history?.Branch_Address && row?.original?.history?.Branch_Address !== value && <Tooltip data={row?.original?.history?.Branch_Address || '--'} />}
        </>
      }
    },
  ]);

  return (
    <BankDetails
      tableColumns={tableColumns}
      bankDetailsData={bankDetailsData || []}
      tableView
    />
  );
}

export default Index;
