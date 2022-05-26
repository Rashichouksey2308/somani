import React from 'react'
import {Form} from 'react-bootstrap'
import styles from './index.module.scss'

 
const index = () => { 
  return (
    <div className={`${styles.main} container-fluid`}>
        <div className={`${styles.head_container} d-flex justify-content-between pt-3`}>
        <h3 className={styles.heading}>Additional Comments</h3>
        <img className='p-3 img-fluid' alt="Add" src="/static/add.svg"/>
        </div>
        <div className={styles.dashboard_form}>
            <Form>
            <div className='row'>
               
                <Form.Group className={`${styles.form_group} col-md-3`} >
                    <Form.Label className={styles.label}>Select</Form.Label>
                    <select  className={`${styles.value} form-control`}id="select">
                    <option value="volvo">5. Lc Opening Bank</option>
                    <option value="audi">4. Lc Opening Bank</option>
                    </select>
                </Form.Group>

                <Form.Group className={`${styles.form_group} col-md-9`}>
                    <div className='d-flex justify-content-between'>
                    <Form.Label className={styles.label}>Comment</Form.Label>
                    <Form.Control className={`${styles.value} form-control`} type="text" placeholder="Lorem Ipsum Is A Name For A Common Type Of Placeholder Text. Also Known As Filler Or Dummy Text, This Is Simply Text Copy That Serves To Fill A Space Without Actually Saying Anything Meaningful. It's Essentially Nonsense Text That" />
                   <div className='p-2'> 
                   <img src= "/static/add-btn.svg"
                   className='img-fluid'
                   alt="Add"/>
                   </div>
                    </div> 
                    </Form.Group>

                    <h3 className={`${styles.comment_heading} pt-3`}>Comments</h3>
                    
                    <div className={`${styles.form_group} col-md-3`} >
                    <h4 className={styles.comment_name}>5. Lc Opening Bank</h4>
                    </div>

                    <div className={`${styles.form_group} col-md-9`}>
                    <div className={`${styles.comment_para} d-flex justify-content-between`}>
                    <div className={styles.comment}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space</div>                  
                    
                    <img src= "/static/mode_edit.svg" className="img-fluid ml-2" alt="Edit"/>
                    <img src= "/static/delete.svg" className="img-fluid ml-2" alt="Delete"/>
                   
                    </div>
                    </div>

                    <div className={`${styles.form_group} col-md-3`} >
                    <h4 className={styles.comment_name}>5. Lc Opening Bank</h4>
                    </div>

                    <div className={`${styles.form_group} col-md-9`}>
                    <div className={`${styles.comment_para} d-flex justify-content-between`}>
                    <div className={`${styles.comment} mr-auto`}>Lorem ipsum is a name for a common type of placeholder text.</div>                  
                   
                    <img src= "/static/mode_edit.svg" className="img-fluid " alt="Edit"/>
                    <img src= "/static/delete.svg" className="img-fluid" alt="Delete"/>
                   
                    </div>
                    </div>
               
               
                </div>
                </Form>

               
            </div>
            </div>
       
      
   
  )
}

export default index
