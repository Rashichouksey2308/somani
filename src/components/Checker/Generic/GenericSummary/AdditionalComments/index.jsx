/*eslint-disable */

import React, { useMemo, useState, useEffect } from 'react';
import styles from './index.module.scss';
import Table from '../../../../Table';
import { Component } from 'react';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';

function Index({ additionalComments, additionalCommentsHistory }) {

  const [modifiedAdditionalCommentData, setModifiedAdditionalCommentData] = useState([]);
  
  useEffect(() => {
    modifyAdditionalComments();
  }, [additionalComments, additionalCommentsHistory]);

  const modifyAdditionalComments = () => {
    let finalData = [];
    let curr;
    for (let i = 0; i < additionalComments?.length; i++) {

      curr = additionalComments[i];

      let history;

      history = additionalCommentsHistory && additionalCommentsHistory?.find((comment) => comment?._id === curr?._id);

      if (history) {
        curr = {
          ...curr,
          history
        }
      }
      finalData.push(curr)
    }
    setModifiedAdditionalCommentData(finalData);
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
      Header: 'Additional Comments.',
      accessor: 'comment',
      Cell: ({ row, value }) => <>
          <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.comment && row?.original?.history?.comment !== value && styles.highlighted_field}`}>
              {value || '--'}
          </span>
          {row?.original?._id === row?.original?.history?._id && row?.original?.history?.comment && row?.original?.history?.comment !== value && <Tooltip data={row?.original?.history?.comment || '--'} />}
      </>
    },
    {
      Header: ' Month of loading of Cargo',
      accessor: 'monthOfLoadingCargo',
      Cell: ({ row, value }) => <>
          <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.monthOfLoadingCargo && row?.original?.history?.monthOfLoadingCargo !== value && styles.highlighted_field}`}>
              {value || '--'}
          </span>
          {row?.original?._id === row?.original?.history?._id && row?.original?.history?.monthOfLoadingCargo && row?.original?.history?.monthOfLoadingCargo !== value && <Tooltip data={row?.original?.history?.monthOfLoadingCargo || '--'} />}
      </>
    },
    {
      Header: 'Date of Contract between Shipper and Buyer',
      accessor: 'dateOfContract',
      Cell: ({ row, value }) => <>
          <span className={`${row?.original?._id === row?.original?.history?._id && row?.original?.history?.dateOfContract && row?.original?.history?.dateOfContract !== value && styles.highlighted_field}`}>
              {value?.slice(0, 10) || '--'}
          </span>
          {row?.original?._id === row?.original?.history?._id && row?.original?.history?.dateOfContract && row?.original?.history?.dateOfContract !== value && <Tooltip data={row?.original?.history?.dateOfContract?.slice(0, 10) || '--'} />}
      </>
    },
  ]);

  const onToggle = (state) => {};
  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
              data-toggle="collapse"
              data-target="#additionalComments"
              aria-expanded="true"
              aria-controls="additionalComments"
            >
              <>
                <h3 className={styles.heading}>Additional Comments for Reference</h3>

                <span>{on ? '+' : '-'}</span>
              </>
            </div>
            <div id="additionalComments" className="collapse" aria-labelledby="additionalComments">
              <div className="generic-table">
                <Table columns={tableColumns} data={modifiedAdditionalCommentData || []} />
              </div>
            </div>
          </div>
        )}
      </Toggle>
    </div>
  );
}
export default Index;
