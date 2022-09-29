/* eslint-disable @next/next/no-img-element */
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
import { setPageName, setDynamicName } from '../../src/redux/userData/action'
import { GetBuyer } from '../../src/redux/registerBuyer/action'
import { toast } from 'react-toastify'
const Index = () => {
  const dispatch = useDispatch()

  const { buyerList } = useSelector((state) => state.buyer)
  console.log(
    '🚀 ~ file: [profile].jsx ~ line 19 ~ Index ~ buyerList',
    buyerList,
  )

  const [payloadData, setPayloadData] = useState({
    action: 'APPROVE',
  })

  const [rejectPayloadData, setRejectPayloadData] = useState({
    action: 'REJECT',
  })

  useEffect(() => {
    const orderId = sessionStorage.getItem('orderID')
    const companyId = sessionStorage.getItem('company')
    dispatch(GetBuyer({ companyId: companyId, orderId: orderId }))
  }, [dispatch])

  useEffect(() => {
    dispatch(setPageName('review-queue'))
    dispatch(setDynamicName(buyerList?.companyName))
  }, [buyerList, dispatch])
  const handleApprove = () => {
    if (!buyerList?.commodity?.apiResponse) {
      if (!payloadData.hasOwnProperty('commodity')) {
        let toastMessage = 'Please select commodity'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        return
      }
    }
    if (!buyerList?.countryOfOrigin?.apiResponse) {
      if (!payloadData.hasOwnProperty('countryOfOrigin')) {
        let toastMessage = 'Please select country'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        return
      }
    }
    if (!buyerList?.orderValue?.apiResponse) {
      if (!payloadData.hasOwnProperty('orderValue')) {
        let toastMessage = 'Please add order value'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        return
      }
    }
    if (!buyerList?.portOfDischarge?.apiResponse) {
      if (!payloadData.hasOwnProperty('portOfDischarge')) {
        let toastMessage = 'Please add port of discharge'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        return
      }
    }

    if (!buyerList?.transactionType?.apiResponse) {
      if (!payloadData.hasOwnProperty('transactionType')) {
        let toastMessage = 'Please select transaction type'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        return
      }
    }
    if (!buyerList?.turnOver?.apiResponse) {
      if (!payloadData.hasOwnProperty('turnOver')) {
        let toastMessage = 'Please add turnOver'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        return
      }
    }
    if (!buyerList?.typeOfBusiness?.apiResponse) {
      if (!payloadData.hasOwnProperty('typeOfBusiness')) {
        let toastMessage = 'Please select type of business'
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
        }
        return
      }
    }

    const payload = { ...payloadData, orderReviewId: buyerList._id }

    dispatch(UpdateBuyer(payload))
    router.push('/review')
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
      <div className={`${styles.root_Container} `}>
        <div className={styles.wrapper}>
          <div className={`${styles.head} align-items-center`}>
            <img
              onClick={() => Router.push('/leads')}
              className={`${styles.arrow} img-fluid mr-2 image_arrow`}
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
            button={'Reject'}
            button2={'Approve'}
          />
        </div>
      </div>
    </>
  )
}
export default Index
