import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../Table';

function index() {
  const tableColumns = useMemo(() => [
    {
      Header: 'S NO.',
      accessor: 's_nO.',
    },
    {
      Header: '	BANK NAME.',
      accessor: '	bank_name',
    },
    {
      Header: '	CHEQUE NO.',
      accessor: 'cheque_no',
    },
    {
      Header: 'CHEQUE DATE',
      accessor: 'cheque_date',
    },
    {
      Header: 'AMOUNT',
      accessor: 'amount',
    },
    {
      Header: 'ACTION',
      accessor: 'action',
    },
  ]);
  const dummyData = [{}];

  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <div
        className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#deliveryTerms"
        aria-expanded="true"
        aria-controls="deliveryTerms"
      >
        <h3 className={`${styles.heading} mb-0`}>Delivery Terms</h3>
        <span>+</span>
      </div>
      <div id="deliveryTerms" className="collapse" aria-labelledby="deliveryTerms">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Delivery Terms</div>
                  <div className="font-weight-light h5">CIF Cost Insurance Freight Incoterms 2000</div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Payment Terms </div>
                  <div className="font-weight-light h5">Days from BL Date</div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Month of loading of Cargo</div>
                  <div className="font-weight-light h5">January</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom"></div>
        <div className={`${styles.main} vessel_card mx-4 mt-4 card border_color`}>
          <div
            className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
            data-toggle="collapse"
            data-target="#deliveryTermsTbl"
            aria-expanded="true"
            aria-controls=" deliveryTermsTbl"
          >
            <h3 className={styles.heading}>Details of post-dated Cheque(s)- </h3>
            <span>+</span>
          </div>
          <div id="deliveryTermsTbl" className="collapse" aria-labelledby="deliveryTermsTbl">
            <div className="generic-table">
              <Table columns={tableColumns} data={dummyData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
