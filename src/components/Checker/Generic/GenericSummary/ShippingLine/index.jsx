import React, { Component, useMemo } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import Tooltip from '../../../../Tooltip';

const onToggle = (state) => { };

function Index({ shippingLine, shippingLineHistory }) {

  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#shippingLine"
              aria-expanded="true"
              aria-controls="shippingLine"
            >
              <h3 className={`${styles.heading} mb-0`}>Shipping Line</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
          </div>
        )}
      </Toggle>
      <div id="shippingLine" className="collapse" aria-labelledby="shippingLine">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                  <span className={`font-weight-light h5 ${shippingLineHistory?.name && shippingLineHistory?.name !== shippingLine?.name && styles.highlighted_field}`}>
                    {shippingLine?.name || '--'}
                  </span>
                  {shippingLineHistory?.name && shippingLineHistory?.name !== shippingLine?.name && <Tooltip data={shippingLineHistory?.name || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Vessel Name</div>
                  <span className={`font-weight-light h5 ${shippingLineHistory?.vesselName && shippingLineHistory?.vesselName !== shippingLine?.vesselName && styles.highlighted_field}`}>
                    {shippingLine?.vesselName || '--'}
                  </span>
                  {shippingLineHistory?.vesselName && shippingLineHistory?.vesselName !== shippingLine?.vesselName && <Tooltip data={shippingLineHistory?.vesselName || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>GSTIN</div>
                  <span className={`font-weight-light h5 ${shippingLineHistory?.gstin && shippingLineHistory?.gstin !== shippingLine?.gstin && styles.highlighted_field}`}>
                    {shippingLine?.gstin || '--'}
                  </span>
                  {shippingLineHistory?.gstin && shippingLineHistory?.gstin !== shippingLine?.gstin && <Tooltip data={shippingLineHistory?.gstin || '--'} />}

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
