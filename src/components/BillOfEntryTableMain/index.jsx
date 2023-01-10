/* eslint-disable @next/next/no-img-element */
import _get from 'lodash/get';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCustomClearance } from 'redux/CustomClearance&Warehousing/action';
import Pagination from '../Pagination';
import styles from './index.module.scss';

function getPaymentStatus(isStatus) {
  if (!isStatus) return <th>PAYMENT STATUS</th>;
  return (
    <th>
      STATUS <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />
    </th>
  );
}

function Index({ tableName, pageType, isStatus, dateHeading, handleRoute }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [sorting, setSorting] = useState(1);
  const { allCustomClearance } = useSelector((state) => state.Custom);

  const handleSort = () => {
    function sort(value) {
      dispatch(GetAllCustomClearance(`?page=${currentPage}&limit=7&createdAt=${sorting}`));
      setSorting(value);
    }
    if (sorting === -1) sort(1);
    else sort(-1);
  };

  useEffect(() => {
    dispatch(GetAllCustomClearance(`?page=${currentPage}&limit=7`));
  }, [dispatch, currentPage]);

  return (
    <div className={`${styles.datatable} border datatable card`}>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        tableName={tableName}
        data={allCustomClearance}
      />
      <div className={styles.table_scroll_outer}>
        <div className={styles.table_scroll_inner}>
          <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr className="table_row">
                <th>
                  ORDER ID{' '}
                  <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" onClick={handleSort} />{' '}
                </th>
                <th>BUYER NAME</th>
                <th>COMMODITY</th>
                <th>VESSEL NAME</th>
                <th>{pageType}</th>
                <th>{dateHeading}</th>
                {getPaymentStatus(isStatus)}
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {allCustomClearance &&
                allCustomClearance?.data?.map((insured, index) => (
                  <tr key={index} className="table_row">
                    <td>{insured?.order?.orderId}</td>
                    <td className={styles.buyerName} onClick={() => handleRoute(insured)}>
                      {insured?.company?.companyName}
                    </td>
                    <td>{insured?.order?.commodity}</td>
                    <td>{_get(insured, 'order.vessel.vessels[0].vesselInformation[0].name', '')}</td>
                    <td></td>
                    <td>{_get(insured, 'billOfEntry.billOfEntry[0].boeDate', '')?.slice(0, 10)}</td>
                    <td>
                      <span className={`${styles.status} ${styles.review}`}></span>
                      On-Hold
                    </td>
                    <td onClick={() => handleRoute(insured)}>
                      <img className={`${styles.edit_image} mr-3`} src="/static/mode_edit.svg" alt="edit" />
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
