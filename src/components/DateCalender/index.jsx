import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './index.module.scss'


const Index = () => {
     const [startDate, setStartDate] = useState(new Date());

  return (
    <>
     <DatePicker selected={startDate} 
        dateFormat="dd/MM/yyyy"
        className={`${styles.input_field} input form-control`}
        onChange={(startDate) => setStartDate(startDate)} />
        <label className={`${styles.label_heading} label_heading`}>
            Release Order Date<strong className="text-danger">*</strong></label> 
           
        </>
  )
}

export default Index
