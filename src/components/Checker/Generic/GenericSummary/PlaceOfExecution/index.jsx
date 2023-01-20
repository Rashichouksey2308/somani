import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Table from '../../../../Table';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';

function Index({ placeOfExecution, placeOfExecutionHistory }) {

  const [modifiedplaceOfExecutionData, setModifiedPostChequesData] = useState([]);
  
  useEffect(() => {
    modifyPostDatedChequesData();
  }, [placeOfExecution, placeOfExecutionHistory]);

  const modifyPostDatedChequesData = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < placeOfExecution?.length; i++) {

      curr = placeOfExecution[i];

      let history;

      history = placeOfExecutionHistory && placeOfExecutionHistory?.find((cheque) => cheque?._id === curr?._id);

      if (history) {
        curr = {
          ...curr,
          history
        }
      }
      finalData.push(curr)
    }
    setModifiedPostChequesData(finalData);
  };

  const tableColumns = useMemo(() => [
    {
      Header: 'Agreement Name',
      accessor: 'agreementName',
      Cell: ({ row, value }) => <>
          <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.agreementName && row?.original?.history?.agreementName !== value && styles.highlighted_field}`}>
              {value || '--'}
          </span>
          {row?.original?._id === row?.original?.history?._id && row?.original?.history?.agreementName && row?.original?.history?.agreementName !== value && <Tooltip data={row?.original?.history?.agreementName || '--'} />}
      </>
    },
    {
      Header: 'Place of Execution.',
      accessor: 'place',
      Cell: ({ row, value }) => <>
          <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.place && row?.original?.history?.place !== value && styles.highlighted_field}`}>
              {value || '--'}
          </span>
          {row?.original?._id === row?.original?.history?._id && row?.original?.history?.place && row?.original?.history?.place !== value && <Tooltip data={row?.original?.history?.place || '--'} />}
      </>
    },
    {
      Header: 'Date of Execution',
      accessor: 'dateOfExecution',
      Cell: ({ row, value }) => <>
          <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.dateOfExecution && row?.original?.history?.dateOfExecution !== value && styles.highlighted_field}`}>
              {value?.slice(0,10) || '--'}
          </span>
          {row?.original?._id === row?.original?.history?._id && row?.original?.history?.dateOfExecution && row?.original?.history?.dateOfExecution !== value && <Tooltip data={row?.original?.history?.dateOfExecution?.slice(0, 10) || '--'} />}
      </>
    },
  ]);
  const dummyData = [{}];
  const onToggle = (state) => {};

  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
              data-toggle="collapse"
              data-target="#placeOfExecution"
              aria-expanded="true"
              aria-controls="placeOfExecution"
            >
              <h3 className={styles.heading}>Place of Execution</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
            <div id="placeOfExecution" className="collapse" aria-labelledby="placeOfExecution">
              <div className="generic-table">
                <Table columns={tableColumns} data={modifiedplaceOfExecutionData} />
              </div>
            </div>
          </div>
        )}
      </Toggle>
    </div>
  );
}
export default Index;
