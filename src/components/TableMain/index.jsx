/* eslint-disable @next/next/no-img-element */
import _get from 'lodash/get';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GettingAllInsurance } from 'redux/insurance/action';
import Pagination from '../Pagination/Index';
import styles from './index.module.scss';

function Index({
  tableName,
  pageType,
  isStatus,
  dateHeading,
  handleRoute,

  handleEditRoute,
}) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const { insuranceResponse } = useSelector((state) => state.insurance);

  useEffect(() => {
    dispatch(GettingAllInsurance(`?page=${currentPage}&limit=7`));
  }, [dispatch, currentPage]);

  const [sorting, setSorting] = useState(1);

  const handleSort = () => {
    if (sorting == -1) {
      dispatch(GettingAllInsurance(`?page=${currentPage}&limit=7&createdAt=${sorting}`));
      setSorting(1);
    } else if (sorting == 1) {
      dispatch(GettingAllInsurance(`?page=${currentPage}&limit=7&createdAt=${sorting}`));
      setSorting(-1);
    }
  };
  const getStatus = (value) => {
    if (value?.quotationRequest?.insuranceType == 'Marine Insurance') {
      return moment(value?.marineInsurance?.insuranceTo).isBefore(moment());
    } else {
      return moment(value?.storageInsurance?.insuranceTo).isBefore(moment());
    }
  };
  return (
    <div className={`${styles.datatable} border datatable card`}>
      <Pagination
        data={insuranceResponse}
        tableName={tableName}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className={styles.table_scroll_outer}>
        <div className={styles.table_scroll_inner}>
          <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr className="table_row">
                <th>
                  ORDER ID{' '}
                  <img
                    className={`mb-1`}
                    src="/static/icons8-sort-24.svg"
                    alt="Sort icon"
                    onClick={() => handleSort()}
                  />{' '}
                </th>
                <th>
                  BUYER NAME <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />{' '}
                </th>
                <th>COMMODITY</th>
                <th>{pageType}</th>

                <th>{dateHeading}</th>

                {isStatus ? (
                  <th>
                    STATUS <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
                  </th>
                ) : (
                  <th>PAYMENT STATUS</th>
                )}
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {insuranceResponse &&
                insuranceResponse?.data?.map((insured, index) => (
                  <tr key={index} className="table_row">
                    <td>{insured?.order?.orderId}</td>
                    <td
                      className={styles.buyerName}
                      onClick={() => {
                        handleRoute(insured);
                      }}
                    >
                      {insured?.company?.companyName}
                    </td>
                    <td>{insured?.order?.commodity}</td>
                    <td>{insured?.quotationRequest?.insuranceType}</td>
                    <td>
                      {insured?.quotationRequest?.insuranceType == 'Marine Insurance'
                        ? moment(insured?.marineInsurance?.insuranceTo).format('DD-MM-YYYY')
                        : insured?.quotationRequest?.insuranceType == 'Storage Insurance'
                        ? moment(insured?.storageInsurance?.insuranceTo).format('DD-MM-YYYY')
                        : moment(insured?.storageInsurance?.insuranceTo).format('DD-MM-YYYY')}
                    </td>

                    {getStatus(insured) ? (
                      <td>
                        <span className={`${styles.status} ${styles.rejected}`}></span> Expired
                      </td>
                    ) : (
                      <td>
                        <span className={`${styles.status} ${styles.approved}`}></span> Active
                      </td>
                    )}
                    <td>
                      {_get(insured, 'quotationRequest.quotationRequestSubmitted', false) && (
                        <span onClick={() => handleEditRoute(insured)}>
                          <img
                            className={`${styles.edit_image} img-fluid mr-3`}
                            src="/static/mode_edit.svg"
                            alt="edit"
                          />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Index;
