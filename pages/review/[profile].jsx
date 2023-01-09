/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import ReviewProfile from '../../src/components/ReviewProfile';
import CompanyProfile from '../../src/components/CompanyProfile';
import ApproveBar from '../../src/components/ApproveBar';
import OrderProfile from '../../src/components/OrderProfile';
import Router from 'next/router';
import styles from './profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetBuyer, UpdateBuyer, GetAllBuyer } from '../../src/redux/registerBuyer/action';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import { toast } from 'react-toastify';
import { settingSidebar } from '../../src/redux/breadcrumb/action';
import { getCommodities, getCountries, getDocuments, getPorts } from '../../src/redux/masters/action';
import { handleErrorToast } from '@/utils/helpers/global';

const Index = () => {
  const dispatch = useDispatch();

  const { buyerList } = useSelector((state) => state.buyer);
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getPorts());
    dispatch(getCommodities());
    dispatch(getDocuments());
  }, []);
  const { getPortsMasterData } = useSelector((state) => state.MastersData);
  const { getCountriesMasterData } = useSelector((state) => state.MastersData);
  const { getCommoditiesMasterData } = useSelector((state) => state.MastersData);
  const { allBuyerList } = useSelector((state) => state.buyer);

  const [fields, setFields] = useState([
    {
      isEdit: true,
    },
    {
      isEdit: true,
    },
    {
      isEdit: true,
    },
    {
      isEdit: true,
    },
    {
      isEdit: true,
    },
    {
      isEdit: true,
    },
    {
      isEdit: true,
    },
    {
      isEdit: true,
    },
  ]);

  const [payloadData, setPayloadData] = useState({
    action: 'APPROVE',
  });

  const rejectPayloadData = {
    action: 'REJECT',
  };

  useEffect(() => {
    const orderId = sessionStorage.getItem('orderID');
    const companyId = sessionStorage.getItem('company');
    dispatch(GetBuyer({ companyId: companyId, orderId: orderId }));
    dispatch(GetAllBuyer(`?company=${companyId}&limit=${6}`));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPageName('review-queue'));
    dispatch(setDynamicName(buyerList?.companyName));
  }, [buyerList, dispatch]);

  const validation = () => {
    if (!buyerList?.commodity?.apiResponse) {
      if (!payloadData.hasOwnProperty('commodity')) {
        handleErrorToast('Please select commodity');
        return false;
      }
    } else if (!buyerList?.turnOver?.apiResponse) {
      if (!payloadData.hasOwnProperty('turnOver') || !payloadData.turnOver) {
        handleErrorToast('Please add turnOver');
        return false;
      }
    } else if (!buyerList?.orderValue?.apiResponse) {
      if (!payloadData.hasOwnProperty('orderValue') || !payloadData.orderValue) {
        handleErrorToast('Please add order value');
        return false;
      }
    } else if (!buyerList?.portOfDischarge?.apiResponse) {
      if (!payloadData.hasOwnProperty('portOfDischarge')) {
        handleErrorToast('Please add port of discharge');
        return false;
      }
    } else if (!buyerList?.transactionType?.apiResponse) {
      if (!payloadData.hasOwnProperty('transactionType')) {
        handleErrorToast('Please select transaction type');
        return false;
      }
    } else if (!buyerList?.typeOfBusiness?.apiResponse) {
      if (!payloadData.hasOwnProperty('typeOfBusiness')) {
        handleErrorToast('Please select type of business');
        return false;
      }
    }  else if (!buyerList?.countryOfOrigin?.apiResponse) {
      if (!payloadData.hasOwnProperty('countryOfOrigin')) {
        handleErrorToast('Please select a country of origin');
        return false;
      }
    } else if (!buyerList?.ExpectedDateOfShipment?.apiResponse) {
      if (!payloadData.hasOwnProperty('ExpectedDateOfShipment')) {
        handleErrorToast('Please select a Expected Date Of Shipment');
        return false;
      }
    }
    return true
  };

  const handleApprove = async () => {
    if(!validation()) return
    const tempData = payloadData;
    if (tempData.turnOver) {
      tempData.turnOver = Number(payloadData.turnOver) * 10000000;
    }
    if (tempData.turnOver) {
      tempData.orderValue = Number(payloadData.orderValue) * 10000000;
    }
    const payload = { ...payloadData, orderReviewId: buyerList._id };

    const code = await dispatch(UpdateBuyer(payload));
    if (code == 200) {
      dispatch(settingSidebar('Leads', 'Credit Queue', 'Credit Queue', '1'));
      await Router.push('/review');
    }
  };

  const handleReject = () => {
    const payload = { ...rejectPayloadData, orderReviewId: buyerList._id };

    dispatch(UpdateBuyer(payload));
    Router.push('/leads');
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
              onClick={() => Router.push('/review-queue')}
              className={`${styles.arrow} img-fluid mr-2 image_arrow`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow"
            />
            <h1 className={styles.heading}>{buyerList?.companyName}</h1>
          </div>
          <ReviewProfile
            reviewedProfile={buyerList}
            handleChange={handleChange}
            payloadData={payloadData}
            setFields={setFields}
            fields={fields}
            setPayloadData={setPayloadData}
            country={getCountriesMasterData}
            port={getPortsMasterData}
            commodity={getCommoditiesMasterData}
            allBuyerList={allBuyerList}
          />
          <CompanyProfile />
          <OrderProfile />
        </div>
        <div className={styles.approve_Container}>
          <ApproveBar handleApprove={handleApprove} handleReject={handleReject} button={'Reject'} button2={'Approve'} />
        </div>
      </div>
    </>
  );
};
export default Index;
