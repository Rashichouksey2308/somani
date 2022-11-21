import React,{useEffect, useState} from 'react';
import styles from '../../add-new-user/user.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import AddVendor from '../../../src/components/AddVendor';
import { useDispatch, useSelector } from 'react-redux';
import { GetVendor } from '../../../src/redux/vendor/action';
import _get from 'lodash/get';

function Index() {
  const dispatch = useDispatch();
  const [keyContactPersonInfo, setKeyContactPersonInfo] = useState([]);
  const [addressInfo, setAddressInfo] = useState([]);
  const [remarks, setRemaks] = useState('');
  const {vendorResponse} = useSelector((state) => state.Vendor)
  const vendorResponseData = _get(vendorResponse,'data[0]',{})

  const {vendorDetails,keyAddresses} = vendorResponseData;

  console.log(keyAddresses,"vendorResponseData");

 
  useEffect(() =>{
    let Id = sessionStorage.getItem('vendorId');
    if(!Id) return;
    if(Id) {
      dispatch(GetVendor(`?vendorId=${Id}`))
      setVendorDetail({
        vendor: vendorDetails?.vendor,
        vendorType:vendorDetails?.vendorType,
        pan_taxId: vendorDetails?.pan_taxId,
        companyName: vendorDetails?.companyName,
        activationDate: vendorDetail?.activationDate,
        DeactivationDate: vendorDetails?.DeactivationDate,
        blackListedDate: vendorDetails?.blackListedDate,
        emailId: vendorDetails?.emailId,
        phoneNumber:vendorDetails?.phoneNumber,
        website: vendorDetails?.website,
        remarks: vendorDetails?.remarks
      });
      setAddress({
        addressType:keyAddresses && keyAddresses[0]?.addressType,
        country:keyAddresses && keyAddresses[0]?.country,
        zipCode:keyAddresses && keyAddresses[0]?.zipCode,
        state:keyAddresses && keyAddresses[0]?.state,
        city:keyAddresses && keyAddresses[0]?.city,
        pinCode:keyAddresses && keyAddresses[0]?.pinCode,
        gstin:keyAddresses && keyAddresses[0]?.gstin,
        address:keyAddresses && keyAddresses[0]?.address,
        email:keyAddresses && keyAddresses[0]?.email
      })
    }
  },[dispatch]);
  
  const [vendorDetail, setVendorDetail] = useState({
    vendor:"",
    vendorType: "",
    pan_taxId: "",
    companyName: "",
    activationDate: "",
    DeactivationDate: "",
    blackListedDate: "",
    emailId: "",
    phoneNumber: "",
    website: "",
    remarks: ""    
  });

const [keyContactPerson, setKeyContactPerson] = useState({
    name:'',
    department:'',
    designation:'',
    phoneNumber:'',
    emailId:'',
    authorizedSignatory:'',
})

const [address, setAddress] = useState({
    addressType:  "",
    country:  '',
    zipCode:  '',
    state:'',
    city:'',
    pinCode: '',
    gstin:'',
    address:'',
    email:''
})

const [bankDetails, setBankDetails] = useState({
  IFSC: '',
  Bank_Name: '',
  Branch_Address: '',
  Account_No: '',
  gstin: '',
  Swift_Code: '',
  AD_Code: '',
  Correspondent_BankNmae:''
})

const handleSuplier = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setVendorDetail({
    ...vendorDetail,
    [name]:value
  })
}

const saveDate = (value) => {
  const d = new Date(value);
  let text = d.toISOString();
  setVendorDetail({...vendorDetail, activationDate: text})
};

const handleUploadVendorDetails = (e) => {
  e.preventDefault()
  // setAddressInfo(vendorDetail => [...vendorDetail, vendorDetail.remarks])
}

const handlekeyContactPersonDetail = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setKeyContactPerson({
    ...keyContactPerson,
    [name]:value
  })
}

const handleSubmitKeyContactPersonDetails = (e) => {
  e.preventDefault()
  setKeyContactPersonInfo(keyContactPersonInfo => [...keyContactPersonInfo, keyContactPerson])
}

const handleAddressDetail = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setAddress({
    ...address,
    [name]:value
  })
}

const handleSubmitAddress = (e) => {
  e.preventDefault()
  // if(addressValidtion(address)){
    setAddressInfo(addressInfo => [...addressInfo, address])
  // }
}

const handleBankDetail = (e) => {
  const name = e.target.name;
  const value = e.target.value;
    setBankDetails({
      ...bankDetails,
      [name]:value
    })
}

const handleApproval = (e) => {
  e.preventDefault();
  dispatch(CreateVendor({
    vendorDetails:vendorDetail,
    keyContactPerson:keyContactPersonInfo,
    keyAddresses:addressInfo,
    bankDetails: bankDetails
  }))
}

const handleCanclePersonalDetail = () => {
  setKeyContactPerson({
      name:'',
      department:'',
      designation:'',
      phoneNumber:'',
      emailId:'',
      authorizedSignatory:'',
    });
}

const handleCancleAddressDetail = () => {
  setAddress({
    addressType:'',
    country:'',
    zipCode:'',
    state:'',
    city:'',
    pinCode:'',
    gstin:'',
    address:'',
    email:''
  })
}

const handleRemaks = (e) => {
  e.preventDefault()
  setRemaks(e.target.value)
}  

  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/vendors')} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
            </div>
            <h1 className={styles.heading}>Add New User</h1>
          </div>
          <div className="d-flex align-items-center">
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className="accordion_Text">
                Last Modified:
              </span>
                Balakrishna SGF001 - 28 Jan,11:34am
            </div>
            <button className={`${styles.clear_btn} ml-5 clear_btn`}>Edit</button>
          </div>
        </Card.Header>
        <AddVendor 
          setAddress={setAddress}
          setKeyContactPerson={setKeyContactPerson}
          setVendorDetail={setVendorDetail}
          vendorDetail={vendorDetail}
          keyContactPerson={keyContactPerson}
          address={address}
          bankDetails={bankDetails}
          handleSuplier={handleSuplier}
          saveDate={saveDate}
          handleUploadVendorDetails={handleUploadVendorDetails}
          handlekeyContactPersonDetail={handlekeyContactPersonDetail}
          handleSubmitKeyContactPersonDetails={handleSubmitKeyContactPersonDetails}
          handleAddressDetail={handleAddressDetail}
          handleApproval={handleApproval}
          handleSubmitAddress={handleSubmitAddress}
          handleBankDetail={handleBankDetail}
          handleCanclePersonalDetail={handleCanclePersonalDetail}
          handleCancleAddressDetail={handleCancleAddressDetail}
          handleRemaks={handleRemaks}
          remarks={remarks}
        />
      </Card>
    </div>
  );
}

export default Index;
