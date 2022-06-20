import RepoSearch from 'features/repoSearch/RepoSearch'
import { useRouter } from 'next/router'
import { createStore } from 'store'
import { getReposAsync } from 'features/repoSearch/repoSearchSlice'
import DoughnutCart from '../src/components/DoughnutCart'
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

const IndexPage = () => {
  const router = useRouter()

  return (
    <>
      <div className={`${styles.root_Container} background container-fluid`}>
        <div className={`${styles.head_Container} mt-2 row`}>
          <div className="col-sm-6">
            <Leads
              header={'Leads'}
              subHeader={'TOTAL LEADS'}
              image={'/static/clipboard-list.svg'}
              content={['APPROVED', 'IN PROCESS', 'REJECTED']}
            />
          </div>
          <div className="col-sm-6">
            <Leads
              header={'Procurement Orders'}
              subHeader={'ORDER PLACED'}
              image={'/static/box-open.svg'}
              content={['COMPLETED', 'IN PROCESS', 'REJECTED']}
            />
          </div>
        </div>
        <div className={`${styles.bottom_Container} row`}>
          <div className={`${styles.left_Container} col-sm-3`}>
            <Commodities />
            <Exposure />
          </div>
          <div className={`${styles.right_Container} col-sm-9`}>
            <div className={styles.upper_Container}>
              <div className="row">
                <div className={`${styles.commonCard} col-sm-6`}>
                  <Countries />
                </div>
                <div className={`${styles.commonCard} col-sm-6`}>
                  <DoughnutCart />
                </div>
              </div>
            </div>
            <div className={styles.bottom_Container}>
              <div className={styles.leads}>
                <div
                  className={`${styles.tableFilter} d-flex justify-content-between`}
                >
                  <h3>BL Date</h3>
                  <div
                    className={`${styles.pageList}  d-flex justify-content-end align-items-center`}
                  >
                    <span>Showing Page 1 out of 10</span>
                    <a href="#" className={`${styles.arrow} ${`leftArrow`}`}>
                      {' '}
                      <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className="img-fluid"
                      />
                    </a>
                    <a href="#" className={`${styles.arrow} ${`rightArrow`}`}>
                      <img
                        src="/static/keyboard_arrow_right-3.svg"
                        alt="arrow right"
                        className={`${styles.image_reverse} img-fluid`}
                      />
                    </a>
                  </div>
                </div>
                <table
                  className={styles.table}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr>
                      <th>CORDER NO.</th>
                      <th>CUSTOMER NAME</th>
                      <th>COMMODITY</th>
                      <th>DUE DATE</th>
                      <th>DAYS TO GO</th>

                      <th>DUE AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>124621</td>
                      <td className={styles.buyerName}>Bhutani Traders</td>
                      <td>Iron</td>
                      <td>12/05/2022</td>
                      <td>7</td>
                      <td>₹ 3,45,000</td>
                    </tr>
                    <tr>
                      <td>124621</td>
                      <td className={styles.buyerName}>Bhutani Traders</td>
                      <td>Iron</td>
                      <td>12/05/2022</td>
                      <td>7</td>
                      <td>₹ 3,45,000</td>
                    </tr>
                    <tr>
                      <td>124621</td>
                      <td className={styles.buyerName}>Bhutani Traders</td>
                      <td>Iron</td>
                      <td>12/05/2022</td>
                      <td>7</td>
                      <td>₹ 3,45,000</td>
                    </tr>
                    <tr>
                      <td>124621</td>
                      <td className={styles.buyerName}>Bhutani Traders</td>
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
