import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'

function Index ({ btnName, handleSave, rightBtn, rightBtnClick, downloadFormat }) {
  return (
    <div className={`${styles.root} cta_bar`}>
      {downloadFormat ? (
        <div className='d-flex align-items-center mr-4'>
          <div className={`${styles.sub_heading} mr-4 mt-1`}>Download As:</div>
          <div className={`${styles.radio_form} ml-1`}>
            {['radio'].map((type, index) => (
              <div key={`inline-${index}`} className={`${styles.radio_group}`}>
                <Form.Check
                  className={styles.radio}
                  inline
                  defaultChecked
                  label='PDF'
                  name='group1'
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label='XLS'
                  name='group1'
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label='DOC'
                  name='group1'
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ' '
      )}

      <div className={styles.btn_file}>
        <span>{btnName} </span>
        <img src='/static/file_download.svg' className='img-fluid' alt='FileDownload' />
      </div>
    </div>
  )
}

export default Index
