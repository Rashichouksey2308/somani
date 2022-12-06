import React, { Component } from 'react';
import styles from './index.module.scss';

function index() {
  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <div
        className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#productSpecifications"
        aria-expanded="true"
        aria-controls="productSpecifications"
   >
        <h3 className={`${styles.heading} mb-0`}>Product Specifications</h3>
        <span>+</span>

      </div>
        <div id="productSpecifications" className="collapse" aria-labelledby="productSpecifications">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-12 col-sm-6">
                  <div className={`mb-2 font-weight-bold`}>Comment:</div>
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
