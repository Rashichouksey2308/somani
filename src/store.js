import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import config from 'config';
import AuthReducer from 'redux/authentication/reducer';
import BuyerReducer from 'redux/registerBuyer/reducer';
import UserReducer from 'redux/userData/reducer';
import { sidebar } from 'redux/toggleState/Reducer/reducer';
import OrderReducer from 'redux/buyerProfile/reducer';
import MarginMoneyReducer from 'redux/marginMoney/reducer';
import CompanyReducer from 'redux/companyDetail/reducer';
import CreditReducer from 'redux/creditQueueUpdate/reducer';
import GenericReducer from './redux/generic/reducer';
import NewOrderReducer from 'redux/newOrder/reducer';
import LcModuleReducer from 'redux/lcModule/reducer';
import VesselReducer from 'redux/vessel/reducer';
import InsuranceReducer from 'redux/insurance/reducer';
import ForwardHedgingReducer from 'redux/ForwardHedging/reducer';
import TransitDetailsReducer from 'redux/TransitDetails/reducer';
import InspectionReducer from 'redux/Inspections/reducer';
import CustomClearanceReducer from 'redux/CustomClearance&Warehousing/reducer';
import ReleaseOrderReducer from 'redux/release&DeliveryOrder/reducer';
import LiftingReducer from 'redux/Lifting/reducer';
import ViewDocumentReducer from 'redux/ViewDoc/reducer';
import GetCompanyPanReducer from 'redux/GetPanGst/reducer';
import BreadcrumbReducer from 'redux/breadcrumb/reducer';
import AnalyticsReducer from 'redux/analytics/reducer';
import LoadReducer from 'redux/Loaders/reducer';
import ShareDocumentReducer from 'redux/shareDoc/reducer';
import MastersReducer from 'redux/masters/reducer';
import McaReportReducer from 'redux/mcaReport/reducer';
import SupplierReducer from 'redux/supplier/reducer';
import CheckerReducer from 'redux/checker/reducer';
import CommodityReducer from 'redux/commodity/reducer';
import InternalCompaniesReducer from 'redux/internalCompanies/reducer';
import PortsReducer from 'redux/ports/reducer';
import CountryReducer from 'redux/country/reducer';
import DocumentReducer from '../src/redux/documentMaster/reducer';
import GoNoGoReducer from 'redux/goNoGo/reducer';
import VendorReducer from 'redux/vendor/reducer';
import CurrencyReducer from 'redux/currency/reducer';
import TdsSectionReducer from 'redux/tdsSectionDetail/reducer';
import SACReducer from 'redux/sac/reducer'
import IIAGLLedgerReducer from 'redux/IIAGLLedger/reducer'

export const createStore = (preloadedState) => {
  const middlewares = [];

  if (config.env === 'development' && typeof window !== 'undefined') {
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    });

    middlewares.push(logger);
  }

  return configureStore({
    reducer: {
      auth: AuthReducer,
      buyer: BuyerReducer,
      sidebar: sidebar,
      order: OrderReducer,
      user: UserReducer,
      marginMoney: MarginMoneyReducer,
      companyDetails: CompanyReducer,
      review: CreditReducer,
      placeOrder: NewOrderReducer,
      generic: GenericReducer,
      lc: LcModuleReducer,
      vessel: VesselReducer,
      insurance: InsuranceReducer,
      ForwardHedging: ForwardHedgingReducer,
      TransitDetails: TransitDetailsReducer,
      Inspection: InspectionReducer,
      Custom: CustomClearanceReducer,
      Release: ReleaseOrderReducer,
      Lifting: LiftingReducer,
      ViewDoc: ViewDocumentReducer,
      GetPan: GetCompanyPanReducer,
      Breadcrumb: BreadcrumbReducer,
      analytics: AnalyticsReducer,
      Load: LoadReducer,
      shareDoc: ShareDocumentReducer,
      MastersData: MastersReducer,
      mcaReport: McaReportReducer,
      supplier: SupplierReducer,
      checker: CheckerReducer,
      commodity: CommodityReducer,
      internalCompanies: InternalCompaniesReducer,
      ports: PortsReducer,
      country: CountryReducer,
      document: DocumentReducer,
      Gng: GoNoGoReducer,
      Vendor: VendorReducer,
      Currency: CurrencyReducer,
      TDSSection:TdsSectionReducer,
      SAC:SACReducer,
      IIAGLLedger:IIAGLLedgerReducer
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
    devTools: config.env === 'development',
  });
};

let store;
const initializeStore = (preloadedState) => {
  let _store = store || createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  if (typeof window === 'undefined') {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  return store;
};

export const useStore = (preloadedState) => initializeStore(preloadedState);

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;
