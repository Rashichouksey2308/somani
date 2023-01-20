/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './index.module.scss';
import UploadDocuments from '../../../UploadDocuments';
import ProfileDetails from './ProfileDetails';
import ProfessionalDetails from './ProfessionalDetails';
import KeyAddresses from './KeyAddresses';
import { toast } from 'react-toastify';
import _ from 'lodash';
import { CreateUserMaster } from 'redux/masters/action';
import { useDispatch, useSelector } from 'react-redux';

function Index() {
  const dispatch = useDispatch();
  const [userTypeRadio, setUserTypeRadio] = useState('internal');
  const [addRow, setAddRow] = useState([
    {
      compName: '',
      branchName: '',
    },
  ]);
  const [profileDetails, setProfileDetails] = useState({
    userType: '',
    companyName: '',
    shortName: '',
    pan: '',
    dateOfIncorporation: '',
    fullName: '',
    userName: '',
    officialEmailId: '',
    password: '',
    userRole: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    communicationMode: [],
    whatsappNumber: '',
    status: false
  });

  const [professionalDetails, setProfessionalDetails] = useState({
    userRole: '',
    company: [],
    department: '',
    empId: '',
    designation: '',
    reportingManager: '',
    alternateEmailId: '',
    dateOfJoining: null,
    phoneNumber: '',
    remarks: ''
  });

  const [keyAddressData, setKeyAddressData] = useState({
    addressType: 'Registered',
    pinCode: null,
    state: '',
    city: '',
    GSTIN: null,
    address: null,
  });

  const [keyAddData, setKeyAddData] = useState([]);

  const [allDocuments, setAllDocuments] = useState([]);

  const deleteAddress = (index) => {
    setKeyAddData([...keyAddData.slice(0, index), ...keyAddData.slice(index + 1)]);
  };

  const editAddress = (index) => {
    setKeyAddressData(keyAddData[index]);
  };
  const keyAddDataArr = (keyAddressData) => {
    let newArr = [...keyAddData];
    newArr.push(keyAddressData);
    setKeyAddData(newArr);
  };
  const handleAddNewAddress = () => {
    if (addressValidtion(keyAddressData)) {
      keyAddDataArr(keyAddressData);
      setKeyAddressData({
        addressType: '',
        pinCode: null,
        state: '',
        city: '',
        GSTIN: '',
        address: '',
      });
    }
  };

  const handleKeyAddressChange = (e) => {
    setKeyAddressData({ ...keyAddressData, [e.target.name]: e.target.value, });
  }

  const addressValidtion = (data) => {
    if (data.pinCode === null || data.pinCode === '' || data.pinCode === undefined) {
      let toastMessage = 'Please add pin code';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    else if (data.address === null || data.address === '' || data.address === undefined) {
      let toastMessage = 'Please add address';
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
      }
      return false;
    }
    else {
      return true;
    }
  };

  const handleDelete = (index) => {
    setAddRow([...addRow.slice(0, index), ...addRow.slice(index + 1)]);
  };
  const onAddRow = () => {
    setAddRow([
      ...addRow,
      {
        compName: '',
        branchName: '',
      },
    ]);
  };

  const handleProfileDetailsChange = (e) => {
    if (_.has(e.target, 'checked')) {
      let _profileDetails = { ...profileDetails };
      if (_profileDetails?.communicationMode.includes(e.target.name)) {
        let index = _profileDetails?.communicationMode.indexOf(e.target.name);
        if (index > -1) {
          _profileDetails?.communicationMode.splice(index, 1);
        }
      }
      else {
        _profileDetails?.communicationMode.push(e.target.name);
      }
      setProfileDetails(_profileDetails);
    }
    else {
      setProfileDetails({
        ...profileDetails,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleProfessionalDetailsChange = (e) => {
    setProfessionalDetails({
      ...professionalDetails,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    let toastMessage = '';
    if (userTypeRadio === 'internal') {
      if (profileDetails.fullName == '' ||
        profileDetails.fullName == undefined
      ) {
        toastMessage = 'PLEASE ADD FULL NAME';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (profileDetails.officialEmailId == '' ||
        profileDetails.officialEmailId == undefined
      ) {
        toastMessage = 'PLEASE ADD EMAIL ID';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (profileDetails.password == '' ||
        profileDetails.password == undefined
      ) {
        toastMessage = 'PLEASE ADD PASSWORD';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      professionalDetailsValidation();
      return true;
    }
    if (userTypeRadio === 'external') {
      if (profileDetails.companyName == '' ||
        profileDetails.companyName == undefined
      ) {
        toastMessage = 'PLEASE ADD COMPANY NAME';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (profileDetails.pan == '' ||
        profileDetails.pan == undefined
      ) {
        toastMessage = 'PLEASE ADD PAN DETAILS';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (profileDetails.officialEmailId == '' ||
        profileDetails.officialEmailId == undefined
      ) {
        toastMessage = 'PLEASE ADD EMAIL ID';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (profileDetails.password == '' ||
        profileDetails.password == undefined
      ) {
        toastMessage = 'PLEASE ADD PASSWORD';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (profileDetails.userRole == '' ||
        profileDetails.userRole == undefined
      ) {
        toastMessage = 'PLEASE ADD USER ROLE';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (profileDetails.phoneNumber == '' ||
        profileDetails.phoneNumber == undefined
      ) {
        toastMessage = 'PLEASE ADD PHONE NUMBER';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      professionalDetailsValidation();
      return true;
    }

    function professionalDetailsValidation() {
      if (professionalDetails.userRole == '' ||
        professionalDetails.userRole == undefined
      ) {
        toastMessage = 'PLEASE ADD USER-ROLE IN PROFESSIONAL DETAILS';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (professionalDetails.department == '' ||
        professionalDetails.department == undefined
      ) {
        toastMessage = 'PLEASE ADD DEPARTMENT IN PROFESSIONAL DETAILS';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (professionalDetails.designation == '' ||
        professionalDetails.designation == undefined
      ) {
        toastMessage = 'PLEASE ADD DESIGNATIOn IN PROFESSIONAL DETAILS';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (professionalDetails.reportingManager == '' ||
        professionalDetails.reportingManager == undefined
      ) {
        toastMessage = 'PLEASE ADD REPORTING MANAGER IN PROFESSIONAL DETAILS';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      if (professionalDetails.phoneNumber == '' ||
        professionalDetails.phoneNumber == undefined
      ) {
        toastMessage = 'PLEASE ADD PHONE NUMBER IN PROFESSIONAL DETAILS';
        if (!toast.isActive(toastMessage.toUpperCase())) {
          toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          return false;
        }
      }
      return true;
    }
  }
  const handleSubmitUserDetails = async () => {
    setProfileDetails((data) => ({ ...data, userType: userTypeRadio }));
    console.log("PROFILE DETAILS---", profileDetails);
    console.log("PROFESSIONAL DETAILS---", professionalDetails);
    if (!validate()) return;

    let fd = new FormData();
    fd.append('profileDetails', JSON.stringify(profileDetails));
    fd.append('professionalDetails', JSON.stringify(professionalDetails));

    let code = await dispatch(CreateUserMaster(fd));
    if (code == 200) {
      console.log("SUCCESS--");
    }
    //Reference both/index
  }
  return (
    <div className={`${styles.backgroundMain}`}>
      <div className={`${styles.vessel_card} border_color`}>
        <ProfileDetails
          userTypeRadio={userTypeRadio}
          setUserTypeRadio={setUserTypeRadio}
          profileDetails={profileDetails}
          setProfileDetails={setProfileDetails}
          handleProfileDetailsChange={handleProfileDetailsChange}
        />

        {userTypeRadio === 'internal' && (
          <ProfessionalDetails
            addRow={addRow}
            onAddRow={onAddRow}
            handleDelete={handleDelete}
            professionalDetails={professionalDetails}
            setProfessionalDetails={setProfessionalDetails}
            handleProfessionalDetailsChange={handleProfessionalDetailsChange}
          />
        )}

        {userTypeRadio === 'external' && (
          <KeyAddresses
            keyAddressData={keyAddressData}
            setKeyAddressData={setKeyAddressData}
            keyAddData={keyAddData}
            handleAddNewAddress={handleAddNewAddress}
            editAddress={editAddress}
            deleteAddress={deleteAddress}
            handleKeyAddressChange={handleKeyAddressChange}
          />
        )}
        <UploadDocuments
          allDocuments={allDocuments}
          setAllDocuments={setAllDocuments}
        />
      </div>
      <div className={`${styles.main} vessel_card mt-4 card border_color`}>
        <div className={`${styles.dashboard_form} d-flex justify-content-end card-body`}>

          <button className={`${styles.approve} ml-3`} onClick={handleSubmitUserDetails}>
            Send for Approval
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
