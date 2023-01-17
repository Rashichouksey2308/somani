import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../../utils/endpoints';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Select from 'react-select';

export default function index(props) {
  const dispatch = useDispatch();

  const customStyles = {
    control: (base) => ({
      ...base,
      width: 200,
      height: 47,
      minHeight: 45,
    }),
  };

  const [filterQuery, setFilterQuery] = useState('');
  const [companyData, setCompanyData] = useState();

  const BuyerName = companyData?.map(({ _id: { companyName } }) => ({
    label: companyName,
    value: companyName,
  }));
  const { SelectOptions, value } = props;

  const handleSelect = (e, name) => {
    SelectOptions((prev) => ({
      ...prev,
      [name]: e,
    }));
  };

  useEffect(() => {
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');

    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    const headers = {
      authorization: jwtAccessToken,
      Cache: 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      Axios.get(`${API.corebaseUrl}${API.getCompanyFilters}`, {
        headers: headers,
      }).then((response) => {
        setCompanyData(response.data.data.companies);
        if (response.data.code === 200) {
        } else {
          const toastMessage = 'Could not fetch Order Details';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Select
      styles={customStyles}
      options={BuyerName}
      onChange={(e) => handleSelect(e, 'companyName')}
      value={value?.companyName}
      isClearable
    />
  );
}
