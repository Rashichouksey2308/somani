// import  Router  from 'next/router'
import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

function index({
  handleApprove,
  handleReject,
  downLoadButtonName,
  isPrevious,
  leftButtonName,
  rightButtonName,
  isApprove,
  handleUpdate,
}) {
  return (
    <div className={`${styles.root} card`}>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div
          className={`${styles.reject} `}
          onClick={() => {
            handleReject()
          }}
        >
          <span className={`mr-2`}>{downLoadButtonName}</span>
          <Image
            src="/static/file_download.svg"
            alt="Picture of the author"
            width={14}
            height={17}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        {isPrevious ? (
          <div
            className={`${styles.reject} ml-3`}
            onClick={() => {
              handleUpdate()
            }}
          >
            <span>{leftButtonName}</span>
          </div>
        ) : null}
        {isApprove ? (
          <div
            className={`${styles.approve} ml-3`}
            onClick={() => {
              handleApprove()
            }}
          >
            <span>{rightButtonName}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default index
