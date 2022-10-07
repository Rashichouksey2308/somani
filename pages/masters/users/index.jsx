import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Filter from '../../../src/components/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { SearchLeads } from 'redux/buyerProfile/action'

const index = () => {
  const dispatch = useDispatch()
  const [serachterm, setSearchTerm] = useState('')
  const { searchedLeads } = useSelector((state) => state.order)

  const handleSearch = (e) => {
    const query = `${e.target.value}`
    setSearchTerm(query)
    if (query.length >= 3) {
      dispatch(SearchLeads(query))
    }
  }
  const handleFilteredData = (e) => {
    setSearchTerm('')
    const id = `${e.target.id}`
    dispatch(GetLcModule(`?company=${id}`))
  }

  return (

    <div className="container-fluid p-0 border-0">
        <div className={styles.container_inner}>
        {/*filter*/}
        <div className={`${styles.filter} d-flex align-items-center`}>
          <div className={`${styles.search}`}>
            <div className="input-group">
              <div
                className={`${styles.inputGroupPrepend} input-group-prepend`}
              >
                <img
                  src="/static/search.svg"
                  className="img-fluid"
                  alt="Search"
                />
              </div>
              <input
                  value={serachterm}
                  onChange={handleSearch}
                  type="text"
                  className={`${styles.formControl} border text_area form-control formControl `}
                  placeholder="Search"
                />
              </div>
              {searchedLeads && serachterm && (
                <div className={styles.searchResults}>
                  <ul>
                    {searchedLeads.data.data.map((results, index) => (
                      <li
                        onClick={handleFilteredData}
                        id={results._id}
                        key={index}
                      >
                        {results.companyName} <span>{results.customerId}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
          <Filter/>
        

          <button
            type="button"
            className={`${styles.createBtn} btn ml-auto btn-primary`}
          >
            Add
          </button>
        </div>

        {/*UserTable*/}
        <div className={`${styles.datatable} border datatable mt-4`}>
          <div
            className={`${styles.tableFilter} d-flex justify-content-between`}
          >
            <h3 className="heading_card">Users</h3>
            <div
              className={`${styles.pageList} d-flex justify-content-end align-items-center`}
            >
              <span>Showing Page 1 out of 10</span>
              <a
                href="#"
                className={`${styles.arrow} ${styles.leftArrow} arrow`}
              >
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow left"
                  className="img-fluid"
                />
              </a>
              <a
                href="#"
                className={`${styles.arrow} ${styles.rightArrow} arrow`}
              >
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow right"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <table
            className={`${styles.table} table`}
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <thead>
              <tr>
                <th className={`${styles.table_heading} table_heading`}>
                  USER ID
                </th>
                <th className={`${styles.table_heading} table_heading`}>
                  USER NAME
                </th>
                <th className={`${styles.table_heading} table_heading`}>
                  CONTACT NUMBER
                </th>
                <th className={`${styles.table_heading} table_heading`}>
                  DEPARTMENT
                </th>
                <th className={`${styles.table_heading} table_heading`}>
                  CREATION DATE
                </th>
                <th className={`${styles.table_heading} table_heading`}>
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={`${styles.table_row} table_row17`}>
                <td>SG1234</td>
                <td className={styles.buyerName}>Rajsekhar</td>
                <td>9034894802</td>
                <td>Finance</td>
                <td>22-02-2022</td>
                <td>
                  <img
                    src="/static/active.svg"
                    className="img-fluid"
                    alt="active"
                  />
                  <span className="m-3">Active</span>
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row17`}>
                <td>SG1234</td>
                <td className={styles.buyerName}>Rajsekhar</td>
                <td>9034894802</td>
                <td>Finance</td>
                <td>22-02-2022</td>
                <td>
                  <img
                    src="/static/active.svg"
                    className="img-fluid"
                    alt="active"
                  />
                  <span className="m-3">Active</span>
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row17`}>
                <td>SG1234</td>
                <td className={styles.buyerName}>Rajsekhar</td>
                <td>9034894802</td>
                <td>Finance</td>
                <td>22-02-2022</td>
                <td>
                  <img
                    src="/static/active.svg"
                    className="img-fluid"
                    alt="active"
                  />
                  <span className="m-3">Active</span>
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row17`}>
                <td>SG1234</td>
                <td className={styles.buyerName}>Rajsekhar</td>
                <td>9034894802</td>
                <td>Finance</td>
                <td>22-02-2022</td>
                <td>
                  <img
                    src="/static/active.svg"
                    className="img-fluid"
                    alt="active"
                  />
                  <span className="m-3">Active</span>
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row17`}>
                <td>SG1234</td>
                <td className={styles.buyerName}>Rajsekhar</td>
                <td>9034894802</td>
                <td>Finance</td>
                <td>22-02-2022</td>
                <td>
                  <img
                    src="/static/inactive.svg"
                    className="img-fluid"
                    alt="inactive"
                  />
                  <span className="m-3">Inactive</span>
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row17`}>
                <td>SG1234</td>
                <td className={styles.buyerName}>Rajsekhar</td>
                <td>9034894802</td>
                <td>Finance</td>
                <td>22-02-2022</td>
                <td>
                  <img
                    src="/static/blacklisted.svg"
                    className="img-fluid"
                    alt="blacklisted"
                  />
                  <span className="m-3">Blacklisted</span>
                </td>
              </tr>
              <tr className={`${styles.table_row} table_row17`}>
                <td>SG1234</td>
                <td className={styles.buyerName}>Rajsekhar</td>
                <td>9034894802</td>
                <td>Finance</td>
                <td>22-02-2022</td>
                <td>
                  <img
                    src="/static/notice.svg"
                    className="img-fluid"
                    alt="Notice Period"
                  />
                  <span className="m-3">Notice Period</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end mt-5 mb-4">
          <div className={styles.btn_file}>
            <span>Download All Reports</span>
            <img
              src="/static/file_download.svg"
              className="img-fluid"
              alt="FileDownload"
            />
          </div>
        </div>
        </div>
      </div>

  )
}

export default index
