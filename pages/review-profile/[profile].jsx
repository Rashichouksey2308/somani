/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import ReviewProfile from '../../src/components/ReviewProfile';
import CompanyReviewProfile from '../../src/components/CompanyReviewProfile';
import ApproveBar from '../../src/components/ApproveBar';
import OrderReview from '../../src/components/OrderReview';
import router from 'next/router';
import styles from './profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetBuyer, UpdateBuyer, GetOrderLeads } from '../../src/redux/registerBuyer/action';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';

const Index = () => {
  const dispatch = useDispatch();

  const { buyerList } = useSelector((state) => state.buyer);

  const [payloadData, setPayloadData] = useState({
    action: 'APPROVE',
  });

  const rejectPayloadData = {
    action: 'REJECT',
  };

  useEffect(() => {
    const orderId = sessionStorage.getItem('orderId');
    const companyId = sessionStorage.getItem('company');
    dispatch(GetBuyer({ companyId: companyId, orderId: orderId }));
    dispatch(GetOrderLeads());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPageName('review-queue'));
    dispatch(setDynamicName(buyerList?.companyName));
  }, [buyerList, dispatch]);
  const handleApprove = () => {
    const payload = { ...payloadData, orderReviewId: buyerList._id };

    dispatch(UpdateBuyer(payload));
    router.push('/credit-queue');
  };
  const handleReject = () => {
    const payload = { ...rejectPayloadData, orderReviewId: buyerList._id };

    dispatch(UpdateBuyer(payload));
    router.push('/leads');
  };

  const handleChange = (name, value) => {
    const newInput = { ...payloadData, [name]: value };
    setPayloadData(newInput);
  };

  return (
    <>
      <div className={`${styles.root_Container} `}>
        <div className={styles.wrapper}>
          <div className={`${styles.head} align-items-center`}>
            <img
              onClick={() => router.push('/leads')}
              className={`${styles.arrow} img-fluid mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow"
            />
            <h1 className={styles.heading}>{buyerList?.companyName}</h1>
          </div>
          <ReviewProfile reviewedProfile={buyerList} handleChange={handleChange} isAddedRow={true} />
          <CompanyReviewProfile />
          <OrderReview />
        </div>
        <div className={styles.approve_Container}>
          <ApproveBar handleApprove={handleApprove} handleReject={handleReject} button={'Reject'} button2={'Approve'} />
        </div>
      </div>
    </>
  );
};
export default Index;
