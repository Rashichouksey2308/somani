/*eslint-disable*/
import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../../components/Toggle/index';
import Tooltip from '../../../../Tooltip';
import PostDatedCheque from './PostDateCheque';

function Index({ deliveryTerms, deliveryTermsHistory }) {

  const onToggle = (state) => { };

  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div onClick={onToggle}>
            <div
              className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#deliveryTerms"
              aria-expanded="true"
              aria-controls="deliveryTerms"
            >
              <h3 className={`${styles.heading} mb-0`}>Delivery Terms</h3>
              <span>{on ? '+' : '-'}</span>
            </div>
          </div>
        )}
      </Toggle>
      <div id="deliveryTerms" className="collapse" aria-labelledby="deliveryTerms">
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100">
              <div className="col-md-12 mb-5 px-0 mx-0 row">
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Delivery Terms</div>
                  <span className={`font-weight-light h5 ${deliveryTermsHistory?.deliveryTerm && deliveryTermsHistory?.deliveryTerm !== deliveryTerms?.deliveryTerm && styles.highlighted_field}`}>
                    {deliveryTerms?.deliveryTerm || '--'}
                  </span>
                  {deliveryTermsHistory?.deliveryTerm && deliveryTermsHistory?.deliveryTerm !== deliveryTerms?.deliveryTerm && <Tooltip data={deliveryTermsHistory?.deliveryTerm || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Payment Terms </div>
                  <span className={`font-weight-light h5 ${deliveryTermsHistory?.paymentTerms && deliveryTermsHistory?.paymentTerms !== deliveryTerms?.paymentTerms && styles.highlighted_field}`}>
                    {deliveryTerms?.paymentTerms || '--'}
                  </span>
                  {deliveryTermsHistory?.paymentTerms && deliveryTermsHistory?.paymentTerms !== deliveryTerms?.paymentTerms && <Tooltip data={deliveryTermsHistory?.paymentTerms || '--'} />}

                </div>
                <div className="col-md-4 col-sm-6">
                  <div className={`mb-2 font-weight-bold label_heading`}>Month of loading of Cargo</div>
                  <span className={`font-weight-light h5 ${deliveryTermsHistory?.monthOfLoadingCargo && deliveryTermsHistory?.monthOfLoadingCargo === deliveryTerms?.monthOfLoadingCargo && styles.highlighted_field}`}>
                    {deliveryTerms?.monthOfLoadingCargo || '--'}
                  </span>
                  {deliveryTermsHistory?.monthOfLoadingCargo && deliveryTermsHistory?.monthOfLoadingCargo === deliveryTerms?.monthOfLoadingCargo && <Tooltip data={deliveryTermsHistory?.monthOfLoadingCargo || '--'} />}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom"></div>
        <PostDatedCheque 
          postDatedCheques={deliveryTerms?.cheque?.length > 0 && deliveryTerms?.cheque || []} 
          postDatedChequesHistory={deliveryTermsHistory?.cheque?.length > 0 && deliveryTermsHistory?.cheque || []} 
        />
      </div>
    </div>
  );
}

export default Index;
