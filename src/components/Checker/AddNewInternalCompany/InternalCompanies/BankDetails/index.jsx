import PropTypes from 'prop-types';
import React, { Component, useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../Table';
import Link from 'next/link';
import Image from 'next/image';
import Toggle from '../../../../Toggle/index';

function index() {
  const tableColumns = useMemo(() => [
    {
      Header: 'BANK NAME',
      accessor: 'bank_name',
      Cell: ({ cell: { value } }) => <span>{value}</span>,
    },
    {
      Header: 'ACCOUNT NO.',
      accessor: 'account_no',
      Cell: ({ cell: { value } }) => <span>{value}</span>,
    },
    {
      Header: 'IFSC',
      accessor: 'ifsc',
      // Cell: ({ value }) => value ? value : 'RM'
    },
    {
      Header: 'AD CODE',
      accessor: 'ad_code',
    },
    {
      Header: 'BRANCH ADDRESS',
      accessor: 'brunch_name',
    },
  ]);

  const dummyData = [
    {
      bank_name: 'ICICI Bank',
      account_no: '63547853487',
      ifsc: 'ICIC0000031',
      ad_code: '63547853487',
      brunch_name: 'A-44, Sagar Apartments, Tilak Marg, Agra',
    },
    {
      bank_name: 'Abc Bank',
      account_no: '63547853487',
      ifsc: 'ICIC0000031',
      ad_code: '63547853487',
      brunch_name: 'A-44, Sagar Apartments, Tilak Marg, Agra',
    },
  ];
  const onToggle = (state) => {};

  return (
    <div className={`${styles.main} mt-4 border_color card`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
              data-toggle="collapse"
              data-target="#bankDetails"
              aria-expanded="true"
              aria-controls="bankDetails"
            >
              <h3 className={styles.heading}>Bank Deatils</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
            <div id="bankDetails" className="collapse mb-n4" aria-labelledby="bankDetails" data-parent="#bankDetails">
              <Table columns={tableColumns} data={dummyData} />
            </div>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default index;
