import React, { useState, useEffect } from 'react';
import styles from '../add-new-user/user.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';
import InternalCompanies from '../../src/components/InternalCompanies';
import { useDispatch, useSelector } from 'react-redux';
import {
  CreateInternalCompanies,
  GetInternalCompanies,
  UpdateInternalCompanies,
} from '../../src/redux/internalCompanies/action';
import _get from 'lodash/get';

function Index() {
  const dispatch = useDispatch();

  const { internalCompanyResponse } = useSelector((state) => state.internalCompanies);
  const internalCompanyData = _get(internalCompanyResponse, 'data[0]', {});

  useEffect(() => {
    let id = sessionStorage.getItem('internalCompanyId');
    if (!id) return;
    dispatch(GetInternalCompanies(`?internalCompanyId=${id}`));
  }, [dispatch]);

  const [companyData, setCompanyData] = useState({
    Country: 'India',
    Company_Name: '',
    Short_Name: '',
    PAN: '',
    CIN_No: '',
  });

  let id = sessionStorage.getItem('internalCompanyId');

  useEffect(() => {
    // console.log(id, 'ID')
    if (id) {
      setCompanyData({
        Country: internalCompanyData?.Country,
        Company_Name: internalCompanyData?.Company_Name,
        Short_Name: internalCompanyData?.Short_Name,
        PAN: internalCompanyData?.PAN,
        CIN_No: internalCompanyData?.CIN_No,
      });

      //getting addresses
      let addressArr = [];
      internalCompanyData?.keyAddresses?.forEach((element) => {
        addressArr.push(element);
      });
      setKeyAddData(addressArr);

      // getting authorised signatory

      let authorisedArr = [];
      internalCompanyData?.authorisedSignatoryDetails?.forEach((element) => {
        authorisedArr.push(element);
      });
      setAuthorisedSignatoryDetails(authorisedArr);

      // getting bank details

      let bankArr = [];
      internalCompanyData?.keyBanks?.forEach((element) => {
        bankArr.push(element);
      });
      setBankDetails(bankArr);
    }
  }, [companyData?.Country]);

  const saveCompanyData = (name, value) => {
    let newInput = { ...companyData };
    newInput[name] = value;
    setCompanyData(newInput);
  };

  const [keyAddData, setKeyAddData] = useState([]);

  const keyAddDataArr = (keyAddressData) => {
    let newArr = [...keyAddData];
    newArr.push(keyAddressData);
    setKeyAddData(newArr);
  };

  const updateKeyAddDataArr = (newData, index) => {
    setKeyAddData((prevState) => {
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
    setKeyAddData([...keyAddData.slice(0, index), ...keyAddData.slice(index + 1)]);
  };

  const [authorisedSignatoryDetails, setAuthorisedSignatoryDetails] = useState([
    {
      name: '',
      designation: '',
      email: '',
      // phoneNo: '',
    },
  ]);

  const [bankDetails, setBankDetails] = useState([]);

  const bankDataArr = (bank) => {
    let newArr = [...bankDetails];
    newArr.push(bank);
    setBankDetails(newArr);
  };

  const updateBankDataArr = (newData, index) => {
    setBankDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return newData;
        }

        return obj;
      });

      return newState;
    });
  };

  const deleteBank = (index) => {
    setBankDetails([...bankDetails.slice(0, index), ...bankDetails.slice(index + 1)]);
  };

  const handleSubmit = () => {
    let data = {
      Country: companyData.Country,
      Company_Name: companyData.Company_Name,
      Short_Name: companyData.Short_Name,
      PAN: companyData.PAN,
      CIN_No: companyData.CIN_No,
      keyAddresses: [...keyAddData],
      authorisedSignatoryDetails: [...authorisedSignatoryDetails],
      keyBanks: [...bankDetails],
    };
    let data2 = {
      Country: companyData.Country,
      Company_Name: companyData.Company_Name,
      Short_Name: companyData.Short_Name,
      PAN: companyData.PAN,
      CIN_No: companyData.CIN_No,
      keyAddresses: [...keyAddData],
      authorisedSignatoryDetails: [...authorisedSignatoryDetails],
      keyBanks: [...bankDetails],
      internalCompanyId: internalCompanyData._id,
    };
    if (id) {
      dispatch(UpdateInternalCompanies(data2));
    } else {
      dispatch(CreateInternalCompanies(data));
    }
  };

  return (
    <div className="container-fluid p-0 border-0">
      <Card className={`${styles.card}`}>
        <Card.Header className={`${styles.head_container}  d-flex justify-content-between  border-0 p-0`}>
          <div className={`${styles.head_header} align-items-center`}>
            <div onClick={() => Router.push('/internal-companies')} style={{ cursor: 'pointer' }}>
              <img
                className={`${styles.arrow} img-fluid image_arrow mr-2`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
            </div>
            <h1 className={styles.heading}>Internal Companies</h1>
          </div>
          <div className="d-flex align-items-center">
            <div className={`${styles.lastModified} text `}>
              <span style={{ marginRight: '7px' }} className="accordion_Text">
                Last Modified:
              </span>
              Balakrishna SGF001 - 28 Jan,11:34am
            </div>
          </div>
        </Card.Header>
        <InternalCompanies
          Id={id}
          keyAddDataArr={keyAddDataArr}
          updateKeyAddDataArr={updateKeyAddDataArr}
          deleteAddress={deleteAddress}
          keyAddData={keyAddData}
          saveCompanyData={saveCompanyData}
          companyData={companyData}
          handleSubmit={handleSubmit}
          bankDataArr={bankDataArr}
          bankDetails={bankDetails}
          deleteBank={deleteBank}
          updateBankDataArr={updateBankDataArr}
          authorisedSignatoryDetails={authorisedSignatoryDetails}
          setAuthorisedSignatoryDetails={setAuthorisedSignatoryDetails}
        />
      </Card>
    </div>
  );
}

export default Index;
