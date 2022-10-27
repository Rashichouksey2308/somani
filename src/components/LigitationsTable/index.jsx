import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Row, Col } from 'react-bootstrap';
import _get from 'lodash/get';
import { useDispatch } from 'react-redux';
import { GetCaseDetails } from '../../redux/companyDetail/action';

function index({ data, Heading, val, totalData }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState({
    pending: 0,
    disposed: 0,
  });
  useEffect(() => {
    if (totalData?.cases?.length > 0) {
      let pending = 0;
      let disposed = 0;
      totalData.cases.forEach((val, idex) => {
        if (val?.caseStatus?.trim()?.toLowerCase() == 'disposed') {
          disposed = disposed + 1;
        }
        if (val?.caseStatus?.trim()?.toLowerCase() == 'pending') {
          pending = pending + 1;
        }
      });
      setCount({ pending: pending, disposed: disposed });
    }
  }, [totalData]);
  const casePreviewHandler =  (cinNo) => {
   dispatch(GetCaseDetails({ cin: cinNo }));
  };
  const totalNumberOfCases = data?.length;
  //const pendingCases = data.filter((e)=> e.)
  return (
    <div className={`${styles.card_litigations} card border_color shadow-none`}>
      <div className={`${styles.card_ligitations_holder}`}>
        <div
          className={`${styles.cardHeader_litigations} card-header d-flex border-bottom-0 align-items-center justify-content-between`}
          data-toggle="collapse"
          data-target={`#${val}`}
          aria-expanded="true"
          aria-controls={`${val}`}
        >
          <Row className={`${styles.row} align-items-center`}>
            <Col md={3} sm={2}>
              <div className="mb-0">{Heading}</div>
            </Col>
            <Col md={3} sm={2}>
              <div className={`${styles.head} mb-0 d-flex align-items-center `}>
                <span className={``}>Pending Case</span>
                <span className={`${styles.lower} sub_heading`}>
                  {count?.pending}
                </span>
              </div>
            </Col>
            <Col md={2} sm={2}>
              <div
                className={`${styles.head}  mb-0 d-flex align-items-center `}
              >
                <span>Disposed case</span>
                <span className={`${styles.lower} sub_heading`}>
                  {count?.disposed}
                </span>
              </div>
            </Col>
            <Col md={3} sm={2}>
              <div className={`${styles.head} mb-0 d-flex align-items-center`}>
                <span>Total cases</span>
                <div className={styles.chart}>
                  <div className={styles.container}>
                    <div
                      className={styles.fill}
                      style={{
                        width: `${(count?.pending / Number(totalData?.cases?.length)) *
                          100
                          }%`,
                      }}
                    ></div>
                    <span className={`sub_heading`}>
                      {totalData?.cases?.length}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1} sm={1} className="text-center">
              <img
                src="/static/arrow-right.svg"
                alt="arrow right"
                className={`${styles.image_arrow} img-fluid image_arrow`}
              />
            </Col>
          </Row>
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
                {data &&
                  data?.map((courtCase, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="">{courtCase?.cin}</td>
                      <td className="">{courtCase?.caseNumber}</td>
                      <td className="">{courtCase?.caseType}</td>
                      <td className="">{courtCase?.section}</td>
                      <td className="">
                        {_get(courtCase, 'petitioner[0]', '')}
                      </td>
                      <td className="">
                        {_get(courtCase, 'respondent[0]', '')}
                      </td>
                      <td className="text-center">
                        <img
                          src="./static/blue-eye.svg"
                          className="img-fluid"
                          alt="blue eye"
                          onClick={() => casePreviewHandler(courtCase.cin)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div></div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default index;
