import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../Table';

function index() {
  const tableColumns = useMemo(() => [
    {
      Header: 'NAME',
      accessor: 'name',
    },
    {
      Header: 'DESIGNATION.',
      accessor: 'designation',
    },
    {
      Header: 'EMAIL',
      accessor: 'email',
    },
    {
      Header: 'PHONE NO.',
      accessor: 'phone_no',
    },
    {
      Header: 'ACTION',
      accessor: 'action',
    },
  ]);
  const dummyData = [
    {
      name: 'Abc Bank',
      designation: '63547853487',
      email: 'ICIC0000031',
      phone_no: '63547853487',
      action: 'action',
    },
  ];

  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <div
        className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#seller"
        aria-expanded="true"
        aria-controls="seller"
      >
        <h3 className={`${styles.heading} mb-0`}>Seller</h3>
        <span>+</span>
      </div>
      <div id="seller" className="collapse" aria-labelledby="seller">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-8 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <div className="font-weight-light h5">Indo Intertrade Ag</div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom"></div>
        <div>
          <div className={`${styles.inner_head_container}   bg-transparent`}>
            <h3 className={`${styles.heading} mb-0`}>Addresses</h3>
          </div>
          <div className={`${styles.inner_head_containt}   bg-transparent`}>
            <div className={`${styles.registered_address} col-md-6 col-sm-6 bg-transparent`}>
              <div className={`${styles.address}`}>
                <h3>Registered Address</h3>
                <p>Industriestrasse 16 6300 Switzerland</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.main} vessel_card mx-4 mt-4 card border_color`}>
          <div
            className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
            data-toggle="collapse"
            data-target="#sellerTbl"
            aria-expanded="true"
            aria-controls="sellerTbl"
          >
            <h3 className={styles.heading}>Authorised Signatory Details</h3>
            <span>+</span>
          </div>
          <div id="sellerTbl" className="collapse" aria-labelledby="sellerTbl">
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
