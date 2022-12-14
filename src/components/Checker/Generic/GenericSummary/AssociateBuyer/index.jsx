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
      action: 'action',
    },
  ];
  const onToggle = (state) => {};
  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#associateBuyer"
              aria-expanded="true"
              aria-controls="associateBuyer"
            >
              <h3 className={`${styles.heading} mb-0`}>Associate Buyer</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
            <div id="associateBuyer" className="collapse" aria-labelledby="associateBuyer">
              <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                <div className="d-flex justify-space-between">
                  <div className="row w-100">
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-8 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                        <div className="font-weight-light h5">EMERGENT INDUSTRIAL SOLUTIONS LIMITED</div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>PAN No.</div>
                        <div className="font-weight-light h5">AAACS8253L</div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Branch Name</div>
                        <div className="font-weight-light h5">DELHI</div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>GSTIN.</div>
                        <div className="font-weight-light h5">29AAACS8253L1ZU</div>
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
                      <p>8B, Sagar 6, Tilak Marg New Delhi Central Delhi DL 110001 IN</p>
                    </div>
                  </div>
                </div>

                <Toggle onToggle={onToggle}>
                  {({ on, onToggle }) => (
                    <div onClick={onToggle} className={`${styles.main} vessel_card mx-4 mt-4 card border_color`}>
                      <div
                        className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
                        data-toggle="collapse"
                        data-target="#associateBuyerTbl"
                        aria-expanded="true"
                        aria-controls="associateBuyerTbl"
                      >
                        <h3 className={styles.heading}>Authorised Signatory Details</h3>
                        <span>{on ? '+' : '-'}</span>
                      </div>
                      <div id="associateBuyerTbl" className="collapse" aria-labelledby="associateBuyerTbl">
                        <div className="generic-table">
                          <Table columns={tableColumns} data={dummyData} />
                        </div>
                      </div>
                    </div>
                  )}
                </Toggle>
              </div>
            </div>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default index;
