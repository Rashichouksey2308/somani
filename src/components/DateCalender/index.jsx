import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.scss';
import moment from 'moment';

const Index = ({
  labelName,
  isRequired,
  saveDate,
  name,
  defaultDate,
  index,
  dateFormat,
  setStartDateFrom,
  startFrom,
  disabled,
  small,
  maxDate,
  reset,
  ref,
  noDate,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [lastDate, setlastDate] = useState(null);
  const [maxDate1, setMaxDate] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    if (startFrom == 'noLimit') {
      setlastDate(null);
    } else {
      if (startFrom) {
        setlastDate(moment(startFrom, 'DD-MM-YYYY').toDate());
      } else {
        setlastDate(new Date());
      }
    }
  }, [startFrom]);
  useEffect(() => {
    if (maxDate) {
      setMaxDate(moment(maxDate, 'DD-MM-YYYY').toDate());
    }
  }, [maxDate]);

  useEffect(() => {
    if (reset) {
      setStartDate(null);
    }
  }, [reset]);
 
  return (
    <>
      <div className="vessel_card w-100">
        <DatePicker
          selected={
            startDate == null || startDate == ''
              ? defaultDate == undefined || defaultDate == ''
                ? ''
                : moment(defaultDate).toDate()
              : startDate
          }
          ref={ref}
          dateFormat={dateFormat ? dateFormat : 'dd-MM-yyyy'}
          name={name}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          portalId="root-portal"
          className={`${styles.input_field} input form-control ${small ? styles.input_small : ''}`}
          onChange={(startDate) => {
            setStartDate(startDate);
            saveDate(startDate, name, index);
            if (setStartDateFrom) {
              setStartDateFrom(startDate, name);
            }
          }}
          minDate={lastDate}
          maxDate={maxDate1}
          autoComplete="off"
          disabled={disabled ? disabled : false}
        />
        {labelName ? (
          <label className={`${styles.label_heading} label_heading`}>
            {labelName}

            {!isRequired ? <strong className="text-danger">*</strong> : ''}
          </label>
        ) : null}
      </div>
    </>
  );
};

export default Index;
