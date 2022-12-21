import React from 'react';
import { useTable, useSortBy } from 'react-table';
import Image from 'next/image';
import styles from './index.module.scss';

function Index({
  tableHeading, currentPage, totalCount, setCurrentPage, pageLimit, setPageLimit, tableHooks = () => { }, columns = [], data = [], handleSort = () => { }, sortByState = {}, serverSortEnabled = false,
}) {
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable({
    columns,
    data,
    manualSortBy: !serverSortEnabled,
  }, tableHooks, useSortBy);

  return (
    <>
      {data?.length ? (
        <>
          <div className={`${styles.datatable} border datatable card`}>
            {tableHeading && totalCount >= 0 && (
              <div className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}>
                <h3 className="heading_card">{tableHeading}</h3>
                {totalCount >= 0 && (
                  <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                    <div className="align-items-baseline d-flex">
                      <div className={`${styles.show_record}`}>Show Records:</div>
                      <div className="d-flex align-items-center position-relative ml-2">
                        <select
                          className={`${styles.select} ${styles.customSelect} text1 accordion_body form-select`}
                          onChange={(e) => setPageLimit(e.target.value)}
                          value={pageLimit}
                        >
                          <option value={10}>10</option>
                          <option value={15}>15</option>
                          <option value={20}>20</option>
                        </select>
                        <img className={`${styles.arrow2} img-fluid`} src="/static/inputDropDown.svg" alt="arrow" />
                      </div>
                    </div>
                    <span>
                      Showing Page
                      {' '}
                      {currentPage + 1}
                      {' '}
                      out of
                      {Math.ceil(totalCount / pageLimit)}
                    </span>
                    <a
                      onClick={() => {
                        if (currentPage === 0) {
                          return;
                        } else {
                          setCurrentPage((prevState) => prevState - 1);
                        }
                      }}
                      href="#"
                      className={`${styles.arrow} ${styles.leftArrow} arrow`}
                    >
                      {' '}
                      <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
                    </a>
                    <a
                      onClick={() => {
                        if (currentPage + 1 < Math.ceil(totalCount / pageLimit)) {
                          setCurrentPage((prevState) => prevState + 1);
                        }
                      }}
                      href="#"
                      className={`${styles.arrow} ${styles.rightArrow} arrow`}
                    >
                      <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid" />
                    </a>
                  </div>
                )}
              </div>
            )}
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table common-table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                  {...getTableProps()}
                >
                  <thead>
                    {
                      headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {
                            headerGroup.headers.map((column) => (
                              <th
                                className={`table_heading text-uppercase ${!(serverSortEnabled && !column.disableSortBy) ? 'cursor-none' : 'cursor-pointer'}`}
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                onClick={() => (serverSortEnabled && !column.disableSortBy) && handleSort(column)}
                              >
                                {column.render('Header').split('_').join(' ')}
                                {serverSortEnabled ? !column.disableSortBy
                                  ? sortByState.column === column.id ? sortByState.order ? ' ▾' : ' ▴' : !column.disableSortBy ? (
                                    <>
                                      {' '}
                                      {' '}
                                      <Image
                                        width="9px"
                                        height="14px"
                                        src="/static/icons8-sort-24.svg"
                                        alt="Sort icon"
                                      />
                                    </>
                                  ) : ''
                                  : ''
                                  : ''}

                              </th>
                            ))
                          }
                        </tr>
                      ))
                    }
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {
                      rows.map((row, idx) => {
                        prepareRow(row);
                        return (
                          <tr className="table_row17" {...row.getRowProps()}>
                            {
                              row.cells.map((cell, idx) => (
                                <td {...cell.getCellProps()}>
                                  {cell.render('Cell')}
                                </td>
                              ))
                            }
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {totalCount && (
            <div className={`${styles.total_count}`}>
              Total Count:
              {' '}
              <span>{totalCount}</span>
            </div>
          )}
        </>
      ) : (
        <div className="h2 text-center">No records found</div>
      )}
    </>
  );
}

export default Index;
