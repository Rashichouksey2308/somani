/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useDispatch } from 'react-redux';
import { ViewDocument } from 'redux/ViewDoc/action';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';

function AddressComponent({
  Title,
  address,
  number,
  callingCode,
  branch,
  gstIn,
  email,
  deleteComponent,
  index,
  editAddress,
  orderDetail,
  path,
  communicationModeYes,
}) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.address_card} value background1 border_color`}>
      <div className="d-flex justify-content-between w-100">
        <div className="w-100">
          <div className={`${styles.address_values} w-100 d-flex justify-content-between`}>
            <div className={`d-flex justify-content-between align-items-center`}>
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
            </div>
            <div className='pb-3'>
              <img
                className={`${styles.edit_image} ml-2 mr-3`}
                src="/static/mode_edit.svg"
                alt="edit"
                onClick={() => {
                  editAddress(index);
                }}
              />

              {index !== 0 && (
                <img
                  onClick={() => {
                    deleteComponent(index);
                  }}
                  src="/static/delete 2.svg"
                  className={`${styles.delete_image}`}
                  alt="delete"
                />
              )}
            </div>
          </div>
          <div className={`${styles.address_values}`}>
            <p className="pt-3">{address}</p>
            <p className="pt-3">
              <span>Email: </span>
              {email}
            </p>
            <p>
              <span>Phone Number:</span>
              {callingCode} {number}
            </p>
            <p>
              <span>Branch: </span>
              {branch}
            </p>
            <div className="d-flex">
              <p>
                {' '}
                <span>GSTIN: </span>
                {gstIn}
              </p>
              {path ? (
                <span
                  onClick={() => dispatch(ViewDocument({ order: orderDetail?._id, path: path }))}
                  className={styles.view_btn}
                  style={{ cursor: 'pointer' }}
                >
                  View
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressComponent;
