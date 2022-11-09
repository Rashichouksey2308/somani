import _get from 'lodash/get';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetOrders } from 'redux/registerBuyer/action';
import { setDynamicName, setDynamicOrder, setPageName } from 'redux/userData/action';
import styles from './index.module.scss';

function Index() {
  const router = useRouter();
  const { singleOrder } = useSelector((state) => state.buyer);
  const dispatch = useDispatch();

  useEffect(() => {
    const id1 = sessionStorage.getItem('VesselCompany');
    dispatch(GetOrders(`?company=${id1}`));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPageName('vessel'));
    dispatch(setDynamicName(_get(singleOrder, 'data[0].company.companyName', 'Company Name')));
    dispatch(setDynamicOrder(null));
  }, [singleOrder]);

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={`${styles.head_header} align-items-center`}>
            <img
              onClick={() => router.push('/vessel-nomination')}
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={styles.heading}>{_get(singleOrder, 'data[0].company.companyName', 'Company Name')}</h1>
          </div>
        </div>

        <div className={`${styles.datatable} card datatable border-color`}>
          <div className={`${styles.tableFilter} align-items-center d-flex justify-content-between`}>
            <h3 className="heading_card">All Orders</h3>
            <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
              <span>Showing Page 1 out of 10</span>
              <a href="#" className={`${styles.arrow} ${styles.leftArrow} arrow`}>
                <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
              </a>
              <a href="#" className={`${styles.arrow} ${styles.rightArrow} arrow`}>
                <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="table_row">
                    <th>
                      ORDER ID <img className={`mb-1`} src="/static/icons8-sort-24.svg" alt="Sort icon" />{' '}
                    </th>
                    <th>COMMODITY</th>
                    <th>SHIPMENT TYPE</th>
                    <th>CREATED ON</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td>124621</td>
                    <td className={styles.buyerName} onClick={(e) => router.push('/vessel')}>
                      Iron
                    </td>
                    <td>Bulk</td>
                    <td>22-02-2022</td>
                    <td>
                      <span className={`${styles.status} ${styles.review}`} />
                      Pending
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td>124621</td>
                    <td className={styles.buyerName} onClick={() => router.push('/vessel')}>
                      Iron
                    </td>
                    <td>Bulk</td>
                    <td>22-02-2022</td>
                    <td>
                      <span className={`${styles.status} ${styles.review}`} />
                      Pending
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td>124621</td>
                    <td
                      className={styles.buyerName}
                      onClick={(e) => {
                        router.push('/vessel');
                      }}
                    >
                      Copper
                    </td>
                    <td>Liner</td>
                    <td>22-02-2022</td>
                    <td>
                      <span className={`${styles.status} ${styles.approved}`} />
                      Approved
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
