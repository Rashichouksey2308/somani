/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import ReviewProfile from '../../src/components/ReviewProfile';
import CompanyProfile from '../../src/components/CompanyProfile';
import ApproveBar from '../../src/components/ApproveBar';
import OrderProfile from '../../src/components/OrderProfile';
import Router from 'next/router';
import router from 'next/router';
import styles from './profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetBuyer, UpdateBuyer } from '../../src/redux/registerBuyer/action';
import { setDynamicName, setPageName } from '../../src/redux/userData/action';
import { toast } from 'react-toastify';
import { settingSidebar } from '../../src/redux/breadcrumb/action';
import { getCommodities, getCountries, getDocuments, getPorts } from '../../src/redux/masters/action';

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
  const { getDocumentsMasterData } = useSelector((state) => state.MastersData);

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

  const [rejectPayloadData, setRejectPayloadData] = useState({
    action: 'REJECT',
  });

  useEffect(() => {
    const orderId = sessionStorage.getItem('orderID');
    const companyId = sessionStorage.getItem('company');
    dispatch(GetBuyer({ companyId: companyId, orderId: orderId }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPageName('review-queue'));
    dispatch(setDynamicName(buyerList?.companyName));
  }, [buyerList, dispatch]);

  const handleToast = (toastMessage) => {
    if (!toast.isActive(toastMessage.toUpperCase())) {
      return toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
    }
  };

  const handleApprove = async () => {
    if (!buyerList?.commodity?.apiResponse) {
      if (!payloadData.hasOwnProperty('commodity')) return handleToast('Please select commodity');
    }
    if (!buyerList?.turnOver?.apiResponse) {
      if (!payloadData.hasOwnProperty('turnOver') || !payloadData.turnOver) {
        return handleToast('Please add turnOver');
      }
    }
    if (!buyerList?.countryOfOrigin?.apiResponse) {
      if (!payloadData.hasOwnProperty('countryOfOrigin')) {
        return handleToast('Please select country');
      }
    }

    if (!buyerList?.orderValue?.apiResponse) {
      if (!payloadData.hasOwnProperty('orderValue') || !payloadData.orderValue) {
        return handleToast('Please add order value');
      }
    }
    if (!buyerList?.portOfDischarge?.apiResponse) {
      if (!payloadData.hasOwnProperty('portOfDischarge')) {
        return handleToast('Please add port of discharge');
      }
    }

    if (!buyerList?.transactionType?.apiResponse) {
      if (!payloadData.hasOwnProperty('transactionType')) {
        return handleToast('Please select transaction type');
      }
    }
 


    if (!buyerList?.typeOfBusiness?.apiResponse) {
      if (!payloadData.hasOwnProperty('typeOfBusiness')) {
        return handleToast('Please select type of business');
      }
    }
    if (!buyerList?.orderValue?.apiResponse) {
      if (!payloadData.hasOwnProperty('orderValue')) {
        return handleToast('Please fill order Value');
      }
    }

    if (!buyerList?.countryOfOrigin?.apiResponse) {
      if (!payloadData.hasOwnProperty('countryOfOrigin')) {
        return handleToast('Please select a country of origin');
      }
    }
    if (!buyerList?.portOfDischarge?.apiResponse) {
      if (!payloadData.hasOwnProperty('portOfDischarge')) {
        return handleToast('Please select a port Of Discharge');
      }
    }
    if (!buyerList?.ExpectedDateOfShipment?.apiResponse) {
      if (!payloadData.hasOwnProperty('ExpectedDateOfShipment')) {
        return handleToast('Please select a Expected Date Of Shipment');
      }
    }

    let tempData = payloadData;
    if (tempData.turnOver) {
      tempData.turnOver = Number(payloadData.turnOver) * 10000000;
    }
    if (tempData.turnOver) {
      tempData.orderValue = Number(payloadData.orderValue) * 10000000;
    }
    const payload = { ...payloadData, orderReviewId: buyerList._id };

    // let code = await dispatch(UpdateBuyer(payload));
    if (code == 200) {
      dispatch(settingSidebar('Leads', 'Credit Queue', 'Credit Queue', '1'));
      await Router.push('/review');
    }
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
