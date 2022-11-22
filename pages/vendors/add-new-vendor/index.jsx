import React,{useEffect, useState} from 'react';
import styles from '../../add-new-user/user.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import AddVendor from '../../../src/components/AddVendor';
import { useDispatch, useSelector } from 'react-redux';
import { CreateVendor, GetVendor, UpdateVendor } from '../../../src/redux/vendor/action';
import _get from 'lodash/get';

function Index() {

  const dispatch = useDispatch();

  const [keyContactPersonInfo, setKeyContactPersonInfo] = useState([]);

  const [addressInfo, setAddressInfo] = useState([]);

  const [remarks, setRemaks] = useState('');

  const {vendorResponse} = useSelector((state) => state.Vendor)

  const vendorResponseData = _get(vendorResponse,'data[0]',{})

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

const [keyContactPerson, setKeyContactPerson] = useState([])

const [address, setAddress] = useState([])

const [bankDetails, setBankDetails] = useState({
  IFSC: '',
  Bank_Name: '',
  Branch_Address: '',
  Account_No: '',
  gstin: '',
  Swift_Code: '',
  AD_Code: '',
  Correspondent_BankName:''
})

  let Id = sessionStorage.getItem('vendorId');
 
  useEffect(() =>{
    let Id = sessionStorage.getItem('vendorId');
    if(!Id) return;
    if(Id) {
      dispatch(GetVendor(`?vendorId=${Id}`))
      setVendorDetail({
        vendor: vendorResponseData?.vendor,
        vendorType:vendorResponseData?.vendorType,
        pan_taxId: vendorResponseData?.pan_taxId,
        companyName: vendorResponseData?.companyName,
        activationDate: vendorDetail?.activationDate,
        DeactivationDate: vendorResponseData?.DeactivationDate,
        blackListedDate: vendorResponseData?.blackListedDate,
        emailId: vendorResponseData?.emailId,
        phoneNumber:vendorResponseData?.phoneNumber,
        website: vendorResponseData?.website,
        remarks: vendorResponseData?.remarks
      });

      // getting key address

      let addressArr = [];
      vendorResponseData?.keyAddresses?.forEach((element) => {
        addressArr.push(element);
      });
      setKeyAddData(addressArr);

      // getting keyContact person

      let authorisedArr = [];
      vendorResponseData?.keyContactPerson?.forEach((element) => {
        authorisedArr.push(element);
      });
      setKeyContactPerson(authorisedArr);
    }
  },[dispatch]);
  

const handleSuplier = (name, value) => {
  let newInput = {...vendorDetail}
  newInput[name] = value;
  setVendorDetail(newInput)
}

const saveDate = (value, name) => {
  const d = new Date(value);
  let text = d.toISOString();
  handleSuplier(name, text);
};

const handleUploadVendorDetails = (e) => {
  e.preventDefault()
  // setAddressInfo(vendorDetail => [...vendorDetail, vendorDetail.remarks])
}

const handlekeyContactPersonDetail = (e) => {
  let newArr = [...keyContactPerson];
  newArr.push(e);
  setKeyContactPerson(newArr);

}

const updateKeyPersonDataArr = (newData, index) => {
  setKeyContactPerson((prevState) => {
    const newState = prevState.map((obj, i) => {
      if (i == index) {
        return newData;
      }

      return obj;
    });

    return newState;
  });
};

const deleteKeyPerson = (index) => {
  setKeyContactPerson([...keyContactPerson.slice(0, index), ...keyContactPerson.slice(index + 1)]);
};

const handleSubmitKeyContactPersonDetails = (e) => {
  e.preventDefault()
  setKeyContactPersonInfo(keyContactPersonInfo => [...keyContactPersonInfo, keyContactPerson])
}

const handleAddressDetail = (e) => {
  let newArr = [...address];
  newArr.push(e);
  setAddress(newArr);
}

const updateKeyAddDataArr = (newData, index) => {
  setAddress((prevState) => {
    const newState = prevState.map((obj, i) => {
      if (i == index) {
        return newData;
      }

      return obj;
    });

    return newState;
  });
};

const deleteAddress = (index) => {
  setAddress([...address.slice(0, index), ...address.slice(index + 1)]);
};

const handleSubmitAddress = (e) => {
  e.preventDefault()
  // if(addressValidtion(address)){
    setAddressInfo(addressInfo => [...addressInfo, address])
  // }
}

const handleBankDetail = (name, value) => {
  let newInput = {...bankDetails}
  newInput[name] = value
  setBankDetails(newInput)
}

const handleApproval = () => {

  let data = {
    vendorDetails:vendorDetail,
    keyContactPerson:[...keyContactPerson],
    keyAddresses:[...address],
    bankDetails: bankDetails
  }
  let data2 = {
    vendorDetails:vendorDetail,
    keyContactPerson:[...keyContactPerson],
    keyAddresses:[...address],
    bankDetails: bankDetails,
    vendorId: vendorResponseData._id
  }
  if(Id){
    dispatch(UpdateVendor(data2))
  }else{
  
  dispatch(CreateVendor(data))
  }
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
          deleteAddress={deleteAddress}
          deleteKeyPerson={deleteKeyPerson}
          updateKeyAddDataArr={updateKeyAddDataArr}
          updateKeyPersonDataArr={updateKeyPersonDataArr}
        />
      </Card>
    </div>
  );
}

export default Index;
