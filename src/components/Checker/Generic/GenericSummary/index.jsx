import React, { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styles from './index.module.scss';
import AdditionalComments from './AdditionalComments';
import AssociateBuyer from './AssociateBuyer';
import Buyer from './Buyer';
import CHA from './CHA';
import CMA from './CMA';
import DeliveryTerms from './DeliveryTerms';
import FinancingBank from './FinancingBank';
import PlaceOfExecution from './PlaceOfExecution';
import ProductSpecifications from './ProductSpecifications';
import Seller from './Seller';
import ShippingLine from './ShippingLine';
import Stevedore from './Stevedore';
import Supplier from './Supplier';
import { GetGenericDetails, UpdateGenericRemark } from 'redux/checker/action';
import Tooltip from '../../../Tooltip';
import Remark from '../../../Checker/Common/Remarks';

function Index() {
  
  const tableColumns = useMemo(() => [
    {
      Header: 'NAME',
      accessor: 'name',
      Cell: ({ row, value }) => <>
        <span className={`${row?.original?.email === row?.original?.history?.email && row?.original?.history?.name && row?.original?.history?.name !== value && styles.highlighted_field}`}>
          {value}
        </span>
        {row?.original?.email === row?.original?.history?.email && row?.original?.history?.name && row?.original?.history?.name !== value && <Tooltip data={row?.original?.history?.name || '--'} />}
      </>
    },
    {
      Header: 'Email',
      accessor: 'email',
      Cell: ({ row, value }) => {
        return <>
          <span className={`font-weight-bold ${row?.original?.history?.email && row?.original?.history?.email !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.history?.email && row?.original?.history?.email !== value && <Tooltip data={row?.original?.history?.email || '--'} />}
        </>
      }
    },
    {
      Header: 'Designation',
      accessor: 'designation',
      Cell: ({ row, value }) => {
        return <>
          <span className={`font-weight-bold ${row?.original?.email === row?.original?.history?.email && row?.original?.history?.designation && row?.original?.history?.designation !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.email === row?.original?.history?.email && row?.original?.history?.designation && row?.original?.history?.designation !== value && <Tooltip data={row?.original?.history?.designation || '--'} />}
        </>
      }
    },
    {
      Header: 'Phone No.',
      accessor: 'phoneNo',
      Cell: ({ row, value }) => {
        return <>
          <span className={`font-weight-bold ${row?.original?.email === row?.original?.history?.email && row?.original?.history?.phoneNo && row?.original?.history?.phoneNo !== value && styles.highlighted_field}`}>
            {value}
          </span>
          {row?.original?.email === row?.original?.history?.email && row?.original?.history?.phoneNo && row?.original?.history?.phoneNo !== value && <Tooltip data={row?.original?.history?.phoneNo || '--'} />}
        </>
      }
    },
  ]);

  const dispatch = useDispatch();
  const genericId = sessionStorage.getItem('checkerGenericId');
  const { genericDetails } = useSelector((state) => state.checker);

  useEffect(() => {
      if (genericId) {
          fetchInitialData();
      }
  }, [genericId]);

  const fetchInitialData = () => {
      dispatch(GetGenericDetails(`?genericId=${genericId}`));
  };

  const handleRemarkSubmit = async (remark, status) => {
    const payload = { genericId: genericId, status: status, remarks: remark }

    let code = await dispatch(UpdateGenericRemark(payload))
    if (code == 200) {
        let toastMessage = 'GENERIC UPDATED SUCCESSFULLY';
        if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.success(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        await Router.push('/checker/generic');
    }
}

  return (
    <div className={`${styles.tab}`}>
      <ProductSpecifications productSpecifications={genericDetails[0]?.productSpecifications} />
      <Supplier 
        tableColumns={tableColumns}
        supplierDetails={genericDetails[0]?.supplier} 
        supplierDetailsHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.supplier || [] }  
      />
      <Seller 
        tableColumns={tableColumns}
        sellerDetails={genericDetails[0]?.seller}
        sellerDetailsHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.seller || [] }  
      />
      <Buyer 
        tableColumns={tableColumns}
        buyerDetails={genericDetails[0]?.buyer}
        buyerDetailsHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.buyer || [] }  
      />
      <AssociateBuyer 
        tableColumns={tableColumns}
        associateBuyerDetails={genericDetails[0]?.associateBuyer}
        associateBuyerDetailsHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.associateBuyer || [] }  
      />
      <FinancingBank 
        financingBank={genericDetails[0]?.financingBank} 
        financingBankHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.financingBank || [] } 
      />
      <ShippingLine 
        shippingLine={genericDetails[0]?.shippingLine} 
        shippingLineHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.shippingLine || [] } 
      />
      <CHA 
        tableColumns={tableColumns}
        CHADetails={genericDetails[0]?.CHA}
        CHADetailsHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.CHA || [] }  
      />
      <Stevedore 
        tableColumns={tableColumns}
        stevedoreDetails={genericDetails[0]?.stevedore}
        stevedoreDetailsHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.stevedore || [] }  
      />
      <CMA
        tableColumns={tableColumns}
        CMADetails={genericDetails[0]?.CMA}
        CMADetailsHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.CMA || [] }
      />
      <DeliveryTerms 
        deliveryTerms={genericDetails[0]?.deliveryTerms}
        deliveryTermsHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.deliveryTerms || [] }
      />
      <PlaceOfExecution 
        placeOfExecution={genericDetails[0]?.placeOfExecution?.execution}
        placeOfExecutionHistory={genericDetails[0]?.history?.length > 0 && genericDetails[0]?.history[0]?.placeOfExecution?.execution || [] }
      />
      <AdditionalComments 
        additionalComments={genericDetails[0]?.additionalComments?.comments?.length > 0 && genericDetails[0]?.additionalComments?.comments}
        additionalCommentsHistory={genericDetails[0]?.history?.length && genericDetails[0]?.history[0]?.additionalComments?.comments?.length > 0 && genericDetails[0]?.history[0]?.additionalComments?.comments || []}
      />

      <Remark handleRemarkSubmit={handleRemarkSubmit} />

    </div>
  );
}
export default Index;
