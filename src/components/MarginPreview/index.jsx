import React, { useState } from 'react'
import styles from './index.module.scss'
import { Row, Col, Container, Card } from 'react-bootstrap'
import Paginatebar from '../Paginatebar'
import TermsheetPopUp from '../TermsheetPopUp'
import { Form } from 'react-bootstrap'
function Index() {
  let tempArr = [
    {
      head: "Commodity Details", details: [
        { subhead: "1. Commodity Name", val: "Chrome Ore" },
        { subhead: "2. Quantity", val: "5000 MT (± 10%)" },
        { subhead: "3. Unit Price", val: "USD 243/MT" },
      ]
    }
  ]
  const [open, setOpen] = useState(false)
  const openbar = () => {
    setOpen(true)
  }
  const close = () => {
    setOpen(false)
  }
  return (
    <>
      <div className={`${styles.root_container} tabHeader bg-transparent`}>
        <div className={styles.head_container}>
          <div className={styles.head_header}>
            <img className={styles.arrow}
              src="/static/keyboard_arrow_right-3.svg" alt="Arrow" />
            <h1 className={`${styles.heading} heading`}>Margin Money Preview</h1>
          </div>
        </div>
        <div className={`${styles.term_container} container-fluid`}>
          <Row>
            <Col md={4} className={`${styles.left}`}>
              <div>
                <span className={styles.termSub_head}>Order ID:</span>
                <span className={styles.termValue}>2FCH6589</span>
              </div>
              <div>
                <span className={styles.termSub_head}>Buyer:</span>
                <span className={styles.termValue}>M/s Vishnu Chemicals Limited</span>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <span>MARGIN MONEY</span>
            </Col>
            <Col md={4} className={`${styles.left} ${styles.right}`}>
              <div><span className={styles.termSub_head}>Date:</span> <span className={styles.termValue}>22-02-2022</span></div>
            </Col>
          </Row>
        </div>
        <Card className={styles.content}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0"  >
                <tr>
                  <th>Commodity Details</th>
                  <th >Revised Margin Money</th>
                  <th >Margin Money</th>
                </tr>
                <tbody>
                  <tr>
                    <td><span className={`${styles.sno}`}>A</span><span className={`ml-2`}>Quantity</span></td>
                    <td className={`${styles.good} good`}>75000 MT</td>
                    <td>55000 MT</td>
                  </tr>
                  <tr>
                    <td><span className={`${styles.sno}`}>B</span><span className={`ml-2`}>Unit Price</span></td>
                    <td className={`${styles.good} good`}>USD 72</td>
                    <td>USD 70</td>
                  </tr>
                  <tr>
                    <td><span className={`${styles.sno}`}>I</span><span className={`ml-2`}>Additional PDC’s</span></td>
                    <td className={`${styles.highlight} satisfactory`}>1</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0"  >
                <tr>
                  <th>Calculation</th>
                  <th ></th>
                  <th ></th>
                </tr>
                <tbody>
                  <tr>
                    <td><span className={`${styles.sno}`}>J</span><span className={`ml-2`}>Order Value</span><span className={`${styles.formula} ml-2`}>(A*B)</span></td>
                    <td >75000 MT</td>
                    <td>55000 MT</td>
                  </tr>
                  <tr>
                    <td><span className={`${styles.sno}`}>M</span><span className={`ml-2`}>Trade Margin (INR)</span> <span>(K*E)</span></td>
                    <td >₹ 326,316,177.00</td>
                    <td>₹ 326,316,177.00</td>
                  </tr>
                  <tr>
                    <td><span className={`${styles.sno}`}>N</span><span className={`ml-2`}>Gross Order Value (INR)</span> <span>(K+L+M)</span></td>
                    <td>₹ 326,316,177.00</td>
                    <td>₹ 326,316,177.00</td>
                  </tr>
                  <tr className={`${styles.bordertop} border_color`}>
                    <td><span className={`${styles.sno}`}>T</span><span className={`ml-2`}>Additional Amount Per SPDC (INR) </span> <span>[(S-Previous Value)/I)]</span></td>
                    <td className={`${styles.good} ${styles.highlight2} satisfactory`}>₹ 326,316,177.00</td>
                    <td>₹ 326,316,177.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Index