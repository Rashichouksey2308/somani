import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../Table';

function index() {
  const tableColumns = useMemo(() => [
    {
      Header: 'Agreement Name',
      accessor: 'agreement_name',
    },
    {
      Header: 'Place of Execution.',
      accessor: 'place_of_execution',
    },
    {
      Header: 'Date of Execution',
      accessor: 'date_of_execution',
    },

    {
      Header: 'Actions',
      accessor: 'action',
    },
  ]);
  const dummyData = [{}];

  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <div>
        <div
          className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
          data-toggle="collapse"
          data-target="#placeOfExecution"
          aria-expanded="true"
          aria-controls="placeOfExecution"
        >
          <h3 className={styles.heading}>Place of Execution</h3>
          <span>+</span>
        </div>
        <div id="placeOfExecution" className="collapse" aria-labelledby="placeOfExecution">
          <div className="generic-table">
            <Table columns={tableColumns} data={dummyData} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default index;
