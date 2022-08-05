import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './index.module.scss'
import moment from 'moment'

const Index = ({ labelName, saveDate, name, defaultDate ,index}) => {
  const [startDate, setStartDate] = useState(null)
  const [lastDate, setlastDate] = useState(new Date())
  console.log(labelName, saveDate, name, defaultDate ,index,'momentDate')

  return (
    <>
      <DatePicker 
        selected={
          defaultDate
            ? moment(defaultDate).toDate() : startDate
        }
        dateFormat="dd/MM/yyyy"
        name={name}
        className={`${styles.input_field} input form-control`}
        onChange={(startDate) => {
          setStartDate(startDate)
          saveDate(startDate, name, index)
          console.log(startDate, name,'Event')
        }}
       // minDate={lastDate}
      />
      <label className={`${styles.label_heading} label_heading`}>
        {labelName}
        <strong className="text-danger">*</strong>
      </label>
    </>
  )
}

export default Index