import React, { Component } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';

const onToggle = (state) => {};

function index() {
  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#financingBank"
              aria-expanded="true"
              aria-controls="financingBank"
            >
              <h3 className={`${styles.heading} mb-0`}>Financing Bank</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
            <div id="financingBank" className="collapse" aria-labelledby="financingBank">
              <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                <div className="d-flex justify-space-between">
                  <div className="row w-100">
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-8 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                        <div className="font-weight-light h5"> Ing Bank N.V</div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Branch</div>
                        <div className="font-weight-light h5">Amsterdam</div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-5 px-0 mx-0 row">
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Country</div>
                        <div className="font-weight-light h5">Netherlands</div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className={`mb-2 font-weight-bold label_heading`}>Swift Code</div>
                        <div className="font-weight-light h5">FWE56D3R4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default index;
