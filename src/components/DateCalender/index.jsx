import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './index.module.scss'


const Index = ({labelName, saveDate, name, value}) => {
     const [startDate, setStartDate] = useState(value);

  return (
    <>
     <DatePicker selected={startDate}
        dateFormat="dd/MM/yyyy"
        name={name}
        className={`${styles.input_field} input form-control`}
        onChange={(startDate) => { saveDate(startDate, name)}} />
        <label className={`${styles.label_heading} label_heading`}>
          {labelName}<strong className="text-danger">*</strong></label> 
           
        </>
  )
}

export default Index
