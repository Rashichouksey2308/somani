import React, { useState } from 'react';
import styles from '../index.module.scss';
import moment from 'moment';
import { checkNan, convertValue } from 'utils/helper';
import { returnReadableNumber } from '@/utils/helpers/global';

function Index({ peerData }) {
  const [conversionUnit, setConversionUnit] = useState(10000000);

  return (
    <>
      <div className={`${styles.card} card border_color border-bottom`}>
        <div
          className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
        >
          <h2 className="mb-0">Peer Comparison</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <div className="d-flex align-items-center position-relative">
              <select
                value={conversionUnit}
                onChange={(e) => setConversionUnit(e.target.value)}
                className={`${styles.options} ${styles.customSelect} accordion_DropDown`}
              >
                <option value={10000000}>Crores</option>
                <option value={100000}>Lakhs</option>
              </select>
              <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
            </div>
            <span
              data-toggle="collapse"
              data-target="#peerComparison"
              aria-expanded="true"
              aria-controls="peerComparison"
            >
              +
            </span>
          </div>
        </div>
        <div
          id="peerComparison"
          className="collapse"
          aria-labelledby="peerComparison"
          data-parent="#FinancialsAccordion"
        >
          <div className={`${styles.noBorderTable} ${styles.cardBody} p-0 card-body border_color`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th width="30%">COMPANY</th>
                      <th className="text-center" width="14%">
                        FY ENDING
                      </th>
                      <th className="text-center" width="14%">
                        REVENUE
                      </th>
                      <th className="text-center" width="14%">
                        EBDITA MARGIN (%)
                      </th>
                      <th className="text-center" width="14%">
                        PAT MARGIN (%)
                      </th>
                      <th className="text-center" width="14%">
                        BORROWINGS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {peerData &&
                      peerData?.financial?.peerComparison?.map((peers, index) => (
                        <tr key={index}>
                          <td>{peers.name}</td>
                          <td className="text-center">{peers?.finyrEnddate && moment(peers?.finyrEnddate).format('MMM-YY').toUpperCase()}</td>
                          <td className="text-center">
                          {returnReadableNumber(convertValue(peers.revenue, conversionUnit), 'en-In', 2, 2,)}
                          </td>
                          <td className="text-center">
                          {peers?.ebidtaMargin && returnReadableNumber(peers?.ebidtaMargin * 100, 'en-In', 2, 2) +' %'}
                          </td>
                          <td className="text-center">
                            {peers?.patMargin && returnReadableNumber(peers?.patMargin * 100, 'en-In', 2, 2) +' %'}
                          </td>
                          <td className="text-center">
                            {returnReadableNumber(convertValue(peers.borrowings, conversionUnit), 'en-In', 2, 2)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
