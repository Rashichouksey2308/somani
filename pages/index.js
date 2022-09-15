/* eslint-disable @next/next/no-img-element */
import RepoSearch from 'features/repoSearch/RepoSearch'
import { useRouter } from 'next/router'
import { createStore } from 'store'
import { getReposAsync } from 'features/repoSearch/repoSearchSlice'
import DoughnutChart from '../src/components/DoughnutChart'
import Leads from '../src/components/Leads'
import styles from './index.module.scss'
import Commodities from '../src/components/Commodities'
import Exposure from '../src/components/Exposure'
import Countries from '../src/components/Countries'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../src/components/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TermsheetPopUp from '../src/components/TermsheetPopUp'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../src/redux/userData/action'
import Popup from '../src/components/Popups/BillPopup/index'
import { getAnalystData } from '../src/redux/analytics/actions'
const IndexPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.user.isDark)
  const {
    orderSummary,
    leadSummary,
    commoditySummary,
    originSummary,
    customerSummary,
    exposureSummary,
    totalOrigin,
  } = useSelector((state) => state.analytics)
  console.log(originSummary, totalOrigin, 'leadSummary')
  useEffect(() => {
    dispatch(setPageName('dashboard'))
  })
  useEffect(() => {
    dispatch(getAnalystData())
  }, [])
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Dashboard')
      sessionStorage.setItem('loadedSubPage', null)
      sessionStorage.setItem('openList', ``)
    }
  }, [])
  console.log('BUILD TEST *******************')
  return (
    <>
      <Popup />
      <div className={`${styles.root_Container} background container-fluid`}>
        <div className={`${styles.head_Container} row`}>
          <div className={`${styles.dashboardPadding} col-lg-6`}>
            <Leads
              header={'Leads'}
              subHeader={'TOTAL LEADS'}
              image={'/static/clipboard-list.svg'}
              content={['APPROVED', 'IN PROCESS', 'REJECTED']}
              data={leadSummary}
            />
          </div>
          <div className={`${styles.dashboardPadding} col-lg-6`}>
            <Leads
              header={'Orders'}
              subHeader={'ORDER PLACED'}
              image={'/static/box-open.svg'}
              content={['COMPLETED', 'IN PROCESS', 'REJECTED']}
              data={orderSummary}
            />
          </div>
        </div>
        <div className={`${styles.bottom_Container} row`}>
          <div className={`${styles.left_Container} col-lg-3 col-md-12`}>
            <div className="row">
              <div className={`${styles.dashboardPadding} col-lg-12 col-md-6`}>
                <Commodities data={commoditySummary} />
              </div>
              <div className={`${styles.dashboardPadding} col-lg-12 col-md-6`}>
                <Exposure />
              </div>
            </div>
          </div>
          <div className={`${styles.right_Container} col-lg-9 col-md-12`}>
            <div className={styles.upper_Container}>
              <div className="row">
                <div
                  className={`${styles.commonCard} ${styles.dashboardPadding} col-md-6`}
                >
                  <Countries data={originSummary} total={totalOrigin} />
                </div>
                <div
                  className={`${styles.commonCard} ${styles.dashboardPadding} col-md-6`}
                >
                  <DoughnutChart />
                </div>
              </div>
            </div>
            <div className={styles.bottom_Container}>
              <div className="row">
                <div className={`${styles.dashboardPadding} col-sm-12`}>
                  <div className={`${styles.leads} border card`}>
                    <div
                      className={`${styles.tableFilter} d-flex justify-content-between align-items-center`}
                    >
                      <div
                        className={`  d-flex justify-content-between  align-items-center`}
                      >
                        <h3 className={`heading`}>
                          BL Date{' '}
                          <img
                            className={`${
                              darkMode ? styles.noRotate : styles.rotate
                            } img-fluid`}
                            src={`${
                              darkMode
                                ? `/static/white-arrow.svg`
                                : `/static/keyboard_arrow_right-3.svg`
                            }`}
                            // src="/static/keyboard_arrow_right-3.svg"
                            alt="arrow right"
                          />
                        </h3>
                        <div
                          className={` ${styles.filterIcon}  d-flex justify-content-between align-items-center`}
                        >
                          <img
                            src="/static/Group 546.svg"
                            alt="arrow right"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.pageList}  d-flex justify-content-end align-items-center`}
                      >
                        <span>Showing Page 1 out of 10</span>
                        <a
                          href="#"
                          className={`${styles.arrow} ${`leftArrow`} arrow`}
                        >
                          {' '}
                          <img
                            src="/static/keyboard_arrow_right-3.svg"
                            alt="arrow right"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="#"
                          className={`${styles.arrow} ${`rightArrow`} arrow`}
                        >
                          <img
                            src="/static/keyboard_arrow_right-3.svg"
                            alt="arrow right"
                            className={`${styles.image_reverse} img-fluid`}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.table_scroll_outer}>
                      <div className={styles.table_scroll_inner}>
                        <table
                          className={styles.table}
                          cellPadding="0"
                          cellSpacing="0"
                          border="0"
                        >
                          <thead>
                            <tr>
                              <th>ORDER NO.</th>
                              <th>BUYER NAME</th>
                              <th>COMMODITY</th>
                              <th>DUE DATE</th>
                              <th>DAYS TO GO</th>
                              <th>DUE AMOUNT</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td>124621</td>
                              <td className={`${styles.buyerName} buyerName`}>
                                Bhutani Traders
                              </td>
                              <td>Iron</td>
                              <td>12/05/2022</td>
                              <td>7</td>
                              <td>₹ 3,45,000</td>
                            </tr>
                            <tr className="table_row">
                              <td>124621</td>
                              <td className={`${styles.buyerName} buyerName`}>
                                Bhutani Traders
                              </td>
                              <td>Iron</td>
                              <td>12/05/2022</td>
                              <td>7</td>
                              <td>₹ 3,45,000</td>
                            </tr>
                            <tr className="table_row">
                              <td>124621</td>
                              <td className={`${styles.buyerName} buyerName`}>
                                Bhutani Traders
                              </td>
                              <td>Iron</td>
                              <td>12/05/2022</td>
                              <td>7</td>
                              <td>₹ 3,45,000</td>
                            </tr>
                            <tr className="table_row">
                              <td>124621</td>
                              <td className={`${styles.buyerName} buyerName`}>
                                Bhutani Traders
                              </td>
                              <td>Iron</td>
                              <td>12/05/2022</td>
                              <td>7</td>
                              <td>₹ 3,45,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const store = createStore()
  await store.dispatch(getReposAsync('python'))

  return {
    props: {
      state: store.getState(),
    },
  }
}

export default IndexPage
