import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DownloadBar from '../../src/components/DownloadBar';
import Filter from '../../src/components/Filter';
import { setPageName } from '../../src/redux/userData/action';
import styles from './index.module.scss';

import Pagination from '../../src/components/Pagination';
import { GetAllVessel } from '../../src/redux/vessel/action';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window) {
      sessionStorage.setItem('loadedPage', 'Loading, Transit & Unloadinge');
      sessionStorage.setItem('loadedSubPage', `Track Shipments`);
      sessionStorage.setItem('openList', 3);
    }
  }, []);
  const [currentPage, setCurrentPage] = useState(0);
  const [table, setTable] = useState([]);
  useEffect(() => {
    dispatch(setPageName('track'));
  }, []);
  useEffect(() => {
    dispatch(GetAllVessel(`?page=${currentPage}&limit=7`));
  }, [currentPage]);
  const { allVessel } = useSelector((state) => state.vessel);

  useEffect(() => {
    if (allVessel?.data?.length > 0) {
      let temp = [];
      allVessel.data.forEach((vessel, index) => {
        if (vessel?.vessels[0]?.shipmentType == 'Bulk') {
          temp.push({
            orderID: vessel.order.orderId,
            name: vessel.company.companyName,
            imoNumber: vessel.vessels[0].IMONumber,
            vesselName: vessel.vessels[0].vesselInformation[0].name,
            containerNumber: vessel?.vessels[0]?.shippingInformation?.numberOfContainers,
          });
        }
        if (vessel?.vessels[0]?.shipmentType == 'Liner') {
          vessel.vessels[0].vesselInformation.forEach((v, index) => {
            temp.push({
              orderID: vessel.order.orderId,
              name: vessel.company.companyName,
              imoNumber: v?.IMONumber || '',
              vesselName: v?.name || '',
              containerNumber: vessel?.vessels[0]?.shippingInformation?.numberOfContainers,
            });
          });
        }
      });
      setTable([...temp]);
    }
  }, [allVessel]);
  const getSn = (index) => {
    return index + 1;
  };

  return (
    <div className="container-fluid p-0 border-0">
      <div className={styles.container_inner}>
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={`${styles.head_header} align-items-center`}>
            {/* <img
              className={`${styles.arrow} image_arrow img-fluid mr-2`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            /> */}
            <h1 className={styles.heading}>Track Shipments</h1>
          </div>
          <div className={styles.search}>
            <div className="input-group">
              <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                <img src="/static/search.svg" className="img-fluid" alt="Search" />
              </div>
              <input
                type="text"
                className={`${styles.formControl} border text_area form-control formControl `}
                placeholder="Search"
              />
            </div>
          </div>
          <Filter />
        </div>
        <div className={`${styles.datatable} border datatable card`}>
          <Pagination
            data={allVessel}
            tableName="Shipments"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="table_row">
                    <th>SR. NO.</th>
                    <th>ORDER ID</th>
                    <th>BUYER NAME</th>
                    <th>IMO NUMBER</th>
                    <th>VESSEL NAME</th>
                    <th>CONTAINER NUMBER</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {table.length > 0 &&
                    table.map((val, index) => {
                      return (
                        <tr className="table_row">
                          <td>
                            <strong>{getSn(index)}</strong>
                          </td>
                          <td>{val?.orderID}</td>
                          <td>{val.name}</td>
                          <td>{val.imoNumber}</td>
                          <td>{val.vesselName}</td>
                          <td>{val.containerNumber}</td>
                          <td>
                            <button className={`${styles.trackBtn}`}>Track</button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <DownloadBar downLoadButtonName="Download List" />
    </div>
  );
}

export default Index;
