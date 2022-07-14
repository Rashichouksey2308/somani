import React from 'react'
import styles from './index.module.scss'
import { Row, Col } from 'react-bootstrap'

function index({data,Heading, val }) {
  const totalNumberOfCases = data?.length
  //const pendingCases = data.filter((e)=> e.)
  console.log(totalNumberOfCases,'totalNumberOfCases')
  return (
    <div className={`${styles.card_litigations} card`}>
      <div className={`${styles.card_ligitations_holder}`}>
        <div
          className={`${styles.cardHeader_litigations} card-header d-flex align-items-center justify-content-between`}
          data-toggle="collapse"
          data-target={`#${val}`}
          aria-expanded="true"
          aria-controls={`${val}`}
        >
          <Row className={`${styles.row}`}>
            <Col md={3} sm={2}>
              <div className="mb-0">{Heading}</div>
            </Col>
            <Col md={3} sm={2}>
              <div className={`${styles.head} mb-0 d-flex align-items-center `}>
                <span className={``}>Pending Case</span>
                <span className={`${styles.lower} sub_heading`}>{data?.pendingCase}</span>
              </div>
            </Col>
            <Col md={3} sm={2}>
              <div
                className={`${styles.head}  mb-0 d-flex align-items-center `}
              >
                <span>Disposed case</span>
                <span className={`${styles.lower} sub_heading`}>{data?.disposedCase}</span>
              </div>
            </Col>
            <Col md={3} sm={2}>
              <div className={`${styles.head} mb-0 d-flex align-items-center`}>
                <span>Total cases</span>
                <div className={styles.chart}>
                  <div className={styles.container}>
                    <div className={styles.fill}></div>
                    <span className={`sub_heading`}>{data?.totalCase}</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <h2 className="mb-0" sm={1}>
            +
          </h2>
        </div>
        <div
          id={`${val}`}
          className="collapse"
          aria-labelledby={`${val}`}
          data-parent="#profileAccordion"
        >
          <div className={` ${styles.cardBody_Tribunals} card-body`}>
            <table
              className={`${styles.table} table`}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>
                  <th className="">S.NO</th>
                  <th className="">CINO.</th>
                  <th className="">CASE NO.</th>
                  <th className="">CASE TYPE</th>
                  <th className="">SECTION</th>
                  <th className="">PETITIONER</th>
                  <th className="">RESPONDENT</th>
                  <th className="">PREVIEW</th>
                </tr>
              </thead>
              <tbody>
               {data && data?.cases?.map((courtCase, index)=> (
                 <tr key={index}>
                  <td>{index+1}</td>
                  <td className="">{courtCase.cin}</td>
                  <td className="">{courtCase.caseNumber}</td>
                  <td className="">{courtCase.caseType}</td>
                  <td className="">{courtCase.section}</td>
                  <td className="">{courtCase.petitioner}</td>
                  <td className="">{courtCase.cin}</td>
                  <td className="text-center">
                    <img src="./static/blue-eye.svg"
                    className='img-fluid'
                    alt="blue eye"></img>
                  </td>
                </tr>))}
              </tbody>
            </table>

            <div></div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default index
