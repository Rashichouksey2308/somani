import React from 'react';
import styles from './index.module.scss';
import AdditionslComments from './AdditionalComments';
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

export default function index() {
  return (
    <div className={`${styles.tab}`}>
      <ProductSpecifications />
      <Supplier />
      <Seller />
      <Buyer />
      <AssociateBuyer />
      <FinancingBank />
      <ShippingLine />
      <CHA />
      <Stevedore />
      <CMA />
      <DeliveryTerms />
      <PlaceOfExecution />
      <AdditionslComments />
    </div>
  );
}
