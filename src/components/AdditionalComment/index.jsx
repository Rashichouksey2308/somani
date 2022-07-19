import index from 'components/Footer'
import React, { useState, useEffect } from 'react'

import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import { toast } from 'react-toastify'

const Index = ({ additionalComments, addCommentHandler, updateCommenthandler }) => {
    const [commentType, setCommentType] = useState("5. Lc Opening Bank")
    const [comment, setComment] = useState("")
    const [isCommentEditable, setIsCommentEditable] = useState({})

    const allcomment = []
    useEffect(() => {
        additionalComments.map((comment, index) => {
            setIsCommentEditable(prev => ({ ...prev, [index]: false }))
        })

    }, [additionalComments])

    const manageCommentEditable = (index) => {    
        setIsCommentEditable(prev => ({ ...prev, [index]: !isCommentEditable[index] }))
    }
    
    const addNewCommentHandler = () => {
       
        if (comment ===  "") {
            let toastMessage = 'cannot add an Empty Comment'
            if (!toast.isActive(toastMessage)) {
                toast.error(toastMessage, { toastId: toastMessage })
            }
            return
        } else {
            addCommentHandler(commentType,comment)
        }
    }



    return (
        <div className={`${styles.main} main`}>
            <div className={`${styles.head_container} border_color d-flex justify-content-between`} data-toggle="collapse" data-target="#additional" aria-expanded="true" aria-controls="additional">
                <h3 className={styles.heading}>Additional Comments</h3>
                <span>+</span>
            </div>
            <div id="additional" className="collapse" aria-labelledby="additional" data-parent="#additional">
                <div className={`${styles.dashboard_form} card-body`}>
                    <Form>
                        <div className='row'>
                            <div className={`${styles.form_group} col-md-3`} >
                                  <div className='d-flex'>
                                <select className={`${styles.value} ${styles.customSelect} input form-control`} onChange={(e) => setCommentType(e.target.value)} required>
                                    <option value="5. Lc Opening Bank">5. Lc Opening Bank</option>
                                    <option value="a4. Lc Opening Bankdi">4. Lc Opening Bank</option>
                                </select>
                                <Form.Label className={`${styles.label} label_heading`}>Select<strong className="text-danger">*</strong></Form.Label>
                             <img
                                className={`${styles.arrow} img-fluid`}
                                src="/static/inputDropDown.svg"
                                alt="Search"
                            />
                        </div>
                            </div>
                            <Form.Group className={`${styles.form_group} col-md-9`}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <input className={`${styles.value}  input form-control`} onChange={(e) => setComment(e.target.value)} type="text"
                                        required />
                                    <Form.Label className={`${styles.label} label_heading`}>Comment<strong className="text-danger">*</strong></Form.Label>
                                    <div onClick={addNewCommentHandler} className='ml-3'>
                                        <img 
                                         src="/static/add-btn.svg"
                                          className='img-fluid' alt="Add"
                                          />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                        <h3 className={`${styles.comment_heading} font-weight-medium pt-3`}>Comments</h3>
                        {additionalComments && additionalComments.map((comment, index) => {
                            const commentindex = isCommentEditable[index]
                            return (
                                <div key={index} className='row'>
                                    <div className={`${styles.form_group} col-md-3`} >
                                        <h4 className={styles.comment_name}>{comment.additionalCommentType}</h4>
                                    </div>
                                    <div className={`${styles.form_group} col-md-9`}>
                                        <div className={`${styles.comment_para} d-flex justify-content-between`}>
                                            {/* <div className={styles.comment}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space</div>                   */}
                                            <Form.Control className={`${styles.comment}`}
                                                as="textarea"
                                                rows={2}

                                                readOnly={!isCommentEditable[index]}
                                                defaultValue={comment.comment} />
                                            <img src="/static/mode_edit.svg"
                                                className="img-fluid ml-2"
                                                alt="Edit"
                                                index={index}
                                                onClick={(e) => manageCommentEditable(index)}
                                            />
                                            <img
                                                src="/static/delete.svg"
                                                className="img-fluid ml-2" alt="Delete" />
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Index
