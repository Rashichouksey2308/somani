/* eslint-disable @next/next/no-img-element */
import index from 'components/Footer'
import React, { useState, useEffect } from 'react'
import GrowInput from '../GrowInput'
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
                    <div className={`${styles.bill_landing}  border_color`}>
                <div className={`${styles.vessel_card}`}>
                    <div>
                            <div className={`${styles.form_group} d-flex justify-content-between`} >
                                  <div className='d-flex' style={{width:"460px"}}>
                                 <select className={`${styles.value} ${styles.customSelect} input form-control`} onChange={(e) => setCommentType(e.target.value)} required>
                                    <option value="5. Lc Opening Bank">Deliveries/Due Date/Payment</option>
                                    <option value="a4. Lc Opening Bankdi">Bank</option>
                                </select>
                                <label className={`${styles.label} label_heading`}
                                  style={{left:"20px"}}
                                  >Select</label>
                                    <img
                                        className={`${styles.arrow} img-fluid`}
                                        src="/static/inputDropDown.svg"
                                        alt="Search"
                                    />
                                    </div>
                                     <img 
                                    src="/static/add-btn.svg"
                                    className='img-fluid' alt="Add"
                                    />
                                    </div>
                               
                               <div className={`${styles.form_group}  `}>
                                <p><GrowInput className={styles.grow_input} type="text"/> from the vessel/container(s) at discharge date at discharge port or <GrowInput className={styles.grow_input} type="text"/>  from the BL date, whichever is earlier, through TT or LC (in case of LC all Bank charges to be borne by the Buyer).
                                 </p>
                                </div>      
                            </div>
                            </div>
                         </div> 
                        </div>
                       
                        <hr></hr>
                        <div className={`${styles.dashboard_form} card-body`}>

                        <h3 className={`${styles.comment_heading} font-weight-medium`}>Comments</h3>
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
                                                //On Change TO BE Done
                                                readOnly={!isCommentEditable[index]}
                                                defaultValue={comment.comment} />
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src="/static/mode_edit.svg"
                                                className="img-fluid ml-2"
                                                alt="Edit"
                                                index={index}
                                                onClick={() => manageCommentEditable(index)}
                                            />
                                            <img
                                                src="/static/delete.svg"
                                                className="img-fluid ml-2" alt="Delete" />
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                </div>
                </div>
           
        </div>
    )
}
export default Index
