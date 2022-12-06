import React, { Component, useMemo } from 'react';
import styles from './index.module.scss';

function index() {
  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <div
        className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#shippingLine"
        aria-expanded="true"
        aria-controls="shippingLine"
      >
        <h3 className={`${styles.heading} mb-0`}>Shipping Line</h3>
        <span>+</span>
      </div>
      <div id="shippingLine" className="collapse" aria-labelledby="shippingLine">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-8 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <div className="font-weight-light h5">HIRA INSPECTION AGENCIES</div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Vessel Name</div>
                  <div className="font-weight-light h5">MV Crimson</div>
                </div>
              </div>
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>GSTIN</div>
                  <div className="font-weight-light h5">37AAACI3028D2Z0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
