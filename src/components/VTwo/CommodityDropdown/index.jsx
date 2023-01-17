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

  const [CommodityData, setCommodityData] = useState();

  const Commodity = CommodityData?.map(({ _id: { commodity } }) => ({
    label: commodity,
    value: commodity,
  }));

  const { SelectOptions, value } = props;

  const handleSelect = (e, name) => {
    SelectOptions((prev) => ({
      ...prev,
      [name]: e,
    }));
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      width: 200,
      height: 47,
      minHeight: 45,
    }),
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
      Axios.get(`${API.corebaseUrl}${API.getCommodityFilters}`, {
        headers: headers,
      }).then((response) => {
        setCommodityData(response.data.data.commodities);
        if (response.data.code === 200) {
        } else {
          const toastMessage = 'Could not fetch Order Details';
          if (!toast.isActive(toastMessage.toUpperCase())) {
            toast.error(toastMessage.toUpperCase(), { toastId: toastMessage });
          }
        }
      });
    } catch (error) {}
  }, []);

  return (
    <Select
      styles={customStyles}
      options={Commodity}
      onChange={(e) => handleSelect(e, 'commodity')}
      value={value?.commodity}
      isClearable
    />
  );
}
