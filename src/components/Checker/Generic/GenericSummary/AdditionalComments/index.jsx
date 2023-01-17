/*eslint-disable */

import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../Table';
import { Component } from 'react';
import Toggle from '../../../../Toggle/index';

function index() {
  const tableColumns = useMemo(() => [
    {
      Header: 'Agreement Name',
      accessor: 'agreement_name',
    },
    {
      Header: 'Additional Comments.',
      accessor: 'Additional_comments',
    },
    {
      Header: ' Month of loading of Cargo',
      accessor: 'month_of_loading',
    },
    {
      Header: 'Date of Contract between Shipper and Buyer',
      accessor: 'date_of_contract',
    },
    {
      Header: 'ACTION',
      accessor: 'action',
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
                <Table columns={tableColumns} data={dummyData} />
              </div>
            </div>
          </div>
        )}
      </Toggle>
    </div>
  );
}
export default index;
