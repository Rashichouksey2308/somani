import React, { Component } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';

const onToggle = (state) => { };

function Index({ financingBank, financingBankHistory }) {

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
          </div>
        )}
      </Toggle>
      <div id="financingBank" className="collapse" aria-labelledby="financingBank">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <span className={`font-weight-light h5 ${financingBankHistory?.name && financingBankHistory?.name !== financingBank?.name && styles.highlighted_field}`}>
                    {financingBank?.name || '--'}
                  </span>
                  {financingBankHistory?.name && financingBankHistory?.name !== financingBank?.name && <Tooltip data={financingBankHistory?.name || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Branch</div>
                  <span className={`font-weight-light h5 ${financingBankHistory?.branch && financingBankHistory?.branch !== financingBank?.branch && styles.highlighted_field}`}>
                    {financingBank?.branch || '--'}
                  </span>
                  {financingBankHistory?.branch && financingBankHistory?.branch !== financingBank?.branch && <Tooltip data={financingBankHistory?.branch || '--'} />}

                </div>

                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Country</div>
                  <span className={`font-weight-light h5 ${financingBankHistory?.country && financingBankHistory?.country !== financingBank?.country && styles.highlighted_field}`}>
                    {financingBank?.country || '--'}
                  </span>
                  {financingBankHistory?.country && financingBankHistory?.country !== financingBank?.country && <Tooltip data={financingBankHistory?.country || '--'} />}

                </div>
              </div>
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Swift Code</div>
                  <span className={`font-weight-light h5 ${financingBankHistory?.swiftCode && financingBankHistory?.swiftCode !== financingBank?.swiftCode && styles.highlighted_field}`}>
                    {financingBank?.swiftCode || '--'}
                  </span>
                  {financingBankHistory?.swiftCode && financingBankHistory?.swiftCode !== financingBank?.swiftCode && <Tooltip data={financingBankHistory?.swiftCode || '--'} />}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
