import React from 'react'

const index = () => {
  return (
    <div className={`${styles.tpi_popup} card`}>
      <div className="card-header p-0 bg-transparent border-0 d-flex justify-content-between">
        <h3>Product Specification</h3>
        <img src="/static/close.svg" alt="close" className="img-fluid" />
      </div>
      <div className="card-body p-0">
        <div className={styles.table_container}>
          <div className={styles.table_scroll_outer}>
            <div className={styles.table_scroll_inner}>
              <table
                className={`${styles.table} table-bordered table`}
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <thead>
                  <tr>
                    <th width={44}></th>
                    <th>S.NO.</th>
                    <th>ELEMENTS</th>
                    <th>TYPICAL (IN PCT)</th>
                    <th>GUARANTEED (IN PCT)</th>
                    <th width={44}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <th></th>
                    <td>01</td>
                    <td>SiO2</td>
                    <td>44.50</td>
                    <td>44.50</td>
                    <td></td>
                  </tr>
                  <tr className="table_row">
                    <th></th>
                    <td>02</td>
                    <td>Al2O3</td>
                    <td>44.50</td>
                    <td>44.50</td>
                    <td></td>
                  </tr>
                  <tr className="table_row">
                    <th></th>
                    <td>03</td>
                    <td>SiO2</td>
                    <td>44.50</td>
                    <td>44.50</td>
                    <td></td>
                  </tr>
                  <tr className="table_row">
                    <th></th>
                    <td>04</td>
                    <td>Al2O3</td>
                    <td>44.50</td>
                    <td>44.50</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
