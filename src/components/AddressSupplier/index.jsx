/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';

function AddressComponent({
  index,
  Title,
  address,
  number,
  callingCode,
  alterNumber,
  alterCallingCode,
  country,
  email,
  deleteComponent,
  editAddress,
  pinCode,
}) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.address_card} value background1 border_color`}>
      <div className="d-flex justify-content-between w-100">
        <div className="w-100">
          {/* <div
              className={`d-flex justify-content-between align-items-center`}
            >
              {communicationModeYes == true ? (
                <Form.Check
                  className={styles.radio}
                  inline
                  name="group1"
                  type={'checkbox'}
                  checked={communicationModeYes == true ? true : false}
                />
              ) : null}

              <h5 className={`mb-0`}>{Title}</h5>
            </div> */}
          <div className="text-right">
            <img
              className={`${styles.edit_image} ml-2 mr-3`}
              src="/static/mode_edit.svg"
              alt="edit"
              onClick={() => {
                console.log('index', index);
                editAddress(index);
              }}
            />
            <img
              onClick={() => {
                // console.log('index', index)
                deleteComponent(index);
              }}
              src="/static/delete 2.svg"
              className={`${styles.delete_image}`}
              alt="delete"
            />
          </div>
          <div className={`${styles.address_values}`}>
            <p className="">
              {address} {', '} {country} {', '} {pinCode}
            </p>
            {/* <p className="pt-3">{}</p>
            <p className="pt-3">{pinCode}</p> */}
            <p className="pt-3">
              <span>Emails: </span>
              {email?.join(', ')}
            </p>
            <p>
              <span>Phone Number:</span>
              {callingCode} {number}
            </p>
            <p>
              <span>Alternate Phone Number:</span>
              {alterCallingCode} {alterNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressComponent;
