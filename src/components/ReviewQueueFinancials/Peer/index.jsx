import React from 'react'
import styles from '../index.module.scss'
import moment from 'moment'

function Index({peerData}) {

  // console.log(peerData?.financial?.peerComparison, 'THIS IS PEER COMPARISON DATA')

  return (

    <>
      <div className={`${styles.card} card`}>
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}>
          <h2 className="mb-0">Peer Comparison</h2>
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit :</h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
            <span data-toggle="collapse" data-target="#peerComparison" aria-expanded="true" aria-controls="peerComparison">+</span>
          </div>
        </div>
        <div id="peerComparison" className="collapse" aria-labelledby="peerComparison" data-parent="#FinancialsAccordion">
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
                  {peerData && peerData?.financial?.peerComparison?.map((peers, index) => ( <tr key={index}>
                      <td>{peers.name}</td>
                      <td className="text-center">{moment(peers?.finyrEnddate)
                          .format('MMM-YY')
                          .toUpperCase()}</td>
                      <td className="text-center">{peers.revenue?.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                      <td className="text-center">{peers.ebidtaMargin?.toFixed(2)} %</td>
                      <td className="text-center">{peers.patMargin?.toFixed(2)}%</td>
                      <td className="text-center">{peers.borrowings?.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                    </tr>))}
                    {/* <tr>
                      <td>Ascent Hotels Private Limited</td>
                      <td className="text-center">Mar-2018</td>
                      <td className="text-center">96.17</td>
                      <td className="text-center">45.26%</td>
                      <td className="text-center">45.26%</td>
                      <td className="text-center">285.01</td>
                    </tr>
                    <tr>
                      <td>Orange Country Resorts & Hotels Limited</td>
                      <td className="text-center">Mar-2018</td>
                      <td className="text-center">96.17</td>
                      <td className="text-center">45.26%</td>
                      <td className="text-center">45.26%</td>
                      <td className="text-center">285.01</td>
                    </tr>
                    <tr>
                      <td>Divine Infracon Private Limited</td>
                      <td className="text-center">Mar-2018</td>
                      <td className="text-center">96.17</td>
                      <td className="text-center">45.26%</td>
                      <td className="text-center">45.26%</td>
                      <td className="text-center">285.01</td>
                    </tr>
                    <tr>
                      <td>Gujarat Jhm Hotels Limited</td>
                      <td className="text-center">Mar-2018</td>
                      <td className="text-center">96.17</td>
                      <td className="text-center">45.26%</td>
                      <td className="text-center">45.26%</td>
                      <td className="text-center">285.01</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
