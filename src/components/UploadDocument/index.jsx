import React from 'react'
import styles from './index.module.scss'


const Index = () => {
  return (
    <div className={`${styles.main} border_color mb-4 card mt-4`}>
    <div className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
    data-toggle="collapse"
    data-target="#upload"
    aria-expanded="true"
    aria-controls="upload">
    <h3 className={styles.heading}>Upload Documents</h3>
    <span>+</span>
  </div>
  <div
    id="upload"
    className="collapse"
    aria-labelledby="upload"
    data-parent="#upload"
    >
  <div className={`${styles.table_form}`}>
   <div className={styles.table_container}>
   <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
    <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
        <thead>
            <tr>
                <th>DOCUMENT NAME <img className={`mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>FORMAT <img className={`mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>DOCUMENT DATE <img className={`mb-1`} src="./static/icons8-sort-24.png " alt="Sort icon"/></th>
                <th>ACTION</th>
            </tr>
            </thead>                        
            <tbody>
           
            <tr className='table_row'>
                <td className={styles.doc_name}>Nomination Document<strong className="text-danger">*</strong></td>
                <td><img src="/static/pdf.svg" className="img-fluid" alt="Pdf" /></td>
                <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                <td> <input className={styles.input_field} type="text" placeholder='Nomination_Document.pdf'/>
                <img className={`${styles.close_image} img-fluid `} src="/static/close.svg" alt="close"/> </td>
            </tr>
                            
        </tbody>
    </table>
    </div>
    </div>
</div> 
</div>  
</div>         
    </div>
  )
}

export default Index
