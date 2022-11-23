import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Form } from 'react-bootstrap';
import Buyer from '../AggrementContent/buyer';
import AssociateBuyer from '../AggrementContent/associateBuyer';
import CHA from '../AggrementContent/cha';
import CMA from '../AggrementContent/cma';
import Finance from '../AggrementContent/finance';
import Manufecture from '../AggrementContent/manufecture';
import ProductSpecification from '../AggrementContent/productSpecification';
import AddtionalComments from '../AggrementContent/addtionalComments';
import PlaceOfExecutition from '../AggrementContent/placeOfExecutition';

import Shipping from '../AggrementContent/shipping';
import Seller from '../AggrementContent/seller';

import Stevedore from '../AggrementContent/stevedore';
import Thirdparty from '../AggrementContent/thirdparty';
import { useDispatch, useSelector } from 'react-redux';
import { updateGenericData } from '../../redux/generic/actionsType';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../../../src/utils/endpoints';
import Cookies from 'js-cookie';
import Axios from 'axios';
import _get from 'lodash/get';
import { getInternalCompanies, getVendors,getPincodes } from '../../redux/masters/action';
import {gSTINValidation} from '../../utils/helper'
import Router from 'next/router';
function Index(props) {
  const dispatch = useDispatch();

  const [apiData, setApiData] = useState([]);
  const [active, setActive] = useState('Product Specifications');
  const [multiPart, setMultiPart] = useState(false);
  const [multiPartValue, setMultiPartValue] = useState('Manufacturer');
  const [saveData, setSaveData] = useState(false);
  const [submitData, setSubmitData] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [sameAsCHA, setSameAsCHA] = useState(true);
  const { companyData } = useSelector((state) => state.companyDetails);
  const { orderList } = useSelector((state) => state.buyer);

  useEffect(() => {
    if (window) {
      props.setDate(localStorage.getItem('timeGenericUpdated'));
    }
  });
  useEffect(() => {
    dispatch(getVendors());

    dispatch(getInternalCompanies());
  }, []);
  const { getVendorsMasterData } = useSelector((state) => state.MastersData);
  const { getBanksMasterData } = useSelector((state) => state.MastersData);
  const { getBranchesMasterData } = useSelector((state) => state.MastersData);
  const { getInternalCompaniesMasterData } = useSelector((state) => state.MastersData);
  
  const getVendor=(value)=>{
   getVendorsMasterData
  }
  const [chaDetails,setChaDetails]=useState({})
  const [cmaDetails,setCmaDetails]=useState({})
  const [steveDoreDetails,setsteveDoreDetails]=useState({})
  useEffect(() => {
    if(getVendorsMasterData?.length>0){
      let cmaAddress=[]
      let cmaAutorized=[]
      let cmaOptions=[]
      let cmaName=''
      let cmagstin=[]

      let chaAddress=[]
      let chaAutorized=[]
      let chaOptions=[]
      let chaName=''
      let chagstin=[]

      let stevedoreAddress=[]
      let stevedoreAutorized=[]
      let stevedoreOptions=[]
      let stevedoreName=''
      let stevedoregstin=[]
      
      getVendorsMasterData.filter((val,index)=>{
        if(val.vendorDetails.vendor=="CMA"){
          console.log(val,"ssasdasda")
           val.keyAddresses.forEach((add,index)=>{
             if(add.address!=="" && add.address!== undefined){
               cmaAddress.push(add)
               cmagstin.push(add.gstin)
            }
               
           })
           val.keyContactPerson.forEach((sig,index)=>{
            console.log(sig.authorizedSignatory,"sig.authorizedSignatory")
              if(sig.authorizedSignatory!=="No"){
                  cmaAutorized.push(sig)
                  cmaOptions.push(sig.name)
              }
               
           })
           cmaName=val.vendorDetails.companyName
        }
         if(val.vendorDetails.vendor=="CHA"){
          console.log(val,"ssasdasda")
           val.keyAddresses.forEach((add,index)=>{
             if(add.address!=="" && add.address!== undefined){
               chaAddress.push(add)
               chagstin.push(add.gstin)
            }
               
           })
           val.keyContactPerson.forEach((sig,index)=>{
              if(sig.authorizedSignatory!=="No"){
                  chaAutorized.push(sig)
                  chaOptions.push(sig.name)
              }
               
           })
           chaName=val.vendorDetails.companyName
        }
         if(val.vendorDetails.vendor=="Stevedore"){
          console.log(val,"ssasdasda")
           val.keyAddresses.forEach((add,index)=>{
            if(add.address!=="" && add.address!== undefined){
               stevedoreAddress.push(add)
               stevedoregstin.push(add.gstin)
            }
               
           })
           val.keyContactPerson.forEach((sig,index)=>{
              if(sig.authorizedSignatory!=="No"){
                  stevedoreAutorized.push(sig)
                  stevedoreOptions.push(sig.name)
              }
               
           })
           stevedoreName=val.vendorDetails.companyName
        }
      })
      let tempCma={
        name:cmaName,
        options:cmaOptions||[],
        signatory:cmaAutorized||[],
        address:cmaAddress||[],
        gstin:cmagstin||[]
      }
      let tempCha={
        name:chaName,
        options:chaOptions||[],
        signatory:chaAutorized||[],
        address:chaAddress||[],
        gstin:chagstin||[]
      }
      let tempsteved={
        name:stevedoreName,
        options:stevedoreOptions||[],
        signatory:stevedoreAutorized||[],
        address:stevedoreAddress||[],
        gstin:stevedoregstin||[]
      }
      console.log(tempCma,"tempCma")
      setCmaDetails({...tempCma})
      setChaDetails({...tempCha})
      setsteveDoreDetails({...tempsteved})
    }
  },[getVendorsMasterData])
  console.log(cmaDetails,"cmaDetails")
  const changeActiveValue = (val, index) => {
    setActive(val);
    showContent();
    setSaveData(false);

    let tempArr = sideBar;
    for (let i = 0; i < tempArr.length; i++) {
      if (i == index) {
        if (tempArr[i].state != 'pending' && tempArr[i].state != 'complete') {
          tempArr[i].state = 'current';
          tempArr[i].image = '/static/currnet.svg';
        }
      } else {
        if (tempArr[i].state != 'pending' && tempArr[i].state != 'complete') {
          tempArr[i].state = 'default';
          tempArr[i].image = '/static/Group 3256.svg';
        }
      }
    }

    setSidebar(tempArr);
    setIsSideBarOpen(false);
    setSideStateToLocal(val);
  };

  const uploadDoc = async (e) => {
    let fd = new FormData();
    fd.append('document', e.target.files[0]);

    let cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    let headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      let response = await Axios.post(`${API.corebaseUrl}${API.customClearanceDoc}`, fd, {
        headers: headers,
      });

      if (response.data.code === 200) {
        return response.data.data;
      } else {
      }
    } catch (error) {}
  };
  const addressValidation = (type, data, check = true) => {
    if (type == 'Branch' || active == 'CHA' || active == 'Stevedore') {
      if (check) {
        if(type!=="Supplier"){
        if (data.gstin === '' || data.gstin == undefined) {
            let toastMessage = 'Please add gstin';
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
            return false;
          }
          if (data.state === '' || data.state == undefined) {
            let toastMessage = 'Please add state';
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            }
            return false;
          }
          if (data.city === '' || data.city == undefined) {
        let toastMessage = 'Please add city';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return false;
      }
        }
       
       
      }
      
    }
    if (data.addressType === '' || data.addressType == undefined) {
      let toastMessage = 'Please add address Type';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.fullAddress === '' || data.fullAddress == undefined) {
      let toastMessage = 'Please add address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.pinCode === '' || data.pinCode == undefined) {
      let toastMessage = 'Please add pin Code';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.country === '' || data.country == undefined) {
      let toastMessage = 'Please add Country';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
  
    return true;
  };
  const addressValidation2 = (type, data, check = true) => {
    if (data.addressType === '' || data.addressType == undefined) {
      let toastMessage = 'Please add address Type';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.fullAddress === '' || data.fullAddress == undefined) {
      let toastMessage = 'Please add address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    if (data.pinCode === '' || data.pinCode == undefined) {
      let toastMessage = 'Please add pin Code';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }

    if (type == 'Branch') {
      if (check) {
        if (data.gstin === '' || data.gstin == undefined) {
          let toastMessage = 'Please add gstin';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          return false;
        }
        if (data.state === '' || data.state == undefined) {
          let toastMessage = 'Please add state';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
          return false;
        }
      }
      if (data.city === '' || data.city == undefined) {
        let toastMessage = 'Please add city';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
        }
        return false;
      }
    }

    return true;
  };
  const setInitialSideBar = () => {
    let temp = [...sideBar];

    if (props?.genericData) {
      if (props?.genericData?.supplier?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Supplier') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.supplier?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Supplier') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.seller?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Seller') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.seller?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Seller') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.buyer?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Buyer') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.buyer?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Buyer') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.financingBank?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Financing Bank') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.financingBank?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Financing Bank') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.CMA?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'CMA') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.CMA?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'CMA') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.CHA?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'CHA') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.CHA?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'CHA') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.stevedore?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Stevedore') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.stevedore?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Stevedore') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.shippingLine?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Shipping Line') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.shippingLine?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Shipping Line') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.deliveryTerms?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Delivery Terms') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.deliveryTerms?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Delivery Terms') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.productSpecifications?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Product Specifications') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.productSpecifications?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Product Specifications') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.additionalComments?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Additional Comments') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.additionalComments?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Additional Comments') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.placeOfExecution?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Place of Execution') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.placeOfExecution?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Place of Execution') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      if (props?.genericData?.associateBuyer?.isSubmitted == true) {
        temp.forEach((val, index) => {
          if (val.name == 'Associate Buyer') {
            val.state = 'complete';
            val.image = '/static/done.svg';
          }
        });
      }
      if (props?.genericData?.associateBuyer?.isSubmitted == false) {
        temp.forEach((val, index) => {
          if (val.name == 'Associate Buyer') {
            val.state = 'pending';
            val.image = '/static/pending2.svg';
          }
        });
      }
      
    }
    
    setSidebar([...temp]);
  };
  useEffect(() => {
    setInitialSideBar();
  }, [props.genericData]);

  const setSideStateToLocal = (val = null) => {
    sessionStorage.setItem('genericSide', JSON.stringify(sideBar));
    sessionStorage.setItem('setgenActive', val);
  };

  useEffect(() => {
    if (window) {
      if (sessionStorage.getItem('genericSide')) {
        setSidebar(JSON.parse(sessionStorage.getItem('genericSide')));
        setActive(sessionStorage.getItem('setgenActive'));
      }
    }
  }, []);
let masterList = [
    {
      name: 'Bhawana Jain',
      designation: 'Vice President (Finance & Accounts)',
      email: 'bhawanajain@somanigroup.com',
      phoneNo: '',
    },
    {
      name: 'Vipin Kumar',
      designation: 'Manager Accounts',
      email: 'vipinrajput@somanigroup.com',
      phoneNo: '',
    },
    {
      name: 'Devesh Jain',
      designation: 'Director',
      email: 'devesh@indointertrade.ch',
      phoneNo: '',
    },
    {
      name: 'Fatima Yannoulis',
      designation: 'Chief Financial Officer',
      email: 'fatima@indointertrade.ch',
      phoneNo: '',
    },
  ];
  const gettingPins=(value)=>{
   dispatch(getPincodes(value));
 }
  const showContent = (active) => {
    if (active == 'Buyer') {
      return (
        <Buyer
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.buyer}
          order={props?.genericData}
          uploadDoc={uploadDoc}
          addressValidation={addressValidation}
          internal={getInternalCompaniesMasterData}
          masterList={masterList}
          gettingPins={gettingPins}

        />
      );
    }
    if (active == 'Associate Buyer') {
      return (
        <AssociateBuyer
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.associateBuyer}
          uploadDoc={uploadDoc}
          addressValidation={addressValidation}
          order={props?.genericData}
          pan={_get(companyData, 'profile.companyDetail.pans[0]', '')}
          gstList={_get(orderList, 'company.gstList', [])}
          selectedGST={_get(orderList, 'company.GST', '')}
          address={props?.genericData?.company?.detailedCompanyInfo?.profile?.companyDetail?.registeredAddress}
          directors={props.directors}
          gettingPins={gettingPins}
          
        
        />
      );
    }
    if (active == 'Seller') {
      return (
        <Seller
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.seller}
          uploadDoc={uploadDoc}
          addressValidation={addressValidation}
          masterList={masterList}
          gettingPins={gettingPins}
          
        />
      );
    }
    if (active == 'CHA') {
      return (
        <CHA
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.CHA}
          addressValidation={addressValidation}
          uploadDoc={uploadDoc}
           vendor={chaDetails}
          masterList={masterList}
          gettingPins={gettingPins}
          
          
        />
      );
    }
    if (active == 'CMA') {
      return (
        <CMA
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.CMA}
          addressValidation={addressValidation}
          uploadDoc={uploadDoc}
          termsheet={props?.genericData?.order?.termsheet}
          vendor={cmaDetails}
          masterList={masterList}
          gettingPins={gettingPins}
          
        />
      );
    }
    if (active == 'Supplier') {
      return (
        <Manufecture
          saveData={saveData}
          sendData={sendData}
          multiPart={multiPart}
          submitData={submitData}
          updateData={updateData}
          active={active}
          multiPartValue={multiPartValue}
          data={props?.genericData?.supplier}
          order={props?.genericData?.order}
          uploadDoc={uploadDoc}
          addressValidation={addressValidation}
          addressValidation2={addressValidation2}
          masterList={masterList}
          gettingPins={gettingPins}
          
        />
      );
    }
    if (active == 'Shipping Line') {
      return (
        <Shipping
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.shippingLine}
          
        />
      );
    }
    if (active == 'Financing Bank') {
      return (
        <Finance
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.financingBank}
        />
      );
    }
    if (active == 'Stevedore') {
      return (
        <Stevedore
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          data={sameAsCHA ? props?.genericData?.stevedore : props?.genericData?.CHA}
          uploadDoc={uploadDoc}
          active={active}
          addressValidation={addressValidation}
          sameAsCHA={sameAsCHA}
           vendor={steveDoreDetails}
          masterList={masterList}
          gettingPins={gettingPins}
          
        />
      );
    }
    if (active == 'Delivery Terms') {
      return (
        <Thirdparty
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.deliveryTerms}
        />
      );
    }
    if (active == 'Product Specifications') {
      return (
        <ProductSpecification
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.productSpecifications}
        />
      );
    }
    if (active == 'Additional Comments') {
      return (
        <AddtionalComments
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.additionalComments}
        />
      );
    }
    if (active == 'Place of Execution') {
      return (
        <PlaceOfExecutition
          saveData={saveData}
          sendData={sendData}
          submitData={submitData}
          updateData={updateData}
          active={active}
          data={props?.genericData?.placeOfExecution}
        />
      );
    }
  };
  const [sideBar, setSidebar] = useState([
    {
      name: 'Product Specifications',
      state: 'current',
      value: 'Product Specifications',
      image: '/static/currnet.svg',
    },
    {
      name: 'Supplier',
      state: 'default',
      value: 'Supplier',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Seller',
      state: 'default',
      value: 'Seller',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Buyer',
      state: 'default',
      value: 'Buyer',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Associate Buyer',
      state: 'default',
      value: 'Associate Buyer',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Financing Bank',
      state: 'default',
      value: 'Financing Bank',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Shipping Line',
      state: 'default',
      value: 'Shipping Line',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'CHA',
      state: 'default',
      value: 'CHA',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Stevedore',
      state: 'default',
      value: 'Stevedore',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'CMA',
      state: 'default',
      value: 'CMA',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Delivery Terms',
      state: 'default',
      value: 'Delivery Terms',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Place of Execution',
      state: 'default',
      value: 'Place of Execution',
      image: '/static/Group 3256.svg',
    },
    {
      name: 'Additional Comments',
      state: 'default',
      value: 'Additional Comments',
      image: '/static/Group 3256.svg',
    },
  ]);
  const onLeftChange = () => {
    let tempArr = sideBar;
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].name == active) {
        if (i != 0) {
          tempArr[i].state = 'default';
          if (tempArr[i].state != 'pending' && tempArr[i].state != 'complete' && tempArr[i].state != 'default') {
            tempArr[i].image = '/static/Group 3256.svg';
          }
          let a = i - 1;

          tempArr[a].state = 'current';
          if (tempArr[i].state != 'pending' && tempArr[i].state != 'complete' && tempArr[i].state != 'default') {
            tempArr[a].image = '/static/currnet.svg';
          }
          setActive(tempArr[a].name);
        }
      }
    }

    setSidebar(tempArr);
    setSideStateToLocal(active);
  };
  const onRightChange = () => {
    let tempArr = [...sideBar];

    if (active !== 'Additional Comments') {
      for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].name == active) {
          if (i != tempArr.length) {
            tempArr[i].state = 'default';
            if (tempArr[i].state != 'pending' && tempArr[i].state != 'complete' && tempArr[i].state != 'default') {
              tempArr[i].image = '/static/Group 3256.svg';
            }

            let a = i + 1;

            tempArr[a].state = 'current';
            if (tempArr[i].state != 'pending' && tempArr[i].state != 'complete' && tempArr[i].state != 'default') {
              tempArr[a].image = '/static/currnet.svg';
            }

            setActive(tempArr[a].name);
            break;
          }
        }
      }

      setSidebar([...tempArr]);
      setSideStateToLocal(active);
    }
  };

  const onSave = () => {
    setSaveData(true);
  };
  const onSubmit = () => {
    setSubmitData(true);
  };

  const updateData = async (key, data) => {
    let toastMessage = '';
    let dataToSend = {};

    if (key == 'Supplier') {
      data.list.forEach((val, index) => {
        delete val['actions'];
        delete val['addnew'];
        val.document = {};
      });
      data.multiList.forEach((val, index) => {
        delete val['document'];
        val.document = {};
      });
      dataToSend = {
        genericId: props.genericData?._id,
        supplier: {
          name: data.supplierState.name,
          shortName: data.supplierState.shortName,
          bankDetails: {
            bankName: data.supplierState.bankDetails.bankName,
            accountNo: data.supplierState.bankDetails.accountNo,
            swiftCode: data.supplierState.bankDetails.swiftCode,
            city: data.supplierState.bankDetails.city,
          },
          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          multiParty: data.supplierState.multiParty,
          multiPartyAddresses: data.multiList,
          multiPartyName: data.supplierState.multiPartyName,
          isSubmitted: true,
        },
      };

      let dataToSend2 = {
        name: data.supplierState.name,
        shortName: data.supplierState.shortName,
        bankDetails: {
          bankName: data.supplierState.bankDetails.bankName,
          accountNo: data.supplierState.bankDetails.accountNo,
          swiftCode: data.supplierState.bankDetails.swiftCode,
          city: data.supplierState.bankDetails.city,
        },
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
        multiParty: data.supplierState.multiParty,
        multiPartyName: data.supplierState.multiPartyName,
        multiPartyAddresses: data.multiList,
      };
      sessionStorage.setItem('Supplier', JSON.stringify(dataToSend2));

      if (dataToSend.supplier.name == '' || dataToSend.supplier.name == undefined) {
        toastMessage = `Please add supplier name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.supplier.shortName == '' || dataToSend.supplier.shortName == undefined) {
        toastMessage = `Please add short Name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.supplier.bankDetails.accountNo == '' || dataToSend.supplier.bankDetails.accountNo == undefined) {
        toastMessage = `Please add account number `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.supplier.bankDetails.bankName == '' || dataToSend.supplier.bankDetails.bankName == undefined) {
        toastMessage = `Please add bank name `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.supplier.bankDetails.swiftCode == '' || dataToSend.supplier.bankDetails.swiftCode == undefined) {
        toastMessage = `Please add swift code `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.supplier.addresses.length <= 0 || dataToSend.supplier.addresses == undefined) {
        toastMessage = `Please add address `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (
        dataToSend.supplier.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.supplier.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      let error = false;
      if (dataToSend.supplier.authorisedSignatoryDetails.length >= 0) {
        for (let i = 0; i < dataToSend.supplier.authorisedSignatoryDetails.length; i++) {
          if (
            dataToSend.supplier.authorisedSignatoryDetails[i].name == '' ||
            dataToSend.supplier.authorisedSignatoryDetails[i].name == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details name of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.supplier.authorisedSignatoryDetails[i].designation == '' ||
            dataToSend.supplier.authorisedSignatoryDetails[i].designation == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details designation of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.supplier.authorisedSignatoryDetails[i].email == '' ||
            dataToSend.supplier.authorisedSignatoryDetails[i].email == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details email of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.supplier.authorisedSignatoryDetails[i].phoneNo == '' ||
            dataToSend.supplier.authorisedSignatoryDetails[i].phoneNo == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details phone of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.supplier.authorisedSignatoryDetails[i].phoneNo.length < 10 ||
            dataToSend.supplier.authorisedSignatoryDetails[i].phoneNo.length > 10
          ) {
            toastMessage = `Please add valid phone of authorised Signatory Details  ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
        }
      }
      if (error) {
        return;
      }
    }
    if (key == 'Seller') {
      dataToSend = {
        genericId: props.genericData?._id,
        seller: {
          name: 'Indo Intertrade Ag',
          shortName: data.sellerData.shortName,

          addresses: data.addresses,
          authorisedSignatoryDetails: data.list,
          isSubmitted: true,
        },
      };

      let dataToSend2 = {
        name: 'Indo Intertrade Ag',
        shortName: data.sellerData.shortName,
        addresses: data.addresses,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Seller', JSON.stringify(dataToSend2));

      if (dataToSend.seller.name == '' || dataToSend.seller.name == undefined) {
        toastMessage = `Please add seller name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.seller.shortName == '' || dataToSend.seller.shortName == undefined) {
        toastMessage = `Please add short name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }

      if (dataToSend.seller.addresses.length <= 0 || dataToSend.seller.addresses == undefined) {
        toastMessage = `Please add address `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (
        dataToSend.seller.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.seller.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }

      if (dataToSend.seller.authorisedSignatoryDetails.length >= 0) {
        for (let i = 0; i < dataToSend.seller.authorisedSignatoryDetails.length; i++) {
          if (dataToSend?.seller?.authorisedSignatoryDetails[i]?.document == 'new') {
            toastMessage = `Please add authorised Signatory Details document `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              break;
            }
          }
        }
      }
      let error = false;
      if (dataToSend.seller.authorisedSignatoryDetails.length >= 0) {
        for (let i = 0; i < dataToSend.seller.authorisedSignatoryDetails.length; i++) {
          if (
            dataToSend.seller.authorisedSignatoryDetails[i].name == '' ||
            dataToSend.seller.authorisedSignatoryDetails[i].name == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details name of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.seller.authorisedSignatoryDetails[i].designation == '' ||
            dataToSend.seller.authorisedSignatoryDetails[i].designation == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details designation of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.seller.authorisedSignatoryDetails[i].email == '' ||
            dataToSend.seller.authorisedSignatoryDetails[i].email == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details email of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.seller.authorisedSignatoryDetails[i].phoneNo == '' ||
            dataToSend.seller.authorisedSignatoryDetails[i].phoneNo == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details phone of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.seller.authorisedSignatoryDetails[i].phoneNo.length < 10 ||
            dataToSend.seller.authorisedSignatoryDetails[i].phoneNo.length > 10
          ) {
            toastMessage = `Please add valid phone of authorised Signatory Details  ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
        }
      }
      if (error) {
        return;
      }
    }
    if (key == 'Buyer') {
      dataToSend = {
        genericId: props.genericData?._id,
        buyer: {
          name: data.buyerData.name,
          branch: data.buyerData.branchName,
          gstin: data.gstin,
          pan: data.pan,

          addresses: data.addresses,
          authorisedSignatoryDetails: data.list,
          isSubmitted: true,
        },
      };
      let dataToSend2 = {
        name: data.buyerData.name,
        branchName: data.buyerData.branchName,
        gstin: data.gstin,
        pan: data.pan,
        addresses: data.addresses,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Buyer', JSON.stringify(dataToSend2));
      if (dataToSend.buyer.name == '' || dataToSend.buyer.name == undefined) {
        toastMessage = `Please add buyer name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.buyer.branch == '' || dataToSend.buyer.branch == undefined) {
        toastMessage = `Please add branch Name`;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }

      if (dataToSend.buyer.addresses.length <= 0 || dataToSend.buyer.addresses == undefined) {
        toastMessage = `Please add address `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (
        dataToSend.buyer.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.buyer.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      let error = false;
      if (dataToSend.buyer.authorisedSignatoryDetails.length >= 0) {
        for (let i = 0; i < dataToSend.buyer.authorisedSignatoryDetails.length; i++) {
          if (
            dataToSend.buyer.authorisedSignatoryDetails[i].name == '' ||
            dataToSend.buyer.authorisedSignatoryDetails[i].name == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details name of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.buyer.authorisedSignatoryDetails[i].designation == '' ||
            dataToSend.buyer.authorisedSignatoryDetails[i].designation == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details designation of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.buyer.authorisedSignatoryDetails[i].email == '' ||
            dataToSend.buyer.authorisedSignatoryDetails[i].email == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details email of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.buyer.authorisedSignatoryDetails[i].phoneNo == '' ||
            dataToSend.buyer.authorisedSignatoryDetails[i].phoneNo == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details phone of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.buyer.authorisedSignatoryDetails[i].phoneNo.length < 10 ||
            dataToSend.buyer.authorisedSignatoryDetails[i].phoneNo.length > 10
          ) {
            toastMessage = `Please add valid phone of authorised Signatory Details  ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
        }
      }
      if (error) {
        return;
      }
    }
    if (key == 'Financing Bank') {
      dataToSend = {
        genericId: props.genericData?._id,
        financingBank: {
          name: data.financeData.name,
          branch: data.financeData.branchName,
          isSubmitted: true,
        },
      };
      let dataToSend2 = {
        name: data.financeData.name,
        branchName: data.financeData.branchName,
      };
      sessionStorage.setItem('Finance', JSON.stringify(dataToSend2));
      if (dataToSend.financingBank.name == '' || dataToSend.financingBank.name == undefined) {
        toastMessage = `Please add name `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.financingBank.branch == '' || dataToSend.financingBank.branch == undefined) {
        toastMessage = `Please add branch name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
    }
    if (key == 'CMA') {
      dataToSend = {
        genericId: props.genericData?._id,
        CMA: {
          name: data.cmaData.name,
          shortName: data.cmaData.shortName,
          gstin: data.cmaData.gstin,
          designatedStorageArea: data.cmaData.designatedStorageArea,
          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          isSubmitted: true,
        },
      };
      let dataToSend2 = {
        name: data.cmaData.name,
        shortName: data.cmaData.shortName,
        gstin: data.cmaData.gstin,
        designatedStorageArea: data.cmaData.designatedStorageArea,
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Cma', JSON.stringify(dataToSend2));
      if (dataToSend.CMA.name == '' || dataToSend.CMA.name == undefined) {
        toastMessage = `Please add CMA name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.CMA.shortName == '' || dataToSend.CMA.shortName == undefined) {
        toastMessage = `Please add short name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.CMA.gstin == '' || dataToSend.CMA.gstin == undefined) {
        toastMessage = `Please add gstin  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }

      if (dataToSend.CMA.designatedStorageArea == '' || dataToSend.CMA.designatedStorageArea == undefined) {
        toastMessage = `Please add designated Storage Area  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend?.CMA?.addresses?.length <= 0 || dataToSend?.CMA?.addresses == undefined) {
        toastMessage = `Please add address `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (
        dataToSend?.CMA?.authorisedSignatoryDetails?.length <= 0 ||
        dataToSend?.CMA?.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      let error = false;
      if (dataToSend.CMA.authorisedSignatoryDetails.length >= 0) {
        for (let i = 0; i < dataToSend.CMA.authorisedSignatoryDetails.length; i++) {
          if (
            dataToSend.CMA.authorisedSignatoryDetails[i].name == '' ||
            dataToSend.CMA.authorisedSignatoryDetails[i].name == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details name of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.CMA.authorisedSignatoryDetails[i].designation == '' ||
            dataToSend.CMA.authorisedSignatoryDetails[i].designation == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details designation of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.CMA.authorisedSignatoryDetails[i].email == '' ||
            dataToSend.CMA.authorisedSignatoryDetails[i].email == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details email of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.CMA.authorisedSignatoryDetails[i].phoneNo == '' ||
            dataToSend.CMA.authorisedSignatoryDetails[i].phoneNo == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details phone of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.CMA.authorisedSignatoryDetails[i].phoneNo.length < 10 ||
            dataToSend.CMA.authorisedSignatoryDetails[i].phoneNo.length > 10
          ) {
            toastMessage = `Please add valid phone of authorised Signatory Details  ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
        }
      }
      if (error) {
        return;
      }
    }
    if (key == 'CHA') {
      dataToSend = {
        genericId: props.genericData?._id,
        CHA: {
          name: data.chaState.name,
          shortName: data.chaState.shortName,
          gstin: data.chaState.gstin,

          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          isSubmitted: true,
        },
      };
      let dataToSend2 = {
        name: data.chaState.name,
        shortName: data.chaState.shortName,
        gstin: data.chaState.gstin,

        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Cha', JSON.stringify(dataToSend2));
      if (dataToSend.CHA.name == '' || dataToSend.CHA.name == undefined) {
        toastMessage = `Please add CHA name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.CHA.shortName == '' || dataToSend.CHA.shortName == undefined) {
        toastMessage = `Please add short name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.CHA.gstin == '' || dataToSend.CHA.gstin == undefined) {
        toastMessage = `Please add gstin name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }

      if (dataToSend.CHA.addresses.length <= 0 || dataToSend.CHA.addresses == undefined) {
        toastMessage = `Please add address `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (
        dataToSend.CHA.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.CHA.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      let error = false;
      if (dataToSend.CHA.authorisedSignatoryDetails.length >= 0) {
        for (let i = 0; i < dataToSend.CHA.authorisedSignatoryDetails.length; i++) {
          if (
            dataToSend.CHA.authorisedSignatoryDetails[i].name == '' ||
            dataToSend.CHA.authorisedSignatoryDetails[i].name == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details name of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.CHA.authorisedSignatoryDetails[i].designation == '' ||
            dataToSend.CHA.authorisedSignatoryDetails[i].designation == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details designation of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.CHA.authorisedSignatoryDetails[i].email == '' ||
            dataToSend.CHA.authorisedSignatoryDetails[i].email == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details email of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.CHA.authorisedSignatoryDetails[i].phoneNo == '' ||
            dataToSend.CHA.authorisedSignatoryDetails[i].phoneNo == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details phone of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.CHA.authorisedSignatoryDetails[i].phoneNo.length < 10 ||
            dataToSend.CHA.authorisedSignatoryDetails[i].phoneNo.length > 10
          ) {
            toastMessage = `Please add valid phone of authorised Signatory Details  ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
        }
      }
      if (error) {
        return;
      }
    }
    if (key == 'Stevedore') {
      console.log(data.seteveState.gstin.length,"ata.seteveState.gstin")
      dataToSend = {
        genericId: props.genericData?._id,
        stevedore: {
          name: data.seteveState.name,
          shortName: data.seteveState.shortName,
          gstin:Array.isArray(data.seteveState.gstin)?data.seteveState.gstin[0]:data.seteveState.gstin,

          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          isSubmitted: true,
        },
      };
      let dataToSend2 = {
        name: data.seteveState.name,
        shortName: data.seteveState.shortName,
        gstin:Array.isArray(data.seteveState.gstin)?data.seteveState.gstin[0]:data.seteveState.gstin,
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Stevedore', JSON.stringify(dataToSend2));

      if (dataToSend.stevedore.name == '' || dataToSend.stevedore.name == undefined) {
        toastMessage = `Please add stevedore name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.stevedore.shortName == '' || dataToSend.stevedore.shortName == undefined) {
        toastMessage = `Please add short name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend.stevedore.gstin == '' || dataToSend.stevedore.gstin == undefined) {
        toastMessage = `Please add gstin `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }

      if (dataToSend.stevedore.addresses.length <= 0 || dataToSend.stevedore.addresses == undefined) {
        toastMessage = `Please add address `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (
        dataToSend.stevedore.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.stevedore.authorisedSignatoryDetails == undefined
      ) {
        toastMessage = `Please add authorised Signatory Details `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      let error = false;
      if (dataToSend.stevedore.authorisedSignatoryDetails.length >= 0) {
        for (let i = 0; i < dataToSend.stevedore.authorisedSignatoryDetails.length; i++) {
          if (
            dataToSend.stevedore.authorisedSignatoryDetails[i].name == '' ||
            dataToSend.stevedore.authorisedSignatoryDetails[i].name == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details name of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.stevedore.authorisedSignatoryDetails[i].designation == '' ||
            dataToSend.stevedore.authorisedSignatoryDetails[i].designation == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details designation of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.stevedore.authorisedSignatoryDetails[i].email == '' ||
            dataToSend.stevedore.authorisedSignatoryDetails[i].email == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details email of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.stevedore.authorisedSignatoryDetails[i].phoneNo == '' ||
            dataToSend.stevedore.authorisedSignatoryDetails[i].phoneNo == undefined
          ) {
            toastMessage = `Please add authorised Signatory Details phone of ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
          if (
            dataToSend.stevedore.authorisedSignatoryDetails[i].phoneNo.length < 10 ||
            dataToSend.stevedore.authorisedSignatoryDetails[i].phoneNo.length > 10
          ) {
            toastMessage = `Please add valid phone of authorised Signatory Details  ${i} `;
            if (!toast.isActive(toastMessage.toUpperCase())) {
              toast.error(toastMessage.toUpperCase(), {
                toastId: toastMessage,
              });
              setSubmitData(false);
              error = true;
              return;
            }
          }
        }
      }
      if (error) {
        return;
      }
    }
    if (key == 'Shipping Line') {
      dataToSend = {
        genericId: props.genericData?._id,
        shippingLine: {
          name: data.shippingData.name,
          vesselName: data.shippingData.vesselName,
          gstin: data.shippingData.gstin,
          isSubmitted: true,
        },
      };
      let dataToSend2 = {
        name: data.shippingData.name,
        vesselName: data.shippingData.vesselName,
        gstin: data.shippingData.gstin,
      };
      sessionStorage.setItem('Shipping', JSON.stringify(dataToSend2));
      if (dataToSend.shippingLine.name == '' || dataToSend.shippingLine.name == undefined) {
        toastMessage = `Please add shipping name  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      console.log(data.shippingData.gstin,"data.shippingData.gstin")
    if(data.shippingData.gstin!=="" && data.shippingData.gstin!==undefined){
      let valid=  gSTINValidation(data.shippingData.gstin)
      if(valid==false){
         toastMessage = `Add valid gstin `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
    }
   
  
      
    }
    if (key == 'Delivery Terms') {
      console.log(data.listContact, 'data.listContact');
      dataToSend = {
        genericId: props.genericData?._id,
        deliveryTerms: {
          deliveryTerm: data.deliveryData,
          monthOfLoadingCargo: data.monthOfLoadingCargo,
          paymentTerms: data.paymentTerms,
          cheque: data.listContact,
          isSubmitted: true,
        },
      };
      let dataToSend2 = {
        deliveryTerm: data.deliveryData,
        monthOfLoadingCargo: data.monthOfLoadingCargo,
        paymentTerms: data.paymentTerms,
        cheque: data.listContact,
      };

      sessionStorage.setItem('Delivery', JSON.stringify(dataToSend2));
      if (dataToSend?.deliveryTerms?.deliveryTerm == '' || dataToSend?.deliveryTerms?.deliveryTerm == undefined) {
        toastMessage = `Please select delivery Terms  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      if (dataToSend?.deliveryTerms?.paymentTerms == '' || dataToSend?.deliveryTerms?.paymentTerms == undefined) {
        toastMessage = `Please select payment Terms  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }

      if (
        dataToSend?.deliveryTerms?.monthOfLoadingCargo == '' ||
        dataToSend?.deliveryTerms?.monthOfLoadingCargo == undefined
      ) {
        toastMessage = `Please select month Of Loading Cargo  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
    }

    if (key == 'Product Specifications') {
      dataToSend = {
        genericId: props.genericData?._id,
        productSpecifications: {
          comments: data.addressList,
          specificationTable: data?.excelData,
          isSubmitted: true,
        },
      };
      sessionStorage.setItem('Product', JSON.stringify({ list: data.addressList, excel: data?.excelData }));

      if (
        dataToSend?.productSpecifications?.specificationTable?.length <= 0 ||
        dataToSend?.productSpecifications?.specificationTable == undefined
      ) {
        toastMessage = `Please add product specification `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
    }
    if (key == 'Additional Comments') {
      let list = [];
      let isOK=true
       for(let i=0;i<data.addressList.length;i++){
         if(data.addressList[i].name=="" || data.addressList[i].name==undefined){
                toastMessage = `Agreement name cannot be empty`;
                  if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    isOK=false
                   
                  
                  }
             }
          if(data.addressList[i].name=="Assignment Letter"){
             if(data.addressList[i].monthOfLoadingCargo=="" || data.addressList[i].monthOfLoadingCargo==undefined){
                toastMessage = `Please add month of Loading cargo `;
                  if (!toast.isActive(toastMessage.toUpperCase())) {
                    toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                    isOK=false
                   
                  
                  }
             }
          }
       }
       if(isOK==false){
         setSubmitData(false);
         return
       }
      data.addressList.forEach((val, index) => {
        list.push({
          agreementName: val.name,
          comment: val.comment,
          dateOfExecution: val.dateOfExecution,
          dateOfContract: val.dateOfContract || '',
          monthOfLoadingCargo: val.monthOfLoadingCargo || '',

          isSubmitted: true,
        });
      });

      dataToSend = {
        genericId: props.genericData?._id,
        additionalComments: {
          comments: list,

          isSubmitted: true,
        },
      };
      sessionStorage.setItem('add', JSON.stringify(data.addressList));
      if (list.length <= 0 || list == undefined) {
        toastMessage = `Please add comment `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
    }
    if (key == 'Place of Execution') {
       let list = [];
       let isOK=true
       for(let i=0;i<data.list.length;i++){
      if(data.list[i].name=="" || data.list[i].name==undefined){
            toastMessage = `Agreement name cannot be empty`;
              if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
                isOK=false
                
              
              }
          }
         
       }
       if(isOK==false){
         setSubmitData(false);
         return
       }
      
      data.list.forEach((val, index) => {
        list.push({
          agreementName: val.name,
          place: val.execution,
          dateOfExecution: val.dateOfExecution,
          isSubmitted: true,
        });
      });
      dataToSend = {
        genericId: props.genericData?._id,

        placeOfExecution: {
          execution: list,
        },
      };
      sessionStorage.setItem('exe', JSON.stringify(data.list));
      if (list.length <= 0 || list == undefined) {
        toastMessage = `Please add place of execution `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
    }
    if (key == 'Associate Buyer') {
      dataToSend = {
        genericId: props.genericData?._id,

        associateBuyer: {
          branch: data?.associate?.branchName,
          shortName: data?.associate?.shortName,
          gstin: data?.associate?.gstin,
          addresses: data?.address,
          authorisedSignatoryDetails: data?.list,
          isSubmitted: true,
        },
      };
      let dataToSend2 = {
        branchName: data.associate.branchName,
        shortName: data.associate.shortName,
        gstin: data.associate.gstin,
        addresses: data.address,
        authorisedSignatoryDetails: data.list,
      };
      console.log(dataToSend,"dataToSend")
      sessionStorage.setItem('Associate', JSON.stringify(dataToSend2));

      if (dataToSend.associateBuyer.gstin == '' || dataToSend.associateBuyer.gstin == undefined) {
        toastMessage = `Please add gstin  `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }

      if (data.companyAddress.fullAddress == '') {
        if (dataToSend.associateBuyer.addresses.length <= 0 || dataToSend.associateBuyer.addresses == undefined) {
          toastMessage = `Please add address `;
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
            setSubmitData(false);
            return;
          }
        }
      }

      if (
        dataToSend.associateBuyer.authorisedSignatoryDetails.length <= 0 ||
        dataToSend.associateBuyer.authorisedSignatoryDetails == undefined ||
        dataToSend.associateBuyer.authorisedSignatoryDetails[0]?.name == ""
      ) {
        toastMessage = `Please add authorised Signatory Details `;
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          setSubmitData(false);
          return;
        }
      }
      let error = false;
      if (dataToSend.associateBuyer.authorisedSignatoryDetails.length >= 0) {
        console.log("herher")
        for (let i = 0; i < dataToSend.associateBuyer.authorisedSignatoryDetails.length; i++) {
          console.log("herher",dataToSend.associateBuyer.authorisedSignatoryDetails[i])
          if (dataToSend.associateBuyer.authorisedSignatoryDetails[i].addnew == 'true' || dataToSend.associateBuyer.authorisedSignatoryDetails[i].addnew == 'false') {
            if (
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].name == '' ||
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].name == undefined
            ) {
              toastMessage = `Please add authorised Signatory Details name of ${i} `;
              if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), {
                  toastId: toastMessage,
                });
                setSubmitData(false);
                error = true;
                return;
              }
            }
            if (
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].designation == '' ||
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].designation == undefined
            ) {
              toastMessage = `Please add authorised Signatory Details designation of ${i} `;
              if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), {
                  toastId: toastMessage,
                });
                setSubmitData(false);
                error = true;
                return;
              }
            }
            if (
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].email == '' ||
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].email == undefined
            ) {
              toastMessage = `Please add authorised Signatory Details email of ${i} `;
              if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), {
                  toastId: toastMessage,
                });
                setSubmitData(false);
                error = true;
                return;
              }
            }
            console.log( dataToSend.associateBuyer.authorisedSignatoryDetails[i].phoneNo,"")
            if (
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].phoneNo == '' ||
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].phoneNo == undefined
            ) {
              toastMessage = `Please add authorised Signatory Details phone of ${i} `;
              if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), {
                  toastId: toastMessage,
                });
                setSubmitData(false);
                error = true;
                return;
              }
            }
            if (
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].phoneNo.length < 10 ||
              dataToSend.associateBuyer.authorisedSignatoryDetails[i].phoneNo.length > 10
            ) {
              toastMessage = `Please add valid phone of authorised Signatory Details  ${i} `;
              if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), {
                  toastId: toastMessage,
                });
                setSubmitData(false);
                error = true;
                return;
              }
            }
          }
        }
      }
      if (error) {
        return;
      }
      if (dataToSend.associateBuyer.authorisedSignatoryDetails.length > 0) {
        let isDoc = true;
        for (let i = 0; i < dataToSend.associateBuyer.authorisedSignatoryDetails.length; i++) {
          if (dataToSend.associateBuyer.authorisedSignatoryDetails[i].addnew == 'true') {
            if (dataToSend.associateBuyer.authorisedSignatoryDetails[i].document == 'new') {
              toastMessage = `Please add document `;
              if (!toast.isActive(toastMessage.toUpperCase())) {
                toast.error(toastMessage.toUpperCase(), {
                  toastId: toastMessage,
                });
                setSubmitData(false);
                isDoc = false;
                break;
              }
            }
          }
        }
        if (isDoc == false) {
          return;
        }
      }
    }

    let timestamp = await dispatch(updateGenericData(dataToSend, 'Submitted'));

    if (timestamp == 500) {
      return;
    }
    props.setDate(timestamp);
    localStorage.setItem('timeGenericUpdated', timestamp);
    setSubmitData(false);
    let tempArr = sideBar;
    tempArr.forEach((val, index) => {
      if (val.value == key) {
        tempArr[index].state = 'complete';
        tempArr[index].image = '/static/done.svg';
        if (key !== 'Additional Comments') {
          let a = index + 1;
          tempArr[a].state = 'current';
          tempArr[a].image = '/static/currnet.svg';

          setActive(tempArr[a].name);
        }
      }
    });

    setSidebar([...tempArr]);

    setSideStateToLocal(key);
     setSideStateToLocal(key);
      if (key == 'Additional Comments') {
        Router.push('/agreement')
      }
  };

  const sendData = async (key, data) => {
    let toastMessage = '';
    let dataToSend = {};

    if (key == 'Supplier') {
      data.list.forEach((val, index) => {
        delete val['actions'];
        delete val['addnew'];
        val.document = {};
      });
      data.multiList.forEach((val, index) => {
        delete val['document'];
        val.document = {};
      });
      dataToSend = {
        genericId: props.genericData?._id,
        supplier: {
          name: data.supplierState.name,
          shortName: data.supplierState.shortName,
          bankDetails: {
            bankName: data.supplierState.bankDetails.bankName,
            accountNo: data.supplierState.bankDetails.accountNo,
            swiftCode: data.supplierState.bankDetails.swiftCode,
            city: data.supplierState.bankDetails.city,
          },
          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          multiParty: data.supplierState.multiParty,
          multiPartyName: data.supplierState.multiPartyName,
          multiPartyAddresses: data.multiList,
          isSubmitted: false,
        },
      };

      let dataToSend2 = {
        name: data.supplierState.name,
        shortName: data.supplierState.shortName,
        bankDetails: {
          bankName: data.supplierState.bankDetails.bankName,
          accountNo: data.supplierState.bankDetails.accountNo,
          swiftCode: data.supplierState.bankDetails.swiftCode,
          city: data.supplierState.bankDetails.city,
        },
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
        multiParty: data.supplierState.multiParty,
        multiPartyName: data.supplierState.multiPartyName,

        multiPartyAddresses: data.multiList,
      };
      sessionStorage.setItem('Supplier', JSON.stringify(dataToSend2));
    }
    if (key == 'Seller') {
      dataToSend = {
        genericId: props.genericData?._id,
        seller: {
          name: 'Indo Intertrade Ag',
          shortName: data.sellerData.shortName,

          addresses: data.addresses,
          authorisedSignatoryDetails: data.list,
          isSubmitted: false,
        },
      };

      let dataToSend2 = {
        name: 'Indo Intertrade Ag',
        shortName: data.sellerData.shortName,
        addresses: data.addresses,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Seller', JSON.stringify(dataToSend2));
    }
    if (key == 'Buyer') {
      dataToSend = {
        genericId: props.genericData?._id,
        buyer: {
          name: data.buyerData.name,
          branch: data.buyerData.branchName,
          gstin: data.gstin,
          pan: data.pan,
          addresses: data.addresses,
          authorisedSignatoryDetails: data.list,
          isSubmitted: false,
        },
      };
      let dataToSend2 = {
        name: data.buyerData.name,
        branchName: data.buyerData.branchName,
        gstin: data.gstin,
        pan: data.pan,
        addresses: data.addresses,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Buyer', JSON.stringify(dataToSend2));
    }
    if (key == 'Financing Bank') {
      dataToSend = {
        genericId: props.genericData?._id,
        financingBank: {
          name: data.financeData.name,
          branch: data.financeData.branchName,
          isSubmitted: false,
        },
      };
      let dataToSend2 = {
        name: data.financeData.name,
        branchName: data.financeData.branchName,
      };
      sessionStorage.setItem('Finance', JSON.stringify(dataToSend2));
    }
    if (key == 'CMA') {
      dataToSend = {
        genericId: props.genericData?._id,
        CMA: {
          name: data.cmaData.name,
          shortName: data.cmaData.shortName,
          gstin: data.cmaData.gstin,
          designatedStorageArea: data.cmaData.designatedStorageArea,
          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          isSubmitted: false,
        },
      };
      let dataToSend2 = {
        name: data.cmaData.name,
        shortName: data.cmaData.shortName,
        designatedStorageArea: data.cmaData.designatedStorageArea,
        gstin: data.cmaData.gstin,
        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Cma', JSON.stringify(dataToSend2));
    }
    if (key == 'CHA') {
      dataToSend = {
        genericId: props.genericData?._id,
        CHA: {
          name: data.chaState.name,
          shortName: data.chaState.shortName,
          gstin: data.chaState.gstin,

          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          isSubmitted: false,
        },
      };
      let dataToSend2 = {
        name: data.chaState.name,
        shortName: data.chaState.shortName,
        gstin: data.chaState.gstin,

        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Cha', JSON.stringify(dataToSend2));
    }
    if (key == 'Stevedore') {
      dataToSend = {
        genericId: props.genericData?._id,
        stevedore: {
          name: data.seteveState.name,
          shortName: data.seteveState.shortName,
          gstin:Array.isArray(data.seteveState.gstin)?data.seteveState.gstin[0]:data.seteveState.gstin,

          addresses: data.addressList,
          authorisedSignatoryDetails: data.list,
          isSubmitted: false,
        },
      };
      let dataToSend2 = {
        name: data.seteveState.name,
        shortName: data.seteveState.shortName,
        gstin:Array.isArray(data.seteveState.gstin)?data.seteveState.gstin[0]:data.seteveState.gstin,

        addresses: data.addressList,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Stevedore', JSON.stringify(dataToSend2));
    }
    if (key == 'Shipping Line') {
      dataToSend = {
        genericId: props.genericData?._id,
        shippingLine: {
          name: data.shippingData.name,
          vesselName: data.shippingData.vesselName,
          gstin: data.shippingData.gstin,
          isSubmitted: false,
        },
      };
      let dataToSend2 = {
        name: data.shippingData.name,
        vesselName: data.shippingData.vesselName,
        gstin: data.shippingData.gstin,
      };
      sessionStorage.setItem('Shipping', JSON.stringify(dataToSend2));
    }
    if (key == 'Delivery Terms') {
      dataToSend = {
        genericId: props.genericData?._id,
        deliveryTerms: {
          deliveryTerm: data.deliveryData,
          monthOfLoadingCargo: data.monthOfLoadingCargo,
          paymentTerms: data.paymentTerms,
          cheque: data.listContact,
          isSubmitted: false,
        },
      };
      let dataToSend2 = {
        deliveryTerm: data.deliveryData,
        monthOfLoadingCargo: data.monthOfLoadingCargo,
        paymentTerms: data.paymentTerms,
        cheque: data.listContact,
      };

      sessionStorage.setItem('Delivery', JSON.stringify(dataToSend2));
    }
    if (key == 'Product Specifications') {
      dataToSend = {
        genericId: props.genericData?._id,
        productSpecifications: {
          comments: data.addressList,
          specificationTable: data?.excelData,
          isSubmitted: false,
        },
      };
      sessionStorage.setItem('Product', JSON.stringify({ list: data.addressList, excel: data?.excelData }));
    }
    if (key == 'Additional Comments') {
      let list = [];
      data.addressList.forEach((val, index) => {
        list.push({
          agreementName: val.name,
          comment: val.comment,
          dateOfExecution: val.dateOfExecution,
          dateOfContract: val.dateOfContract || '',
          monthOfLoadingCargo: val.monthOfLoadingCargo || '',

          isSubmitted: false,
        });
      });

      dataToSend = {
        genericId: props.genericData?._id,
        additionalComments: {
          comments: list,
        },
      };
      sessionStorage.setItem('add', JSON.stringify(data.addressList));
    }
    if (key == 'Place of Execution') {
      let list = [];
      data.list.forEach((val, index) => {
        list.push({
          agreementName: val.name,
          place: val.execution,
          dateOfExecution: val.dateOfExecution,
          isSubmitted: false,
        });
      });
      dataToSend = {
        genericId: props.genericData?._id,

        placeOfExecution: {
          execution: list,
        },
      };
      sessionStorage.setItem('exe', JSON.stringify(data.list));
    }
    if (key == 'Associate Buyer') {
      dataToSend = {
        genericId: props.genericData?._id,

        associateBuyer: {
          branch: data?.associate?.branchName,
          shortName: data?.associate?.shortName,
          gstin: data?.associate?.gstin,
          addresses: data?.address,
          authorisedSignatoryDetails: data?.list,
          isSubmitted: false,
        },
      };
      let dataToSend2 = {
        branchName: data.associate.branchName,
        shortName: data.associate.shortName,
        gstin: data.associate.gstin,
        addresses: data.address,
        authorisedSignatoryDetails: data.list,
      };
      sessionStorage.setItem('Associate', JSON.stringify(dataToSend2));
    }

    let timestamp = await dispatch(updateGenericData(dataToSend, 'Saved'));

    if (timestamp == 500) {
      return;
    }
    setSaveData(false);

    setSubmitData(false);

   
  };
  const onShowSideBar = () => {
    setIsSideBarOpen(true);
  };

  useEffect(() => {
    setMultiPart(props.genericData?.supplier?.multiParty);
  }, [props.genericData]);

  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.sidebar}  ${isSideBarOpen ? null : styles.collapseWidth} card card-body`}>
        {sideBar.map((row, index) => {
          return (
            <>
              <div
                key={index}
                className={`${styles.sidebar_content} d-flex justify-content-between align-items-center`}
              >
                <div
                  className={`${styles.content2} ${
                    row.state == 'current' ? styles.selected : null
                  }  d-flex justify-content-between align-items-center`}
                  onClick={(e) => {
                    changeActiveValue(row.name, index);
                  }}
                >
                  <img src={row.image}></img>
                  <span className="ml-3">{row.name}</span>
                </div>
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow right"
                  className={`${styles.image_reverse} image_arrow`}
                />
              </div>
            </>
          );
        })}
      </div>

      <div className={`${styles.content} ${isSideBarOpen ? null : styles.fullScreen} card p-0 card-body`}>
        <div
          className={`${styles.cardHeader} border_color card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
          data-toggle="collapse"
          data-target="#cashFlowStatement"
          aria-expanded="true"
          aria-controls="cashFlowStatement"
        >
          <h2 className="mb-0 d-flex">
            {!isSideBarOpen ? (
              <a
                href="#"
                className={`${styles.arrow} ${`rightArrow`}`}
                onClick={() => {
                  onShowSideBar();
                }}
              >
                <img
                  src="/static/keyboard_arrow_right-3.svg"
                  alt="arrow right"
                  className={`${styles.image_reverse} image_arrow mr-2 mb-1`}
                />
              </a>
            ) : null}
            {active == 'Additional Comments' ? 'Additional Comments for Reference' : active}
          </h2>
          <div className={`${styles.pageList}  d-flex justify-content-end align-items-center`}>
            {active == 'Supplier' ? (
              <div className={`${styles.multiPart} d-flex justify-content-center align-items-center`}>
                <span className={`mr-4 label`}>Multiple Parties Involved</span>
                <div className={`d-flex mr-4 align-items-center`}>
                  <div className={`form-check  mr-4`}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={() => {
                        setMultiPart(true);
                      }}
                      checked={multiPart == true ? true : false}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked={multiPart == false ? true : false}
                      onChange={() => {
                        setMultiPart(false);
                      }}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>
                <Form.Group className={`${styles.form_group} `}>
                  <div className="d-flex">
                    <select
                      className={` ${multiPart == true ? styles.input_field : styles.inputDisabled}  ${
                        styles.customSelect
                      } input  form-control`}
                      name="countryOfOrigin"
                      onChange={(e) => {
                        setMultiPartValue(e.target.value);
                      }}
                      disabled={multiPart == true ? '' : 'disable'}
                      value={multiPartValue}
                    >
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Mines">Mines</option>
                      <option value="Shipper">Shipper</option>
                    </select>
                    <img
                      className={`${styles.arrow3} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </Form.Group>
              </div>
            ) : null}
            {active == 'Stevedore' ? (
              <div className={`${styles.switchContainer} d-flex align-items-center`}>
                <span className="label">Same as CHA</span>
                <span className={` ${styles.yes} text-color`}>Yes</span>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={sameAsCHA ? 'checked' : ''}
                    onChange={(e) => {
                      setSameAsCHA(!sameAsCHA);
                    }}
                  ></input>
                  <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
                <span className={`${styles.no} text-color`}>No</span>
              </div>
            ) : null}
            <a
              href="#"
              className={`${styles.arrow} ${`leftArrow`}`}
              onClick={() => {
                onLeftChange();
              }}
            >
              {' '}
              <img src="/static/keyboard_arrow_right-3.svg" alt="arrow right" className="image_arrow" />
            </a>
            <a
              href="#"
              className={`${styles.arrow} ${`rightArrow`}`}
              onClick={() => {
                onRightChange();
              }}
            >
              <img
                src="/static/keyboard_arrow_right-3.svg"
                alt="arrow right"
                className={`${styles.image_reverse} image_arrow`}
              />
            </a>
          </div>
        </div>

        {showContent(active)}

        <div
          className={`${styles.footer} card-body border_color d-flex align-items-center justify-content-end bg-transparent`}
          data-toggle="collapse"
          data-target="#cashFlowStatement"
          aria-expanded="true"
          aria-controls="cashFlowStatement"
        >
          <div
            className={styles.reject}
            onClick={(e) => {
              onSave();
            }}
          >
            <span>Save</span>
          </div>
          <div
            className={styles.approve}
            onClick={(e) => {
              onSubmit();
            }}
          >
            <span>Submit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
