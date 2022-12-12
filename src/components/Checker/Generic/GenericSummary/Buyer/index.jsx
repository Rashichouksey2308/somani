import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Table from '../../../../Table';
import Toggle from '../../../../Toggle/index';

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
      action: 'xn',
    },
  ];
  const onToggle = (state) => {};

  return (
    <div className={`${styles.main} mb-0 vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#buyer"
              aria-expanded="true"
              aria-controls="buyer"
            >
              <h3 className={`${styles.heading} mb-0`}>Buyer</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
            <div id="buyer" className="collapse" aria-labelledby="buyer">
              <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                <div className="d-flex justify-space-between">
                  <div className="row w-100">
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-8 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                        <div className="font-weight-light h5">Indo German International Private Limited</div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Branch Name</div>
                        <div className="font-weight-light h5">DELHI</div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>PAN</div>
                        <div className="font-weight-light h5">AAACI3028D</div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>GSTIN.</div>
                        <div className="font-weight-light h5">07AAACI3028D1Z4</div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Short Name</div>
                        <div className="font-weight-light h5">IGIPL</div>
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
                      <p>Kailash Building, K.G. Marg 110001 India</p>
                    </div>
                  </div>
                </div>
              </div>

              <Toggle onToggle={onToggle}>
                {({ on, onToggle }) => (
                  <div onClick={onToggle} className={`${styles.main} vessel_card mx-4 mt-4 card border_color`}>
                    <div
                      className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
                      data-toggle="collapse"
                      data-target="#buyerTbl"
                      aria-expanded="true"
                      aria-controls="buyerTbl"
                    >
                      <h3 className={styles.heading}>Authorised Signatory Details</h3>
                      <span>{on ? '+' : '-'}</span>
                    </div>
                    <div id="buyerTbl" className="collapse" aria-labelledby="buyerTbl">
                      <div className="generic-table">
                        <Table columns={tableColumns} data={dummyData} />
                      </div>
                    </div>
                  </div>
                )}
              </Toggle>
            </div>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default index;
