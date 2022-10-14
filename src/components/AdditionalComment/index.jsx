/* eslint-disable @next/next/no-img-element */
import index from 'components/Footer'
import React, { useState, useEffect } from 'react'
import GrowInput from '../GrowInput'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import { toast } from 'react-toastify'

const Index = ({ setAdditionalComments, additionalComments, termsheetDetails }) => {
    const [commentType, setCommentType] = useState("select an Option")
    const [comment, setComment] = useState([

    ])
    const [text, setText] = useState("")
    const [isCommentEditable, setIsCommentEditable] = useState({})


    const [days, setDays] = useState({ day1: "", day2: "" })
    const [inputs, setInputs] = useState({ input1: "", input2: "", input3: "" })
    useEffect(() => {
        setDays({ day1: termsheetDetails?.paymentDueDate?.daysFromVesselDischargeDate, day2: termsheetDetails?.paymentDueDate?.daysFromBlDate })
        setInputs({ input1: termsheetDetails?.transactionDetails?.portOfDischarge, input2: "Dr. Amin", input3: "IGM" })
    }, [termsheetDetails])
    console.log(comment, 'comment')
    const allcomment = [

    ]
    useEffect(() => {
        additionalComments.map((comment, index) => {
            setIsCommentEditable(prev => ({ ...prev, [index]: false }))
        })
    }, [additionalComments])

    const manageCommentEditable = (index) => {
        setIsCommentEditable(prev => ({ ...prev, [index]: !isCommentEditable[index] }))
    }


    console.log(isCommentEditable, "termsheetDetails")

    const getInputValue = (name, value) => {
        console.log(name, value, "name,value")
        if (commentType == "Deliveries/Due Date/Payment") {
            if (name == "day1") {
                setDays({ ...days, day1: value })
            } else {
                setDays({ ...days, day2: value })
            }

        } else {
            if (name == "input1") {
                setInputs({ ...inputs, input1: value })
            } else if (name == "input2") {
                setInputs({ ...inputs, input2: value })
            }
            else {
                setInputs({ ...inputs, input3: value })
            }
        }
    }
    const textGenerator = () => {
        if (commentType == "Deliveries/Due Date/Payment") {
            let text = `${days.day1} days from the vessel/container(s) at discharge date at discharge port or ${days.day2} days from the from the BL date, whichever is earlier, through TT or LC (in case of LC all Bank charges to be borne by the Buyer).`
            return text
        } else {
            let text = `Cargo to be stored in Custom Bonded Warehouse at port of Discharge (${inputs.input1}) under CMA with ${inputs.input2}. ${inputs.input3} and Into Bond Bill of Entry” shall be filled by the lndo’s nominated party and all expenses/charges to be born and paid by the Buyer.`
            return text
        }
    }
    const [newComment, setNewComment] = useState("")
    const addComment = (type) => {
        if (commentType !== "Deliveries/Due Date/Payment" && commentType !== "Storage of Goods") {
            if (newComment == "") {
                let toastMessage = "Comment cannot be empty"
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })

                    return
                }

            }
            setAdditionalComments([...additionalComments, { additionalCommentType: commentType, comment: newComment }])
            setNewComment("")
            return
        }
        console.log(inputs, "commentType")
        if (commentType == "Deliveries/Due Date/Payment") {
            if (days.day1 == '' || days.day1 == undefined) {

                let toastMessage = 'add day 1'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })

                    return
                }
            }
            if (days.day2 == '' || days.day2 == undefined) {

                let toastMessage = 'add day 2'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })

                    return
                }
            }
        } else {
            if (inputs.input1 == '' || inputs.input1 == undefined) {

                let toastMessage = 'add input 1'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })

                    return
                }
            }
            if (inputs.input2 == '' || inputs.input2 == undefined) {

                let toastMessage = 'add input 2'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })

                    return
                }
            }
            if (inputs.input3 == '' || inputs.input3 == undefined) {

                let toastMessage = 'add input 3'
                if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })

                    return
                }
            }
        }
        setAdditionalComments([...additionalComments, { additionalCommentType: commentType, comment: textGenerator() }])
        setDays({ day1: "", day2: "" })
        setInputs({ input1: "", input2: "", input3: "" })

    }
    const deleteComment = (index) => {
        setAdditionalComments([...additionalComments.slice(0, index), ...additionalComments.slice(index + 1)])
    }
    const changeComment = (val, index) => {
        let tempArr = additionalComments
        tempArr.forEach((obj, i) => {
            if (i == index) {
                obj.comment = val

            }
        })
        setAdditionalComments(tempArr)
    }
    const getValue = () => {
        if (commentType == "Forex Hedging") {
            return termsheetDetails?.commercials?.forexHedging
        }
        return "None"
    }
    console.log(comment, "comment")
    return (
        <div className={`${styles.main} vessel_card main`}>
            <div className={`${styles.head_container} border_color align-items-center d-flex justify-content-between`} data-toggle="collapse" data-target="#additional" aria-expanded="true" aria-controls="additional">
                <h3 className={styles.heading}>Additional Comments</h3>
                <span>+</span>
            </div>
            <div id="additional" className="collapse" aria-labelledby="additional" data-parent="#additional">
                <div className={`${styles.dashboard_form} card-body`}>
                    <div className={`${styles.bill_landing}  border_color`}>
                        <div className={`${styles.vessel_card}`}>
                            <div>
                                <div className={`${styles.form_group} d-flex justify-content-between`} >
                                    <div className='d-flex' style={{ width: "460px" }}>
                                        <select className={`${styles.value} ${styles.customSelect} input form-control`}
                                            onChange={(e) => {
                                                setCommentType(e.target.value)
                                                setDays({ day1: termsheetDetails?.paymentDueDate?.daysFromVesselDischargeDate, day2: termsheetDetails?.paymentDueDate?.daysFromBlDate })
                                                setInputs({ input1: termsheetDetails?.transactionDetails?.portOfDischarge, input2: "Dr. Amin", input3: "IGM" })
                                            }
                                            } required>
                                            <option value='select an Option' disabled selected>Select an option</option>
                                            <option value="Deliveries/Due Date/Payment">Deliveries/Due Date/Payment</option>
                                            <option value="Storage of Goods">Storage of Goods</option>
                                            <option value="Forex Hedging">Forex Hedging</option>

                                        </select>
                                        <label className={`${styles.label} label_heading`}
                                            style={{ left: "20px" }}
                                        >Select</label>
                                        <img
                                            className={`${styles.arrow} image_arrow img-fluid`}
                                            src="/static/inputDropDown.svg"
                                            alt="Search"
                                        />
                                    </div>
                                   {commentType !== "select an Option"  && <img
                                        src="/static/add-btn.svg"
                                        className='img-fluid' alt="Add"
                                        onClick={() => { addComment() }}
                                    />}
                                </div>

                                <div className={`${styles.form_group}  `}>
                                    {commentType == "Deliveries/Due Date/Payment" ?
                                        <p>
                                        <GrowInput
                                         name={"day1"} 
                                           getValue={getInputValue}
                                            className={styles.grow_input}
                                            type="text"
                                            defaultValue={days.day1}
                                        /> days from the vessel/container(s) at discharge date at discharge port or <GrowInput
                                                name={"day2"} getValue={getInputValue}
                                                defaultValue={days.day2}
                                                className={styles.grow_input} type="text" /> days  from the BL date, whichever is earlier, through TT or LC (in case of LC all Bank charges to be borne by the Buyer).  </p>
                                        :
                                        null
                                    }
                                    {
                                        commentType == "Storage of Goods" ?
                                            <p>Cargo to be stored in Custom Bonded Warehouse at port of Discharge (
                                                <GrowInput name={"input1"}
                                                    defaultValue={inputs.input1}
                                                    getValue={getInputValue} className={styles.grow_input} type="text" />
                                                ) under CMA with 
                                                   <GrowInput 
                                                    name={"input2"}
                                                    defaultValue={inputs.input2}
                                                    getValue={getInputValue} 
                                                    className={styles.grow_input} 
                                                    type="text" />. 
                                                    
                                                    “<GrowInput
                                                    defaultValue={inputs.input3}
                                                    name={"input3"} getValue={getInputValue} className={styles.grow_input} type="text" /> and Into Bond Bill of Entry” shall be filled by the lndo’s nominated party and all expenses/charges to be born and paid by the Buyer.</p>
                                            : null
                                    }
                                    {
                                        commentType === "Forex Hedging"  ?
                                            <>
                                                <div className={`mb-2`}>
                                                    {commentType}:{getValue()}
                                                </div>
                                                <Form.Control className={`${styles.comment} text_area text_input border_color }
                                            
                                            `}
                                                    as="textarea"
                                                    rows={3}
                                                    //On Change TO BE Done

                                                    value={newComment}
                                                    onChange={(e) => {
                                                        setNewComment(e.target.value)
                                                    }}
                                                />
                                            </>
                                            : null
                                    }

                                    {commentType === 'select an Option' &&
                                        <div className={`mb-2`}>
                                            
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='m-0 border_color'/>
                <div className={`${styles.dashboard_form} card-body`}>

                    <h3 className={`${styles.comment_heading} font-weight-medium`}>Comments</h3>
                    {additionalComments && additionalComments.map((comment, index) => {
                        const commentindex = isCommentEditable[index]
                        return (
                            <div key={index} className={`${styles.rowGroup} ${index == 0 ? styles.noBorder : null} row border-color`}>
                                <div className={`${styles.form_group} col-md-3`} >
                                    <h4 className={styles.comment_name}>{comment.additionalCommentType}</h4>
                                </div>
                                <div className={`${styles.form_group} col-md-9`}>
                                    <div className={`${styles.comment_para}  d-flex justify-content-between`}>
                                        {/* <div className={styles.comment}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space</div>                   */}
                                        <Form.Control className={`${styles.comment} text_area text_input border_color ${!isCommentEditable[index] ? styles.nonEditable : null}
                                            
                                            `}
                                            as="textarea"
                                            rows={3}
                                            //On Change TO BE Done
                                            readOnly={!isCommentEditable[index]}
                                            defaultValue={comment.comment}
                                            onChange={(e) => {
                                                changeComment(e.target.value, index)
                                            }}
                                        />
                                        {
                                            !isCommentEditable[index] ?
                                                <img src="/static/mode_edit.svg"
                                                    className="img-fluid ml-2"
                                                    alt="Edit"
                                                    index={index}
                                                    onClick={() => manageCommentEditable(index)}
                                                />
                                                :
                                                <img src="/static/save-3.svg"
                                                    className="img-fluid ml-2"
                                                    alt="Edit"
                                                    index={index}
                                                    onClick={() => manageCommentEditable(index)}
                                                />
                                        }

                                        <img
                                            src="/static/delete 2.svg"
                                            className="img-fluid ml-2" alt="Delete"
                                            onClick={() => {
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
