import React, { useState, useEffect } from 'react'
import ReviewProfile from '../../src/components/ReviewProfile'
import CompanyProfile from '../../src/components/CompanyProfile'
import ApproveBar from '../../src/components/ApproveBar'
import OrderProfile from '../../src/components/OrderProfile'
import Router from 'next/router'
import styles from './profile.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateBuyer } from '../../src/redux/registerBuyer/action'
import router from 'next/router'

const index = () => {
  const dispatch = useDispatch()

  const { buyerList } = useSelector((state) => state.buyer)

  const [payloadData, setPayloadData] = useState({
    action: 'APPROVE',
  })

  const [rejectPayloadData, setRejectPayloadData] = useState({
    action: 'REJECT',
  })

  const handleApprove = () => {
    const payload = { ...payloadData, orderReviewId: buyerList._id }

    dispatch(UpdateBuyer(payload))
    router.push('/credit-queue')
  }
  const handleReject = () => {
    const payload = { ...rejectPayloadData, orderReviewId: buyerList._id }

    dispatch(UpdateBuyer(payload))
    router.push('/leads')
  }

  const handleChange = (name, value) => {
    const newInput = { ...payloadData, [name]: value }
    setPayloadData(newInput)
  }

  return (
    <>
      <div className={`${styles.root_Container} card`}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <img
              className={`${styles.arrow} img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow"
            />
            <h1 className={styles.heading}>{buyerList?.companyName}</h1>
          </div>
          <ReviewProfile
            reviewedProfile={buyerList}
            handleChange={handleChange}
          />
          <CompanyProfile />
          <OrderProfile />
        </div>
        <div className={styles.approve_Container}>
          <ApproveBar
            handleApprove={handleApprove}
            handleReject={handleReject}
            button={'Save'}
            button2={'Preview'}
          />
        </div>
      </div>
    </>
  )
}
export default index
