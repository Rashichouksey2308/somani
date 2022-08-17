/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'

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
}) {
  return (
    <div className={`${styles.address_card} value background1`}>
      <div className="d-flex justify-content-between w-100">
        <div className="w-100">
          <div
            className={`${styles.address_values} w-100 d-flex justify-content-between`}
          >
            <h5>{Title}</h5>
            <div>
              <img
                className={`${styles.edit_image} img-fluid mr-3`}
                src="/static/mode_edit.svg"
                alt="edit"
                onClick={() => {
                  console.log('index', index)
                  editAddress(index)
                }}
              />
              <img
                onClick={() => {
                  // console.log('index', index)
                  deleteComponent(index)
                }}
                src="/static/delete 2.svg"
                className="img-fluid"
                alt="delete"
              />
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
              <span className={styles.view_btn}>View</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressComponent
