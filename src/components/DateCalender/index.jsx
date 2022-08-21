import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './index.module.scss'
import moment from 'moment'

const Index = ({
  labelName,
  saveDate,
  name,
  defaultDate,
  index,
  dateFormat,
  setStartDateFrom,
  startFrom
}) => {
  const [startDate, setStartDate] = useState(null)
  const [lastDate, setlastDate] = useState()
  // console.log(moment(defaultDate).toDate(), 'momentDate')
  useEffect(() => {
    if(startFrom){
      console.log("in start DAte")
      setlastDate(moment(startFrom,"DD-MM-YYYY").toDate())
    }else{
      setlastDate(new Date())
    }
   
  }, [startFrom])
  // console.log(lastDate,"lastDate",startFrom,)
  return (
    <>
      <div className="vessel_card w-100">
        <DatePicker
          selected={
            startDate == null ? moment(defaultDate).toDate() : startDate
          }
          dateFormat={dateFormat ? dateFormat : 'dd-MM-yyyy'}
          name={name}
          onKeyDown={(e) => {
            e.preventDefault()
          }}
          className={`${styles.input_field} input form-control`}
          onChange={(startDate) => {
            setStartDate(startDate)
            saveDate(startDate, name, index)
            if(setStartDateFrom){
              setStartDateFrom(startDate,name)
            }
            console.log(startDate, name, 'Event')
          }}
           minDate={lastDate}
        />
        <label className={`${styles.label_heading} label_heading`}>
          {labelName}
          <strong className="text-danger">*</strong>
        </label>
      </div>
    </>
  )
}

export default Index
