import React from 'react'
import {Form} from 'react-bootstrap'
import styles from './index.module.scss'

 
const index = () => { 
  return (
    <div className={styles.main}>
        <div className={`${styles.head_container} d-flex justify-content-between`}>
            <h3 className={styles.heading}>Additional Comments</h3>
            <img className='mr-4 img-fluid' alt="Add" src="/static/add.svg"/>
        </div>
        <div className={styles.dashboard_form}>
            <Form>
                <div className='row'>               
                    <Form.Group className={`${styles.form_group} col-md-3`} >
                        <select  className={`${styles.value} form-control`} required>
                            <option value="volvo">5. Lc Opening Bank</option>
                            <option value="audi">4. Lc Opening Bank</option>
                        </select>
                        <Form.Label className={styles.label}>Select<strong className="text-danger">*</strong></Form.Label>
                    </Form.Group>
                    <Form.Group className={`${styles.form_group} col-md-9`}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Control className={`${styles.value} form-control`} type="text" 
                        required/>
                            <Form.Label className={styles.label}>Comment<strong className="text-danger">*</strong></Form.Label>
                            <div className='ml-3'>
                                <img src="/static/add-btn.svg" className='img-fluid' alt="Add"/>
                            </div>
                        </div>
                    </Form.Group>
                </div>
                <h3 className={`${styles.comment_heading} pt-3`}>Comments</h3>
                <div className='row'>
                    <div className={`${styles.form_group} col-md-3`} >
                        <h4 className={styles.comment_name}>5. Lc Opening Bank</h4>
                    </div>
                    <div className={`${styles.form_group} col-md-9`}>
                        <div className={`${styles.comment_para} d-flex justify-content-between`}>
                            <div className={styles.comment}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space</div>                  
                            <img src="/static/mode_edit.svg" className="img-fluid ml-2" alt="Edit"/>
                            <img src="/static/delete.svg" className="img-fluid ml-2" alt="Delete"/>
                        </div>
                    </div>
                    <div className={`${styles.form_group} col-md-3`} >
                        <h4 className={styles.comment_name}>5. Lc Opening Bank</h4>
                    </div>
                    <div className={`${styles.form_group} col-md-9`}>
                        <div className={`${styles.comment_para} d-flex justify-content-between`}>
                            <div className={`${styles.comment}`}>Lorem ipsum is a name for a common type of placeholder text.</div>                  
                            <img src="/static/mode_edit.svg" className="img-fluid ml-2" alt="Edit"/>
                            <img src="/static/delete.svg" className="img-fluid ml-2" alt="Delete"/>
                        </div>
                    </div>               
                </div>
            </Form>               
        </div>
    </div>
  )
}
export default index
