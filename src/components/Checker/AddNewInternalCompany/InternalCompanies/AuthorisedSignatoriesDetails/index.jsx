import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Tooltip from '../../../../Tooltip';
import AuthorisedSignatoryDetails from '../../../Common/AuthorisedSignatoriesDetails';

function Index({ authorisedSignatoryDetails, authorisedSignatoryHistoryDetails }) {

  const [authorisedSignatoryDetailsData, setauthorisedSignatoryDetailsData] = useState([]);

  useEffect(() => {
    modifyCurrentData();
  }, [authorisedSignatoryDetails]);

  const modifyCurrentData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < authorisedSignatoryDetails?.length; i++) {

      curr = authorisedSignatoryDetails[i];

      let history;

      history = authorisedSignatoryHistoryDetails && authorisedSignatoryHistoryDetails?.find((historyAuthorisedDetail) => historyAuthorisedDetail?.email === curr?.email);

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

  const tableColumns = useMemo(() => [
    {
      Header: 'NAME',
      accessor: 'name',
      Cell: ({ row, value }) => <>
        <span className={`${row?.original?.email === row?.original?.history?.email && row?.original?.history?.name && row?.original?.history?.name !== value && styles.highlighted_field}`}>
          {value}
        </span>
        {row?.original?.email === row?.original?.history?.email && row?.original?.history?.name && row?.original?.history?.name !== value && <Tooltip data={row?.original?.history?.name || '--'} />}
      </>
    },
    {
      Header: 'Email',
      accessor: 'email',
      Cell: ({ row, value }) => {
        return <>
          <span className={`font-weight-bold ${row?.original?.history?.email && row?.original?.history?.email !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.history?.email && row?.original?.history?.email !== value && <Tooltip data={row?.original?.history?.email || '--'} />}
        </>
      }
    },
    {
      Header: 'Designation',
      accessor: 'designation',
      Cell: ({ row, value }) => {
        return <>
          <span className={`font-weight-bold ${row?.original?.email === row?.original?.history?.email && row?.original?.history?.designation && row?.original?.history?.designation !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.email === row?.original?.history?.email && row?.original?.history?.designation && row?.original?.history?.designation !== value && <Tooltip data={row?.original?.history?.designation || '--'} />}
        </>
      }
    },
  ]);

  return (
    <AuthorisedSignatoryDetails
      tableColumns={tableColumns}
      authorisedSignatoryDetailsData={authorisedSignatoryDetailsData || []}
    />
  );
}

export default Index;
