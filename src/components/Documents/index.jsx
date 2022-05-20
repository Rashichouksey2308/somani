import React from 'react'
import styles from './index.module.scss'

const index = () => {

          return (
            <div className={styles.main}>
            <div className={styles.heading}>Documents</div>
            

            <div className={styles.input_container}>
            <div className={styles.each_input}
            style={{width:500}}>
                    <label className={styles.label_heading} 
                    
                    id="dropDoc">Type Of Document</label>
                    <select
                      id="dropDoc"
                      className={styles.input_field} >
                      <option value="doc1">Incorporation Certificate</option>
                      <option value="doc2">Certificate</option>
                  </select>

                </div>
                <div className={styles.each_input}>
                    <div className={styles.label_heading}
                    >
                      Attach Document</div>
                  <div
                    className={styles.certificate}>
                    Incorporation_Certification267576332.pdf
                    <img className={styles.close_image} src="/static/close.svg"/> </div>
                </div>

                <div className={styles.each_input}>
                  <div className={styles.image_card}
                  style={{margin:19}}>
                  <img className={styles.image_delete} src="/static/noun-delete-4801059.svg"/>  
                  </div>

                </div>

            </div>
            <hr className={styles.hr_line}></hr>

            <div className={styles.input_container}>
                <div className={styles.each_input}>
                    <select
                      className={styles.input_field} >
                      <option value="cert1">GST Certification</option>
                      <option value="cert2">Certification</option>

                  </select>

                </div>

                <div className={styles.each_input}>
                  <div className={styles.btn_container}>
                 <button className={styles.button_upload}>Upload</button>
                 </div>
                </div>

                <div className={styles.each_input}
                >
                <div className={styles.image_card}
                   style={{marginLeft:60}}>
                  <img className={styles.image_delete} src="/static/noun-delete-4801059.svg"/>  
                  </div>


                </div>

                


            </div>
            <hr className={styles.hr_line}></hr>
            <div className={styles.input_container}>
             <div className={styles.add_document}>
                  <img className={styles.add_image} src="/static/Group 550.svg"/>
                  <p className={styles.add_para}>Add More Documents</p>
                
                </div>
            </div>
          </div>
          );
        }
    
    
  
export default index
