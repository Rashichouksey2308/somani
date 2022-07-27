/* eslint-disable @next/next/no-img-element */
import index from 'components/Footer'
import React, { useState, useEffect } from 'react'
import GrowInput from '../GrowInput'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import { toast } from 'react-toastify'

const Index = ({ additionalComments, addCommentHandler, updateCommenthandler }) => {
    const [commentType, setCommentType] = useState("Deliveries/Due Date/Payment")
    const [comment, setComment] = useState([
       
    ])
    const [text, setText] = useState("")
    const [isCommentEditable, setIsCommentEditable] = useState({})
    const [days,setDays]=useState({day1:"",day2:""})

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


 const getInputValue=(name,value)=>{
    console.log(name,value,"name,value")
    if(commentType=="Deliveries/Due Date/Payment"){
        if(name=="day1"){
            setDays({...days,day1:value})
        }else{
             setDays({...days,day2:value})
        }
      
    }
 }
 const textGenerator=()=>{
   if(commentType=="Deliveries/Due Date/Payment"){
    let text=`${days.day1} days from the vessel/container(s) at discharge date at discharge port or ${days.day2} days from the from the BL date, whichever is earlier, through TT or LC (in case of LC all Bank charges to be borne by the Buyer).`
    return text   
}else{
     let text=`Cargo to be stored in Custom Bonded Warehouse at port of Discharge (Vizag India) under CMA with Dr. Amin Controllers. “lGM and Into Bond Bill of Entry” shall be filled by the lndo’s nominated party and all expenses/charges to be born and paid by the Buyer.`
     return text  
}
 }
 const addComment=()=>{
    setComment([...comment,{type:commentType,text :textGenerator()}])
 }
 const deleteComment=(index)=>{
  setComment([...comment.slice(0,index), ...comment.slice(index+1)])
 }
 const changeComment=(val,index)=>{
    let tempArr=comment
    tempArr.forEach((obj,i)=>{
        if(i==index){
            obj.text=val
           
        }
    })
    setComment(tempArr)
 }
 console.log(comment,"comment")
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
                                    <option value="Deliveries/Due Date/Payment">Deliveries/Due Date/Payment</option>
                                    <option value="Storage of Goods">Storage of Goods</option>
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
                                    onClick={()=>{addComment()}}
                                    />
                                    </div>
                               
                               <div className={`${styles.form_group}  `}>
                                {commentType=="Deliveries/Due Date/Payment" ?
                                 <p><GrowInput name={"day1"} getValue={getInputValue} className={styles.grow_input} type="text"/> days from the vessel/container(s) at discharge date at discharge port or <GrowInput  name={"day2"} getValue={getInputValue} className={styles.grow_input} type="text"/> days  from the BL date, whichever is earlier, through TT or LC (in case of LC all Bank charges to be borne by the Buyer).  </p>
                                :
                                <p>Cargo to be stored in Custom Bonded Warehouse at port of Discharge (Vizag India) under CMA with Dr. Amin Controllers. “lGM and Into Bond Bill of Entry” shall be filled by the lndo’s nominated party and all expenses/charges to be born and paid by the Buyer.</p>
                                }
                               
                                </div>      
                            </div>
                            </div>
                         </div> 
                        </div>
                       
                        <hr></hr>
                        <div className={`${styles.dashboard_form} card-body`}>

                        <h3 className={`${styles.comment_heading} font-weight-medium`}>Comments</h3>
                        {comment && comment.map((comment, index) => {
                            const commentindex = isCommentEditable[index]
                            return (
                                <div key={index} className={`${styles.rowGroup} ${index==0?styles.noBorder:null} row border-color`}>
                                    <div className={`${styles.form_group} col-md-3`} >
                                        <h4 className={styles.comment_name}>{comment.type}</h4>
                                    </div>
                                    <div className={`${styles.form_group} col-md-9`}>
                                        <div className={`${styles.comment_para} d-flex justify-content-between`}>
                                            {/* <div className={styles.comment}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space</div>                   */}
                                            <Form.Control className={`${styles.comment} ${!isCommentEditable[index]?styles.nonEditable:null}
                                            
                                            `}
                                                as="textarea"
                                                rows={3}
                                                //On Change TO BE Done
                                                readOnly={!isCommentEditable[index]}
                                                defaultValue={comment.text} 
                                                onChange={(e)=>{
                                                    changeComment(e.target.value,index)
                                                }}
                                                />
                                           
                                            <img src="/static/mode_edit.svg"
                                                className="img-fluid ml-2"
                                                alt="Edit"
                                                index={index}
                                                onClick={() => manageCommentEditable(index)}
                                            />
                                            <img
                                                src="/static/delete 2.svg"
                                                className="img-fluid ml-2" alt="Delete" 
                                                onClick={()=>{
                                                    deleteComment(index)
                                                }}
                                                />
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
