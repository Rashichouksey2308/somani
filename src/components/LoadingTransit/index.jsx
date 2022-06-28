import React from 'react'
import styles from './index.module.scss'


function Index() {

 
  return (
    <div className={`{$styles.main} container-fluid mb-4 card`}> 
      <div className={`${styles.filter} d-flex align-items-center`}>
      <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>Loading, Transit &amp; Unloading </h1>
        </div>
        <div className={styles.search}>
          <div className="input-group">
            <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
              <img src="/static/search.svg" className="img-fluid" alt="Search" />
            </div>
            <input type="text" className={`${styles.formControl} form-control formControl `} placeholder="Search" />
          </div>
         
        </div>
        <a className={styles.filterIcon}>
        <img src="/static/filter.svg" className="img-fluid" alt="Filter" />
      </a>
      <a href="#" className={`${styles.filterList} filterList `}>
        Bhutani Traders
        <img src="/static/close.svg" className="img-fluid" alt="Close" />
      </a>
      
      </div>
     
      <div className={`${styles.statusBox} statusBox  d-flex align-items-center justify-content-between`}>
        <div className={`${styles.all} ${styles.boxInner}`}>
          <div className="d-flex align-items-center">
            <div className={styles.iconBox}>
              <img
                src="/static/Leads.svg"
                className="img-fluid"
                alt="All Leads"
              />
            </div>
            <h3>
              <span>ALL</span>
              3,200
            </h3>
          </div>
        </div>
        <div className={`${styles.approved} ${styles.boxInner}`}>
          <div className="d-flex align-items-center">
            <div className={styles.iconBox}>
              <img src="/static/check.svg" className="img-fluid" alt="Check" />
            </div>
            <h3>
              <span>TOTAL INSPECTION</span>
              780
            </h3>
          </div>
        </div>
        <div className={`${styles.review} ${styles.boxInner}`}>
          <div className="d-flex align-items-center">
            <div className={styles.iconBox}>
              <img
                src="/static/access-time.svg"
                className="img-fluid"
                alt="Access Time"
              />
            </div>
            <h3>
              <span>BL GENERATION</span>
              800
            </h3>
          </div>
        </div>
        <div className={`${styles.pending} ${styles.boxInner}`}>
          <div className="d-flex align-items-center">
            <div className={styles.iconBox}>
              <img
                src="/static/bookmark.svg"
                className="img-fluid"
                alt="Close"
              />
            </div>
            <h3>
              <span>SAVED</span>
              14
            </h3>
          </div>
        </div>
        
      </div>
      <div className={`${styles.datatable} datatable `}>
        <div className={`${styles.tableFilter} d-flex justify-content-between`}>
          <h3 className="heading_card">Loading, Transit & Unloading</h3>
          <div
            className={`${styles.pageList} d-flex justify-content-end align-items-center`}
          >
            <span>Showing Page 1 out of 10</span>
            <a href="#" className={`${styles.arrow} ${styles.leftArrow} arrow`}>
              {' '}
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className="img-fluid"
              />
            </a>
            <a href="#" className={`${styles.arrow} ${styles.rightArrow} arrow`}>
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <table
          className={`${styles.table} table table_row` }
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>BUYER NAME</th>
              <th>COMMODITY</th>
              <th>VESSEL NAME</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>124621</td>
              <td className={styles.buyerName}>Ramakrishna Traders</td>
              <td>Iron</td>
              <td>Abcz</td>
              <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.review}`}></span>
                On-Hold
              </td>
              <td>
              <img 
                    className={`${styles.edit_image} img-fluid mr-3`} 
                    src="/static/mode_edit.svg" 
                    alt="edit" />

              </td>
            </tr>
            <tr>
              <td>124621</td>
              <td className={styles.buyerName}>Ramakrishna Traders</td>
              <td>Iron</td>
              <td>Abcz</td>
              <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.review}`}></span>
                On-Hold
              </td>
              <td>
              <img 
                    className={`${styles.edit_image} img-fluid mr-3`} 
                    src="/static/mode_edit.svg" 
                    alt="edit" />

              </td>
            </tr>
            <tr>
              <td>124621</td>
              <td className={styles.buyerName}>Ramakrishna Traders</td>
              <td>Iron</td>
              <td>Abcz</td>
              <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.review}`}></span>
                On-Hold
              </td>
              <td>
              <img 
                    className={`${styles.edit_image} img-fluid mr-3`} 
                    src="/static/mode_edit.svg" 
                    alt="edit" />

              </td>
            </tr>
            <tr>
              <td>124621</td>
              <td className={styles.buyerName}>Ramakrishna Traders</td>
              <td>Iron</td>
              <td>Abcz</td>
              <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.review}`}></span>
                On-Hold
              </td>
              <td>
              <img 
                    className={`${styles.edit_image} img-fluid mr-3`} 
                    src="/static/mode_edit.svg" 
                    alt="edit" />

              </td>
            </tr>
            <tr>
              <td>124621</td>
              <td className={styles.buyerName}>Ramakrishna Traders</td>
              <td>Iron</td>
              <td>Abcz</td>
              <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>
              <img 
                    className={`${styles.edit_image} img-fluid mr-3`} 
                    src="/static/mode_edit.svg" 
                    alt="edit" />

              </td>
            </tr>
            <tr>
              <td>124621</td>
              <td className={styles.buyerName}>Ramakrishna Traders</td>
              <td>Iron</td>
              <td>Abcz</td>
              <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.approved}`}></span>
                Approved
              </td>
              <td>
              <img 
                    className={`${styles.edit_image} img-fluid mr-3`} 
                    src="/static/mode_edit.svg" 
                    alt="edit" />

              </td>
            </tr>
            <tr>
              <td>124621</td>
              <td className={styles.buyerName}>Ramakrishna Traders</td>
              <td>Iron</td>
              <td>Abcz</td>
              <td>22-02-2022</td>
              <td>
                <span className={`${styles.status} ${styles.rejected}`}></span>
                Rejected
              </td>
              <td>
              <img 
                    className={`${styles.edit_image} img-fluid mr-3`} 
                    src="/static/mode_edit.svg" 
                    alt="edit" />

              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
)
}
export default Index
