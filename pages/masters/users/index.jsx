import React from 'react'
import styles from './index.module.scss'

const index = () => {
  return (
    <>
    <div className='container-fluid'>
        {/*filter*/}
        <div className={`${styles.filter} d-flex align-items-center`}>
          
            <div className={`${styles.search}`}>
              <div className="input-group">
                <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                  <img src="/static/search.svg" className="img-fluid" alt="Search" />
                </div>
                <input type="text" className={`${styles.formControl} form-control`} placeholder="Search" />
              </div>
            </div>
            <a className={styles.filterIcon}><img src="/static/filter.svg" className="img-fluid" alt="Filter" /></a>
            <a href="#" className={styles.filterList}>From: 22-02-2022 To: 22-04-2022 <img src="/static/close-b.svg" className="img-fluid" alt="Close"/></a>
            <a href="#" className={styles.filterList}>Raj<img src="/static/close-b.svg" className="img-fluid" alt="Close" /></a>
           
            <button type="button" className={`${styles.btnPrimary} btn ml-auto btn-primary`}>Add</button>   
          </div>

          {/*UserTable*/}
          <div className={`${styles.datatable} mt-4`}>
            <div className={`${styles.tableFilter} d-flex justify-content-between`}>
              <h3>Users</h3>
              <div className={`${styles.pageList} d-flex justify-content-end align-items-center`}>
                <span>Showing Page 1 out of 10</span>
                <a href="#" className={`${styles.arrow} ${styles.leftArrow}`}><img src="/static/keyboard_arrow_right-3.svg" alt="arrow left" className="img-fluid"/></a>
                <a href="#" className={`${styles.arrow} ${styles.rightArrow}`}><img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="img-fluid"/></a>
              </div>
            </div>
            <table className={`${styles.table} table`} cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th>USER ID</th>
                  <th>USER NAME</th>
                  <th>CONTACT NUMBER</th>
                  <th>DEPARTMENT</th>
                  <th>CREATION DATE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SG1234</td>
                  <td className={styles.buyerName}>Rajsekhar</td>
                  <td>9034894802</td>
                  <td>Finance</td>
                  <td>22-02-2022</td>
                  <td><img src="/static/active.svg" className='img-fluid' alt="active"/>
                  <span className='m-3'>Active</span>
                  </td>                
                  </tr>
                <tr>
                  <td>SG1234</td>
                  <td className={styles.buyerName}>Rajsekhar</td>
                  <td>9034894802</td>
                  <td>Finance</td>
                  <td>22-02-2022</td>
                  <td><img src="/static/active.svg" className='img-fluid' alt="active"/>
                  <span className='m-3'>Active</span>
                  </td>                
                  </tr>
                <tr>
                  <td>SG1234</td>
                  <td  className={styles.buyerName}>Rajsekhar</td>
                  <td>9034894802</td>
                  <td>Finance</td>
                  <td>22-02-2022</td>
                  <td><img src="/static/active.svg" className='img-fluid' alt="active"/>
                  <span className='m-3'>Active</span>
                  </td>
                   </tr>
                <tr>
                  <td>SG1234</td>
                  <td  className={styles.buyerName}>Rajsekhar</td>
                  <td>9034894802</td>
                  <td>Finance</td>
                  <td>22-02-2022</td>
                  <td><img src="/static/active.svg" className='img-fluid' alt="active"/>
                  <span className='m-3'>Active</span>
                  </td>
                 </tr>
                <tr>
                  <td>SG1234</td>
                  <td  className={styles.buyerName}>Rajsekhar</td>
                  <td>9034894802</td>
                  <td>Finance</td>
                  <td>22-02-2022</td>
                  <td><img src="/static/inactive.svg" className='img-fluid' alt="inactive"/>
                  <span className='m-3'>Inactive</span>
                  </td>
                  </tr>
                <tr>
                  <td>SG1234</td>
                  <td  className={styles.buyerName}>Rajsekhar</td>
                  <td>9034894802</td>
                  <td>Finance</td>
                  <td>22-02-2022</td>
                  <td><img src="/static/blacklisted.svg" className='img-fluid' alt="blacklisted"/>
                  <span className='m-3'>Blacklisted</span>
                  </td>                
                  </tr>
                <tr>
                  <td>SG1234</td>
                  <td  className={styles.buyerName}>Rajsekhar</td>
                  <td>9034894802</td>
                  <td>Finance</td>
                  <td>22-02-2022</td>
                  <td><img src="/static/notice.svg" className='img-fluid' alt="Notice Period"/>
                  <span className='m-3'>Notice Period</span>
                  </td>
                </tr>
              </tbody>
            </table>        
          </div>
          <div className='d-flex justify-content-end mt-5 mb-4'>
          <div className={styles.btn_file}><span>Download All Reports</span>
          <img src="/static/file_download.svg" className='img-fluid' alt="FileDownload"/>
          </div>
          </div>

        </div>

   
      
    </>
  )
}

export default index